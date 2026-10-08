(()=>{var Xh=0,Wc=1,Zh=2;var YA=1,jh=2,Zs=3,Un=0,ni=1,si=2,Ri=0,js=1,Gi=2,Hc=3,Qc=4,$h=5;var ns=100,eu=101,tu=102,iu=103,nu=104,su=200,Au=201,ru=202,au=203,zc=204,Vc=205,ou=206,cu=207,lu=208,hu=209,uu=210,du=211,fu=212,pu=213,mu=214,Aa=0,ra=1,aa=2,Fs=3,oa=4,ca=5,la=6,ha=7,Yc=0,Cu=1,Bu=2,zi=0,qA=1,JA=2,XA=3,ss=4,ZA=5,jA=6,$A=7;var qc=300,Pn=301,As=302,Pa=303,La=304,er=306,ua=1e3,Zi=1001,da=1002,Pt=1003,gu=1004;var tr=1005;var Qt=1006,Da=1007;var Ln=1008;var Ei=1009,Jc=1010,Xc=1011,$s=1012,Na=1013,Vi=1014,Yi=1015,Kt=1016,Fa=1017,ka=1018,eA=1020,Zc=35902,jc=35899,$c=1021,el=1022,Ui=1023,ji=1026,Dn=1027,tl=1028,Wa=1029,Nn=1030,Ha=1031;var Qa=1033,ir=33776,nr=33777,sr=33778,Ar=33779,za=35840,Va=35841,Ya=35842,qa=35843,Ja=36196,Xa=37492,Za=37496,ja=37488,$a=37489,rr=37490,eo=37491,to=37808,io=37809,no=37810,so=37811,Ao=37812,ro=37813,ao=37814,oo=37815,co=37816,lo=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,Co=36494,Bo=36495,go=36283,Eo=36284,ar=36285,Mo=36286;var IA=2300,fa=2301,na=2302,Kc=2303,Rc=2400,Uc=2401,Pc=2402;var Eu=3200;var So=0,Mu=1,Cn="",Zt="srgb",vA="srgb-linear",GA="linear",nt="srgb";var sa=7680;var Su=519,xu=512,yu=513,Iu=514,xo=515,vu=516,Gu=517,yo=518,_u=519,il=35044,nn=35048;var nl="300 es",Hi=2e3,ks=2001;function Cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _A(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wu(){let n=_A("canvas");return n.style.display="block",n}var yh={},Ws=null;function wA(...n){let e="THREE."+n.shift();Ws?Ws("log",e,...n):console.log(e,...n)}function Tu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Tu(n);let e="THREE."+n.shift();if(Ws)Ws("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=Tu(n);let e="THREE."+n.shift();if(Ws)Ws("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zn(...n){let e=n.join(" ");e in yh||(yh[e]=!0,Le(...n))}function bu(n,e,t){return new Promise(function(i,s){function A(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(A,t);break;default:i()}}setTimeout(A,t)})}var Ou={[Aa]:ra,[aa]:la,[oa]:ha,[Fs]:ca,[ra]:Aa,[la]:aa,[ha]:oa,[ca]:Fs},$i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let A=s.indexOf(t);A!==-1&&s.splice(A,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let A=0,r=s.length;A<r;A++)s[A].call(this,e);e.target=null}}},ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=1234567,xA=Math.PI/180,Hs=180/Math.PI;function dn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ci[n&255]+ci[n>>8&255]+ci[n>>16&255]+ci[n>>24&255]+"-"+ci[e&255]+ci[e>>8&255]+"-"+ci[e>>16&15|64]+ci[e>>24&255]+"-"+ci[t&63|128]+ci[t>>8&255]+"-"+ci[t>>16&255]+ci[t>>24&255]+ci[i&255]+ci[i>>8&255]+ci[i>>16&255]+ci[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function sl(n,e){return(n%e+e)%e}function gf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ef(n,e,t){return n!==e?(t-n)/(e-n):0}function yA(n,e,t){return(1-t)*n+t*e}function Mf(n,e,t,i){return yA(n,e,1-Math.exp(-t*i))}function Sf(n,e=1){return e-Math.abs(sl(n,e*2)-e)}function xf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function If(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vf(n,e){return n+Math.random()*(e-n)}function Gf(n){return n*(.5-Math.random())}function _f(n){n!==void 0&&(Ih=n);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wf(n){return n*xA}function Tf(n){return n*Hs}function bf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rf(n,e,t,i,s){let A=Math.cos,r=Math.sin,a=A(t/2),o=r(t/2),c=A((e+i)/2),l=r((e+i)/2),u=A((e-i)/2),h=r((e-i)/2),d=A((i-e)/2),m=r((i-e)/2);switch(s){case"XYX":n.set(a*l,o*u,o*h,a*c);break;case"YZY":n.set(o*h,a*l,o*u,a*c);break;case"ZXZ":n.set(o*u,o*h,a*l,a*c);break;case"XZX":n.set(a*l,o*m,o*d,a*c);break;case"YXY":n.set(o*d,a*l,o*m,a*c);break;case"ZYZ":n.set(o*m,o*d,a*l,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var or={DEG2RAD:xA,RAD2DEG:Hs,generateUUID:dn,clamp:je,euclideanModulo:sl,mapLinear:gf,inverseLerp:Ef,lerp:yA,damp:Mf,pingpong:Sf,smoothstep:xf,smootherstep:yf,randInt:If,randFloat:vf,randFloatSpread:Gf,seededRandom:_f,degToRad:wf,radToDeg:Tf,isPowerOfTwo:bf,ceilPowerOfTwo:Of,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:Rf,normalize:ct,denormalize:Wi},cl=class cl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),A=this.x-e.x,r=this.y-e.y;return this.x=A*i-r*s+e.x,this.y=A*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;var ge=cl,gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,A,r,a){let o=i[s+0],c=i[s+1],l=i[s+2],u=i[s+3],h=A[r+0],d=A[r+1],m=A[r+2],C=A[r+3];if(u!==C||o!==h||c!==d||l!==m){let f=o*h+c*d+l*m+u*C;f<0&&(h=-h,d=-d,m=-m,C=-C,f=-f);let p=1-a;if(f<.9995){let S=Math.acos(f),G=Math.sin(S);p=Math.sin(p*S)/G,a=Math.sin(a*S)/G,o=o*p+h*a,c=c*p+d*a,l=l*p+m*a,u=u*p+C*a}else{o=o*p+h*a,c=c*p+d*a,l=l*p+m*a,u=u*p+C*a;let S=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=S,c*=S,l*=S,u*=S}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,A,r){let a=i[s],o=i[s+1],c=i[s+2],l=i[s+3],u=A[r],h=A[r+1],d=A[r+2],m=A[r+3];return e[t]=a*m+l*u+o*d-c*h,e[t+1]=o*m+l*h+c*u-a*d,e[t+2]=c*m+l*d+a*h-o*u,e[t+3]=l*m-a*u-o*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,A=e._z,r=e._order,a=Math.cos,o=Math.sin,c=a(i/2),l=a(s/2),u=a(A/2),h=o(i/2),d=o(s/2),m=o(A/2);switch(r){case"XYZ":this._x=h*l*u+c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u-h*d*m;break;case"YXZ":this._x=h*l*u+c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u+h*d*m;break;case"ZXY":this._x=h*l*u-c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u-h*d*m;break;case"ZYX":this._x=h*l*u-c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u+h*d*m;break;case"YZX":this._x=h*l*u+c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u-h*d*m;break;case"XZY":this._x=h*l*u-c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u+h*d*m;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],A=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10],h=i+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-o)*d,this._y=(A-c)*d,this._z=(r-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(l-o)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(A+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(A-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(o+l)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(r-s)/d,this._x=(A+c)/d,this._y=(o+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,A=e._z,r=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=i*l+r*a+s*c-A*o,this._y=s*l+r*o+A*a-i*c,this._z=A*l+r*c+i*o-s*a,this._w=r*l-i*a-s*o-A*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,A=e._z,r=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,A=-A,r=-r,a=-a);let o=1-t;if(a<.9995){let c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+A*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+A*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),A=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),A*Math.sin(t),A*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ll=class ll{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,A=e.elements;return this.x=A[0]*t+A[3]*i+A[6]*s,this.y=A[1]*t+A[4]*i+A[7]*s,this.z=A[2]*t+A[5]*i+A[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,A=e.elements,r=1/(A[3]*t+A[7]*i+A[11]*s+A[15]);return this.x=(A[0]*t+A[4]*i+A[8]*s+A[12])*r,this.y=(A[1]*t+A[5]*i+A[9]*s+A[13])*r,this.z=(A[2]*t+A[6]*i+A[10]*s+A[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,A=e.x,r=e.y,a=e.z,o=e.w,c=2*(r*s-a*i),l=2*(a*t-A*s),u=2*(A*i-r*t);return this.x=t+o*c+r*u-a*l,this.y=i+o*l+a*c-A*u,this.z=s+o*u+A*l-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,A=e.elements;return this.x=A[0]*t+A[4]*i+A[8]*s,this.y=A[1]*t+A[5]*i+A[9]*s,this.z=A[2]*t+A[6]*i+A[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,A=e.z,r=t.x,a=t.y,o=t.z;return this.x=s*o-A*a,this.y=A*r-i*o,this.z=i*a-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ll.prototype.isVector3=!0;var b=ll,hc=new b,vh=new gi,hl=class hl{constructor(e,t,i,s,A,r,a,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,A,r,a,o,c)}set(e,t,i,s,A,r,a,o,c){let l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=A,l[5]=o,l[6]=i,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,A=this.elements,r=i[0],a=i[3],o=i[6],c=i[1],l=i[4],u=i[7],h=i[2],d=i[5],m=i[8],C=s[0],f=s[3],p=s[6],S=s[1],G=s[4],E=s[7],x=s[2],y=s[5],w=s[8];return A[0]=r*C+a*S+o*x,A[3]=r*f+a*G+o*y,A[6]=r*p+a*E+o*w,A[1]=c*C+l*S+u*x,A[4]=c*f+l*G+u*y,A[7]=c*p+l*E+u*w,A[2]=h*C+d*S+m*x,A[5]=h*f+d*G+m*y,A[8]=h*p+d*E+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],A=e[3],r=e[4],a=e[5],o=e[6],c=e[7],l=e[8];return t*r*l-t*a*c-i*A*l+i*a*o+s*A*c-s*r*o}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],A=e[3],r=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=l*r-a*c,h=a*o-l*A,d=c*A-r*o,m=t*u+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/m;return e[0]=u*C,e[1]=(s*c-l*i)*C,e[2]=(a*i-s*r)*C,e[3]=h*C,e[4]=(l*t-s*o)*C,e[5]=(s*A-a*t)*C,e[6]=d*C,e[7]=(i*o-c*t)*C,e[8]=(r*t-i*A)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,A,r,a){let o=Math.cos(A),c=Math.sin(A);return this.set(i*o,i*c,-i*(o*r+c*a)+r+e,-s*c,s*o,-s*(-c*r+o*a)+a+t,0,0,1),this}scale(e,t){return Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uc.makeScale(e,t)),this}rotate(e){return Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return Zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;var Ne=hl,uc=new Ne,Gh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){let n={enabled:!0,workingColorSpace:vA,spaces:{},convert:function(s,A,r){return this.enabled===!1||A===r||!A||!r||(this.spaces[A].transfer===nt&&(s.r=fn(s.r),s.g=fn(s.g),s.b=fn(s.b)),this.spaces[A].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[A].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===nt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,A){return this.convert(s,this.workingColorSpace,A)},colorSpaceToWorking:function(s,A){return this.convert(s,A,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?GA:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,A=this.workingColorSpace){return s.fromArray(this.spaces[A].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,A,r){return s.copy(this.spaces[A].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,A){return Zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,A)},toWorkingColorSpace:function(s,A){return Zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,A)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vA]:{primaries:e,whitePoint:i,transfer:GA,toXYZ:Gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}var Ye=Uf();function fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ss,pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=_A("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_A("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),A=s.data;for(let r=0;r<A.length;r++)A[r]=fn(A[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fn(t[i]/255)*255):t[i]=fn(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pf=0,Qs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let A;if(Array.isArray(s)){A=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?A.push(dc(s[r].image)):A.push(dc(s[r]))}else A=dc(s);i.url=A}return t||(e.images[this.uuid]=i),i}};function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Lf=0,fc=new b,jt=class n extends $i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zi,s=Zi,A=Qt,r=Ln,a=Ui,o=Ei,c=n.DEFAULT_ANISOTROPY,l=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=dn(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=A,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=qc;jt.DEFAULT_ANISOTROPY=1;var ul=class ul{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,A=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*A,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*A,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*A,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*A,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,A,o=e.elements,c=o[0],l=o[4],u=o[8],h=o[1],d=o[5],m=o[9],C=o[2],f=o[6],p=o[10];if(Math.abs(l-h)<.01&&Math.abs(u-C)<.01&&Math.abs(m-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+C)<.1&&Math.abs(m+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let G=(c+1)/2,E=(d+1)/2,x=(p+1)/2,y=(l+h)/4,w=(u+C)/4,g=(m+f)/4;return G>E&&G>x?G<.01?(i=0,s=.707106781,A=.707106781):(i=Math.sqrt(G),s=y/i,A=w/i):E>x?E<.01?(i=.707106781,s=0,A=.707106781):(s=Math.sqrt(E),i=y/s,A=g/s):x<.01?(i=.707106781,s=.707106781,A=0):(A=Math.sqrt(x),i=w/A,s=g/A),this.set(i,s,A,t),this}let S=Math.sqrt((f-m)*(f-m)+(u-C)*(u-C)+(h-l)*(h-l));return Math.abs(S)<.001&&(S=1),this.x=(f-m)/S,this.y=(u-C)/S,this.z=(h-l)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ul.prototype.isVector4=!0;var _t=ul,ma=class extends $i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},A=new jt(s),r=i.count;for(let a=0;a<r;a++)this.textures[a]=A.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,A=this.textures.length;s<A;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yt=class extends ma{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},TA=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ua=class Ua{constructor(e,t,i,s,A,r,a,o,c,l,u,h,d,m,C,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,A,r,a,o,c,l,u,h,d,m,C,f)}set(e,t,i,s,A,r,a,o,c,l,u,h,d,m,C,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=A,p[5]=r,p[9]=a,p[13]=o,p[2]=c,p[6]=l,p[10]=u,p[14]=h,p[3]=d,p[7]=m,p[11]=C,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ua().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),A=1/xs.setFromMatrixColumn(e,1).length(),r=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*A,t[5]=i[5]*A,t[6]=i[6]*A,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,A=e.z,r=Math.cos(i),a=Math.sin(i),o=Math.cos(s),c=Math.sin(s),l=Math.cos(A),u=Math.sin(A);if(e.order==="XYZ"){let h=r*l,d=r*u,m=a*l,C=a*u;t[0]=o*l,t[4]=-o*u,t[8]=c,t[1]=d+m*c,t[5]=h-C*c,t[9]=-a*o,t[2]=C-h*c,t[6]=m+d*c,t[10]=r*o}else if(e.order==="YXZ"){let h=o*l,d=o*u,m=c*l,C=c*u;t[0]=h+C*a,t[4]=m*a-d,t[8]=r*c,t[1]=r*u,t[5]=r*l,t[9]=-a,t[2]=d*a-m,t[6]=C+h*a,t[10]=r*o}else if(e.order==="ZXY"){let h=o*l,d=o*u,m=c*l,C=c*u;t[0]=h-C*a,t[4]=-r*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=r*l,t[9]=C-h*a,t[2]=-r*c,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let h=r*l,d=r*u,m=a*l,C=a*u;t[0]=o*l,t[4]=m*c-d,t[8]=h*c+C,t[1]=o*u,t[5]=C*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let h=r*o,d=r*c,m=a*o,C=a*c;t[0]=o*l,t[4]=C-h*u,t[8]=m*u+d,t[1]=u,t[5]=r*l,t[9]=-a*l,t[2]=-c*l,t[6]=d*u+m,t[10]=h-C*u}else if(e.order==="XZY"){let h=r*o,d=r*c,m=a*o,C=a*c;t[0]=o*l,t[4]=-u,t[8]=c*l,t[1]=h*u+C,t[5]=r*l,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*l,t[10]=C*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Nf)}lookAt(e,t,i){let s=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),xn.crossVectors(i,Si),xn.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),xn.crossVectors(i,Si)),xn.normalize(),Kr.crossVectors(Si,xn),s[0]=xn.x,s[4]=Kr.x,s[8]=Si.x,s[1]=xn.y,s[5]=Kr.y,s[9]=Si.y,s[2]=xn.z,s[6]=Kr.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,A=this.elements,r=i[0],a=i[4],o=i[8],c=i[12],l=i[1],u=i[5],h=i[9],d=i[13],m=i[2],C=i[6],f=i[10],p=i[14],S=i[3],G=i[7],E=i[11],x=i[15],y=s[0],w=s[4],g=s[8],I=s[12],_=s[1],R=s[5],O=s[9],D=s[13],T=s[2],N=s[6],Q=s[10],Y=s[14],ne=s[3],z=s[7],$=s[11],te=s[15];return A[0]=r*y+a*_+o*T+c*ne,A[4]=r*w+a*R+o*N+c*z,A[8]=r*g+a*O+o*Q+c*$,A[12]=r*I+a*D+o*Y+c*te,A[1]=l*y+u*_+h*T+d*ne,A[5]=l*w+u*R+h*N+d*z,A[9]=l*g+u*O+h*Q+d*$,A[13]=l*I+u*D+h*Y+d*te,A[2]=m*y+C*_+f*T+p*ne,A[6]=m*w+C*R+f*N+p*z,A[10]=m*g+C*O+f*Q+p*$,A[14]=m*I+C*D+f*Y+p*te,A[3]=S*y+G*_+E*T+x*ne,A[7]=S*w+G*R+E*N+x*z,A[11]=S*g+G*O+E*Q+x*$,A[15]=S*I+G*D+E*Y+x*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],A=e[12],r=e[1],a=e[5],o=e[9],c=e[13],l=e[2],u=e[6],h=e[10],d=e[14],m=e[3],C=e[7],f=e[11],p=e[15],S=o*d-c*h,G=a*d-c*u,E=a*h-o*u,x=r*d-c*l,y=r*h-o*l,w=r*u-a*l;return t*(C*S-f*G+p*E)-i*(m*S-f*x+p*y)+s*(m*G-C*x+p*w)-A*(m*E-C*y+f*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],A=e[1],r=e[5],a=e[9],o=e[2],c=e[6],l=e[10];return t*(r*l-a*c)-i*(A*l-a*o)+s*(A*c-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],A=e[3],r=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],m=e[12],C=e[13],f=e[14],p=e[15],S=t*a-i*r,G=t*o-s*r,E=t*c-A*r,x=i*o-s*a,y=i*c-A*a,w=s*c-A*o,g=l*C-u*m,I=l*f-h*m,_=l*p-d*m,R=u*f-h*C,O=u*p-d*C,D=h*p-d*f,T=S*D-G*O+E*R+x*_-y*I+w*g;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/T;return e[0]=(a*D-o*O+c*R)*N,e[1]=(s*O-i*D-A*R)*N,e[2]=(C*w-f*y+p*x)*N,e[3]=(h*y-u*w-d*x)*N,e[4]=(o*_-r*D-c*I)*N,e[5]=(t*D-s*_+A*I)*N,e[6]=(f*E-m*w-p*G)*N,e[7]=(l*w-h*E+d*G)*N,e[8]=(r*O-a*_+c*g)*N,e[9]=(i*_-t*O-A*g)*N,e[10]=(m*y-C*E+p*S)*N,e[11]=(u*E-l*y-d*S)*N,e[12]=(a*I-r*R-o*g)*N,e[13]=(t*R-i*I+s*g)*N,e[14]=(C*G-m*x-f*S)*N,e[15]=(l*x-u*G+h*S)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,A=e.z;return t[0]*=i,t[4]*=s,t[8]*=A,t[1]*=i,t[5]*=s,t[9]*=A,t[2]*=i,t[6]*=s,t[10]*=A,t[3]*=i,t[7]*=s,t[11]*=A,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),A=1-i,r=e.x,a=e.y,o=e.z,c=A*r,l=A*a;return this.set(c*r+i,c*a-s*o,c*o+s*a,0,c*a+s*o,l*a+i,l*o-s*r,0,c*o-s*a,l*o+s*r,A*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,A,r){return this.set(1,i,A,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,A=t._x,r=t._y,a=t._z,o=t._w,c=A+A,l=r+r,u=a+a,h=A*c,d=A*l,m=A*u,C=r*l,f=r*u,p=a*u,S=o*c,G=o*l,E=o*u,x=i.x,y=i.y,w=i.z;return s[0]=(1-(C+p))*x,s[1]=(d+E)*x,s[2]=(m-G)*x,s[3]=0,s[4]=(d-E)*y,s[5]=(1-(h+p))*y,s[6]=(f+S)*y,s[7]=0,s[8]=(m+G)*w,s[9]=(f-S)*w,s[10]=(1-(h+C))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let A=this.determinantAffine();if(A===0)return i.set(1,1,1),t.identity(),this;let r=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();A<0&&(r=-r),Di.copy(this);let c=1/r,l=1/a,u=1/o;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=l,Di.elements[5]*=l,Di.elements[6]*=l,Di.elements[8]*=u,Di.elements[9]*=u,Di.elements[10]*=u,t.setFromRotationMatrix(Di),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,A,r,a=Hi,o=!1){let c=this.elements,l=2*A/(t-e),u=2*A/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),m,C;if(o)m=A/(r-A),C=r*A/(r-A);else if(a===Hi)m=-(r+A)/(r-A),C=-2*r*A/(r-A);else if(a===ks)m=-r/(r-A),C=-r*A/(r-A);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=C,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,A,r,a=Hi,o=!1){let c=this.elements,l=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s),m,C;if(o)m=1/(r-A),C=r/(r-A);else if(a===Hi)m=-2/(r-A),C=-(r+A)/(r-A);else if(a===ks)m=-1/(r-A),C=-A/(r-A);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=C,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ua.prototype.isMatrix4=!0;var xt=Ua,xs=new b,Di=new xt,Df=new b(0,0,0),Nf=new b(1,1,1),xn=new b,Kr=new b,Si=new b,wh=new xt,Th=new gi,pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,A=s[0],r=s[4],a=s[8],o=s[1],c=s[5],l=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-r,A)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,A),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(o,A));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,A)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,A)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,A)):(this._x=Math.atan2(-l,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var bA=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ff=0,bh=new b,ys=new gi,an=new xt,Rr=new b,mA=new b,kf=new b,Wf=new gi,Oh=new b(1,0,0),Kh=new b(0,1,0),Rh=new b(0,0,1),Uh={type:"added"},Hf={type:"removed"},Is={type:"childadded",child:null},pc={type:"childremoved",child:null},$t=class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new pn,i=new gi,s=new b(1,1,1);function A(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(A),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ne}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mA.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(mA,Rr,this.up):an.lookAt(Rr,mA,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(an),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),Is.child=e,this.dispatchEvent(Is),Is.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let A=0,r=s.length;A<r;A++)s[A].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mA,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mA,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,A=this.matrix.elements;A[12]+=t-A[0]*t-A[4]*i-A[8]*s,A[13]+=i-A[1]*t-A[5]*i-A[9]*s,A[14]+=s-A[2]*t-A[6]*i-A[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let A=this.children;for(let r=0,a=A.length;r<a;r++)A[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function A(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=A(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){let u=o[c];A(e.shapes,u)}else A(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(A(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(A(e.materials,this.material[o]));s.material=a}else s.material=A(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];s.animations.push(A(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),c=r(e.textures),l=r(e.images),u=r(e.shapes),h=r(e.skeletons),d=r(e.animations),m=r(e.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(a){let o=[];for(let c in a){let l=a[c];delete l.metadata,o.push(l)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new b(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,A=null,r=null,a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let C of e.hand.values()){let f=t.getJointPose(C,i),p=this._getHandJoint(c,C);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(A=t.getPose(e.gripSpace,i),A!==null&&(o.matrix.fromArray(A.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,A.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(A.linearVelocity)):o.hasLinearVelocity=!1,A.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(A.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&A!==null&&(s=A),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=s!==null),o!==null&&(o.visible=A!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=sl(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let A=i<=.5?i*(1+t):i+t-i*t,r=2*i-A;this.r=mc(r,A,e+1/3),this.g=mc(r,A,e),this.b=mc(r,A,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(A){A!==void 0&&parseFloat(A)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let A,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(A=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(A[4]),this.setRGB(Math.min(255,parseInt(A[1],10))/255,Math.min(255,parseInt(A[2],10))/255,Math.min(255,parseInt(A[3],10))/255,t);if(A=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(A[4]),this.setRGB(Math.min(100,parseInt(A[1],10))/100,Math.min(100,parseInt(A[2],10))/100,Math.min(100,parseInt(A[3],10))/100,t);break;case"hsl":case"hsla":if(A=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(A[4]),this.setHSL(parseFloat(A[1])/360,parseFloat(A[2])/100,parseFloat(A[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let A=s[1],r=A.length;if(r===3)return this.setRGB(parseInt(A.charAt(0),16)/15,parseInt(A.charAt(1),16)/15,parseInt(A.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(A,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=Ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ye.workingToColorSpace(li.copy(this),e),Math.round(je(li.r*255,0,255))*65536+Math.round(je(li.g*255,0,255))*256+Math.round(je(li.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(li.copy(this),t);let i=li.r,s=li.g,A=li.b,r=Math.max(i,s,A),a=Math.min(i,s,A),o,c,l=(a+r)/2;if(a===r)o=0,c=0;else{let u=r-a;switch(c=l<=.5?u/(r+a):u/(2-r-a),r){case i:o=(s-A)/u+(s<A?6:0);break;case s:o=(A-i)/u+2;break;case A:o=(i-s)/u+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=Zt){Ye.workingToColorSpace(li.copy(this),e);let t=li.r,i=li.g,s=li.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Ur);let i=yA(yn.h,Ur.h,t),s=yA(yn.s,Ur.s,t),A=yA(yn.l,Ur.l,t);return this.setHSL(i,s,A),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,A=e.elements;return this.r=A[0]*t+A[3]*i+A[6]*s,this.g=A[1]*t+A[4]*i+A[7]*s,this.b=A[2]*t+A[5]*i+A[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new de;de.NAMES=Ku;var OA=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var KA=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new b,on=new b,Cc=new b,cn=new b,vs=new b,Gs=new b,Ph=new b,Bc=new b,gc=new b,Ec=new b,Mc=new _t,Sc=new _t,xc=new _t,un=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ni.subVectors(e,t),s.cross(Ni);let A=s.lengthSq();return A>0?s.multiplyScalar(1/Math.sqrt(A)):s.set(0,0,0)}static getBarycoord(e,t,i,s,A){Ni.subVectors(s,t),on.subVectors(i,t),Cc.subVectors(e,t);let r=Ni.dot(Ni),a=Ni.dot(on),o=Ni.dot(Cc),c=on.dot(on),l=on.dot(Cc),u=r*c-a*a;if(u===0)return A.set(0,0,0),null;let h=1/u,d=(c*o-a*l)*h,m=(r*l-a*o)*h;return A.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,s,A,r,a,o){return this.getBarycoord(e,t,i,s,cn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(A,cn.x),o.addScaledVector(r,cn.y),o.addScaledVector(a,cn.z),o)}static getInterpolatedAttribute(e,t,i,s,A,r){return Mc.setScalar(0),Sc.setScalar(0),xc.setScalar(0),Mc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,i),xc.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Mc,A.x),r.addScaledVector(Sc,A.y),r.addScaledVector(xc,A.z),r}static isFrontFacing(e,t,i,s){return Ni.subVectors(i,t),on.subVectors(e,t),Ni.cross(on).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ni.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,A){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,A)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,A=this.c,r,a;vs.subVectors(s,i),Gs.subVectors(A,i),Bc.subVectors(e,i);let o=vs.dot(Bc),c=Gs.dot(Bc);if(o<=0&&c<=0)return t.copy(i);gc.subVectors(e,s);let l=vs.dot(gc),u=Gs.dot(gc);if(l>=0&&u<=l)return t.copy(s);let h=o*u-l*c;if(h<=0&&o>=0&&l<=0)return r=o/(o-l),t.copy(i).addScaledVector(vs,r);Ec.subVectors(e,A);let d=vs.dot(Ec),m=Gs.dot(Ec);if(m>=0&&d<=m)return t.copy(A);let C=d*c-o*m;if(C<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Gs,a);let f=l*m-d*u;if(f<=0&&u-l>=0&&d-m>=0)return Ph.subVectors(A,s),a=(u-l)/(u-l+(d-m)),t.copy(s).addScaledVector(Ph,a);let p=1/(f+C+h);return r=C*p,a=h*p,t.copy(i).addScaledVector(vs,r).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let A=i.getAttribute("position");if(t===!0&&A!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=A.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Fi):Fi.fromBufferAttribute(A,r),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let A=0,r=s.length;A<r;A++)this.expandByObject(s[A],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(CA),Lr.subVectors(this.max,CA),_s.subVectors(e.a,CA),ws.subVectors(e.b,CA),Ts.subVectors(e.c,CA),In.subVectors(ws,_s),vn.subVectors(Ts,ws),Yn.subVectors(_s,Ts);let t=[0,-In.z,In.y,0,-vn.z,vn.y,0,-Yn.z,Yn.y,In.z,0,-In.x,vn.z,0,-vn.x,Yn.z,0,-Yn.x,-In.y,In.x,0,-vn.y,vn.x,0,-Yn.y,Yn.x,0];return!yc(t,_s,ws,Ts,Lr)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,_s,ws,Ts,Lr))?!1:(Dr.crossVectors(In,vn),t=[Dr.x,Dr.y,Dr.z],yc(t,_s,ws,Ts,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ln=[new b,new b,new b,new b,new b,new b,new b,new b],Fi=new b,Pr=new _n,_s=new b,ws=new b,Ts=new b,In=new b,vn=new b,Yn=new b,CA=new b,Lr=new b,Dr=new b,qn=new b;function yc(n,e,t,i,s){for(let A=0,r=n.length-3;A<=r;A+=3){qn.fromArray(n,A);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),o=e.dot(qn),c=t.dot(qn),l=i.dot(qn);if(Math.max(-Math.max(o,c,l),Math.min(o,c,l))>a)return!1}return!0}var kt=new b,Nr=new ge,zf=0,lt=class extends $i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=il,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,A=this.itemSize;s<A;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,A){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),A=ct(A,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=A,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var RA=class extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var UA=class extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vf=new _n,BA=new b,Ic=new b,jn=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vf.setFromPoints(e).getCenter(i);let s=0;for(let A=0,r=e.length;A<r;A++)s=Math.max(s,i.distanceToSquared(e[A]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;BA.subVectors(e,this.center);let t=BA.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(BA,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(BA.copy(e.center).add(Ic)),this.expandByPoint(BA.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,Oi=new xt,vc=new $t,bs=new b,xi=new _n,gA=new _n,Xt=new b,It=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?UA:RA)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let A=new Ne().getNormalMatrix(e);i.applyNormalMatrix(A),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,A=e.length;s<A;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new at(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let A=e[s];t.setXYZ(s,A.x,A.y,A.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let A=t[i];xi.setFromBufferAttribute(A),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let A=0,r=t.length;A<r;A++){let a=t[A];gA.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(xi.min,gA.min),xi.expandByPoint(Xt),Xt.addVectors(xi.max,gA.max),xi.expandByPoint(Xt)):(xi.expandByPoint(gA.min),xi.expandByPoint(gA.max))}xi.getCenter(i);let s=0;for(let A=0,r=e.count;A<r;A++)Xt.fromBufferAttribute(e,A),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let A=0,r=t.length;A<r;A++){let a=t[A],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Xt.fromBufferAttribute(a,c),o&&(bs.fromBufferAttribute(e,c),Xt.add(bs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,A=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new lt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let a=[],o=[];for(let g=0;g<i.count;g++)a[g]=new b,o[g]=new b;let c=new b,l=new b,u=new b,h=new ge,d=new ge,m=new ge,C=new b,f=new b;function p(g,I,_){c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,_),h.fromBufferAttribute(A,g),d.fromBufferAttribute(A,I),m.fromBufferAttribute(A,_),l.sub(c),u.sub(c),d.sub(h),m.sub(h);let R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(C.copy(l).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(R),f.copy(u).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(R),a[g].add(C),a[I].add(C),a[_].add(C),o[g].add(f),o[I].add(f),o[_].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let g=0,I=S.length;g<I;++g){let _=S[g],R=_.start,O=_.count;for(let D=R,T=R+O;D<T;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let G=new b,E=new b,x=new b,y=new b;function w(g){x.fromBufferAttribute(s,g),y.copy(x);let I=a[g];G.copy(I),G.sub(x.multiplyScalar(x.dot(I))).normalize(),E.crossVectors(y,I);let R=E.dot(o[g])<0?-1:1;r.setXYZW(g,G.x,G.y,G.z,R)}for(let g=0,I=S.length;g<I;++g){let _=S[g],R=_.start,O=_.count;for(let D=R,T=R+O;D<T;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new b,A=new b,r=new b,a=new b,o=new b,c=new b,l=new b,u=new b;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),C=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,m),A.fromBufferAttribute(t,C),r.fromBufferAttribute(t,f),l.subVectors(r,A),u.subVectors(s,A),l.cross(u),a.fromBufferAttribute(i,m),o.fromBufferAttribute(i,C),c.fromBufferAttribute(i,f),a.add(l),o.add(l),c.add(l),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(C,o.x,o.y,o.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),A.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),l.subVectors(r,A),u.subVectors(s,A),l.cross(u),i.setXYZ(h+0,l.x,l.y,l.z),i.setXYZ(h+1,l.x,l.y,l.z),i.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,o){let c=a.array,l=a.itemSize,u=a.normalized,h=new c.constructor(o.length*l),d=0,m=0;for(let C=0,f=o.length;C<f;C++){a.isInterleavedBufferAttribute?d=o[C]*a.data.stride+a.offset:d=o[C]*l;for(let p=0;p<l;p++)h[m++]=c[d++]}return new lt(h,l,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let o=s[a],c=e(o,i);t.setAttribute(a,c)}let A=this.morphAttributes;for(let a in A){let o=[],c=A[a];for(let l=0,u=c.length;l<u;l++){let h=c[l],d=e(h,i);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let o in i){let c=i[o];e.data.attributes[o]=c.toJSON(e.data)}let s={},A=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],l=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];l.push(d.toJSON(e.data))}l.length>0&&(s[o]=l,A=!0)}A&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let l=s[c];this.setAttribute(c,l.clone(t))}let A=e.morphAttributes;for(let c in A){let l=[],u=A[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,l=r.length;c<l;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ba=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,A=this.stride;s<A;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pi=new b,PA=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,A){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),A=ct(A,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=A,this}clone(e){if(e===void 0){wA("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let A=0;A<this.itemSize;A++)t.push(this.data.array[s+A])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wA("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let A=0;A<this.itemSize;A++)t.push(this.data.array[s+A])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gc=new b,qf=new b,Jf=new Ne,ki=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gc.subVectors(i,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Gc),A=this.normal.dot(s);if(A===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/A;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jf.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),A=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(A),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xf=0,en=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=js,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Vc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(A=>A.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(A){let r=[];for(let a in A){let o=A[a];delete o.metadata,r.push(o)}return r}if(t){let A=s(e.textures),r=s(e.images);A.length>0&&(i.textures=A),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let A=0;A!==s;++A)i[A]=t[A].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vs=class extends en{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,EA=new b,Ks=new b,Rs=new b,Us=new ge,MA=new ge,Ru=new xt,Fr=new b,SA=new b,kr=new b,Lh=new ge,_c=new ge,Dh=new ge,LA=class extends $t{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ba(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new PA(i,3,0,!1)),Os.setAttribute("uv",new PA(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Rs.z);let i=this.material.rotation,s,A;i!==0&&(A=Math.cos(i),s=Math.sin(i));let r=this.center;Wr(Fr.set(-.5,-.5,0),Rs,r,Ks,s,A),Wr(SA.set(.5,-.5,0),Rs,r,Ks,s,A),Wr(kr.set(.5,.5,0),Rs,r,Ks,s,A),Lh.set(0,0),_c.set(1,0),Dh.set(1,1);let a=e.ray.intersectTriangle(Fr,SA,kr,!1,EA);if(a===null&&(Wr(SA.set(-.5,.5,0),Rs,r,Ks,s,A),_c.set(0,1),a=e.ray.intersectTriangle(Fr,kr,SA,!1,EA),a===null))return;let o=e.ray.origin.distanceTo(EA);o<e.near||o>e.far||t.push({distance:o,point:EA.clone(),uv:un.getInterpolation(EA,Fr,SA,kr,Lh,_c,Dh,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wr(n,e,t,i,s,A){Us.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(MA.x=A*Us.x-s*Us.y,MA.y=s*Us.x+A*Us.y):MA.copy(Us),n.copy(e),n.x+=MA.x,n.y+=MA.y,n.applyMatrix4(Ru)}var hn=new b,wc=new b,Hr=new b,Qr=new b,DA=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wc.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(wc);let A=e.distanceTo(t)*.5,r=-this.direction.dot(Hr),a=Qr.dot(this.direction),o=-Qr.dot(Hr),c=Qr.lengthSq(),l=Math.abs(1-r*r),u,h,d,m;if(l>0)if(u=r*o-a,h=r*a-o,m=A*l,u>=0)if(h>=-m)if(h<=m){let C=1/l;u*=C,h*=C,d=u*(u+r*h+2*a)+h*(r*u+h+2*o)+c}else h=A,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;else h=-A,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;else h<=-m?(u=Math.max(0,-(-r*A+a)),h=u>0?-A:Math.min(Math.max(-A,-o),A),d=-u*u+h*(h+2*o)+c):h<=m?(u=0,h=Math.min(Math.max(-A,-o),A),d=h*(h+2*o)+c):(u=Math.max(0,-(r*A+a)),h=u>0?A:Math.min(Math.max(-A,-o),A),d=-u*u+h*(h+2*o)+c);else h=r>0?-A:A,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wc).addScaledVector(Hr,h),d}intersectSphere(e,t){if(e.radius<0)return null;hn.subVectors(e.center,this.origin);let i=hn.dot(this.direction),s=hn.dot(hn)-i*i,A=e.radius*e.radius;if(s>A)return null;let r=Math.sqrt(A-s),a=i-r,o=i+r;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,A,r,a,o,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),l>=0?(A=(e.min.y-h.y)*l,r=(e.max.y-h.y)*l):(A=(e.max.y-h.y)*l,r=(e.min.y-h.y)*l),i>r||A>s||((A>i||isNaN(i))&&(i=A),(r<s||isNaN(s))&&(s=r),u>=0?(a=(e.min.z-h.z)*u,o=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,o=(e.min.z-h.z)*u),i>o||a>s)||((a>i||i!==i)&&(i=a),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,s,A){let r=this.origin,a=this.direction,o=a.x,c=a.y,l=a.z,u=e.x-r.x,h=e.y-r.y,d=e.z-r.z,m=t.x-r.x,C=t.y-r.y,f=t.z-r.z,p=i.x-r.x,S=i.y-r.y,G=i.z-r.z,E=Math.abs(o),x=Math.abs(c),y=Math.abs(l),w,g,I,_,R,O,D,T,N,Q,Y,ne;if(E>=x&&E>=y?(I=o,O=u,N=m,ne=p,o>=0?(w=c,g=l,_=h,R=d,D=C,T=f,Q=S,Y=G):(w=l,g=c,_=d,R=h,D=f,T=C,Q=G,Y=S)):x>=y?(I=c,O=h,N=C,ne=S,c>=0?(w=l,g=o,_=d,R=u,D=f,T=m,Q=G,Y=p):(w=o,g=l,_=u,R=d,D=m,T=f,Q=p,Y=G)):(I=l,O=d,N=f,ne=G,l>=0?(w=o,g=c,_=u,R=h,D=m,T=C,Q=p,Y=S):(w=c,g=o,_=h,R=u,D=C,T=m,Q=S,Y=p)),I===0)return null;let z=w/I,$=g/I,te=1/I,Te=_-z*O,Ke=R-$*O,pt=D-z*N,$e=T-$*N,st=Q-z*ne,q=Y-$*ne,ee=st*$e-q*pt,ye=Te*q-Ke*st,Fe=pt*Ke-$e*Te;if(s){if(ee<0||ye<0||Fe<0)return null}else if((ee<0||ye<0||Fe<0)&&(ee>0||ye>0||Fe>0))return null;let Ee=ee+ye+Fe;if(Ee===0)return null;let Ve=te*(ee*O+ye*N+Fe*ne);return(Ee>0?Ve<0:Ve>0)?null:this.at(Ve/Ee,A)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nh=new xt,Jn=new DA,zr=new jn,Fh=new b,Vr=new b,Yr=new b,qr=new b,Tc=new b,Jr=new b,kh=new b,Xr=new b,_e=class extends $t{constructor(e=new It,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let A=0,r=s.length;A<r;A++){let a=s[A].name||String(A);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=A}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,A=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(A&&a){Jr.set(0,0,0);for(let o=0,c=A.length;o<c;o++){let l=a[o],u=A[o];l!==0&&(Tc.fromBufferAttribute(u,e),r?Jr.addScaledVector(Tc,l):Jr.addScaledVector(Tc.sub(t),l))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,A=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(A),Jn.copy(e.ray).recast(e.near),!(zr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(zr,Fh)===null||Jn.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Nh.copy(A).invert(),Jn.copy(e.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let s,A=this.geometry,r=this.material,a=A.index,o=A.attributes.position,c=A.attributes.uv,l=A.attributes.uv1,u=A.attributes.normal,h=A.groups,d=A.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,C=h.length;m<C;m++){let f=h[m],p=r[f.materialIndex],S=Math.max(f.start,d.start),G=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let E=S,x=G;E<x;E+=3){let y=a.getX(E),w=a.getX(E+1),g=a.getX(E+2);s=Zr(this,p,e,i,c,l,u,y,w,g),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),C=Math.min(a.count,d.start+d.count);for(let f=m,p=C;f<p;f+=3){let S=a.getX(f),G=a.getX(f+1),E=a.getX(f+2);s=Zr(this,r,e,i,c,l,u,S,G,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,C=h.length;m<C;m++){let f=h[m],p=r[f.materialIndex],S=Math.max(f.start,d.start),G=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let E=S,x=G;E<x;E+=3){let y=E,w=E+1,g=E+2;s=Zr(this,p,e,i,c,l,u,y,w,g),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),C=Math.min(o.count,d.start+d.count);for(let f=m,p=C;f<p;f+=3){let S=f,G=f+1,E=f+2;s=Zr(this,r,e,i,c,l,u,S,G,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Zf(n,e,t,i,s,A,r,a){let o;if(e.side===ni?o=i.intersectTriangle(r,A,s,!0,a):o=i.intersectTriangle(s,A,r,e.side===Un,a),o===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function Zr(n,e,t,i,s,A,r,a,o,c){n.getVertexPosition(a,Vr),n.getVertexPosition(o,Yr),n.getVertexPosition(c,qr);let l=Zf(n,e,t,i,Vr,Yr,qr,kh);if(l){let u=new b;un.getBarycoord(kh,Vr,Yr,qr,u),s&&(l.uv=un.getInterpolatedAttribute(s,a,o,c,u,new ge)),A&&(l.uv1=un.getInterpolatedAttribute(A,a,o,c,u,new ge)),r&&(l.normal=un.getInterpolatedAttribute(r,a,o,c,u,new b),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let h={a,b:o,c,normal:new b,materialIndex:0};un.getNormal(Vr,Yr,qr,h.normal),l.face=h,l.barycoord=u}return l}var ga=class extends jt{constructor(e=null,t=1,i=1,s,A,r,a,o,c=Pt,l=Pt,u,h){super(null,r,a,o,c,l,s,A,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=new jn,jf=new ge(.5,.5),jr=new b,Ys=class{constructor(e=new ki,t=new ki,i=new ki,s=new ki,A=new ki,r=new ki){this.planes=[e,t,i,s,A,r]}set(e,t,i,s,A,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(A),a[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi,i=!1){let s=this.planes,A=e.elements,r=A[0],a=A[1],o=A[2],c=A[3],l=A[4],u=A[5],h=A[6],d=A[7],m=A[8],C=A[9],f=A[10],p=A[11],S=A[12],G=A[13],E=A[14],x=A[15];if(s[0].setComponents(c-r,d-l,p-m,x-S).normalize(),s[1].setComponents(c+r,d+l,p+m,x+S).normalize(),s[2].setComponents(c+a,d+u,p+C,x+G).normalize(),s[3].setComponents(c-a,d-u,p-C,x-G).normalize(),i)s[4].setComponents(o,h,f,E).normalize(),s[5].setComponents(c-o,d-h,p-f,x-E).normalize();else if(s[4].setComponents(c-o,d-h,p-f,x-E).normalize(),t===Hi)s[5].setComponents(c+o,d+h,p+f,x+E).normalize();else if(t===ks)s[5].setComponents(o,h,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);let t=jf.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let A=0;A<6;A++)if(t[A].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wh=new xt,Lc=new DA,$r=new jn,ea=new b,mn=class extends $t{constructor(e=new It,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,A=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=A,e.ray.intersectsSphere($r)===!1)return;Wh.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(Wh);let a=A/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let m=h,C=d;m<C;m++){let f=c.getX(m);ea.fromBufferAttribute(u,f),Hh(ea,f,o,s,e,t,this)}}else{let h=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=h,C=d;m<C;m++)ea.fromBufferAttribute(u,m),Hh(ea,m,o,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let A=0,r=s.length;A<r;A++){let a=s[A].name||String(A);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=A}}}}};function Hh(n,e,t,i,s,A,r){let a=Lc.distanceSqToPoint(n);if(a<t){let o=new b;Lc.closestPointToPoint(n,o),o.applyMatrix4(i);let c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;A.push({distance:c,distanceToRay:Math.sqrt(a),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var NA=class extends jt{constructor(e=[],t=Pn,i,s,A,r,a,o,c,l){super(e,t,i,s,A,r,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends jt{constructor(e,t,i,s,A,r,a,o,c){super(e,t,i,s,A,r,a,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class extends jt{constructor(e,t,i=Vi,s,A,r,a=Pt,o=Pt,c,l=ji,u=1){if(l!==ji&&l!==Dn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,A,r,a,o,l,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ea=class extends wn{constructor(e,t=Vi,i=Pn,s,A,r=Pt,a=Pt,o,c=ji){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,i,s,A,r,a,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},FA=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lt=class n extends It{constructor(e=1,t=1,i=1,s=1,A=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:A,depthSegments:r};let a=this;s=Math.floor(s),A=Math.floor(A),r=Math.floor(r);let o=[],c=[],l=[],u=[],h=0,d=0;m("z","y","x",-1,-1,i,t,e,r,A,0),m("z","y","x",1,-1,i,t,-e,r,A,1),m("x","z","y",1,1,e,i,t,s,r,2),m("x","z","y",1,-1,e,i,-t,s,r,3),m("x","y","z",1,-1,e,t,i,s,A,4),m("x","y","z",-1,-1,e,t,-i,s,A,5),this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(u,2));function m(C,f,p,S,G,E,x,y,w,g,I){let _=E/w,R=x/g,O=E/2,D=x/2,T=y/2,N=w+1,Q=g+1,Y=0,ne=0,z=new b;for(let $=0;$<Q;$++){let te=$*R-D;for(let Te=0;Te<N;Te++){let Ke=Te*_-O;z[C]=Ke*S,z[f]=te*G,z[p]=T,c.push(z.x,z.y,z.z),z[C]=0,z[f]=0,z[p]=y>0?1:-1,l.push(z.x,z.y,z.z),u.push(Te/w),u.push(1-$/g),Y+=1}}for(let $=0;$<g;$++)for(let te=0;te<w;te++){let Te=h+te+N*$,Ke=h+te+N*($+1),pt=h+(te+1)+N*($+1),$e=h+(te+1)+N*$;o.push(Te,Ke,$e),o.push(Ke,pt,$e),ne+=6}a.addGroup(d,ne,I),d+=ne,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},es=class n extends It{constructor(e=1,t=1,i=4,s=8,A=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:A},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),A=Math.max(1,Math.floor(A));let r=[],a=[],o=[],c=[],l=t/2,u=Math.PI/2*e,h=t,d=2*u+h,m=i*2+A,C=s+1,f=new b,p=new b;for(let S=0;S<=m;S++){let G=0,E=0,x=0,y=0;if(S<=i){let I=S/i,_=I*Math.PI/2;E=-l-e*Math.cos(_),x=e*Math.sin(_),y=-e*Math.cos(_),G=I*u}else if(S<=i+A){let I=(S-i)/A;E=-l+I*t,x=e,y=0,G=u+I*h}else{let I=(S-i-A)/i,_=I*Math.PI/2;E=l+e*Math.sin(_),x=e*Math.cos(_),y=e*Math.sin(_),G=u+h+I*u}let w=Math.max(0,Math.min(1,G/d)),g=0;S===0?g=.5/s:S===m&&(g=-.5/s);for(let I=0;I<=s;I++){let _=I/s,R=_*Math.PI*2,O=Math.sin(R),D=Math.cos(R);p.x=-x*D,p.y=E,p.z=x*O,a.push(p.x,p.y,p.z),f.set(-x*D,y,x*O),f.normalize(),o.push(f.x,f.y,f.z),c.push(_+g,w)}if(S>0){let I=(S-1)*C;for(let _=0;_<s;_++){let R=I+_,O=I+_+1,D=S*C+_,T=S*C+_+1;r.push(R,O,D),r.push(O,T,D)}}}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var yi=class n extends It{constructor(e=1,t=1,i=1,s=32,A=1,r=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:A,openEnded:r,thetaStart:a,thetaLength:o};let c=this;s=Math.floor(s),A=Math.floor(A);let l=[],u=[],h=[],d=[],m=0,C=[],f=i/2,p=0;S(),r===!1&&(e>0&&G(!0),t>0&&G(!1)),this.setIndex(l),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function S(){let E=new b,x=new b,y=0,w=(t-e)/i;for(let g=0;g<=A;g++){let I=[],_=g/A,R=_*(t-e)+e;for(let O=0;O<=s;O++){let D=O/s,T=D*o+a,N=Math.sin(T),Q=Math.cos(T);x.x=R*N,x.y=-_*i+f,x.z=R*Q,u.push(x.x,x.y,x.z),E.set(N,w,Q).normalize(),h.push(E.x,E.y,E.z),d.push(D,1-_),I.push(m++)}C.push(I)}for(let g=0;g<s;g++)for(let I=0;I<A;I++){let _=C[I][g],R=C[I+1][g],O=C[I+1][g+1],D=C[I][g+1];(e>0||I!==0)&&(l.push(_,R,D),y+=3),(t>0||I!==A-1)&&(l.push(R,O,D),y+=3)}c.addGroup(p,y,0),p+=y}function G(E){let x=m,y=new ge,w=new b,g=0,I=E===!0?e:t,_=E===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,f*_,0),h.push(0,_,0),d.push(.5,.5),m++;let R=m;for(let O=0;O<=s;O++){let T=O/s*o+a,N=Math.cos(T),Q=Math.sin(T);w.x=I*Q,w.y=f*_,w.z=I*N,u.push(w.x,w.y,w.z),h.push(0,_,0),y.x=N*.5+.5,y.y=Q*.5*_+.5,d.push(y.x,y.y),m++}for(let O=0;O<s;O++){let D=x+O,T=R+O;E===!0?l.push(T,T+1,D):l.push(T+1,T,D),g+=3}c.addGroup(p,g,E===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tn=class n extends yi{constructor(e=1,t=1,i=32,s=1,A=!1,r=0,a=Math.PI*2){super(0,e,t,i,s,A,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:A,thetaStart:r,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ki=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let A=e/2,r=t/2,a=Math.floor(i),o=Math.floor(s),c=a+1,l=o+1,u=e/a,h=t/o,d=[],m=[],C=[],f=[];for(let p=0;p<l;p++){let S=p*h-r;for(let G=0;G<c;G++){let E=G*u-A;m.push(E,-S,0),C.push(0,0,1),f.push(G/a),f.push(1-p/o)}}for(let p=0;p<o;p++)for(let S=0;S<a;S++){let G=S+c*p,E=S+c*(p+1),x=S+1+c*(p+1),y=S+1+c*p;d.push(G,E,y),d.push(E,x,y)}this.setIndex(d),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(C,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ts=class n extends It{constructor(e=.5,t=1,i=32,s=1,A=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:A,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let a=[],o=[],c=[],l=[],u=e,h=(t-e)/s,d=new b,m=new ge;for(let C=0;C<=s;C++){for(let f=0;f<=i;f++){let p=A+f/i*r;d.x=u*Math.cos(p),d.y=u*Math.sin(p),o.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,l.push(m.x,m.y)}u+=h}for(let C=0;C<s;C++){let f=C*(i+1);for(let p=0;p<i;p++){let S=p+f,G=S,E=S+i+1,x=S+i+2,y=S+1;a.push(G,E,y),a.push(E,x,y)}}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qi=class n extends It{constructor(e=1,t=32,i=16,s=0,A=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:A,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(r+a,Math.PI),c=0,l=[],u=new b,h=new b,d=[],m=[],C=[],f=[];for(let p=0;p<=i;p++){let S=[],G=p/i,E=r+G*a,x=e*Math.cos(E),y=Math.sqrt(e*e-x*x),w=0;p===0&&r===0?w=.5/t:p===i&&o===Math.PI&&(w=-.5/t);for(let g=0;g<=t;g++){let I=g/t,_=s+I*A;u.x=-y*Math.cos(_),u.y=x,u.z=y*Math.sin(_),m.push(u.x,u.y,u.z),h.copy(u).normalize(),C.push(h.x,h.y,h.z),f.push(I+w,1-G),S.push(c++)}l.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let G=l[p][S+1],E=l[p][S],x=l[p+1][S],y=l[p+1][S+1];(p!==0||r>0)&&d.push(G,E,y),(p!==i-1||o<Math.PI)&&d.push(E,x,y)}this.setIndex(d),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(C,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tn=class n extends It{constructor(e=1,t=.4,i=12,s=48,A=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:A,thetaStart:r,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let o=[],c=[],l=[],u=[],h=new b,d=new b,m=new b;for(let C=0;C<=i;C++){let f=r+C/i*a;for(let p=0;p<=s;p++){let S=p/s*A;d.x=(e+t*Math.cos(f))*Math.cos(S),d.y=(e+t*Math.cos(f))*Math.sin(S),d.z=t*Math.sin(f),c.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),m.subVectors(d,h).normalize(),l.push(m.x,m.y,m.z),u.push(p/s),u.push(C/i)}}for(let C=1;C<=i;C++)for(let f=1;f<=s;f++){let p=(s+1)*C+f-1,S=(s+1)*(C-1)+f-1,G=(s+1)*(C-1)+f,E=(s+1)*C+f;o.push(p,S,E),o.push(S,G,E)}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Qh(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Qh(s[0])){let A=[];for(let r=0,a=s.length;r<a;r++)A[r]=s[r].clone();e[t][i]=A}else e[t][i]=s.slice();else e[t][i]=s}}return e}function hi(n){let e={};for(let t=0;t<n.length;t++){let i=rs(n[t]);for(let s in i)e[s]=i[s]}return e}function Qh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $f(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Al(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var mi={clone:rs,merge:hi},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,et=class extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=$f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new de().setHex(s.value);break;case"v2":this.uniforms[i].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new b().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ma=class extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function bc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var bn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],A=t[i-1];i:{e:{let r;t:{n:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<A)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(A=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=A)){let a=t[1];e<a&&(i=2,A=a);for(let o=i-2;;){if(A===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(s=A,A=t[--i-1],e>=A)break e}r=i,i=0;break t}break i}for(;i<r;){let a=i+r>>>1;e<t[a]?r=a:i=a+1}if(s=t[i],A=t[i-1],A===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,A,s)}return this.interpolate_(i,A,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,A=e*s;for(let r=0;r!==s;++r)t[r]=i[A+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends bn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,i){let s=this.parameterPositions,A=e-2,r=e+1,a=s[A],o=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Uc:A=e,a=2*t-i;break;case Pc:A=s.length-2,a=t+s[A]-s[A+1];break;default:A=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Uc:r=e,o=2*i-t;break;case Pc:r=1,o=i+s[1]-s[0];break;default:r=e-1,o=t}let c=(i-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-i),this._offsetPrev=A*l,this._offsetNext=r*l}interpolate_(e,t,i,s){let A=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),C=m*m,f=C*m,p=-h*f+2*h*C-h*m,S=(1+h)*f+(-1.5-2*h)*C+(-.5+h)*m+1,G=(-1-d)*f+(1.5+d)*C+.5*m,E=d*f-d*C;for(let x=0;x!==a;++x)A[x]=p*r[l+x]+S*r[c+x]+G*r[o+x]+E*r[u+x];return A}},ya=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let A=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=(i-t)/(s-t),u=1-l;for(let h=0;h!==a;++h)A[h]=r[c+h]*u+r[o+h]*l;return A}},Ia=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},va=class extends bn{interpolate_(e,t,i,s){let A=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,l=this.inTangents,u=this.outTangents;if(!l||!u){let m=(i-t)/(s-t),C=1-m;for(let f=0;f!==a;++f)A[f]=r[c+f]*C+r[o+f]*m;return A}let h=a*2,d=e-1;for(let m=0;m!==a;++m){let C=r[c+m],f=r[o+m],p=d*h+m*2,S=u[p],G=u[p+1],E=e*h+m*2,x=l[E],y=l[E+1],w=np(i,t,S,x,s);A[m]=Uu(w,C,G,y,f)}return A}};function Uu(n,e,t,i,s){let A=1-n;return A*A*A*e+3*A*A*n*t+3*A*n*n*i+n*n*n*s}function ip(n,e,t,i,s){let A=1-n;return 3*A*A*(t-e)+6*A*n*(i-t)+3*n*n*(s-i)}function np(n,e,t,i,s){let A=(n-e)/(s-e);for(let r=0;r<8;r++){let a=Uu(A,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let o=ip(A,e,t,i,s);if(Math.abs(o)<1e-10)break;A=Math.max(0,Math.min(1,A-a/o))}return A}var vi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),bc(e.settings)&&(i.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case IA:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break;case Kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return IA;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;bc(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,A=0,r=s-1;for(;A!==s&&i[A]<e;)++A;for(;r!==-1&&i[r]>t;)--r;if(++r,A!==0||r!==s){A>=r&&(r=Math.max(r,1),A=r-1);let a=this.getValueSize();this.times=i.slice(A,r),this.values=this.values.slice(A*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,A=i.length;A===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==A;a++){let o=i[a];if(typeof o=="number"&&isNaN(o)){De("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){De("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(s!==void 0&&Bf(s))for(let a=0,o=s.length;a!==o;++a){let c=s[a];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===na,A=e.length-1,r=1;for(let a=1;a<A;++a){let o=!1,c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(s)o=!0;else{let u=a*i,h=u-i,d=u+i;for(let m=0;m!==i;++m){let C=t[u+m];if(C!==t[h+m]||C!==t[d+m]){o=!0;break}}}if(o){if(a!==r){e[r]=e[a];let u=a*i,h=r*i;for(let d=0;d!==i;++d)t[h+d]=t[u+d]}++r}}if(A>0){e[r]=e[A];for(let a=A*i,o=r*i,c=0;c!==i;++c)t[o+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=fa;var On=class extends vi{constructor(e,t,i){super(e,t,i)}};On.prototype.ValueTypeName="bool";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=IA;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};Ga.prototype.ValueTypeName="color";var _a=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="number";var wa=class extends bn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let A=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(i-t)/(s-t),c=e*a;for(let l=c+a;c!==l;c+=4)gi.slerpFlat(A,0,r,c-a,r,c,o);return A}},kA=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}};kA.prototype.ValueTypeName="quaternion";kA.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends vi{constructor(e,t,i){super(e,t,i)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=IA;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};Ta.prototype.ValueTypeName="vector";var ba=class{constructor(e,t,i){let s=this,A=!1,r=0,a=0,o,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){a++,A===!1&&s.onStart!==void 0&&s.onStart(l,r,a),A=!0},this.itemEnd=function(l){r++,s.onProgress!==void 0&&s.onProgress(l,r,a),r===a&&(A=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pu=new ba,Oa=class{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,A){i.load(e,s,t,A)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},WA=class extends Xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oc=new xt,Vh=new b,Yh=new b,HA=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Oc,e.coordinateSystem,e.reversedDepth);let A=this._frameExtents,r=s?s.z/A.x:1,a=s?s.w/A.y:1,o=s?s.x/A.x:0,c=s?s.y/A.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*r,0,0,.5*r+o,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+o,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ta=new b,ia=new gi,Xi=new b,QA=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ta,ia,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ia,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ta,ia,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ia,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new b,qh=new ge,Jh=new ge,ii=class extends QA{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xA*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(xA*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,qh,Jh),t.subVectors(Jh,qh)}setViewOffset(e,t,i,s,A,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=A,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xA*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,A=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let o=r.fullWidth,c=r.fullHeight;A+=r.offsetX*s/o,t-=r.offsetY*i/c,s*=r.width/o,i*=r.height/c}let a=this.filmOffset;a!==0&&(A+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(A,A+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dc=class extends HA{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}},is=class extends Xs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rn=class extends QA{constructor(e=-1,t=1,i=1,s=-1,A=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=A,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,A,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=A,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,A=i-e,r=i+e,a=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;A+=c*this.view.offsetX,r=A+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(A,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends HA{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zA=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ls=-90,Ds=1,Ka=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ii(Ls,Ds,e,t);s.layers=this.layers,this.add(s);let A=new ii(Ls,Ds,e,t);A.layers=this.layers,this.add(A);let r=new ii(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let a=new ii(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let o=new ii(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let c=new ii(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,A,r,a,o]=t;for(let c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),A.up.set(0,0,-1),A.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),A.up.set(0,0,1),A.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[A,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,A),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ra=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},VA=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sp(){this._document.hidden===!1&&this.reset()}var rl="\\[\\]\\.:\\/",Ap=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",rp="[^"+rl.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",al),op=/(WCOD+)?/.source.replace("WCOD",rp),cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),hp=new RegExp("^"+ap+op+cp+lp+"$"),up=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,A=i.length;s!==A;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ap,"")}static parseTrackName(e){let t=hp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let A=i.nodeName.substring(s+1);up.indexOf(A)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=A)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(A){for(let r=0;r<A.length;r++){let a=A[r];if(a.name===t||a.uuid===t)return a;let o=i(a.children);if(o)return o}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,A=i.length;s!==A;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,A=i.length;s!==A;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,A=i.length;s!==A;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,A=i.length;s!==A;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,A=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(A!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[A]!==void 0&&(A=e.morphTargetDictionary[A])}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=A}else r.fromArray!==void 0&&r.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(o=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Fc;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oE=new Float32Array(1);var dl=class dl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let A=this.elements;return A[0]=e,A[2]=t,A[1]=i,A[3]=s,this}};dl.prototype.isMatrix2=!0;var kc=dl;function ol(n,e,t,i){let s=dp(i);switch(t){case $c:return n*e;case tl:return n*e/s.components*s.byteLength;case Wa:return n*e/s.components*s.byteLength;case Nn:return n*e*2/s.components*s.byteLength;case Ha:return n*e*2/s.components*s.byteLength;case el:return n*e*3/s.components*s.byteLength;case Ui:return n*e*4/s.components*s.byteLength;case Qa:return n*e*4/s.components*s.byteLength;case ir:case nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:case qa:return Math.max(n,16)*Math.max(e,8)/4;case za:case Ya:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Xa:case ja:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:case rr:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mo:case Co:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case go:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ar:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dp(n){switch(n){case Ei:case Jc:return{byteLength:1,components:1};case $s:case Xc:case Kt:return{byteLength:2,components:1};case Fa:case ka:return{byteLength:2,components:4};case Vi:case Na:case Yi:return{byteLength:4,components:1};case Zc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function sd(){let n=null,e=!1,t=null,i=null;function s(A,r){i=n.requestAnimationFrame(s),t(A,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(A){t=A},setContext:function(A){n=A}}}function pp(n){let e=new WeakMap;function t(a,o){let c=a.array,l=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,c,l),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,o,c){let l=o.array,u=o.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,l);else{u.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<u.length;d++){let m=u[h],C=u[d];C.start<=m.start+m.count+1?m.count=Math.max(m.count,C.start+C.count-m.start):(++h,u[h]=C)}u.length=h+1;for(let d=0,m=u.length;d<m;d++){let C=u[d];n.bufferSubData(c,C.start*l.BYTES_PER_ELEMENT,l,C.start,C.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function A(a){a.isInterleavedBufferAttribute&&(a=a.data);let o=e.get(a);o&&(n.deleteBuffer(o.buffer),e.delete(a))}function r(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,o));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,o),c.version=a.version}}return{get:s,remove:A,update:r}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Tp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,fm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,tC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nC=`#ifdef USE_SKINNING
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
#endif`,sC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AC=`#ifdef USE_SKINNING
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
#endif`,rC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cC=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hC=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CC=`uniform sampler2D t2D;
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
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SC=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xC=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yC=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,IC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TC=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,OC=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,KC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,RC=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,UC=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,PC=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,LC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DC=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,NC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,FC=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,kC=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,WC=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,HC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,QC=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,zC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,VC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,YC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,qC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,JC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qe={alphahash_fragment:mp,alphahash_pars_fragment:Cp,alphamap_fragment:Bp,alphamap_pars_fragment:gp,alphatest_fragment:Ep,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:xp,batching_pars_vertex:yp,batching_vertex:Ip,begin_vertex:vp,beginnormal_vertex:Gp,bsdfs:_p,iridescence_fragment:wp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Rp,color_fragment:Up,color_pars_fragment:Pp,color_pars_vertex:Lp,color_vertex:Dp,common:Np,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Hp,emissivemap_fragment:Qp,emissivemap_pars_fragment:zp,colorspace_fragment:Vp,colorspace_pars_fragment:Yp,envmap_fragment:qp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Xp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:om,envmap_vertex:jp,fog_vertex:$p,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:im,gradientmap_pars_fragment:nm,lightmap_pars_fragment:sm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:rm,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:lm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:Cm,lightprobes_pars_fragment:Bm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:Sm,map_fragment:xm,map_pars_fragment:ym,map_particle_fragment:Im,map_particle_pars_fragment:vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:wm,morphcolor_vertex:Tm,morphnormal_vertex:bm,morphtarget_pars_vertex:Om,morphtarget_vertex:Km,normal_fragment_begin:Rm,normal_fragment_maps:Um,normal_pars_fragment:Pm,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Hm,opaque_fragment:Qm,packing:zm,premultiplied_alpha_fragment:Vm,project_vertex:Ym,dithering_fragment:qm,dithering_pars_fragment:Jm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:$m,shadowmap_vertex:eC,shadowmask_pars_fragment:tC,skinbase_vertex:iC,skinning_pars_vertex:nC,skinning_vertex:sC,skinnormal_vertex:AC,specularmap_fragment:rC,specularmap_pars_fragment:aC,tonemapping_fragment:oC,tonemapping_pars_fragment:cC,transmission_fragment:lC,transmission_pars_fragment:hC,uv_pars_fragment:uC,uv_pars_vertex:dC,uv_vertex:fC,worldpos_vertex:pC,background_vert:mC,background_frag:CC,backgroundCube_vert:BC,backgroundCube_frag:gC,cube_vert:EC,cube_frag:MC,depth_vert:SC,depth_frag:xC,distance_vert:yC,distance_frag:IC,equirect_vert:vC,equirect_frag:GC,linedashed_vert:_C,linedashed_frag:wC,meshbasic_vert:TC,meshbasic_frag:bC,meshlambert_vert:OC,meshlambert_frag:KC,meshmatcap_vert:RC,meshmatcap_frag:UC,meshnormal_vert:PC,meshnormal_frag:LC,meshphong_vert:DC,meshphong_frag:NC,meshphysical_vert:FC,meshphysical_frag:kC,meshtoon_vert:WC,meshtoon_frag:HC,points_vert:QC,points_frag:zC,shadow_vert:VC,shadow_frag:YC,sprite_vert:qC,sprite_frag:JC},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},An={basic:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hi([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hi([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hi([he.points,he.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hi([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hi([he.common,he.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hi([he.sprite,he.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:hi([he.common,he.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:hi([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};An.physical={uniforms:hi([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Io={r:0,b:0,g:0},XC=new xt,Ad=new Ne;Ad.set(-1,0,0,0,1,0,0,0,1);function ZC(n,e,t,i,s,A){let r=new de(0),a=s===!0?0:1,o,c,l=null,u=0,h=null;function d(S){let G=S.isScene===!0?S.background:null;if(G&&G.isTexture){let E=S.backgroundBlurriness>0;G=e.get(G,E)}return G}function m(S){let G=!1,E=d(S);E===null?f(r,a):E&&E.isColor&&(f(E,1),G=!0);let x=n.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,A):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,A),(n.autoClear||G)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function C(S,G){let E=d(G);E&&(E.isCubeTexture||E.mapping===er)?(c===void 0&&(c=new _e(new Lt(1,1,1),new et({name:"BackgroundCubeMaterial",uniforms:rs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XC.makeRotationFromEuler(G.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=Ye.getTransfer(E.colorSpace)!==nt,(l!==E||u!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=E,u=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(o===void 0&&(o=new _e(new Ki(2,2),new et({name:"BackgroundMaterial",uniforms:rs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=E,o.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,o.material.toneMapped=Ye.getTransfer(E.colorSpace)!==nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),o.material.uniforms.uvTransform.value.copy(E.matrix),(l!==E||u!==E.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,l=E,u=E.version,h=n.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null))}function f(S,G){S.getRGB(Io,Al(n)),t.buffers.color.setClear(Io.r,Io.g,Io.b,G,A)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(S,G=1){r.set(S),a=G,f(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,f(r,a)},render:m,addToRenderList:C,dispose:p}}function jC(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),A=s,r=!1;function a(R,O,D,T,N){let Q=!1,Y=u(R,T,D,O);A!==Y&&(A=Y,c(A.object)),Q=d(R,T,D,N),Q&&m(R,T,D,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,E(R,O,D,T),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function o(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function l(R){return n.deleteVertexArray(R)}function u(R,O,D,T){let N=T.wireframe===!0,Q=i[O.id];Q===void 0&&(Q={},i[O.id]=Q);let Y=R.isInstancedMesh===!0?R.id:0,ne=Q[Y];ne===void 0&&(ne={},Q[Y]=ne);let z=ne[D.id];z===void 0&&(z={},ne[D.id]=z);let $=z[N];return $===void 0&&($=h(o()),z[N]=$),$}function h(R){let O=[],D=[],T=[];for(let N=0;N<t;N++)O[N]=0,D[N]=0,T[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:D,attributeDivisors:T,object:R,attributes:{},index:null}}function d(R,O,D,T){let N=A.attributes,Q=O.attributes,Y=0,ne=D.getAttributes();for(let z in ne)if(ne[z].location>=0){let te=N[z],Te=Q[z];if(Te===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),te===void 0||te.attribute!==Te||Te&&te.data!==Te.data)return!0;Y++}return A.attributesNum!==Y||A.index!==T}function m(R,O,D,T){let N={},Q=O.attributes,Y=0,ne=D.getAttributes();for(let z in ne)if(ne[z].location>=0){let te=Q[z];te===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));let Te={};Te.attribute=te,te&&te.data&&(Te.data=te.data),N[z]=Te,Y++}A.attributes=N,A.attributesNum=Y,A.index=T}function C(){let R=A.newAttributes;for(let O=0,D=R.length;O<D;O++)R[O]=0}function f(R){p(R,0)}function p(R,O){let D=A.newAttributes,T=A.enabledAttributes,N=A.attributeDivisors;D[R]=1,T[R]===0&&(n.enableVertexAttribArray(R),T[R]=1),N[R]!==O&&(n.vertexAttribDivisor(R,O),N[R]=O)}function S(){let R=A.newAttributes,O=A.enabledAttributes;for(let D=0,T=O.length;D<T;D++)O[D]!==R[D]&&(n.disableVertexAttribArray(D),O[D]=0)}function G(R,O,D,T,N,Q,Y){Y===!0?n.vertexAttribIPointer(R,O,D,N,Q):n.vertexAttribPointer(R,O,D,T,N,Q)}function E(R,O,D,T){C();let N=T.attributes,Q=D.getAttributes(),Y=O.defaultAttributeValues;for(let ne in Q){let z=Q[ne];if(z.location>=0){let $=N[ne];if($===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){let te=$.normalized,Te=$.itemSize,Ke=e.get($);if(Ke===void 0)continue;let pt=Ke.buffer,$e=Ke.type,st=Ke.bytesPerElement,q=$e===n.INT||$e===n.UNSIGNED_INT||$.gpuType===Na;if($.isInterleavedBufferAttribute){let ee=$.data,ye=ee.stride,Fe=$.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee,ee.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)f(z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ee=0;Ee<z.locationSize;Ee++)G(z.location+Ee,Te/z.locationSize,$e,te,ye*st,(Fe+Te/z.locationSize*Ee)*st,q)}else{if($.isInstancedBufferAttribute){for(let ee=0;ee<z.locationSize;ee++)p(z.location+ee,$.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ee=0;ee<z.locationSize;ee++)f(z.location+ee);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ee=0;ee<z.locationSize;ee++)G(z.location+ee,Te/z.locationSize,$e,te,Te*st,Te/z.locationSize*ee*st,q)}}else if(Y!==void 0){let te=Y[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(z.location,te);break;case 3:n.vertexAttrib3fv(z.location,te);break;case 4:n.vertexAttrib4fv(z.location,te);break;default:n.vertexAttrib1fv(z.location,te)}}}}S()}function x(){I();for(let R in i){let O=i[R];for(let D in O){let T=O[D];for(let N in T){let Q=T[N];for(let Y in Q)l(Q[Y].object),delete Q[Y];delete T[N]}}delete i[R]}}function y(R){if(i[R.id]===void 0)return;let O=i[R.id];for(let D in O){let T=O[D];for(let N in T){let Q=T[N];for(let Y in Q)l(Q[Y].object),delete Q[Y];delete T[N]}}delete i[R.id]}function w(R){for(let O in i){let D=i[O];for(let T in D){let N=D[T];if(N[R.id]===void 0)continue;let Q=N[R.id];for(let Y in Q)l(Q[Y].object),delete Q[Y];delete N[R.id]}}}function g(R){for(let O in i){let D=i[O],T=R.isInstancedMesh===!0?R.id:0,N=D[T];if(N!==void 0){for(let Q in N){let Y=N[Q];for(let ne in Y)l(Y[ne].object),delete Y[ne];delete N[Q]}delete D[T],Object.keys(D).length===0&&delete i[O]}}}function I(){_(),r=!0,A!==s&&(A=s,c(A.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:f,disableUnusedAttributes:S}}function $C(n,e,t){let i;function s(o){i=o}function A(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function r(o,c,l){l!==0&&(n.drawArraysInstanced(i,o,c,l),t.update(c,i,l))}function a(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,l);let h=0;for(let d=0;d<l;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=A,this.renderInstances=r,this.renderMultiDraw=a}function eB(n,e,t,i){let s;function A(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ui&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let g=w===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ei&&w!==Yi&&!g&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",l=o(c);l!==c&&(Le("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),G=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:A,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:C,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:G,maxFragmentUniforms:E,maxSamples:x,samples:y}}function tB(n){let e=this,t=null,i=0,s=!1,A=!1,r=new ki,a=new Ne,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){A=!0,l(null)},this.endShadows=function(){A=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,d){let m=u.clippingPlanes,C=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||A&&!f)A?l(null):c();else{let S=A?0:i,G=S*4,E=p.clippingState||null;o.value=E,E=l(m,h,G,d);for(let x=0;x!==G;++x)E[x]=t[x];p.clippingState=E,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=S}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(u,h,d,m){let C=u!==null?u.length:0,f=null;if(C!==0){if(f=o.value,m!==!0||f===null){let p=d+C*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let G=0,E=d;G!==C;++G,E+=4)r.copy(u[G]).applyMatrix4(S,a),r.normal.toArray(f,E),f[E+3]=r.constant}o.value=f,o.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,f}}var iA=4,iB=6,nB=20,sB=256,cr=new Rn,Lu=new de,fl=null,pl=0,ml=0,Cl=!1,AB=new b,as=new b,Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,A={}){let{size:r=256,position:a=AB}=A;fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=Cl,e.scissorTest=!1,tA(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pn||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Kt,format:Ui,colorSpace:vA,depthBuffer:!1},s=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);let{_lodMax:A}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rB(A)),this._blurMaterial=oB(A,e,t),this._ggxMaterial=aB(A,e,t)}return s}_compileMaterial(e){let t=new _e(new It,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,s,A){let o=new ii(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lu),u.toneMapping=zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Lt,new gt({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,f=C.material,p=!1,S=e.background;S?S.isColor&&(f.color.copy(S),e.background=null,p=!0):(f.color.copy(Lu),p=!0);for(let G=0;G<6;G++){let E=G%3;E===0?(o.up.set(0,c[G],0),o.position.set(A.x,A.y,A.z),o.lookAt(A.x+l[G],A.y,A.z)):E===1?(o.up.set(0,0,c[G]),o.position.set(A.x,A.y,A.z),o.lookAt(A.x,A.y+l[G],A.z)):(o.up.set(0,c[G],0),o.position.set(A.x,A.y,A.z),o.lookAt(A.x,A.y,A.z+l[G]));let x=this._cubeSize;tA(s,E*x,G>2?x:0,x,x),u.setRenderTarget(s),p&&u.render(C,o),u.render(e,o)}u.toneMapping=d,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pn||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let A=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=A;let a=A.uniforms;a.envMap.value=e;let o=this._cubeSize;tA(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(r,cr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let A=1;A<s;A++)this._applyGGXFilter(e,A-1,A);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,A=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[i];a.material=r;let o=r.uniforms,c=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l),h=c*1.25,d=u*h,{_lodMax:m}=this,C=this._sizeLods[i],f=3*C*(i>m-iA?i-m+iA:0),p=4*(this._cubeSize-C);o.envMap.value=e.texture,o.roughness.value=d,o.mipInt.value=m-t,tA(A,f,p,3*C,2*C),s.setRenderTarget(A),s.render(a,cr),o.envMap.value=A.texture,o.roughness.value=0,o.mipInt.value=m-i,tA(e,f,p,3*C,2*C),s.setRenderTarget(e),s.render(a,cr)}_blur(e,t,i,s){let A=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,A,t,i,r),this._blurPass(A,e,i,i,r)}_blurPass(e,t,i,s,A){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[s];o.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=A,c.mipInt.value=this._lodMax-i;let l=this._sizeLods[s],u=3*l*(s>this._lodMax-iA?s-this._lodMax+iA:0),h=4*(this._cubeSize-l);tA(t,u,h,3*l,2*l),r.setRenderTarget(t),r.render(o,cr)}};function rB(n){let e=[],t=[],i=n,s=n-iA+1+iB;for(let A=0;A<s;A++){let r=Math.pow(2,i);e.push(r);let a=1/(r-2),o=-a,c=1+a,l=[o,o,c,o,c,c,o,o,c,c,o,c],u=6,h=6,d=3,m=new Float32Array(d*h*u),C=new Float32Array(d*h*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,G=p>2?0:-1,E=[S,G,0,S+2/3,G,0,S+2/3,G+1,0,S,G,0,S+2/3,G+1,0,S,G+1,0];m.set(E,d*h*p);for(let x=0;x<h;x++){let y=l[x*2]*2-1,w=l[x*2+1]*2-1;p===0?as.set(1,w,y):p===1?as.set(-y,1,-w):p===2?as.set(-y,w,1):p===3?as.set(-1,w,-y):p===4?as.set(-y,-1,w):as.set(y,w,-1),as.toArray(C,(p*h+x)*d)}}let f=new It;f.setAttribute("position",new lt(m,d)),f.setAttribute("outputDirection",new lt(C,d)),t.push(new _e(f,null)),i>iA&&i--}return{lodMeshes:t,sizeLods:e}}function Du(n,e,t){let i=new yt(n,e,t);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tA(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function aB(n,e,t){return new et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sB,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function oB(n,e,t){return new et({name:"SphericalGaussianBlur",defines:{SAMPLES:nB,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Nu(){return new et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Fu(){return new et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new NA(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lt(5,5,5),A=new et({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Ri});A.uniforms.tEquirect.value=t;let r=new _e(s,A),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Qt),new Ka(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let A=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(A)}};function cB(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?r(h):A(h)}function A(h){if(h&&h.isTexture){let d=h.mapping;if(d===Pa||d===La)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let C=new _o(m.height);return C.fromEquirectangularTexture(n,h),e.set(h,C),h.addEventListener("dispose",c),a(C.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let d=h.mapping,m=d===Pa||d===La,C=d===Pn||d===As;if(m||C){let f=t.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Go(n)),f=m?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let S=h.image;return m&&S&&S.height>0||C&&S&&o(S)?(i===null&&(i=new Go(n)),f=m?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",l),f.texture):null}}}return h}function a(h,d){return d===Pa?h.mapping=Pn:d===La&&(h.mapping=As),h}function o(h){let d=0,m=6;for(let C=0;C<m;C++)h[C]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function lB(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Zn("WebGLRenderer: "+i+" extension not supported."),s}}}function hB(n,e,t,i){let s={},A=new WeakMap;function r(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",r),delete s[h.id];let d=A.get(h);d&&(e.remove(d),A.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function o(u){let h=u.attributes;for(let d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(u){let h=[],d=u.index,m=u.attributes.position,C=0;if(m===void 0)return;if(d!==null){let S=d.array;C=d.version;for(let G=0,E=S.length;G<E;G+=3){let x=S[G+0],y=S[G+1],w=S[G+2];h.push(x,y,y,w,w,x)}}else{let S=m.array;C=m.version;for(let G=0,E=S.length/3-1;G<E;G+=3){let x=G+0,y=G+1,w=G+2;h.push(x,y,y,w,w,x)}}let f=new(m.count>=65535?UA:RA)(h,1);f.version=C;let p=A.get(u);p&&e.remove(p),A.set(u,f)}function l(u){let h=A.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return A.get(u)}return{get:a,update:o,getWireframeAttribute:l}}function uB(n,e,t){let i;function s(u){i=u}let A,r;function a(u){A=u.type,r=u.bytesPerElement}function o(u,h){n.drawElements(i,h,A,u*r),t.update(h,i,1)}function c(u,h,d){d!==0&&(n.drawElementsInstanced(i,h,A,u*r,d),t.update(h,i,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,A,u,0,d);let C=0;for(let f=0;f<d;f++)C+=h[f];t.update(C,i,1)}this.setMode=s,this.setIndex=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function dB(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(A,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(A/3);break;case n.LINES:t.lines+=a*(A/2);break;case n.LINE_STRIP:t.lines+=a*(A-1);break;case n.LINE_LOOP:t.lines+=a*A;break;case n.POINTS:t.points+=a*A;break;default:De("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fB(n,e,t){let i=new WeakMap,s=new _t;function A(r,a,o){let c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0,h=i.get(a);if(h===void 0||h.count!==u){let I=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,C=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],G=0;d===!0&&(G=1),m===!0&&(G=2),C===!0&&(G=3);let E=a.attributes.position.count*G,x=1;E>e.maxTextureSize&&(x=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let y=new Float32Array(E*x*4*u),w=new TA(y,E,x,u);w.type=Yi,w.needsUpdate=!0;let g=G*4;for(let _=0;_<u;_++){let R=f[_],O=p[_],D=S[_],T=E*x*4*_;for(let N=0;N<R.count;N++){let Q=N*g;d===!0&&(s.fromBufferAttribute(R,N),y[T+Q+0]=s.x,y[T+Q+1]=s.y,y[T+Q+2]=s.z,y[T+Q+3]=0),m===!0&&(s.fromBufferAttribute(O,N),y[T+Q+4]=s.x,y[T+Q+5]=s.y,y[T+Q+6]=s.z,y[T+Q+7]=0),C===!0&&(s.fromBufferAttribute(D,N),y[T+Q+8]=s.x,y[T+Q+9]=s.y,y[T+Q+10]=s.z,y[T+Q+11]=D.itemSize===4?s.w:1)}}h={count:u,texture:w,size:new ge(E,x)},i.set(a,h),a.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let d=0;for(let C=0;C<c.length;C++)d+=c[C];let m=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",m),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:A}}function pB(n,e,t,i,s){let A=new WeakMap;function r(c){let l=s.render.frame,u=c.geometry,h=e.get(c,u);if(A.get(h)!==l&&(e.update(h),A.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),A.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),A.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;A.get(d)!==l&&(d.update(),A.set(d,l))}return h}function a(){A=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var mB={[qA]:"LINEAR_TONE_MAPPING",[JA]:"REINHARD_TONE_MAPPING",[XA]:"CINEON_TONE_MAPPING",[ss]:"ACES_FILMIC_TONE_MAPPING",[jA]:"AGX_TONE_MAPPING",[$A]:"NEUTRAL_TONE_MAPPING",[ZA]:"CUSTOM_TONE_MAPPING"};function CB(n,e,t,i,s,A){let r=new yt(e,t,{type:n,depthBuffer:s,stencilBuffer:A,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,o=null,c=new It;c.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new at([0,2,0,0,2,0],2));let l=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new _e(c,l),h=new Rn(-1,1,1,-1,0,1),d=null,m=null,C=!1,f,p=null,S=[],G=!1;this.setSize=function(E,x){r.setSize(E,x),a!==null&&a.setSize(E,x),o!==null&&o.setSize(E,x);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(E,x)}},this.setEffects=function(E){S=E,G=S.length>0&&S[0].isRenderPass===!0;let x=r.width,y=r.height;S.length>0&&a===null&&(a=new yt(x,y,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),o=new yt(x,y,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let g=S[w];g.setSize&&g.setSize(x,y)}},this.begin=function(E,x){if(C||E.toneMapping===zi&&S.length===0)return!1;if(p=x,x!==null){let y=x.width,w=x.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return G===!1&&E.setRenderTarget(r),f=E.toneMapping,E.toneMapping=zi,!0},this.hasRenderPass=function(){return G},this.end=function(E,x){E.toneMapping=f,C=!0;let y=r,w=a;for(let g=0;g<S.length;g++){let I=S[g];I.enabled!==!1&&(I.render(E,w,y,x),I.needsSwap!==!1&&(y=w,w=w===a?o:a))}if(d!==E.outputColorSpace||m!==E.toneMapping){d=E.outputColorSpace,m=E.toneMapping,l.defines={},Ye.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");let g=mB[m];g&&(l.defines[g]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(p),E.render(u,h),p=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),o!==null&&o.dispose(),c.dispose(),l.dispose()}}var rd=new jt,El=new wn(1,1),ad=new TA,od=new Ca,cd=new NA,ku=[],Wu=[],Hu=new Float32Array(16),Qu=new Float32Array(9),zu=new Float32Array(4);function sA(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,A=ku[s];if(A===void 0&&(A=new Float32Array(s),ku[s]=A),e!==0){i.toArray(A,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(A,a)}return A}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BB(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function EB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function MB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function SB(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Vt(t,i)}}function xB(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),Vt(t,i)}}function yB(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),Vt(t,i)}}function IB(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function GB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function _B(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function wB(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function bB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function OB(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function KB(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let A;this.type===n.SAMPLER_2D_SHADOW?(El.compareFunction=t.isReversedDepthBuffer()?yo:xo,A=El):A=rd,t.setTexture2D(e||A,s)}function RB(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||od,s)}function UB(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cd,s)}function PB(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ad,s)}function LB(n){switch(n){case 5126:return BB;case 35664:return gB;case 35665:return EB;case 35666:return MB;case 35674:return SB;case 35675:return xB;case 35676:return yB;case 5124:case 35670:return IB;case 35667:case 35671:return vB;case 35668:case 35672:return GB;case 35669:case 35673:return _B;case 5125:return wB;case 36294:return TB;case 36295:return bB;case 36296:return OB;case 35678:case 36198:case 36298:case 36306:case 35682:return KB;case 35679:case 36299:case 36307:return RB;case 35680:case 36300:case 36308:case 36293:return UB;case 36289:case 36303:case 36311:case 36292:return PB}}function DB(n,e){n.uniform1fv(this.addr,e)}function NB(n,e){let t=sA(e,this.size,2);n.uniform2fv(this.addr,t)}function FB(n,e){let t=sA(e,this.size,3);n.uniform3fv(this.addr,t)}function kB(n,e){let t=sA(e,this.size,4);n.uniform4fv(this.addr,t)}function WB(n,e){let t=sA(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HB(n,e){let t=sA(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QB(n,e){let t=sA(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zB(n,e){n.uniform1iv(this.addr,e)}function VB(n,e){n.uniform2iv(this.addr,e)}function YB(n,e){n.uniform3iv(this.addr,e)}function qB(n,e){n.uniform4iv(this.addr,e)}function JB(n,e){n.uniform1uiv(this.addr,e)}function XB(n,e){n.uniform2uiv(this.addr,e)}function ZB(n,e){n.uniform3uiv(this.addr,e)}function jB(n,e){n.uniform4uiv(this.addr,e)}function $B(n,e,t){let i=this.cache,s=e.length,A=bo(t,s);zt(i,A)||(n.uniform1iv(this.addr,A),Vt(i,A));let r;this.type===n.SAMPLER_2D_SHADOW?r=El:r=rd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||r,A[a])}function e0(n,e,t){let i=this.cache,s=e.length,A=bo(t,s);zt(i,A)||(n.uniform1iv(this.addr,A),Vt(i,A));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||od,A[r])}function t0(n,e,t){let i=this.cache,s=e.length,A=bo(t,s);zt(i,A)||(n.uniform1iv(this.addr,A),Vt(i,A));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||cd,A[r])}function i0(n,e,t){let i=this.cache,s=e.length,A=bo(t,s);zt(i,A)||(n.uniform1iv(this.addr,A),Vt(i,A));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||ad,A[r])}function n0(n){switch(n){case 5126:return DB;case 35664:return NB;case 35665:return FB;case 35666:return kB;case 35674:return WB;case 35675:return HB;case 35676:return QB;case 5124:case 35670:return zB;case 35667:case 35671:return VB;case 35668:case 35672:return YB;case 35669:case 35673:return qB;case 5125:return JB;case 36294:return XB;case 36295:return ZB;case 36296:return jB;case 35678:case 36198:case 36298:case 36306:case 35682:return $B;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return i0}}var Ml=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LB(t.type)}},Sl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let A=0,r=s.length;A!==r;++A){let a=s[A];a.setValue(e,t[a.id],i)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function Vu(n,e){n.seq.push(e),n.map[e.id]=e}function s0(n,e,t){let i=n.name,s=i.length;for(Bl.lastIndex=0;;){let A=Bl.exec(i),r=Bl.lastIndex,a=A[1],o=A[2]==="]",c=A[3];if(o&&(a=a|0),c===void 0||c==="["&&r+2===s){Vu(t,c===void 0?new Ml(a,n,e):new Sl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new xl(a),Vu(t,u)),t=u}}}var nA=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);s0(a,o,this)}let s=[],A=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):A.push(r);s.length>0&&(this.seq=s.concat(A))}setValue(e,t,i,s){let A=this.map[t];A!==void 0&&A.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let A=0,r=t.length;A!==r;++A){let a=t[A],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,A=e.length;s!==A;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Yu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var A0=37297,r0=0;function a0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),A=Math.min(e+6,t.length);for(let r=s;r<A;r++){let a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}var qu=new Ne;function o0(n){Ye._getMatrix(qu,Ye.workingColorSpace,n);let e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case GA:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ju(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),A=(n.getShaderInfoLog(e)||"").trim();if(i&&A==="")return"";let r=/ERROR: 0:(\d+)/.exec(A);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+A+`

`+a0(n.getShaderSource(e),a)}else return A}function c0(n,e){let t=o0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var l0={[qA]:"Linear",[JA]:"Reinhard",[XA]:"Cineon",[ss]:"ACESFilmic",[jA]:"AgX",[$A]:"Neutral",[ZA]:"Custom"};function h0(n,e){let t=l0[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new b;function u0(){Ye.getLuminanceCoefficients(vo);let n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function f0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let A=n.getActiveAttrib(e,s),r=A.name,a=1;A.type===n.FLOAT_MAT2&&(a=2),A.type===n.FLOAT_MAT3&&(a=3),A.type===n.FLOAT_MAT4&&(a=4),t[r]={type:A.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function hr(n){return n!==""}function Xu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(m0,B0)}var C0=new Map;function B0(n,e){let t=Qe[e];if(t===void 0){let i=C0.get(e);if(i!==void 0)t=Qe[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yl(t)}var g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(n){return n.replace(g0,E0)}function E0(n,e,t,i){let s="";for(let A=parseInt(e);A<parseInt(t);A++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+A+" ]").replace(/UNROLLED_LOOP_INDEX/g,A);return s}function $u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var M0={[YA]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function S0(n){return M0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x0={[Pn]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE_UV"};function y0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":x0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var I0={[As]:"ENVMAP_MODE_REFRACTION"};function v0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":I0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G0={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function _0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":G0[n.combine]||"ENVMAP_BLENDING_NONE"}function w0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function T0(n,e,t,i){let s=n.getContext(),A=t.defines,r=t.vertexShader,a=t.fragmentShader,o=S0(t),c=y0(t),l=v0(t),u=_0(t),h=w0(t),d=d0(t),m=f0(A),C=s.createProgram(),f,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(f=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==zi?h0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),u0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),r=yl(r),r=Xu(r,t),r=Zu(r,t),a=yl(a),a=Xu(a,t),a=Zu(a,t),r=ju(r),a=ju(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let G=S+f+r,E=S+p+a,x=Yu(s,s.VERTEX_SHADER,G),y=Yu(s,s.FRAGMENT_SHADER,E);s.attachShader(C,x),s.attachShader(C,y),t.index0AttributeName!==void 0?s.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function w(R){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(C)||"",D=s.getShaderInfoLog(x)||"",T=s.getShaderInfoLog(y)||"",N=O.trim(),Q=D.trim(),Y=T.trim(),ne=!0,z=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,C,x,y);else{let $=Ju(s,x,"vertex"),te=Ju(s,y,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+$+`
`+te)}else N!==""?Le("WebGLProgram: Program Info Log:",N):(Q===""||Y==="")&&(z=!1);z&&(R.diagnostics={runnable:ne,programLog:N,vertexShader:{log:Q,prefix:f},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(x),s.deleteShader(y),g=new nA(s,C),I=p0(s,C)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let I;this.getAttributes=function(){return I===void 0&&w(this),I};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(C,A0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=x,this.fragmentShader=y,this}var b0=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vl(e),t.set(e,i)),i}},vl=class{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}};function O0(n){return n===Nn||n===rr||n===ar}function K0(n,e,t,i,s,A){let r=new bA,a=new Il,o=new Set,c=[],l=new Map,u=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return o.add(g),g===0?"uv":`uv${g}`}function C(g,I,_,R,O,D){let T=R.fog,N=O.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ne=e.get(g.envMap||Q,Y),z=ne&&ne.mapping===er?ne.image.height:null,$=d[g.type];g.precision!==null&&(h=i.getMaxPrecision(g.precision),h!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Te=te!==void 0?te.length:0,Ke=0;N.morphAttributes.position!==void 0&&(Ke=1),N.morphAttributes.normal!==void 0&&(Ke=2),N.morphAttributes.color!==void 0&&(Ke=3);let pt,$e,st,q;if($){let Ct=An[$];pt=Ct.vertexShader,$e=Ct.fragmentShader}else{pt=g.vertexShader,$e=g.fragmentShader;let Ct=a.getVertexShaderStage(g),At=a.getFragmentShaderStage(g);a.update(g,Ct,At),st=Ct.id,q=At.id}let ee=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,Ve=!!g.map,Ht=!!g.matcap,Je=!!ne,it=!!g.aoMap,mt=!!g.lightMap,Ze=!!g.bumpMap&&g.wireframe===!1,Gt=!!g.normalMap,Jt=!!g.displacementMap,Bi=!!g.emissiveMap,wt=!!g.metalnessMap,Nt=!!g.roughnessMap,P=g.anisotropy>0,ai=g.clearcoat>0,ot=g.dispersion>0,v=g.retroreflectivity>0,B=g.iridescence>0,L=g.sheen>0,W=g.transmission>0,V=P&&!!g.anisotropyMap,Ae=ai&&!!g.clearcoatMap,re=ai&&!!g.clearcoatNormalMap,J=ai&&!!g.clearcoatRoughnessMap,Z=B&&!!g.iridescenceMap,ae=B&&!!g.iridescenceThicknessMap,be=L&&!!g.sheenColorMap,fe=L&&!!g.sheenRoughnessMap,oe=!!g.specularMap,Oe=!!g.specularColorMap,Pe=!!g.specularIntensityMap,We=W&&!!g.transmissionMap,U=W&&!!g.thicknessMap,ce=!!g.gradientMap,X=!!g.alphaMap,le=g.alphaTest>0,Ce=!!g.alphaHash,ie=!!g.extensions,Re=zi;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Re=n.toneMapping);let Ge={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:pt,fragmentShader:$e,defines:g.defines,customVertexShaderID:st,customFragmentShaderID:q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ve,matcap:Ht,envMap:Je,envMapMode:Je&&ne.mapping,envMapCubeUVHeight:z,aoMap:it,lightMap:mt,bumpMap:Ze,normalMap:Gt,displacementMap:Jt,emissiveMap:Bi,normalMapObjectSpace:Gt&&g.normalMapType===Mu,normalMapTangentSpace:Gt&&g.normalMapType===So,packedNormalMap:Gt&&g.normalMapType===So&&O0(g.normalMap.format),metalnessMap:wt,roughnessMap:Nt,anisotropy:P,anisotropyMap:V,clearcoat:ai,clearcoatMap:Ae,clearcoatNormalMap:re,clearcoatRoughnessMap:J,dispersion:ot,retroreflection:v,iridescence:B,iridescenceMap:Z,iridescenceThicknessMap:ae,sheen:L,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:oe,specularColorMap:Oe,specularIntensityMap:Pe,transmission:W,transmissionMap:We,thicknessMap:U,gradientMap:ce,opaque:g.transparent===!1&&g.blending===js&&g.alphaToCoverage===!1,alphaMap:X,alphaTest:le,alphaHash:Ce,combine:g.combine,mapUv:Ve&&m(g.map.channel),aoMapUv:it&&m(g.aoMap.channel),lightMapUv:mt&&m(g.lightMap.channel),bumpMapUv:Ze&&m(g.bumpMap.channel),normalMapUv:Gt&&m(g.normalMap.channel),displacementMapUv:Jt&&m(g.displacementMap.channel),emissiveMapUv:Bi&&m(g.emissiveMap.channel),metalnessMapUv:wt&&m(g.metalnessMap.channel),roughnessMapUv:Nt&&m(g.roughnessMap.channel),anisotropyMapUv:V&&m(g.anisotropyMap.channel),clearcoatMapUv:Ae&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(g.sheenRoughnessMap.channel),specularMapUv:oe&&m(g.specularMap.channel),specularColorMapUv:Oe&&m(g.specularColorMap.channel),specularIntensityMapUv:Pe&&m(g.specularIntensityMap.channel),transmissionMapUv:We&&m(g.transmissionMap.channel),thicknessMapUv:U&&m(g.thicknessMap.channel),alphaMapUv:X&&m(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Gt||P),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ve||X),fog:!!T,useFog:g.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&Gt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ke,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:A.numPlanes,numClipIntersection:A.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&_.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ve&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:Bi&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===si,flipSided:g.side===ni,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ie&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&g.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ge.vertexUv1s=o.has(1),Ge.vertexUv2s=o.has(2),Ge.vertexUv3s=o.has(3),o.clear(),Ge}function f(g){let I=[];if(g.shaderID?I.push(g.shaderID):(I.push(g.customVertexShaderID),I.push(g.customFragmentShaderID)),g.defines!==void 0)for(let _ in g.defines)I.push(_),I.push(g.defines[_]);return g.isRawShaderMaterial===!1&&(p(I,g),S(I,g),I.push(n.outputColorSpace)),I.push(g.customProgramCacheKey),I.join()}function p(g,I){g.push(I.precision),g.push(I.outputColorSpace),g.push(I.envMapMode),g.push(I.envMapCubeUVHeight),g.push(I.mapUv),g.push(I.alphaMapUv),g.push(I.lightMapUv),g.push(I.aoMapUv),g.push(I.bumpMapUv),g.push(I.normalMapUv),g.push(I.displacementMapUv),g.push(I.emissiveMapUv),g.push(I.metalnessMapUv),g.push(I.roughnessMapUv),g.push(I.anisotropyMapUv),g.push(I.clearcoatMapUv),g.push(I.clearcoatNormalMapUv),g.push(I.clearcoatRoughnessMapUv),g.push(I.iridescenceMapUv),g.push(I.iridescenceThicknessMapUv),g.push(I.sheenColorMapUv),g.push(I.sheenRoughnessMapUv),g.push(I.specularMapUv),g.push(I.specularColorMapUv),g.push(I.specularIntensityMapUv),g.push(I.transmissionMapUv),g.push(I.thicknessMapUv),g.push(I.combine),g.push(I.fogExp2),g.push(I.sizeAttenuation),g.push(I.morphTargetsCount),g.push(I.morphAttributeCount),g.push(I.numSunLights),g.push(I.numDirLights),g.push(I.numPointLights),g.push(I.numSpotLights),g.push(I.numSpotLightMaps),g.push(I.numHemiLights),g.push(I.numRectAreaLights),g.push(I.numSunLightShadows),g.push(I.numDirLightShadows),g.push(I.numPointLightShadows),g.push(I.numSpotLightShadows),g.push(I.numSpotLightShadowsWithMaps),g.push(I.numLightProbes),g.push(I.shadowMapType),g.push(I.toneMapping),g.push(I.numClippingPlanes),g.push(I.numClipIntersection),g.push(I.depthPacking)}function S(g,I){r.disableAll(),I.instancing&&r.enable(0),I.instancingColor&&r.enable(1),I.instancingMorph&&r.enable(2),I.matcap&&r.enable(3),I.envMap&&r.enable(4),I.normalMapObjectSpace&&r.enable(5),I.normalMapTangentSpace&&r.enable(6),I.clearcoat&&r.enable(7),I.iridescence&&r.enable(8),I.alphaTest&&r.enable(9),I.vertexColors&&r.enable(10),I.vertexAlphas&&r.enable(11),I.vertexUv1s&&r.enable(12),I.vertexUv2s&&r.enable(13),I.vertexUv3s&&r.enable(14),I.vertexTangents&&r.enable(15),I.anisotropy&&r.enable(16),I.alphaHash&&r.enable(17),I.batching&&r.enable(18),I.dispersion&&r.enable(19),I.retroreflection&&r.enable(24),I.batchingColor&&r.enable(20),I.gradientMap&&r.enable(21),I.packedNormalMap&&r.enable(22),I.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),I.fog&&r.enable(0),I.useFog&&r.enable(1),I.flatShading&&r.enable(2),I.logarithmicDepthBuffer&&r.enable(3),I.reversedDepthBuffer&&r.enable(4),I.skinning&&r.enable(5),I.morphTargets&&r.enable(6),I.morphNormals&&r.enable(7),I.morphColors&&r.enable(8),I.premultipliedAlpha&&r.enable(9),I.shadowMapEnabled&&r.enable(10),I.doubleSided&&r.enable(11),I.flipSided&&r.enable(12),I.useDepthPacking&&r.enable(13),I.dithering&&r.enable(14),I.transmission&&r.enable(15),I.sheen&&r.enable(16),I.opaque&&r.enable(17),I.pointsUvs&&r.enable(18),I.decodeVideoTexture&&r.enable(19),I.decodeVideoTextureEmissive&&r.enable(20),I.alphaToCoverage&&r.enable(21),I.numLightProbeGrids>0&&r.enable(22),I.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function G(g){let I=d[g.type],_;if(I){let R=An[I];_=mi.clone(R.uniforms)}else _=g.uniforms;return _}function E(g,I){let _=l.get(I);return _!==void 0?++_.usedTimes:(_=new T0(n,I,g,s),c.push(_),l.set(I,_)),_}function x(g){if(--g.usedTimes===0){let I=c.indexOf(g);c[I]=c[c.length-1],c.pop(),l.delete(g.cacheKey),g.destroy()}}function y(g){a.remove(g)}function w(){a.dispose()}return{getParameters:C,getProgramCacheKey:f,getUniforms:G,acquireProgram:E,releaseProgram:x,releaseShaderCache:y,programs:c,dispose:w}}function R0(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,o){n.get(r)[a]=o}function A(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:A}}function U0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){let n=[],e=0,t=[],i=[],s=[];function A(){e=0,t.length=0,i.length=0,s.length=0}function r(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,C,f,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:m,materialVariant:r(h),groupOrder:C,renderOrder:h.renderOrder,z:f,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=m,S.materialVariant=r(h),S.groupOrder=C,S.renderOrder=h.renderOrder,S.z=f,S.group=p),e++,S}function o(h,d,m,C,f,p,S){S.reversedDepth===!0&&(f=-f);let G=a(h,d,m,C,f,p);m.transmission>0?i.push(G):m.transparent===!0?s.push(G):t.push(G)}function c(h,d,m,C,f,p){let S=a(h,d,m,C,f,p);m.transmission>0?i.unshift(S):m.transparent===!0?s.unshift(S):t.unshift(S)}function l(h,d){t.length>1&&t.sort(h||U0),i.length>1&&i.sort(d||ed),s.length>1&&s.sort(d||ed)}function u(){for(let h=e,d=n.length;h<d;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:A,push:o,unshift:c,finish:u,sort:l}}function P0(){let n=new WeakMap;function e(i,s){let A=n.get(i),r;return A===void 0?(r=new td,n.set(i,[r])):s>=A.length?(r=new td,A.push(r)):r=A[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function L0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new b,color:new de};break;case"SpotLight":t={position:new b,direction:new b,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function D0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var N0=0;function F0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k0(n){let e=new L0,t=D0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let s=new b,A=new xt,r=new xt;function a(c){let l=0,u=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,m=0,C=0,f=0,p=0,S=0,G=0,E=0,x=0,y=0,w=0,g=0,I=0,_=0;c.sort(F0);for(let O=0,D=c.length;O<D;O++){let T=c[O],N=T.color,Q=T.intensity,Y=T.distance,ne=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Nn?ne=T.shadow.map.texture:ne=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)l+=N.r*Q,u+=N.g*Q,h+=N.b*Q;else if(T.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(T.sh.coefficients[z],Q);_++}else if(T.isSunLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,te=t.get(T);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=ne;let Te=$.getViewportCount();for(let Ke=0;Ke<Te;Ke++)i.sunShadowMatrix[C+Ke]=$.getMatrix(Ke),i.sunShadowCascade[C+Ke]=$._cascadeData[Ke];C+=Te,m++}i.sun[d]=z,d++}else if(T.isDirectionalLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let $=T.shadow,te=t.get(T);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.directionalShadow[f]=te,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=T.shadow.matrix,x++}i.directional[f]=z,f++}else if(T.isSpotLight){let z=e.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(N).multiplyScalar(Q),z.distance=Y,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,i.spot[S]=z;let $=T.shadow;if(T.map&&(i.spotLightMap[g]=T.map,g++,$.updateMatrices(T),T.castShadow&&I++),i.spotLightMatrix[S]=$.matrix,T.castShadow){let te=t.get(T);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.spotShadow[S]=te,i.spotShadowMap[S]=ne,w++}S++}else if(T.isRectAreaLight){let z=e.get(T);z.color.copy(N).multiplyScalar(Q),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),i.rectArea[G]=z,G++}else if(T.isPointLight){let z=e.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){let $=T.shadow,te=t.get(T);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=T.shadow.matrix,y++}i.point[p]=z,p++}else if(T.isHemisphereLight){let z=e.get(T);z.skyColor.copy(T.color).multiplyScalar(Q),z.groundColor.copy(T.groundColor).multiplyScalar(Q),i.hemi[E]=z,E++}}G>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=h;let R=i.hash;(R.sunLength!==d||R.directionalLength!==f||R.pointLength!==p||R.spotLength!==S||R.rectAreaLength!==G||R.hemiLength!==E||R.numSunShadows!==m||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==w||R.numSpotMaps!==g||R.numLightProbes!==_)&&(i.sun.length=d,i.directional.length=f,i.spot.length=S,i.rectArea.length=G,i.point.length=p,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=C,i.sunShadowCascade.length=C,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+g-I,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=_,R.sunLength=d,R.directionalLength=f,R.pointLength=p,R.spotLength=S,R.rectAreaLength=G,R.hemiLength=E,R.numSunShadows=m,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=w,R.numSpotMaps=g,R.numLightProbes=_,i.version=N0++)}function o(c,l){let u=0,h=0,d=0,m=0,C=0,f=0,p=l.matrixWorldInverse;for(let S=0,G=c.length;S<G;S++){let E=c[S];if(E.isSunLight){let x=i.sun[u];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),u++}else if(E.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(E.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let x=i.rectArea[C];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),r.identity(),A.copy(E.matrixWorld),A.premultiply(p),r.extractRotation(A),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),C++}else if(E.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let x=i.hemi[f];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),f++}}}return{setup:a,setupView:o,state:i}}function id(n){let e=new k0(n),t=[],i=[],s=[];function A(h){u.camera=h,t.length=0,i.length=0,s.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(h){s.push(h)}function c(){e.setup(t)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:A,state:u,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a,pushLightProbeGrid:o}}function W0(n){let e=new WeakMap;function t(s,A=0){let r=e.get(s),a;return r===void 0?(a=new id(n),e.set(s,[a])):A>=r.length?(a=new id(n),r.push(a)):a=r[A],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z0=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],V0=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],nd=new xt,lr=new b,gl=new b;function Y0(n,e,t){let i=new Ys,s=new ge,A=new ge,r=new _t,a=new Ma,o=new Sa,c={},l=t.maxTextureSize,u={[Un]:ni,[ni]:Un,[si]:si},h=new et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:H0,fragmentShader:Q0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new _e(m,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=YA;let p=this.type;this.render=function(y,w,g){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;this.type===jh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=YA);let I=n.getRenderTarget(),_=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=p!==this.type;D&&w.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(N=>N.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,N=y.length;T<N;T++){let Q=y[T],Y=Q.shadow;if(Y===void 0){Le("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ne=Y.getFrameExtents();s.multiply(ne),A.copy(Y.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(A.x=Math.floor(l/ne.x),s.x=A.x*ne.x,Y.mapSize.x=A.x),s.y>l&&(A.y=Math.floor(l/ne.y),s.y=A.y*ne.y,Y.mapSize.y=A.y));let z=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=z,Y.map===null||D===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Zs){if(Q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new yt(s.x,s.y,{format:Nn,type:Kt,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new wn(s.x,s.y,Yi),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=ji,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Pt,Y.map.depthTexture.magFilter=Pt}else Q.isPointLight?(Y.map=new _o(s.x),Y.map.depthTexture=new Ea(s.x,Vi)):(Y.map=new yt(s.x,s.y),Y.map.depthTexture=new wn(s.x,s.y,Vi)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=ji,this.type===YA?(Y.map.depthTexture.compareFunction=z?yo:xo,Y.map.depthTexture.minFilter=Qt,Y.map.depthTexture.magFilter=Qt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Pt,Y.map.depthTexture.magFilter=Pt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let $=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,g);for(let te=0;te<$;te++){let Te=Y.getCamera(te);if(Q.isPointLight){let Ke=Y.camera,pt=Y.matrix,$e=Q.distance||Ke.far;$e!==Ke.far&&(Ke.far=$e,Ke.updateProjectionMatrix()),lr.setFromMatrixPosition(Q.matrixWorld),Ke.position.copy(lr),gl.copy(Ke.position),gl.add(z0[te]),Ke.up.copy(V0[te]),Ke.lookAt(gl),Ke.updateMatrixWorld(),pt.makeTranslation(-lr.x,-lr.y,-lr.z),nd.multiplyMatrices(Ke.projectionMatrix,Ke.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(nd,Ke.coordinateSystem,Ke.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,te),n.clear();else{te===0&&(n.setRenderTarget(Y.map),n.clear());let Ke=Y.getViewport(te);r.set(A.x*Ke.x,A.y*Ke.y,A.x*Ke.z,A.y*Ke.w),O.viewport(r)}i=Y.getFrustum(te),E(w,g,Te,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Zs&&S(Y,g),Y.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(I,_,R)};function S(y,w){let g=e.update(C);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new yt(s.x,s.y,{format:Nn,type:Kt}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,g,h,C,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,g,d,C,null)}function G(y,w,g,I){let _=null,R=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)_=R;else if(_=g.isPointLight===!0?o:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=_.uuid,D=w.uuid,T=c[O];T===void 0&&(T={},c[O]=T);let N=T[D];N===void 0&&(N=_.clone(),T[D]=N,w.addEventListener("dispose",x)),_=N}if(_.visible=w.visible,_.wireframe=w.wireframe,I===Zs?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,g.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=n.properties.get(_);O.light=g}return _}function E(y,w,g,I,_){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===Zs)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);let D=e.update(y),T=y.material;if(Array.isArray(T)){let N=D.groups;for(let Q=0,Y=N.length;Q<Y;Q++){let ne=N[Q],z=T[ne.materialIndex];if(z&&z.visible){let $=G(y,z,I,_);y.onBeforeShadow(n,y,w,g,D,$,ne),n.renderBufferDirect(g,null,D,$,y,ne),y.onAfterShadow(n,y,w,g,D,$,ne)}}}else if(T.visible){let N=G(y,T,I,_);y.onBeforeShadow(n,y,w,g,D,N,null),n.renderBufferDirect(g,null,D,N,y,null),y.onAfterShadow(n,y,w,g,D,N,null)}}let O=y.children;for(let D=0,T=O.length;D<T;D++)E(O[D],w,g,I,_)}function x(y){y.target.removeEventListener("dispose",x);for(let g in c){let I=c[g],_=y.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}function q0(n,e){function t(){let U=!1,ce=new _t,X=null,le=new _t(0,0,0,0);return{setMask:function(Ce){X!==Ce&&!U&&(n.colorMask(Ce,Ce,Ce,Ce),X=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,ie,Re,Ge,Ct){Ct===!0&&(Ce*=Ge,ie*=Ge,Re*=Ge),ce.set(Ce,ie,Re,Ge),le.equals(ce)===!1&&(n.clearColor(Ce,ie,Re,Ge),le.copy(ce))},reset:function(){U=!1,X=null,le.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,X=null,le=null,Ce=null;return{setReversed:function(ie){if(ce!==ie){let Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;let Ge=Ce;Ce=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ie){ie?ee(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ie){X!==ie&&!U&&(n.depthMask(ie),X=ie)},setFunc:function(ie){if(ce&&(ie=Ou[ie]),le!==ie){switch(ie){case Aa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case aa:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case ca:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=ie}},setLocked:function(ie){U=ie},setClear:function(ie){Ce!==ie&&(Ce=ie,ce&&(ie=1-ie),n.clearDepth(ie))},reset:function(){U=!1,X=null,le=null,Ce=null,ce=!1}}}function s(){let U=!1,ce=null,X=null,le=null,Ce=null,ie=null,Re=null,Ge=null,Ct=null;return{setTest:function(At){U||(At?ee(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(At){ce!==At&&!U&&(n.stencilMask(At),ce=At)},setFunc:function(At,Li,qi){(X!==At||le!==Li||Ce!==qi)&&(n.stencilFunc(At,Li,qi),X=At,le=Li,Ce=qi)},setOp:function(At,Li,qi){(ie!==At||Re!==Li||Ge!==qi)&&(n.stencilOp(At,Li,qi),ie=At,Re=Li,Ge=qi)},setLocked:function(At){U=At},setClear:function(At){Ct!==At&&(n.clearStencil(At),Ct=At)},reset:function(){U=!1,ce=null,X=null,le=null,Ce=null,ie=null,Re=null,Ge=null,Ct=null}}}let A=new t,r=new i,a=new s,o=new WeakMap,c=new WeakMap,l={},u={},h={},d=new WeakMap,m=[],C=null,f=!1,p=null,S=null,G=null,E=null,x=null,y=null,w=null,g=new de(0,0,0),I=0,_=!1,R=null,O=null,D=null,T=null,N=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ne=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=ne>=2);let $=null,te={},Te=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),pt=new _t().fromArray(Te),$e=new _t().fromArray(Ke);function st(U,ce,X,le){let Ce=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<X;Re++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ce+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return ie}let q={};q[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),A.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),r.setFunc(Fs),Ze(!1),Gt(Wc),ee(n.CULL_FACE),it(Ri);function ee(U){l[U]!==!0&&(n.enable(U),l[U]=!0)}function ye(U){l[U]!==!1&&(n.disable(U),l[U]=!1)}function Fe(U,ce){return h[U]!==ce?(n.bindFramebuffer(U,ce),h[U]=ce,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(U,ce){let X=m,le=!1;if(U){X=d.get(ce),X===void 0&&(X=[],d.set(ce,X));let Ce=U.textures;if(X.length!==Ce.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Re=Ce.length;ie<Re;ie++)X[ie]=n.COLOR_ATTACHMENT0+ie;X.length=Ce.length,le=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,le=!0);le&&n.drawBuffers(X)}function Ve(U){return C!==U?(n.useProgram(U),C=U,!0):!1}let Ht={[ns]:n.FUNC_ADD,[eu]:n.FUNC_SUBTRACT,[tu]:n.FUNC_REVERSE_SUBTRACT};Ht[iu]=n.MIN,Ht[nu]=n.MAX;let Je={[su]:n.ZERO,[Au]:n.ONE,[ru]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[uu]:n.SRC_ALPHA_SATURATE,[lu]:n.DST_COLOR,[ou]:n.DST_ALPHA,[au]:n.ONE_MINUS_SRC_COLOR,[Vc]:n.ONE_MINUS_SRC_ALPHA,[hu]:n.ONE_MINUS_DST_COLOR,[cu]:n.ONE_MINUS_DST_ALPHA,[du]:n.CONSTANT_COLOR,[fu]:n.ONE_MINUS_CONSTANT_COLOR,[pu]:n.CONSTANT_ALPHA,[mu]:n.ONE_MINUS_CONSTANT_ALPHA};function it(U,ce,X,le,Ce,ie,Re,Ge,Ct,At){if(U===Ri){f===!0&&(ye(n.BLEND),f=!1);return}if(f===!1&&(ee(n.BLEND),f=!0),U!==$h){if(U!==p||At!==_){if((S!==ns||x!==ns)&&(n.blendEquation(n.FUNC_ADD),S=ns,x=ns),At)switch(U){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",U);break}else switch(U){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",U);break}G=null,E=null,y=null,w=null,g.set(0,0,0),I=0,p=U,_=At}return}Ce=Ce||ce,ie=ie||X,Re=Re||le,(ce!==S||Ce!==x)&&(n.blendEquationSeparate(Ht[ce],Ht[Ce]),S=ce,x=Ce),(X!==G||le!==E||ie!==y||Re!==w)&&(n.blendFuncSeparate(Je[X],Je[le],Je[ie],Je[Re]),G=X,E=le,y=ie,w=Re),(Ge.equals(g)===!1||Ct!==I)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Ct),g.copy(Ge),I=Ct),p=U,_=!1}function mt(U,ce){U.side===si?ye(n.CULL_FACE):ee(n.CULL_FACE);let X=U.side===ni;ce&&(X=!X),Ze(X),U.blending===js&&U.transparent===!1?it(Ri):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),A.setMask(U.colorWrite);let le=U.stencilWrite;a.setTest(le),le&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bi(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function Gt(U){U!==Xh?(ee(n.CULL_FACE),U!==O&&(U===Wc?n.cullFace(n.BACK):U===Zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),O=U}function Jt(U){U!==D&&(Y&&n.lineWidth(U),D=U)}function Bi(U,ce,X){U?(ee(n.POLYGON_OFFSET_FILL),(T!==ce||N!==X)&&(T=ce,N=X,r.getReversed()&&(ce=-ce),n.polygonOffset(ce,X))):ye(n.POLYGON_OFFSET_FILL)}function wt(U){U?ee(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Nt(U){U===void 0&&(U=n.TEXTURE0+Q-1),$!==U&&(n.activeTexture(U),$=U)}function P(U,ce,X){X===void 0&&($===null?X=n.TEXTURE0+Q-1:X=$);let le=te[X];le===void 0&&(le={type:void 0,texture:void 0},te[X]=le),(le.type!==U||le.texture!==ce)&&($!==X&&(n.activeTexture(X),$=X),n.bindTexture(U,ce||q[U]),le.type=U,le.texture=ce)}function ai(){let U=te[$];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function v(){try{n.compressedTexImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function B(){try{n.texSubImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function L(){try{n.texSubImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function V(){try{n.compressedTexSubImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function Ae(){try{n.texStorage2D(...arguments)}catch(U){De("WebGLState:",U)}}function re(){try{n.texStorage3D(...arguments)}catch(U){De("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){De("WebGLState:",U)}}function Z(){try{n.texImage3D(...arguments)}catch(U){De("WebGLState:",U)}}function ae(U){return u[U]!==void 0?u[U]:n.getParameter(U)}function be(U,ce){u[U]!==ce&&(n.pixelStorei(U,ce),u[U]=ce)}function fe(U){pt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function oe(U){$e.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$e.copy(U))}function Oe(U,ce){let X=c.get(ce);X===void 0&&(X=new WeakMap,c.set(ce,X));let le=X.get(U);le===void 0&&(le=n.getUniformBlockIndex(ce,U.name),X.set(U,le))}function Pe(U,ce){let le=c.get(ce).get(U);o.get(ce)!==le&&(n.uniformBlockBinding(ce,le,U.__bindingPointIndex),o.set(ce,le))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},u={},$=null,te={},h={},d=new WeakMap,m=[],C=null,f=!1,p=null,S=null,G=null,E=null,x=null,y=null,w=null,g=new de(0,0,0),I=0,_=!1,R=null,O=null,D=null,T=null,N=null,pt.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),A.reset(),r.reset(),a.reset()}return{buffers:{color:A,depth:r,stencil:a},enable:ee,disable:ye,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Ve,setBlending:it,setMaterial:mt,setFlipSided:Ze,setCullFace:Gt,setLineWidth:Jt,setPolygonOffset:Bi,setScissorTest:wt,activeTexture:Nt,bindTexture:P,unbindTexture:ai,compressedTexImage2D:ot,compressedTexImage3D:v,texImage2D:J,texImage3D:Z,pixelStorei:be,getParameter:ae,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:re,texSubImage2D:B,texSubImage3D:L,compressedTexSubImage2D:W,compressedTexSubImage3D:V,scissor:fe,viewport:oe,reset:We}}function J0(n,e,t,i,s,A,r){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,l=new WeakMap,u=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(v,B){return m?new OffscreenCanvas(v,B):_A("canvas")}function f(v,B,L){let W=1,V=ot(v);if((V.width>L||V.height>L)&&(W=L/Math.max(V.width,V.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let Ae=Math.floor(W*V.width),re=Math.floor(W*V.height);h===void 0&&(h=C(Ae,re));let J=B?C(Ae,re):h;return J.width=Ae,J.height=re,J.getContext("2d").drawImage(v,0,0,Ae,re),Le("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+Ae+"x"+re+")."),J}else return"data"in v&&Le("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),v;return v}function p(v){return v.generateMipmaps}function S(v){n.generateMipmap(v)}function G(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,B,L,W,V,Ae=!1){if(v!==null){if(n[v]!==void 0)return n[v];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let re;W&&(re=e.get("EXT_texture_norm16"),re||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=B;if(B===n.RED&&(L===n.FLOAT&&(J=n.R32F),L===n.HALF_FLOAT&&(J=n.R16F),L===n.UNSIGNED_BYTE&&(J=n.R8),L===n.UNSIGNED_SHORT&&re&&(J=re.R16_EXT),L===n.SHORT&&re&&(J=re.R16_SNORM_EXT)),B===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.R8UI),L===n.UNSIGNED_SHORT&&(J=n.R16UI),L===n.UNSIGNED_INT&&(J=n.R32UI),L===n.BYTE&&(J=n.R8I),L===n.SHORT&&(J=n.R16I),L===n.INT&&(J=n.R32I)),B===n.RG&&(L===n.FLOAT&&(J=n.RG32F),L===n.HALF_FLOAT&&(J=n.RG16F),L===n.UNSIGNED_BYTE&&(J=n.RG8),L===n.UNSIGNED_SHORT&&re&&(J=re.RG16_EXT),L===n.SHORT&&re&&(J=re.RG16_SNORM_EXT)),B===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RG8UI),L===n.UNSIGNED_SHORT&&(J=n.RG16UI),L===n.UNSIGNED_INT&&(J=n.RG32UI),L===n.BYTE&&(J=n.RG8I),L===n.SHORT&&(J=n.RG16I),L===n.INT&&(J=n.RG32I)),B===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGB8UI),L===n.UNSIGNED_SHORT&&(J=n.RGB16UI),L===n.UNSIGNED_INT&&(J=n.RGB32UI),L===n.BYTE&&(J=n.RGB8I),L===n.SHORT&&(J=n.RGB16I),L===n.INT&&(J=n.RGB32I)),B===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),L===n.UNSIGNED_INT&&(J=n.RGBA32UI),L===n.BYTE&&(J=n.RGBA8I),L===n.SHORT&&(J=n.RGBA16I),L===n.INT&&(J=n.RGBA32I)),B===n.RGB&&(L===n.UNSIGNED_SHORT&&re&&(J=re.RGB16_EXT),L===n.SHORT&&re&&(J=re.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),B===n.RGBA){let Z=Ae?GA:Ye.getTransfer(V);L===n.FLOAT&&(J=n.RGBA32F),L===n.HALF_FLOAT&&(J=n.RGBA16F),L===n.UNSIGNED_BYTE&&(J=Z===nt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&re&&(J=re.RGBA16_EXT),L===n.SHORT&&re&&(J=re.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(v,B){let L;return v?B===null||B===Vi||B===eA?L=n.DEPTH24_STENCIL8:B===Yi?L=n.DEPTH32F_STENCIL8:B===$s&&(L=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Vi||B===eA?L=n.DEPTH_COMPONENT24:B===Yi?L=n.DEPTH_COMPONENT32F:B===$s&&(L=n.DEPTH_COMPONENT16),L}function y(v,B){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==Pt&&v.minFilter!==Qt?Math.log2(Math.max(B.width,B.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?B.mipmaps.length:1}function w(v){let B=v.target;B.removeEventListener("dispose",w),I(B),B.isVideoTexture&&l.delete(B),B.isHTMLTexture&&u.delete(B)}function g(v){let B=v.target;B.removeEventListener("dispose",g),R(B)}function I(v){let B=i.get(v);if(B.__webglInit===void 0)return;let L=v.source,W=d.get(L);if(W){let V=W[B.__cacheKey];V.usedTimes--,V.usedTimes===0&&_(v),Object.keys(W).length===0&&d.delete(L)}i.remove(v)}function _(v){let B=i.get(v);n.deleteTexture(B.__webglTexture);let L=v.source,W=d.get(L);delete W[B.__cacheKey],r.memory.textures--}function R(v){let B=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(B.__webglFramebuffer[W]))for(let V=0;V<B.__webglFramebuffer[W].length;V++)n.deleteFramebuffer(B.__webglFramebuffer[W][V]);else n.deleteFramebuffer(B.__webglFramebuffer[W]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[W])}else{if(Array.isArray(B.__webglFramebuffer))for(let W=0;W<B.__webglFramebuffer.length;W++)n.deleteFramebuffer(B.__webglFramebuffer[W]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let W=0;W<B.__webglColorRenderbuffer.length;W++)B.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[W]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}let L=v.textures;for(let W=0,V=L.length;W<V;W++){let Ae=i.get(L[W]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),r.memory.textures--),i.remove(L[W])}i.remove(v)}let O=0;function D(){O=0}function T(){return O}function N(v){O=v}function Q(){let v=O;return v>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(v+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,v}function Y(v){let B=[];return B.push(v.wrapS),B.push(v.wrapT),B.push(v.wrapR||0),B.push(v.magFilter),B.push(v.minFilter),B.push(v.anisotropy),B.push(v.internalFormat),B.push(v.format),B.push(v.type),B.push(v.generateMipmaps),B.push(v.premultiplyAlpha),B.push(v.flipY),B.push(v.unpackAlignment),B.push(v.colorSpace),B.join()}function ne(v,B){let L=i.get(v);if(v.isVideoTexture&&P(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&L.__version!==v.version){let W=v.image;if(W===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(L,v,B);return}}else v.isExternalTexture&&(L.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+B)}function z(v,B){let L=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&L.__version!==v.version){ye(L,v,B);return}else v.isExternalTexture&&(L.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+B)}function $(v,B){let L=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&L.__version!==v.version){ye(L,v,B);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+B)}function te(v,B){let L=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&L.__version!==v.version){Fe(L,v,B);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+B)}let Te={[ua]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},Ke={[Pt]:n.NEAREST,[gu]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},pt={[xu]:n.NEVER,[_u]:n.ALWAYS,[yu]:n.LESS,[xo]:n.LEQUAL,[Iu]:n.EQUAL,[yo]:n.GEQUAL,[vu]:n.GREATER,[Gu]:n.NOTEQUAL};function $e(v,B){if(B.type===Yi&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===Qt||B.magFilter===Da||B.magFilter===tr||B.magFilter===Ln||B.minFilter===Qt||B.minFilter===Da||B.minFilter===tr||B.minFilter===Ln)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,Te[B.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,Te[B.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,Te[B.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Ke[B.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Ke[B.minFilter]),B.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,pt[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===Pt||B.minFilter!==tr&&B.minFilter!==Ln||B.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||i.get(B).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,s.getMaxAnisotropy())),i.get(B).__currentAnisotropy=B.anisotropy}}}function st(v,B){let L=!1;v.__webglInit===void 0&&(v.__webglInit=!0,B.addEventListener("dispose",w));let W=B.source,V=d.get(W);V===void 0&&(V={},d.set(W,V));let Ae=Y(B);if(Ae!==v.__cacheKey){V[Ae]===void 0&&(V[Ae]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,L=!0),V[Ae].usedTimes++;let re=V[v.__cacheKey];re!==void 0&&(V[v.__cacheKey].usedTimes--,re.usedTimes===0&&_(B)),v.__cacheKey=Ae,v.__webglTexture=V[Ae].texture}return L}function q(v,B,L){return Math.floor(Math.floor(v/L)/B)}function ee(v,B,L,W){let Ae=v.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,B.width,B.height,L,W,B.data);else{Ae.sort((be,fe)=>be.start-fe.start);let re=0;for(let be=1;be<Ae.length;be++){let fe=Ae[re],oe=Ae[be],Oe=fe.start+fe.count,Pe=q(oe.start,B.width,4),We=q(fe.start,B.width,4);oe.start<=Oe+1&&Pe===We&&q(oe.start+oe.count-1,B.width,4)===Pe?fe.count=Math.max(fe.count,oe.start+oe.count-fe.start):(++re,Ae[re]=oe)}Ae.length=re+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,B.width);for(let be=0,fe=Ae.length;be<fe;be++){let oe=Ae[be],Oe=Math.floor(oe.start/4),Pe=Math.ceil(oe.count/4),We=Oe%B.width,U=Math.floor(Oe/B.width),ce=Pe,X=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,We,U,ce,X,L,W,B.data)}v.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ye(v,B,L){let W=n.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),B.isData3DTexture&&(W=n.TEXTURE_3D);let V=st(v,B),Ae=B.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+L);let re=i.get(Ae);if(Ae.version!==re.__version||V===!0){if(t.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&B.image instanceof ImageBitmap)===!1){let X=Ye.getPrimaries(Ye.workingColorSpace),le=B.colorSpace===Cn?null:Ye.getPrimaries(B.colorSpace),Ce=B.colorSpace===Cn||X===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment);let Z=f(B.image,!1,s.maxTextureSize);Z=ai(B,Z);let ae=A.convert(B.format,B.colorSpace),be=A.convert(B.type),fe=E(B.internalFormat,ae,be,B.normalized,B.colorSpace,B.isVideoTexture);$e(W,B);let oe,Oe=B.mipmaps,Pe=B.isVideoTexture!==!0,We=re.__version===void 0||V===!0,U=Ae.dataReady,ce=y(B,Z);if(B.isDepthTexture)fe=x(B.format===Dn,B.type),We&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,fe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,be,null));else if(B.isDataTexture)if(Oe.length>0){Pe&&We&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Oe[0].width,Oe[0].height);for(let X=0,le=Oe.length;X<le;X++)oe=Oe[X],Pe?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,X,fe,oe.width,oe.height,0,ae,be,oe.data);B.generateMipmaps=!1}else Pe?(We&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Z.width,Z.height),U&&ee(B,Z,ae,be)):t.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,be,Z.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){Pe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Oe[0].width,Oe[0].height,Z.depth);for(let X=0,le=Oe.length;X<le;X++)if(oe=Oe[X],B.format!==Ui)if(ae!==null)if(Pe){if(U)if(B.layerUpdates.size>0){let Ce=ol(oe.width,oe.height,B.format,B.type);for(let ie of B.layerUpdates){let Re=oe.data.subarray(ie*Ce/oe.data.BYTES_PER_ELEMENT,(ie+1)*Ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ie,oe.width,oe.height,1,ae,Re)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,oe.width,oe.height,Z.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,fe,oe.width,oe.height,Z.depth,0,oe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,oe.width,oe.height,Z.depth,ae,be,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,fe,oe.width,oe.height,Z.depth,0,ae,be,oe.data);B.layerUpdates.size>0&&B.clearLayerUpdates()}else{Pe&&We&&t.texStorage2D(n.TEXTURE_2D,ce,fe,Oe[0].width,Oe[0].height);for(let X=0,le=Oe.length;X<le;X++)oe=Oe[X],B.format!==Ui?ae!==null?Pe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,fe,oe.width,oe.height,0,oe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,X,fe,oe.width,oe.height,0,ae,be,oe.data)}else if(B.isDataArrayTexture)if(Pe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,fe,Z.width,Z.height,Z.depth),U)if(B.layerUpdates.size>0){let X=ol(Z.width,Z.height,B.format,B.type);for(let le of B.layerUpdates){let Ce=Z.data.subarray(le*X/Z.data.BYTES_PER_ELEMENT,(le+1)*X/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Z.width,Z.height,1,ae,be,Ce)}B.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,be,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,ae,be,Z.data);else if(B.isData3DTexture)Pe?(We&&t.texStorage3D(n.TEXTURE_3D,ce,fe,Z.width,Z.height,Z.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,be,Z.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,ae,be,Z.data);else if(B.isFramebufferTexture){if(We)if(Pe)t.texStorage2D(n.TEXTURE_2D,ce,fe,Z.width,Z.height);else{let X=Z.width,le=Z.height;for(let Ce=0;Ce<ce;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,fe,X,le,0,ae,be,null),X>>=1,le>>=1}}else if(B.isHTMLTexture){if("texElementImage2D"in n){let X=n.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Z.parentNode!==X){X.appendChild(Z),u.add(B),X.onpaint=le=>{let Ce=le.changedElements;for(let ie of u)Ce.includes(ie.image)&&(ie.needsUpdate=!0)},X.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let Ce=n.RGBA,ie=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,ie,Re,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Pe&&We){let X=ot(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ce,fe,X.width,X.height)}for(let X=0,le=Oe.length;X<le;X++)oe=Oe[X],Pe?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ae,be,oe):t.texImage2D(n.TEXTURE_2D,X,fe,ae,be,oe);B.generateMipmaps=!1}else if(Pe){if(We){let X=ot(Z);t.texStorage2D(n.TEXTURE_2D,ce,fe,X.width,X.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,be,Z)}else t.texImage2D(n.TEXTURE_2D,0,fe,ae,be,Z);p(B)&&S(W),re.__version=Ae.version,B.onUpdate&&B.onUpdate(B)}v.__version=B.version}function Fe(v,B,L){if(B.image.length!==6)return;let W=st(v,B),V=B.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+L);let Ae=i.get(V);if(V.version!==Ae.__version||W===!0){t.activeTexture(n.TEXTURE0+L);let re=Ye.getPrimaries(Ye.workingColorSpace),J=B.colorSpace===Cn?null:Ye.getPrimaries(B.colorSpace),Z=B.colorSpace===Cn||re===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ae=B.isCompressedTexture||B.image[0].isCompressedTexture,be=B.image[0]&&B.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ae&&!be?fe[ie]=f(B.image[ie],!0,s.maxCubemapSize):fe[ie]=be?B.image[ie].image:B.image[ie],fe[ie]=ai(B,fe[ie]);let oe=fe[0],Oe=A.convert(B.format,B.colorSpace),Pe=A.convert(B.type),We=E(B.internalFormat,Oe,Pe,B.normalized,B.colorSpace),U=B.isVideoTexture!==!0,ce=Ae.__version===void 0||W===!0,X=V.dataReady,le=y(B,oe);$e(n.TEXTURE_CUBE_MAP,B);let Ce;if(ae){U&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,oe.width,oe.height);for(let ie=0;ie<6;ie++){Ce=fe[ie].mipmaps;for(let Re=0;Re<Ce.length;Re++){let Ge=Ce[Re];B.format!==Ui?Oe!==null?U?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,We,Ge.width,Ge.height,0,Ge.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Ge.width,Ge.height,Oe,Pe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,We,Ge.width,Ge.height,0,Oe,Pe,Ge.data)}}}else{if(Ce=B.mipmaps,U&&ce){Ce.length>0&&le++;let ie=ot(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,We,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(be){U?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Oe,Pe,fe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,fe[ie].width,fe[ie].height,0,Oe,Pe,fe[ie].data);for(let Re=0;Re<Ce.length;Re++){let Ct=Ce[Re].image[ie].image;U?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ct.width,Ct.height,Oe,Pe,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,We,Ct.width,Ct.height,0,Oe,Pe,Ct.data)}}else{U?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,Pe,fe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Oe,Pe,fe[ie]);for(let Re=0;Re<Ce.length;Re++){let Ge=Ce[Re];U?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Oe,Pe,Ge.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,We,Oe,Pe,Ge.image[ie])}}}p(B)&&S(n.TEXTURE_CUBE_MAP),Ae.__version=V.version,B.onUpdate&&B.onUpdate(B)}v.__version=B.version}function Ee(v,B,L,W,V,Ae){let re=A.convert(L.format,L.colorSpace),J=A.convert(L.type),Z=E(L.internalFormat,re,J,L.normalized,L.colorSpace),ae=i.get(B),be=i.get(L);if(be.__renderTarget=B,!ae.__hasExternalTextures){let fe=Math.max(1,B.width>>Ae),oe=Math.max(1,B.height>>Ae);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?t.texImage3D(V,Ae,Z,fe,oe,B.depth,0,re,J,null):t.texImage2D(V,Ae,Z,fe,oe,0,re,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),Nt(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,V,be.__webglTexture,0,wt(B)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,V,be.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(v,B,L){if(n.bindRenderbuffer(n.RENDERBUFFER,v),B.depthBuffer){let W=B.depthTexture,V=W&&W.isDepthTexture?W.type:null,Ae=x(B.stencilBuffer,V),re=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Nt(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(B),Ae,B.width,B.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(B),Ae,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,v)}else{let W=B.textures;for(let V=0;V<W.length;V++){let Ae=W[V],re=A.convert(Ae.format,Ae.colorSpace),J=A.convert(Ae.type),Z=E(Ae.internalFormat,re,J,Ae.normalized,Ae.colorSpace);Nt(B)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(B),Z,B.width,B.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(B),Z,B.width,B.height):n.renderbufferStorage(n.RENDERBUFFER,Z,B.width,B.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(v,B,L){let W=B.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=i.get(B.depthTexture);if(V.__renderTarget=B,(!V.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),W){if(V.__webglInit===void 0&&(V.__webglInit=!0,B.depthTexture.addEventListener("dispose",w)),V.__webglTexture===void 0){V.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),$e(n.TEXTURE_CUBE_MAP,B.depthTexture);let ae=A.convert(B.depthTexture.format),be=A.convert(B.depthTexture.type),fe;B.depthTexture.format===ji?fe=n.DEPTH_COMPONENT24:B.depthTexture.format===Dn&&(fe=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,fe,B.width,B.height,0,ae,be,null)}}else ne(B.depthTexture,0);let Ae=V.__webglTexture,re=wt(B),J=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Z=B.depthTexture.format===Dn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(B.depthTexture.format===ji)Nt(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,Ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,Ae,0);else if(B.depthTexture.format===Dn)Nt(B)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,Ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(v){let B=i.get(v),L=v.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==v.depthTexture){let W=v.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),W){let V=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,W.removeEventListener("dispose",V)};W.addEventListener("dispose",V),B.__depthDisposeCallback=V}B.__boundDepthTexture=W}if(v.depthTexture&&!B.__autoAllocateDepthBuffer)if(L)for(let W=0;W<6;W++)Ht(B.__webglFramebuffer[W],v,W);else{let W=v.texture.mipmaps;W&&W.length>0?Ht(B.__webglFramebuffer[0],v,0):Ht(B.__webglFramebuffer,v,0)}else if(L){B.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer[W]),B.__webglDepthbuffer[W]===void 0)B.__webglDepthbuffer[W]=n.createRenderbuffer(),Ve(B.__webglDepthbuffer[W],v,!1);else{let V=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=B.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,Ae)}}else{let W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=n.createRenderbuffer(),Ve(B.__webglDepthbuffer,v,!1);else{let V=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=B.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(v,B,L){let W=i.get(v);B!==void 0&&Ee(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Je(v)}function mt(v){let B=v.texture,L=i.get(v),W=i.get(B);v.addEventListener("dispose",g);let V=v.textures,Ae=v.isWebGLCubeRenderTarget===!0,re=V.length>1;if(re||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=B.version,r.memory.textures++),Ae){L.__webglFramebuffer=[];for(let J=0;J<6;J++)if(B.mipmaps&&B.mipmaps.length>0){L.__webglFramebuffer[J]=[];for(let Z=0;Z<B.mipmaps.length;Z++)L.__webglFramebuffer[J][Z]=n.createFramebuffer()}else L.__webglFramebuffer[J]=n.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){L.__webglFramebuffer=[];for(let J=0;J<B.mipmaps.length;J++)L.__webglFramebuffer[J]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(re)for(let J=0,Z=V.length;J<Z;J++){let ae=i.get(V[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),r.memory.textures++)}if(v.samples>0&&Nt(v)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let J=0;J<V.length;J++){let Z=V[J];L.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[J]);let ae=A.convert(Z.format,Z.colorSpace),be=A.convert(Z.type),fe=E(Z.internalFormat,ae,be,Z.normalized,Z.colorSpace,v.isXRRenderTarget===!0),oe=wt(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,fe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,L.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(L.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),$e(n.TEXTURE_CUBE_MAP,B);for(let J=0;J<6;J++)if(B.mipmaps&&B.mipmaps.length>0)for(let Z=0;Z<B.mipmaps.length;Z++)Ee(L.__webglFramebuffer[J][Z],v,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Z);else Ee(L.__webglFramebuffer[J],v,B,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(B)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let J=0,Z=V.length;J<Z;J++){let ae=V[J],be=i.get(ae),fe=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(fe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,be.__webglTexture),$e(fe,ae),Ee(L.__webglFramebuffer,v,ae,n.COLOR_ATTACHMENT0+J,fe,0),p(ae)&&S(fe)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(J=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),$e(J,B),B.mipmaps&&B.mipmaps.length>0)for(let Z=0;Z<B.mipmaps.length;Z++)Ee(L.__webglFramebuffer[Z],v,B,n.COLOR_ATTACHMENT0,J,Z);else Ee(L.__webglFramebuffer,v,B,n.COLOR_ATTACHMENT0,J,0);p(B)&&S(J),t.unbindTexture()}v.depthBuffer&&Je(v)}function Ze(v){let B=v.textures;for(let L=0,W=B.length;L<W;L++){let V=B[L];if(p(V)){let Ae=G(v),re=i.get(V).__webglTexture;t.bindTexture(Ae,re),S(Ae),t.unbindTexture()}}}let Gt=[],Jt=[];function Bi(v){if(v.samples>0){if(Nt(v)===!1){let B=v.textures,L=v.width,W=v.height,V=n.COLOR_BUFFER_BIT,Ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(v),J=B.length>1;if(J)for(let ae=0;ae<B.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let Z=v.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<B.length;ae++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let be=i.get(B[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,V,n.NEAREST),o===!0&&(Gt.length=0,Jt.length=0,Gt.push(n.COLOR_ATTACHMENT0+ae),v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&(Gt.push(Ae),Jt.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<B.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let be=i.get(B[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&o){let B=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[B])}}}function wt(v){return Math.min(s.maxSamples,v.samples)}function Nt(v){let B=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function P(v){let B=r.render.frame;l.get(v)!==B&&(l.set(v,B),v.update())}function ai(v,B){let L=v.colorSpace,W=v.format,V=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||L!==vA&&L!==Cn&&(Ye.getTransfer(L)===nt?(W!==Ui||V!==Ei)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",L)),B}function ot(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=D,this.getTextureUnits=T,this.setTextureUnits=N,this.setTexture2D=ne,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Bi,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X0(n,e){function t(i,s=Cn){let A,r=Ye.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===Fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return n.BYTE;if(i===Xc)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===Na)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Yi)return n.FLOAT;if(i===Kt)return n.HALF_FLOAT;if(i===$c)return n.ALPHA;if(i===el)return n.RGB;if(i===Ui)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===Dn)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===Wa)return n.RED_INTEGER;if(i===Nn)return n.RG;if(i===Ha)return n.RG_INTEGER;if(i===Qa)return n.RGBA_INTEGER;if(i===ir||i===nr||i===sr||i===Ar)if(r===nt)if(A=e.get("WEBGL_compressed_texture_s3tc_srgb"),A!==null){if(i===ir)return A.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return A.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(A=e.get("WEBGL_compressed_texture_s3tc"),A!==null){if(i===ir)return A.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return A.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return A.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return A.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Va||i===Ya||i===qa)if(A=e.get("WEBGL_compressed_texture_pvrtc"),A!==null){if(i===za)return A.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return A.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ya)return A.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return A.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Xa||i===Za||i===ja||i===$a||i===rr||i===eo)if(A=e.get("WEBGL_compressed_texture_etc"),A!==null){if(i===Ja||i===Xa)return r===nt?A.COMPRESSED_SRGB8_ETC2:A.COMPRESSED_RGB8_ETC2;if(i===Za)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:A.COMPRESSED_RGBA8_ETC2_EAC;if(i===ja)return A.COMPRESSED_R11_EAC;if(i===$a)return A.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return A.COMPRESSED_RG11_EAC;if(i===eo)return A.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===to||i===io||i===no||i===so||i===Ao||i===ro||i===ao||i===oo||i===co||i===lo||i===ho||i===uo||i===fo||i===po)if(A=e.get("WEBGL_compressed_texture_astc"),A!==null){if(i===to)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:A.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===io)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:A.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:A.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===so)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:A.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ao)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:A.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:A.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:A.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:A.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===co)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:A.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:A.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:A.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:A.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:A.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return r===nt?A.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:A.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===Co||i===Bo)if(A=e.get("EXT_texture_compression_bptc"),A!==null){if(i===mo)return r===nt?A.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:A.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return A.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bo)return A.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===go||i===Eo||i===ar||i===Mo)if(A=e.get("EXT_texture_compression_rgtc"),A!==null){if(i===go)return A.COMPRESSED_RED_RGTC1_EXT;if(i===Eo)return A.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return A.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return A.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eA?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new FA(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new et({vertexShader:Z0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends $i{constructor(e,t){super();let i=this,s=null,A=1,r=null,a="local-floor",o=1,c=null,l=null,u=null,h=null,d=null,m=null,C=typeof XRWebGLBinding<"u",f=new Gl,p={},S=t.getContextAttributes(),G=null,E=null,x=[],y=[],w=new ge,g=null,I=null,_=new ii;_.viewport=new _t;let R=new ii;R.viewport=new _t;let O=[_,R],D=new Ra,T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new zs,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new zs,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new zs,x[q]=ee),ee.getHandSpace()};function Q(q){let ee=y.indexOf(q.inputSource);if(ee===-1)return;let ye=x[ee];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||r),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<x.length;q++){let ee=y[q];ee!==null&&(y[q]=null,x[q].disconnect(ee))}T=null,N=null,f.reset();for(let q in p)delete p[q];if(e.setRenderTarget(G),d=null,h=null,u=null,s=null,E=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),I!==null){let q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){A=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&C&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(G=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Fe=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Dn:ji,Fe=S.stencil?eA:Vi);let Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:A};u=this.getBinding(),h=u.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new yt(h.textureWidth,h.textureHeight,{format:Ui,type:Ei,depthTexture:new wn(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:A};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new yt(d.framebufferWidth,d.framebufferHeight,{format:Ui,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),c=null,r=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(q){for(let ee=0;ee<q.removed.length;ee++){let ye=q.removed[ee],Fe=y.indexOf(ye);Fe>=0&&(y[Fe]=null,x[Fe].disconnect(ye))}for(let ee=0;ee<q.added.length;ee++){let ye=q.added[ee],Fe=y.indexOf(ye);if(Fe===-1){for(let Ve=0;Ve<x.length;Ve++)if(Ve>=y.length){y.push(ye),Fe=Ve;break}else if(y[Ve]===null){y[Ve]=ye,Fe=Ve;break}if(Fe===-1)break}let Ee=x[Fe];Ee&&Ee.connect(ye)}}let z=new b,$=new b;function te(q,ee,ye){z.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(ye.matrixWorld);let Fe=z.distanceTo($),Ee=ee.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Ht=Ee[14]/(Ee[10]-1),Je=Ee[14]/(Ee[10]+1),it=(Ee[9]+1)/Ee[5],mt=(Ee[9]-1)/Ee[5],Ze=(Ee[8]-1)/Ee[0],Gt=(Ve[8]+1)/Ve[0],Jt=Ht*Ze,Bi=Ht*Gt,wt=Fe/(-Ze+Gt),Nt=wt*-Ze;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let P=Ht+wt,ai=Je+wt,ot=Jt-Nt,v=Bi+(Fe-Nt),B=it*Je/ai*P,L=mt*Je/ai*P;q.projectionMatrix.makePerspective(ot,v,B,L,P,ai),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Te(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,ye=q.far;f.texture!==null&&(f.depthNear>0&&(ee=f.depthNear),f.depthFar>0&&(ye=f.depthFar)),D.near=R.near=_.near=ee,D.far=R.far=_.far=ye,(T!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),T=D.near,N=D.far),D.layers.mask=q.layers.mask|6,_.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Fe=q.parent,Ee=D.cameras;Te(D,Fe);for(let Ve=0;Ve<Ee.length;Ve++)Te(Ee[Ve],Fe);Ee.length===2?te(D,_,R):D.projectionMatrix.copy(_.projectionMatrix),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),Ke(q,D,Fe)};function Ke(q,ee,ye){ye===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return o},this.setFoveation=function(q){o=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let pt=null;function $e(q,ee){if(l=ee.getViewerPose(c||r),m=ee,l!==null){let ye=l.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Fe=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let Je=0;Je<ye.length;Je++){let it=ye[Je],mt=null;if(d!==null)mt=d.getViewport(it);else{let Gt=u.getViewSubImage(h,it);mt=Gt.viewport,Je===0&&(e.setRenderTargetTextures(E,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(E))}let Ze=O[Je];Ze===void 0&&(Ze=new ii,Ze.layers.enable(Je),Ze.viewport=new _t,O[Je]=Ze),Ze.matrix.fromArray(it.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(it.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(mt.x,mt.y,mt.width,mt.height),Je===0&&(D.matrix.copy(Ze.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(Ze)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&C){u=i.getBinding();let Je=u.getDepthInformation(ye[0]);Je&&Je.isValid&&Je.texture&&f.init(Je,s.renderState)}if(Ee&&Ee.includes("camera-access")&&C){e.state.unbindTexture(),u=i.getBinding();for(let Je=0;Je<ye.length;Je++){let it=ye[Je].camera;if(it){let mt=p[it];mt||(mt=new FA,p[it]=mt);let Ze=u.getCameraImage(it);mt.sourceTexture=Ze}}}}for(let ye=0;ye<x.length;ye++){let Fe=y[ye],Ee=x[ye];Fe!==null&&Ee!==void 0&&Ee.update(Fe,ee,c||r)}pt&&pt(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}let st=new sd;st.setAnimationLoop($e),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}},$0=new xt,ld=new Ne;ld.set(-1,0,0,0,1,0,0,0,1);function eg(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Al(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,G,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?A(f,p):p.isMeshLambertMaterial?(A(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(A(f,p),u(f,p)):p.isMeshPhongMaterial?(A(f,p),l(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(A(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,E)):p.isMeshMatcapMaterial?(A(f,p),m(f,p)):p.isMeshDepthMaterial?A(f,p):p.isMeshDistanceMaterial?(A(f,p),C(f,p)):p.isMeshNormalMaterial?A(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?o(f,p,S,G):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function A(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===ni&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===ni&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let S=e.get(p),G=S.envMap,E=S.envMapRotation;G&&(f.envMap.value=G,f.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(E)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(ld),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,S,G){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=G*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function C(f,p){let S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tg(n,e,t,i){let s={},A={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,x){let y=x.program;i.uniformBlockBinding(E,y)}function c(E,x){let y=s[E.id];y===void 0&&(f(E),y=l(E),s[E.id]=y,E.addEventListener("dispose",S));let w=x.program;i.updateUBOMapping(E,w);let g=e.render.frame;A[E.id]!==g&&(h(E),A[E.id]=g)}function l(E){let x=u();E.__bindingPointIndex=x;let y=n.createBuffer(),w=E.__size,g=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let x=s[E.id],y=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let g=0,I=y.length;g<I;g++){let _=y[g];if(Array.isArray(_))for(let R=0,O=_.length;R<O;R++)d(_[R],g,R,w);else d(_,g,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,y,w){if(C(E,x,y,w)===!0){let g=E.__offset,I=E.value;if(Array.isArray(I)){let _=0;for(let R=0;R<I.length;R++){let O=I[R],D=p(O);m(O,E.__data,_),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(_+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(I,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,E.__data)}}function m(E,x,y){typeof E=="number"||typeof E=="boolean"?x[0]=E:E.isMatrix3?(x[0]=E.elements[0],x[1]=E.elements[1],x[2]=E.elements[2],x[3]=0,x[4]=E.elements[3],x[5]=E.elements[4],x[6]=E.elements[5],x[7]=0,x[8]=E.elements[6],x[9]=E.elements[7],x[10]=E.elements[8],x[11]=0):ArrayBuffer.isView(E)?x.set(new E.constructor(E.buffer,E.byteOffset,x.length)):E.toArray(x,y)}function C(E,x,y,w){let g=E.value,I=x+"_"+y;if(w[I]===void 0)return typeof g=="number"||typeof g=="boolean"?w[I]=g:ArrayBuffer.isView(g)?w[I]=g.slice():w[I]=g.clone(),!0;{let _=w[I];if(typeof g=="number"||typeof g=="boolean"){if(_!==g)return w[I]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(_.equals(g)===!1)return _.copy(g),!0}}return!1}function f(E){let x=E.uniforms,y=0,w=16;for(let I=0,_=x.length;I<_;I++){let R=Array.isArray(x[I])?x[I]:[x[I]];for(let O=0,D=R.length;O<D;O++){let T=R[O],N=Array.isArray(T.value)?T.value:[T.value];for(let Q=0,Y=N.length;Q<Y;Q++){let ne=N[Q],z=p(ne),$=y%w,te=$%z.boundary,Te=$+te;y+=te,Te!==0&&w-Te<z.storage&&(y+=w-Te),T.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,y+=z.storage}}}let g=y%w;return g>0&&(y+=w-g),E.__size=y,E.__cache={},this}function p(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(x.boundary=16,x.storage=E.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",E),x}function S(E){let x=E.target;x.removeEventListener("dispose",S);let y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete A[x.id]}function G(){for(let E in s)n.deleteBuffer(s[E]);r=[],s={},A={}}return{bind:o,update:c,dispose:G}}var ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sn=null;function ng(){return sn===null&&(sn=new ga(ig,16,16,Nn,Kt),sn.name="DFG_LUT",sn.minFilter=Qt,sn.magFilter=Qt,sn.wrapS=Zi,sn.wrapT=Zi,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}var wo=class{constructor(e={}){let{canvas:t=wu(),context:i=null,depth:s=!0,stencil:A=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ei}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;let C=d,f=new Set([Qa,Ha,Wa]),p=new Set([Ei,Vi,$s,eA,Fa,ka]),S=new Uint32Array(4),G=new Int32Array(4),E=new b,x=null,y=null,w=[],g=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,R=!1,O=null,D=null,T=null,N=null;this._outputColorSpace=Zt;let Q=0,Y=0,ne=null,z=-1,$=null,te=new _t,Te=new _t,Ke=null,pt=new de(0),$e=0,st=t.width,q=t.height,ee=1,ye=null,Fe=null,Ee=new _t(0,0,st,q),Ve=new _t(0,0,st,q),Ht=!1,Je=new Ys,it=!1,mt=!1,Ze=new xt,Gt=new b,Jt=new _t,Bi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Nt(){return ne===null?ee:1}let P=i;function ai(M,K){return t.getContext(M,K)}let ot,v,B,L,W,V,Ae,re,J,Z,ae,be,fe,oe,Oe,Pe,We,U,ce,X,le,Ce,ie;try{let M={alpha:!0,depth:s,stencil:A,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Li,!1),P===null){let K="webgl2";if(P=ai(K,M),P===null)throw ai(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(M){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),De("WebGLRenderer: "+M.message),M}function Re(){ot=new lB(P),ot.init(),le=new X0(P,ot),v=new eB(P,ot,e,le),B=new q0(P,ot),v.reversedDepthBuffer&&h&&B.buffers.depth.setReversed(!0),D=P.createFramebuffer(),T=P.createFramebuffer(),N=P.createFramebuffer(),L=new dB(P),W=new R0,V=new J0(P,ot,B,W,v,le,L),Ae=new cB(_),re=new pp(P),Ce=new jC(P,re),J=new hB(P,re,L,Ce),Z=new pB(P,J,re,Ce,L),U=new fB(P,v,V),Oe=new tB(W),ae=new K0(_,Ae,ot,v,Ce,Oe),be=new eg(_,W),fe=new P0,oe=new W0(ot),We=new ZC(_,Ae,B,Z,m,o),Pe=new Y0(_,Z,v),ie=new tg(P,L,v,B),ce=new $C(P,ot,L),X=new uB(P,ot,L),L.programs=ae.programs,_.capabilities=v,_.extensions=ot,_.properties=W,_.renderLists=fe,_.shadowMap=Pe,_.state=B,_.info=L}C!==Ei&&(I=new CB(C,t.width,t.height,a,s,A));let Ge=new _l(_,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(st,q,!1))},this.getSize=function(M){return M.set(st,q)},this.setSize=function(M,K,H=!0){if(Ge.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}st=M,q=K,t.width=Math.floor(M*ee),t.height=Math.floor(K*ee),H===!0&&(t.style.width=M+"px",t.style.height=K+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,K)},this.getDrawingBufferSize=function(M){return M.set(st*ee,q*ee).floor()},this.setDrawingBufferSize=function(M,K,H){st=M,q=K,ee=H,t.width=Math.floor(M*H),t.height=Math.floor(K*H),this.setViewport(0,0,M,K)},this.setEffects=function(M){if(C===Ei){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let K=0;K<M.length;K++)if(M[K].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,K,H,F){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,K,H,F),B.viewport(te.copy(Ee).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ve)},this.setScissor=function(M,K,H,F){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,K,H,F),B.scissor(Te.copy(Ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(M){B.setScissorTest(Ht=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(M=!0,K=!0,H=!0){let F=0;if(M){let k=!1;if(ne!==null){let me=ne.texture.format;k=f.has(me)}if(k){let me=ne.texture.type,Me=p.has(me),pe=We.getClearColor(),Ie=We.getClearAlpha(),we=pe.r,He=pe.g,Xe=pe.b;Me?(S[0]=we,S[1]=He,S[2]=Xe,S[3]=Ie,P.clearBufferuiv(P.COLOR,0,S)):(G[0]=we,G[1]=He,G[2]=Xe,G[3]=Ie,P.clearBufferiv(P.COLOR,0,G))}else F|=P.COLOR_BUFFER_BIT}K&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Li,!1),We.dispose(),fe.dispose(),oe.dispose(),W.dispose(),Ae.dispose(),Z.dispose(),Ce.dispose(),ie.dispose(),ae.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",ph),Ge.removeEventListener("sessionend",mh),Vn.stop()};function Ct(M){M.preventDefault(),wA("WebGLRenderer: Context Lost."),R=!0}function At(){wA("WebGLRenderer: Context Restored."),R=!1;let M=L.autoReset,K=Pe.enabled,H=Pe.autoUpdate,F=Pe.needsUpdate,k=Pe.type;Re(),L.autoReset=M,Pe.enabled=K,Pe.autoUpdate=H,Pe.needsUpdate=F,Pe.type=k}function Li(M){De("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qi(M){let K=M.target;K.removeEventListener("dispose",qi),lf(K)}function lf(M){hf(M),W.remove(M)}function hf(M){let K=W.get(M).programs;K!==void 0&&(K.forEach(function(H){ae.releaseProgram(H)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,K,H,F,k,me){K===null&&(K=Bi);let Me=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=ff(M,K,H,F,k);B.setMaterial(F,Me);let Ie=H.index,we=1;if(F.wireframe===!0){if(Ie=J.getWireframeAttribute(H),Ie===void 0)return;we=2}let He=H.drawRange,Xe=H.attributes.position,ve=He.start*we,rt=(He.start+He.count)*we;me!==null&&(ve=Math.max(ve,me.start*we),rt=Math.min(rt,(me.start+me.count)*we)),Ie!==null?(ve=Math.max(ve,0),rt=Math.min(rt,Ie.count)):Xe!=null&&(ve=Math.max(ve,0),rt=Math.min(rt,Xe.count));let Ft=rt-ve;if(Ft<0||Ft===1/0)return;Ce.setup(k,F,pe,H,Ie);let Mt,ft=ce;if(Ie!==null&&(Mt=re.get(Ie),ft=X,ft.setIndex(Mt)),k.isMesh)F.wireframe===!0?(B.setLineWidth(F.wireframeLinewidth*Nt()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(k.isLine){let oi=F.linewidth;oi===void 0&&(oi=1),B.setLineWidth(oi*Nt()),k.isLineSegments?ft.setMode(P.LINES):k.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else k.isPoints?ft.setMode(P.POINTS):k.isSprite&&ft.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let oi=k._multiDrawStarts,Be=k._multiDrawCounts,fi=k._multiDrawCount,tt=Ie?re.get(Ie).bytesPerElement:1,bi=W.get(F).currentProgram.getUniforms();for(let Ji=0;Ji<fi;Ji++)bi.setValue(P,"_gl_DrawID",Ji),ft.render(oi[Ji]/tt,Be[Ji])}else if(k.isInstancedMesh)ft.renderInstances(ve,Ft,k.count);else if(H.isInstancedBufferGeometry){let oi=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Be=Math.min(H.instanceCount,oi);ft.renderInstances(ve,Ft,Be)}else ft.render(ve,Ft)};function fh(M,K,H,F){O!==null&&M.isNodeMaterial&&O.setObject(F,M),it===!0&&Oe.setState(M,H,!1),M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=ni,M.needsUpdate=!0,Or(M,K,F),M.side=Un,M.needsUpdate=!0,Or(M,K,F),M.side=si):Or(M,K,F)}this.compile=function(M,K,H=null){H===null&&(H=M),O!==null&&O.renderStart(M,K,H),y=oe.get(H),y.init(K),g.push(y),H.traverseVisible(function(k){k.isLight&&k.layers.test(K.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(K.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),y.setupLights(),O!==null&&O.updateLights(y.state.lightsArray),mt=this.localClippingEnabled,it=Oe.init(this.clippingPlanes,mt),it===!0&&Oe.setGlobalState(this.clippingPlanes,K),O!==null&&Pe.render(y.state.shadowsArray,H,K);let F=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let me=k.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){let pe=me[Me];fh(pe,H,K,k),F.add(pe)}else fh(me,H,K,k),F.add(me)}),y=g.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(M,K,H=null){let F=this.compile(M,K,H);return new Promise(k=>{function me(){if(F.forEach(function(Me){let Ie=W.get(Me).currentProgram;(Ie===void 0||Ie.isReady())&&F.delete(Me)}),F.size===0){k(M);return}setTimeout(me,10)}ot.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let cc=null;function uf(M){cc&&cc(M)}function ph(){Vn.stop()}function mh(){Vn.start()}let Vn=new sd;Vn.setAnimationLoop(uf),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(M){cc=M,Ge.setAnimationLoop(M),M===null?Vn.stop():Vn.start()},Ge.addEventListener("sessionstart",ph),Ge.addEventListener("sessionend",mh),this.render=function(M,K){if(K!==void 0&&K.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(M,K);let H=Ge.enabled===!0&&Ge.isPresenting===!0,F=I!==null&&(ne===null||H)&&I.begin(_,ne);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(K),K=Ge.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,K,ne),y=oe.get(M,g.length),y.init(K),y.state.textureUnits=V.getTextureUnits(),g.push(y),Ze.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Je.setFromProjectionMatrix(Ze,Hi,K.reversedDepth),mt=this.localClippingEnabled,it=Oe.init(this.clippingPlanes,mt),x=fe.get(M,w.length),x.init(),w.push(x),Ge.enabled===!0&&Ge.isPresenting===!0){let Me=_.xr.getDepthSensingMesh();Me!==null&&lc(Me,K,-1/0,_.sortObjects)}lc(M,K,0,_.sortObjects),x.finish(),O!==null&&O.updateLights(y.state.lightsArray),_.sortObjects===!0&&x.sort(ye,Fe),wt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,wt&&We.addToRenderList(x,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Oe.beginShadows();let k=y.state.shadowsArray;if(Pe.render(k,M,K),it===!0&&Oe.endShadows(),(F&&I.hasRenderPass())===!1){let Me=x.opaque,pe=x.transmissive;if(y.setupLights(),K.isArrayCamera){let Ie=K.cameras;if(pe.length>0)for(let we=0,He=Ie.length;we<He;we++){let Xe=Ie[we];Bh(Me,pe,M,Xe)}wt&&We.render(M);for(let we=0,He=Ie.length;we<He;we++){let Xe=Ie[we];Ch(x,M,Xe,Xe.viewport)}}else pe.length>0&&Bh(Me,pe,M,K),wt&&We.render(M),Ch(x,M,K)}ne!==null&&Y===0&&(V.updateMultisampleRenderTarget(ne),V.updateRenderTargetMipmap(ne)),F&&I.end(_),M.isScene===!0&&M.onAfterRender(_,M,K),Ce.resetDefaultState(),z=-1,$=null,g.pop(),g.length>0?(y=g[g.length-1],V.setTextureUnits(y.state.textureUnits),it===!0&&Oe.setGlobalState(_.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?x=w[w.length-1]:x=null,O!==null&&O.renderEnd()};function lc(M,K,H,F){if(M.visible===!1)return;if(M.layers.test(K.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(K);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Je)){F&&Jt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ze);let Me=Z.update(M),pe=M.material;pe.visible&&x.push(M,Me,pe,H,Jt.z,null,K)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Je))){let Me=Z.update(M),pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Jt.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Jt.copy(Me.boundingSphere.center)),Jt.applyMatrix4(M.matrixWorld).applyMatrix4(Ze)),Array.isArray(pe)){let Ie=Me.groups;for(let we=0,He=Ie.length;we<He;we++){let Xe=Ie[we],ve=pe[Xe.materialIndex];ve&&ve.visible&&x.push(M,Me,ve,H,Jt.z,Xe,K)}}else pe.visible&&x.push(M,Me,pe,H,Jt.z,null,K)}}let me=M.children;for(let Me=0,pe=me.length;Me<pe;Me++)lc(me[Me],K,H,F)}function Ch(M,K,H,F){let{opaque:k,transmissive:me,transparent:Me}=M;y.setupLightsView(H),it===!0&&Oe.setGlobalState(_.clippingPlanes,H),F&&B.viewport(te.copy(F)),k.length>0&&br(k,K,H),me.length>0&&br(me,K,H),Me.length>0&&br(Me,K,H),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Bh(M,K,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[F.id]===void 0){let ve=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[F.id]=new yt(1,1,{generateMipmaps:!0,type:ve?Kt:Ei,minFilter:Ln,samples:Math.max(4,v.samples),stencilBuffer:A,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let me=y.state.transmissionRenderTarget[F.id],Me=F.viewport||te;me.setSize(Me.z*_.transmissionResolutionScale,Me.w*_.transmissionResolutionScale);let pe=_.getRenderTarget(),Ie=_.getActiveCubeFace(),we=_.getActiveMipmapLevel();_.setRenderTarget(me),_.getClearColor(pt),$e=_.getClearAlpha(),$e<1&&_.setClearColor(16777215,.5),_.clear(),wt&&We.render(H);let He=_.toneMapping;_.toneMapping=zi;let Xe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),y.setupLightsView(F),it===!0&&Oe.setGlobalState(_.clippingPlanes,F),br(M,H,F),V.updateMultisampleRenderTarget(me),V.updateRenderTargetMipmap(me),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let rt=0,Ft=K.length;rt<Ft;rt++){let Mt=K[rt],{object:ft,geometry:oi,material:Be,group:fi}=Mt;if(Be.side===si&&ft.layers.test(F.layers)){let tt=Be.side;Be.side=ni,Be.needsUpdate=!0,gh(ft,H,F,oi,Be,fi),Be.side=tt,Be.needsUpdate=!0,ve=!0}}ve===!0&&(V.updateMultisampleRenderTarget(me),V.updateRenderTargetMipmap(me))}_.setRenderTarget(pe,Ie,we),_.setClearColor(pt,$e),Xe!==void 0&&(F.viewport=Xe),_.toneMapping=He}function br(M,K,H){let F=K.isScene===!0?K.overrideMaterial:null;for(let k=0,me=M.length;k<me;k++){let Me=M[k],{object:pe,geometry:Ie,group:we}=Me,He=Me.material;He.allowOverride===!0&&F!==null&&(He=F),pe.layers.test(H.layers)&&gh(pe,K,H,Ie,He,we)}}function gh(M,K,H,F,k,me){O!==null&&k.isNodeMaterial&&O.setObject(M,k),M.onBeforeRender(_,K,H,F,k,me),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(_,K,H,F,M,me),k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=ni,k.needsUpdate=!0,_.renderBufferDirect(H,K,F,k,M,me),k.side=Un,k.needsUpdate=!0,_.renderBufferDirect(H,K,F,k,M,me),k.side=si):_.renderBufferDirect(H,K,F,k,M,me),M.onAfterRender(_,K,H,F,k,me)}function Or(M,K,H){K.isScene!==!0&&(K=Bi);let F=W.get(M),k=y.state.lights,me=y.state.shadowsArray,Me=k.state.version,pe=ae.getParameters(M,k.state,me,K,H,y.state.lightProbeGridArray),Ie=ae.getProgramCacheKey(pe),we=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?K.environment:null,F.fog=K.fog;let He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=Ae.get(M.envMap||F.environment,He),F.envMapRotation=F.environment!==null&&M.envMap===null?K.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",qi),we=new Map,F.programs=we);let Xe=we.get(Ie);if(Xe!==void 0){if(F.currentProgram===Xe&&F.lightsStateVersion===Me)return Mh(M,pe),Xe}else pe.uniforms=ae.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,H,pe),M.onBeforeCompile(pe,_),Xe=ae.acquireProgram(pe,Ie),we.set(Ie,Xe),F.uniforms=pe.uniforms;let ve=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ve.clippingPlanes=Oe.uniform),Mh(M,pe),F.needsLights=mf(M),F.lightsStateVersion=Me,F.needsLights&&(ve.ambientLightColor.value=k.state.ambient,ve.lightProbe.value=k.state.probe,ve.sunLights.value=k.state.sun,ve.sunLightShadows.value=k.state.sunShadow,ve.directionalLights.value=k.state.directional,ve.directionalLightShadows.value=k.state.directionalShadow,ve.spotLights.value=k.state.spot,ve.spotLightShadows.value=k.state.spotShadow,ve.rectAreaLights.value=k.state.rectArea,ve.ltc_1.value=k.state.rectAreaLTC1,ve.ltc_2.value=k.state.rectAreaLTC2,ve.pointLights.value=k.state.point,ve.pointLightShadows.value=k.state.pointShadow,ve.hemisphereLights.value=k.state.hemi,ve.sunShadowMatrix.value=k.state.sunShadowMatrix,ve.sunShadowCascade.value=k.state.sunShadowCascade,ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ve.spotLightMatrix.value=k.state.spotLightMatrix,ve.spotLightMap.value=k.state.spotLightMap,ve.pointShadowMatrix.value=k.state.pointShadowMatrix),F.lightProbeGrid=y.state.lightProbeGridArray.length>0,F.currentProgram=Xe,F.uniformsList=null,Xe}function Eh(M){if(M.uniformsList===null){let K=M.currentProgram.getUniforms();M.uniformsList=nA.seqWithValue(K.seq,M.uniforms)}return M.uniformsList}function Mh(M,K){let H=W.get(M);H.outputColorSpace=K.outputColorSpace,H.batching=K.batching,H.batchingColor=K.batchingColor,H.instancing=K.instancing,H.instancingColor=K.instancingColor,H.instancingMorph=K.instancingMorph,H.skinning=K.skinning,H.morphTargets=K.morphTargets,H.morphNormals=K.morphNormals,H.morphColors=K.morphColors,H.morphTargetsCount=K.morphTargetsCount,H.numClippingPlanes=K.numClippingPlanes,H.numIntersection=K.numClipIntersection,H.vertexAlphas=K.vertexAlphas,H.vertexTangents=K.vertexTangents,H.toneMapping=K.toneMapping}function df(M,K){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(K.matrixWorld);for(let H=0,F=M.length;H<F;H++){let k=M[H];if(k.texture!==null&&k.boundingBox.containsPoint(E))return k}return null}function ff(M,K,H,F,k){K.isScene!==!0&&(K=Bi),V.resetTextureUnits();let me=K.fog,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?K.environment:null,pe=ne===null?_.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,Ie=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,we=Ae.get(F.envMap||Me,Ie),He=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ve=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Ft=!!H.morphAttributes.color,Mt=zi;F.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=_.toneMapping);let ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oi=ft!==void 0?ft.length:0,Be=W.get(F),fi=y.state.lights;if(it===!0&&(mt===!0||M!==$)){let Bt=M===$&&F.id===z;Oe.setState(F,M,Bt)}let tt=!1;F.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==fi.state.version||Be.outputColorSpace!==pe||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==we||F.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Oe.numPlanes||Be.numIntersection!==Oe.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Xe||Be.morphTargets!==ve||Be.morphNormals!==rt||Be.morphColors!==Ft||Be.toneMapping!==Mt||Be.morphTargetsCount!==oi||!!Be.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Be.__version=F.version);let bi=Be.currentProgram;tt===!0&&(bi=Or(F,K,k),O&&F.isNodeMaterial&&O.onUpdateProgram(F,bi,Be));let Ji=!1,En=!1,Es=!1,ut=bi.getUniforms(),Ut=Be.uniforms;if(B.useProgram(bi.program)&&(Ji=!0,En=!0,Es=!0),F.id!==z&&(z=F.id,En=!0),Be.needsLights){let Bt=df(y.state.lightProbeGridArray,k);Be.lightProbeGrid!==Bt&&(Be.lightProbeGrid=Bt,En=!0)}if(Ji||$!==M){B.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",M.projectionMatrix),ut.setValue(P,"viewMatrix",M.matrixWorldInverse);let Sn=ut.map.cameraPosition;Sn!==void 0&&Sn.setValue(P,Gt.setFromMatrixPosition(M.matrixWorld)),v.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ut.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,En=!0,Es=!0)}if(Be.needsLights&&(fi.state.sunShadowMap.length>0&&ut.setValue(P,"sunShadowMap",fi.state.sunShadowMap,V),fi.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",fi.state.directionalShadowMap,V),fi.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",fi.state.spotShadowMap,V),fi.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",fi.state.pointShadowMap,V)),k.isSkinnedMesh){ut.setOptional(P,k,"bindMatrix"),ut.setOptional(P,k,"bindMatrixInverse");let Bt=k.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ut.setValue(P,"boneTexture",Bt.boneTexture,V))}k.isBatchedMesh&&(ut.setOptional(P,k,"batchingTexture"),ut.setValue(P,"batchingTexture",k._matricesTexture,V),ut.setOptional(P,k,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",k._indirectTexture,V),ut.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",k._colorsTexture,V));let Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&U.update(k,H,bi),(En||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,ut.setValue(P,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&K.environment!==null&&(Ut.envMapIntensity.value=K.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=ng()),En){if(ut.setValue(P,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&pf(Ut,Es),me&&F.fog===!0&&be.refreshFogUniforms(Ut,me),be.refreshMaterialUniforms(Ut,F,ee,q,y.state.transmissionRenderTarget[M.id]),Be.needsLights&&Be.lightProbeGrid){let Bt=Be.lightProbeGrid;Ut.probesSH.value=Bt.texture,Ut.probesMin.value.copy(Bt.boundingBox.min),Ut.probesMax.value.copy(Bt.boundingBox.max),Ut.probesResolution.value.copy(Bt.resolution)}nA.upload(P,Eh(Be),Ut,V)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(nA.upload(P,Eh(Be),Ut,V),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ut.setValue(P,"center",k.center),ut.setValue(P,"modelViewMatrix",k.modelViewMatrix),ut.setValue(P,"normalMatrix",k.normalMatrix),ut.setValue(P,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let Bt=F.uniformsGroups;for(let Sn=0,Ms=Bt.length;Sn<Ms;Sn++){let xh=Bt[Sn];ie.update(xh,bi),ie.bind(xh,bi)}}return bi}function pf(M,K){M.ambientLightColor.needsUpdate=K,M.lightProbe.needsUpdate=K,M.sunLights.needsUpdate=K,M.sunLightShadows.needsUpdate=K,M.directionalLights.needsUpdate=K,M.directionalLightShadows.needsUpdate=K,M.pointLights.needsUpdate=K,M.pointLightShadows.needsUpdate=K,M.spotLights.needsUpdate=K,M.spotLightShadows.needsUpdate=K,M.rectAreaLights.needsUpdate=K,M.hemisphereLights.needsUpdate=K}function mf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(M,K,H){let F=W.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=K,W.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,K){let H=W.get(M);H.__webglFramebuffer=K,H.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(M,K=0,H=0){ne=M,Q=K,Y=H;let F=null,k=!1,me=!1;if(M){let pe=W.get(M);if(pe.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(M.viewport),Te.copy(M.scissor),Ke=M.scissorTest,B.viewport(te),B.scissor(Te),B.setScissorTest(Ke),z=-1;return}else if(pe.__webglFramebuffer===void 0)V.setupRenderTarget(M);else if(pe.__hasExternalTextures)V.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let He=M.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(M)}}let Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);let we=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[K])?F=we[K][H]:F=we[K],k=!0):M.samples>0&&V.useMultisampledRTT(M)===!1?F=W.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[H]:F=we,te.copy(M.viewport),Te.copy(M.scissor),Ke=M.scissorTest}else te.copy(Ee).multiplyScalar(ee).floor(),Te.copy(Ve).multiplyScalar(ee).floor(),Ke=Ht;if(H!==0&&(F=D),B.bindFramebuffer(P.FRAMEBUFFER,F)&&B.drawBuffers(M,F),B.viewport(te),B.scissor(Te),B.setScissorTest(Ke),k){let pe=W.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe.__webglTexture,H)}else if(me){let pe=K;for(let Ie=0;Ie<M.textures.length;Ie++){let we=W.get(M.textures[Ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ie,we.__webglTexture,H,pe)}}else if(M!==null&&H!==0){let pe=W.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,H)}z=-1};function Sh(M){let K=W.get(M);return(K.__readFormat!==M.format||K.__readType!==M.type)&&(K.__readFormat=M.format,K.__readType=M.type,K.__formatReadable=v.textureFormatReadable(M.format),K.__typeReadable=v.textureTypeReadable(M.type)),K}this.readRenderTargetPixels=function(M,K,H,F,k,me,Me,pe=0){if(!(M&&M.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){B.bindFramebuffer(P.FRAMEBUFFER,Ie);try{let we=M.textures[pe],He=we.format,Xe=we.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let ve=Sh(we);if(ve.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=M.width-F&&H>=0&&H<=M.height-k&&P.readPixels(K,H,F,k,le.convert(He),le.convert(Xe),me)}finally{let we=ne!==null?W.get(ne).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,K,H,F,k,me,Me,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie)if(K>=0&&K<=M.width-F&&H>=0&&H<=M.height-k){B.bindFramebuffer(P.FRAMEBUFFER,Ie);let we=M.textures[pe],He=we.format,Xe=we.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let ve=Sh(we);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,rt),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),P.readPixels(K,H,F,k,le.convert(He),le.convert(Xe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ft=ne!==null?W.get(ne).__webglFramebuffer:null;B.bindFramebuffer(P.FRAMEBUFFER,Ft);let Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bu(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,rt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(rt),P.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,K=null,H=0){let F=Math.pow(2,-H),k=Math.floor(M.image.width*F),me=Math.floor(M.image.height*F),Me=K!==null?K.x:0,pe=K!==null?K.y:0;V.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,Me,pe,k,me),B.unbindTexture()},this.copyTextureToTexture=function(M,K,H=null,F=null,k=0,me=0){let Me,pe,Ie,we,He,Xe,ve,rt,Ft,Mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(H!==null)Me=H.max.x-H.min.x,pe=H.max.y-H.min.y,Ie=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,He=H.min.y,Xe=H.isBox3?H.min.z:0;else{let Ut=Math.pow(2,-k);Me=Math.floor(Mt.width*Ut),pe=Math.floor(Mt.height*Ut),M.isDataArrayTexture?Ie=Mt.depth:M.isData3DTexture?Ie=Math.floor(Mt.depth*Ut):Ie=1,we=0,He=0,Xe=0}F!==null?(ve=F.x,rt=F.y,Ft=F.z):(ve=0,rt=0,Ft=0);let ft=le.convert(K.format),oi=le.convert(K.type),Be;K.isData3DTexture?(V.setTexture3D(K,0),Be=P.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(V.setTexture2DArray(K,0),Be=P.TEXTURE_2D_ARRAY):(V.setTexture2D(K,0),Be=P.TEXTURE_2D),B.activeTexture(P.TEXTURE0),B.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(P.UNPACK_ALIGNMENT,K.unpackAlignment);let fi=B.getParameter(P.UNPACK_ROW_LENGTH),tt=B.getParameter(P.UNPACK_IMAGE_HEIGHT),bi=B.getParameter(P.UNPACK_SKIP_PIXELS),Ji=B.getParameter(P.UNPACK_SKIP_ROWS),En=B.getParameter(P.UNPACK_SKIP_IMAGES);B.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),B.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),B.pixelStorei(P.UNPACK_SKIP_PIXELS,we),B.pixelStorei(P.UNPACK_SKIP_ROWS,He),B.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);let Es=M.isDataArrayTexture||M.isData3DTexture,ut=K.isDataArrayTexture||K.isData3DTexture;if(M.isDepthTexture){let Ut=W.get(M),Mn=W.get(K),Bt=W.get(Ut.__renderTarget),Sn=W.get(Mn.__renderTarget);B.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),B.bindFramebuffer(P.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let Ms=0;Ms<Ie;Ms++)Es&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(M).__webglTexture,k,Xe+Ms),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(K).__webglTexture,me,Ft+Ms)),P.blitFramebuffer(we,He,Me,pe,ve,rt,Me,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);B.bindFramebuffer(P.READ_FRAMEBUFFER,null),B.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||W.has(M)){let Ut=W.get(M),Mn=W.get(K);B.bindFramebuffer(P.READ_FRAMEBUFFER,T),B.bindFramebuffer(P.DRAW_FRAMEBUFFER,N);for(let Bt=0;Bt<Ie;Bt++)Es?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,k,Xe+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,k),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mn.__webglTexture,me,Ft+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mn.__webglTexture,me),k!==0?P.blitFramebuffer(we,He,Me,pe,ve,rt,Me,pe,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Be,me,ve,rt,Ft+Bt,we,He,Me,pe):P.copyTexSubImage2D(Be,me,ve,rt,we,He,Me,pe);B.bindFramebuffer(P.READ_FRAMEBUFFER,null),B.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Be,me,ve,rt,Ft,Me,pe,Ie,ft,oi,Mt.data):K.isCompressedArrayTexture?P.compressedTexSubImage3D(Be,me,ve,rt,Ft,Me,pe,Ie,ft,Mt.data):P.texSubImage3D(Be,me,ve,rt,Ft,Me,pe,Ie,ft,oi,Mt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,ve,rt,Me,pe,ft,oi,Mt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,ve,rt,Mt.width,Mt.height,ft,Mt.data):P.texSubImage2D(P.TEXTURE_2D,me,ve,rt,Me,pe,ft,oi,Mt);B.pixelStorei(P.UNPACK_ROW_LENGTH,fi),B.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),B.pixelStorei(P.UNPACK_SKIP_PIXELS,bi),B.pixelStorei(P.UNPACK_SKIP_ROWS,Ji),B.pixelStorei(P.UNPACK_SKIP_IMAGES,En),me===0&&K.generateMipmaps&&P.generateMipmap(Be),B.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&V.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?V.setTextureCube(M,0):M.isData3DTexture?V.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?V.setTexture2DArray(M,0):V.setTexture2D(M,0),B.unbindTexture()},this.resetState=function(){Q=0,Y=0,ne=null,B.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var AA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sg=new Rn(-1,1,1,-1,0,1),wl=class extends It{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},Ag=new wl,rn=class{constructor(e){this._mesh=new _e(Ag,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var rA=class extends Ci{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ur=class extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),A=e.state;A.buffers.color.setMask(!1),A.buffers.depth.setMask(!1),A.buffers.color.setLocked(!0),A.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),A.buffers.stencil.setTest(!0),A.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),A.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),A.buffers.stencil.setClear(a),A.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),A.buffers.color.setLocked(!1),A.buffers.depth.setLocked(!1),A.buffers.color.setMask(!0),A.buffers.depth.setMask(!0),A.buffers.stencil.setLocked(!1),A.buffers.stencil.setFunc(s.EQUAL,1,4294967295),A.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),A.buffers.stencil.setLocked(!0)}},Oo=class extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ko=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ge);this._width=i.width,this._height=i.height,t=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rA(AA),this.copyPass.material.blending=Ri,this.timer=new VA}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,A=this.passes.length;s<A;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ur!==void 0&&(r instanceof ur?i=!0:r instanceof Oo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let A=0;A<this.passes.length;A++)this.passes[A].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var dr=class extends Ci{constructor(e,t,i=null,s=null,A=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=A,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let A,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(A=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(A),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var hd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var aA=class n extends Ci{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let A=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new yt(A,r,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let u=new yt(A,r,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+l,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let h=new yt(A,r,{type:Kt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+l,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),A=Math.round(A/2),r=Math.round(r/2)}let a=hd;this.highPassUniforms=mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];A=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new ge(1/A,1/r),A=Math.round(A/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone(AA.uniforms),this.blendMaterial=new et({uniforms:this.copyUniforms,vertexShader:AA.vertexShader,fragmentShader:AA.fragmentShader,premultipliedAlpha:!0,blending:Gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new gt,this._fsQuad=new rn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let A=0;A<this.nMips;A++)this.renderTargetsHorizontal[A].setSize(i,s),this.renderTargetsVertical[A].setSize(i,s),this.separableBlurMaterials[A].uniforms.invSize.value=new ge(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,A){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),A&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,A&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let s=[],A=[];for(let r=1;r<e;r+=2){let a=t[r],o=r+1<e?t[r+1]:0,c=a+o;s.push((r*a+(r+1)*o)/c),A.push(c)}return new et({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:A}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};aA.BlurDirectionX=new ge(1,0);aA.BlurDirectionY=new ge(0,1);var fr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ro=class extends Ci{constructor(){super(),this.isOutputPass=!0,this.uniforms=mi.clone(fr.uniforms),this.material=new Js({name:fr.name,uniforms:this.uniforms,vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader}),this._fsQuad=new rn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qA?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===JA?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===XA?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jA?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$A?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ZA&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ud={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Uo=class extends rA{constructor(){super(ud)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}};var pr={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},mr={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Po={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ge(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Lo=class extends Ci{constructor(){super(),this._edgesRT=new yt(1,1,{depthBuffer:!1,type:Kt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new yt(1,1,{depthBuffer:!1,type:Kt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new jt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Qt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new jt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Pt,this._searchTexture.minFilter=Pt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=mi.clone(pr.uniforms),this._materialEdges=new et({defines:Object.assign({},pr.defines),uniforms:this._uniformsEdges,vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader}),this._uniformsWeights=mi.clone(mr.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new et({defines:Object.assign({},mr.defines),uniforms:this._uniformsWeights,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._uniformsBlend=mi.clone(Po.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new et({uniforms:this._uniformsBlend,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new rn(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var dd={value:new ge(1920,1080)},fd=[],rg=`
uniform float uWidth;
uniform vec2 uResolution;
attribute vec3 outlineNormal;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec4 clip = projectionMatrix * mvPosition;
  vec3 n = normalMatrix * outlineNormal;
  float nl = length(n);
  n = nl > 1e-6 ? n / nl : vec3(0.0);
  vec2 dir = (projectionMatrix * vec4(n, 0.0)).xy;
  float dl = length(dir);
  dir = dl > 1e-6 ? dir / dl : vec2(0.0);
  // Constant width in pixels, thinning a little for far-away objects.
  float px = uWidth * mix(1.0, 0.55, smoothstep(4.0, 22.0, -mvPosition.z));
  clip.xy += dir * (px * 2.0 / uResolution) * clip.w;
  gl_Position = clip;
  #include <fog_vertex>
}`,ag=`
uniform vec3 uColor;
#include <fog_pars_fragment>
void main() {
  gl_FragColor = vec4(uColor, 1.0);
  #include <fog_fragment>
}`;function Do(n,e=0){let t=new et({uniforms:mi.merge([he.fog,{uWidth:{value:n},uColor:{value:new de(e)},uResolution:{value:null}}]),vertexShader:rg,fragmentShader:ag,side:ni,fog:!0});return t.uniforms.uResolution=dd,t.userData.cssWidth=n,fd.push(t),t}function pd(n,e,t){dd.value.set(Math.max(1,n),Math.max(1,e));for(let i of fd)i.uniforms.uWidth.value=i.userData.cssWidth*t}function og(n){if(n.getAttribute("outlineNormal"))return;let e=n.getAttribute("position"),t=n.getAttribute("normal"),i=new Map,s=new Array(e.count);for(let r=0;r<e.count;r++){let a=`${Math.round(e.getX(r)*1e4)},${Math.round(e.getY(r)*1e4)},${Math.round(e.getZ(r)*1e4)}`;s[r]=a;let o=i.get(a);o||i.set(a,o=[0,0,0]),o[0]+=t.getX(r),o[1]+=t.getY(r),o[2]+=t.getZ(r)}let A=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let a=i.get(s[r]),o=Math.hypot(a[0],a[1],a[2]),c=a[0],l=a[1],u=a[2];o<1e-6&&(c=t.getX(r),l=t.getY(r),u=t.getZ(r),o=Math.hypot(c,l,u)||1),A[r*3]=c/o,A[r*3+1]=l/o,A[r*3+2]=u/o}n.setAttribute("outlineNormal",new lt(A,3))}function Pi(n,e){og(n.geometry);let t=new _e(n.geometry,e);return t.name="outline",t.raycast=()=>{},n.add(t),t}var se="player";var os=n=>n===se?1:-1,ui=n=>n===se?"ai":se,dt=[{id:"pip",bot:"PIP",name:"The Beginner",style:"Slow and friendly",tagline:"Just learning. Slow, loopy shots back down the middle.",color:"#39ff88",hex:3800968,look:{build:"small",gear:["goggles","sprout"]},skill:0,reaction:.34,maxSpeed:1.7,accel:6,readNoise:1.4,aimError:.25,speed:[5.2,7.6],topspin:[40,140],sidespin:0,chopChance:.12,chopSpin:[120,200],smashChance:0,dropChance:0,errorRate:.11,quality:[.45,.2],placement:"middle",cornerBias:0,depth:[.6,.9],preferHeight:.95,reach:.8,serve:{speed:[4.4,5.4],spin:80,errorRate:.06}},{id:"echo",bot:"ECHO",name:"The Wall",style:"Defender",tagline:"Gets everything back, deep and safe. Rarely attacks: be patient.",color:"#29e7ff",hex:2746367,look:{build:"broad",gear:["shield","pads"]},skill:.3,spinRead:.85,reaction:.2,maxSpeed:3,accel:13,readNoise:.75,aimError:.1,speed:[6,9],topspin:[80,220],sidespin:40,chopChance:.5,chopSpin:[220,360],smashChance:.04,dropChance:.02,errorRate:.025,quality:[.64,.08],cornerBias:.15,depth:[.72,1.05],stance:2.55,preferHeight:.95,reach:1.02,serve:{speed:[4.6,6],spin:220,errorRate:.02}},{id:"blaze",bot:"BLAZE",name:"The Smasher",style:"All-out attack",tagline:"Hits everything hard and fast, and smashes anything high. Misses plenty too.",color:"#ff7a1a",hex:16742938,look:{build:"lean",gear:["crest","band"]},skill:.5,reaction:.16,maxSpeed:3,accel:15,readNoise:.6,aimError:.16,speed:[11,16.5],topspin:[180,360],sidespin:80,chopChance:.04,chopSpin:[180,280],smashChance:.85,smashHeight:1.02,dropChance:0,errorRate:.075,quality:[.7,.16],cornerBias:.6,stance:2,preferHeight:1.12,reach:.92,serve:{speed:[6.2,8.4],spin:220,errorRate:.05}},{id:"vortex",bot:"VORTEX",name:"The Spin Doctor",style:"Spin specialist",tagline:"Mixes heavy topspin loops with heavy backspin chops. Read the stripe!",color:"#b45cff",hex:11820287,look:{build:"slim",gear:["halo"]},skill:.75,reaction:.135,maxSpeed:3.3,accel:17,readNoise:.42,aimError:.11,speed:[8.5,12.5],topspin:[420,680],sidespin:300,chopChance:.42,chopSpin:[380,560],smashChance:.35,dropChance:.12,errorRate:.04,quality:[.72,.13],cornerBias:.6,preferHeight:1.05,reach:.98,serve:{speed:[5,7.5],spin:560,errorRate:.025}},{id:"zero",bot:"ZERO",name:"The Final Boss",style:"Does it all",tagline:"Lightning reflexes, pace, spin and pinpoint angles. Still human... barely.",color:"#ff3355",hex:16724821,look:{build:"tall",gear:["horns","spikes"]},skill:1,reaction:.095,maxSpeed:3.9,accel:22,readNoise:.22,aimError:.075,speed:[11.5,17.5],topspin:[380,640],sidespin:260,chopChance:.15,chopSpin:[300,500],smashChance:.9,dropChance:.1,errorRate:.025,quality:[.8,.12],cornerBias:.85,preferHeight:1.12,reach:1.05,serve:{speed:[6,8.6],spin:500,errorRate:.015}}],Bn=dt,Tl=[{id:1,label:"Single game"},{id:2,label:"Best of 3"},{id:3,label:"Best of 5"}];var Cd="neonspin.settings.v1",Ai={low:{label:"Low",pixelRatio:.75,bloom:!1,aa:"fxaa",particles:.35,ballLight:!1,crowd:600,trail:24},medium:{label:"Medium",pixelRatio:1,bloom:!0,aa:"fxaa",particles:.65,ballLight:!0,crowd:1500,trail:36,bloomScale:.5,bloomStrength:.85},high:{label:"High",pixelRatio:1.5,bloom:!0,aa:"smaa",particles:1,ballLight:!0,crowd:3e3,trail:48,bloomScale:1},ultra:{label:"Ultra",pixelRatio:2,bloom:!0,aa:"smaa",particles:1.4,ballLight:!0,crowd:5e3,trail:64,bloomScale:1}},Cr=["low","medium","high","ultra"],md={master:.8,music:.5,sfx:.9,crowd:.7,muted:!1,quality:"high",msaa:!1,fov:72,timingGuide:!0,shake:!0,slowmo:!0,announcer:!0,showFps:!1,difficulty:0,matchLength:1,practice:{speed:"medium",spin:"random",place:"random",rate:"steady"},watch:{a:1,b:2,length:1}};function Bd(){let n=null;try{n=JSON.parse(localStorage.getItem(Cd)||"null")}catch{n=null}let e={...md,...n||{}};return e.firstRun=!n||!("quality"in n),Ai[e.quality]||(e.quality=md.quality),e}function cs(n){try{let{firstRun:e,...t}=n;localStorage.setItem(Cd,JSON.stringify(t))}catch{}}var ls=[{id:"red",name:"Classic Red",hex:14162748,req:null},{id:"ice",name:"Ice",hex:2795263,req:{beat:"pip"}},{id:"lime",name:"Lime",hex:6280734,req:{beat:"echo"}},{id:"blaze",name:"Blaze",hex:16737298,req:{beat:"blaze"}},{id:"violet",name:"Violet",hex:9715967,req:{beat:"vortex"}},{id:"gold",name:"Champion Gold",hex:15905814,req:{beat:"zero"}},{id:"pink",name:"Neon Pink",hex:16722854,req:{rally:20}},{id:"ghost",name:"Ghost",hex:14277608,req:{perfects:10}}],kn=[{id:"neon",name:"Neon Night",c1:16722902,c2:61695,c3:9055231,c4:16770560,bg:328205,fog:656416,req:null},{id:"ember",name:"Ember",c1:16726554,c2:16753188,c3:11735610,c4:16766010,bg:590340,fog:1443079,req:{beat:"blaze"}},{id:"deep",name:"Deep Sea",c1:2776063,c2:1368256,c3:3875542,c4:8378623,bg:66572,fog:200740,req:{rally:20}},{id:"toxic",name:"Toxic",c1:10300415,c2:5635886,c3:4853642,c4:13827882,bg:198661,fog:398090,req:{perfects:10}}];function gd(n,e){return n?n.beat?`Beat ${e.find(t=>t.id===n.beat).bot}`:n.rally?`${n.rally}-shot rally`:n.perfects?`${n.perfects} PERFECTs in a match`:"":"Starter"}function Ed(n,e){return n?n.beat?!!e.beaten[n.beat]:n.rally?e.records.rally>=n.rally:n.perfects?e.records.perfects>=n.perfects:!1:!0}var qe={cyan:61695,magenta:16722902,purple:9055231,yellow:16770560,orange:16742938,green:3800968};function Dt(n,e){return new de(n).multiplyScalar(e)}var Mi={bold:Do(3.4),normal:Do(2.8),thin:Do(2)},Kl=1;function Rl(n){n.traverse(e=>e.layers.set(Kl))}var Ol=class extends dr{constructor(e,t){super(e,t),this.clear=!1}render(e,t,i,s,A){let r=this.camera.layers.mask,a=this.scene.background;this.camera.layers.set(Kl),this.scene.background=null;try{super.render(e,t,i,s,A)}finally{this.scene.background=a,this.camera.layers.mask=r}}};function bl(n="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){let i=document.createElement("canvas");i.width=i.height=t;let s=i.getContext("2d"),A=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);A.addColorStop(0,n),A.addColorStop(1,e),s.fillStyle=A,s.fillRect(0,0,t,t);let r=new $n(i);return r.colorSpace=Zt,r}function ko(n,e=null){let t=new Tt,i=new _e(new yi(.076,.076,.012,40),new Ii({color:n,roughness:.75,metalness:0,emissive:n,emissiveIntensity:.45}));i.rotation.x=Math.PI/2,i.scale.set(1,1,1.12),Pi(i,Mi.normal),t.add(i);let s=new Ii({color:9067051,roughness:.7}),A=new _e(new Lt(.026,.1,.024),s);A.position.y=-.13,Pi(A,Mi.normal),t.add(A);let r=null;if(e!==null){r=new gt({color:Dt(e,.9)});let o=new tn(.066,.0035,8,48);for(let c of[1,-1]){let l=new _e(o,r);l.scale.set(1,1.12,1),l.position.z=c*.0062,t.add(l)}}let a=new _e(new Lt(.028,.012,.026),r||s);return a.position.y=-.18,t.add(a),t.userData.ringMat=r,t.userData.baseGlow=e!==null?Dt(e,.9):null,t}function Sd(){let n=new Tt,e=new Ii({color:1841715,roughness:.55,metalness:.45,emissive:460050,emissiveIntensity:1}),t=Dt(qe.cyan,1),i=new gt({color:t.clone()});for(let m=0;m<3;m++){let C=m/3*Math.PI*2+Math.PI/2,f=new _e(new yi(.016,.02,.9,8),e);f.position.set(Math.cos(C)*.17,.43,Math.sin(C)*.17),f.rotation.set(Math.sin(C)*.2,0,-Math.cos(C)*.2),Pi(f,Mi.thin),n.add(f)}let s=new Tt;s.position.y=.94,n.add(s);let A=new _e(new Lt(.4,.22,.34),e);Pi(A,Mi.normal),s.add(A);let r=new _e(new Lt(.41,.024,.35),i);r.position.y=-.055,s.add(r);let a=new Tt;a.position.set(0,.06,.16),s.add(a);let o=new _e(new yi(.042,.056,.22,16),e);o.rotation.x=Math.PI/2,o.position.z=.09,Pi(o,Mi.normal),a.add(o);let c=new _e(new tn(.044,.01,8,24),i);c.position.z=.2,a.add(c);let l=new _e(new yi(.17,.1,.16,20,1,!0),new Ii({color:10465535,roughness:.15,transparent:!0,opacity:.22,side:si,depthWrite:!1}));l.position.y=.19,s.add(l);let u=new _e(new tn(.17,.008,6,32),i);u.rotation.x=Math.PI/2,u.position.y=.27,s.add(u);let h=new gt({color:16775404}),d=new Qi(.02,10,8);for(let m=0;m<16;m++){let C=m*2.4,f=.03+m%5*.022,p=new _e(d,h);p.position.set(Math.cos(C)*f,.14+Math.floor(m/6)*.035,Math.sin(C)*f),s.add(p)}return n.position.set(0,0,-1.95),n.userData={head:s,nozzle:a,nozzleZ:a.position.z,glowMat:i,glowBase:t},n}function xd(n,e){let t=n.children[0].material;t.color.setHex(e),t.emissive.setHex(e)}function yd(){let n=new _e(new yi(.03,.042,1,14),new Ii({color:3951218,roughness:.6,emissive:726067,emissiveIntensity:1}));return Pi(n,Mi.normal),n}var Md={normal:{torso:[1.15,1,.75],head:1,headY:1.66},small:{torso:[1.25,.82,.85],head:1.15,headY:1.6},broad:{torso:[1.38,1.02,.85],head:1,headY:1.67},lean:{torso:[1.05,1.06,.7],head:.96,headY:1.68},slim:{torso:[.98,1.1,.68],head:.95,headY:1.7},tall:{torso:[1.22,1.15,.8],head:1.02,headY:1.74}};function Ul(n){let e=new Tt,t=()=>new Ii({color:n,roughness:.8,metalness:0,emissive:n,emissiveIntensity:.05}),i=t(),s=t(),A=t(),r=t(),a=new gt({color:Dt(n,1.3)}),o=new _e(new es(.17,.38,6,16),i);o.position.y=1.18,o.scale.set(1.15,1,.75),e.add(o);let c=new _e(new Qi(.12,24,16),s);c.position.y=1.66,e.add(c);let l=new _e(new Lt(.19,.05,.07),a);l.position.set(0,.02,.085),c.add(l);let u=cg(c,o,r,a,A),h=new es(.07,.55,4,10),d=new _e(h,A);d.position.set(-.1,.45,0);let m=new _e(h,A);m.position.set(.1,.45,0),e.add(d,m);let C=new _e(new yi(.035,.03,1,10),A);e.add(C);let f=new _e(new es(.035,.42,4,8),A);f.position.set(-.25,1.15,.05),f.rotation.z=-.35,e.add(f);for(let G of[o,c,l,d,m,C,f])Pi(G,Mi.normal);let p=new gt({color:Dt(n,1),transparent:!0,opacity:.7,side:si}),S=new _e(new ts(.28,.33,40),p);return S.rotation.x=-Math.PI/2,S.position.y=.01,e.add(S),e.userData={bodyMat:i,headMat:s,limbMat:A,gearMat:r,visorMat:a,baseMat:p,visor:l,arm:C,torso:o,head:c,legL:d,legR:m,gear:u,halo:u.haloSpin},gr(e,n),Br(e,{}),e}function cg(n,e,t,i,s){let A=(u,h,d=Mi.thin)=>{let m=new _e(u,h);return Pi(m,d),m},r={};r.goggles=new Tt;for(let u of[-.046,.046]){let h=A(new yi(.036,.036,.03,20),i);h.rotation.x=Math.PI/2,h.position.set(u,.02,.1),r.goggles.add(h)}r.sprout=new Tt;let a=new _e(new yi(.006,.006,.09,6),s);a.position.y=.155;let o=A(new Qi(.024,12,8),i);o.position.y=.205,r.sprout.add(a,o),r.shield=A(new Lt(.25,.1,.06),i),r.shield.position.set(0,0,.09),r.pads=new Tt;for(let u of[-1,1]){let h=A(new Qi(.1,16,8,0,Math.PI*2,0,Math.PI/2),t,Mi.normal);h.scale.set(1.25,.75,1.1),h.position.set(u*.17,.24,0),r.pads.add(h)}r.crest=new Tt,[-.75,-.38,0,.38,.75].forEach((u,h)=>{let d=[.1,.14,.17,.14,.1][h],m=A(new Tn(.032,d,8),i);m.position.set(.12*Math.sin(u),.12*Math.cos(u)+d*.25,-.03),m.rotation.set(-.35,0,-u),r.crest.add(m)}),r.band=A(new tn(.122,.016,8,32),t),r.band.rotation.x=Math.PI/2,r.band.position.y=.035,r.halo=new Tt,r.halo.position.y=.2,r.halo.rotation.x=Math.PI/2-.35,r.haloSpin=new Tt;let c=A(new tn(.15,.012,8,48),i),l=A(new Qi(.022,10,8),i);l.position.x=.15,r.haloSpin.add(c,l),r.halo.add(r.haloSpin),r.horns=new Tt;for(let u of[-1,1]){let h=A(new Tn(.038,.21,10),i,Mi.normal);h.position.set(u*.085,.14,-.01),h.rotation.set(-.2,0,-u*.5),r.horns.add(h)}r.spikes=new Tt;for(let u of[-1,1])for(let[h,d]of[[-.05,.15],[.05,.11]]){let m=A(new Tn(.032,d,8),i,Mi.normal);m.position.set(u*.19,.26,h),m.rotation.z=-u*.5,r.spikes.add(m)}for(let u of["goggles","sprout","shield","crest","band","halo","horns"])n.add(r[u]);for(let u of["pads","spikes"])e.add(r[u]);return r}function Br(n,e){let t=n.userData,i=Md[e.build]||Md.normal;t.torso.scale.set(i.torso[0],i.torso[1],i.torso[2]),t.head.scale.setScalar(i.head),t.head.position.y=i.headY;let s=new Set(e.gear||[]);for(let A of["goggles","sprout","shield","pads","crest","band","halo","horns","spikes"])t.gear[A].visible=s.has(A);t.visor.visible=!s.has("goggles")&&!s.has("shield");for(let A of["pads","spikes"])t.gear[A].scale.set(1/i.torso[0],1/i.torso[1],1/i.torso[2])}function gr(n,e){let t=n.userData,i=new de(e);t.bodyMat.color.copy(i).multiplyScalar(.55),t.bodyMat.emissive.copy(i),t.headMat.color.copy(i).lerp(new de(16777215),.2).multiplyScalar(.6),t.headMat.emissive.copy(i),t.limbMat.color.copy(i).multiplyScalar(.4),t.limbMat.emissive.copy(i).multiplyScalar(.6),t.gearMat.color.copy(i).multiplyScalar(.4),t.gearMat.emissive.copy(i).multiplyScalar(.55),t.visorMat.color.copy(Dt(e,1.15)),t.baseMat.color.copy(Dt(e,1))}var Fo=class{constructor(e,t){this.canvas=e,this.settings=t,this.renderer=new wo({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=ss,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Zt,this.renderer.setClearColor(0,1),this.scene=new KA,this.scene.background=new de(328205),this.scene.fog=new OA(656416,.035),this.camera=new ii(t.fov,1,.03,400),this.camera.position.set(0,1.5,2.2),this.time=0,this.contextLost=!1,this.onContextLost=null,this.onContextRestored=null,e.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.contextLost=!0,this.onContextLost&&this.onContextLost()}),e.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this.applyQuality(),this.onContextRestored&&this.onContextRestored()}),this._build(),this.applyQuality()}applyQuality(){let e=Ai[this.settings.quality];if(this.q=e,this._applyPixelRatio(),this.composer){for(let A of this.composer.passes)A.dispose&&A.dispose();this.composer.dispose(),this.composer=null}let t=this.renderer.getDrawingBufferSize(new ge),i=!!this.settings.msaa,s=new yt(Math.max(1,t.x),Math.max(1,t.y),{type:Kt,samples:i?4:0});this.composer=new Ko(this.renderer,s),this.composer.setPixelRatio(1),this.composer.addPass(new dr(this.scene,this.camera)),this.bloom=null,e.bloom&&(this.bloom=new aA(new ge(256,256),.8,.32,1),this.composer.addPass(this.bloom)),this.composer.addPass(new Ol(this.scene,this.camera)),this.composer.addPass(new Ro),i||this.composer.addPass(e.aa==="smaa"?new Lo:new Uo),this.ballLight&&(this.ballLight.visible=e.ballLight),this._buildCrowd(e.crowd),this.resize()}_applyPixelRatio(){let e=Math.min(window.devicePixelRatio||1,3),t=Math.min(e,this.q.pixelRatio);t!==this.renderer.getPixelRatio()&&this.renderer.setPixelRatio(t)}resize(){let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this._applyPixelRatio(),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let i=this.canvas.width,s=this.canvas.height;if(this.composer&&(this.composer.setSize(i,s),this.bloom)){let A=this.q.bloomScale||1;this.bloom.setSize(Math.max(2,Math.round(i*A)),Math.max(2,Math.round(s*A)))}pd(i,s,this.renderer.getPixelRatio())}precompile(){if(this.contextLost)return;let e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.composer?this.composer.renderTarget1:null);try{this.renderer.compile(this.scene,this.camera)}finally{this.renderer.setRenderTarget(e)}}render(){this.contextLost||this.composer.render()}sampleBlackness(){if(this.contextLost)return null;let e=this.renderer.getContext(),t=e.drawingBufferWidth,i=e.drawingBufferHeight;(!this._row||this._row.length<t*4)&&(this._row=new Uint8Array(t*4));let s=this._row;this.renderer.setRenderTarget(null);let A=0,r=0;for(let a of[.3,.5,.7]){e.readPixels(0,Math.floor(i*a),t,1,e.RGBA,e.UNSIGNED_BYTE,s);for(let o=0;o<t;o+=6){let c=o*4;Math.max(s[c],s[c+1],s[c+2])<12&&r++,A++}}return A?r/A:null}_build(){let e=this.scene;e.add(new WA(6966527,1180959,.45));let t=new zA(14673663,.75);t.position.set(1.5,8,2),e.add(t),this.rimA=new is(qe.magenta,3,9,1.6),this.rimA.position.set(-3,2.6,-1),this.rimB=new is(qe.cyan,3,9,1.6),this.rimB.position.set(3,2.6,1),e.add(this.rimA,this.rimB),this._buildFloor(),this._buildTable(),this._buildArena(),this._buildBall(),e.traverse(i=>{i.isLight&&i.layers.enable(Kl)})}_buildFloor(){this.floorMat=new et({uniforms:{uTime:{value:0},uInt:{value:0},uC1:{value:new de(qe.magenta)},uC2:{value:new de(qe.cyan)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`
        varying vec3 vW; uniform float uTime; uniform float uInt; uniform vec3 uC1; uniform vec3 uC2;
        void main(){
          vec2 g = vW.xz * 0.8;
          vec2 fw = fwidth(g);
          vec2 grid = abs(fract(g - 0.5) - 0.5) / max(fw, 1e-4);
          float line = 1.0 - min(min(grid.x, grid.y), 1.0);
          float d = length(vW.xz);
          float fade = exp(-d * 0.085);
          vec3 col = mix(uC1, uC2, 0.5 + 0.5 * sin(d * 0.5 - uTime * 1.2));
          float wave = 0.65 + 0.35 * sin(d * 1.3 - uTime * (3.0 + uInt * 5.0));
          float under = smoothstep(2.6, 0.3, length(vW.xz * vec2(1.0, 0.55)));
          vec3 c = vec3(0.012, 0.004, 0.03) + col * line * fade * (0.9 + uInt * 1.8) * wave;
          c += col * 0.025 * fade;
          c *= 1.0 - under * 0.75;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});let e=new _e(new Ki(120,120),this.floorMat);e.rotation.x=-Math.PI/2,this.scene.add(e)}_buildTable(){let e=new Tt;this.table=e;let t=new Ii({color:732300,roughness:.42,metalness:.05,emissive:265264,emissiveIntensity:.8}),i=new _e(new Lt(.7625*2,.03,1.37*2),t);i.position.y=.76-.015,Pi(i,Mi.bold),e.add(i);let s=new gt({color:Dt(16777215,.95)}),A=.02,r=.76+8e-4,a=(f,p,S,G,E=s)=>{let x=new _e(new Ki(f,p),E);return x.rotation.x=-Math.PI/2,x.position.set(S,r,G),e.add(x),x};a(A,1.37*2,-.7625+A/2,0),a(A,1.37*2,.7625-A/2,0),a(.7625*2,A,0,-1.37+A/2),a(.7625*2,A,0,1.37-A/2),a(.004,1.37*2,0,0,s),this.trimMat=new gt({color:Dt(qe.cyan,2.2)});let o=(f,p,S,G)=>{let E=new _e(new Lt(f,.012,p),this.trimMat);E.position.set(S,.76-.034,G),e.add(E)};o(.7625*2+.02,.012,0,1.37+.004),o(.7625*2+.02,.012,0,-1.37-.004),o(.012,1.37*2,.7625+.004,0),o(.012,1.37*2,-.7625-.004,0);let c=new Ii({color:789016,roughness:.5,metalness:.7});for(let f of[-.6,.6])for(let p of[-1.1,1.1]){let S=new _e(new Lt(.05,.76-.03,.05),c);S.position.set(f,(.76-.03)/2,p),e.add(S)}let l=new _e(new Ki(3.6,5),new gt({map:bl("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),color:qe.cyan,transparent:!0,blending:Gi,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.005,this.underGlow=l,e.add(l);let u=document.createElement("canvas");u.width=256,u.height=32;let h=u.getContext("2d");h.strokeStyle="rgba(255,255,255,0.55)",h.lineWidth=1;for(let f=0;f<=256;f+=4)h.beginPath(),h.moveTo(f,0),h.lineTo(f,32),h.stroke();for(let f=0;f<=32;f+=4)h.beginPath(),h.moveTo(0,f),h.lineTo(256,f),h.stroke();let d=new $n(u);d.colorSpace=Zt;let m=new _e(new Ki(.915*2,.1525),new gt({map:d,transparent:!0,side:si,depthWrite:!1,color:12101887}));m.position.set(0,.76+.1525/2,0),e.add(m),this.netTapeMat=new gt({color:Dt(qe.magenta,3)});let C=new _e(new Lt(.915*2,.012,.006),this.netTapeMat);C.position.set(0,.9125-.006,0),e.add(C);for(let f of[-.915,.915]){let p=new _e(new Lt(.02,.1525+.03,.03),this.netTapeMat);p.position.set(f,.76+.1525/2,0),e.add(p)}this.scene.add(e)}_buildArena(){let e=this.scene;this.pillarMats=[];let t=new Lt(.35,9,.35),i=new Lt(.08,8.6,.08),s=new Ii({color:722710,roughness:.6,metalness:.5}),A=18;for(let d=0;d<A;d++){let m=d/A*Math.PI*2,C=11,f=Math.cos(m)*C,p=Math.sin(m)*C*1.25,S=new _e(t,s);S.position.set(f,4.5,p),e.add(S);let G=d%2?qe.cyan:qe.magenta,E=new gt({color:Dt(G,2.5)});E.userData.base=new de(G),E.userData.i=d,this.pillarMats.push(E);let x=new _e(i,E);x.position.set(f-Math.cos(m)*.2,4.5,p-Math.sin(m)*.2),e.add(x)}this.haloMats=[],[[6.5,7.2,qe.magenta],[4.6,7.6,qe.cyan],[8.6,6.8,qe.purple]].forEach(([d,m,C])=>{let f=new gt({color:Dt(C,2.2)});f.userData.base=new de(C),this.haloMats.push(f);let p=new _e(new tn(d,.06,8,120),f);p.rotation.x=Math.PI/2,p.position.y=m,e.add(p)}),this.beams=[];let r=new et({uniforms:{uColor:{value:new de(1,1,1)},uAlpha:{value:.12}},vertexShader:"varying float vH; void main(){ vH = uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAlpha; varying float vH; void main(){ gl_FragColor = vec4(uColor * uAlpha * pow(vH, 1.6), 1.0); }",transparent:!0,blending:Gi,depthWrite:!1,side:si}),a=new Tn(1.4,12,24,1,!0);a.translate(0,-6,0),[qe.cyan,qe.magenta,qe.purple,qe.yellow].forEach((d,m)=>{let C=r.clone();C.uniforms.uColor.value=new de(d);let f=new _e(a,C);f.position.set((m-1.5)*3.2,12,-4+m%2*6),f.userData.phase=m*1.7,e.add(f),this.beams.push(f)}),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=1024,this.screenCanvas.height=384,this.screenTex=new $n(this.screenCanvas),this.screenTex.colorSpace=Zt;let o=new gt({map:this.screenTex,color:Dt(16777215,1.25)}),c=this.frameMat=new gt({color:Dt(qe.magenta,1.6)});for(let d of[-1,1]){let m=new Tt,C=new _e(new Ki(6,2.25),o),f=new _e(new Lt(6.3,2.55,.15),c);f.position.z=-.1,Pi(f,Mi.bold),m.add(C,f),m.position.set(d*7.2,4.3,-8.5),m.lookAt(0,2.2,2.5),e.add(m)}this.drawScreen({title:"NEON SPIN"});let l=new It,u=new Float32Array(900*3);for(let d=0;d<900;d++){let m=Math.random()*Math.PI*2,C=Math.random()*.45*Math.PI,f=80;u[d*3]=Math.cos(m)*Math.cos(C)*f,u[d*3+1]=Math.sin(C)*f+8,u[d*3+2]=Math.sin(m)*Math.cos(C)*f}l.setAttribute("position",new lt(u,3));let h=new mn(l,new qs({color:12562687,size:1.6,sizeAttenuation:!1,fog:!1}));e.add(h)}_buildCrowd(e){this.crowd&&(this.scene.remove(this.crowd),this.crowd.geometry.dispose());let t=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e),A=this.theme||kn[0],r=[A.c2,A.c1,A.c4,A.c3,16777215].map(o=>new de(o));for(let o=0;o<e;o++){let c=Math.random()*Math.PI*2,l=Math.random(),u=13.5+l*9;t[o*3]=Math.cos(c)*u,t[o*3+1]=.8+l*7+Math.random()*.6,t[o*3+2]=Math.sin(c)*u*1.2;let h=r[Math.random()*r.length|0];i[o*3]=h.r,i[o*3+1]=h.g,i[o*3+2]=h.b,s[o]=Math.random()*100}let a=new It;a.setAttribute("position",new lt(t,3)),a.setAttribute("color",new lt(i,3)),a.setAttribute("seed",new lt(s,1)),this.crowdMat||(this.crowdMat=new et({uniforms:{uTime:{value:0},uCheer:{value:0},uScale:{value:300}},vertexShader:`
          attribute float seed; attribute vec3 color; varying vec3 vC; varying float vA;
          uniform float uTime; uniform float uCheer; uniform float uScale;
          void main(){
            vec4 mv = modelViewMatrix * vec4(position + vec3(0.0, max(0.0, sin(uTime*9.0+seed*3.0))*uCheer*0.35, 0.0), 1.0);
            float tw = 0.45 + 0.55 * sin(uTime * (1.0 + fract(seed) * 3.0) + seed);
            vA = mix(tw * 0.5, 1.0, uCheer) ;
            vC = color;
            // Guard against points level with / behind the camera: dividing by a
            // tiny or negative depth gives giant or NaN point sizes.
            gl_PointSize = clamp((0.16 + uCheer * 0.1) * uScale / max(-mv.z, 0.5), 0.0, 48.0);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          varying vec3 vC; varying float vA;
          void main(){
            vec2 d = gl_PointCoord - 0.5; float r = dot(d,d);
            if (r > 0.25) discard;
            gl_FragColor = vec4(vC * vA * 1.6 * (1.0 - r*3.0), 1.0);
          }`,transparent:!0,blending:Gi,depthWrite:!1})),this.crowd=new mn(a,this.crowdMat),this.scene.add(this.crowd)}_buildBall(){this.ballMat=new gt({color:16775404}),this.ball=new _e(new Qi(.02,24,16),this.ballMat),Pi(this.ball,Mi.normal),this.scene.add(this.ball);let e=.02*1.012;this.spinBandMat=new et({uniforms:{uColor:{value:new de(14211296)}},vertexShader:"varying float vZ; void main(){ vZ = position.z; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uColor; varying float vZ;
        void main(){
          if (abs(vZ) > ${(e*.28).toFixed(6)}) discard;
          gl_FragColor = vec4(uColor, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),this.spinBandColor=this.spinBandMat.uniforms.uColor.value,this.spinBand=new _e(new Qi(e,24,16),this.spinBandMat),this.scene.add(this.spinBand),this.ballHalo=new LA(new Vs({map:bl("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),blending:Gi,depthWrite:!1,transparent:!0,color:16777215})),this.ballHalo.scale.set(.08,.08,1),this.ballHalo.material.opacity=.35,this.scene.add(this.ballHalo),this.ballLight=new is(16777215,.3,1.6,2),this.scene.add(this.ballLight),this.shadow=new _e(new Ki(1,1),new gt({map:bl("rgba(0,0,0,0.85)","rgba(0,0,0,0)",64),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.scene.add(this.shadow)}drawScreen(e){let t=this.screenCanvas,i=t.getContext("2d"),s=t.width,A=t.height,r=i.createLinearGradient(0,0,s,A);r.addColorStop(0,"#12002a"),r.addColorStop(1,"#001a2a"),i.fillStyle=r,i.fillRect(0,0,s,A),i.strokeStyle="rgba(255,255,255,0.06)";for(let a=0;a<A;a+=6)i.beginPath(),i.moveTo(0,a),i.lineTo(s,a),i.stroke();if(i.textAlign="center",i.textBaseline="middle",e.title)i.font='900 130px "Trebuchet MS", sans-serif',i.shadowColor="#ff2bd6",i.shadowBlur=40,i.fillStyle="#ffffff",i.fillText(e.title,s/2,A/2-20),i.font='700 40px "Trebuchet MS", sans-serif',i.shadowColor="#00f0ff",i.fillStyle="#7ff8ff",i.fillText(e.sub||"TABLE TENNIS ARENA",s/2,A/2+80);else{let a=(o,c,l,u)=>{i.font=`800 ${o.length>9?34:46}px "Trebuchet MS", sans-serif`,i.shadowColor=u,i.fillStyle=l,i.fillText(o,c,60,s*.42)};i.shadowBlur=24,a(e.player||"YOU",s*.25,e.pcolor||"#7ff8ff",e.pcolor||"#00f0ff"),a(e.opponent,s*.75,e.color||"#ff8af0",e.color||"#ff2bd6"),i.font='900 190px "Trebuchet MS", sans-serif',i.fillStyle="#ffffff",i.shadowColor=e.pcolor||"#00f0ff",i.fillText(String(e.ps),s*.25,215),i.shadowColor=e.color||"#ff2bd6",i.fillText(String(e.os),s*.75,215),i.font='700 60px "Trebuchet MS", sans-serif',i.fillStyle="#ffe600",i.shadowColor="#ffe600",i.fillText("\u2013",s/2,215),i.font='700 34px "Trebuchet MS", sans-serif',i.fillStyle="#c9b8ff",i.shadowBlur=10,i.fillText(`GAMES  ${e.pg} \u2013 ${e.og}`,s/2,340),e.rally>2&&(i.fillStyle="#ffe600",i.fillText(`RALLY ${e.rally}`,s/2,60))}i.shadowBlur=0,this.screenTex.needsUpdate=!0}setTheme(e){let t=kn.find(i=>i.id===e)||kn[0];if(this.theme!==t){this.theme=t,this.floorMat.uniforms.uC1.value.setHex(t.c1),this.floorMat.uniforms.uC2.value.setHex(t.c2);for(let i of this.pillarMats)i.userData.base.setHex(i.userData.i%2?t.c2:t.c1);this.haloMats.forEach((i,s)=>i.userData.base.setHex([t.c1,t.c2,t.c3][s])),this.beams.forEach((i,s)=>i.material.uniforms.uColor.value.setHex([t.c2,t.c1,t.c3,t.c4][s])),this.netTapeMat.color.copy(Dt(t.c1,3)),this.frameMat.color.copy(Dt(t.c1,1.6)),this.underGlow.material.color.setHex(t.c2),this.rimA.color.setHex(t.c1),this.rimB.color.setHex(t.c2),this.scene.background.setHex(t.bg),this.scene.fog.color.setHex(t.fog),this.crowd&&this._buildCrowd(this.q.crowd)}}pointScale(){return this.renderer.domElement.height/(2*Math.tan(or.degToRad(this.camera.fov)/2))}update(e,t,i){this.time+=e;let s=this.time;this.floorMat.uniforms.uTime.value=s,this.floorMat.uniforms.uInt.value=t,this.crowdMat.uniforms.uTime.value=s,this.crowdMat.uniforms.uCheer.value=i,this.crowdMat.uniforms.uScale.value=this.pointScale();let A=t*.35*Math.sin(s*.7),r=.5+.5*Math.sin(s*(2+t*6));for(let a of this.pillarMats){let o=1.6+t*1.6+.9*Math.sin(s*2.5+a.userData.i*.7)*(.3+t);a.color.copy(a.userData.base).offsetHSL(A,0,0).multiplyScalar(o)}this.haloMats.forEach((a,o)=>{a.color.copy(a.userData.base).offsetHSL(A*(o+1),0,0).multiplyScalar(1.6+t*2*r)});for(let a of this.beams){let o=a.userData.phase;a.rotation.z=Math.sin(s*.5+o)*.45,a.rotation.x=Math.cos(s*.37+o)*.3,a.material.uniforms.uAlpha.value=.06+t*.12+i*.1}this.trimMat.color.setHex(this.theme?this.theme.c2:qe.cyan).offsetHSL(t*.5*(.5+.5*Math.sin(s*1.3)),0,0).multiplyScalar(2+t*2),this.rimA.intensity=2.5+t*4,this.rimB.intensity=2.5+t*4,this.scene.fog.density=.035-t*.012,this.bloom&&(this.bloom.strength=(.75+t*.6+i*.15)*(this.q.bloomStrength||1))}};var Rt=n=>440*Math.pow(2,(n-69)/12),Pl=n=>n<0?0:n>1?1:n,Hn=(n,e)=>n+Math.random()*(e-n),Ll=[{chord:[57,60,64],bass:45},{chord:[57,60,65],bass:41},{chord:[55,60,64],bass:48},{chord:[55,59,62],bass:43},{chord:[57,60,64],bass:45},{chord:[57,60,65],bass:41},{chord:[57,62,65],bass:38},{chord:[56,59,64],bass:40}],lg=[[0,0,76,4],[0,6,72,2],[0,8,74,2],[0,10,76,6],[1,0,77,6],[1,8,76,2],[1,10,72,6],[2,0,79,4],[2,4,76,4],[2,8,72,4],[2,12,76,4],[3,0,74,8],[3,8,71,4],[3,12,74,4],[4,0,76,4],[4,4,81,4],[4,8,79,2],[4,10,76,6],[5,0,77,4],[5,4,81,4],[5,8,84,8],[6,0,86,6],[6,6,84,2],[6,8,81,8],[7,0,80,4],[7,4,83,4],[7,8,76,8]],hg=new Map(lg.map(([n,e,t,i])=>[n*16+e,{m:t,len:i}])),ug=[0,1,2,3,2,1,2,3],Id=Ll.length*16,dg={sfx:1,music:.5,crowd:.9},Wo=class{constructor(){this.ctx=null,this.volumes={master:.8,music:.5,sfx:.9,crowd:.7},this.muted=!1,this.intensity=0,this.musicMode="menu",this.step=0,this.nextTime=0,this.bpm=0,this.roarBase=0,this.announcer=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:"interactive"});this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-14,this.limiter.ratio.value=4,this.limiter.attack.value=.003,this.limiter.release.value=.2,this.master=t.createGain(),this.master.connect(this.limiter),this.limiter.connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(2.2,2.6),this.reverbIn=t.createGain(),this.reverbIn.gain.value=.35,this.reverbIn.connect(this.reverb),this.reverb.connect(this.master),this.noiseBuf=this._noise(3),this.muffle=t.createBiquadFilter(),this.muffle.type="lowpass",this.muffle.frequency.value=2e4,this.buses={sfx:this._bus("sfx"),music:this._bus("music",this.muffle),crowd:this._bus("crowd")};let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=4200;let s=t.createGain();s.connect(i).connect(this.buses.sfx.input),this.buses.far={input:s,send:this.buses.sfx.send},this._buildMusic(),this._buildCrowd(),this.applyVolumes(),this.nextTime=t.currentTime+.1}_bus(e,t=null){let i=this.ctx,s=i.createGain(),A=i.createGain(),r=i.createGain(),a=i.createGain();return t?s.connect(t).connect(A):s.connect(A),A.connect(this.master),r.connect(a).connect(this.reverbIn),{key:e,input:s,vol:A,send:r,sendVol:a}}setVolumes(e){Object.assign(this.volumes,e),this.applyVolumes()}setMuted(e){this.muted=!!e,this.applyVolumes(),this.muted&&typeof window<"u"&&window.speechSynthesis&&window.speechSynthesis.cancel()}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.volumes.master,e,.03);for(let t of["sfx","music","crowd"]){let i=this.buses[t],s=this.volumes[t]*dg[t];i.vol.gain.setTargetAtTime(s,e,.03),i.sendVol.gain.setTargetAtTime(s,e,.03)}}setMuffle(e){this.ctx&&this.muffle.frequency.setTargetAtTime(e?650:2e4,this.ctx.currentTime,e?.08:.25)}_noise(e){let t=this.ctx,i=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate),s=i.getChannelData(0);for(let A=0;A<s.length;A++)s[A]=Math.random()*2-1;return i}_impulse(e,t){let i=this.ctx,s=Math.floor(i.sampleRate*e),A=i.createBuffer(2,s,i.sampleRate);for(let r=0;r<2;r++){let a=A.getChannelData(r);for(let o=0;o<s;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/s,t)}return A}_env(e,t,i,s,A){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+i),e.gain.exponentialRampToValueAtTime(1e-4,t+i+A)}_out(e,t,i){if(e.connect(t.input),i){let s=this.ctx.createGain();s.gain.value=i,e.connect(s).connect(t.send)}}_tone(e,t,i,s,A,r,a=this.buses.sfx,o=0,c=.002){let l=this.ctx,u=l.createOscillator();u.type=e,u.frequency.setValueAtTime(t,s),i!==t&&u.frequency.exponentialRampToValueAtTime(Math.max(20,i),s+A);let h=l.createGain();this._env(h,s,c,r,A),u.connect(h),this._out(h,a,o),u.start(s),u.stop(s+c+A+.05)}_noiseHit(e,t,i,s,A,r,a=this.buses.sfx,o=0,c=0,l=.002){let u=this.ctx,h=u.createBufferSource();h.buffer=this.noiseBuf;let d=u.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(A,e),c&&d.frequency.exponentialRampToValueAtTime(c,e+t),d.Q.value=r;let m=u.createGain();this._env(m,e,l,i,t),h.connect(d).connect(m),this._out(m,a,o),h.start(e,Math.random()*Math.max(0,2.8-t)),h.stop(e+l+t+.05)}get ok(){return!!this.ctx&&this.ctx.state==="running"}hit(e,t=.5,i=!1,s=!1,A=!1){if(!this.ok)return;let r=this.ctx.currentTime,a=i?this.buses.far:this.buses.sfx,o=Pl(e),c=(i?.5:1)*(.4+.6*o),l=(.82+.45*o)*(1+(Math.random()-.5)*.04);if(this._noiseHit(r,.008,(.12+.45*o)*c,"highpass",2200+2600*o,.7,a,.15,0,8e-4),this._tone("sine",1180*l,1020*l,r,.05+.02*o,.55*c,a,.35,.001),this._tone("triangle",2650*l,2500*l,r,.022,.14*c,a,.2,.001),this._tone("sine",430*l,320*l,r,.045,.2*c,a,0,.001),A&&this._noiseHit(r,.08,.1*c,"bandpass",1800,.8,a,.1,700),s){let u=i?.6:1;this._tone("sine",170,46,r,.26,.9*u,a,.3,.001),this._noiseHit(r,.1,.5*u,"bandpass",2300,.9,a,.6,800,.001),this._noiseHit(r+.012,.32,.16*u,"bandpass",5200,.8,a,.7,450)}else o>.6&&this._tone("sine",150,70,r,.12,.35*((o-.6)/.4)*c,a);if(t>.88&&!i){let u=76+Math.floor(this.intensity*5);[0,4,7,12].forEach((h,d)=>{this._tone("sine",Rt(u+h),Rt(u+h),r+.03+d*.035,.18,.1,this.buses.sfx,.8)})}}bounce(e,t){if(!this.ok)return;let i=this.ctx.currentTime,s=t?this.buses.far:this.buses.sfx,A=Math.min(1,.3+e/9)*(t?.5:.85),r=1+(Math.random()-.5)*.06;this._noiseHit(i,.005,.28*A,"highpass",5500,.7,s,.1,0,5e-4),this._tone("sine",1950*r,1750*r,i,.028,.3*A,s,.25,8e-4),this._tone("sine",270*r,210*r,i,.03,.1*A,s,0,.001)}net(e=6){if(!this.ok)return;let t=this.ctx.currentTime,i=this.buses.sfx,s=Math.min(1,.45+e/14);this._noiseHit(t,.12,.5*s,"lowpass",480,.8,i,.2,0,.004),this._tone("sine",140,80,t,.13,.42*s,i,.1,.003),this._noiseHit(t+.015,.09,.07*s,"bandpass",1300,2.5,i,.1)}floor(){if(!this.ok)return;let e=this.ctx.currentTime;this._tone("sine",520,380,e,.07,.15,this.buses.sfx,.5),this._noiseHit(e,.02,.05,"lowpass",1400,.7)}whoosh(e=1){if(!this.ok)return;let t=this.ctx.currentTime;this._noiseHit(t,.16,.16*e,"bandpass",500,1.4,this.buses.sfx,.1,2600)}toss(){if(!this.ok)return;let e=this.ctx.currentTime;this._tone("sine",500,900,e,.08,.06)}machine(){if(!this.ok)return;let e=this.ctx.currentTime,t=this.buses.far;this._noiseHit(e,.06,.35,"bandpass",900,1.2,t,.2,300),this._tone("sine",180,70,e,.08,.3,t,.1),this._noiseHit(e+.01,.12,.1,"highpass",3e3,.7,t,.15)}slowmo(){if(!this.ok)return;let e=this.ctx.currentTime;this._tone("sine",700,90,e,.6,.16,this.buses.sfx,.5,.01),this._noiseHit(e,.7,.1,"bandpass",2400,.9,this.buses.sfx,.6,300,.05)}ui(e="move"){if(!this.ok)return;let t=this.ctx.currentTime;e==="select"?(this._tone("square",Rt(81),Rt(81),t,.06,.06),this._tone("square",Rt(88),Rt(88),t+.06,.1,.06,this.buses.sfx,.4)):this._tone("triangle",Rt(88),Rt(86),t,.04,.07)}point(e,t=0){if(!this.ok)return;let i=this.ctx.currentTime,s=e?[0,4,7,12,16]:[7,3,0,-5],A=e?72:64;s.forEach((a,o)=>{let c=Rt(A+a);this._tone(e?"square":"sawtooth",c,c,i+o*.075,.16,e?.06:.045,this.buses.sfx,.6)});let r=Pl((t-4)/14);this.roarBase=0,e?this.cheer(.45+.55*r):(this.aww(.45+.45*r),t>=8&&this.applause(.3+.5*r))}coins(e){if(!this.ok)return;let t=this.ctx.currentTime;if(e>0){let i=Math.min(10,2+Math.round(Math.log2(1+e)));for(let s=0;s<i;s++){let A=t+s*.085+Math.random()*.02;this._tone("square",Rt(83),Rt(83),A,.06,.045,this.buses.sfx,.3),this._tone("square",Rt(88),Rt(88),A+.06,.22,.045,this.buses.sfx,.4),this._tone("sine",Rt(100),Rt(100),A+.06,.18,.03,this.buses.sfx,.5)}}else e<0&&[67,66,65,62].forEach((i,s)=>{this._tone("triangle",Rt(i),Rt(i-(s===3?1:0)),t+s*.18,s===3?.5:.16,.08,this.buses.sfx,.4)})}fanfare(e){if(!this.ok)return;let t=this.ctx.currentTime;(e?[0,4,7,12,7,12,16,19,24]:[12,7,3,0,-5,-12]).forEach((s,A)=>{let r=Rt(64+s);this._tone("square",r,r,t+A*.11,.24,.07,this.buses.sfx,.7),this._tone("sawtooth",r/2,r/2,t+A*.11,.24,.04)}),e&&this.cheer(1)}_buildCrowd(){let e=this.ctx,t=this.buses.crowd,i=this._noise(4);this.murmur=e.createGain(),this.murmurLevel=.05,this.murmur.gain.value=this.murmurLevel,this._out(this.murmur,t,.5);for(let[a,o,c,l]of[[380,1.1,1,.13],[900,1.3,.7,.21],[2100,1.6,.25,.17]]){let u=e.createBufferSource();u.buffer=i,u.loop=!0;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=a,h.Q.value=o;let d=e.createGain();d.gain.value=c*.75;let m=e.createOscillator();m.frequency.value=l;let C=e.createGain();C.gain.value=c*.25,m.connect(C).connect(d.gain),u.connect(h).connect(d).connect(this.murmur),u.start(0,Math.random()*3),m.start()}this.roar=e.createGain(),this.roar.gain.value=0;let s=e.createBufferSource();s.buffer=i,s.loop=!0;let A=e.createBiquadFilter();A.type="bandpass",A.frequency.value=850,A.Q.value=.55;let r=e.createBiquadFilter();r.type="peaking",r.frequency.value=2600,r.Q.value=.8,r.gain.value=6,s.connect(A).connect(r).connect(this.roar),this._out(this.roar,t,.6),s.start(0,Math.random()*3)}_clap(e,t){this._noiseHit(e,Hn(.018,.03),t,"bandpass",Hn(900,2e3),1.3,this.buses.crowd,.5,0,.001)}_whistle(e,t){let i=this.ctx,s=i.createOscillator(),A=Hn(1900,2400);s.frequency.setValueAtTime(A,e),s.frequency.linearRampToValueAtTime(A*1.3,e+.12),s.frequency.linearRampToValueAtTime(A*1.15,e+.4);let r=i.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(t,e+.04),r.gain.setValueAtTime(t,e+.32),r.gain.linearRampToValueAtTime(1e-4,e+.45),s.connect(r),this._out(r,this.buses.crowd,.6),s.start(e),s.stop(e+.5)}_swell(e,t,i){let s=this.ctx.currentTime,A=this.roar.gain;A.cancelScheduledValues(s),A.setValueAtTime(A.value,s),A.linearRampToValueAtTime(e,s+t),A.setTargetAtTime(this.roarBase,s+t+.3,i/3)}cheer(e){if(!this.ok)return;let t=this.ctx.currentTime;this._swell(.08+.4*e,.25,2.6);let i=Math.round(10+34*e);for(let A=0;A<i;A++)this._clap(t+.12+Math.random()*2.2*(.6+e*.5),Hn(.02,.05)*(.6+e));let s=e>.45?1+Math.floor(Math.random()*(1+e*2.5)):0;for(let A=0;A<s;A++)this._whistle(t+Hn(.15,1.2),Hn(.025,.05))}applause(e){if(!this.ok)return;let t=this.ctx.currentTime,i=Math.round(8+24*e);for(let s=0;s<i;s++)this._clap(t+.3+Math.random()*1.8,Hn(.015,.04)*(.6+e))}aww(e){if(!this.ok)return;let t=this.ctx,i=t.currentTime;for(let[s,A,r,a]of[[620,380,3,1],[1250,900,4,.45]]){let o=t.createBufferSource();o.buffer=this.noiseBuf;let c=t.createBiquadFilter();c.type="bandpass",c.Q.value=r,c.frequency.setValueAtTime(s,i),c.frequency.linearRampToValueAtTime(s*1.15,i+.25),c.frequency.exponentialRampToValueAtTime(A,i+1.1);let l=t.createGain(),u=(.12+.3*e)*a;l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(u,i+.22),l.gain.linearRampToValueAtTime(u*.7,i+.6),l.gain.linearRampToValueAtTime(1e-4,i+1.25),o.connect(c).connect(l),this._out(l,this.buses.crowd,.6),o.start(i,Math.random()*1.5),o.stop(i+1.3)}}rally(e){if(!this.ok||e<10)return;let t=this.ctx.currentTime,i=Pl((e-9)/14);this.roarBase=.03+.22*i;let s=this.roar.gain;s.cancelScheduledValues(t),s.setValueAtTime(s.value,t),s.setTargetAtTime(this.roarBase,t,.35);let A=2+Math.round(i*9);for(let r=0;r<A;r++)this._clap(t+Math.random()*.45,Hn(.02,.05));e>=14&&Math.random()<.25+.3*i&&this._whistle(t+Math.random()*.3,.025+.03*i)}say(e){if(!(!this.announcer||this.muted||typeof window>"u"||!window.speechSynthesis))try{let t=window.speechSynthesis,i=new SpeechSynthesisUtterance(e);i.rate=1.05,i.pitch=.9,i.volume=Math.min(1,this.volumes.master*Math.max(.3,this.volumes.sfx));let s=this._voice();s&&(i.voice=s),t.cancel(),t.speak(i)}catch{}}_voice(){if(this._v!==void 0&&this._v)return this._v;let t=(window.speechSynthesis.getVoices()||[]).filter(s=>/^en/i.test(s.lang)),i=["Google UK English Male","Daniel","Microsoft Guy","Microsoft David","Alex","Google US English"];return this._v=i.map(s=>t.find(A=>A.name.includes(s))).find(Boolean)||t[0]||null,this._v}_buildMusic(){let e=this.ctx,t=this.buses.music;this.pump=e.createGain(),this.pump.connect(t.input);let i=e.createGain();i.gain.value=.35,this.pump.connect(i).connect(t.send),this.delay=e.createDelay(1.5),this.delay.delayTime.value=.4;let s=e.createGain();s.gain.value=.32;let A=e.createBiquadFilter();A.type="lowpass",A.frequency.value=2600,this.delayIn=e.createGain(),this.delayIn.gain.value=.45,this.delayIn.connect(this.delay),this.delay.connect(A).connect(s).connect(this.delay),A.connect(t.input)}setMusic(e){this.musicMode=e}update(e){if(this.intensity=e,!this.ok)return;let t=this.ctx,i=.05+(this.musicMode==="game"?e*.05:0);if(Math.abs(i-this.murmurLevel)>.004&&(this.murmurLevel=i,this.murmur.gain.setTargetAtTime(i,t.currentTime,.6)),this.musicMode==="off")return;let A=this.musicMode==="menu"?96:108+e*14,r=60/A/4;for(Math.abs(A-this.bpm)>.5&&(this.bpm=A,this.delay.delayTime.setTargetAtTime(r*3,t.currentTime,.2)),this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this._scheduleStep(this.step,this.nextTime,r),this.nextTime+=r,this.step=(this.step+1)%(Id*2)}_scheduleStep(e,t,i){let s=e%16,A=Math.floor(e/16)%Ll.length,r=Ll[A],a=this.musicMode==="menu",o=a?0:this.intensity;if(a||(s%4===0&&(this._kick(t),this.pump.gain.setValueAtTime(.45,t),this.pump.gain.linearRampToValueAtTime(1,t+i*2.5)),(s===4||s===12)&&this._snare(t,.15+o*.1),s%4===2?this._hat(t,.07,!1):o>.7&&s%2===1&&this._hat(t,.03,!1),s===14&&A%2===1&&this._hat(t,.05,!0),A===7&&s>=12&&o>.3&&this._snare(t,.06+(s-12)*.03)),a?s%4===0:s%2===0){let c=r.bass+(!a&&s%4===2?12:0);this._bass(t,Rt(c),i*(a?3.5:1.8),a?.1:.15,380+o*900)}if(s===0&&this._pad(t,r.chord,i*16,(a?900:750)+o*1400),a?s%2===0:o>.25){let c=ug[(a?s/2:s)%8],l=(c===3?r.chord[0]+12:r.chord[c])+12;this._arp(t,Rt(l),i*.85,a?.03:.02+.018*o,a)}if(a?e>=Id:o>.55){let c=hg.get(A*16+s);c&&this._lead(t,Rt(c.m),i*c.len,a?.035:.05,a)}}_kick(e){let t=this.buses.music;this._tone("sine",150,42,e,.17,.55,t,0,.001),this._noiseHit(e,.008,.07,"highpass",3e3,.7,t)}_snare(e,t){let i=this.buses.music;this._noiseHit(e,.13,t,"bandpass",1900,.8,i,.35),this._tone("triangle",210,160,e,.08,t*.6,i)}_hat(e,t,i){this._noiseHit(e,i?.14:.03,t,"highpass",8200,.7,this.buses.music)}_bass(e,t,i,s,A){let r=this.ctx,a=r.createOscillator();a.type="sawtooth",a.frequency.value=t;let o=r.createBiquadFilter();o.type="lowpass",o.Q.value=5,o.frequency.setValueAtTime(A,e),o.frequency.exponentialRampToValueAtTime(140,e+i);let c=r.createGain();this._env(c,e,.004,s,i),a.connect(o).connect(c).connect(this.pump),a.start(e),a.stop(e+i+.05)}_pad(e,t,i,s){let A=this.ctx,r=A.createBiquadFilter();r.type="lowpass",r.frequency.value=s;let a=A.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.03,e+i*.3),a.gain.linearRampToValueAtTime(.022,e+i*.8),a.gain.linearRampToValueAtTime(1e-4,e+i*1.02),r.connect(a).connect(this.pump);for(let o of t)for(let c of[-7,7]){let l=A.createOscillator();l.type="sawtooth",l.frequency.value=Rt(o),l.detune.value=c+(Math.random()-.5)*4,l.connect(r),l.start(e),l.stop(e+i*1.02+.05)}}_arp(e,t,i,s,A){let r=this.ctx,a=r.createOscillator();a.type=A?"triangle":"square",a.frequency.value=t;let o=r.createGain();this._env(o,e,.003,s,i),a.connect(o),o.connect(this.pump),o.connect(this.delayIn),a.start(e),a.stop(e+i+.05)}_lead(e,t,i,s,A){let r=this.ctx,a=r.createOscillator();a.type=A?"triangle":"sawtooth",a.frequency.value=t;let o=r.createOscillator();o.frequency.value=5.2;let c=r.createGain();c.gain.value=t*.004,o.connect(c).connect(a.frequency);let l=r.createBiquadFilter();l.type="lowpass",l.frequency.value=A?2400:3200;let u=r.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(s,e+.012),u.gain.setTargetAtTime(s*.7,e+.012,.15),u.gain.setTargetAtTime(1e-4,e+i,.06),a.connect(l).connect(u),this._out(u,this.buses.music,.5),u.connect(this.delayIn),a.start(e),o.start(e),a.stop(e+i+.4),o.stop(e+i+.4)}};var Ho=class{constructor(e){this.canvas=e,this.down=new Set,this.pressed=new Set,this.mouseDown=[!1,!1,!1],this.mousePressed=[!1,!1,!1],window.addEventListener("keydown",t=>{(t.code==="Space"||t.code.startsWith("Arrow"))&&(this.active||t.target===document.body)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code)}),window.addEventListener("keyup",t=>{t.code==="Space"&&this.active&&t.preventDefault(),this.down.delete(t.code)}),window.addEventListener("blur",()=>{this.down.clear()}),e.addEventListener("mousedown",t=>{t.button<3&&(this.mouseDown[t.button]=!0,this.mousePressed[t.button]=!0)}),window.addEventListener("mouseup",t=>{t.button<3&&(this.mouseDown[t.button]=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),this.active=!1}isDown(e){return this.down.has(e)}wasPressed(e){return this.pressed.has(e)}endFrame(){this.pressed.clear(),this.mousePressed[0]=this.mousePressed[1]=this.mousePressed[2]=!1}};function lA(){return{px:0,py:1,pz:0,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0}}function Fl(n,e){return n.px=e.px,n.py=e.py,n.pz=e.pz,n.vx=e.vx,n.vy=e.vy,n.vz=e.vz,n.wx=e.wx,n.wy=e.wy,n.wz=e.wz,n}var kl=1,Wl=2,Hl=4;function _d(n,e){let t=Math.sqrt(n.vx*n.vx+n.vy*n.vy+n.vz*n.vz),i=-.13*t*n.vx+.0019*(n.wy*n.vz-n.wz*n.vy),s=-9.81-.13*t*n.vy+.0019*(n.wz*n.vx-n.wx*n.vz),A=-.13*t*n.vz+.0019*(n.wx*n.vy-n.wy*n.vx);n.vx+=i*e,n.vy+=s*e,n.vz+=A*e;let r=1-.22*e;n.wx*=r,n.wy*=r,n.wz*=r,n.px+=n.vx*e,n.py+=n.vy*e,n.pz+=n.vz*e}function wd(n){let e=-n.vy,t=Math.sqrt(n.vx*n.vx+n.vz*n.vz),i=t>1e-6?(n.wx*n.vz-n.wz*n.vx)/t:0,s=Math.max(-1,Math.min(1,i/400)),A=s<0?-s:0,r=.89*(1-.08*A-.05*(s>0?s:0));n.vy=e*r;let a=n.vx+n.wz*.02,o=n.vz-n.wx*.02,c=Math.sqrt(a*a+o*o);if(c>1e-6){let l=.4*c,u=.3*(1+.25*A)*(1+r)*e;l>u&&(l=u);let h=-a/c*l,d=-o/c*l;n.vx+=h,n.vz+=d;let m=1/(2/3*.02*.02);n.wx+=-.02*d*m,n.wz+=.02*h*m}}function gg(n,e,t,i){let s=i/(i-n.pz),A=e+(n.px-e)*s,r=t+(n.py-t)*s;if(Math.abs(A)>.915+.02||r>.9125+.02||r<.76)return!1;let a=Math.sign(n.vz)||1,o=Math.abs(n.vz),c=.9125-.02*.6;if(r>c){let l=Math.min(1,(r-c)/(.02*1.6));n.px=A,n.py=Math.max(r,.9125+.02*.3),n.vy=Math.abs(n.vy)*.2+.5+1*l,n.vx*=.5,l>.42?(n.vz=a*(.4+o*(.12+.3*l)),n.pz=a*.02*1.2):(n.vz=-a*(.3+o*.1),n.pz=-a*.02*1.2),n.wx*=.3,n.wy*=.3,n.wz*=.3}else n.px=A,n.py=r,n.pz=-a*.02*1.05,n.vz=-n.vz*.12,n.vx*=.35,n.vy*=.3,n.wx*=.2,n.wy*=.2,n.wz*=.2;return!0}var vd=.25;function Gd(n,e){n.vy=0;let t=Math.exp(-e*1.5);n.vx*=t,n.vz*=t,n.wx*=t,n.wy*=t,n.wz*=t}function Ql(n,e){let t=n.px,i=n.py,s=n.pz;_d(n,e);let A=0;s!==0&&s>0!=n.pz>0&&gg(n,t,i,s)&&(A|=Wl);let r=.76+.02;return n.vy<0&&n.py<r&&i>=r-.004&&Math.abs(n.px)<=.7625&&Math.abs(n.pz)<=1.37&&(n.py=r,n.vy<-vd?(wd(n),A|=kl):Gd(n,e)),n.py<.02&&n.vy<0&&(n.py=.02,n.vy<-vd?(n.vy=-n.vy*.6,n.vx*=.8,n.vz*=.8,n.wx*=.5,n.wy*=.5,n.wz*=.5,A|=Hl):Gd(n,e)),A}var cA=class{constructor(e=2.2,t=1/240){this.dt=t,this.cap=Math.ceil(e/t)+1,this.x=new Float32Array(this.cap),this.y=new Float32Array(this.cap),this.z=new Float32Array(this.cap),this.ev=new Uint8Array(this.cap),this.n=0}},gn=lA();function zo(n,e,t){Fl(gn,n);let i=Math.min(e.cap,Math.ceil(t/e.dt)+1);e.x[0]=gn.px,e.y[0]=gn.py,e.z[0]=gn.pz,e.ev[0]=0;let s=1;for(;s<i;s++)if(e.ev[s]=Ql(gn,e.dt),e.x[s]=gn.px,e.y[s]=gn.py,e.z[s]=gn.pz,gn.py<.3){s++;break}return e.n=s,e}var vt=lA(),ei={result:"",x:0,z:0,netClear:0};function Qo(n,e,t,i,s,A,r,a,o,c,l,u){vt.px=n,vt.py=e,vt.pz=t,vt.vx=i,vt.vy=s,vt.vz=A,vt.wx=r,vt.wy=a,vt.wz=o;let h=1/300,d=.76+.02,m=0;ei.netClear=1;for(let C=0;C<600;C++){let f=vt.pz,p=vt.py;if(_d(vt,h),f!==0&&f>0!=vt.pz>0){let S=f/(f-vt.pz),G=p+(vt.py-p)*S;if(ei.netClear=G-.02-.9125,ei.netClear<u)return ei.result="net",ei}if(vt.py<d&&vt.vy<0){if(Math.abs(vt.pz)<=1.37){if(vt.pz*c<0){if(l&&m===0){m++,vt.py=d,wd(vt);continue}return ei.result="short",ei}return l&&m===0?(ei.result="noown",ei):(ei.result="land",ei.x=vt.px,ei.z=vt.pz,ei)}else if(vt.py<.76-.05){let S=vt.pz*c>0;return l&&m===0?ei.result=S?"noown":"fall":ei.result=S?"long":"short",ei}}}return ei.result="long",ei}var Eg=[1,.86,.74,.64,.56,1.15,1.3,.48];function Td(n,e,t,i,s,A,r,a,o,c,l,u){let h=o*c,d=y=>{let w=Qo(n,e,t,i,y,s,A,r,a,c,!0,l);return w.result==="land"?w.z*c:NaN},m=!Number.isNaN(u),C=m?u-.8:-9,f=m?u+.8:4,p=m?8:28,S=C,G=d(C),E=NaN,x=1/0;for(let y=1;y<=p;y++){let w=C+(f-C)*y/p,g=d(w);if(!Number.isNaN(g)&&Math.abs(g-h)<x&&(x=Math.abs(g-h),E=w),!Number.isNaN(g)&&!Number.isNaN(G)&&(G-h)*(g-h)<=0){let I=S,_=w,R=G;for(let T=0;T<14;T++){let N=(I+_)/2,Q=d(N);if(Number.isNaN(Q))break;if(Math.abs(Q-h)<.012){I=_=N;break}(R-h)*(Q-h)<=0?_=N:(I=N,R=Q)}let O=(I+_)/2,D=d(O);if(!Number.isNaN(D)&&Math.abs(D-h)<=.07)return O}S=w,G=g}return x<=.07?E:m?Td(n,e,t,i,s,A,r,a,o,c,l,NaN):NaN}function Vo(n,e,t,i,s,A,r={}){let a=A.dirSign,o=Math.max(-.7625+.03,Math.min(.7625-.03,i)),c=Math.max(.12,Math.min(1.37-.03,Math.abs(s))),l=a*c;if(Mg(n,e,t,o,l,A,r),o!==i||Math.abs(s)!==c){let u=Math.hypot(o-n,l-t),h=Math.hypot(i-n,a*Math.abs(s)-t),d=Math.hypot(r.vx,r.vz)*(h/u),m=Math.atan2(i-n,a*Math.abs(s)-t);r.vx=Math.sin(m)*d,r.vz=Math.cos(m)*d}return r}function Mg(n,e,t,i,s,A,r){let a=A.dirSign,o=A.margin??.02,c=!!A.serve,l=A.speed;r.ok=!1;for(let u=0;u<8;u++){c&&(l=A.speed*Eg[u]);let h=!1,d=i,m=NaN;for(let C=0;C<3;C++){let f=d-n,p=s-t,S=Math.sqrt(f*f+p*p)||1,G=f/S,E=p/S,x=G*l,y=E*l,w=E*A.top,g=-G*A.top,I=A.side||0,_=NaN;if(c&&(_=Td(n,e,t,x,y,w,I,g,s,a,o,m),!Number.isNaN(_))){let O=Qo(n,e,t,x,_,y,w,I,g,a,!0,o);r.landX=O.x,r.landZ=O.z}for(let O=0;O<2&&Number.isNaN(_)&&!c;O++){let D=O===0&&!Number.isNaN(m);if(O===1&&Number.isNaN(m))break;let T=D?m-.45:-9,N=D?m+.45:7.5,Q=D?10:15,Y=0;for(;Y<Q;Y++){let $=(T+N)*.5,te=Qo(n,e,t,x,$,y,w,I,g,a,!1,o),Te;if(te.result==="net"||te.result==="short")Te=!0;else if(te.result==="long")Te=!1;else{if(Math.abs(te.z-s)<.012){T=N=$;break}Te=te.z*a<s*a}Te?T=$:N=$}let ne=(T+N)*.5,z=Qo(n,e,t,x,ne,y,w,I,g,a,!1,o);if(z.result==="land"&&Math.abs(z.z-s)<=.07)_=ne,r.landX=z.x,r.landZ=z.z;else if(!D)break}if(Number.isNaN(_)){h=!1;break}m=_,r.vx=x,r.vy=_,r.vz=y,r.wx=w,r.wy=I,r.wz=g,r.speed=l,h=!0;let R=i-r.landX;if(Math.abs(R)<.03)break;d+=R}if(h)return r.ok=!0,r;l*=.85}{let u=s-t;r.vx=(i-n)*.6,r.vz=u*.6,r.vy=3.2,r.wx=0,r.wy=0,r.wz=0}return r}function hA(n){let e=Math.sqrt(n.vx*n.vx+n.vz*n.vz)||1;return(n.wx*n.vz-n.wz*n.vx)/e}var us=class{constructor(e,t=se){this.gamesToWin=e,this.games={[se]:0,ai:0},this.score={[se]:0,ai:0},this.gameFirstServer=t,this.over=!1,this.winner=null,this.gameNumber=1,this.history=[]}get pointsPlayed(){return this.score[se]+this.score["ai"]}get server(){let e=this.pointsPlayed,t=this.gameFirstServer;return(e<20?Math.floor(e/2):10+(e-20))%2===0?t:ui(t)}get isDeuce(){return this.score[se]>=10&&this.score["ai"]>=10}award(e){this.score[e]++;let t=this.score[e],i=this.score[ui(e)],s={gameWon:null,matchWon:null};return t>=11&&t-i>=2&&(this.games[e]++,this.history.push({[se]:this.score[se],ai:this.score["ai"]}),s.gameWon=e,this.games[e]>=this.gamesToWin&&(this.over=!0,this.winner=e,s.matchWon=e)),s}startNextGame(){this.score[se]=0,this.score["ai"]=0,this.gameFirstServer=ui(this.gameFirstServer),this.gameNumber++}gamePointFor(){for(let e of[se,"ai"]){let t=this.score[e],i=this.score[ui(e)];if(t>=10&&t-i>=1)return e}return null}matchPointFor(){let e=this.gamePointFor();return e&&this.games[e]===this.gamesToWin-1?e:null}};var ke=(n,e,t)=>n<e?e:n>t?t:n,ti=(n,e,t)=>n+(e-n)*t,ze=(n,e)=>n+Math.random()*(e-n),uA=n=>n*n*(3-2*n),_i=(n,e)=>1-Math.exp(-n*e);function qt(){let n=0,e=0;for(;n===0;)n=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)}var Er=lA(),Sg=new b,xg=new b,yg=new b,zl=new b(0,1,0);function Ig(n,e){let t=Math.exp;return{...n,reaction:n.reaction*t(-wi.reaction*e),readNoise:n.readNoise*t(-wi.readNoise*e),errorRate:n.errorRate*t(-wi.errorRate*e),aimError:n.aimError*t(-wi.aimError*e),maxSpeed:n.maxSpeed*t(wi.move*e),accel:n.accel*t(wi.move*e),quality:[ke(n.quality[0]+wi.quality*e,.2,.95),n.quality[1]],serve:{...n.serve,errorRate:n.serve.errorRate*t(-wi.errorRate*e)}}}var wi={sd:.8,reaction:.15,readNoise:.31,errorRate:.56,aimError:.19,move:.06,quality:.06,timing:[.018,.006]},dA=class{constructor(e,t,i,s,A){this.game=e,this.side=t,this.s=os(t),this.p=i,this.paddle=s,this.body=A,this.path=new cA(2.2,1/120),this.base=i,this.vary=!1,this.form=0,this.mood=0,this.timingErr=0,this.reset()}setProfile(e){this.base=e,this.p=e,this.form=0,this.mood=0}setForm(e){this.form=e,this.mood=0,this.applyForm()}applyForm(){this.p=this.vary?Ig(this.base,this.form+this.mood):this.base}reset(){this.x=0,this.z=this.s*2.1,this.vx=0,this.vz=0,this.plan=null,this.reactAt=1/0,this.noise={x:0,y:0,z:0},this.replanAt=0,this.swingT=-1,this.swingDir=1,this.struck=!1,this.serveAt=0,this.serveSpot={x:0,z:this.s*1.75},this.tossed=!1,this.paddlePos=new b(this.x,1,this.z-this.s*.4),this.paddleBlend=0,this.lean=0,this.celebrate=0}onServeSetup(){let e=this.game;this.plan=null,this.swingT=-1,this.tossed=!1,e.rally.server===this.side&&(this.serveSpot.x=ke(ze(-.45,.45)*(.4+this.p.cornerBias),-.5,.5),this.serveSpot.z=this.s*ze(1.68,1.85),this.serveAt=e.time+ze(.9,1.6))}onBallStruck(e){if(this.plan=null,e===this.side)return;let t=this.p;this.reactAt=this.game.time+t.reaction*ze(.8,1.25),this.replanAt=this.reactAt;let i=this.game.ball,s=Math.hypot(i.vx,i.vz),A=t.readNoise*(.7+s/14);this.noise.x=qt()*A*.8,this.noise.y=qt()*A*.5,this.noise.z=qt()*A,this.readStart=this.reactAt,this.timingErr=this.vary?qt()*ti(wi.timing[0],wi.timing[1],t.skill):0}onPointEnd(e){this.plan=null,this.swingT=-1,this.celebrate=e?1:-.6,this.vary&&(this.mood=.8*this.mood+(e?.1:-.1)+qt()*.08,this.applyForm())}update(e){let t=this.game,i=t.rally,s=this.x,A=this.z,r=!1;if((i.phase==="serve"||i.phase==="toss")&&i.server===this.side){if(s=this.serveSpot.x,A=this.serveSpot.z,i.phase==="serve"){t.holdBall(this.side,this.x+this.handX()*.6,1.1,this.z-this.s*.32);let a=Math.hypot(this.x-s,this.z-A)<.08;t.time>this.serveAt&&a&&t.canServe()&&t.toss(this.side)}else if(i.phase==="toss"){let a=t.ball;this.swingT<0&&a.vy<0&&a.py<1.2+this.p.quality[0]*.05&&this.startSwing(1),this.swingT>=.09&&!this.struck&&(this.struck=!0,this.serve())}}else if(i.phase==="play"&&i.lastHitter!==this.side&&t.time>=this.reactAt){if(t.time>=this.replanAt&&this.swingT<0&&(this.replan(),this.replanAt=t.time+.07),this.plan){s=this.plan.bodyX,A=this.plan.bodyZ,r=!0;let a=this.plan.hitTime-t.time;this.swingT<0&&a<=.09+.004+this.timingErr&&this.startSwing(this.plan.forehand?1:-1)}this.swingT>=.09-.02&&!this.struck&&this.swingT<=.09+.07&&this.tryStrike()&&(this.struck=!0)}else{let a=t.controllers[ui(this.side)];s=ke(a.x*.25,-.4,.4),A=this.s*(this.p.stance??ti(2.25,1.95,this.p.cornerBias)),i.phase==="serve"&&i.server!==this.side&&(A=this.s*2)}this.move(e,s,A,r),this.swingT>=0&&(this.swingT+=e,this.swingT>.3+.1&&(this.swingT=-1)),this.animate(e)}handX(){return this.s*.3}startSwing(e){this.swingT=0,this.swingDir=e,this.struck=!1}move(e,t,i,s){let A=this.p,r=1.37+.15;this.s>0?i=Math.max(i,r):i=Math.min(i,-r),t=ke(t,-2.2,2.2);let a=t-this.x,o=i-this.z,c=Math.hypot(a,o),l=A.maxSpeed*(s?1:.55),u=Math.min(l,c*(s?6:3)),h=c>1e-4?a/c*u:0,d=c>1e-4?o/c*u:0,m=ke((h-this.vx)/e,-A.accel,A.accel),C=ke((d-this.vz)/e,-A.accel,A.accel);this.vx+=m*e,this.vz+=C*e,this.x+=this.vx*e,this.z+=this.vz*e}replan(){let e=this.game,t=this.p;Fl(Er,e.ball);let i=Math.exp(-(e.time-this.readStart)*3.2);Er.vx+=this.noise.x*i,Er.vy+=this.noise.y*i,Er.vz+=this.noise.z*i;let s=zo(Er,this.path,2),A=this.s,r=e.rally.bounces[this.side]>0,a=null,o=1/0;for(let c=1;c<s.n;c++){if(s.ev[c]&1){if(s.z[c]*A>0){if(r)break;r=!0}else if(!r)continue}if(!r)continue;let l=s.x[c],u=s.y[c],h=s.z[c];if(h*A<.55||u<.74||u>1.85)continue;let d=c*s.dt,m=l-this.handX(),C=l+this.handX(),f=Math.abs(m-this.x)<=Math.abs(C-this.x)+.25,p=f?m:C,S=h+A*.38;S*A<1.37+.15&&(S=A*(1.37+.15));let G=(S-h)*A;if(G>.95)continue;let x=Math.hypot(p-this.x,S-this.z)/t.maxSpeed+.12,y=Math.max(0,x-d),w=Math.abs(u-t.preferHeight)*1.4+y*6+Math.abs(G-.38)*.3+d*.05;w<o&&(o=w,a={hitTime:e.time+d,bodyX:p,bodyZ:S,cx:l,cy:u,cz:h,forehand:f})}this.plan=a}tryStrike(){let e=this.game,t=e.ball;if(e.rally.bounces[this.side]<1)return!1;let s=this.s,A=Math.abs(t.px-this.x),r=(this.z-t.pz)*s;return A>this.p.reach||r<-.05||r>1||t.py<.66||t.py>2?!1:(this.hit(A,r),!0)}hit(e,t){let i=this.game,s=this.p,A=i.ball,r=this.s,a=i.controllers[ui(this.side)],o=Math.hypot(A.vx,A.vz),c=hA(A)/400,l=ke((e-.45)/.5,0,1),u=(Math.max(0,o-9)*.025+l*.25+Math.min(1.5,Math.abs(c))*.08+Math.abs(t-.38)*.15)*(1.2-.6*s.skill),h=ke(s.quality[0]+qt()*s.quality[1]-u-Math.abs(this.timingErr)*5,.05,1),d={kind:"drive",speed:8,top:40,side:0,tx:0,tz:0,vyErr:0,quality:h,margin:.02},m=-r,C=s.depth?ze(s.depth[0],s.depth[1]):ze(.62,.9+.2*s.cornerBias),f;s.placement==="middle"?f=ze(-.18,.18):Math.random()<s.cornerBias?f=(a.x===0?Math.random()<.5?-1:1:-Math.sign(a.x))*ze(.42,.64):f=ze(-.4,.4);let p=Math.random();if(A.py>(s.smashHeight??1.12)&&h>.45&&p<s.smashChance)d.kind="smash",d.speed=s.speed[1]+ze(2,4),d.top=150,C=ze(.8,1.12);else if(a.z*m>2.3&&Math.random()<s.dropChance)d.kind="drop",d.speed=ze(3.4,4.4),d.top=-ze(120,240),C=ze(.28,.45);else if(Math.random()<s.chopChance||c<-.5&&Math.random()<.4){d.kind="chop",d.speed=ze(5.5,8);let x=s.chopSpin||[180,180+s.topspin[1]*.4];d.top=-ze(x[0],x[1])}else d.speed=ti(s.speed[0],s.speed[1],ke(h*ze(.7,1.15),0,1)),d.top=ze(s.topspin[0],s.topspin[1]);d.side=ze(-1,1)*s.sidespin;let S=s.aimError*(1.4-h);f=ke(f,-.74+S*1.1,.74-S*1.1),C=ke(C,.3,1.3-S*1.3),d.tx=ke(f+qt()*S,-.95,.95),d.tz=m*ke(C+qt()*S*1.2,.2,1.6);let G=c*.3*(1-h*.8)*(d.kind==="chop"?.4:1)*(1-.7*(s.spinRead??s.skill));d.tz+=m*G,d.vyErr=qt()*(1-h)*.25*(9/d.speed)+Math.min(0,G)*.8;let E=1+Math.min(1,i.rally.hits/30);if(Math.random()<s.errorRate*(1+u*2)*E){let x=Math.random();x<.4?d.vyErr-=ze(.5,1):x<.75?d.vyErr+=ze(.6,1.3):d.tx=Math.sign(d.tx||1)*ze(.82,1.05)}i.strike(this.side,d)}serve(){let e=this.game,t=this.p,i=t.serve,s=-this.s,A=Math.random()<.35,r={kind:"serve",serve:!0,speed:A?ze(4.2,5.2):ze(i.speed[0],i.speed[1]),top:ze(-1,.6)*i.spin,side:ze(-1,1)*i.spin*.5,tx:ze(-.55,.55),tz:s*(A?ze(.35,.6):ze(.8,1.12)),vyErr:0,quality:ke(t.quality[0]+qt()*.1,.2,1),margin:.015};r.vyErr=qt()*.03,Math.random()<i.errorRate&&(r.vyErr=Math.random()<.5?-ze(.6,1):ze(.8,1.4)),e.strike(this.side,r)}animate(e){let t=this.game,i=this.s,s=this.handX(),A=this.x+s,r=1,a=this.z-i*.35;if(this.plan&&this.game.rally.phase==="play"){let m=this.plan.hitTime-t.time,C=ke(1-(m-.1)/.5,0,1);A=ti(A,this.plan.cx,C),r=ti(r,this.plan.cy,C),a=ti(a,this.plan.cz+i*.05,C)}else t.rally.phase==="toss"&&t.rally.server===this.side&&(A=t.ball.px+s*.3,r=Math.min(t.ball.py,1.05),a=t.ball.pz+i*.06);let o=0,c=0,l=0,u=0;if(this.swingT>=0){let m=this.swingDir*(i>0?1:-1),C=this.swingT;if(C<.09){let f=1-uA(C/.09);o=m*.15*f,c=-.1*f,l=i*.25*f,u=.6*f*this.swingDir}else{let f=uA(ke((C-.09)/(.3-.09),0,1)),p=ke((C-.3)/.1,0,1);o=-m*.32*f*(1-p),c=.26*f*(1-p),l=-i*.3*f*(1-p),u=-.8*f*(1-p)*this.swingDir}}let h=_i(this.swingT>=0?60:14,e);this.paddlePos.x+=(A-this.paddlePos.x)*h,this.paddlePos.y+=(r-this.paddlePos.y)*h,this.paddlePos.z+=(a-this.paddlePos.z)*h;let d=this.paddle;if(d.position.set(this.paddlePos.x+o,this.paddlePos.y+c,this.paddlePos.z+l),d.rotation.set(.15*i,(i>0?0:Math.PI)+u,(this.paddlePos.x-this.x)*i>0?-.5:.5),this.body){let m=this.body.userData;this.body.position.set(this.x,0,this.z),this.body.rotation.y=i>0?Math.PI:0,this.lean+=(ke(this.vx*.12,-.3,.3)-this.lean)*_i(8,e),m.torso.rotation.z=-this.lean*i,m.torso.rotation.x=.15,m.gear.halo.visible&&(m.halo.rotation.z+=e*2.4),this.celebrate*=Math.exp(-e*1.5);let C=this.celebrate>0?Math.abs(Math.sin(t.time*12))*.12*this.celebrate:0;this.body.position.y=C+Math.sin(t.time*3)*.01;let f=this.celebrate<0?-this.celebrate*.3:0;m.head.rotation.x=f;let p=Sg.set(this.x+s*.85,1.42+this.body.position.y,this.z),S=xg.copy(d.position).sub(p);S.y-=.1;let G=S.length(),E=yg.copy(p).addScaledVector(S,.5).sub(this.body.position);E.applyAxisAngle(zl,-this.body.rotation.y),m.arm.position.copy(E),S.normalize().applyAxisAngle(zl,-this.body.rotation.y),m.arm.quaternion.setFromUnitVectors(zl,S),m.arm.scale.set(1,G,1);let x=Math.hypot(this.vx,this.vz),y=t.time*14;m.legL.rotation.x=Math.sin(y)*Math.min(.6,x*.3),m.legR.rotation.x=-Math.sin(y)*Math.min(.6,x*.3)}}};var bd=1.38,Gg=.55,Od=.6,Vl=.4,Yl=.98,ql=.88,Kd=.16,_g=new b,wg=new b,Tg=new b,bg=new b(0,1,0),Og=.46,Kg=.86,Rg=.16,Rd=.7625-.1,Ug=.3,Pg=1.37-.12,Yo=class{constructor(e,t,i,s){this.game=e,this.input=t,this.paddle=i,this.arm=s,this.side=se,this.path=new cA(1.8,1/240),this.forecast={valid:!1,t:0,x:0,y:0,z:0,reachable:!1},this.reset()}reset(){this.x=.1,this.z=2.05,this.vx=0,this.vz=0,this.swingT=-1,this.swingKind="drive",this.swingDone=!1,this.cooldown=0,this.camLook=new b(0,.85,-1.6),this.paddlePos=new b(.3,1.05,1.6),this.backhand=!1,this.bob=0}onServeSetup(){this.swingT=-1,this.swingDone=!1}onBallStruck(){}onPointEnd(){}get hitPlaneZ(){return this.z-Gg}update(e){let t=this.game,i=this.input,s=t.rally,A=0,r=0;i.isDown("KeyA")&&(A-=1),i.isDown("KeyD")&&(A+=1),i.isDown("KeyW")&&(r-=1),i.isDown("KeyS")&&(r+=1);let a=Math.hypot(A,r)||1,o=3.3,c=A/a*o,l=r/a*o,u=_i(14,e);this.vx+=(c-this.vx)*u,this.vz+=(l-this.vz)*u,this.x+=this.vx*e,this.z+=this.vz*e;let d=(s.phase==="serve"||s.phase==="toss")&&s.server===se?1.37+.52:1.37+.1;this.x<-1.8&&(this.x=-1.8,this.vx=0),this.x>1.8&&(this.x=1.8,this.vx=0),this.z<d&&(this.z=d,this.vz=Math.max(0,this.vz)),this.z>3.3&&(this.z=3.3,this.vz=0);let m=i.wasPressed("Space")||i.mousePressed[0]||i.mousePressed[2],C=i.isDown("ShiftLeft")||i.isDown("ShiftRight")||i.mouseDown[2]||i.mousePressed[2];if(s.phase==="serve"&&s.server===se?(t.holdBall(se,this.x+.12,1.1,this.z-.5),m&&t.canServe()&&t.toss(se)):m&&this.cooldown<=0&&(this.swingT=0,this.swingDone=!1,this.swingKind=C?"chop":"drive",this.cooldown=.34,t.audio.whoosh(.8)),this.cooldown-=e,this.updateForecast(),this.swingT>=0){let f=this.swingT;this.swingT+=e,this.swingDone||(f<.09&&this.swingT>=.09?this.tryContact(!1):this.swingT>.09&&this.swingT<.09+.14?this.tryContact(!0):this.swingT>=.09+.14&&(this.swingDone=!0)),this.swingT>.3+.12&&(this.swingT=-1)}this.animate(e)}updateForecast(){let e=this.game,t=e.rally,i=this.forecast;if(i.valid=!1,t.phase!=="play"||t.lastHitter!=="ai")return;let s=this.hitPlaneZ;if(e.ball.pz>s+Vl)return;let A=zo(e.ball,this.path,1.6),r=t.bounces[se]>0;for(let a=1;a<A.n;a++){if(A.ev[a]&1&&A.z[a]>0){if(r)return;r=!0}if(r&&A.z[a]>=s){i.valid=!0,i.t=a*A.dt,i.x=A.x[a],i.y=A.y[a],i.z=A.z[a];let o=i.x-this.x;i.reachable=o<=Yl&&o>=-ql&&i.y>.7&&i.y<2;return}}}tryContact(e){let t=this.game,i=t.rally,s=t.ball;if(i.phase==="toss"&&i.server===se){let m=s.px-this.x,C=s.pz-this.hitPlaneZ;if(Math.abs(m)>.7||Math.abs(C)>.6)return;let f=ke(1-Math.max(0,Math.abs(s.py-1.04)-.05)/.35,.1,1);s.vy>0&&(f*=.8),this.swingDone=!0,this.play(f,f>=.9?"PERFECT SERVE":null,!0);return}if(i.phase!=="play"||i.lastHitter===se||i.bounces[se]===0&&s.pz>0&&s.pz<=1.37&&Math.abs(s.px)<=.7625+.02)return;let A=s.pz-this.hitPlaneZ,r=s.px-this.x;if(!(A>-Od&&A<Vl&&r<Yl&&r>-ql&&s.py>.68&&s.py<2.05)){!e&&A>=Vl&&A<1.2&&s.vz>0&&(this.swingDone=!0,t.onWhiff(se,"LATE!"));return}this.swingDone=!0;let c=1-Math.max(0,Math.abs(A)-Kd)/(Od-Kd+.05);e&&(c*=.6);let l=Math.min(Math.abs(r-.33),Math.abs(r+.3)),u=1-.3*ke((l-.14)/.5,0,1),h=ke(c*u,.08,1),d=null;h<.45&&(d=A<0?"EARLY":"LATE"),this.play(h,d,!1)}steer(){let e=this.input;return{side:(e.isDown("KeyD")?1:0)-(e.isDown("KeyA")?1:0),power:(e.isDown("KeyW")?1:0)-(e.isDown("KeyS")?1:0)}}play(e,t,i){let s=this.game,A=s.ball,r=this.swingKind==="chop",{side:a,power:o}=this.steer(),c={kind:r?"chop":"drive",serve:i,quality:e,label:t,margin:.02,vyErr:0,power:o},l=a*Og,u=-(Kg+o*Rg);i?(c.kind=r?"chop":"serve",c.speed=(r?ti(4.3,6,e):ti(4.6,7.6,e))*(1+.2*o),c.top=r?-(160+240*e):60+200*e+Math.max(0,o)*120,u=-(.9+o*.25)):r?(c.speed=ti(5.4,8.6,e)*(1+.2*o),c.top=-(200+240*e)):e>=.82&&A.py>1.1?(c.kind="smash",c.speed=18.5+4*(e-.82)/.18+(o>0?1.5:0),c.top=150):(c.speed=ti(7.2,14.8,Math.pow(e,1.2))*(o>0?1.28:o<0?.76:1),c.top=o>0?300+260*e:o<0?60+80*e:140+200*e,o>0&&(c.kind="topspin")),c.side=ke(-this.vx*60,-200,200);let h=.02+Math.pow(1-e,1.6)*.4;if(l+=qt()*h*.7,u+=qt()*h,!i){let m=hA(A)/400*.3*(1-.75*e)*(r?.4:1);u-=m,c.vyErr=(qt()*Math.pow(1-e,2)*.6*(9/c.speed)+Math.min(0,m)*.8)*(e>=.45?.5:1)}e>=.45&&(l=ke(l,-Rd,Rd),u=ke(u,-Pg,-Ug)),c.tx=l,c.tz=u,s.strike(se,c)}animate(e){let t=this.game,i=t.rally,s=this.forecast,A=this.x+.3,r=1.1,a=this.z-.5,o=!1;if(s.valid){let _=ke(1-(s.t-.12)/.55,0,1),R=ke(s.x,this.x-ql,this.x+Yl),O=ke(s.y,.75,1.85);o=R<this.x-.02,A=ti(A,R,_),r=ti(r,O,_),a=ti(a,this.hitPlaneZ+.02,_)}else i.phase==="serve"&&i.server===se?(A=this.x+.36,r=1.03,a=this.z-.5):i.phase==="toss"&&i.server===se&&(A=t.ball.px+.05,r=ke(t.ball.py,.9,1.1),a=this.hitPlaneZ+.05);this.swingT<0&&(this.backhand=o);let c=this.backhand?-1:1,l=0,u=0,h=0,d=0,m=0;if(this.swingT>=0){let _=this.swingT,R=this.swingKind==="chop";if(_<.09){let O=1-uA(_/.09);l=c*.2*O,u=(R?.15:-.12)*O,h=.28*O,d=c*.7*O}else{let O=uA(ke((_-.09)/(.3-.09),0,1)),D=ke((_-.3)/.12,0,1),T=O*(1-D);l=-c*.38*T,u=(R?-.18:.3)*T,h=-.32*T,d=-c*.9*T,m=(R?.6:-.5)*T}}let C=_i(this.swingT>=0?70:16,e);this.paddlePos.x+=(A-this.paddlePos.x)*C,this.paddlePos.y+=(r-this.paddlePos.y)*C,this.paddlePos.z+=(a-this.paddlePos.z)*C;let f=this.paddle;if(f.position.set(this.paddlePos.x+l,this.paddlePos.y+u,this.paddlePos.z+h),f.rotation.set(-.25+m,d+(this.backhand?.25:-.25),this.backhand?.75:-.55),this.arm){let _=_g.set(this.x+.24,bd-.42,this.z+.12),R=wg.set(0,-.15,0).applyEuler(f.rotation).add(f.position),O=Tg.copy(R).sub(_),D=O.length();this.arm.position.copy(_).addScaledVector(O,.5),this.arm.quaternion.setFromUnitVectors(bg,O.normalize()),this.arm.scale.set(1,D,1)}let p=Math.hypot(this.vx,this.vz);this.bob+=e*p*3.2;let S=t.world.camera,G=t.shake;S.position.set(this.x+G.x,bd+Math.sin(this.bob*2)*.012*Math.min(1,p)+G.y,this.z);let E=t.ball,x=ti(this.x*.3,E.px,.18),y=ti(.82,E.py,.12),w=ti(-1.5,E.pz,.08),g=_i(5,e);this.camLook.x+=(x-this.camLook.x)*g,this.camLook.y+=(y-this.camLook.y)*g,this.camLook.z+=(w-this.camLook.z)*g;let I=t.settings.fov+t.intensity*5+G.fov;Math.abs(S.fov-I)>.02&&(S.fov=I,S.updateProjectionMatrix()),S.up.set(Math.sin(G.roll-this.vx*.008),1,0).normalize(),S.lookAt(this.camLook)}};var Lg=`
attribute float aAlpha; attribute float aSize; attribute vec3 aColor;
varying float vA; varying vec3 vC;
uniform float uScale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vA = aAlpha; vC = aColor;
  // max(): points level with or behind the camera would otherwise divide by
  // ~0 and produce giant or NaN sizes.
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.05), 1.5, 256.0);
  gl_Position = projectionMatrix * mv;
}`,Dg=`
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = vA * (1.0 - r) * (1.0 - r);
  gl_FragColor = vec4(vC * a, 1.0);
}`;function Ud(){return new et({uniforms:{uScale:{value:800}},vertexShader:Lg,fragmentShader:Dg,transparent:!0,blending:Gi,depthWrite:!1})}var Mr=class{constructor(e,t){this.cap=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.alpha=new Float32Array(t),this.size=new Float32Array(t),this.size0=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t);let i=new It;this.aPos=new lt(this.pos,3).setUsage(nn),this.aCol=new lt(this.col,3).setUsage(nn),this.aAlpha=new lt(this.alpha,1).setUsage(nn),this.aSize=new lt(this.size,1).setUsage(nn),i.setAttribute("position",this.aPos),i.setAttribute("aColor",this.aCol),i.setAttribute("aAlpha",this.aAlpha),i.setAttribute("aSize",this.aSize),i.setDrawRange(0,0),this.mat=Ud(),this.points=new mn(i,this.mat),this.points.frustumCulled=!1,e.add(this.points),this._c=new de}burst(e,t,i,s,A={}){let r=A.speed??3,a=this._c.set(A.color??16777215),o=A.bright??2,c=A.dx??0,l=A.dy??0,u=A.dz??0;for(let h=0;h<s;h++){let d=this.n;d>=this.cap?d=Math.random()*this.cap|0:this.n++;let m=Math.random()*2-1,C=Math.random()*2-1,f=Math.random()*2-1,p=Math.sqrt(m*m+C*C+f*f)||1,S=r*(.35+Math.random()*.65);m=m/p*S+c*(.5+Math.random()),C=C/p*S+l*(.5+Math.random()),f=f/p*S+u*(.5+Math.random()),this.pos[d*3]=e,this.pos[d*3+1]=t,this.pos[d*3+2]=i,this.vel[d*3]=m,this.vel[d*3+1]=C,this.vel[d*3+2]=f;let G=A.jitter??.06,E=this._c.clone().offsetHSL((Math.random()-.5)*G,0,0);this.col[d*3]=E.r*o,this.col[d*3+1]=E.g*o,this.col[d*3+2]=E.b*o;let x=(A.life??.45)*(.5+Math.random()*.8);this.life[d]=x,this.maxLife[d]=x,this.size0[d]=(A.size??.025)*(.6+Math.random()*.8),this.grav[d]=A.gravity??4}a.set(16777215)}update(e,t){this.mat.uniforms.uScale.value=t;let i=Math.exp(-e*2.2),s=0;for(;s<this.n;){if(this.life[s]-=e,this.life[s]<=0){let a=--this.n;s!==a&&this._move(a,s);continue}let A=s*3;this.vel[A]*=i,this.vel[A+1]=this.vel[A+1]*i-this.grav[s]*e,this.vel[A+2]*=i,this.pos[A]+=this.vel[A]*e,this.pos[A+1]+=this.vel[A+1]*e,this.pos[A+2]+=this.vel[A+2]*e,this.pos[A+1]<.01&&(this.pos[A+1]=.01,this.vel[A+1]*=-.4);let r=this.life[s]/this.maxLife[s];this.alpha[s]=r,this.size[s]=this.size0[s]*(.4+.6*r),s++}this.points.geometry.setDrawRange(0,this.n),this.n>0&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aSize.needsUpdate=!0)}_move(e,t){for(let i=0;i<3;i++)this.pos[t*3+i]=this.pos[e*3+i],this.vel[t*3+i]=this.vel[e*3+i],this.col[t*3+i]=this.col[e*3+i];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.size0[t]=this.size0[e],this.grav[t]=this.grav[e]}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}},Sr=class{constructor(e,t){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.alpha=new Float32Array(t),this.size=new Float32Array(t),this.age=new Float32Array(t).fill(99),this.head=0;let i=new It;this.aPos=new lt(this.pos,3).setUsage(nn),this.aCol=new lt(this.col,3).setUsage(nn),this.aAlpha=new lt(this.alpha,1).setUsage(nn),this.aSize=new lt(this.size,1).setUsage(nn),i.setAttribute("position",this.aPos),i.setAttribute("aColor",this.aCol),i.setAttribute("aAlpha",this.aAlpha),i.setAttribute("aSize",this.aSize),this.mat=Ud(),this.points=new mn(i,this.mat),this.points.frustumCulled=!1,e.add(this.points),this.last=new b,this.hasLast=!1,this.color=new de(61695)}reset(){this.hasLast=!1,this.age.fill(99)}push(e,t,i,s){for(let u=0;u<this.cap;u++)this.age[u]+=s;if(!this.hasLast){this.last.set(e,t,i),this.hasLast=!0;return}let A=e-this.last.x,r=t-this.last.y,a=i-this.last.z,o=Math.sqrt(A*A+r*r+a*a);if(o>1){this.last.set(e,t,i);return}let c=.011,l=Math.min(24,Math.floor(o/c));for(let u=1;u<=l;u++){let h=u*c/o,d=this.head;this.head=(this.head+1)%this.cap,this.pos[d*3]=this.last.x+A*h,this.pos[d*3+1]=this.last.y+r*h,this.pos[d*3+2]=this.last.z+a*h,this.age[d]=s*(1-h)}if(l>0){let u=l*c/o;this.last.set(this.last.x+A*u,this.last.y+r*u,this.last.z+a*u)}}update(e,t,i,s){this.mat.uniforms.uScale.value=s;let A=this.color;for(let r=0;r<this.cap;r++){let a=1-this.age[r]/e;if(a<=0){this.alpha[r]=0,this.size[r]=0;continue}this.alpha[r]=a*a*.9,this.size[r]=t*(.35+.65*a),this.col[r*3]=A.r*i,this.col[r*3+1]=A.g*i,this.col[r*3+2]=A.b*i}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aSize.needsUpdate=!0}},qo=class{constructor(e){this.items=[];let t=new ts(.82,1,48);for(let i=0;i<8;i++){let s=new gt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:si,blending:Gi}),A=new _e(t,s);A.visible=!1,e.add(A),this.items.push({mesh:A,t:0,life:.4,r0:.02,r1:.4,flat:!1})}this.i=0}spawn(e,t,i,s,A=.4,r=.35,a=!1,o=2.5){let c=this.items[this.i];this.i=(this.i+1)%this.items.length,c.mesh.position.set(e,t,i),c.mesh.material.color.copy(Dt(s,o)),c.t=0,c.life=r,c.r1=A,c.flat=a,c.mesh.visible=!0,a&&c.mesh.rotation.set(-Math.PI/2,0,0)}clear(){for(let e of this.items)e.mesh.visible=!1}update(e,t){for(let i of this.items){if(!i.mesh.visible)continue;i.t+=e;let s=i.t/i.life;if(s>=1){i.mesh.visible=!1;continue}let A=1-Math.pow(1-s,3),r=i.r0+(i.r1-i.r0)*A;i.mesh.scale.set(r,r,r),i.mesh.material.opacity=(1-s)*(1-s),i.flat||i.mesh.quaternion.copy(t.quaternion)}}},Jo=class{constructor(){this.trauma=0,this.t=0,this.x=0,this.y=0,this.roll=0,this.fov=0}add(e){this.trauma=Math.min(1,this.trauma+e)}update(e,t){this.t+=e,this.trauma=Math.max(0,this.trauma-e*3.2);let i=t?this.trauma*this.trauma:0,s=this.t*55;this.x=i*.035*(Math.sin(s*1.1)+Math.sin(s*2.3+1.7)*.5),this.y=i*.03*(Math.sin(s*1.7+.3)+Math.sin(s*2.9+2.1)*.5),this.roll=i*.035*Math.sin(s*1.3+4),this.fov=i*4}};var Pd=10,xr=new Float64Array(4),Xo=class{constructor(e,t=[],i=2.5,s=240){this.objects=e,this.extras=t,this.stride=1+e.length*Pd+t.length,this.cap=Math.ceil(i*s),this.buf=new Float64Array(this.cap*this.stride),this.minStep=1/s,this.clear()}clear(){this.count=0,this.head=0,this.lastT=-1/0}record(e){if(e-this.lastT<this.minStep*.98)return;this.lastT=e;let t=this.buf,i=this.head*this.stride;t[i++]=e;for(let s of this.objects){let A=s.position,r=s.quaternion,a=s.scale;t[i++]=A.x,t[i++]=A.y,t[i++]=A.z,t[i++]=r.x,t[i++]=r.y,t[i++]=r.z,t[i++]=r.w,t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}for(let s of this.extras)t[i++]=s.get();this.head=(this.head+1)%this.cap,this.count<this.cap&&this.count++}_at(e){return(this.head-this.count+e+this.cap)%this.cap*this.stride}get startTime(){return this.count?this.buf[this._at(0)]:0}get endTime(){return this.count?this.buf[this._at(this.count-1)]:0}apply(e){if(!this.count)return;let t=this.buf,i=0,s=this.count-1;for(;i<s;){let h=i+s+1>>1;t[this._at(h)]<=e?i=h:s=h-1}let A=this._at(i),r=this._at(Math.min(this.count-1,i+1)),a=t[A],o=t[r],c=o>a?Math.min(1,Math.max(0,(e-a)/(o-a))):0,l=h=>t[A+h]+(t[r+h]-t[A+h])*c,u=1;for(let h of this.objects)h.position.set(l(u),l(u+1),l(u+2)),gi.slerpFlat(xr,0,t,A+u+3,t,r+u+3,c),h.quaternion.set(xr[0],xr[1],xr[2],xr[3]),h.scale.set(l(u+7),l(u+8),l(u+9)),u+=Pd;for(let h of this.extras)h.set(l(u++))}};var yr={speed:[["slow","Slow",6.5],["medium","Medium",9.5],["fast","Fast",12.5]],spin:[["none","None"],["top","Topspin"],["back","Backspin"],["random","Random"]],place:[["left","Left"],["middle","Middle"],["right","Right"],["random","Random"]],rate:[["relaxed","Relaxed",2.6],["steady","Steady",1.9],["rapid","Rapid",1.35]]},Ng={speed:"medium",spin:"random",place:"random",rate:"steady"},Ld=(n,e)=>n.find(t=>t[0]===e)||n[0],Jl=-1.95,Dd=.36,Fg=1,Nd=n=>({x:Math.sin(n)*Dd,y:Fg,z:Jl+Math.cos(n)*Dd}),Zo=class{constructor(e,t){this.game=e,this.mesh=t,this.side="ai",this.opts={...Ng},this.x=0,this.z=Jl,this.resetCounts(),this.reset()}resetCounts(){this.counts={perfect:0,great:0,good:0,early:0,late:0,miss:0},this.fed=0,this.returned=0,this.landed=0,this.streak=0,this.bestStreak=0}reset(){this.nextFeed=this.game.time+1.4,this.fedAt=-1,this.judged=!0,this.aimYaw=0,this.kick=0,this.flash=0}setOptions(e){Object.assign(this.opts,e)}onServeSetup(){}onPointEnd(){}onBallStruck(){}update(e){let t=this.game,i=t.rally;if(i.phase==="serve"){let r=Nd(this.aimYaw);t.holdBall("ai",r.x,r.y,r.z)}!this.judged&&i.lastHitter==="ai"&&t.ball.pz>t.human.z+.3&&this.judge("miss");let s=t.time-this.fedAt,A=this.judged||s>4;t.time>=this.nextFeed&&A&&(this.judged||this.judge("miss"),this.feed()),this.animate(e)}feed(){let e=this.game,t=this.opts,i=Ld(yr.speed,t.speed)[2],s=t.spin==="random"?["none","top","back"][Math.random()*3|0]:t.spin,A=s==="top"?ze(300,420):s==="back"?-ze(250,340):ze(-30,30),r=t.place==="left"?-.45:t.place==="right"?.45:t.place==="middle"?0:ze(-.55,.55),a=ze(.8,1.1);this.aimYaw=Math.atan2(r,a-Jl);let o=Nd(this.aimYaw),c=Vo(o.x,o.y,o.z,r+ze(-.05,.05),a,{speed:i*ze(.95,1.05),top:A,side:0,dirSign:1,serve:!1,margin:.04},this._sol||(this._sol={})),l=e.ball;l.px=o.x,l.py=o.y,l.pz=o.z,l.vx=c.vx,l.vy=c.vy,l.vz=c.vz,l.wx=c.wx,l.wy=c.wy,l.wz=c.wz;let u=e.freshRally("ai");u.phase="play",u.lastHitter="ai",u.hits=1,u.lastHitTime=e.time,e.rally=u,e.trail.reset(),e.audio.machine(),this.fed++,this.fedAt=e.time,this.judged=!1,this.nextFeed=e.time+Ld(yr.rate,t.rate)[2],this.kick=1,this.flash=1}judge(e){this.judged||(this.judged=!0,this.counts[e]++,this.streak=e==="perfect"?this.streak+1:0,this.bestStreak=Math.max(this.bestStreak,this.streak),e==="miss"&&this.game.ui.pop("MISS","bad"),this.game.ui.updatePractice(this))}onPlayerHit(e,t){this.returned++,this.judge(e>=.9?"perfect":e>=.7?"great":e>=.45?"good":t==="EARLY"?"early":"late")}onPlayerReturnLanded(){this.landed++,this.game.ui.updatePractice(this)}animate(e){let t=this.mesh.userData;t.head.rotation.y+=(this.aimYaw-t.head.rotation.y)*_i(10,e),this.kick=Math.max(0,this.kick-e*6),t.nozzle.position.z=t.nozzleZ-.05*this.kick,this.flash=Math.max(0,this.flash-e*4),t.glowMat.color.copy(t.glowBase).multiplyScalar(.8+1.6*this.flash)}};var kg=1/600,Xl=[{tag:"Red",color:"#ff3355",hex:16724821},{tag:"Blue",color:"#3d8bff",hex:4033535}],Zl=[["side","Side view"],["near","Behind bot 1"],["far","Behind bot 2"],["top","Overhead"]],jo=new b,$o=new b,Fd=new Proxy({},{get:()=>()=>{}}),Wg=new de,cI=new de,ec=new b,kd=new gi,Ir=new b,tc=new b,Hg=new b(0,1,0),Qg=new b(1,0,0),Wd=new b(0,0,1),vr={top:new de(16738842),back:new de(3114751),none:new de(14211296)},jl=[new de(16777215),new de(qe.cyan),new de(qe.magenta),new de(qe.yellow),new de(qe.orange)];function zg(n,e){let t=jl.length-1,i=ke(n,0,1)*t,s=Math.min(t-1,Math.floor(i));return e.copy(jl[s]).lerp(jl[s+1],i-s)}var ic=class{constructor(e,t,i,s,A){this.world=e,this.audio=t,this.ui=i,this.input=s,this.settings=A,this.ball=lA(),this.time=0,this.timeScale=1,this.slowTimer=0,this.hitStop=0,this.replay=null,this.replayQueued=null,this.intensity=0,this.cheer=0,this.mode="demo",this.impact=null,this.state="play",this.paused=!1,this.rally=this.freshRally(se);let r=e.scene;this.playerPaddle=ko(14162748),Rl(this.playerPaddle),this.aiPaddle=ko(1447454,qe.magenta),r.add(this.playerPaddle,this.aiPaddle),this.aiBody=Ul(qe.magenta),this.demoBody=Ul(qe.cyan),r.add(this.aiBody,this.demoBody);let a=Ai[A.quality];this.sparks=new Mr(r,Math.round(900*a.particles)),this.trail=new Sr(r,a.trail*2),this.waves=new qo(r),this.shake=new Jo,this.playerArm=yd(),Rl(this.playerArm),this.playerArm.visible=!1,r.add(this.playerArm),this.human=new Yo(this,s,this.playerPaddle,this.playerArm),this.profile=Bn[A.difficulty]||Bn[0],this.aiCtl=new dA(this,"ai",this.profile,this.aiPaddle,this.aiBody),this.demoCtl=new dA(this,se,Bn[3],this.playerPaddle,this.demoBody),this.nearPaddle=ko(1447454,qe.cyan),this.nearPaddle.visible=!1,r.add(this.nearPaddle),this.nearCtl=new dA(this,se,Bn[0],this.nearPaddle,this.demoBody),this.sides=null,this.watchCam=0,this.fast=!1,this.machineMesh=Sd(),this.machineMesh.visible=!1,r.add(this.machineMesh),this.machine=new Zo(this,this.machineMesh),this.controllers={[se]:this.demoCtl,ai:this.aiCtl},this.stats=this.freshStats(),this.demoAngle=0,this.recorder=e.ball?this.makeRecorder():null,this.startDemo()}makeRecorder(){let e=this.world,t=e.camera,i=this.aiBody.userData,s=this.demoBody.userData,A=[t,e.ball,e.ballHalo,e.ballLight,e.shadow,e.spinBand,this.playerPaddle,this.playerArm,this.aiPaddle,this.aiBody,i.torso,i.head,i.legL,i.legR,i.arm,i.halo,this.nearPaddle,this.demoBody,s.torso,s.head,s.legL,s.legR,s.arm,s.halo],r=e.spinBandColor,a=[{get:()=>t.fov,set:o=>{t.fov=o,t.updateProjectionMatrix()}},{get:()=>e.shadow.material.opacity,set:o=>{e.shadow.material.opacity=o}},{get:()=>r.r,set:o=>{r.r=o}},{get:()=>r.g,set:o=>{r.g=o}},{get:()=>r.b,set:o=>{r.b=o}}];return new Xo(A,a,2.5)}freshRally(e){return{phase:"serve",server:e,lastHitter:null,isServe:!1,serveOwn:0,netTouch:!1,bounces:{[se]:0,ai:0},hits:0,deadTimer:0,lastHitTime:0,landTime:-1,netTime:-1,tossTime:0,serveReadyAt:0}}freshStats(){return{longest:0,perfects:0,smashes:0,smashesLanded:0,hits:0,fastest:0,won:0,lost:0,aces:0,servePts:0,serveWon:0}}rebuildEffects(){let e=this.world.scene,t=Ai[this.settings.quality];for(let i of[this.sparks,this.trail])e.remove(i.points),i.points.geometry.dispose(),i.points.material.dispose();this.sparks=new Mr(e,Math.round(900*t.particles)),this.trail=new Sr(e,t.trail*2)}resetMoment(){this.hitStop=0,this.slowTimer=0,this.replay=null,this.replayQueued=null,this.recorder&&this.recorder.clear(),this.ui.setReplay(!1),this.audio.setMuffle(!1)}useOpponent(){this.controllers["ai"]=this.aiCtl,this.aiCtl.vary=!1,this.aiBody.visible=!0,this.aiPaddle.visible=!0,this.machineMesh.visible=!1,this.playerPaddle.visible=!0,this.nearPaddle.visible=!1,this.setFast(!1),this.ui.setPracticeHUD(!1),this.ui.setWatchHUD(!1)}startDemo(){this.mode="demo",this.state="play",this.paused=!1,this.resetMoment(),this.useOpponent();let e=[Bn[2],Bn[3],Bn[4]];this.demoCtl.setProfile(e[Math.random()*3|0]),this.aiCtl.setProfile(e[Math.random()*3|0]),this.setOpponentLook(this.aiCtl.p),Br(this.demoBody,this.demoCtl.p.look||{}),gr(this.demoBody,this.demoCtl.p.hex),this.controllers[se]=this.demoCtl,this.demoBody.visible=!0,this.playerArm.visible=!1,this.match=new us(99,Math.random()<.5?se:"ai"),this.aiCtl.reset(),this.demoCtl.reset(),this.audio.setMusic("menu"),this.newPoint()}startMatch(e,t){this.mode="match",this.state="play",this.paused=!1,this.resetMoment(),this.useOpponent(),this.oppIndex=e,this.profile=Bn[e],this.aiCtl.setProfile(this.profile),this.setOpponentLook(this.profile),this.controllers[se]=this.human,this.demoBody.visible=!1,this.playerArm.visible=!0,this.human.reset(),this.aiCtl.reset(),this.match=new us(t,Math.random()<.5?se:"ai"),this.stats=this.freshStats(),this.intensity=0,this.sparks.clear(),this.audio.setMusic("game"),this.ui.updateHUD(this),this.drawScreen(),this.newPoint(),this.ui.banner(`${this.profile.bot}`,`${this.profile.name} \xB7 ${this.matchLabel()}`,"intro",2.2),this.rally.serveReadyAt=this.time+1.6}startPractice(e){this.mode="practice",this.state="play",this.paused=!1,this.resetMoment(),this.controllers[se]=this.human,this.controllers["ai"]=this.machine,this.aiBody.visible=!1,this.aiPaddle.visible=!1,this.demoBody.visible=!1,this.nearPaddle.visible=!1,this.playerPaddle.visible=!0,this.setFast(!1),this.ui.setWatchHUD(!1),this.machineMesh.visible=!0,this.world.theme&&this.machineMesh.userData.glowBase.setHex(this.world.theme.c2),this.playerArm.visible=!0,this.human.reset(),this.machine.setOptions(e),this.machine.resetCounts(),this.machine.reset(),this.intensity=0,this.sparks.clear(),this.rally=this.freshRally("ai"),this.trail.reset(),this.audio.setMusic("game"),this.ui.setPracticeHUD(!0),this.ui.updatePractice(this.machine),this.ui.hint(""),this.ui.banner("PRACTICE","The machine feeds, you work on your timing","intro",1.8)}startWatch(e,t,i){this.mode="watch",this.state="play",this.paused=!1,this.resetMoment(),this.useOpponent();let s=dt[e],A=dt[t],r=e===t,a=(o,c)=>({index:c?t:e,bot:o.bot,name:r?`${o.bot} (${Xl[c].tag})`:o.bot,color:r?Xl[c].color:o.color,hex:r?Xl[c].hex:o.hex,profile:o});this.sides={[se]:a(s,0),ai:a(A,1)},this.watchLength=i,this.timeScale=1,this._camInit=!1,this.nearCtl.setProfile(s),this.aiCtl.setProfile(A),this.nearCtl.vary=!0,this.aiCtl.vary=!0,this.profile=A;for(let[o,c,l]of[[se,this.demoBody,this.nearPaddle],["ai",this.aiBody,this.aiPaddle]]){let u=this.sides[o];Br(c,u.profile.look||{}),gr(c,u.hex),l.userData.baseGlow.copy(Dt(u.hex,.9)),l.userData.ringMat.color.copy(l.userData.baseGlow)}this.controllers[se]=this.nearCtl,this.demoBody.visible=!0,this.nearPaddle.visible=!0,this.playerPaddle.visible=!1,this.playerArm.visible=!1,this.nearCtl.reset(),this.aiCtl.reset(),this.match=new us(i,Math.random()<.5?se:"ai"),this.newGameForm(),this.wstats=this.freshWatchStats(),this.intensity=0,this.cheer=0,this.sparks.clear(),this.audio.setMusic("game"),this.ui.setWatchHUD(!0,this),this.ui.updateHUD(this),this.drawScreen(),this.newPoint(),this.ui.banner(`${this.sides[se].name}  vs  ${this.sides["ai"].name}`,this.matchLabel(),"intro",2.2),this.rally.serveReadyAt=this.time+1.6}newGameForm(){this.nearCtl.setForm(qt()*wi.sd),this.aiCtl.setForm(qt()*wi.sd)}freshWatchStats(){let e=t=>({[se]:t,ai:t});return{longest:0,points:0,hits:e(0),fastest:e(0),smashes:e(0),smashesLanded:e(0),aces:e(0),pointsWon:e(0)}}sideName(e){return this.mode==="watch"?this.sides[e].name:e===se?"YOU":this.profile.bot}sideColor(e){return this.mode==="watch"?this.sides[e].color:e===se?"#00f0ff":this.profile.color}setFast(e){if(e!==this.fast)if(this.fast=e,e){let t=this.replay||this.replayQueued;this.resetMoment(),this._realUI=this.ui,this._realAudio=this.audio,this.ui=Fd,this.audio=Fd,t&&t.announce()}else this.ui=this._realUI,this.audio=this._realAudio,this.sparks.clear(),this.waves.clear(),this.trail.reset()}botName(e="ai"){let t=this.mode==="watch"?this.sides[e].bot:this.profile.bot;return t[0]+t.slice(1).toLowerCase()}matchLabel(){let e=this.match.gamesToWin;return e===1?"Single game to 11":`Best of ${e*2-1}`}setOpponentLook(e){Br(this.aiBody,e.look||{}),gr(this.aiBody,e.hex),this.aiPaddle.userData.baseGlow.copy(Dt(e.hex,.9)),this.aiPaddle.userData.ringMat.color.copy(this.aiPaddle.userData.baseGlow)}newPoint(){let e=this.match.server;this.rally=this.freshRally(e),this.rally.serveReadyAt=this.time+.35,this.trail.reset();let t=this.controllers[e];this.ball.vx=this.ball.vy=this.ball.vz=0,this.ball.wx=this.ball.wy=this.ball.wz=0,this.controllers[se].onServeSetup(),this.controllers["ai"].onServeSetup(),this.ball.px=t.x,this.ball.py=1.05,this.ball.pz=t.z-os(e)*.4,this.mode==="watch"&&this.ui.updateHUD(this),this.mode==="match"&&(this.ui.updateHUD(this),e===se?this.ui.hint("Your serve \u2014 <b>SPACE</b> to toss, <b>SPACE</b> again to hit as it drops"):this.ui.hint(""))}canServe(){return this.rally.phase==="serve"&&this.time>=this.rally.serveReadyAt&&!this.paused}holdBall(e,t,i,s){let A=this.ball;A.px=t,A.py=i,A.pz=s,A.vx=A.vy=A.vz=0,A.wx=A.wy=A.wz=0}toss(e){let t=this.ball;t.vy=2.45,t.vx=0,t.vz=0,this.rally.phase="toss",this.rally.tossTime=this.time,this.audio.toss(),e===se&&this.mode==="match"&&this.ui.hint("")}strike(e,t){let i=this.rally,s=this.ball,A=(this.mode==="match"||this.mode==="practice")&&e===se,r=this.mode==="watch";if(i.phase==="toss"){if(e!==i.server)return;t.serve=!0,i.isServe=!0,i.serveOwn=0,i.netTouch=!1}else if(i.phase==="play"){if(i.lastHitter===e)return;if(i.bounces[e]===0&&this.mode!=="practice"){let E=Math.abs(s.px)<=.7625&&Math.abs(s.pz)<=1.37;this.endPoint(E?ui(e):e,E?"volley":"out");return}i.isServe=!1}else return;let a=-os(e),o=Vo(s.px,s.py,s.pz,t.tx,t.tz,{speed:t.speed,top:t.top,side:t.side,dirSign:a,serve:!!t.serve,margin:t.margin??.02},this._sol||(this._sol={}));s.vx=o.vx,s.vy=o.vy+(t.vyErr||0),s.vz=o.vz,s.wx=o.wx,s.wy=o.wy,s.wz=o.wz,i.phase="play",i.lastHitter=e,i.lastKind=t.kind,i.bounces[se]=0,i.bounces["ai"]=0,i.hits++,i.lastHitTime=this.time,this.controllers[se].onBallStruck(e),this.controllers["ai"].onBallStruck(e);let c=t.quality??.6,l=Math.hypot(s.vx,s.vy,s.vz),u=ke((l-5)/14,0,1),h=t.kind==="smash",d=c>=.9,m=e==="ai"||!A;if(r){let E=this.wstats;if(E.hits[e]++,E.fastest[e]=Math.max(E.fastest[e],l),h&&E.smashes[e]++,this.fast)return}this.audio.hit(u,A?c:.5,m&&!h,h,t.kind==="chop"),!A&&this.mode==="match"&&this.audio.whoosh(.4);let C=qe.cyan;t.kind==="chop"&&(C=qe.purple),d&&(C=qe.yellow),h&&(C=qe.orange),e==="ai"&&(C=h?qe.orange:this.aiCtl.p.hex),r&&(C=h?qe.orange:this.sides[e].hex);let f=Ai[this.settings.quality].particles,p=Math.round((12+55*u+(d?30:0)+(h?60:0))*f*(m?.6:1)),S=A?.4:1;this.sparks.burst(s.px,s.py,s.pz,p,{color:C,speed:2+u*5+(h?4:0),life:.35+u*.3,size:(.02+u*.015)*S,dx:s.vx*(A?.3:.12),dy:s.vy*.12,dz:s.vz*(A?.3:.12),bright:2.5});let G=r?.5:1;if(!A&&(u>.3||d||h)&&this.waves.spawn(s.px,s.py,s.pz,C,(.2+u*.45+(h?.4:0))*G,.28),h&&(A?this.sparks.burst(s.px+s.vx*.12,s.py+s.vy*.12,s.pz+s.vz*.12,Math.round(40*f),{color:qe.orange,speed:5,life:.5,size:.02,dx:s.vx*.2,dy:s.vy*.2,dz:s.vz*.2,bright:3}):this.waves.spawn(s.px,s.py,s.pz,16777215,1.1*G,.45,!1,1.5)),A&&this.impact){let E=t.power||0,x=(h?1.6:E>0?1.3:E<0?.7:1)*(.85+.3*c);this.impact.trigger(s.px,s.py,s.pz,s.vx,s.vy,s.vz,x,performance.now())}if(A){this.stats.hits++,this.stats.fastest=Math.max(this.stats.fastest,l);let E=t.label,x="ok";h?(E="SMASH!!",x="smash",this.stats.smashes++):d?(E=E||"PERFECT!",x="perfect",this.stats.perfects++):!E&&c>=.7?(E="GREAT",x="great"):!E&&c>=.45?(E="GOOD",x="good"):E&&(x="bad"),E&&this.ui.pop(E,x),this.mode==="practice"&&this.machine.onPlayerHit(c,t.label),this.hitStop=h?.08:d?.06:c>=.7?.015:0,(h||d)&&this.shake.add((h?.5:.3)+u*.3),h&&this.ui.flash("#ff7a1a",.22),(h||d)&&this.settings.slowmo&&(this.slowTimer=h?.24:.16)}else(this.mode==="match"||r)&&h&&(this.hitStop=.04,this.shake.add(.3+u*.2),this.ui.flash(r?this.sides[e].color:"#ff2bd6",.18));if(this.mode==="match"||r){let E=i.hits;r||(this.stats.longest=Math.max(this.stats.longest,E)),this.audio.rally(E),(E===6||E===10||E===15||E>=20&&E%10===0)&&(this.ui.milestone(E),E>=10&&this.audio.cheer(.3+Math.min(.5,E/40)),this.cheer=Math.min(1,this.cheer+.6)),this.ui.setRally(E,this.intensity)}}onWhiff(e,t){this.mode==="demo"||e!==se||(this.ui.pop(t,"bad"),this.mode==="practice"&&this.machine.judge("late"))}onTable(e){let t=this.rally,i=this.ball,s=e==="ai",A=Math.abs(i.vy);this.audio.bounce(A,s||this.mode==="demo");let r=this.intensity>.5?qe.magenta:qe.cyan;if(this.waves.spawn(i.px,.76+.003,i.pz,r,.12+Math.min(.2,A*.03),.3,!0,2),this.sparks.burst(i.px,.76+.01,i.pz,Math.round(6*Ai[this.settings.quality].particles),{color:r,speed:1.2,life:.25,size:.014,gravity:2}),this.mode==="practice"){if(t.phase!=="play")return;e===se&&t.lastHitter==="ai"?t.bounces[se]++:e==="ai"&&t.lastHitter===se&&!t.landed&&(t.landed=!0,this.machine.onPlayerReturnLanded());return}if(t.phase==="toss"){this.retoss();return}if(t.phase!=="play")return;let a=t.lastHitter,o=ui(a);t.isServe?e===a?t.serveOwn===0?t.serveOwn=1:this.endPoint(o,"serve-double"):t.serveOwn===0?this.endPoint(o,"serve-fault"):t.netTouch?this.letServe():(t.isServe=!1,t.bounces[o]=1,t.landTime=this.time):e===a?this.endPoint(o,"own-side"):(t.bounces[o]++,t.bounces[o]===1&&(t.landTime=this.time,o==="ai"&&t.lastKind==="smash"&&this.mode==="match"&&this.stats.smashesLanded++,t.lastKind==="smash"&&this.mode==="watch"&&this.wstats.smashesLanded[a]++),t.bounces[o]>=2&&this.endPoint(a,"double"))}onNet(){let e=this.rally,t=this.ball;this.audio.net(Math.hypot(t.vx,t.vy,t.vz)),this.sparks.burst(t.px,t.py,t.pz,Math.round(10*Ai[this.settings.quality].particles),{color:qe.magenta,speed:1.5,life:.3,size:.015}),e.phase==="play"&&(e.netTouch=!0,e.netTime=this.time,(this.mode==="match"||this.mode==="watch")&&t.py>.9125&&Math.sign(t.vz)===-os(e.lastHitter)&&this.ui.pop("NET CORD!","net"))}onFloor(){let e=this.rally;if((this.mode==="match"||this.mode==="watch"||this.time-(this._lastFloorSnd||0)>.25)&&(this.audio.floor(),this._lastFloorSnd=this.time),this.mode==="practice")return;if(e.phase==="toss"){this.retoss();return}if(e.phase!=="play")return;let t=e.lastHitter,i=ui(t);e.isServe?this.endPoint(i,e.serveOwn?"serve-out":"serve-fault"):e.bounces[i]>=1?this.endPoint(t,"winner"):this.endPoint(i,this.ball.pz*os(t)>0&&e.netTouch?"net":"out")}retoss(){let e=this.rally;e.phase="serve",e.serveReadyAt=this.time+.4,this.controllers[e.server].onServeSetup(),this.mode==="match"&&e.server===se&&(this.ui.pop("TOSS AGAIN","bad"),this.ui.hint("Your serve \u2014 <b>SPACE</b> to toss, <b>SPACE</b> again to hit as it drops"))}letServe(){let e=this.rally;e.phase="dead",e.deadTimer=1.4,e.let=!0,(this.mode==="match"||this.mode==="watch")&&(this.ui.banner("LET","Serve touched the net \u2014 replay","let",1.3),this.audio.say("Let"))}endPoint(e,t){let i=this.rally;if(i.phase==="dead")return;i.phase="dead",i.let=!1,i.deadTimer=1.7,t==="own-side"&&i.netTouch&&(t="net");let s=ui(e),A=i.hits,r=this.match.award(e);if(this.controllers[e].onPointEnd(!0),this.controllers[s].onPointEnd(!1),this.mode==="watch"){this.watchPoint(e,t,r,A);return}if(this.mode!=="match"){this.cheer=Math.min(1,this.cheer+.5),this.audio.cheer(.25+Math.min(.5,A/30)),(r.matchWon||r.gameWon)&&(this.match.over?this.match=new us(99,Math.random()<.5?se:"ai"):this.match.startNextGame());return}let a=e===se;a?this.stats.won++:this.stats.lost++,i.server===se&&(this.stats.servePts++,a&&this.stats.serveWon++),a&&A===1&&i.server===se&&(t==="winner"||t==="double")&&this.stats.aces++;let o=A>=8;this.audio.point(a,A),this.cheer=Math.min(1,this.cheer+(a?.8:.4)+(o?.3:0));let c={"serve-fault":C=>C===se?"Fault \u2014 serve must bounce on their side first":"Fault \u2014 your serve must bounce on your side first","serve-double":()=>"Fault \u2014 serve bounced twice","serve-out":C=>C===se?"Their serve missed the table":"Your serve missed the table","own-side":C=>C===se?"Their shot dropped on their own side":"Your shot dropped on your own side",double:C=>C===se?"Unreturnable!":"It got past you",winner:C=>C===se?"Clean winner!":"It got past you",out:C=>C===se?"Their shot went out":"Your shot went out",net:C=>C===se?"They hit the net":"Into the net",volley:C=>C===se?"Volley \u2014 they hit it before the bounce":"Volley \u2014 let it bounce first!"},l=c[t]?c[t](e):"";A>=6&&(l+=` \xB7 ${A}-shot rally`);let u=a?"POINT!":`${this.profile.bot} SCORES`,h=a?"win":"lose",d=r.matchWon||r.gameWon;r.matchWon?u=a?"MATCH WON!":"MATCH LOST":r.gameWon&&(u=a?"GAME!":`GAME ${this.profile.bot}`,l=`Games ${this.match.games[se]} \u2013 ${this.match.games["ai"]}`);let m=()=>{d&&(i.deadTimer=2.6),this.ui.banner(u,l,h,Math.min(i.deadTimer,2.2)),r.matchWon?(this.audio.fanfare(a),this.audio.say(a?"Game and match. Victory!":`Game and match, ${this.botName()}`)):r.gameWon&&this.audio.say(a?"Game, to you!":`Game, ${this.botName()}`),a&&this.ui.flash("#00f0ff",.12)};d&&this.recorder?(i.deadTimer=1/0,this.queueReplay(t,m)):m(),this.pendingGame=r,this.ui.updateHUD(this),this.drawScreen(A),this.ui.setRally(0,0)}watchPoint(e,t,i,s){let A=this.rally,r=ui(e),a=this.wstats;if(a.points++,a.pointsWon[e]++,a.longest=Math.max(a.longest,s),s===1&&A.server===e&&(t==="winner"||t==="double")&&a.aces[e]++,this.pendingGame=i,this.fast)return;let o=this.sideName(e),c=this.sideName(r),l=ke((s-4)/14,0,1);this.audio.cheer(.3+.6*l),s>=8&&this.audio.applause(.3+.5*l),this.cheer=Math.min(1,this.cheer+.6+(s>=8?.3:0));let h={"serve-fault":`Fault \u2014 ${c}'s serve didn't bounce on their side first`,"serve-double":`Fault \u2014 ${c}'s serve bounced twice`,"serve-out":`${c}'s serve missed the table`,"own-side":`${c}'s shot dropped on their own side`,double:"Unreturnable!",winner:"Clean winner!",out:`${c}'s shot went out`,net:`${c} hit the net`,volley:`${c} hit it before the bounce`}[t]||"";s>=6&&(h+=` \xB7 ${s}-shot rally`);let d=`POINT ${o}`,m=i.matchWon||i.gameWon;if(i.matchWon){d=`${o} WINS!`;let p=this.match.history;h=this.match.gamesToWin>1?`${this.match.games[e]}\u2013${this.match.games[r]} in games`:`${p[0][e]}\u2013${p[0][r]}`}else i.gameWon&&(d=`GAME ${o}`,h=`Games ${this.match.games[se]} \u2013 ${this.match.games["ai"]}`);let C=this.sideColor(e),f=()=>{m&&(A.deadTimer=2.6),this.ui.banner(d,h,"watch",Math.min(A.deadTimer,2.2),C),i.matchWon?(this.audio.fanfare(!0),this.audio.say(`Game and match, ${this.botName(e)}`)):i.gameWon&&this.audio.say(`Game, ${this.botName(e)}`)};m&&this.recorder?(A.deadTimer=1/0,this.queueReplay(t,f)):f(),this.ui.updateHUD(this),this.drawScreen(s),this.ui.setRally(0,0)}queueReplay(e,t){let i=this.rally,s=this.time,A=s;(e==="winner"||e==="double")&&i.landTime>=0?A=i.landTime:e==="net"&&i.netTime>=0?A=i.netTime:(e==="out"||e==="serve-out")&&(A=s-.25);let r=A-.22,a=Math.min(s+.15,r+.75);a-r<.5&&(r=a-.5),this.replayQueued={at:s+.15,start:r,stop:a,announce:t}}startReplay(){let e=this.replayQueued;this.replayQueued=null;let t=this.recorder,i=Math.max(e.start,t.startTime),s=Math.min(e.stop,t.endTime);if(s-i<.25){e.announce();return}this.replay={t:i,stop:s,rate:ke((s-i)/1.5,.25,.6),announce:e.announce},this.sparks.clear(),this.waves.clear(),this.trail.reset(),this.ui.timing(!1),this.ui.setReplay(!0),this.audio.slowmo(),this.audio.setMuffle(!0)}updateReplay(e){let t=this.replay,i=this.input,s=i.wasPressed("Space")||i.wasPressed("Enter")||i.mousePressed[0],A=e*t.rate;if(t.t+=A,t.t>=t.stop||s){this.endReplay();return}this.recorder.apply(t.t);let r=this.world,a=r.ball.position;this.trail.push(a.x,a.y,a.z,A),this.trail.update(.07+this.intensity*.09,.032+this.intensity*.02,1.4+this.intensity*1.5,r.pointScale()),r.update(e*.5,this.intensity,this.cheer),this.audio.update(this.intensity*.5)}endReplay(){let e=this.replay;this.replay=null,this.trail.reset(),this.ui.setReplay(!1),this.audio.setMuffle(!1),e.announce()}afterPoint(){if(this.rally.let){this.newPoint();return}let t=this.pendingGame;if(this.pendingGame=null,this.mode==="watch"&&t){if(t.matchWon){this.state="over",this.setFast(!1),this.audio.setMusic("menu"),this.ui.updateHUD(this),this.drawScreen(),this.onWatchEnd&&this.onWatchEnd(this);return}t.gameWon&&(this.match.startNextGame(),this.newGameForm(),this.drawScreen(),this.ui.banner(`GAME ${this.match.gameNumber}`,`${this.sideName(this.match.server)} serves first`,"intro",1.6))}if(this.mode==="match"&&t){if(t.matchWon){this.input.active=!1;let i=this.onMatchEnd?this.onMatchEnd(this):null;this.ui.gameOver(this,i),this.state="over",this.audio.setMusic("menu");return}t.gameWon&&(this.match.startNextGame(),this.drawScreen(),this.ui.banner(`GAME ${this.match.gameNumber}`,`${this.match.server===se?"You serve":`${this.profile.bot} serves`} first`,"intro",1.6))}if(this.newPoint(),this.mode==="match"||this.mode==="watch"){let i=this.match.matchPointFor()?"MATCH POINT":this.match.gamePointFor()?"GAME POINT":this.match.isDeuce&&this.match.score[se]===this.match.score["ai"]?"DEUCE":null;i&&(this.ui.pop(i,"gp"),this.audio.say(i.toLowerCase()))}}drawScreen(e=0){if(!this.fast){if(this.mode!=="match"&&this.mode!=="watch"){this.world.drawScreen({title:"NEON SPIN"});return}this.world.drawScreen({player:this.sideName(se),pcolor:this.mode==="watch"?this.sideColor(se):null,opponent:this.sideName("ai"),color:this.sideColor("ai"),ps:this.match.score[se],os:this.match.score["ai"],pg:this.match.games[se],og:this.match.games["ai"],rally:e})}}update(e){if(this.paused||this.state==="over"){this.world.update(e*.3,this.intensity*.5,this.cheer),this.audio.update(this.state==="over"?.2:this.intensity*.3),this.replay||this.updateVisuals(0);return}if(this.replay){this.updateReplay(e);return}if(this.replayQueued&&this.time>=this.replayQueued.at&&(this.startReplay(),this.replay)){this.updateReplay(0);return}if(this.hitStop>0){this.hitStop-=e,this.shake.update(e,this.settings.shake),this.controllers[se]===this.human&&this.human.animate(0),this.world.update(e,this.intensity,this.cheer),this.audio.update(this.mode==="match"||this.mode==="watch"?this.intensity:.2),this.updateVisuals(0);return}this.slowTimer>0?(this.slowTimer-=e,this.timeScale=.28):this.timeScale+=(1-this.timeScale)*_i(10,e);let t=e*this.timeScale;this.time+=t;let i=this.rally;if(this.controllers[se].update(t),this.controllers["ai"].update(t),i.phase!=="serve"){let r=t;for(;r>1e-6;){let a=Math.min(kg,r);r-=a;let o=Ql(this.ball,a);o&&(o&Wl&&this.onNet(),o&kl&&this.onTable(this.ball.pz>0?se:"ai"),o&Hl&&this.onFloor())}if(i.phase==="toss"&&this.ball.vy<0&&this.ball.py<.82&&this.retoss(),i.phase==="play"&&this.mode!=="practice"&&this.time-i.lastHitTime>6){let a=i.lastHitter;this.endPoint(i.bounces[ui(a)]>=1?a:ui(a),"winner")}}if(i.phase==="dead"&&(i.deadTimer-=t,i.deadTimer<=0&&this.afterPoint()),this.fast)return;let s=this.mode==="match"||this.mode==="watch",A=i.phase==="dead"?this.intensity*.9:ke((i.hits-2)/16,0,1);this.intensity+=(A-this.intensity)*_i(i.phase==="dead"?.6:2.5,e),this.cheer=Math.max(0,this.cheer-e*.45),this.audio.update(s?this.intensity:.2),this.shake.update(e,this.settings.shake),this.world.update(e,this.intensity,this.cheer),this.sparks.update(t,this.world.pointScale()),this.waves.update(t,this.world.camera),this.updateVisuals(t),this.recorder&&s&&this.recorder.record(this.time)}updateSpinBand(e){let t=this.world,i=this.ball,s=t.spinBand;s.position.copy(t.ball.position);let A=hA(i)/400;t.spinBandColor.copy(vr.none).lerp(A>0?vr.top:vr.back,ke(Math.abs(A)*1.4,0,1));let r=Math.hypot(i.wx,i.wy,i.wz);return r<1||(Ir.set(i.wx/r,i.wy/r,i.wz/r),tc.copy(Wd).applyQuaternion(s.quaternion),Math.abs(tc.dot(Ir))>.5&&(tc.crossVectors(Ir,Math.abs(Ir.y)<.9?Hg:Qg).normalize(),s.quaternion.setFromUnitVectors(Wd,tc)),e>0&&(kd.setFromAxisAngle(Ir,Math.min(32,r*.06)*e),s.quaternion.premultiply(kd))),A}updateVisuals(e){let t=this.world,i=this.ball;t.ball.position.set(i.px,i.py,i.pz),t.ballHalo.position.copy(t.ball.position);let s=Math.hypot(i.vx,i.vy,i.vz),A=zg(this.intensity,Wg);t.ballMat.color.copy(A).multiplyScalar(.95+this.intensity*1.4),t.ballHalo.material.color.copy(A);let r=.05+Math.min(.04,s*.002)+this.intensity*.06;t.ballHalo.scale.set(r,r,1),t.ballLight.position.copy(t.ball.position),t.ballLight.color.copy(A),t.ballLight.intensity=.25+this.intensity*.5;let o=Math.abs(i.px)<=.7625&&Math.abs(i.pz)<=1.37&&i.py>=.76?.76+.0015:.003,c=Math.max(0,i.py-o);t.shadow.position.set(i.px,o,i.pz);let l=.045+c*.06;t.shadow.scale.set(l,l,l),t.shadow.material.opacity=ke(.9-c*.7,.15,.9);let u=this.updateSpinBand(e);e>0&&this.trail.push(i.px,i.py,i.pz,e),this.trail.color.copy(A).lerp(u>0?vr.top:vr.back,.65*ke(Math.abs(u),0,1));let h=.05+this.intensity*.09+(this.rally.phase==="play"?.02:0);this.trail.update(h,.032+this.intensity*.02,1.4+this.intensity*1.5,t.pointScale());let d=this.human.forecast;if((this.mode==="match"||this.mode==="practice")&&this.settings.timingGuide&&d.valid&&this.human.swingT<0&&!this.paused){let C=t.camera;ec.set(d.x,d.y,d.z).project(C);let f=window.innerWidth,p=window.innerHeight,S=(ec.x*.5+.5)*f,G=(1-(ec.y*.5+.5))*p,E=C.position.distanceTo(ec.set(d.x,d.y,d.z)),x=p/(2*Math.tan(or.degToRad(C.fov)/2)),y=Math.max(9,.02*x/E*2.4),w=d.t-.09,g=y+Math.min(220,Math.max(0,w)*300),I=d.reachable?Math.abs(w)<.03?"now":"ok":"far";this.ui.timing(!0,S,G,y,g,I,ke(1.3-w*1.2,.25,1))}else this.ui.timing(!1);if(this.mode==="demo"){this.demoAngle+=(e||.004)*.12;let C=this.demoAngle,f=t.camera;f.position.set(Math.sin(C)*4.6,2.3+Math.sin(C*.7)*.4,Math.cos(C)*4.6),f.up.set(0,1,0),f.lookAt(0,.85,0),f.fov!==this.settings.fov&&(f.fov=this.settings.fov,f.updateProjectionMatrix())}else this.mode==="watch"&&this.updateWatchCam(e)}cycleCamera(){return this.watchCam=(this.watchCam+1)%Zl.length,this._camCut=!0,this.watchCamLabel()}watchCamLabel(){return Zl[this.watchCam][1]}updateWatchCam(e){let t=this.world.camera,i=this.ball,s=Zl[this.watchCam][0],A=40,r=ke(i.pz,-2.2,2.2);if(s==="side")jo.set(6.3,2.9,r*.12),$o.set(0,.8,r*.22);else if(s==="near"||s==="far"){let u=s==="near"?this.nearCtl:this.aiCtl,h=u.s;jo.set(u.x*.3,3.2,h*5.4),$o.set(u.x*.1,.62,-h*.35),A=46}else jo.set(.9,6.4,0),$o.set(0,.76,0),A=48;let a=this._camCut||!this._camInit?1:_i(3,e||.016);this._camCut=!1,this._camInit=!0;let o=this.camPos||(this.camPos=new b),c=this.camLook||(this.camLook=new b);o.lerp(jo,a),c.lerp($o,a);let l=this.shake;t.position.copy(o),t.position.x+=l.x,t.position.y+=l.y,s==="top"?t.up.set(-1,0,0):t.up.set(0,1,0),t.lookAt(c),A+=l.fov*.5,Math.abs(t.fov-A)>.01&&(t.fov=A,t.updateProjectionMatrix())}};var Hd="neonspin.progress.v1",Qd={rally:0,perfectPct:0,fastest:0,smashes:0,serveWon:0,perfects:0},Vg=100,fs=50,Yg=120*1e3,$l=50,qg={wagered:0,returned:0,bets:0,wins:0,biggest:0,streak:0,bestStreak:0};function zd(){let n=null;try{n=JSON.parse(localStorage.getItem(Hd)||"null")}catch{n=null}n=n||{};let e={unlocked:n.unlocked||1,beaten:{...n.beaten},records:{...Qd,...n.records},totals:{matches:0,wins:0,...n.totals},owned:{...n.owned},paddle:n.paddle||"red",arena:n.arena||"neon",coins:Number.isFinite(n.coins)?Math.max(0,Math.floor(n.coins)):Vg,bets:Array.isArray(n.bets)?n.bets.slice(-$l):[],betStats:{...qg,...n.betStats},openBet:n.openBet||null,refillAt:n.refillAt||0};return e.openBet&&(e.refunded=e.openBet.legs.reduce((t,i)=>t+i.stake,0),e.coins+=e.refunded,e.openBet=null),typeof location<"u"&&/[?&]unlock/.test(location.search)&&(e.unlocked=dt.length),e.unlocked=Math.max(1,Math.min(dt.length,e.unlocked|0)),eh(e),e}function Qn(n){try{let{refunded:e,...t}=n;localStorage.setItem(Hd,JSON.stringify(t))}catch{}}function eh(n){let e=[];for(let[t,i]of[["paddle",ls],["arena",kn]])for(let s of i){let A=`${t}:${s.id}`;!n.owned[A]&&Ed(s.req,n)&&(n.owned[A]=!0,e.push({type:t,item:s}))}return e}var Gr=(n,e,t)=>!!n.owned[`${e}:${t}`];function th(n){return{rally:n.longest,perfectPct:n.hits>=20?Math.round(100*n.perfects/n.hits):0,fastest:Math.round(n.fastest*3.6),smashes:n.smashesLanded,serveWon:n.serveWon,perfects:n.perfects}}function Vd(n,e){let t=th(e),i=[];for(let s of Object.keys(Qd))t[s]>(n.records[s]||0)&&(n.records[s]=t[s],i.push(s));return i}function Yd(n,e,t,i){let s=Vd(n,e);n.totals.matches++;let A=null,r=!1;if(i){n.totals.wins++;let o=dt[t];r=!n.beaten[o.id]&&t===dt.length-1,n.beaten[o.id]=!0,t+1<dt.length&&n.unlocked<t+2&&(n.unlocked=t+2,A=dt[t+1])}let a=eh(n);return Qn(n),{records:s,unlocked:A,ladderDone:r,cosmetics:a}}function qd(n,e){Vd(n,e);let t=eh(n);return Qn(n),t}function Jd(n,e){let t=e.legs.reduce((i,s)=>i+s.stake,0);return!e.legs.length||t>n.coins||e.legs.some(i=>!(i.stake>=1)||i.stake!==Math.floor(i.stake))?!1:(n.coins-=t,n.openBet={...e,at:Date.now()},Qn(n),!0)}function Xd(n,e,t){let i=n.openBet;if(!i)return null;let s=n.betStats,A=i.legs.map(c=>({...c,won:!!e(c)})),r=0,a=0;for(let c of A)r+=c.stake,s.wagered+=c.stake,s.bets++,c.won?(a+=c.pays,s.returned+=c.pays,s.wins++,s.biggest=Math.max(s.biggest,c.pays-c.stake),s.streak++,s.bestStreak=Math.max(s.bestStreak,s.streak)):s.streak=0;let o=n.coins+r;return n.coins+=a,n.bets.push({at:Date.now(),a:i.a,b:i.b,length:i.length,legs:A,staked:r,returned:a,result:t}),n.bets.length>$l&&n.bets.splice(0,n.bets.length-$l),n.openBet=null,Qn(n),{legs:A,staked:r,returned:a,net:a-r,before:o,balance:n.coins}}function ih(n,e=Date.now()){return n.coins>0||n.openBet?-1:Math.max(0,n.refillAt+Yg-e)}function Zd(n,e=Date.now()){return ih(n,e)!==0?!1:(n.coins+=fs,n.refillAt=e,Qn(n),!0)}var jd={games:{"4-4":"SUCOgBT2AFSBRqBF0BHqBDUCLWCKOBKaEGuBHmBHmBPGBC2BR6ELEBGmBQACMcBKABO6AQ0BE4AWMBCiBHsDFuCR-BPeCTSDMmCREDLsCISDRICRaCPkCJKCQkGOMCHQCSOCK8ANWBMEDWkCH0DVECRuDEaCN0BL2CE4BCECL6BHYCDkBMACQ-BJuBRoCcaDKMCGSBHIBKwBQACMyBKMCP-CH8ATIDPOCNsDJ8CIaBCmBXaBUmCHoBIICK8AMCBSSBJKCLmBMMDJIBGIBIqBNmBOmCKiBGGBIuBBUBB4AM2CTOBDCBSOBImBK0CNaBR-CW-ADADDMCOoCTWCJ4DJkBRSBMICT0AG4AMgBVoCBeBCqBFKBAwASmALACVEDOqBT0GJSBOgCFsCUgBTsCQKBI8BBQCDQCEWBVKCHmDOOCJiBJABJkCDABMSCXEDSQCDqBLyBQaBGSCESDUaCRwBLMCMMCNwDJQDOGCD-AS8BJYCTmCM0ANkBMIBOABSSCHgBPKCEGDFIBGKBPkCM4CDCCG0CQCCUOCIsBO8BHMBLSDECCEACDgBCQBD8AKaBF8BSGBYcBICBE8AIICMgEVABOICUyDQqBGUBD8ARqDKACYMHOaBHUBE2AMqBKkCLYCFEBTkBWgCAcBM0ADABTcCIkDHgBSmAFeBLoCIICaOBP-ATgCG6BQGBG2BC2AK6AEiCFwAEGCSgBCSBMYBEaBPGDN8BAABV2BKoBHSDQUCV-ACuBGeBHwBHyDV-BRoBQICFsBNeBMuARGFLOCKMBCSDMcCI0BTyBEQBTgBH6BTABJOBF-AXuCQaDKgDT8BEcADcBLIBKYDEsCE8BF0AO0EPGBEaBEWBN4BIyAOuBJEDPwDasCPIBK6AF-AFEBCqBHeBTIBR0CNwAVqBMSCLEBDaBZSBGSBNcDJUBF8BFaDGwCT4CPWCBaCPMBMYBIgBOoBGABToCMcCFoBG8AHiBDgBGYBISBL0CCMCIWBKABJKDHaBEQCHMBLSCKOCHUCRADbWDAODHwCOqBDuAOOBOeBFsBA6ATQBV2BIuCPoBS-AA-ADMCGMBRoCWuCScCNkBNqEDCCKYDLQBGQBAeAQ4AESBJaBTICQwDLgBPQCHICBcBE-AGkBW2BcaCPeCVeBMsDUIBVcBFKCLmBCGGQADQuBCoBJ8DP4BRQCOODGMBKgCI-CPeCP0BLSBR-BLiBO6CKmDNOCHiCHsAOwBTcBHYBEICMIEL-DLKCKoCEKCkSERKCOYBGwBRaBGWDBcBKqBSIBXoBJ2BKaBG4ADgDDKER2BRwBZeCEoCR2ALqCG0CKSBQQDSwCH2CQiBLcEIqBL0APWBRIDA4AJaBBOBSaDUuBDgAJoBV2BWkBMaCEmBDwAJaBJSCXyCPQBLcBT-ATQCTwBF-BRIBOCBEACJoDHuBBuBY8CM4CVaCEGDQ4BDUBE4CSUCLQBIYEKmAFKBTmCOcEKaDHyBJoBOMDSSBQeBK6GLeCJoCSuBGEBZWCJuCPwCKcDYcDTmBOqCB-ADcBUcCQGDJWCIyCJ0DQACH8BScCE-AE6BPmBPEBJSBFaCWiCPWBMSBFOBeeBKqBQ8DVGFHaBNGBMGCHIBKcBA4AK6BL6CNGCNSFM6ALiBVqBTCBU6BB0AAMBWMCDaBEaBL0CI2ANGDRkBMIBHUBAuCL6ACkBR4FTuBMYBL4BMqCTKCKWBSwDI4BM4BKGCS0EESEG0BFwBI4BJuBFsBSOCIQBBMBHaBCeCGQBBQBT0BW2BQuDOODKgCOiCdQCPeCRQBZeCVqBB4ALoAOEBG-AJwBGKCWYCNQBMCBNUCTSBJSBJ-CJGBGSCPUCPcCSgCI-ARQBOQBCSBQADLOCJ2BHgBOQBR2DIMBOkBE-ALOBIABDwANQDKuAJsBB2BVMCZSBKABAKBJ0DMqBAWBKYBTkCCqAH6DFmDJ2CTEDUyFLCCfCDQ4ELeBAiDUkBT2BGmBSQFR6BM-AVsCOKDEUBLcCEGDKUCMcBOoBJ8BH2AEWBV6DSKCI4AE4ADSBQaDHSBKaBGaBD0BT0BOUBJ2BFCDYmBK8BO-AUGCOeBDYBKUFHsAPCCN6CIUBSACMgBPWBG-BP0BC4CI4AWeBCmCD4AHoBR8BT2BHYAVYBRWCU-BJqBMEBQUCRSBJUBOSCRqBJGCIoCJ6BFmAFABLaBMQBMYCGWBIkBDCBNKBJQBI4BCmATYCSSBDSCPYCQyBKaDEeBDUCTWBLUCJOCUUCK8AJmBHeBGIBXaBCKDIqAC6AV0CHYBMWBHCCMcBTkCNeCY0BNABVeDDcCQSBJQDKQBEICTYBLcCFmCEqBR0AEwBFICRyBESCCuBH4BUgCI8AK2CLABUADToCM4AGACJCBN6BFKBPKCIOBQOCb8BNWBSyAWaBTiCTICC6AQaFE-ACcBGGDDACRkBBEBQEBTWBN0AJuBHeCLGCJOEGoBECCMuBNYBC8COyBNuBK2ID4AEABPUEMGCJQCN-BM-BIsCLWCMCCHwAKuBPCCEyBPQBSQBPMCLaBIkBM-BQWBOwBXQCN4AYKCQaBG6AGwBAKBOSBCqAE2BKSBHsBKgBCeBKAEGiCMECOQBJoBS6AJgBOOBMEBFmBJ-ANiBC6CGqCCCBOeBGGCGCCPsBKOCQ0CG4CO4BVSDJoEKaDHMBNiBJ4AHcBSOBPkDNMCNkBRMCSUBGKDAuELkDIYBQqBESDPcBK0CCODIKDQCDPmDGcBOuBRmCOmBU2BPyBIEBF0BQkDSeBUMCMqCSOEB-AFgBIaBXCCRIDTICBIBTUCIcBKUCMWCYmDNwBOcEDqCTaBMMBTUDHKBdaBFuAE8AHABTKDGABI2BIeBZ2BPmBJcBNABESBLgDOEBIYCFgBHeBHqBAUBLaBKgCTgDGgBLiCYeBWyCIGEaaBT2APeBMCBJmBEgCFIBCCBNMBIKCLYBPuCFGDL6BLACRmDQACQKBRADJOBXwCQSDQ2BMaBOoCaYBR0EVUBC8AM2DDaBPUELcCL6ESCBPEEGODOSDI8BSqCH2BNEBLcBRODGKBGmBFUBLIBA0BCCBM2AMCFGEBBKFGGBQoCKUDPECH0AK8DKgBH6ATiBFiCGGBHMCUICTABUwDIkBEECE4AUWBNyEIGDRSBNWEJmCL4BSKCGSBAGBDUCQoBBoBNaCL8AEMBLKDG6BHaADsBCMDReBMqCSwBLQCTWBJsCQsBVaCSmCMkDJGBHMCMmCLsBLCCQ-BNqBKwBFYEJQBHCCNMBPoCIIBFQBI2BVICLCCCgBOSCHQCDcBG0BHmBDuANYBMwBNABRmCJKDTGCJKBLeBJGBTgFTYCTcDU4BPyACYBN0BJCCH4DLyBEOCIGDEOBDGDI4BBwARgEDOBKuAIGBLuEIQDLeBPeBLmDGeBKoCVsBTWCRYELGBUcCFkBN2BG8BC2BJkBN2BG8BBKBOECAwAEaCOKBQOCB2AP6CMGBL0CFMBMsBHaCFwCQEBNkBFCBRyCQWCGqBjeBP8AJIBMuBCKBPGCScDQuBCyBJWCISBK6BPQBFsCSICIKBHsBOKCHQDCUBKgBP4BMUCLaCH4BD4CIcBFkCOoBJyAKMCQECTgBKIBISBLqCS0CN6ANIBGECEmCKcBLSBT2BPCBKkBMiBJ-CHiBBQBIABQUBLuBRSCJwBWkEFaBOICREDD6BFMBBWCKwBRMCICCTyANiBXiCPOCLMBHCDLACT8BPoCHgBLmBNABGWBO0BICBTUDHqBS4BFuBLYCQwCAuBQMBP6BIuBM2BVMDE2BJOBQmAFMCFUBL6AHkBEEBMaEP4BV4BHCCHyBGIEISBCkBGkCEwBKoBKsADIBBgCPOCVaDMSBPWCE-AEcCOcCE-CNyCHYBIWEQaBTIDT6BO4BVACS-BW-BPUBMkBRkBQWBOQCN8BSICXCCFOBLUBQACEiCOEEHyBMCBQGDPACHqDIuBEiCLgCG-BFyCUsBMQBGSBC6CAKBfOCOmBGcCMCGEaBF8CMGBMqENyBPiCEUBFABTaBBiAGuBIcDLUBDcBKoANECJCCO6CQaBTYCMKBK0DQEEFIDOQCWeBCcBHOBPiBMkBHsBQaCGiBHwBI4ALsBGeBHqBPKDPKBI4AOCCH6DHsCDqBO4CE4AHKBNwBJqBPMCJqBPUBaGCKqBCsAB4AIaBF8AReBOsBHMBWiCLYDLCBSEEEUBOiBSkBMmBMYCGoBLsBbcCOqBIuCJUDM4BN8BKSBOWBJCBQWCU0BCUBLYBDsAKOCNACQ-COYBKMBIGBF8BJUBEyAIkBJqBK6BBkBTyBEIBReCIuATcBTUCICCEUENkBS0BMeBC8BKABCGDCEBNaCN2CGyBQiBKeCGIBNEBB4AGEBEkCKwCGMCDwBPGBGwAGUBOWBF8AN8ASMBSeBFaBIGCEqCWuBRABJ8BGeCA2CFmBIiBRGDC4CDiBBOBPUBEOBKOBTCDEeBOOHQuBI4DDEBTcBNKBIaCQOBMECPgBFeBcMGOwDAQBKgCTGDNYBEKBOMBHQBIWBUWCL6BLeBJQCTMDC4BC6BPICE4ARgBIuBLqBMoCQgBRwBH0BIuCJ-BUOELGDXkCRuCHWDFGCQsCBkBL0BT-CRSDFEBVOCToCJaCP8BH6AAOBT-CIECMECIWCFiAE-AJcENqBPOBVoCHEBKGBLuBPsBQyBEwADKBTaBLSBKkCO4BEOBIKCM8DS8BSICGABXUCJIBJQBXwCD-ALcHNyCIaBV2DJYBTuCFCBC2BI0BHkBPSCJYDDKBQKCL2CMIDHgBTWDD-ARuBPKEWQBLiBK-EQSDMoCaQCHWCHaBQsAHICPwBK-BSCBM0BPwBKQCL6CJYCQqBJwCNACHeBR-BT0ANSBSQCKYBNeBRaBP6BF-BMYBRgBCUBMmCECCTCCM0CMuBEUCRkCLYCN0AGYDKqBPUDBKDR8CEiBNcDP-ATWBOODH8AT-CJKBJYBM6CLSBTOBJCDS8BAwBHOBGyDLsCJ4BGGHP2CC6AVmBMOCHmBSUCFUBXoCFCBP-BDcDFmCMSBOUBGaBMkBWOBIiBF2CMsDH0BL8BFMBIIBOaBNACUSBLUBREDJkATaDMoDO0BRwBUEBFECUsCL0BDKBSiCPkCTOBIgBMwBKACJABMYBJQCTuBRKCTiDKUBIYCOQCJcCESCM6BN-BF0BLeCFKBEACSCBKSCPYBRACJEBLyBQcBVKBXgDImBP-BLcBIiBEUBRECVwBSoBGMCUuCQYFOoCMKDTOCN0BTyEAGBPGENQCOUCOyBIKBJKBE2BGkBR-AICCUKCDoCUOCKsCIeBPkCM6BAUBEGBBkBKeCNiBLkCJaCNqBEyBRYBBWBOYBPwAHKBTgBHqBR8BCyAEMBEEBP8IE-BMoBNyCCiBXwCOqBQaBPmCGSBG8AGSBFiBLiBSSCKeCNACM2BQuBDACRyAKgBEMCD4EJECQCBA8BRQDASBF6AGiCGYDSMBH8BS4ALsBGYEQ2DJ2BDCBJaBJQBIMBKcCQqASSBIOBCKCRWCQQCOYDMMBReCA4BMCCG4AKYBL-AVSDUODRQBJ0BCACJ8CKgDRKBNABQuEVeDSOCTsBZwCCyAGaBIOCBgBI2ASYBEuENICNWCVIDLoBHcBHUCPwCNWBVkCHCBLaBA8BRSCOWBCYBDSBRWDOGBGYBJMDL-BEUCRyBKkBEkCJKBJuCDYBOeCBUBSiBH-AGqAM-CFACRQCAkAPUCMIBB8BHiBDuBNOINYCC2AL0BL0BQuALuBLoBWmBS6DAeAIyBYSFL6BRGCQMDRwDKiBHABDkCMaBOoDXuBHCBPUDXkBI2BN0BQeBK6BHKESSBMgCJECDMBK4BG0ACEENOBMCCLGCI8CMoBXgCaOFJ0BM4ACKBOmEQyCTMBNKDIKBLCDQuDMSBHMBTIEGKBO8AAmALOBEABOkBJAFRCCOQCLYCOsDNQBCQCMKCJQBEyEMkCW2BC4BEMBIsBKCCDABQ-BSSBRMBTkAEuALGEFqBLaBLYBUGD","3-4":"EiBIQCOcBE4ASqCE8AOqAAgACwBOcBJQBD-AUyBA8AEABQ4ATMBCwBSoBCIBOmBIOBRCBPSBQYBEEBCoAQSBGmAI4AFABRICVSDKaBD2AG4BMgBKaCKKBK4AOMBPMBIgBRwBUsAEMBI-APYBG-AEcBTyCA6BI4AGaBMuGGSAEiCC2AGSBCACIeBCWBEkAMeCAyAO-AIsCEwBGuAE-BE2AE-BIcAEkBEMBCABKIBI6AIOBQSBKoBIGBAyASGBHWBCqAECBEsAECBGCBOmACqAIkBGQBR0ADwBA-AI4AIoAKUBCQBLKBKqACGBQCBIaBKyAIqBIuAEMBEUBN2AIABAkBKwCISCRMBOOCQoBKeCE-AGOBCGBCiAI8BIwAKIBM6AI-BKuAA2AA2AGABEuAQMBEsAKACKoAI4AM6AGuBE0ACCBEQBTICTsBI4ANwAKQBKcBEGBAaACeBECBNWBI-AKGCP8BGMBEmBRcCAABasBKQBQAECEBCmAK8AKcBCkACiAKaCO4BGqBX6EAoAOcCCkAQ8BOWBT8AACBQ4AIuAAYBUeBKeCAkBC8AIkBSsBCQBI4BKIBQ4AQOBC4AOgCGGBEqAMEBIkAEeCGqAOSBQUDKEBEMBSgBC8AQ-AIKBEOBCmAOcBG6AQECIEBGUBCiCE0AEqBLQCA0AAyAWwAIeBC0AAeBKyAC8AGABGQBC0AN-ASuBHqBEGBI4AMkAEEBGwBOkAK2DAwASGBQQBEYAA0AGSBIiBI2AS6AGODCUAS8BEeBIaDCOBCUBGCBAOBWECKACAwAW2AEwAE-AA2AJOCE8AI-ANEBAKBGKBC6AYEBE6AI6ACCCEEBGiAA4AKcBGIBC4AQsBAIBMAEIcBC2AG4APIBK4CI2AA0AOCCC0BI0AQcBM2AGuAGGBAcBM-AIOBCWBG4ALKBEOBTEBGeBOoBG2ACuAWmDGYAE0AIWBCKBGwASQBAuAI-AMgBIeAROCFMCGmBEyAMIBIABGmBACBIEBCyAC0AKKCCEBESAOuAPABECCSIBAkACqAAqAEqAL2AL2BAkAFyAAyBGABCcBASBCqAMeAEODCOBGIBIMCOyAPWBGwAREDI0AL-AEUBAkAAsACIBTiBGABK-AWwBJ-AEoAPOBC0BPeBGECQ4AIYBXoBK4AMMBG0AAUBE2AGaBIABI8AS-BMCBCcAG0AAUAEACEwAFqACcBK6BEyAImBEiBCiBGKBC2BKwAGkAUkBGQBMiAIIBO2BKyBAABS6AIaCI0BQiBMwBG4AAiAC0AOEBEmASeCCqBC4AGeBWgBC8AGiBQMCA6AEQBCIBLmBIECV6BCUCCoAAIBCkBF6AOYBC0AIeBAwAT8ABOCQCBG0BEgBTOBPIBKKCMIBSICIUBEEBAsAEgBI8BEWBAUBP-AKqAKoBJ8AI2BM0BAoBAKBO8AGkBOgBIeAVKBHsACgACCBCYBGuAEGBEGBA2BUSBKWBAgACkBL4AVmAEOBWYCPCBGkAEaBQQBQABCaBEYCCkAESAC-BIcBWsBL4ARYBSgBCSBTGCEEBMgBIcBC6ALYCI6BMgBEuAM4BE4AGqAAkATKBGwACoBQuBCmBTOBAcANQBEmAEcBEuAAsASmAAACSIBKaBLKBCABASBHqBTIDIGCV4CAkAWYBMABNWBPYBIWCI8AC-AA-ACgARGBQuBO0CKuAEyACKBAkACMBQOBIOCEkBUUBLOBTeBK-ASYBUYFEGBMgAG-AE0AAoACQBKoAGIBM-AKmAQgBEiBQQBAABImBPACIKBQmANuCE8AIKEEOBK-AK4BIQEI4CG8ANcBICBG0AIiBKCBGkBE-AJGBWmCIABIOBMEDCwAYABMuAToAMwBCaACABAmAIOBEyBCsAEyBAMBEwAQiBEIBGWBKQBMGCOOBUsBAyAXuAGyALKBHuALOBIiBM8AGKBCyAGuACCBCuAC0AAaBIoBMwBIACMECQACKaBLUDCQBM-AM6AAyAS8AM0BCCBO-BI0AK6BIKCSWBAaBEGBE6BAmACsAKaAKACGGBI4AGaAA0AIkBIMBAABKKBQoBMoBG8ACSBI0BKcBO4AIQBACBE2AKABAqCCSBK2BAYBJIBEeBMEBIeBUEBEwAIWBEwBCCBIeBHyANoBcCCEcBGmBGYBG0AUOCGeBKsBA-AMaBI4BIOBEuANaCRcEGIDE-BO-AGCBCYBGKBQKBGOBLeBCYBImBEQBCaAKYCCgBI8AGEBAKBMyBGIBA8AZIBGOCAsACaBGyCKuBIqANQCIeBHKBAIBG0AT4AOsBC0AOeAG4AOeBKiBTGBTQBPCBKwAN6AG4AE-AEOBM6AIcBO2AGWBCMBPcBPUCR2BKuBMKBOsBRMBEGBM-ASSGEuAKYBGeCN4ANiBCYCGIBCsACKBCIBQKELWBEICCGCCgAE2BUkBKSBI-AASBIABEGCTQBAuAG0AOQBM4BG-AAsAECBGuACOBOGBAkBGsAEiBHQBGIBHiBQEBOCBCmBEkAGKBMABMIDG4AEgBCwBECBA-AGGCE0AI8ARKBCUBEIBSACCQBAKBRABHSBEiAKmANgCIKCGOBIOBEIBICBK0BAQBK6AKuAAGCOABUGDCyAM-BE4AOqCAqANSCQUBEaBEmAIyAOMBIqCEeAMACAiBGCBIGBFoBG8APIBP4BK0AFKBIYAWEBTKBCeAO4AK0CGUBIMDI8BIMBIACMEBEeBCgAKmBKsBCoAViBIWCEOBCGBQMBQsBAABEwACcAEKBGSCK4AGcAEcAM2AQ6AG2CEgATaDKGBG4AKOBESBG8AEOCIQBLqBCiAPaBEIBQcBV8BE2AI0BC4BIwAI0AR-AGuAWeCCcBC4AIuACABTOBAaACSBIGBEsBLuBE-BAsAIOBISBOICAUBEQBG6AVqAIEBQEBEqBG4BA0AC2AAEBFOBIsAQGCAUBOmBKgBAuAKmAUKBGWBK0ACeAQkBawCIcCIQBEIBAEBGyAM6BSsBGuBGyAIuACiBMyAOUBQMBAwAEsAAUBA6BOaAGICCSBKsATmDQaBK8ACqAKiBAQBG-AA0AEQBMIBEaBMECISBGSBGmAA4AQeDCKBO6BK-AGyAAqAMwAC4ACGBKKBE4AE8AGmBO6AGWAIOBEoACmAPgAIwAGCBIYBEwAIACESBIqBSaBGoBPcBEoAKiAAoAEYCCEBSeBAGBM8AIOCG4DK0AIoAGsBGGBCSBCCBKkAWmBKyAIIBO8BAqAG6AOsBIEBSGBCwAGABgoCGeAIoBAqACUCRmCA6AI0AG0AHaBVyAK6AEEBI8AEmAOQCKcBAYBQ0BSOBMIBQQCEKBM2ASKBVqBM2AKKCOmBEYBIiBCIBGYBCsAPcBN8AAgAXCBAYBQsAEwAGGDCqALmBLYCCQBC6AKOBAkBCMBEcBCwACQBNyBBeAC4AIWCRSBPeBGuAaECSMBGQBIwAEaBKeBMABA-AEABOYBKuAFACCmCEmCImAAsAJcBCkAC2AAgAKUBCCFAcCKGBM4BMkBOuCAWAG-AOMBMCCAIBEeBEuBTGBU-BEUBIgBC2AKABIOBPmBGEBEkBE2AF4BLKBAQBCEBCIBEeBTUBPIBO8BAWAEIBEsAMwAGoDG2AGYAM6AG-ACEBTgCKCBFUBGaAGcAScDMuAIUBC2BIMBTUDJgDVeBIoAK4AI6AC2ASwBE4BTiCCyAGKBKCCMaBX6AIaBRKBCgBUACB0AROBTQBQSBC0BCiAEeBIOBEiAGEBEABIEBCyASWBEmASOCCeBG8AC2ATKCJUCOeBP2AOaBKMCLQBS6BQWBLmEIiBIECCoAKeBGeAAkAGuAK8AEKCGoAO2AL6ACcCCaAC6BE8AV6CCUBCwACUBCWBIyAE2AIMBGSBDQBOaBGSBQMCE-BSCBOeBE6AEkBCmAIkBISBG6CI4AUSBMKCO0BSeBEGCCCBCOBKIBIWBOkBCCCO8AGMBCgBSgCSyAI2BEyASOBV-BUyBC0AGICPWBS8AIoBAgCECBUuAXQBK0AEyAEqCAsAA0AG2AAoACcBMOBEQBCMBEMBESBKkCGqACiCEgAAcAKOBMOBAABNQBA8AG6BCACECBAqAT6BG2AIEBCsAOCBNsBEyBEaAM2AKCBC4ACcAGYBT8AKUBI0AG-AGuAIGCRYBHKBWOBOsAC0AA6ATOBFGBCQBE4AOkBNaBOKBGcBKQBIsBAQBKaCAmAWIDA0AA0AIKBGmAWaBEkBOCCCECJKCCuBEmCGkATaBGIBDmBEYBJICG0AGIBGiBC4AOGBEoACkAD4DKKBCOBACCLwBUcCCuBKEBEABUKBEqAOWBKoBMkCAuAK2ACABKiBSgBJOBFSBGcBR4ARWBAmADABCuAAABAyAIsBKMBGCBMKBHqBNMBKGCSmCKKBNGCNmBGcBMICI8AQOBO-AA4AM4AMKCICBAQAPYBGOBIyCCSBGcBCoBQsBGyAOUDAkACuAMkBKABQMBEsAG0BE0AUGCKmBGiBHGCG4BKMBSGBQ4AECBE-AOQBE0AOIBAgAEKBGyAOSBLWCS-AGMBCoAGEBGqBSkAC8AO0AS-ACOBTiCCSBAOBAYBI-AGoBKoBCEBGiBAqBACBGwAAsAQkBEOBAyBGGBGOBAGCEKBCmALsBEKBCcCI8AKqAC0AKYAMuAAUBU8AE8AT4BTADT8BKMBKEBK4AEKBC0AMQBGIBG6AAoAAyCGKBEaBGSBMUCAcAKKBG-ACuAC2BKOBEKBIEBM6AKABDeCBKBIsAEWBQsDKWCS4AGCBAoAPABGIBGoAEyAT0ACuAV6BGSBUaBCcAIKCC8AC8AAQBUOBEgAEUCAcBAwAMgBGKBI0AAiACICQICM2AEUBKOCE2AJsAYuBMYCE6BWcCQQDEcAK0ACMBCKBKqAGQBA4ARiBPcBESBMaBA6AMQBUkBIGBOqCEIBKoAK8APCBI8BKSCMsBCsACmAE4AOsAEuBIyBD-AI0AMABXmBIICI8BIwBKABCeBSeBIQBKKBGgAE4AI2BCgAIGBGMBCmAAOBIECGABCgBAKBGkAEGBG4AOACOWBCwAGMBHGCUGBH6AC2BYgBMIBEwAIwAOwBM2AOQBJuCCcACWAK4AAcAGyAFgAU6AAEBIMBKSBE8AIGBCUBA-AGSBGYCEgAMCCE6AO6AIWBI0AM8BCcBA0ACcCCCBG8AGSBQQBTSBGuBOIBEyCTqBCwAEWBTqBE6AE8AG2BIOBA4AKSBU2AEKCM2EC8AE-AEcAC-BPSBIOBCqAM4AO-AGiBK-AAcBN6BOCCAyAOIBE4BIqAKCBEIBIIEEYBQmAOkBG4ACOBGuBLABEsAKGCC-AQUBEkAAgAWCBAOBMYBC6BQcBDwAOcBEACC-APkBEEBCuAIuCGcDKaCRiBCMBAoAGOBdqBLgBC6AA0BP6BKUBGEBCIBCABEyAKuAK0BCGBOiBQ4AISCAkAG8BKGBAcAMGBI-AIQBC-AAwAEUBSaBKUCG2BIQBReCLaCGsAKKBAYAQEBX4AAcAE0AACBCQCGeBE2AEkBIaBAUBEMBGIBI2BQiBKwASKBFyBIoBK4BHWBK-AEEBE4ARqBAOBEyAXoBGaBKwBAyAK8BJ2ASaBHqBCGBCcACMDA4AC6AOSBAmAUCBCCBQ4AI6ACiBIEDMuAEwAC4ARcBK2ARgBG-AKIBKWBEwAO-ACqBS0BEiBGuBI2ACyAHyACyAGQBEIBCkAEUBKaBEIBQUBG4AC8AKEBKQBMGCCeBFWBKIBEmBVEBGwBMEBEqAOiBG4BTABCMBGYAAGBCsBIsBEGBO4BGUBMMBAeAAYBI-AEuAUCBSIBQCBGABOUBPWBMgAEyBCkASwAFUBPsAH-AK2BCaAAkAGEBIUBEqAGQBEEBC4AEkBQUCCIBKQBE6AA2AGOCAiAMkBQoBVKBK6AI2DC6AQmBM6AC8AIsAGmAK0ACEBCiAG8ACuACOBCUBC6BC6AAUAA0AMCBI0AEEBE2ATCBEeBYOCCyAK6ASSBHCDKMBG6CRYBGmBCcBGqBEkBL0BGQBKyBESCGuAKMBCsACwAMuAESBW2BCkAE8AUICGqAKWBKgCACBT0BMyAE8AScBGkBOUBOUBKUCGeBAOBCgACmATGBEEBOcBEaBESBGWBEcAACBCeACGBISDG-AQECRGBA-BDQBCCBMeBJGCG0AOaBKkBPOBE2ANgCG6ATKCC4AQuBGMBCMEM8AKyAP4AECBKiBMKBEKCO4AKGBGOBIoBCYBTACAgAFQCT4BAUAUuBIaAE-CA6AI0AJcBC2AIgBIsCG6BOUBO8AEeBG8AGgBWqBOUBGoBCaAQqDLEBO-ALABSyAWuBCGCCMCAgAI4ASWBMmCMSBIaBE0BE0BQ6BIUBKCBS4BCGBGkAKSBKoBEgAGWBEUBA8ATqBCkAT4BQSBaiBI4AI6AMUBAqAG0AVcBOKBOECGIBOeBI6AO0AOWBKWCIABKWCTOBMqBAIBC-AGEBAiBIqCSwBIOACqACCBKGBAqATEBFyBGoCAkAGMBE4AG4ANWBRyBMqACyAI0AGwAIOBOyACUBCuAGwAPSBCODCGBZgBIwAE6BMEBA8AAoBIABCCBEgAG0AKEBEkAEaBL4BG8AEOBE4AC0BECCLaBHABKMBEYBGEBGQBSWCUWBCCBEQBHmBCUAEkBIABCWBM0AE2AKoAE2CV6BR2BEKBEgBRgBASBG4AGYBAqAEuAEOBUADU-ACuAK2AMgBOyAKABGWCHABMYBKABUuBEQCKWBIACQiBCIBE0AEABOYBDoAKsCACBOGBKmBSWBN8AGiCK-AAuAIyBWeDA6ACWBEwAA8ACiBIaBGiCGoBGcBSCDEGCSYBCgAKuAAYBG-AEYBGgBAABCMASyAIaAKICCkAGEBAeASMDEuBOmBIMBCICGYBKCBEwAG6AOaCQSCQMBMSBQiCISBCABGiBGWAIqAEaBLqAAYBAWAC0AJ4AE-AEWCGoAECBEmAGECEQDOkBMCBGWBMEBKuBAmBSCBCKBE2AMuDIuAOOCAQCC8AG4AEoASsBA-AGoAEACOMBTeCKyCSQBOyAI2AE6BM2AG0ANaBAcAEWBM0AEABE2AE2AAkAAuAQyCcyCM-AK4AKqBGWBKYCCyAIMBGwAd8AI8AEKBTcBQSDCIBUECCqAEACCMBGeCM0AEaBEaCAaAG6ARuAEKBC0AOqBA-AEIBSwBBwAEaBPGBV4AMeBQmBI6ARsAGcBIEBCEBE8AG4AGiAU-AS0AOcBK6AGEBIGBIwAOKBGYCISBGEBG-AE-AE8AD6BG2AKuBTmBGOBECBGGBAeAIkBQ0BCcBAkAMWBVwBAWBKkBEuALKCCUASgBM6AQ-ASSBA2ACsAEqAA-AGwAEGBKSBEUBS8AOmBIQBIoBKABRcCGCBMiBCsAQOCMqBEQCNCCIsAKICYcBCcBGWBICCEeBA2BGCBMuAGwBGyAGMBCmCG6BCMBGGBO0AM0AIICMwAGOBWQCEeACsAI8BCqAMWCC-AICBMqAE6AToCAyAKaAE2ACiAMQBCQBCcASABU-AT4BM2AAwAQGBO0ARkDGoDO0DIYBLOCMgBGABRsAKaBOKCA2AScBIaDOuAEOBK0AOECKGBAMBUQBCmBEyACyAIsAIECPUCC-AHuDE2BAABIMBKEBOIBCMBI2AIEBA4AUECCEBOUBC8ACoAGuAQ0AESCKyBAECUCBS-BOyBISBKOBGMCO-AO0AEgBEwAIOCS2BC8DM8AQ-AYeCG6AMqAEUBPQBZsBKqBEsAM8AEYBGkBG6ACeBEYBEqCGoACkAEcALCBE0AOyAMEBPiBKGBCcBGsAKKCGEBKUCCqBGmACWBESCEeAIEBQABP4BQ6BT6ACsAPoBKYBCABGkATKCM2ACCBGKBPcBIqACIBGcBU4CK6AAcAEKBCiBEmBIuCKwAAIBSGBIeAE4BDOBOwBKKCIoAO8CAsAK6AI2ATKBLMBCoBCIBG-CCSAMABIeBS-ADyBAqAG6AIKBOSBaABI4AM8AP4BGCBM6BTuAC6AMcBCwABuAAiAG4AK2AGoBAWBMcBEIBAABIYAMwAK8AGeBC4AAsAK4BMoCIwCGwATUBEYBZsCDWBKQBEwAGWBL6AO6AIGBKEBG8AIGCSmAQwASCBKcASgBCmAGKBCwACwAAuBCCBEIBEuCGGBK4BSKBHUBOqBUiBTaBMQBC8BK2AGwAGiBCWBY2BIUBOoBCmAIuAEWBC8AA2AEuAOQBCGBSEDAEBTACK2ACUAROCGKBAeAEkBKqBIIBKiBCuBMYBOqBIeBIqBAYBGqARmBNQBOgAS8AAWBCeAE2AI6AAYAKsBIACKKBPIBM8BESBCqAG-AQOCEABC6ACaAAUAAQCTeCQ8BKECCEBTSBCABGiAIwBOuACmAO0BQ6BIkBLOBQIBJ8BEwAM0AEwAAwAM2AUCDEyAEoBE4AC-AGYBIUBSCCCgBICBCoBEABSMBKOBE0ACyAIGBJeBQIBGKBQKFIMBE8AA4ANUBC2ACSBTkDCKBGiBI-AJoAE8AGICOkBIgAGuAKEBKMBN4AQ6BK8AOwBCYBCEBScBEkAPaBL4AM-AA0AOgAC6AAABEWBAgAEMBCQBGKBCCBPsAM4AGyBOcBA8AEMBEiBI-CIkAEWCEwBEABEMBP-AIaBC8AC8AAkAUmAASAAKBCqACwAMaCSaCCiACwAIOBKsBOGBGKBKUBEIBOYAGCBEuEOkBAUBOkBEKBCoBG0ACIBUGCG4APIBUQBK0AA6AN6AI0BXwBOsAKMBM2BI2AQ0AE8AEIBGQBMICIMBOABC6ACEBQIBE2AIUDPGBC0AR0AMyBGqACaARGCIyBUaBGOBOiBQYBOSBEyAPcBNeBMCBGGBGOBEsASCBAoAGgBGqAJoBIwAEGBIwCAQBTWBNsAFcCCyAQACGiBLiBM-BOKBUgCIkBCIBDABEmBK6BSkBEmBCEBPkAKyAGIBC8AEsAM6BEqACIBQqCEoACsBIACGuBJkCGeBC4AIgBECBCwAC2BC6ACGBYCBQiBKqA","2-4":"GcAC6ACoAEiAI4ACaAAcACiBMeBKCBCWAAYAAcAGaAA0AC2AMgAEYBPwAAwAAgAAYACgAEyAAoBKQAAUACqAAIBKoAAmAASAAQAKmAC8AE4AUOBEwBCyACQAEUAG8AGWACcAEaAA4AIyAE0ACABASACqAGmACoAEcAAUDCgAAYAE0ACeAC4AAsAAaAOeBE8AIYAAYBAiAMyBEqACOBAoACcAC-AGyAIeBTmBEWBCcAEoAAaAAsAIoAGWAEqAG8AAUACsAEiACoAOqAGiBCaAOABCgACgACuAAgACmAImAKiAAeAEcAGoAGqAIkAAgAGcBAUAAoACUACiAI0AEaAA0AQoAUEBCaAIMBAiAIWAAsACWAIyAOKBK6AEqAAYAE0AEkAEYAEgAIcAA4AAUAEmACaACQACcAAYACgAE8AAkACABCKAC0ACmACiAIoBEwAIsBEkAEoAAOACyACQACkAIKBAQAMgAEoACcAC0AAsASsBAYAA4ACUACmAAYAGOAGgAAYAEcAKkAAcAGkACsAAuACuAMEBGcAK2BR2ACIBM2AEwAAUACkAA-AIEBIyAGaACYAEmAMiAGwACgAAYAAcAEQBUUBE-AG-AMsAAiACYAC2AE6AAgAAwACABOGBGsAEWBAwAA8AIKBCYAMUBAuCAMBCuAGQBMsBIwAEqACuACiAEsAEyAKyAGYAMEBE-AAgAPIBI6AAsAAEBAWAEKAAABAsAG0AKwAG0AOuAAUAAmAAaAASBG2AE4AEWBAoACgACkAKEBTkAAOACkAAQAAcAAqACoAAUAGoACqAAeAAYAAuAEoBCoAEcAIECAOAKyACwAMCBG8AC0AAaAAoAEsAGiAEWACYAEsAAqACcAAmAAmAAiAA8AAyAE4AOiBGuAGgACsACMBCeAAiACyAE4AAYAAyAAmAIKCAQAI2AKuBSiAAoAI0ACKBMkAAyACIBEiAAwAC2AAiAA-AMgBEkAAyAEIBAoAEyACWAG-AMABEWAECBAeAASACYAC4AAoACABAeAAKAAuAGsAAuAEOBCyAEkAKuAE4AAgAG2ASaAKqAAYANEBIyACyAGwBCgAAoAAcACiAGIBAMAAoACmAKsACaAEUAAQAG6BAcACQAAoAAWAMaBAWAEQAAQAKaACwACEBCgACcACcAC8AAoAIuBK4AEeAEYBA8AEUAAQACsBKuAA-AEmAUIBCOAC0ACeAIgAEeACABCQACaBEQAIeBA4AYyAIkACgAAkAAgACYAAYBAcAGsBC4AAaAAEBG8APYAAcAC4ACgAAcACuACcAGuAEWAAcACiAG8AIkAMKBEiBGiAKuAEiAGgAAgACeAAIAKuAAkBMaBGWBCqBC0AC6AA6AAkACQAAmAEmACuAMABEGBMCBQuACqAAMAAwAEyBAeAAsAEQAAiAAUBEaAAiAEiAEsBCmACsAAmAKcAQyAAsAKiEKgAEYAEiACcBIeDCYAWyACQAMkAAaACkAEmAAcACkAQsAGWAEuACmAAgAGSAEcAAcACyACoANQBCoAGaAAiAEEBAgAC2AAaAGoAAcAGgAEgAI2AGqACeACMAG-AEqAEGBA8AMkACUAKECCqAAIBCeAKWBKKBI6AICBAOAEcACQBCkAMsAGqAAABCYAC6AAiAAcAG2ACIBCWBGOBAWATwACoAKABIsAEKCKGBAWAK4AAYACYAUWBAiAGgBGqAIkBGOBGYAEeACwAKiACcAI6AG0ACcAGMAR6ACkAAcACSAEqACiAAIBGmAG2AAYACyAAOAI0ACmAGmACcACsAKgAKcAEeAIqAAmANMBEyACwBCEBAuACaAAiACkAEiAEWAEeAKUBEmAE6ALiBKKCEuACkAKiAA0AGmAEcAWwACaAEiBC4AEMBOEDAaAAmACyAUsAAYAA6AGCBEcAAoAAeAQmAAcAKuACQAIcAGcACYAMwAEaBGeACuAGmAKuBAsARMBEmAKABLWBIcBEcBEABC-ACOBCWAGYACgAAwAC6AESAEeACaAGUBGmBCUACaAAsAAiAGkAGOBK6AACBA2ACWAEoBCEBI2AAeACmAAaAC6AIMBGEBAQAMoAGyACaACIBCSBCWAAEBE8AKiBMqACkAEYACgBAeACaAOWBAYAASAEqAGGBEWAAoACQACgAGCBEWBAcACABCCBAUAAaACkAAsACcACmAEyBIEBEsAO8AIABCmAAgAGoAC6ACiAG-AEeAEuAG4AG8AK-AGuAI-AEGBC0AEyAIUAAgACuACYAE-AAaAAcACcACIACMAAiAEYAQ0BEWBCcAG-AAUACgAEYAGiDCkAGwAAcAEgAIIBM0AAQAAUAcABC4ACABGeACuACSAESBEiAEmAC0AIgAXABCcAEWACUAEuAQ-AEACE0AA2AOsBCYAKuAAcAGQBAYBCkAAmAAMBCoAAKAQGDI2ACABC-AAWAEwAASACsAGuAE2AAEBAeACaAOuACcAKkAA6AE-AEWAIwAIYAAgACyAIQBAUAA6AEwACUCAmAEeAEuAAcAC8AMABE6ACoAAUAE0AAaAEoAEeAAgAI6AGSBGgAA-AAmACqAKYACqBCIBIwAEsAC4AAoAMeBYIBOyBC8ACUAAgAIoAEyAEgAIqAIsBCYACeAMSBAYAC6ACmAEeAE2AC2AE0BGSBASAGcACUACyAEABEYAAoAKqAAgACkAG-AIeAAMAA2AAUAO4AAaAQICC2AEYACaAAUAA0ACcAAqAEqAAeAAmAGuAAmACUACWBCQAAcAAkAMMBAWAEmAEsAKmAAgACUACqAIWBECBCABCQBG2ACWACWAEiAMuAIuAAcAOaBCkAAuAEqACmAI8ACIBCiAKiAK-ACUAA8BCaAAYAEsAK-AA4AAuAGECCeAGmAC4AE2AKkAIWAIYBCeACEBCiAAUACoAAmAGoAC6AEuAG2AG4AECBAMBI4AGuAIABEOAe4AAUACoAC2AEQBOyACkAGsAIuAEWBC6ACQAAmAC6AEuAG2AAKBC2AAiAC0AE0AE2AAuAGoAAaAGgAAkACYAEoAASACkAKYBC4ACWAQmAE2AEYAAwAOoAGABG2AAsACWBAeACeAAeAAwAE-AMwAGOAEsAR6AI0BCQAIwACsAAUAImACeAOmAAYAAKAAkAMyACICCsACSAA0ASwAASAI6AAuACeAEUACmAC2AAaAE6AAaAEyAAkACqAC8BAmAEYAM8ACkACuAGiAEwAEcACKAIABEoAAmATIBAwAGUBCKBAwAAYAO2AEcAE2AGOBCaAA6ACYAGIBEgAAkACQACuAIqACkAEUAAUAIuAGSAA0AMABKMCCcAEaBEQAAYAGeAAUAC0AEmAA4AISAG4AAcACwAAaACWAAYACCBOuAAmACuAAcAEcAE-AEABCaAAuAAWACsAECBAwAEYAEkACWAAwAEuASGCMcACkACwACuAGaDCWACUAAkACoAEkAGsACsAAYAN-AQ4BAsAEgAAoAAaAIkAAwAAWACEBAoAIiACCBCeAAOAAYAU-BC6AAqACeAEaAGoAEcAEgACgACoAAmAAkAMkAC2BAuAC4AAoAAeAEOAG6AE0ACQAG6AGeACyAIYAA-ACyAI2AEmAC6AAOACqAIMBI0AIkAA2AAcAE4AKwAOGBE6AE4AAEBCyAAqACcAAmAAcAO4AAmAEkACcACwAE-ACUAGcAAiAAgAEGBIaACcACuACeAAkAGoACWAA-AKGBCiAEyAEeARiAAYACkAGmAASAAYAA8AQGBEQAA2AGoAE0ACiAM2ACiAAiAAYACYBGaACgAKkAGqACMBIsAGGBCUACuAISBAIAAWAAeAAQBK-ACoACYAOuACkBGsAAaACgACWAKiACqACSACyAA0AKuACmBEUAKuAAwAEUACOAGgAEaAEqAEoAAcAAWASuACaAAYAC2AEYACkAMqAIOBA6AGkACSACSAA2AIABIkAKCBEABGSAEyBCGBEsBCmAAsAEMBCYBL-AAkAGYAEoASuAA0AEiAQ6ACwAE2AEmAEQACmAAUACcAGgACwAAsAKSCEkAEoACiAIqAGsAR-ACgACwAAMBAUAAsAE8AA6AIaASSAAgAAaACWAGkAG8ACgAI4AAgBCUACIBSABIEBEqAI-AAwACQAAOACMADmAAoAEsAGeACeAAKAQoAE-AAYAIgAKGBCsAAYAGmAAYAK6AEiAI-AEeAAsAEcAGGBCiAICCGmACkAEGBEUBAUACmAG0AEgACcACcAGeACgAA-ACoAAQAEyAAcAM6AIABGkAAgACCBCQAQ-AIsACiAOaBCiAC8ASQCCUAC2AGCBAcAEWACsACiAIaBCWACgAGkAAgAT8ACIBCaAIYAEqACOACEBAYACmAAeAKqAI4AAaAE2AE4AAQBEWAEeAG-AGGBAiAAaAIYAEWAIsAEcAP8BCaAAgAAkAAyAEiAGmACcAGuAS4AO4AKgAAOACeAEUACkAAYAAYAG2AEwAAsAO4AEyAAgAAcAG2AAqAAyAAeAIaAGMAAWACQACKAEoAAeAA4ACmAIcBI6AA8AEeAC4AGqAI-AEiAI0AAGBMGBAoAKsACUACaAEWAIsAAmAIiAK0ACABGoBAeAGGBEcACqAQKBA0AGSAbGBGcAA8AOMBCeAC-ACyAEcAAsAEYBQ6AEqAKuAEcAEwAA4ACsACcAAoAMsAA2AIwAAsACMAEoAFeBEsBAABGEBC-AAsAE8AEIBAMAOABEwAA0ASyACQAAeAGwAGuAGiAAiAMgAA0AEgAE-ACsAAkAMCBCqAS6AA4ACoACcAAaAEkAE6AAgAEoAE8AAUACUAG0ACMBAcAAkAKcAC2AAcACqAAkACuAGWBEaACqAO-AGoAGYAAkAKsAGcAEcAAcAEwACgAE6ACWAC0AQsACgBEYAYoAAYACgACaAAiACMBAkAAeAEmAK-ACaAE8ACQAEEBC2AAuAGeAEABGqAA2AEuACeAAwACQAEmACwAAwACgAAmAEYACkAGmAGwAAYAGiAIaAEiAAUAAgAGaACqAIgAAYAAcAKoACyAGkAC0AEUBEiACoAAeACWBCuAAeAAYACUAEcAGoASYBA4AAIAACBESBCUAEYACcAIsAE6BIOBGOBEcAIeBACBIKBAOAAwACsAEEBK2AAWAAoACUAAeAAoAGaAAMBEkAAsAIsACKBASACSAK-AE2AA0AWwAEmAI0ACQAAiAASAAoAMWAKyACMACuAIeAAiACqAAgAASBCsAMwAC6AGQBC6AEyACcACsAAoAAYAK6BAgACkACsACcAAaACaAEsAI0AAgAIiAAcACWBIcBAkACwBAeACaAOqBEKBC0AIQBAMAMgACeAGuACsAAMAKUBEQBAcBCyAAgAAaAAoAEuACYACiAASCAsAEYAIkAA4AS2AE-AEaAGkAEiACeAAcAEuAAcAEaBMwAEKAAoAEOBCSACwACWAGsAA0AAkAAeAA0AI8AM4AAUAIqAK0AKsAEiAGwAKEBAsAAyACWAG8AKwAAUAAuAEcAEGBA4AKGBEqAGwAAeACaAIWAGwAE8AESBKwAGsAGeAAaAC2AIOBK0ACaACWBEkACwAGQAAmACIBKeBEuAG0AIeAESDAmAC0AIICCmAQSBEuAAoAEOBA2ACiACkACYAAwBG4AI6AIwACmACMBEeAIqACWAAMBAUACWBEYAEgAAUAEcAI8AEGBAUAAABCwAGuANWBCkACyACqAAMACQACwAEgAGaACABC0AGWAGcAQ6AC0ACgAASACYBCiACgACeACEBCkAMmAC0AE6AM0AEoAEuACSAAgAQ0BGoAGaAEoAIGBCYAEmAAWAE6AEwACsAGqAE8AEiAIABAwAEyAAoAEsACgAAeACeAAoAG-ACABAeAAkBESAGqAEaAGMBASAKaBGyACYAEsAEeACqACyACUAGmACmAASACQAIaAGeAC-AA0AAWACkAGUAEqAAUACCBAkAMuAK2AGUAEsAE0AAuAAMAEEBAQACMAOuAIqACOACmAAcASaBAUAIGBCoAKQACyAKuBQ-AKmAEuBCABEqAI4AIuAASAGYBGWAAoAAgAAsACqAAQAAkAEmAC6AViAEcACqAEKBAmACeBUgBEcAG2AAYACkAE0AAQAAYAOUBIsACOBIiAKiBEeAC4AKABOmBAuAAYACwACmAA8AAaAA0AI-BK0AG0ACCBCyAAGBEeAASAGoBAOAAUACWACmAC8AE8AGEBAoAAsAEcACeAK4AIkAMEBEeAKmACqAGaBGeBI4AE8AEiAIOBGYACoACsACyAA8AA4AA0ACaBCaACwAAiAIaAGaAEUAEIBAoAA6ACQACaACcAEsAAWACoACSAGWAAWAGuAMqACCBEYAASAGaAEkACgAAkAGYAAYAEGBGyAAwACuAMkAAaACaACiAA8AICBGmACSAE-AEcACgACmAEWAICBIyAIgBGWBAQAE2ACoACUAESBCaAEgAGoBAgAAmAKeAOsBKiBC0AGsAEWBKmBASACgAKyACQAGqAKsAG-AGoAA8AE8AIuACoAAaAAsAGABAkAAOBCwAEOAAaAAkAEWACwACUBCaACABCmAEECCEBCgAIsACEBOoAAcAScBEkAECBC4AG8AEYACsACQASSBGEBKgBMmANcAAwAIABGsAEcAI2AAsACYAEGBCoAIGBE4AAiAGaAEyBCaACmAEuAI0AAYACSAOWBKABKyAAMAAqAEWACMAIQBEmACMBCqAAYAE-AASAKoAC0AAiACiAA4AEsACcCAmACIBGGBAwAGqBKEBGcASyAEGBCiACwAAmAG8AMyAGoAGCBA0AI6AMgBIWAC4ACWAAoAAuAIoAC2ACeAGeAIoAEMBE0AIQBQ-AC4AAgAAQACeATwBCgAAABMIBE4AA8ACqAGSAEIBCsAEkACSAEmAEoAAoACcAGCBCmAM6AEaACoAEUBAUAEaAGaAEaAAQAEmAAWAEkAAoAGCBEuAGgAAuAMIBCmAGUBGmAC-ACYAAaAK8ACUAAOACSAE8AISCEcACQAEsAEkAASAI-AAYAOEBEiAAgACkAG0AAIBC8AEkAEyAAiACMAGCBE6AC4AEoAImAG2AG2AEkACkACgACYACsAEiAEOAECBGkAGiAOIBCUAA4AAiAAEBGeAE6AEqAA6AAwAGIBAWAAmAC4AEqARGBCkAAcACMACUAIEBAgACCBEgAKqAGYAAoAAUAEwACUAACBK0AKABCaAEUBQsAIuAC0ACmAEcAAgAEoACSAEABAeAAgAKaBEcAAWAAQACEBGUAE0ACcAE0AAgAGsACgAEcAAeACkAGqAMkAGCBSMBAuAI2AAYAA8ACmARsAGcACYAC6AIABC0AEyAI4AIaAEYACQACqACWAGABAkAEqAEIBCcAA0AOgAAQAC0ACaAKkAA4AGIBCkACsAGUAAcBGkAAuAASACOBCUAASAKwAAiACwAEYAEOBCWACUBCoAAaAAgAAgAAcAO0AC8AECBAyACWAY0AAKAGgAEABAYAAkAAuANkAGOBMsACyAEyAAqACyAAqAEeAEwAAIBIyAEsACsACSACgBEWAEOBCeAEIBEoAA8AGMCGUAC2AEsAIuACcACEBECBCcAKiAIGBKiAI6AC2ACMBA-ACYAAUAAEBIaAAUBCqAI0ACmAGyAAOACuAEkACWAE8ACQAA0AAUAAmACiACWAAqACcAEoBEqAAmAC6AC6AEOBVYBAwACUAAeACqACUAEgAEiAAsACQAEwAAgAE8ACmAGcAAUAEuAKMBGaBKkAIwAEqAG0AE0AK6ACWAIgAIsACsACeBIsAIIBAoAEQACeACGBAsAKeAC2AIuAGiACMAAcAAYAAqAE2ACqAKoAAgAGYAFgBEcBI2AMkACEBAYAEQAAaAAYACsAGWAAUAE6ACYACABCUAIGBCoARYCCcAEwAC4ACEBAuAAABCCBIiACWAAuAKgBCwAG8ACWAAkAI-AK-AAsAEeAGQAAwAOuACkAGmAAWAAoAAEBA4AC0AGQBC4AAoAAiAGkAEmAAgAS-ACsASUBAuACSACcACuAGoACeAQsAGmAEWAM4AAQAE-ACcAAQACkAEeAAqAG6ACcAEaAGmAVABA0AKsBAsAM2ACUAAiAAaAGUBEcAEsAGYACgAAiAEuBCYAAsAK-ACSACaACWAAeACeAIoAEECAeAS2AC4AC0AE2ACgACyAGyAG6AE-AG0AEQACKAOSAMgAAiAC2AEkAGwAAWAC6AU0AAkAA4ACUBAgAEsAAoACsAAaAMOBCcAEeACYAAcAE-AEkAAkAC0AISCIqAGwAGYBCoAAcAAgAC6ACkACUACaAC0AG4APmAEIBEMBImAAUBAkACeAAkAAmAEUACQACsAEMBAmAIABCUAIWBAcAAsAGOBQQBCeAAwAGoAS2AIiAUCBMgBMoACoAAcAXABayBIgAAqAEQCCmAAsAAcACWAM4ACiAEGBKsACgACgACSAECBGmACABEaACgAAmAEmAIABGABAcAEuACeAMqAAiACSAAcAASACcBAuACcAIgAAqACiBI4AE6AAUAASAIsACaAEgACoACoAEiACsAA4AAcAEsAK0AKgACgBRGBEsAGkAU6AJ2AAeACgAC4BAcAImAAgACaAEsAAUAIqAI0AImAAOAAUAGeACUAEkAOuBCgAAiAAIBCuAEMBEYAAQACWAQMBOIBAkACYAAYAGwAAWAIWACyACUAA2AA0AAoACoACgAG0AE8AKeAEcBEYAGcACwAAABAOBCyAAQAGuACsAI4ACABCKBGyAA-AGeAAeAI6AASAGABASAE0AEYAAcAG0AGABAQAGiACYAAQAE4AAWAAqACkAAcACYACiACoAEOBGkBISBGcAE2ACiAECBMKBGEBEwAG8ACQBCSACuAKcAAgACKBCSAI0AI6AAkACuACUAAqAO2ACgAAOAOmAIOBOGBCEBCmACiAGoAAEBIaAEoAAUACYACeBEwAC6AIoAE4ACQAIcBEUAC6AAYAKiAEWAS-BA2AAgAEyACUAG2A","3-3":"BmAVSBFKBHgAW-AKyADCBNwBO4AQ4BASBQ6AKABWyAF-AEwAc2BGuATaBG2AGUBHsASWBL8BU0BFKBOKBT-AEuAWwALEBE6ARsAJIDZEBUKBWGBM0ARABMMBDKCBWBMoAHuANKBMMBK4ANSBViASWBH0AN6AMIBEABVIBUqAFKBRgBJ8ACSBTmBGCBR8AB4ASeARmARIBA6AMCCC6ALiAHuAOmAUgBCCBP4AR6ANiAJQBB-ALmBGqARsAOEBKIBSQBCqBRSBKwARoAEgAL6AC4AEaAUiBJwAJqACABSaAQsAKMDHABSuAIcBPqALKBJQBN-AKSBSKBIGBKCBOCBRuAGeBDEBMgAVyAM0AKkBdqASKCTwAFuAMkBIOBKOBP0AGmAQ4AOwAOqABqAJQBS0ATSBRkBRSBS2ARMBPIBKcBPkAM0AQwBQoAGwBLQCJqAQGBT2AIcBOsAJcAI2AEqACyAR0BT8ADcAIIBPwAAeAGIBKyAKwBLMBSOBDyAL8AckBOCCPUBNSBK0AJGBJcBJgAS-AX-AQCDTmAEiAI4AK6ARqAJEBPGBCYAEmAQ8AKGBTiBG-AC4AQ8AAkADkBZoALqAH8AM0AGABMkBIwAQaBLABOOBRIBHECG6AG6ALeAF6AHGBOiAJICYyBHsBPyAEoAGOBNABNYBI2AM2AO6BNABH0ACkBN8AVQBO-AFaANEBTKBF4ACqAJsAH-BJABLyAMeCT0AU0APyARGBNICMsBTeDH6ATqAM2AGYBQIBJeAU8ACiAIKBM0AMwAMsABiAMeBK4AIgBAsBA2AGCBNkBDqATmBTOBR0BTGBE8AWgBA8AXIBGyAO2AIMCRgBOSBOeBTKBAQBQIBKgAP4ATwBR0ARIBI0ATIBV2AFqAE4ARyAR-AGEBQUBQsAOKBSKBRQBP-ADuARIBMyBEyBLCBLsBOQBMmAEsBKCBGmAJ0ALoANyAMWBH6AJSBKuAIEBP6AWyAPqARCBJqAT8AJwAM-AF8AFACFSBFMBHABMsAK6AScAMCBM6ATqBHuALOBWcBP0AKoBWsBNABN6AHWBL6AXoAW8AG4AM8AJwANEBSQBQSBK4AK4AF0AGABT6ACkAHwBLEBQcBQ-AJcBJcBQkBLIBH2AMMBSABI-ADuARKBKABR6ASEBCeAPyAM6BEeBCCBLwANIBJsAXIBNyBQCBKkATABEcBSOBYGBGkAPeBTKBSqBMEBUgAOwAJEBV4ARmAR4AIOBJ8AO4BEGBSABQABKCBFGBN0AG6BRGCSqBSeBAsARyAJiBXuBG0ATYBDcAF2AG-AJwALgBTQBOuAMyAJwAOkAMqAK-AHeBTwBPwBJqBMACPIBKwANCBBGBCsBHCCMsARIBGABWEDZIBPmAHmAGwAUWBD0ALuARyAROBRkBNeAImATcBGCBMYBAyAGwAN4AM0AKEBMKBHABLABHEBEkAHqAG6AKqBAIBVuAFOBLSBP-BJuAJaBAqAC0AZqBEsAIUBPeDP2DHqAOkATqBIGBOMBN6ALoAGOBKqAX0BJgBSMCRCBN6AKSBNwAEEBEuBGaBL-AQaBCuAR2AH0AM4AFSBNwATmAE2AIyAU-AEyATSBTIBF6APmBE4AMQBGKBR2AYuAM6AEGBQ-AH8ADGBFoAIEBO2AMCBO2AMcAOkAEuATuACMBP4AOeAEqAGgBP4BLgBI0AEABIsAN4BNeBRqAG2AK-AMoBSsAZCBPEBTOBP0AJKCOyARGBG0AKuAPuBSyARwBVWBPkABaBJECRABR8AHwACEBScBJOBR4AL8AD4AUACOeBW6AScBI6ASIBYkAPoANcAXUBF0AHwAI-AISAJEBLKBCsAJ4AI2AT-ANoARyAD-ASUCGuAMuAHoBBeACmAG4AFCBKiAH2AJWBIUBGuAEKBMCBQqADIBICBLsAJ2APwAGMBBgAJ8ASuAFeAEMBQeBSqBESBP6ASQBGsAM2ARGBGSBGyAQmANaAMEBQWCQABRaCJyAHaAT4AMmAD6AU2ASkBMSBH0AV4AJUCGaABkBJkAKoAQoBJ0AFIBNGBQABSEBK0AI4ASUBEABO4AVuAOqAECBC6ANMBOSBTUBH6ASYBVyAEoAGYBCABSWBDqATmAEgCHqAVSCEgARCBLiAPoAP8BJUBImASUAUUBJ8AFcATwBOYAJECI0AHwASeAH-AHsATIBNEBQOBO6AZcBVEBJgBHWBC2AFIBJgAQCBHABHMBR2BZ0AJMCRiBNmAW0AJCBUQBOaARABOyAOkAR6AMeAVOBWyAKsBOmAHkARsADgARyAWCBMIBPmBHGBFwAQ4ARwAPABOIBFkAU4ATsBRABS8BM0AGyANUBE2AEkAWmBJwANyANoANsAK4AMKDFyACqAYsAJkAJyAC6AFwAH6AO0AIqALCBOwAMGBOUBHyAKoABmAO-APGBKcAIuAMSBOaBHwARoATwBLABLUBE-ALKBLKBQMBGMBIuAI8APMBRSBP4AREBP-CUUATyAT8ALEBVoAOMBOABBqAOMBRiBUWBQ4BI2ARyAIYBE4AHABEkBI0AH6AO6BDOBKYBS0AI8BSiBM4AOwAIWBNcCIwATYBE4AJqARQBSeBQsAL0ANuBPsBQ4BIcAPIBI-CLqAJsAGyARwATABN4BQ6ARyBFYALuBIyAQ8BIsAJcAMgAO-AJ2AMsBSgBEmAKaAPKBLsANEBOsBDsARMBYGBEgARmAK4AQ0AC2AK8AQeBVGBJqAGUDI6AEeBT6AF6AIcBHiBFsAJ6ANKBMiAEGBN0BPgBVoAIgBSwACoAPwAIWBKaBIIBMeBIABG6ALKBKuAG2ATeBNOBTeAN0AR4AOYBRABL0BPUBTWBHsAQoAQSBNuBPyBQKBT4ANIBIgAQUBU0AIIBIwAX4ANEBTEBOSBO2ATECHqASaBH2AVaBPWBK4AIQBAiBLuAIyAI4AEwBCmAYUBKABGEBNkBLgBM-AJSBNwBGqAPsAVyAJCBXYBM4BQeAKyAJ-ATkAGQBO8AEuAJ6BTgBPEBGuAJ8AUMBSwBGsAAoAPCBACBTABO4AHABK6ANoAFQBQCDEyALcBHoAPABE2AFqACyASqAKKBQ-AD2AUSBF6AFWARABG0ALuAF2AP2AT0BKyAEiAFiBPYBPwASYBR0CWmBHWBDQBG0ATiBDABICBL0AI0AVEBSABNABUeBO8AOwAROBL2AVEBEyAOYCGUBFaAQwAJCBROBI4ALiATyAJyARsAQ4AS0BJsAGoAPkBFOBEeATYBN0AOmAKcBQIBFCBBKCDWBE0ATkBMABXsBRcBOqBPCBKGBI2AUSBHIBCuASyAToAVIBSgBbCCQwALEBG-AGqAKABMuAVuBDWBPABDWBSaBM6AQWBSyAUsABQCK2AEMBI0AQiBR4ANGBNYBNqAC2AYoBJqALwAKsAEuBDKBLkAIoBEGBN6ATuAHuAMyAOoBFgAI6AD-AO6ASiCVgBJiAP6ASIBNyANABG6AHsBSEBEcAEOBFSCVuBFcAPMCEsAQkBDgAQABPwAH0ADEBTwAEcBFEBTsAHABEABWQBJKBJ-ALiAI8AQwAUOBJqAN4AK-AQgBCQBN4AWaBMOBTmAU4AT-APWBGYBCGBN6AO2AQqAdMDO-AJqARkBLgAPcARYBJoAJ0AQEBP8AGuAEwAEqAUQBTGCOqAHEBUIBGkBI8ARoABuAM0CRiBReBCSASeBGsBTkBHuBJMBVMBP-BBqAIaBFSBNyAO6APgAHsAKYCKwAOUBV4AUABD8AO8AQABF2AR0AU-AUiBFwAIEBSMBKABO8BLwAI-AQuBLoAIeAUABFsAG8AL6AOuAW8ATaBSUBJmALkAG8ACmAHeBL0AVGBLUCHUBVIBM0BEgBK0AGGBFeAM0BMcBN4ARqAMCBamBI6AXGBNqAJkAHUBTwAEeBOeAJGBNYBVqBV2BIeALABRiBWqAEIBFeBGyAJMBJyACkAOkAP2ALeBciBO0AGUBJeAJKCO0AEkAOwCM6AEICHmAS0ABcACgBMsAMwAAsAD-AMqBXMBECBTGBOgAK6AO2ATABHsBHSBQuANaBYEBJkANCBQYBUKCOwAF-AFcBF0ASyAIKBICBIsARkAP8AQuAC2AF6BCmAEgAP2AJsAKoBEiASUBD8AMCBEoACyAIoAT-ARsAHIBNEBAUANCCQUBPuAJkBTsBE8AVqAFaBLEBDYAUUBF4AQ0AQyAScBEsALaADuAP2CHOCFeAA4ATcBNsAT2AFeAXaCKABQiBW2AIsADeBQcBMiATsATGBDSBG4AH6ANsBVcBGyASqAI-AQmAJQBYwBDeAM4AG-AG4AQ8ANQBKGBVOCHiAR2BFkAJIBIQBDkAPEBK6AFGBFmARKBQQBRABBgAROBDsBIkBI6AS4ATABHSBNKBCwAI6AJ2AIuASiBbgBN0ADEBP0AK0AHmAKyAMkAMWBRCBS0AGcAQaBWeBDmARQBLmAB2ARQBLUBK6ALkBRqAKcBReBJCCRSBQYBFaBLqAF2AH2AKsAQuBIEBQCBKABJ2BRQBSEBIUBJuAD0AJeAV-AQWACSBH-ASwAE-AJmAQCBC8AH8AHqAGyALCBViAFABGsAGSCHABb4AIaBMMBJSBCeAY4ASOBMABDgANqARgBOyAR0BPGBTQBBEBTiBJMBGyBRKBQoBNOBMwAGcBLeAMqBHkAJ0BHyBCOCGCBHCBB2AAYAUABHIBT0DTaBWcBJmAQKBOcBIQBPCBO6ASqADsAFKBDuAQCBN4AJaAQwAR4AF8AU0ADiAQ4AK2AF6AFqAVSBQUBCuANkAGOBHwAD0AOGBSABQoBWgANABJ-AIYBNsAIgAOWBL6ARkALIBU0ADaAA8ALaBAIBXgBOOBGgEMQBViBPEBU4AGYBIABKqADyAREBM8AGMBQkAJ6AK2AV8BTCBAGBDOBNsATMBNMBNyANiAPMBKcBTOBNiBHMBRIBMwAFKBGCBIIBLGBAoAQeCACDQ0AIEBJMCNiALKBHCBI8AE6AHOBCmADuAE2ADGBDUAJkAVCBE4BCSAOIBGyAKIBQGBX4BOaBT4AT0AFWAQ6AOIBRwAKyBg0AIIBBmAI2AN-AKuBN0AMoBIwABwAL-BFyAF6AT4AOMBJ-APIBFkAXiARCBVCBHoAM0ATABT6ADqAhQBDeBT2AViBCuAPWBIoANsANoBNwATuAQyBKKBUkBGwAJ4AOiATwBMwBTYBNCBI0AL-BK0AGuAFoAREBTABFCBIGBN-AFABH0AXEBMSBI-AGEBT8AIyAE2AMsASGBZ-ARuCTCBS4BM2AP0ARSBLsBJMBKGBU2AP2AO2ASWBSqAX0AMoAS8ASUBQEBOuCSACFeBOsAL-AIuAPYCHyAGOBLcBT6AQmAM6ALKBFqABeBHsATUBJqBSABSqBPMBIQBKCCIiAGcBQgANwBRgBNIBJQBGiAI0AK4AIsBIQBLkAHyAHSATCBRgBEABPABFIBQaBT6BIYBNECQGBG0BSYCIuAHEBHwAGuAJIBNSBGCBHQBTEBR4AHqBJcBRoAZyAIEBGGBOIBOqAGWBO6AGgBR4AZMCIqAPyAT-AHiAJABKKBGsAN6ASeBRmAOYCIsAS0ASEBKyALYAAsAP2BJKBN2ACGBTGBL-AFABSEBK0ASeAK6ARsBYwAJwANqAOwAK0AS6AOmAHKBRuAHuAHCBQQBRmBKMBNCBJ6ABkAFUBFkAOOBAyAKuAJkATYBJuASOBVCBIYBR4AL-AEaBEaBIkAHkAMuADyARQAEiANiBM6AFuAGsBPqAM8AHEBJkALgAJ6APSBHsATyAD4ANeBNKBPaBJqAM6AEeBIIBSQCJkAJEBZ8ALABEGCH8AMKBKeBEyAHABFSAI8ARSBK8APkBR0AGkAYwAI2APuAK8AK6AF4AIiAGSAMkCQOBQ0AM-ASsALABOOBSSCRiAPGBKyAJaBSaBGiADkAQCBSWCIABGgAM-CUICSeBLYBA8AKyALuACuAUABR8APGBVaCVoAI0BDIBIMBD2A","1-4":"GSBSOBEsAIgAAeAG2AUMBEABCWAA2BGUAAyAMmAECBEWACoAEsACoACgAAgAIsAKmAOYBGsAAqAAcAI6BMGBGQBCWBAiAI-BAeACqAGUBGmAGCBCuAGwAVcBP8AA-ACgAEuAPwBCQAKgBE-AGgBAkACmAAkAC-AGYAGWBEmAK8ASoBCwAAsAGaBIkACyBCgAI0AC-AIUBAuBIuAEoAGqAIYBAkAUqBE2AAmAGiBCmCIMBRCCC2ACmAEkACUBCQACwACsBCKBCuAAEBCcAGQBAIBAsARMBA4AGkAGABVICG4AEOBEABM4BKqAEwAAqACUAE8AAeAC2AIuAGsAAkAMCBGUCEwBKCCGaAEyAGOBGABAQAAmACMBEuAKGBMSBCeAK-AG8AKKBEECAkAESBIyACABE0AAaAC6AGSCC8AG0BAaAC6AESBCyAC8AAkACmAEYATmAGoACiATSBM8AAsAAABCoAKiCMABEiAAeBAkACyAK-BEsCA0AE0BKcBC2AC8ACiAIyAE4ACKBAeACqACwAIuACUAAaAAOAG2AQuBCYBEqAE4AEiAE8BCsAGqBG0ACgASYBAeAIyBKuAIABCUAAkAGIBCmACoAEkAE2AIsAEcAC4AAsAGOBAqAEGDMuCEaAQ8AEyAAsAGyAA-ACCBAiAGqACmAAOBIwBAoAAwAUeCEEBC0ACgAEiAcSBI2BCYAAsAM-ACwACiBCoAAeBC2AAmACaACCBAaAAkAIKBCABIACCoAAODE4BAUACmAA2AGkAGYBCqAAcAEkBEyBA0ACQAU2AGyACQBAaAEiACSACyAEoACaBIWBCYAAmAGsACGBAcAA0AEQCKiBCmAGEBEMBCmAK0ACYBEYBIMBEIBIGBCMCGmBOKBEUCCwAASAGcBECBEMBEaBEaAA8ACABEiAGsACeAK4ASoBAiAAKAGYBC2AGUAA6AAEBCcAEqBAcAAkACEBEGBGYCCqAAsBCEBV2AE-AEiAC2ACYBNYBRACOcBOEBEsAM8ACwAOaBAOAKyBC2AUWBGsCSGBAgACOBKEBKIBCqAEsBAsAEUAI6ACuAGQBCCBRqCIgBEMBAOBIEBAsAEqAGYBMMBKUBAeAM6AMABEaAC2ACWAUCBEWAE6AIgBGwAIaAI6AGqAAyAC4AIKBSuBQqBC4AKuAA8ACiAEeAAmAM0AEQBAuAG2AAiAOyAAmAAKBIuBCWACmAEcCE8ACwAAwACEBEGBAYACgAEUBAYAIwBE2AGmACWAEqAGiACoAKeBAyAECBEgAGECGOCAkAAkBCsAGaBEIBCYCAmAKaDE0AICBAaAAOAKgBE8AEWAAuACuACUAEuAEoACaAI8AAeAAABAmBAKBEUBCoBMWBCiAGaBG0AM8BM8ACQCCyAGcAAuAAABASAIoAEoBK0AEGBA0ACIBAeAE0ACWCA2AM2AAYAGiAG8AKyAAgAOGBCsAAmAGGBI8AG-AGYAC4AIqAAOAGkBC2AS2AGgAAyAMCCEQBCCBCWAAOBCqAAeAA6AEgAGYBKgBEmBAABAGBCaATECCWACiBEuBAuAEiAC4ACABGuAGqAIoACeBUMBAcAOMBAaAAsAE2AMkBCyAAyACGCEeAG6AEABC4AIwAGiAKcBASBESAAmAEaBGOBSSBAgAEQAAQBP8ACeACYACuACKBAWAGwBAGBKyAGgAEcAAyAAoAAaAAwAAUACABCcAGsACiBMYBKcBEyBG6AOmBC0ACgAAqAMyACwBAcACQBA0AAgAGuBCYAEiCCECEKACmACMBIiBOOBC2AKWCCKBAYCAoAEoAG4AGeBEeBEuASmAEoAGUBEcBI8BAaAKOBC6AGwACoAOsBGqBCiBI8AA0AGGBCKBESBAqAM8AGiBAKBCoACwAWGBAOBK6BCIBEiAAkACcACIBC2AGaBEWBACBK-AAcAGyAKMCEmAKOCEyACuACsAEyAGuAC0AAUAG2ACWAAoBCsANKBCcAIiACuAGSBAaAEWACMAAeAAIACsAAkACGBC4AAaBC8AEyBA2ACWAIGBE6AKyAAqBTABGCBKCBEqAQwBCIBNyAC2ACcACABIgACcAASAE8BAiAGyAAWAOACIMBMADAQAAUANqBI6AOqAMkAA2ACUAEWBIMBEyAAcAKCBQgAGqAMaACABCuAKUBEQCGoAGIBW8CMeBCyAAeAKOBGyAE6AAiAIQBAaAG0AE6ACYAC0AIoATgBGsAM4CGoAM8AGKBASAEwAAsAIwBE0AEOBMYBA4AAIBMuCEMBT2BEqAAOACoAIQBCoAR-AC4AGSCGYAEuAI2BGmAAsAMKBE-AT0BA0AAaAGIBI2AEIBCkBCcAOaBIACEaAEyAO-AEkAAUBAWAI8AI8AE8ACWAAmAI-AMEBGkAG2AEkCK0ACkAC4AQ2AC8BCkACCBK2AIgBEeAAcAS2BEiAC8BAWAMoBAIBEKBC8AE8AESBCABAMCGCBCyACiAEmAA4ACkACMBC6BGIBGsAA0AAWACMCAgAImARIBGgAEmCIABC-AIkBA6AEWACGBAiAAIAGOBCOBVwBCuAESAK2AAYAI4DMCCC0ACSAMkCSaBEsAAyAIYCG-BAmAKeAO0AECBAoAEUBECBbaACcAAgAAABGmAAOBC6AEiAEKBEGBESBAOAGuAOkAQoARsCCmAI8BAYBA2AAOBG0AImACQACoACuAI6ACyAFSCCQBOkBKyACwAEeBCIBE4AOSBCwAC0AGoBG-AOSBCYBAaBECBC0AGuCGmACQBQKBGKBC-AIOBAcAIqAEyAEYBA2ACiBCuAMsBCwAGyAC6AIqAGGBEoBAsAAoAAYACiACEBCSBAWARACEwAC2AAcAICBCiAEABCuACSAGmAEWAE4BEeBEkBAoAAuAI0AK0CQ2AEABCmAAQBIQBCgBTGBGiAIABAcBEyBE6AEOBIMBEACAsAE2ACQBCCBI8BOCCOgBGABQyAScBA-AA-AEYBEUBOqBCkACoAC8AC2ACqACGBCqACyAAIBEuAUcBEmACwAMmBCOBCMBS-AE0ACgACkAGwAAuAEsAIwAEmAEWBAwACKBEQAImBAcAEYACwBI6AE4AC4ACiAQSBGEBF6AGkAIWAEYAE2AEWAEqAIQBAwACgACUBA2AOUBAuAA4ACOAIyAAiAAUAEkAIkCOmCCiAAcBK-AAaAOyDIUBCgACiACoAE2BCoAAWAIgAE6AC8AAGBEkBYACIcBCoAQ2ACuAI0AEUBAOACGBAaACABAkAE0ACWAEwAGYAEUBNEBOKCAoAGKBIEBIWAA2AKqAMCDGyAAyALUBAWAEGBAeACABIiAA-AGeBCqAE8BIiBGuBGaAEwAO4COkBIaBCaAAgAA4ACiAIuAIyAE0AC2AE4AIaBIyAAeAMuAPwCE6ACIBCIBMABQSCAWAC0AAQAIgAE-AAmBEwAE8AAUAEEBAsACmAAmBGCBEoAAkAKaBK6AEoAECBKEBCWBK0BG6AI0BAaACACKmBCgAK4AAeBEsAC0ARMBEmAA4AAOBGsACCBC2AACBEaACyAEWBECBEKBASAA-AAUAC8AC2AEMBC8ARYBGSBAgAGIBCoAASACmAECBGgAAkACSAEWAAgAEIBAQCGcAEqAC8AEeBI-AGcCIYAGoAG8AA2ACcAGmAUABGwACqALcCCQBCcACaACiACkAEMBKyAS0ACeAIUBEyAAMAK8AAuAG6AC-ACcAEMCAuACqAEsCScBR0AEIBOcAC2BAoAOACCSBEeAAeAMcBCcAEaAE6ACqAIKBCwAIIBEGBKqAEuAE8AEgBAkACMBEiACqAOwAKoACmAEYAC6AAwACEBEqAGYBAiAAeACiACYBRiACoAMABCABAMACWAAeAE0AMuAE4ANIBKYAGwACiACuAAcAEsAAeAGmBIECEUAAsAGSBCYACOAGWAKaBIcAGiAIABEqACsAG4AC4AYYCEQBJ8ACQAKmBEABCOCG-AAeAE2AEGBCmAGKBIMCEMBA6ACYBAQACiAAkAImCEeAIoAC8AAuAKmCAsAIkAA4AAqAEaBAqAAgCGuAC0AIuBL8BGGBQYBCCBI-AAiBCkAbuBGKBCiAC8ACyAA-AAuAQKBKKBGOBCUAGmAEqAGcCEEBE2AGmAEoBAuAGWAAcAE2ASmBE4AEOBI2AGWBEqAEqAAsAGeBGgASMBAsAAsAA-AL0AECBC4AKEBEeAESBCgAGuBGeAECBA0AAaAAiAMWFICBEoAAEBEOBC4ACCBECBCUAGWBKGBCgAEiAQsCXyAGICAWATKBEcBC0ACYBEQBRkAEWBICBIABGaBAyAEWBSCBKEBCSCEcAM4AImAG4ACiACiAAiAEgAE-AAABCYATwBCoAEgBEmAEqACYAG-ACGBAqAE8ACsAGECKWBKqAEEBMuAE-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-ACcACsAGsAAmAAaBM-ACoAE0ACsAAsAGkAEeAEcAC0BKIBAUBCaAOuACYAESBM6BE0AC0AGGBIOBIABIiBAcAGSBE-ACABAQBCaAEsAAaAAqAGWBAqASEBIABEaACUACsAAkACoAAUAAiACmAEGBAmAEqBG6BAuAEUAOeDCuAGgAGgAOoBGeAE6AEMBE6BIGCU0BI-AS2AC0ACkAOiAKGBCOBAQCCiACmACQAEsBMCBC4AGWBGCBGmBC0AE8ARECAKBKkBNYBIIBE2AM0AEGBAsAA2AGaALsACKBCKBE8AGwAC6BCeAKUBAOAAkAGmAEgAAABCiBIuAE0AEaAI-AGsBCiAGsACoAC-AIyAAcAIiBIwBCqAE6BKWBAwANMCEyACoACwAO6AEcAGiAEiBIMBT2AMsBGiAO8ACmACSACCBE2AGwAA-AAgAIEBSsBG4AECBICCCQATyACoAEeACsAGkCEYACOBAIBE2AI4ACKBA-AAoAEYAG-ACWAAMAE0AGEBEwANqAEyAEoAAqAEqBKwAAYAAiAAkAEcACkAAYAEYAI2AQeBCwBCSBAcAQKBAkBEyAE0AGcAAwAGwBCYAAcAMgAIMBGWALMCCUBGmAUSBE8AEoACWAE6AGECMQBIcBAyAGKBCyBCyACmAQaDEqAAaBCkAIGBE8AGsAC2AEqAAaAA6AGcAEwBCQACqAQ4AKSBA6ACsAMSBGsAKmBAOAOqBMqBMIBOQBA4BCeAAoAOSCAQAAqAOmBEwAC8BGmAAOAG0ACkAEkAIiBAqAYKCGQBOSBCWBQ-AIOBAABK4AC2BAYACmAIaBA2AAyAEmAC0CKwBI4AKIBK8BUKBEOAG6FTUBAmAKABAwAEyAIeAECBEoBEuAGUBC8AC6CAUAKWDI4AKMBGqACyCAUAEcACABA-AEUAISBAiAIyAGcAKaCAqAGABCUAGKBEqAA6AKsBEiBA0AAwAAsACkACmAE6AA6AGYBCmAIgACABO-AAYBAaACkAEqAAwBAmAEIBMmBECBAcACsAAUAAGBIOBKKDE0AG4BIqACOBEiAE6AAaAIwACCBCUBAiBAwACWAGABIaBASAASBIIBEsACeAA-ALkBAKBAWAIYBAABE4AGUBKkBAoAAkAGyACiASUBEsAAsAAeAA4AIWBI4AEsAAeAC6AOEBU2BC4AASATICIeAAsAAQBEGBCqAIYBAeAAeBAmAI2AOwAPgBCUBAkAEsBKQBCYBG4AGgBGSAAABIeBEwAO-ACaAKEBCIBM6AIoAA-AGkACcACkAOYCA0AAKBCQBC6AI-BAOBG8AEeAIWBAkAXEBG6AEeACCBMYAIoBKKBE6BIiACGCEsAS-AIaBAYAQSBEwAIQBAOBOyASwCC8AH-ACqAAYAEYBG2AGkAESAIyCE0AKiBAYAEQAEKBEUBIIBACBVYBEABGGBEsAEIBEiAAMBCiAGiBAiAAaAAOACqAMQBAYACeAISBAeAAWACkAIeAGmAEuACUBAYBAyAKgBCwAGcACwAZMDC4AMUBCCBCUBCYBOuACcAE0BICBC-BAUAEECAyAAYBKABCoACaBGEBGiAQYCY4BAsAKMBAeAIGBC4BCcACGBGuBAeAEGBIiAG2ACsAEaAA0AKYBMACAmACiBEeBCkAAIBCwAE6AC8AKWBCSAAwAIuAEoAESBAWAKIBGOBAkAE4AAeAMoBC0AQoBOoBCKBE2ACQAAiACgAG-AAcAISBMyATMBEWAEEBGoAGWCAOBCeACgAEOBGwBCEBKGBASAIwAK4AO0AGcAG2BIkAAgAKoAC0AEwAAYACmBKCBG6AAIBAuAEABCYBA2AAcBO2BCuAAgAG4AGEBAABCeBAgBC0AAoAO4ACwAAIBGwAC8BCaBCiAQgDHSBGABGSBCeAA2AAyAE0AACBAsACUACKAC6AAIBWkBCuACmAAUAGIBE8ACmAAcAMKCG8AOWBAYACmAKKBAwAEmBE6AMGBM4AGiBA4ACsAGyAAeAQcBE-AIMBGeAC4AGEBAqAAACGiAKoAC4AKkCEMBEqAQOBAYAA4ACgBA2AGuAAaAP-AQECGaAGwACkAEsBI6AA6APUCEOBSOCQKBAMCGQBEWAAOBWQBE8AAmACyBQYBGaACoAOoAA6AEyAR8AIyAEUBA2AIQCQsAC8AAmACUAC8AEmAGKBOYBEeBKwAEmACQACqAO6AAcACABEaACiAKaBE4ACiACeAAUA","2-3":"JgAQ-AVaBXEBGwAGkAQeAbABOoBAuAGsAIwALMBN0AReAKKBOSBGqAC4AV4AEYAGaAQuAPkARyAGqAEUAEWANQBQeAEuAIsAIgAJkAGUAEsAGuAF4AKmAAiAEUASoAGmAM6BGcACwASuAIqAAOAMqAGiALqARmAIkAI0AUmBCeAQ-BHIBGaAEABTEBCaACwAEyAOgAImATcAGABJgAGiAGoACYALcBA6AVcAG2AK6AEYAOwAIuAToATiAGkAQ-AEkAGKBGgAKEBC0ASwAGCBSuAGgACoAEeACiAEyAOEBT8AEmAKqAASARoAOqACOAAyADiACiAMcAEsAGcAAmAFGBH4AAOCEsAQqAE2AOYAAiAH0AMGBEYAIuARwAI-AEaAMCBIkACaACeAEmAO2ACmAKaAGiAOcAHcAEKBIQBI4AI2ARGBI0AE2AE6AI4AU2AEoAGiAMIBCYAKuAIiAEmAP6AQ2AH8AAmBEqAPqAGeACaAMOBSaAEkAUsAMgAI6ACgANkAJ4AAOAAaAEWBGqAIOAOmAUCBGQAEiAM4AGkACOACqARSBEsACUAE2AQcBReAIoATMBGqAG4ACMACABOgAAyADoAEsAGQACeAOmAKmAKsAGMBHiAIkAQoAFgATIBIWAGyAOiAKwAMWBJ8AMiAMoAIeAOsAOQBEMAEIBKyAEuAKOAQmACgAOqAGeAQiAQgAKsAEYACmAMYBCqAEKBUIBCKBImAIuAUwAKQBGmATiAKsAOsACiAGkAFcACCBGuAKaBJ0ACiAMCCMmAIqAEYAAWANYAGcAEGBGcAAGBIkAEIBESACwAPoBSyACmAKgAOcAN-AQYAQiAV4BEMAAMBJkAMmAGwAFmAIUBGiAOABAeAKuAToBOwAQ4AEeACaACqAIgAMUAI2ACgAOqAO4AACBKiAOsBEgAI6AOsAGmBNyBZkAS6ATEBCgAGgAK4AGgAC8AD6AImAMoARsARyAEmAImAT4AJ-ATaAIYBQ4AIKCLQBMkAESAISAOmAEoASkAS-AEYBIKBGWACkAEcBR-AEuAIkAGWAG0AEKBKyASqALaAQ-ASIBIqAMeAEUAGeAKYAQ6ACaBL-ACmAOwAI0AP8APaBKWBMkAM0AGcATQBCgAE6ACGBCsAGoAGiAK8AMuAOsAICBKkAGoAPEBIUAHYAAECQ6AEUBKwAQCBQoAO6AAoAKqABABTKBCuAG4AKqAOgAOsAQkAAyAKiATsAGiAGWAKmAKCBAYAOaAIYAKQBEgAKqARWCFuAIqAESATCCK2AIgBMYACcAEwAGgAImAGmAKuAEsAKSBCsAGqAMeBIwAK6AIyAIcAAgAEkAIOBQkASkBCWAKcAISACYASuAFwAE-AUsAE0AT0AOuAEgAE6AKaANABEeAJoAQgAQiAFeAGyACkAMeAIiAMEBRuAC4AY4AQsATkASgAMuACWASkBK0ASiAC8AGsADkAE4ADuACABKSBESAGcACwAGmAKuAUwAemAIyAPGBQKBEoAIOBMIBUwAM4AQuAOqAHeAKUBG0AJ8AAUAA8APKBIYAN2AGeAEsAFsAGMBCkAS4AM4AECBMYBHqAOeAQ8AGYAK0AVmAC-AXmAGiAOkACgAMACJoACYAR8AAkAG2BQABGoAGkAKiAAiAMOBR-AAWACQAJ-AE-AASAASALcACCBESAM6AEuAO8AO4AOKBCeAEeAG4AEuAAsASmBQuAWqAGyAKyACkAGqAQ0ACWASGBQoAS2AIwAGaAESBO2AKgAGUAO0AYIBYoACWBIeAEgAI6AP0AEmAGmAGsAOIBGQBGkAG8AIgARmANGBEaAIqACsAEeAOeATkAEaAKcAMSAKmAE6AOGBMuALKBReAM4AKiACeAAwAGCBMwAEGBGiAM6ASaAUsANsAAcACUACABRqAJuAIyARGBMeAMgACmAE8AIcAGiAAeASABGmAK8AUKBISBNkAAkAAcASuAKoAcKBU-AC2AT0AIEBK4AOuAA0AAGBHaASWBGiARoBCWAMaASoAKwAOcACuAKgAAsAK4BI4AC2BEcACwAAcAGqAAwAKSAIeACiAGgAMqACuAQqACaAMoAGmBCuAG2AMqAAqAKsACUAO8AIoALmASuAGQAAcAKiAEWAEcAOcAGcACOAEwACmAMgAGoAGuAIeAJcAFkAS4AFiACuAIiAG6ASiASQBMmAIcAIaACeAUqAKgAMYAT2AGyAEABAOAHIBMiAJuAEaAE8AAaAKyAW2AAmAKeAK6AIqACYADCBM6ATABLsAGSBKkAWKBL6AICBOmAEABAIBAcAEIBKoAW0BVIBGcAAiAQeAQABIcAIABCqACaATIBIiALyAFgBMCBIIBU-AKaAEmAEoAEoAA6AGYAMaAQ8ALgBEWACkAEmAU2AGsAQyAFqACsAIABCoAPOBIoAMmAScAGaAOwAIiACiAGOBV8AMcAAkBUuAEqAQSBCmAG2AKcAMYAMmAJeAUCBCaAS6AGcAE0AI4AI0AMeAAABGABIwAIYAMgAQcAMsAL0AC4ANsAEoACaAMQAOeBAyAE8AKCBIMBFaBCoAGmACgAEaAEcBRKBOSAOyAXqAGsACiAGOBT0AOiBK0ACkAOYBM6AAqAAqAL6AOcAEkAG4ACuCAUAIwAKkAEWATaBUoACSAEsAEwANUBGABAcAQuAAcAGCBKYAMYBEQBLeAEkACUAGmBMmAEUAAaAGEBGSBQ4ACcATEBQcAMiAAmAHoAXmAKsAAcAM6AAoARWBGqAGeAEgAEqAAgAKUAIyAGgACwANaACcAGeAMkAE4AQoAAcACcAHCBAaACaASuAEcACYAMeAEUARUBOsAU8ANkAGwAImAIkAKaAK4AIYAEyAQCBEGBMIBIeBQ0AG0AKmAHYBKqACiAUiAKwAJmAEEBRsBEgAQwAAyACoAQmAFKBECBE6AI2APoAKoAGmAAsAGKBPgAWWBPqAUsAGeAE2AE4AdcASoAG4AMsAOyAScAI2ACUAAeAVsACoAGEBCyAVsAIWACUAKcANWBL8AI0AKYAO2AS8AGkACgAEiAIiALiAEkARqAAyAHuAHmBCeAQyAQsACYANmAQmAF0AS6AG0AGcALCBK6BGmAGcATyBOsAE-ACiAKSBW0AC-AGkAGEBKiACoALyAG0AAiAIcAG2AIqASyAOqAGcAHABQgACaAGiARiAImAAiAFiAGSACeAO-AL6AOOBCQBGcALqAPiBPoAQqACiAG8AEiAS4AGkASgAEKBG2AMgAR2ACqAE-ACYAOgAEmAKaAJMBCsAFuBHYAAeACgACkAQiAQ0ARqAI0AXiAEWAG4AEcAMYAWwAH8ANaAT4AM-APEBM2BEcALqAE4ACUAEuAEWASwAEoACcAHgAN2ASwATeALkAQCBAaAKuAM2ALABLgAN2AOgAEkAGUBReAOuAKiAC4AA6AGcASKBIUAIUAHsAIcBIWAGGBAyAG8AQCBC2AGWAGoAM2AAcACeAOGBJkAMwAQGBAsAAkAO4AOsACcATaACkACkAA4ACWBKIBIyAGoAG2AMkAPaAGeANmAIgAGkAQWAAgAQKBOUCCkACwAFkAEYARiAUiACgAIyAEkAAkAM-AUkARSBCaAGwAQ8AYkBIMBCeAEYANKBIaCOmAIuACeAI4AMGBLkAHcAAmACkAG8ASOBPaAIkACOAHmBIqACYBKyBG0AIiACaAR-AE6AGSAKsAC4ALyAMmAGWBRSBCkAEgAKcAO-AOwAgsAK6AKaAL2AGkAEUANkAPsAAoATyAC0AAiAC-AAsAOyAOaAKABIoAC0AG6AG2AGkARGBK-ACmAQwAIeAN4AUYBAABOoAPKBS6AAiAIsACqAQIBOCBA0AU6AEgAMaATkAISAEeAQsAG2ARUBEOAGICA8AHkACiACoAEYAKYACWAOkACABQ-AKUAAiAOoAOmACQAI0AGoARKBKIBEoAI8AIGBI6APsAKkAUYBYsBBaAOqATeAK2AE2AEaAI4AQkAGoAKkAO2AEsACgAIiAMcAIaAFWAJiAEyAIyAWiAAWAIeAK8AE6AAcAOMBGUAGsAEWASMBGaAQ0BLUACwAMiAMoAVaBOcAKeAKECCoAEIBXKBCgAGeAEYACYAGgAAwAMgBGgAQqAIaANsBaaBQ0AOCBVCBAYAEgAG2APuAI0AE2AEoACUAKoAQ0AMeBKgAGYAJ0AIkAAOAGABEUAAQAOgAEcAVaBM0AQSBEWACSAImARoAEiAYgBS4AGaAC6AIcAVCBIiAEoAOiAR2AAqACyAJABGkAG6AJwAUoAGmAEuAGIBIkAEABCgATmAQkAGsAMqAAkAEkAE6AVyAKOAI2AKsASGBGWAGqAImAGkAEGBQ-AIcAAqAOiAMEBCqAMcAIwAGIBBqAGuALsAOSBW-AMiACWAHkASaACsAGwAMYBTqAQ0AUoAGsACuAIABIcAGiAP4AOuAAiAOiACkAEaACiACiAG-AEWBMwBQiAEcAL0AOsAGiALiAGiAP-AK0AE4AVmBE8AEeBCuAPgAGEBKwAG6AViABGBEWAEYACqAICBISAO-AG6AMMBC2AEiAJWAG0AKaANiAN6AOCBCOBJICCoACeARIBGgACiACsAEsAKqAQUBI2AEuAGCBCaAAaAAWAEcAMgAMoAEWBGiAEaAEsAC2ATwAIWAKiAO6ASeAEuARmAA4AEaACiAEWAMmAK0AMUATgAEYAQ2APqASoAEuAEWBGoAACBLMBIUAIUAIwAWKBS0AKkAICBM0AE0AAqASeAKqAEyAC-ADUACwAEuBQ6AEcACqACoASmAGYAXyAG0BT6AG6AFoAGqAIiAPgANaBU-ACoAKoALcBEsAEWAM8AOuAWoBEiAAgANmAI-ACqAUmAAWAQkAZuACiATyBAcAIqAU2AFuAE2AEcAGmALEBKoAIuAK0AOeAWyAKsAESBCkAHKBFYAK4AEaAGcAMyANMBEyAC8ACeAEaAEaBAmAKuAL-AM0AMYAKABU8AGeAIeAOgAGUACmAXYAQiAEQACUAEWAC6AGeAK-AFIBO0ALgAOkAIKBEOBS-AEaAMkARmAIqAKiAE-AEiAIaAOoAHgAKeAK2AE6AASAToBEYAAeASyAKqARWBEuAE2AJgAIeBSaBGmAO0AIkAMmAEcAAUAAWAAWAZGBG-AC2AGeAYYBGUARYACaAAcAIcAM2AEkASCBCeAKwAQOBHgBGiAIkASqAViAEyAEeAHGBMuAKeAPeBIsACqAFkAAmAPuAEYASwAQoAL8AK0AKmAM4ANsAE4ACwANYBIsADcAGcAAQAN-AGwAAKBKUBToAMSACeACWAKwAIWAIyAAkAGCBXoAIcAIKBSuAIUAAGBGoAMiAOgAGsASwAS6AQQBVkALeAE0ASYBCeAO4AFyAMqACCBK2ACqASUBQaACcAGwAVeBCaAGOBImALmAOkAEeACiAMEBEuAAOAIqAKGBOCBEcAOaAC2AG4ACgASYAMGBHwATyAOWAEgBMkAMKBOqAVsAC2AIUBJYBGYANEBCkAGyAJeAGiAI0AO6ALwAEsAJcAG0AQWBImAH2AJABCYAAcAPIBGiAMSBV0AGEBJUCGsAPGBKwAIwAIsAIsAOiBAYAQ8AO6AKoACUAR2AEeAPsAIEBImBOmAM8BAWAEUAEqAPeACCBPgAWqAQYAMkAASASuAMwACgAAYAGyAGcACQANsAMmAS8AK0AD8AUyBIgAIwAZ8AGQAGqAOsAMoAEeAAgAMyAGeAMsACmACQAUiAIWACgACsANmAE6AS0CD-AAwACUAISAMcAIWAQqARgBIqAEABCWAR2AQqAEqAEQAQKCIsAEgAQiAAeAC2ALuAE2AK0AN2AEUAEaAU2AGmAKMBKwAIgAT6ANABTqAOqAS8AImALeARmBAoASIBK0AOyACkAAaAKqAAoAR4ACaAUcAOSBNkAGeAaoAOKBK2AG2AJiAEWAUoAMmAKkAEwAKGBEcBRsAZsAGwBQIBTWBMmAE-AOqAE8AG4AR2Ab8AGkAKEBMkANEBCgALkBKWAKEBOiAQkBGCBZ6AO4AEqAC2AI6AMwAGWAEsAGuAEwARcBASAEIACgAUsAISACYBGaAFsAM4AG6AIMAIqACWAGQAQ0ACiAEiAC2AMEBK4ASUAIWAKABEmAESAIEBIyALuAKOBIUAQcBPIBCuAAgAToAS0AIwASmAFwAIMBC8AAUAEMBEiAEmAEUAQuAGuAGkAKsAMoAR2APyAKsAJcAQuAIyAEqAAkAE4AGyAEiAEcAPwAWwACOBKmAOIBEUBGYAN0AQuAV2AIeAVABAaAISBHkBKmAKUAGYAGeAI-AKwAMsAIABCABIgAAeAUYBIQBMCBAeAKoACoAAYAAWAKqAL8AUeAIYAOkAIqAGYAEqAXGBTuAEUAESBRCBCsAA0AOaAJuAGiAK4ANiAMYBOKBIqAGiBEYAP0APIBXkAQKBG0BGuAQ0AGIBGEBCYAFwAGUBA0AI8AEABEuAPwAAEBQqAKUAEeACsAL4AU0AG8AHiAJcBP8AQ6AIUBKGBOmAGYAGUAE4AGgAIaAQ2AOgAY-AK0AG6AOKBAWACcAKGBR8AIyAMcALUAIUANcAAmAEYAGaAQmAE6AEmAGsAIuAEwAG8AE2AKYAUoASABEMBQkAEmAEWACcAR0AQ6AQsAOsAIGBMqAWUBCoACSAGOBOqAQcCSkAAWAG6AESAEgAVuAOqAGoAT2AVYAG-AIyAEgAAUAU-AFsASABKoAO4AN-AQKBKwAEeAQsBEYAGKBMoAIyAUcBIYAEmAEuAIYBTUBCuARABMuAUYAScBK8AEaAAwACmAJuAIuAAuAIiAEOAMEBPyAHiCAEBHSBDSACoAU-AKkAQOBEYAGyAAwARaAG-AAoASoAF4ACiAMgADuAGyAS6AQQBQ4AOqAMqACkAWWBT-AO2AW0AMkBJ0AGoBCQAIMBMKBMEBPIBCUAMaAEmAECBMYAGABM6AGMBQgANqAGKBAWAKcASoAMuAMwASwAGoAMcAR-AUiBOCBL-ACWAG6AEWAIoBG0AAYAEeAEwACuAIwAGuAGeAGcAEsACWAIcAAYAQqAECBL8AGmANUBEGBEiAGQBMeAPgAA-AMWBV2AR-AJuALeANUBOcBMyAP0ASqAEqAU-ASqAEUAXCBPsAQmAIkATIBGuAIqAMwBK2AJaAZkAKiAP-AAkAImAVeANgACcARuAEgAAqAGCBGuAGkAGyACkAZABIUAOyAE6AO4ACCBAgAGUAIqAAeACWACcARcAO2AGyAAcACcAEgAGqAIIBL4AScAEOAGuAIKCQMBGQACuAEWACgAQ2AFkACiALKBGgANwACWAKyAIgAQYCHyAEeAPsAWOBAMBEeAE-ACUAM8AJUACYAEeARyAKiAUuBC4AEeAT4AEwAO4AKCBLIBN0AFkATCBCaAK6AJqAGQAQIBTuAQiAKkAK-AOmAAUAWwAK4AMuAI2ACmAKyAO0AQyAMABSCBLsAC2AN6ANoBIeBSYAO2AEUAUmBIiAGSAAkAImAK8AL2AdMBGeAEiAIyAKgAICBNKBAwACcAGsAGsAM6AGsAOsAGeBG4ARoATuAKQBL0AM2AEcAPuAM2AEqAQiBMcAREBMiACaAIYACABC0AOcAAaAKsAMkAKgALYAEsAGmAJkAG8BN4AIaATIBGgAKSAM6AKkATABRUBV-BRWACoAKaAKmAA-AUoAGyAUiARmBG2AIEBNgAIuAGgAG6AR4AEiACaASiAAmAISBF4ARqACsAOuAIoAMCBKWBI0AH-AESAGwAEaANsAGEBMKBKkACsALiBImAE0AA4AVMCM8AS2AUWBGkAKkAG2AKqAE4ALCBGYAE4AQoAAWAMsAQ4ACWAAoACqASiAIsAScALoAI-AKsAOqARwBI0ATeBFkAQOBEeAGsAEmAK2AGyAHuAOsAU2AKcAGUAS6AE4AEmAOYAX8AU0AGiAEyAAiAEiBOaAQGBKwAP2AMmAMwAWKBGkAG2AKmAWuACkAJyACyBIyAKgAK8ARmAMiATYBKKBIqAOeASCBI-AG4AMsATGBEgAKoATcBGqAIeAFiACABGeAH2AImAGqANqAbCBP4AIyANMBMQAIgARoAKyAQwACcAQIBPeACUAE-AH8ACUAOMBFsAQiASSACcACyAA2ALYBE-AK0AGwAI0AGYAGoAO4AE2AMGBI4AGWAOuAGoAAgAEcAR8AAUAGcAQyAM0AKuAOGBPyBA8AM6AKmAEqAGsAQ-AGyAIQAOcBQuAUsAKsAEmAKwAEyATiALGBOIBCgAESAEiAEkAHEBAsACmAT4AR2ARQBG2AWsAT2AO8BIqACQBOqBQmAEwAOmAVQBEyAMkARwAAqATaAYiARmAPABC2AMYAMoAOmAJ-ADmBSyAOSAN6AN4AMwAW2AAiAKABEgALwAH-AK0AEqACyASoAPcBEeACWAIgAKaBZuAMiAMeAKEBC0AOyAW4AEoALsAOcACSATMBGUBAQAKiASWAUgASwACCBAYACQAKCBIqALwAJuAKeBCkAMkAIyAEABUeBHoAMyAIyAOABEuAKoAAkATABNcAI6AE0AG6ATqAEwAKOBGkAHqAKmARmACYAHyAEwAFmBCeAOeAM6AHiACSACgAIKBG4AImAISARsARQBCWAH6AOeAHUAImAEqASuAKyAGmACqAQkAIqARSBKyAEcAKEBAcAMiAFUAReAKiAQqAAkAEMAKmAKqALmAOCBIKBK0AEWAMgAGSAImAAuACsAO2AU4ABKBToAGkAQeAJ2AAQBEcAE6AKsANaBKSBPuARuATeAGKBMCBKkAKqANyAEiAEgARwAIyAPuASqAEkBI0AOEBCeAKYACwAKkAOcAEOBKyAYCBNYBCOAWyAOUAEoATOBT6AEoAOiAQ6APgAI4ACWAEMBC0AI4AKkAEaAIsASwACuAG2BN0AM4AEsAF8AS8ADeAQ6AA2AEuACiAIiACgAQuAGwAIcAGsAGmAIGBACBI4AOgACgAEeAPABCGB","0-4":"AGACGAAGAGKAAKAAMAEUACMAAKAAGAAIAAIACKACKAAKAAOACKAAOAAIAAIACGAAOAAGACGAAOAAKAAQAAKAAGAAGAAKAAGAAOACKAEKAAMAAGAAIACWAAMAAUACKAAKACKAAGAAGAEGAASAAOAAOACSAAWAEIAAIAAGACKAAKAAKACIACWAAGACIAAGACIAAKAEMAAIAAKAAKAAIAAKAEMAAKAAIAAGAAGAAOAAIAAGAAKAAOAAOAAKAAIACIACIAAIAAKAAIAAIAAGAAGAAIAAKAAIACKAAKAAGAAKAAKAAKAGGAAYAAGAAIAAKAAKAAIAAGAAGAAGAAGACKAAIAAMAAKAAGAAGACIAAGACSAAMAAKAAWAEGAAOACKAASAAKAAIAAKAAKAAIAAOACIAESACKACGAAOAAIAAGACKAEIAEKAEIACKACIAAGAAKAAGAAOAAGAAIAAIAAGAAIAAKAAMACKAAIAAIAAIAAMACKACGACKAAGAEKAAOAAKACGAAKAAGAAKAAKACGAAKAASAAGAGGAAKAAIAAGAEIACIAAKAAGAAKAAGAAKAAKAAMAAGAAIAAOAAIAAMACKAAGAAKAAKAEKAAKAAIAAKAAGACKAAKAAKAAKAAKAAIAAGAAKACQAAMAAKAAKACGACKAAGACaACGAAIAAIAAKAAKAAKAAGAAGAAKAAKAAIACKAAKAAIAAIAAOAAKAAGACGAEMAAGACIAEQAAKAAOAAKACKAAOAAGAAGAAGAAMAAIAAKACIAAOAAIACIAAMAAGAAMAAGAAKAAGAAKAAGAAKACKAAOACGAEGACGAAIAAGACGAAKAAMAAIAAIAAKAAGAAKACKAAGACKACKAAKAAOACKAAGACOAASAAGAAGAAGAAGACKAAOAAKAAKAAKAAKAAKAAGAAGAAGACKAAGAAIAAKAAGAAIAAMAAGAAGAAIAAKAAKAAKAAGAAGAAOAAKAAKAAKAEGAAIAAMAAGAAGAAIAAKAAKAAKAAKAAKAAGACMAAKAAGAAGAAKAAGAAIACMAAKAAKAAIACGAAGAAKAEYACKACGAAOAAMACKACGAAGACKAAIAAIAAKAAKAAGACGACIAAKAAKAAIAAIAAGACGAAIACGAAGACIAAGAAIAEKAAIAAGACKAAGAAKACIAAKAAOAAKAAGAAGAAGAEOAAGAAOACOAAKAAKAAKAAIAAOAASACIAAKAAKAAKAAKAAKACGAAMAAIAAGACSAAGACMACKAAOAAGAAKAAKAEGAAGAAGAAGAAKAAGAAKAAKAAIAAKACMAAGAAIACIAAOAASAAGAAIAAGACKAAKAAGAAKAAKACIAAGAAKAAGAAMAEKAEIAAOAAGAAOAAGAAKAAGAAGAAKAAGACGAAKAAIAAIAEIAAQAAKACKAAGAAIAAMAAGAAKAAKAAOACKAEOAAOAAKAAKAAKACKAAIAAGACIACIAAKAAQACOAAMAAGAAQAAIAAGAAGAAOAAGAAKAAGAAKAAGAAMAAKAAGAAIACIAAOAAKACOAASAAIACGACIAAIAAQAEKAAKAAIACMAAGAAKAAKAAKAEGAAGAEKAAKAAGACIAAKACIAAKAAKAAGAAGACGAAGAAKACGACKAAMAAKAAMAAIAAGAAGAAIAEKAAKACOACGACGACKAAKACKAAKACGAAKAAIAAMAAGACKAAGAAGACKACIACGAAKAEKAEKAAIAAGAAKAAMACSAAKAAGAASAAIACKAAMAAKAEOAAGAAGACIAAIAAKAAIAAKAAGAAIAAKAAGAAKAAOAEMAAGAAKAAIAAOACGACGAAGAAKAAIAAMAAKAAGAAOACIAAIACKAAOAAGAAGACKAAKAAGAAGAAGAAOACMACKAAKAAMAAKAAMACQAAGAAKAAMAAGAAOAAKAAEAAGAAOAAKAAGACKAAKAAIAEOAAKAAIAAGACIAAKAAKAAKAAGACOAAMAAOAASAAGAAGACGAAGAAIAAGAAEAAKAAKAAKAAGAAKAEIAAGAAKACGAAKACKAAKAAMAAKACOAAKAAKAAGAAIAAIAAKAAMAAKAAIACGAAOAAIAAGACKACQACKAAGAAIAAGAAKAAGACGAAKACOAAMAAIAAMACIAAMAAKAAGAAKAAKACIAAKACIAAIAAMACIAAMAAIAAIAAIACGAAKACIAAKAAKAAKAAGACKACOACIAAKAAIAAGAAIAAKAAKACKAAIAAIACKAAIAASAAGAAIAAOACOAAGAAIAAGAAKACKAAIAAKAAKACMAAGAAGAAKAAIACIAAGAAIAAKAAOAAGAAKAAKAAUACGACKAAUAAKAAIAAGAAGAAGACGAAUAAGACKAAGAAIAAGAAIAAIAAGAAGAAKACOACGAAIAAKAAIACGAAMAAKAAGACGAAGAAGAAGAAGACIAAOAAOAAOAAIAEGAAKAAMAAKAAOAAKACKACGAAGAAKAAIAAOAAKAAMAAKAAKAAGAAGAAMACIAIKAAGAAKAAOAAIAAGACKAAIAAKACSAAKAAIAAKAAIAAGAAGAAMAAKAAOAAKAAKAAGAAKAAKAAKAAIAAGAAGAAIAAKACOAAIAAIACKACIAEKAAGAAGAAGAAKAAIAAKAAIACKAAGAAGACOAAIACGAEKAAGAAIAAKAAGAEGACKAEIAAIAAMAAOAAGAAKAEGAAMACKAAKAAIAAIAAOAAIAAKACIACIAAIAAGAAGAAKAAGAEOAAOAAOACSACGAAKAEKAAOACGACIAAMAAMAAIAEMACKAAKAAKACIAAKAAKACIAAQAAIAAMAAKAAGACKAAGAAIAAKAAOAAGAAKAAOAAMAAGAAGAAIAAIACQAAKAAKAAIACKACKACKACGACIAAGACGAAKAAMAAGAAWAAKAAWAAKAAMACOAAGAAKAAUAAIAAKAASAAKAAKAEIAAMAAIAAKAAIACIAAGAAMAAKACGACSACKACOACKACIAAMAAKACGAAGAAOAAKAAKAAOACGAAKAAKAAOAGKAAGAAMAAKAAGAAGAAOAAIAAGACKAAIAAIAAGAAIAAKACKAAKAAOAAKACKACKAAIACKAASAAGAAIAAIAAIAAMAAMAAIAAKAAIAAKAAKAAGACGAAKAAIAAMACGAAKAEKAAGAAKAAKAAKAAKAAIACSACKAAIAAGACIACGAAIAAIAAKAAKAAKAEGAAMACKACOAAGAAIACKAAGAAKAAGAAIAAMAAGAAGACGAAGAAIAAKAAMAAKACIAAKAAGAAIAAOAAKAAGAAKAAOACGACGAAMAAOAAIAAKACKAAGAAKAAIACKAAKACKACKAEGAAKAAKAAGACGAAKAAKAAGAAKACWAAIAAGAAIAAIAAIAAIAAIAAKAAGAAKAAIAGQAAOAAMAAKAAKACKAAKAAKAGKAAOACGAAQAAKAAKAAGAEGAAIAAGACKAAIAEKACKAAGAAIACGAAGAAOAEIAAIACOAAGAAOAAGAAIACGAAIACKAAGAAIACGAAIAAGAAIAAKACIAAGACGAAGACKAAOAAGAAKAAIAAIACGAAGACMACKACGAAIAAKAAKAAGAAGAAKAAKAAIACIAAKAAOAKKAAKAAIAAIAAGAAIACKACGAEKAAGAAGAAMAAKACGACKAAMACKAAIAAIACGAAGAAKAAGACIACMAAKAAMAAKAAKACIAEMAAIACOACKAAIACGACKAAOAAIACOAAGAAKACKAAIACKAAGAAKACOAAOAAOAESAAGACKAAKAAIACOAAGAAKAAGAAOAAOAAMACGACKAAOAEQACMAAGAAGAAGACMAAKAEcAAKAAKACOAAIAAMAAKAEGAAGAAGAAKAAGACGAAKAAMACGAAGAAKAASACGAAIAAIAAKAAIAAIACIAAGAAGAAGAAKACSAAIAAKACKAEMAAKAAKAAGACGAAKAAGAAGAEGAAGAAKAAIAAIAAKAAKAAIAEKAAGAAIACKAAGAAKAAKAAKAAGAAKACKAAGAAGACGAAKACKAAKAAIAAGACKACGAAKACKACGACGAAIAAIAAKAAKACIAAIACOAAOAEIAAKAAGAAGACMAAGAAIAAGAEIAAIAAMACGAAIAAKAAKAAKAAGACIAAKAAQAASAAKAAQAAGAAKACMACIAAIAAMAAOAAGAAOAAKAAOAAKAAIACGAAGACIAAMAAKACGAIKAAGAAIAAGAAGAEMAAGAAIACOACKACKACKAAGAAMAAMAAIAAOAAMAAGAEGAAIACGAAGAAGAASAAGAASAAGAAKAAIACKAAKAAKACGAAGAAMAAGACGAAKAAGAAIAAKACKAAKAAIACKAAKAAGAAKAAMAAGAEIAEOAAKAAMAAIAAMACIAAKACIACKACKAAKACWAAKACGAAIAAKAAIAAKAAKACGAAOAEKAASAAKAAKAAKACGACKAAGAAKAAMACSAAKAAGACKACMAAGAAKAAGACKACKACKAAKAAGAAGAAKAAOACGAAKACKAASACMACKAAGAAKAAKAAMAEGAAMAAGAAGACKAAGAAKAAIAAKAAIAAMAAKAAGAAIAAGACGAAGAAOAAKAAIAEIAAIACMAAIAAIAAIACMAAIAAIAAMAAIACIACKAAKACIAAIAAGAAKAAKAAKAAGAAIAEGAAKAAOAAGACIAAGAAKAAIAAGACKAAKAAMAAIAAOAAKAAKAAKACKAAGACOAAGACKAAIAAIAAGAEKAAGAAIAAGAAKAAGAAKAAKAAOAEGAAGAAKAAMAAGAAKAAKACOAAIAAGACOAAMAAGAAGACKAAIAAOAAGAAGAAGAASAAKAAEACQAEGAAGAAKAAKAAKACKAAGAAIAAKAAMAAUAAGAAGAAGAAKACGAAIAAKAAKACGACKAAKAAKAEKAAGAEIACKAAGACOACOAAQAAKAEOAAKAAGAAIACIAAGAAKACGACOACKAAOAASACIACGAAIAAIAESACKAEIAAQAAOAAKAAOACGAAIACGACKAAKAAKACKAAGAGIAAGAEOAAIAAGAAIACGACKAAIAAIAAIAAKAAIAAGAAGAAGAAMAAKAAGACGACIAAGAAIAAGAAGAAMAAGAAKACGAEMAAKAAIAAGACIACKAAKAAKAAGACIACMAAKACKAAIAAIAAIAAOAAOAAKAAKACKAAGAEGAAKAEGAAOACGAAGAAKAAKAAKAAKAAGAAGAAGAGIAAMAAKAAGAAKAAIAAGACKAAIAAKAAGAAIACGAAGAAGAAGAAIAAKACIACMAAGAAGAAKACKAAKAAKACKAAMAAIAAOAAIAEGAAKAAIAAGAAIAAGAAKAAKAAKAAGACGAAKAAIACSACKACMACKAAGAGOAAKAAIACGAAGAAKAAKAAKAAOAAGACIAAMAAGAIKAAGACKACKAEKACIAEKAAKAAIAAKAAKAASACOACKAAKACGACGAAGAAGAAGACQAEKAAKAAGAEKACOAAGACMAAQAAIAAOAASAAGACKAAIAAKAAIAAKAEKAAKAAGAAOACGACKAAGAAGACKAAOAAQACGAAMAAGAAGACOAAIAEGAAKAAGAAIAEIAAKACKAGKAAKAAMAAOACGAAKAAGAAGAAQAASAAOACKACGAAGACGAAGACKAAKAAIAAKAAKAAKACIAAIAAGACKAAIAAGAAGAAGAASAAKAAGACOACOAAIAAGACKAAMACIAAGAAIACIAAKAEQAAKAAKACGAAOAAKAAIAAIAAGAAKAAGAAOAAIACKAEqAAIAAKAEOACOACGAAIAAMACGACKAASAAIACMAAEACGAAIAAGAASACKAAGAAMACKAAKAAGAAOACKAAGAAKAAGAAGAAKACGAEMACKAAGAAGAAGACIAAIACKACKAAQAAaAAIAAKAAGAAGAAGAAMAAIAAGAAKAAKAAKAAKACIAAIAAKAAGAAGAAGAAGAAKAAIAAOAAGAAGAAIACIAAOAAGAAQACKACGAAGAAKAAKAAGAAGAAOAAIAAKAAKACGAAKACKAAKAAGAAOAAGACQACOACKAAMAAIACKAAKAAGAAIAAGAAOAAKAAKAAOAAGAAGACGACKAAIAEOAAOAAMAAKAAKAAGACKAAIAAKAAOACMAAKACOAAIAEOAAIAAGAAIAAKAAKAAOAAKAAMACOACIAAOAAKACKACMAAIAAMAAGAAOAAGACGAAMACKAAKACKAAIAAGAGOACOAAIAAKAAIAAIAAMACQAAKAAKAAIAAIAAGAAIAAGAAKAAKACKAASAAGAAIAAKAAGACKACGAAIAAGAAIAEGAAMACKAAMAEKAAKAAKACIACIACKACGAASACGAAGAAIAAGAAGAAOAAIAAKAAKAAKAAOACGAAIACGAAIAAKACIAAOAAIAIGAAGAAKAEOAAGAAKAAIAAIAAKAAGACGACGACGAAGAAGAAGAAIAAKAAGAAKACKACIAAGACGAAKAAMAAIAAGACKACOAAOAASAAGAAKAAKACOAAGACIAAKACOAAGAAIACIACIAAKAAIACKAAGAAGAAIACSACIAAKAAKAAIACKACIAAIAAGAAIACGACOAAKAAKACMAAKAAKAAGAEQAAMACGAAKACKACKAAGAEKAAGACGACGAAGAAIAAIACGAAOAASAAKAAaAAKAEKAAGAAGACIAGIAEGAAMAAKAAMAAOACIACKACOACIACGAAIAAIAAGACGACIAAGACOAAKAAIAAGAAIAAGAEGAEKAAGACOAASAAGAAOAAKAAIAAKAAGAAKAAKAAIAAIACKAAGAAGACOAAGAAMAAKACGAAIAAMAAKACMAAKAAKAEGAAIAAKAAIAAGACIACIAAGAAKAAOAAIAAGAAKACOAAGACIACGAAKAAGAAGAAUAAKAAGAAIACGAAKAAGAAIAAKAAGAAGAEIAAKAAKAAMAAKAAGAEIAAIAAGAAIAEIAAIAAQAAMAAKAAGAAKAAGAAKAAQACKAAKAAKAAKAAIAAKAAKAAKAEKAAOAAKACOAAOAEIAAGAAIACKAAKAAGAEIAAKAAOAAGAAKAAKAAGAAKACIAEKAAGACKACIAAGAAGAAKAAKAAIAAOAAIAAKAAGACMAAIAAOACMAAGACGAAIAAKAAGAAKAAKAGGAAGAAKACOAAKAAKAAKACKAAKAAIAAGAEIAAKAAKAAGACMAAIAAGAAKAAKAAIACKAAKACIACKAAIACOAAOACQACKAEKAAKAAIAAGAAKAAKACIAAIAEKAAGAAGAAOAAGAAKAAGAAKAAKAAKAAGACGAAIAAGAAGAAKAAIAEKAAMAAKAAGAAIACKAAIACKACGAAIACOAGIAAMAAGAAOAAGAAGAAKAAOAAOACMAAIAAKAAKAESAAIACKACKAASAAGACMAAIAAGAAGAAKACKAAOAAKACIACGAAIAAKACKAAMAAKAAIACIACKAAKAAIAAKAAIAAKAAIAAIAAGAAKAAGAAIAAIAKOAAGAAGAAKACKAAGAAGAAGAAIAAKACKAAIACOACKAAMAAGAAKAAGAAKAAKAAGAAKAAIAAGAAIAAKAAQAAIAAKAAMAAQACOAAOAAIAAGAAKAAKACWAAIAAKACIAAKAAGAAGACKAAOACGACGAAGACKACKAAOAEMAAKAAMAASACGACIACOAAKAAKAAKAAIAAIAAKAAKAAGAAGAAGAAKAAIACGACKACOAAMAAGAAIAASACMAAGAAGAAIAAGAAKAAOAAGAAIACGAEOAAGAAGAAGAAGAAGAAMAAGAAKAAKACGAAKACKAAGAAKAAGAAGAAGACKACKAEKAAKAAKAAIAAKAAOAAGAAIAASAAGAEKAAIAAIAAOACGAAKAEOAAKAAOAAIAAKAAIACKAAIAAIAAKACKAAGAAGACGACKACIACGACKACGAAOAAGAAGAAIAAIAAGAAWAAGAAGACKAAKAAMAAKAAKAGIAAIAAGAAKACKAEMAAIAAKACGAAMACKAAMACKAAIAAGAEIAAGAAOACIAAWAAKAAIAAKAGQAAIAAIAAGAGIACGAAMACKAAGAAKAAGAAIACIAAIAAKAAGAAKAEWAAKAAQACKACGAAGAAIAAIACMAAGAEIAEKAAMAAGAAGAAKACIAAKAAGAAIAAOAEGAAKAAGAEIAAKAAGACOAAGAAIAAIAGGAAKAAGACIAAMAASAAIAEKAAKACKACKAAGAAIAEIAAKACKACKAAKAAIAAKAAIAAKAAKAAOAAIAAGAAIAAGAAOACWACGAAKAAKAAIAAKAAIAAOAAIAAKAAGAAGACGAGGAAIAAKAAKAAKAAIAAGACOAAIAAIAAGAAGAAKAAIAAKAAGAAIAAKAEGAAKAAIACKAAKAAQACIACKAAMACGAAIAAGAAGAAGAAGAAKACGAAGAAGAAMAAGAAIACKACGACIAAMAAOACIAAKAAOAAMAGKAAOAAGAAKAAKAAKAAIACGAASAAGAAIAAOAAIACIAGKAAOACOAAGAAGACQAAKACKAAGAAGAAIAAIACOAAOACOAAGAAGACIAEIAAKAAKAAGAAKACGAAOAAGAAKAAKAAGACGAAGACQAAMACIACGACKAAGAEOAAKACGAAIAASACKAAGAAIAAGAAKAAKAAOAAIAAOACGAAGACGAAGAEKACKACGAAKAAKACGAAGACIAASAAKACIACGAAGACKACKACOAAIAAKAAGAAIAAOAAGAAKAAIAAKACGACIACKAAKACIACKAAGACIACOAAIACKAAKAAMACOAAKAAGAAIAAKAAcAAGAAKAAIACGAAGAAGAAKAAKAAKAAIAAKAAKAAGAAGAAKAAOAAKAAOAAOAAKACKAAKAAGAAGAAKAEGAAGACKAAIACIACMAAKACGAAIACIAASACKAEIAAKAAGACKAAGAAIACGAAGAEGAAKAAMAEKAAGAAKAAIAAKAAGAAIACKAAOACKAAGAAGAAKACIAAKAEGACIAAKAAKAAGAAIAAKACGAAMACGAAGAAKAAOAAOAAGAAGAEKAAIACGAAKAAKAAGAAKA","1-3":"G-ANsARqAJCBIuAJMBP-ALSBHcAS2AEmAI4AMCBC8AGoBGWBGeAOWBTOBC4ATsAE8AE0BSeBI4AC6AAkAO8AWOBKqAKEBRwAKKBGiBL-ASqAPCBAwAPsBMYBJMBA8AM8AQeBMgBLIBGaBYCBQgBN2ARIBLkAN4AIUBF0APWBTEBHaAKwBOABQKBK6AQEBPeBEUARCBEqANEBEoAU-AM6ACQBIcCIsAU6BI-AC4AFYAN6AE0BTWBP0AAqAPABPGBKWBOsAEEBD-AJ0AOOBEwBSEBIcBO6BQoAM-AG4AQcBN2AQGBHgAMICOyBGeBGCBP2BOcCV6AGeAECBQoELuAC2AKMBAuAPmBMCBKKBHMBKABL4ARKBCABPgBAsAL2ALQBGmAN6AMsBEGBR6AOABPaBT2AOeBTKBE-AGYAH8AS2AOSBKwBAYBQ-BLCBI6ACuBT6AS6AEYBGsBKsBEaAOiBG8AGeBTqBBqBCABWeBCKBKwAQuAGoAJQBUYBImAIoARWBGaBG8APsAJuBIMBTYBS6AKCBNmBEUAWKCCUBJwAOmALKBQ-BAKBVoAGiBC2AjyBGQBO0ALuAS2BCGBEoAMKBe-BMWBKEBKOBSiCYKBSkAKCBJ6AKKBQoBXKCFwAH8BA0ARkBKOBemAE0AUWBCkAAKBTMBEqBOSBEuAN4ALABTqAOSBQsCMEBNmBKqAQ0AO2AE2AXoAUMBWGDCuAN-AKyACaBOqAOACVSBAuAPiAHyAOqBDiAXkBKiAI0AIIBHWBKQBI2AQ2AGGBKWBU6ASgBM4AE0ATqATaBRyBTwAXQBTSBG4APqAKABL0AC2ARMBP-AKsALKCGoAIwBUgBIIBU8AIEBTgBGwAeCBSIBNmACsAOUBPoAJwBOIBHoAM2BMkAO2AJIBP4AG2ASeBKiATQBIiAR4AIeAVwAMMBGkAUgBSiAE0AJEBGoBOwAOwATEBdgBEsAIEBK2ALqAGeAN-AIwAVUBAmAIsAQkBHcAICBLGBFkAU6AOKCUoAGKBQgANkAGSAJIBM8BSIBI8AEMBJ-AM4ARWBDMBa-AL2AKiBEwAQyAPgASmAKOBESBMsAM4ARoBAGBKSBJuBEoAGeCJwAUyBdmBIgACABLoBO0BN8ANmAOwBK0AKqAJcAWyBCaAJkAUoBWOBT0AEMBR-AR-AJiBGSBZYBIiAMMBM8AQQBQ6ACABEUBM8AOQBMIBGuAIMBK8ATiBOcBOyAXWBQGCTcBPGBKSBM6AOgBJkAKQBC4AAqBP8AKYBL6AFMBKOBMcBIuAGKBUQBGmAJ-AKGBE8AQ0BQECP-AX8AT4AO4ARCCC8ACoAJ6BH8AVWBAgAQQBTgAYGBHOBJuARIBGiAFiAEgAM0AA0AUmBICBRGBHsAVOBCiAJGBRWBT0AR4BNyBNyBA0AEqASiBJoAPSBS8BM2ANmAGIBIoAMiBEoAIwAHYBC2AO8BKEBP-AGuAUkBJoBLWCGWBHqAR0AU-AMSBKEBC4AO4AOUBAuAEUATaACIBUgBGcBCuAI-AKqAOmAVqAI4BPqAGGBMEBA2AIkAO6ANMBG0AIIBKqAMQCH6AIQBIABTOBRsBE6AKEBHCBOMBUgBSABGCBEmBVADKiCKsAEwAKKBQOBAiBGKBZABImAC4ARICOCBSiBGaAC4AK-AE0ANQBNyBRKBKkBKMBEyAVGCEwAG8ALeBLwBP0AISBOCBA6AJKBTEBNMBYyANyAAyBSGBLGBKsAQEBOABVUBQMBCiAL0AN2BNeAIuARiBEsAQMBEoAGqALMBMwAO4AUCBV8AUOCNiAN8AVqCIUBZGCIEBEcBGuBT6AG0AOUCKyAIyACiAC4AL6BJABC2ALGBJ6ASYBLSBLmBC-BIABVOBRoBG0BJ2AKiALmAI4AHUBOKBUyBGCBHwAKwAamBS6ASkBH6AG8BOuAFEBFmCCQBEsBN2AKwAG-AUECJyAM0ACGBEyAOIBIyBQ6AOEBT8AMKBO-AIcBAiAI0CTKBJqANwAEiATGBOOBIABJABREBIIBLmAKgAJMBI8AGIBK-ACmALgBG2ARQBRMBSOBJwAL8BOkAMwAEuBGyAEwACsAK4BV0CEgAAUAIABSCBPeANqAKSBTEBLWBUKBIWBRKBCABE2AHiBRmANuAKABIaBSICS4AIeBQICCgBU2AEwBK0AK6AMUBRcAAcAWyASaBJkACOBL0AGmADyASACLSBGEBLeBAEBOuBSQBMgAMyAGQBECBNEBPEBTKBK6AH8APoBR4AKqAEcAEIBRkAAkAPABG0ARqAUmANSBT6AQiBR0BZmBC6AEyAKYAQGBO8APGBHQBR4ANKBGUBLyAGGBIyAEyAUCBXKBHsAHEBCeAW6AKsAJeAFKBIcBNwAIWBE-AG0BTkAMYBUGBGsAIIBOyBKQBCqAV0BY2BGWCS-AOuAE0AbQBIuAM8ACUBI2BJ6AGuBKUBP8AEeATMBZaAJaAGuAISBTsAGkBH0BN8AREBO8AMQBMABG0AJKBUEBJ8AWeBHqBOICG0AS-AJwBL2AScBKkAMmATUBQoAOyAFwBPYBF-ASwALsAMsBIsAQ-BSsAOGBXaBPMBUMBOCBKIBCMBK6AIkAGyBOKBKWBM-AOMBG0AEKBRmAQ2AKsAKUBJqAKgAM2AIoAIiAGwAIEBXaAD0AKgBLqARsARiAUYBA4AEeAGgBTqBIYBNSBVWBJ4ANKBOyAKWATWBH4AHeAXYBC6AMoAJcCH2AR8AR-AQABOaBP-BGOBRaBMMBCkASeAMuBTiBNsAOABGABJCBC0AOIBKQBCsARoAMIBC-ALwAJ0AQWBSmANwALUBIMBIEBG0AIoAH2AEcBD4AImBLABEeAW0ACyAVABKGBS8AEWBIkBQOBG2AHuAESBIGCMoBN4ASqBWKBL6AU8AZsBSGBGQBK-AEABMsAEqAUYCKUBNQBRUBXABQIBLmBKiAMMBCIBOIBOIBRgBHuAEqAJ8CQaBMKBN8BE2APaBOiAIKBNQBTqAMMBKKBE2AR8ASYBEaAQGBAOBNmACaAO2ASEBKiBWuAPMBKyAL2AVKCFABI8BE0AImARsAG0AACBCUARwASiAGQAEeAOmAGCCKCBAABYIBVaBQkBGCBCMBIABJ8AOeAPABCUBGIBC8AOUBEqAOmAbiAfuBTGBP4BGgAJwACgAQyBOeBGGCHEBLABKuAI6AHoCM8AQCBOmBF6ADeBEUBIgATsAImARgAL-AN6AL2ARIBLWBFIBSOBK6BCwAMoAT-AVyAMcCS2AKIDOqAQmAMuAJwBSKBAiAQACLqARWBKiBS4AUOBS8AGABE8AAiBO0AGCBJCBQOBQSBIMBKuAPEBEuASkBCeBUgASOCE4AMeBPEBKsAWcBS0AImAJIBCmBGwBCwAMWBN6AQUBKCBCuAcaBHkAKsAR8ABEBS6AL6BCiAQEBS2ABABRYCOABLGBGsAGsAMACEGBKmAPsBCEBNkATsACABRIBGWBKGBWcBTCBJqAH8AHWBRsAS4AKwBKGBUKBNeAI-BNsBN-AKmAEeAKyAQuAF-AMSBNIBRuAH4ALCBLmARWCPuAS2AIiBSEBP8ARABGiAPcBI6AG2AGuAW-AM4AOWCSsBEOBAiCN2ARECFqAI8ALoBSCBSACV2AMCBIKBMACV-ACsAC2BMmAMaBPOBMUBJyAE2AQ0APIBMuBTwAGKCHgBQwAKWBKOBSABCmAEKBC-BF-AVeBLyAL0AC-AEuAOqBFYANsBQeBCiALuAT2BEABOMBNWBA-AXuAN0AY0AX8AIsAQoBNIBA2ATSBEkAGyAEwAE0AUQBVCDQSCGoAIgACQBQ2AW4AEiAMYCXMBXGBSUBIIBEoAAGBDiBEkBDGBCiAO8ARcBIWBSACE0AA4AQGBGkAEMBEsAHgBPwAM0AEkBO-ANaBQ8AC8AJKBH-ALQCSSBKyAKEBM2BIwAEsAJ-AEEBXaBGEBE2BTqAIsCQkBP8BGGBY6BOqBCuAI6AIABGQBVGBNmADuAG8AGABLUBA6AW8ADKBI8APoAGCBOmAMABLIBSeATYBMmAFuAPEBI8AM2AHuAHKBCgATmAGiAMSBI8AV2AaEBNSBDcCOmAOYBJoBI0ACqAN6AX8AOyBKgAL4APABHyACqBPCBEMBPqAKSBUABVABC8BCgAIECTcAQOBO6ATGBSwAO-AMKBI8AX8AJGBGKBAGBOeAQABKMBM6AAGBMyAMWAICBF2ASgBEMBSgACqAOIBGCBMKBEgBQyAOeBGOBDqBGMBMcBJ8ACuAAqAI2ASIBKIBROBEqAIABCwBD0ASIBIeBMoAPUBUSBImAM-AI8ATuAM0AKUBLyAG-APSBX-BIyATQBSwANEBCYAKWBKmBJ2AO2AT0ATIBM0AE4AWiBNsAC4CHqAHACGIBMGBE-APIBI4ALIBR4AMIBTyAT8AO0ARWBICBQUBEaBGiBE-AGsAIEBWcBVCBS4ACsANOBY8CSsBDgAC8AS6BO2AI-ARGBK4AOuBXyBQWBIeAImBEUBIeAKqADcAR8AKuAQcCQoAGIBS-AXECQ2ANSBG6CK8BOsBIsAGQBQ6ASWBK-AG0AEiARSBO0BMsAKiAO6AO4AFwAKCCJ0BRoATUBFoBM6AbKBE8AAiAJ6ACqAO0ALiATQBEeAG4AG4AOaBO6BKGBAuAI0AE6AI0AM8AO2AIiBPyBKuAWCBNMBGwAH6AMGCWaBC-BFeANwAN8AO4AEoBI-AImAMgBIyAO2AQ8ADyBLkBGqAEsAWCBO0AKsAIsATmAGMBPyAEqAK6ASoAC8AK8ATwAHYBJkAJwAO0AM8ANqBQQCGaBGqBQgCPMBCgAPwASoAZ6ATaASQBJQBE4AAmAGMBESBC0AOwAMkBI6AVqABMBA4AQSCLABOmBOiBGwAFGBDmACkATABIgAHqCRCBC-AMKBdACTcBHOBW8AQsAFwAOoAJcAGqAUgBAwAQ-AM-AK0AIaAKwAJ8AfOBQYBAOBY0AFOBKGBCwACuAQwBCsAQ8ASGBMYBNOBJwAGoAL-ASeBCqAGiAAcAL2ACmAHiAE2BDmAEcBMwAG4ARwARYBC6APcBM-AFsAEIBKgAS-AGyAJkAQQBEuAAwAQmAUIBIiBTmCE2AGMBPIBRIBGQBOGBNMBSIBE8AEsAOgAM-AQ-ACkAKUBRiASGBCECA4AS0BKMBQsAOyBJyAT0AOWBMaAI6BNCCD4AGABS8AE0AA2ACIBKeAKyAASBCiBOuACEBMSBNSBGiASwACoALmAJ-AL2AMsAGwAKCBHeBAIBMEBUMBCqBPMBMMBP0BMQBO8AWYCI6AHABEUAIQBTsANUBGKBKuAEmAK8ANuACEBQeAPKBX4AG8AM2AL-AGwBGiBGqAGEBGGBOUBLCBT8AE4AA0AMEBPMBLeBSSBGeANCBM6AAuAOqBAkAN0ANyAQ-AAcALmBIyATyAMQBFaBQECM4AOkAECBEqAJEBMIBC6AGqAPCBGUBU2BPwBESAKYATABZIBEKBFgAUOBVwAC2AEQAUqAHEBTQBT8AF2ANqAHeAMgBMiAMoAQ6AN2AnCBGGBRCBK-AAqAMOBA6AFEBTQBE4AC0AKMBIOBIuAMKBFuAMQBMIBI6BL6AIEBOQBG8BQOBO-BU6AMKBQ0ATiBL4ASmAMoBIIBJcAWaBS2AC4APIBNYCRkBHSBGUBEcAKcBM8AOGBGgACyAI8BUICL-AH4AHaCTcBT-ASwAVOBTuCEaBAEBTCBJoAH-ATMBL0BHMBCyAC4AIiAHcBFcASwALgBIWBD6AU0AFsAGsAL4AYMBMQCIeBMMBQkBK8AM6BK0BOYBC2BEaAIABMYBUaBSIBTIBKmAOqBT0ANwADkBN6AK2AIGDCqAKABRABNWBKOBR4AMwAMqAQSBT4BPMBAYBOwBT2AJeBGYAVACFmBHOBTMBS4AIgAOiCMiBQABX6ALABPiATmASmAR6BL8BUYBH6AKMBMeAMCBIEBIkAOQDE8BKwBMwARmCKEBR4AFiAMOBEIBKIBNQBKwAMSBKcACqBSQBW8AWcBFEBD2AMaAJYBTkBKgAJ4AEWBHUCWCBPsAJuAEwASCBFiAQYBNkAL8AOEBRSBT6AWEBNUBMMBPoAHEBY0AHsARgBToBM8AIuAIsAHiAM2BPUCIwASuBKiAMIBEmAOyAQgBKABaSBOaBDQBSIBTuBSMBLcBCGBLWAGiAOEBKWBIqBT-AIKBLEBN4ACuBEKBOaBR4AK0BGMBTwAMGBOIBPSBSwARkBT6AVgBLKBKqAHyAMsAMYBLiAYECSMBG-AS4AQACGgAHOBAwAIOBEoALiBDiAQUBLKBGCBGuAP-AO2BEuAM2AOsBM2APcBUKBGaACcAHcBUABRmAMyACIBX8AJ0AJ-AIsAE0AIUBMABKQBTkAPMBC6AS6APEBM6ACoAVwAUgBQ4AKQBHEBAeAMKBOIBSKBPyAJiBJIBCeAEwAEkAIOCLkAQUCGeBKyAHOBRABF6Ba0AT4AC8AKGBGIBOEBEmAN8AEIBA4AMQBUwBMCCCgAVABPsAHiAQYBKOBS4AGwAMCBCaAKGBUQBKMBI6BEqBReBGYBJeBCkAQQBO8AMcBWIBOABIuAEmBImBPgBNUCIcBIyAO4AP6BI0AKqAK2AEoAPEBCoAQaBFYAOSBZyAReASQBCeAM6AEeAGKBHcAPmAL2ALuAd2AQaCPMBCSBKGCJwAAKBPkALwALuBFKCKgAUmBLWBRMBCeAQwBGGBL4AJ8AFmAEwAMQCMOBRgBMsBR4AUIBOgBJ0AGoANCBSsAGsAPUBLqBP-AFCBIiBOgBPSBV6AE8APwAESDPiAGABEyAISBXUBQyAIIBAyAG2ALsAS8BFABEUBT8AIIBQ6AKkBHqAWEBNuAHsAOuALUBQeAG8AMoACUAPsAZoBIwACWBN2AJuAPwAJMCKKBFmAMyAIABJyAGqAJeBLoBOyAGACGKBHkBJqCK2BC2AK0ARiBSOBKEBOEBIKBC8AKEBNCCC6AAgAKUBIIBCwAQgASGBDiAV8AJ-AT-AYmAESCIcAMyCG-AQ0BJEBOUBFcAN6AIWAKsAPqAWOBCgAG2AGEBTCBTCBMYCDwAQ0BYaBGgCJyAUkAUOCGOBHWCH2AGsAQCBRABIWBOMBJCCTuAKIBIeCG8ALuAPmASiBOABNSBA8AJsAKIBOGBQqAGmAJuAO6AI0BK6AJ6AMCCIwAH4AJsCOYACgASUBUYBIYCK8AT6AN6AEsAEaBE-AK-AV-AV8AHABIWBSKBPqAIGBGKBIOBKeAEEBO0BIKBEiBMoAN0AO8BOQBP4AKyBVgAIEBGyAG2AE6AQEBAkATuAMYAKoAUICPcCBiAJUBNMBaMCKSBQMBMkBG2AOIBE4AQCBNyAO2AIyAUaBC4AIOBNcBFoAHkASuAXyBFiAOKBY4CQqAT0CCgALEBM2AO-ANeBJABKeAPKCGwALmAIiALmAI-ATuAWuCVGBWGBCiAGGBN2AGwAEoBA-AR6BQABQABSGBM0BK2AHCBF-AEgBHqAAqALsBCaAOYBEIBBGBR2AFsAAGBNaBI2AIUBJABJEBN0AOEBEABCCBTqAL6AE0Ab6ATuAeKBOIBRmACQBJeAKeBHgAVgBR2AGwAKgBIEBOyAO8BTECAcAEeBWQCR2BSuBSSBBUBOEBNOBXWBQOBGYAGMBLqALOBOaBMgBNwACwAGSBCqAECBM6BQKBP6ADcBQ8AFiAPSBV6AM4ATCBIcAOMBCqAN2AMsAEcBAwAQ-AVABUiBRABSKCE4AW0ARwBPSCK2ANeBKKBLKBRQBTgBVuBHEBS8ATkCNmAPwAQuAKEBMQCLYAEKBK0AKIBFeBGqAIwAK6AFkAJMBPqBM0AKiBDmBO-AHqAKcBMuAQyALOBOgCNCBMoACYBC4AD6ALSBIKBLSBFiAJQCC6AGQBIWAP4BCEBQICEcAUYBLoCO0BCSAG8AEYAM0BKwAEiAGoANiACABDiAYIBM-ARaBEyAS4AMwBN6ARoAJCBOuAHYBIEBIgBQ-AQ6AS2AJyBLYBUmAKwADABOoAEOBJsBGmAFiBU4AFaBSCBSgAEUBScCVwAEqAN6AG4AHIBO2AE6ATuAUyAGIBGmBEcAH8AGqAEWBBeAR0AQWCGQCM-APyAO2AIyALwAMOBEsBG8AS4ATYCEABMaBAABI4AE6AL6AEmCE8AKECM6AJ8AX6ACsAJiAEUBGeBLCBKqAC8CO0AKiARCBTGBIaBX-AOGBLuAEsAFCBNGBLeBS8AIICKQBKEBJsBH0APwAEoAFiBM8AEIBO2AP2AMyANMBMOBRiBGEBPWBQ4BMoAEKBVwBI4AEyAIeBSSBIwAK6AK6ASGBTGBPmAI6AAcBMMBEwAOuAAuACeBJwAKUBE4AO0APABVEBOKBI-AMmBEoBLyAOSBKcANyAKaAPgBGmAQ2AOmAEuAK4AIWBKKBJcBT6AEuBGUBSqBEeAEyAL4BGYCOoBCoAGuAGMCIcCAkAR4AI0AO0AIGBCuAJIBHMBO2AFGBI4AUUBCcBJiATsCQkBKWBMCBQKBReAAQBAsALqAOyANYAS0AR4AQiBOyATOBMuAN8AMGDP8AGiAO0AQYBMsAOCBGeAMCCR8AK8AMkBW-ATSBVSBPYBKCBCyAKoASKBEqAEsAKIBQqANOBAkAE-AV4COWCOOCI-AE4AE8AGaBVKCO6AGeCGcBZgBIqANsAAkAJyAESAM6ACMBQiBMKBOOBVMCJYEKeBbqBMiBCCBIQBK8AMOBI2AAMBAoAW-AOmAPSCM8ATQBCQBCuAGwAOOBO8ASMBB2BKEBKWCE-ANcASSBOWBSUBNMBE2AXUBDaBIkBCsAESBGyAIMBNCBKkAS6AXKCQ-AXWBTSBPuARmBPuASMCFEBOoBKoBGEBGSBLqBLWBU4ALGBGiAQ-AKWBLgACMBNCBCcBPsBKyAOYBRaBVSBMqCRECLiBICBIyATWBLkALACGiBSOBM6AGwAGoBQICLMBF6ASmBOqAICBMWBV0AGmB","2-2":"OsAPgANqADiAEaAFQAS2ALaAMOAQKBDgAMUASkAE0AUQAO0AJgAGYAJoACcAO6AGcAMoAMABHWAAOBGeAPoAMaAQeATOBKoAEkAUyAM0AEUAZoAQeAMoABeAFqAKmAKkAKaAAsAPmANiANaAVWAR-ATCBQ6BSwAUGCLsALwABWADUAWcANkAEUAJsATABViADeBQWADeAP-APWARoAJYAESBHsACaAGWARWAQYAFMAWsAYkAO0AEmASyAEQAHQAN2APqAGMAPGBGWAM4AasAAkAHiAEwAQsAcmAMqAQkAbaAIQBNkAHKBGMAOwAAgACoASyALgAHoAHgASkACeARSASOBJyAMmAJWAKsAUyAJYAKYAMuAKeAASASECIkAOiAOSAGUARuAJSAO2ALcAKeAFWAD-ANeAOkAEeADYAKgAASAOoADgAGuAJGBNoAV-ARABMWANeAIkAEYANmAQ6AEkAUoAS-ANYAFkAJmAVqARuAEoAKeAR0AMiAFiAPYAM4AWABLKAIkAVUBVyALaANiAIYANqAQUAPABGYAJWAEeAPSAH0AOEBJaAYmATaANcALuAHSAQqAJUAG2ASaAC6AN-APSAEwAJwAGeAHiAV4AUABMaARiACQAV8AKiAAmAGMAIsAUuAIYAKiAFYAAMAFmAOmABOAFwBGiAQqAFyAI0ASOAFqAToANGBFUAPwAOCBNwAWgARkAOCBSkAEgAScACgAKqAIUAHeAVsAOmAKoAKcAOUATEBGiAQcAbsAHUAGWANkALuANoARcAM2AFmAKCBTsAJ2AFWATyAMkARsAIsAGmAHiAHaAZaAHWAQKBJyAGuAEgAUSBMgAPcAAUAQeAHkAMYAHYAP4ANeAJSASaADmAEiBAeAO6AMYATkAJ8AGUAQkASsAD2AIuATkACmADQALWANqAT6AOaAOgACsAJkAF-ARYATeACYAFIBVuARgACmAPoATmARkAMeABcANgATcBLyAESAVcAMcALUAKiAX-AIeALkAcyAQqAVYATYAL8ARqANsARoAGQAHcAOgAPsANEBKqAIcAAcALEBMgAQaAKWAWyAPqARmAEmAQmAIYAN-AM-AI8AIiAQyAGkAEYADUAKgAToACqAUsAQcATEBFMAQqAFUAHeAQ2ADoAEUAPkALcBJWAKeAQqASqAR2AOkAIuALCBDqAccAQEBGwAHQANUAPeADkAAuATaATwAEmAEUAKqAGYAWcAE6AGCBGUAUaAHiAPsAIeAFQANcADaAIsAHeAEiAISBGKBJsAQUADgAKWAOgAUeAGmAOMBHeAQWAEeAKgAFWAR0ALqAKoARaAM0AVaASaANYAGMAKSAMcAEoAJ4AMUAPeATWADeASuAKiAE2ALeAMWAHwASkAKwABkANqASSAEmAKsAMoAMwASmAO0ADWASeAEkAK0AFQANUARcAVkAOeANUAIaASeBRmACMAPUADeAPsAQsAMyALyAJiAGSAIUAUeASgAFyAQmASqAEWAMgANCBXiAVkACiAQKBKoAZSAPcAIeANUAYaAN4AaoALmACoAOkAPgALgALYAEoAMiAKiARcAQUBMQAHYAHsAReAKEBU4AHkAO8ABcANmBJcACeAXgAMsAJMAFgAOmATaAOkAEABDYAVqAOqARiANkANMBOeAIkAIkAG0AQYAFGBUeADcATqANeAHkANcANeAOaAMsARiAN6AGWALcAHuANWAK-AXsAFOANWAPsAHQAKkBGkADYAIUAMeAFmAJYABgAZgASkALUAFUALaAbeAOqASSAGeAQkACSAPkAR0ALkATwAFuALUAReAO4AKoAOMAHoAMmAGkAIyANSBVwAHYATuAEUAXiAEqAHOAHiAU2AE6ALuAKSAVaAMmAOWARUAKmAPsAC8AC6AJGBLeABwAT0AJ2AFOAa0ASkATkAEaAFaARiAESAI8ABiAbgAMQAJWAReASqAOUAGgAVcAWaATiAEeAGgAPqAQeAHmAAgAM8AHyADcARkALcAKWAMeALwAKUABUAM-AIWAI8AHiAMeAKUANWAHkAPsAPkACMAFWAGoAIYATqAGWACcAKeAO4ATgASQAHmABQAMgAFiAVeAMqAFqABaARSAPyALqAPqAHkAN0AGUARWBCQAMoABWARyANEBLaAMyABOAGmAQUADUAFcAIeATgAKKAIwAJoAEgAS6ACuADWAO8ANyBL8AGgAGOAFYAFeAJaAIaARmAIqAOeAMWAc0AJcALoAOeAICBI4AJeAFeANeAGoARqAK8ACcAOsADYAKOAKoAEMAG8ADiALWAC2ASiACcAHYAEaAFaAPyAJoAQaAVeBLYAKwBHeAHeAEOAFkANeALyARoABcAGkALSAV4AHGBIuAFABIeAG0AVWAImAPuAH-APwAWCBJWAGMATcABeAJeAHYAKWARiAUEBSABDQAJcAGWASyASmAIYAVqALaAJgADkAJuAIqAKcARiALYALuAPuAUWBO6AEeAQoAXeAHuAIgAQyAMiAS4APSARwALiAVUAIeAIgAGWALqAJQAKUAXABJgAE6AN0AGgAIsACkACWAJQAJOAYABduAQSAIaAHUAGsAO6ADgAHaAJWAEUABUARqAGWAL8ATcAHsADgAJYAGABL2APIBFIBJeAJ2AHUAKcBEwALYAWUASUASABTgAFWAFSAPaAPgANOACYAIgAQ6AOqAI0AFmAQiAHiAFuAEwACWAKkAEeAQOBDeANaADgAHOADSAMeAASASABEeAGoAGkAHsAJmARYAPsAEcALcAKqAR2AKuAAQANaAOqATsAKYAOwAIeATWAT0AWWBIwACgADOAOcACWAEmAQ2ARCBLMAFIAMcAGcBFcAFgAIWASiAJmAZKBQKBGcAM4AKkAIQANuAMqAQmAR2AJaAQ6AQeAMqANeAOeAHKAHiAJmAC2AKkAIiALqANuAImAAaAOWBNcANuABoAQiAPSAU4APsAPeANsAJKAKWAQcAJoAO-AJiATQBJgAJcAVEBMcAFaALYAE-AKkAWmAM2BNuAG0AIWAP6AMwAXsADYADkAPOAEWAKABTYAGUAQIBOcAUwAGQANcAMoAG4AFeANmAISAJoAPSAImADuAR4AIgAEsARkANUAIQAPgAR4AHoAEUAFQAJaAb6ARSANaASmAJcAHgAEeALiAQ4ARuAOKBNoAFsAA6AFOATMAEiAQuAN2AQuASiASiANmAQkAJYAScAO0AFSARsAJcAV6AQEBBeADcAGuAR2AIUAR0AGcAJWAUgAKmASmAWcAHSASiBUaAIcAMqANiACSAVyAPsATaAGUAM2AH4AFaALoATSAbcAPiAFyAGSADgAFeATaAI-AOeAMkANCBWWAIUAFaAN2APuAUCBM0AMiAEiAGWALmAEeAGcALmAVuAPCBOwAFiAIeAHeAFOAVaATeAHKALKBHOATmAHoASSAPaADwAJkAFiARYARqAReAEyAN4AToAPmAO6APoAIkASUAEqALcADkAGqARwAJgACWAFkAMUALiARSAMoAPoALmAPeAOaAPqAOcALkALiAEuASYABYANUAG2APcAPmAMiASeAGYAEUACQAM8AVkAJuAFmAPgAAqAKYAEWAHoALYAK6AL0ACcAKgATMBGYAPCBTaAKQARuADqAI6AKUAMiAMEBXaAHSASiAJgAISACaAReAL4ADkAGeALkAYmAUoAQCBMaAT2AU2ASUAKWAL0AJsALQAQcARuAVKBRYAJ4ADgAEgAOWAG4ASmALoAGuASABEWAQiAIiASkASOAHcAKcAKWAG0ADwAKgACSALgAMWBCqAMqALcAHeAEwALYARMAAaAIcAFkADiAKkAJiAIUAScAJOAOiARcAOYAH8AOEBX8ABmAAUARIBAYAH2AT4AGuAFmAKOAH4ALyATqAMOAM2AF-AIYAGcAWsAJSASyACqATQBMiAJ4APSAOSACWADmAMUAGmADeABmAKmARIBOyARmACABN6ALOASgANuAJmAFyAFSAPCBIiATgAScAJ0APoAFoAOkAOwAOQACWAGcAL2AO0ACeAJeAVSALYAQYAIWAdgAVsAX0AHMAXoACMAQiASuAHuAIOAMcARgAGABVaALuAFMAI4ARwAOuAD8AQcAHgALsAEiAIyAKwAMYAOwADcAPeAMUAMmACoALyAI6APmAEKAPQBPqAHyAPyAKUAOUAN4AKqASyAEwAJoAPWANmABcAReABoAKmAOcAHkASeAS6ACgAPaASkAQeAQYAM4ASeAEGBKaALeAFSAHUAL0AFYAPUAKYARWALKBIaAEgABUADuANSAMqAG2APkAMABRmAEUAAmAP-APYAHCBJSAGABQ-AGUAEyATEBFgAB8AZwAJiAQeACUASqAMaARWAGOAHkALgARiAJWAVcAVcAHiADIBKwANqAGyAJcAQyAOYAHgASmALiAIiAPaAG-AEiAUgATsAHWANaAAsALUAXgAb6AR-ANqAIcAHcAJcAT4AHUAGkAJmAKkATmADgAEUAQoAVYATmARIBHaAGWAIsAPgAEoAKkACeAGUALQAHKBDGBSiARWALQADABJcAL4AScAUoAMcAKiAFCBLiAT2AOiAHOAUgAJOAPiAOcAQMBIWAIaAV8AJsAKkAAUAKcABKAKACCkAC2ATQBQsAHiARcAN4AA4AJUASiALUAKIBOoALQAQaBKuABSAAeAKOAUkAIaATYAGWADQAKsAQiAHsAIACKaBRiAFcADeBG4AGeAKSAPkAToALgANgAVkAQcAM2AEUARCBGWBLcAEWAFYAUeAM0AJSAGYAOgAHsAQiAPeAJYAASAKiAOsAQkAWABRUAHYAEmAIeAKSAEWAUuAEcAEuATuAKgAVUALuANWAGqANcADWAJcAEaAJeATCBNWAByAOeADgAJ-ADYAKYAIqAKcAFQAJcAR6AKoAOUABUACqAGQAHgAKcAEwAJyAPqANmAMYAPgAKoAEYAMyAImAGSAIWAPaAHABNmARmARoALYATuAW0AEcAGqAJiADYAIiAJiAZ-AMmAMiAKSAV4AK-AGQAKWANeBI0AMgAG4ARYAQiAFUAVmAOsALeAIUAGeADkAKSAGABEgACyAMwAQqAQmATCBF2AJUAHaAISABmATgAGcARWAHiAAQARiATiAMuAIQBJOAI0ARiALYBL8ANgAIaAIWACMAPqARQAPwBMaARuAG0AJsAF4AQeACgAGoAG4AS-AIqACOAQqAOOAQ8AV2ACSAJuALcAFmAHwAKcALSADeAIqAOoAEaAL8AFWAJaBGwAKyAR8AFQAFMARmAF0AOYBKaAMCBKEBGWAPqARqAKsAZqAN0AGUACYAVqACgALoAQQBSyAEABPWAI4ASUAOyAAyAJMBOmAFkADqAJwBHgANuAU4AJcASWAKgACcASuAHSAGkAPiAEmABgATgAKoAEeANUAPqAQCBOiARWARQANoAFmAIOAFgAU2AV0APkAMcAKQAMyAUyAGeACcAPcARoAI2ADiAVeAKiAFWAIgAHcAGeALkAVuAPQARABI2AOyACYAX2AUaAGUAL6AGWAASADoAHeAPoAASATUAMQARaAJWAGWBTSAL2AQYAJcAQQAIgASkAOqAR6AQWAFmAHUAMoAEoARYATmAAQAReAKgAKQAAaATwAK6AIcAOQBWqAFmAQUAOYAJwATcAHUAMaALcARqAKkACeAKgACmAKcAPSAM6AI4ASuAXyAKwANkACeAWgAEeAIoALWAO0ANoABMASUAEUAJaBUyAPaANaAIUAEMALqAOiALSAGQAPuALiALkALcARqAPsAMYAMcAXQALmAQaAEaAMgAJmAM4AHYAOSALiAFwAIgADOAPuAIaASkAMyAQ8AE4AWYALWACuAQoAEWAFiAMgAAWAJkAUwAPGBEgAEqAJUBM-AFiAPcAL6ALKAJ8ADgAQ4ATcARmAHyAUUBOQAPGBRoABWAKoAIaAFWAFcAIcANsAHYALiASIBTkACUAHMA","0-3":"GQACMAEQAAMACOAAIAAQAGSAEkAIaACYAAMAEQAAMACUAAcAAcAEQAAKAASACKACaAEKACiAEsAAOAEOAAMAASAEMACKAAUAGWAEKAAKAIoAIWAGOAEIAAQAEWAGQACIAAKAIOAAMAEOAGeACOAAWAAKAAKAEKAAQACSAAKACQAAaAAIAEeAAaAAKAGQAKsAAIACaACMACOACWAASAAMAAKAAKAEMACMAAUACOAAUAAGAAKAAKAIOACKACUAEKACsAAMAGOAAQAAQACSAAYACUAAMAAMAEMAIOAGMACaAAMAAIAEIAAUAGQACOAAMACyAEMAEWAISACQACOAAeAAOAAIAAQAASACIAAMAAaAESAAIAAKAAIAAkAGYACMAGUAAQAEIAAMACQAAKAAOAIOACKAASAAWAAOAAIACUAAaACaAAMAAOAKaAAIAMUAEKAAKAGYAIWAASAAMAGOAAIATaAAQACSAEcAAOAAIAAOAAQAEIACOAAQAGUAGYAASACMACKACIACQAAUAEMACYACgAIQAAMAEOAAMACMAOWACSACSACiACOACOAEUACUAAMACMACKAAOAAKAKeAIQAAMACOAAOAEQAEcAAIAASAEQAAKACSAAMACIACSAAQAAMACIACMAEKAAOACKACMAAMAAQACMACMAAUAKMAAKAAMAASACQAAQAAKACWAASAEIACKACMAGOAASACQAEeAMaAAKAGaACMAAOAAQACIAGcACSAAKAGcACaAASAAOAEQAEQAAQACQAGOAAIACSACQAEQAEKAEQAEQAASAAOACMAAWACKACQACUACMACKAEMAIMACSACGAEKACKAAaAAQACMAEMAAKAEKACSAGQAIWAAUACOAGYAAaAAMACyACOAAUAGMAAKAAIAASACWACOAAOACIAAIAMUAAOAAMAIKACSAGOACOAOiACkACcAEaAAKAO8AAKAAUACKAGWACSACaAAKAEOAAcAAMAAKAEUAEQAAeAAIAAKAAUAEQAAeAAOACQAEMAASACKAAUAASAEUAAGACWAAKAAOAGaAAMAASACOAAIAAIAEQAAMAAIAAKACGAEOACQAEKACMAAOAAGACIACYAAKACSACaACYAAMAAIAWiACMAAMAEWAAMACOAAWACOAAMAEaAASAAWACOACQAAMAAsAGQAAaAAMAAOACOAEOACKACWAAUAAIAGQAAWACaACOACmAASAGQAAOAAeACIAIgAGSAIUACWACQACeAAKAAaAAKACkAGKAAKAEKACmAAKAIWAAMAEWAGQAAWACUAAMAAOAAaAASACIACKACUACKACOAEQACQACKAISAAKAIIACOACWAGQACQAEGAEeAAMAEMAAMAEUACKACKACMAESACUAAMACSACUAAgAAYACYAASACSACKAAoAAOAMUACKAEWAMsACeACIAEMACMAEaAAcAEQAEQACSACUAASAAQAGQAGSACYAAQAAIACKAGOAEKAAOAAKAAKACSACSAAOAEWACiACIACOAAUACKAAUAGOAAMAGOAAOAAUACYACOAAIAAKAGIACOACMAAYAAQACcACMAAKAASACMAAOAAMAMQAAOAAQAAOAEKAEOAMoACGACWACMAAOAAKAGQAAKACQACMAIUACWACOAEUACUAASACIACOAAIAAIACQACYAEMAASAAQAAOAAOACMAAmAAOACcAAYACQAAOACyACQACQAIcAGOAASAEOAGkAAOAGMAEcAAKAGaAAMACQAAMAIUACKAEMACMAAMAAQACeAAMAEIAGQAAQACKACOAAaAASACIAAOAAMAAMAAMAAiAAQAAQACSAAeAAIAEiAAOACYAAMAAMAAGAASAEIAAMACOAASAAaAEcAEQACOACOACKAEEACgAASAASAAUAEeAEOAAOACQAASACSAIMACOAAOACOACIAAQACYAEOAEgAAOAMQACQAAOAAIACKACIACIAAgAEUAAKAAiAAcAAaAAMAAUAIeAASAAMACWAAOAAMACIAAOACaAIOAEIACOACOAGYAAsAAMAAMAIOACOACkAAKAESAAGACOAEYAAMAAIAAYAEYAGSAAKACKAAMACMACaACUAASAEaAAGAAMAAKAAKAAKAAMAGkAAMAEQACQAAOAEgAAGACOAAKAASACIACQAAiAAIAAMAAKAGQAAKAEKACIAAOAAWACcAEmAC0AAMAAQAAcACOAGQAEOAAaACaAAUACWAAIAOSACOAAOAGIAEKAEOACKAASAAYAEOACQAGYAESAEmACMACQACMAEQAEKACQAEMAASACIAAKACMACIAEqAAaACIACKACKAAMACeAAWAEOACKACYAIsAAIAMSAAKACKACMAAUAAUACKAEKACKAAMAEWACUAAaACOACKAGOAEMAAeAAMAAGAAOACQACOAAcAGOAAQAAUACOAASAEIACUAAMAAOAAcACiAAKAIOAISAAMAEUAAKAEaAAMAGMACMAKkAESACWAAMACQACIAKsAAMAAOAAMACMACMAEKAAYACIAEIAASAEKAAKACKAAIAAOAAQAGaAAKAEOAEQAAUACMAGOAAKAAQACcACSAEUAEMAAQACSAIWAAGAAQAAUAEsAAKAAQAAKACSAESAEUAAKAEOAASAAIACMAASACOAAOAAQAAIAAIACYAAMAEmACSAAIAAUAAKACUAEQACKAAOAGkACQAAQACaACQACIACQAAKAAMAAOACYACcAAKAAMAEMAEKACWACKAASAAOACWACUAAMACIACKAEOAAgAEYAAMAAQACIAGWAEaAEQACSACSAISAGMAEKAEWACMACOAGKAAQAGqAESAAUAAOACUAEaAAMAAKAEUAAQACaACMAASAAOAEKAAKAAIAEKAAgAGcAGMACSACSACKAAIACKACOACKACKAAOAAKACQAAOACOAAQACSAEeACKAAKAASAAIAEOACKAEkAGIAAeACMAAOACMACOAAaAAMAAOAAUAAIACOAEUAAUACaAAOACIACKACOAEWAAIAASAAIAAOAEOAAMAASAEMAAMACWAESAEKAAQAAEAIOAEMAAKAAMACMAAMACSACIAAOAEYAAMACSAAYAKgACKAAWAAMAESAAMAAQAEmACSAAMACaAKQAEWAAUACeAKKAEMAAMACOACUACQAAOAEeAEYAGYACIACMAEOAAIAAWAAUAAOAGUAAIAAMAAKACKAAMAAKAAKACOACQAAQACeACSACOAAQACSACOAAIAESAGWACWAEIACMAMYAAaAEQAAQAAIAAGAAGAAIAAOAGsAESAEKAAKAEaAEQAAaAAKAAUACIAEaAAQAAMAAOAGSAAQACOAASAAIACOACMAEaACOACIAAMACOACQACKAAKAGQAAMACKAAWAAOAGQACQAEYAAQACKAEIACSAGQACQAAWAAUAGOACWACQAIKAAIACQAAOAAQAEgACMAEKAAQAEYAAKAEaACeAGSAAWAASAAQACMACQAEYACQACMAGaAAIAAKAEUAGmAAKAGUAEUACKAAUAEKAEcAEYAAKACKAASAAKAASAGQAAOAAMACKAAGAAKAAOACSACKAAKAIYACKAAQAAKACMAEeACUAAWAEeAAMAEMAAIAIeAAIACIAGIAEGAAGACOAAKACMAAMAAKACSAESACKACQAEmAE8AAUAAQAAOACIACSAAQAAMAOUACQAAMAAKACcACKACUAGmACIACMAAKAEOAAQAIUAEKAAYAEMAAIAAkAAOACQAEaAAeAAKAAKAASAEMACUAEeACUACSAAQAAYAAMAHQAAwAAIACOAEMACUAAKAGSAGWAAMAAMAAOAAKACSAASAAMAAQAAmAKcACMAAIACKACKACaAMSAEeACIAAIAEWAAMACKACKAEQAAGAEMAEKAAQAAQAAIAAMAASACMACWAAQACMAAoAAMAAMAEQAEOACYAAKAAMAEOAIgACQAIWAEQAAWACOAAOAAIAAQAAOAAUAEUACUAAKAEYACYAAMAEOACKAAUAAOAAQAAaAEaAAKACMAAQAEUACWAAMAAMAAQAIeAMQACQACQAGOACWAAIAEOACMAAeAASAASAAKACiAEOAAUAASAAcACOACaAEMAAMAAIAAOAEMACUACWACOACSAASACQACOAAIAEWAAQAAMAAUAEOAEQAAoAAKACcAAWAAOAASAAMACKAAKAEaACMAAMACMACKAASAAKAAQACSACOAAUACWAAWAAKACIAAOACwAAWAASAAQACgACOAKeAAYAGOAGWACWAAOAAQACOAASAEMACWACYACSAAUAEUACQAEkAGSAASAEOACQAEMAEWAASAAIAAGACKAAYAEOACMAEMAEUAEOAAIACKAAKAAKACQAGaAGYAAKACIAEQAAIACOACOAAKAEKACWAAMAAKAGMAASAOYAGQAAKACMACKAAKAGQACcAGKAGQAAWACIAAKAEQAASAI8AEUAAKAEQAGMAAKACQAOeAGKAEIACQAKUAAIAAIACiAAOACaAAOACKAAKACQAEQAAIAAKACKACSACGACKAEMAEKAEaACKAAaAAKACMAAIACOAAQAAIACKACUACiAGeACKAAIACKAAWAAMAEMAASAAKAAIACOAAcAAKAGOAAMAAOAAMAEoAEOAEUAEMAAcACKAAOAKSACSAIcAGWAEgACeAAQAGmAAKACMAAKAAWACKAEKAESAAOAAMACiAAKAEMAASAGUACSAAMACQACIAEKAEQAEKAEeACSAAUAIUAAUACIAEWAAMAAUAAKAAOAAIAEOAAaAAOAEQAAQAIKACSAEaAESAEUAEKAIeAAMAAKACIAEQAAQAAKAEOAEQAAKAEaAEiACOAEiAAOACQACOAEMAEWAASAGKAASACUACKACKACMACQACKACUAI2ACaAASACQAAIAGIACOACKAEUAASAAMACOAAMAAQACKAAYACKAAIACQAAGAAKAAIAAKAEOAAQACSAAIAEQAAcAAOAAYACQAESACSAEcAEMACOAAOAEKACiAEOAAMAEMACKAESAGIAAKAEiACYAAcATUAAMAAQACgAEMAKUAAiAEMAAMAAOAAMAEYAAWAAOAASAAYACqACQAGYACgAEQAIOACgACaAAKACKAAWACYAAUAEOAMaAEOAAGAAKAEMACKAAQAAWAAOAEOACMAAMAASACIACUAIMAAKACIAAOAAOAAQACQAKiACOAEOACMACYAGQACMAEiAAIAAKACMAGUAEIAEMAAQACOACwAAKACUACUACMACIACMAAQACOAAKAEKACQAEQAKSACKAIMAGOAAWAAQAAOACOACaACOAAKAEQACUAIIAIgAEMACMAAMAASACMAEOAAKAESACOAIQAEOACYAAgACYACcAAMAEKAGQAGUACUAAMACMAAOAQSAEWACgAAKACKACQAAKAAMAAOAAQACOAEaAAUAAOAAIAGIAAQAAMAK8AAKAAKAESAAMAAQACOACIACMAAQACUACSAAOAAGAAKAAUAEKAAKAESAEKACOACMAAWAAKACKAAKACKACQAAKAIkAAaAAKAEMAEMAEKAEMAEYACYAAUAAOAASACaAAKACMACOAAOACYACOACOAGkAAOAEUACKAAYAIkAIgACKAASACWAAKACOACQACMACQAEOAAKACYACUACKAAMAGOAAGACIAAUAAOACKACQACKACIAAKAESACUACWACSAAMAAKAAQACYAAKAASAAOAAMACKAAYAASAAQACMAEiAAIACyAIeAE2AEOACOAAUAAKACKAAOAAMAAKACaAGOAEOAEOAIcAKSAEOAAOACKACMACMAASAAIAAGACOAAKAEOAASAAUAEOAGWAEMAAOAASAEUACYACSAAOAAGAAIAAOAESAAKAIaAEcAAMAAMAKYAAMAAMACSACIAEUACUAASACoACeAAIAAIAEcAESAAKAAMAGOAAMACIACUAAOAKqAGOAAeACMAEMAAIAASACIACMAAQACQAASAAQACOAESACSAEUAEqACOAAOAAMAEQAAIACQAG0ACOACMACOACOACQACSACQACQAAKAAYAAKACWAAIAAYAAIAGKAAKACSACMAEOACWACKACSAAKACOAAIACYAAMAAUAAMAGYAASACKAAWAGOAEKAAYAAKAAOAEWACQACKAASAAcAAWACMACkAAOAAIAEQAEKACKAKUACUACKACOACMACYAAaAESACOACOAEUAGeAAYACKACaACQAAOAEUAAQAAOACSACQAAUACIAESAAGAEaAAOAEKAASAAIAEMAAKACMACMAKQAEWACOAAOAAMAAQAGeACIAAKAAqACaAEGAIcACKAASAMgACSAAOACcACKAAKAAKAKWAEUAEUAAoAAMAAMACKAAUAAMACOAAOAAWACSACKAEWAAMAASAAaACUAESAAMACeACWACOAAUAGQAEaACQAAOAAIAGYAGgAAKACgAEOACMAAOAAQAASAGMACYACQAAGAAKACQACiACYAEQACKACOAAOAGOAAYAAOACQAGOAEQAAaAGUAAKACgACQACSAAKAAeACgAAYAAKAAOAASACIAESAASAASAAKAIKACSAAUACQAAIAAaACMAASAGWAAKAAOAGeAAYAAKAGcAAKAEeAEMAAKAKgACKAAGAAaAEsAIQAOcAAKAAMACOAAMAESAAOAAOACQAKQACYAAMAAKACKAAMACYAAKAAMACKACcACQAASACUAAUACMACOACKAAQAAUAAYACOAEIAAMAAKACKAAKAAKAAOAAOAAIAAKAGWAAoAAOACSAAKACSAAOACUACKAAWAEeAAOAAKAEeAAKACSACIAAUACKAAMAGMAAOAAQAASACWAESAAIAAMACQACQACSAEcAAOAAKAAOACMAEIAAOACQAAWACSAGiAESACMAAiAAMACKAAKACMACKAEIAKOAGOAEWAEIAAoAISACKAASACMACOACMACOAAMAAKAAKAEKAEKACQACOAAKAAQAAMAOeAAcAAMAGiAAYAISAKKAAIAAKACQACKAGOAEKAAMACMAGUAAQACMAEMAEWAESAAKAAUACQACOACIAEYAASAAKACSAAOACKAAMAIUACSAAMAEUACWAGWACMAGYAAMACOAAIACeAEKAAaACgAAOACUAEOAEQAAaAAKACMACYAEMACQAASAIYACKAASAAIACSACWAAQACIAAWAGIAIOACSACaAEUACOAIgACQAGSACaAGmAAMAAOAAMAIqAAgAAUAAOAAKAAOACIAAKACOAAIAKWAAOACMAEUACWAAWACMACGAAMAAGAAIAEIAAQAEOAAOAAQAAQAASAAWAAOAAIAAMACMACUAAKAEOAEWACQAAkACKAAMAAQAEQAASACOAIQAAOACYAAQACKACKAKQAEaAESACOAAMACUAGIAAMAAKAEWAAMAEaACgACKAAcAIOACKAAKAASAAUAEQAEgACUAAKAGYAAWAEYAAOACKAAMACWACYAAMACSAASAESAAMAAWAAIAESAEWACIACMAAKAAQAAOAAKAEMACSACQAAMAAYACcAAGACaAAGAAOAAMAASAAIAASAAIACQAAOAASAAMACaAAUAAUAGWAA6AIaAAMAIkAAWAOaACMACOAAIAIKAAMACSAGKAGaACOACSAAWAAIAGUAAMAGaACKACQACMAAYAAMACOAAUACIAEmAAKAGOAKSAGIAGSAIiAGSAASACWAAaAAOAGMAAQAEaACOAAOAIQACQAAMAEMAEUAAOACKAEMAAKAAKAGgACWAAaAAWAAKACSAEOAEKAMqAAQAASAAYAGOAAMAKcAGUAAIAAMAAOAAOAESAAIAAoAESAIMAAMAAMAAKACUAAOAEWAKSACMAAOACOAAKAEMACUAAMAASAAkACWAAIAAcAEWACOAAMAEgAEKAESAGeAEOACOACiACOAAOAAIACOAEMACMAAMAAeAAKAGOAAMACKAAIAASAAMAAIAAKAEUAAUACKACQAAOAAOAAQAOQACYAAMACgAEaAEUAEWAEMACOACWAEaACIAAGACWAAYAASACiACMACIACKAEYACWAAOACUACMACUAAKAAOACOAAMAASACQAAeAEOAAYAAMAASAASAAMAEOACOAAOACYACOAAWAAKAAIAGOACQAASAEKACIACSACIAAMACSAAIAK6BEqAIUAAIAAKACSAAUACSAAUAAIAMeAEWACKACkAAKAAOAEKAGMAAKACMAAIAAOAGOAEYAAYAAMACQAAMACKAEOAAUAGIAAMAAKAAIACGAAOACoAAOAGGAASAAIAASACiAAQACKAGeACUAASAASAEWAGUAAMAAUACKAAQAAOACMAEMAAaACSACIAEMACyAGSACKAASAAYAAaAAQAGMAAKAAWACQACSAEOAAeAEOAAiACaACMAAQAAMAAKAAOAIMAASAAIACQAGMACUAGaACIAAMACYACMAEgACOAAKAGuAKiAGQAMUAAkAAcACSACOACOAAOACUAAMACKAEOACIAEYAEYAEKACKAASACKAESAAMAEaAAMACOACQACQAAQAAMAASACYAASACQAAUAEMAIcAAOAEUAAWAGuACQACQACeAASAAMAAUACOAEgACUAASAAOAAMAAKAAcACMAAOACQACKACGAAUAAMACYACYAIOAAOACWACOAEYAAOACMAESAGeAEOAAOAAOAAYAEMAAKAAGAAQACMACeAASAGSACOACYAAKAAKAASACWAIYAAcAKUAAMAGSAMcAAKACeAAWAAuAAQACWACOAGUACUAAUAGYAAMACaAEMAAgACKACMACIAAMACiAAYAAMAAmAEKACWAEMAAMACOACcAAGAIOAAMAAYAIQACSAAGACQACQACKAAYACOAAWACYACKACUAEaAEKAAQAAcAAYAGMAAQACKAEQAAOACKACMAEcAEQAAOACSAOaAAKAEOAGIAAIAAKA","1-2":"IiAKaADeAG0AHqACuAJYBWsAH6AL0ABSANuAH-AK4ALGBFEBNeAIaAMUBL4AXSBHqAYuAF-ALSBJuAOaBTEBFgAWyAOsATqALABFmADgARoAMoAPqAT-AVmAKWBAsADsAF8ASUAP-AHCBGQAR-AFMALaBOWBLqALSCOEBJEBJMBVABNWAJCBX0AMqAH0BFuANcBJqAL6AKuAOuAEUAFgAEkADqALsAMGBQyASsAOeBLyATeAKQBP6AHKBL8ANyATOBQQBQgADuAMoAFeAIIBLuAIyAQaANKBOoAJ-AOiCTwAJ-AOoAFcBNIBR-AGOBR6ADeAWwAGsAFiACcADaAIACLKBDmAJYAFgAIgAOaAEYBKeAGmAHgAHYBK4AToBNoAKWAOuAIsATMBNqAQYBQ-AJoAHmAN8APiBQMBFeAH-AC2BDqAFaAGOAM-AKOBMmAH4ADiANYAS6ADkADaAHwAJoAJqANqAI2AN4AHmACmAHmASyAB0AEkALaAE8ASoBNwARsANuAFWALcCHqAVuBBiAUaBEWBEoBL6AFgADkADqAFiAPaBYyAKWBNqATkACMBCgAPqAMaAQACDmAJOBPuAHuADABBqANCBQWBSyADeATqAOmAQKCHyAJgAT4AEiAFUBBsANoBNkAL6AJgAP4AR4AMoADWADyAVyAX2BEiAPoBK2AFuAG8AD2ARSCH8AGkAKCBOuADCBCwAGmATmAMaADmAQiAKgASyAEUAU0ADIBNQAP0AMmATcAN-AEuANKBJCBQeAHqAOgAEKBUyACcAAaARYBSiABoAQoBBqAE-ASgAFSAFEBS6ARKBTqAPGBO-BKcBJYAH0AJoAKeAMiAEeAK-ACOAGkASyAPsAPaBKWAHsABoAVCBLcADCBH2ATgAMwAOoAGuBEaAHYBXOBJsAFgAJiAN2AJcANqAJCBLkADeABsASkALOAWIBFqAJcAHkASuAPqACcADiAL6AVmAH6AN8AHECH8AFoASSBMcAE0AJaBLMBRsBBeAL4ATgACYAPCBDmANqARcBLsAGwAVkAJaANEBCoAG6AQWBFEBQ6BIqAU6AJwAQiATCBFgATeADkAPsAE6AN4AHqAEiAGoBFUALABXcADgBdsAQ0AOqBRMBS8ALsAFSAH6ALiAI6AKMBS6AFcAEeAIoAIaAY6ATeATyAEEBLoANkABgACeALkACkAEcATwAQYAEWAJsAOiBH0AGuAEeAHgAPqAVSBB6ASgAJsAHYATuAJuAMoATYAFaAIIBVmCG2AFwADEBMwAT0AEUAHsAbABHWAHcAHSCJ2ATuATwATyALCBKABLoADoAOSAOKBHYADiBEiATOBCcADsATqAN8BDiAUaAR-ATuANkBN8AJKBFyABiADiACWAKeALmCBgAUoAJmAJABVWBOqAJmARwALEBKYATEBJeACgAPQBHqAMkANiAK4ATwALoAOGBQoALEBISACyAGkARkAHQBNoANQBDuALiAK2APyAP0AKQALSAL8AUIBQIBRcAToBDYAPYAMyAMGBLoAKeACgACKBQwAQyAH8ALUAIuAPGBHSANuAEiAPeAD2ANUAR6ALeAZIBJmANkAM4AA0AVoANgATWBL2AJ0ASGBR0ASgAJyAEiALgAE0AKmAXiADkAEaACiALsAUcAQWAOKBDYADiAIUAQaAT-ARyAGIBLwAFiAAcALaBSoAOyAN4ALyALoAHiAL0AO0ACwAcmALYAMeABWARgAIiAL4ADeAUaBRuAD0ATEBX-AKeACaAKsAD4AWwAEWATeBHeABYAKsAPqAPuBPgBI8BRYBNgANqALWBGWAHqBN-AToAXABJeAQQCKwADmADWAE2ANOBS6AUiAFeAZmAQABQ0BRcAICBF2AHYCFeAK6AM2AKQBTmAN-AOWBJ6ADcADoADqAK2AIkAN6AHkAMqAP4AGaAJaAQ0BIoANwAFaAKWALKBQqAReBFIBDaAPgATABH-AJ-CHIBHEBTgAFWBFCBBiADKBKeBMUAR-AOkBPEBK4AW4AMMCIcAGaANqAH6AWsASqANaAKwAPOBIYAPsAU-ARuATuARmACqATEBNKBHQBReAQ4AU0AC0AMiAVIBDWAF-AKeAAYADkAZaCO8AV4BK6APeBWMBSQBFUBIeANuAOeAUmAZ-ANABUEBQyACUATGBT2AFwAGSAJgANgALyAMgAGgATwAH2AJoAHeAHCBFwARABGgAPCBOeAFqARqABqAYwAQmAKABQ-AEiAKoAHgADgALuAECBPiBJkAJEBEqAJqAHYAHaAH4AQ4AJoBHCBJSAHeAHwAPIBDmAN6ANGBS2AAOANoAKsAHUAGwAIuAKiAIKBV-AGcAGkAF4AHABEUAZ2AOUBHwAF2AEKBEyAFcBQoAEoAPABUYBUgBRwCHIBFaAPoAGQAJyAS6AJiANaASuARUCFsAJcALsAQsBQEBCCBJEBUmAJMBD4AJWAR6AWuACsABYAEaAS0AEgAQuAPABGYADwACmARiARuAZ4AOqATeBP2ATsAGsADsAWsAQeAIOBP6BP6AN-ADmAJmACqAJWBIABLqAB4AHkAKABToBU8AJ2AR6BSCBJiAOaANEBW4APABHkADqAJsASiAG2ATmASeAWGBTABLiAKwAQoAHcAJ6AVmBHSAFwADSAScAPkALsANqAY6AMWBJgALUCR8AM2AMOBIYCOiAEmANmATqAPoAGsANKCG0AHmAFsAHSADaANIBBgAKcATqATOBPcAEwAH-BQ2AOwAMUBKsATsADwAIwARkAL6AAaAKiAKSBGgADqATyADyAOuAPqAJaAJ6AMoARYBPmARKBJ4AIgAPyAJwAJCBHKBHYAGmACmAQuALiAQgBBiAHMBRcALABQ-AKQBFoAQMBLqAOWBDmALYBT2ADSBNCBFwAFCBNaAP8AIiALsAI-AFaAAYAGaAKgAMyAM6AWSBWSBIaAMqAHiAMcAP6AJ6AK-AG2AOEBL6ASyAH2AD6AK8AHiAQ-AR4AEGBB0AJgADuAMqACOAD4AJiAMEBJgAVsAUEBFABRICFsABOBLYAIcAGOBJgAGwALsAFyADOAI2AOABT6AKuAPsAU0AHsANqADkANGBRwAEmAFmALiBF2AHkABWALSBIqADaATqABiAHmAHqAR6AQUBUeAGcBSKBS6AMsBTmAQqAEaAJeAFYAJ2AFeAImAL2AQcBOeALkATWBLyAJuAPABFsAJqALWBJkANkAJoAPuAMuANaAG6AB4AHqAOOBQ6ASgAJqAIaBLyAIqAMWANYBBYAJOBF2AHsAL0AXoAFaBOyAH6APsAMCBGaAEsABWAG4AH4AO4AIwAGOAEeAIkAL6ALGBMcAPyBCqAFqAFyAJmAMyAFmAM0ADWADOBO8AQsAHaAO0AMsAGqBMeAHGBCqAEkANYABuABgARuAFoAHmAJqAOeAQqADWAJ8AJuALoBEcALoAPABTWBTABQ0APqABYADIBBiAEsABiAEiAS2ANyAG8ALwAQ6AXUBFiANcAf6BLcALsAGQBGgAHsAPaAOyANaASsAJABDWANkAKUAU4AQwATqAFqAMeAF8AJ-AJuBJEBTcBKWBPUAN4AF0AGyAGqAZsAGkAGqAG6ALCBBiADsABYAOaAVwBDiACwAFcAHCBHaAK6BN2AEIBFSBIECGOBLWALuAMsAE0AIIBTqAKABTABSEBJ4AL8AT-AEwBa0AQqABYAHABD8AF2AEWATgAE8AKeAC0AF2AIkBIiBFqARYCKUAR2AOyAT-AIgAGwADSAEeAHABW-AQ8AHmAFWAPkAIKBOUBJEBGqAJ4ARABLoAJcADwAOgAEUATCBBQAQwABcAVEBRUAESASWBTiAOABTaAKQALYADaAH2AMiARuACUAR-ABYATOAESAU6ADmAMkATOBHiALiBOABDqALuAIABDaALiAKaALyBCoALeANCBLABHUAKWAESAL2ANsAWoAOMBB0ALOBEwBNcADUAMkARiAUoADkAOUBUgALIBJgARaBM2AMuAKQAQwAEqAR-AUgARmCDmAZeBK6AQGBBUAQ-BLaBFeAAyAJmAFkAK2AJoADkAIiBFmAEoANuAF8AHeAOcAVuANEBSABU-AP2ANyBGwAQsBNyAIqAB4AGaAFeAEgANkAMYAHwAJmAQoAIyALeASiARaAOeAAiAWoAQ2ARiAOQAQkAI-AEYAHsAMQANEBJUBYsAJ4ABoAPmANWBFiADCBXyAF6AJkALABBWAR2AL0APsARSBVsAFoARSBDgAQyALGBC4ACeAN2AIIBScCTiALeATEBVYBX-AR8AEcAS8ADaAU6ADqAGoBFkAFWACwAGGBV6AGcARWBJEBIyAL2AFSBNqAEUABuAN4AHMBVqBKsAPGBJqAKYAH2AQABLwAXIBHqAT4AT4BA0AFeAUkAI0AC-BMeAKYAKOBDCBF4AJoAT6AIYAEeBMwAHuAJmAYiANiATCBJ4AKOALmAV8AL2APeBP8AB4ANeATABJ6AGyBNkAO2BPkAMSBAYAJQBEiAFYBOuAL2AIeAKiAQQABuARyACKAEuANABKaAVuAJkAJyAIkAIMBO2BIeAEYAFuAKgABsAKkAHCCFmAWqANMBGsAJqADaANsAS-AGSBEuAJ0AGWANABJoAGiAHeAUqAP2AJUADaAMqADOBHaAF6AQqCJiACSAT4AFeASSBBcANeBCaAIgADeAFiACcADuAJ6AMqAJgATuAHwAFqAEwAOEBT8ABsAFOBPoAP6ASkANeAOwATqAOiBDeABYALWAWwAGgBJGBKeAIWATaBF4APMCKABBIBMIBRaBKsARkALkAFuAOyAIyANyADwAHgBBwACoAVEBEqAT-AMqAFmADgAGiAWuAOCBCqAM0AD0AGABPWBIcAFeAIcALsBNqAUmAFmANCBT8ANQBPeAD-ATeAO6AGyADABLGBL6ALqAOOBDeAIYAEgAS8ASaBH-ALgAG0AHABNuALkAH2APuAIQAQgANaAD4APgAUuAAoAF4AHeAR4BIeAE6ADcASoAOUAIuAGeAReBHsANABNqALsADeANqAImANmAR-AD6AY2AKIBGuANoAI6AMqAS-AL4APcAaoADmAM8AU6BTGBOaBGsAFYAW4AHqAMEBDqARCBJyAUkALWAXABD2APuADWBIiANwALuCDmAICCB-ARqAISBNSBLmAM8ACqALcBI6AScACkAI0AP4AJ-AHcADyAAYAQQBJWALIBJABG8AW4AIoAM-AIeAHEBH0ATeAPYBCwAZoANEBC6AWUAP8AE4AFuALSALiAF0AJiBK6AFsAPiAIyAH6ASmAL2AFsARwAMoAN2ADgAJMBH4AJaANaBHeAHOBFoAPcAD4AJqARSBFiAOEBFcAPaAE4AJoAJiABeARuACYATsAPWCS4AH8AGuALaAQeABmAMSBNqAN-AKEBFcAFeAPsAJSAF0AHuAFgAVcBKuAEuATmAY6AESAWuAGiAH6AMmAReBLsACcBDuAFYAKkANeAGWAHoAMqANuACUAHcADkAD2ANqANCBHsABgAVeCJqAJoAMcATsARwAECBMgAB0AHwAGkAFaAEyACoAMsANyAVeAOQBSyAJQBGuAGgALWBLmAHmAKWATUABiAPmADsAIsAQmAJoAT-ANGBFsAPyAFkAK-ABsAKmAPyADsADOBFOAIUAJyAMWBROBPGBSiAHiAJQBHiAG6AEqAFkATwAFyADsAIIBHgANmAD8AGeAM6ABaAMGBM4AHkAO0ALqBRCBFeANqAEwAIYAOSBa0ADKBJUAIGBF8AKiAQyAT-BUEBIuAJaBTqAMkANwAAOAKCBH6AGWAF2AJwAF6AHWALWBTqBDUAJwAVYBLwAPoABSAV-AAeAOWATMBZ4AHMBCkALiAFaBDYAI4AUYALgASeAGqAHuASwAEmAGwALeBGmAMUARMBJCBO8AEgARqBLgAK6ADaAMEBF0ADKBKiAJiAQ2ANYBGWAMsAR2AIWBRiBVyAQeAGABMkAMKCJCBK6AToAX-ATUBWGBGYAI-AVSBOsAI6AOwAFiAVmBLCBKoACeAWuAGsCYiAIEBTgAJGBSyAHWBIaABYAPQBIyATwAHyAJKBUUAUCBDqAQYBJOAJaAOgAFkALWBHwAL6AJgAT8APiAB4ABsAO8ADuAFUACcAHuAOABBUAFuAGeABmAF0AQUBIOBQEBQEBPsAVqANyABUAIsAF0AOaAYkAJ4ASsAOCBLiARaAGgABWAMeAHGBNQBP8AKWAZqATWAFcAKwADiATiAIyARGBDCBHqBNsBIyAUiBHGBTEBO2AW4ALIBVgBRcBMaAHuAXwAMQBM-ACmAUuAUmAPuARABKEBU2AYuAIMBPEBKcAK-ARgAL-BHeAN6AKEBHmAD0ARmAMkADgAL0AJEBNGBQkAJ6AEGBGCBL6ADiAG0AGeAE6AHGBNoAD4ARiAP-AWYAB8AKkAQsATyAHeARIBTiAUuAGaABuAIoAPYBVEBPkAPkBJsAHaAJuAFMBAiAHmAY-AAWATGBMcAR8AIaAEmBVGBSqAHYAH2ASCBFMBKsAJOBNuAMCBJ2AUeAGWANmAQcBOwAIoAIgAVEBPIBPqBLkAM6ANyCVmAI4AS4AXeAF4AZgAWiAMgAFaANwAJgAR2AHiAT4ATmAFYAEYAJ6AImATqAMMBReARUBFCBDaAGiADqAHoABwANuAEaAMsAMoARGBWkACUACuAQ-ADUAN2AJuAFABL-ALqASsABaANiAVACXyAReAB2AQmAAoAL2BdEBViAM8DFkAHmAPOBAcAF8ADeANiBKsBDsAHeACyAJgAHICJ-ABeAP4AOYBJqAL0ARmACWAFgBEWATCBGwAO0AJoASoAFkAHmAAkBSMBOYAPUBV2AAYAG8AHiAJUBBmADoAOuAVqAB-AKkAW8AJaAR6AM8AS2ARwAGwAAiAQeANABRmAPGBHoATeARkARmAEYAFeARiANiAEsAN0AMWBGoAMuAJiAN8AQABOmATaBEsARWCFqAOWAGeAQUBOqAIaADiADaANuAFoAOwBDGBJiAJcAS2ACyAFsAOYADcAO4AD2AR-APmAHaANmANcAD-AWmAGQBHaAFwAHgAFuASYBLiALmANgAJqAL2AHiAFmABgAEaBQMCQABBiAUIBLYAK2ARIBCEBCaAXiBMqAQwAO2ARGBAQAFaAGEBIoAG4ANQBLqAF-ANkAJwABUADiALqAC6AV8ADWAJ2AVABTaAKmAEaAPqAEcAO8ASsAN-AMuAP8AJmAH6AGqAJOBBqADOATuAL0AHyAFOBMyALuABSAV6AF4AQ4AKmAS4AAwALgAPyAReAJ6ASuAQSBFUAQmAFkBK-ASSBKiARqAF8AFYAJiAHoAPCBIaAH-AKABIOBFiAAaALqAP2AUMBIoAMEBQABJyADoALiBLOBJ2ADeAEUAU4AFkAPiACiAN2ADuAVyAJeAH2AHoAHMBSYBRiAK2BAUAIABFOBKeAZmAMkAKsAMkADQAHgAOmATaBL-AIuANgBHoAA6AW2CFQAL0AMSBJ2AJuAMWAJuBAcAQEBHYAGsAOaAPABUyAO2ALeADOBEYADgASMBQuALaBRsAP8AKABGeAG2ADGBJgAIuALsAPEBHIBMgASEBB6ASsARCBIuAFsANABL4AASAO6AMmAHkAXmAGWBNuAVWCN2AFSBP6ADqANkAMyBMuAEEBG2AJYBNIBKWALQBN2AReAVIBFcAKiALqAS4BHYAIiAHoADcAJ6Af0BKABFwAIKBPwAFABNCBH6ATwAS8AL0ANyAZiATyAV8AbMCFABS-ARqALcADYAP0AN0AMIBNCBAQAS6AVaBTKBHmAL6AKMAK2ALeAFuAToBG2AN2AHwALqACgAJWAP2ANGBK8AEoAEwAPIBP2ACoBFQBVQCKgAOYAJ0AJEBGkAEuADUAGwAL2APOBMkAGmALWALoAFyAHeAXABGGBXWAVyAO8AV8AI2AKcANECEaAGqAS-APwAIwAJqAD2AVOBBeAI4CHsAIiAReAMUASyAB4AFqAHKBNEBHyAPoBSYANiALQBJoAEyAS4AFwAJmADoALqARQBBkAKmASSAJuAMeADgAEUBXWBKuABaAKmAPCBEaABgAFeAN4BFIBOGBFqAFuAXgAQsAOqACoAFWASuADyAOgAHsADyAHqANSBQyAGYAO-AJ-ALIBJGBImBNsAFaBHeATGBNoBK6AGwAK0AJmAJiBF4AGeBGyAFCBEqALwANuBAeAJUBNwAKWAU-AI4ALSBHqAACBFmAB4AOWBOYAAmAJkAIWBE4ADuAOGBFcAGoAO2AH6AHUAUqAIqABiAFcAL6ASqAHqAGIBGoARUBDYADsAICBRKBOkAOsAE8AGCBFsAD6AFiAHkBQkAIiAOuAFqADcADwALsAJmALOBWeAJKBT6ANGBLwAWuAO2AAeAK-AP4BQqAUwAFyAFiASGBFiACaAJmADyAJsAPMBOiABeASWARqATeASiAPWBB4AM-AU4ADeAQ-AN6APiBGqARmAO-AJGBHyANgAUoATyAJ2APwBN-BL8AOsAKkAEQAReAIeAImAOuAR6AEqARwAFUAJsAI4AUkAFiBFuACmAD6ALuAS4AOGBDWBDQAIWBNQBGsAG0AQaAHaBTWBDkATsACqAIwANUBTKBLKBNaAZgBHkAJ6ADqAFgAH-AP8AL2AFiAGkACmASkALIBKqATEBS8AT-ARyARmAIQAI6AQSBL2ADqAEwALsAHUBJWAVqAEkAPsAF2APKBN0AU-AO-ASYAMmAGSAFmAPKBTwAPeBOcBP8AHqAGUBSGBKsAEIBHoAIqAFyAGgAGYADeASGBLyALuASIBCsAEeANqALqAIeDVKBKoAEuAJEBGgAF0ARkAOeAJWBJeAJKBTSBNeAF4AIoAVMBPwAO-ARyAI8AQOBNmAHaAKuAR8AIwAFiAAsAKeAQIBMyAccBNmAO-ADaAJ6AJ2AJUAJ2AFYAOsAIiBI8AO-AEUAMkA","0-2":"GKACKAAWAAIACGAEKAEGAEGAAIACWAAGAAOAAIAAOAEGACMAIOAIOAIKAAQAGKACGACIAGSAAOAESAIIAEQAEKAAKAAKAGWAAGACMACKAEOACGACKAEOAAIAAKACUAAIAEKAEKAAGAAKAIMAAGAAKACMAAIACIACOAEOACIAEKACKAAGAGKAIKAAGAEOAKKAEKACKAEKAAGAMQAEKAAOAIOAKKAAKACGAAMAQIAAKACKAGKAAGAEGAGIASSAGKACKACMAGIAAWAAIAAGAKOAOOACSAAGACIACKAKGACSAGIAEKAAIAAGACGAIUAAGAEOACKAIKAEeACGACIAIKAEQAGQAAMAEKAAaAAQAAIACGAMSAAOAEaAGKACUAGOAIKAAOACOAAOAGKACIAGSAEgACKAEMAGKACQAGGACMAAGAIMAEOACMAIGAOUAAGACKAGKAEMACKACKAGOAAIACMACMAAGACKACKACGAEIAAKAGKACKAAKACKACGAGKAAKAAKACKAAKAAQAAMAAMACKAAKAGOAAOACKAAOAEKACGAAIAEYAKOAAIAAIAAGACKACGAEOACGAUSAAKACIAAGACKAEMAAKACMAEOAEKACSAIKAEIAEKAIKAOSAIKAGKAGGACWAEKAAIAGKAAKAGIACKACQACKAEIAAOAKMAGIACMACGAEMAAKAEKAEKACKAIOAGOACQAKMACKACSAAKAQSACKAGGASOAAKACGACGAEWAAMACOACIAGSACIAAKAIOACGACGACSACIAAGACKACIAAOAAQAESAEKAAGAEMAAMAGIACEAGKAIKACSAOKACOAEGAAKACKAGGACIACIAAGAASAGOAAIAAMACQACKAAGAIKAGOAGKACKACKAGIAGKAEIAAGAKOAEMAGUACeAEIACKAAKAAGAAKACOAGSAGKAEQACIAEKACMAAMACMAGMAAGAISAAUAAOACKAAKACOACGAEOAAMACIAGKAAKAEKAGIAKOACKACKAEKAEKAGKAGGAEOACIACKAAOAIKAGKAEOAAOAEKAAIACIAAGAOKAIOACKAAGAEKAEUAEIAGQACIAAMACIAAGACKACKAAGAAGAAMACOAQOAAKAEIAGOAEIACGAAIAGGAAIAGGAEOAAKAGKAAGACGACOAIIACOAGKAESACGAEKACIAEIACKAAMACKAEKAAOACKACKAGOACGAKKACKAGSAAOAGQAAMAAGACGAGKACKACQAAKAEIAAGAAGAAKAIOAQKAAKAAOAEGAGKAAGAAKACKAEIAAKACOAAKAGOAIOACMAAGAGKACKAQIAEKAAKAGOAEGAEGAEOAQKAEOAAGAGOACMAAOAAKACMAEKAAGAEKAEGACIAAKAEKAEGAKIAMMACOAAOAAKAAGAAGAAGAAGAAOAIOAEIAQWACKACKAIKAESAAKACKAEOAAKACOAAGAPMAEOAGKAGQAAOAEOACMAGSAIOAEKACKAMcAKKAAGAOOACQAIIAAIAEIAAGAEKAQMAGKACKAGKAAOACKACMAAKAEGAAGAAGAEKAGOAOKAAKAKOACGAAKAEKACGACGACKAAMAAOAIKAEOAAGACOACOACKAEKAAWAEKAEMAAIAIOAEKAIKAGMAAKAIKAAGAAGAEGAEUACKACKAAOAAIACMACQAAGAAIAIOACGAAKACQAAGAAKACMACKACKAKaAEKAEKACKACKACMAAKACKAOWAAGAEKAKKAEKAGKACOAAKACIAAGAIOAEKAAKAIKAEMACKACIACSAAGAEKAAIAEUAOMACKAEOAGKACKAEUAEKAAOAAMAAGAAQAEKAEKACOACKAAKAAKACKAEKACQAAKAGWACSAGOAEGACKAEIAEIACGAEGACIACOAEUAMIAAOACGACGACIAAGAAMAAGACKACGAAGACKAAKACGACGAAIAAEAEGAEKAGGACGAAIAAKACOAMKAEMAGMACIAEKACKAEKAAYAKOAAOAEOAEIAAGAEIACOACKAEGAGOACMAAKAAGACGAGIAGKAAKACKAGGACOAEOAAKACOACSACKAAOAIOACKAIKAAKAEWAAGACQACGAEKACKACGACKAGKAAKAEGAAMACGACMAEOACIAEMAGSAQSAEUAEGAKOAMMAAKAEMACMACIAAIAGKAWMAMKACKAEIAAKAIOAAMAGMACOACGAIMACKAKMAISAGIACIACIAAGACOAEMACWAAKAEUAEGAEKACMAEKAEKAAKAAMACMAAOAAKAKOAAGACKAIIAEMACKAEaAKIAAKAAOAMcAEGAEIAAIAAGACOAGKAGKAEKAAIAGKACKAMMAAGAAGAAGAMOAAKAAKACKAGSAAIAGUACOAAKACOACMACGAGWAEKAOSAGOACIAGUACOACIAAGAGKAAKACKAIMAAKAAMAIKAGMACGAKSAAGAIKAAIAIKAEKAAKACMAEQAAGAEIAAGAGOAEIAEQAEKAAOAEIAMMAAKACIAAKACOAKKAIKAAKAAGAAIAIOAAGAAKAGSAMQAEKAAGAKWACKAGIACGAAKAGKACIAAGAEKACGACKAGQAEKACMAGKACOACOAAGAAIACOAAGACMACKAOQACKAKKACOAEGAGOACKAAGACGAAKAAIAEKACKACQAKKAAOACIAMWAEKACKAAKAAKAAGAAGAAIAEOAEGAEGACIAASAEMAGSAGMAEKACSAIOAGOACGAGOAEQAAGASYAAKAAOACIACKAEKACgACKAMKAAKAIWAGIACKAGKAAGACIAGKAEGAKSACOAKKACKACGAEGAEOAGGAAMAEKAAKACIAAGAEMAKKACGAEMAAGAEKACIAAWACGASOACKAGKACKAAGACKAAGAAGACGACGAAGAGIAAGAEIAKKAEGAMaACKAIKAGOAAOAEMAAKAEWAAGAAIACIAIOAAKAISAEOACIACIAIMACKAAOAAKAIIACOAAOACGACOAAKAEKAIKAAOAEYAAKAIOACSAAGACKAEKAGIAAMAAGACKAAIAEKACOAGOAWYAAIACGACKAAIAASACGAGKAAKAEOACKAGGAEKAAMAKMAEIAAGACKACYACGAEKAAKAAOAAKAEKACGAAKAAKAAKAAKAEYACIAEMACKAAGAGKACKAEKAIIAGOAAQAEKACIAAIAGSAAGAEGACKAAKACWAGOAAKAEKACKAAGAEIAEQAEKACGAGSAGGAIKACKAKKAGKAGGACMAEGAIKAEKACOAEOAGGACKAEKAAKAAGAAMAAGAIOAEMAAGAEIAGIAEKACGAEKAAGAEMAIIAAKACQAOIACKAAIAAOAEKAAIAAGAGKAEKAIKAIKAAQAGIACKAGOACOAEMAAIACKAAGACKACGACGAAKAAKACIAAGAEIAAIAEKAEOAAGAEGAAKACSAAKAAIAAOAKOAEYATQACOAAKAAOACQAAMAIKACIACMACGAKOAAGACMAAGAGKAKMAIGACMAIMAEKACIAEKACGAAGAAKAAOAOQAEOAEOAEIAESAAGAGIAOOAGKACKAESAGGACOACOAAGACIACKACKAGSAIOAAGAAKAGOAEKAAGACGAEGAIKACSAEIAAKAAGAAGAAKAESACIAAKAEIAAKAEKAKOAAWAKIAGQACGAEOAGOAGKACKAAIACGAGOAOIAAOAEIAAWAKOACSAIMAASAEKAAQAEIAAGAGKAEIACKACGAEOAASAEMAAKAAGAGMAAKACOACGAAGAAKAAIAAGAAKAEMAGKAEIACKAAKAOMAEIAEMACKACKAEQAAKAAGACGAAOACKAAKACIAMOACGAEKAAIACKACKAGSACIAEKACGACSACQACKAGOAAGAAKAAIAAKACGAAYAAIACKACIAEMAEKAIKACKACOAAGAMOACGAEGAAGAEIAEOAAKAAMAAIAEOAAKAEGAAOAAIAAIAKOAKGAAKAAIACIAAGAKOAGIACKAAKAAKAEcAKOACMAEKAAKAEOACeAMQAAWAEMACSACGAAGACKAAOACOAAGAIOAAKACIAISACGACKACKAAGACIACKAAKAEKACQAAIACGAEKACMAKMAEIAEKACKAGOAEKAAKACIACKAMKAIKACGAEKAEKACGAMQAEOAAGAEMAEKACIAAKACKAMKAAIAGOAGaACKACOACMAGSAAMAAaAMOAKKAGMACMAAKAAEAAKAEOACOAAGACSAGMACIACIAAKAAIAIKACIAMKACKAAUACKAAGAEOAEMAEOAAGAEGACGACKAQMAAKAGGAKKACGAAKAEKAEKAAMAASAKSAAOAAUAAGAEIACMAAKACUAAMACKAIKAGOACKACOAAIAAKAEKAEKAGIAKKACGAKMAAKAAIACOAAOACKAGKAAMAKOAGKAEMAGMAAGACGAGKACMACKAKMAIKACKACOACMACKACKAMSACGAAOACQAGSAAKAAKACIACMAAOAGKACOAIKAGKACGAEKACIACIAEKACKAEKACIACGAAKAEOAAKAGWAAKAEOAAIAGKAAKAGKAMOACKAEOACKAAGACGAEKAEKACGAAIAIOAAIAOGACKAIGAGIAAQAIGAEKACKAEGAAIAAKACKAAOAEKAAIAGKAAGAAIAAGAAKACMAAKAAKAASAAMAAKAESAAIACKACSAOKAEKAAGAAOAEKACGAAKAGOAAKAAGAEGAIIAEGAGKACKACMAIKAEIAEIACKAAOAAGAAKAEWACIAEIAAKAAIAAGAEIAEMAMSACKAAKAEWAEKAAGACGAAGAEKAAOAGOAAIACIAEIAEOAEIAGGACKACIAEOAAIAAIACKAGQACIACMAYWAEGAEIACOAAIACQAKWAEMACKAGKAGGAOWAEGAAGAKOAGKAGOAIIAESAAIACIAOKAGQACKAAKACKAEGACOACKAAGAUOACIAKKAMOAGOACKAGQAAGACKAEGAGGAAWAEIACMAEGAMMACKAAOAESACKAIIAAMACGACKAGKACKAAGAEKAAIAKSACIAAIACKACGACKACKACKAMWAKSACOAEIACGAAIAAKAIYAEMAEKAAQACQAEKAAIAGKACOAAKAAGAAGAEKACKAEOAEKAAKAEKAGMACGAAKAAKAGGACMACIAGQAGKACKAEOACIAESACGAAGAEKAGMAIKACGAAWACMACGAAIACKAEOACOAAaAAKAMOACQACIAEMAAKAAQAASACKAIKAGWACKAAGAEKACKAGKACOAGSAAIAGIAAOAEIAOKACKAAKAAKAEKAMKAAGAEIAGOAAGACMACKAEGAGGAEOAESAAGAEKACGAIOANMAEGAAOAKSAGKACIAIGAAIACKACKAIGACGAAKAAOAGOAEOAAGAEKAAGAAKAEcAIMACOAEOAAKAAGAGGACMAGKACGACIAEGACGAGIAAIAMKACOAEQAEMACKAGKAEIAAGAKSAGMAAMAAQAEGAAKAGGACKAAKAOQACKAAIACKAKKACOAAGAEOAEKACOAAIAEOACGACMAEKAAKAEKAGMAAGAAGACKAGKAAIACKAAGAAOAASAAIAGOAAKAEKAAQACIAAMAEMAGWACKACGAEKAEKAAGAAGACgACGAEKACMAAIAKSAEIACQAEUAEIAAKAAKAEOAEOAGKAAGAAIACKAGKAIKAAKAEIACGAESACKACKACIAAKACKAAKAEGACSACOAPOACGACKAAIACGAASAGGAAIAGKAAKAEKACGAAQAEOACGAAGAAGAIOACGAEKACSAAKAAaACSAAGAAIACGAEKAAKAEKAKKAEMAAOAAIAEGAAKAKKACKACGACGAEKAEGACIAAIACYAISAAGAEKAGMAIMAAOAAIAAGAIOAEKAAGAMQAGOAIOAAMAAKAAOACKAGIACMAGGACQAGKAGKACGAAMAIOADSAAKAGOAEMAEKAGKASSACIAEKAAKAAOAAOAAOAAKACGACGAAGACKAAGAGQAAKACGAAOACKAAGAAGAAGAAMACKAEIACKACKACGACOAAGAAOACKAEGAAKAEKAAKAGSAGKAEMAEKAEKAKOAEKAEWAISAGSAAGAAKAGKACGAGOACGACKACIAEIACIAIMAGIAEIACGAAKAAMAAKAAGAEMAGKAAKACIAIQAEOACKACMAAGAESAAKAEKAKMAGKAIOAEMAEIAIUACOAEKAAMAAIAEGACMAEKAIUAEMAAMAAMAEIAAMACKACIAAKACKAKIAISAMMAGKAEKACGACIAAOAEKAAMAGIAGKAKKAMKACKAKKAIIAEOACMAAGAGOAIOAAKACQAGMAGOAEKAGKACGAEOAMOACKAAKACGACOAEIAAKACIAMMAAGACKAAGAESAEMAIQAAGACGACKACOAAKAKMAGIAEKAQOAGKACKAIKAEKAEOAAOACMAMOACIAIQAAKACGAEMAASAGMAAKAAGACIAAGACIAIQAAGAGSAEGAKOAAGACMAGKAEKACGACIAAIACGACIAAGACGACOACKACGACKACKAIOACKAAMAEKAEIAAOAGOAAGAEQACOAEQAEKAASAEKAEKACOACOAEGATKAEOAIKACIAUQAEUAAKAQIAAKAAKAIMAEOAAKAGKAKOAAMAAIAAKAAKAEKAGKAAGAAGAKKAEOACIAIQAAKACIAGKACGAAGAEKAEIAAOAGKACIACKACQAAGACMAIKACIAEIAEGACOAAGAaOAAQAGGAGOAGGAAOAMGAMKAIKAGUAAGACGAEOAGKACKACKACKACGAIKACKACKAAMAQOACKAMOACOAIKACMAAMACKAAOACOAAIACKAEGAASAAMACKAAIACQACKAEKACGAGQAIIACKAAKAIQAGKAAIAEQAKGAASACQACGACSACMACIAAOAEIACIAIMACKAAGAAGAAWAEMACOAKOAMGAEIAEOAAKACMAAIACGAAGAAGAESAEKAAKACOAKOAEMAEOAAIAGSACMAOSACIAEIACIAAGACKAAYAEKAEKAAKAAGACKAGKACKACKAGKAEMAEKAGQAEKAMMACKAGKACIAUKAEIAAKAAUACOAIKACOAGSAAKAASACIACIAIIACOAIOACIACKAGGACGACKAGQACOACKAMIAGKAGIAAGACOAMOAEKAAKAAKAEOACKACKAAKAIKAEKACKACIAAIACOAEOACKAAKAIQAAGAAKACIAEKAGIAIUAEOAAKAGKACGAAGACKAAKAMIAAIAEKACKAGOAEOACKACIAEKACGACIAEKACGAEKAIMAAKAGKAEOAAMAEGAIOAGUAIIAGKAEIACIACGAEQAIOAGOAGGAEMAAGAGKAAIACKACGAGQAEKAMOAAMAGMACIAAKAAKALWAKKACGAAKACIAGKAGEAAMAEKACKAEKAEGAAKACKAIKAKMAAIAKOAEGAOmAEIAAKAAKAEWAEGAGKAAOAAMAAKAIMAEIACGACKACOACKACKAAOAEKAAMAIKAESACGAGKAGKAAKAAKACGAAGAAIAMSAEKAQOAIKAAKAAKACGACGAAGAGWAAGAAGAAIACKAAMAGMAAOACOAAGAESAEKAGKAAOAASAGGACKACKAEKAEKACIACGACOAAKAGGAAKACKAAKAIKAEGACKAEKAEKACIAAGAAIAAOAAIAAGAEKACIACGACIANkACKACSAEKACIAEIAAKAEGACKACOAAIACQAEGACGACQAEMAEMAAIAKKAMOAAGAAMAEOACKAEIAAGACOACOACOAEKAAKACSACIAEGAIMACOACSAAQAAGAAIAAGAEOAAKAAKAAGAEKAEQAEMAGMAEWACGAGGAGOAGGAAGAGGAGKAAIACKAGSACKACKAMKAAGAEKAEOAAKACGAAQAGGAGKAAKACKAIOAAGACKAEGAEKAEOACMACKAMKAIMAAMAEGAEOAGOAIOAGGAIOACKAAGACGACOAKOACKAOOAOQAIIAAKAEOAEKAISAAIAAOAEIAASAAKAAGAAGACKAAKACGAEKACKACKACKAAGAEIAISACIAEKAIOAAKAGOAAKACMAAIAESACOAEKACIACIAAKAAIACKAAMAAKAGWAEKAAGAEIAIOACGAAKAKOAEGAEGAGKAEMAAKACSAAKACGAGSAIOAGKAAGAOOAAKAGMAESACKAAKACGACKACIAEKAEMAIIACIACOAMKAAKACGAKKACGAGKACIAEGAGOACIACKAAMACQAEGAEOAAGAAIAEKAAMAAKAMKACMAAGAAIAAKAEKAAMACMACGAGWAIKAAGAGIAISAKOAAIAAIAIKAAIAEIAGGAAKAEKAAIACGAAGAAOAGWAAOAEKAAMACKACOACOAEKAIKACGACKAGIAAKAASAWKAAGAIMACOAAGAOcACGAASAGOAAOAEYAISAGMAEKAIGAAKAGGAIIACGACIAGOAEIAIKAAGACeAAKACGACKAAIAGKACMAAMAAGAAWAEKACOAAGACIAAMACKAKOACSAGKAAKACGACKACIAGKAEMAEKACKAAOAESAAMAGKAGQAAQAEKAAIAEKACMAGgAGMACGAAKAEIACKACKAAGAKIAEGAEGAEGAEMACQAAOAAQAAIAAOACKACGAIOACQAEQAEIAGMACGAGIAAKAKKACKAEKACOAAMAEKAAKAGMAAKAAKAAKAEKAAKAAKAEKAOSAOMAEIAKOAEKACKACGAAKAAKAEKAAOAEWAAKACIAEKAKSACSAEGAAKAAIACKAAOAKSACGAAQAEKACSAEKACQAAGAAKAEKAGKAEKACKAEIAEGAAOAEKACOAAIAAGACOAEMAAIACSAAKACIAEOAEIAGKACKACIAAGAAKAAKAAKAAQAAKAGKACKACGAEKAAIACOACOACIACOAAKAEOACKAIGAAKACOAEOACGAGIAIQAIKACKAAGACGACIAGKAEIAOKAEIAMSAGGACeACGAKQAEKAAIACGAAOACKAAKACOAEIACGAGIAAKAMKAIOAGKAAMALWACKAAGAGKAEOACGAGSAAGA","1-1":"IoBFMCR4CBmBG6ANaBPOBMyAS6AIKBBEBMACMiBGGCIABNKBF6CISBT0BNwAQWBI4ALmBE2CRCBaKBEWDHKBCwBKGBSyBM4BMWBR-AT0AQOBNEBJaBGABRGBQCBLyAIGBQSCK4AVmBL6AKaBHiASoDDMBNyANGCAQBGKBVUDGQBFqBGcBZ-BHKBKYBH4BOoCSeBQOCI-AFeBGwAQcBRKBOCDJyAIABL8ACsAMgBQSBOKBEoBRABGuCIsASYBLuACOCLSBC4BKoARmCOoBToAL2CS8AI0ADWBQKBEwAKuBQqCZgBOgBCkABoDQ6AO2AMyAPkBECBEiBMGBKACDaBJODEQBEmBNKCQCBNQBQ6BYwBPUETICMEBGiCN4AOuBPkBCCBNcBOSBPcBRMDUCBXACU6BGWCMMBIEBL4CMSBGiBKGCK8ASSCGgANCBNkBRuCK8DJ6ANMCGkBPQBE8BFSCcqCO2ACaBGaBUgAPkCR0BIgBSUBC4AGWBK8AIACOIBE2BLMCLuARqCR-BJ0AUEBTKCM0BCSBQ2ASuADgBLeBSQBHKBNyBHyBAsCOaCMaCMaBGUCEIBKCBC8ALuAVgBIYBKYCGwAQoBJ4ALGBECBOsAQqAG6AO0AS2AHCBHeBRaDPwAPOCQIBJeAScBSIBJOBRwCXOBI6AFoAGKBVKBQIBGYCF6ATWCWcBJWBS4AMiACCBQWBQABSwAA4BNCBPmCFSBHwBDoBG4ALCBFyBK2BLcEMWBCUBVuBNQBOWBPSBI4AOqBJwBUaBJICVwBU2APkBL0BEaAIoBS4ANeBHEBT6AQGCEmCQOBGyAN-AKsBVeBGuBP2DIwAK4BFkAJIBSkBH-BNqAI8BTCBIEBTQCJ4ANoBHaBOCBCsANQBFOBQIBJkBPUBEABOwALgBWqBQOCNyBD-ALoAG8AOCBS8APaCKUBKGBDSBTMBLcBEGBOsAIGBKGBAyBSUBTeCRKBRYBL-APcBLqALcBPgBHSBQoBTgDSQBP6CO2BdKCLqBQGBL2ANuAJ2BI4BRsBV-BPIBLCBEYBDiBFEBRADRwAHkBMEBDEBNMBS0BOYBL2AFcBSICOgBFsAFYBLuCGIBTEBTyBH-AKIBHwBMCBKICSYCQaBN8AKOBQKDVsBQ8AFOBPkBXOBRyBNqBPEDN8CFsBPMBH0AQIBW-AFIBG2ACwAQwBGSBLWBKiBXqBHSBNyCHeBPeCDuAHCBFUBHGBLkAB8AI2AbOBGSBIuBGKBJ6BIUBE4AECBJyBNaBPuBDyAJyBEsASKDRgBPUBOSBE6AOUBP0AR0BMwBSSBKABEeBOeCHKCH0AJ4ALCCJYBOABVUCLaBSWBTwBRECJEBQuCXKCTCCMKBPWCH-AQSBP-AT2AT2AK6AHEDNOBM4ATOBJEBMaBS4BJwBH-ASQBRgBQoBHuBOWCS6AOmBFUBIeBHWBFIBEABLMCGeCJCBIWBPIBGwBTIBNEDDSCMWBJoBI8CTUCXWBO6APsBLuBVyBPuEG8ATKBUcBOiBKaBMUCOABGgCNYBM8ACOBQKBOeBK4AU0BKEBKyASoBAsANMCGABJcBLSBHMBCuBH2AAmBKABKACEqANQBGeANUBGsAG-BOqBMsAI6ANgEGABScBGCCJuALGBKeBBEBIiBU6BSqBTiBL8ARSBCQBMMBN0BLKBE2AVqCHACNcBKUCRwBKgBXmBQkBIABX0BHKBAmAKGBNmBQkBI-AIOBAyBHeBFUBE-ANQBGeBMKBE-BJEBTOBNMCI4BLmCPeCNkBS8ARiCR4BAcAN2AJGBFCBIsAK8AH6ASMBQQBSGBMICT0CJEBAGBJyCSABKoBFwAC4AIOBMuDL6ASyBNwAJSBKMBCgBMCBCyAHiBNeCIYBIeBJiBJSBMqAJ2BCCBIQBJ2AReCTsBBEBQsBKKBKECQwALOCK4AHIBEWBGmBRUBN4APYBPcBNACP0BFqAGWBFKBTwBPMBPQBKoBGYBQSCR6BNIBFsBG4AR-ASuBUKCHgBTsBPICLIBDIBGmAPaBP0ATiBEABR0AJABO-BHCBEgBJOCK2ADwAJ8AIEDMsBMyAKqAIKBKOBG6AC4BPoAJeBHyANoBF6AUwBFGCHeBKeBHoASQBB0ANwCBsAIMBG8AP4AMOCKcBPCBSiACeBGyBLyBUeBTyBRQBEgAQYBS0BLCBNKBHuAVkBGGBIQBMcBFQBScCRWCH6AKgBNkBMqCUuBRuAJkBOMBU2BMICKmBP4BMUBFYBM4CQwBGuBLiBLYBOKCTUBIqBO-ARwBEwBRsBK-BAwBP0BW8BMCBRABIQBOQCRoBNoBESBTuBD0AQQBK-BTyBQYBDuBQYCTYCUSBTQBF2CL6AAqAQsBN2BIqBFyAUeBE-AIOBM8APKBRiASsBL4CKOBXSCREBKoBGKBF2AHmBEmBLaBLiEUiBIqBLOCQMBMyBIECKECOUBNcBG-BO2BSyBI2CPwBGcBGGBOSCSUBJiBWOCNmEJSCAgBBEBQYBL2APeBHOBUaDYGBUMCKMBRMBFeBIaBO2AKyAL-AE0AGcBOUBG8AOADX-FMwAI-Ab4BFcBL6AOEBT8CG8AbeBI2BKECLaBPuCIEDKiCLQBNYBXACFaBRKCDwAPuBOICOEBR-ALQBPCCOICGEBOYCPGBTqBTqCG4AEkBS0AHkAMaBD0AJcBSyAI2CIyAXcDImBCiCKkBIWBN4BU0BRMBJ0BNSBGqATQBPIBE2AP0BI4AVEBBGBF8BTuBRgBKsBTeAKqANSBE8AUUBEiBDgBI4AQEBOEBB8AHCBHcCNECYSBQACEgAAUBHEBKUBPiCU4BTQDNoBJoBDuAFMBLGBSiBRMBPeBRGCcoDKEBSqBQSEOqAF6AHmBSSBM0BSUBEiBMUCNoBM-BRKBHSBMUBGiBMeCTKBGGBGUAD0ALYBKgAQ2BIoBNuBNOCKuBE2AF-AMoBLcBOGBE8AI4BKECPSBPyBAEBMaBTEBPcBQEBRwCE0AN-BUwBLGCGQBU-BKGBNWBGEBHiBH-AIkBUeBTgBG0AKeBDABMkBF4AKcBQUCIkBYqBVCCWSBEUCLIBI-AFOBHCCG0CIOBFgAOcBGMBIeBIEBJ-AX6BROBG6BOgBIuAScBOGBK-APOBO-APWBTmCGYDKEBSwBOqBNuBK-BGCCDsBJ4BHWBOGCKoBHYBNuCKQBSmCDKBKqBTqBHSBL2AMeBReBEWBGQCDkASiBIQBCeBMYBJiBSqBU-AXIBL6ACCBGcBQEBL2AVCCTiBVYCBEBZuBHUBVGBG-AHaBTGBUQBDkBP-BMIBJaBFOBJuBQECR2AMoBC-AEICJsAKmBJuASsBTsBR4AJCBRaBJ2AHuAGgBIABPWBR6BPKDPQBFwBGGBLcBUkBMCBVGDKQBSyCKuBJ4AHyBHIBLuAVwBV0BQMCM0AQoBTWBA0ANYBMkBMuAFUBG-ATkBWSCKmBLGBSGCOOBOkDSOBNmBFUBL0BQYBK8AFyAX-AWaBR0BPcAKWBHOBSGBTCBHkCQCCJuBKYBVCDLWCKWBNkBL0BPMBUGCSeCOyBLkBL-ASgCYACGmCX4BOIBIWCRoBAABUYBR6BMCBCCBOgALeBRgBLGBGEBEgBGGBPACTABC2AdOBEwAUyFTSBCMBRiBYMBMyAFeBQqBMYCTUBSoBPOBNcDQoATCCOyAO4BPeBH-AMOBPWBGKBTYBLsATMBPSBRICKoBD2CS8BT8BCABM8AEMCTSDH6BD-AG0ATYCKsBOSBHCBWcCV6AGWBDKBTYBRKCFmAOUBQ-AP8ALwBE4AUcCNmBF2AGEBCqCIwAI6ACiBMsCL8BMUBMoBJwCTIBPuASICJ0BP8AO4BJWBRABGeCGECEwAQ-BLmBJwAOMBHcCNABHoAIECVCCE0AS6BE8AUIBH6AMyAOqBN4BJYBBmBJuAMuBPEBM2BTQDRSBKcBIQBTACMOBO8AZqAJKBGoAUEDQABGIBEGBIaBOkAK-APaBTOCM-AMUBL0AIiBOSBRUBE0ACMBDiBNCBDMBI0AJsAPoBVoEU6BKEBVACKWBTgCKGBYgBRwCPoCJ8AF0AN0AUIBNQCIqDSIBIYBSeCByASIBMuBSeHCYBIiBK-BYyAO8BCaANOBAABBIBOOBRkBV4CE2AXGBOyBV-BL6AIwBCABTQCAMFPyBIsATQBLKBTADTqBMuBXKBAaBRICFUBOQCOGBTUBSUBJeBDqAV-ARUBSqBGWASiBNwAR8AMABLUBPSCLqBKmBLGBG8AFUBFkBRcBEYCSMCQMBKoARYBHUBBoARYCOWBKCBEkBZSBOGBGwAGWBAWANaBTwBE6ALcBM8BS6BQ4CMSBNcBNuANoBReAVCCEwAKcBPEBI-BIMBPqBOQDRWBL6AASBGWBCkBFKBIsANQCO6BS2BEaBOuBW4BDGBF0AQeBTgCL4AUOBZsBT-BOWBHWBO6BLuBL0BOEBI6AQaBSSCSKBK4CKaBSmBPYBEcBT6AHaBKaBOSBWYDN0BPGCHeBMABOgBT0BOcBHYBFOCNeDQ0AMmBDKBLyBEeCIOEIkBRWCYUBJ8BLgAF2BS4BJ4AIeBUIBMyBMmAIoBTYBNUBTWCFkBQQBIKCJiBRECNmFQgBQmBQaCICDG2AD6AAUCJICEYBP0BTqAJ2ANuBMUCIABPcBLABN-AP0BWMBVuCLwAJyAVKBLeBLoBE6AO2APsAPCCEYBSQBAaDRMDFkBOOBEABMIBO4BEoADIBM6EKgBJ6AOgAJuAOSBVCBGcAMQBO8BQwBPeBT2AOSBKaBM4AKeCL8AR6ADECM4ASGDJ-BWyFHSCNIBLwCFiBTWCVYCEkADmAImATSBFMBQWBBCBPuBRSBC-AKCCOaBHkAF6AHCBLCCUqBTeBQABIqCMoASABQEBPwBBCBOqBQGBJ4BG4BG8AdcBKSCLmBM6BL-AQwATsBT2AP8AHsBPqBOsAIUBKGBScBKaBSEBJUBPMBRkBQKCLACE4BLgBSaBLMBT8BUKBJkBWABRiCGgBLcCTQBH2AFCCPgDQ6BOcBSWBJ2BKICTYBIOBHGBI4BRYBQsBLwBKYDU-AKUEMaCE4AEQBRuBPGCPMCMmBPOBO8BRUCI6AQcBP6AJABIcCQWBNGBMsBUGCDoAJaBMMBKmBMUBDwAJaCIUBT2BImCV8CJABROBQqCRmBKSBH8APgBNoAK-AE8AQIBDkBHMCIYBFkARQBCGBDwBHQBIqCUwCLwAMSBWIBUmBN2CXQBO4AJACSGCG-AU2AT-BOwBSOCEwAD4BHQBEGBQiBKUBIKBF-AD8BKCCT6BKMBGwAM0AU6AHIBSWCR4CEGBOgBP2BQ0AEmBNCBPaBGMBM8ATCBHcBMmBQ6AI2BSuBAGBX6BTQBH0AOOBJUBD4AUIEOIBN-ABCBWwCO-APIEVoBTaBE2AF-DLUBS2BOUBKOCUIBVGBLMBKqCEIBMGBSUCMMBJwATuAGsAT4AIYBNYBBMBVqAPSBMABU0BRABE6AY2BOEBIABYgBK4AJGBFkCOQBQ-ACyBDcBTCCT8BJUBK4ASMCGGBVIBHoAUqCRuAJ8AN4AGkBU2BSGBLyAGKBSEBKIDGcBHeBR4AGOBFoBBWBPiDKOCJABKwBFgCKYBMCCIiCOCDOIDIMBPkBSuAD0AVGBLiBEOCPsBIWCTsAZ4BNmBAMBGCBHABRWCHgBIUBY6AKMBL2BLWBCOCRUBJ0AOgBLeBQsDLuALiBLyBMUBHcBJiBV4BKEDPKBKODKSCWYCMACO-BKSBKUBHcBVGCKEBKWBESBICCG-AEKBS4CFEBMwAQmCGmBFwBC-BQABVSBIyBNICSiBOaCJUBSWBRgBUSCKOBM6DHSBHECLWBOeBHoBGSCNOCSWCK0AMWBPCBNYFUoBGyARIDO2BHgAKqCQWBF4AB4AD2ATICJkBMaCMICUgBVCBSMBM2CKQBS-AAIBQ-AGABEWDVEBH8BQyBMuBC4AaaBNSBTsDLABLuBRWBPWCGABTMBN0BGCBFIBPkB","0-1":"GSAACBE4BCyAGSAGiAEUBGwALUAMgAEGBGuACqAE6AEEBKqACaAG4AE4AEkAI8AAYAEkACSACiAAYACgAGiAKeACoBI0AK2AGUAASAGcAEiACeAIkAGEBCsAQeACmAUGBCyAE2AGQAAaAAeAAqAIsAEWACqAC8ACkAEcAKcAEmAQaAGIBI8ACsAOABTsAEyAEeAMgAC0AIeACKCCcACWAMsAASAASACaACiAGiAEsAC2ACWAS8AE2AK2AAWAGaAKABIiAPuAAcACqAC6AW2AKcAIoACQAIMAAuAECBGaAMUAAeAGWACOBE2AIoACYAAcACgACeAAaAEaAEeAAaAIOAEsASuAIcAIeAIkAAOAP2AEoASSAMqAMuACgACqACYAAuACOAAgAAcATqAGeAM2AEmAAkACUAEcAEiAGiBAWAAABIqAESAAgAGkAGUAIcACaAKiAEyAE0AEWAEsASEBEkAAOAEUBEeAKCBAWAGuACUACuAESAC4AMsACIAIkAEaACqAAiAEkAKeBEeACaAAUACeAAQAGWAIYAS0AEeAAeAEaAAYAIkACYACgACOAGGBEcAEWAE4AAkACaAGyAG0AEoAGiACWAKmAG4ACYAG2ACsACaAKiAASAEsACmAEuAAyAAYBAiACkAEUAGuAEYAOkAIiAEgAKABU4AE-ACaAQoAGqACMBAqAEeAEiAEYASQBSIBG6AAoAAUAIUAIYAK2AAeAEeBOCBEiAHkAK-AQcAAQAMcBIIBCqAS6ACiAESAACBAyAC4AI-AEsAAuAAWAGwAAeAACBKmAC4AKgAAYAGuAMGBSgACcAGYAIaACmAGWAEQAK4AAcALWAGaAKoAEYAIeAAaACwAIuAE0AAyAOcAIUAIIBASAGOBCaAEcAKsACWACkAIoAKyACuAS8AGmAGwAGmAAiASqAMkAMkACWACsAOcAASACEBKEBCuAE4AGUAE4ACCBASACgACwAI2AGaBEiAG4AIuAEwACQAKSAAkAC2AE2AKcAEaAAQAAQAGSACKAMqACyACuBGsAGgACcAEgACoAOABAmAGeACyAGaACmAQYBA8AAwAAmACmAAgACgBIaAAOAAmAEGCCeAIgAGSAEoAEkAGEBKgAAiACOAEsAC0AIcAEmAG4AEQAESAASAIUAGeAGWAIqAGoACuAGkAOiAEiAMmCKmAIiACgAE6AIaAM4AAmAEcACkACcACeAGoACoACYAEwAGIBIuAAgACiAGkACoAS6AAMAAaACoACUACeACWAEeAIWAI0AMSBQqAEgAAQASqAAKAGYAEmAGkAC-AKUBGqACaAGkAS0BE0AKWAEiAAMBEiACWAEWACqAAoAGgAC6AC0AIEBAIAEeACWAAkAKkAAUACaAESAOqAEgAAUAGiAC2ACeAC4AAoAGYACmAEkAEmAEuAAkAAqACABEkAC2ACGBGeAAOACQAEeAQGBICBGUAIKBCmAEcACWAKYBG6AIkAG6AEYAASAAWACQAEUAEoAESAGiAIeAEwAAiAKaAGgAEaAAgAIuAEiAGaASkAC4ACsAIiACWAOaAG6ASiAKeAA8AESAAaACoAEyBCqACYACQACoACUASuAGoAEGBAaAASAIkAAUAAkACWAGgAG8ACYAC4AIeACMAIwAC4AKOBQcAIwAAsACkAGaAAaAAqAAYACqAC0AJ2AAEBIiAM8AGsACiAAOBCeAEWAGMBGqAEeAC0ACyAMKBOwAIeAIwAEoACWAAUAGoAEkACsAAYAGsAIMBCaAHECY4AEoACqACSACKACOBEYAEcAIcATgAG0AGmACkAGmAKcACeAIgAAgACuAKIBSuAEoAGkAMsAAiAAeAO4AEQACiAEwAEyAIiAC2AKiAKGBGYAGaAIYAIkAEuAAcAIiACiAM-AG8AAkAAgACEBEEBA6AIIBIUBC-AKyAGgAIcAGcACGBAqAGABCkAI6AEWAC0AGiAEqAEoAOiACgAE4ACaAEoAGWAGWACaAKcAAiAAeAKeAEGBGwAAoACeAGuAGSAAgAAMAIWAEQAQIBAUAAgAOkBCwAAwAEyAAaACcAMaAAeAIkBEqAKcBV8AEuAOmAMyAGoAAwACkACgAEYAGqACWAAyAGaAAuAEoAK4AAoAGkAKEBEWAAuAECBIeAKsAMeAEiACOAAYAM2ACUAMgAEgAE8AMsAMSBC4AKqACoACOACOBAUAAgAGiAAQACyAAeACUACcAKcAKcAIkAEkAC8AEGBA4AAaAAuAEYACgAEaAEwAEYBMuAAoAGIBEqAGaAGsAEeACqAGoAAoAAYAEsACWAMuACuAAcAAQAGQAIgAMcBCiAOwACsACaAGgAIYACeAASAA6AGmAGSACIBCaAC2ACQAIeAAQAASAEWAEmAEmACsACUAKoAKoACqACIBO4AGiAMwAAgAAcAEABCYAAoAGeAASAGoACgACeAAsAIoAAgAEgAEwAIcAMwAMuAEiAEcAMWACUAEYAA2AGaAG0ACkAOABGcAEiAAeAImAK2AQGBAmAMuACcAAeAEwAA0AEWACUAG8AAkAAgACiACgAKUAEiACeBCUAAYACeAIWACgAEoACOAOeAEmACWAESAAYAAiAAeAEcAAaAIiAAcAIqAEeBIYACcACaAAaACWACiAIABAOAEeAASAM6AAiACcACeAA2AE8AIoAIGBEgACuAAgACeACiAEgAIsAGqAQoAEmAMmAIyAAOAGcAIeACkAGuACmAEQACyAAUAAGBIyAE8AK4ACgAISAIuAUOBAYAAoAAyACkAEmAEGBA2AEYBMwACqAQmAAUAGABGmAEOAMEBGqAEqAAUAAOAOIBGaBAaAAiAEYAGyACgAEYADsAIyAAiAGOBEYAIyACaAAGBEABEkAIyAGwAAiACoAAWAEiACABAQAEwAMqAAkAM2AASAAiACWACMBAWAG6AKABCkACmACOAEcAI-ACaAESACqAI-ACUAEUBEoAEgAEmAGoACiAIqAAcAIaATuAAcACmAEeACqAGcAAsAGYAAUACmACYAEQACoAEwAAWAMCBE4AEeAIuAQqAA6AEiAIcAOaAAsAGwAEqAGWAE-ACWACmAA2AAiAAABAkAAiAAYACwAMeAGyAGiAFmACaAEoACgAEeAIoACuAEmAIkAEeAAWAEuACkACIBAQBACBC8AAoAEaAAMAIgAEQAMkAIaACgACiACsAGgAE8AEmAAQAAcAIUAA6ASmAAYAOqAAgAI0ACWBCSAGaAAGBEUAGqAK0ACeAAwAAqAMeAC0ACOAAiACaACwBI8ACaACgAEkACcAAsAIyBQ0ACeAEwACgAAABCUAK8ACyAYKBESACYAAeAESACWAASAEyAGSAAwAEoAQsAQiAGsAAWAUYBCeAE-AIyACUACgAAiBEYAE4BESAGWBI2AEcAEuAEoAKoARYACaAGoAQYAKUAQgBS0AEcBCgAGiAG-AUeAAWAMuAIOBAUAVIBAWACcAAkAEYAKMAAUACWACcAJcAMoAGOAKmAGSBAaACgAOCBGABCCBAcAAUAI8AS2BAiAGqAEiAOoAIcAACBAoAGoAGCBEcAAeAUOBGYAKiACmAS6AAQAESAIcAAuACSACaAC8AEiACyAQgACSACeAEcAUACMoAIqAEyAAKAEuAIiAEeACqACeAIsAEuAAiAAYAG0ACqAAMAAqACaACyAI4AESACSAEkACaAG6ATyAEsAIkAAeACkAGuAAoAGsACaAEkAKuAG2ACcAEeACaAGaACoAMOBIiAAIBEgAO8AGuAAeAAWAEiAG0BCWACoAU-AAgAIgAEgAE4AEmAAsAMgAI4AIsBCgAQqAMaBEYAEUAEuAESAM8ACkAC2ACKBCUBCgACMACOBEaBGeAIqAAQAGeAESAGYAIqAC2AEkACsAAQAGGBGOBAqAAUACgACoAIgACoAEEBIUACQBEcAAoAEUAI0AEaAEaAGWBCgAG8AMwAEcACoACeAGeAEiAI8AGgAG2AGaAAaAGmAAgAEYAEABAkACeAE6AAkACcAGyAG6AEQAEgAIoBP8ACABEcAEkACeAEkACgAUyAAqAAcAOiAIEBCaAEeAI6AG8ACmAGgACeAAWAK2AIiACcACQACqAASAGSAIgAGcAOwACyAA8AAwACmAGaBAQACWAAWAAaACYAASAEQACgAAYACoAOyACyAKqAEcAEYAA2AE4AAOBCsAAwACwAAOAKqAGOAEkAdcBEEBAUAGwAWCBIqACOAEkAEUBAaAAOAAaAIcAIsAAOAEuACwAEaAK0AAkAAaAKqAK6AIOBKUAAMAIcAGOAGgAGeACMAEeAGaACeAC2AAaAAgAKaAAaAAkAE2ACmACgACeAEsAAeAKOBCSAGcAG2AIaAEkAEMAGoAAUAC0AAmACeAKgAASAEyACkAEYAAoAGeACqACyAQuAI8AEWAM2BCgAKaAAeACkAGiAKQACQACABG4AEgAEQAIwAAkAKkAGcBIuAIuAEgARABIeAC4AEOAAsAIABEeAASAAYAEuAE0AKmAGiAEaACcAG0AEuAA2AAeAEQAEiACABA4AKiAAYAAkAAeAGuAEQAQiAIqACwAGcAMIBOyAAaACqAEUAESAC-AMgAGmAI2AGEBEgACgAAYACcAA8AOYBAWAGUAGeBIwACkAZgAAQAG0AG-AGYACWAEiAAeAECBA2ACgACmACQBCSAAwAGaAKuACUACkACiAEgAAiACmAAOAAOAGsAG-AUgAIeACQAT2AIiAGqACYAGsACyAMcAUuAEQACYAEeAI4AEcAASACKAImAAaACQAAGBAABK8AIYACyACqAECBCaAIOAEWAMkAEkAOaAAUAEeACGBAeAAcAKWAEKBAWAEWAAmAGYAAWACOAGgAAMAAeAGmACqAKWAAYAGSAAqAEkAK8ACeAEqACkACiAbyAA2AAyAKaAIABAYAC2AAaAAaAQIBA4BCUAKwAGwASGBFABMSBAaAAkAC-AEuAIuACcAEsAAUACYAEuACyAEOBAkAGwACuAAWAEWACOAAQACKACCBCqAAMBMmAC2AAgAAOACSAASBAkACYACSAA4AEQAESAN0AGuAIsACkAASACkAGqBMYAGeAMmAAgAK4AOyAIsAAqAEsACiAGWAGSAEoAEkAOsAKaBAaBC6AAaAG4AMmACWAAgACeACqAIeAM0AEEBMuBJ8AEoAEoACwACgAI-AKsACMAAOAGcACUAM2AGyACqAEcAOwAKqAAiAGeAGaACmACuACeACkAEaAAkAQ8AMgAEkAG8AEWAIcAAaACcAGSAOyACYAKmAGaBGiACABAoAEsAAwAA0AI2AAgAMIBCaAI4AAkAC8AEmAAWAEiAEgACSAAmAAWAAWBIYACuAAeAC0ACiAEqACSAEmACcAEYAIOAAQACWACqACYAAkACaAIgAAaASSBC2AG-AKsAEcACkBIYBVyAGeAAYACcAAUAGuAGOAAgAOWCCoAI2ACeACaAS8AKCBAUAG6AAwAN2ACYAM6AEkAAeASgAAOAEWCAQAAUACeAAsAAOAMsAUwAAOACYAOSBAkAB2AAUAAuAAaAKmACgAQ0ACgBIABAeAEoACKAWABEiAOcAEwACUAOgAEOBAoAKaAI8ACkAEiAKaAG6AEABK6AGYAGWAGeAAgAKoACWAEkBCaAGkACMBEQAEiAGcACqAGsAIWACSACsAAOAGoACOACwAGgACwAEqAAuACQAAaACgAEWAA4AASAQYBCkACiAGmAAYAAWAEyAGaAACBIiBCqAAiAEOBCoAESAE-AAkAAYACOACkACYAAgACaAEcAK6AGUAQcAEmAEsAAgACOAAUACgAAQAAqAAQACKAEsAEyAKGBCiACYAQABEiAGiAKWBE2AEeAIGBAUAO4AG0ACgAAQAXgAAeAEoAAcACIBGUACMBIoAKsAIaACSAAWAEoACYAEuAA-ASEBCgAEcACcAEuAEYAEuACkAAwAEqAAoAASAC0AEGBGUAAsAGqAGwAAMAG0ALiACkAAuACiAAcAEcAIaAAqAA4AKsAI-ACmACYAEkAIWACWACaAM6AC-AEkAI6ACEBKSBG0AIqAAqACQAEkAAaBA8AEsAImAAiAImACqACwAEoACCBIqAAaACSAAkAIoAEYAIiAK6ACYAGcACMBCeAAsAMoAGiACqAEsAKeACWAAaACkAASACwAMiAMmACOACWACUAQsAEmAGYBEuACwACiAIiAQgAYuAE0AAgAOWBAWAAsAAeAEgAEWAIcACqAGUAGWAI2ACuAEcBEuAGuAAkAAcAC0AE2AEwAAaAAaAAOAAmACUAEmAGkAEYAGsACiAEwAAcAAMACIBEcAGcAASACUAAqAGoAIqBGyAKcAAaAASAEQARIBMeAI2AESAGgAAqAKsAEiAS2AO8AAeACSACoAIUAOcAKmACYAAWAAiAC2AGyAEaAGWAGYBGqAESAIMBAYAEWACsAIcAAeAEyAC0ALCBOyAE6AE4AAsACcAEaAGyAIeAAWACeAAaAIaAIYAGsACsACYACkAUqBAwACyAEUAM-ACWAC8AEcAE8AGcAAcACaAAaAEsAKuAKEBG8AGQAEqAAcACiACUAEqAC0AEyCCQACCBCsAEaAGeACkAEeACiACqACaAEmACeAGgACuAIiAGYACmACeAAYAC6AMwAEOAO8AK8ACqAEwAAUAGqACsAGwACgACgAEkAQcACaAAaAMgAG4AGIBCaAAQACSAImAGqAEIAC0AE6AA-AESAIeAAgAU6CGYAEmAC-ASoAAaAAWAAeACaAGmACoACkAA6AESAEcAC8ACYAAoAA8AEoAAYAAeAEqAGaAAeADEBEaACUAKmAAyAIoACYACeAGeACQACaACWAA0AC0AC6ACoAAgAEgAMmACgAKgAEiACQACkAQ8AAkAGaAAUAEQAEqAGkACgAIuAC4AEyAIyBEOAIeAK0AEsAIGBEqACkACKAC6ACmAEiAAYAA0AEaAA6AG0AGgACwACkACqAGgAEWAAeAK0AEuAK4AEqAAoAAkACmAAaAAWAAQAEkAIuAGYAQkAKeBEgACcAEyAG2AAiAAgACkAKoAMoACCBGMAGoAEYAGsAAeAC2ACYAI2ACOBEiAAQAAYAFuACuAA0AAsAE6ACkAI-AC6AAyAKoACWAEgAAWACgAMCBAUAGoAKaAEcAOUBEoAKiAAQACSAEaAAUAEkAGyAE6AEcAI4AGkAEeAEYAKgAUQBGGBAeAGuAKkACUAAWAG0AIsAAUAA-ACeAAqACcACSAEkACiACaACSAC2AK2AO2AOMBIiAESAIsAEIAAyAAiAEABIYAGeAIgAAWAOaAIcACYACcAEWBA2AAwAASAGqAGQAKuAC8AEgAC0AEmACaAEkAGgACqAEmAT0AEGBCwACMAEiAG0AAaACQAEyAIsAEKAAQAAkAIYAAqAE2AMSAMYAIgAOYBAsACWACaAAkAKmAAcAGyAAkAIeAAaAAeAEQBAyAAkAASACCBRUBIYAVuAC4AEaACMATCBAcACkAKEBIwAIYAEkACWAIcAGWAASAEsAAsACUAAsAAWAAcACSBAOBCUAGSBCaBTyAEYACgACSAGoAGkAAUAAYAEWACgAGWBGsAGeAEcAAeAK2AM6ACkAAYAASACMACgAAYAGcAA-AGEBCYACsAC6AAmAKkACiAGsAKuACmATiACKAGeACSAOwAESACkAE-ACiAEeAAMACSAEsAAeAEaAEUAMkAEqAEoAAaAOwBGYAE0AGSAEaBI0ACiAKIBCYAA8AA0AEcACaACaAAqAAOAAOAEmAAgAOMBGgACkAAoAIgAC-ACYACkAAWACkACOACUACUAAeAP4ACmACiAAaACuAEqAE8AI-ACyACSAISAKeACOAGoAGeAIeACSACqAAcACaAMsACcACQBCsAKWAIsAGeAImAAUAEcACYAIQAAYAAABAWAKgAISAQeBA4AEgACaAGeAGcAMEBGaAMEBAYAO4AAuAAoAKuAI6ACCBC4ACkAIoAG4AGyACgAEUACmAGSAKuAG6AAYAAsACyAAKBAaAI0AO2AAIBCkAIcAKyAAsAAcACSACIBCmAGWACUACYAK8AEeAAyAI4AImAGUBEuAAYAAqAGeACSACeAEcAGeAEoACWACiAAyACYAIYBGeACYAAkAGeAIqAASACgACaACgAAYAGwAEmAEmAEuAGMBEoAEYAGoAEkACcBT-AKgAAMBCYAGcAEIBAABC0AQMBQwAIUAEyAGWAE4AAaACSAKWAAoACmAEkACaAASACiAWwAKaACeAGuAAWAIYAAgAOCBGmAAGBAuACaAGeAIYAC0AGaAGoAAgACaAGcAK0AGoAMgAGuAAeAKqAEUAAYAC8AIWBC4AAkACQACWAGaAIgAAYAVyBGyAMeAAYBGcAKYAEWACmAG8AK-AGqAIoAMaAGeAGuASuACsAGQACgACiAG8AGaAIsAG8AGuACeBCoAEEBCYAGSAS4AEoAIUACYAEWAEYBAYAAmAAgAK2ACwAAKACKBKYAGUAAsAAsAIEBAeAAQAEWAM4AOWBAsACWAKUAK2AQ0AEMBCaAGqAGmBS8AEyAGaAAYAACBCuAAiAEgACqAIuAAkAQgAGoAQmAAUACUAAQAEaAAkAGmAEcAGmAG8AECBIkAAYAAWAGgAAQACgAAuAG8ACgAIUAEaAGoACcAMaAASAAmAG0AEoAGuAKkACWAG0AUgAAaAAqACQAEwAIcAQqAGUAASAG-ACkAK6AGeACUAK2BCYAQmAKsATaBEUAAeACeACeAImAGkAAcAAqACiAAmACWAGmAAcACcAAmACeAAqACWAAgACWAA2AAKAEmACoACCBCqAGYAE8AC-ACYAAeAEcAAiAC4AEoAEoAIYAK2AEeAGuAGeAMWCCYAC0AAkAGSAA6AWwAIYAAqAASBAmAKWAIYAA8AC2ACsAIsACGBRqAAQACsAKaBCaAEMACKBAgAAgAK6AGYACkAQqAO4ACYACeBAOACkCCYA","0-0":"MMBIUACQAYcAKsAPwAKsAKQAFuAJwAWcAIUAAoASWARwATcAUaAM6ANYAKeAOkAUoALSAIyADmAUoAJiAGQAIaACQAIqAFaAOgABOAQcAV0AKQAFSARaAOkASqAOWAJMAFOAKiATYARaALMAFkAGOAJkACQASYAHeAEMAJYAXkAF0AHcANUAGWAOQBHQBPmAHYBKYALyAEgAIYAVsAVaANkAGyAGcANiAVQAayADWAIYAEYAGQATaAReAHSAJUAPQANSARYAOmAMWAQsAHSANQAScADaANQASaAOeASgAPQAAQANUASuAIuALcAKUAM0AGeAHkARiAHaADcADaAJUAJYASuAAcAZ2AQsAGOAGOARgAMkACaAIaASqAGaANcASWAXkAAKAFsAJUAFiASaAKaASOAJMANcAOcAEWAQgAIsAEeAPYAJWAESARUAEWAKQAFmAJcAMYAIaAHuARaANaACSAPyAGkAMgACQAPcAOsAN0ANaAGkADUAUcAUkABWAFUAOaATSARSAMiAHSAGoAEsAJaAIWATYACOASIAGSACYAIKBKaAFUADaAMkAQUAWUAJUASaASSAQoALYAGQANmAJWAHYAMmAASAIaASOALQAEUAHWASsAFwALsAMeALYALoANmAOOAW0AImAFYARqAJ0AXcAR-ALsALWAaOAIQAUmARoAWQAMMAAKAPcABYALeAWgAFSAHUAMgARiAECBJQAIeAEQASeAScAGkAJaAOOASUAOGBTaAJSBJaARqARmAUmAHYAFwACKAHMAHABJCBJgASsAOaALWAEeATgAFYAFoAMYANWACkAImAQUAQaATMAHSAJiAJQANWAGWAYiAIUALoAL6AJgAQcAJcAPgALcAJaACeALYAKcAG4ADOAPUAR4AMcAMWATaAGgAQcABQAHaAQcAIeAHsAEeAKaADSATWAASARmAHcANYAEaAUcACSAKmAGYAHMARSAOeACIBCcATmAH0AQuARiAB8ASiAKYATSCJaANUAUkAOcAGaACYAKYBFWAQmAQcAFOAMcAIgAPkAScAMSAJQAO0AHuAMYANiAKSAImAIWBAiAciAbaAMSAHiAZgAHsATaAGmAQgASsAPgAFUAEcAL0AFoAHgAA4AEWALmAJyACkAIaAN0AGUAOkAGSAOmAMcAHWAMaAMYANOAHcAKaAOOAJkAGcATyAXwAIgAFaAMmAHYATUAJmAKoAPgAIuAFaAKuALSAQUAPkAHcACYARqARwASgAIOASeAMeAGeAFcAU6ASkADYAMYAOYAESALaALUATmAKUAFWALQATEBSkAOMALeASMAWMAQcALkAMgANeAMqADOARgAQqAEMAKwAMwACcAEWANmAEQAJSAGeAMiADMAOeAVaACoAW0ATmAVYAIWATgAFmAHaAKiAQeAEWAJiAMWAQcAHYAIaAPUANmASUAOmABUAOgAPYANmAJ8AMqASUAIqAKsAV8AQoAaWAGOANqAMqADoAGYAPQAWiAIaASmAIWAMWALgAIcAMUAGgAImABgAJcAGuAZiAdyAMgAHuAQYAPGBVQAcyARyACkALcAMUAGWAKaANWAJSAKsAGcAEkAPYAbqAQUASWAKYALyAIgALsAMkAMgANKBGeAIqAHmAIWAQyAL8AMSALUAQuAJcAP4ASmAJwAAUAHWAMcAI-AISAMqACQAQOAKWAHUAMSALoAMaAQiANcASuADoAUaAGWAJWAGUAU8ADoAQgAQoALcALgAUcAOgANaAUaACkAMWAOWAHoAMgASaAGmAPOAGgAISAR2AHuAMqAUcAQeAEkAQyAWIBKOAFuAQqAQ8ATmAMgADeAHaACaATaAAmATSAHkAEYAPWAKmADkANgAHUAAiAPcAQkAMaARcALOAJQAP4AJeAa2AFcATcAJeAQQAIuAJwAGgAJiAIiAQOAAWARaAO2ASmAHWANWASuAFYAKgAFWAQQBHgAMeAJQAFcAHQAPcAROAJWAJQAJOAOUAOOAPQAWgAQmAKUAMWAHeARmADmAMeACYARKBNoAKqAJ6AAYAGaADYAUUALkACMAGQACQAPsAPgAKWASsAJ0AJwAHSAEgACwAPeAEOANWAPWATSANiAZmAOSAOaAIsAYSAEYACOAGmAFSASgAKYAMcACKAAaALyAFoAKeAKWAYgAQmACUAMIBCWAUwAZiAMYAHoAhWANcAEcAXSAPWAT6AK4ATiADeADUALMANqAUSAWcAPuAEUAGSASwAJiAN0AVaARWALYALQAQUAGOAQMBTgAKUAEeATeAN6AMaBJWAKqAPOASYAJuAE6AMiAGUAMABPQAGYAWkAOeBNiAKaAQcATuAQyAPoALiAOMAIUADSAFQARYASmAPYAQeAGqAIYARmARYALOAHYAAMASkAFUACUACYAMgACMAJSAMQAGsAESAYoAQeANWAQiAQwAMyAKWACmAIoAYsASoADYAEyASYAIYAVeAGqAL0AMyAMyAHoAJQATUAPUAHmAHmAPQAAcAQaALeAXeAMYAJUAXiAHMAEUAHMASOAMoAN0AJcAMwAIgAPiANMANcAISAKeAOCBDWAUmASaADcAF-AQgAFUAUEBXgAJSAHSAV6AIiAAMARSATiAHaAISAPaAFYAPWAQcATqAJIAEQALiALWAQmAFSAEYAGyAJ-ARoAIgAQiAQSASaAJMAUiAOkANoAGMBF-ALYAWgAQaACWAGkARcAP-AOqAFKAPeAIkAOkADQAMuATiAAQAQWAHYAGMAGYARUATqAUWAWoALWAIaADWAPKAIOARkARYARiAQqAIwAPUANaAGYANSAMUAMWAGSANcAIgAISAJOARWALaAY0AKiAGWAUUAJoAJsAM6AToAQmAQMAQaARgAFaAEaAHOALsADeAQ2AMWAWgAPUAPYALUATiAJWAGyANqAAkAPeANmAOUAOWANOAKQAReACSAJYAVaATgAUWAJOAAQAKYAJ4APgACWAHqASiAESAMqAQcAE2AJuAGuACgANqAAaAOcAGwARiATWANeAPsAJUAHuAMwAReAPqAMkAKaABSAJWASiAEOAUUAamAOkASeAZgAFKATmAMeAOgAO0ALWAJcAQeAQmAFcALqAToAZuALQAOaAQqAJmAOWAHaAHgATSALSAFeAAiANcAG6APaASQAHYAaoAMYAQuAGmAL2ATgAREBHUAPSACSAOcARgARUACmALmAL8AMyANgAAKAKKBRcAPYAIkAKWAEWAIkADsAJSAMUACMAGuAIYATYASSAGYAJuAJgAUmAXmAPYAKUASiAUYARWAPyAGWAMSAGsANiAHMAKSAOeAPYASoAPgANaAHMAQiASkAJWAOcAJUAMkAO8ANUAPYAHUAEkAG2AYqATgAOcAJYAKuAWYAJ6AIaAKmAReAROAOqALgAUgAOsAEcAEKABgAHsANQACOAHWAEsANcAUeAPSAKgABQACOAIWAESAN-ADmAFaAHSAQIBOmANoAXkAXYAUWAPyAKoAMeASkABeASgAT0AGcAJYANUASgAJUAGcAMuASiARWAB0AFeAMMAVEBJqAHqACUAKYAHSAJSAIWALSASuALSAPUAOmAIcAGiAEcAKkAIWAWSAKUAJUAIaAXyARYATeAEYAIuAOeALWAMaAFiAGOATiAOyAIYAKiAPsAIwAFsAPsAM2AZOACOAGaAFuANcAR2ANWAJeAOiAKkASWAIQAJeAKMASgAOQAJQAJYATQASiAHWANuAAOAJIAWSADQALcAGoARSAKaAJOAPUAIkANgAPYARQAImAGYACaAFSAEqATwAXiAGABLmAQkAQcASMAOUAOiATgAOeAMaANWAHaAIiAEeANWALaADOATkAQaABYABEBNYANUALuAKkAHmAUyAEmAUiAVaAIWADgAJqAZWAGoANQANgASWAXsAOiAEkAFsAJcAPiAL4AIcAVyANWAUYAVgANMASWAXwAFSAVeALUASQAWABQSAGgACYAScAQoAHgARkATiAQSAYaASUAK-APQAQmALkAIgAJaADKAPyADYAFaAPQAHqAHaAGgAJkAMkAAYASqAJgAQiAM2AMwAEUAReAPgAFWAT8AGUAFcAKYAHgAHcAJQAFwAOOANaAfeAI2AVWAVkAIcARmAK0AGYALUAKmABUANSAMQAMQAL6ATyAFSAQiATWAZcAOYANWAMWAGYAKeAQcAWeAG2AOWAPOAT2ALoALaAPSAKUAQOAMaANyBAQAMOATeAPWAHmAFUAVuAFQAU4AOgAYSAK2AJSAIuAMYAGeARaAIcAIOASaAQcAT6AMqAEeAHqAOYAKEBPmAUgARiAJkAJ6AakALeADWAVYAIYALGBOcAWkALgAKYASoAHkABoAAcAP6AL2AVeAKgAHWAHeAOeAKQAIMANmARoAOmAVUAPuARYAIyATmANuAMUARWATcAIUAAkATkAFSAReAQiASUAHUAFoAQqAPiAH0AMwATMAK6AQmAVsAGkAFYARWAZOAHeAQgADmAUeAFWAboASaAGOAMQAPWAJsAJcAVmANWALWAEyAFSAJiAR8ARgAEeAKWABSBLgAHEBF0AQqAIaAGUAM4ANoASCBHYATqAT0AE2ACYAG6AKGBJsAQgAIkAVuAN6AKgAJyATeADQANaAQWAJyANkANiAOEBGeAJWACsANkAGiADcALWADWAQyATYAHaAPWAHYAIQAFoADQAKgAUkAHQADeAQeACGAFWASoANWAGeAMUAMeAPcATeATwAHOARoAOaAMWAVeAIcAFWATgAVKBIaAa0AAWAIeAROAIeAN4APmAHQAGMAJYAEuAESAO2AJkADKASiALoATABKiAVSAReAMcASwARcALOALYAT0AOcADaARqAMCBGMACaAMeANeAJSATkANmAT4AHsANmASYAIQADsATMAJUALcANUAPgATWAFGAEgAGYADcABUAEWAK6AMeAMgALaAQqAXsAOmAPkARaAGWAP4AHOAKiAJSAJiADoARkALaAGaAPoAHWAHkARqAQeAGsAGWAKgARuAIYACMABSAGSAJkAKmAFmAQoANeAAiAJyAJoASQAEYASUAMOAHYAFUAHQAIgAP4AJaAJUAMeAJyAJcATgAQcATeASaAWqAYgAKSAHSAEcAIKBIMAOeAVsANcAHUARkAUYAJaAOaAFaAEMAM2ATOATSAUYAKSAC0ATmANUAMYARoAKWAKWAJoAd0ACQAMMALqAIeATWAVeAKkASUAReAJ-ALYADKAHUAUcARcAIYARSAWkAEiAQiAUoASSADYAQUASuAKeAGOASiAPgAJaACWAFYALSAJYAPSAMoAKcAKaAFKAMeAM4ACWATUANeAMcAEWAYeAEeALcAKOAGiAWmANsAAMAMQANUAKYAJeAIQAXUAGOAWiAH8ADeAIUCScAH4AIwAW0AMcAN0AOWAGMAHSAKoAQcAIiAOeATSARSAQWALKAPYACqASiASeAPkAQaAKkAUaAMeAHUAIiAEgALUARoAUYAMoAIWAGeAW0AOOAAgACeAJcAKYARmATOAIWASyANoAHSAJmAIaATwASABMQAMaANeADSAGSAOuAOiATmAcmAIMAHUAPOAMwAQcASuASgAUgARSATaAFYAOUAbkABOAKuANSAUWAIcARWADSBJUAZ4AOcANSADWAM8AKSAOYAKcASsAFeAIgACgAMgAGOAMcAVeATeALeACUAGaARsALoAJaATgAOgBHUAJcAQoAJeAJkALkAN0AVaAFOAFmAMkAGeAQEBEgAK2AJQANmAEkAKUAEUAPgAIcATqAPaAPYAKKAIcAOGBRYAGcAHUAQcAJoALKAPkAJWAIWAROANYAMeAVqARYAIUANgAIiAPcAVqALUAGcANcAGYASkABSAWYAR0AFGBOaAFQAHmAKcAHmAOaAMkAIcADUADyAEkAHQAHKAOsASgAOYADgAJWAAOAQOAL4ANYANcAMkAPSAQgAFeACYATYAJYAVWA"}};var nc=.001,Jg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",nh=Object.fromEntries([...Jg].map((n,e)=>[n,e])),sh=new Map;function Xg(n,e){let t=Math.min(n,e),i=Math.max(n,e),s=`${t}-${i}`;if(!sh.has(s)){let r=jd.games[s]||"",a=[];for(let o=0;o+2<r.length;o+=3){let c=nh[r[o]]|nh[r[o+1]]<<6|nh[r[o+2]]<<12,l=c>>1&63;a.push({loWon:(c&1)===1,ws:Math.max(11,l+2),ls:l,longest:c>>7})}sh.set(s,a)}let A=n>e;return sh.get(s).map(r=>({won:A?!r.loWon:r.loWon,ws:r.ws,ls:r.ls,longest:r.longest}))}function Zg(n,e){if(n===e)return .5;let t=Xg(n,e);return t.length?t.reduce((i,s)=>i+(s.won?1:0),0)/t.length:.5}function jg(n,e){return e===2?n*n*(3-2*n):e===3?n**3*(10-15*n+6*n*n):n}function Ah(n,e,t){return jg(Zg(n,e),t)}function rh(n,e){return Math.floor(n/Math.max(e,nc)+1e-9)}function $d(n){return n<nc?"<0.1%":n>1-nc?">99.9%":`${(n*100).toFixed(n<.1||n>.9?1:0)}%`}function ef(n){let e=1/Math.max(n,nc);return`${e>=100?Math.floor(e):e.toFixed(2)}\xD7`}var zn=n=>"#"+n.toString(16).padStart(6,"0"),$g=[["rally","Longest rally",n=>`${n}`],["perfectPct","PERFECT %",n=>`${n}%`],["fastest","Fastest shot",n=>`${n} <small>km/h</small>`],["smashes","Smashes landed",n=>`${n}`],["serveWon","Points won on serve",n=>`${n}`],["perfects","PERFECTs in a match",n=>`${n}`]],j=n=>document.getElementById(n);function fA(n,e=!1){let t=e?"#2a2540":n.color,i=e?"#3d3658":"#ffffff",s=new Set(n.look.gear),A=n.look.build,r={small:21,broad:26,lean:18,slim:16,tall:22}[A]||20,a={small:15,broad:13,lean:12.5,slim:12,tall:13}[A]||13,o={small:33,tall:28}[A]||30,c=o-a,l=[];return l.push(`<path d="M${32-r} 66 C${32-r} 50 ${32-r*.6} 45 32 45 C${32+r*.6} 45 ${32+r} 50 ${32+r} 66 Z" fill="${t}" fill-opacity="0.5"/>`),s.has("pads")&&l.push(`<ellipse cx="${32-r+5}" cy="49" rx="9" ry="5" fill="${t}"/><ellipse cx="${32+r-5}" cy="49" rx="9" ry="5" fill="${t}"/>`),s.has("spikes")&&l.push(`<path d="M${32-r+3} 50 L${32-r-3} 38 L${32-r+9} 47 Z M${32+r-3} 50 L${32+r+3} 38 L${32+r-9} 47 Z" fill="${t}"/>`),s.has("horns")&&l.push(`<path d="M${32-a*.55} ${c+4} L${32-a-4} ${c-9} L${32-a*.1} ${c+1} Z M${32+a*.55} ${c+4} L${32+a+4} ${c-9} L${32+a*.1} ${c+1} Z" fill="${t}"/>`),s.has("crest")&&l.push(`<path d="M25 ${c+4} L27 ${c-8} L30 ${c+1} L32 ${c-12} L34 ${c+1} L37 ${c-8} L39 ${c+4} Z" fill="${t}"/>`),s.has("sprout")&&l.push(`<path d="M32 ${c+1} L32 ${c-8}" stroke="${t}" stroke-width="2.5"/><circle cx="32" cy="${c-10}" r="3.2" fill="${t}"/>`),l.push(`<circle cx="32" cy="${o}" r="${a}" fill="${t}" fill-opacity="0.8"/>`),s.has("band")&&l.push(`<path d="M${32-a+1} ${o-a*.5} L${32+a-1} ${o-a*.5}" stroke="#05020d" stroke-width="3.5"/>`),s.has("goggles")?l.push(`<circle cx="27" cy="${o}" r="4.2" fill="${i}"/><circle cx="37" cy="${o}" r="4.2" fill="${i}"/>`):s.has("shield")?l.push(`<rect x="${32-a+1}" y="${o-4}" width="${a*2-2}" height="8" rx="3" fill="${i}"/>`):l.push(`<rect x="${32-a*.75}" y="${o-2.5}" width="${a*1.5}" height="5" rx="2" fill="${i}"/>`),s.has("halo")&&l.push(`<ellipse cx="32" cy="${c-5}" rx="${a+4}" ry="4" fill="none" stroke="${t}" stroke-width="2.5"/>`),e&&l.push(`<text x="32" y="${o+6}" text-anchor="middle" font-size="17" font-weight="900" fill="#8a80b0" stroke="none" font-family="Orbitron, sans-serif">?</text>`),`<svg class="avatar" viewBox="-2 -2 68 68" width="58" height="58" aria-hidden="true"><g stroke="#000" stroke-width="1.6" stroke-linejoin="round">${l.join("")}</g></svg>`}var eE={gp:1.2,milestone:.9},sc=class{constructor(e,t,i){this.settings=e,this.progress=t,this.h=i,this.current=null,this.prevScreen=null,this._lastRally=-1,this._vig=-1,this._pops={},this._hushUntil=0,this.buildMenu(),this.buildSettings(),this.bind()}show(e){for(let t of["menu","ladder","locker","practice","watch","watchOver","settings","howto","pause","over"])j(t).classList.toggle("hidden",t!==e);this.current=e,document.body.classList.toggle("in-menu",!!e)}showHUD(e){j("hud").classList.toggle("hidden",!e)}buildMenu(){let e=j("lengths");e.innerHTML="",Tl.forEach(t=>{let i=document.createElement("button");i.className="len",i.textContent=t.label,i.dataset.id=t.id,i.addEventListener("click",()=>{this.settings.matchLength=t.id,this.h.onSettings(),this.refreshMenu(),this.h.sound("move")}),e.appendChild(i)}),this.buildLadder(),this.refreshMenu()}refreshMenu(){[...j("lengths").children].forEach(s=>s.classList.toggle("sel",+s.dataset.id===this.settings.matchLength));let e=this.settings.difficulty,t=dt[e],i=j("oppCard");i.style.setProperty("--c",t.color),i.innerHTML=`${fA(t)}
      <span class="oc-text"><span class="oc-name">${t.bot}<small>${t.name}</small></span>
      <span class="oc-tag">${t.tagline}</span></span>
      <span class="oc-side"><b>${e+1}/${dt.length}</b>change \u203A</span>`,j("play").style.setProperty("--c",t.color),this.refreshBalance()}buildLadder(){let e=j("rungs");e.innerHTML="";let t=this.progress,i=dt.findIndex((s,A)=>A<t.unlocked&&!t.beaten[s.id]);for(let s=dt.length-1;s>=0;s--){let A=dt[s],r=s>=t.unlocked,a=!!t.beaten[A.id],o=document.createElement("button");o.type="button",o.className="rung"+(r?" locked":"")+(s===this.settings.difficulty?" sel":""),o.style.setProperty("--c",r?"#4a4466":A.color);let c=r?`<span class="rstat lock">LOCKED<small>beat ${dt[s-1].bot}</small></span>`:a?'<span class="rstat beaten">\u2713 BEATEN</span>':s===i?'<span class="rstat next">\u25B6 NEXT UP</span>':'<span class="rstat open">UNLOCKED</span>';o.innerHTML=`<span class="rn">${s+1}</span>${fA(A,r)}
        <span class="oc-text"><span class="oc-name">${r?"? ? ?":A.bot}<small>${A.name}</small></span>
        <span class="oc-tag">${r?A.style:`${A.style} \xB7 ${A.tagline}`}</span></span>${c}`,r?o.addEventListener("click",()=>this.h.sound("move")):(o.addEventListener("click",()=>{this.settings.difficulty=s,this.h.onSettings(),this.buildLadder(),this.refreshMenu(),this.h.sound("move"),this.show("menu")}),o.addEventListener("dblclick",()=>this.h.onPlay())),e.appendChild(o)}}buildLocker(){let e=this.progress,t=(s,A,r,a)=>{r.innerHTML="";for(let o of A){let c=Gr(e,s,o.id),l=document.createElement("button");l.type="button",l.className=`${s==="paddle"?"swatch":"arena"}${c?"":" locked"}${e[s]===o.id?" sel":""}`,l.innerHTML=`${a(o,c)}<span class="sw-name">${o.name}</span>
          <small>${c?e[s]===o.id?"IN USE":"unlocked":`\u{1F512} ${gd(o.req,dt)}`}</small>`,l.addEventListener("click",()=>{this.h.sound("move"),c&&(this.h.onPick(s,o.id),this.buildLocker())}),r.appendChild(l)}};t("paddle",ls,j("paddles"),(s,A)=>`<i class="dot" style="--p:${A?zn(s.hex):"#2a2540"}"></i>`),t("arena",kn,j("arenas"),(s,A)=>{let[r,a,o]=A?[zn(s.c1),zn(s.c2),zn(s.bg)]:["#2a2540","#2a2540","#0c0a14"];return`<i class="prev" style="--a:${r};--b:${a};--bg:${o}"></i>`});let i=e.records;j("records").innerHTML=$g.map(([s,A,r])=>`<div><b>${i[s]?r(i[s]):"\u2013"}</b><span>${A}</span></div>`).join("")+`<p class="totals">Matches played <b>${e.totals.matches}</b> \xB7 won <b>${e.totals.wins}</b> \xB7 ladder <b>${Object.keys(e.beaten).length}/${dt.length}</b></p>`}buildPractice(){let e=j("practiceRows");e.innerHTML="";let t=this.settings.practice,i=[["speed","Ball speed"],["spin","Spin"],["place","Placement"],["rate","Feed rate"]];for(let[s,A]of i){let r=document.createElement("div");r.className="srow prow",r.innerHTML=`<span>${A}</span>`;let a=document.createElement("div");a.className="seg";for(let[o,c]of yr[s]){let l=document.createElement("button");l.type="button",l.textContent=c,l.classList.toggle("sel",t[s]===o),l.addEventListener("click",()=>{t[s]=o,[...a.children].forEach(u=>u.classList.toggle("sel",u===l)),this.h.onSettings("practice"),this.h.sound("move")}),a.appendChild(l)}r.appendChild(a),e.appendChild(r)}}setPracticeHUD(e){j("practiceHud").classList.toggle("hidden",!e),j("scoreboard").classList.toggle("hidden",e),j("gamesTo").classList.toggle("hidden",e),document.body.classList.toggle("practice-mode",e),j("restart").textContent=e?"Reset counts":"Restart match"}buildWatch(){let e=this.settings.watch,t=(A,r)=>{A.innerHTML="",dt.forEach((a,o)=>{let c=document.createElement("button");c.type="button",c.className="wbot"+(e[r]===o?" sel":""),c.style.setProperty("--c",a.color),c.innerHTML=`${fA(a)}<span class="oc-text"><span class="oc-name">${a.bot}</span><span class="oc-tag">${a.style}</span></span>`,c.addEventListener("click",()=>{e[r]=o,this.h.onSettings("watch"),this.h.sound("move"),this.buildWatch()}),A.appendChild(c)})};t(j("wpickA"),"a"),t(j("wpickB"),"b");let i=j("wLengths");i.innerHTML="";for(let A of Tl){let r=document.createElement("button");r.type="button",r.textContent=A.id===1?"1 game to 11":A.label,r.classList.toggle("sel",e.length===A.id),r.addEventListener("click",()=>{e.length=A.id,this.h.onSettings("watch"),this.h.sound("move"),this.buildWatch()}),i.appendChild(r)}let s=this.watchSides();j("wMatchup").innerHTML=`${fA(dt[e.a])}<span style="--c:${s.a.color}">${s.a.html}</span><em>vs</em><span style="--c:${s.b.color}">${s.b.html}</span>${fA(dt[e.b])}`,[...j("wMatchup").querySelectorAll(".avatar")].forEach((A,r)=>A.style.setProperty("--c",dt[r?e.b:e.a].color)),this.buildBet()}watchSides(){let e=this.settings.watch,t=e.a===e.b,i=(s,A,r)=>{let a=dt[s];return{name:t?`${a.bot} (${A})`:a.bot,html:t?`${a.bot} <small>(${A})</small>`:a.bot,color:t?r:a.color}};return{a:i(e.a,"Red","#ff3355"),b:i(e.b,"Blue","#3d8bff")}}buildBet(){let e=this.settings.watch,t=this.progress,i=this.bet||(this.bet={pick:null,stake:10}),s=this.watchSides(),A=e.a===e.b?.5:Ah(e.a,e.b,e.length),r={a:A,b:1-A};this.refreshBalance();let a=t.coins;a<1&&(i.pick=null),i.stake=Math.max(1,Math.min(Math.floor(i.stake)||1,Math.max(1,a)));let o=j("betSides");o.innerHTML="";let c=(C,f,p="")=>{let S=document.createElement("button");S.type="button",S.className=`bet-side ${p}`+(i.pick===C?" sel":""),S.innerHTML=f,S.disabled=C!==null&&a<1,S.addEventListener("click",()=>{i.pick=C,this.h.sound("move"),this.buildBet()}),o.appendChild(S)},l=C=>`<b style="--c:${s[C].color}">${s[C].html}</b><span>${$d(r[C])} to win</span><em>pays ${ef(r[C])}</em>`;c("a",l("a")),c(null,"<b>No bet</b><span>just watch</span>","none"),c("b",l("b"));let u=j("stake");u.max=Math.max(1,a),document.activeElement!==u&&(u.value=i.stake),j("betStake").classList.toggle("off",!i.pick);let h=j("stakeChips");if(!h.childElementCount)for(let[C,f]of[["10",()=>10],["25",()=>25],["50",()=>50],["\xBD",p=>Math.floor(p/2)],["All in",p=>p]]){let p=document.createElement("button");p.type="button",p.textContent=C,p.addEventListener("click",()=>{this.bet.stake=f(this.progress.coins),this.bet.pick||(this.bet.pick="a"),this.h.sound("move"),this.buildBet()}),h.appendChild(p)}let d=j("betLine"),m=j("watchStart");if(i.pick){let C=r[i.pick],f=rh(i.stake,C);d.innerHTML=`Bet <b>${i.stake}</b> on <b style="color:${s[i.pick].color}">${s[i.pick].name}</b> \u2192 pays <b class="gold">${f}</b> <small>(${f-i.stake>=0?"+":""}${f-i.stake})</small>`,m.textContent=`Bet ${i.stake} & watch`}else d.innerHTML=a<1?"You're out of coins \u2014 you can still watch.":"No bet: just watch the match.",m.textContent="Watch";this.updateRefill()}currentBet(){let e=this.settings.watch,t=this.bet;if(!t||!t.pick||this.progress.coins<1)return null;let i=Math.floor(t.stake);if(!(i>=1)||i>this.progress.coins)return null;let s=e.a===e.b?.5:Ah(e.a,e.b,e.length),A=t.pick==="a"?s:1-s,r=this.watchSides();return{a:e.a,b:e.b,length:e.length,legs:[{kind:"match",pick:t.pick,label:`${r[t.pick].name} to win`,stake:i,p:A,pays:rh(i,A)}]}}refreshBalance(){let e=this.progress.coins;j("wBal").textContent=e,j("menuBal").textContent=e}updateRefill(){let e=j("refill"),t=ih(this.progress);if(clearTimeout(this._refillT),e.classList.toggle("hidden",t<0),!(t<0))if(t===0)e.innerHTML=`<span>Out of coins!</span><button type="button" id="refillBtn">Claim ${fs} free coins</button>`,j("refillBtn").addEventListener("click",()=>this.h.onRefill());else{let i=Math.ceil(t/1e3);e.innerHTML=`<span>Out of coins \u2014 a free refill of ${fs} is ready in <b>${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}</b></span>`,this._refillT=setTimeout(()=>{this.current==="watch"&&this.buildBet()},1e3)}}setWatchHUD(e,t=null){j("watchBar").classList.toggle("hidden",!e),document.body.classList.toggle("watch-mode",e),e&&t&&this.setWatchCam(t.watchCamLabel())}setBetChip(e){let t=j("betChip");if(t.classList.toggle("hidden",!e),!e)return;let i=e.legs.reduce((s,A)=>s+A.stake,0);t.innerHTML=`<span class="bc-title">YOUR BET <i class="coin"></i> ${i}</span>`+e.legs.map(s=>`<span class="bc-leg">${s.label} <b>\u2192 ${s.pays}</b></span>`).join("")}setWatchSpeed(e){[...j("wSpeed").children].forEach(t=>t.classList.toggle("sel",+t.dataset.speed===e))}setWatchCam(e){j("wCam").innerHTML=`\u{1F4F7} ${e} <b>C</b>`}setSkipping(e){j("wSkip").textContent=e?"Skipping\u2026":"Skip to result",j("wSkip").disabled=e,document.body.classList.toggle("skipping",e)}updatePractice(e){let t=e.counts;j("cPerfect").textContent=t.perfect,j("cGreat").textContent=t.great,j("cGood").textContent=t.good,j("cEarly").textContent=t.early,j("cLate").textContent=t.late,j("cMiss").textContent=t.miss,j("cIn").textContent=`${e.landed}/${e.returned}`,j("cStreak").textContent=e.bestStreak>e.streak?`${e.streak} (best ${e.bestStreak})`:e.streak;let i=e.opts,s=A=>yr[A].find(r=>r[0]===i[A])[1].toLowerCase();j("phOpts").textContent=`${s("speed")} \xB7 ${i.spin==="random"?"random spin":i.spin==="none"?"no spin":s("spin")} \xB7 ${i.place==="random"?"anywhere":s("place")} \xB7 ${s("rate")}`}buildSettings(){let e=this.settings,t=[{key:"master",label:"Master volume",type:"range",min:0,max:1,step:.01,fmt:s=>Math.round(s*100)+"%"},{key:"music",label:"Music volume",type:"range",min:0,max:1,step:.01,fmt:s=>Math.round(s*100)+"%"},{key:"sfx",label:"Effects volume",type:"range",min:0,max:1,step:.01,fmt:s=>Math.round(s*100)+"%"},{key:"crowd",label:"Crowd volume",type:"range",min:0,max:1,step:.01,fmt:s=>Math.round(s*100)+"%"},{key:"muted",label:"Mute all sound (M)",type:"toggle"},{key:"quality",label:"Graphics quality",type:"select",options:Object.keys(Ai).map(s=>[s,Ai[s].label])},{key:"msaa",label:"MSAA anti-aliasing (test)",type:"toggle"},{key:"fov",label:"Field of view",type:"range",min:55,max:100,step:1,fmt:s=>s+"\xB0"},{key:"timingGuide",label:"Timing guide ring",type:"toggle"},{key:"shake",label:"Screen shake",type:"toggle"},{key:"slowmo",label:"Slow-mo on great shots",type:"toggle"},{key:"announcer",label:"Announcer voice",type:"toggle"},{key:"showFps",label:"Show FPS",type:"toggle"}],i=j("settingsRows");i.innerHTML="";for(let s of t){let A=document.createElement("label");A.className="srow";let r=document.createElement("span");r.textContent=s.label,A.appendChild(r);let a,o=document.createElement("span");if(o.className="sval",s.type==="range")a=document.createElement("input"),a.type="range",a.min=s.min,a.max=s.max,a.step=s.step,a.value=e[s.key],o.textContent=s.fmt(+e[s.key]),a.addEventListener("input",()=>{e[s.key]=+a.value,o.textContent=s.fmt(+a.value),this.h.onSettings(s.key)});else if(s.type==="select"){a=document.createElement("div"),a.className="seg";for(let[c,l]of s.options){let u=document.createElement("button");u.type="button",u.textContent=l,u.classList.toggle("sel",e[s.key]===c),u.addEventListener("click",h=>{h.preventDefault(),e[s.key]=c,[...a.children].forEach(d=>d.classList.toggle("sel",d===u)),this.h.onSettings(s.key),this.h.sound("move")}),a.appendChild(u)}}else a=document.createElement("input"),a.type="checkbox",a.className="tog",a.checked=!!e[s.key],a.addEventListener("change",()=>{e[s.key]=a.checked,this.h.onSettings(s.key),this.h.sound("move")});A.appendChild(a),A.appendChild(o),i.appendChild(A)}}bind(){j("play").addEventListener("click",()=>this.h.onPlay());let e=()=>{this.buildLadder(),this.show("ladder"),this.h.sound("move")};j("ladderBtn").addEventListener("click",e),j("oppCard").addEventListener("click",e),j("ladderBack").addEventListener("click",()=>{this.show("menu"),this.h.sound("move")}),j("overNext").addEventListener("click",()=>this.h.onNext()),j("lockerBtn").addEventListener("click",()=>{this.buildLocker(),this.show("locker"),this.h.sound("move")}),j("practiceBtn").addEventListener("click",()=>{this.prevScreen="menu",this.buildPractice(),this.show("practice"),this.h.sound("move")}),j("pPractice").addEventListener("click",()=>{this.prevScreen="pause",this.buildPractice(),this.show("practice"),this.h.sound("move")}),j("practiceBack").addEventListener("click",()=>{this.show(this.prevScreen||"menu"),this.h.sound("move")}),j("practiceStart").addEventListener("click",()=>this.h.onPracticeStart()),j("watchBtn").addEventListener("click",()=>{this.buildWatch(),this.show("watch"),this.h.sound("move")}),j("watchBack").addEventListener("click",()=>{this.show("menu"),this.h.sound("move")}),j("watchStart").addEventListener("click",()=>this.h.onWatchStart()),[...j("wSpeed").children].forEach(i=>i.addEventListener("click",()=>{i.blur(),this.h.onWatchSpeed(+i.dataset.speed)})),j("wCam").addEventListener("click",i=>{i.currentTarget.blur(),this.h.onWatchCam()}),j("wSkip").addEventListener("click",i=>{i.currentTarget.blur(),this.h.onWatchSkip()}),j("wMenu").addEventListener("click",i=>{i.currentTarget.blur(),this.h.onPause()}),j("woAgain").addEventListener("click",()=>this.h.onWatchNew());let t=j("stake");t.addEventListener("input",()=>{let i=Math.floor(+t.value);i>=1&&(this.bet.stake=Math.min(i,Math.max(1,this.progress.coins)),!this.bet.pick&&this.progress.coins>=1&&(this.bet.pick="a"),this.buildBet())}),t.addEventListener("change",()=>{t.value=this.bet.stake}),j("stakeMinus").addEventListener("click",()=>{this.bet.stake=Math.max(1,this.bet.stake-(this.bet.stake>10?5:1)),this.h.sound("move"),this.buildBet()}),j("stakePlus").addEventListener("click",()=>{this.bet.stake+=this.bet.stake>=10?5:1,this.h.sound("move"),this.buildBet()}),j("woMenu").addEventListener("click",()=>this.h.onQuit()),j("lockerBack").addEventListener("click",()=>{this.show("menu"),this.h.sound("move")}),j("howBtn").addEventListener("click",()=>{this.prevScreen="menu",this.show("howto"),this.h.sound("move")}),j("setBtn").addEventListener("click",()=>{this.prevScreen="menu",this.show("settings"),this.h.sound("move")}),j("setBack").addEventListener("click",()=>{this.show(this.prevScreen||"menu"),this.h.sound("move")}),j("howBack").addEventListener("click",()=>{this.show(this.prevScreen||"menu"),this.h.sound("move")}),j("resume").addEventListener("click",()=>this.h.onResume()),j("pSettings").addEventListener("click",()=>{this.prevScreen="pause",this.show("settings"),this.h.sound("move")}),j("pHow").addEventListener("click",()=>{this.prevScreen="pause",this.show("howto"),this.h.sound("move")}),j("restart").addEventListener("click",()=>this.h.onRestart()),j("quit").addEventListener("click",()=>this.h.onQuit()),j("rematch").addEventListener("click",()=>this.h.onRestart()),j("overMenu").addEventListener("click",()=>this.h.onQuit()),document.querySelectorAll("button").forEach(i=>i.addEventListener("mouseenter",()=>this.h.sound("hover")))}updateHUD(e){let t=e.match;j("ps").textContent=t.score[se],j("os").textContent=t.score["ai"],j("pg").textContent=t.games[se],j("og").textContent=t.games["ai"],j("pname").textContent=e.sideName(se),j("oname").textContent=e.sideName("ai"),j("hud").style.setProperty("--opp",e.sideColor("ai")),j("hud").style.setProperty("--you",e.sideColor(se));let i=e.rally.phase==="dead"?null:t.server,s=e.rally&&e.rally.phase==="serve"?e.rally.server:i;j("pserve").classList.toggle("on",s===se),j("oserve").classList.toggle("on",s==="ai"),j("gamesTo").textContent=t.gamesToWin>1?`GAME ${t.gameNumber} \xB7 FIRST TO ${t.gamesToWin}`:"GAME TO 11"}setRally(e,t){let i=j("rally");if(e<3){i.classList.remove("on"),this._lastRally=e;return}i.classList.add("on"),j("rallyN").textContent=e,i.style.setProperty("--k",(1+Math.min(1,t)*.8).toFixed(2)),i.style.setProperty("--hue",String(Math.round(185+t*150))),e!==this._lastRally&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")),this._lastRally=e}setIntensity(e){Math.abs(e-this._vig)<.02||(this._vig=e,j("vignette").style.setProperty("--int",e.toFixed(2)))}timing(e,t,i,s,A,r,a){let o=this._timing||(this._timing={root:j("timing"),core:document.querySelector("#timing .core"),ring:document.querySelector("#timing .ring"),on:!1,state:""});if(!e){o.on&&(o.root.style.display="none",o.on=!1);return}o.on||(o.root.style.display="block",o.on=!0),o.state!==r&&(o.root.className=r,o.state=r),o.root.style.transform=`translate(${t.toFixed(1)}px, ${i.toFixed(1)}px)`,o.root.style.opacity=a.toFixed(2);let c=s*2,l=A*2;o.core.style.width=o.core.style.height=`${c.toFixed(1)}px`,o.ring.style.width=o.ring.style.height=`${l.toFixed(1)}px`}pop(e,t="ok"){let i=t==="milestone"?"milestone":"main",s=this._pops[i];s&&(clearTimeout(s.timer),s.el.remove());let A=document.createElement("div");A.className=`pop ${t}`,A.textContent=e;let r=eE[t]||.6;A.style.animationDuration=`${r}s`,j("pops").appendChild(A);let a={el:A,timer:0};a.timer=setTimeout(()=>{A.remove(),this._pops[i]===a&&(this._pops[i]=null)},r*1e3+100),this._pops[i]=a,this._hushRally(r)}milestone(e){this.pop(`\u{1F525} ${e} RALLY! \u{1F525}`,"milestone")}_hushRally(e){let t=performance.now()+e*1e3;if(t<=this._hushUntil)return;this._hushUntil=t;let i=j("rally");i.classList.add("hush"),clearTimeout(this._hush),this._hush=setTimeout(()=>i.classList.remove("hush"),e*1e3)}banner(e,t,i,s=1.6,A=null){let r=j("banner");r.className="",A&&r.style.setProperty("--bc",A),r.querySelector("h1").textContent=e,r.querySelector("p").textContent=t||"",r.offsetWidth,r.className=`show ${i||""}`,clearTimeout(this._bt),this._bt=setTimeout(()=>{r.className=""},s*1e3)}setMuted(e){j("muteBadge").classList.toggle("hidden",!e)}setReplay(e){document.body.classList.toggle("replay",e)}setPlaying(e){e!==this._playing&&(this._playing=e,document.body.classList.toggle("playing",e))}toast(e,t=5){let i=j("toast");i.innerHTML=e,i.classList.add("on"),clearTimeout(this._tt),this._tt=setTimeout(()=>i.classList.remove("on"),t*1e3)}hint(e){let t=j("hint");t.innerHTML=e,t.classList.toggle("on",!!e)}flash(e,t){let i=j("flash");i.style.transition="none",i.style.background=e,i.style.opacity=String(t),i.offsetWidth,i.style.transition="opacity 0.35s ease-out",i.style.opacity="0"}fps(e,t){let i=j("fps");i.classList.toggle("hidden",!t),t&&(i.textContent=`${e} FPS`)}gameOver(e,t=null){let i=e.match,s=i.winner===se,A=t||{records:[],cosmetics:[]},r=[],a=A.unlocked;if(a?r.push(`<div class="unlock-card" style="--c:${a.color}">${fA(a)}<span class="oc-text"><span class="un-title">NEW OPPONENT UNLOCKED</span>
        <span class="oc-name">${a.bot}<small>${a.name}</small></span><span class="oc-tag">${a.tagline}</span></span></div>`):A.ladderDone&&r.push(`<div class="unlock-card" style="--c:#ffe600"><span class="oc-text"><span class="un-title">LADDER COMPLETE</span>
        <span class="oc-tag">You beat all five. Every opponent stays open for rematches.</span></span></div>`),A.cosmetics&&A.cosmetics.length){let f=A.cosmetics.map(({type:p,item:S})=>`<span class="un-item">${p==="paddle"?`<i class="dot" style="--p:${zn(S.hex)}"></i>`:`<i class="prev" style="--a:${zn(S.c1)};--b:${zn(S.c2)};--bg:${zn(S.bg)}"></i>`}${S.name} ${p}</span>`).join("");r.push(`<div class="unlock-items"><span class="un-title">UNLOCKED IN THE LOCKER</span><div>${f}</div></div>`)}let o=j("overUnlock");o.innerHTML=r.join(""),o.classList.toggle("hidden",!r.length);let c=j("overNext");c.classList.toggle("hidden",!a),a&&(c.textContent=`Next: ${a.bot}`,c.style.setProperty("--c",a.color)),j("overTitle").textContent=s?"VICTORY!":"DEFEAT",j("over").classList.toggle("won",s),j("overSub").textContent=s?`You beat ${e.profile.bot}, ${e.profile.name}`:`${e.profile.bot}, ${e.profile.name}, takes it`,j("overScore").innerHTML=i.history.map(f=>`<span class="${f[se]>f["ai"]?"w":"l"}">${f[se]}\u2013${f["ai"]}</span>`).join("");let l=e.stats,u=th(l),h=this.progress.records,d=new Set(A.records||[]),m=(f,p,S,G="")=>{let E=f&&d.has(f),x=f?`<em>${E?"NEW BEST!":`best ${h[f]||0}${f==="perfectPct"?"%":f==="fastest"?" km/h":""}`}</em>`:"";return`<div class="${E?"rec":""}"><b>${p}</b><span>${S}${G?` <small>${G}</small>`:""}</span>${x}</div>`},C=l.hits?Math.round(100*l.perfects/l.hits):0;j("overStats").innerHTML=[m("rally",l.longest,"Longest rally"),m(l.hits>=20?"perfectPct":null,`${C}%`,"PERFECT",`${l.perfects}/${l.hits}`),m("fastest",`${u.fastest}<small> km/h</small>`,"Fastest shot"),m("smashes",l.smashesLanded,"Smashes landed",l.smashes?`of ${l.smashes}`:""),m("serveWon",`${l.serveWon}/${l.servePts}`,"Won on serve"),m(null,`${l.won}\u2013${l.lost}`,"Points")].join(""),this.show("over"),this.showHUD(!1)}watchOver(e,t=null){this.showBetResult(t);let i=e.match,s=i.winner,A=s===se?"ai":se,r=e.sides[s],a=e.sides[A],o=j("woTitle");o.textContent=`${r.name} WINS`,o.style.setProperty("--c",r.color);let c=i.gamesToWin>1?`${i.games[s]}\u2013${i.games[A]} in games`:`${i.history[0][s]}\u2013${i.history[0][A]}`;j("woSub").innerHTML=`<b style="color:${r.color}">${r.name}</b> beat <b style="color:${a.color}">${a.name}</b> ${c}`,j("woScore").innerHTML=i.history.map(d=>{let m=d[se]>d["ai"]?se:"ai";return`<span style="--c:${e.sides[m].color}">${d[se]}\u2013${d["ai"]}</span>`}).join("");let l=e.wstats,u=d=>Math.round(d*3.6),h=(d,m=C=>C)=>`<b><i style="color:${e.sides[se].color}">${m(l[d][se])}</i> \xB7 <i style="color:${e.sides["ai"].color}">${m(l[d]["ai"])}</i></b>`;j("woStats").innerHTML=[`<div><b>${l.longest}</b><span>Longest rally</span></div>`,`<div><b>${l.points}</b><span>Total points</span></div>`,`<div>${h("fastest",u)}<span>Fastest shot <small>km/h</small></span></div>`,`<div>${h("smashesLanded")}<span>Smashes landed</span></div>`,`<div>${h("aces")}<span>Aces</span></div>`,`<div>${h("pointsWon")}<span>Points won</span></div>`].join(""),this.show("watchOver"),this.showHUD(!1),t&&this.animateCoins(t)}showBetResult(e){let t=j("woBet");if(t.classList.toggle("hidden",!e),!e)return;let i=e.legs.map(r=>`<div class="leg ${r.won?"won":"lost"}"><span>${r.label}</span><span>${r.stake} <i class="coin"></i></span>
      <b>${r.won?`+${r.pays-r.stake}`:`\u2212${r.stake}`}</b></div>`).join(""),s=e.net,A=s>0?`YOU WON <b>+${s}</b>`:s<0?`YOU LOST <b>\u2212${-s}</b>`:"BROKE EVEN";t.className=s>0?"won":s<0?"lost":"even",t.innerHTML=`<div class="wb-legs">${i}</div><div class="wb-verdict">${A}</div>
      <div class="wb-bal"><span>Balance</span><i class="coin big"></i><b id="woBal">${e.before}</b></div>`}animateCoins(e){let t=j("woBal"),i=e.before,s=e.balance,A=performance.now(),r=1300,a=l=>{let u=Math.min(1,(l-A)/r),h=1-Math.pow(1-u,3);t.textContent=Math.round(i+(s-i)*h),u<1&&requestAnimationFrame(a)};if(requestAnimationFrame(a),this.h.coins(e.net),e.net<=0)return;let o=j("woBet"),c=Math.min(26,8+Math.round(Math.log2(1+e.net)*2));for(let l=0;l<c;l++){let u=document.createElement("i");u.className="coin fly",u.style.setProperty("--dx",`${Math.round((Math.random()-.5)*320)}px`),u.style.setProperty("--dy",`${Math.round(-60-Math.random()*140)}px`),u.style.animationDelay=`${(Math.random()*.5).toFixed(2)}s`,o.appendChild(u),setTimeout(()=>u.remove(),2200)}}};var tE=30,iE=3,ps=new b,Ac=class{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.active=!1,this.dirty=!1,this.t0=0,this.pos=new b,this.vel=new b,this.scale=1,this.spikes=[],this.lines=[],this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr),this.dirty=!1}trigger(e,t,i,s,A,r,a,o){this.active=!0,this.t0=o,this.pos.set(e,t,i),this.vel.set(s,A,r),this.scale=a;let c=Math.round(12+5*a);this.spikes.length=0;for(let u=0;u<c;u++)this.spikes.push({a:(u+.5+(Math.random()-.5)*.6)/c*Math.PI*2,r:1+Math.random()*.4,ri:.62+Math.random()*.1});let l=Math.round(18+12*a);this.lines.length=0;for(let u=0;u<l;u++)this.lines.push({a:Math.random()*Math.PI*2,r0:1.12+Math.random()*.22,r1:1.75+Math.random()*.75,w:.04+Math.random()*.045})}clear(){this.dirty&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.dirty=!1)}update(e,t){if(!this.active){this.clear();return}let i=Math.floor((e-this.t0)/tE);if(this.clear(),i>=iE){this.active=!1;return}let s=this.canvas.width,A=this.canvas.height;if(ps.copy(this.pos).project(t),ps.z>1)return;let r=(ps.x*.5+.5)*s,a=(1-(ps.y*.5+.5))*A;ps.copy(this.pos).addScaledVector(this.vel,.05).project(t);let o=Math.atan2((1-(ps.y*.5+.5))*A-a,(ps.x*.5+.5)*s-r),c=.065*A*this.scale,l=this.ctx;this.dirty=!0,l.save(),l.translate(r,a),l.lineJoin="miter",i===0?(this._lines(c,o,1,"#000",null),this._star(c,o,1,"#fff","#000",Math.max(2.5,c*.075)),this._star(c*.42,o,1,"#ffe600",null,0)):i===1?(this._lines(c*1.1,o,1.15,"#fff","#000"),this._star(c*1.12,o,1,"#000","#fff",Math.max(2.5,c*.07)),this._star(c*.55,o,1,"#fff",null,0)):this._lines(c*1.45,o,1.25,"#000",null),l.restore()}_inGap(e,t,i){let s=Math.atan2(Math.sin(e-t),Math.cos(e-t));return Math.abs(s)<i}_star(e,t,i,s,A,r){let a=this.ctx;a.beginPath();let o=this.spikes.length;for(let c=0;c<o;c++){let l=this.spikes[c],u=this._inGap(l.a,t,.45)?.6:1,h=e*l.r*i*u,d=Math.PI/o,m=e*l.ri,C=l.a-d,f=l.a+d;c===0?a.moveTo(Math.cos(C)*m,Math.sin(C)*m):a.lineTo(Math.cos(C)*m,Math.sin(C)*m),a.lineTo(Math.cos(l.a)*h,Math.sin(l.a)*h),a.lineTo(Math.cos(f)*m,Math.sin(f)*m)}a.closePath(),a.fillStyle=s,a.fill(),A&&(a.strokeStyle=A,a.lineWidth=r,a.stroke())}_lines(e,t,i,s,A){let r=this.ctx;r.beginPath();for(let a of this.lines){if(this._inGap(a.a,t,.4))continue;let o=e*a.r0,c=e*a.r1*i,l=e*a.w,u=Math.cos(a.a),h=Math.sin(a.a);r.moveTo(u*o-h*l,h*o+u*l),r.lineTo(u*c,h*c),r.lineTo(u*o+h*l,h*o-u*l),r.closePath()}r.fillStyle=s,r.fill(),A&&(r.strokeStyle=A,r.lineWidth=Math.max(1,e*.012),r.stroke())}};var Ue=Bd(),Ot=zd();Ue.difficulty=Math.max(0,Math.min(Ue.difficulty|0,Ot.unlocked-1));Ue.watch={a:1,b:2,length:1,...Ue.watch};for(let n of["a","b"])Ue.watch[n]=Math.max(0,Math.min(dt.length-1,Ue.watch[n]|0));[1,2,3].includes(Ue.watch.length)||(Ue.watch.length=1);var Af=document.getElementById("c"),di=new Fo(Af,Ue),ht=new Wo,rf=["master","music","sfx","crowd"],af=()=>ht.setVolumes(Object.fromEntries(rf.map(n=>[n,Ue[n]])));af();ht.setMuted(Ue.muted);ht.announcer=Ue.announcer;var Bs=new Ho(Af),ue=null,xe=new sc(Ue,Ot,{onPlay(){ah(Ue.difficulty)},onResume(){ht.unlock(),ht.ui("select"),Tr()},onRestart(){if(ue.mode!=="watch"){if(ue.mode==="practice"){ue.machine.resetCounts(),xe.updatePractice(ue.machine),Tr();return}nf(),ah(ue.oppIndex??Ue.difficulty)}},onPracticeStart(){if(ht.unlock(),ht.ui("select"),ue.mode==="practice"&&ue.paused){ue.machine.setOptions(Ue.practice),xe.updatePractice(ue.machine),Tr();return}xe.show(null),xe.showHUD(!0),ue.startPractice(Ue.practice),dh(),gs()},onNext(){ah(Ue.difficulty)},onPick(n,e){Ot[n]=e,Qn(Ot),of()},onWatchStart(){let n=xe.currentBet();if(n&&!Jd(Ot,n)){xe.toast("That bet is more than you have.",3),xe.buildBet();return}xe.refreshBalance(),nE(),n&&xe.toast(`Bet placed: <b>${n.legs[0].stake}</b> on <b>${n.legs[0].label}</b> \u2014 pays <b>${n.legs[0].pays}</b> if it comes in.`,4)},onRefill(){Zd(Ot)&&(ht.coins(fs),xe.toast(`Here are <b>${fs}</b> free coins. Good luck!`,4)),xe.buildBet()},coins(n){ht.coins(n)},onWatchNew(){ht.ui("select"),tf(),ue.startDemo(),ue.drawScreen(),xe.showHUD(!1),xe.buildWatch(),xe.show("watch")},onWatchSpeed(n){wr(n),ht.ui("move")},onWatchCam(){ue.mode==="watch"&&(xe.setWatchCam(ue.cycleCamera()),ht.ui("move"))},onWatchSkip(){ch()},onPause(){oc()},onQuit(){if(ue.mode==="watch"&&ue.state==="play"&&Ot.openBet){xe.toast("Your bet is on this match, so it plays out to the result.",4),ch();return}nf(),tf(),ht.ui("select"),Bs.active=!1,xe.showHUD(!1),xe.hint(""),xe.show("menu"),ue.startDemo(),ue.drawScreen()},onSettings(n){cs(Ue),rf.includes(n)?af():n==="muted"?(ht.setMuted(Ue.muted),xe.setMuted(Ue.muted)):n==="quality"?(Ue.firstRun=!1,ac()):n==="msaa"?ac():n==="announcer"?ht.announcer=Ue.announcer:n==="fov"&&(di.camera.fov=Ue.fov,di.camera.updateProjectionMatrix())},sound(n){n==="hover"?ht.ui("move"):(ht.unlock(),ht.ui(n))}}),_r=1/120,lh=1,Cs=0,pA=!1;function nE(){ht.unlock(),ht.ui("select");let n=Ue.watch;xe.show(null),xe.showHUD(!0),pA=!1,xe.setSkipping(!1),Cs=0,ue.startWatch(n.a,n.b,n.length),wr(lh),xe.setBetChip(Ot.openBet),Bs.active=!0,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),gs()}function wr(n){lh=n,xe.setWatchSpeed(n)}function ch(){ue.mode!=="watch"||ue.state!=="play"||pA||(ue.paused&&Tr(),pA=!0,xe.setSkipping(!0),xe.banner("SKIPPING TO RESULT","Simulating the rest of the match\u2026","intro",30),ue.setFast(!0))}function tf(){ue.mode==="watch"&&(pA=!1,xe.setSkipping(!1),ue.setFast(!1))}function sE(n){if(pA&&!ue.paused){let e=performance.now()+25;for(;ue.state==="play"&&performance.now()<e;)for(let t=0;t<60&&ue.state==="play";t++)ue.update(_r);ue.state==="play"&&xe.updateHUD(ue);return}if(ue.replay||ue.paused||ue.state!=="play"){ue.update(n),Cs=0;return}for(Cs=Math.min(Cs+n*lh,_r*24);Cs>=_r;)if(Cs-=_r,ue.update(_r),ue.replay||ue.state!=="play"){Cs=0;break}}function ah(n){ht.unlock(),ht.ui("select"),xe.show(null),xe.showHUD(!0),ue.startMatch(n,Ue.matchLength),dh(),gs()}ue=new ic(di,ht,xe,Bs,Ue);ue.onWatchEnd=n=>{pA=!1,xe.setSkipping(!1),xe.banner("","","",.01),Bs.active=!1;let e=n.match.winner===se?"a":"b",t=Xd(Ot,i=>i.kind==="match"&&i.pick===e,{winner:e,games:n.match.history.map(i=>[i[se],i["ai"]]),points:n.wstats.points,longest:n.wstats.longest});xe.refreshMenu(),xe.setBetChip(null),xe.watchOver(n,t)};ue.onMatchEnd=n=>{let e=Yd(Ot,n.stats,n.oppIndex,n.match.winner===se);return e.unlocked&&(Ue.difficulty=dt.indexOf(e.unlocked),cs(Ue)),xe.buildLadder(),xe.refreshMenu(),e};function nf(){if(ue.mode!=="match"||ue.state==="over")return;let n=qd(Ot,ue.stats);n.length&&xe.toast(`Unlocked in the Locker: <b>${n.map(e=>`${e.item.name} ${e.type}`).join("</b>, <b>")}</b>`,6)}function of(){Gr(Ot,"paddle",Ot.paddle)||(Ot.paddle="red"),Gr(Ot,"arena",Ot.arena)||(Ot.arena="neon"),xd(ue.playerPaddle,(ls.find(n=>n.id===Ot.paddle)||ls[0]).hex),di.setTheme(Ot.arena)}of();var hh=new Ac(document.getElementById("impact"));ue.impact=hh;di.precompile();xe.show("menu");xe.setMuted(Ue.muted);Ot.refunded&&(xe.toast(`The match you bet on last time never finished, so your <b>${Ot.refunded}</b> coins were refunded.`,6),Qn(Ot));function AE(){Ue.muted=!Ue.muted,ht.setMuted(Ue.muted),xe.setMuted(Ue.muted),cs(Ue),xe.buildSettings(),xe.toast(Ue.muted?"Sound <b>muted</b>. Press <b>M</b> to turn it back on.":"Sound <b>on</b>.",2.5)}function ac(){di.applyQuality(),ue.rebuildEffects(),di.precompile(),gs()}function uh(n){Ue.quality=n,ac(),xe.buildSettings(),cs(Ue)}var Ti={active:!1,next:0,checks:0,black:0};function gs(n=1200){Ti.active=!0,Ti.next=performance.now()+n,Ti.checks=0,Ti.black=0}function rE(n){if(!Ti.active||n<Ti.next||di.contextLost)return;Ti.next=n+350;let e=di.sampleBlackness();if(e!==null)if(Ti.checks++,e>.6&&Ti.black++,Ti.black>=3){Ti.active=!1;let t=Cr.indexOf(Ue.quality);if(Ue.msaa)Ue.msaa=!1,ac(),xe.buildSettings(),cs(Ue),xe.toast("The picture was coming out black with <b>MSAA</b> on, so I turned MSAA off.",8);else if(t>0){let i=Ai[Ue.quality].label;uh(Cr[t-1]),xe.toast(`The picture was coming out black on <b>${i}</b> graphics on this computer, so I switched to <b>${Ai[Ue.quality].label}</b>.`,8)}}else Ti.checks>=10&&(Ti.active=!1)}gs(1500);di.onContextLost=()=>xe.toast("The graphics driver reset \u2014 recovering\u2026",4);di.onContextRestored=()=>{ue.rebuildEffects();let n=Cr.indexOf(Ue.quality);n>=2?(uh(Cr[n-1]),xe.toast(`Recovered from a graphics reset \u2014 switched to <b>${Ai[Ue.quality].label}</b> graphics.`,6)):(di.precompile(),gs())};function dh(){document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),Bs.active=!0}function oc(){ue.mode==="demo"||ue.paused||ue.state==="over"||(ue.paused=!0,Bs.active=!1,ht.setMuffle(!0),xe.show("pause"),xe.hint(""))}function Tr(){xe.show(null),ue.paused=!1,ue.replay||ht.setMuffle(!1),dh(),gs(600),ue.mode!=="watch"&&ue.rally.phase==="serve"&&ue.rally.server==="player"&&(ue.rally.serveReadyAt=ue.time+.3)}window.addEventListener("keydown",n=>{if(n.code==="KeyM"&&!n.repeat&&!n.ctrlKey&&!n.metaKey&&!n.altKey){ht.unlock(),AE();return}if(ue.mode==="watch"&&ue.state==="play"&&!ue.paused&&!n.repeat&&(n.code==="KeyC"?(xe.setWatchCam(ue.cycleCamera()),ht.ui("move")):n.code==="Digit1"||n.code==="Numpad1"?wr(1):n.code==="Digit2"||n.code==="Numpad2"?wr(2):n.code==="Digit3"||n.code==="Numpad3"||n.code==="Digit4"||n.code==="Numpad4"?wr(4):n.code==="KeyK"&&ch()),n.code==="Escape"||n.code==="KeyP"){if(ue.mode==="demo"||ue.state==="over")return;ue.paused?xe.current==="pause"?Tr():(xe.current==="settings"||xe.current==="howto"||xe.current==="practice")&&xe.show("pause"):oc()}});document.addEventListener("visibilitychange",()=>{document.hidden&&oc()});window.addEventListener("blur",oc);window.addEventListener("resize",()=>di.resize());var sf=performance.now(),oh=0,rc=0,ms={t:0,frames:0,time:0};function aE(n){if(ms.t+=n,ms.t<1.5||(ms.frames++,ms.time+=n,ms.t<4.5))return;Ue.firstRun=!1;let e=ms.frames/ms.time,t=Ue.quality;e<30?t="low":e<55&&(t==="high"||t==="ultra")&&(t="medium"),t!==Ue.quality?(uh(t),xe.toast(`Graphics set to <b>${Ai[t].label}</b> for a smoother frame rate \u2014 you can change this in Settings.`)):cs(Ue)}function cf(n){requestAnimationFrame(cf);let e=Math.max(0,(n-sf)/1e3),t=e;sf=n,Ue.firstRun&&aE(e),t>.05&&(t=.05),t<=0&&(t=1e-4),ue.mode==="watch"?sE(t):ue.update(t),xe.setIntensity(ue.mode==="match"||ue.mode==="watch"?ue.intensity:0),xe.setPlaying((ue.mode==="match"||ue.mode==="practice")&&!ue.paused&&ue.state!=="over"),di.render(),hh.update(n,di.camera),rE(n),Bs.endFrame(),oh++,rc+=t,rc>=.5&&(xe.fps(Math.round(oh/rc),Ue.showFps),oh=0,rc=0)}requestAnimationFrame(cf);window.__neonspin={game:ue,world:di,audio:ht,settings:Ue,impact:hh,progress:Ot,ui:xe};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
