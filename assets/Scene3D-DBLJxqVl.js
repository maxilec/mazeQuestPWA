var Gm=Object.defineProperty;var Wm=(r,e,t)=>e in r?Gm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var vt=(r,e,t)=>Wm(r,typeof e!="symbol"?e+"":e,t);import{l as fd,C as nn,P as Un,H as Tn,s as Nn,K as Xm,S as Bn,y as zn,G as kn,k as ai,M as Q,L as X,O as oi,u as li,w as ci,h as Ti,m as Ce,A as Re,j as Pe,n as Se,x as dt,g as pt,z as we,a as qm,o as dd,d as pd,D as Wr,f as Bs,v as Bc,I as Ze,p as bt,i as zs,c as Ei,r as lo,F as $m,e as Wl,b as Xl,J as Ym,t as Zm,q as Bt,N as jn,E as Qn,B as Jm}from"./index-2TglqpKz.js";function md(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],o=e[s];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);r[s]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function gd(r){return typeof r=="object"&&r!==null?r:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xr="160",Km={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,ql=1,vd=2,Qm=3,eg=0,zc=1,qr=2,Rn=3,On=0,qt=1,Pn=2,tg=2,Ln=0,es=1,co=2,$l=3,Yl=4,xd=5,yi=100,yd=101,Md=102,Zl=103,Jl=104,bd=200,Sd=201,wd=202,Td=203,ho=204,uo=205,Ed=206,Ad=207,Cd=208,Rd=209,Pd=210,Ld=211,Id=212,Dd=213,Ud=214,Nd=0,Od=1,Fd=2,xr=3,Bd=4,zd=5,kd=6,Vd=7,$r=0,Hd=1,Gd=2,ni=0,kc=1,Vc=2,Hc=3,vo=4,Wd=5,Gc=6,Kl="attached",Xd="detached",xo=300,si=301,Ai=302,yr=303,Mr=304,qs=306,br=1e3,Wt=1001,Sr=1002,Rt=1003,fo=1004,ng=1004,pr=1005,ig=1005,Pt=1006,Wc=1007,sg=1007,Ci=1008,rg=1008,ii=1009,qd=1010,$d=1011,yo=1012,Xc=1013,ei=1014,Sn=1015,In=1016,qc=1017,$c=1018,Mi=1020,Yd=1021,on=1023,Zd=1024,Jd=1025,bi=1026,is=1027,Kd=1028,Yc=1029,jd=1030,Zc=1031,Jc=1033,eo=33776,to=33777,no=33778,io=33779,jl=35840,Ql=35841,ec=35842,tc=35843,Kc=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,so=36492,vc=36494,xc=36495,Qd=36283,yc=36284,Mc=36285,bc=36286,ep=2200,tp=2201,np=2202,wr=2300,Tr=2301,ro=2302,Zi=2400,Ji=2401,Er=2402,Mo=2500,jc=2501,ag=0,og=1,lg=2,Qc=3e3,Si=3001,ip=3200,sp=3201,Pi=0,rp=1,pn="",Tt="srgb",Fn="srgb-linear",bo="display-p3",Yr="display-p3-linear",Ar="linear",ft="srgb",Cr="rec709",Rr="p3",cg=0,qi=7680,hg=7681,ug=7682,fg=7683,dg=34055,pg=34056,mg=5386,gg=512,_g=513,vg=514,xg=515,yg=516,Mg=517,bg=518,Sc=519,ap=512,op=513,lp=514,eh=515,cp=516,hp=517,up=518,fp=519,Pr=35044,wc=35048,Sg=35040,wg=35045,Tg=35049,Eg=35041,Ag=35046,Cg=35050,Rg=35042,Pg="100",Tc="300 es",po=1035,wn=2e3,ks=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const ts=Math.PI/180,Vs=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function th(r,e){return(r%e+e)%e}function Lg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ig(r,e,t){return r!==e?(t-r)/(e-r):0}function mr(r,e,t){return(1-t)*r+t*e}function Dg(r,e,t,n){return mr(r,e,1-Math.exp(-t*n))}function Ug(r,e=1){return e-Math.abs(th(r,e*2)-e)}function Ng(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Og(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Bg(r,e){return r+Math.random()*(e-r)}function zg(r){return r*(.5-Math.random())}function kg(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(r){return r*ts}function Hg(r){return r*Vs}function Ec(r){return(r&r-1)===0&&r!==0}function Gg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xg={DEG2RAD:ts,RAD2DEG:Vs,generateUUID:mn,clamp:Et,euclideanModulo:th,mapLinear:Lg,inverseLerp:Ig,lerp:mr,damp:Dg,pingpong:Ug,smoothstep:Ng,smootherstep:Og,randInt:Fg,randFloat:Bg,randFloatSpread:zg,seededRandom:kg,degToRad:Vg,radToDeg:Hg,isPowerOfTwo:Ec,ceilPowerOfTwo:Gg,floorPowerOfTwo:mo,setQuaternionFromProperEuler:Wg,normalize:je,denormalize:ln};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=i[0],g=i[3],m=i[6],x=i[1],_=i[4],y=i[7],S=i[2],M=i[5],b=i[8];return s[0]=a*v+o*x+l*S,s[3]=a*g+o*_+l*M,s[6]=a*m+o*y+l*b,s[1]=c*v+h*x+u*S,s[4]=c*g+h*_+u*M,s[7]=c*m+h*y+u*b,s[2]=f*v+d*x+p*S,s[5]=f*g+d*_+p*M,s[8]=f*m+d*y+p*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new et;function dp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const qg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Is(r,e){return new qg[r](e)}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pp(){const r=Lr("canvas");return r.style.display="block",r}const Hh={};function gr(r){r in Hh||(Hh[r]=!0,console.warn(r))}const Gh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Fn]:{transfer:Ar,primaries:Cr,toReference:r=>r,fromReference:r=>r},[Tt]:{transfer:ft,primaries:Cr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Yr]:{transfer:Ar,primaries:Rr,toReference:r=>r.applyMatrix3(Wh),fromReference:r=>r.applyMatrix3(Gh)},[bo]:{transfer:ft,primaries:Rr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wh),fromReference:r=>r.applyMatrix3(Gh).convertLinearToSRGB()}},$g=new Set([Fn,Yr]),lt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$g.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ra[e].toReference,i=ra[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ra[r].primaries},getTransfer:function(r){return r===pn?Ar:ra[r].transfer}};function Fs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function nl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hs;class nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Lr("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fs(t[n]/255)*255):t[n]=Fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yg=0;class Ki{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(il(i[a].image)):s.push(il(i[a]))}else s=il(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function il(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zg=0;class Lt extends hi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Wt,i=Wt,s=Pt,a=Ci,o=on,l=ii,c=Lt.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=mn(),this.name="",this.source=new Ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Si?Tt:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Si:Qc}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Si?Tt:pn}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=xo;Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(d+1)/2,S=(m+1)/2,M=(h+f)/4,b=(u+v)/4,A=(p+g)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=M/n,s=b/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=A/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=A/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mp extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Si?Tt:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ki(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends mp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class So extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jg extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new So(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ih extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kg extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ih(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class jg extends Qt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],p=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==p){let g=1-o;const m=l*f+c*d+h*p+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),M=Math.atan2(S,m*x);g=Math.sin(g*M)/S,o=Math.sin(o*M)/S}const y=o*x;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+v*y,g===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new P,Xh=new en;class tn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),oa.subVectors(this.max,er),us.subVectors(e.a,er),fs.subVectors(e.b,er),ds.subVectors(e.c,er),ui.subVectors(fs,us),fi.subVectors(ds,fs),Oi.subVectors(us,ds);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Oi.z,Oi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Oi.z,0,-Oi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Oi.y,Oi.x,0];return!rl(t,us,fs,ds,oa)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,us,fs,ds,oa))?!1:(la.crossVectors(ui,fi),t=[la.x,la.y,la.z],rl(t,us,fs,ds,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,aa=new tn,us=new P,fs=new P,ds=new P,ui=new P,fi=new P,Oi=new P,er=new P,oa=new P,la=new P,Fi=new P;function rl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Fi.fromArray(r,s);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qg=new tn,tr=new P,al=new P;class $t{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(al)),this.expandByPoint(tr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new P,ol=new P,ca=new P,di=new P,ll=new P,ha=new P,cl=new P;class $s{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ol);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=di.dot(this.direction),l=-di.dot(ca),c=di.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=s*h,u>=0)if(f>=-p)if(f<=p){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ol).addScaledVector(ca,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){ll.subVectors(t,e),ha.subVectors(n,e),cl.crossVectors(ll,ha);let a=this.direction.dot(cl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(di,ha));if(l<0)return null;const c=o*this.direction.dot(ll.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(cl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,p,v,g){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,p,v,g)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),pi.crossVectors(n,un),pi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),pi.crossVectors(n,un)),pi.normalize(),ua.crossVectors(un,pi),i[0]=pi.x,i[4]=ua.x,i[8]=un.x,i[1]=pi.y,i[5]=ua.y,i[9]=un.y,i[2]=pi.z,i[6]=ua.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],y=n[11],S=n[15],M=i[0],b=i[4],A=i[8],w=i[12],E=i[1],U=i[5],q=i[9],oe=i[13],I=i[2],F=i[6],H=i[10],te=i[14],ee=i[3],K=i[7],se=i[11],re=i[15];return s[0]=a*M+o*E+l*I+c*ee,s[4]=a*b+o*U+l*F+c*K,s[8]=a*A+o*q+l*H+c*se,s[12]=a*w+o*oe+l*te+c*re,s[1]=h*M+u*E+f*I+d*ee,s[5]=h*b+u*U+f*F+d*K,s[9]=h*A+u*q+f*H+d*se,s[13]=h*w+u*oe+f*te+d*re,s[2]=p*M+v*E+g*I+m*ee,s[6]=p*b+v*U+g*F+m*K,s[10]=p*A+v*q+g*H+m*se,s[14]=p*w+v*oe+g*te+m*re,s[3]=x*M+_*E+y*I+S*ee,s[7]=x*b+_*U+y*F+S*K,s[11]=x*A+_*q+y*H+S*se,s[15]=x*w+_*oe+y*te+S*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+v*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+g*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],x=u*g*c-v*f*c+v*l*d-o*g*d-u*l*m+o*f*m,_=p*f*c-h*g*c-p*l*d+a*g*d+h*l*m-a*f*m,y=h*v*c-p*u*c+p*o*d-a*v*d-h*o*m+a*u*m,S=p*u*l-h*v*l-p*o*f+a*v*f+h*o*g-a*u*g,M=t*x+n*_+i*y+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=x*b,e[1]=(v*f*s-u*g*s-v*i*d+n*g*d+u*i*m-n*f*m)*b,e[2]=(o*g*s-v*l*s+v*i*c-n*g*c-o*i*m+n*l*m)*b,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*b,e[4]=_*b,e[5]=(h*g*s-p*f*s+p*i*d-t*g*d-h*i*m+t*f*m)*b,e[6]=(p*l*s-a*g*s-p*i*c+t*g*c+a*i*m-t*l*m)*b,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*d+t*l*d)*b,e[8]=y*b,e[9]=(p*u*s-h*v*s-p*n*d+t*v*d+h*n*m-t*u*m)*b,e[10]=(a*v*s-p*o*s+p*n*c-t*v*c-a*n*m+t*o*m)*b,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*b,e[12]=S*b,e[13]=(h*v*i-p*u*i+p*n*f-t*v*f-h*n*g+t*u*g)*b,e[14]=(p*o*i-a*v*i-p*n*l+t*v*l+a*n*g-t*o*g)*b,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,p=s*u,v=a*h,g=a*u,m=o*u,x=l*c,_=l*h,y=l*u,S=n.x,M=n.y,b=n.z;return i[0]=(1-(v+m))*S,i[1]=(d+y)*S,i[2]=(p-_)*S,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+m))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(p+_)*b,i[9]=(g-x)*b,i[10]=(1-(f+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const a=ps.set(i[4],i[5],i[6]).length(),o=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/s,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=wn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(o===wn)d=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===ks)d=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=wn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),f=(t+e)*c,d=(n+i)*h;let p,v;if(o===wn)p=(a+s)*u,v=-2*u;else if(o===ks)p=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ps=new P,xn=new Fe,e_=new P(0,0,0),t_=new P(1,1,1),pi=new P,ua=new P,un=new P,qh=new Fe,$h=new en;class Zr{constructor(e=0,t=0,n=0,i=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const Yh=new P,ms=new en,qn=new Fe,fa=new P,nr=new P,i_=new P,s_=new en,Zh=new P(1,0,0),Jh=new P(0,1,0),Kh=new P(0,0,1),r_={type:"added"},a_={type:"removed"};class ot extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new P,t=new Zr,n=new en,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new et}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(nr,fa,this.up):qn.lookAt(fa,nr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(qn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new P(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new P,$n=new P,hl=new P,Yn=new P,gs=new P,_s=new P,jh=new P,ul=new P,fl=new P,dl=new P;let da=!1;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),$n.subVectors(n,t),hl.subVectors(e,t);const a=yn.dot(yn),o=yn.dot($n),l=yn.dot(hl),c=$n.dot($n),h=$n.dot(hl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,s,a,o,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),$n.subVectors(e,t),yn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),yn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),an.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;gs.subVectors(i,n),_s.subVectors(s,n),ul.subVectors(e,n);const l=gs.dot(ul),c=_s.dot(ul);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,i);const h=gs.dot(fl),u=_s.dot(fl);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gs,a);dl.subVectors(e,s);const d=gs.dot(dl),p=_s.dot(dl);if(p>=0&&d<=p)return t.copy(s);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_s,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return jh.subVectors(s,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(jh,o);const m=1/(g+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function pl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=th(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pl(a,s,e+1/3),this.g=pl(a,s,e),this.b=pl(a,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return lt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Et(Ht.r*255,0,255))*65536+Math.round(Et(Ht.g*255,0,255))*256+Math.round(Et(Ht.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Tt){lt.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(pa);const n=mr(mi.h,pa.h,t),i=mr(mi.s,pa.s,t),s=mr(mi.l,pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new xe;xe.NAMES=gp;let o_=0;class Yt extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=es,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jn=l_();function l_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function rn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Et(r,-65504,65504),Jn.floatView[0]=r;const e=Jn.uint32View[0],t=e>>23&511;return Jn.baseTable[t]+((e&8388607)>>Jn.shiftTable[t])}function dr(r){const e=r>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[e]+(r&1023)]+Jn.exponentTable[e],Jn.floatView[0]}const c_={toHalfFloat:rn,fromHalfFloat:dr},It=new P,ma=new Z;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pr&&(e.usage=this.usage),e}}class h_ extends ht{constructor(e,t,n){super(new Int8Array(e),t,n)}}class u_ extends ht{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class f_ extends ht{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class d_ extends ht{constructor(e,t,n){super(new Int16Array(e),t,n)}}class sh extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class p_ extends ht{constructor(e,t,n){super(new Int32Array(e),t,n)}}class rh extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class m_ extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=dr(this.array[e*this.itemSize]);return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=rn(t),this}getY(e){let t=dr(this.array[e*this.itemSize+1]);return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=rn(t),this}getZ(e){let t=dr(this.array[e*this.itemSize+2]);return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=rn(t),this}getW(e){let t=dr(this.array[e*this.itemSize+3]);return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this.array[e+3]=rn(s),this}}class Te extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}class g_ extends ht{constructor(e,t,n){super(new Float64Array(e),t,n)}}let __=0;const _n=new Fe,ml=new ot,vs=new P,fn=new tn,ir=new tn,Ft=new P;class Je extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dp(e)?rh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Te(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(fn.min,ir.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,ir.max),fn.expandByPoint(Ft)):(fn.expandByPoint(ir.min),fn.expandByPoint(ir.max))}fn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Ft.add(vs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new P,h[E]=new P;const u=new P,f=new P,d=new P,p=new Z,v=new Z,g=new Z,m=new P,x=new P;function _(E,U,q){u.fromArray(i,E*3),f.fromArray(i,U*3),d.fromArray(i,q*3),p.fromArray(a,E*2),v.fromArray(a,U*2),g.fromArray(a,q*2),f.sub(u),d.sub(u),v.sub(p),g.sub(p);const oe=1/(v.x*g.y-g.x*v.y);isFinite(oe)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(oe),x.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(oe),c[E].add(m),c[U].add(m),c[q].add(m),h[E].add(x),h[U].add(x),h[q].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,U=y.length;E<U;++E){const q=y[E],oe=q.start,I=q.count;for(let F=oe,H=oe+I;F<H;F+=3)_(n[F+0],n[F+1],n[F+2])}const S=new P,M=new P,b=new P,A=new P;function w(E){b.fromArray(s,E*3),A.copy(b);const U=c[E];S.copy(U),S.sub(b.multiplyScalar(b.dot(U))).normalize(),M.crossVectors(A,U);const oe=M.dot(h[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=oe}for(let E=0,U=y.length;E<U;++E){const q=y[E],oe=q.start,I=q.count;for(let F=oe,H=oe+I;F<H;F+=3)w(n[F+0]),w(n[F+1]),w(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ht(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Fe,Bi=new $s,ga=new $t,eu=new P,xs=new P,ys=new P,Ms=new P,gl=new P,_a=new P,va=new Z,xa=new Z,ya=new Z,tu=new P,nu=new P,iu=new P,Ma=new P,ba=new P;class rt extends ot{constructor(e=new Je,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(gl.fromBufferAttribute(u,e),a?_a.addScaledVector(gl,h):_a.addScaledVector(gl.sub(t),h))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(ga.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ga,eu)===null||Bi.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=_;y<S;y+=3){const M=o.getX(y),b=o.getX(y+1),A=o.getX(y+2);i=Sa(this,m,e,n,c,h,u,M,b,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const x=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);i=Sa(this,a,e,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,S=_;y<S;y+=3){const M=y,b=y+1,A=y+2;i=Sa(this,m,e,n,c,h,u,M,b,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const x=g,_=g+1,y=g+2;i=Sa(this,a,e,n,c,h,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function v_(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===On,o),l===null)return null;ba.copy(o),ba.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:r}}function Sa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,xs),r.getVertexPosition(l,ys),r.getVertexPosition(c,Ms);const h=v_(r,e,t,n,xs,ys,Ms,Ma);if(h){i&&(va.fromBufferAttribute(i,o),xa.fromBufferAttribute(i,l),ya.fromBufferAttribute(i,c),h.uv=an.getInterpolation(Ma,xs,ys,Ms,va,xa,ya,new Z)),s&&(va.fromBufferAttribute(s,o),xa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),h.uv1=an.getInterpolation(Ma,xs,ys,Ms,va,xa,ya,new Z),h.uv2=h.uv1),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,l),iu.fromBufferAttribute(a,c),h.normal=an.getInterpolation(Ma,xs,ys,Ms,tu,nu,iu,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};an.getNormal(xs,ys,Ms,u.normal),h.face=u}return h}class Li extends Je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function p(v,g,m,x,_,y,S,M,b,A,w){const E=y/b,U=S/A,q=y/2,oe=S/2,I=M/2,F=b+1,H=A+1;let te=0,ee=0;const K=new P;for(let se=0;se<H;se++){const re=se*U-oe;for(let ge=0;ge<F;ge++){const W=ge*E-q;K[v]=W*x,K[g]=re*_,K[m]=I,c.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[m]=M>0?1:-1,h.push(K.x,K.y,K.z),u.push(ge/b),u.push(1-se/A),te+=1}}for(let se=0;se<A;se++)for(let re=0;re<b;re++){const ge=f+re+F*se,W=f+re+F*(se+1),ie=f+(re+1)+F*(se+1),_e=f+(re+1)+F*se;l.push(ge,W,_e),l.push(W,ie,_e),ee+=6}o.addGroup(d,ee,w),d+=ee,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function x_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _p(r){return r.getRenderTarget()===null?r.outputColorSpace:lt.workingColorSpace}const Gs={clone:Hs,merge:jt};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=x_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class To extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends To{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Ss=1;class vp extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(bs,Ss,e,t);i.layers=this.layers,this.add(i);const s=new zt(bs,Ss,e,t);s.layers=this.layers,this.add(s);const a=new zt(bs,Ss,e,t);a.layers=this.layers,this.add(a);const o=new zt(bs,Ss,e,t);o.layers=this.layers,this.add(o);const l=new zt(bs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new zt(bs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Jr extends Lt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Si?Tt:pn),this.texture=new Jr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Ln});s.uniforms.tEquirect.value=t;const a=new rt(i,s),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Pt),new vp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _l=new P,b_=new P,S_=new et;class vi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S_.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new $t,wa=new P;class Kr{constructor(e=new vi,t=new vi,n=new vi,i=new vi,s=new vi,a=new vi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],v=i[10],g=i[11],m=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,g-d,y-m).normalize(),n[1].setComponents(l+s,f+c,g+d,y+m).normalize(),n[2].setComponents(l+a,f+h,g+p,y+x).normalize(),n[3].setComponents(l-a,f-h,g-p,y-x).normalize(),n[4].setComponents(l-o,f-u,g-v,y-_).normalize(),t===wn)n[5].setComponents(l+o,f+u,g+v,y+_).normalize();else if(t===ks)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wa.x=i.normal.x>0?e.max.x:e.min.x,wa.y=i.normal.y>0?e.max.y:e.min.y,wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function w_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=u.byteLength,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,u){const f=h.array,d=h._updateRange,p=h.updateRanges;if(r.bindBuffer(u,c),d.count===-1&&p.length===0&&r.bufferSubData(u,0,f),p.length!==0){for(let v=0,g=p.length;v<g;v++){const m=p[v];t?r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class jr extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const x=m*f-a;for(let _=0;_<c;_++){const y=_*u-s;p.push(y,-x,0),v.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const _=x+c*m,y=x+c*(m+1),S=x+1+c*(m+1),M=x+1+c*m;d.push(_,y,M),d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
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
#endif`,A_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,z_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y_=`#define PI 3.141592653589793
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`
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
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,T0=`
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Dv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,zv=`uniform vec3 diffuse;
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
}`,kv=`#define LAMBERT
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
}`,Vv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Yv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,Jv=`#define TOON
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
}`,Kv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:T_,alphahash_pars_fragment:E_,alphamap_fragment:A_,alphamap_pars_fragment:C_,alphatest_fragment:R_,alphatest_pars_fragment:P_,aomap_fragment:L_,aomap_pars_fragment:I_,batching_pars_vertex:D_,batching_vertex:U_,begin_vertex:N_,beginnormal_vertex:O_,bsdfs:F_,iridescence_fragment:B_,bumpmap_pars_fragment:z_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:G_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:$_,common:Y_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:J_,displacementmap_pars_vertex:K_,displacementmap_vertex:j_,emissivemap_fragment:Q_,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:y0,lights_phong_fragment:M0,lights_phong_pars_fragment:b0,lights_physical_fragment:S0,lights_physical_pars_fragment:w0,lights_fragment_begin:T0,lights_fragment_maps:E0,lights_fragment_end:A0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:k0,morphtarget_vertex:V0,normal_fragment_begin:H0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:ev,project_vertex:tv,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:av,shadowmap_pars_vertex:ov,shadowmap_vertex:lv,shadowmask_pars_fragment:cv,skinbase_vertex:hv,skinning_pars_vertex:uv,skinning_vertex:fv,skinnormal_vertex:dv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:_v,transmission_fragment:vv,transmission_pars_fragment:xv,uv_pars_fragment:yv,uv_pars_vertex:Mv,uv_vertex:bv,worldpos_vertex:Sv,background_vert:wv,background_frag:Tv,backgroundCube_vert:Ev,backgroundCube_frag:Av,cube_vert:Cv,cube_frag:Rv,depth_vert:Pv,depth_frag:Lv,distanceRGBA_vert:Iv,distanceRGBA_frag:Dv,equirect_vert:Uv,equirect_frag:Nv,linedashed_vert:Ov,linedashed_frag:Fv,meshbasic_vert:Bv,meshbasic_frag:zv,meshlambert_vert:kv,meshlambert_frag:Vv,meshmatcap_vert:Hv,meshmatcap_frag:Gv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:qv,meshphong_frag:$v,meshphysical_vert:Yv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Kv,points_vert:jv,points_frag:Qv,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},fe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bn={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};bn.physical={uniforms:jt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ta={r:0,b:0,g:0};function sx(r,e,t,n,i,s,a){const o=new xe(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function p(g,m){let x=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qs)?(h===void 0&&(h=new rt(new Li(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Hs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=lt.getTransfer(_.colorSpace)!==ft,(u!==_||f!==_.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new rt(new jr(2,2),new Xt({name:"BackgroundMaterial",uniforms:Hs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,m){g.getRGB(Ta,_p(r)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:p}}function rx(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function u(I,F,H,te,ee){let K=!1;if(a){const se=v(te,H,F);c!==se&&(c=se,d(c.object)),K=m(I,te,H,ee),K&&x(I,te,H,ee)}else{const se=F.wireframe===!0;(c.geometry!==te.id||c.program!==H.id||c.wireframe!==se)&&(c.geometry=te.id,c.program=H.id,c.wireframe=se,K=!0)}ee!==null&&t.update(ee,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,A(I,F,H,te),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,F,H){const te=H.wireframe===!0;let ee=o[I.id];ee===void 0&&(ee={},o[I.id]=ee);let K=ee[F.id];K===void 0&&(K={},ee[F.id]=K);let se=K[te];return se===void 0&&(se=g(f()),K[te]=se),se}function g(I){const F=[],H=[],te=[];for(let ee=0;ee<i;ee++)F[ee]=0,H[ee]=0,te[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:te,object:I,attributes:{},index:null}}function m(I,F,H,te){const ee=c.attributes,K=F.attributes;let se=0;const re=H.getAttributes();for(const ge in re)if(re[ge].location>=0){const ie=ee[ge];let _e=K[ge];if(_e===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),ie===void 0||ie.attribute!==_e||_e&&ie.data!==_e.data)return!0;se++}return c.attributesNum!==se||c.index!==te}function x(I,F,H,te){const ee={},K=F.attributes;let se=0;const re=H.getAttributes();for(const ge in re)if(re[ge].location>=0){let ie=K[ge];ie===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const _e={};_e.attribute=ie,ie&&ie.data&&(_e.data=ie.data),ee[ge]=_e,se++}c.attributes=ee,c.attributesNum=se,c.index=te}function _(){const I=c.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function y(I){S(I,0)}function S(I,F){const H=c.newAttributes,te=c.enabledAttributes,ee=c.attributeDivisors;H[I]=1,te[I]===0&&(r.enableVertexAttribArray(I),te[I]=1),ee[I]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),ee[I]=F)}function M(){const I=c.newAttributes,F=c.enabledAttributes;for(let H=0,te=F.length;H<te;H++)F[H]!==I[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function b(I,F,H,te,ee,K,se){se===!0?r.vertexAttribIPointer(I,F,H,ee,K):r.vertexAttribPointer(I,F,H,te,ee,K)}function A(I,F,H,te){if(n.isWebGL2===!1&&(I.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ee=te.attributes,K=H.getAttributes(),se=F.defaultAttributeValues;for(const re in K){const ge=K[re];if(ge.location>=0){let W=ee[re];if(W===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const ie=W.normalized,_e=W.itemSize,Ie=t.get(W);if(Ie===void 0)continue;const Me=Ie.buffer,Le=Ie.type,Xe=Ie.bytesPerElement,Ee=n.isWebGL2===!0&&(Le===r.INT||Le===r.UNSIGNED_INT||W.gpuType===Xc);if(W.isInterleavedBufferAttribute){const ke=W.data,L=ke.stride,he=W.offset;if(ke.isInstancedInterleavedBuffer){for(let J=0;J<ge.locationSize;J++)S(ge.location+J,ke.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let J=0;J<ge.locationSize;J++)y(ge.location+J);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let J=0;J<ge.locationSize;J++)b(ge.location+J,_e/ge.locationSize,Le,ie,L*Xe,(he+_e/ge.locationSize*J)*Xe,Ee)}else{if(W.isInstancedBufferAttribute){for(let ke=0;ke<ge.locationSize;ke++)S(ge.location+ke,W.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ke=0;ke<ge.locationSize;ke++)y(ge.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let ke=0;ke<ge.locationSize;ke++)b(ge.location+ke,_e/ge.locationSize,Le,ie,_e*Xe,_e/ge.locationSize*ke*Xe,Ee)}}else if(se!==void 0){const ie=se[re];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(ge.location,ie);break;case 3:r.vertexAttrib3fv(ge.location,ie);break;case 4:r.vertexAttrib4fv(ge.location,ie);break;default:r.vertexAttrib1fv(ge.location,ie)}}}}M()}function w(){q();for(const I in o){const F=o[I];for(const H in F){const te=F[H];for(const ee in te)p(te[ee].object),delete te[ee];delete F[H]}delete o[I]}}function E(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const H in F){const te=F[H];for(const ee in te)p(te[ee].object),delete te[ee];delete F[H]}delete o[I.id]}function U(I){for(const F in o){const H=o[F];if(H[I.id]===void 0)continue;const te=H[I.id];for(const ee in te)p(te[ee].object),delete te[ee];delete H[I.id]}}function q(){oe(),h=!0,c!==l&&(c=l,d(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:oe,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:y,disableUnusedAttributes:M}}function ax(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,h,u,f),t.update(u,s,f)}function c(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ox(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=a||e.has("OES_texture_float"),S=_&&y,M=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:M}}function lx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new vi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{const x=s?0:n,_=x*4;let y=m.clippingState||null;l.value=y,y=h(p,f,_,d);for(let S=0;S!==_;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=d;_!==v;++_,y+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function cx(r){let e=new WeakMap;function t(a,o){return o===yr?a.mapping=si:o===Mr&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yr||o===Mr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xp(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ys extends To{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ds=4,su=[.125,.215,.35,.446,.526,.582],Yi=20,vl=new Ys,ru=new xe;let xl=null,yl=0,Ml=0;const $i=(1+Math.sqrt(5))/2,ws=1/$i,au=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,$i,ws),new P(0,$i,-ws),new P(ws,0,$i),new P(-ws,0,$i),new P($i,ws,0),new P(-$i,ws,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,Ml),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:In,format:on,colorSpace:Fn,depthBuffer:!1},i=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(s)),this._blurMaterial=ux(s,e,t)}return i}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ru),h.toneMapping=ni,h.autoClear=!1;const d=new Vn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new rt(new Li,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(ru),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;Ea(i,x*_,m>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=au[(i-1)%au.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):Yi;g>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const m=[];let x=0;for(let b=0;b<Yi;++b){const A=b/v,w=Math.exp(-A*A/2);m.push(w),b===0?x+=w:b<g&&(x+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=p,f.mipInt.value=_-n;const y=this._sizeLods[i],S=3*y*(i>_-Ds?i-_+Ds:0),M=4*(this._cubeSize-y);Ea(t,S,M,3*y,2*y),l.setRenderTarget(t),l.render(u,vl)}}function hx(r){const e=[],t=[],n=[];let i=r;const s=r-Ds+1+su.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ds?l=su[a-r+Ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*d),_=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let M=0;M<d;M++){const b=M%3*2/3-1,A=M>2?0:-1,w=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];x.set(w,v*p*M),_.set(f,g*p*M);const E=[M,M,M,M,M,M];y.set(E,m*p*M)}const S=new Je;S.setAttribute("position",new ht(x,v)),S.setAttribute("uv",new ht(_,g)),S.setAttribute("faceIndex",new ht(y,m)),e.push(S),i>Ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(r,e,t){const n=new Qt(r,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ux(r,e,t){const n=new Float32Array(Yi),i=new P(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function lu(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function cu(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function fx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yr||l===Mr,h=l===si||l===Ai;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new go(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new go(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function px(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const v=f.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const v=d[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,p=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,y=x.length;_<y;_+=3){const S=x[_+0],M=x[_+1],b=x[_+2];f.push(S,M,M,b,b,S)}}else if(p!==void 0){const x=p.array;v=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const S=_+0,M=_+1,b=_+2;f.push(S,M,M,b,b,S)}}else return;const g=new(dp(f)?rh:sh)(f,1);g.version=v;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mx(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function u(d,p,v){if(v===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,d*l,v),t.update(p,s,v)}function f(d,p,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/l,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,o,d,0,v);let m=0;for(let x=0;x<v;x++)m+=p[x];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function gx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _x(r,e){return r[0]-e[0]}function vx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function xx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0;let v=s.get(h);if(v===void 0||v.count!==p){let I=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let w=h.attributes.position.count*A,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*E*4*p),q=new So(U,w,E,p);q.type=Sn,q.needsUpdate=!0;const oe=A*4;for(let F=0;F<p;F++){const H=S[F],te=M[F],ee=b[F],K=w*E*4*F;for(let se=0;se<H.count;se++){const re=se*oe;x===!0&&(a.fromBufferAttribute(H,se),U[K+re+0]=a.x,U[K+re+1]=a.y,U[K+re+2]=a.z,U[K+re+3]=0),_===!0&&(a.fromBufferAttribute(te,se),U[K+re+4]=a.x,U[K+re+5]=a.y,U[K+re+6]=a.z,U[K+re+7]=0),y===!0&&(a.fromBufferAttribute(ee,se),U[K+re+8]=a.x,U[K+re+9]=a.y,U[K+re+10]=a.z,U[K+re+11]=ee.itemSize===4?a.w:1)}}v={count:p,texture:q,size:new Z(w,E)},s.set(h,v),h.addEventListener("dispose",I)}let g=0;for(let x=0;x<f.length;x++)g+=f[x];const m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const d=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let _=0;_<d;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<d;_++){const y=p[_];y[0]=_,y[1]=f[_]}p.sort(vx);for(let _=0;_<8;_++)_<d&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(_x);const v=h.morphAttributes.position,g=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const y=o[_],S=y[0],M=y[1];S!==Number.MAX_SAFE_INTEGER&&M?(v&&h.getAttribute("morphTarget"+_)!==v[S]&&h.setAttribute("morphTarget"+_,v[S]),g&&h.getAttribute("morphNormal"+_)!==g[S]&&h.setAttribute("morphNormal"+_,g[S]),i[_]=M,m+=M):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function yx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class oh extends Lt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:bi,h!==bi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=ei),n===void 0&&h===is&&(n=Mi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mp=new Lt,bp=new oh(1,1);bp.compareFunction=eh;const Sp=new So,wp=new ih,Tp=new Jr,hu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function Zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hu[i];if(s===void 0&&(s=new Float32Array(i),hu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eo(r,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Mx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;pu.set(n),r.uniformMatrix2fv(this.addr,!1,pu),Ut(t,n)}}function Ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;du.set(n),r.uniformMatrix3fv(this.addr,!1,du),Ut(t,n)}}function Ax(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;fu.set(n),r.uniformMatrix4fv(this.addr,!1,fu),Ut(t,n)}}function Cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function Lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function Ox(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?bp:Mp;t.setTexture2D(e||s,i)}function Fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function Bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tp,i)}function zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sp,i)}function kx(r){switch(r){case 5126:return Mx;case 35664:return bx;case 35665:return Sx;case 35666:return wx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Ix;case 36294:return Dx;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function Vx(r,e){r.uniform1fv(this.addr,e)}function Hx(r,e){const t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Gx(r,e){const t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function Wx(r,e){const t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function Xx(r,e){const t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qx(r,e){const t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $x(r,e){const t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Yx(r,e){r.uniform1iv(this.addr,e)}function Zx(r,e){r.uniform2iv(this.addr,e)}function Jx(r,e){r.uniform3iv(this.addr,e)}function Kx(r,e){r.uniform4iv(this.addr,e)}function jx(r,e){r.uniform1uiv(this.addr,e)}function Qx(r,e){r.uniform2uiv(this.addr,e)}function ey(r,e){r.uniform3uiv(this.addr,e)}function ty(r,e){r.uniform4uiv(this.addr,e)}function ny(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mp,s[a])}function iy(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wp,s[a])}function sy(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Tp,s[a])}function ry(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sp,s[a])}function ay(r){switch(r){case 5126:return Vx;case 35664:return Hx;case 35665:return Gx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return $x;case 5124:case 35670:return Yx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Kx;case 5125:return jx;case 36294:return Qx;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class oy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}}class cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function mu(r,e){r.seq.push(e),r.map[e.id]=e}function hy(r,e,t){const n=r.name,i=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),a=bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mu(t,c===void 0?new oy(o,r,e):new ly(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new cy(o),mu(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);hy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uy=37297;let fy=0;function dy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function py(r){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(r);let n;switch(e===t?n="":e===Rr&&t===Cr?n="LinearDisplayP3ToLinearSRGB":e===Cr&&t===Rr&&(n="LinearSRGBToLinearDisplayP3"),r){case Fn:case Yr:return[n,"LinearTransferOETF"];case Tt:case bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function _u(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+dy(r.getShaderSource(e),a)}else return i}function my(r,e){const t=py(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gy(r,e){let t;switch(e){case kc:t="Linear";break;case Vc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case vo:t="ACESFilmic";break;case Gc:t="AgX";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _y(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function vy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Us).join(`
`)}function xy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Us(r){return r!==""}function vu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(r){return r.replace(My,Sy)}const by=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sy(r,e){let t=Be[e];if(t===void 0){const n=by.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(r){return r.replace(wy,Ty)}function Ty(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ey(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qr?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ay(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case si:case Ai:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Ry(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $r:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function Py(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ly(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ey(t),c=Ay(t),h=Cy(t),u=Ry(t),f=Py(t),d=t.isWebGL2?"":_y(t),p=vy(t),v=xy(s),g=i.createProgram();let m,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),m.length>0&&(m+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),x.length>0&&(x+=`
`)):(m=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),x=[d,Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Be.tonemapping_pars_fragment:"",t.toneMapping!==ni?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=Ac(a),a=vu(a,t),a=xu(a,t),o=Ac(o),o=vu(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+m+a,S=_+x+o,M=gu(i,i.VERTEX_SHADER,y),b=gu(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(q){if(r.debug.checkShaderErrors){const oe=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(b).trim();let H=!0,te=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,b);else{const ee=_u(i,M,"vertex"),K=_u(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+ee+`
`+K)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(I===""||F==="")&&(te=!1);te&&(q.diagnostics={runnable:H,programLog:oe,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:x}})}i.deleteShader(M),i.deleteShader(b),w=new ao(i,g),E=yy(i,g)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,uy)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uy(e),t.set(e,n)),n}}class Uy{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Ny(r,e,t,n,i,s,a){const o=new wo,l=new Dy,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function g(w,E,U,q,oe){const I=q.fog,F=oe.geometry,H=w.isMeshStandardMaterial?q.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),ee=te&&te.mapping===qs?te.image.height:null,K=p[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=se!==void 0?se.length:0;let ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let W,ie,_e,Ie;if(K){const Zt=bn[K];W=Zt.vertexShader,ie=Zt.fragmentShader}else W=w.vertexShader,ie=w.fragmentShader,l.update(w),_e=l.getVertexShaderID(w),Ie=l.getFragmentShaderID(w);const Me=r.getRenderTarget(),Le=oe.isInstancedMesh===!0,Xe=oe.isBatchedMesh===!0,Ee=!!w.map,ke=!!w.matcap,L=!!te,he=!!w.aoMap,J=!!w.lightMap,ce=!!w.bumpMap,j=!!w.normalMap,De=!!w.displacementMap,me=!!w.emissiveMap,C=!!w.metalnessMap,T=!!w.roughnessMap,O=w.anisotropy>0,ae=w.clearcoat>0,B=w.iridescence>0,z=w.sheen>0,le=w.transmission>0,ne=O&&!!w.anisotropyMap,Y=ae&&!!w.clearcoatMap,ve=ae&&!!w.clearcoatNormalMap,ye=ae&&!!w.clearcoatRoughnessMap,$=B&&!!w.iridescenceMap,it=B&&!!w.iridescenceThicknessMap,Qe=z&&!!w.sheenColorMap,He=z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Ae=!!w.specularColorMap,qe=!!w.specularIntensityMap,st=le&&!!w.transmissionMap,ut=le&&!!w.thicknessMap,$e=!!w.gradientMap,ue=!!w.alphaMap,D=w.alphaTest>0,de=!!w.alphaHash,pe=!!w.extensions,Ge=!!F.attributes.uv1,ze=!!F.attributes.uv2,mt=!!F.attributes.uv3;let gt=ni;return w.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(gt=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:W,fragmentShader:ie,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:Ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Xe,instancing:Le,instancingColor:Le&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Fn,map:Ee,matcap:ke,envMap:L,envMapMode:L&&te.mapping,envMapCubeUVHeight:ee,aoMap:he,lightMap:J,bumpMap:ce,normalMap:j,displacementMap:f&&De,emissiveMap:me,normalMapObjectSpace:j&&w.normalMapType===rp,normalMapTangentSpace:j&&w.normalMapType===Pi,metalnessMap:C,roughnessMap:T,anisotropy:O,anisotropyMap:ne,clearcoat:ae,clearcoatMap:Y,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,iridescence:B,iridescenceMap:$,iridescenceThicknessMap:it,sheen:z,sheenColorMap:Qe,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Ae,specularIntensityMap:qe,transmission:le,transmissionMap:st,thicknessMap:ut,gradientMap:$e,opaque:w.transparent===!1&&w.blending===es,alphaMap:ue,alphaTest:D,alphaHash:de,combine:w.combine,mapUv:Ee&&v(w.map.channel),aoMapUv:he&&v(w.aoMap.channel),lightMapUv:J&&v(w.lightMap.channel),bumpMapUv:ce&&v(w.bumpMap.channel),normalMapUv:j&&v(w.normalMap.channel),displacementMapUv:De&&v(w.displacementMap.channel),emissiveMapUv:me&&v(w.emissiveMap.channel),metalnessMapUv:C&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ne&&v(w.anisotropyMap.channel),clearcoatMapUv:Y&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:Ae&&v(w.specularColorMap.channel),specularIntensityMapUv:qe&&v(w.specularIntensityMap.channel),transmissionMapUv:st&&v(w.transmissionMap.channel),thicknessMapUv:ut&&v(w.thicknessMap.channel),alphaMapUv:ue&&v(w.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(j||O),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ze,vertexUv3s:mt,pointsUvs:oe.isPoints===!0&&!!F.attributes.uv&&(Ee||ue),fog:!!I,useFog:w.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:oe.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ee&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pn,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:pe&&w.extensions.derivatives===!0,extensionFragDepth:pe&&w.extensions.fragDepth===!0,extensionDrawBuffers:pe&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)E.push(U),E.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(x(E,w),_(E,w),E.push(r.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function x(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function y(w){const E=p[w.type];let U;if(E){const q=bn[E];U=Gs.clone(q.uniforms)}else U=w.uniforms;return U}function S(w,E){let U;for(let q=0,oe=c.length;q<oe;q++){const I=c[q];if(I.cacheKey===E){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Ly(r,E,w,s),c.push(U)),U}function M(w){if(--w.usedTimes===0){const E=c.indexOf(w);c[E]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:A}}function Oy(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Su(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,p,v,g){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function o(u,f,d,p,v,g){const m=a(u,f,d,p,v,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,p,v,g){const m=a(u,f,d,p,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Fy),n.length>1&&n.sort(f||bu),i.length>1&&i.sort(f||bu)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function By(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Su,r.set(n,[a])):i>=s.length?(a=new Su,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new xe};break;case"SpotLight":t={position:new P,direction:new P,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function ky(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Vy=0;function Hy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gy(r,e){const t=new zy,n=ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,a=new Fe,o=new Fe;function l(h,u){let f=0,d=0,p=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let v=0,g=0,m=0,x=0,_=0,y=0,S=0,M=0,b=0,A=0,w=0;h.sort(Hy);const E=u===!0?Math.PI:1;for(let q=0,oe=h.length;q<oe;q++){const I=h[q],F=I.color,H=I.intensity,te=I.distance,ee=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*H*E,d+=F.g*H*E,p+=F.b*H*E;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],H);w++}else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const se=I.shadow,re=n.get(I);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,i.directionalShadow[v]=re,i.directionalShadowMap[v]=ee,i.directionalShadowMatrix[v]=I.shadow.matrix,y++}i.directional[v]=K,v++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(F).multiplyScalar(H*E),K.distance=te,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[m]=K;const se=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,se.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[m]=se.matrix,I.castShadow){const re=n.get(I);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=ee,M++}m++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(F).multiplyScalar(H),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=K,x++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*E),K.distance=I.distance,K.decay=I.decay,I.castShadow){const se=I.shadow,re=n.get(I);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,i.pointShadow[g]=re,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(H*E),K.groundColor.copy(I.groundColor).multiplyScalar(H*E),i.hemi[_]=K,_++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==v||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==x||U.hemiLength!==_||U.numDirectionalShadows!==y||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==b||U.numLightProbes!==w)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=x,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,U.directionalLength=v,U.pointLength=g,U.spotLength=m,U.rectAreaLength=x,U.hemiLength=_,U.numDirectionalShadows=y,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=b,U.numLightProbes=w,i.version=Vy++)}function c(h,u){let f=0,d=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function wu(r,e){const t=new Gy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wy(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new wu(r,e),t.set(s,[l])):a>=o.length?(l=new wu(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class lh extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ch extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
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
}`;function $y(r,e,t){let n=new Kr;const i=new Z,s=new Z,a=new ct,o=new lh({depthPacking:sp}),l=new ch,c={},h=t.maxTextureSize,u={[On]:qt,[qt]:On,[Pn]:Pn},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Je;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let m=this.type;this.render=function(M,b,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const w=r.getRenderTarget(),E=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ln),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const oe=m!==Rn&&this.type===Rn,I=m===Rn&&this.type!==Rn;for(let F=0,H=M.length;F<H;F++){const te=M[F],ee=te.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const K=ee.getFrameExtents();if(i.multiply(K),s.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,ee.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,ee.mapSize.y=s.y)),ee.map===null||oe===!0||I===!0){const re=this.type!==Rn?{minFilter:Rt,magFilter:Rt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Qt(i.x,i.y,re),ee.map.texture.name=te.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();const se=ee.getViewportCount();for(let re=0;re<se;re++){const ge=ee.getViewport(re);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),q.viewport(a),ee.updateMatrices(te,re),n=ee.getFrustum(),y(b,A,ee.camera,te,this.type)}ee.isPointLightShadow!==!0&&this.type===Rn&&x(ee,A),ee.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(w,E,U)};function x(M,b){const A=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qt(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,A,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,A,d,v,null)}function _(M,b,A,w){let E=null;const U=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)E=U;else if(E=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=E.uuid,oe=b.uuid;let I=c[q];I===void 0&&(I={},c[q]=I);let F=I[oe];F===void 0&&(F=E.clone(),I[oe]=F,b.addEventListener("dispose",S)),E=F}if(E.visible=b.visible,E.wireframe=b.wireframe,w===Rn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const q=r.properties.get(E);q.light=A}return E}function y(M,b,A,w,E){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Rn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const oe=e.update(M),I=M.material;if(Array.isArray(I)){const F=oe.groups;for(let H=0,te=F.length;H<te;H++){const ee=F[H],K=I[ee.materialIndex];if(K&&K.visible){const se=_(M,K,w,E);M.onBeforeShadow(r,M,b,A,oe,se,ee),r.renderBufferDirect(A,null,oe,se,M,ee),M.onAfterShadow(r,M,b,A,oe,se,ee)}}}else if(I.visible){const F=_(M,I,w,E);M.onBeforeShadow(r,M,b,A,oe,F,null),r.renderBufferDirect(A,null,oe,F,M,null),M.onAfterShadow(r,M,b,A,oe,F,null)}}const q=M.children;for(let oe=0,I=q.length;oe<I;oe++)y(q[oe],b,A,w,E)}function S(M){M.target.removeEventListener("dispose",S);for(const A in c){const w=c[A],E=M.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Yy(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const de=new ct;let pe=null;const Ge=new ct(0,0,0,0);return{setMask:function(ze){pe!==ze&&!D&&(r.colorMask(ze,ze,ze,ze),pe=ze)},setLocked:function(ze){D=ze},setClear:function(ze,mt,gt,Nt,Zt){Zt===!0&&(ze*=Nt,mt*=Nt,gt*=Nt),de.set(ze,mt,gt,Nt),Ge.equals(de)===!1&&(r.clearColor(ze,mt,gt,Nt),Ge.copy(de))},reset:function(){D=!1,pe=null,Ge.set(-1,0,0,0)}}}function s(){let D=!1,de=null,pe=null,Ge=null;return{setTest:function(ze){ze?Xe(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(ze){de!==ze&&!D&&(r.depthMask(ze),de=ze)},setFunc:function(ze){if(pe!==ze){switch(ze){case Nd:r.depthFunc(r.NEVER);break;case Od:r.depthFunc(r.ALWAYS);break;case Fd:r.depthFunc(r.LESS);break;case xr:r.depthFunc(r.LEQUAL);break;case Bd:r.depthFunc(r.EQUAL);break;case zd:r.depthFunc(r.GEQUAL);break;case kd:r.depthFunc(r.GREATER);break;case Vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ze}},setLocked:function(ze){D=ze},setClear:function(ze){Ge!==ze&&(r.clearDepth(ze),Ge=ze)},reset:function(){D=!1,de=null,pe=null,Ge=null}}}function a(){let D=!1,de=null,pe=null,Ge=null,ze=null,mt=null,gt=null,Nt=null,Zt=null;return{setTest:function(_t){D||(_t?Xe(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(_t){de!==_t&&!D&&(r.stencilMask(_t),de=_t)},setFunc:function(_t,Jt,Cn){(pe!==_t||Ge!==Jt||ze!==Cn)&&(r.stencilFunc(_t,Jt,Cn),pe=_t,Ge=Jt,ze=Cn)},setOp:function(_t,Jt,Cn){(mt!==_t||gt!==Jt||Nt!==Cn)&&(r.stencilOp(_t,Jt,Cn),mt=_t,gt=Jt,Nt=Cn)},setLocked:function(_t){D=_t},setClear:function(_t){Zt!==_t&&(r.clearStencil(_t),Zt=_t)},reset:function(){D=!1,de=null,pe=null,Ge=null,ze=null,mt=null,gt=null,Nt=null,Zt=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},d={},p=new WeakMap,v=[],g=null,m=!1,x=null,_=null,y=null,S=null,M=null,b=null,A=null,w=new xe(0,0,0),E=0,U=!1,q=null,oe=null,I=null,F=null,H=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,K=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(se)[1]),ee=K>=1):se.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ee=K>=2);let re=null,ge={};const W=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),_e=new ct().fromArray(W),Ie=new ct().fromArray(ie);function Me(D,de,pe,Ge){const ze=new Uint8Array(4),mt=r.createTexture();r.bindTexture(D,mt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let gt=0;gt<pe;gt++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(de,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(de+gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return mt}const Le={};Le[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Le[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Le[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Xe(r.DEPTH_TEST),l.setFunc(xr),me(!1),C(ql),Xe(r.CULL_FACE),j(Ln);function Xe(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Ee(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function ke(D,de){return d[D]!==de?(r.bindFramebuffer(D,de),d[D]=de,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=de),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=de)),!0):!1}function L(D,de){let pe=v,Ge=!1;if(D)if(pe=p.get(de),pe===void 0&&(pe=[],p.set(de,pe)),D.isWebGLMultipleRenderTargets){const ze=D.texture;if(pe.length!==ze.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,gt=ze.length;mt<gt;mt++)pe[mt]=r.COLOR_ATTACHMENT0+mt;pe.length=ze.length,Ge=!0}}else pe[0]!==r.COLOR_ATTACHMENT0&&(pe[0]=r.COLOR_ATTACHMENT0,Ge=!0);else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ge=!0);Ge&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function he(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const J={[yi]:r.FUNC_ADD,[yd]:r.FUNC_SUBTRACT,[Md]:r.FUNC_REVERSE_SUBTRACT};if(n)J[Zl]=r.MIN,J[Jl]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(J[Zl]=D.MIN_EXT,J[Jl]=D.MAX_EXT)}const ce={[bd]:r.ZERO,[Sd]:r.ONE,[wd]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[Pd]:r.SRC_ALPHA_SATURATE,[Cd]:r.DST_COLOR,[Ed]:r.DST_ALPHA,[Td]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Rd]:r.ONE_MINUS_DST_COLOR,[Ad]:r.ONE_MINUS_DST_ALPHA,[Ld]:r.CONSTANT_COLOR,[Id]:r.ONE_MINUS_CONSTANT_COLOR,[Dd]:r.CONSTANT_ALPHA,[Ud]:r.ONE_MINUS_CONSTANT_ALPHA};function j(D,de,pe,Ge,ze,mt,gt,Nt,Zt,_t){if(D===Ln){m===!0&&(Ee(r.BLEND),m=!1);return}if(m===!1&&(Xe(r.BLEND),m=!0),D!==xd){if(D!==x||_t!==U){if((_!==yi||M!==yi)&&(r.blendEquation(r.FUNC_ADD),_=yi,M=yi),_t)switch(D){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.ONE,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,S=null,b=null,A=null,w.set(0,0,0),E=0,x=D,U=_t}return}ze=ze||de,mt=mt||pe,gt=gt||Ge,(de!==_||ze!==M)&&(r.blendEquationSeparate(J[de],J[ze]),_=de,M=ze),(pe!==y||Ge!==S||mt!==b||gt!==A)&&(r.blendFuncSeparate(ce[pe],ce[Ge],ce[mt],ce[gt]),y=pe,S=Ge,b=mt,A=gt),(Nt.equals(w)===!1||Zt!==E)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Zt),w.copy(Nt),E=Zt),x=D,U=!1}function De(D,de){D.side===Pn?Ee(r.CULL_FACE):Xe(r.CULL_FACE);let pe=D.side===qt;de&&(pe=!pe),me(pe),D.blending===es&&D.transparent===!1?j(Ln):j(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ge=D.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),O(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Xe(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(D){q!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),q=D)}function C(D){D!==_d?(Xe(r.CULL_FACE),D!==oe&&(D===ql?r.cullFace(r.BACK):D===vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),oe=D}function T(D){D!==I&&(ee&&r.lineWidth(D),I=D)}function O(D,de,pe){D?(Xe(r.POLYGON_OFFSET_FILL),(F!==de||H!==pe)&&(r.polygonOffset(de,pe),F=de,H=pe)):Ee(r.POLYGON_OFFSET_FILL)}function ae(D){D?Xe(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function B(D){D===void 0&&(D=r.TEXTURE0+te-1),re!==D&&(r.activeTexture(D),re=D)}function z(D,de,pe){pe===void 0&&(re===null?pe=r.TEXTURE0+te-1:pe=re);let Ge=ge[pe];Ge===void 0&&(Ge={type:void 0,texture:void 0},ge[pe]=Ge),(Ge.type!==D||Ge.texture!==de)&&(re!==pe&&(r.activeTexture(pe),re=pe),r.bindTexture(D,de||Le[D]),Ge.type=D,Ge.texture=de)}function le(){const D=ge[re];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(D){_e.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),_e.copy(D))}function st(D){Ie.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ie.copy(D))}function ut(D,de){let pe=u.get(de);pe===void 0&&(pe=new WeakMap,u.set(de,pe));let Ge=pe.get(D);Ge===void 0&&(Ge=r.getUniformBlockIndex(de,D.name),pe.set(D,Ge))}function $e(D,de){const Ge=u.get(de).get(D);h.get(de)!==Ge&&(r.uniformBlockBinding(de,Ge,D.__bindingPointIndex),h.set(de,Ge))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},re=null,ge={},d={},p=new WeakMap,v=[],g=null,m=!1,x=null,_=null,y=null,S=null,M=null,b=null,A=null,w=new xe(0,0,0),E=0,U=!1,q=null,oe=null,I=null,F=null,H=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Xe,disable:Ee,bindFramebuffer:ke,drawBuffers:L,useProgram:he,setBlending:j,setMaterial:De,setFlipSided:me,setCullFace:C,setLineWidth:T,setPolygonOffset:O,setScissorTest:ae,activeTexture:B,bindTexture:z,unbindTexture:le,compressedTexImage2D:ne,compressedTexImage3D:Y,texImage2D:Ne,texImage3D:Ae,updateUBOMapping:ut,uniformBlockBinding:$e,texStorage2D:Qe,texStorage3D:He,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:$,compressedTexSubImage3D:it,scissor:qe,viewport:st,reset:ue}}function Zy(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return d?new OffscreenCanvas(C,T):Lr("canvas")}function v(C,T,O,ae){let B=1;if((C.width>ae||C.height>ae)&&(B=ae/Math.max(C.width,C.height)),B<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const z=T?mo:Math.floor,le=z(B*C.width),ne=z(B*C.height);u===void 0&&(u=p(le,ne));const Y=O?p(le,ne):u;return Y.width=le,Y.height=ne,Y.getContext("2d").drawImage(C,0,0,le,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+le+"x"+ne+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Ec(C.width)&&Ec(C.height)}function m(C){return o?!1:C.wrapS!==Wt||C.wrapT!==Wt||C.minFilter!==Rt&&C.minFilter!==Pt}function x(C,T){return C.generateMipmaps&&T&&C.minFilter!==Rt&&C.minFilter!==Pt}function _(C){r.generateMipmap(C)}function y(C,T,O,ae,B=!1){if(o===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let z=T;if(T===r.RED&&(O===r.FLOAT&&(z=r.R32F),O===r.HALF_FLOAT&&(z=r.R16F),O===r.UNSIGNED_BYTE&&(z=r.R8)),T===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(z=r.R8UI),O===r.UNSIGNED_SHORT&&(z=r.R16UI),O===r.UNSIGNED_INT&&(z=r.R32UI),O===r.BYTE&&(z=r.R8I),O===r.SHORT&&(z=r.R16I),O===r.INT&&(z=r.R32I)),T===r.RG&&(O===r.FLOAT&&(z=r.RG32F),O===r.HALF_FLOAT&&(z=r.RG16F),O===r.UNSIGNED_BYTE&&(z=r.RG8)),T===r.RGBA){const le=B?Ar:lt.getTransfer(ae);O===r.FLOAT&&(z=r.RGBA32F),O===r.HALF_FLOAT&&(z=r.RGBA16F),O===r.UNSIGNED_BYTE&&(z=le===ft?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(z=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(z=r.RGB5_A1)}return(z===r.R16F||z===r.R32F||z===r.RG16F||z===r.RG32F||z===r.RGBA16F||z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(C,T,O){return x(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Pt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function M(C){return C===Rt||C===fo||C===pr?r.NEAREST:r.LINEAR}function b(C){const T=C.target;T.removeEventListener("dispose",b),w(T),T.isVideoTexture&&h.delete(T)}function A(C){const T=C.target;T.removeEventListener("dispose",A),U(T)}function w(C){const T=n.get(C);if(T.__webglInit===void 0)return;const O=C.source,ae=f.get(O);if(ae){const B=ae[T.__cacheKey];B.usedTimes--,B.usedTimes===0&&E(C),Object.keys(ae).length===0&&f.delete(O)}n.remove(C)}function E(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const O=C.source,ae=f.get(O);delete ae[T.__cacheKey],a.memory.textures--}function U(C){const T=C.texture,O=n.get(C),ae=n.get(T);if(ae.__webglTexture!==void 0&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(O.__webglFramebuffer[B]))for(let z=0;z<O.__webglFramebuffer[B].length;z++)r.deleteFramebuffer(O.__webglFramebuffer[B][z]);else r.deleteFramebuffer(O.__webglFramebuffer[B]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[B])}else{if(Array.isArray(O.__webglFramebuffer))for(let B=0;B<O.__webglFramebuffer.length;B++)r.deleteFramebuffer(O.__webglFramebuffer[B]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let B=0;B<O.__webglColorRenderbuffer.length;B++)O.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[B]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let B=0,z=T.length;B<z;B++){const le=n.get(T[B]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(T[B])}n.remove(T),n.remove(C)}let q=0;function oe(){q=0}function I(){const C=q;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),q+=1,C}function F(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function H(C,T){const O=n.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(O,C,T);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+T)}function te(C,T){const O=n.get(C);if(C.version>0&&O.__version!==C.version){_e(O,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+T)}function ee(C,T){const O=n.get(C);if(C.version>0&&O.__version!==C.version){_e(O,C,T);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+T)}function K(C,T){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Ie(O,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+T)}const se={[br]:r.REPEAT,[Wt]:r.CLAMP_TO_EDGE,[Sr]:r.MIRRORED_REPEAT},re={[Rt]:r.NEAREST,[fo]:r.NEAREST_MIPMAP_NEAREST,[pr]:r.NEAREST_MIPMAP_LINEAR,[Pt]:r.LINEAR,[Wc]:r.LINEAR_MIPMAP_NEAREST,[Ci]:r.LINEAR_MIPMAP_LINEAR},ge={[ap]:r.NEVER,[fp]:r.ALWAYS,[op]:r.LESS,[eh]:r.LEQUAL,[lp]:r.EQUAL,[up]:r.GEQUAL,[cp]:r.GREATER,[hp]:r.NOTEQUAL};function W(C,T,O){if(O?(r.texParameteri(C,r.TEXTURE_WRAP_S,se[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,se[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,se[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,re[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,re[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Wt||T.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,M(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==Rt&&T.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Rt||T.minFilter!==pr&&T.minFilter!==Ci||T.type===Sn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===In&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ie(C,T){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",b));const ae=T.source;let B=f.get(ae);B===void 0&&(B={},f.set(ae,B));const z=F(T);if(z!==C.__cacheKey){B[z]===void 0&&(B[z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),B[z].usedTimes++;const le=B[C.__cacheKey];le!==void 0&&(B[C.__cacheKey].usedTimes--,le.usedTimes===0&&E(T)),C.__cacheKey=z,C.__webglTexture=B[z].texture}return O}function _e(C,T,O){let ae=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=r.TEXTURE_3D);const B=ie(C,T),z=T.source;t.bindTexture(ae,C.__webglTexture,r.TEXTURE0+O);const le=n.get(z);if(z.version!==le.__version||B===!0){t.activeTexture(r.TEXTURE0+O);const ne=lt.getPrimaries(lt.workingColorSpace),Y=T.colorSpace===pn?null:lt.getPrimaries(T.colorSpace),ve=T.colorSpace===pn||ne===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ye=m(T)&&g(T.image)===!1;let $=v(T.image,ye,!1,i.maxTextureSize);$=me(T,$);const it=g($)||o,Qe=s.convert(T.format,T.colorSpace);let He=s.convert(T.type),Ne=y(T.internalFormat,Qe,He,T.colorSpace,T.isVideoTexture);W(ae,T,it);let Ae;const qe=T.mipmaps,st=o&&T.isVideoTexture!==!0&&Ne!==Kc,ut=le.__version===void 0||B===!0,$e=S(T,$,it);if(T.isDepthTexture)Ne=r.DEPTH_COMPONENT,o?T.type===Sn?Ne=r.DEPTH_COMPONENT32F:T.type===ei?Ne=r.DEPTH_COMPONENT24:T.type===Mi?Ne=r.DEPTH24_STENCIL8:Ne=r.DEPTH_COMPONENT16:T.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===bi&&Ne===r.DEPTH_COMPONENT&&T.type!==yo&&T.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ei,He=s.convert(T.type)),T.format===is&&Ne===r.DEPTH_COMPONENT&&(Ne=r.DEPTH_STENCIL,T.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Mi,He=s.convert(T.type))),ut&&(st?t.texStorage2D(r.TEXTURE_2D,1,Ne,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,Ne,$.width,$.height,0,Qe,He,null));else if(T.isDataTexture)if(qe.length>0&&it){st&&ut&&t.texStorage2D(r.TEXTURE_2D,$e,Ne,qe[0].width,qe[0].height);for(let ue=0,D=qe.length;ue<D;ue++)Ae=qe[ue],st?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,Qe,He,Ae.data):t.texImage2D(r.TEXTURE_2D,ue,Ne,Ae.width,Ae.height,0,Qe,He,Ae.data);T.generateMipmaps=!1}else st?(ut&&t.texStorage2D(r.TEXTURE_2D,$e,Ne,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,Qe,He,$.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,$.width,$.height,0,Qe,He,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$e,Ne,qe[0].width,qe[0].height,$.depth);for(let ue=0,D=qe.length;ue<D;ue++)Ae=qe[ue],T.format!==on?Qe!==null?st?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,$.depth,Qe,Ae.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,Ne,Ae.width,Ae.height,$.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,$.depth,Qe,He,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,Ne,Ae.width,Ae.height,$.depth,0,Qe,He,Ae.data)}else{st&&ut&&t.texStorage2D(r.TEXTURE_2D,$e,Ne,qe[0].width,qe[0].height);for(let ue=0,D=qe.length;ue<D;ue++)Ae=qe[ue],T.format!==on?Qe!==null?st?t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,Qe,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,Ne,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,Qe,He,Ae.data):t.texImage2D(r.TEXTURE_2D,ue,Ne,Ae.width,Ae.height,0,Qe,He,Ae.data)}else if(T.isDataArrayTexture)st?(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$e,Ne,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Qe,He,$.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,$.width,$.height,$.depth,0,Qe,He,$.data);else if(T.isData3DTexture)st?(ut&&t.texStorage3D(r.TEXTURE_3D,$e,Ne,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Qe,He,$.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,$.width,$.height,$.depth,0,Qe,He,$.data);else if(T.isFramebufferTexture){if(ut)if(st)t.texStorage2D(r.TEXTURE_2D,$e,Ne,$.width,$.height);else{let ue=$.width,D=$.height;for(let de=0;de<$e;de++)t.texImage2D(r.TEXTURE_2D,de,Ne,ue,D,0,Qe,He,null),ue>>=1,D>>=1}}else if(qe.length>0&&it){st&&ut&&t.texStorage2D(r.TEXTURE_2D,$e,Ne,qe[0].width,qe[0].height);for(let ue=0,D=qe.length;ue<D;ue++)Ae=qe[ue],st?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Qe,He,Ae):t.texImage2D(r.TEXTURE_2D,ue,Ne,Qe,He,Ae);T.generateMipmaps=!1}else st?(ut&&t.texStorage2D(r.TEXTURE_2D,$e,Ne,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Qe,He,$)):t.texImage2D(r.TEXTURE_2D,0,Ne,Qe,He,$);x(T,it)&&_(ae),le.__version=z.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ie(C,T,O){if(T.image.length!==6)return;const ae=ie(C,T),B=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const z=n.get(B);if(B.version!==z.__version||ae===!0){t.activeTexture(r.TEXTURE0+O);const le=lt.getPrimaries(lt.workingColorSpace),ne=T.colorSpace===pn?null:lt.getPrimaries(T.colorSpace),Y=T.colorSpace===pn||le===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,$=[];for(let ue=0;ue<6;ue++)!ve&&!ye?$[ue]=v(T.image[ue],!1,!0,i.maxCubemapSize):$[ue]=ye?T.image[ue].image:T.image[ue],$[ue]=me(T,$[ue]);const it=$[0],Qe=g(it)||o,He=s.convert(T.format,T.colorSpace),Ne=s.convert(T.type),Ae=y(T.internalFormat,He,Ne,T.colorSpace),qe=o&&T.isVideoTexture!==!0,st=z.__version===void 0||ae===!0;let ut=S(T,it,Qe);W(r.TEXTURE_CUBE_MAP,T,Qe);let $e;if(ve){qe&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Ae,it.width,it.height);for(let ue=0;ue<6;ue++){$e=$[ue].mipmaps;for(let D=0;D<$e.length;D++){const de=$e[D];T.format!==on?He!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,de.width,de.height,He,Ne,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Ae,de.width,de.height,0,He,Ne,de.data)}}}else{$e=T.mipmaps,qe&&st&&($e.length>0&&ut++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Ae,$[0].width,$[0].height));for(let ue=0;ue<6;ue++)if(ye){qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,$[ue].width,$[ue].height,He,Ne,$[ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ae,$[ue].width,$[ue].height,0,He,Ne,$[ue].data);for(let D=0;D<$e.length;D++){const pe=$e[D].image[ue].image;qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,pe.width,pe.height,He,Ne,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Ae,pe.width,pe.height,0,He,Ne,pe.data)}}else{qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,He,Ne,$[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ae,He,Ne,$[ue]);for(let D=0;D<$e.length;D++){const de=$e[D];qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,He,Ne,de.image[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Ae,He,Ne,de.image[ue])}}}x(T,Qe)&&_(r.TEXTURE_CUBE_MAP),z.__version=B.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Me(C,T,O,ae,B,z){const le=s.convert(O.format,O.colorSpace),ne=s.convert(O.type),Y=y(O.internalFormat,le,ne,O.colorSpace);if(!n.get(T).__hasExternalTextures){const ye=Math.max(1,T.width>>z),$=Math.max(1,T.height>>z);B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?t.texImage3D(B,z,Y,ye,$,T.depth,0,le,ne,null):t.texImage2D(B,z,Y,ye,$,0,le,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,B,n.get(O).__webglTexture,0,ce(T)):(B===r.TEXTURE_2D||B>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,B,n.get(O).__webglTexture,z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,T,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let ae=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||j(T)){const B=T.depthTexture;B&&B.isDepthTexture&&(B.type===Sn?ae=r.DEPTH_COMPONENT32F:B.type===ei&&(ae=r.DEPTH_COMPONENT24));const z=ce(T);j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,ae,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,z,ae,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const ae=ce(T);O&&j(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,r.DEPTH24_STENCIL8,T.width,T.height):j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let B=0;B<ae.length;B++){const z=ae[B],le=s.convert(z.format,z.colorSpace),ne=s.convert(z.type),Y=y(z.internalFormat,le,ne,z.colorSpace),ve=ce(T);O&&j(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Y,T.width,T.height):j(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,Y,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Y,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ae=n.get(T.depthTexture).__webglTexture,B=ce(T);if(T.depthTexture.format===bi)j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(T.depthTexture.format===is)j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,B):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const T=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Xe(T.__webglFramebuffer,C)}else if(O){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]=r.createRenderbuffer(),Le(T.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Le(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(C,T,O){const ae=n.get(C);T!==void 0&&Me(ae.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ee(C)}function L(C){const T=C.texture,O=n.get(C),ae=n.get(T);C.addEventListener("dispose",A),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=T.version,a.memory.textures++);const B=C.isWebGLCubeRenderTarget===!0,z=C.isWebGLMultipleRenderTargets===!0,le=g(C)||o;if(B){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(o&&T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let Y=0;Y<T.mipmaps.length;Y++)O.__webglFramebuffer[ne][Y]=r.createFramebuffer()}else O.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)O.__webglFramebuffer[ne]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(z)if(i.drawBuffers){const ne=C.texture;for(let Y=0,ve=ne.length;Y<ve;Y++){const ye=n.get(ne[Y]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&j(C)===!1){const ne=z?T:[T];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const ve=ne[Y];O.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ye=s.convert(ve.format,ve.colorSpace),$=s.convert(ve.type),it=y(ve.internalFormat,ye,$,ve.colorSpace,C.isXRRenderTarget===!0),Qe=ce(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,it,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(B){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),W(r.TEXTURE_CUBE_MAP,T,le);for(let ne=0;ne<6;ne++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)Me(O.__webglFramebuffer[ne][Y],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Y);else Me(O.__webglFramebuffer[ne],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);x(T,le)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){const ne=C.texture;for(let Y=0,ve=ne.length;Y<ve;Y++){const ye=ne[Y],$=n.get(ye);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),W(r.TEXTURE_2D,ye,le),Me(O.__webglFramebuffer,C,ye,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,0),x(ye,le)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,ae.__webglTexture),W(ne,T,le),o&&T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)Me(O.__webglFramebuffer[Y],C,T,r.COLOR_ATTACHMENT0,ne,Y);else Me(O.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,ne,0);x(T,le)&&_(ne),t.unbindTexture()}C.depthBuffer&&Ee(C)}function he(C){const T=g(C)||o,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,B=O.length;ae<B;ae++){const z=O[ae];if(x(z,T)){const le=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ne=n.get(z).__webglTexture;t.bindTexture(le,ne),_(le),t.unbindTexture()}}}function J(C){if(o&&C.samples>0&&j(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,ae=C.height;let B=r.COLOR_BUFFER_BIT;const z=[],le=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ve=0;ve<T.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){z.push(r.COLOR_ATTACHMENT0+ve),C.depthBuffer&&z.push(le);const ye=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(B|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(B|=r.STENCIL_BUFFER_BIT)),Y&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]),ye===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[le]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[le])),Y){const $=n.get(T[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,O,ae,0,0,O,ae,B,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,z)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<T.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const ye=n.get(T[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function ce(C){return Math.min(i.maxSamples,C.samples)}function j(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function me(C,T){const O=C.colorSpace,ae=C.format,B=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===po||O!==Fn&&O!==pn&&(lt.getTransfer(O)===ft?o===!1?e.has("EXT_sRGB")===!0&&ae===on?(C.format=po,C.minFilter=Pt,C.generateMipmaps=!1):T=nh.sRGBToLinear(T):(ae!==on||B!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),T}this.allocateTextureUnit=I,this.resetTextureUnits=oe,this.setTexture2D=H,this.setTexture2DArray=te,this.setTexture3D=ee,this.setTextureCube=K,this.rebindTextures=ke,this.setupRenderTarget=L,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=j}function Ep(r,e,t){const n=t.isWebGL2;function i(s,a=pn){let o;const l=lt.getTransfer(a);if(s===ii)return r.UNSIGNED_BYTE;if(s===qc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$c)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qd)return r.BYTE;if(s===$d)return r.SHORT;if(s===yo)return r.UNSIGNED_SHORT;if(s===Xc)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===Sn)return r.FLOAT;if(s===In)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yd)return r.ALPHA;if(s===on)return r.RGBA;if(s===Zd)return r.LUMINANCE;if(s===Jd)return r.LUMINANCE_ALPHA;if(s===bi)return r.DEPTH_COMPONENT;if(s===is)return r.DEPTH_STENCIL;if(s===po)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Kd)return r.RED;if(s===Yc)return r.RED_INTEGER;if(s===jd)return r.RG;if(s===Zc)return r.RG_INTEGER;if(s===Jc)return r.RGBA_INTEGER;if(s===eo||s===to||s===no||s===io)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===to)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===io)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jl||s===Ql||s===ec||s===tc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nc||s===ic)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nc)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ic)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sc||s===rc||s===ac||s===oc||s===lc||s===cc||s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===sc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ac)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_c)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===so||s===vc||s===xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===so)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===yc||s===Mc||s===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===so)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ap extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jy={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ky extends hi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const v=t.getContextAttributes();let g=null,m=null;const x=[],_=[],y=new Z;let S=null;const M=new zt;M.layers.enable(1),M.viewport=new ct;const b=new zt;b.layers.enable(2),b.viewport=new ct;const A=[M,b],w=new Ap;w.layers.enable(1),w.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=x[W];return ie===void 0&&(ie=new Sl,x[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=x[W];return ie===void 0&&(ie=new Sl,x[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=x[W];return ie===void 0&&(ie=new Sl,x[W]=ie),ie.getHandSpace()};function q(W){const ie=_.indexOf(W.inputSource);if(ie===-1)return;const _e=x[ie];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||a),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",oe),i.removeEventListener("inputsourceschange",I);for(let W=0;W<x.length;W++){const ie=_[W];ie!==null&&(_[W]=null,x[W].disconnect(ie))}E=null,U=null,e.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",oe),i.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Qt(d.framebufferWidth,d.framebufferHeight,{format:on,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,_e=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?is:bi,_e=v.stencil?Mi:ei);const Me={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Qt(f.textureWidth,f.textureHeight,{format:on,type:ii,depthTexture:new oh(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Le=e.properties.get(m);Le.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(W){for(let ie=0;ie<W.removed.length;ie++){const _e=W.removed[ie],Ie=_.indexOf(_e);Ie>=0&&(_[Ie]=null,x[Ie].disconnect(_e))}for(let ie=0;ie<W.added.length;ie++){const _e=W.added[ie];let Ie=_.indexOf(_e);if(Ie===-1){for(let Le=0;Le<x.length;Le++)if(Le>=_.length){_.push(_e),Ie=Le;break}else if(_[Le]===null){_[Le]=_e,Ie=Le;break}if(Ie===-1)break}const Me=x[Ie];Me&&Me.connect(_e)}}const F=new P,H=new P;function te(W,ie,_e){F.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(_e.matrixWorld);const Ie=F.distanceTo(H),Me=ie.projectionMatrix.elements,Le=_e.projectionMatrix.elements,Xe=Me[14]/(Me[10]-1),Ee=Me[14]/(Me[10]+1),ke=(Me[9]+1)/Me[5],L=(Me[9]-1)/Me[5],he=(Me[8]-1)/Me[0],J=(Le[8]+1)/Le[0],ce=Xe*he,j=Xe*J,De=Ie/(-he+J),me=De*-he;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(me),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const C=Xe+De,T=Ee+De,O=ce-me,ae=j+(Ie-me),B=ke*Ee/T*C,z=L*Ee/T*C;W.projectionMatrix.makePerspective(O,ae,B,z,C,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;w.near=b.near=M.near=W.near,w.far=b.far=M.far=W.far,(E!==w.near||U!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),E=w.near,U=w.far);const ie=W.parent,_e=w.cameras;ee(w,ie);for(let Ie=0;Ie<_e.length;Ie++)ee(_e[Ie],ie);_e.length===2?te(w,M,b):w.projectionMatrix.copy(M.projectionMatrix),K(W,w,ie)};function K(W,ie,_e){_e===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Vs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let se=null;function re(W,ie){if(h=ie.getViewerPose(c||a),p=ie,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ie=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,Ie=!0);for(let Me=0;Me<_e.length;Me++){const Le=_e[Me];let Xe=null;if(d!==null)Xe=d.getViewport(Le);else{const ke=u.getViewSubImage(f,Le);Xe=ke.viewport,Me===0&&(e.setRenderTargetTextures(m,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(m))}let Ee=A[Me];Ee===void 0&&(Ee=new zt,Ee.layers.enable(Me),Ee.viewport=new ct,A[Me]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Me===0&&(w.matrix.copy(Ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ie===!0&&w.cameras.push(Ee)}}for(let _e=0;_e<x.length;_e++){const Ie=_[_e],Me=x[_e];Ie!==null&&Me!==void 0&&Me.update(Ie,ie,c||a)}se&&se(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}const ge=new yp;ge.setAnimationLoop(re),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}function jy(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_p(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qy(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(p(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));const S=_.program;n.updateUBOMapping(x,S);const M=e.render.frame;s[x.id]!==M&&(f(x),s[x.id]=M)}function h(x){const _=u();x.__bindingPointIndex=_;const y=r.createBuffer(),S=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=i[x.id],y=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let M=0,b=y.length;M<b;M++){const A=Array.isArray(y[M])?y[M]:[y[M]];for(let w=0,E=A.length;w<E;w++){const U=A[w];if(d(U,M,w,S)===!0){const q=U.__offset,oe=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let F=0;F<oe.length;F++){const H=oe[F],te=v(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,q+I,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,I),I+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,_,y,S){const M=x.value,b=_+"_"+y;if(S[b]===void 0)return typeof M=="number"||typeof M=="boolean"?S[b]=M:S[b]=M.clone(),!0;{const A=S[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return S[b]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function p(x){const _=x.uniforms;let y=0;const S=16;for(let b=0,A=_.length;b<A;b++){const w=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,U=w.length;E<U;E++){const q=w[E],oe=Array.isArray(q.value)?q.value:[q.value];for(let I=0,F=oe.length;I<F;I++){const H=oe[I],te=v(H),ee=y%S;ee!==0&&S-ee<te.boundary&&(y+=S-ee),q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=te.storage}}}const M=y%S;return M>0&&(y+=S-M),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class hh{constructor(e={}){const{canvas:t=pp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),p=new Int32Array(4);let v=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const _=this;let y=!1,S=0,M=0,b=null,A=-1,w=null;const E=new ct,U=new ct;let q=null;const oe=new xe(0);let I=0,F=t.width,H=t.height,te=1,ee=null,K=null;const se=new ct(0,0,F,H),re=new ct(0,0,F,H);let ge=!1;const W=new Kr;let ie=!1,_e=!1,Ie=null;const Me=new Fe,Le=new Z,Xe=new P,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return b===null?te:1}let L=n;function he(R,N){for(let V=0;V<R.length;V++){const G=R[V],k=t.getContext(G,N);if(k!==null)return k}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xr}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),L=he(N,R),L===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,ce,j,De,me,C,T,O,ae,B,z,le,ne,Y,ve,ye,$,it,Qe,He,Ne,Ae,qe,st;function ut(){J=new dx(L),ce=new ox(L,J,e),J.init(ce),Ae=new Ep(L,J,ce),j=new Yy(L,J,ce),De=new gx(L),me=new Oy,C=new Zy(L,J,j,me,ce,Ae,De),T=new cx(_),O=new fx(_),ae=new w_(L,ce),qe=new rx(L,J,ae,ce),B=new px(L,ae,De,qe),z=new yx(L,B,ae,De),Qe=new xx(L,ce,C),ye=new lx(me),le=new Ny(_,T,O,J,ce,qe,ye),ne=new jy(_,me),Y=new By,ve=new Wy(J,ce),it=new sx(_,T,O,j,z,f,l),$=new $y(_,z,ce),st=new Qy(L,De,ce,j),He=new ax(L,J,De,ce),Ne=new mx(L,J,De,ce),De.programs=le.programs,_.capabilities=ce,_.extensions=J,_.properties=me,_.renderLists=Y,_.shadowMap=$,_.state=j,_.info=De}ut();const $e=new Ky(_,L);this.xr=$e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(R){R!==void 0&&(te=R,this.setSize(F,H,!1))},this.getSize=function(R){return R.set(F,H)},this.setSize=function(R,N,V=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,H=N,t.width=Math.floor(R*te),t.height=Math.floor(N*te),V===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(F*te,H*te).floor()},this.setDrawingBufferSize=function(R,N,V){F=R,H=N,te=V,t.width=Math.floor(R*V),t.height=Math.floor(N*V),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,N,V,G){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,N,V,G),j.viewport(E.copy(se).multiplyScalar(te).floor())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,N,V,G){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,N,V,G),j.scissor(U.copy(re).multiplyScalar(te).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){j.setScissorTest(ge=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(R=!0,N=!0,V=!0){let G=0;if(R){let k=!1;if(b!==null){const be=b.texture.format;k=be===Jc||be===Zc||be===Yc}if(k){const be=b.texture.type,Ue=be===ii||be===ei||be===yo||be===Mi||be===qc||be===$c,Ve=it.getClearColor(),We=it.getClearAlpha(),tt=Ve.r,Ye=Ve.g,Ke=Ve.b;Ue?(d[0]=tt,d[1]=Ye,d[2]=Ke,d[3]=We,L.clearBufferuiv(L.COLOR,0,d)):(p[0]=tt,p[1]=Ye,p[2]=Ke,p[3]=We,L.clearBufferiv(L.COLOR,0,p))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Y.dispose(),ve.dispose(),me.dispose(),T.dispose(),O.dispose(),z.dispose(),qe.dispose(),st.dispose(),le.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Zt),$e.removeEventListener("sessionend",_t),Ie&&(Ie.dispose(),Ie=null),Jt.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=De.autoReset,N=$.enabled,V=$.autoUpdate,G=$.needsUpdate,k=$.type;ut(),De.autoReset=R,$.enabled=N,$.autoUpdate=V,$.needsUpdate=G,$.type=k}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const N=R.target;N.removeEventListener("dispose",pe),Ge(N)}function Ge(R){ze(R),me.remove(R)}function ze(R){const N=me.get(R).programs;N!==void 0&&(N.forEach(function(V){le.releaseProgram(V)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,V,G,k,be){N===null&&(N=Ee);const Ue=k.isMesh&&k.matrixWorld.determinant()<0,Ve=zm(R,N,V,G,k);j.setMaterial(G,Ue);let We=V.index,tt=1;if(G.wireframe===!0){if(We=B.getWireframeAttribute(V),We===void 0)return;tt=2}const Ye=V.drawRange,Ke=V.attributes.position;let At=Ye.start*tt,hn=(Ye.start+Ye.count)*tt;be!==null&&(At=Math.max(At,be.start*tt),hn=Math.min(hn,(be.start+be.count)*tt)),We!==null?(At=Math.max(At,0),hn=Math.min(hn,We.count)):Ke!=null&&(At=Math.max(At,0),hn=Math.min(hn,Ke.count));const Ot=hn-At;if(Ot<0||Ot===1/0)return;qe.setup(k,G,Ve,V,We);let Gn,xt=He;if(We!==null&&(Gn=ae.get(We),xt=Ne,xt.setIndex(Gn)),k.isMesh)G.wireframe===!0?(j.setLineWidth(G.wireframeLinewidth*ke()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(k.isLine){let nt=G.linewidth;nt===void 0&&(nt=1),j.setLineWidth(nt*ke()),k.isLineSegments?xt.setMode(L.LINES):k.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else k.isPoints?xt.setMode(L.POINTS):k.isSprite&&xt.setMode(L.TRIANGLES);if(k.isBatchedMesh)xt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)xt.renderInstances(At,Ot,k.count);else if(V.isInstancedBufferGeometry){const nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ko=Math.min(V.instanceCount,nt);xt.renderInstances(At,Ot,Ko)}else xt.render(At,Ot)};function mt(R,N,V){R.transparent===!0&&R.side===Pn&&R.forceSinglePass===!1?(R.side=qt,R.needsUpdate=!0,sa(R,N,V),R.side=On,R.needsUpdate=!0,sa(R,N,V),R.side=Pn):sa(R,N,V)}this.compile=function(R,N,V=null){V===null&&(V=R),g=ve.get(V),g.init(),x.push(g),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),R!==V&&R.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights(_._useLegacyLights);const G=new Set;return R.traverse(function(k){const be=k.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const Ve=be[Ue];mt(Ve,V,k),G.add(Ve)}else mt(be,V,k),G.add(be)}),x.pop(),g=null,G},this.compileAsync=function(R,N,V=null){const G=this.compile(R,N,V);return new Promise(k=>{function be(){if(G.forEach(function(Ue){me.get(Ue).currentProgram.isReady()&&G.delete(Ue)}),G.size===0){k(R);return}setTimeout(be,10)}J.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let gt=null;function Nt(R){gt&&gt(R)}function Zt(){Jt.stop()}function _t(){Jt.start()}const Jt=new yp;Jt.setAnimationLoop(Nt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(R){gt=R,$e.setAnimationLoop(R),R===null?Jt.stop():Jt.start()},$e.addEventListener("sessionstart",Zt),$e.addEventListener("sessionend",_t),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(N),N=$e.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,N,b),g=ve.get(R,x.length),g.init(),x.push(g),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Me),_e=this.localClippingEnabled,ie=ye.init(this.clippingPlanes,_e),v=Y.get(R,m.length),v.init(),m.push(v),Cn(R,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ee,K),this.info.render.frame++,ie===!0&&ye.beginShadows();const V=g.state.shadowsArray;if($.render(V,R,N),ie===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(v,R),g.setupLights(_._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let k=0,be=G.length;k<be;k++){const Ue=G[k];Nh(v,R,Ue,Ue.viewport)}}else Nh(v,R,N);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,N),qe.resetDefaultState(),A=-1,w=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Cn(R,N,V,G){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){G&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);const Ue=z.update(R),Ve=R.material;Ve.visible&&v.push(R,Ue,Ve,V,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Ue=z.update(R),Ve=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Xe.copy(Ue.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(Me)),Array.isArray(Ve)){const We=Ue.groups;for(let tt=0,Ye=We.length;tt<Ye;tt++){const Ke=We[tt],At=Ve[Ke.materialIndex];At&&At.visible&&v.push(R,Ue,At,V,Xe.z,Ke)}}else Ve.visible&&v.push(R,Ue,Ve,V,Xe.z,null)}}const be=R.children;for(let Ue=0,Ve=be.length;Ue<Ve;Ue++)Cn(be[Ue],N,V,G)}function Nh(R,N,V,G){const k=R.opaque,be=R.transmissive,Ue=R.transparent;g.setupLightsView(V),ie===!0&&ye.setGlobalState(_.clippingPlanes,V),be.length>0&&Bm(k,be,N,V),G&&j.viewport(E.copy(G)),k.length>0&&ia(k,N,V),be.length>0&&ia(be,N,V),Ue.length>0&&ia(Ue,N,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Bm(R,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const be=ce.isWebGL2;Ie===null&&(Ie=new Qt(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?In:ii,minFilter:Ci,samples:be?4:0})),_.getDrawingBufferSize(Le),be?Ie.setSize(Le.x,Le.y):Ie.setSize(mo(Le.x),mo(Le.y));const Ue=_.getRenderTarget();_.setRenderTarget(Ie),_.getClearColor(oe),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ve=_.toneMapping;_.toneMapping=ni,ia(R,V,G),C.updateMultisampleRenderTarget(Ie),C.updateRenderTargetMipmap(Ie);let We=!1;for(let tt=0,Ye=N.length;tt<Ye;tt++){const Ke=N[tt],At=Ke.object,hn=Ke.geometry,Ot=Ke.material,Gn=Ke.group;if(Ot.side===Pn&&At.layers.test(G.layers)){const xt=Ot.side;Ot.side=qt,Ot.needsUpdate=!0,Oh(At,V,G,hn,Ot,Gn),Ot.side=xt,Ot.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(Ie),C.updateRenderTargetMipmap(Ie)),_.setRenderTarget(Ue),_.setClearColor(oe,I),_.toneMapping=Ve}function ia(R,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,be=R.length;k<be;k++){const Ue=R[k],Ve=Ue.object,We=Ue.geometry,tt=G===null?Ue.material:G,Ye=Ue.group;Ve.layers.test(V.layers)&&Oh(Ve,N,V,We,tt,Ye)}}function Oh(R,N,V,G,k,be){R.onBeforeRender(_,N,V,G,k,be),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(_,N,V,G,R,be),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=qt,k.needsUpdate=!0,_.renderBufferDirect(V,N,G,k,R,be),k.side=On,k.needsUpdate=!0,_.renderBufferDirect(V,N,G,k,R,be),k.side=Pn):_.renderBufferDirect(V,N,G,k,R,be),R.onAfterRender(_,N,V,G,k,be)}function sa(R,N,V){N.isScene!==!0&&(N=Ee);const G=me.get(R),k=g.state.lights,be=g.state.shadowsArray,Ue=k.state.version,Ve=le.getParameters(R,k.state,be,N,V),We=le.getProgramCacheKey(Ve);let tt=G.programs;G.environment=R.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(R.isMeshStandardMaterial?O:T).get(R.envMap||G.environment),tt===void 0&&(R.addEventListener("dispose",pe),tt=new Map,G.programs=tt);let Ye=tt.get(We);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Ue)return Bh(R,Ve),Ye}else Ve.uniforms=le.getUniforms(R),R.onBuild(V,Ve,_),R.onBeforeCompile(Ve,_),Ye=le.acquireProgram(Ve,We),tt.set(We,Ye),G.uniforms=Ve.uniforms;const Ke=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=ye.uniform),Bh(R,Ve),G.needsLights=Vm(R),G.lightsStateVersion=Ue,G.needsLights&&(Ke.ambientLightColor.value=k.state.ambient,Ke.lightProbe.value=k.state.probe,Ke.directionalLights.value=k.state.directional,Ke.directionalLightShadows.value=k.state.directionalShadow,Ke.spotLights.value=k.state.spot,Ke.spotLightShadows.value=k.state.spotShadow,Ke.rectAreaLights.value=k.state.rectArea,Ke.ltc_1.value=k.state.rectAreaLTC1,Ke.ltc_2.value=k.state.rectAreaLTC2,Ke.pointLights.value=k.state.point,Ke.pointLightShadows.value=k.state.pointShadow,Ke.hemisphereLights.value=k.state.hemi,Ke.directionalShadowMap.value=k.state.directionalShadowMap,Ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ke.spotShadowMap.value=k.state.spotShadowMap,Ke.spotLightMatrix.value=k.state.spotLightMatrix,Ke.spotLightMap.value=k.state.spotLightMap,Ke.pointShadowMap.value=k.state.pointShadowMap,Ke.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ye,G.uniformsList=null,Ye}function Fh(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=ao.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function Bh(R,N){const V=me.get(R);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function zm(R,N,V,G,k){N.isScene!==!0&&(N=Ee),C.resetTextureUnits();const be=N.fog,Ue=G.isMeshStandardMaterial?N.environment:null,Ve=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Fn,We=(G.isMeshStandardMaterial?O:T).get(G.envMap||Ue),tt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ye=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ke=!!V.morphAttributes.position,At=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color;let Ot=ni;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=_.toneMapping);const Gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=Gn!==void 0?Gn.length:0,nt=me.get(G),Ko=g.state.lights;if(ie===!0&&(_e===!0||R!==w)){const gn=R===w&&G.id===A;ye.setState(G,R,gn)}let St=!1;G.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ko.state.version||nt.outputColorSpace!==Ve||k.isBatchedMesh&&nt.batching===!1||!k.isBatchedMesh&&nt.batching===!0||k.isInstancedMesh&&nt.instancing===!1||!k.isInstancedMesh&&nt.instancing===!0||k.isSkinnedMesh&&nt.skinning===!1||!k.isSkinnedMesh&&nt.skinning===!0||k.isInstancedMesh&&nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&nt.instancingColor===!1&&k.instanceColor!==null||nt.envMap!==We||G.fog===!0&&nt.fog!==be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ye.numPlanes||nt.numIntersection!==ye.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==Ye||nt.morphTargets!==Ke||nt.morphNormals!==At||nt.morphColors!==hn||nt.toneMapping!==Ot||ce.isWebGL2===!0&&nt.morphTargetsCount!==xt)&&(St=!0):(St=!0,nt.__version=G.version);let Ui=nt.currentProgram;St===!0&&(Ui=sa(G,N,k));let zh=!1,Qs=!1,jo=!1;const kt=Ui.getUniforms(),Ni=nt.uniforms;if(j.useProgram(Ui.program)&&(zh=!0,Qs=!0,jo=!0),G.id!==A&&(A=G.id,Qs=!0),zh||w!==R){kt.setValue(L,"projectionMatrix",R.projectionMatrix),kt.setValue(L,"viewMatrix",R.matrixWorldInverse);const gn=kt.map.cameraPosition;gn!==void 0&&gn.setValue(L,Xe.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&kt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Qs=!0,jo=!0)}if(k.isSkinnedMesh){kt.setOptional(L,k,"bindMatrix"),kt.setOptional(L,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(ce.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),kt.setValue(L,"boneTexture",gn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(kt.setOptional(L,k,"batchingTexture"),kt.setValue(L,"batchingTexture",k._matricesTexture,C));const Qo=V.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0&&ce.isWebGL2===!0)&&Qe.update(k,V,Ui),(Qs||nt.receiveShadow!==k.receiveShadow)&&(nt.receiveShadow=k.receiveShadow,kt.setValue(L,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ni.envMap.value=We,Ni.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Qs&&(kt.setValue(L,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&km(Ni,jo),be&&G.fog===!0&&ne.refreshFogUniforms(Ni,be),ne.refreshMaterialUniforms(Ni,G,te,H,Ie),ao.upload(L,Fh(nt),Ni,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ao.upload(L,Fh(nt),Ni,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&kt.setValue(L,"center",k.center),kt.setValue(L,"modelViewMatrix",k.modelViewMatrix),kt.setValue(L,"normalMatrix",k.normalMatrix),kt.setValue(L,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const gn=G.uniformsGroups;for(let el=0,Hm=gn.length;el<Hm;el++)if(ce.isWebGL2){const kh=gn[el];st.update(kh,Ui),st.bind(kh,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function km(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function Vm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,N,V){me.get(R.texture).__webglTexture=N,me.get(R.depthTexture).__webglTexture=V;const G=me.get(R);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,N){const V=me.get(R);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,V=0){b=R,S=N,M=V;let G=!0,k=null,be=!1,Ue=!1;if(R){const We=me.get(R);We.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(R):We.__hasExternalTextures&&C.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ue=!0);const Ye=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?k=Ye[N][V]:k=Ye[N],be=!0):ce.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?k=me.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[V]:k=Ye,E.copy(R.viewport),U.copy(R.scissor),q=R.scissorTest}else E.copy(se).multiplyScalar(te).floor(),U.copy(re).multiplyScalar(te).floor(),q=ge;if(j.bindFramebuffer(L.FRAMEBUFFER,k)&&ce.drawBuffers&&G&&j.drawBuffers(R,k),j.viewport(E),j.scissor(U),j.setScissorTest(q),be){const We=me.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,We.__webglTexture,V)}else if(Ue){const We=me.get(R.texture),tt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,V||0,tt)}A=-1},this.readRenderTargetPixels=function(R,N,V,G,k,be,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){j.bindFramebuffer(L.FRAMEBUFFER,Ve);try{const We=R.texture,tt=We.format,Ye=We.type;if(tt!==on&&Ae.convert(tt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===In&&(J.has("EXT_color_buffer_half_float")||ce.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ye!==ii&&Ae.convert(Ye)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Sn&&(ce.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-G&&V>=0&&V<=R.height-k&&L.readPixels(N,V,G,k,Ae.convert(tt),Ae.convert(Ye),be)}finally{const We=b!==null?me.get(b).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(R,N,V=0){const G=Math.pow(2,-V),k=Math.floor(N.image.width*G),be=Math.floor(N.image.height*G);C.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,R.x,R.y,k,be),j.unbindTexture()},this.copyTextureToTexture=function(R,N,V,G=0){const k=N.image.width,be=N.image.height,Ue=Ae.convert(V.format),Ve=Ae.convert(V.type);C.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,R.x,R.y,k,be,Ue,Ve,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,R.x,R.y,N.mipmaps[0].width,N.mipmaps[0].height,Ue,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,G,R.x,R.y,Ue,Ve,N.image),G===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(R,N,V,G,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Ve=R.max.z-R.min.z+1,We=Ae.convert(G.format),tt=Ae.convert(G.type);let Ye;if(G.isData3DTexture)C.setTexture3D(G,0),Ye=L.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)C.setTexture2DArray(G,0),Ye=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const Ke=L.getParameter(L.UNPACK_ROW_LENGTH),At=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ot=L.getParameter(L.UNPACK_SKIP_ROWS),Gn=L.getParameter(L.UNPACK_SKIP_IMAGES),xt=V.isCompressedTexture?V.mipmaps[k]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,R.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,R.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,R.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(Ye,k,N.x,N.y,N.z,be,Ue,Ve,We,tt,xt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ye,k,N.x,N.y,N.z,be,Ue,Ve,We,xt.data)):L.texSubImage3D(Ye,k,N.x,N.y,N.z,be,Ue,Ve,We,tt,xt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),k===0&&G.generateMipmaps&&L.generateMipmap(Ye),j.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){S=0,M=0,b=null,j.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bo?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Si:Qc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Si?Tt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cp extends hh{}Cp.prototype.isWebGL1Renderer=!0;class Ao{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Co{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ro extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Po{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new P;class ss{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uh extends Yt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const sr=new P,Es=new P,As=new P,Cs=new Z,rr=new Z,Rp=new Fe,Aa=new P,ar=new P,Ca=new P,Tu=new Z,wl=new Z,Eu=new Z;class Pp extends ot{constructor(e=new uh){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Po(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new ss(n,3,0,!1)),Ts.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ra(Aa.set(-.5,-.5,0),As,a,Es,i,s),Ra(ar.set(.5,-.5,0),As,a,Es,i,s),Ra(Ca.set(.5,.5,0),As,a,Es,i,s),Tu.set(0,0),wl.set(1,0),Eu.set(1,1);let o=e.ray.intersectTriangle(Aa,ar,Ca,!1,sr);if(o===null&&(Ra(ar.set(-.5,.5,0),As,a,Es,i,s),wl.set(0,1),o=e.ray.intersectTriangle(Aa,Ca,ar,!1,sr),o===null))return;const l=e.ray.origin.distanceTo(sr);l<e.near||l>e.far||t.push({distance:l,point:sr.clone(),uv:an.getInterpolation(sr,Aa,ar,Ca,Tu,wl,Eu,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ra(r,e,t,n,i,s){Cs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(rr.x=s*Cs.x-i*Cs.y,rr.y=i*Cs.x+s*Cs.y):rr.copy(Cs),r.copy(e),r.x+=rr.x,r.y+=rr.y,r.applyMatrix4(Rp)}const Pa=new P,Au=new P;class Lp extends ot{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Pa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Pa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Pa.setFromMatrixPosition(e.matrixWorld),Au.setFromMatrixPosition(this.matrixWorld);const n=Pa.distanceTo(Au)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Cu=new P,Ru=new ct,Pu=new ct,eM=new P,Lu=new Fe,La=new P,Tl=new $t,Iu=new Fe,El=new $s;class Ip extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(Iu.copy(i).invert(),El.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ru.fromBufferAttribute(i.attributes.skinIndex,e),Pu.fromBufferAttribute(i.attributes.skinWeight,e),Cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Pu.getComponent(s);if(a!==0){const o=Ru.getComponent(s);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(eM.copy(Cu).applyMatrix4(Lu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class fh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Rt,h=Rt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new Fe,tM=new Fe;class Lo{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:tM;Du.multiplyMatrices(o,t[s]),Du.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ns(t,e,e,on,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fh),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ws extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new Fe,Uu=new Fe,Ia=[],Nu=new tn,nM=new Fe,or=new rt,lr=new $t;class dh extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Nu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Nu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),lr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Rs),Uu.multiplyMatrices(n,Rs),or.matrixWorld=Uu,or.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){const l=Ia[a];l.instanceId=s,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function iM(r,e){return r.z-e.z}function sM(r,e){return e.z-r.z}class rM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ps="batchId",gi=new Fe,Ou=new Fe,aM=new Fe,Fu=new Fe,Al=new Kr,Da=new tn,ki=new $t,cr=new P,Cl=new rM,Gt=new rt,Ua=[];function oM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class Dp extends rt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ns(t,e,e,on,Sn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:h,normalized:u}=l,f=new c.constructor(n*h),d=new l.constructor(f,h,u);d.setUsage(l.usage),t.setAttribute(o,d)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ht(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ps,new ht(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ps))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ps}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Ps)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,gi),this.getBoundingBoxAt(i,Da).applyMatrix4(gi),t.union(Da))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,gi),this.getBoundingSphereAt(i,ki).applyMatrix4(gi),t.union(ki))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._visibility,f=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;u.push(!0),f.push(!0);const v=this._geometryCount;this._geometryCount++,aM.toArray(p,v*16),d.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new tn,sphereInitialized:!1,sphere:new $t});const g=this.geometry.getAttribute(Ps);for(let m=0;m<i.vertexCount;m++)g.setX(i.vertexStart+m,v);return g.needsUpdate=!0,this.setGeometryAt(v,e),v}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){if(d===Ps)continue;const p=t.getAttribute(d),v=n.getAttribute(d);oM(p,v,l);const g=p.itemSize;for(let m=p.count,x=c;m<x;m++){const _=l+m;for(let y=0;y<g;y++)v.setComponent(_,y,0)}v.needsUpdate=!0}if(i){const d=o.indexStart;for(let p=0;p<a.count;p++)s.setX(d+p,l+a.getX(p));for(let p=a.count,v=o.indexCount;p<v;p++)s.setX(d+p,l);s.needsUpdate=!0}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?a.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.box,a=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let h=c.start,u=c.start+c.count;h<u;h++){let f=h;o&&(f=o.getX(f)),s.expandByPoint(cr.fromBufferAttribute(l,f))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Da),Da.getCenter(s.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[e];let h=0;for(let u=c.start,f=c.start+c.count;u<f;u++){let d=u;o&&(d=o.getX(d)),cr.fromBufferAttribute(l,d),h=Math.max(h,s.center.distanceToSquared(cr))}s.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Gt.material=this.material,Gt.geometry.index=l.index,Gt.geometry.attributes=l.attributes,Gt.geometry.boundingBox===null&&(Gt.geometry.boundingBox=new tn),Gt.geometry.boundingSphere===null&&(Gt.geometry.boundingSphere=new $t);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;const h=s[c];Gt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,Gt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Gt.geometry.boundingBox),this.getBoundingSphereAt(c,Gt.geometry.boundingSphere),Gt.raycast(e,Ua);for(let u=0,f=Ua.length;u<f;u++){const d=Ua[u];d.object=this,d.batchId=c,t.push(d)}Ua.length=0}Gt.material=null,Gt.geometry.index=null,Gt.geometry.attributes={},Gt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._visibility,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Al.setFromProjectionMatrix(Fu,e.isWebGPURenderer?ks:wn));let d=0;if(this.sortObjects){Ou.copy(this.matrixWorld).invert(),cr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ou);for(let g=0,m=l.length;g<m;g++)if(l[g]){this.getMatrixAt(g,gi),this.getBoundingSphereAt(g,ki).applyMatrix4(gi);let x=!1;if(f&&(x=!Al.intersectsSphere(ki)),!x){const _=cr.distanceTo(ki.center);Cl.push(u[g],_)}}const p=Cl.list,v=this.customSort;v===null?p.sort(s.transparent?sM:iM):v.call(this,p,n);for(let g=0,m=p.length;g<m;g++){const x=p[g];c[d]=x.start*o,h[d]=x.count,d++}Cl.reset()}else for(let p=0,v=l.length;p<v;p++)if(l[p]){let g=!1;if(f&&(this.getMatrixAt(p,gi),this.getBoundingSphereAt(p,ki).applyMatrix4(gi),g=!Al.intersectsSphere(ki)),!g){const m=u[p];c[d]=m.start*o,h[d]=m.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class sn extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new P,zu=new P,ku=new Fe,Rl=new $s,Na=new $t;class Ri extends ot{constructor(e=new Je,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bu.fromBufferAttribute(t,i-1),zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;ku.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,f=new P,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let _=m,y=x-1;_<y;_+=d){const S=p.getX(_),M=p.getX(_+1);if(c.fromBufferAttribute(g,S),h.fromBufferAttribute(g,M),Rl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let _=m,y=x-1;_<y;_+=d){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),Rl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Vu=new P,Hu=new P;class Hn extends Ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vu.fromBufferAttribute(t,i),Hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vu.distanceTo(Hu);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends Ri{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ph extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new Fe,Cc=new $s,Oa=new $t,Fa=new P;class Np extends ot{constructor(e=new Je,t=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;Gu.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,v=d;p<v;p++){const g=c.getX(p);Fa.fromBufferAttribute(u,g),Wu(Fa,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,v=d;p<v;p++)Fa.fromBufferAttribute(u,p),Wu(Fa,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wu(r,e,t,n,i,s,a){const o=Cc.distanceSqToPoint(r);if(o<t){const l=new P;Cc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class lM extends Lt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Pt,this.magFilter=s!==void 0?s:Pt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class cM extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Rt,this.minFilter=Rt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Io extends Lt{constructor(e,t,n,i,s,a,o,l,c,h,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class hM extends Io{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Wt}}class uM extends Io{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,si),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class oo extends Lt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Z:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],a=[],o=new P,l=new Fe;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Et(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Et(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Do extends En{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Op extends Do{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Ba=new P,Pl=new mh,Ll=new mh,Il=new mh;class Fp extends En{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Pl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,g),Ll.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,g),Il.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Il.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Pl.calc(l),Ll.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function fM(r,e){const t=1-r;return t*t*e}function dM(r,e){return 2*(1-r)*r*e}function pM(r,e){return r*r*e}function _r(r,e,t,n){return fM(r,e)+dM(r,t)+pM(r,n)}function mM(r,e){const t=1-r;return t*t*t*e}function gM(r,e){const t=1-r;return 3*t*t*r*e}function _M(r,e){return 3*(1-r)*r*r*e}function vM(r,e){return r*r*r*e}function vr(r,e,t,n,i){return mM(r,e)+gM(r,t)+_M(r,n)+vM(r,i)}class gh extends En{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,i.x,s.x,a.x,o.x),vr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bp extends En{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,i.x,s.x,a.x,o.x),vr(e,i.y,s.y,a.y,o.y),vr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _h extends En{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends En{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends En{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(_r(e,i.x,s.x,a.x),_r(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends En{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(_r(e,i.x,s.x,a.x),_r(e,i.y,s.y,a.y),_r(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Xu(o,l.x,c.x,h.x,u.x),Xu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var _o=Object.freeze({__proto__:null,ArcCurve:Op,CatmullRomCurve3:Fp,CubicBezierCurve:gh,CubicBezierCurve3:Bp,EllipseCurve:Do,LineCurve:_h,LineCurve3:zp,QuadraticBezierCurve:vh,QuadraticBezierCurve3:xh,SplineCurve:yh});class kp extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _o[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _o[i.type]().fromJSON(i))}return this}}class Ir extends kp{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _h(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new vh(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new gh(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Do(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qr extends Je{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Et(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,f=new Z,d=new P,p=new P,v=new P;let g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let x=0;x<=t;x++){const _=n+x*h*i,y=Math.sin(_),S=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*S,a.push(u.x,u.y,u.z),f.x=x/t,f.y=M/(e.length-1),o.push(f.x,f.y);const b=l[3*M+0]*y,A=l[3*M+1],w=l[3*M+0]*S;c.push(b,A,w)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const y=_+x*e.length,S=y,M=y+e.length,b=y+e.length+1,A=y+1;s.push(S,M,A),s.push(b,A,M)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.points,e.segments,e.phiStart,e.phiLength)}}class Uo extends Qr{constructor(e=1,t=1,n=4,i=8){const s=new Ir;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Uo(e.radius,e.length,e.capSegments,e.radialSegments)}}class No extends Je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new P,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Js extends Je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const v=[],g=n/2;let m=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){const y=new P,S=new P;let M=0;const b=(t-e)/n;for(let A=0;A<=s;A++){const w=[],E=A/s,U=E*(t-e)+e;for(let q=0;q<=i;q++){const oe=q/i,I=oe*l+o,F=Math.sin(I),H=Math.cos(I);S.x=U*F,S.y=-E*n+g,S.z=U*H,u.push(S.x,S.y,S.z),y.set(F,b,H).normalize(),f.push(y.x,y.y,y.z),d.push(oe,1-E),w.push(p++)}v.push(w)}for(let A=0;A<i;A++)for(let w=0;w<s;w++){const E=v[w][A],U=v[w+1][A],q=v[w+1][A+1],oe=v[w][A+1];h.push(E,U,oe),h.push(U,q,oe),M+=6}c.addGroup(m,M,0),m+=M}function _(y){const S=p,M=new Z,b=new P;let A=0;const w=y===!0?e:t,E=y===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),p++;const U=p;for(let q=0;q<=i;q++){const I=q/i*l+o,F=Math.cos(I),H=Math.sin(I);b.x=w*H,b.y=g*E,b.z=w*F,u.push(b.x,b.y,b.z),f.push(0,E,0),M.x=F*.5+.5,M.y=H*.5*E+.5,d.push(M.x,M.y),p++}for(let q=0;q<i;q++){const oe=S+q,I=U+q;y===!0?h.push(I,I+1,oe):h.push(I+1,I,oe),A+=3}c.addGroup(m,A,y===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends Js{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new P,y=new P,S=new P;for(let M=0;M<t.length;M+=3)d(t[M+0],_),d(t[M+1],y),d(t[M+2],S),l(_,y,S,x)}function l(x,_,y,S){const M=S+1,b=[];for(let A=0;A<=M;A++){b[A]=[];const w=x.clone().lerp(y,A/M),E=_.clone().lerp(y,A/M),U=M-A;for(let q=0;q<=U;q++)q===0&&A===M?b[A][q]=w:b[A][q]=w.clone().lerp(E,q/U)}for(let A=0;A<M;A++)for(let w=0;w<2*(M-A)-1;w++){const E=Math.floor(w/2);w%2===0?(f(b[A][E+1]),f(b[A+1][E]),f(b[A][E])):(f(b[A][E+1]),f(b[A+1][E+1]),f(b[A+1][E]))}}function c(x){const _=new P;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const x=new P;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=g(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;a.push(y,1-S)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){const _=a[x+0],y=a[x+2],S=a[x+4],M=Math.max(_,y,S),b=Math.min(_,y,S);M>.9&&b<.1&&(_<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,_){const y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function p(){const x=new P,_=new P,y=new P,S=new P,M=new Z,b=new Z,A=new Z;for(let w=0,E=0;w<s.length;w+=9,E+=6){x.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),M.set(a[E+0],a[E+1]),b.set(a[E+2],a[E+3]),A.set(a[E+4],a[E+5]),S.copy(x).add(_).add(y).divideScalar(3);const U=g(S);v(M,E+0,x,U),v(b,E+2,_,U),v(A,E+4,y,U)}}function v(x,_,y,S){S<0&&x.x===1&&(a[_]=x.x-1),y.x===0&&y.z===0&&(a[_]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.vertices,e.indices,e.radius,e.details)}}class Fo extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fo(e.radius,e.detail)}}const za=new P,ka=new P,Dl=new P,Va=new an;class Vp extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ts*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=Va;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Va.getNormal(Dl),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=u[x],S=u[_],M=Va[h[x]],b=Va[h[_]],A=`${y}_${S}`,w=`${S}_${y}`;w in f&&f[w]?(Dl.dot(f[w].normal)<=s&&(d.push(M.x,M.y,M.z),d.push(b.x,b.y,b.z)),f[w]=null):A in f||(f[A]={index0:c[x],index1:c[_],normal:Dl.clone()})}}for(const p in f)if(f[p]){const{index0:v,index1:g}=f[p];za.fromBufferAttribute(o,v),ka.fromBufferAttribute(o,g),d.push(za.x,za.y,za.z),d.push(ka.x,ka.y,ka.z)}this.setAttribute("position",new Te(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wi extends Ir{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ir().fromJSON(i))}return this}}const xM={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Hp(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,d;if(n&&(s=wM(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let p=t;p<i;p+=t)u=r[p],f=r[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Dr(s,a,t,o,l,d,0),a}};function Hp(r,e,t,n,i){let s,a;if(i===NM(r,e,t,n)>0)for(s=e;s<t;s+=n)a=qu(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=qu(s,r[s],r[s+1],a);return a&&Bo(a,a.next)&&(Nr(a),a=a.next),a}function rs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||yt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Dr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&RM(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?MM(r,n,i,s):yM(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Nr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=bM(rs(r),e,t),Dr(r,e,t,n,i,s,2)):a===2&&SM(r,e,t,n,i,s):Dr(rs(r),e,t,n,i,s,1);break}}}function yM(r){const e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ns(i,o,s,l,a,c,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function MM(r,e,t,n){const i=r.prev,s=r,a=r.next;if(yt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=Rc(d,p,e,t,n),x=Rc(v,g,e,t,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=m&&y&&y.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Ns(o,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Ns(o,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bM(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Bo(i,s)&&Gp(i,n,n.next,s)&&Ur(i,s)&&Ur(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Nr(n),Nr(n.next),n=r=s),n=n.next}while(n!==r);return rs(n)}function SM(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&IM(a,o)){let l=Wp(a,o);a=rs(a,a.next),l=rs(l,l.next),Dr(a,e,t,n,i,s,0),Dr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function wM(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Hp(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(LM(c));for(i.sort(TM),s=0;s<i.length;s++)t=EM(i[s],t);return t}function TM(r,e){return r.x-e.x}function EM(r,e){const t=AM(r,e);if(!t)return e;const n=Wp(t,r);return rs(n,n.next),rs(t,t.next)}function AM(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Ns(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Ur(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&CM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function CM(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function RM(r,e,t,n){let i=r;do i.z===0&&(i.z=Rc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,PM(i)}function PM(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Rc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function LM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ns(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function IM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!DM(r,e)&&(Ur(r,e)&&Ur(e,r)&&UM(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Bo(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Bo(r,e){return r.x===e.x&&r.y===e.y}function Gp(r,e,t,n){const i=Ga(yt(r,e,t)),s=Ga(yt(r,e,n)),a=Ga(yt(t,n,r)),o=Ga(yt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ha(r,t,e)||s===0&&Ha(r,n,e)||a===0&&Ha(t,r,n)||o===0&&Ha(t,e,n))}function Ha(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ga(r){return r>0?1:r<0?-1:0}function DM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Gp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ur(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function UM(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Wp(r,e){const t=new Pc(r.i,r.x,r.y),n=new Pc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qu(r,e,t,n){const i=new Pc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Nr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Pc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NM(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Dn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Dn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];$u(e),Yu(n,e);let a=e.length;t.forEach($u);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Yu(n,t[l]);const o=xM.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function $u(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Yu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Kn extends Je{constructor(e=new wi([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Te(i,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:OM;let _,y=!1,S,M,b,A;m&&(_=m.getSpacedPoints(h),y=!0,f=!1,S=m.computeFrenetFrames(h,!1),M=new P,b=new P,A=new P),f||(g=0,d=0,p=0,v=0);const w=o.extractPoints(c);let E=w.shape;const U=w.holes;if(!Dn.isClockWise(E)){E=E.reverse();for(let L=0,he=U.length;L<he;L++){const J=U[L];Dn.isClockWise(J)&&(U[L]=J.reverse())}}const oe=Dn.triangulateShape(E,U),I=E;for(let L=0,he=U.length;L<he;L++){const J=U[L];E=E.concat(J)}function F(L,he,J){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(he,J)}const H=E.length,te=oe.length;function ee(L,he,J){let ce,j,De;const me=L.x-he.x,C=L.y-he.y,T=J.x-L.x,O=J.y-L.y,ae=me*me+C*C,B=me*O-C*T;if(Math.abs(B)>Number.EPSILON){const z=Math.sqrt(ae),le=Math.sqrt(T*T+O*O),ne=he.x-C/z,Y=he.y+me/z,ve=J.x-O/le,ye=J.y+T/le,$=((ve-ne)*O-(ye-Y)*T)/(me*O-C*T);ce=ne+me*$-L.x,j=Y+C*$-L.y;const it=ce*ce+j*j;if(it<=2)return new Z(ce,j);De=Math.sqrt(it/2)}else{let z=!1;me>Number.EPSILON?T>Number.EPSILON&&(z=!0):me<-Number.EPSILON?T<-Number.EPSILON&&(z=!0):Math.sign(C)===Math.sign(O)&&(z=!0),z?(ce=-C,j=me,De=Math.sqrt(ae)):(ce=me,j=C,De=Math.sqrt(ae/2))}return new Z(ce/De,j/De)}const K=[];for(let L=0,he=I.length,J=he-1,ce=L+1;L<he;L++,J++,ce++)J===he&&(J=0),ce===he&&(ce=0),K[L]=ee(I[L],I[J],I[ce]);const se=[];let re,ge=K.concat();for(let L=0,he=U.length;L<he;L++){const J=U[L];re=[];for(let ce=0,j=J.length,De=j-1,me=ce+1;ce<j;ce++,De++,me++)De===j&&(De=0),me===j&&(me=0),re[ce]=ee(J[ce],J[De],J[me]);se.push(re),ge=ge.concat(re)}for(let L=0;L<g;L++){const he=L/g,J=d*Math.cos(he*Math.PI/2),ce=p*Math.sin(he*Math.PI/2)+v;for(let j=0,De=I.length;j<De;j++){const me=F(I[j],K[j],ce);Me(me.x,me.y,-J)}for(let j=0,De=U.length;j<De;j++){const me=U[j];re=se[j];for(let C=0,T=me.length;C<T;C++){const O=F(me[C],re[C],ce);Me(O.x,O.y,-J)}}}const W=p+v;for(let L=0;L<H;L++){const he=f?F(E[L],ge[L],W):E[L];y?(b.copy(S.normals[0]).multiplyScalar(he.x),M.copy(S.binormals[0]).multiplyScalar(he.y),A.copy(_[0]).add(b).add(M),Me(A.x,A.y,A.z)):Me(he.x,he.y,0)}for(let L=1;L<=h;L++)for(let he=0;he<H;he++){const J=f?F(E[he],ge[he],W):E[he];y?(b.copy(S.normals[L]).multiplyScalar(J.x),M.copy(S.binormals[L]).multiplyScalar(J.y),A.copy(_[L]).add(b).add(M),Me(A.x,A.y,A.z)):Me(J.x,J.y,u/h*L)}for(let L=g-1;L>=0;L--){const he=L/g,J=d*Math.cos(he*Math.PI/2),ce=p*Math.sin(he*Math.PI/2)+v;for(let j=0,De=I.length;j<De;j++){const me=F(I[j],K[j],ce);Me(me.x,me.y,u+J)}for(let j=0,De=U.length;j<De;j++){const me=U[j];re=se[j];for(let C=0,T=me.length;C<T;C++){const O=F(me[C],re[C],ce);y?Me(O.x,O.y+_[h-1].y,_[h-1].x+J):Me(O.x,O.y,u+J)}}}ie(),_e();function ie(){const L=i.length/3;if(f){let he=0,J=H*he;for(let ce=0;ce<te;ce++){const j=oe[ce];Le(j[2]+J,j[1]+J,j[0]+J)}he=h+g*2,J=H*he;for(let ce=0;ce<te;ce++){const j=oe[ce];Le(j[0]+J,j[1]+J,j[2]+J)}}else{for(let he=0;he<te;he++){const J=oe[he];Le(J[2],J[1],J[0])}for(let he=0;he<te;he++){const J=oe[he];Le(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}n.addGroup(L,i.length/3-L,0)}function _e(){const L=i.length/3;let he=0;Ie(I,he),he+=I.length;for(let J=0,ce=U.length;J<ce;J++){const j=U[J];Ie(j,he),he+=j.length}n.addGroup(L,i.length/3-L,1)}function Ie(L,he){let J=L.length;for(;--J>=0;){const ce=J;let j=J-1;j<0&&(j=L.length-1);for(let De=0,me=h+g*2;De<me;De++){const C=H*De,T=H*(De+1),O=he+ce+C,ae=he+j+C,B=he+j+T,z=he+ce+T;Xe(O,ae,B,z)}}}function Me(L,he,J){l.push(L),l.push(he),l.push(J)}function Le(L,he,J){Ee(L),Ee(he),Ee(J);const ce=i.length/3,j=x.generateTopUV(n,i,ce-3,ce-2,ce-1);ke(j[0]),ke(j[1]),ke(j[2])}function Xe(L,he,J,ce){Ee(L),Ee(he),Ee(ce),Ee(he),Ee(J),Ee(ce);const j=i.length/3,De=x.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);ke(De[0]),ke(De[1]),ke(De[3]),ke(De[1]),ke(De[2]),ke(De[3])}function Ee(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function ke(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return FM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _o[i.type]().fromJSON(i)),new Kn(n,e.options)}}const OM={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Z(s,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],v=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(f,1-p),new Z(v,1-m)]:[new Z(o,1-l),new Z(h,1-u),new Z(d,1-p),new Z(g,1-m)]}};function FM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zo extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zo(e.radius,e.detail)}}class ea extends Ii{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ea(e.radius,e.detail)}}class ko extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new P,p=new Z;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=s+g/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const x=m+g,_=x,y=x+n+1,S=x+n+2,M=x+1;o.push(_,y,M),o.push(y,S,M)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vo extends Je{constructor(e=new wi([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(i,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];Dn.isClockWise(x)===!0&&(p[g]=x.reverse())}const v=Dn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];d=d.concat(x)}for(let g=0,m=d.length;g<m;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,m=v.length;g<m;g++){const x=v[g],_=x[0]+u,y=x[1]+u,S=x[2]+u;n.push(_,y,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return BM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Vo(n,e.curveSegments)}}function BM(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ta extends Je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const M=S/t;u.x=-e*Math.cos(i+M*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+M*s)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(M+y,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const _=h[m][x+1],y=h[m][x],S=h[m+1][x],M=h[m+1][x+1];(m!==0||a>0)&&d.push(_,y,M),(m!==n-1||l<Math.PI)&&d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ho extends Ii{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}class Go extends Je{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const v=p/i*s,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const v=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,x=(i+1)*d+p;a.push(v,g,x),a.push(g,m,x)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wo extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new P,f=new P,d=new P,p=new P,v=new P,g=new P,m=new P;for(let _=0;_<=n;++_){const y=_/n*s*Math.PI*2;x(y,s,a,e,d),x(y+.01,s,a,e,p),g.subVectors(p,d),m.addVectors(p,d),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let S=0;S<=i;++S){const M=S/i*Math.PI*2,b=-t*Math.cos(M),A=t*Math.sin(M);u.x=d.x+(b*m.x+A*v.x),u.y=d.y+(b*m.y+A*v.y),u.z=d.z+(b*m.z+A*v.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(_/n),h.push(S/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){const S=(i+1)*(_-1)+(y-1),M=(i+1)*_+(y-1),b=(i+1)*_+y,A=(i+1)*(_-1)+y;o.push(S,M,A),o.push(M,b,A)}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function x(_,y,S,M,b){const A=Math.cos(_),w=Math.sin(_),E=S/y*_,U=Math.cos(E);b.x=M*(2+U)*.5*A,b.y=M*(2+U)*w*.5,b.z=M*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Xo extends Je{constructor(e=new xh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Z;let h=new P;const u=[],f=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function v(){for(let _=0;_<t;_++)g(_);g(s===!1?t:0),x(),m()}function g(_){h=e.getPointAt(_/t,h);const y=a.normals[_],S=a.binormals[_];for(let M=0;M<=i;M++){const b=M/i*Math.PI*2,A=Math.sin(b),w=-Math.cos(b);l.x=w*y.x+A*S.x,l.y=w*y.y+A*S.y,l.z=w*y.z+A*S.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){const S=(i+1)*(_-1)+(y-1),M=(i+1)*_+(y-1),b=(i+1)*_+y,A=(i+1)*(_-1)+y;p.push(S,M,A),p.push(M,b,A)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)c.x=_/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xo(new _o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Xp extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new P,s=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,v=f+d;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),x=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,x),Zu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Zu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Zu(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Ju=Object.freeze({__proto__:null,BoxGeometry:Li,CapsuleGeometry:Uo,CircleGeometry:No,ConeGeometry:Oo,CylinderGeometry:Js,DodecahedronGeometry:Fo,EdgesGeometry:Vp,ExtrudeGeometry:Kn,IcosahedronGeometry:zo,LatheGeometry:Qr,OctahedronGeometry:ea,PlaneGeometry:jr,PolyhedronGeometry:Ii,RingGeometry:ko,ShapeGeometry:Vo,SphereGeometry:ta,TetrahedronGeometry:Ho,TorusGeometry:Go,TorusKnotGeometry:Wo,TubeGeometry:Xo,WireframeGeometry:Xp});class qp extends Yt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Mh extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Or extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $p extends Or{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yp extends Yt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zp extends Yt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Jp extends Yt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Kp extends Yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jp extends Yt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qp extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Qi(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function em(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function tm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function bh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function zM(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){u.push(c.times[d]);for(let v=0;v<h;++v)f.push(c.values[d*h+v])}}u.length!==0&&(c.times=Qi(u,c.times.constructor),c.values=Qi(f,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function kM(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let v;if(s<=o.times[0]){const m=h,x=u-h;v=o.values.slice(m,x)}else if(s>=o.times[p]){const m=p*u+h,x=m+u-h;v=o.values.slice(m,x)}else{const m=o.createInterpolant(),x=h,_=u-h;m.evaluate(s),v=m.resultBuffer.slice(x,_)}l==="quaternion"&&new en().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const x=m*d+f;if(l==="quaternion")en.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{const _=d-f*2;for(let y=0;y<_;++y)c.values[x+y]-=v[y]}}}return r.blendMode=jc,r}const VM={convertArray:Qi,isTypedArray:em,getKeyframeOrder:tm,sortedArray:Lc,flattenJSON:bh,subclip:zM,makeClipAdditive:kM};class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nm extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zi,endingEnd:Zi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ji:s=e,o=2*t-n;break;case Er:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:a=e,l=2*n-t;break;case Er:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*v+.5*p,y=d*g-d*v;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+x*a[c+S]+_*a[l+S]+y*a[u+S];return s}}class Sh extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class im extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&em(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ro,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Tr;class os extends An{}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=wr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class wh extends An{}wh.prototype.ValueTypeName="color";class Fr extends An{}Fr.prototype.ValueTypeName="number";class sm extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ks extends An{InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=Tr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends An{}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=wr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends An{}Br.prototype.ValueTypeName="vector";class zr{constructor(e,t=-1,n,i=Mo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(GM(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(An.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=tm(l);l=Lc(l,1,h),c=Lc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Fr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,v){if(d.length!==0){const g=[],m=[];bh(d,g,m,p),g.length!==0&&v.push(new u(f,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let v=0;v<f[p].morphTargets.length;v++)d[f[p].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const _=f[p];g.push(_.time),m.push(_.morphTarget===v?1:0)}i.push(new Fr(".morphTargetInfluence["+v+"]",g,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Br,d+".position",f,"pos",i),n(Ks,d+".quaternion",f,"rot",i),n(Br,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function HM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fr;case"vector":case"vector2":case"vector3":case"vector4":return Br;case"color":return wh;case"quaternion":return Ks;case"bool":case"boolean":return os;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function GM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=HM(r.type);if(r.times===void 0){const t=[],n=[];bh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ti={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Th{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const rm=new Th;class cn{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class WM extends Error{constructor(e,t){super(e),this.response=t}}class ri extends cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ti.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let v=0;const g=new ReadableStream({start(m){x();function x(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{v+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let M=0,b=h.length;M<b;M++){const A=h[M];A.onProgress&&A.onProgress(S)}m.enqueue(y),x()}})}}});return new Response(g)}else throw new WM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ti.add(e,c);const h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XM extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=zr.parse(e[n]);t.push(i)}return t}}class qM extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new Io,l=new ri(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=s.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Pt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=s.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+v]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=Pt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class kr extends cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ti.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Lr("img");function l(){h(),ti.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class $M extends cn{constructor(e){super(e)}load(e,t,n,i){const s=new Jr;s.colorSpace=Tt;const a=new kr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class YM extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ns,o=new ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Wt,a.wrapT=c.wrapT!==void 0?c.wrapT:Wt,a.magFilter=c.magFilter!==void 0?c.magFilter:Pt,a.minFilter=c.minFilter!==void 0?c.minFilter:Pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ci),c.mipmapCount===1&&(a.minFilter=Pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class ZM extends cn{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new kr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Di extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class am extends Di{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ul=new Fe,Ku=new P,ju=new P;class Eh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JM extends Eh{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class om extends Di{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new JM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qu=new Fe,hr=new P,Nl=new P;class KM extends Eh{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Nl.copy(n.position),Nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nl),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}}class Ah extends Di{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jM extends Eh{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends Di{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new jM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cm extends Di{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm extends Di{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class um{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class fm extends Di{constructor(e=new um,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class qo extends cn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new ri(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=qo.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new xe().setHex(a.value);break;case"v2":i.uniforms[s].value=new Z().fromArray(a.value);break;case"v3":i.uniforms[s].value=new P().fromArray(a.value);break;case"v4":i.uniforms[s].value=new ct().fromArray(a.value);break;case"m3":i.uniforms[s].value=new et().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Fe().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new Z().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:qp,SpriteMaterial:uh,RawShaderMaterial:Mh,ShaderMaterial:Xt,PointsMaterial:ph,MeshPhysicalMaterial:$p,MeshStandardMaterial:Or,MeshPhongMaterial:Yp,MeshToonMaterial:Zp,MeshNormalMaterial:Jp,MeshLambertMaterial:Kp,MeshDepthMaterial:lh,MeshDistanceMaterial:ch,MeshBasicMaterial:Vn,MeshMatcapMaterial:jp,LineDashedMaterial:Qp,LineBasicMaterial:sn,Material:Yt};return new t[e]}}class Ic{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dm extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pm extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ri(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=s(d,g.buffer),x=Is(g.type,m),_=new Po(x,g.stride);return _.uuid=g.uuid,t[p]=_,_}function s(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new dm:new Je,o=e.data.index;if(o!==void 0){const d=Is(o.type,o.array);a.setIndex(new ht(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let v;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);v=new ss(g,p.itemSize,p.offset,p.normalized)}else{const g=Is(p.type,p.array),m=p.isInstancedBufferAttribute?Ws:ht;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],v=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let _;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);_=new ss(y,x.itemSize,x.offset,x.normalized)}else{const y=Is(x.type,x.array);_=new ht(y,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),v.push(_)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const v=u[d];a.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new P;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new $t(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class QM extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?Ic.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ic.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new ri(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new wi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Lo().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new pm;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Ju?o=Ju[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new qo;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=zr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Is(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Th(t);s=new kr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const g=f[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new ns(m.data,m.width,m.height)))}i[u.uuid]=new Ki(d)}else{const d=o(u.url);i[u.uuid]=new Ki(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Is(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new kr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await s(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ns(p.data,p.width,p.height)))}n[l.uuid]=new Ki(h)}else{const h=await s(l.url);n[l.uuid]=new Ki(h)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Jr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ns:h=new Lt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,eb)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],ef),h.wrapT=n(o.wrap[1],ef)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.encoding!==void 0&&(h.encoding=o.encoding),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,tf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,tf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":a=new Ro,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new xe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Co(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ao(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new zt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ys(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new cm(e.color,e.intensity);break;case"DirectionalLight":a=new lm(e.color,e.intensity);break;case"PointLight":a=new Ah(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new hm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new om(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new am(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new fm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Ip(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new rt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;a=new dh(h,u,f),a.instanceMatrix=new Ws(new Float32Array(d.array),16),p!==void 0&&(a.instanceColor=new Ws(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Dp(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const g=new tn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const m=new $t;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new Lp;break;case"Line":a=new Ri(o(e.geometry),l(e.material));break;case"LineLoop":a=new Up(o(e.geometry),l(e.material));break;case"LineSegments":a=new Hn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Np(o(e.geometry),l(e.material));break;case"Sprite":a=new Pp(l(e.material));break;case"Group":a=new ji;break;case"Bone":a=new fh;break;default:a=new ot}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const eb={UVMapping:xo,CubeReflectionMapping:si,CubeRefractionMapping:Ai,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,CubeUVReflectionMapping:qs},ef={RepeatWrapping:br,ClampToEdgeWrapping:Wt,MirroredRepeatWrapping:Sr},tf={NearestFilter:Rt,NearestMipmapNearestFilter:fo,NearestMipmapLinearFilter:pr,LinearFilter:Pt,LinearMipmapNearestFilter:Wc,LinearMipmapLinearFilter:Ci};class tb extends cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ti.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ti.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ti.add(e,l),s.manager.itemStart(e)}}let Wa;class Ch{static getContext(){return Wa===void 0&&(Wa=new(window.AudioContext||window.webkitAudioContext)),Wa}static setContext(e){Wa=e}}class nb extends cn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ri(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Ch.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),s.manager.itemError(e)}}}const nf=new Fe,sf=new Fe,Vi=new Fe;class ib{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new zt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new zt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Vi.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(ts*t.fov*.5)/t.zoom;let o,l;sf.elements[12]=-i,nf.elements[12]=i,o=-a*t.aspect+s,l=a*t.aspect+s,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Vi),o=-a*t.aspect-s,l=a*t.aspect-s,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Vi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(sf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(nf)}}class Rh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rf(){return(typeof performance>"u"?Date:performance).now()}const Hi=new P,af=new en,sb=new P,Gi=new P;class rb extends ot{constructor(){super(),this.type="AudioListener",this.context=Ch.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Rh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hi,af,sb),Gi.set(0,0,-1).applyQuaternion(af),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Hi.x,i),t.positionY.linearRampToValueAtTime(Hi.y,i),t.positionZ.linearRampToValueAtTime(Hi.z,i),t.forwardX.linearRampToValueAtTime(Gi.x,i),t.forwardY.linearRampToValueAtTime(Gi.y,i),t.forwardZ.linearRampToValueAtTime(Gi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Hi.x,Hi.y,Hi.z),t.setOrientation(Gi.x,Gi.y,Gi.z,n.x,n.y,n.z)}}class mm extends ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Wi=new P,of=new en,ab=new P,Xi=new P;class ob extends mm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Wi,of,ab),Xi.set(0,0,1).applyQuaternion(of);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Wi.x,n),t.positionY.linearRampToValueAtTime(Wi.y,n),t.positionZ.linearRampToValueAtTime(Wi.z,n),t.orientationX.linearRampToValueAtTime(Xi.x,n),t.orientationY.linearRampToValueAtTime(Xi.y,n),t.orientationZ.linearRampToValueAtTime(Xi.z,n)}else t.setPosition(Wi.x,Wi.y,Wi.z),t.setOrientation(Xi.x,Xi.y,Xi.z)}}class lb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class gm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;en.multiplyQuaternionsFlat(e,a,e,t,e,n),en.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ph="\\[\\]\\.:\\/",cb=new RegExp("["+Ph+"]","g"),Lh="[^"+Ph+"]",hb="[^"+Ph.replace("\\.","")+"]",ub=/((?:WC+[\/:])*)/.source.replace("WC",Lh),fb=/(WCOD+)?/.source.replace("WCOD",hb),db=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),mb=new RegExp("^"+ub+fb+db+pb+"$"),gb=["material","materials","bones","map"];class _b{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cb,"")}static parseTrackName(e){const t=mb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);gb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=_b;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=mn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(f);for(let v=0,g=a;v!==g;++v)s[v].push(new at(f,n[v],i[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[d]=v,e[v]=f;for(let m=0,x=a;m!==x;++m){const _=s[m],y=_[v];let S=_[p];_[p]=y,S===void 0&&(S=new at(f,n[m],i[m])),_[v]=S}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const u=s++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,p=i;d!==p;++d){const v=n[d],g=v[u],m=v[h];v[h]=g,v[u]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){const f=--s,d=e[f],p=--a,v=e[p];t[d.uuid]=u,e[u]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],_=x[f],y=x[p];x[u]=_,x[f]=y,x.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,v=i;p!==v;++p){const g=n[p];g[u]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(u);for(let f=h,d=l.length;f!==d;++f){const p=l[f];u[f]=new at(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class _m{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Zi,endingEnd:Zi};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Mo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===np;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===ep){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Zi:i.endingStart=Er,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Zi:i.endingEnd=Er)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const xb=new Float32Array(1);class yb extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new gm(at.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Sh(new Float32Array(2),new Float32Array(2),1,xb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?zr.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Mo),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new _m(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?zr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ih{constructor(e){this.value=e}clone(){return new Ih(this.value.clone===void 0?this.value:this.value.clone())}}let Mb=0;class bb extends hi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Mb++}),this.name="",this.usage=Pr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Sb extends Po{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class wb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Tb{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Dc(e[i],this,n,t);return n.sort(lf),n}}function lf(r,e){return r.distance-e.distance}function Dc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Dc(i[s],e,t,!0)}}class Eb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ab{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const cf=new Z;class Cb{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hf=new P,Xa=new P;class Rb{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){hf.subVectors(e,this.start),Xa.subVectors(this.end,this.start);const n=Xa.dot(Xa);let s=Xa.dot(hf)/n;return t&&(s=Et(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const uf=new P;class Pb extends ot{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Te(i,3));const s=new sn({fog:!1,toneMapped:!1});this.cone=new Hn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),uf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const _i=new P,qa=new Fe,Ol=new Fe;class Lb extends Hn{constructor(e){const t=vm(e),n=new Je,i=[],s=[],a=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Te(i,3)),n.setAttribute("color",new Te(s,3));const l=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ol.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(qa.multiplyMatrices(Ol,o.matrixWorld),_i.setFromMatrixPosition(qa),i.setXYZ(a,_i.x,_i.y,_i.z),qa.multiplyMatrices(Ol,o.parent.matrixWorld),_i.setFromMatrixPosition(qa),i.setXYZ(a+1,_i.x,_i.y,_i.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function vm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,vm(r.children[t]));return e}class Ib extends rt{constructor(e,t,n){const i=new ta(t,4,2),s=new Vn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Db=new P,ff=new xe,df=new xe;class Ub extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ea(t);i.rotateY(Math.PI*.5),this.material=new Vn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new ht(a,3)),this.add(new rt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ff.copy(this.light.color),df.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?ff:df;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Db.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Nb extends Hn{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=f===s?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new Je;h.setAttribute("position",new Te(l,3)),h.setAttribute("color",new Te(c,3));const u=new sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ob extends Hn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new xe(s),a=new xe(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const v=u&1?s:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const f=u&1?s:a,d=e-e/n*u;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d;o.push(g,0,m),l.push(f.r,f.g,f.b),v=(p+1)/i*(Math.PI*2),g=Math.sin(v)*d,m=Math.cos(v)*d,o.push(g,0,m),l.push(f.r,f.g,f.b)}}const c=new Je;c.setAttribute("position",new Te(o,3)),c.setAttribute("color",new Te(l,3));const h=new sn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const pf=new P,$a=new P,mf=new P;class Fb extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Je;i.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new sn({fog:!1,toneMapped:!1});this.lightPlane=new Ri(i,s),this.add(this.lightPlane),i=new Je,i.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new Ri(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),pf.setFromMatrixPosition(this.light.matrixWorld),$a.setFromMatrixPosition(this.light.target.matrixWorld),mf.subVectors($a,pf),this.lightPlane.lookAt($a),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt($a),this.targetLine.scale.z=mf.length()}}const Ya=new P,wt=new To;class Bb extends Hn{constructor(e){const t=new Je,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){i.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Te(i,3)),t.setAttribute("color",new Te(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new xe(16755200),h=new xe(16711680),u=new xe(43775),f=new xe(16777215),d=new xe(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ct("c",t,e,wt,0,0,-1),Ct("t",t,e,wt,0,0,1),Ct("n1",t,e,wt,-n,-i,-1),Ct("n2",t,e,wt,n,-i,-1),Ct("n3",t,e,wt,-n,i,-1),Ct("n4",t,e,wt,n,i,-1),Ct("f1",t,e,wt,-n,-i,1),Ct("f2",t,e,wt,n,-i,1),Ct("f3",t,e,wt,-n,i,1),Ct("f4",t,e,wt,n,i,1),Ct("u1",t,e,wt,n*.7,i*1.1,-1),Ct("u2",t,e,wt,-n*.7,i*1.1,-1),Ct("u3",t,e,wt,0,i*2,-1),Ct("cf1",t,e,wt,-n,0,1),Ct("cf2",t,e,wt,n,0,1),Ct("cf3",t,e,wt,0,-i,1),Ct("cf4",t,e,wt,0,i,1),Ct("cn1",t,e,wt,-n,0,-1),Ct("cn2",t,e,wt,n,0,-1),Ct("cn3",t,e,wt,0,-i,-1),Ct("cn4",t,e,wt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(r,e,t,n,i,s,a){Ya.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ya.x,Ya.y,Ya.z)}}const Za=new tn;class zb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Je;s.setIndex(new ht(n,1)),s.setAttribute("position",new ht(i,3)),super(s,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Za.setFromObject(this.object),Za.isEmpty())return;const t=Za.min,n=Za.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Je;s.setIndex(new ht(n,1)),s.setAttribute("position",new Te(i,3)),super(s,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vb extends Ri{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Je;a.setAttribute("position",new Te(s,3)),a.computeBoundingSphere(),super(a,new sn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Je;l.setAttribute("position",new Te(o,3)),l.computeBoundingSphere(),this.add(new rt(l,new Vn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const gf=new P;let Ja,Fl;class Hb extends ot{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new Je,Ja.setAttribute("position",new Te([0,0,0,0,1,0],3)),Fl=new Js(0,.5,1,5,1),Fl.translate(0,-.5,0)),this.position.copy(t),this.line=new Ri(Ja,new sn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new rt(Fl,new Vn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Gb extends Hn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Je;i.setAttribute("position",new Te(t,3)),i.setAttribute("color",new Te(n,3));const s=new sn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new xe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wb{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ir,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let _=0,y=m.length;_<y;_++){const S=m[_],M=new wi;M.curves=S.curves,x.push(M)}return x}function n(m,x){const _=x.length;let y=!1;for(let S=_-1,M=0;M<_;S=M++){let b=x[S],A=x[M],w=A.x-b.x,E=A.y-b.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(b=x[M],w=-w,A=x[S],E=-E),m.y<b.y||m.y>A.y)continue;if(m.y===b.y){if(m.x===b.x)return!0}else{const U=E*(m.x-b.x)-w*(m.y-b.y);if(U===0)return!0;if(U<0)continue;y=!y}}else{if(m.y!==b.y)continue;if(A.x<=m.x&&m.x<=b.x||b.x<=m.x&&m.x<=A.x)return!0}}return y}const i=Dn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new wi,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,v;f[p]=void 0,d[p]=[];for(let m=0,x=s.length;m<x;m++)o=s[m],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!h&&f[p]&&p++,f[p]={s:new wi,p:v},f[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:v[0]});if(!f[0])return t(s);if(f.length>1){let m=!1,x=0;for(let _=0,y=f.length;_<y;_++)u[_]=[];for(let _=0,y=f.length;_<y;_++){const S=d[_];for(let M=0;M<S.length;M++){const b=S[M];let A=!0;for(let w=0;w<f.length;w++)n(b.p,f[w].p)&&(_!==w&&x++,A?(A=!1,u[w].push(b)):m=!0);A&&u[_].push(b)}}x>0&&m===!1&&(d=u)}let g;for(let m=0,x=f.length;m<x;m++){l=f[m].s,c.push(l),g=d[m];for(let _=0,y=g.length;_<y;_++)l.holes.push(g[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xr);const Xb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:vo,AddEquation:yi,AddOperation:Gd,AdditiveAnimationBlendMode:jc,AdditiveBlending:co,AgXToneMapping:Gc,AlphaFormat:Yd,AlwaysCompare:fp,AlwaysDepth:Od,AlwaysStencilFunc:Sc,AmbientLight:cm,AnimationAction:_m,AnimationClip:zr,AnimationLoader:XM,AnimationMixer:yb,AnimationObjectGroup:vb,AnimationUtils:VM,ArcCurve:Op,ArrayCamera:Ap,ArrowHelper:Hb,AttachedBindMode:Kl,Audio:mm,AudioAnalyser:lb,AudioContext:Ch,AudioListener:rb,AudioLoader:nb,AxesHelper:Gb,BackSide:qt,BasicDepthPacking:ip,BasicShadowMap:eg,BatchedMesh:Dp,Bone:fh,BooleanKeyframeTrack:os,Box2:Cb,Box3:tn,Box3Helper:kb,BoxGeometry:Li,BoxHelper:zb,BufferAttribute:ht,BufferGeometry:Je,BufferGeometryLoader:pm,ByteType:qd,Cache:ti,Camera:To,CameraHelper:Bb,CanvasTexture:oo,CapsuleGeometry:Uo,CatmullRomCurve3:Fp,CineonToneMapping:Hc,CircleGeometry:No,ClampToEdgeWrapping:Wt,Clock:Rh,Color:xe,ColorKeyframeTrack:wh,ColorManagement:lt,CompressedArrayTexture:hM,CompressedCubeTexture:uM,CompressedTexture:Io,CompressedTextureLoader:qM,ConeGeometry:Oo,ConstantAlphaFactor:Dd,ConstantColorFactor:Ld,CubeCamera:vp,CubeReflectionMapping:si,CubeRefractionMapping:Ai,CubeTexture:Jr,CubeTextureLoader:$M,CubeUVReflectionMapping:qs,CubicBezierCurve:gh,CubicBezierCurve3:Bp,CubicInterpolant:nm,CullFaceBack:ql,CullFaceFront:vd,CullFaceFrontBack:Qm,CullFaceNone:_d,Curve:En,CurvePath:kp,CustomBlending:xd,CustomToneMapping:Wd,CylinderGeometry:Js,Cylindrical:Ab,Data3DTexture:ih,DataArrayTexture:So,DataTexture:ns,DataTextureLoader:YM,DataUtils:c_,DecrementStencilOp:fg,DecrementWrapStencilOp:pg,DefaultLoadingManager:rm,DepthFormat:bi,DepthStencilFormat:is,DepthTexture:oh,DetachedBindMode:Xd,DirectionalLight:lm,DirectionalLightHelper:Fb,DiscreteInterpolant:im,DisplayP3ColorSpace:bo,DodecahedronGeometry:Fo,DoubleSide:Pn,DstAlphaFactor:Ed,DstColorFactor:Cd,DynamicCopyUsage:Cg,DynamicDrawUsage:wc,DynamicReadUsage:Tg,EdgesGeometry:Vp,EllipseCurve:Do,EqualCompare:lp,EqualDepth:Bd,EqualStencilFunc:vg,EquirectangularReflectionMapping:yr,EquirectangularRefractionMapping:Mr,Euler:Zr,EventDispatcher:hi,ExtrudeGeometry:Kn,FileLoader:ri,Float16BufferAttribute:m_,Float32BufferAttribute:Te,Float64BufferAttribute:g_,FloatType:Sn,Fog:Co,FogExp2:Ao,FramebufferTexture:cM,FrontSide:On,Frustum:Kr,GLBufferAttribute:wb,GLSL1:Pg,GLSL3:Tc,GreaterCompare:cp,GreaterDepth:kd,GreaterEqualCompare:up,GreaterEqualDepth:zd,GreaterEqualStencilFunc:bg,GreaterStencilFunc:yg,GridHelper:Nb,Group:ji,HalfFloatType:In,HemisphereLight:am,HemisphereLightHelper:Ub,IcosahedronGeometry:zo,ImageBitmapLoader:tb,ImageLoader:kr,ImageUtils:nh,IncrementStencilOp:ug,IncrementWrapStencilOp:dg,InstancedBufferAttribute:Ws,InstancedBufferGeometry:dm,InstancedInterleavedBuffer:Sb,InstancedMesh:dh,Int16BufferAttribute:d_,Int32BufferAttribute:p_,Int8BufferAttribute:h_,IntType:Xc,InterleavedBuffer:Po,InterleavedBufferAttribute:ss,Interpolant:na,InterpolateDiscrete:wr,InterpolateLinear:Tr,InterpolateSmooth:ro,InvertStencilOp:mg,KeepStencilOp:qi,KeyframeTrack:An,LOD:Lp,LatheGeometry:Qr,Layers:wo,LessCompare:op,LessDepth:Fd,LessEqualCompare:eh,LessEqualDepth:xr,LessEqualStencilFunc:xg,LessStencilFunc:_g,Light:Di,LightProbe:fm,Line:Ri,Line3:Rb,LineBasicMaterial:sn,LineCurve:_h,LineCurve3:zp,LineDashedMaterial:Qp,LineLoop:Up,LineSegments:Hn,LinearDisplayP3ColorSpace:Yr,LinearEncoding:Qc,LinearFilter:Pt,LinearInterpolant:Sh,LinearMipMapLinearFilter:rg,LinearMipMapNearestFilter:sg,LinearMipmapLinearFilter:Ci,LinearMipmapNearestFilter:Wc,LinearSRGBColorSpace:Fn,LinearToneMapping:kc,LinearTransfer:Ar,Loader:cn,LoaderUtils:Ic,LoadingManager:Th,LoopOnce:ep,LoopPingPong:np,LoopRepeat:tp,LuminanceAlphaFormat:Jd,LuminanceFormat:Zd,MOUSE:Km,Material:Yt,MaterialLoader:qo,MathUtils:Xg,Matrix3:et,Matrix4:Fe,MaxEquation:Jl,Mesh:rt,MeshBasicMaterial:Vn,MeshDepthMaterial:lh,MeshDistanceMaterial:ch,MeshLambertMaterial:Kp,MeshMatcapMaterial:jp,MeshNormalMaterial:Jp,MeshPhongMaterial:Yp,MeshPhysicalMaterial:$p,MeshStandardMaterial:Or,MeshToonMaterial:Zp,MinEquation:Zl,MirroredRepeatWrapping:Sr,MixOperation:Hd,MultiplyBlending:Yl,MultiplyOperation:$r,NearestFilter:Rt,NearestMipMapLinearFilter:ig,NearestMipMapNearestFilter:ng,NearestMipmapLinearFilter:pr,NearestMipmapNearestFilter:fo,NeverCompare:ap,NeverDepth:Nd,NeverStencilFunc:gg,NoBlending:Ln,NoColorSpace:pn,NoToneMapping:ni,NormalAnimationBlendMode:Mo,NormalBlending:es,NotEqualCompare:hp,NotEqualDepth:Vd,NotEqualStencilFunc:Mg,NumberKeyframeTrack:Fr,Object3D:ot,ObjectLoader:QM,ObjectSpaceNormalMap:rp,OctahedronGeometry:ea,OneFactor:Sd,OneMinusConstantAlphaFactor:Ud,OneMinusConstantColorFactor:Id,OneMinusDstAlphaFactor:Ad,OneMinusDstColorFactor:Rd,OneMinusSrcAlphaFactor:uo,OneMinusSrcColorFactor:Td,OrthographicCamera:Ys,P3Primaries:Rr,PCFShadowMap:zc,PCFSoftShadowMap:qr,PMREMGenerator:go,Path:Ir,PerspectiveCamera:zt,Plane:vi,PlaneGeometry:jr,PlaneHelper:Vb,PointLight:Ah,PointLightHelper:Ib,Points:Np,PointsMaterial:ph,PolarGridHelper:Ob,PolyhedronGeometry:Ii,PositionalAudio:ob,PropertyBinding:at,PropertyMixer:gm,QuadraticBezierCurve:vh,QuadraticBezierCurve3:xh,Quaternion:en,QuaternionKeyframeTrack:Ks,QuaternionLinearInterpolant:sm,RED_GREEN_RGTC2_Format:Mc,RED_RGTC1_Format:Qd,REVISION:Xr,RGBADepthPacking:sp,RGBAFormat:on,RGBAIntegerFormat:Jc,RGBA_ASTC_10x10_Format:mc,RGBA_ASTC_10x5_Format:fc,RGBA_ASTC_10x6_Format:dc,RGBA_ASTC_10x8_Format:pc,RGBA_ASTC_12x10_Format:gc,RGBA_ASTC_12x12_Format:_c,RGBA_ASTC_4x4_Format:sc,RGBA_ASTC_5x4_Format:rc,RGBA_ASTC_5x5_Format:ac,RGBA_ASTC_6x5_Format:oc,RGBA_ASTC_6x6_Format:lc,RGBA_ASTC_8x5_Format:cc,RGBA_ASTC_8x6_Format:hc,RGBA_ASTC_8x8_Format:uc,RGBA_BPTC_Format:so,RGBA_ETC2_EAC_Format:ic,RGBA_PVRTC_2BPPV1_Format:tc,RGBA_PVRTC_4BPPV1_Format:ec,RGBA_S3TC_DXT1_Format:to,RGBA_S3TC_DXT3_Format:no,RGBA_S3TC_DXT5_Format:io,RGB_BPTC_SIGNED_Format:vc,RGB_BPTC_UNSIGNED_Format:xc,RGB_ETC1_Format:Kc,RGB_ETC2_Format:nc,RGB_PVRTC_2BPPV1_Format:Ql,RGB_PVRTC_4BPPV1_Format:jl,RGB_S3TC_DXT1_Format:eo,RGFormat:jd,RGIntegerFormat:Zc,RawShaderMaterial:Mh,Ray:$s,Raycaster:Tb,Rec709Primaries:Cr,RectAreaLight:hm,RedFormat:Kd,RedIntegerFormat:Yc,ReinhardToneMapping:Vc,RenderTarget:mp,RepeatWrapping:br,ReplaceStencilOp:hg,ReverseSubtractEquation:Md,RingGeometry:ko,SIGNED_RED_GREEN_RGTC2_Format:bc,SIGNED_RED_RGTC1_Format:yc,SRGBColorSpace:Tt,SRGBTransfer:ft,Scene:Ro,ShaderChunk:Be,ShaderLib:bn,ShaderMaterial:Xt,ShadowMaterial:qp,Shape:wi,ShapeGeometry:Vo,ShapePath:Wb,ShapeUtils:Dn,ShortType:$d,Skeleton:Lo,SkeletonHelper:Lb,SkinnedMesh:Ip,Source:Ki,Sphere:$t,SphereGeometry:ta,Spherical:Eb,SphericalHarmonics3:um,SplineCurve:yh,SpotLight:om,SpotLightHelper:Pb,Sprite:Pp,SpriteMaterial:uh,SrcAlphaFactor:ho,SrcAlphaSaturateFactor:Pd,SrcColorFactor:wd,StaticCopyUsage:Ag,StaticDrawUsage:Pr,StaticReadUsage:wg,StereoCamera:ib,StreamCopyUsage:Rg,StreamDrawUsage:Sg,StreamReadUsage:Eg,StringKeyframeTrack:ls,SubtractEquation:yd,SubtractiveBlending:$l,TOUCH:jm,TangentSpaceNormalMap:Pi,TetrahedronGeometry:Ho,Texture:Lt,TextureLoader:ZM,TorusGeometry:Go,TorusKnotGeometry:Wo,Triangle:an,TriangleFanDrawMode:lg,TriangleStripDrawMode:og,TrianglesDrawMode:ag,TubeGeometry:Xo,TwoPassDoubleSide:tg,UVMapping:xo,Uint16BufferAttribute:sh,Uint32BufferAttribute:rh,Uint8BufferAttribute:u_,Uint8ClampedBufferAttribute:f_,Uniform:Ih,UniformsGroup:bb,UniformsLib:fe,UniformsUtils:Gs,UnsignedByteType:ii,UnsignedInt248Type:Mi,UnsignedIntType:ei,UnsignedShort4444Type:qc,UnsignedShort5551Type:$c,UnsignedShortType:yo,VSMShadowMap:Rn,Vector2:Z,Vector3:P,Vector4:ct,VectorKeyframeTrack:Br,VideoTexture:lM,WebGL1Renderer:Cp,WebGL3DRenderTarget:Kg,WebGLArrayRenderTarget:Jg,WebGLCoordinateSystem:wn,WebGLCubeRenderTarget:xp,WebGLMultipleRenderTargets:jg,WebGLRenderTarget:Qt,WebGLRenderer:hh,WebGLUtils:Ep,WebGPUCoordinateSystem:ks,WireframeGeometry:Xp,WrapAroundEnding:Er,ZeroCurvatureEnding:Zi,ZeroFactor:bd,ZeroSlopeEnding:Ji,ZeroStencilOp:cg,_SRGBAFormat:po,createCanvasElement:pp,sRGBEncoding:Si},Symbol.toStringTag,{value:"Module"}));function qb(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class xi{constructor(){vt(this,"allVertices",{});vt(this,"isolatedVertices",{});vt(this,"connectedVertices",{});vt(this,"sortedConnectedValues",[]);vt(this,"needsSort",!1);vt(this,"emitter",qb());vt(this,"emit",this.emitter.emit.bind(this.emitter));vt(this,"on",this.emitter.on.bind(this.emitter));vt(this,"off",this.emitter.off.bind(this.emitter));vt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const a=this.connectedVertices[s];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const a=this.connectedVertices[s];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class $b{constructor(e,t,n){vt(this,"key");vt(this,"stage");vt(this,"callback");vt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class Yb extends xi{constructor(t,n,i){super();vt(this,"key");vt(this,"scheduler");vt(this,"callback",(t,n)=>n());vt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const s=new $b(this,t,n);return this.add(t,s,i),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(s=>{const a=performance.now();s.run(i??t);const o=performance.now()-a;n[s.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class Zb extends xi{constructor(t){super();vt(this,"lastTime",performance.now());vt(this,"clampDeltaTo",.1);vt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new Yb(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},s=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-s,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Mn=(r,e)=>{const t=fd(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const a=await e(s);a&&(n=a)});nn(()=>{i(),n&&n()})},dn=r=>{const e=Un(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},$o=new zt(75,0,.1,1e3);$o.position.z=5;$o.lookAt(0,0,0);const Jb=()=>$o,Kb=r=>{Mn(r.size,e=>{if(r.camera.current===$o){const t=r.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),r.invalidate()}})},Bl=r=>`useFrame-order-${r.toString()}`,xm=Symbol("use-legacy-frame-compatibility-context"),jb=()=>{const r={useFrameOrders:[],useRenderOrders:[]};return Tn(xm,r),r},Qb=()=>{const r=Nn(xm);if(r===void 0)throw new Error("No legacy frame compatibility context found, are you using this hook inside of <Canvas>?");return r},eS=r=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(c=!1)=>{await Xm(),!(!e.shouldDispose&&!c)&&(e.disposableObjects.forEach((h,u)=>{var f;(h===0||c)&&((f=u==null?void 0:u.dispose)==null||f.call(u),e.disposableObjects.delete(u))}),e.shouldDispose=!1)},collectDisposableObjects:(c,h,u)=>{const f=h??[],d=u??new WeakSet;return!c||d.has(c)||(d.add(c),c!=null&&c.dispose&&typeof c.dispose=="function"&&c.type!=="Scene"&&f.push(c),Object.entries(c).forEach(([p,v])=>{if(p==="parent"||p==="children"||typeof v!="object")return;const g=v;g!=null&&g.dispose&&e.collectDisposableObjects(g,f,d)})),f},addDisposableObjects:c=>{c.forEach(h=>{const u=e.disposableObjects.get(h);u?e.disposableObjects.set(h,u+1):e.disposableObjects.set(h,1)})},removeDisposableObjects:c=>{c.length!==0&&(c.forEach(h=>{const u=e.disposableObjects.get(h);u&&u>0&&e.disposableObjects.set(h,u-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=jb(),n=new Zb,i=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(c,h){o.shouldRender()&&h()}}),a=s.createTask(Symbol("threlte-auto-render-task"),c=>{t.length>0||o.renderer.render(o.scene,o.camera.current)}),o={size:fd([r.userSize,r.parentSize],([c,h])=>c||h),camera:dn(Jb()),scene:new Ro,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:dn(r.colorSpace),toneMapping:dn(r.toneMapping),dpr:dn(r.dpr),useLegacyLights:dn(r.useLegacyLights),shadows:dn(r.shadows),colorManagementEnabled:dn(r.colorManagementEnabled),renderMode:dn(r.renderMode),autoRender:dn(r.autoRender),scheduler:n,mainStage:i,renderStage:s,autoRenderTask:a,shouldRender:()=>o.renderMode.current==="always"||o.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||o.renderMode.current==="manual"&&e.advance};Kb(o);const l=dn({});return Tn("threlte",o),Tn("threlte-internal-context",e),Tn("threlte-user-context",l),o},Yo=typeof window<"u",tS=()=>{const r=dn({width:0,height:0});if(!Yo)return{parentSize:r,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{i.disconnect(),s.disconnect(),i.observe(o),s.observe(o,e)},i=new ResizeObserver(([o])=>{const{width:l,height:c}=o.contentRect;l===r.current.width&&c===r.current.height||r.set({width:l,height:c})}),s=new MutationObserver(o=>{for(const l of o)for(const c of l.removedNodes)if(t===c&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const l=t.parentElement;l&&(r.set({width:l.clientWidth,height:l.clientHeight}),n(l))};return nn(()=>{i.disconnect(),s.disconnect()}),{parentSize:r,parentSizeAction:a}};function ym(r,e){const t=Un(r);let n=r;const i=t.subscribe(o=>n=o);return nn(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const cs=()=>{const r=Nn("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},Dh=Symbol("threlte-hierarchical-parent-context"),Mm=()=>Nn(Dh),nS=r=>Tn(Dh,r),iS=r=>{const e=ym(r);return Tn(Dh,e),e};function sS(r){let e;const t=r[7].default,n=ai(t,r,r[6],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&oi(n,t,i,i[6],e?ci(t,i[6],s,null):li(i[6]),null)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}const rS=()=>({onChildMount:Nn("threlte-hierarchical-object-on-mount"),onChildDestroy:Nn("threlte-hierarchical-object-on-destroy")});function aS(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=m=>{o==null||o(m)};let{onChildDestroy:c=void 0}=e;const h=m=>{c==null||c(m)},{invalidate:u}=cs(),f=Mm();Ti(r,f,m=>t(5,n=m));let{parent:d=n}=e;const p=rS();a&&((g=p.onChildMount)==null||g.call(p,a),u());const v=ym(a,(m,x)=>{var _,y;x&&((_=p.onChildDestroy)==null||_.call(p,x),u()),m&&((y=p.onChildMount)==null||y.call(p,m),u())});return nn(()=>{var m;a&&((m=p.onChildDestroy)==null||m.call(p,a),u())}),Tn("threlte-hierarchical-object-on-mount",l),Tn("threlte-hierarchical-object-on-destroy",h),nS(v),r.$$set=m=>{"object"in m&&t(2,a=m.object),"onChildMount"in m&&t(3,o=m.onChildMount),"onChildDestroy"in m&&t(4,c=m.onChildDestroy),"parent"in m&&t(1,d=m.parent),"$$scope"in m&&t(6,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,d=n),r.$$.dirty&4&&v.set(a)},[f,d,a,o,c,n,s,i]}class oS extends Bn{constructor(e){super(),zn(this,e,aS,sS,kn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function lS(r){let e;const t=r[1].default,n=ai(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&oi(n,t,i,i[4],e?ci(t,i[4],s,null):li(i[4]),null)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function cS(r){let e,t;return e=new oS({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[lS]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function hS(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class bm extends Bn{constructor(e){super(),zn(this,e,hS,cS,kn,{object:0})}}const uS=()=>{Tn("threlte-cache",[])},fS=Xr.replace("dev",""),Uc=Number.parseInt(fS),dS=r=>{const e=Un(void 0),t=(n,i)=>{r.renderer=new hh({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(r.renderer)};return Mn([r.colorManagementEnabled],([n])=>{lt.enabled=n}),Mn([e,r.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Mn([e,r.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Mn([e,r.size],([n,i])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(i.width,i.height)}),Mn([e,r.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=qr))}),Mn([e,r.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Mn([e,r.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},Sm=()=>Nn("threlte-internal-context");function _f(r){let e,t;return e=new bm({props:{object:r[0].scene,$$slots:{default:[pS]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function pS(r){let e;const t=r[15].default,n=ai(t,r,r[17],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&oi(n,t,i,i[17],e?ci(t,i[17],s,null):li(i[17]),null)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function mS(r){let e,t,n,i,s=r[2]&&_f(r);return{c(){e=dd("canvas"),s&&s.c(),pd(e,"class","svelte-o3oskp")},m(a,o){we(a,e,o),s&&s.m(e,null),r[16](e),t=!0,n||(i=qm(r[4].call(null,e)),n=!0)},p(a,[o]){a[2]?s?(s.p(a,o),o&4&&X(s,1)):(s=_f(a),s.c(),X(s,1),s.m(e,null)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){t||(X(s),t=!0)},o(a){Q(s),t=!1},d(a){a&&Se(e),s&&s.d(),r[16](null),n=!1,i()}}}function gS(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:l=Yo?window.devicePixelRatio:1}=e,{renderMode:c="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=qr}=e,{size:f=void 0}=e,{toneMapping:d=vo}=e,{useLegacyLights:p=!(Uc>=155)}=e,{autoRender:v=!0}=e,g,m=Un(!1);Ti(r,m,E=>t(2,n=E));const x=Un(f),{parentSize:_,parentSizeAction:y}=tS(),S=eS({colorManagementEnabled:a,colorSpace:o,dpr:l,renderMode:c,parentSize:_,autoRender:v,shadows:u,toneMapping:d,useLegacyLights:p,userSize:x}),M=Sm(),b=S;Mn([m,b.autoRender],([E,U])=>(E&&U?b.autoRenderTask.start():b.autoRenderTask.stop(),()=>{b.autoRenderTask.stop()})),uS();const{createRenderer:A}=dS(b);Wr(()=>{A(g,h),b.renderer.setAnimationLoop(E=>{M.dispose(),b.scheduler.run(E),M.resetFrameInvalidation()}),m.set(!0)}),nn(()=>{var E;M.dispose(!0),b.scheduler.dispose(),(E=b.renderer)==null||E.dispose()});function w(E){Bs[E?"unshift":"push"](()=>{g=E,t(1,g)})}return r.$$set=E=>{"colorManagementEnabled"in E&&t(5,a=E.colorManagementEnabled),"colorSpace"in E&&t(6,o=E.colorSpace),"dpr"in E&&t(7,l=E.dpr),"renderMode"in E&&t(8,c=E.renderMode),"rendererParameters"in E&&t(9,h=E.rendererParameters),"shadows"in E&&t(10,u=E.shadows),"size"in E&&t(11,f=E.size),"toneMapping"in E&&t(12,d=E.toneMapping),"useLegacyLights"in E&&t(13,p=E.useLegacyLights),"autoRender"in E&&t(14,v=E.autoRender),"$$scope"in E&&t(17,s=E.$$scope)},r.$$.update=()=>{r.$$.dirty&2048&&x.set(f),r.$$.dirty&64&&b.colorSpace.set(o),r.$$.dirty&128&&b.dpr.set(l),r.$$.dirty&256&&b.renderMode.set(c),r.$$.dirty&16384&&b.autoRender.set(v),r.$$.dirty&1024&&b.shadows.set(u),r.$$.dirty&4096&&b.toneMapping.set(d)},[b,g,n,m,y,a,o,l,c,h,u,f,d,p,v,i,w,s]}class _S extends Bn{constructor(e){super(),zn(this,e,gS,mS,kn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function vS(r){let e;const t=r[9].default,n=ai(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&oi(n,t,i,i[8],e?ci(t,i[8],s,null):li(i[8]),null)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}const vf="threlte-disposable-object-context";function xS(r,e,t){let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=Sm();let{object:h=void 0}=e,u=h,{dispose:f=void 0}=e;const d=Nn(vf);Ti(r,d,g=>t(7,i=g));const p=Un(f??i??!0);Ti(r,p,g=>t(6,n=g)),Tn(vf,p);let v=n?o(h):[];return l(v),nn(()=>{c(v)}),r.$$set=g=>{"object"in g&&t(2,h=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&p.set(f??i??!0),r.$$.dirty&116&&h!==u&&(c(v),t(5,v=n?o(h):[]),l(v),t(4,u=h))},[d,p,h,f,u,v,n,i,a,s]}class yS extends Bn{constructor(e){super(),zn(this,e,xS,vS,kn,{object:2,dispose:3})}}const MS=/^\s*class\s+/,bS=r=>typeof r!="function"?!1:MS.test(r.toString()),SS=r=>Array.isArray(r),xf=(r,e)=>bS(r)?SS(e)?new r(...e):new r:r,wS=r=>"isObject3D"in r,yf=r=>"dispose"in r,wm=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},zl=Symbol("initialValueBeforeAttach"),TS=()=>{const{invalidate:r}=cs();let e=!1,t=zl,n,i,s;const a=(l,c,h)=>{if(o(),!h){const u=l;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:u,key:f}=wm(c,h);t=u[f],u[f]=l,i=u,s=f}e=!0,r()}},o=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==zl&&(i[s]=t,t=zl,i=void 0,s=void 0),e=!1,r())};return nn(()=>{o()}),{update:a}},ES=r=>r&&r.isCamera,Tm=r=>r&&r.isOrthographicCamera,Em=r=>r&&r.isPerspectiveCamera,AS=r=>Em(r)||Tm(r),CS=()=>{const{invalidate:r,size:e,camera:t}=cs();let n,i;nn(()=>{i==null||i()});const s=l=>{n&&(Tm(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Em(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!AS(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!ES(l)||!c||(t.set(l),r())}}},Am=()=>{const r=Bc(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},RS=()=>{const r=Am(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,r("create",{ref:t,cleanup:o=>{e.push(o)}})},s=a=>{t=a,n&&i()};return Wr(()=>{i(),n=!0}),nn(()=>{e.forEach(a=>a())}),{updateRef:s}},Mf=r=>!!(r!=null&&r.addEventListener),PS=()=>{const r=Am(),e=Bc(),t=l=>{l!=null&&l.type&&r(l.type,l)},n=(l,c)=>{Mf(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{Mf(l)&&c.forEach(h=>{l.addEventListener(h,t)})},s=Un(),a=Un([]);return Mn([s,a],([l,c])=>(i(l,c),()=>n(l,c))),Wr(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{s.set(l)}}},LS=r=>{const t=Nn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(r)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let s=[];return nn(()=>{s.forEach(c=>c())}),{updateRef:c=>{s.forEach(h=>h()),s=[],n.forEach(h=>{var f;const u=(f=h.onRefChange)==null?void 0:f.call(h,c);u&&s.push(u)})},updateProps:c=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,c)})},pluginsProps:i}},IS=new Set(["$$scope","$$slots","type","args","attach","instance"]),DS=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),US=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,bf=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},NS=()=>{const{invalidate:r}=cs(),e=new Map,t=new Map,n=(s,a,o,l)=>{if(US(o)){const u=e.get(a);if(u&&u.instance===s&&u.value===o)return;e.set(a,{instance:s,value:o})}const{key:c,target:h}=wm(s,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=bf(h,c,o);t.set(a,f),f(h,c,o)}}else bf(h,c,o)(h,c,o);l.manualCamera||DS.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(s,a,o)=>{var l;for(const c in a)!IS.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(s,c,a[c],o),r()}}},OS=r=>({ref:r&2}),Sf=r=>({ref:r[1]}),FS=r=>({ref:r&2}),wf=r=>({ref:r[1]});function Tf(r){let e,t;return e=new yS({props:{object:r[1],dispose:r[0]}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function BS(r){let e;const t=r[10].default,n=ai(t,r,r[11],Sf);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&oi(n,t,i,i[11],e?ci(t,i[11],s,OS):li(i[11]),Sf)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function zS(r){let e,t;return e=new bm({props:{object:r[1],$$slots:{default:[kS]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function kS(r){let e;const t=r[10].default,n=ai(t,r,r[11],wf);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&oi(n,t,i,i[11],e?ci(t,i[11],s,FS):li(i[11]),wf)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function VS(r){let e=yf(r[1]),t,n,i,s,a,o,l=e&&Tf(r);const c=[zS,BS],h=[];function u(f,d){return d&2&&(n=null),n==null&&(n=!!wS(f[1])),n?0:1}return i=u(r,-1),s=h[i]=c[i](r),{c(){l&&l.c(),t=Ze(),s.c(),a=bt()},m(f,d){l&&l.m(f,d),we(f,t,d),h[i].m(f,d),we(f,a,d),o=!0},p(f,[d]){d&2&&(e=yf(f[1])),e?l?(l.p(f,d),d&2&&X(l,1)):(l=Tf(f),l.c(),X(l,1),l.m(t.parentNode,t)):l&&(dt(),Q(l,1,1,()=>{l=null}),pt());let p=i;i=u(f,d),i===p?h[i].p(f,d):(dt(),Q(h[p],1,1,()=>{h[p]=null}),pt(),s=h[i],s?s.p(f,d):(s=h[i]=c[i](f),s.c()),X(s,1),s.m(a.parentNode,a))},i(f){o||(X(l),X(s),o=!0)},o(f){Q(l),Q(s),o=!1},d(f){f&&(Se(t),Se(a)),l&&l.d(f),h[i].d(f)}}}function HS(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=zs(e,n),s,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=Mm();Ti(r,p,U=>t(9,s=U));const v=RS();let g=xf(l,c);v.updateRef(g);let m=!1;const x=()=>{if(!m){m=!0;return}t(1,g=xf(l,c)),v.updateRef(g)};let{ref:_=g}=e;const y=iS(g),S=LS({ref:g,props:e}),M=(S==null?void 0:S.pluginsProps)??[],b=NS(),A=CS(),w=TS(),E=PS();return r.$$set=U=>{t(23,e=Ei(Ei({},e),lo(U))),t(22,i=zs(e,n)),"is"in U&&t(4,l=U.is),"args"in U&&t(5,c=U.args),"attach"in U&&t(6,h=U.attach),"manual"in U&&t(7,u=U.manual),"makeDefault"in U&&t(8,f=U.makeDefault),"dispose"in U&&t(0,d=U.dispose),"ref"in U&&t(3,_=U.ref),"$$scope"in U&&t(11,o=U.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&x(),r.$$.dirty&2&&t(3,_=g),r.$$.dirty&2&&y.set(g),b.updateProps(g,i,{manualCamera:u,pluginsProps:M}),r.$$.dirty&130&&A.update(g,u),r.$$.dirty&258&&A.makeDefaultCamera(g,f),r.$$.dirty&578&&w.update(g,s,h),r.$$.dirty&2&&E.updateRef(g),r.$$.dirty&2&&(S==null||S.updateRef(g)),S==null||S.updateProps(e),S==null||S.updateRestProps(i)},e=lo(e),[d,g,p,_,l,c,h,u,f,s,a,o]}let Cm=class extends Bn{constructor(e){super(),zn(this,e,HS,VS,kn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const GS={},WS=(r,e)=>{const t=GS[e]||Xb[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},XS=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new Cm(WS(n,r))}}),Oe=new Proxy(class{},{construct(r,[e]){const t=e;return new Cm(t)},get(r,e){return XS(e)}});function qS(r,e,t){if(!Yo)return{task:void 0,start:()=>{},stop:()=>{},started:$m(!1)};let n,i,s;xi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const a=cs();let o=a.mainStage;if(s){if(s.stage)if(xi.isValue(s.stage))o=s.stage;else{const d=a.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);o=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(xi.isValue(p)){o=p.stage;break}}else xi.isValue(s.after)&&(o=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(xi.isValue(p)){o=p.stage;break}}else xi.isValue(s.before)&&(o=s.before.stage)}const{autoInvalidations:l}=Nn("threlte-internal-context"),c=Un(!1),h=o.createTask(n,i,s),u=()=>{c.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&l.add(i),h.start()},f=()=>{c.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&l.delete(i),h.stop()};return(s==null?void 0:s.autoStart)??!0?u():f(),nn(()=>{o&&o.removeTask(n)}),{task:h,start:u,stop:f,started:{subscribe:c.subscribe}}}const $S=(r,e)=>{if(!Yo)return;const t=cs(),{useRenderOrders:n}=Qb();let i=0;for(;n.includes(i);)i+=.01;n.push(i);const s=Bl(i),a=o=>{r(t,o)};t.renderStage.createTask(s,a,{after:n.filter(o=>o<i).map(o=>Bl(o)),before:n.filter(o=>o>i).map(o=>Bl(o))}),nn(()=>{t.renderStage.removeTask(s),n.splice(n.indexOf(i),1)})},Rm=()=>{const r=Bc(),e=Un(void 0);return Mn(e,t=>{t&&Object.entries(r.$$.callbacks).forEach(n=>{const[i,s]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...s):t.$$.callbacks[i]=s})}),e};new P;new P;new P;const Pm=r=>`threlte-instanced-mesh-${r}`,YS=(r,e)=>{const t={instancedMesh:dn(r),addInstance(n){t.instances.update(i=>(i.push(n),i))},removeInstance(n){t.instances.update(i=>{const s=i.indexOf(n);return s>-1&&i.splice(s,1),i})},instances:dn([])};return Tn(Pm(e),t),t},ZS=r=>{const e=Nn(Pm(r));if(!e)throw new Error(`No <InstancedMesh> component found for id ${r}`);return e};function JS(r){let e,t,n,i,s;e=new Oe.InstancedBufferAttribute({props:{attach:"instanceMatrix",count:r[1].length/16,array:r[1],itemSize:16,usage:wc}}),n=new Oe.InstancedBufferAttribute({props:{attach:"instanceColor",count:r[2].length/3,array:r[2],itemSize:3,usage:wc}});const a=r[10].default,o=ai(a,r,r[9],null);return{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze(),o&&o.c()},m(l,c){Re(e,l,c),we(l,t,c),Re(n,l,c),we(l,i,c),o&&o.m(l,c),s=!0},p(l,[c]){o&&o.p&&(!s||c&512)&&oi(o,a,l,l[9],s?ci(a,l[9],c,null):li(l[9]),null)},i(l){s||(X(e.$$.fragment,l),X(n.$$.fragment,l),X(o,l),s=!0)},o(l){Q(e.$$.fragment,l),Q(n.$$.fragment,l),Q(o,l),s=!1},d(l){l&&(Se(t),Se(i)),Ce(e,l),Ce(n,l),o&&o.d(l)}}}function KS(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{instancedMesh:a}=e,{id:o}=e,{limit:l}=e,{range:c}=e,{update:h}=e;const{instances:u}=YS(a,o);Ti(r,u,S=>t(8,n=S));const f=new Fe,d=new Float32Array(l*16);for(let S=0;S<l;S++)f.identity().toArray(d,S*16);const p=new Float32Array(l*3).fill(1),v=new Fe,g=new Fe,m=new P,x=new en,_=new P;let y=!1;return qS(()=>{if(a.updateMatrix(),h||!y){a.updateMatrixWorld(),v.copy(a.matrixWorld).invert(),a.instanceColor&&t(3,a.instanceColor.needsUpdate=!0,a),t(3,a.instanceMatrix.needsUpdate=!0,a);for(let S=0;S<u.current.length;S++){const M=u.current[S];M.matrixWorld.decompose(m,x,_),g.compose(m,x,_).premultiply(v),g.toArray(d,S*16),M.color.toArray(p,S*3)}y=!0}}),r.$$set=S=>{"instancedMesh"in S&&t(3,a=S.instancedMesh),"id"in S&&t(4,o=S.id),"limit"in S&&t(5,l=S.limit),"range"in S&&t(6,c=S.range),"update"in S&&t(7,h=S.update),"$$scope"in S&&t(9,s=S.$$scope)},r.$$.update=()=>{if(r.$$.dirty&360){const S=Math.min(l,c!==void 0?c:l,n.length);t(3,a.count=S,a),Uc>=159?(a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,S*16)):t(3,a.instanceMatrix.updateRange.count=S*16,a),a.instanceColor&&(Uc>=159?(a.instanceColor.clearUpdateRanges(),a.instanceColor.addUpdateRange(0,S*3)):t(3,a.instanceColor.updateRange.count=S*3,a))}},[u,d,p,a,o,l,c,h,n,s,i]}class jS extends Bn{constructor(e){super(),zn(this,e,KS,JS,kn,{instancedMesh:3,id:4,limit:5,range:6,update:7})}}const QS=r=>({}),Ef=r=>({ref:r[4]});function e1(r){let e;const t=r[9].default,n=ai(t,r,r[11],Ef);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2048)&&oi(n,t,i,i[11],e?ci(t,i[11],s,QS):li(i[11]),Ef)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function t1(r){let e,t;return e=new jS({props:{instancedMesh:r[4],id:r[0],limit:r[1],range:r[2],update:r[3],$$slots:{default:[e1]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.id=n[0]),i&2&&(s.limit=n[1]),i&4&&(s.range=n[2]),i&8&&(s.update=n[3]),i&2048&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function n1(r){let e,t,n;const i=[{is:r[4]},{raycast:i1},{matrixAutoUpdate:!1},{args:r[7]},r[8]];function s(o){r[10](o)}let a={$$slots:{default:[t1]},$$scope:{ctx:r}};for(let o=0;o<i.length;o+=1)a=Ei(a,i[o]);return r[5]!==void 0&&(a.bind=r[5]),e=new Oe({props:a}),Bs.push(()=>Wl(e,"bind",s)),{c(){Pe(e.$$.fragment)},m(o,l){Re(e,o,l),n=!0},p(o,[l]){const c=l&400?md(i,[l&16&&{is:o[4]},i[1],i[2],l&128&&{args:o[7]},l&256&&gd(o[8])]):{};l&2063&&(c.$$scope={dirty:l,ctx:o}),!t&&l&32&&(t=!0,c.bind=o[5],Xl(()=>t=!1)),e.$set(c)},i(o){n||(X(e.$$.fragment,o),n=!0)},o(o){Q(e.$$.fragment,o),n=!1},d(o){Ce(e,o)}}}const i1=()=>null;function s1(r,e,t){const n=["id","limit","range","update","ref"];let i=zs(e,n),s,{$$slots:a={},$$scope:o}=e,{id:l="default"}=e,{limit:c=1e3}=e,{range:h=1e3}=e,{update:u=!0}=e;const f=new dh(null,null,0),d=Rm();Ti(r,d,g=>t(5,s=g));const p=[null,null,0];function v(g){s=g,d.set(s)}return r.$$set=g=>{e=Ei(Ei({},e),lo(g)),t(8,i=zs(e,n)),"id"in g&&t(0,l=g.id),"limit"in g&&t(1,c=g.limit),"range"in g&&t(2,h=g.range),"update"in g&&t(3,u=g.update),"$$scope"in g&&t(11,o=g.$$scope)},[l,c,h,u,f,s,d,p,i,a,v,o]}class r1 extends Bn{constructor(e){super(),zn(this,e,s1,n1,kn,{id:0,limit:1,range:2,update:3,ref:4})}get ref(){return this.$$.ctx[4]}}const Af=new Fe,Cf=new Fe,Ka=[],ur=new rt,a1=r=>r.isMaterial;class o1 extends ji{constructor(t,n){super();vt(this,"color");vt(this,"instancedMesh");vt(this,"instances");this.color=new xe("white"),this.instancedMesh=t,this.instances=n}get geometry(){var t;return(t=this.instancedMesh.current)==null?void 0:t.geometry}raycast(t,n){var o;const i=this.instancedMesh.current;if(!i||!i.geometry||!i.material)return;ur.geometry=i.geometry;const s=i.matrixWorld,a=this.instances.current.indexOf(this);if(!(a===-1||a>i.count)){i.getMatrixAt(a,Af),Cf.multiplyMatrices(s,Af),ur.matrixWorld=Cf,a1(i.material)?ur.material.side=i.material.side:ur.material.side=((o=i.material[0])==null?void 0:o.side)??On,ur.raycast(t,Ka);for(let l=0,c=Ka.length;l<c;l++){const h=Ka[l];h.instanceId=a,h.object=this,n.push(h)}Ka.length=0}}}const l1=r=>({}),Rf=r=>({ref:r[0]});function c1(r){let e;const t=r[5].default,n=ai(t,r,r[7],Rf);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&128)&&oi(n,t,i,i[7],e?ci(t,i[7],s,l1):li(i[7]),Rf)},i(i){e||(X(n,i),e=!0)},o(i){Q(n,i),e=!1},d(i){n&&n.d(i)}}}function h1(r){let e,t;const n=[{is:r[0]},r[3]];let i={$$slots:{default:[c1]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=Ei(i,n[s]);return e=new Oe({props:i}),r[6](e),{c(){Pe(e.$$.fragment)},m(s,a){Re(e,s,a),t=!0},p(s,[a]){const o=a&9?md(n,[a&1&&{is:s[0]},a&8&&gd(s[3])]):{};a&128&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(X(e.$$.fragment,s),t=!0)},o(s){Q(e.$$.fragment,s),t=!1},d(s){r[6](null),Ce(e,s)}}}function u1(r,e,t){const n=["id","ref"];let i=zs(e,n),s,{$$slots:a={},$$scope:o}=e,{id:l="default"}=e;const{addInstance:c,removeInstance:h,instancedMesh:u,instances:f}=ZS(l),d=new o1(u,f);c(d),nn(()=>{h(d)});const p=Rm();Ti(r,p,g=>t(1,s=g));function v(g){Bs[g?"unshift":"push"](()=>{s=g,p.set(s)})}return r.$$set=g=>{e=Ei(Ei({},e),lo(g)),t(3,i=zs(e,n)),"id"in g&&t(4,l=g.id),"$$scope"in g&&t(7,o=g.$$scope)},[d,s,p,i,l,a,v,o]}class f1 extends Bn{constructor(e){super(),zn(this,e,u1,h1,kn,{id:4,ref:0})}get ref(){return this.$$.ctx[0]}}`${Be.logdepthbuf_pars_vertex}${Be.fog_pars_vertex}${Be.logdepthbuf_vertex}${Be.fog_vertex}`;`${Be.tonemapping_fragment}${Be.colorspace_fragment}`;`${Be.tonemapping_fragment}${Be.colorspace_fragment}`;const d1=`

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
`,p1=`

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
`,m1=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,g1=m1,_1=`
	${d1}
	${p1}
`;`${g1}${_1}${Be.tonemapping_fragment}${Be.colorspace_fragment}`;for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new Ys(-1,1,1,-1,0,1);class v1 extends Je{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}new v1;var Lm={exports:{}};Lm.exports=Zo;Lm.exports.default=Zo;function Zo(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=Im(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;var o,l,c,h,u,f,d;if(n&&(s=S1(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(var p=t;p<i;p+=t)u=r[p],f=r[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Vr(s,a,t,o,l,d,0),a}function Im(r,e,t,n,i){var s,a;if(i===Fc(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Pf(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Pf(s,r[s],r[s+1],a);return a&&Jo(a,a.next)&&(Gr(a),a=a.next),a}function as(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Jo(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(r,e,t,n,i,s,a){if(r){!a&&s&&C1(r,n,i,s);for(var o=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?y1(r,n,i,s):x1(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Gr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=M1(as(r),e,t),Vr(r,e,t,n,i,s,2)):a===2&&b1(r,e,t,n,i,s):Vr(as(r),e,t,n,i,s,1);break}}}}function x1(r){var e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Os(i,o,s,l,a,c,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function y1(r,e,t,n){var i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;for(var o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=Nc(d,p,e,t,n),x=Nc(v,g,e,t,n),_=r.prevZ,y=r.nextZ;_&&_.z>=m&&y&&y.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Os(o,h,l,u,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&Os(o,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==a&&Os(o,h,l,u,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&Os(o,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function M1(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Jo(i,s)&&Dm(i,n,n.next,s)&&Hr(i,s)&&Hr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Gr(n),Gr(n.next),n=r=s),n=n.next}while(n!==r);return as(n)}function b1(r,e,t,n,i,s){var a=r;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&L1(a,o)){var l=Um(a,o);a=as(a,a.next),l=as(l,l.next),Vr(a,e,t,n,i,s,0),Vr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function S1(r,e,t,n){var i=[],s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Im(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(P1(c));for(i.sort(w1),s=0;s<i.length;s++)t=T1(i[s],t);return t}function w1(r,e){return r.x-e.x}function T1(r,e){var t=E1(r,e);if(!t)return e;var n=Um(t,r);return as(n,n.next),as(t,t.next)}function E1(r,e){var t=e,n=r.x,i=r.y,s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>s&&(s=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Os(i<h?n:s,i,c,h,i<h?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Hr(t,r)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&A1(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function A1(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function C1(r,e,t,n){var i=r;do i.z===0&&(i.z=Nc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,R1(i)}function R1(r){var e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Nc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function P1(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Os(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function L1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!I1(r,e)&&(Hr(r,e)&&Hr(e,r)&&D1(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||Jo(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Jo(r,e){return r.x===e.x&&r.y===e.y}function Dm(r,e,t,n){var i=Qa(Mt(r,e,t)),s=Qa(Mt(r,e,n)),a=Qa(Mt(t,n,r)),o=Qa(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&ja(r,t,e)||s===0&&ja(r,n,e)||a===0&&ja(t,r,n)||o===0&&ja(t,e,n))}function ja(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Qa(r){return r>0?1:r<0?-1:0}function I1(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Dm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Hr(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function D1(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Um(r,e){var t=new Oc(r.i,r.x,r.y),n=new Oc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Pf(r,e,t,n){var i=new Oc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Oc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Zo.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,a=Math.abs(Fc(r,0,s,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:r.length;a-=Math.abs(Fc(r,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;u+=Math.abs((r[f]-r[p])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[p+1]-r[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Fc(r,e,t,n){for(var i=0,s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}Zo.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var a=0;a<e;a++)t.vertices.push(r[i][s][a]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new Z;new Z;var Lf;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let o=0;o<i.length;o++){const l=i[o];for(;s.length>=2;){const c=s[s.length-1],h=s[s.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))s.pop();else break}s.push(l)}s.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),s.length==1&&a.length==1&&s[0].x==a[0].x&&s[0].y==a[0].y?s:s.concat(a)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(Lf||(Lf={}));class U1 extends Ro{constructor(e=null){super();const t=new Li;t.deleteAttribute("uv");const n=new Or({side:qt}),i=new Or;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const a=new Ah(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new rt(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const l=new rt(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new rt(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const h=new rt(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const u=new rt(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const f=new rt(t,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const d=new rt(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new rt(t,Ls(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const v=new rt(t,Ls(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);const g=new rt(t,Ls(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const m=new rt(t,Ls(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const x=new rt(t,Ls(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const _=new rt(t,Ls(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ls(r){const e=new Vn;return e.color.setScalar(r),e}const Nm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const N1=new Ys(-1,1,1,-1,0,1);class O1 extends Je{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const F1=new O1;class Uh{constructor(e){this._mesh=new rt(F1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,N1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class B1 extends js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gs.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Uh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class If extends js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class z1 extends js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class k1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Z);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new B1(Nm),this.copyPass.material.blending=Ln,this.clock=new Rh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}If!==void 0&&(a instanceof If?n=!0:a instanceof z1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class V1 extends js{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const H1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends js{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(s,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Qt(s,a,{type:In});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Qt(s,a,{type:In});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=H1;this.highPassUniforms=Gs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nm;this.copyUniforms=Gs.clone(h.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:co,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Vn,this.fsQuad=new Uh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new Z(1,0);Xs.BlurDirectionY=new Z(0,1);const G1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class W1 extends js{constructor(){super();const e=G1;this.uniforms=Gs.clone(e.uniforms),this.material=new Mh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Uh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function X1(r,e,t){let{bloomStrength:n=.9}=e,{bloomRadius:i=.5}=e,{bloomThreshold:s=.15}=e;const a=cs(),{size:o,scene:l,camera:c,renderer:h}=a;let u=null,f=null,d=null,p=null;return Wr(()=>{const v=new go(h);v.compileEquirectangularShader(),d=v.fromScene(new U1,.04).texture,l.environment=d,v.dispose();let g=window.innerWidth,m=window.innerHeight;o.subscribe(_=>{_!=null&&_.width&&(g=_.width),_!=null&&_.height&&(m=_.height)})(),u=new k1(h),u.addPass(new V1(l,c.current)),t(3,f=new Xs(new Z(g,m),n,i,s)),u.addPass(f),u.addPass(new W1),u.setSize(g,m),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),p=o.subscribe(_=>{u&&(_!=null&&_.width)&&(_!=null&&_.height)&&u.setSize(_.width,_.height)})}),$S((v,g)=>{u&&u.render(g)}),nn(()=>{var v;p&&p(),d&&d.dispose(),u&&(u.passes.forEach(g=>{var m;return(m=g.dispose)==null?void 0:m.call(g)}),(v=u.dispose)==null||v.call(u)),l&&(l.environment=null)}),r.$$set=v=>{"bloomStrength"in v&&t(0,n=v.bloomStrength),"bloomRadius"in v&&t(1,i=v.bloomRadius),"bloomThreshold"in v&&t(2,s=v.bloomThreshold)},r.$$.update=()=>{r.$$.dirty&15&&f&&(t(3,f.strength=n,f),t(3,f.radius=i,f),t(3,f.threshold=s,f))},[n,i,s,f]}class q1 extends Bn{constructor(e){super(),zn(this,e,X1,null,kn,{bloomStrength:0,bloomRadius:1,bloomThreshold:2})}}function Df(r,e,t){const n=r.slice();return n[56]=e[t],n[58]=t,n}function kl(r){const e=r.slice(),t=(e[58]-1)/(Fm-1);e[59]=t;const n=Math.max(0,(1-e[59])*.55);e[60]=n;const i=e[22]*1.6*(1-e[59]*.5);return e[61]=i,e}function Vl(r){const e=r.slice(),t=e[0].hole.c*e[0].cw+e[0].cw/2-e[0].W/2;e[62]=t;const n=e[0].H/2-(e[0].hole.r*e[0].ch+e[0].ch/2);e[63]=n;const i=e[0].br*4;e[64]=i;const s=1+Math.sin(e[6]*.003)*.05;e[65]=s;const a=e[64]*e[65];e[66]=a;const o=303/256;return e[67]=o,e}function Uf(r,e,t){const n=r.slice();n[68]=e[t];const i=n[14][n[68].type];n[69]=i;const s=n[68].c*n[0].cw+n[0].cw/2-n[0].W/2;n[70]=s;const a=n[0].H/2-(n[68].r*n[0].ch+n[0].ch/2);n[71]=a;const o=n[68].collected?n[6]-n[68].collectT:0;n[72]=o;const l=!n[68].collected||n[72]<400;return n[73]=l,n}function Hl(r){const e=r.slice(),t=e[0].br*2.8;e[76]=t;const n=e[68].collected?Math.max(0,1-e[72]/400):1;e[77]=n;const i=e[68].collected?1+e[72]/400*.45:1+Math.sin(e[6]*.004+e[68].c+e[68].r)*.06;e[78]=i;const s=e[76]*e[78];return e[79]=s,e}function Gl(r){const e=r.slice(),t=2.5;e[80]=t;const n=2;e[81]=n;const i=e[8];e[82]=i;const s=Math.min(e[0].cw,e[0].ch)*.15;e[83]=s;const a=e[0].W+(e[80]+e[83])*2;e[84]=a;const o=e[0].H+(e[80]+e[83])*2;return e[85]=o,e}function Nf(r,e,t){const n=r.slice();return n[86]=e[t],n[58]=t,n}function Of(r,e,t){const n=r.slice();n[88]=e[t],n[58]=t;const i=n[88].c*n[0].cw+n[0].cw/2-n[0].W/2;n[70]=i;const s=n[0].H/2-(n[88].r*n[0].ch+n[0].ch/2);n[71]=s;const a=n[88].passed?"#ffcc00":"#00ff80";n[89]=a;const o=Math.min(n[0].cw,n[0].ch)*.5;n[90]=o;const l=n[19]*.6;return n[91]=l,n}function Ff(r,e,t){const n=r.slice();return n[86]=e[t],n[58]=t,n}function Bf(r,e,t){const n=r.slice();return n[86]=e[t],n[58]=t,n}function zf(r,e,t){const n=r.slice();return n[95]=e[t],n[58]=t,n}function kf(r,e,t){const n=r.slice();return n[97]=e[t],n}function Vf(r,e,t){const n=r.slice();return n[100]=e[t],n[58]=t,n}function Hf(r){let e,t;return e=new Oe.Mesh({props:{position:[0,0,-r[21]],receiveShadow:!0,$$slots:{default:[Z1]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&2097152&&(s.position=[0,0,-n[21]]),i[0]&33|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function $1(r){let e,t;return e=new Oe.MeshStandardMaterial({props:{color:"#bdb19c",roughness:.92,metalness:0,envMapIntensity:.15}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p:Jm,i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Y1(r){let e,t;return e=new Oe.MeshStandardMaterial({props:{map:r[5],color:"#bdb19c",roughness:.92,metalness:0,envMapIntensity:.15}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&32&&(s.map=n[5]),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Z1(r){let e,t,n,i,s,a;e=new Oe.PlaneGeometry({props:{args:[r[0].W,r[0].H]}});const o=[Y1,$1],l=[];function c(h,u){return h[5]?0:1}return n=c(r),i=l[n]=o[n](r),{c(){Pe(e.$$.fragment),t=Ze(),i.c(),s=bt()},m(h,u){Re(e,h,u),we(h,t,u),l[n].m(h,u),we(h,s,u),a=!0},p(h,u){const f={};u[0]&1&&(f.args=[h[0].W,h[0].H]),e.$set(f);let d=n;n=c(h),n===d?l[n].p(h,u):(dt(),Q(l[d],1,1,()=>{l[d]=null}),pt(),i=l[n],i?i.p(h,u):(i=l[n]=o[n](h),i.c()),X(i,1),i.m(s.parentNode,s))},i(h){a||(X(e.$$.fragment,h),X(i),a=!0)},o(h){Q(e.$$.fragment,h),Q(i),a=!1},d(h){h&&(Se(t),Se(s)),Ce(e,h),l[n].d(h)}}}function Gf(r){let e=[],t=new Map,n,i=[],s=new Map,a,o=[],l=new Map,c,h=[],u=new Map,f,d,p=Bt(["straight","corner","T","cross","deadEnd"]);const v=M=>M[97];for(let M=0;M<5;M+=1){let b=kf(r,p,M),A=v(b);t.set(A,e[M]=Xf(A,b))}let g=Bt(r[12]);const m=M=>`ns${M[58]}`;for(let M=0;M<g.length;M+=1){let b=zf(r,g,M),A=m(b);s.set(A,i[M]=qf(A,b))}let x=Bt(r[13]);const _=M=>`nc${M[58]}`;for(let M=0;M<x.length;M+=1){let b=Bf(r,x,M),A=_(b);l.set(A,o[M]=Yf(A,b))}let y=Bt(r[13]);const S=M=>`nb${M[58]}`;for(let M=0;M<y.length;M+=1){let b=Ff(r,y,M),A=S(b);u.set(A,h[M]=Jf(A,b))}return{c(){for(let M=0;M<5;M+=1)e[M].c();n=Ze();for(let M=0;M<i.length;M+=1)i[M].c();a=Ze();for(let M=0;M<o.length;M+=1)o[M].c();c=Ze();for(let M=0;M<h.length;M+=1)h[M].c();f=bt()},m(M,b){for(let A=0;A<5;A+=1)e[A]&&e[A].m(M,b);we(M,n,b);for(let A=0;A<i.length;A+=1)i[A]&&i[A].m(M,b);we(M,a,b);for(let A=0;A<o.length;A+=1)o[A]&&o[A].m(M,b);we(M,c,b);for(let A=0;A<h.length;A+=1)h[A]&&h[A].m(M,b);we(M,f,b),d=!0},p(M,b){b[0]&2064&&(p=Bt(["straight","corner","T","cross","deadEnd"]),dt(),e=jn(e,b,v,1,M,p,t,n.parentNode,Qn,Xf,n,kf),pt()),b[0]&1839104&&(g=Bt(M[12]),dt(),i=jn(i,b,m,1,M,g,s,a.parentNode,Qn,qf,a,zf),pt()),b[0]&1843200&&(x=Bt(M[13]),dt(),o=jn(o,b,_,1,M,x,l,c.parentNode,Qn,Yf,c,Bf),pt()),b[0]&1843200&&(y=Bt(M[13]),dt(),h=jn(h,b,S,1,M,y,u,f.parentNode,Qn,Jf,f,Ff),pt())},i(M){if(!d){for(let b=0;b<5;b+=1)X(e[b]);for(let b=0;b<g.length;b+=1)X(i[b]);for(let b=0;b<x.length;b+=1)X(o[b]);for(let b=0;b<y.length;b+=1)X(h[b]);d=!0}},o(M){for(let b=0;b<5;b+=1)Q(e[b]);for(let b=0;b<i.length;b+=1)Q(i[b]);for(let b=0;b<o.length;b+=1)Q(o[b]);for(let b=0;b<h.length;b+=1)Q(h[b]);d=!1},d(M){M&&(Se(n),Se(a),Se(c),Se(f));for(let b=0;b<5;b+=1)e[b].d(M);for(let b=0;b<i.length;b+=1)i[b].d(M);for(let b=0;b<o.length;b+=1)o[b].d(M);for(let b=0;b<h.length;b+=1)h[b].d(M)}}}function Wf(r,e){let t,n,i;return n=new f1({props:{position:[e[100].x,e[100].y,0],rotation:[0,0,e[100].rot]}}),{key:r,first:null,c(){t=bt(),Pe(n.$$.fragment),this.first=t},m(s,a){we(s,t,a),Re(n,s,a),i=!0},p(s,a){e=s;const o={};a[0]&2048&&(o.position=[e[100].x,e[100].y,0]),a[0]&2048&&(o.rotation=[0,0,e[100].rot]),n.$set(o)},i(s){i||(X(n.$$.fragment,s),i=!0)},o(s){Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(n,s)}}}function J1(r){let e,t,n=[],i=new Map,s,a;e=new Oe.MeshStandardMaterial({props:{color:pw,roughness:.55,metalness:.08,envMapIntensity:.4}});let o=Bt(r[11][r[97]]);const l=c=>`${c[97]}-${c[58]}`;for(let c=0;c<o.length;c+=1){let h=Vf(r,o,c),u=l(h);i.set(u,n[c]=Wf(u,h))}return{c(){Pe(e.$$.fragment),t=Ze();for(let c=0;c<n.length;c+=1)n[c].c();s=Ze()},m(c,h){Re(e,c,h),we(c,t,h);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(c,h);we(c,s,h),a=!0},p(c,h){h[0]&2048&&(o=Bt(c[11][c[97]]),dt(),n=jn(n,h,l,1,c,o,i,s.parentNode,Qn,Wf,s,Vf),pt())},i(c){if(!a){X(e.$$.fragment,c);for(let h=0;h<o.length;h+=1)X(n[h]);a=!0}},o(c){Q(e.$$.fragment,c);for(let h=0;h<n.length;h+=1)Q(n[h]);a=!1},d(c){c&&(Se(t),Se(s)),Ce(e,c);for(let h=0;h<n.length;h+=1)n[h].d(c)}}}function Xf(r,e){let t,n,i;return n=new r1({props:{geometry:e[4][e[97]],castShadow:!0,receiveShadow:!0,$$slots:{default:[J1]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=bt(),Pe(n.$$.fragment),this.first=t},m(s,a){we(s,t,a),Re(n,s,a),i=!0},p(s,a){e=s;const o={};a[0]&16&&(o.geometry=e[4][e[97]]),a[0]&2048|a[3]&512&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i(s){i||(X(n.$$.fragment,s),i=!0)},o(s){Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(n,s)}}}function K1(r){let e,t,n,i;return e=new Oe.PlaneGeometry({props:{args:r[95].type==="h"?[r[95].length,r[19]*.3]:[r[19]*.3,r[95].length]}}),n=new Oe.MeshStandardMaterial({props:{color:"#ffffff",emissive:"#ffffff",emissiveIntensity:1.4,toneMapped:!1,transparent:!0,opacity:1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&528384&&(o.args=s[95].type==="h"?[s[95].length,s[19]*.3]:[s[19]*.3,s[95].length]),e.$set(o)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function j1(r){let e,t,n,i,s;return e=new Oe.PlaneGeometry({props:{args:r[95].type==="h"?[r[95].length,r[19]*.7]:[r[19]*.7,r[95].length]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.2,toneMapped:!1,transparent:!0,opacity:.75}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze()},m(a,o){Re(e,a,o),we(a,t,o),Re(n,a,o),we(a,i,o),s=!0},p(a,o){const l={};o[0]&528384&&(l.args=a[95].type==="h"?[a[95].length,a[19]*.7]:[a[19]*.7,a[95].length]),e.$set(l);const c={};o[0]&262144&&(c.color=a[18]),o[0]&262144&&(c.emissive=a[18]),n.$set(c)},i(a){s||(X(e.$$.fragment,a),X(n.$$.fragment,a),s=!0)},o(a){Q(e.$$.fragment,a),Q(n.$$.fragment,a),s=!1},d(a){a&&(Se(t),Se(i)),Ce(e,a),Ce(n,a)}}}function qf(r,e){let t,n,i,s,a;return n=new Oe.Mesh({props:{position:[e[95].x,e[95].y,e[20]],$$slots:{default:[K1]},$$scope:{ctx:e}}}),s=new Oe.Mesh({props:{position:[e[95].x,e[95].y,e[20]+.1],$$slots:{default:[j1]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=bt(),Pe(n.$$.fragment),i=Ze(),Pe(s.$$.fragment),this.first=t},m(o,l){we(o,t,l),Re(n,o,l),we(o,i,l),Re(s,o,l),a=!0},p(o,l){e=o;const c={};l[0]&1052672&&(c.position=[e[95].x,e[95].y,e[20]]),l[0]&528384|l[3]&512&&(c.$$scope={dirty:l,ctx:e}),n.$set(c);const h={};l[0]&1052672&&(h.position=[e[95].x,e[95].y,e[20]+.1]),l[0]&790528|l[3]&512&&(h.$$scope={dirty:l,ctx:e}),s.$set(h)},i(o){a||(X(n.$$.fragment,o),X(s.$$.fragment,o),a=!0)},o(o){Q(n.$$.fragment,o),Q(s.$$.fragment,o),a=!1},d(o){o&&(Se(t),Se(i)),Ce(n,o),Ce(s,o)}}}function $f(r){let e,t;return e=new Oe.Mesh({props:{position:[r[86].x,r[86].y,r[20]+.15],$$slots:{default:[Q1]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&1056768&&(s.position=[n[86].x,n[86].y,n[20]+.15]),i[0]&786432|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Q1(r){let e,t,n,i,s;return e=new Oe.CircleGeometry({props:{args:[r[19]*.55,16]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1,transparent:!0,opacity:.85,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze()},m(a,o){Re(e,a,o),we(a,t,o),Re(n,a,o),we(a,i,o),s=!0},p(a,o){const l={};o[0]&524288&&(l.args=[a[19]*.55,16]),e.$set(l);const c={};o[0]&262144&&(c.color=a[18]),o[0]&262144&&(c.emissive=a[18]),n.$set(c)},i(a){s||(X(e.$$.fragment,a),X(n.$$.fragment,a),s=!0)},o(a){Q(e.$$.fragment,a),Q(n.$$.fragment,a),s=!1},d(a){a&&(Se(t),Se(i)),Ce(e,a),Ce(n,a)}}}function Yf(r,e){let t,n,i,s=!e[86].isIntersection&&$f(e);return{key:r,first:null,c(){t=bt(),s&&s.c(),n=bt(),this.first=t},m(a,o){we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[86].isIntersection?s&&(dt(),Q(s,1,1,()=>{s=null}),pt()):s?(s.p(e,o),o[0]&8192&&X(s,1)):(s=$f(e),s.c(),X(s,1),s.m(n.parentNode,n))},i(a){i||(X(s),i=!0)},o(a){Q(s),i=!1},d(a){a&&(Se(t),Se(n)),s&&s.d(a)}}}function Zf(r){let e,t;return e=new Oe.Mesh({props:{position:[r[86].x,r[86].y,r[20]+.3],$$slots:{default:[ew]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&1056768&&(s.position=[n[86].x,n[86].y,n[20]+.3]),i[0]&786432|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function ew(r){let e,t,n,i,s;return e=new Oe.SphereGeometry({props:{args:[r[19]*.8,16,8]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.2,transparent:!0,opacity:.95,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze()},m(a,o){Re(e,a,o),we(a,t,o),Re(n,a,o),we(a,i,o),s=!0},p(a,o){const l={};o[0]&524288&&(l.args=[a[19]*.8,16,8]),e.$set(l);const c={};o[0]&262144&&(c.color=a[18]),o[0]&262144&&(c.emissive=a[18]),n.$set(c)},i(a){s||(X(e.$$.fragment,a),X(n.$$.fragment,a),s=!0)},o(a){Q(e.$$.fragment,a),Q(n.$$.fragment,a),s=!1},d(a){a&&(Se(t),Se(i)),Ce(e,a),Ce(n,a)}}}function Jf(r,e){let t,n,i,s=e[86].isIntersection&&Zf(e);return{key:r,first:null,c(){t=bt(),s&&s.c(),n=bt(),this.first=t},m(a,o){we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[86].isIntersection?s?(s.p(e,o),o[0]&8192&&X(s,1)):(s=Zf(e),s.c(),X(s,1),s.m(n.parentNode,n)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){i||(X(s),i=!0)},o(a){Q(s),i=!1},d(a){a&&(Se(t),Se(n)),s&&s.d(a)}}}function Kf(r){let e=[],t=new Map,n,i,s=Bt(r[0].checkpoints);const a=o=>o[58];for(let o=0;o<s.length;o+=1){let l=Of(r,s,o),c=a(l);t.set(c,e[o]=jf(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=bt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&1572865&&(s=Bt(o[0].checkpoints),dt(),e=jn(e,l,a,1,o,s,t,n.parentNode,Qn,jf,n,Of),pt())},i(o){if(!i){for(let l=0;l<s.length;l+=1)X(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)Q(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function tw(r){let e,t,n,i,s;return e=new Oe.PlaneGeometry({props:{args:r[88].horizontal?[r[90],r[91]]:[r[91],r[90]]}}),n=new Oe.MeshStandardMaterial({props:{color:r[89],emissive:r[89],emissiveIntensity:1.5,toneMapped:!1,transparent:!0,opacity:.95}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze()},m(a,o){Re(e,a,o),we(a,t,o),Re(n,a,o),we(a,i,o),s=!0},p(a,o){const l={};o[0]&524289&&(l.args=a[88].horizontal?[a[90],a[91]]:[a[91],a[90]]),e.$set(l);const c={};o[0]&1&&(c.color=a[89]),o[0]&1&&(c.emissive=a[89]),n.$set(c)},i(a){s||(X(e.$$.fragment,a),X(n.$$.fragment,a),s=!0)},o(a){Q(e.$$.fragment,a),Q(n.$$.fragment,a),s=!1},d(a){a&&(Se(t),Se(i)),Ce(e,a),Ce(n,a)}}}function jf(r,e){let t,n,i;return n=new Oe.Mesh({props:{position:[e[70],e[71],e[20]+.5],$$slots:{default:[tw]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=bt(),Pe(n.$$.fragment),this.first=t},m(s,a){we(s,t,a),Re(n,s,a),i=!0},p(s,a){e=s;const o={};a[0]&1048577&&(o.position=[e[70],e[71],e[20]+.5]),a[0]&524289|a[3]&512&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i(s){i||(X(n.$$.fragment,s),i=!0)},o(s){Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(n,s)}}}function Qf(r){let e=[],t=new Map,n,i,s=Bt(r[13]);const a=o=>`light-node-${o[58]}`;for(let o=0;o<s.length;o+=1){let l=Nf(r,s,o),c=a(l);t.set(c,e[o]=td(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=bt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&1318913&&(s=Bt(o[13]),dt(),e=jn(e,l,a,1,o,s,t,n.parentNode,Qn,td,n,Nf),pt())},i(o){if(!i){for(let l=0;l<s.length;l+=1)X(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)Q(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function ed(r){let e,t;return e=new Oe.PointLight({props:{position:[r[86].x,r[86].y,r[20]+2],intensity:1.6,distance:Math.min(r[0].cw,r[0].ch)*2.5,color:r[18],decay:1.5}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&1056768&&(s.position=[n[86].x,n[86].y,n[20]+2]),i[0]&1&&(s.distance=Math.min(n[0].cw,n[0].ch)*2.5),i[0]&262144&&(s.color=n[18]),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function td(r,e){let t,n,i,s=e[86].isIntersection&&ed(e);return{key:r,first:null,c(){t=bt(),s&&s.c(),n=bt(),this.first=t},m(a,o){we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[86].isIntersection?s?(s.p(e,o),o[0]&8192&&X(s,1)):(s=ed(e),s.c(),X(s,1),s.m(n.parentNode,n)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){i||(X(s),i=!0)},o(a){Q(s),i=!1},d(a){a&&(Se(t),Se(n)),s&&s.d(a)}}}function nd(r){let e,t,n,i,s,a,o,l;return e=new Oe.Mesh({props:{position:[0,r[0].H/2+r[83]+r[80]/2,r[82]],$$slots:{default:[nw]},$$scope:{ctx:r}}}),n=new Oe.Mesh({props:{position:[0,-r[0].H/2-r[83]-r[80]/2,r[82]],$$slots:{default:[iw]},$$scope:{ctx:r}}}),s=new Oe.Mesh({props:{position:[-r[0].W/2-r[83]-r[80]/2,0,r[82]],$$slots:{default:[sw]},$$scope:{ctx:r}}}),o=new Oe.Mesh({props:{position:[r[0].W/2+r[83]+r[80]/2,0,r[82]],$$slots:{default:[rw]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment),i=Ze(),Pe(s.$$.fragment),a=Ze(),Pe(o.$$.fragment)},m(c,h){Re(e,c,h),we(c,t,h),Re(n,c,h),we(c,i,h),Re(s,c,h),we(c,a,h),Re(o,c,h),l=!0},p(c,h){const u={};h[0]&257&&(u.position=[0,c[0].H/2+c[83]+c[80]/2,c[82]]),h[0]&262145|h[3]&512&&(u.$$scope={dirty:h,ctx:c}),e.$set(u);const f={};h[0]&257&&(f.position=[0,-c[0].H/2-c[83]-c[80]/2,c[82]]),h[0]&262145|h[3]&512&&(f.$$scope={dirty:h,ctx:c}),n.$set(f);const d={};h[0]&257&&(d.position=[-c[0].W/2-c[83]-c[80]/2,0,c[82]]),h[0]&262145|h[3]&512&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const p={};h[0]&257&&(p.position=[c[0].W/2+c[83]+c[80]/2,0,c[82]]),h[0]&262145|h[3]&512&&(p.$$scope={dirty:h,ctx:c}),o.$set(p)},i(c){l||(X(e.$$.fragment,c),X(n.$$.fragment,c),X(s.$$.fragment,c),X(o.$$.fragment,c),l=!0)},o(c){Q(e.$$.fragment,c),Q(n.$$.fragment,c),Q(s.$$.fragment,c),Q(o.$$.fragment,c),l=!1},d(c){c&&(Se(t),Se(i),Se(a)),Ce(e,c),Ce(n,c),Ce(s,c),Ce(o,c)}}}function nw(r){let e,t,n,i;return e=new Oe.BoxGeometry({props:{args:[r[84],r[80],r[81]]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.6,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&1&&(o.args=[s[84],s[80],s[81]]),e.$set(o);const l={};a[0]&262144&&(l.color=s[18]),a[0]&262144&&(l.emissive=s[18]),n.$set(l)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function iw(r){let e,t,n,i;return e=new Oe.BoxGeometry({props:{args:[r[84],r[80],r[81]]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.6,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&1&&(o.args=[s[84],s[80],s[81]]),e.$set(o);const l={};a[0]&262144&&(l.color=s[18]),a[0]&262144&&(l.emissive=s[18]),n.$set(l)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function sw(r){let e,t,n,i;return e=new Oe.BoxGeometry({props:{args:[r[80],r[0].H+r[83]*2,r[81]]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.6,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&1&&(o.args=[s[80],s[0].H+s[83]*2,s[81]]),e.$set(o);const l={};a[0]&262144&&(l.color=s[18]),a[0]&262144&&(l.emissive=s[18]),n.$set(l)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function rw(r){let e,t,n,i;return e=new Oe.BoxGeometry({props:{args:[r[80],r[0].H+r[83]*2,r[81]]}}),n=new Oe.MeshStandardMaterial({props:{color:r[18],emissive:r[18],emissiveIntensity:1.6,toneMapped:!1}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&1&&(o.args=[s[80],s[0].H+s[83]*2,s[81]]),e.$set(o);const l={};a[0]&262144&&(l.color=s[18]),a[0]&262144&&(l.emissive=s[18]),n.$set(l)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function id(r){let e=[],t=new Map,n,i,s=Bt(r[0].collectibles);const a=o=>o[68].r+"-"+o[68].c;for(let o=0;o<s.length;o+=1){let l=Uf(r,s,o),c=a(l);t.set(c,e[o]=rd(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=bt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&1065025&&(s=Bt(o[0].collectibles),dt(),e=jn(e,l,a,1,o,s,t,n.parentNode,Qn,rd,n,Uf),pt())},i(o){if(!i){for(let l=0;l<s.length;l+=1)X(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)Q(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function sd(r){let e,t;return e=new Oe.Sprite({props:{position:[r[70],r[71],r[20]+1.5],scale:[r[79],r[79],1],$$slots:{default:[aw]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&1048577&&(s.position=[n[70],n[71],n[20]+1.5]),i[0]&65&&(s.scale=[n[79],n[79],1]),i[0]&16449|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function aw(r){let e,t,n;return e=new Oe.SpriteMaterial({props:{map:r[69],transparent:!0,opacity:r[77],depthWrite:!1,depthTest:!1}}),{c(){Pe(e.$$.fragment),t=Ze()},m(i,s){Re(e,i,s),we(i,t,s),n=!0},p(i,s){const a={};s[0]&16385&&(a.map=i[69]),s[0]&65&&(a.opacity=i[77]),e.$set(a)},i(i){n||(X(e.$$.fragment,i),n=!0)},o(i){Q(e.$$.fragment,i),n=!1},d(i){i&&Se(t),Ce(e,i)}}}function rd(r,e){let t,n,i,s=e[69]&&e[73]&&sd(Hl(e));return{key:r,first:null,c(){t=bt(),s&&s.c(),n=bt(),this.first=t},m(a,o){we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[69]&&e[73]?s?(s.p(Hl(e),o),o[0]&16449&&X(s,1)):(s=sd(Hl(e)),s.c(),X(s,1),s.m(n.parentNode,n)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){i||(X(s),i=!0)},o(a){Q(s),i=!1},d(a){a&&(Se(t),Se(n)),s&&s.d(a)}}}function ad(r){let e,t;return e=new Oe.Sprite({props:{position:[r[62],r[63],r[20]+1.5],scale:[r[66],r[66]*r[67],1],$$slots:{default:[ow]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&1048577&&(s.position=[n[62],n[63],n[20]+1.5]),i[0]&65&&(s.scale=[n[66],n[66]*n[67],1]),i[0]&16384|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function ow(r){let e,t;return e=new Oe.SpriteMaterial({props:{map:r[14].finish,transparent:!0,depthWrite:!1,depthTest:!1}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&16384&&(s.map=n[14].finish),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function od(r){let e,t,n,i;e=new Oe.Mesh({props:{position:[r[24],r[23],(r[20]+r[22])*r[7]],scale:[r[7],r[7],r[7]],castShadow:!0,$$slots:{default:[lw]},$$scope:{ctx:r}}});let s=r[16]&&r[15].length>1&&ld(r);return{c(){Pe(e.$$.fragment),t=Ze(),s&&s.c(),n=bt()},m(a,o){Re(e,a,o),we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){const l={};o[0]&30408832&&(l.position=[a[24],a[23],(a[20]+a[22])*a[7]]),o[0]&128&&(l.scale=[a[7],a[7],a[7]]),o[0]&4194304|o[3]&512&&(l.$$scope={dirty:o,ctx:a}),e.$set(l),a[16]&&a[15].length>1?s?(s.p(a,o),o[0]&98304&&X(s,1)):(s=ld(a),s.c(),X(s,1),s.m(n.parentNode,n)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){i||(X(e.$$.fragment,a),X(s),i=!0)},o(a){Q(e.$$.fragment,a),Q(s),i=!1},d(a){a&&(Se(t),Se(n)),Ce(e,a),s&&s.d(a)}}}function lw(r){let e,t,n,i;return e=new Oe.SphereGeometry({props:{args:[r[22],32,16]}}),n=new Oe.MeshStandardMaterial({props:{color:"#D4AF37",metalness:1,roughness:.15}}),{c(){Pe(e.$$.fragment),t=Ze(),Pe(n.$$.fragment)},m(s,a){Re(e,s,a),we(s,t,a),Re(n,s,a),i=!0},p(s,a){const o={};a[0]&4194304&&(o.args=[s[22],32,16]),e.$set(o)},i(s){i||(X(e.$$.fragment,s),X(n.$$.fragment,s),i=!0)},o(s){Q(e.$$.fragment,s),Q(n.$$.fragment,s),i=!1},d(s){s&&Se(t),Ce(e,s),Ce(n,s)}}}function ld(r){let e=[],t=new Map,n,i,s=Bt(r[15]);const a=o=>`trail-${o[58]}`;for(let o=0;o<s.length;o+=1){let l=Df(r,s,o),c=a(l);t.set(c,e[o]=hd(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=bt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l[0]&5341184&&(s=Bt(o[15]),dt(),e=jn(e,l,a,1,o,s,t,n.parentNode,Qn,hd,n,Df),pt())},i(o){if(!i){for(let l=0;l<s.length;l+=1)X(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)Q(e[l]);i=!1},d(o){o&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function cd(r){let e,t;return e=new Oe.Sprite({props:{position:[r[56].x,r[56].y,r[20]+r[22]*.5],scale:[r[61],r[61],1],$$slots:{default:[cw]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&5275648&&(s.position=[n[56].x,n[56].y,n[20]+n[22]*.5]),i[0]&4227072&&(s.scale=[n[61],n[61],1]),i[0]&98304|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function cw(r){let e,t,n;return e=new Oe.SpriteMaterial({props:{map:r[16],transparent:!0,opacity:r[60],depthTest:!1,depthWrite:!1}}),{c(){Pe(e.$$.fragment),t=Ze()},m(i,s){Re(e,i,s),we(i,t,s),n=!0},p(i,s){const a={};s[0]&65536&&(a.map=i[16]),s[0]&32768&&(a.opacity=i[60]),e.$set(a)},i(i){n||(X(e.$$.fragment,i),n=!0)},o(i){Q(e.$$.fragment,i),n=!1},d(i){i&&Se(t),Ce(e,i)}}}function hd(r,e){let t,n,i,s=e[58]>0&&cd(kl(e));return{key:r,first:null,c(){t=bt(),s&&s.c(),n=bt(),this.first=t},m(a,o){we(a,t,o),s&&s.m(a,o),we(a,n,o),i=!0},p(a,o){e=a,e[58]>0?s?(s.p(kl(e),o),o[0]&32768&&X(s,1)):(s=cd(kl(e)),s.c(),X(s,1),s.m(n.parentNode,n)):s&&(dt(),Q(s,1,1,()=>{s=null}),pt())},i(a){i||(X(s),i=!0)},o(a){Q(s),i=!1},d(a){a&&(Se(t),Se(n)),s&&s.d(a)}}}function hw(r){var x,_,y;let e,t,n,i,s,a,o,l,c,h=r[0]&&Hf(r),u=r[0]&&r[0].maze&&r[4]&&r[11]&&Gf(r),f=((x=r[0])==null?void 0:x.checkpoints)&&Kf(r),d=r[0]&&r[0].maze&&Qf(r),p=r[0]&&nd(Gl(r)),v=((_=r[0])==null?void 0:_.collectibles)&&id(r),g=((y=r[0])==null?void 0:y.hole)&&r[14].finish&&ad(Vl(r)),m=r[0]&&r[17]&&od(r);return{c(){h&&h.c(),e=Ze(),u&&u.c(),t=Ze(),f&&f.c(),n=Ze(),d&&d.c(),i=Ze(),p&&p.c(),s=Ze(),v&&v.c(),a=Ze(),g&&g.c(),o=Ze(),m&&m.c(),l=bt()},m(S,M){h&&h.m(S,M),we(S,e,M),u&&u.m(S,M),we(S,t,M),f&&f.m(S,M),we(S,n,M),d&&d.m(S,M),we(S,i,M),p&&p.m(S,M),we(S,s,M),v&&v.m(S,M),we(S,a,M),g&&g.m(S,M),we(S,o,M),m&&m.m(S,M),we(S,l,M),c=!0},p(S,M){var b,A,w;S[0]?h?(h.p(S,M),M[0]&1&&X(h,1)):(h=Hf(S),h.c(),X(h,1),h.m(e.parentNode,e)):h&&(dt(),Q(h,1,1,()=>{h=null}),pt()),S[0]&&S[0].maze&&S[4]&&S[11]?u?(u.p(S,M),M[0]&2065&&X(u,1)):(u=Gf(S),u.c(),X(u,1),u.m(t.parentNode,t)):u&&(dt(),Q(u,1,1,()=>{u=null}),pt()),(b=S[0])!=null&&b.checkpoints?f?(f.p(S,M),M[0]&1&&X(f,1)):(f=Kf(S),f.c(),X(f,1),f.m(n.parentNode,n)):f&&(dt(),Q(f,1,1,()=>{f=null}),pt()),S[0]&&S[0].maze?d?(d.p(S,M),M[0]&1&&X(d,1)):(d=Qf(S),d.c(),X(d,1),d.m(i.parentNode,i)):d&&(dt(),Q(d,1,1,()=>{d=null}),pt()),S[0]?p?(p.p(Gl(S),M),M[0]&1&&X(p,1)):(p=nd(Gl(S)),p.c(),X(p,1),p.m(s.parentNode,s)):p&&(dt(),Q(p,1,1,()=>{p=null}),pt()),(A=S[0])!=null&&A.collectibles?v?(v.p(S,M),M[0]&1&&X(v,1)):(v=id(S),v.c(),X(v,1),v.m(a.parentNode,a)):v&&(dt(),Q(v,1,1,()=>{v=null}),pt()),(w=S[0])!=null&&w.hole&&S[14].finish?g?(g.p(Vl(S),M),M[0]&16385&&X(g,1)):(g=ad(Vl(S)),g.c(),X(g,1),g.m(o.parentNode,o)):g&&(dt(),Q(g,1,1,()=>{g=null}),pt()),S[0]&&S[17]?m?(m.p(S,M),M[0]&131073&&X(m,1)):(m=od(S),m.c(),X(m,1),m.m(l.parentNode,l)):m&&(dt(),Q(m,1,1,()=>{m=null}),pt())},i(S){c||(X(h),X(u),X(f),X(d),X(p),X(v),X(g),X(m),c=!0)},o(S){Q(h),Q(u),Q(f),Q(d),Q(p),Q(v),Q(g),Q(m),c=!1},d(S){S&&(Se(e),Se(t),Se(n),Se(i),Se(s),Se(a),Se(o),Se(l)),h&&h.d(S),u&&u.d(S),f&&f.d(S),d&&d.d(S),p&&p.d(S),v&&v.d(S),g&&g.d(S),m&&m.d(S)}}}function uw(r){let e,t;return e=new Oe.Group({props:{"rotation.x":r[26],"rotation.y":r[25],$$slots:{default:[hw]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},m(n,i){Re(e,n,i),t=!0},p(n,i){const s={};i[0]&67108864&&(s["rotation.x"]=n[26]),i[0]&33554432&&(s["rotation.y"]=n[25]),i[0]&33552881|i[3]&512&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(X(e.$$.fragment,n),t=!0)},o(n){Q(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function fw(r){let e,t,n,i,s,a,o,l,c,h,u,f,d,p;function v(_){r[39](_)}let g={makeDefault:!0,position:[0,r[10],r[9]],fov:Om,near:1,far:r[28]*3};r[2]!==void 0&&(g.ref=r[2]),e=new Oe.PerspectiveCamera({props:g}),Bs.push(()=>Wl(e,"ref",v)),i=new q1({props:{bloomStrength:.4,bloomRadius:.2,bloomThreshold:1}}),a=new Oe.AmbientLight({props:{intensity:.8,color:"#fffdf9"}});function m(_){r[40](_)}let x={position:[r[0]?-r[0].W*.4:-200,r[0]?r[0].H*.5:250,(r[0]?Math.min(r[0].cw,r[0].ch):80)*8],intensity:1.5,color:"#fff5e0",castShadow:!0};return r[3]!==void 0&&(x.ref=r[3]),l=new Oe.DirectionalLight({props:x}),Bs.push(()=>Wl(l,"ref",m)),u=new Oe.DirectionalLight({props:{position:[r[0]?r[0].W*.3:150,r[0]?-r[0].H*.3:-150,400],intensity:.3,color:"#fff0d0"}}),d=new Oe.Group({props:{"rotation.z":r[27],$$slots:{default:[uw]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment),n=Ze(),Pe(i.$$.fragment),s=Ze(),Pe(a.$$.fragment),o=Ze(),Pe(l.$$.fragment),h=Ze(),Pe(u.$$.fragment),f=Ze(),Pe(d.$$.fragment)},m(_,y){Re(e,_,y),we(_,n,y),Re(i,_,y),we(_,s,y),Re(a,_,y),we(_,o,y),Re(l,_,y),we(_,h,y),Re(u,_,y),we(_,f,y),Re(d,_,y),p=!0},p(_,y){const S={};y[0]&1536&&(S.position=[0,_[10],_[9]]),y[0]&268435456&&(S.far=_[28]*3),!t&&y[0]&4&&(t=!0,S.ref=_[2],Xl(()=>t=!1)),e.$set(S);const M={};y[0]&1&&(M.position=[_[0]?-_[0].W*.4:-200,_[0]?_[0].H*.5:250,(_[0]?Math.min(_[0].cw,_[0].ch):80)*8]),!c&&y[0]&8&&(c=!0,M.ref=_[3],Xl(()=>c=!1)),l.$set(M);const b={};y[0]&1&&(b.position=[_[0]?_[0].W*.3:150,_[0]?-_[0].H*.3:-150,400]),u.$set(b);const A={};y[0]&134217728&&(A["rotation.z"]=_[27]),y[0]&134216177|y[3]&512&&(A.$$scope={dirty:y,ctx:_}),d.$set(A)},i(_){p||(X(e.$$.fragment,_),X(i.$$.fragment,_),X(a.$$.fragment,_),X(l.$$.fragment,_),X(u.$$.fragment,_),X(d.$$.fragment,_),p=!0)},o(_){Q(e.$$.fragment,_),Q(i.$$.fragment,_),Q(a.$$.fragment,_),Q(l.$$.fragment,_),Q(u.$$.fragment,_),Q(d.$$.fragment,_),p=!1},d(_){_&&(Se(n),Se(s),Se(o),Se(h),Se(f)),Ce(e,_),Ce(i,_),Ce(a,_),Ce(l,_),Ce(u,_),Ce(d,_)}}}function dw(r){let e,t,n;return t=new _S({props:{shadows:qr,$$slots:{default:[fw]},$$scope:{ctx:r}}}),{c(){e=dd("div"),Pe(t.$$.fragment),pd(e,"class","threlte-host svelte-1x3ih1a")},m(i,s){we(i,e,s),Re(t,e,null),r[41](e),n=!0},p(i,s){const a={};s[0]&536870909|s[3]&512&&(a.$$scope={dirty:s,ctx:i}),t.$set(a)},i(i){n||(X(t.$$.fragment,i),n=!0)},o(i){Q(t.$$.fragment,i),n=!1},d(i){i&&Se(e),Ce(t),r[41](null)}}}const ud=12,Om=35,pw="#F2E8D2",Fm=10,mw=22;function fr(r,e,t,n){const i=e/2,s=t/2,a=.001;return r.map(o=>{let l=0,c=0;return Math.abs(o.x-i)<a&&(l=+n),Math.abs(o.x+i)<a&&(l=-n),Math.abs(o.y-s)<a&&(c=+n),Math.abs(o.y+s)<a&&(c=-n),{x:o.x+l,y:o.y+c}})}function gw(r){const e=!r.T,t=!r.R,n=!r.B,i=!r.L,s=(e?1:0)+(t?1:0)+(n?1:0)+(i?1:0);if(s===0)return null;if(s===4)return{type:"cross",rot:0};if(s===1){if(e)return{type:"deadEnd",rot:0};if(i)return{type:"deadEnd",rot:Math.PI/2};if(n)return{type:"deadEnd",rot:Math.PI};if(t)return{type:"deadEnd",rot:-Math.PI/2}}if(s===2){if(e&&n)return{type:"straight",rot:0};if(i&&t)return{type:"straight",rot:Math.PI/2};if(e&&t)return{type:"corner",rot:0};if(t&&n)return{type:"corner",rot:-Math.PI/2};if(n&&i)return{type:"corner",rot:Math.PI};if(i&&e)return{type:"corner",rot:Math.PI/2}}if(s===3){if(r.L)return{type:"T",rot:0};if(r.B)return{type:"T",rot:Math.PI/2};if(r.R)return{type:"T",rot:Math.PI};if(r.T)return{type:"T",rot:-Math.PI/2}}return null}function _w(r){const e={straight:[],corner:[],T:[],cross:[],deadEnd:[]};for(let t=0;t<r.R;t++)for(let n=0;n<r.C;n++){const i=gw(r.maze[t][n]);i&&e[i.type].push({x:n*r.cw+r.cw/2-r.W/2,y:r.H/2-t*r.ch-r.ch/2,rot:i.rot})}return e}function vw(r){const e=[];for(let t=0;t<r.R;t++)for(let n=0;n<r.C;n++){const i=r.maze[t][n],s=n*r.cw+r.cw/2-r.W/2,a=r.H/2-t*r.ch-r.ch/2;!i.R&&n<r.C-1&&e.push({type:"h",x:s+r.cw/2,y:a,length:r.cw}),!i.B&&t<r.R-1&&e.push({type:"v",x:s,y:a-r.ch/2,length:r.ch})}return e}function xw(r){const e=[];for(let t=0;t<r.R;t++)for(let n=0;n<r.C;n++){const i=r.maze[t][n],s=(i.T?0:1)+(i.R?0:1)+(i.B?0:1)+(i.L?0:1);s!==0&&e.push({x:n*r.cw+r.cw/2-r.W/2,y:r.H/2-t*r.ch-r.ch/2,isIntersection:s>=3})}return e}function yw(r,e,t){let n,i,s,a,o,l,c,h,u,f,d,p,v,g,m,x,_,y,S,M,b,{G:A=null}=e,{deviceAngle:w=0}=e,{boardTiltX:E=0}=e,{boardTiltY:U=0}=e,{rect:q=null}=e;const oe=Math.PI/180;let I,F,H;function te(B,z,le){const ne=new wi,Y=new Set(z),ve=B.length;for(let ye=0;ye<ve;ye++){const $=B[ye];if(Y.has(ye)&&le>0){const it=B[(ye-1+ve)%ve],Qe=B[(ye+1)%ve],He=it.x-$.x,Ne=it.y-$.y,Ae=Qe.x-$.x,qe=Qe.y-$.y,st=Math.hypot(He,Ne),ut=Math.hypot(Ae,qe);if(st<1e-6||ut<1e-6){ye===0?ne.moveTo($.x,$.y):ne.lineTo($.x,$.y);continue}const $e=Math.min(le,st/2,ut/2),ue=$.x+He/st*$e,D=$.y+Ne/st*$e,de=$.x+Ae/ut*$e,pe=$.y+qe/ut*$e;ye===0?ne.moveTo(ue,D):ne.lineTo(ue,D),ne.quadraticCurveTo($.x,$.y,de,pe)}else ye===0?ne.moveTo($.x,$.y):ne.lineTo($.x,$.y)}return ne.closePath(),ne}function ee(B,z,le,ne){const Y=B/2,ve=le/2;let ye=[{x:Y,y:ve},{x:-Y,y:ve},{x:-Y,y:-ve},{x:Y,y:-ve}];return ye=fr(ye,z,le,ne),te(ye,[],0)}function K(B,z,le,ne){const Y=B/2,ve=z/2,ye=le/2;let $=[{x:Y,y:ye},{x:-Y,y:ye},{x:-Y,y:-Y},{x:Y,y:-Y},{x:ve,y:-Y},{x:ve,y:Y},{x:Y,y:Y}];return $=fr($,z,le,ne),te($,[2,3,6],B*.3)}function se(B,z,le,ne){const Y=B/2,ve=z/2,ye=le/2;let $=[{x:Y,y:ye},{x:-Y,y:ye},{x:-Y,y:-ye},{x:Y,y:-ye},{x:Y,y:-Y},{x:ve,y:-Y},{x:ve,y:Y},{x:Y,y:Y}];return $=fr($,z,le,ne),te($,[4,7],B*.3)}function re(B,z,le,ne){const Y=B/2,ve=z/2,ye=le/2;let $=[{x:Y,y:ye},{x:-Y,y:ye},{x:-Y,y:Y},{x:-ve,y:Y},{x:-ve,y:-Y},{x:-Y,y:-Y},{x:-Y,y:-ye},{x:Y,y:-ye},{x:Y,y:-Y},{x:ve,y:-Y},{x:ve,y:Y},{x:Y,y:Y}];return $=fr($,z,le,ne),te($,[2,5,8,11],B*.3)}function ge(B,z,le,ne){const Y=B/2,ve=le/2;let ye=[{x:Y,y:ve},{x:-Y,y:ve},{x:-Y,y:-Y},{x:Y,y:-Y}];return ye=fr(ye,z,le,ne),te(ye,[2,3],B*.5)}let W=null,ie=null,_e=[],Ie=[],Me=-1,Le=null;const Xe=["+5s","+10s","+30s","finish"];let Ee={},ke=null;function L(){let B=!0,z=!1;for(const le of Xe){if(!Ee[le]&&Ym(le)){const ne=Zm(le),Y=new oo(ne);Y.colorSpace=Tt,Y.needsUpdate=!0,t(14,Ee[le]=Y,Ee),z=!0}Ee[le]||(B=!1)}z&&t(14,Ee),B?ke=null:ke=requestAnimationFrame(L)}let he=typeof performance<"u"?performance.now():0,J=null,ce=[],j=0;function De(){if(t(6,he=performance.now()),A&&A.ball&&he-j>=mw){const B=A.ball.x-A.W/2,z=A.H/2-A.ball.y;t(15,ce=[{x:B,y:z},...ce].slice(0,Fm)),j=he}J=requestAnimationFrame(De)}let me=null;function C(){const B=document.createElement("canvas");B.width=B.height=64;const z=B.getContext("2d"),le=z.createRadialGradient(32,32,0,32,32,32);le.addColorStop(0,"rgba(212,175,55,1)"),le.addColorStop(.5,"rgba(212,175,55,0.5)"),le.addColorStop(1,"rgba(212,175,55,0)"),z.fillStyle=le,z.fillRect(0,0,64,64);const ne=new oo(B);return ne.colorSpace=Tt,ne.needsUpdate=!0,ne}Wr(()=>{t(16,me=C()),L(),J=requestAnimationFrame(De)}),nn(()=>{ke&&cancelAnimationFrame(ke),J&&cancelAnimationFrame(J),Le&&Le.dispose(),me&&me.dispose();for(const B of Object.values(Ee))B.dispose()});function T(B){F=B,t(2,F)}function O(B){H=B,t(3,H)}function ae(B){Bs[B?"unshift":"push"](()=>{I=B,t(1,I),t(32,q)})}return r.$$set=B=>{"G"in B&&t(0,A=B.G),"deviceAngle"in B&&t(29,w=B.deviceAngle),"boardTiltX"in B&&t(30,E=B.boardTiltX),"boardTiltY"in B&&t(31,U=B.boardTiltY),"rect"in B&&t(32,q=B.rect)},r.$$.update=()=>{var B;if(r.$$.dirty[0]&2|r.$$.dirty[1]&2&&I&&q&&(t(1,I.style.top=q.top+"px",I),t(1,I.style.left=q.left+"px",I),t(1,I.style.width=q.width+"px",I),t(1,I.style.height=q.height+"px",I)),r.$$.dirty[0]&536870912&&t(38,n=w===90||w===270),r.$$.dirty[0]&1&&t(37,i=A?Math.min(A.cw,A.ch)*.15:0),r.$$.dirty[0]&1|r.$$.dirty[1]&192&&t(36,s=A?(n?A.W:A.H)+i*2+8:660),r.$$.dirty[1]&32&&t(35,a=s/2/Math.tan(Om*oe/2)*1.05),r.$$.dirty[1]&16&&t(9,l=a),r.$$.dirty[1]&16&&t(28,c=a),r.$$.dirty[0]&1540&&F&&Number.isFinite(o)&&Number.isFinite(l)&&F.lookAt(0,0,0),r.$$.dirty[0]&9&&H&&A){const z=H.shadow;z.mapSize.set(2048,2048),z.camera.left=-A.W*.7,z.camera.right=A.W*.7,z.camera.top=A.H*.7,z.camera.bottom=-A.H*.7,z.camera.near=1,z.camera.far=Math.min(A.cw,A.ch)*18,z.camera.updateProjectionMatrix(),z.bias=-1e-4,z.radius=4,z.needsUpdate=!0}if(r.$$.dirty[0]&536870912&&t(27,h=+w*oe),r.$$.dirty[1]&1&&t(26,u=+U*ud*oe),r.$$.dirty[0]&1073741824&&t(25,f=+E*ud*oe),r.$$.dirty[0]&1&&t(24,d=A?A.ball.x-A.W/2:0),r.$$.dirty[0]&1&&t(23,p=A?A.H/2-A.ball.y:0),r.$$.dirty[0]&1&&t(22,v=A?A.br:10),r.$$.dirty[0]&1&&t(34,g=A?Math.min(A.cw,A.ch)*(A.trackRatio??.65):30),r.$$.dirty[0]&1&&t(8,m=A?Math.min(A.cw,A.ch)*.32:15),r.$$.dirty[0]&256&&t(21,x=m*.4),r.$$.dirty[0]&256&&t(20,_=m+m*.06+.2),r.$$.dirty[0]&1&&t(19,y=A?Math.min(A.cw,A.ch)*.05:2.5),r.$$.dirty[0]&273|r.$$.dirty[1]&12&&A!=null&&A.maze&&A.lvl!==Me){const z=m*.04,le={depth:m,bevelEnabled:!0,bevelThickness:z,bevelSize:z,bevelSegments:2,steps:1,curveSegments:6},ne={straight:ee(g,A.cw,A.ch,z),corner:K(g,A.cw,A.ch,z),T:se(g,A.cw,A.ch,z),cross:re(g,A.cw,A.ch,z),deadEnd:ge(g,A.cw,A.ch,z)};if(W)for(const Y of Object.keys(W))W[Y].dispose();t(4,W={straight:new Kn(ne.straight,le),corner:new Kn(ne.corner,le),T:new Kn(ne.T,le),cross:new Kn(ne.cross,le),deadEnd:new Kn(ne.deadEnd,le)}),t(11,ie=_w(A)),t(12,_e=vw(A)),t(13,Ie=xw(A)),t(33,Me=A.lvl)}r.$$.dirty[0]&1&&t(18,S=((B=A==null?void 0:A.theme)==null?void 0:B.neon)??"#00c8ff"),r.$$.dirty[0]&65&&t(7,M=(A==null?void 0:A.phase)==="falling"?Math.max(0,1-(he-A.fallT)/480):1),r.$$.dirty[0]&128&&t(17,b=M>.03),r.$$.dirty[0]&33&&A!=null&&A.staticTexture&&(Le==null?void 0:Le.image)!==A.staticTexture&&(Le&&Le.dispose(),t(5,Le=new oo(A.staticTexture)),t(5,Le.colorSpace=Tt,Le),t(5,Le.needsUpdate=!0,Le))},t(10,o=0),[A,I,F,H,W,Le,he,M,m,l,o,ie,_e,Ie,Ee,ce,me,b,S,y,_,x,v,p,d,f,u,h,c,w,E,U,q,Me,g,a,s,i,n,T,O,ae]}class ww extends Bn{constructor(e){super(),zn(this,e,yw,dw,kn,{G:0,deviceAngle:29,boardTiltX:30,boardTiltY:31,rect:32},null,[-1,-1,-1,-1])}}export{ww as default};
