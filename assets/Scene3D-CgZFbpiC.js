var Ym=Object.defineProperty;var Zm=(s,e,t)=>e in s?Ym(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var vt=(s,e,t)=>Zm(s,typeof e!="symbol"?e+"":e,t);import{l as gd,C as nn,P as Nn,H as An,s as On,K as Jm,S as zn,y as kn,G as Vn,k as ai,M as $,L as B,O as oi,u as li,w as ci,h as Ei,m as De,A as Ue,j as Ne,n as Se,x as ft,g as dt,z as we,a as Km,o as _d,d as vd,D as Xr,f as zs,v as Bc,I as Je,p as wt,i as ks,c as Ai,r as oo,F as jm,e as Wl,b as Xl,J as Qm,t as eg,q as kt,N as Qn,E as ei,B as xd}from"./index-BVMUvdeb.js";function yd(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const a=s[r],o=e[r];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);s[r]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Md(s){return typeof s=="object"&&s!==null?s:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="160",tg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ng={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,ql=1,Sd=2,ig=3,sg=0,zc=1,$r=2,Pn=3,Fn=0,jt=1,Ln=2,rg=2,In=0,es=1,lo=2,$l=3,Yl=4,wd=5,bi=100,Td=101,Ed=102,Zl=103,Jl=104,Ad=200,Cd=201,Rd=202,Pd=203,co=204,ho=205,Ld=206,Id=207,Dd=208,Ud=209,Nd=210,Od=211,Fd=212,Bd=213,zd=214,kd=0,Vd=1,Hd=2,Sr=3,Gd=4,Wd=5,Xd=6,qd=7,Yr=0,$d=1,Yd=2,ti=0,kc=1,Vc=2,Hc=3,_o=4,Zd=5,Gc=6,Kl="attached",Jd="detached",vo=300,si=301,Ci=302,Vs=303,wr=304,Zs=306,Tr=1e3,qt=1001,Er=1002,Pt=1003,uo=1004,ag=1004,vr=1005,og=1005,pt=1006,Wc=1007,lg=1007,Ri=1008,cg=1008,ni=1009,Kd=1010,jd=1011,xo=1012,Xc=1013,Kn=1014,Tn=1015,Dn=1016,qc=1017,$c=1018,Si=1020,Qd=1021,on=1023,ep=1024,tp=1025,wi=1026,is=1027,np=1028,Yc=1029,ip=1030,Zc=1031,Jc=1033,eo=33776,to=33777,no=33778,io=33779,jl=35840,Ql=35841,ec=35842,tc=35843,Kc=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,so=36492,vc=36494,xc=36495,sp=36283,yc=36284,Mc=36285,bc=36286,rp=2200,ap=2201,op=2202,Ar=2300,Cr=2301,ro=2302,Zi=2400,Ji=2401,Rr=2402,yo=2500,jc=2501,hg=0,ug=1,fg=2,Qc=3e3,Ti=3001,lp=3200,cp=3201,Li=0,hp=1,mn="",Mt="srgb",Bn="srgb-linear",Mo="display-p3",Zr="display-p3-linear",Pr="linear",_t="srgb",Lr="rec709",Ir="p3",dg=0,qi=7680,pg=7681,mg=7682,gg=7683,_g=34055,vg=34056,xg=5386,yg=512,Mg=513,bg=514,Sg=515,wg=516,Tg=517,Eg=518,Sc=519,up=512,fp=513,dp=514,eh=515,pp=516,mp=517,gp=518,_p=519,Dr=35044,wc=35048,Ag=35040,Cg=35045,Rg=35049,Pg=35041,Lg=35046,Ig=35050,Dg=35042,Ug="100",Tc="300 es",fo=1035,En=2e3,Hs=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const ts=Math.PI/180,Gs=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function th(s,e){return(s%e+e)%e}function Ng(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Og(s,e,t){return s!==e?(t-s)/(e-s):0}function xr(s,e,t){return(1-t)*s+t*e}function Fg(s,e,t,n){return xr(s,e,1-Math.exp(-t*n))}function Bg(s,e=1){return e-Math.abs(th(s,e*2)-e)}function zg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function kg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hg(s,e){return s+Math.random()*(e-s)}function Gg(s){return s*(.5-Math.random())}function Wg(s){s!==void 0&&(Vh=s);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xg(s){return s*ts}function qg(s){return s*Gs}function Ec(s){return(s&s-1)===0&&s!==0}function $g(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zg={DEG2RAD:ts,RAD2DEG:Gs,generateUUID:gn,clamp:At,euclideanModulo:th,mapLinear:Ng,inverseLerp:Og,lerp:xr,damp:Fg,pingpong:Bg,smoothstep:zg,smootherstep:kg,randInt:Vg,randFloat:Hg,randFloatSpread:Gg,seededRandom:Wg,degToRad:Xg,radToDeg:qg,isPowerOfTwo:Ec,ceilPowerOfTwo:$g,floorPowerOfTwo:po,setQuaternionFromProperEuler:Yg,normalize:et,denormalize:ln};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],v=i[4],S=i[7],x=i[2],M=i[5],E=i[8];return r[0]=a*_+o*y+l*x,r[3]=a*p+o*v+l*M,r[6]=a*g+o*S+l*E,r[1]=c*_+h*y+u*x,r[4]=c*p+h*v+u*M,r[7]=c*g+h*S+u*E,r[2]=f*_+d*y+m*x,r[5]=f*p+d*v+m*M,r[8]=f*g+d*S+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new tt;function vp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Jg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ds(s,e){return new Jg[s](e)}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xp(){const s=Ur("canvas");return s.style.display="block",s}const Hh={};function yr(s){s in Hh||(Hh[s]=!0,console.warn(s))}const Gh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Bn]:{transfer:Pr,primaries:Lr,toReference:s=>s,fromReference:s=>s},[Mt]:{transfer:_t,primaries:Lr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zr]:{transfer:Pr,primaries:Ir,toReference:s=>s.applyMatrix3(Wh),fromReference:s=>s.applyMatrix3(Gh)},[Mo]:{transfer:_t,primaries:Ir,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Wh),fromReference:s=>s.applyMatrix3(Gh).convertLinearToSRGB()}},Kg=new Set([Bn,Zr]),ut={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Kg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ra[e].toReference,i=ra[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ra[s].primaries},getTransfer:function(s){return s===mn?Pr:ra[s].transfer}};function Bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=Ur("canvas")),fs.width=e.width,fs.height=e.height;const n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jg=0;class Ki{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(il(i[a].image)):r.push(il(i[a]))}else r=il(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function il(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qg=0;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=qt,i=qt,r=pt,a=Ri,o=on,l=ni,c=It.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=gn(),this.name="",this.source=new Ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ti?Mt:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Ti:Qc}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?Mt:mn}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=vo;It.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,x=(g+1)/2,M=(h+f)/4,E=(u+_)/4,D=(m+p)/4;return v>S&&v>x?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=M/n,r=E/n):S>x?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=M/i,r=D/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=E/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?Mt:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ki(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bo extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e_ extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new bo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ih extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t_ extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ih(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class n_ extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let p=1-o;const g=l*f+c*d+h*m+u*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const x=Math.sqrt(v),M=Math.atan2(x,g*y);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x}const S=o*y;if(l=l*p+f*S,c=c*p+d*S,h=h*p+m*S,u=u*p+_*S,p===1-o){const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-o*d,e[t+2]=c*m+h*d+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new R,Xh=new en;class tn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),oa.subVectors(this.max,sr),ds.subVectors(e.a,sr),ps.subVectors(e.b,sr),ms.subVectors(e.c,sr),fi.subVectors(ps,ds),di.subVectors(ms,ps),Oi.subVectors(ds,ms);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Oi.z,Oi.y,fi.z,0,-fi.x,di.z,0,-di.x,Oi.z,0,-Oi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Oi.y,Oi.x,0];return!rl(t,ds,ps,ms,oa)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ds,ps,ms,oa))?!1:(la.crossVectors(fi,di),t=[la.x,la.y,la.z],rl(t,ds,ps,ms,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,aa=new tn,ds=new R,ps=new R,ms=new R,fi=new R,di=new R,Oi=new R,sr=new R,oa=new R,la=new R,Fi=new R;function rl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fi.fromArray(s,r);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const i_=new tn,rr=new R,al=new R;class Yt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):i_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(al)),this.expandByPoint(rr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new R,ol=new R,ca=new R,pi=new R,ll=new R,ha=new R,cl=new R;class Js{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ol);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=pi.dot(this.direction),l=-pi.dot(ca),c=pi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ol).addScaledVector(ca,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){ll.subVectors(t,e),ha.subVectors(n,e),cl.crossVectors(ll,ha);let a=this.direction.dot(cl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(pi,ha));if(l<0)return null;const c=o*this.direction.dot(ll.cross(pi));if(c<0||l+c>a)return null;const h=-o*pi.dot(cl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,p){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,p)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,r_)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),mi.crossVectors(n,fn),mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),mi.crossVectors(n,fn)),mi.normalize(),ua.crossVectors(fn,mi),i[0]=mi.x,i[4]=ua.x,i[8]=fn.x,i[1]=mi.y,i[5]=ua.y,i[9]=fn.y,i[2]=mi.z,i[6]=ua.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],v=n[7],S=n[11],x=n[15],M=i[0],E=i[4],D=i[8],b=i[12],T=i[1],U=i[5],X=i[9],re=i[13],I=i[2],F=i[6],z=i[10],te=i[14],Q=i[3],Y=i[7],ae=i[11],ce=i[15];return r[0]=a*M+o*T+l*I+c*Q,r[4]=a*E+o*U+l*F+c*Y,r[8]=a*D+o*X+l*z+c*ae,r[12]=a*b+o*re+l*te+c*ce,r[1]=h*M+u*T+f*I+d*Q,r[5]=h*E+u*U+f*F+d*Y,r[9]=h*D+u*X+f*z+d*ae,r[13]=h*b+u*re+f*te+d*ce,r[2]=m*M+_*T+p*I+g*Q,r[6]=m*E+_*U+p*F+g*Y,r[10]=m*D+_*X+p*z+g*ae,r[14]=m*b+_*re+p*te+g*ce,r[3]=y*M+v*T+S*I+x*Q,r[7]=y*E+v*U+S*F+x*Y,r[11]=y*D+v*X+S*z+x*ae,r[15]=y*b+v*re+S*te+x*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+p*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=u*p*c-_*f*c+_*l*d-o*p*d-u*l*g+o*f*g,v=m*f*c-h*p*c-m*l*d+a*p*d+h*l*g-a*f*g,S=h*_*c-m*u*c+m*o*d-a*_*d-h*o*g+a*u*g,x=m*u*l-h*_*l-m*o*f+a*_*f+h*o*p-a*u*p,M=t*y+n*v+i*S+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=y*E,e[1]=(_*f*r-u*p*r-_*i*d+n*p*d+u*i*g-n*f*g)*E,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*g+n*l*g)*E,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=v*E,e[5]=(h*p*r-m*f*r+m*i*d-t*p*d-h*i*g+t*f*g)*E,e[6]=(m*l*r-a*p*r-m*i*c+t*p*c+a*i*g-t*l*g)*E,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=S*E,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*g-t*u*g)*E,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*g+t*o*g)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*E,e[12]=x*E,e[13]=(h*_*i-m*u*i+m*n*f-t*_*f-h*n*p+t*u*p)*E,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*p-t*o*p)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,_=a*h,p=a*u,g=o*u,y=l*c,v=l*h,S=l*u,x=n.x,M=n.y,E=n.z;return i[0]=(1-(_+g))*x,i[1]=(d+S)*x,i[2]=(m-v)*x,i[3]=0,i[4]=(d-S)*M,i[5]=(1-(f+g))*M,i[6]=(p+y)*M,i[7]=0,i[8]=(m+v)*E,i[9]=(p-y)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/r,h=1/a,u=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=En){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(o===En)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Hs)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=En){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let m,_;if(o===En)m=(a+r)*u,_=-2*u;else if(o===Hs)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new R,yn=new Ve,s_=new R(0,0,0),r_=new R(1,1,1),mi=new R,ua=new R,fn=new R,qh=new Ve,$h=new en;class Jr{constructor(e=0,t=0,n=0,i=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a_=0;const Yh=new R,_s=new en,qn=new Ve,fa=new R,ar=new R,o_=new R,l_=new en,Zh=new R(1,0,0),Jh=new R(0,1,0),Kh=new R(0,0,1),c_={type:"added"},h_={type:"removed"};class ot extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new R,t=new Jr,n=new en,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new tt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ar,fa,this.up):qn.lookAt(fa,ar,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(qn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(c_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,o_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new R(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new R,$n=new R,hl=new R,Yn=new R,vs=new R,xs=new R,jh=new R,ul=new R,fl=new R,dl=new R;let da=!1;class an{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mn.subVectors(i,t),$n.subVectors(n,t),hl.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot($n),l=Mn.dot(hl),c=$n.dot($n),h=$n.dot(hl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,r,a,o,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),$n.subVectors(e,t),Mn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Mn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;vs.subVectors(i,n),xs.subVectors(r,n),ul.subVectors(e,n);const l=vs.dot(ul),c=xs.dot(ul);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,i);const h=vs.dot(fl),u=xs.dot(fl);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(vs,a);dl.subVectors(e,r);const d=vs.dot(dl),m=xs.dot(dl);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(xs,o);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return jh.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(jh,o);const g=1/(p+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(vs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function pl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=th(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return ut.fromWorkingColorSpace(Wt.copy(this),e),Math.round(At(Wt.r*255,0,255))*65536+Math.round(At(Wt.g*255,0,255))*256+Math.round(At(Wt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Mt){ut.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(pa);const n=xr(gi.h,pa.h,t),i=xr(gi.s,pa.s,t),r=xr(gi.l,pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new xe;xe.NAMES=Mp;let u_=0;class Zt extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=es,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=ho,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jn=f_();function f_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function rn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=At(s,-65504,65504),Jn.floatView[0]=s;const e=Jn.uint32View[0],t=e>>23&511;return Jn.baseTable[t]+((e&8388607)>>Jn.shiftTable[t])}function _r(s){const e=s>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[e]+(s&1023)]+Jn.exponentTable[e],Jn.floatView[0]}const d_={toHalfFloat:rn,fromHalfFloat:_r},Nt=new R,ma=new J;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dr&&(e.usage=this.usage),e}}class p_ extends gt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class m_ extends gt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class g_ extends gt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class __ extends gt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class sh extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class v_ extends gt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class rh extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class x_ extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=_r(this.array[e*this.itemSize]);return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=rn(t),this}getY(e){let t=_r(this.array[e*this.itemSize+1]);return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=rn(t),this}getZ(e){let t=_r(this.array[e*this.itemSize+2]);return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=rn(t),this}getW(e){let t=_r(this.array[e*this.itemSize+3]);return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this.array[e+3]=rn(r),this}}class Re extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}class y_ extends gt{constructor(e,t,n){super(new Float64Array(e),t,n)}}let M_=0;const vn=new Ve,ml=new ot,ys=new R,dn=new tn,or=new tn,zt=new R;class je extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?rh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(dn.min,or.min),dn.expandByPoint(zt),zt.addVectors(dn.max,or.max),dn.expandByPoint(zt)):(dn.expandByPoint(or.min),dn.expandByPoint(or.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),zt.add(ys)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new R,h[T]=new R;const u=new R,f=new R,d=new R,m=new J,_=new J,p=new J,g=new R,y=new R;function v(T,U,X){u.fromArray(i,T*3),f.fromArray(i,U*3),d.fromArray(i,X*3),m.fromArray(a,T*2),_.fromArray(a,U*2),p.fromArray(a,X*2),f.sub(u),d.sub(u),_.sub(m),p.sub(m);const re=1/(_.x*p.y-p.x*_.y);isFinite(re)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(re),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(re),c[T].add(g),c[U].add(g),c[X].add(g),h[T].add(y),h[U].add(y),h[X].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,U=S.length;T<U;++T){const X=S[T],re=X.start,I=X.count;for(let F=re,z=re+I;F<z;F+=3)v(n[F+0],n[F+1],n[F+2])}const x=new R,M=new R,E=new R,D=new R;function b(T){E.fromArray(r,T*3),D.copy(E);const U=c[T];x.copy(U),x.sub(E.multiplyScalar(E.dot(U))).normalize(),M.crossVectors(D,U);const re=M.dot(h[T])<0?-1:1;l[T*4]=x.x,l[T*4+1]=x.y,l[T*4+2]=x.z,l[T*4+3]=re}for(let T=0,U=S.length;T<U;++T){const X=S[T],re=X.start,I=X.count;for(let F=re,z=re+I;F<z;F+=3)b(n[F+0]),b(n[F+1]),b(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Ve,Bi=new Js,ga=new Yt,eu=new R,Ms=new R,bs=new R,Ss=new R,gl=new R,_a=new R,va=new J,xa=new J,ya=new J,tu=new R,nu=new R,iu=new R,Ma=new R,ba=new R;class Lt extends ot{constructor(e=new je,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(gl.fromBufferAttribute(u,e),a?_a.addScaledVector(gl,h):_a.addScaledVector(gl.sub(t),h))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(ga.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ga,eu)===null||Bi.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,x=v;S<x;S+=3){const M=o.getX(S),E=o.getX(S+1),D=o.getX(S+2);i=Sa(this,g,e,n,c,h,u,M,E,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);i=Sa(this,a,e,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,x=v;S<x;S+=3){const M=S,E=S+1,D=S+2;i=Sa(this,g,e,n,c,h,u,M,E,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const y=p,v=p+1,S=p+2;i=Sa(this,a,e,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function b_(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fn,o),l===null)return null;ba.copy(o),ba.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:s}}function Sa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ms),s.getVertexPosition(l,bs),s.getVertexPosition(c,Ss);const h=b_(s,e,t,n,Ms,bs,Ss,Ma);if(h){i&&(va.fromBufferAttribute(i,o),xa.fromBufferAttribute(i,l),ya.fromBufferAttribute(i,c),h.uv=an.getInterpolation(Ma,Ms,bs,Ss,va,xa,ya,new J)),r&&(va.fromBufferAttribute(r,o),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),h.uv1=an.getInterpolation(Ma,Ms,bs,Ss,va,xa,ya,new J),h.uv2=h.uv1),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,l),iu.fromBufferAttribute(a,c),h.normal=an.getInterpolation(Ma,Ms,bs,Ss,tu,nu,iu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};an.getNormal(Ms,bs,Ss,u.normal),h.face=u}return h}class os extends je{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function m(_,p,g,y,v,S,x,M,E,D,b){const T=S/E,U=x/D,X=S/2,re=x/2,I=M/2,F=E+1,z=D+1;let te=0,Q=0;const Y=new R;for(let ae=0;ae<z;ae++){const ce=ae*U-re;for(let ye=0;ye<F;ye++){const W=ye*T-X;Y[_]=W*y,Y[p]=ce*v,Y[g]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ye/E),u.push(1-ae/D),te+=1}}for(let ae=0;ae<D;ae++)for(let ce=0;ce<E;ce++){const ye=f+ce+F*ae,W=f+ce+F*(ae+1),oe=f+(ce+1)+F*(ae+1),Me=f+(ce+1)+F*ae;l.push(ye,W,Me),l.push(W,oe,Me),Q+=6}o.addGroup(d,Q,b),d+=Q,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=Ws(s[t]);for(const i in n)e[i]=n[i]}return e}function S_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bp(s){return s.getRenderTarget()===null?s.outputColorSpace:ut.workingColorSpace}const Xs={clone:Ws,merge:Kt};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wo extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Ts=1;class Sp extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(ws,Ts,e,t);i.layers=this.layers,this.add(i);const r=new Vt(ws,Ts,e,t);r.layers=this.layers,this.add(r);const a=new Vt(ws,Ts,e,t);a.layers=this.layers,this.add(a);const o=new Vt(ws,Ts,e,t);o.layers=this.layers,this.add(o);const l=new Vt(ws,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Vt(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kr extends It{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?Mt:mn),this.texture=new Kr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new os(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:In});r.uniforms.tEquirect.value=t;const a=new Lt(i,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=pt),new Sp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const _l=new R,E_=new R,A_=new tt;class xi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(E_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||A_.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Yt,wa=new R;class jr{constructor(e=new xi,t=new xi,n=new xi,i=new xi,r=new xi,a=new xi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],p=i[11],g=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,p-d,S-g).normalize(),n[1].setComponents(l+r,f+c,p+d,S+g).normalize(),n[2].setComponents(l+a,f+h,p+m,S+y).normalize(),n[3].setComponents(l-a,f-h,p-m,S-y).normalize(),n[4].setComponents(l-o,f-u,p-_,S-v).normalize(),t===En)n[5].setComponents(l+o,f+u,p+_,S+v).normalize();else if(t===Hs)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wa.x=i.normal.x>0?e.max.x:e.min.x,wa.y=i.normal.y>0?e.max.y:e.min.y,wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function C_(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){const f=h.array,d=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&m.length===0&&s.bufferSubData(u,0,f),m.length!==0){for(let _=0,p=m.length;_<p;_++){const g=m[_];t?s.bufferSubData(u,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):s.bufferSubData(u,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Qr extends je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const y=g*f-a;for(let v=0;v<c;v++){const S=v*u-r;m.push(S,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const v=y+c*g,S=y+c*(g+1),x=y+1+c*(g+1),M=y+1+c*g;d.push(v,S,M),d.push(S,x,M)}this.setIndex(d),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,j_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ov=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$v=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:R_,alphahash_pars_fragment:P_,alphamap_fragment:L_,alphamap_pars_fragment:I_,alphatest_fragment:D_,alphatest_pars_fragment:U_,aomap_fragment:N_,aomap_pars_fragment:O_,batching_pars_vertex:F_,batching_vertex:B_,begin_vertex:z_,beginnormal_vertex:k_,bsdfs:V_,iridescence_fragment:H_,bumpmap_pars_fragment:G_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:X_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:$_,color_fragment:Y_,color_pars_fragment:Z_,color_pars_vertex:J_,color_vertex:K_,common:j_,cube_uv_reflection_fragment:Q_,defaultnormal_vertex:e0,displacementmap_pars_vertex:t0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:o0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:b0,envmap_vertex:u0,fog_vertex:f0,fog_pars_vertex:d0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_fragment:_0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:S0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:R0,lights_fragment_maps:P0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:N0,map_fragment:O0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:V0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:$0,normal_pars_fragment:Y0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:sv,project_vertex:rv,dithering_fragment:av,dithering_pars_fragment:ov,roughnessmap_fragment:lv,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:uv,shadowmap_vertex:fv,shadowmask_pars_fragment:dv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:_v,specularmap_fragment:vv,specularmap_pars_fragment:xv,tonemapping_fragment:yv,tonemapping_pars_fragment:Mv,transmission_fragment:bv,transmission_pars_fragment:Sv,uv_pars_fragment:wv,uv_pars_vertex:Tv,uv_vertex:Ev,worldpos_vertex:Av,background_vert:Cv,background_frag:Rv,backgroundCube_vert:Pv,backgroundCube_frag:Lv,cube_vert:Iv,cube_frag:Dv,depth_vert:Uv,depth_frag:Nv,distanceRGBA_vert:Ov,distanceRGBA_frag:Fv,equirect_vert:Bv,equirect_frag:zv,linedashed_vert:kv,linedashed_frag:Vv,meshbasic_vert:Hv,meshbasic_frag:Gv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:$v,meshnormal_vert:Yv,meshnormal_frag:Zv,meshphong_vert:Jv,meshphong_frag:Kv,meshphysical_vert:jv,meshphysical_frag:Qv,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ax,sprite_frag:ox},ge={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},wn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};wn.physical={uniforms:Kt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ta={r:0,b:0,g:0};function lx(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(p,g){let y=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zs)?(h===void 0&&(h=new Lt(new os(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ws(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Lt(new Qr(2,2),new $t({name:"BackgroundMaterial",uniforms:Ws(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,g){p.getRGB(Ta,bp(s)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(p,g=1){o.set(p),l=g,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:m}}function cx(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function u(I,F,z,te,Q){let Y=!1;if(a){const ae=_(te,z,F);c!==ae&&(c=ae,d(c.object)),Y=g(I,te,z,Q),Y&&y(I,te,z,Q)}else{const ae=F.wireframe===!0;(c.geometry!==te.id||c.program!==z.id||c.wireframe!==ae)&&(c.geometry=te.id,c.program=z.id,c.wireframe=ae,Y=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,D(I,F,z,te),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,F,z){const te=z.wireframe===!0;let Q=o[I.id];Q===void 0&&(Q={},o[I.id]=Q);let Y=Q[F.id];Y===void 0&&(Y={},Q[F.id]=Y);let ae=Y[te];return ae===void 0&&(ae=p(f()),Y[te]=ae),ae}function p(I){const F=[],z=[],te=[];for(let Q=0;Q<i;Q++)F[Q]=0,z[Q]=0,te[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:te,object:I,attributes:{},index:null}}function g(I,F,z,te){const Q=c.attributes,Y=F.attributes;let ae=0;const ce=z.getAttributes();for(const ye in ce)if(ce[ye].location>=0){const oe=Q[ye];let Me=Y[ye];if(Me===void 0&&(ye==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),ye==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),oe===void 0||oe.attribute!==Me||Me&&oe.data!==Me.data)return!0;ae++}return c.attributesNum!==ae||c.index!==te}function y(I,F,z,te){const Q={},Y=F.attributes;let ae=0;const ce=z.getAttributes();for(const ye in ce)if(ce[ye].location>=0){let oe=Y[ye];oe===void 0&&(ye==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ye==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const Me={};Me.attribute=oe,oe&&oe.data&&(Me.data=oe.data),Q[ye]=Me,ae++}c.attributes=Q,c.attributesNum=ae,c.index=te}function v(){const I=c.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function S(I){x(I,0)}function x(I,F){const z=c.newAttributes,te=c.enabledAttributes,Q=c.attributeDivisors;z[I]=1,te[I]===0&&(s.enableVertexAttribArray(I),te[I]=1),Q[I]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),Q[I]=F)}function M(){const I=c.newAttributes,F=c.enabledAttributes;for(let z=0,te=F.length;z<te;z++)F[z]!==I[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function E(I,F,z,te,Q,Y,ae){ae===!0?s.vertexAttribIPointer(I,F,z,Q,Y):s.vertexAttribPointer(I,F,z,te,Q,Y)}function D(I,F,z,te){if(n.isWebGL2===!1&&(I.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Q=te.attributes,Y=z.getAttributes(),ae=F.defaultAttributeValues;for(const ce in Y){const ye=Y[ce];if(ye.location>=0){let W=Q[ce];if(W===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const oe=W.normalized,Me=W.itemSize,Ae=t.get(W);if(Ae===void 0)continue;const Te=Ae.buffer,We=Ae.type,$e=Ae.bytesPerElement,Pe=n.isWebGL2===!0&&(We===s.INT||We===s.UNSIGNED_INT||W.gpuType===Xc);if(W.isInterleavedBufferAttribute){const He=W.data,L=He.stride,fe=W.offset;if(He.isInstancedInterleavedBuffer){for(let j=0;j<ye.locationSize;j++)x(ye.location+j,He.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let j=0;j<ye.locationSize;j++)S(ye.location+j);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let j=0;j<ye.locationSize;j++)E(ye.location+j,Me/ye.locationSize,We,oe,L*$e,(fe+Me/ye.locationSize*j)*$e,Pe)}else{if(W.isInstancedBufferAttribute){for(let He=0;He<ye.locationSize;He++)x(ye.location+He,W.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let He=0;He<ye.locationSize;He++)S(ye.location+He);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let He=0;He<ye.locationSize;He++)E(ye.location+He,Me/ye.locationSize,We,oe,Me*$e,Me/ye.locationSize*He*$e,Pe)}}else if(ae!==void 0){const oe=ae[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(ye.location,oe);break;case 3:s.vertexAttrib3fv(ye.location,oe);break;case 4:s.vertexAttrib4fv(ye.location,oe);break;default:s.vertexAttrib1fv(ye.location,oe)}}}}M()}function b(){X();for(const I in o){const F=o[I];for(const z in F){const te=F[z];for(const Q in te)m(te[Q].object),delete te[Q];delete F[z]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const z in F){const te=F[z];for(const Q in te)m(te[Q].object),delete te[Q];delete F[z]}delete o[I.id]}function U(I){for(const F in o){const z=o[F];if(z[I.id]===void 0)continue;const te=z[I.id];for(const Q in te)m(te[Q].object),delete te[Q];delete z[I.id]}}function X(){re(),h=!0,c!==l&&(c=l,d(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:re,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:S,disableUnusedAttributes:M}}function hx(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(h[m],u[m]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ux(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),x=v&&S,M=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:M}}function fx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new xi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let S=g.clippingState||null;l.value=S,S=h(m,f,v,d);for(let x=0;x!==v;++x)S[x]=t[x];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=d;v!==_;++v,S+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function dx(s){let e=new WeakMap;function t(a,o){return o===Vs?a.mapping=si:o===wr&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vs||o===wr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ks extends wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,su=[.125,.215,.35,.446,.526,.582],Yi=20,vl=new Ks,ru=new xe;let xl=null,yl=0,Ml=0;const $i=(1+Math.sqrt(5))/2,Es=1/$i,au=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,$i,Es),new R(0,$i,-Es),new R(Es,0,$i),new R(-Es,0,$i),new R($i,Es,0),new R(-$i,Es,0)];class mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,Ml),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Dn,format:on,colorSpace:Bn,depthBuffer:!1},i=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(r)),this._blurMaterial=mx(r,e,t)}return i}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,i){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ru),h.toneMapping=ti,h.autoClear=!1;const d=new ui({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new Lt(new os,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(ru),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const v=this._cubeSize;Ea(i,y*v,g>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=au[(i-1)%au.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Lt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):Yi;p>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const g=[];let y=0;for(let E=0;E<Yi;++E){const D=E/_,b=Math.exp(-D*D/2);g.push(b),E===0?y+=b:E<p&&(y+=2*b)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const S=this._sizeLods[i],x=3*S*(i>v-Us?i-v+Us:0),M=4*(this._cubeSize-S);Ea(t,x,M,3*S,2*S),l.setRenderTarget(t),l.render(u,vl)}}function px(s){const e=[],t=[],n=[];let i=s;const r=s-Us+1+su.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Us?l=su[a-s+Us-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*d),v=new Float32Array(p*m*d),S=new Float32Array(g*m*d);for(let M=0;M<d;M++){const E=M%3*2/3-1,D=M>2?0:-1,b=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];y.set(b,_*m*M),v.set(f,p*m*M);const T=[M,M,M,M,M,M];S.set(T,g*m*M)}const x=new je;x.setAttribute("position",new gt(y,_)),x.setAttribute("uv",new gt(v,p)),x.setAttribute("faceIndex",new gt(S,g)),e.push(x),i>Us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(s,e,t){const n=new Qt(s,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function mx(s,e,t){const n=new Float32Array(Yi),i=new R(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function lu(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function cu(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vs||l===wr,h=l===si||l===Ci;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new mo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new mo(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _x(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vx(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let p=0,g=_.length;p<g;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,S=y.length;v<S;v+=3){const x=y[v+0],M=y[v+1],E=y[v+2];f.push(x,M,M,E,E,x)}}else if(m!==void 0){const y=m.array;_=m.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const x=v+0,M=v+1,E=v+2;f.push(x,M,M,E,E,x)}}else return;const p=new(vp(f)?rh:sh)(f,1);p.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function xx(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){s.drawElements(r,m,o,d*l),t.update(m,r,1)}function u(d,m,_){if(_===0)return;let p,g;if(i)p=s,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,m,o,d*l,_),t.update(m,r,_)}function f(d,m,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<_;g++)this.render(d[g]/l,m[g]);else{p.multiDrawElementsWEBGL(r,m,0,o,d,0,_);let g=0;for(let y=0;y<_;y++)g+=m[y];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function yx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mx(s,e){return s[0]-e[0]}function bx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Sx(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=d!==void 0?d.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let I=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let D=0;y===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let b=h.attributes.position.count*D,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*T*4*m),X=new bo(U,b,T,m);X.type=Tn,X.needsUpdate=!0;const re=D*4;for(let F=0;F<m;F++){const z=x[F],te=M[F],Q=E[F],Y=b*T*4*F;for(let ae=0;ae<z.count;ae++){const ce=ae*re;y===!0&&(a.fromBufferAttribute(z,ae),U[Y+ce+0]=a.x,U[Y+ce+1]=a.y,U[Y+ce+2]=a.z,U[Y+ce+3]=0),v===!0&&(a.fromBufferAttribute(te,ae),U[Y+ce+4]=a.x,U[Y+ce+5]=a.y,U[Y+ce+6]=a.z,U[Y+ce+7]=0),S===!0&&(a.fromBufferAttribute(Q,ae),U[Y+ce+8]=a.x,U[Y+ce+9]=a.y,U[Y+ce+10]=a.z,U[Y+ce+11]=Q.itemSize===4?a.w:1)}}_={count:m,texture:X,size:new J(b,T)},r.set(h,_),h.addEventListener("dispose",I)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const g=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",g),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let m=n[h.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<d;v++){const S=m[v];S[0]=v,S[1]=f[v]}m.sort(bx);for(let v=0;v<8;v++)v<d&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Mx);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const S=o[v],x=S[0],M=S[1];x!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+v)!==_[x]&&h.setAttribute("morphTarget"+v,_[x]),p&&h.getAttribute("morphNormal"+v)!==p[x]&&h.setAttribute("morphNormal"+v,p[x]),i[v]=M,g+=M):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const y=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function wx(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class oh extends It{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Kn),n===void 0&&h===is&&(n=Si),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ep=new It,Ap=new oh(1,1);Ap.compareFunction=eh;const Cp=new bo,Rp=new ih,Pp=new Kr,hu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function js(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hu[i];if(r===void 0&&(r=new Float32Array(i),hu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function To(s,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Rx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;pu.set(n),s.uniformMatrix2fv(this.addr,!1,pu),Ft(t,n)}}function Px(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;du.set(n),s.uniformMatrix3fv(this.addr,!1,du),Ft(t,n)}}function Lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;fu.set(n),s.uniformMatrix4fv(this.addr,!1,fu),Ft(t,n)}}function Ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function Ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Ox(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function kx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ap:Ep;t.setTexture2D(e||r,i)}function Vx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rp,i)}function Hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pp,i)}function Gx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cp,i)}function Wx(s){switch(s){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Cx;case 35674:return Rx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Dx;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Xx(s,e){s.uniform1fv(this.addr,e)}function qx(s,e){const t=js(e,this.size,2);s.uniform2fv(this.addr,t)}function $x(s,e){const t=js(e,this.size,3);s.uniform3fv(this.addr,t)}function Yx(s,e){const t=js(e,this.size,4);s.uniform4fv(this.addr,t)}function Zx(s,e){const t=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jx(s,e){const t=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kx(s,e){const t=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jx(s,e){s.uniform1iv(this.addr,e)}function Qx(s,e){s.uniform2iv(this.addr,e)}function ey(s,e){s.uniform3iv(this.addr,e)}function ty(s,e){s.uniform4iv(this.addr,e)}function ny(s,e){s.uniform1uiv(this.addr,e)}function iy(s,e){s.uniform2uiv(this.addr,e)}function sy(s,e){s.uniform3uiv(this.addr,e)}function ry(s,e){s.uniform4uiv(this.addr,e)}function ay(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ep,r[a])}function oy(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rp,r[a])}function ly(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pp,r[a])}function cy(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cp,r[a])}function hy(s){switch(s){case 5126:return Xx;case 35664:return qx;case 35665:return $x;case 35666:return Yx;case 35674:return Zx;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}class uy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}}class fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hy(t.type)}}class dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function mu(s,e){s.seq.push(e),s.map[e.id]=e}function py(s,e,t){const n=s.name,i=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),a=bl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mu(t,c===void 0?new uy(o,s,e):new fy(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new dy(o),mu(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);py(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const my=37297;let gy=0;function _y(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function vy(s){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(s);let n;switch(e===t?n="":e===Ir&&t===Lr?n="LinearDisplayP3ToLinearSRGB":e===Lr&&t===Ir&&(n="LinearSRGBToLinearDisplayP3"),s){case Bn:case Zr:return[n,"LinearTransferOETF"];case Mt:case Mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _u(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_y(s.getShaderSource(e),a)}else return i}function xy(s,e){const t=vy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yy(s,e){let t;switch(e){case kc:t="Linear";break;case Vc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case _o:t="ACESFilmic";break;case Gc:t="AgX";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function My(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function by(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function Sy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ns(s){return s!==""}function vu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(s){return s.replace(Ty,Ay)}const Ey=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ay(s,e){let t=Ge[e];if(t===void 0){const n=Ey.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(s){return s.replace(Cy,Ry)}function Ry(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Py(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$r?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ly(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case si:case Ci:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Dy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yr:e="ENVMAP_BLENDING_MULTIPLY";break;case $d:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function Uy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ny(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Py(t),c=Ly(t),h=Iy(t),u=Dy(t),f=Uy(t),d=t.isWebGL2?"":My(t),m=by(t),_=Sy(r),p=i.createProgram();let g,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),g.length>0&&(g+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),y.length>0&&(y+=`
`)):(g=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),y=[d,Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ti?yy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Ac(a),a=vu(a,t),a=xu(a,t),o=Ac(o),o=vu(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+g+a,x=v+y+o,M=gu(i,i.VERTEX_SHADER,S),E=gu(i,i.FRAGMENT_SHADER,x);i.attachShader(p,M),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(X){if(s.debug.checkShaderErrors){const re=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(E).trim();let z=!0,te=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,E);else{const Q=_u(i,M,"vertex"),Y=_u(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+Q+`
`+Y)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(I===""||F==="")&&(te=!1);te&&(X.diagnostics={runnable:z,programLog:re,vertexShader:{log:I,prefix:g},fragmentShader:{log:F,prefix:y}})}i.deleteShader(M),i.deleteShader(E),b=new ao(i,p),T=wy(i,p)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,my)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let Oy=0;class Fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new By(e),t.set(e,n)),n}}class By{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}}function zy(s,e,t,n,i,r,a){const o=new So,l=new Fy,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function p(b,T,U,X,re){const I=X.fog,F=re.geometry,z=b.isMeshStandardMaterial?X.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),Q=te&&te.mapping===Zs?te.image.height:null,Y=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=ae!==void 0?ae.length:0;let ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let W,oe,Me,Ae;if(Y){const Dt=wn[Y];W=Dt.vertexShader,oe=Dt.fragmentShader}else W=b.vertexShader,oe=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const Te=s.getRenderTarget(),We=re.isInstancedMesh===!0,$e=re.isBatchedMesh===!0,Pe=!!b.map,He=!!b.matcap,L=!!te,fe=!!b.aoMap,j=!!b.lightMap,ue=!!b.bumpMap,K=!!b.normalMap,Fe=!!b.displacementMap,ve=!!b.emissiveMap,A=!!b.metalnessMap,w=!!b.roughnessMap,N=b.anisotropy>0,le=b.clearcoat>0,ne=b.iridescence>0,ie=b.sheen>0,Le=b.transmission>0,_e=N&&!!b.anisotropyMap,be=le&&!!b.clearcoatMap,Oe=le&&!!b.clearcoatNormalMap,qe=le&&!!b.clearcoatRoughnessMap,se=ne&&!!b.iridescenceMap,rt=ne&&!!b.iridescenceThicknessMap,nt=ie&&!!b.sheenColorMap,Ye=ie&&!!b.sheenRoughnessMap,ke=!!b.specularMap,G=!!b.specularColorMap,he=!!b.specularIntensityMap,pe=Le&&!!b.transmissionMap,me=Le&&!!b.thicknessMap,ee=!!b.gradientMap,q=!!b.alphaMap,P=b.alphaTest>0,Z=!!b.alphaHash,de=!!b.extensions,Ie=!!F.attributes.uv1,Ce=!!F.attributes.uv2,lt=!!F.attributes.uv3;let ct=ti;return b.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ct=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:oe,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:$e,instancing:We,instancingColor:We&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Bn,map:Pe,matcap:He,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:Q,aoMap:fe,lightMap:j,bumpMap:ue,normalMap:K,displacementMap:f&&Fe,emissiveMap:ve,normalMapObjectSpace:K&&b.normalMapType===hp,normalMapTangentSpace:K&&b.normalMapType===Li,metalnessMap:A,roughnessMap:w,anisotropy:N,anisotropyMap:_e,clearcoat:le,clearcoatMap:be,clearcoatNormalMap:Oe,clearcoatRoughnessMap:qe,iridescence:ne,iridescenceMap:se,iridescenceThicknessMap:rt,sheen:ie,sheenColorMap:nt,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:G,specularIntensityMap:he,transmission:Le,transmissionMap:pe,thicknessMap:me,gradientMap:ee,opaque:b.transparent===!1&&b.blending===es,alphaMap:q,alphaTest:P,alphaHash:Z,combine:b.combine,mapUv:Pe&&_(b.map.channel),aoMapUv:fe&&_(b.aoMap.channel),lightMapUv:j&&_(b.lightMap.channel),bumpMapUv:ue&&_(b.bumpMap.channel),normalMapUv:K&&_(b.normalMap.channel),displacementMapUv:Fe&&_(b.displacementMap.channel),emissiveMapUv:ve&&_(b.emissiveMap.channel),metalnessMapUv:A&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:_e&&_(b.anisotropyMap.channel),clearcoatMapUv:be&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(b.sheenRoughnessMap.channel),specularMapUv:ke&&_(b.specularMap.channel),specularColorMapUv:G&&_(b.specularColorMap.channel),specularIntensityMapUv:he&&_(b.specularIntensityMap.channel),transmissionMapUv:pe&&_(b.transmissionMap.channel),thicknessMapUv:me&&_(b.thicknessMap.channel),alphaMapUv:q&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(K||N),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ce,vertexUv3s:lt,pointsUvs:re.isPoints===!0&&!!F.attributes.uv&&(Pe||q),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)T.push(U),T.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(y(T,b),v(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){const T=m[b.type];let U;if(T){const X=wn[T];U=Xs.clone(X.uniforms)}else U=b.uniforms;return U}function x(b,T){let U;for(let X=0,re=c.length;X<re;X++){const I=c[X];if(I.cacheKey===T){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Ny(s,T,b,r),c.push(U)),U}function M(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:D}}function ky(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Vy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Su(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,m,_,p){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),e++,g}function o(u,f,d,m,_,p){const g=a(u,f,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(u,f,d,m,_,p){const g=a(u,f,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||Vy),n.length>1&&n.sort(f||bu),i.length>1&&i.sort(f||bu)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Hy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Su,s.set(n,[a])):i>=r.length?(a=new Su,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Wy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xy=0;function qy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $y(s,e){const t=new Gy,n=Wy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,a=new Ve,o=new Ve;function l(h,u){let f=0,d=0,m=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,g=0,y=0,v=0,S=0,x=0,M=0,E=0,D=0,b=0;h.sort(qy);const T=u===!0?Math.PI:1;for(let X=0,re=h.length;X<re;X++){const I=h[X],F=I.color,z=I.intensity,te=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*z*T,d+=F.g*z*T,m+=F.b*z*T;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],z);b++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const ae=I.shadow,ce=n.get(I);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.directionalShadow[_]=ce,i.directionalShadowMap[_]=Q,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=Y,_++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(z*T),Y.distance=te,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[g]=Y;const ae=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,ae.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[g]=ae.matrix,I.castShadow){const ce=n.get(I);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.spotShadow[g]=ce,i.spotShadowMap[g]=Q,M++}g++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(F).multiplyScalar(z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Y,y++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*T),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ae=I.shadow,ce=n.get(I);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=I.shadow.matrix,x++}i.point[p]=Y,p++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(z*T),Y.groundColor.copy(I.groundColor).multiplyScalar(z*T),i.hemi[v]=Y,v++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==_||U.pointLength!==p||U.spotLength!==g||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==S||U.numPointShadows!==x||U.numSpotShadows!==M||U.numSpotMaps!==E||U.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=b,U.directionalLength=_,U.pointLength=p,U.spotLength=g,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=S,U.numPointShadows=x,U.numSpotShadows=M,U.numSpotMaps=E,U.numLightProbes=b,i.version=Xy++)}function c(h,u){let f=0,d=0,m=0,_=0,p=0;const g=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(S.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(S.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function wu(s,e){const t=new $y(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yy(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new wu(s,e),t.set(r,[l])):a>=o.length?(l=new wu(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class lh extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ch extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ky(s,e,t){let n=new jr;const i=new J,r=new J,a=new mt,o=new lh({depthPacking:cp}),l=new ch,c={},h=t.maxTextureSize,u={[Fn]:jt,[jt]:Fn,[Ln]:Ln},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Zy,fragmentShader:Jy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new je;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let g=this.type;this.render=function(M,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const b=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),X=s.state;X.setBlending(In),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const re=g!==Pn&&this.type===Pn,I=g===Pn&&this.type!==Pn;for(let F=0,z=M.length;F<z;F++){const te=M[F],Q=te.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const Y=Q.getFrameExtents();if(i.multiply(Y),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,Q.mapSize.y=r.y)),Q.map===null||re===!0||I===!0){const ce=this.type!==Pn?{minFilter:Pt,magFilter:Pt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Qt(i.x,i.y,ce),Q.map.texture.name=te.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const ae=Q.getViewportCount();for(let ce=0;ce<ae;ce++){const ye=Q.getViewport(ce);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),X.viewport(a),Q.updateMatrices(te,ce),n=Q.getFrustum(),S(E,D,Q.camera,te,this.type)}Q.isPointLightShadow!==!0&&this.type===Pn&&y(Q,D),Q.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(b,T,U)};function y(M,E){const D=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qt(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,D,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,D,d,_,null)}function v(M,E,D,b){let T=null;const U=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)T=U;else if(T=D.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=T.uuid,re=E.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let F=I[re];F===void 0&&(F=T.clone(),I[re]=F,E.addEventListener("dispose",x)),T=F}if(T.visible=E.visible,T.wireframe=E.wireframe,b===Pn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=s.properties.get(T);X.light=D}return T}function S(M,E,D,b,T){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Pn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const re=e.update(M),I=M.material;if(Array.isArray(I)){const F=re.groups;for(let z=0,te=F.length;z<te;z++){const Q=F[z],Y=I[Q.materialIndex];if(Y&&Y.visible){const ae=v(M,Y,b,T);M.onBeforeShadow(s,M,E,D,re,ae,Q),s.renderBufferDirect(D,null,re,ae,M,Q),M.onAfterShadow(s,M,E,D,re,ae,Q)}}}else if(I.visible){const F=v(M,I,b,T);M.onBeforeShadow(s,M,E,D,re,F,null),s.renderBufferDirect(D,null,re,F,M,null),M.onAfterShadow(s,M,E,D,re,F,null)}}const X=M.children;for(let re=0,I=X.length;re<I;re++)S(X[re],E,D,b,T)}function x(M){M.target.removeEventListener("dispose",x);for(const D in c){const b=c[D],T=M.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function jy(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const Z=new mt;let de=null;const Ie=new mt(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!P&&(s.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){P=Ce},setClear:function(Ce,lt,ct,xt,Dt){Dt===!0&&(Ce*=xt,lt*=xt,ct*=xt),Z.set(Ce,lt,ct,xt),Ie.equals(Z)===!1&&(s.clearColor(Ce,lt,ct,xt),Ie.copy(Z))},reset:function(){P=!1,de=null,Ie.set(-1,0,0,0)}}}function r(){let P=!1,Z=null,de=null,Ie=null;return{setTest:function(Ce){Ce?$e(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Ce){Z!==Ce&&!P&&(s.depthMask(Ce),Z=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case kd:s.depthFunc(s.NEVER);break;case Vd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case Sr:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Wd:s.depthFunc(s.GEQUAL);break;case Xd:s.depthFunc(s.GREATER);break;case qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Ce}},setLocked:function(Ce){P=Ce},setClear:function(Ce){Ie!==Ce&&(s.clearDepth(Ce),Ie=Ce)},reset:function(){P=!1,Z=null,de=null,Ie=null}}}function a(){let P=!1,Z=null,de=null,Ie=null,Ce=null,lt=null,ct=null,xt=null,Dt=null;return{setTest:function(ht){P||(ht?$e(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(ht){Z!==ht&&!P&&(s.stencilMask(ht),Z=ht)},setFunc:function(ht,Ut,hn){(de!==ht||Ie!==Ut||Ce!==hn)&&(s.stencilFunc(ht,Ut,hn),de=ht,Ie=Ut,Ce=hn)},setOp:function(ht,Ut,hn){(lt!==ht||ct!==Ut||xt!==hn)&&(s.stencilOp(ht,Ut,hn),lt=ht,ct=Ut,xt=hn)},setLocked:function(ht){P=ht},setClear:function(ht){Dt!==ht&&(s.clearStencil(ht),Dt=ht)},reset:function(){P=!1,Z=null,de=null,Ie=null,Ce=null,lt=null,ct=null,xt=null,Dt=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let f={},d={},m=new WeakMap,_=[],p=null,g=!1,y=null,v=null,S=null,x=null,M=null,E=null,D=null,b=new xe(0,0,0),T=0,U=!1,X=null,re=null,I=null,F=null,z=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=Y>=2);let ce=null,ye={};const W=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Me=new mt().fromArray(W),Ae=new mt().fromArray(oe);function Te(P,Z,de,Ie){const Ce=new Uint8Array(4),lt=s.createTexture();s.bindTexture(P,lt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<de;ct++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(Z,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Z+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return lt}const We={};We[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),We[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),We[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$e(s.DEPTH_TEST),l.setFunc(Sr),ve(!1),A(ql),$e(s.CULL_FACE),K(In);function $e(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Pe(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function He(P,Z){return d[P]!==Z?(s.bindFramebuffer(P,Z),d[P]=Z,n&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z)),!0):!1}function L(P,Z){let de=_,Ie=!1;if(P)if(de=m.get(Z),de===void 0&&(de=[],m.set(Z,de)),P.isWebGLMultipleRenderTargets){const Ce=P.texture;if(de.length!==Ce.length||de[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,ct=Ce.length;lt<ct;lt++)de[lt]=s.COLOR_ATTACHMENT0+lt;de.length=Ce.length,Ie=!0}}else de[0]!==s.COLOR_ATTACHMENT0&&(de[0]=s.COLOR_ATTACHMENT0,Ie=!0);else de[0]!==s.BACK&&(de[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function fe(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const j={[bi]:s.FUNC_ADD,[Td]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};if(n)j[Zl]=s.MIN,j[Jl]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(j[Zl]=P.MIN_EXT,j[Jl]=P.MAX_EXT)}const ue={[Ad]:s.ZERO,[Cd]:s.ONE,[Rd]:s.SRC_COLOR,[co]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[Dd]:s.DST_COLOR,[Ld]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[ho]:s.ONE_MINUS_SRC_ALPHA,[Ud]:s.ONE_MINUS_DST_COLOR,[Id]:s.ONE_MINUS_DST_ALPHA,[Od]:s.CONSTANT_COLOR,[Fd]:s.ONE_MINUS_CONSTANT_COLOR,[Bd]:s.CONSTANT_ALPHA,[zd]:s.ONE_MINUS_CONSTANT_ALPHA};function K(P,Z,de,Ie,Ce,lt,ct,xt,Dt,ht){if(P===In){g===!0&&(Pe(s.BLEND),g=!1);return}if(g===!1&&($e(s.BLEND),g=!0),P!==wd){if(P!==y||ht!==U){if((v!==bi||M!==bi)&&(s.blendEquation(s.FUNC_ADD),v=bi,M=bi),ht)switch(P){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFunc(s.ONE,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,x=null,E=null,D=null,b.set(0,0,0),T=0,y=P,U=ht}return}Ce=Ce||Z,lt=lt||de,ct=ct||Ie,(Z!==v||Ce!==M)&&(s.blendEquationSeparate(j[Z],j[Ce]),v=Z,M=Ce),(de!==S||Ie!==x||lt!==E||ct!==D)&&(s.blendFuncSeparate(ue[de],ue[Ie],ue[lt],ue[ct]),S=de,x=Ie,E=lt,D=ct),(xt.equals(b)===!1||Dt!==T)&&(s.blendColor(xt.r,xt.g,xt.b,Dt),b.copy(xt),T=Dt),y=P,U=!1}function Fe(P,Z){P.side===Ln?Pe(s.CULL_FACE):$e(s.CULL_FACE);let de=P.side===jt;Z&&(de=!de),ve(de),P.blending===es&&P.transparent===!1?K(In):K(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Ie=P.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),N(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$e(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(P){X!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),X=P)}function A(P){P!==bd?($e(s.CULL_FACE),P!==re&&(P===ql?s.cullFace(s.BACK):P===Sd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),re=P}function w(P){P!==I&&(Q&&s.lineWidth(P),I=P)}function N(P,Z,de){P?($e(s.POLYGON_OFFSET_FILL),(F!==Z||z!==de)&&(s.polygonOffset(Z,de),F=Z,z=de)):Pe(s.POLYGON_OFFSET_FILL)}function le(P){P?$e(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function ne(P){P===void 0&&(P=s.TEXTURE0+te-1),ce!==P&&(s.activeTexture(P),ce=P)}function ie(P,Z,de){de===void 0&&(ce===null?de=s.TEXTURE0+te-1:de=ce);let Ie=ye[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},ye[de]=Ie),(Ie.type!==P||Ie.texture!==Z)&&(ce!==de&&(s.activeTexture(de),ce=de),s.bindTexture(P,Z||We[P]),Ie.type=P,Ie.texture=Z)}function Le(){const P=ye[ce];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(P){Me.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Me.copy(P))}function pe(P){Ae.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function me(P,Z){let de=u.get(Z);de===void 0&&(de=new WeakMap,u.set(Z,de));let Ie=de.get(P);Ie===void 0&&(Ie=s.getUniformBlockIndex(Z,P.name),de.set(P,Ie))}function ee(P,Z){const Ie=u.get(Z).get(P);h.get(Z)!==Ie&&(s.uniformBlockBinding(Z,Ie,P.__bindingPointIndex),h.set(Z,Ie))}function q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ce=null,ye={},d={},m=new WeakMap,_=[],p=null,g=!1,y=null,v=null,S=null,x=null,M=null,E=null,D=null,b=new xe(0,0,0),T=0,U=!1,X=null,re=null,I=null,F=null,z=null,Me.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:$e,disable:Pe,bindFramebuffer:He,drawBuffers:L,useProgram:fe,setBlending:K,setMaterial:Fe,setFlipSided:ve,setCullFace:A,setLineWidth:w,setPolygonOffset:N,setScissorTest:le,activeTexture:ne,bindTexture:ie,unbindTexture:Le,compressedTexImage2D:_e,compressedTexImage3D:be,texImage2D:ke,texImage3D:G,updateUBOMapping:me,uniformBlockBinding:ee,texStorage2D:nt,texStorage3D:Ye,texSubImage2D:Oe,texSubImage3D:qe,compressedTexSubImage2D:se,compressedTexSubImage3D:rt,scissor:he,viewport:pe,reset:q}}function Qy(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return d?new OffscreenCanvas(A,w):Ur("canvas")}function _(A,w,N,le){let ne=1;if((A.width>le||A.height>le)&&(ne=le/Math.max(A.width,A.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=w?po:Math.floor,Le=ie(ne*A.width),_e=ie(ne*A.height);u===void 0&&(u=m(Le,_e));const be=N?m(Le,_e):u;return be.width=Le,be.height=_e,be.getContext("2d").drawImage(A,0,0,Le,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Le+"x"+_e+")."),be}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Ec(A.width)&&Ec(A.height)}function g(A){return o?!1:A.wrapS!==qt||A.wrapT!==qt||A.minFilter!==Pt&&A.minFilter!==pt}function y(A,w){return A.generateMipmaps&&w&&A.minFilter!==Pt&&A.minFilter!==pt}function v(A){s.generateMipmap(A)}function S(A,w,N,le,ne=!1){if(o===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=w;if(w===s.RED&&(N===s.FLOAT&&(ie=s.R32F),N===s.HALF_FLOAT&&(ie=s.R16F),N===s.UNSIGNED_BYTE&&(ie=s.R8)),w===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(ie=s.R8UI),N===s.UNSIGNED_SHORT&&(ie=s.R16UI),N===s.UNSIGNED_INT&&(ie=s.R32UI),N===s.BYTE&&(ie=s.R8I),N===s.SHORT&&(ie=s.R16I),N===s.INT&&(ie=s.R32I)),w===s.RG&&(N===s.FLOAT&&(ie=s.RG32F),N===s.HALF_FLOAT&&(ie=s.RG16F),N===s.UNSIGNED_BYTE&&(ie=s.RG8)),w===s.RGBA){const Le=ne?Pr:ut.getTransfer(le);N===s.FLOAT&&(ie=s.RGBA32F),N===s.HALF_FLOAT&&(ie=s.RGBA16F),N===s.UNSIGNED_BYTE&&(ie=Le===_t?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(A,w,N){return y(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==pt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function M(A){return A===Pt||A===uo||A===vr?s.NEAREST:s.LINEAR}function E(A){const w=A.target;w.removeEventListener("dispose",E),b(w),w.isVideoTexture&&h.delete(w)}function D(A){const w=A.target;w.removeEventListener("dispose",D),U(w)}function b(A){const w=n.get(A);if(w.__webglInit===void 0)return;const N=A.source,le=f.get(N);if(le){const ne=le[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(le).length===0&&f.delete(N)}n.remove(A)}function T(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const N=A.source,le=f.get(N);delete le[w.__cacheKey],a.memory.textures--}function U(A){const w=A.texture,N=n.get(A),le=n.get(w);if(le.__webglTexture!==void 0&&(s.deleteTexture(le.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(N.__webglFramebuffer[ne]))for(let ie=0;ie<N.__webglFramebuffer[ne].length;ie++)s.deleteFramebuffer(N.__webglFramebuffer[ne][ie]);else s.deleteFramebuffer(N.__webglFramebuffer[ne]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[ne])}else{if(Array.isArray(N.__webglFramebuffer))for(let ne=0;ne<N.__webglFramebuffer.length;ne++)s.deleteFramebuffer(N.__webglFramebuffer[ne]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ne=0;ne<N.__webglColorRenderbuffer.length;ne++)N.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[ne]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ie=w.length;ne<ie;ne++){const Le=n.get(w[ne]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(A)}let X=0;function re(){X=0}function I(){const A=X;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),X+=1,A}function F(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function z(A,w){const N=n.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(N,A,w);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+w)}function te(A,w){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Me(N,A,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+w)}function Q(A,w){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Me(N,A,w);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+w)}function Y(A,w){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Ae(N,A,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+w)}const ae={[Tr]:s.REPEAT,[qt]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},ce={[Pt]:s.NEAREST,[uo]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[pt]:s.LINEAR,[Wc]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},ye={[up]:s.NEVER,[_p]:s.ALWAYS,[fp]:s.LESS,[eh]:s.LEQUAL,[dp]:s.EQUAL,[gp]:s.GEQUAL,[pp]:s.GREATER,[mp]:s.NOTEQUAL};function W(A,w,N){if(N?(s.texParameteri(A,s.TEXTURE_WRAP_S,ae[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ae[w.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ae[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==qt||w.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,M(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Pt&&w.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Pt||w.minFilter!==vr&&w.minFilter!==Ri||w.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Dn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function oe(A,w){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",E));const le=w.source;let ne=f.get(le);ne===void 0&&(ne={},f.set(le,ne));const ie=F(w);if(ie!==A.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ne[ie].usedTimes++;const Le=ne[A.__cacheKey];Le!==void 0&&(ne[A.__cacheKey].usedTimes--,Le.usedTimes===0&&T(w)),A.__cacheKey=ie,A.__webglTexture=ne[ie].texture}return N}function Me(A,w,N){let le=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=s.TEXTURE_3D);const ne=oe(A,w),ie=w.source;t.bindTexture(le,A.__webglTexture,s.TEXTURE0+N);const Le=n.get(ie);if(ie.version!==Le.__version||ne===!0){t.activeTexture(s.TEXTURE0+N);const _e=ut.getPrimaries(ut.workingColorSpace),be=w.colorSpace===mn?null:ut.getPrimaries(w.colorSpace),Oe=w.colorSpace===mn||_e===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const qe=g(w)&&p(w.image)===!1;let se=_(w.image,qe,!1,i.maxTextureSize);se=ve(w,se);const rt=p(se)||o,nt=r.convert(w.format,w.colorSpace);let Ye=r.convert(w.type),ke=S(w.internalFormat,nt,Ye,w.colorSpace,w.isVideoTexture);W(le,w,rt);let G;const he=w.mipmaps,pe=o&&w.isVideoTexture!==!0&&ke!==Kc,me=Le.__version===void 0||ne===!0,ee=x(w,se,rt);if(w.isDepthTexture)ke=s.DEPTH_COMPONENT,o?w.type===Tn?ke=s.DEPTH_COMPONENT32F:w.type===Kn?ke=s.DEPTH_COMPONENT24:w.type===Si?ke=s.DEPTH24_STENCIL8:ke=s.DEPTH_COMPONENT16:w.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===wi&&ke===s.DEPTH_COMPONENT&&w.type!==xo&&w.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Kn,Ye=r.convert(w.type)),w.format===is&&ke===s.DEPTH_COMPONENT&&(ke=s.DEPTH_STENCIL,w.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Si,Ye=r.convert(w.type))),me&&(pe?t.texStorage2D(s.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,ke,se.width,se.height,0,nt,Ye,null));else if(w.isDataTexture)if(he.length>0&&rt){pe&&me&&t.texStorage2D(s.TEXTURE_2D,ee,ke,he[0].width,he[0].height);for(let q=0,P=he.length;q<P;q++)G=he[q],pe?t.texSubImage2D(s.TEXTURE_2D,q,0,0,G.width,G.height,nt,Ye,G.data):t.texImage2D(s.TEXTURE_2D,q,ke,G.width,G.height,0,nt,Ye,G.data);w.generateMipmaps=!1}else pe?(me&&t.texStorage2D(s.TEXTURE_2D,ee,ke,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,nt,Ye,se.data)):t.texImage2D(s.TEXTURE_2D,0,ke,se.width,se.height,0,nt,Ye,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){pe&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ee,ke,he[0].width,he[0].height,se.depth);for(let q=0,P=he.length;q<P;q++)G=he[q],w.format!==on?nt!==null?pe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,G.width,G.height,se.depth,nt,G.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ke,G.width,G.height,se.depth,0,G.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,G.width,G.height,se.depth,nt,Ye,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ke,G.width,G.height,se.depth,0,nt,Ye,G.data)}else{pe&&me&&t.texStorage2D(s.TEXTURE_2D,ee,ke,he[0].width,he[0].height);for(let q=0,P=he.length;q<P;q++)G=he[q],w.format!==on?nt!==null?pe?t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,G.width,G.height,nt,G.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ke,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(s.TEXTURE_2D,q,0,0,G.width,G.height,nt,Ye,G.data):t.texImage2D(s.TEXTURE_2D,q,ke,G.width,G.height,0,nt,Ye,G.data)}else if(w.isDataArrayTexture)pe?(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ee,ke,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,nt,Ye,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,nt,Ye,se.data);else if(w.isData3DTexture)pe?(me&&t.texStorage3D(s.TEXTURE_3D,ee,ke,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,nt,Ye,se.data)):t.texImage3D(s.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,nt,Ye,se.data);else if(w.isFramebufferTexture){if(me)if(pe)t.texStorage2D(s.TEXTURE_2D,ee,ke,se.width,se.height);else{let q=se.width,P=se.height;for(let Z=0;Z<ee;Z++)t.texImage2D(s.TEXTURE_2D,Z,ke,q,P,0,nt,Ye,null),q>>=1,P>>=1}}else if(he.length>0&&rt){pe&&me&&t.texStorage2D(s.TEXTURE_2D,ee,ke,he[0].width,he[0].height);for(let q=0,P=he.length;q<P;q++)G=he[q],pe?t.texSubImage2D(s.TEXTURE_2D,q,0,0,nt,Ye,G):t.texImage2D(s.TEXTURE_2D,q,ke,nt,Ye,G);w.generateMipmaps=!1}else pe?(me&&t.texStorage2D(s.TEXTURE_2D,ee,ke,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,nt,Ye,se)):t.texImage2D(s.TEXTURE_2D,0,ke,nt,Ye,se);y(w,rt)&&v(le),Le.__version=ie.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,N){if(w.image.length!==6)return;const le=oe(A,w),ne=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+N);const ie=n.get(ne);if(ne.version!==ie.__version||le===!0){t.activeTexture(s.TEXTURE0+N);const Le=ut.getPrimaries(ut.workingColorSpace),_e=w.colorSpace===mn?null:ut.getPrimaries(w.colorSpace),be=w.colorSpace===mn||Le===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,se=[];for(let q=0;q<6;q++)!Oe&&!qe?se[q]=_(w.image[q],!1,!0,i.maxCubemapSize):se[q]=qe?w.image[q].image:w.image[q],se[q]=ve(w,se[q]);const rt=se[0],nt=p(rt)||o,Ye=r.convert(w.format,w.colorSpace),ke=r.convert(w.type),G=S(w.internalFormat,Ye,ke,w.colorSpace),he=o&&w.isVideoTexture!==!0,pe=ie.__version===void 0||le===!0;let me=x(w,rt,nt);W(s.TEXTURE_CUBE_MAP,w,nt);let ee;if(Oe){he&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,G,rt.width,rt.height);for(let q=0;q<6;q++){ee=se[q].mipmaps;for(let P=0;P<ee.length;P++){const Z=ee[P];w.format!==on?Ye!==null?he?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P,0,0,Z.width,Z.height,Ye,Z.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P,G,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P,0,0,Z.width,Z.height,Ye,ke,Z.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P,G,Z.width,Z.height,0,Ye,ke,Z.data)}}}else{ee=w.mipmaps,he&&pe&&(ee.length>0&&me++,t.texStorage2D(s.TEXTURE_CUBE_MAP,me,G,se[0].width,se[0].height));for(let q=0;q<6;q++)if(qe){he?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,se[q].width,se[q].height,Ye,ke,se[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,G,se[q].width,se[q].height,0,Ye,ke,se[q].data);for(let P=0;P<ee.length;P++){const de=ee[P].image[q].image;he?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P+1,0,0,de.width,de.height,Ye,ke,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P+1,G,de.width,de.height,0,Ye,ke,de.data)}}else{he?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ye,ke,se[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,G,Ye,ke,se[q]);for(let P=0;P<ee.length;P++){const Z=ee[P];he?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P+1,0,0,Ye,ke,Z.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,P+1,G,Ye,ke,Z.image[q])}}}y(w,nt)&&v(s.TEXTURE_CUBE_MAP),ie.__version=ne.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Te(A,w,N,le,ne,ie){const Le=r.convert(N.format,N.colorSpace),_e=r.convert(N.type),be=S(N.internalFormat,Le,_e,N.colorSpace);if(!n.get(w).__hasExternalTextures){const qe=Math.max(1,w.width>>ie),se=Math.max(1,w.height>>ie);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,be,qe,se,w.depth,0,Le,_e,null):t.texImage2D(ne,ie,be,qe,se,0,Le,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),K(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,ne,n.get(N).__webglTexture,0,ue(w)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,ne,n.get(N).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(A,w,N){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let le=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(N||K(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Tn?le=s.DEPTH_COMPONENT32F:ne.type===Kn&&(le=s.DEPTH_COMPONENT24));const ie=ue(w);K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,le,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,le,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,le,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const le=ue(w);N&&K(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const le=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<le.length;ne++){const ie=le[ne],Le=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),be=S(ie.internalFormat,Le,_e,ie.colorSpace),Oe=ue(w);N&&K(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,be,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const le=n.get(w.depthTexture).__webglTexture,ne=ue(w);if(w.depthTexture.format===wi)K(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(w.depthTexture.format===is)K(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const w=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");$e(w.__webglFramebuffer,A)}else if(N){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=s.createRenderbuffer(),We(w.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),We(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(A,w,N){const le=n.get(A);w!==void 0&&Te(le.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Pe(A)}function L(A){const w=A.texture,N=n.get(A),le=n.get(w);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=w.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,Le=p(A)||o;if(ne){N.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[_e]=[];for(let be=0;be<w.mipmaps.length;be++)N.__webglFramebuffer[_e][be]=s.createFramebuffer()}else N.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)N.__webglFramebuffer[_e]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ie)if(i.drawBuffers){const _e=A.texture;for(let be=0,Oe=_e.length;be<Oe;be++){const qe=n.get(_e[be]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&K(A)===!1){const _e=ie?w:[w];N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Oe=_e[be];N.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[be]);const qe=r.convert(Oe.format,Oe.colorSpace),se=r.convert(Oe.type),rt=S(Oe.internalFormat,qe,se,Oe.colorSpace,A.isXRRenderTarget===!0),nt=ue(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,rt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,N.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),We(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),W(s.TEXTURE_CUBE_MAP,w,Le);for(let _e=0;_e<6;_e++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Te(N.__webglFramebuffer[_e][be],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else Te(N.__webglFramebuffer[_e],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);y(w,Le)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const _e=A.texture;for(let be=0,Oe=_e.length;be<Oe;be++){const qe=_e[be],se=n.get(qe);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),W(s.TEXTURE_2D,qe,Le),Te(N.__webglFramebuffer,A,qe,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(qe,Le)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?_e=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,le.__webglTexture),W(_e,w,Le),o&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Te(N.__webglFramebuffer[be],A,w,s.COLOR_ATTACHMENT0,_e,be);else Te(N.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,_e,0);y(w,Le)&&v(_e),t.unbindTexture()}A.depthBuffer&&Pe(A)}function fe(A){const w=p(A)||o,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,ne=N.length;le<ne;le++){const ie=N[le];if(y(ie,w)){const Le=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(ie).__webglTexture;t.bindTexture(Le,_e),v(Le),t.unbindTexture()}}}function j(A){if(o&&A.samples>0&&K(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,le=A.height;let ne=s.COLOR_BUFFER_BIT;const ie=[],Le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(A),be=A.isWebGLMultipleRenderTargets===!0;if(be)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){ie.push(s.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&ie.push(Le);const qe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(qe===!1&&(A.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),be&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Oe]),qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Le]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Le])),be){const se=n.get(w[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,N,le,0,0,N,le,ne,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Oe]);const qe=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ue(A){return Math.min(i.maxSamples,A.samples)}function K(A){const w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(A){const w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function ve(A,w){const N=A.colorSpace,le=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===fo||N!==Bn&&N!==mn&&(ut.getTransfer(N)===_t?o===!1?e.has("EXT_sRGB")===!0&&le===on?(A.format=fo,A.minFilter=pt,A.generateMipmaps=!1):w=nh.sRGBToLinear(w):(le!==on||ne!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),w}this.allocateTextureUnit=I,this.resetTextureUnits=re,this.setTexture2D=z,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=He,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=K}function Lp(s,e,t){const n=t.isWebGL2;function i(r,a=mn){let o;const l=ut.getTransfer(a);if(r===ni)return s.UNSIGNED_BYTE;if(r===qc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$c)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kd)return s.BYTE;if(r===jd)return s.SHORT;if(r===xo)return s.UNSIGNED_SHORT;if(r===Xc)return s.INT;if(r===Kn)return s.UNSIGNED_INT;if(r===Tn)return s.FLOAT;if(r===Dn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Qd)return s.ALPHA;if(r===on)return s.RGBA;if(r===ep)return s.LUMINANCE;if(r===tp)return s.LUMINANCE_ALPHA;if(r===wi)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===fo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===np)return s.RED;if(r===Yc)return s.RED_INTEGER;if(r===ip)return s.RG;if(r===Zc)return s.RG_INTEGER;if(r===Jc)return s.RGBA_INTEGER;if(r===eo||r===to||r===no||r===io)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===to)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===no)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===io)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jl||r===Ql||r===ec||r===tc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nc||r===ic)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===nc)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ic)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===fc||r===dc||r===pc||r===mc||r===gc||r===_c)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===sc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ac)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_c)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===so||r===vc||r===xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===so)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sp||r===yc||r===Mc||r===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===so)return o.COMPRESSED_RED_RGTC1_EXT;if(r===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Si?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ip extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eM={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tM extends hi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=t.getContextAttributes();let p=null,g=null;const y=[],v=[],S=new J;let x=null;const M=new Vt;M.layers.enable(1),M.viewport=new mt;const E=new Vt;E.layers.enable(2),E.viewport=new mt;const D=[M,E],b=new Ip;b.layers.enable(1),b.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=y[W];return oe===void 0&&(oe=new Sl,y[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=y[W];return oe===void 0&&(oe=new Sl,y[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=y[W];return oe===void 0&&(oe=new Sl,y[W]=oe),oe.getHandSpace()};function X(W){const oe=v.indexOf(W.inputSource);if(oe===-1)return;const Me=y[oe];Me!==void 0&&(Me.update(W.inputSource,W.frame,c||a),Me.dispatchEvent({type:W.type,data:W.inputSource}))}function re(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",re),i.removeEventListener("inputsourceschange",I);for(let W=0;W<y.length;W++){const oe=v[W];oe!==null&&(v[W]=null,y[W].disconnect(oe))}T=null,U=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,g=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",re),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Qt(d.framebufferWidth,d.framebufferHeight,{format:on,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,Me=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?is:wi,Me=_.stencil?Si:Kn);const Te={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Te),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Qt(f.textureWidth,f.textureHeight,{format:on,type:ni,depthTexture:new oh(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const We=e.properties.get(g);We.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(W){for(let oe=0;oe<W.removed.length;oe++){const Me=W.removed[oe],Ae=v.indexOf(Me);Ae>=0&&(v[Ae]=null,y[Ae].disconnect(Me))}for(let oe=0;oe<W.added.length;oe++){const Me=W.added[oe];let Ae=v.indexOf(Me);if(Ae===-1){for(let We=0;We<y.length;We++)if(We>=v.length){v.push(Me),Ae=We;break}else if(v[We]===null){v[We]=Me,Ae=We;break}if(Ae===-1)break}const Te=y[Ae];Te&&Te.connect(Me)}}const F=new R,z=new R;function te(W,oe,Me){F.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(Me.matrixWorld);const Ae=F.distanceTo(z),Te=oe.projectionMatrix.elements,We=Me.projectionMatrix.elements,$e=Te[14]/(Te[10]-1),Pe=Te[14]/(Te[10]+1),He=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],fe=(Te[8]-1)/Te[0],j=(We[8]+1)/We[0],ue=$e*fe,K=$e*j,Fe=Ae/(-fe+j),ve=Fe*-fe;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ve),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=$e+Fe,w=Pe+Fe,N=ue-ve,le=K+(Ae-ve),ne=He*Pe/w*A,ie=L*Pe/w*A;W.projectionMatrix.makePerspective(N,le,ne,ie,A,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;b.near=E.near=M.near=W.near,b.far=E.far=M.far=W.far,(T!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,U=b.far);const oe=W.parent,Me=b.cameras;Q(b,oe);for(let Ae=0;Ae<Me.length;Ae++)Q(Me[Ae],oe);Me.length===2?te(b,M,E):b.projectionMatrix.copy(M.projectionMatrix),Y(W,b,oe)};function Y(W,oe,Me){Me===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(Me.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let ae=null;function ce(W,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){const Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let Ae=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,Ae=!0);for(let Te=0;Te<Me.length;Te++){const We=Me[Te];let $e=null;if(d!==null)$e=d.getViewport(We);else{const He=u.getViewSubImage(f,We);$e=He.viewport,Te===0&&(e.setRenderTargetTextures(g,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let Pe=D[Te];Pe===void 0&&(Pe=new Vt,Pe.layers.enable(Te),Pe.viewport=new mt,D[Te]=Pe),Pe.matrix.fromArray(We.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(We.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set($e.x,$e.y,$e.width,$e.height),Te===0&&(b.matrix.copy(Pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ae===!0&&b.cameras.push(Pe)}}for(let Me=0;Me<y.length;Me++){const Ae=v[Me],Te=y[Me];Ae!==null&&Te!==void 0&&Te.update(Ae,oe,c||a)}ae&&ae(W,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const ye=new Tp;ye.setAnimationLoop(ce),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}function nM(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,bp(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,v,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===jt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===jt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=v*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iM(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(m(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const x=v.program;n.updateUBOMapping(y,x);const M=e.render.frame;r[y.id]!==M&&(f(y),r[y.id]=M)}function h(y){const v=u();y.__bindingPointIndex=v;const S=s.createBuffer(),x=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,x,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],S=y.uniforms,x=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,E=S.length;M<E;M++){const D=Array.isArray(S[M])?S[M]:[S[M]];for(let b=0,T=D.length;b<T;b++){const U=D[b];if(d(U,M,b,x)===!0){const X=U.__offset,re=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let F=0;F<re.length;F++){const z=re[F],te=_(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,X+I,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,I),I+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,S,x){const M=y.value,E=v+"_"+S;if(x[E]===void 0)return typeof M=="number"||typeof M=="boolean"?x[E]=M:x[E]=M.clone(),!0;{const D=x[E];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return x[E]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function m(y){const v=y.uniforms;let S=0;const x=16;for(let E=0,D=v.length;E<D;E++){const b=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,U=b.length;T<U;T++){const X=b[T],re=Array.isArray(X.value)?X.value:[X.value];for(let I=0,F=re.length;I<F;I++){const z=re[I],te=_(z),Q=S%x;Q!==0&&x-Q<te.boundary&&(S+=x-Q),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=te.storage}}}const M=S%x;return M>0&&(S+=x-M),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}class hh{constructor(e={}){const{canvas:t=xp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let S=!1,x=0,M=0,E=null,D=-1,b=null;const T=new mt,U=new mt;let X=null;const re=new xe(0);let I=0,F=t.width,z=t.height,te=1,Q=null,Y=null;const ae=new mt(0,0,F,z),ce=new mt(0,0,F,z);let ye=!1;const W=new jr;let oe=!1,Me=!1,Ae=null;const Te=new Ve,We=new J,$e=new R,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return E===null?te:1}let L=n;function fe(C,O){for(let V=0;V<C.length;V++){const H=C[V],k=t.getContext(H,O);if(k!==null)return k}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",Z,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),L=fe(O,C),L===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let j,ue,K,Fe,ve,A,w,N,le,ne,ie,Le,_e,be,Oe,qe,se,rt,nt,Ye,ke,G,he,pe;function me(){j=new _x(L),ue=new ux(L,j,e),j.init(ue),G=new Lp(L,j,ue),K=new jy(L,j,ue),Fe=new yx(L),ve=new ky,A=new Qy(L,j,K,ve,ue,G,Fe),w=new dx(v),N=new gx(v),le=new C_(L,ue),he=new cx(L,j,le,ue),ne=new vx(L,le,Fe,he),ie=new wx(L,ne,le,Fe),nt=new Sx(L,ue,A),qe=new fx(ve),Le=new zy(v,w,N,j,ue,he,qe),_e=new nM(v,ve),be=new Hy,Oe=new Yy(j,ue),rt=new lx(v,w,N,K,ie,f,l),se=new Ky(v,ie,ue),pe=new iM(L,Fe,ue,K),Ye=new hx(L,j,Fe,ue),ke=new xx(L,j,Fe,ue),Fe.programs=Le.programs,v.capabilities=ue,v.extensions=j,v.properties=ve,v.renderLists=be,v.shadowMap=se,v.state=K,v.info=Fe}me();const ee=new tM(v,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize(F,z,!1))},this.getSize=function(C){return C.set(F,z)},this.setSize=function(C,O,V=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,z=O,t.width=Math.floor(C*te),t.height=Math.floor(O*te),V===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(F*te,z*te).floor()},this.setDrawingBufferSize=function(C,O,V){F=C,z=O,te=V,t.width=Math.floor(C*V),t.height=Math.floor(O*V),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,O,V,H){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,O,V,H),K.viewport(T.copy(ae).multiplyScalar(te).floor())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,O,V,H){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,O,V,H),K.scissor(U.copy(ce).multiplyScalar(te).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){K.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,O=!0,V=!0){let H=0;if(C){let k=!1;if(E!==null){const Ee=E.texture.format;k=Ee===Jc||Ee===Zc||Ee===Yc}if(k){const Ee=E.texture.type,Be=Ee===ni||Ee===Kn||Ee===xo||Ee===Si||Ee===qc||Ee===$c,Xe=rt.getClearColor(),Ze=rt.getClearAlpha(),it=Xe.r,Ke=Xe.g,Qe=Xe.b;Be?(d[0]=it,d[1]=Ke,d[2]=Qe,d[3]=Ze,L.clearBufferuiv(L.COLOR,0,d)):(m[0]=it,m[1]=Ke,m[2]=Qe,m[3]=Ze,L.clearBufferiv(L.COLOR,0,m))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),be.dispose(),Oe.dispose(),ve.dispose(),w.dispose(),N.dispose(),ie.dispose(),he.dispose(),pe.dispose(),Le.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Dt),ee.removeEventListener("sessionend",ht),Ae&&(Ae.dispose(),Ae=null),Ut.stop()};function q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Fe.autoReset,O=se.enabled,V=se.autoUpdate,H=se.needsUpdate,k=se.type;me(),Fe.autoReset=C,se.enabled=O,se.autoUpdate=V,se.needsUpdate=H,se.type=k}function Z(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const O=C.target;O.removeEventListener("dispose",de),Ie(O)}function Ie(C){Ce(C),ve.remove(C)}function Ce(C){const O=ve.get(C).programs;O!==void 0&&(O.forEach(function(V){Le.releaseProgram(V)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,V,H,k,Ee){O===null&&(O=Pe);const Be=k.isMesh&&k.matrixWorld.determinant()<0,Xe=Wm(C,O,V,H,k);K.setMaterial(H,Be);let Ze=V.index,it=1;if(H.wireframe===!0){if(Ze=ne.getWireframeAttribute(V),Ze===void 0)return;it=2}const Ke=V.drawRange,Qe=V.attributes.position;let Ct=Ke.start*it,un=(Ke.start+Ke.count)*it;Ee!==null&&(Ct=Math.max(Ct,Ee.start*it),un=Math.min(un,(Ee.start+Ee.count)*it)),Ze!==null?(Ct=Math.max(Ct,0),un=Math.min(un,Ze.count)):Qe!=null&&(Ct=Math.max(Ct,0),un=Math.min(un,Qe.count));const Bt=un-Ct;if(Bt<0||Bt===1/0)return;he.setup(k,H,Xe,V,Ze);let Gn,yt=Ye;if(Ze!==null&&(Gn=le.get(Ze),yt=ke,yt.setIndex(Gn)),k.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*He()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(k.isLine){let st=H.linewidth;st===void 0&&(st=1),K.setLineWidth(st*He()),k.isLineSegments?yt.setMode(L.LINES):k.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else k.isPoints?yt.setMode(L.POINTS):k.isSprite&&yt.setMode(L.TRIANGLES);if(k.isBatchedMesh)yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)yt.renderInstances(Ct,Bt,k.count);else if(V.isInstancedBufferGeometry){const st=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ko=Math.min(V.instanceCount,st);yt.renderInstances(Ct,Bt,Ko)}else yt.render(Ct,Bt)};function lt(C,O,V){C.transparent===!0&&C.side===Ln&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,sa(C,O,V),C.side=Fn,C.needsUpdate=!0,sa(C,O,V),C.side=Ln):sa(C,O,V)}this.compile=function(C,O,V=null){V===null&&(V=C),p=Oe.get(V),p.init(),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),C!==V&&C.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const H=new Set;return C.traverse(function(k){const Ee=k.material;if(Ee)if(Array.isArray(Ee))for(let Be=0;Be<Ee.length;Be++){const Xe=Ee[Be];lt(Xe,V,k),H.add(Xe)}else lt(Ee,V,k),H.add(Ee)}),y.pop(),p=null,H},this.compileAsync=function(C,O,V=null){const H=this.compile(C,O,V);return new Promise(k=>{function Ee(){if(H.forEach(function(Be){ve.get(Be).currentProgram.isReady()&&H.delete(Be)}),H.size===0){k(C);return}setTimeout(Ee,10)}j.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ct=null;function xt(C){ct&&ct(C)}function Dt(){Ut.stop()}function ht(){Ut.start()}const Ut=new Tp;Ut.setAnimationLoop(xt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(C){ct=C,ee.setAnimationLoop(C),C===null?Ut.stop():Ut.start()},ee.addEventListener("sessionstart",Dt),ee.addEventListener("sessionend",ht),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,O,E),p=Oe.get(C,y.length),p.init(),y.push(p),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,oe=qe.init(this.clippingPlanes,Me),_=be.get(C,g.length),_.init(),g.push(_),hn(C,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Q,Y),this.info.render.frame++,oe===!0&&qe.beginShadows();const V=p.state.shadowsArray;if(se.render(V,C,O),oe===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(_,C),p.setupLights(v._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let k=0,Ee=H.length;k<Ee;k++){const Be=H[k];nr(_,C,Be,Be.viewport)}}else nr(_,C,O);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,O),he.resetDefaultState(),D=-1,b=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function hn(C,O,V,H){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){H&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const Be=ie.update(C),Xe=C.material;Xe.visible&&_.push(C,Be,Xe,V,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Be=ie.update(C),Xe=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),$e.copy(Be.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(Xe)){const Ze=Be.groups;for(let it=0,Ke=Ze.length;it<Ke;it++){const Qe=Ze[it],Ct=Xe[Qe.materialIndex];Ct&&Ct.visible&&_.push(C,Be,Ct,V,$e.z,Qe)}}else Xe.visible&&_.push(C,Be,Xe,V,$e.z,null)}}const Ee=C.children;for(let Be=0,Xe=Ee.length;Be<Xe;Be++)hn(Ee[Be],O,V,H)}function nr(C,O,V,H){const k=C.opaque,Ee=C.transmissive,Be=C.transparent;p.setupLightsView(V),oe===!0&&qe.setGlobalState(v.clippingPlanes,V),Ee.length>0&&Jo(k,Ee,O,V),H&&K.viewport(T.copy(H)),k.length>0&&us(k,O,V),Ee.length>0&&us(Ee,O,V),Be.length>0&&us(Be,O,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Jo(C,O,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Ee=ue.isWebGL2;Ae===null&&(Ae=new Qt(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Dn:ni,minFilter:Ri,samples:Ee?4:0})),v.getDrawingBufferSize(We),Ee?Ae.setSize(We.x,We.y):Ae.setSize(po(We.x),po(We.y));const Be=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(re),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Xe=v.toneMapping;v.toneMapping=ti,us(C,V,H),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Ze=!1;for(let it=0,Ke=O.length;it<Ke;it++){const Qe=O[it],Ct=Qe.object,un=Qe.geometry,Bt=Qe.material,Gn=Qe.group;if(Bt.side===Ln&&Ct.layers.test(H.layers)){const yt=Bt.side;Bt.side=jt,Bt.needsUpdate=!0,Oh(Ct,V,H,un,Bt,Gn),Bt.side=yt,Bt.needsUpdate=!0,Ze=!0}}Ze===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Be),v.setClearColor(re,I),v.toneMapping=Xe}function us(C,O,V){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,Ee=C.length;k<Ee;k++){const Be=C[k],Xe=Be.object,Ze=Be.geometry,it=H===null?Be.material:H,Ke=Be.group;Xe.layers.test(V.layers)&&Oh(Xe,O,V,Ze,it,Ke)}}function Oh(C,O,V,H,k,Ee){C.onBeforeRender(v,O,V,H,k,Ee),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,O,V,H,C,Ee),k.transparent===!0&&k.side===Ln&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,v.renderBufferDirect(V,O,H,k,C,Ee),k.side=Fn,k.needsUpdate=!0,v.renderBufferDirect(V,O,H,k,C,Ee),k.side=Ln):v.renderBufferDirect(V,O,H,k,C,Ee),C.onAfterRender(v,O,V,H,k,Ee)}function sa(C,O,V){O.isScene!==!0&&(O=Pe);const H=ve.get(C),k=p.state.lights,Ee=p.state.shadowsArray,Be=k.state.version,Xe=Le.getParameters(C,k.state,Ee,O,V),Ze=Le.getProgramCacheKey(Xe);let it=H.programs;H.environment=C.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(C.isMeshStandardMaterial?N:w).get(C.envMap||H.environment),it===void 0&&(C.addEventListener("dispose",de),it=new Map,H.programs=it);let Ke=it.get(Ze);if(Ke!==void 0){if(H.currentProgram===Ke&&H.lightsStateVersion===Be)return Bh(C,Xe),Ke}else Xe.uniforms=Le.getUniforms(C),C.onBuild(V,Xe,v),C.onBeforeCompile(Xe,v),Ke=Le.acquireProgram(Xe,Ze),it.set(Ze,Ke),H.uniforms=Xe.uniforms;const Qe=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=qe.uniform),Bh(C,Xe),H.needsLights=qm(C),H.lightsStateVersion=Be,H.needsLights&&(Qe.ambientLightColor.value=k.state.ambient,Qe.lightProbe.value=k.state.probe,Qe.directionalLights.value=k.state.directional,Qe.directionalLightShadows.value=k.state.directionalShadow,Qe.spotLights.value=k.state.spot,Qe.spotLightShadows.value=k.state.spotShadow,Qe.rectAreaLights.value=k.state.rectArea,Qe.ltc_1.value=k.state.rectAreaLTC1,Qe.ltc_2.value=k.state.rectAreaLTC2,Qe.pointLights.value=k.state.point,Qe.pointLightShadows.value=k.state.pointShadow,Qe.hemisphereLights.value=k.state.hemi,Qe.directionalShadowMap.value=k.state.directionalShadowMap,Qe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Qe.spotShadowMap.value=k.state.spotShadowMap,Qe.spotLightMatrix.value=k.state.spotLightMatrix,Qe.spotLightMap.value=k.state.spotLightMap,Qe.pointShadowMap.value=k.state.pointShadowMap,Qe.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ke,H.uniformsList=null,Ke}function Fh(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=ao.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Bh(C,O){const V=ve.get(C);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Wm(C,O,V,H,k){O.isScene!==!0&&(O=Pe),A.resetTextureUnits();const Ee=O.fog,Be=H.isMeshStandardMaterial?O.environment:null,Xe=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Bn,Ze=(H.isMeshStandardMaterial?N:w).get(H.envMap||Be),it=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Qe=!!V.morphAttributes.position,Ct=!!V.morphAttributes.normal,un=!!V.morphAttributes.color;let Bt=ti;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const Gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=Gn!==void 0?Gn.length:0,st=ve.get(H),Ko=p.state.lights;if(oe===!0&&(Me===!0||C!==b)){const _n=C===b&&H.id===D;qe.setState(H,C,_n)}let Tt=!1;H.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Ko.state.version||st.outputColorSpace!==Xe||k.isBatchedMesh&&st.batching===!1||!k.isBatchedMesh&&st.batching===!0||k.isInstancedMesh&&st.instancing===!1||!k.isInstancedMesh&&st.instancing===!0||k.isSkinnedMesh&&st.skinning===!1||!k.isSkinnedMesh&&st.skinning===!0||k.isInstancedMesh&&st.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&st.instancingColor===!1&&k.instanceColor!==null||st.envMap!==Ze||H.fog===!0&&st.fog!==Ee||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==qe.numPlanes||st.numIntersection!==qe.numIntersection)||st.vertexAlphas!==it||st.vertexTangents!==Ke||st.morphTargets!==Qe||st.morphNormals!==Ct||st.morphColors!==un||st.toneMapping!==Bt||ue.isWebGL2===!0&&st.morphTargetsCount!==yt)&&(Tt=!0):(Tt=!0,st.__version=H.version);let Ui=st.currentProgram;Tt===!0&&(Ui=sa(H,O,k));let zh=!1,ir=!1,jo=!1;const Ht=Ui.getUniforms(),Ni=st.uniforms;if(K.useProgram(Ui.program)&&(zh=!0,ir=!0,jo=!0),H.id!==D&&(D=H.id,ir=!0),zh||b!==C){Ht.setValue(L,"projectionMatrix",C.projectionMatrix),Ht.setValue(L,"viewMatrix",C.matrixWorldInverse);const _n=Ht.map.cameraPosition;_n!==void 0&&_n.setValue(L,$e.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,ir=!0,jo=!0)}if(k.isSkinnedMesh){Ht.setOptional(L,k,"bindMatrix"),Ht.setOptional(L,k,"bindMatrixInverse");const _n=k.skeleton;_n&&(ue.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ht.setValue(L,"boneTexture",_n.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ht.setOptional(L,k,"batchingTexture"),Ht.setValue(L,"batchingTexture",k._matricesTexture,A));const Qo=V.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0&&ue.isWebGL2===!0)&&nt.update(k,V,Ui),(ir||st.receiveShadow!==k.receiveShadow)&&(st.receiveShadow=k.receiveShadow,Ht.setValue(L,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ni.envMap.value=Ze,Ni.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),ir&&(Ht.setValue(L,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&Xm(Ni,jo),Ee&&H.fog===!0&&_e.refreshFogUniforms(Ni,Ee),_e.refreshMaterialUniforms(Ni,H,te,z,Ae),ao.upload(L,Fh(st),Ni,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ao.upload(L,Fh(st),Ni,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ht.setValue(L,"center",k.center),Ht.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ht.setValue(L,"normalMatrix",k.normalMatrix),Ht.setValue(L,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const _n=H.uniformsGroups;for(let el=0,$m=_n.length;el<$m;el++)if(ue.isWebGL2){const kh=_n[el];pe.update(kh,Ui),pe.bind(kh,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Xm(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function qm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,O,V){ve.get(C.texture).__webglTexture=O,ve.get(C.depthTexture).__webglTexture=V;const H=ve.get(C);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,O){const V=ve.get(C);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,V=0){E=C,x=O,M=V;let H=!0,k=null,Ee=!1,Be=!1;if(C){const Ze=ve.get(C);Ze.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):Ze.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ze.__hasExternalTextures&&A.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Be=!0);const Ke=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[O])?k=Ke[O][V]:k=Ke[O],Ee=!0):ue.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?k=ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[V]:k=Ke,T.copy(C.viewport),U.copy(C.scissor),X=C.scissorTest}else T.copy(ae).multiplyScalar(te).floor(),U.copy(ce).multiplyScalar(te).floor(),X=ye;if(K.bindFramebuffer(L.FRAMEBUFFER,k)&&ue.drawBuffers&&H&&K.drawBuffers(C,k),K.viewport(T),K.scissor(U),K.setScissorTest(X),Ee){const Ze=ve.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ze.__webglTexture,V)}else if(Be){const Ze=ve.get(C.texture),it=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,V||0,it)}D=-1},this.readRenderTargetPixels=function(C,O,V,H,k,Ee,Be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){K.bindFramebuffer(L.FRAMEBUFFER,Xe);try{const Ze=C.texture,it=Ze.format,Ke=Ze.type;if(it!==on&&G.convert(it)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ke===Dn&&(j.has("EXT_color_buffer_half_float")||ue.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ke!==ni&&G.convert(Ke)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Tn&&(ue.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-H&&V>=0&&V<=C.height-k&&L.readPixels(O,V,H,k,G.convert(it),G.convert(Ke),Ee)}finally{const Ze=E!==null?ve.get(E).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(C,O,V=0){const H=Math.pow(2,-V),k=Math.floor(O.image.width*H),Ee=Math.floor(O.image.height*H);A.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,C.x,C.y,k,Ee),K.unbindTexture()},this.copyTextureToTexture=function(C,O,V,H=0){const k=O.image.width,Ee=O.image.height,Be=G.convert(V.format),Xe=G.convert(V.type);A.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,C.x,C.y,k,Ee,Be,Xe,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,C.x,C.y,O.mipmaps[0].width,O.mipmaps[0].height,Be,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,C.x,C.y,Be,Xe,O.image),H===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(C,O,V,H,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=C.max.x-C.min.x+1,Be=C.max.y-C.min.y+1,Xe=C.max.z-C.min.z+1,Ze=G.convert(H.format),it=G.convert(H.type);let Ke;if(H.isData3DTexture)A.setTexture3D(H,0),Ke=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)A.setTexture2DArray(H,0),Ke=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Ct=L.getParameter(L.UNPACK_IMAGE_HEIGHT),un=L.getParameter(L.UNPACK_SKIP_PIXELS),Bt=L.getParameter(L.UNPACK_SKIP_ROWS),Gn=L.getParameter(L.UNPACK_SKIP_IMAGES),yt=V.isCompressedTexture?V.mipmaps[k]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,C.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,C.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(Ke,k,O.x,O.y,O.z,Ee,Be,Xe,Ze,it,yt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ke,k,O.x,O.y,O.z,Ee,Be,Xe,Ze,yt.data)):L.texSubImage3D(Ke,k,O.x,O.y,O.z,Ee,Be,Xe,Ze,it,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct),L.pixelStorei(L.UNPACK_SKIP_PIXELS,un),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),k===0&&H.generateMipmaps&&L.generateMipmap(Ke),K.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),K.unbindTexture()},this.resetState=function(){x=0,M=0,E=null,K.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mo?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Ti:Qc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?Mt:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Dp extends hh{}Dp.prototype.isWebGL1Renderer=!0;class Eo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ao{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uh extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Co{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new R;class ss{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fh extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const lr=new R,Cs=new R,Rs=new R,Ps=new J,cr=new J,Up=new Ve,Aa=new R,hr=new R,Ca=new R,Tu=new J,wl=new J,Eu=new J;class Np extends ot{constructor(e=new fh){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Co(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new ss(n,3,0,!1)),As.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ra(Aa.set(-.5,-.5,0),Rs,a,Cs,i,r),Ra(hr.set(.5,-.5,0),Rs,a,Cs,i,r),Ra(Ca.set(.5,.5,0),Rs,a,Cs,i,r),Tu.set(0,0),wl.set(1,0),Eu.set(1,1);let o=e.ray.intersectTriangle(Aa,hr,Ca,!1,lr);if(o===null&&(Ra(hr.set(-.5,.5,0),Rs,a,Cs,i,r),wl.set(0,1),o=e.ray.intersectTriangle(Aa,Ca,hr,!1,lr),o===null))return;const l=e.ray.origin.distanceTo(lr);l<e.near||l>e.far||t.push({distance:l,point:lr.clone(),uv:an.getInterpolation(lr,Aa,hr,Ca,Tu,wl,Eu,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ra(s,e,t,n,i,r){Ps.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(cr.x=r*Ps.x-i*Ps.y,cr.y=i*Ps.x+r*Ps.y):cr.copy(Ps),s.copy(e),s.x+=cr.x,s.y+=cr.y,s.applyMatrix4(Up)}const Pa=new R,Au=new R;class Op extends ot{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Pa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Pa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Pa.setFromMatrixPosition(e.matrixWorld),Au.setFromMatrixPosition(this.matrixWorld);const n=Pa.distanceTo(Au)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Cu=new R,Ru=new mt,Pu=new mt,sM=new R,Lu=new Ve,La=new R,Tl=new Yt,Iu=new Ve,El=new Js;class Fp extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(Iu.copy(i).invert(),El.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ru.fromBufferAttribute(i.attributes.skinIndex,e),Pu.fromBufferAttribute(i.attributes.skinWeight,e),Cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Pu.getComponent(r);if(a!==0){const o=Ru.getComponent(r);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sM.copy(Cu).applyMatrix4(Lu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Pt,h=Pt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new Ve,rM=new Ve;class Ro{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:rM;Du.multiplyMatrices(o,t[r]),Du.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ro(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ns(t,e,e,on,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dh),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class qs extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new Ve,Uu=new Ve,Ia=[],Nu=new tn,aM=new Ve,ur=new Lt,fr=new Yt;class ph extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,aM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Nu.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Nu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),fr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ls),Uu.multiplyMatrices(n,Ls),ur.matrixWorld=Uu,ur.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){const l=Ia[a];l.instanceId=r,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function oM(s,e){return s.z-e.z}function lM(s,e){return e.z-s.z}class cM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}}const Is="batchId",_i=new Ve,Ou=new Ve,hM=new Ve,Fu=new Ve,Al=new jr,Da=new tn,ki=new Yt,dr=new R,Cl=new cM,Xt=new Lt,Ua=[];function uM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class Bp extends Lt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ns(t,e,e,on,Tn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:h,normalized:u}=l,f=new c.constructor(n*h),d=new l.constructor(f,h,u);d.setUsage(l.usage),t.setAttribute(o,d)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new gt(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Is,new gt(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Is))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Is}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Is)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,_i),this.getBoundingBoxAt(i,Da).applyMatrix4(_i),t.union(Da))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,_i),this.getBoundingSphereAt(i,ki).applyMatrix4(_i),t.union(ki))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._visibility,f=this._active,d=this._matricesTexture,m=this._matricesTexture.image.data;u.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,hM.toArray(m,_*16),d.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new tn,sphereInitialized:!1,sphere:new Yt});const p=this.geometry.getAttribute(Is);for(let g=0;g<i.vertexCount;g++)p.setX(i.vertexStart+g,_);return p.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){if(d===Is)continue;const m=t.getAttribute(d),_=n.getAttribute(d);uM(m,_,l);const p=m.itemSize;for(let g=m.count,y=c;g<y;g++){const v=l+g;for(let S=0;S<p;S++)_.setComponent(v,S,0)}_.needsUpdate=!0}if(i){const d=o.indexStart;for(let m=0;m<a.count;m++)r.setX(d+m,l+a.getX(m));for(let m=a.count,_=o.indexCount;m<_;m++)r.setX(d+m,l);r.needsUpdate=!0}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?a.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let h=c.start,u=c.start+c.count;h<u;h++){let f=h;o&&(f=o.getX(f)),r.expandByPoint(dr.fromBufferAttribute(l,f))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Da),Da.getCenter(r.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[e];let h=0;for(let u=c.start,f=c.start+c.count;u<f;u++){let d=u;o&&(d=o.getX(d)),dr.fromBufferAttribute(l,d),h=Math.max(h,r.center.distanceToSquared(dr))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Xt.material=this.material,Xt.geometry.index=l.index,Xt.geometry.attributes=l.attributes,Xt.geometry.boundingBox===null&&(Xt.geometry.boundingBox=new tn),Xt.geometry.boundingSphere===null&&(Xt.geometry.boundingSphere=new Yt);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;const h=r[c];Xt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,Xt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Xt.geometry.boundingBox),this.getBoundingSphereAt(c,Xt.geometry.boundingSphere),Xt.raycast(e,Ua);for(let u=0,f=Ua.length;u<f;u++){const d=Ua[u];d.object=this,d.batchId=c,t.push(d)}Ua.length=0}Xt.material=null,Xt.geometry.index=null,Xt.geometry.attributes={},Xt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._visibility,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Al.setFromProjectionMatrix(Fu,e.isWebGPURenderer?Hs:En));let d=0;if(this.sortObjects){Ou.copy(this.matrixWorld).invert(),dr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ou);for(let p=0,g=l.length;p<g;p++)if(l[p]){this.getMatrixAt(p,_i),this.getBoundingSphereAt(p,ki).applyMatrix4(_i);let y=!1;if(f&&(y=!Al.intersectsSphere(ki)),!y){const v=dr.distanceTo(ki.center);Cl.push(u[p],v)}}const m=Cl.list,_=this.customSort;_===null?m.sort(r.transparent?lM:oM):_.call(this,m,n);for(let p=0,g=m.length;p<g;p++){const y=m[p];c[d]=y.start*o,h[d]=y.count,d++}Cl.reset()}else for(let m=0,_=l.length;m<_;m++)if(l[m]){let p=!1;if(f&&(this.getMatrixAt(m,_i),this.getBoundingSphereAt(m,ki).applyMatrix4(_i),p=!Al.intersectsSphere(ki)),!p){const g=u[m];c[d]=g.start*o,h[d]=g.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class sn extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new R,zu=new R,ku=new Ve,Rl=new Js,Na=new Yt;class Pi extends ot{constructor(e=new je,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bu.fromBufferAttribute(t,i-1),zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;ku.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,f=new R,d=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=g,S=y-1;v<S;v+=d){const x=m.getX(v),M=m.getX(v+1);if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,M),Rl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=g,S=y-1;v<S;v+=d){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Rl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Vu=new R,Hu=new R;class Hn extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vu.distanceTo(Hu);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zp extends Pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mh extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new Ve,Cc=new Js,Oa=new Yt,Fa=new R;class kp extends ot{constructor(e=new je,t=new mh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Gu.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const p=c.getX(m);Fa.fromBufferAttribute(u,p),Wu(Fa,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Fa.fromBufferAttribute(u,m),Wu(Fa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wu(s,e,t,n,i,r,a){const o=Cc.distanceSqToPoint(s);if(o<t){const l=new R;Cc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class fM extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:pt,this.magFilter=r!==void 0?r:pt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class dM extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Po extends It{constructor(e,t,n,i,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class pM extends Po{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=qt}}class mM extends Po{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,si),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class yi extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new J:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,l=new Ve;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(At(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lo extends Cn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new J,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vp extends Lo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ba=new R,Pl=new gh,Ll=new gh,Il=new gh;class Hp extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Pl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,p),Ll.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,p),Il.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Il.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Pl.calc(l),Ll.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function gM(s,e){const t=1-s;return t*t*e}function _M(s,e){return 2*(1-s)*s*e}function vM(s,e){return s*s*e}function Mr(s,e,t,n){return gM(s,e)+_M(s,t)+vM(s,n)}function xM(s,e){const t=1-s;return t*t*t*e}function yM(s,e){const t=1-s;return 3*t*t*s*e}function MM(s,e){return 3*(1-s)*s*s*e}function bM(s,e){return s*s*s*e}function br(s,e,t,n,i){return xM(s,e)+yM(s,t)+MM(s,n)+bM(s,i)}class _h extends Cn{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,i.x,r.x,a.x,o.x),br(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gp extends Cn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,i.x,r.x,a.x,o.x),br(e,i.y,r.y,a.y,o.y),br(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vh extends Cn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends Cn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends Cn{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,i.x,r.x,a.x),Mr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends Cn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,i.x,r.x,a.x),Mr(e,i.y,r.y,a.y),Mr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mh extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Xu(o,l.x,c.x,h.x,u.x),Xu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var go=Object.freeze({__proto__:null,ArcCurve:Vp,CatmullRomCurve3:Hp,CubicBezierCurve:_h,CubicBezierCurve3:Gp,EllipseCurve:Lo,LineCurve:vh,LineCurve3:Wp,QuadraticBezierCurve:xh,QuadraticBezierCurve3:yh,SplineCurve:Mh});class Xp extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new go[i.type]().fromJSON(i))}return this}}class $s extends Xp{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vh(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new xh(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new _h(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Mh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Lo(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ea extends je{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,f=new J,d=new R,m=new R,_=new R;let p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=t;y++){const v=n+y*h*i,S=Math.sin(v),x=Math.cos(v);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*S,u.y=e[M].y,u.z=e[M].x*x,a.push(u.x,u.y,u.z),f.x=y/t,f.y=M/(e.length-1),o.push(f.x,f.y);const E=l[3*M+0]*S,D=l[3*M+1],b=l[3*M+0]*x;c.push(E,D,b)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const S=v+y*e.length,x=S,M=S+e.length,E=S+e.length+1,D=S+1;r.push(x,M,D),r.push(E,D,M)}this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.points,e.segments,e.phiStart,e.phiLength)}}class Io extends ea{constructor(e=1,t=1,n=4,i=8){const r=new $s;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Io(e.radius,e.length,e.capSegments,e.radialSegments)}}class Do extends je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new R,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qs extends je{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],p=n/2;let g=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function y(){const S=new R,x=new R;let M=0;const E=(t-e)/n;for(let D=0;D<=r;D++){const b=[],T=D/r,U=T*(t-e)+e;for(let X=0;X<=i;X++){const re=X/i,I=re*l+o,F=Math.sin(I),z=Math.cos(I);x.x=U*F,x.y=-T*n+p,x.z=U*z,u.push(x.x,x.y,x.z),S.set(F,E,z).normalize(),f.push(S.x,S.y,S.z),d.push(re,1-T),b.push(m++)}_.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){const T=_[b][D],U=_[b+1][D],X=_[b+1][D+1],re=_[b][D+1];h.push(T,U,re),h.push(U,X,re),M+=6}c.addGroup(g,M,0),g+=M}function v(S){const x=m,M=new J,E=new R;let D=0;const b=S===!0?e:t,T=S===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,p*T,0),f.push(0,T,0),d.push(.5,.5),m++;const U=m;for(let X=0;X<=i;X++){const I=X/i*l+o,F=Math.cos(I),z=Math.sin(I);E.x=b*z,E.y=p*T,E.z=b*F,u.push(E.x,E.y,E.z),f.push(0,T,0),M.x=F*.5+.5,M.y=z*.5*T+.5,d.push(M.x,M.y),m++}for(let X=0;X<i;X++){const re=x+X,I=U+X;S===!0?h.push(I,I+1,re):h.push(I+1,I,re),D+=3}c.addGroup(g,D,S===!0?1:2),g+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends Qs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Uo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new R,S=new R,x=new R;for(let M=0;M<t.length;M+=3)d(t[M+0],v),d(t[M+1],S),d(t[M+2],x),l(v,S,x,y)}function l(y,v,S,x){const M=x+1,E=[];for(let D=0;D<=M;D++){E[D]=[];const b=y.clone().lerp(S,D/M),T=v.clone().lerp(S,D/M),U=M-D;for(let X=0;X<=U;X++)X===0&&D===M?E[D][X]=b:E[D][X]=b.clone().lerp(T,X/U)}for(let D=0;D<M;D++)for(let b=0;b<2*(M-D)-1;b++){const T=Math.floor(b/2);b%2===0?(f(E[D][T+1]),f(E[D+1][T]),f(E[D][T])):(f(E[D][T+1]),f(E[D+1][T+1]),f(E[D+1][T]))}}function c(y){const v=new R;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(y),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const S=p(y)/2/Math.PI+.5,x=g(y)/Math.PI+.5;a.push(S,1-x)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],S=a[y+2],x=a[y+4],M=Math.max(v,S,x),E=Math.min(v,S,x);M>.9&&E<.1&&(v<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),x<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function m(){const y=new R,v=new R,S=new R,x=new R,M=new J,E=new J,D=new J;for(let b=0,T=0;b<r.length;b+=9,T+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),M.set(a[T+0],a[T+1]),E.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),x.copy(y).add(v).add(S).divideScalar(3);const U=p(x);_(M,T+0,y,U),_(E,T+2,v,U),_(D,T+4,S,U)}}function _(y,v,S,x){x<0&&y.x===1&&(a[v]=y.x-1),S.x===0&&S.z===0&&(a[v]=x/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.vertices,e.indices,e.radius,e.details)}}class No extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new No(e.radius,e.detail)}}const za=new R,ka=new R,Dl=new R,Va=new an;class qp extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ts*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=Va;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Va.getNormal(Dl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const v=(y+1)%3,S=u[y],x=u[v],M=Va[h[y]],E=Va[h[v]],D=`${S}_${x}`,b=`${x}_${S}`;b in f&&f[b]?(Dl.dot(f[b].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(E.x,E.y,E.z)),f[b]=null):D in f||(f[D]={index0:c[y],index1:c[v],normal:Dl.clone()})}}for(const m in f)if(f[m]){const{index0:_,index1:p}=f[m];za.fromBufferAttribute(o,_),ka.fromBufferAttribute(o,p),d.push(za.x,za.y,za.z),d.push(ka.x,ka.y,ka.z)}this.setAttribute("position",new Re(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ii extends $s{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new $s().fromJSON(i))}return this}}const SM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=$p(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=CM(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Nr(r,a,t,o,l,d,0),a}};function $p(s,e,t,n,i){let r,a;if(i===zM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=qu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=qu(r,s[r],s[r+1],a);return a&&Oo(a,a.next)&&(Fr(a),a=a.next),a}function rs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Oo(t,t.next)||bt(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&DM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?TM(s,n,i,r):wM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Fr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=EM(rs(s),e,t),Nr(s,e,t,n,i,r,2)):a===2&&AM(s,e,t,n,i,r):Nr(rs(s),e,t,n,i,r,1);break}}}function wM(s){const e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Os(i,o,r,l,a,c,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function TM(s,e,t,n){const i=s.prev,r=s,a=s.next;if(bt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=Rc(d,m,e,t,n),y=Rc(_,p,e,t,n);let v=s.prevZ,S=s.nextZ;for(;v&&v.z>=g&&S&&S.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Os(o,h,l,u,c,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Os(o,h,l,u,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Os(o,h,l,u,c,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Os(o,h,l,u,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function EM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Oo(i,r)&&Yp(i,n,n.next,r)&&Or(i,r)&&Or(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Fr(n),Fr(n.next),n=s=r),n=n.next}while(n!==s);return rs(n)}function AM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&OM(a,o)){let l=Zp(a,o);a=rs(a,a.next),l=rs(l,l.next),Nr(a,e,t,n,i,r,0),Nr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function CM(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=$p(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(NM(c));for(i.sort(RM),r=0;r<i.length;r++)t=PM(i[r],t);return t}function RM(s,e){return s.x-e.x}function PM(s,e){const t=LM(s,e);if(!t)return e;const n=Zp(t,s);return rs(n,n.next),rs(t,t.next)}function LM(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Os(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Or(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&IM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function IM(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function DM(s,e,t,n){let i=s;do i.z===0&&(i.z=Rc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,UM(i)}function UM(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Rc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function NM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Os(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function OM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!FM(s,e)&&(Or(s,e)&&Or(e,s)&&BM(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||Oo(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Oo(s,e){return s.x===e.x&&s.y===e.y}function Yp(s,e,t,n){const i=Ga(bt(s,e,t)),r=Ga(bt(s,e,n)),a=Ga(bt(t,n,s)),o=Ga(bt(t,n,e));return!!(i!==r&&a!==o||i===0&&Ha(s,t,e)||r===0&&Ha(s,n,e)||a===0&&Ha(t,s,n)||o===0&&Ha(t,e,n))}function Ha(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ga(s){return s>0?1:s<0?-1:0}function FM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Yp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Or(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function BM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Zp(s,e){const t=new Pc(s.i,s.x,s.y),n=new Pc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qu(s,e,t,n){const i=new Pc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Un{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Un.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$u(e),Yu(n,e);let a=e.length;t.forEach($u);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Yu(n,t[l]);const o=SM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $u(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Yu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class bn extends je{constructor(e=new ii([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:kM;let v,S=!1,x,M,E,D;g&&(v=g.getSpacedPoints(h),S=!0,f=!1,x=g.computeFrenetFrames(h,!1),M=new R,E=new R,D=new R),f||(p=0,d=0,m=0,_=0);const b=o.extractPoints(c);let T=b.shape;const U=b.holes;if(!Un.isClockWise(T)){T=T.reverse();for(let L=0,fe=U.length;L<fe;L++){const j=U[L];Un.isClockWise(j)&&(U[L]=j.reverse())}}const re=Un.triangulateShape(T,U),I=T;for(let L=0,fe=U.length;L<fe;L++){const j=U[L];T=T.concat(j)}function F(L,fe,j){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(fe,j)}const z=T.length,te=re.length;function Q(L,fe,j){let ue,K,Fe;const ve=L.x-fe.x,A=L.y-fe.y,w=j.x-L.x,N=j.y-L.y,le=ve*ve+A*A,ne=ve*N-A*w;if(Math.abs(ne)>Number.EPSILON){const ie=Math.sqrt(le),Le=Math.sqrt(w*w+N*N),_e=fe.x-A/ie,be=fe.y+ve/ie,Oe=j.x-N/Le,qe=j.y+w/Le,se=((Oe-_e)*N-(qe-be)*w)/(ve*N-A*w);ue=_e+ve*se-L.x,K=be+A*se-L.y;const rt=ue*ue+K*K;if(rt<=2)return new J(ue,K);Fe=Math.sqrt(rt/2)}else{let ie=!1;ve>Number.EPSILON?w>Number.EPSILON&&(ie=!0):ve<-Number.EPSILON?w<-Number.EPSILON&&(ie=!0):Math.sign(A)===Math.sign(N)&&(ie=!0),ie?(ue=-A,K=ve,Fe=Math.sqrt(le)):(ue=ve,K=A,Fe=Math.sqrt(le/2))}return new J(ue/Fe,K/Fe)}const Y=[];for(let L=0,fe=I.length,j=fe-1,ue=L+1;L<fe;L++,j++,ue++)j===fe&&(j=0),ue===fe&&(ue=0),Y[L]=Q(I[L],I[j],I[ue]);const ae=[];let ce,ye=Y.concat();for(let L=0,fe=U.length;L<fe;L++){const j=U[L];ce=[];for(let ue=0,K=j.length,Fe=K-1,ve=ue+1;ue<K;ue++,Fe++,ve++)Fe===K&&(Fe=0),ve===K&&(ve=0),ce[ue]=Q(j[ue],j[Fe],j[ve]);ae.push(ce),ye=ye.concat(ce)}for(let L=0;L<p;L++){const fe=L/p,j=d*Math.cos(fe*Math.PI/2),ue=m*Math.sin(fe*Math.PI/2)+_;for(let K=0,Fe=I.length;K<Fe;K++){const ve=F(I[K],Y[K],ue);Te(ve.x,ve.y,-j)}for(let K=0,Fe=U.length;K<Fe;K++){const ve=U[K];ce=ae[K];for(let A=0,w=ve.length;A<w;A++){const N=F(ve[A],ce[A],ue);Te(N.x,N.y,-j)}}}const W=m+_;for(let L=0;L<z;L++){const fe=f?F(T[L],ye[L],W):T[L];S?(E.copy(x.normals[0]).multiplyScalar(fe.x),M.copy(x.binormals[0]).multiplyScalar(fe.y),D.copy(v[0]).add(E).add(M),Te(D.x,D.y,D.z)):Te(fe.x,fe.y,0)}for(let L=1;L<=h;L++)for(let fe=0;fe<z;fe++){const j=f?F(T[fe],ye[fe],W):T[fe];S?(E.copy(x.normals[L]).multiplyScalar(j.x),M.copy(x.binormals[L]).multiplyScalar(j.y),D.copy(v[L]).add(E).add(M),Te(D.x,D.y,D.z)):Te(j.x,j.y,u/h*L)}for(let L=p-1;L>=0;L--){const fe=L/p,j=d*Math.cos(fe*Math.PI/2),ue=m*Math.sin(fe*Math.PI/2)+_;for(let K=0,Fe=I.length;K<Fe;K++){const ve=F(I[K],Y[K],ue);Te(ve.x,ve.y,u+j)}for(let K=0,Fe=U.length;K<Fe;K++){const ve=U[K];ce=ae[K];for(let A=0,w=ve.length;A<w;A++){const N=F(ve[A],ce[A],ue);S?Te(N.x,N.y+v[h-1].y,v[h-1].x+j):Te(N.x,N.y,u+j)}}}oe(),Me();function oe(){const L=i.length/3;if(f){let fe=0,j=z*fe;for(let ue=0;ue<te;ue++){const K=re[ue];We(K[2]+j,K[1]+j,K[0]+j)}fe=h+p*2,j=z*fe;for(let ue=0;ue<te;ue++){const K=re[ue];We(K[0]+j,K[1]+j,K[2]+j)}}else{for(let fe=0;fe<te;fe++){const j=re[fe];We(j[2],j[1],j[0])}for(let fe=0;fe<te;fe++){const j=re[fe];We(j[0]+z*h,j[1]+z*h,j[2]+z*h)}}n.addGroup(L,i.length/3-L,0)}function Me(){const L=i.length/3;let fe=0;Ae(I,fe),fe+=I.length;for(let j=0,ue=U.length;j<ue;j++){const K=U[j];Ae(K,fe),fe+=K.length}n.addGroup(L,i.length/3-L,1)}function Ae(L,fe){let j=L.length;for(;--j>=0;){const ue=j;let K=j-1;K<0&&(K=L.length-1);for(let Fe=0,ve=h+p*2;Fe<ve;Fe++){const A=z*Fe,w=z*(Fe+1),N=fe+ue+A,le=fe+K+A,ne=fe+K+w,ie=fe+ue+w;$e(N,le,ne,ie)}}}function Te(L,fe,j){l.push(L),l.push(fe),l.push(j)}function We(L,fe,j){Pe(L),Pe(fe),Pe(j);const ue=i.length/3,K=y.generateTopUV(n,i,ue-3,ue-2,ue-1);He(K[0]),He(K[1]),He(K[2])}function $e(L,fe,j,ue){Pe(L),Pe(fe),Pe(ue),Pe(fe),Pe(j),Pe(ue);const K=i.length/3,Fe=y.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);He(Fe[0]),He(Fe[1]),He(Fe[3]),He(Fe[1]),He(Fe[2]),He(Fe[3])}function Pe(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function He(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return VM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new go[i.type]().fromJSON(i)),new bn(n,e.options)}}const kM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(f,1-m),new J(_,1-g)]:[new J(o,1-l),new J(h,1-u),new J(d,1-m),new J(p,1-g)]}};function VM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fo extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fo(e.radius,e.detail)}}class ta extends Ii{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ta(e.radius,e.detail)}}class Bo extends je{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new R,m=new J;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const g=r+p/n*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let g=0;g<n;g++){const y=g+p,v=y,S=y+n+1,x=y+n+2,M=y+1;o.push(v,S,M),o.push(S,x,M)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zo extends je{constructor(e=new ii([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const y=m[p];Un.isClockWise(y)===!0&&(m[p]=y.reverse())}const _=Un.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const y=m[p];d=d.concat(y)}for(let p=0,g=d.length;p<g;p++){const y=d[p];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,g=_.length;p<g;p++){const y=_[p],v=y[0]+u,S=y[1]+u,x=y[2]+u;n.push(v,S,x),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return HM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new zo(n,e.curveSegments)}}function HM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class na extends je{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const y=[],v=g/n;let S=0;g===0&&a===0?S=.5/t:g===n&&l===Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){const M=x/t;u.x=-e*Math.cos(i+M*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+M*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(M+S,1-v),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const v=h[g][y+1],S=h[g][y],x=h[g+1][y],M=h[g+1][y+1];(g!==0||a>0)&&d.push(v,S,M),(g!==n-1||l<Math.PI)&&d.push(S,x,M)}this.setIndex(d),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ko extends Ii{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class Vo extends je{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,y=(i+1)*d+m;a.push(_,p,y),a.push(p,g,y)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ho extends je{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new R,f=new R,d=new R,m=new R,_=new R,p=new R,g=new R;for(let v=0;v<=n;++v){const S=v/n*r*Math.PI*2;y(S,r,a,e,d),y(S+.01,r,a,e,m),p.subVectors(m,d),g.addVectors(m,d),_.crossVectors(p,g),g.crossVectors(_,p),_.normalize(),g.normalize();for(let x=0;x<=i;++x){const M=x/i*Math.PI*2,E=-t*Math.cos(M),D=t*Math.sin(M);u.x=d.x+(E*g.x+D*_.x),u.y=d.y+(E*g.y+D*_.y),u.z=d.z+(E*g.z+D*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(v/n),h.push(x/i)}}for(let v=1;v<=n;v++)for(let S=1;S<=i;S++){const x=(i+1)*(v-1)+(S-1),M=(i+1)*v+(S-1),E=(i+1)*v+S,D=(i+1)*(v-1)+S;o.push(x,M,D),o.push(M,E,D)}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2));function y(v,S,x,M,E){const D=Math.cos(v),b=Math.sin(v),T=x/S*v,U=Math.cos(T);E.x=M*(2+U)*.5*D,E.y=M*(2+U)*b*.5,E.z=M*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Go extends je{constructor(e=new yh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new J;let h=new R;const u=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function _(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),y(),g()}function p(v){h=e.getPointAt(v/t,h);const S=a.normals[v],x=a.binormals[v];for(let M=0;M<=i;M++){const E=M/i*Math.PI*2,D=Math.sin(E),b=-Math.cos(E);l.x=b*S.x+D*x.x,l.y=b*S.y+D*x.y,l.z=b*S.z+D*x.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=t;v++)for(let S=1;S<=i;S++){const x=(i+1)*(v-1)+(S-1),M=(i+1)*v+(S-1),E=(i+1)*v+S,D=(i+1)*(v-1)+S;m.push(x,M,D),m.push(M,E,D)}}function y(){for(let v=0;v<=t;v++)for(let S=0;S<=i;S++)c.x=v/t,c.y=S/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Go(new go[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Jp extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let m=f,_=f+d;m<_;m+=3)for(let p=0;p<3;p++){const g=o.getX(m+p),y=o.getX(m+(p+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),Zu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Zu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Zu(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Ju=Object.freeze({__proto__:null,BoxGeometry:os,CapsuleGeometry:Io,CircleGeometry:Do,ConeGeometry:Uo,CylinderGeometry:Qs,DodecahedronGeometry:No,EdgesGeometry:qp,ExtrudeGeometry:bn,IcosahedronGeometry:Fo,LatheGeometry:ea,OctahedronGeometry:ta,PlaneGeometry:Qr,PolyhedronGeometry:Ii,RingGeometry:Bo,ShapeGeometry:zo,SphereGeometry:na,TetrahedronGeometry:ko,TorusGeometry:Vo,TorusKnotGeometry:Ho,TubeGeometry:Go,WireframeGeometry:Jp});class Kp extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class bh extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sh extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jp extends Sh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qp extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class em extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class tm extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class nm extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class im extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sm extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Qi(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function rm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function am(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function wh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function GM(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*i;if(!(m<t||m>=n)){u.push(c.times[d]);for(let _=0;_<h;++_)f.push(c.values[d*h+_])}}u.length!==0&&(c.times=Qi(u,c.times.constructor),c.values=Qi(f,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function WM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const g=h,y=u-h;_=o.values.slice(g,y)}else if(r>=o.times[m]){const g=m*u+h,y=g+u-h;_=o.values.slice(g,y)}else{const g=o.createInterpolant(),y=h,v=u-h;g.evaluate(r),_=g.resultBuffer.slice(y,v)}l==="quaternion"&&new en().fromArray(_).normalize().conjugate().toArray(_);const p=c.times.length;for(let g=0;g<p;++g){const y=g*d+f;if(l==="quaternion")en.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{const v=d-f*2;for(let S=0;S<v;++S)c.values[y+S]-=_[S]}}}return s.blendMode=jc,s}const XM={convertArray:Qi,isTypedArray:rm,getKeyframeOrder:am,sortedArray:Lc,flattenJSON:wh,subclip:GM,makeClipAdditive:WM};class ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class om extends ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zi,endingEnd:Zi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ji:r=e,o=2*t-n;break;case Rr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:a=e,l=2*n-t;break;case Rr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,v=(-1-d)*p+(1.5+d)*_+.5*m,S=d*p-d*_;for(let x=0;x!==o;++x)r[x]=g*a[h+x]+y*a[c+x]+v*a[l+x]+S*a[u+x];return r}}class Th extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class lm extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new om(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ro,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Cr;class ls extends Rn{}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ar;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Eh extends Rn{}Eh.prototype.ValueTypeName="color";class Br extends Rn{}Br.prototype.ValueTypeName="number";class cm extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}}class er extends Rn{InterpolantFactoryMethodLinear(e){return new cm(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion";er.prototype.DefaultInterpolation=Cr;er.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Rn{}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ar;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Rn{}zr.prototype.ValueTypeName="vector";class kr{constructor(e,t=-1,n,i=yo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($M(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=am(l);l=Lc(l,1,h),c=Lc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Br(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const p=[],g=[];wh(d,p,g,m),p.length!==0&&_.push(new u(f,p,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const p=[],g=[];for(let y=0;y!==f[m].morphTargets.length;++y){const v=f[m];p.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new Br(".morphTargetInfluence["+_+"]",p,g))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(zr,d+".position",f,"pos",i),n(er,d+".quaternion",f,"rot",i),n(zr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return zr;case"color":return Eh;case"quaternion":return er;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $M(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qM(s.type);if(s.times===void 0){const t=[],n=[];wh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ah{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const hm=new Ah;class cn{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class YM extends Error{constructor(e,t){super(e),this.response=t}}class ri extends cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0;let _=0;const p=new ReadableStream({start(g){y();function y(){u.read().then(({done:v,value:S})=>{if(v)g.close();else{_+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let M=0,E=h.length;M<E;M++){const D=h[M];D.onProgress&&D.onProgress(x)}g.enqueue(S),y()}})}}});return new Response(p)}else throw new YM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{jn.add(e,c);const h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ZM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=kr.parse(e[n]);t.push(i)}return t}}class JM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new Po,l=new ri(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=pt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+_]),a[m].format=f.format,a[m].width=f.width,a[m].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=pt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Vr extends cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ur("img");function l(){h(),jn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class KM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=new Kr;r.colorSpace=Mt;const a=new Vr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class jM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ns,o=new ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:qt,a.wrapT=c.wrapT!==void 0?c.wrapT:qt,a.magFilter=c.magFilter!==void 0?c.magFilter:pt,a.minFilter=c.minFilter!==void 0?c.minFilter:pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ri),c.mipmapCount===1&&(a.minFilter=pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class QM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new Vr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Di extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class um extends Di{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ul=new Ve,Ku=new R,ju=new R;class Ch{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eb extends Ch{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fm extends Di{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qu=new Ve,pr=new R,Nl=new R;class tb extends Ch{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(pr),Nl.copy(n.position),Nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nl),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}}class dm extends Di{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nb extends Ch{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pm extends Di{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mm extends Di{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gm extends Di{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class _m{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class vm extends Di{constructor(e=new _m,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Wo extends cn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=Wo.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new xe().setHex(a.value);break;case"v2":i.uniforms[r].value=new J().fromArray(a.value);break;case"v3":i.uniforms[r].value=new R().fromArray(a.value);break;case"v4":i.uniforms[r].value=new mt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new tt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Ve().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new J().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Kp,SpriteMaterial:fh,RawShaderMaterial:bh,ShaderMaterial:$t,PointsMaterial:mh,MeshPhysicalMaterial:jp,MeshStandardMaterial:Sh,MeshPhongMaterial:Qp,MeshToonMaterial:em,MeshNormalMaterial:tm,MeshLambertMaterial:nm,MeshDepthMaterial:lh,MeshDistanceMaterial:ch,MeshBasicMaterial:ui,MeshMatcapMaterial:im,LineDashedMaterial:sm,LineBasicMaterial:sn,Material:Zt};return new t[e]}}class Ic{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xm extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ym extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const p=d.interleavedBuffers[m],g=r(d,p.buffer),y=Ds(p.type,g),v=new Co(y,p.stride);return v.uuid=p.uuid,t[m]=v,v}function r(d,m){if(n[m]!==void 0)return n[m];const p=d.arrayBuffers[m],g=new Uint32Array(p).buffer;return n[m]=g,g}const a=e.isInstancedBufferGeometry?new xm:new je,o=e.data.index;if(o!==void 0){const d=Ds(o.type,o.array);a.setIndex(new gt(d,1))}const l=e.data.attributes;for(const d in l){const m=l[d];let _;if(m.isInterleavedBufferAttribute){const p=i(e.data,m.data);_=new ss(p,m.itemSize,m.offset,m.normalized)}else{const p=Ds(m.type,m.array),g=m.isInstancedBufferAttribute?qs:gt;_=new g(p,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const m=c[d],_=[];for(let p=0,g=m.length;p<g;p++){const y=m[p];let v;if(y.isInterleavedBufferAttribute){const S=i(e.data,y.data);v=new ss(S,y.itemSize,y.offset,y.normalized)}else{const S=Ds(y.type,y.array);v=new gt(S,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),_.push(v)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,m=u.length;d!==m;++d){const _=u[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new R;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Yt(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class ib extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Ic.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ic.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ri(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ii().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Ro().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new ym;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Ju?o=Ju[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Wo;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=kr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Ds(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Ah(t);r=new Vr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o(p);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new ns(g.data,g.width,g.height)))}i[u.uuid]=new Ki(d)}else{const d=o(u.url);i[u.uuid]=new Ki(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Ds(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Vr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=await r(d);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new ns(m.data,m.width,m.height)))}n[l.uuid]=new Ki(h)}else{const h=await r(l.url);n[l.uuid]=new Ki(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Kr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ns:h=new It,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,sb)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],ef),h.wrapT=n(o.wrap[1],ef)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.encoding!==void 0&&(h.encoding=o.encoding),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,tf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,tf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const p=f[m];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),d.push(n[p])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":a=new uh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new xe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ao(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Eo(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new Vt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ks(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new mm(e.color,e.intensity);break;case"DirectionalLight":a=new pm(e.color,e.intensity);break;case"PointLight":a=new dm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new gm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new fm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new um(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new vm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Fp(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Lt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new ph(h,u,f),a.instanceMatrix=new qs(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new qs(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Bp(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const p=new tn;p.min.fromArray(_.boxMin),p.max.fromArray(_.boxMax);const g=new Yt;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:p,sphereInitialized:_.sphereInitialized,sphere:g}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new Op;break;case"Line":a=new Pi(o(e.geometry),l(e.material));break;case"LineLoop":a=new zp(o(e.geometry),l(e.material));break;case"LineSegments":a=new Hn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new kp(o(e.geometry),l(e.material));break;case"Sprite":a=new Np(l(e.material));break;case"Group":a=new ji;break;case"Bone":a=new dh;break;default:a=new ot}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const m=f[d];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const m=f[d],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const sb={UVMapping:vo,CubeReflectionMapping:si,CubeRefractionMapping:Ci,EquirectangularReflectionMapping:Vs,EquirectangularRefractionMapping:wr,CubeUVReflectionMapping:Zs},ef={RepeatWrapping:Tr,ClampToEdgeWrapping:qt,MirroredRepeatWrapping:Er},tf={NearestFilter:Pt,NearestMipmapNearestFilter:uo,NearestMipmapLinearFilter:vr,LinearFilter:pt,LinearMipmapNearestFilter:Wc,LinearMipmapLinearFilter:Ri};class rb extends cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return jn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),jn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(e,l),r.manager.itemStart(e)}}let Wa;class Rh{static getContext(){return Wa===void 0&&(Wa=new(window.AudioContext||window.webkitAudioContext)),Wa}static setContext(e){Wa=e}}class ab extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Rh.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const nf=new Ve,sf=new Ve,Vi=new Ve;class ob{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Vt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Vt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Vi.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(ts*t.fov*.5)/t.zoom;let o,l;sf.elements[12]=-i,nf.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Vi),o=-a*t.aspect-r,l=a*t.aspect-r,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Vi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(sf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(nf)}}class Ph{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rf(){return(typeof performance>"u"?Date:performance).now()}const Hi=new R,af=new en,lb=new R,Gi=new R;class cb extends ot{constructor(){super(),this.type="AudioListener",this.context=Rh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ph}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hi,af,lb),Gi.set(0,0,-1).applyQuaternion(af),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Hi.x,i),t.positionY.linearRampToValueAtTime(Hi.y,i),t.positionZ.linearRampToValueAtTime(Hi.z,i),t.forwardX.linearRampToValueAtTime(Gi.x,i),t.forwardY.linearRampToValueAtTime(Gi.y,i),t.forwardZ.linearRampToValueAtTime(Gi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Hi.x,Hi.y,Hi.z),t.setOrientation(Gi.x,Gi.y,Gi.z,n.x,n.y,n.z)}}class Mm extends ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Wi=new R,of=new en,hb=new R,Xi=new R;class ub extends Mm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Wi,of,hb),Xi.set(0,0,1).applyQuaternion(of);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Wi.x,n),t.positionY.linearRampToValueAtTime(Wi.y,n),t.positionZ.linearRampToValueAtTime(Wi.z,n),t.orientationX.linearRampToValueAtTime(Xi.x,n),t.orientationY.linearRampToValueAtTime(Xi.y,n),t.orientationZ.linearRampToValueAtTime(Xi.z,n)}else t.setPosition(Wi.x,Wi.y,Wi.z),t.setOrientation(Xi.x,Xi.y,Xi.z)}}class fb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class bm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;en.multiplyQuaternionsFlat(e,a,e,t,e,n),en.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Lh="\\[\\]\\.:\\/",db=new RegExp("["+Lh+"]","g"),Ih="[^"+Lh+"]",pb="[^"+Lh.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",Ih),gb=/(WCOD+)?/.source.replace("WCOD",pb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),xb=new RegExp("^"+mb+gb+_b+vb+"$"),yb=["material","materials","bones","map"];class Mb{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(db,"")}static parseTrackName(e){const t=xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Mb;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=gn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(f);for(let _=0,p=a;_!==p;++_)r[_].push(new at(f,n[_],i[_]))}else if(m<c){o=e[m];const _=--c,p=e[_];t[p.uuid]=m,e[m]=p,t[d]=_,e[_]=f;for(let g=0,y=a;g!==y;++g){const v=r[g],S=v[_];let x=v[m];v[m]=S,x===void 0&&(x=new at(f,n[g],i[g])),v[_]=x}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,m=i;d!==m;++d){const _=n[d],p=_[u],g=_[h];_[h]=p,_[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],m=--a,_=e[m];t[d.uuid]=u,e[u]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let p=0,g=i;p!==g;++p){const y=n[p],v=y[f],S=y[m];y[u]=v,y[f]=S,y.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let m=0,_=i;m!==_;++m){const p=n[m];p[u]=p[f],p.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let f=h,d=l.length;f!==d;++f){const m=l[f];u[f]=new at(m,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Sm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Zi,endingEnd:Zi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ap,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case yo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===op;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===rp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Zi:i.endingStart=Rr,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Zi:i.endingEnd=Rr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Sb=new Float32Array(1);class wb extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let m=h[d];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new bm(at.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Th(new Float32Array(2),new Float32Array(2),1,Sb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?kr.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yo),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Sm(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?kr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Dh{constructor(e){this.value=e}clone(){return new Dh(this.value.clone===void 0?this.value:this.value.clone())}}let Tb=0;class Eb extends hi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Tb++}),this.name="",this.usage=Dr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ab extends Co{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Cb{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Rb{constructor(e,t,n=0,i=1/0){this.ray=new Js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Dc(e[i],this,n,t);return n.sort(lf),n}}function lf(s,e){return s.distance-e.distance}function Dc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Dc(i[r],e,t,!0)}}class Pb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const cf=new J;class Ib{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hf=new R,Xa=new R;class Db{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){hf.subVectors(e,this.start),Xa.subVectors(this.end,this.start);const n=Xa.dot(Xa);let r=Xa.dot(hf)/n;return t&&(r=At(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const uf=new R;class Ub extends ot{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Re(i,3));const r=new sn({fog:!1,toneMapped:!1});this.cone=new Hn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),uf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const vi=new R,qa=new Ve,Ol=new Ve;class Nb extends Hn{constructor(e){const t=wm(e),n=new je,i=[],r=[],a=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Re(i,3)),n.setAttribute("color",new Re(r,3));const l=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ol.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(qa.multiplyMatrices(Ol,o.matrixWorld),vi.setFromMatrixPosition(qa),i.setXYZ(a,vi.x,vi.y,vi.z),qa.multiplyMatrices(Ol,o.parent.matrixWorld),vi.setFromMatrixPosition(qa),i.setXYZ(a+1,vi.x,vi.y,vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function wm(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,wm(s.children[t]));return e}class Ob extends Lt{constructor(e,t,n){const i=new na(t,4,2),r=new ui({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Fb=new R,ff=new xe,df=new xe;class Bb extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ta(t);i.rotateY(Math.PI*.5),this.material=new ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new gt(a,3)),this.add(new Lt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ff.copy(this.light.color),df.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?ff:df;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Fb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zb extends Hn{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=f===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new je;h.setAttribute("position",new Re(l,3)),h.setAttribute("color",new Re(c,3));const u=new sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kb extends Hn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new xe(r),a=new xe(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,m=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,m);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const f=u&1?r:a,d=e-e/n*u;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),p=Math.sin(_)*d,g=Math.cos(_)*d;o.push(p,0,g),l.push(f.r,f.g,f.b),_=(m+1)/i*(Math.PI*2),p=Math.sin(_)*d,g=Math.cos(_)*d,o.push(p,0,g),l.push(f.r,f.g,f.b)}}const c=new je;c.setAttribute("position",new Re(o,3)),c.setAttribute("color",new Re(l,3));const h=new sn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const pf=new R,$a=new R,mf=new R;class Vb extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new je;i.setAttribute("position",new Re([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new sn({fog:!1,toneMapped:!1});this.lightPlane=new Pi(i,r),this.add(this.lightPlane),i=new je,i.setAttribute("position",new Re([0,0,0,0,0,1],3)),this.targetLine=new Pi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),pf.setFromMatrixPosition(this.light.matrixWorld),$a.setFromMatrixPosition(this.light.target.matrixWorld),mf.subVectors($a,pf),this.lightPlane.lookAt($a),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt($a),this.targetLine.scale.z=mf.length()}}const Ya=new R,Et=new wo;class Hb extends Hn{constructor(e){const t=new je,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Re(i,3)),t.setAttribute("color",new Re(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new xe(16755200),h=new xe(16711680),u=new xe(43775),f=new xe(16777215),d=new xe(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Rt("c",t,e,Et,0,0,-1),Rt("t",t,e,Et,0,0,1),Rt("n1",t,e,Et,-n,-i,-1),Rt("n2",t,e,Et,n,-i,-1),Rt("n3",t,e,Et,-n,i,-1),Rt("n4",t,e,Et,n,i,-1),Rt("f1",t,e,Et,-n,-i,1),Rt("f2",t,e,Et,n,-i,1),Rt("f3",t,e,Et,-n,i,1),Rt("f4",t,e,Et,n,i,1),Rt("u1",t,e,Et,n*.7,i*1.1,-1),Rt("u2",t,e,Et,-n*.7,i*1.1,-1),Rt("u3",t,e,Et,0,i*2,-1),Rt("cf1",t,e,Et,-n,0,1),Rt("cf2",t,e,Et,n,0,1),Rt("cf3",t,e,Et,0,-i,1),Rt("cf4",t,e,Et,0,i,1),Rt("cn1",t,e,Et,-n,0,-1),Rt("cn2",t,e,Et,n,0,-1),Rt("cn3",t,e,Et,0,-i,-1),Rt("cn4",t,e,Et,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rt(s,e,t,n,i,r,a){Ya.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ya.x,Ya.y,Ya.z)}}const Za=new tn;class Gb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new je;r.setIndex(new gt(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Za.setFromObject(this.object),Za.isEmpty())return;const t=Za.min,n=Za.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new je;r.setIndex(new gt(n,1)),r.setAttribute("position",new Re(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xb extends Pi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new je;a.setAttribute("position",new Re(r,3)),a.computeBoundingSphere(),super(a,new sn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new je;l.setAttribute("position",new Re(o,3)),l.computeBoundingSphere(),this.add(new Lt(l,new ui({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const gf=new R;let Ja,Fl;class qb extends ot{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new je,Ja.setAttribute("position",new Re([0,0,0,0,1,0],3)),Fl=new Qs(0,.5,1,5,1),Fl.translate(0,-.5,0)),this.position.copy(t),this.line=new Pi(Ja,new sn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Lt(Fl,new ui({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $b extends Hn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new je;i.setAttribute("position",new Re(t,3)),i.setAttribute("color",new Re(n,3));const r=new sn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new xe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yb{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $s,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let v=0,S=g.length;v<S;v++){const x=g[v],M=new ii;M.curves=x.curves,y.push(M)}return y}function n(g,y){const v=y.length;let S=!1;for(let x=v-1,M=0;M<v;x=M++){let E=y[x],D=y[M],b=D.x-E.x,T=D.y-E.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(E=y[M],b=-b,D=y[x],T=-T),g.y<E.y||g.y>D.y)continue;if(g.y===E.y){if(g.x===E.x)return!0}else{const U=T*(g.x-E.x)-b*(g.y-E.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(g.y!==E.y)continue;if(D.x<=g.x&&g.x<=E.x||E.x<=g.x&&g.x<=D.x)return!0}}return S}const i=Un.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ii,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],m=0,_;f[m]=void 0,d[m]=[];for(let g=0,y=r.length;g<y;g++)o=r[g],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&f[m]&&m++,f[m]={s:new ii,p:_},f[m].s.curves=o.curves,h&&m++,d[m]=[]):d[m].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let g=!1,y=0;for(let v=0,S=f.length;v<S;v++)u[v]=[];for(let v=0,S=f.length;v<S;v++){const x=d[v];for(let M=0;M<x.length;M++){const E=x[M];let D=!0;for(let b=0;b<f.length;b++)n(E.p,f[b].p)&&(v!==b&&y++,D?(D=!1,u[b].push(E)):g=!0);D&&u[v].push(E)}}y>0&&g===!1&&(d=u)}let p;for(let g=0,y=f.length;g<y;g++){l=f[g].s,c.push(l),p=d[g];for(let v=0,S=p.length;v<S;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const Zb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:_o,AddEquation:bi,AddOperation:Yd,AdditiveAnimationBlendMode:jc,AdditiveBlending:lo,AgXToneMapping:Gc,AlphaFormat:Qd,AlwaysCompare:_p,AlwaysDepth:Vd,AlwaysStencilFunc:Sc,AmbientLight:mm,AnimationAction:Sm,AnimationClip:kr,AnimationLoader:ZM,AnimationMixer:wb,AnimationObjectGroup:bb,AnimationUtils:XM,ArcCurve:Vp,ArrayCamera:Ip,ArrowHelper:qb,AttachedBindMode:Kl,Audio:Mm,AudioAnalyser:fb,AudioContext:Rh,AudioListener:cb,AudioLoader:ab,AxesHelper:$b,BackSide:jt,BasicDepthPacking:lp,BasicShadowMap:sg,BatchedMesh:Bp,Bone:dh,BooleanKeyframeTrack:ls,Box2:Ib,Box3:tn,Box3Helper:Wb,BoxGeometry:os,BoxHelper:Gb,BufferAttribute:gt,BufferGeometry:je,BufferGeometryLoader:ym,ByteType:Kd,Cache:jn,Camera:wo,CameraHelper:Hb,CanvasTexture:yi,CapsuleGeometry:Io,CatmullRomCurve3:Hp,CineonToneMapping:Hc,CircleGeometry:Do,ClampToEdgeWrapping:qt,Clock:Ph,Color:xe,ColorKeyframeTrack:Eh,ColorManagement:ut,CompressedArrayTexture:pM,CompressedCubeTexture:mM,CompressedTexture:Po,CompressedTextureLoader:JM,ConeGeometry:Uo,ConstantAlphaFactor:Bd,ConstantColorFactor:Od,CubeCamera:Sp,CubeReflectionMapping:si,CubeRefractionMapping:Ci,CubeTexture:Kr,CubeTextureLoader:KM,CubeUVReflectionMapping:Zs,CubicBezierCurve:_h,CubicBezierCurve3:Gp,CubicInterpolant:om,CullFaceBack:ql,CullFaceFront:Sd,CullFaceFrontBack:ig,CullFaceNone:bd,Curve:Cn,CurvePath:Xp,CustomBlending:wd,CustomToneMapping:Zd,CylinderGeometry:Qs,Cylindrical:Lb,Data3DTexture:ih,DataArrayTexture:bo,DataTexture:ns,DataTextureLoader:jM,DataUtils:d_,DecrementStencilOp:gg,DecrementWrapStencilOp:vg,DefaultLoadingManager:hm,DepthFormat:wi,DepthStencilFormat:is,DepthTexture:oh,DetachedBindMode:Jd,DirectionalLight:pm,DirectionalLightHelper:Vb,DiscreteInterpolant:lm,DisplayP3ColorSpace:Mo,DodecahedronGeometry:No,DoubleSide:Ln,DstAlphaFactor:Ld,DstColorFactor:Dd,DynamicCopyUsage:Ig,DynamicDrawUsage:wc,DynamicReadUsage:Rg,EdgesGeometry:qp,EllipseCurve:Lo,EqualCompare:dp,EqualDepth:Gd,EqualStencilFunc:bg,EquirectangularReflectionMapping:Vs,EquirectangularRefractionMapping:wr,Euler:Jr,EventDispatcher:hi,ExtrudeGeometry:bn,FileLoader:ri,Float16BufferAttribute:x_,Float32BufferAttribute:Re,Float64BufferAttribute:y_,FloatType:Tn,Fog:Ao,FogExp2:Eo,FramebufferTexture:dM,FrontSide:Fn,Frustum:jr,GLBufferAttribute:Cb,GLSL1:Ug,GLSL3:Tc,GreaterCompare:pp,GreaterDepth:Xd,GreaterEqualCompare:gp,GreaterEqualDepth:Wd,GreaterEqualStencilFunc:Eg,GreaterStencilFunc:wg,GridHelper:zb,Group:ji,HalfFloatType:Dn,HemisphereLight:um,HemisphereLightHelper:Bb,IcosahedronGeometry:Fo,ImageBitmapLoader:rb,ImageLoader:Vr,ImageUtils:nh,IncrementStencilOp:mg,IncrementWrapStencilOp:_g,InstancedBufferAttribute:qs,InstancedBufferGeometry:xm,InstancedInterleavedBuffer:Ab,InstancedMesh:ph,Int16BufferAttribute:__,Int32BufferAttribute:v_,Int8BufferAttribute:p_,IntType:Xc,InterleavedBuffer:Co,InterleavedBufferAttribute:ss,Interpolant:ia,InterpolateDiscrete:Ar,InterpolateLinear:Cr,InterpolateSmooth:ro,InvertStencilOp:xg,KeepStencilOp:qi,KeyframeTrack:Rn,LOD:Op,LatheGeometry:ea,Layers:So,LessCompare:fp,LessDepth:Hd,LessEqualCompare:eh,LessEqualDepth:Sr,LessEqualStencilFunc:Sg,LessStencilFunc:Mg,Light:Di,LightProbe:vm,Line:Pi,Line3:Db,LineBasicMaterial:sn,LineCurve:vh,LineCurve3:Wp,LineDashedMaterial:sm,LineLoop:zp,LineSegments:Hn,LinearDisplayP3ColorSpace:Zr,LinearEncoding:Qc,LinearFilter:pt,LinearInterpolant:Th,LinearMipMapLinearFilter:cg,LinearMipMapNearestFilter:lg,LinearMipmapLinearFilter:Ri,LinearMipmapNearestFilter:Wc,LinearSRGBColorSpace:Bn,LinearToneMapping:kc,LinearTransfer:Pr,Loader:cn,LoaderUtils:Ic,LoadingManager:Ah,LoopOnce:rp,LoopPingPong:op,LoopRepeat:ap,LuminanceAlphaFormat:tp,LuminanceFormat:ep,MOUSE:tg,Material:Zt,MaterialLoader:Wo,MathUtils:Zg,Matrix3:tt,Matrix4:Ve,MaxEquation:Jl,Mesh:Lt,MeshBasicMaterial:ui,MeshDepthMaterial:lh,MeshDistanceMaterial:ch,MeshLambertMaterial:nm,MeshMatcapMaterial:im,MeshNormalMaterial:tm,MeshPhongMaterial:Qp,MeshPhysicalMaterial:jp,MeshStandardMaterial:Sh,MeshToonMaterial:em,MinEquation:Zl,MirroredRepeatWrapping:Er,MixOperation:$d,MultiplyBlending:Yl,MultiplyOperation:Yr,NearestFilter:Pt,NearestMipMapLinearFilter:og,NearestMipMapNearestFilter:ag,NearestMipmapLinearFilter:vr,NearestMipmapNearestFilter:uo,NeverCompare:up,NeverDepth:kd,NeverStencilFunc:yg,NoBlending:In,NoColorSpace:mn,NoToneMapping:ti,NormalAnimationBlendMode:yo,NormalBlending:es,NotEqualCompare:mp,NotEqualDepth:qd,NotEqualStencilFunc:Tg,NumberKeyframeTrack:Br,Object3D:ot,ObjectLoader:ib,ObjectSpaceNormalMap:hp,OctahedronGeometry:ta,OneFactor:Cd,OneMinusConstantAlphaFactor:zd,OneMinusConstantColorFactor:Fd,OneMinusDstAlphaFactor:Id,OneMinusDstColorFactor:Ud,OneMinusSrcAlphaFactor:ho,OneMinusSrcColorFactor:Pd,OrthographicCamera:Ks,P3Primaries:Ir,PCFShadowMap:zc,PCFSoftShadowMap:$r,PMREMGenerator:mo,Path:$s,PerspectiveCamera:Vt,Plane:xi,PlaneGeometry:Qr,PlaneHelper:Xb,PointLight:dm,PointLightHelper:Ob,Points:kp,PointsMaterial:mh,PolarGridHelper:kb,PolyhedronGeometry:Ii,PositionalAudio:ub,PropertyBinding:at,PropertyMixer:bm,QuadraticBezierCurve:xh,QuadraticBezierCurve3:yh,Quaternion:en,QuaternionKeyframeTrack:er,QuaternionLinearInterpolant:cm,RED_GREEN_RGTC2_Format:Mc,RED_RGTC1_Format:sp,REVISION:qr,RGBADepthPacking:cp,RGBAFormat:on,RGBAIntegerFormat:Jc,RGBA_ASTC_10x10_Format:mc,RGBA_ASTC_10x5_Format:fc,RGBA_ASTC_10x6_Format:dc,RGBA_ASTC_10x8_Format:pc,RGBA_ASTC_12x10_Format:gc,RGBA_ASTC_12x12_Format:_c,RGBA_ASTC_4x4_Format:sc,RGBA_ASTC_5x4_Format:rc,RGBA_ASTC_5x5_Format:ac,RGBA_ASTC_6x5_Format:oc,RGBA_ASTC_6x6_Format:lc,RGBA_ASTC_8x5_Format:cc,RGBA_ASTC_8x6_Format:hc,RGBA_ASTC_8x8_Format:uc,RGBA_BPTC_Format:so,RGBA_ETC2_EAC_Format:ic,RGBA_PVRTC_2BPPV1_Format:tc,RGBA_PVRTC_4BPPV1_Format:ec,RGBA_S3TC_DXT1_Format:to,RGBA_S3TC_DXT3_Format:no,RGBA_S3TC_DXT5_Format:io,RGB_BPTC_SIGNED_Format:vc,RGB_BPTC_UNSIGNED_Format:xc,RGB_ETC1_Format:Kc,RGB_ETC2_Format:nc,RGB_PVRTC_2BPPV1_Format:Ql,RGB_PVRTC_4BPPV1_Format:jl,RGB_S3TC_DXT1_Format:eo,RGFormat:ip,RGIntegerFormat:Zc,RawShaderMaterial:bh,Ray:Js,Raycaster:Rb,Rec709Primaries:Lr,RectAreaLight:gm,RedFormat:np,RedIntegerFormat:Yc,ReinhardToneMapping:Vc,RenderTarget:yp,RepeatWrapping:Tr,ReplaceStencilOp:pg,ReverseSubtractEquation:Ed,RingGeometry:Bo,SIGNED_RED_GREEN_RGTC2_Format:bc,SIGNED_RED_RGTC1_Format:yc,SRGBColorSpace:Mt,SRGBTransfer:_t,Scene:uh,ShaderChunk:Ge,ShaderLib:wn,ShaderMaterial:$t,ShadowMaterial:Kp,Shape:ii,ShapeGeometry:zo,ShapePath:Yb,ShapeUtils:Un,ShortType:jd,Skeleton:Ro,SkeletonHelper:Nb,SkinnedMesh:Fp,Source:Ki,Sphere:Yt,SphereGeometry:na,Spherical:Pb,SphericalHarmonics3:_m,SplineCurve:Mh,SpotLight:fm,SpotLightHelper:Ub,Sprite:Np,SpriteMaterial:fh,SrcAlphaFactor:co,SrcAlphaSaturateFactor:Nd,SrcColorFactor:Rd,StaticCopyUsage:Lg,StaticDrawUsage:Dr,StaticReadUsage:Cg,StereoCamera:ob,StreamCopyUsage:Dg,StreamDrawUsage:Ag,StreamReadUsage:Pg,StringKeyframeTrack:cs,SubtractEquation:Td,SubtractiveBlending:$l,TOUCH:ng,TangentSpaceNormalMap:Li,TetrahedronGeometry:ko,Texture:It,TextureLoader:QM,TorusGeometry:Vo,TorusKnotGeometry:Ho,Triangle:an,TriangleFanDrawMode:fg,TriangleStripDrawMode:ug,TrianglesDrawMode:hg,TubeGeometry:Go,TwoPassDoubleSide:rg,UVMapping:vo,Uint16BufferAttribute:sh,Uint32BufferAttribute:rh,Uint8BufferAttribute:m_,Uint8ClampedBufferAttribute:g_,Uniform:Dh,UniformsGroup:Eb,UniformsLib:ge,UniformsUtils:Xs,UnsignedByteType:ni,UnsignedInt248Type:Si,UnsignedIntType:Kn,UnsignedShort4444Type:qc,UnsignedShort5551Type:$c,UnsignedShortType:xo,VSMShadowMap:Pn,Vector2:J,Vector3:R,Vector4:mt,VectorKeyframeTrack:zr,VideoTexture:fM,WebGL1Renderer:Dp,WebGL3DRenderTarget:t_,WebGLArrayRenderTarget:e_,WebGLCoordinateSystem:En,WebGLCubeRenderTarget:wp,WebGLMultipleRenderTargets:n_,WebGLRenderTarget:Qt,WebGLRenderer:hh,WebGLUtils:Lp,WebGPUCoordinateSystem:Hs,WireframeGeometry:Jp,WrapAroundEnding:Rr,ZeroCurvatureEnding:Zi,ZeroFactor:Ad,ZeroSlopeEnding:Ji,ZeroStencilOp:dg,_SRGBAFormat:fo,createCanvasElement:xp,sRGBEncoding:Ti},Symbol.toStringTag,{value:"Module"}));function Jb(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Mi{constructor(){vt(this,"allVertices",{});vt(this,"isolatedVertices",{});vt(this,"connectedVertices",{});vt(this,"sortedConnectedValues",[]);vt(this,"needsSort",!1);vt(this,"emitter",Jb());vt(this,"emit",this.emitter.emit.bind(this.emitter));vt(this,"on",this.emitter.on.bind(this.emitter));vt(this,"off",this.emitter.off.bind(this.emitter));vt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Kb{constructor(e,t,n){vt(this,"key");vt(this,"stage");vt(this,"callback");vt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class jb extends Mi{constructor(t,n,i){super();vt(this,"key");vt(this,"scheduler");vt(this,"callback",(t,n)=>n());vt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new Kb(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class Qb extends Mi{constructor(t){super();vt(this,"lastTime",performance.now());vt(this,"clampDeltaTo",.1);vt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new jb(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Sn=(s,e)=>{const t=gd(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});nn(()=>{i(),n&&n()})},pn=s=>{const e=Nn(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Xo=new Vt(75,0,.1,1e3);Xo.position.z=5;Xo.lookAt(0,0,0);const eS=()=>Xo,tS=s=>{Sn(s.size,e=>{if(s.camera.current===Xo){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},Bl=s=>`useFrame-order-${s.toString()}`,Tm=Symbol("use-legacy-frame-compatibility-context"),nS=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return An(Tm,s),s},iS=()=>{const s=On(Tm);if(s===void 0)throw new Error("No legacy frame compatibility context found, are you using this hook inside of <Canvas>?");return s},sS=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(c=!1)=>{await Jm(),!(!e.shouldDispose&&!c)&&(e.disposableObjects.forEach((h,u)=>{var f;(h===0||c)&&((f=u==null?void 0:u.dispose)==null||f.call(u),e.disposableObjects.delete(u))}),e.shouldDispose=!1)},collectDisposableObjects:(c,h,u)=>{const f=h??[],d=u??new WeakSet;return!c||d.has(c)||(d.add(c),c!=null&&c.dispose&&typeof c.dispose=="function"&&c.type!=="Scene"&&f.push(c),Object.entries(c).forEach(([m,_])=>{if(m==="parent"||m==="children"||typeof _!="object")return;const p=_;p!=null&&p.dispose&&e.collectDisposableObjects(p,f,d)})),f},addDisposableObjects:c=>{c.forEach(h=>{const u=e.disposableObjects.get(h);u?e.disposableObjects.set(h,u+1):e.disposableObjects.set(h,1)})},removeDisposableObjects:c=>{c.length!==0&&(c.forEach(h=>{const u=e.disposableObjects.get(h);u&&u>0&&e.disposableObjects.set(h,u-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=nS(),n=new Qb,i=n.createStage(Symbol("threlte-main-stage")),r=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(c,h){o.shouldRender()&&h()}}),a=r.createTask(Symbol("threlte-auto-render-task"),c=>{t.length>0||o.renderer.render(o.scene,o.camera.current)}),o={size:gd([s.userSize,s.parentSize],([c,h])=>c||h),camera:pn(eS()),scene:new uh,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:pn(s.colorSpace),toneMapping:pn(s.toneMapping),dpr:pn(s.dpr),useLegacyLights:pn(s.useLegacyLights),shadows:pn(s.shadows),colorManagementEnabled:pn(s.colorManagementEnabled),renderMode:pn(s.renderMode),autoRender:pn(s.autoRender),scheduler:n,mainStage:i,renderStage:r,autoRenderTask:a,shouldRender:()=>o.renderMode.current==="always"||o.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||o.renderMode.current==="manual"&&e.advance};tS(o);const l=pn({});return An("threlte",o),An("threlte-internal-context",e),An("threlte-user-context",l),o},qo=typeof window<"u",rS=()=>{const s=pn({width:0,height:0});if(!qo)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{i.disconnect(),r.disconnect(),i.observe(o),r.observe(o,e)},i=new ResizeObserver(([o])=>{const{width:l,height:c}=o.contentRect;l===s.current.width&&c===s.current.height||s.set({width:l,height:c})}),r=new MutationObserver(o=>{for(const l of o)for(const c of l.removedNodes)if(t===c&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const l=t.parentElement;l&&(s.set({width:l.clientWidth,height:l.clientHeight}),n(l))};return nn(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:a}};function Em(s,e){const t=Nn(s);let n=s;const i=t.subscribe(o=>n=o);return nn(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const hs=()=>{const s=On("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Uh=Symbol("threlte-hierarchical-parent-context"),Am=()=>On(Uh),aS=s=>An(Uh,s),oS=s=>{const e=Em(s);return An(Uh,e),e};function lS(s){let e;const t=s[7].default,n=ai(t,s,s[6],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&oi(n,t,i,i[6],e?ci(t,i[6],r,null):li(i[6]),null)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}const cS=()=>({onChildMount:On("threlte-hierarchical-object-on-mount"),onChildDestroy:On("threlte-hierarchical-object-on-destroy")});function hS(s,e,t){var p;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=g=>{o==null||o(g)};let{onChildDestroy:c=void 0}=e;const h=g=>{c==null||c(g)},{invalidate:u}=hs(),f=Am();Ei(s,f,g=>t(5,n=g));let{parent:d=n}=e;const m=cS();a&&((p=m.onChildMount)==null||p.call(m,a),u());const _=Em(a,(g,y)=>{var v,S;y&&((v=m.onChildDestroy)==null||v.call(m,y),u()),g&&((S=m.onChildMount)==null||S.call(m,g),u())});return nn(()=>{var g;a&&((g=m.onChildDestroy)==null||g.call(m,a),u())}),An("threlte-hierarchical-object-on-mount",l),An("threlte-hierarchical-object-on-destroy",h),aS(_),s.$$set=g=>{"object"in g&&t(2,a=g.object),"onChildMount"in g&&t(3,o=g.onChildMount),"onChildDestroy"in g&&t(4,c=g.onChildDestroy),"parent"in g&&t(1,d=g.parent),"$$scope"in g&&t(6,r=g.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(a)},[f,d,a,o,c,n,r,i]}class uS extends zn{constructor(e){super(),kn(this,e,hS,lS,Vn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function fS(s){let e;const t=s[1].default,n=ai(t,s,s[4],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&oi(n,t,i,i[4],e?ci(t,i[4],r,null):li(i[4]),null)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function dS(s){let e,t;return e=new uS({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[fS]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function pS(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class Cm extends zn{constructor(e){super(),kn(this,e,pS,dS,Vn,{object:0})}}const mS=()=>{An("threlte-cache",[])},gS=qr.replace("dev",""),Uc=Number.parseInt(gS),_S=s=>{const e=Nn(void 0),t=(n,i)=>{s.renderer=new hh({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return Sn([s.colorManagementEnabled],([n])=>{ut.enabled=n}),Sn([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Sn([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Sn([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),Sn([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=$r))}),Sn([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Sn([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},Rm=()=>On("threlte-internal-context");function _f(s){let e,t;return e=new Cm({props:{object:s[0].scene,$$slots:{default:[vS]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&131072&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function vS(s){let e;const t=s[15].default,n=ai(t,s,s[17],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&131072)&&oi(n,t,i,i[17],e?ci(t,i[17],r,null):li(i[17]),null)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function xS(s){let e,t,n,i,r=s[2]&&_f(s);return{c(){e=_d("canvas"),r&&r.c(),vd(e,"class","svelte-o3oskp")},m(a,o){we(a,e,o),r&&r.m(e,null),s[16](e),t=!0,n||(i=Km(s[4].call(null,e)),n=!0)},p(a,[o]){a[2]?r?(r.p(a,o),o&4&&B(r,1)):(r=_f(a),r.c(),B(r,1),r.m(e,null)):r&&(ft(),$(r,1,1,()=>{r=null}),dt())},i(a){t||(B(r),t=!0)},o(a){$(r),t=!1},d(a){a&&Se(e),r&&r.d(),s[16](null),n=!1,i()}}}function yS(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:l=qo?window.devicePixelRatio:1}=e,{renderMode:c="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=$r}=e,{size:f=void 0}=e,{toneMapping:d=_o}=e,{useLegacyLights:m=!(Uc>=155)}=e,{autoRender:_=!0}=e,p,g=Nn(!1);Ei(s,g,T=>t(2,n=T));const y=Nn(f),{parentSize:v,parentSizeAction:S}=rS(),x=sS({colorManagementEnabled:a,colorSpace:o,dpr:l,renderMode:c,parentSize:v,autoRender:_,shadows:u,toneMapping:d,useLegacyLights:m,userSize:y}),M=Rm(),E=x;Sn([g,E.autoRender],([T,U])=>(T&&U?E.autoRenderTask.start():E.autoRenderTask.stop(),()=>{E.autoRenderTask.stop()})),mS();const{createRenderer:D}=_S(E);Xr(()=>{D(p,h),E.renderer.setAnimationLoop(T=>{M.dispose(),E.scheduler.run(T),M.resetFrameInvalidation()}),g.set(!0)}),nn(()=>{var T;M.dispose(!0),E.scheduler.dispose(),(T=E.renderer)==null||T.dispose()});function b(T){zs[T?"unshift":"push"](()=>{p=T,t(1,p)})}return s.$$set=T=>{"colorManagementEnabled"in T&&t(5,a=T.colorManagementEnabled),"colorSpace"in T&&t(6,o=T.colorSpace),"dpr"in T&&t(7,l=T.dpr),"renderMode"in T&&t(8,c=T.renderMode),"rendererParameters"in T&&t(9,h=T.rendererParameters),"shadows"in T&&t(10,u=T.shadows),"size"in T&&t(11,f=T.size),"toneMapping"in T&&t(12,d=T.toneMapping),"useLegacyLights"in T&&t(13,m=T.useLegacyLights),"autoRender"in T&&t(14,_=T.autoRender),"$$scope"in T&&t(17,r=T.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&y.set(f),s.$$.dirty&64&&E.colorSpace.set(o),s.$$.dirty&128&&E.dpr.set(l),s.$$.dirty&256&&E.renderMode.set(c),s.$$.dirty&16384&&E.autoRender.set(_),s.$$.dirty&1024&&E.shadows.set(u),s.$$.dirty&4096&&E.toneMapping.set(d)},[E,p,n,g,S,a,o,l,c,h,u,f,d,m,_,i,b,r]}class MS extends zn{constructor(e){super(),kn(this,e,yS,xS,Vn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function bS(s){let e;const t=s[9].default,n=ai(t,s,s[8],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&oi(n,t,i,i[8],e?ci(t,i[8],r,null):li(i[8]),null)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}const vf="threlte-disposable-object-context";function SS(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=Rm();let{object:h=void 0}=e,u=h,{dispose:f=void 0}=e;const d=On(vf);Ei(s,d,p=>t(7,i=p));const m=Nn(f??i??!0);Ei(s,m,p=>t(6,n=p)),An(vf,m);let _=n?o(h):[];return l(_),nn(()=>{c(_)}),s.$$set=p=>{"object"in p&&t(2,h=p.object),"dispose"in p&&t(3,f=p.dispose),"$$scope"in p&&t(8,a=p.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&m.set(f??i??!0),s.$$.dirty&116&&h!==u&&(c(_),t(5,_=n?o(h):[]),l(_),t(4,u=h))},[d,m,h,f,u,_,n,i,a,r]}class wS extends zn{constructor(e){super(),kn(this,e,SS,bS,Vn,{object:2,dispose:3})}}const TS=/^\s*class\s+/,ES=s=>typeof s!="function"?!1:TS.test(s.toString()),AS=s=>Array.isArray(s),xf=(s,e)=>ES(s)?AS(e)?new s(...e):new s:s,CS=s=>"isObject3D"in s,yf=s=>"dispose"in s,Pm=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},zl=Symbol("initialValueBeforeAttach"),RS=()=>{const{invalidate:s}=hs();let e=!1,t=zl,n,i,r;const a=(l,c,h)=>{if(o(),!h){const u=l;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:u,key:f}=Pm(c,h);t=u[f],u[f]=l,i=u,r=f}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==zl&&(i[r]=t,t=zl,i=void 0,r=void 0),e=!1,s())};return nn(()=>{o()}),{update:a}},PS=s=>s&&s.isCamera,Lm=s=>s&&s.isOrthographicCamera,Im=s=>s&&s.isPerspectiveCamera,LS=s=>Im(s)||Lm(s),IS=()=>{const{invalidate:s,size:e,camera:t}=hs();let n,i;nn(()=>{i==null||i()});const r=l=>{n&&(Lm(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):Im(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!LS(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!PS(l)||!c||(t.set(l),s())}}},Dm=()=>{const s=Bc(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},DS=()=>{const s=Dm(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return Xr(()=>{i(),n=!0}),nn(()=>{e.forEach(a=>a())}),{updateRef:r}},Mf=s=>!!(s!=null&&s.addEventListener),US=()=>{const s=Dm(),e=Bc(),t=l=>{l!=null&&l.type&&s(l.type,l)},n=(l,c)=>{Mf(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{Mf(l)&&c.forEach(h=>{l.addEventListener(h,t)})},r=Nn(),a=Nn([]);return Sn([r,a],([l,c])=>(i(l,c),()=>n(l,c))),Xr(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{r.set(l)}}},NS=s=>{const t=On("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(s)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let r=[];return nn(()=>{r.forEach(c=>c())}),{updateRef:c=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var f;const u=(f=h.onRefChange)==null?void 0:f.call(h,c);u&&r.push(u)})},updateProps:c=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,c)})},pluginsProps:i}},OS=new Set(["$$scope","$$slots","type","args","attach","instance"]),FS=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),BS=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,bf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},zS=()=>{const{invalidate:s}=hs(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(BS(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=Pm(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=bf(h,c,o);t.set(a,f),f(h,c,o)}}else bf(h,c,o)(h,c,o);l.manualCamera||FS.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var l;for(const c in a)!OS.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(r,c,a[c],o),s()}}},kS=s=>({ref:s&2}),Sf=s=>({ref:s[1]}),VS=s=>({ref:s&2}),wf=s=>({ref:s[1]});function Tf(s){let e,t;return e=new wS({props:{object:s[1],dispose:s[0]}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function HS(s){let e;const t=s[10].default,n=ai(t,s,s[11],Sf);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&oi(n,t,i,i[11],e?ci(t,i[11],r,kS):li(i[11]),Sf)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function GS(s){let e,t;return e=new Cm({props:{object:s[1],$$slots:{default:[WS]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function WS(s){let e;const t=s[10].default,n=ai(t,s,s[11],wf);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&oi(n,t,i,i[11],e?ci(t,i[11],r,VS):li(i[11]),wf)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function XS(s){let e=yf(s[1]),t,n,i,r,a,o,l=e&&Tf(s);const c=[GS,HS],h=[];function u(f,d){return d&2&&(n=null),n==null&&(n=!!CS(f[1])),n?0:1}return i=u(s,-1),r=h[i]=c[i](s),{c(){l&&l.c(),t=Je(),r.c(),a=wt()},m(f,d){l&&l.m(f,d),we(f,t,d),h[i].m(f,d),we(f,a,d),o=!0},p(f,[d]){d&2&&(e=yf(f[1])),e?l?(l.p(f,d),d&2&&B(l,1)):(l=Tf(f),l.c(),B(l,1),l.m(t.parentNode,t)):l&&(ft(),$(l,1,1,()=>{l=null}),dt());let m=i;i=u(f,d),i===m?h[i].p(f,d):(ft(),$(h[m],1,1,()=>{h[m]=null}),dt(),r=h[i],r?r.p(f,d):(r=h[i]=c[i](f),r.c()),B(r,1),r.m(a.parentNode,a))},i(f){o||(B(l),B(r),o=!0)},o(f){$(l),$(r),o=!1},d(f){f&&(Se(t),Se(a)),l&&l.d(f),h[i].d(f)}}}function qS(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=ks(e,n),r,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const m=Am();Ei(s,m,U=>t(9,r=U));const _=DS();let p=xf(l,c);_.updateRef(p);let g=!1;const y=()=>{if(!g){g=!0;return}t(1,p=xf(l,c)),_.updateRef(p)};let{ref:v=p}=e;const S=oS(p),x=NS({ref:p,props:e}),M=(x==null?void 0:x.pluginsProps)??[],E=zS(),D=IS(),b=RS(),T=US();return s.$$set=U=>{t(23,e=Ai(Ai({},e),oo(U))),t(22,i=ks(e,n)),"is"in U&&t(4,l=U.is),"args"in U&&t(5,c=U.args),"attach"in U&&t(6,h=U.attach),"manual"in U&&t(7,u=U.manual),"makeDefault"in U&&t(8,f=U.makeDefault),"dispose"in U&&t(0,d=U.dispose),"ref"in U&&t(3,v=U.ref),"$$scope"in U&&t(11,o=U.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&y(),s.$$.dirty&2&&t(3,v=p),s.$$.dirty&2&&S.set(p),E.updateProps(p,i,{manualCamera:u,pluginsProps:M}),s.$$.dirty&130&&D.update(p,u),s.$$.dirty&258&&D.makeDefaultCamera(p,f),s.$$.dirty&578&&b.update(p,r,h),s.$$.dirty&2&&T.updateRef(p),s.$$.dirty&2&&(x==null||x.updateRef(p)),x==null||x.updateProps(e),x==null||x.updateRestProps(i)},e=oo(e),[d,p,m,v,l,c,h,u,f,r,a,o]}let Um=class extends zn{constructor(e){super(),kn(this,e,qS,XS,Vn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const $S={},YS=(s,e)=>{const t=$S[e]||Zb[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},ZS=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new Um(YS(n,s))}}),ze=new Proxy(class{},{construct(s,[e]){const t=e;return new Um(t)},get(s,e){return ZS(e)}});function JS(s,e,t){if(!qo)return{task:void 0,start:()=>{},stop:()=>{},started:jm(!1)};let n,i,r;Mi.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=hs();let o=a.mainStage;if(r){if(r.stage)if(Mi.isValue(r.stage))o=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);o=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const m=r.after[d];if(Mi.isValue(m)){o=m.stage;break}}else Mi.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const m=r.before[d];if(Mi.isValue(m)){o=m.stage;break}}else Mi.isValue(r.before)&&(o=r.before.stage)}const{autoInvalidations:l}=On("threlte-internal-context"),c=Nn(!1),h=o.createTask(n,i,r),u=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.add(i),h.start()},f=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.delete(i),h.stop()};return(r==null?void 0:r.autoStart)??!0?u():f(),nn(()=>{o&&o.removeTask(n)}),{task:h,start:u,stop:f,started:{subscribe:c.subscribe}}}const KS=(s,e)=>{if(!qo)return;const t=hs(),{useRenderOrders:n}=iS();let i=0;for(;n.includes(i);)i+=.01;n.push(i);const r=Bl(i),a=o=>{s(t,o)};t.renderStage.createTask(r,a,{after:n.filter(o=>o<i).map(o=>Bl(o)),before:n.filter(o=>o>i).map(o=>Bl(o))}),nn(()=>{t.renderStage.removeTask(r),n.splice(n.indexOf(i),1)})},Nm=()=>{const s=Bc(),e=Nn(void 0);return Sn(e,t=>{t&&Object.entries(s.$$.callbacks).forEach(n=>{const[i,r]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...r):t.$$.callbacks[i]=r})}),e};new R;new R;new R;const Om=s=>`threlte-instanced-mesh-${s}`,jS=(s,e)=>{const t={instancedMesh:pn(s),addInstance(n){t.instances.update(i=>(i.push(n),i))},removeInstance(n){t.instances.update(i=>{const r=i.indexOf(n);return r>-1&&i.splice(r,1),i})},instances:pn([])};return An(Om(e),t),t},QS=s=>{const e=On(Om(s));if(!e)throw new Error(`No <InstancedMesh> component found for id ${s}`);return e};function e1(s){let e,t,n,i,r;e=new ze.InstancedBufferAttribute({props:{attach:"instanceMatrix",count:s[1].length/16,array:s[1],itemSize:16,usage:wc}}),n=new ze.InstancedBufferAttribute({props:{attach:"instanceColor",count:s[2].length/3,array:s[2],itemSize:3,usage:wc}});const a=s[10].default,o=ai(a,s,s[9],null);return{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je(),o&&o.c()},m(l,c){Ue(e,l,c),we(l,t,c),Ue(n,l,c),we(l,i,c),o&&o.m(l,c),r=!0},p(l,[c]){o&&o.p&&(!r||c&512)&&oi(o,a,l,l[9],r?ci(a,l[9],c,null):li(l[9]),null)},i(l){r||(B(e.$$.fragment,l),B(n.$$.fragment,l),B(o,l),r=!0)},o(l){$(e.$$.fragment,l),$(n.$$.fragment,l),$(o,l),r=!1},d(l){l&&(Se(t),Se(i)),De(e,l),De(n,l),o&&o.d(l)}}}function t1(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{instancedMesh:a}=e,{id:o}=e,{limit:l}=e,{range:c}=e,{update:h}=e;const{instances:u}=jS(a,o);Ei(s,u,x=>t(8,n=x));const f=new Ve,d=new Float32Array(l*16);for(let x=0;x<l;x++)f.identity().toArray(d,x*16);const m=new Float32Array(l*3).fill(1),_=new Ve,p=new Ve,g=new R,y=new en,v=new R;let S=!1;return JS(()=>{if(a.updateMatrix(),h||!S){a.updateMatrixWorld(),_.copy(a.matrixWorld).invert(),a.instanceColor&&t(3,a.instanceColor.needsUpdate=!0,a),t(3,a.instanceMatrix.needsUpdate=!0,a);for(let x=0;x<u.current.length;x++){const M=u.current[x];M.matrixWorld.decompose(g,y,v),p.compose(g,y,v).premultiply(_),p.toArray(d,x*16),M.color.toArray(m,x*3)}S=!0}}),s.$$set=x=>{"instancedMesh"in x&&t(3,a=x.instancedMesh),"id"in x&&t(4,o=x.id),"limit"in x&&t(5,l=x.limit),"range"in x&&t(6,c=x.range),"update"in x&&t(7,h=x.update),"$$scope"in x&&t(9,r=x.$$scope)},s.$$.update=()=>{if(s.$$.dirty&360){const x=Math.min(l,c!==void 0?c:l,n.length);t(3,a.count=x,a),Uc>=159?(a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,x*16)):t(3,a.instanceMatrix.updateRange.count=x*16,a),a.instanceColor&&(Uc>=159?(a.instanceColor.clearUpdateRanges(),a.instanceColor.addUpdateRange(0,x*3)):t(3,a.instanceColor.updateRange.count=x*3,a))}},[u,d,m,a,o,l,c,h,n,r,i]}class n1 extends zn{constructor(e){super(),kn(this,e,t1,e1,Vn,{instancedMesh:3,id:4,limit:5,range:6,update:7})}}const i1=s=>({}),Ef=s=>({ref:s[4]});function s1(s){let e;const t=s[9].default,n=ai(t,s,s[11],Ef);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2048)&&oi(n,t,i,i[11],e?ci(t,i[11],r,i1):li(i[11]),Ef)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function r1(s){let e,t;return e=new n1({props:{instancedMesh:s[4],id:s[0],limit:s[1],range:s[2],update:s[3],$$slots:{default:[s1]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.id=n[0]),i&2&&(r.limit=n[1]),i&4&&(r.range=n[2]),i&8&&(r.update=n[3]),i&2048&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function a1(s){let e,t,n;const i=[{is:s[4]},{raycast:o1},{matrixAutoUpdate:!1},{args:s[7]},s[8]];function r(o){s[10](o)}let a={$$slots:{default:[r1]},$$scope:{ctx:s}};for(let o=0;o<i.length;o+=1)a=Ai(a,i[o]);return s[5]!==void 0&&(a.bind=s[5]),e=new ze({props:a}),zs.push(()=>Wl(e,"bind",r)),{c(){Ne(e.$$.fragment)},m(o,l){Ue(e,o,l),n=!0},p(o,[l]){const c=l&400?yd(i,[l&16&&{is:o[4]},i[1],i[2],l&128&&{args:o[7]},l&256&&Md(o[8])]):{};l&2063&&(c.$$scope={dirty:l,ctx:o}),!t&&l&32&&(t=!0,c.bind=o[5],Xl(()=>t=!1)),e.$set(c)},i(o){n||(B(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){De(e,o)}}}const o1=()=>null;function l1(s,e,t){const n=["id","limit","range","update","ref"];let i=ks(e,n),r,{$$slots:a={},$$scope:o}=e,{id:l="default"}=e,{limit:c=1e3}=e,{range:h=1e3}=e,{update:u=!0}=e;const f=new ph(null,null,0),d=Nm();Ei(s,d,p=>t(5,r=p));const m=[null,null,0];function _(p){r=p,d.set(r)}return s.$$set=p=>{e=Ai(Ai({},e),oo(p)),t(8,i=ks(e,n)),"id"in p&&t(0,l=p.id),"limit"in p&&t(1,c=p.limit),"range"in p&&t(2,h=p.range),"update"in p&&t(3,u=p.update),"$$scope"in p&&t(11,o=p.$$scope)},[l,c,h,u,f,r,d,m,i,a,_,o]}class c1 extends zn{constructor(e){super(),kn(this,e,l1,a1,Vn,{id:0,limit:1,range:2,update:3,ref:4})}get ref(){return this.$$.ctx[4]}}const Af=new Ve,Cf=new Ve,Ka=[],mr=new Lt,h1=s=>s.isMaterial;class u1 extends ji{constructor(t,n){super();vt(this,"color");vt(this,"instancedMesh");vt(this,"instances");this.color=new xe("white"),this.instancedMesh=t,this.instances=n}get geometry(){var t;return(t=this.instancedMesh.current)==null?void 0:t.geometry}raycast(t,n){var o;const i=this.instancedMesh.current;if(!i||!i.geometry||!i.material)return;mr.geometry=i.geometry;const r=i.matrixWorld,a=this.instances.current.indexOf(this);if(!(a===-1||a>i.count)){i.getMatrixAt(a,Af),Cf.multiplyMatrices(r,Af),mr.matrixWorld=Cf,h1(i.material)?mr.material.side=i.material.side:mr.material.side=((o=i.material[0])==null?void 0:o.side)??Fn,mr.raycast(t,Ka);for(let l=0,c=Ka.length;l<c;l++){const h=Ka[l];h.instanceId=a,h.object=this,n.push(h)}Ka.length=0}}}const f1=s=>({}),Rf=s=>({ref:s[0]});function d1(s){let e;const t=s[5].default,n=ai(t,s,s[7],Rf);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&128)&&oi(n,t,i,i[7],e?ci(t,i[7],r,f1):li(i[7]),Rf)},i(i){e||(B(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function p1(s){let e,t;const n=[{is:s[0]},s[3]];let i={$$slots:{default:[d1]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Ai(i,n[r]);return e=new ze({props:i}),s[6](e),{c(){Ne(e.$$.fragment)},m(r,a){Ue(e,r,a),t=!0},p(r,[a]){const o=a&9?yd(n,[a&1&&{is:r[0]},a&8&&Md(r[3])]):{};a&128&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){s[6](null),De(e,r)}}}function m1(s,e,t){const n=["id","ref"];let i=ks(e,n),r,{$$slots:a={},$$scope:o}=e,{id:l="default"}=e;const{addInstance:c,removeInstance:h,instancedMesh:u,instances:f}=QS(l),d=new u1(u,f);c(d),nn(()=>{h(d)});const m=Nm();Ei(s,m,p=>t(1,r=p));function _(p){zs[p?"unshift":"push"](()=>{r=p,m.set(r)})}return s.$$set=p=>{e=Ai(Ai({},e),oo(p)),t(3,i=ks(e,n)),"id"in p&&t(4,l=p.id),"$$scope"in p&&t(7,o=p.$$scope)},[d,r,m,i,l,a,_,o]}class g1 extends zn{constructor(e){super(),kn(this,e,m1,p1,Vn,{id:4,ref:0})}get ref(){return this.$$.ctx[0]}}`${Ge.logdepthbuf_pars_vertex}${Ge.fog_pars_vertex}${Ge.logdepthbuf_vertex}${Ge.fog_vertex}`;`${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;`${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;const _1=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,v1=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,x1=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,y1=x1,M1=`
	${_1}
	${v1}
`;`${y1}${M1}${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new Ks(-1,1,1,-1,0,1);class b1 extends je{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}new b1;var Fm={exports:{}};Fm.exports=$o;Fm.exports.default=$o;function $o(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Bm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,f,d;if(n&&(r=A1(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var m=t;m<i;m+=t)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Hr(r,a,t,o,l,d,0),a}function Bm(s,e,t,n,i){var r,a;if(i===Fc(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Pf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pf(r,s[r],s[r+1],a);return a&&Yo(a,a.next)&&(Wr(a),a=a.next),a}function as(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||St(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,a){if(s){!a&&r&&I1(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?w1(s,n,i,r):S1(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Wr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=T1(as(s),e,t),Hr(s,e,t,n,i,r,2)):a===2&&E1(s,e,t,n,i,r):Hr(as(s),e,t,n,i,r,1);break}}}}function S1(s){var e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Fs(i,o,r,l,a,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function w1(s,e,t,n){var i=s.prev,r=s,a=s.next;if(St(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=Nc(d,m,e,t,n),y=Nc(_,p,e,t,n),v=s.prevZ,S=s.nextZ;v&&v.z>=g&&S&&S.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Fs(o,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Fs(o,h,l,u,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Fs(o,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Fs(o,h,l,u,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function T1(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Yo(i,r)&&zm(i,n,n.next,r)&&Gr(i,r)&&Gr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wr(n),Wr(n.next),n=s=r),n=n.next}while(n!==s);return as(n)}function E1(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&N1(a,o)){var l=km(a,o);a=as(a,a.next),l=as(l,l.next),Hr(a,e,t,n,i,r,0),Hr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function A1(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Bm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(U1(c));for(i.sort(C1),r=0;r<i.length;r++)t=R1(i[r],t);return t}function C1(s,e){return s.x-e.x}function R1(s,e){var t=P1(s,e);if(!t)return e;var n=km(t,s);return as(n,n.next),as(t,t.next)}function P1(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Fs(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Gr(t,s)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&L1(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function L1(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function I1(s,e,t,n){var i=s;do i.z===0&&(i.z=Nc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,D1(i)}function D1(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Nc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function U1(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Fs(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function N1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!O1(s,e)&&(Gr(s,e)&&Gr(e,s)&&F1(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||Yo(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yo(s,e){return s.x===e.x&&s.y===e.y}function zm(s,e,t,n){var i=Qa(St(s,e,t)),r=Qa(St(s,e,n)),a=Qa(St(t,n,s)),o=Qa(St(t,n,e));return!!(i!==r&&a!==o||i===0&&ja(s,t,e)||r===0&&ja(s,n,e)||a===0&&ja(t,s,n)||o===0&&ja(t,e,n))}function ja(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qa(s){return s>0?1:s<0?-1:0}function O1(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Gr(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function F1(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function km(s,e){var t=new Oc(s.i,s.x,s.y),n=new Oc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(s,e,t,n){var i=new Oc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Oc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}$o.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(Fc(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Fc(s,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,d=n[o+1]*t,m=n[o+2]*t;u+=Math.abs((s[f]-s[m])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[m+1]-s[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Fc(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}$o.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new J;new J;var Lf;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Lf||(Lf={}));const Vm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B1=new Ks(-1,1,1,-1,0,1);class z1 extends je{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}const k1=new z1;class Nh{constructor(e){this._mesh=new Lt(k1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class V1 extends tr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xs.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class If extends tr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class H1 extends tr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new J);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V1(Vm),this.copyPass.material.blending=In,this.clock=new Ph}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}If!==void 0&&(a instanceof If?n=!0:a instanceof H1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W1 extends tr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const X1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends tr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Qt(r,a,{type:Dn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Qt(r,a,{type:Dn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=X1;this.highPassUniforms=Xs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Vm;this.copyUniforms=Xs.clone(h.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:lo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new ui,this.fsQuad=new Nh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ys.BlurDirectionX=new J(1,0);Ys.BlurDirectionY=new J(0,1);const q1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $1 extends tr{constructor(){super();const e=q1;this.uniforms=Xs.clone(e.uniforms),this.material=new bh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Nh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Y1(s,e,t){let{bloomStrength:n=.9}=e,{bloomRadius:i=.5}=e,{bloomThreshold:r=.15}=e;const a=hs(),{size:o,scene:l,camera:c,renderer:h}=a;let u=null,f=null,d=null,m=null;function _(){const p=document.createElement("canvas");p.width=512,p.height=256;const g=p.getContext("2d"),y=g.createLinearGradient(0,0,0,256);y.addColorStop(0,"#fff5e0"),y.addColorStop(.3,"#f5e0c0"),y.addColorStop(.5,"#d4b58c"),y.addColorStop(.7,"#8a6242"),y.addColorStop(.85,"#4a2e1a"),y.addColorStop(1,"#1a0c08"),g.fillStyle=y,g.fillRect(0,0,512,256);const v=new yi(p);return v.mapping=Vs,v.colorSpace=Mt,v.minFilter=pt,v.magFilter=pt,v.generateMipmaps=!1,v.needsUpdate=!0,v}return Xr(()=>{l.background=new xe(15854041);const p=new mo(h);p.compileEquirectangularShader();const g=_();d=p.fromEquirectangular(g).texture,l.environment=d,g.dispose(),p.dispose();let y=window.innerWidth,v=window.innerHeight;o.subscribe(x=>{x!=null&&x.width&&(y=x.width),x!=null&&x.height&&(v=x.height)})(),u=new G1(h),u.addPass(new W1(l,c.current)),t(3,f=new Ys(new J(y,v),n,i,r)),u.addPass(f),u.addPass(new $1),u.setSize(y,v),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),m=o.subscribe(x=>{u&&(x!=null&&x.width)&&(x!=null&&x.height)&&u.setSize(x.width,x.height)})}),KS((p,g)=>{u&&u.render(g)}),nn(()=>{var p;m&&m(),d&&d.dispose(),u&&(u.passes.forEach(g=>{var y;return(y=g.dispose)==null?void 0:y.call(g)}),(p=u.dispose)==null||p.call(u)),l&&(l.environment=null,l.background=null)}),s.$$set=p=>{"bloomStrength"in p&&t(0,n=p.bloomStrength),"bloomRadius"in p&&t(1,i=p.bloomRadius),"bloomThreshold"in p&&t(2,r=p.bloomThreshold)},s.$$.update=()=>{s.$$.dirty&15&&f&&(t(3,f.strength=n,f),t(3,f.radius=i,f),t(3,f.threshold=r,f))},[n,i,r,f]}class Z1 extends zn{constructor(e){super(),kn(this,e,Y1,null,Vn,{bloomStrength:0,bloomRadius:1,bloomThreshold:2})}}function Df(s,e,t){const n=s.slice();return n[69]=e[t],n[71]=t,n}function kl(s){const e=s.slice(),t=(e[71]-1)/(Gm-1);e[72]=t;const n=Math.max(0,(1-e[72])*.55);e[73]=n;const i=e[30]*1.6*(1-e[72]*.5);return e[74]=i,e}function Vl(s){const e=s.slice(),t=e[0].hole.c*e[0].cw+e[0].cw/2-e[0].W/2;e[75]=t;const n=e[0].H/2-(e[0].hole.r*e[0].ch+e[0].ch/2);e[76]=n;const i=e[0].br*4;e[77]=i;const r=1+Math.sin(e[8]*.003)*.05;e[78]=r;const a=e[77]*e[78];e[79]=a;const o=303/256;return e[80]=o,e}function Uf(s,e,t){const n=s.slice();n[81]=e[t];const i=n[18][n[81].type];n[82]=i;const r=n[81].c*n[0].cw+n[0].cw/2-n[0].W/2;n[83]=r;const a=n[0].H/2-(n[81].r*n[0].ch+n[0].ch/2);n[84]=a;const o=n[81].collected?n[8]-n[81].collectT:0;n[85]=o;const l=!n[81].collected||n[85]<400;return n[86]=l,n}function Hl(s){const e=s.slice(),t=e[0].br*4.2;e[89]=t;const n=e[81].collected?Math.max(0,1-e[85]/400):1;e[90]=n;const i=e[81].collected?1+e[85]/400*.45:1+Math.sin(e[8]*.004+e[81].c+e[81].r)*.06;e[91]=i;const r=e[89]*e[91];e[92]=r;const a=e[28]+e[92]*e[36]*.5+2;return e[93]=a,e}function Nf(s,e,t){const n=s.slice();n[94]=e[t],n[71]=t;const i=n[94].c*n[0].cw+n[0].cw/2-n[0].W/2;n[83]=i;const r=n[0].H/2-(n[94].r*n[0].ch+n[0].ch/2);n[84]=r;const a=n[94].passed?"#ffcc00":"#88ff66";n[95]=a;const o=n[11]*1.2;n[96]=o;const l=n[27]*1.3;return n[97]=l,n}function Of(s,e,t){const n=s.slice();return n[99]=e[t],n[71]=t,n}function Ff(s,e,t){const n=s.slice();return n[101]=e[t],n[71]=t,n}function Bf(s,e,t){const n=s.slice();return n[99]=e[t],n[71]=t,n}function zf(s,e,t){const n=s.slice();return n[101]=e[t],n[71]=t,n}function kf(s,e,t){const n=s.slice();return n[105]=e[t],n}function Vf(s,e,t){const n=s.slice();return n[108]=e[t],n[71]=t,n}function Gl(s){const e=s.slice(),t=-Math.min(e[0].cw,e[0].ch)*4;return e[110]=t,e}function Hf(s){let e,t;return e=new ze.Mesh({props:{position:[0,0,s[110]],renderOrder:-1e3,$$slots:{default:[J1]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&1&&(r.position=[0,0,n[110]]),i[0]&1|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function J1(s){let e,t,n,i;return e=new ze.PlaneGeometry({props:{args:[s[0].W*8,s[0].H*8]}}),n=new ze.MeshBasicMaterial({props:{color:"#f1e9d9",toneMapped:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment)},m(r,a){Ue(e,r,a),we(r,t,a),Ue(n,r,a),i=!0},p(r,a){const o={};a[0]&1&&(o.args=[r[0].W*8,r[0].H*8]),e.$set(o)},i(r){i||(B(e.$$.fragment,r),B(n.$$.fragment,r),i=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(e,r),De(n,r)}}}function Gf(s){let e,t;return e=new ze.Mesh({props:{position:[0,0,-s[29]],receiveShadow:!0,$$slots:{default:[Q1]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&536870912&&(r.position=[0,0,-n[29]]),i[0]&129|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function K1(s){let e,t;return e=new ze.MeshStandardMaterial({props:{color:Zo,roughness:.92,metalness:0,envMapIntensity:.15}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p:xd,i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function j1(s){let e,t;return e=new ze.MeshStandardMaterial({props:{map:s[7],color:Zo,roughness:.92,metalness:0,envMapIntensity:.15}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&128&&(r.map=n[7]),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Q1(s){let e,t,n,i,r,a;e=new ze.PlaneGeometry({props:{args:[s[0].W,s[0].H]}});const o=[j1,K1],l=[];function c(h,u){return h[7]?0:1}return n=c(s),i=l[n]=o[n](s),{c(){Ne(e.$$.fragment),t=Je(),i.c(),r=wt()},m(h,u){Ue(e,h,u),we(h,t,u),l[n].m(h,u),we(h,r,u),a=!0},p(h,u){const f={};u[0]&1&&(f.args=[h[0].W,h[0].H]),e.$set(f);let d=n;n=c(h),n===d?l[n].p(h,u):(ft(),$(l[d],1,1,()=>{l[d]=null}),dt(),i=l[n],i?i.p(h,u):(i=l[n]=o[n](h),i.c()),B(i,1),i.m(r.parentNode,r))},i(h){a||(B(e.$$.fragment,h),B(i),a=!0)},o(h){$(e.$$.fragment,h),$(i),a=!1},d(h){h&&(Se(t),Se(r)),De(e,h),l[n].d(h)}}}function Wf(s){let e=[],t=new Map,n,i,r,a=[],o=new Map,l,c=[],h=new Map,u,f,d=kt(["straight","corner","T","cross","deadEnd"]);const m=x=>x[105];for(let x=0;x<5;x+=1){let M=kf(s,d,x),E=m(M);t.set(E,e[x]=qf(E,M))}let _=s[22]&&s[23]&&$f(s),p=s[24]&&Zf(s),g=kt(s[16]);const y=x=>`ns${x[71]}`;for(let x=0;x<g.length;x+=1){let M=Ff(s,g,x),E=y(M);o.set(E,a[x]=jf(E,M))}let v=kt(s[17]);const S=x=>`nb${x[71]}`;for(let x=0;x<v.length;x+=1){let M=Of(s,v,x),E=S(M);h.set(E,c[x]=ed(E,M))}return{c(){for(let x=0;x<5;x+=1)e[x].c();n=Je(),_&&_.c(),i=Je(),p&&p.c(),r=Je();for(let x=0;x<a.length;x+=1)a[x].c();l=Je();for(let x=0;x<c.length;x+=1)c[x].c();u=wt()},m(x,M){for(let E=0;E<5;E+=1)e[E]&&e[E].m(x,M);we(x,n,M),_&&_.m(x,M),we(x,i,M),p&&p.m(x,M),we(x,r,M);for(let E=0;E<a.length;E+=1)a[E]&&a[E].m(x,M);we(x,l,M);for(let E=0;E<c.length;E+=1)c[E]&&c[E].m(x,M);we(x,u,M),f=!0},p(x,M){M[0]&32784&&(d=kt(["straight","corner","T","cross","deadEnd"]),ft(),e=Qn(e,M,m,1,x,d,t,n.parentNode,ei,qf,n,kf),dt()),x[22]&&x[23]?_?(_.p(x,M),M[0]&12582912&&B(_,1)):(_=$f(x),_.c(),B(_,1),_.m(i.parentNode,i)):_&&(ft(),$(_,1,1,()=>{_=null}),dt()),x[24]?p?(p.p(x,M),M[0]&16777216&&B(p,1)):(p=Zf(x),p.c(),B(p,1),p.m(r.parentNode,r)):p&&(ft(),$(p,1,1,()=>{p=null}),dt()),M[0]&469827584&&(g=kt(x[16]),ft(),a=Qn(a,M,y,1,x,g,o,l.parentNode,ei,jf,l,Ff),dt()),M[0]&469893120&&(v=kt(x[17]),ft(),c=Qn(c,M,S,1,x,v,h,u.parentNode,ei,ed,u,Of),dt())},i(x){if(!f){for(let M=0;M<5;M+=1)B(e[M]);B(_),B(p);for(let M=0;M<g.length;M+=1)B(a[M]);for(let M=0;M<v.length;M+=1)B(c[M]);f=!0}},o(x){for(let M=0;M<5;M+=1)$(e[M]);$(_),$(p);for(let M=0;M<a.length;M+=1)$(a[M]);for(let M=0;M<c.length;M+=1)$(c[M]);f=!1},d(x){x&&(Se(n),Se(i),Se(r),Se(l),Se(u));for(let M=0;M<5;M+=1)e[M].d(x);_&&_.d(x),p&&p.d(x);for(let M=0;M<a.length;M+=1)a[M].d(x);for(let M=0;M<c.length;M+=1)c[M].d(x)}}}function Xf(s,e){let t,n,i;return n=new g1({props:{position:[e[108].x,e[108].y,0],rotation:[0,0,e[108].rot]}}),{key:s,first:null,c(){t=wt(),Ne(n.$$.fragment),this.first=t},m(r,a){we(r,t,a),Ue(n,r,a),i=!0},p(r,a){e=r;const o={};a[0]&32768&&(o.position=[e[108].x,e[108].y,0]),a[0]&32768&&(o.rotation=[0,0,e[108].rot]),n.$set(o)},i(r){i||(B(n.$$.fragment,r),i=!0)},o(r){$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(n,r)}}}function ew(s){let e,t,n=[],i=new Map,r,a;e=new ze.MeshStandardMaterial({props:{color:Zo,roughness:.65,metalness:.02,envMapIntensity:.4}});let o=kt(s[15][s[105]]);const l=c=>`${c[105]}-${c[71]}`;for(let c=0;c<o.length;c+=1){let h=Vf(s,o,c),u=l(h);i.set(u,n[c]=Xf(u,h))}return{c(){Ne(e.$$.fragment),t=Je();for(let c=0;c<n.length;c+=1)n[c].c();r=Je()},m(c,h){Ue(e,c,h),we(c,t,h);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(c,h);we(c,r,h),a=!0},p(c,h){h[0]&32768&&(o=kt(c[15][c[105]]),ft(),n=Qn(n,h,l,1,c,o,i,r.parentNode,ei,Xf,r,Vf),dt())},i(c){if(!a){B(e.$$.fragment,c);for(let h=0;h<o.length;h+=1)B(n[h]);a=!0}},o(c){$(e.$$.fragment,c);for(let h=0;h<n.length;h+=1)$(n[h]);a=!1},d(c){c&&(Se(t),Se(r)),De(e,c);for(let h=0;h<n.length;h+=1)n[h].d(c)}}}function qf(s,e){let t,n,i;return n=new c1({props:{geometry:e[4][e[105]],castShadow:!0,receiveShadow:!0,$$slots:{default:[ew]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=wt(),Ne(n.$$.fragment),this.first=t},m(r,a){we(r,t,a),Ue(n,r,a),i=!0},p(r,a){e=r;const o={};a[0]&16&&(o.geometry=e[4][e[105]]),a[0]&32768|a[3]&262144&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i(r){i||(B(n.$$.fragment,r),i=!0)},o(r){$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(n,r)}}}function $f(s){let e=[],t=new Map,n,i,r=kt(s[16]);const a=o=>`sh${o[71]}`;for(let o=0;o<r.length;o+=1){let l=zf(s,r,o),c=a(l);t.set(c,e[o]=Yf(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=wt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&415301632&&(r=kt(o[16]),ft(),e=Qn(e,l,a,1,o,r,t,n.parentNode,ei,Yf,n,zf),dt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)B(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)$(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function tw(s){let e,t,n,i,r;return e=new ze.PlaneGeometry({props:{args:s[101].type==="h"?[s[101].length,s[27]*2.8]:[s[27]*2.8,s[101].length]}}),n=new ze.MeshBasicMaterial({props:{color:"#1a0e08",alphaMap:s[101].type==="h"?s[22]:s[23],transparent:!0,opacity:.55,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je()},m(a,o){Ue(e,a,o),we(a,t,o),Ue(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o[0]&134283264&&(l.args=a[101].type==="h"?[a[101].length,a[27]*2.8]:[a[27]*2.8,a[101].length]),e.$set(l);const c={};o[0]&12648448&&(c.alphaMap=a[101].type==="h"?a[22]:a[23]),n.$set(c)},i(a){r||(B(e.$$.fragment,a),B(n.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),$(n.$$.fragment,a),r=!1},d(a){a&&(Se(t),Se(i)),De(e,a),De(n,a)}}}function Yf(s,e){let t,n,i;return n=new ze.Mesh({props:{position:[e[101].x,e[101].y,e[28]-.05],renderOrder:1,$$slots:{default:[tw]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=wt(),Ne(n.$$.fragment),this.first=t},m(r,a){we(r,t,a),Ue(n,r,a),i=!0},p(r,a){e=r;const o={};a[0]&268500992&&(o.position=[e[101].x,e[101].y,e[28]-.05]),a[0]&146866176|a[3]&262144&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i(r){i||(B(n.$$.fragment,r),i=!0)},o(r){$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(n,r)}}}function Zf(s){let e=[],t=new Map,n,i,r=kt(s[17]);const a=o=>`shn${o[71]}`;for(let o=0;o<r.length;o+=1){let l=Bf(s,r,o),c=a(l);t.set(c,e[o]=Kf(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=wt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&419561472&&(r=kt(o[17]),ft(),e=Qn(e,l,a,1,o,r,t,n.parentNode,ei,Kf,n,Bf),dt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)B(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)$(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function Jf(s){let e,t;return e=new ze.Mesh({props:{position:[s[99].x,s[99].y,s[28]-.05],renderOrder:1,$$slots:{default:[nw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&268566528&&(r.position=[n[99].x,n[99].y,n[28]-.05]),i[0]&150994944|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function nw(s){let e,t,n,i,r;return e=new ze.CircleGeometry({props:{args:[s[27]*2.2,24]}}),n=new ze.MeshBasicMaterial({props:{color:"#1a0e08",alphaMap:s[24],transparent:!0,opacity:.55,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je()},m(a,o){Ue(e,a,o),we(a,t,o),Ue(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o[0]&134217728&&(l.args=[a[27]*2.2,24]),e.$set(l);const c={};o[0]&16777216&&(c.alphaMap=a[24]),n.$set(c)},i(a){r||(B(e.$$.fragment,a),B(n.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),$(n.$$.fragment,a),r=!1},d(a){a&&(Se(t),Se(i)),De(e,a),De(n,a)}}}function Kf(s,e){let t,n,i,r=e[99].isIntersection&&Jf(e);return{key:s,first:null,c(){t=wt(),r&&r.c(),n=wt(),this.first=t},m(a,o){we(a,t,o),r&&r.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[99].isIntersection?r?(r.p(e,o),o[0]&131072&&B(r,1)):(r=Jf(e),r.c(),B(r,1),r.m(n.parentNode,n)):r&&(ft(),$(r,1,1,()=>{r=null}),dt())},i(a){i||(B(r),i=!0)},o(a){$(r),i=!1},d(a){a&&(Se(t),Se(n)),r&&r.d(a)}}}function iw(s){let e,t,n,i;return e=new ze.PlaneGeometry({props:{args:s[101].type==="h"?[s[101].length,s[27]*.32]:[s[27]*.32,s[101].length]}}),n=new ze.MeshStandardMaterial({props:{color:"#ffffff",emissive:"#ffffff",emissiveIntensity:2.2,toneMapped:!1,transparent:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment)},m(r,a){Ue(e,r,a),we(r,t,a),Ue(n,r,a),i=!0},p(r,a){const o={};a[0]&134283264&&(o.args=r[101].type==="h"?[r[101].length,r[27]*.32]:[r[27]*.32,r[101].length]),e.$set(o)},i(r){i||(B(e.$$.fragment,r),B(n.$$.fragment,r),i=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(e,r),De(n,r)}}}function sw(s){let e,t,n,i,r;return e=new ze.PlaneGeometry({props:{args:s[101].type==="h"?[s[101].length,s[27]*.85]:[s[27]*.85,s[101].length]}}),n=new ze.MeshStandardMaterial({props:{color:s[26],emissive:s[26],emissiveIntensity:2.4,toneMapped:!1,transparent:!0,opacity:.95,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je()},m(a,o){Ue(e,a,o),we(a,t,o),Ue(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o[0]&134283264&&(l.args=a[101].type==="h"?[a[101].length,a[27]*.85]:[a[27]*.85,a[101].length]),e.$set(l);const c={};o[0]&67108864&&(c.color=a[26]),o[0]&67108864&&(c.emissive=a[26]),n.$set(c)},i(a){r||(B(e.$$.fragment,a),B(n.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),$(n.$$.fragment,a),r=!1},d(a){a&&(Se(t),Se(i)),De(e,a),De(n,a)}}}function jf(s,e){let t,n,i,r,a;return n=new ze.Mesh({props:{position:[e[101].x,e[101].y,e[28]],renderOrder:2,$$slots:{default:[iw]},$$scope:{ctx:e}}}),r=new ze.Mesh({props:{position:[e[101].x,e[101].y,e[28]+.1],renderOrder:3,$$slots:{default:[sw]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=wt(),Ne(n.$$.fragment),i=Je(),Ne(r.$$.fragment),this.first=t},m(o,l){we(o,t,l),Ue(n,o,l),we(o,i,l),Ue(r,o,l),a=!0},p(o,l){e=o;const c={};l[0]&268500992&&(c.position=[e[101].x,e[101].y,e[28]]),l[0]&134283264|l[3]&262144&&(c.$$scope={dirty:l,ctx:e}),n.$set(c);const h={};l[0]&268500992&&(h.position=[e[101].x,e[101].y,e[28]+.1]),l[0]&201392128|l[3]&262144&&(h.$$scope={dirty:l,ctx:e}),r.$set(h)},i(o){a||(B(n.$$.fragment,o),B(r.$$.fragment,o),a=!0)},o(o){$(n.$$.fragment,o),$(r.$$.fragment,o),a=!1},d(o){o&&(Se(t),Se(i)),De(n,o),De(r,o)}}}function Qf(s){let e,t;return e=new ze.Mesh({props:{position:[s[99].x,s[99].y,s[28]+.3],renderOrder:4,$$slots:{default:[rw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&268566528&&(r.position=[n[99].x,n[99].y,n[28]+.3]),i[0]&201326592|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function rw(s){let e,t,n,i,r;return e=new ze.SphereGeometry({props:{args:[s[27]*.6,16,8]}}),n=new ze.MeshStandardMaterial({props:{color:s[26],emissive:s[26],emissiveIntensity:1.5,transparent:!0,opacity:.95,toneMapped:!1,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je()},m(a,o){Ue(e,a,o),we(a,t,o),Ue(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o[0]&134217728&&(l.args=[a[27]*.6,16,8]),e.$set(l);const c={};o[0]&67108864&&(c.color=a[26]),o[0]&67108864&&(c.emissive=a[26]),n.$set(c)},i(a){r||(B(e.$$.fragment,a),B(n.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),$(n.$$.fragment,a),r=!1},d(a){a&&(Se(t),Se(i)),De(e,a),De(n,a)}}}function ed(s,e){let t,n,i,r=e[99].isIntersection&&Qf(e);return{key:s,first:null,c(){t=wt(),r&&r.c(),n=wt(),this.first=t},m(a,o){we(a,t,o),r&&r.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[99].isIntersection?r?(r.p(e,o),o[0]&131072&&B(r,1)):(r=Qf(e),r.c(),B(r,1),r.m(n.parentNode,n)):r&&(ft(),$(r,1,1,()=>{r=null}),dt())},i(a){i||(B(r),i=!0)},o(a){$(r),i=!1},d(a){a&&(Se(t),Se(n)),r&&r.d(a)}}}function td(s){let e=[],t=new Map,n,i,r=kt(s[0].checkpoints);const a=o=>o[71];for(let o=0;o<r.length;o+=1){let l=Nf(s,r,o),c=a(l);t.set(c,e[o]=nd(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=wt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&402655233&&(r=kt(o[0].checkpoints),ft(),e=Qn(e,l,a,1,o,r,t,n.parentNode,ei,nd,n,Nf),dt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)B(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)$(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function aw(s){let e,t,n,i,r;return e=new ze.PlaneGeometry({props:{args:s[94].horizontal?[s[96],s[97]]:[s[97],s[96]]}}),n=new ze.MeshStandardMaterial({props:{color:s[95],emissive:s[95],emissiveIntensity:1.5,toneMapped:!1,transparent:!0,opacity:1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment),i=Je()},m(a,o){Ue(e,a,o),we(a,t,o),Ue(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o[0]&134219777&&(l.args=a[94].horizontal?[a[96],a[97]]:[a[97],a[96]]),e.$set(l);const c={};o[0]&1&&(c.color=a[95]),o[0]&1&&(c.emissive=a[95]),n.$set(c)},i(a){r||(B(e.$$.fragment,a),B(n.$$.fragment,a),r=!0)},o(a){$(e.$$.fragment,a),$(n.$$.fragment,a),r=!1},d(a){a&&(Se(t),Se(i)),De(e,a),De(n,a)}}}function nd(s,e){let t,n,i;return n=new ze.Mesh({props:{position:[e[83],e[84],e[28]+.5],$$slots:{default:[aw]},$$scope:{ctx:e}}}),{key:s,first:null,c(){t=wt(),Ne(n.$$.fragment),this.first=t},m(r,a){we(r,t,a),Ue(n,r,a),i=!0},p(r,a){e=r;const o={};a[0]&268435457&&(o.position=[e[83],e[84],e[28]+.5]),a[0]&134219777|a[3]&262144&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i(r){i||(B(n.$$.fragment,r),i=!0)},o(r){$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(n,r)}}}function id(s){let e,t;return e=new ze.Mesh({props:{geometry:s[6],position:[0,0,0],castShadow:!0,receiveShadow:!0,$$slots:{default:[ow]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&64&&(r.geometry=n[6]),i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function ow(s){let e,t;return e=new ze.MeshStandardMaterial({props:{color:Zo,roughness:.65,metalness:.02,envMapIntensity:.4}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p:xd,i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function sd(s){let e,t;return e=new ze.Mesh({props:{geometry:s[5],position:[0,0,s[10]],$$slots:{default:[lw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&32&&(r.geometry=n[5]),i[0]&1024&&(r.position=[0,0,n[10]]),i[0]&67108864|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function lw(s){let e,t;return e=new ze.MeshStandardMaterial({props:{color:s[26],emissive:s[26],emissiveIntensity:2,toneMapped:!1}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&67108864&&(r.color=n[26]),i[0]&67108864&&(r.emissive=n[26]),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function rd(s){let e=[],t=new Map,n,i,r=kt(s[0].collectibles);const a=o=>o[81].r+"-"+o[81].c;for(let o=0;o<r.length;o+=1){let l=Uf(s,r,o),c=a(l);t.set(c,e[o]=od(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=wt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&268697857|l[1]&32&&(r=kt(o[0].collectibles),ft(),e=Qn(e,l,a,1,o,r,t,n.parentNode,ei,od,n,Uf),dt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)B(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)$(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function ad(s){let e,t;return e=new ze.Sprite({props:{position:[s[83],s[84],s[93]],scale:[s[92],s[92],1],renderOrder:5,$$slots:{default:[cw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&268435713&&(r.position=[n[83],n[84],n[93]]),i[0]&257&&(r.scale=[n[92],n[92],1]),i[0]&262401|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function cw(s){let e,t,n;return e=new ze.SpriteMaterial({props:{map:s[82],transparent:!0,opacity:s[90],depthWrite:!1,depthTest:!0}}),{c(){Ne(e.$$.fragment),t=Je()},m(i,r){Ue(e,i,r),we(i,t,r),n=!0},p(i,r){const a={};r[0]&262145&&(a.map=i[82]),r[0]&257&&(a.opacity=i[90]),e.$set(a)},i(i){n||(B(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){i&&Se(t),De(e,i)}}}function od(s,e){let t,n,i,r=e[82]&&e[86]&&ad(Hl(e));return{key:s,first:null,c(){t=wt(),r&&r.c(),n=wt(),this.first=t},m(a,o){we(a,t,o),r&&r.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[82]&&e[86]?r?(r.p(Hl(e),o),o[0]&262401&&B(r,1)):(r=ad(Hl(e)),r.c(),B(r,1),r.m(n.parentNode,n)):r&&(ft(),$(r,1,1,()=>{r=null}),dt())},i(a){i||(B(r),i=!0)},o(a){$(r),i=!1},d(a){a&&(Se(t),Se(n)),r&&r.d(a)}}}function ld(s){let e,t;return e=new ze.Sprite({props:{position:[s[75],s[76],s[28]+1.5],scale:[s[79],s[79]*s[80],1],$$slots:{default:[hw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&268435457&&(r.position=[n[75],n[76],n[28]+1.5]),i[0]&257&&(r.scale=[n[79],n[79]*n[80],1]),i[0]&262144|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function hw(s){let e,t;return e=new ze.SpriteMaterial({props:{map:s[18].finish,transparent:!0,depthWrite:!1,depthTest:!1}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&262144&&(r.map=n[18].finish),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function cd(s){let e,t,n,i,r,a,o,l,c,h=s[21]&&hd(s);t=new ze.Mesh({props:{position:[s[32],s[31],(s[28]+s[30])*s[9]],scale:[s[9],s[9],s[9]],castShadow:!0,$$slots:{default:[fw]},$$scope:{ctx:s}}}),i=new ze.PointLight({props:{position:[s[32],s[31],s[28]+s[30]*1.5],color:s[26],intensity:2.4,distance:Math.min(s[0].cw,s[0].ch)*2.6,decay:2}}),a=new ze.PointLight({props:{position:[s[32],s[31],s[28]+s[30]*.25],color:s[26],intensity:3.6,distance:Math.min(s[0].cw,s[0].ch)*1.5,decay:2,castShadow:!1}});let u=s[20]&&s[19].length>1&&ud(s);return{c(){h&&h.c(),e=Je(),Ne(t.$$.fragment),n=Je(),Ne(i.$$.fragment),r=Je(),Ne(a.$$.fragment),o=Je(),u&&u.c(),l=wt()},m(f,d){h&&h.m(f,d),we(f,e,d),Ue(t,f,d),we(f,n,d),Ue(i,f,d),we(f,r,d),Ue(a,f,d),we(f,o,d),u&&u.m(f,d),we(f,l,d),c=!0},p(f,d){f[21]?h?(h.p(f,d),d[0]&2097152&&B(h,1)):(h=hd(f),h.c(),B(h,1),h.m(e.parentNode,e)):h&&(ft(),$(h,1,1,()=>{h=null}),dt());const m={};d[0]&1342177792|d[1]&3&&(m.position=[f[32],f[31],(f[28]+f[30])*f[9]]),d[0]&512&&(m.scale=[f[9],f[9],f[9]]),d[0]&1073741824|d[3]&262144&&(m.$$scope={dirty:d,ctx:f}),t.$set(m);const _={};d[0]&1342177280|d[1]&3&&(_.position=[f[32],f[31],f[28]+f[30]*1.5]),d[0]&67108864&&(_.color=f[26]),d[0]&1&&(_.distance=Math.min(f[0].cw,f[0].ch)*2.6),i.$set(_);const p={};d[0]&1342177280|d[1]&3&&(p.position=[f[32],f[31],f[28]+f[30]*.25]),d[0]&67108864&&(p.color=f[26]),d[0]&1&&(p.distance=Math.min(f[0].cw,f[0].ch)*1.5),a.$set(p),f[20]&&f[19].length>1?u?(u.p(f,d),d[0]&1572864&&B(u,1)):(u=ud(f),u.c(),B(u,1),u.m(l.parentNode,l)):u&&(ft(),$(u,1,1,()=>{u=null}),dt())},i(f){c||(B(h),B(t.$$.fragment,f),B(i.$$.fragment,f),B(a.$$.fragment,f),B(u),c=!0)},o(f){$(h),$(t.$$.fragment,f),$(i.$$.fragment,f),$(a.$$.fragment,f),$(u),c=!1},d(f){f&&(Se(e),Se(n),Se(r),Se(o),Se(l)),h&&h.d(f),De(t,f),De(i,f),De(a,f),u&&u.d(f)}}}function hd(s){let e,t;return e=new ze.Mesh({props:{position:[s[32],s[31],s[28]+.05],renderOrder:0,$$slots:{default:[uw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&268435456|i[1]&3&&(r.position=[n[32],n[31],n[28]+.05]),i[0]&1075839488|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function uw(s){let e,t,n,i;return e=new ze.PlaneGeometry({props:{args:[s[30]*3.4,s[30]*3.4]}}),n=new ze.MeshBasicMaterial({props:{map:s[21],transparent:!0,opacity:s[9],depthTest:!0,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment)},m(r,a){Ue(e,r,a),we(r,t,a),Ue(n,r,a),i=!0},p(r,a){const o={};a[0]&1073741824&&(o.args=[r[30]*3.4,r[30]*3.4]),e.$set(o);const l={};a[0]&2097152&&(l.map=r[21]),a[0]&512&&(l.opacity=r[9]),n.$set(l)},i(r){i||(B(e.$$.fragment,r),B(n.$$.fragment,r),i=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(e,r),De(n,r)}}}function fw(s){let e,t,n,i;return e=new ze.SphereGeometry({props:{args:[s[30],32,16]}}),n=new ze.MeshStandardMaterial({props:{color:"#D4AF37",metalness:1,roughness:.15,envMapIntensity:1.6}}),{c(){Ne(e.$$.fragment),t=Je(),Ne(n.$$.fragment)},m(r,a){Ue(e,r,a),we(r,t,a),Ue(n,r,a),i=!0},p(r,a){const o={};a[0]&1073741824&&(o.args=[r[30],32,16]),e.$set(o)},i(r){i||(B(e.$$.fragment,r),B(n.$$.fragment,r),i=!0)},o(r){$(e.$$.fragment,r),$(n.$$.fragment,r),i=!1},d(r){r&&Se(t),De(e,r),De(n,r)}}}function ud(s){let e=[],t=new Map,n,i,r=kt(s[19]);const a=o=>`trail-${o[71]}`;for(let o=0;o<r.length;o+=1){let l=Df(s,r,o),c=a(l);t.set(c,e[o]=dd(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=wt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&1343750144&&(r=kt(o[19]),ft(),e=Qn(e,l,a,1,o,r,t,n.parentNode,ei,dd,n,Df),dt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)B(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)$(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function fd(s){let e,t;return e=new ze.Sprite({props:{position:[s[69].x,s[69].y,s[28]+s[30]*.5],scale:[s[74],s[74],1],$$slots:{default:[dw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[0]&1342701568&&(r.position=[n[69].x,n[69].y,n[28]+n[30]*.5]),i[0]&1074266112&&(r.scale=[n[74],n[74],1]),i[0]&1572864|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function dw(s){let e,t,n;return e=new ze.SpriteMaterial({props:{map:s[20],transparent:!0,opacity:s[73],depthTest:!0,depthWrite:!1}}),{c(){Ne(e.$$.fragment),t=Je()},m(i,r){Ue(e,i,r),we(i,t,r),n=!0},p(i,r){const a={};r[0]&1048576&&(a.map=i[20]),r[0]&524288&&(a.opacity=i[73]),e.$set(a)},i(i){n||(B(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){i&&Se(t),De(e,i)}}}function dd(s,e){let t,n,i,r=e[71]>0&&fd(kl(e));return{key:s,first:null,c(){t=wt(),r&&r.c(),n=wt(),this.first=t},m(a,o){we(a,t,o),r&&r.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[71]>0?r?(r.p(kl(e),o),o[0]&524288&&B(r,1)):(r=fd(kl(e)),r.c(),B(r,1),r.m(n.parentNode,n)):r&&(ft(),$(r,1,1,()=>{r=null}),dt())},i(a){i||(B(r),i=!0)},o(a){$(r),i=!1},d(a){a&&(Se(t),Se(n)),r&&r.d(a)}}}function pw(s){var y,v,S;let e,t,n,i,r,a,o,l,c,h=s[0]&&Gf(s),u=s[0]&&s[0].maze&&s[4]&&s[15]&&Wf(s),f=((y=s[0])==null?void 0:y.checkpoints)&&td(s),d=s[0]&&s[6]&&id(s),m=s[0]&&s[5]&&sd(s),_=((v=s[0])==null?void 0:v.collectibles)&&rd(s),p=((S=s[0])==null?void 0:S.hole)&&s[18].finish&&ld(Vl(s)),g=s[0]&&s[25]&&cd(s);return{c(){h&&h.c(),e=Je(),u&&u.c(),t=Je(),f&&f.c(),n=Je(),d&&d.c(),i=Je(),m&&m.c(),r=Je(),_&&_.c(),a=Je(),p&&p.c(),o=Je(),g&&g.c(),l=wt()},m(x,M){h&&h.m(x,M),we(x,e,M),u&&u.m(x,M),we(x,t,M),f&&f.m(x,M),we(x,n,M),d&&d.m(x,M),we(x,i,M),m&&m.m(x,M),we(x,r,M),_&&_.m(x,M),we(x,a,M),p&&p.m(x,M),we(x,o,M),g&&g.m(x,M),we(x,l,M),c=!0},p(x,M){var E,D,b;x[0]?h?(h.p(x,M),M[0]&1&&B(h,1)):(h=Gf(x),h.c(),B(h,1),h.m(e.parentNode,e)):h&&(ft(),$(h,1,1,()=>{h=null}),dt()),x[0]&&x[0].maze&&x[4]&&x[15]?u?(u.p(x,M),M[0]&32785&&B(u,1)):(u=Wf(x),u.c(),B(u,1),u.m(t.parentNode,t)):u&&(ft(),$(u,1,1,()=>{u=null}),dt()),(E=x[0])!=null&&E.checkpoints?f?(f.p(x,M),M[0]&1&&B(f,1)):(f=td(x),f.c(),B(f,1),f.m(n.parentNode,n)):f&&(ft(),$(f,1,1,()=>{f=null}),dt()),x[0]&&x[6]?d?(d.p(x,M),M[0]&65&&B(d,1)):(d=id(x),d.c(),B(d,1),d.m(i.parentNode,i)):d&&(ft(),$(d,1,1,()=>{d=null}),dt()),x[0]&&x[5]?m?(m.p(x,M),M[0]&33&&B(m,1)):(m=sd(x),m.c(),B(m,1),m.m(r.parentNode,r)):m&&(ft(),$(m,1,1,()=>{m=null}),dt()),(D=x[0])!=null&&D.collectibles?_?(_.p(x,M),M[0]&1&&B(_,1)):(_=rd(x),_.c(),B(_,1),_.m(a.parentNode,a)):_&&(ft(),$(_,1,1,()=>{_=null}),dt()),(b=x[0])!=null&&b.hole&&x[18].finish?p?(p.p(Vl(x),M),M[0]&262145&&B(p,1)):(p=ld(Vl(x)),p.c(),B(p,1),p.m(o.parentNode,o)):p&&(ft(),$(p,1,1,()=>{p=null}),dt()),x[0]&&x[25]?g?(g.p(x,M),M[0]&33554433&&B(g,1)):(g=cd(x),g.c(),B(g,1),g.m(l.parentNode,l)):g&&(ft(),$(g,1,1,()=>{g=null}),dt())},i(x){c||(B(h),B(u),B(f),B(d),B(m),B(_),B(p),B(g),c=!0)},o(x){$(h),$(u),$(f),$(d),$(m),$(_),$(p),$(g),c=!1},d(x){x&&(Se(e),Se(t),Se(n),Se(i),Se(r),Se(a),Se(o),Se(l)),h&&h.d(x),u&&u.d(x),f&&f.d(x),d&&d.d(x),m&&m.d(x),_&&_.d(x),p&&p.d(x),g&&g.d(x)}}}function mw(s){let e,t;return e=new ze.Group({props:{"rotation.x":s[34],"rotation.y":s[33],$$slots:{default:[pw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[1]&8&&(r["rotation.x"]=n[34]),i[1]&4&&(r["rotation.y"]=n[33]),i[0]&2147454961|i[1]&3|i[3]&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function gw(s){let e,t,n,i,r,a,o,l,c,h,u,f,d,m,_;function p(x){s[47](x)}let g={makeDefault:!0,position:[0,s[13],s[12]],fov:Hm,near:s[14]*.5,far:s[14]*1.5};s[2]!==void 0&&(g.ref=s[2]),e=new ze.PerspectiveCamera({props:g}),zs.push(()=>Wl(e,"ref",p)),i=new Z1({props:{bloomStrength:.24,bloomRadius:.1,bloomThreshold:.85}}),a=new ze.AmbientLight({props:{intensity:1.05,color:"#fbe9c8"}});function y(x){s[48](x)}let v={position:[s[0]?-s[0].W*.4:-200,s[0]?s[0].H*.5:250,(s[0]?Math.min(s[0].cw,s[0].ch):80)*8],intensity:.95,color:"#ffeec7",castShadow:!0};s[3]!==void 0&&(v.ref=s[3]),l=new ze.DirectionalLight({props:v}),zs.push(()=>Wl(l,"ref",y)),u=new ze.DirectionalLight({props:{position:[s[0]?s[0].W*.3:150,s[0]?-s[0].H*.3:-150,400],intensity:.45,color:"#ffe0b0"}});let S=s[0]&&Hf(Gl(s));return m=new ze.Group({props:{"rotation.z":s[35],"scale.y":vw,$$slots:{default:[mw]},$$scope:{ctx:s}}}),{c(){Ne(e.$$.fragment),n=Je(),Ne(i.$$.fragment),r=Je(),Ne(a.$$.fragment),o=Je(),Ne(l.$$.fragment),h=Je(),Ne(u.$$.fragment),f=Je(),S&&S.c(),d=Je(),Ne(m.$$.fragment)},m(x,M){Ue(e,x,M),we(x,n,M),Ue(i,x,M),we(x,r,M),Ue(a,x,M),we(x,o,M),Ue(l,x,M),we(x,h,M),Ue(u,x,M),we(x,f,M),S&&S.m(x,M),we(x,d,M),Ue(m,x,M),_=!0},p(x,M){const E={};M[0]&12288&&(E.position=[0,x[13],x[12]]),M[0]&16384&&(E.near=x[14]*.5),M[0]&16384&&(E.far=x[14]*1.5),!t&&M[0]&4&&(t=!0,E.ref=x[2],Xl(()=>t=!1)),e.$set(E);const D={};M[0]&1&&(D.position=[x[0]?-x[0].W*.4:-200,x[0]?x[0].H*.5:250,(x[0]?Math.min(x[0].cw,x[0].ch):80)*8]),!c&&M[0]&8&&(c=!0,D.ref=x[3],Xl(()=>c=!1)),l.$set(D);const b={};M[0]&1&&(b.position=[x[0]?x[0].W*.3:150,x[0]?-x[0].H*.3:-150,400]),u.$set(b),x[0]?S?(S.p(Gl(x),M),M[0]&1&&B(S,1)):(S=Hf(Gl(x)),S.c(),B(S,1),S.m(d.parentNode,d)):S&&(ft(),$(S,1,1,()=>{S=null}),dt());const T={};M[1]&16&&(T["rotation.z"]=x[35]),M[0]&2147454961|M[1]&15|M[3]&262144&&(T.$$scope={dirty:M,ctx:x}),m.$set(T)},i(x){_||(B(e.$$.fragment,x),B(i.$$.fragment,x),B(a.$$.fragment,x),B(l.$$.fragment,x),B(u.$$.fragment,x),B(S),B(m.$$.fragment,x),_=!0)},o(x){$(e.$$.fragment,x),$(i.$$.fragment,x),$(a.$$.fragment,x),$(l.$$.fragment,x),$(u.$$.fragment,x),$(S),$(m.$$.fragment,x),_=!1},d(x){x&&(Se(n),Se(r),Se(o),Se(h),Se(f),Se(d)),De(e,x),De(i,x),De(a,x),De(l,x),De(u,x),S&&S.d(x),De(m,x)}}}function _w(s){let e,t,n;return t=new MS({props:{shadows:$r,$$slots:{default:[gw]},$$scope:{ctx:s}}}),{c(){e=_d("div"),Ne(t.$$.fragment),vd(e,"class","threlte-host svelte-1x3ih1a")},m(i,r){we(i,e,r),Ue(t,e,null),s[49](e),n=!0},p(i,r){const a={};r[0]&2147483645|r[1]&31|r[3]&262144&&(a.$$scope={dirty:r,ctx:i}),t.$set(a)},i(i){n||(B(t.$$.fragment,i),n=!0)},o(i){$(t.$$.fragment,i),n=!1},d(i){i&&Se(e),De(t),s[49](null)}}}const pd=12,Hm=7,md=7,vw=1,Zo="#F0D9B8",Gm=10,xw=22;function gr(s,e,t,n){const i=e/2,r=t/2,a=.001;return s.map(o=>{let l=0,c=0;return Math.abs(o.x-i)<a&&(l=+n),Math.abs(o.x+i)<a&&(l=-n),Math.abs(o.y-r)<a&&(c=+n),Math.abs(o.y+r)<a&&(c=-n),{x:o.x+l,y:o.y+c}})}function yw(s){const e=!s.T,t=!s.R,n=!s.B,i=!s.L,r=(e?1:0)+(t?1:0)+(n?1:0)+(i?1:0);if(r===0)return null;if(r===4)return{type:"cross",rot:0};if(r===1){if(e)return{type:"deadEnd",rot:0};if(i)return{type:"deadEnd",rot:Math.PI/2};if(n)return{type:"deadEnd",rot:Math.PI};if(t)return{type:"deadEnd",rot:-Math.PI/2}}if(r===2){if(e&&n)return{type:"straight",rot:0};if(i&&t)return{type:"straight",rot:Math.PI/2};if(e&&t)return{type:"corner",rot:0};if(t&&n)return{type:"corner",rot:-Math.PI/2};if(n&&i)return{type:"corner",rot:Math.PI};if(i&&e)return{type:"corner",rot:Math.PI/2}}if(r===3){if(s.L)return{type:"T",rot:0};if(s.B)return{type:"T",rot:Math.PI/2};if(s.R)return{type:"T",rot:Math.PI};if(s.T)return{type:"T",rot:-Math.PI/2}}return null}function Mw(s){const e={straight:[],corner:[],T:[],cross:[],deadEnd:[]};for(let t=0;t<s.R;t++)for(let n=0;n<s.C;n++){const i=yw(s.maze[t][n]);i&&e[i.type].push({x:n*s.cw+s.cw/2-s.W/2,y:s.H/2-t*s.ch-s.ch/2,rot:i.rot})}return e}function bw(s){const e=[];for(let t=0;t<s.R;t++)for(let n=0;n<s.C;n++){const i=s.maze[t][n],r=n*s.cw+s.cw/2-s.W/2,a=s.H/2-t*s.ch-s.ch/2;!i.R&&n<s.C-1&&e.push({type:"h",x:r+s.cw/2,y:a,length:s.cw}),!i.B&&t<s.R-1&&e.push({type:"v",x:r,y:a-s.ch/2,length:s.ch})}return e}function Sw(s){const e=[];for(let t=0;t<s.R;t++)for(let n=0;n<s.C;n++){const i=s.maze[t][n],r=(i.T?0:1)+(i.R?0:1)+(i.B?0:1)+(i.L?0:1);r!==0&&e.push({x:n*s.cw+s.cw/2-s.W/2,y:s.H/2-t*s.ch-s.ch/2,isIntersection:r>=3})}return e}function ww(s,e,t){let n,i,r,a,o,l,c,h,u,f,d,m,_,p,g,y,v,S,x,M,E,D,{G:b=null}=e,{deviceAngle:T=0}=e,{boardTiltX:U=0}=e,{boardTiltY:X=0}=e,{rect:re=null}=e;const I=Math.PI/180,F=Math.sin(7*Math.PI/180);let z,te,Q;function Y(G,he,pe){const me=new ii,ee=new Set(he),q=G.length;for(let P=0;P<q;P++){const Z=G[P];if(ee.has(P)&&pe>0){const de=G[(P-1+q)%q],Ie=G[(P+1)%q],Ce=de.x-Z.x,lt=de.y-Z.y,ct=Ie.x-Z.x,xt=Ie.y-Z.y,Dt=Math.hypot(Ce,lt),ht=Math.hypot(ct,xt);if(Dt<1e-6||ht<1e-6){P===0?me.moveTo(Z.x,Z.y):me.lineTo(Z.x,Z.y);continue}const Ut=Math.min(pe,Dt/2,ht/2),hn=Z.x+Ce/Dt*Ut,nr=Z.y+lt/Dt*Ut,Jo=Z.x+ct/ht*Ut,us=Z.y+xt/ht*Ut;P===0?me.moveTo(hn,nr):me.lineTo(hn,nr),me.quadraticCurveTo(Z.x,Z.y,Jo,us)}else P===0?me.moveTo(Z.x,Z.y):me.lineTo(Z.x,Z.y)}return me.closePath(),me}function ae(G,he,pe,me){const ee=G/2,q=he/2,P=new ii;P.moveTo(ee-me,q),P.lineTo(-ee+me,q),P.quadraticCurveTo(-ee,q,-ee,q-me),P.lineTo(-ee,-q+me),P.quadraticCurveTo(-ee,-q,-ee+me,-q),P.lineTo(ee-me,-q),P.quadraticCurveTo(ee,-q,ee,-q+me),P.lineTo(ee,q-me),P.quadraticCurveTo(ee,q,ee-me,q);const Z=ee-pe,de=q-pe,Ie=Math.max(me-pe*.5,.5),Ce=new $s;return Ce.moveTo(Z-Ie,de),Ce.quadraticCurveTo(Z,de,Z,de-Ie),Ce.lineTo(Z,-de+Ie),Ce.quadraticCurveTo(Z,-de,Z-Ie,-de),Ce.lineTo(-Z+Ie,-de),Ce.quadraticCurveTo(-Z,-de,-Z,-de+Ie),Ce.lineTo(-Z,de-Ie),Ce.quadraticCurveTo(-Z,de,-Z+Ie,de),Ce.lineTo(Z-Ie,de),P.holes.push(Ce),P}function ce(G,he,pe,me){const ee=G/2,q=pe/2;let P=[{x:ee,y:q},{x:-ee,y:q},{x:-ee,y:-q},{x:ee,y:-q}];return P=gr(P,he,pe,me),Y(P,[],0)}function ye(G,he,pe,me){const ee=G/2,q=he/2,P=pe/2;let Z=[{x:ee,y:P},{x:-ee,y:P},{x:-ee,y:-ee},{x:q,y:-ee},{x:q,y:ee},{x:ee,y:ee}];return Z=gr(Z,he,pe,me),Y(Z,[2,5],G*.3)}function W(G,he,pe,me){const ee=G/2,q=he/2,P=pe/2;let Z=[{x:ee,y:P},{x:-ee,y:P},{x:-ee,y:-P},{x:ee,y:-P},{x:ee,y:-ee},{x:q,y:-ee},{x:q,y:ee},{x:ee,y:ee}];return Z=gr(Z,he,pe,me),Y(Z,[4,7],G*.3)}function oe(G,he,pe,me){const ee=G/2,q=he/2,P=pe/2;let Z=[{x:ee,y:P},{x:-ee,y:P},{x:-ee,y:ee},{x:-q,y:ee},{x:-q,y:-ee},{x:-ee,y:-ee},{x:-ee,y:-P},{x:ee,y:-P},{x:ee,y:-ee},{x:q,y:-ee},{x:q,y:ee},{x:ee,y:ee}];return Z=gr(Z,he,pe,me),Y(Z,[2,5,8,11],G*.3)}function Me(G,he,pe,me){const ee=G/2,q=pe/2;let P=[{x:ee,y:q},{x:-ee,y:q},{x:-ee,y:-ee},{x:ee,y:-ee}];return P=gr(P,he,pe,me),Y(P,[2,3],G*.5)}let Ae=null,Te=null,We=[],$e=[],Pe=null,He=null,L=-1,fe=null;const j=["+5s","+10s","+30s","finish"];let ue={},K=null;function Fe(){let G=!0,he=!1;for(const pe of j){if(!ue[pe]&&Qm(pe)){const me=eg(pe),ee=new yi(me);ee.colorSpace=Mt,ee.needsUpdate=!0,t(18,ue[pe]=ee,ue),he=!0}ue[pe]||(G=!1)}he&&t(18,ue),G?K=null:K=requestAnimationFrame(Fe)}let ve=typeof performance<"u"?performance.now():0,A=null,w=[],N=0;function le(){if(t(8,ve=performance.now()),b&&b.ball&&ve-N>=xw){const G=b.ball.x-b.W/2,he=b.H/2-b.ball.y;t(19,w=[{x:G,y:he},...w].slice(0,Gm)),N=ve}A=requestAnimationFrame(le)}let ne=null;function ie(){const G=document.createElement("canvas");G.width=G.height=64;const he=G.getContext("2d"),pe=he.createRadialGradient(32,32,0,32,32,32);pe.addColorStop(0,"rgba(212,175,55,1)"),pe.addColorStop(.5,"rgba(212,175,55,0.5)"),pe.addColorStop(1,"rgba(212,175,55,0)"),he.fillStyle=pe,he.fillRect(0,0,64,64);const me=new yi(G);return me.colorSpace=Mt,me.needsUpdate=!0,me}let Le=null;function _e(){const G=document.createElement("canvas");G.width=G.height=128;const he=G.getContext("2d"),pe=he.createRadialGradient(64,64,0,64,64,64);pe.addColorStop(0,"rgba(0,0,0,0.78)"),pe.addColorStop(.2,"rgba(0,0,0,0.65)"),pe.addColorStop(.5,"rgba(0,0,0,0.38)"),pe.addColorStop(.8,"rgba(0,0,0,0.12)"),pe.addColorStop(1,"rgba(0,0,0,0)"),he.fillStyle=pe,he.fillRect(0,0,128,128);const me=new yi(G);return me.minFilter=pt,me.magFilter=pt,me.generateMipmaps=!1,me.needsUpdate=!0,me}let be=null,Oe=null,qe=null;function se(){const G=document.createElement("canvas");G.width=8,G.height=64;const he=G.getContext("2d"),pe=he.createLinearGradient(0,0,0,64);pe.addColorStop(0,"rgba(0,0,0,0)"),pe.addColorStop(.35,"rgba(0,0,0,0.55)"),pe.addColorStop(.5,"rgba(0,0,0,0.85)"),pe.addColorStop(.65,"rgba(0,0,0,0.55)"),pe.addColorStop(1,"rgba(0,0,0,0)"),he.fillStyle=pe,he.fillRect(0,0,8,64);const me=new yi(G);return me.minFilter=pt,me.magFilter=pt,me.generateMipmaps=!1,me.needsUpdate=!0,me}function rt(){const G=document.createElement("canvas");G.width=G.height=64;const he=G.getContext("2d"),pe=he.createRadialGradient(32,32,0,32,32,32);pe.addColorStop(0,"rgba(0,0,0,0.85)"),pe.addColorStop(.55,"rgba(0,0,0,0.45)"),pe.addColorStop(1,"rgba(0,0,0,0)"),he.fillStyle=pe,he.fillRect(0,0,64,64);const me=new yi(G);return me.minFilter=pt,me.magFilter=pt,me.generateMipmaps=!1,me.needsUpdate=!0,me}Xr(()=>{t(20,ne=ie()),t(22,be=se()),t(23,Oe=se()),Oe.center.set(.5,.5),t(23,Oe.rotation=Math.PI/2,Oe),t(23,Oe.needsUpdate=!0,Oe),t(24,qe=rt()),t(21,Le=_e()),Fe(),A=requestAnimationFrame(le)}),nn(()=>{if(K&&cancelAnimationFrame(K),A&&cancelAnimationFrame(A),fe&&fe.dispose(),ne&&ne.dispose(),be==null||be.dispose(),Oe==null||Oe.dispose(),qe==null||qe.dispose(),Le==null||Le.dispose(),Pe==null||Pe.dispose(),He==null||He.dispose(),Ae)for(const G of Object.keys(Ae))Ae[G].dispose();for(const G of Object.values(ue))G.dispose()});function nt(G){te=G,t(2,te)}function Ye(G){Q=G,t(3,Q)}function ke(G){zs[G?"unshift":"push"](()=>{z=G,t(1,z),t(40,re)})}return s.$$set=G=>{"G"in G&&t(0,b=G.G),"deviceAngle"in G&&t(37,T=G.deviceAngle),"boardTiltX"in G&&t(38,U=G.boardTiltX),"boardTiltY"in G&&t(39,X=G.boardTiltY),"rect"in G&&t(40,re=G.rect)},s.$$.update=()=>{var G;if(s.$$.dirty[0]&2|s.$$.dirty[1]&512&&z&&re&&(t(1,z.style.top=re.top+"px",z),t(1,z.style.left=re.left+"px",z),t(1,z.style.width=re.width+"px",z),t(1,z.style.height=re.height+"px",z)),s.$$.dirty[1]&64&&t(46,n=T===90||T===270),s.$$.dirty[0]&1&&t(45,i=b?Math.min(b.cw,b.ch)*.15:0),s.$$.dirty[0]&1|s.$$.dirty[1]&49152&&t(44,r=b?(n?b.W:b.H)+i*2+8:660),s.$$.dirty[1]&8192&&t(14,a=r/2/Math.tan(Hm*I/2)*1.15),s.$$.dirty[0]&16384&&t(13,o=-a*Math.sin(md*I)),s.$$.dirty[0]&16384&&t(12,l=a*Math.cos(md*I)),s.$$.dirty[0]&16384,s.$$.dirty[0]&12292&&te&&Number.isFinite(o)&&Number.isFinite(l)&&te.lookAt(0,0,0),s.$$.dirty[0]&9&&Q&&b){const he=Q.shadow;he.mapSize.set(2048,2048),he.camera.left=-b.W*.7,he.camera.right=b.W*.7,he.camera.top=b.H*.7,he.camera.bottom=-b.H*.7,he.camera.near=1,he.camera.far=Math.min(b.cw,b.ch)*18,he.camera.updateProjectionMatrix(),he.bias=-1e-4,he.radius=10,he.needsUpdate=!0}if(s.$$.dirty[1]&64&&t(35,c=+T*I),s.$$.dirty[1]&256&&t(34,h=+X*pd*I),s.$$.dirty[1]&128&&t(33,u=+U*pd*I),s.$$.dirty[0]&1&&t(32,f=b?b.ball.x-b.W/2:0),s.$$.dirty[0]&1&&t(31,d=b?b.H/2-b.ball.y:0),s.$$.dirty[0]&1&&t(30,m=b?b.br:10),s.$$.dirty[0]&1&&t(11,_=b?Math.min(b.cw,b.ch)*(b.trackRatio??.65):30),s.$$.dirty[0]&1&&t(10,p=b?Math.min(b.cw,b.ch)*.8:15),s.$$.dirty[0]&1024&&t(29,g=p*.4),s.$$.dirty[0]&1024&&t(42,y=p*.12),s.$$.dirty[0]&1024&&t(43,v=p*.15),s.$$.dirty[0]&1024|s.$$.dirty[1]&4096&&t(28,S=p+v+.5),s.$$.dirty[0]&1&&t(27,x=b?Math.min(b.cw,b.ch)*.07:3.5),s.$$.dirty[0]&3185|s.$$.dirty[1]&7168&&b!=null&&b.maze&&b.lvl!==L){const he={depth:p,bevelEnabled:!0,bevelThickness:v,bevelSize:y,bevelOffset:0,bevelSegments:5,steps:1,curveSegments:24},pe={straight:ce(_,b.cw,b.ch,y),corner:ye(_,b.cw,b.ch,y),T:W(_,b.cw,b.ch,y),cross:oe(_,b.cw,b.ch,y),deadEnd:Me(_,b.cw,b.ch,y)};if(Ae)for(const xt of Object.keys(Ae))Ae[xt].dispose();t(4,Ae={straight:new bn(pe.straight,he),corner:new bn(pe.corner,he),T:new bn(pe.T,he),cross:new bn(pe.cross,he),deadEnd:new bn(pe.deadEnd,he)}),t(15,Te=Mw(b)),t(16,We=bw(b)),t(17,$e=Sw(b)),Pe&&Pe.dispose();const me=4.5,ee=2,q=Math.min(b.cw,b.ch)*.15,P=b.W+(me+q)*2,Z=b.H+(me+q)*2,de=Math.min(b.cw,b.ch)*.22;t(5,Pe=new bn(ae(P,Z,me,de),{depth:ee,bevelEnabled:!1})),He&&He.dispose();const Ie=me*2.5,Ce=b.W+(Ie+q)*2,lt=b.H+(Ie+q)*2,ct=Math.min(b.cw,b.ch)*.26;t(6,He=new bn(ae(Ce,lt,Ie,ct),{depth:p,bevelEnabled:!0,bevelThickness:v,bevelSize:y,bevelOffset:0,bevelSegments:5,steps:1,curveSegments:24})),t(41,L=b.lvl)}s.$$.dirty[0]&1&&t(26,M=((G=b==null?void 0:b.theme)==null?void 0:G.neon)??"#00c8ff"),s.$$.dirty[0]&257&&t(9,E=(b==null?void 0:b.phase)==="falling"?Math.max(0,1-(ve-b.fallT)/480):1),s.$$.dirty[0]&512&&t(25,D=E>.03),s.$$.dirty[0]&129&&b!=null&&b.staticTexture&&(fe==null?void 0:fe.image)!==b.staticTexture&&(fe&&fe.dispose(),t(7,fe=new yi(b.staticTexture)),t(7,fe.colorSpace=Mt,fe),t(7,fe.needsUpdate=!0,fe))},[b,z,te,Q,Ae,Pe,He,fe,ve,E,p,_,l,o,a,Te,We,$e,ue,w,ne,Le,be,Oe,qe,D,M,x,S,g,m,d,f,u,h,c,F,T,U,X,re,L,y,v,r,i,n,nt,Ye,ke]}class Cw extends zn{constructor(e){super(),kn(this,e,ww,_w,Vn,{G:0,deviceAngle:37,boardTiltX:38,boardTiltY:39,rect:40},null,[-1,-1,-1,-1])}}export{Cw as default};
