/**
 * gen-icons.mjs
 * Génère public/icons/icon-192.png et icon-512.png
 * Utilise uniquement les modules Node.js natifs (zlib, fs).
 * Lancez avec : node scripts/gen-icons.mjs
 */

import { deflateSync } from 'zlib';
import { writeFileSync, mkdirSync } from 'fs';

// ── CRC32 (nécessaire pour le format PNG) ────────────────────────────────
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (const b of buf) crc = crcTable[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

// ── Construction d'un chunk PNG ──────────────────────────────────────────
function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const d = Buffer.isBuffer(data) ? data : Buffer.from(data);
  const len = Buffer.alloc(4); len.writeUInt32BE(d.length);
  const crcVal = Buffer.alloc(4); crcVal.writeUInt32BE(crc32(Buffer.concat([t, d])));
  return Buffer.concat([len, t, d, crcVal]);
}

// ── Génération d'un PNG RGB carré ────────────────────────────────────────
function makePNG(size) {
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); // width
  ihdr.writeUInt32BE(size, 4); // height
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  // compression=0, filter=0, interlace=0 (default 0)

  // Dessin : cercle doré sur fond brun foncé + bille argentée
  const cx = size / 2, cy = size / 2;
  const outerR  = size * 0.46;
  const ringW   = size * 0.07;
  const innerR  = outerR - ringW;
  const ballCX  = size * 0.68, ballCY = size * 0.32, ballR = size * 0.13;

  const scanlines = [];
  for (let y = 0; y < size; y++) {
    const row = [0]; // filter byte = None
    for (let x = 0; x < size; x++) {
      const dist     = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const ballDist = Math.sqrt((x - ballCX) ** 2 + (y - ballCY) ** 2);
      let r, g, b;

      if (ballDist < ballR) {
        // Bille métal
        const t = ballDist / ballR;
        r = Math.round(255 - t * 170);
        g = Math.round(255 - t * 170);
        b = Math.round(255 - t * 170);
      } else if (dist < innerR) {
        // Intérieur sombre (surface du jeu)
        r = 0x22; g = 0x10; b = 0x05;
      } else if (dist < outerR) {
        // Anneau doré
        const t = (dist - innerR) / ringW;
        // gold → dark
        r = Math.round(0xC4 + t * (0x6B - 0xC4));
        g = Math.round(0x9A + t * (0x2E - 0x9A));
        b = Math.round(0x6C + t * (0x10 - 0x6C));
      } else {
        // Fond
        r = 0x13; g = 0x09; b = 0x02;
      }
      row.push(Math.max(0, Math.min(255, r)),
               Math.max(0, Math.min(255, g)),
               Math.max(0, Math.min(255, b)));
    }
    scanlines.push(Buffer.from(row));
  }

  const raw        = Buffer.concat(scanlines);
  const compressed = deflateSync(raw, { level: 9 });

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]); // PNG signature

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Écriture des fichiers ────────────────────────────────────────────────
mkdirSync('public/icons', { recursive: true });
writeFileSync('public/icons/icon-192.png', makePNG(192));
writeFileSync('public/icons/icon-512.png', makePNG(512));
console.log('✓ Icons générées : public/icons/icon-192.png & icon-512.png');
