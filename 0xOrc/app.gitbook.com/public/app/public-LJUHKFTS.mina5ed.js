import{b as I,c as j,d as R}from"https://app.gitbook.com/public/app/chunks/chunk-LBK3AHLG.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-M2XQXILN.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-6STEEV7T.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-K5T6F6ZW.min.js";import{Uc as E,a as O,b as x,fc as P,h as U,ya as L}from"https://app.gitbook.com/public/app/chunks/chunk-NFC43IAL.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-ITT4TNJL.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-7F5LNFNG.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-GIWRZQPT.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-CO3SYI4B.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-6N2R75FQ.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-2FN4WAEJ.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-L23CJ6WZ.min.js";import{E as M,O as Y}from"https://app.gitbook.com/public/app/chunks/chunk-EV235T2Z.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-AUVWPKSR.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-RC67YS5E.min.js";import{a as B}from"https://app.gitbook.com/public/app/chunks/chunk-3D7BTC3O.min.js";import"https://app.gitbook.com/public/app/chunks/chunk-727HUC7Y.min.js";import{g as Z,i as q,k as y}from"https://app.gitbook.com/public/app/chunks/chunk-COSHZCUI.min.js";var D=Z((N,T)=>{y();var z=function(){var _=String.fromCharCode,S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g={};function k(t,n){if(!g[t]){g[t]={};for(var a=0;a<t.length;a++)g[t][t.charAt(a)]=a}return g[t][n]}var w={compressToBase64:function(t){if(t==null)return"";var n=w._compress(t,6,function(a){return S.charAt(a)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:w._decompress(t.length,32,function(n){return k(S,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":w._compress(t,15,function(n){return _(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:w._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=w.compress(t),a=new Uint8Array(n.length*2),i=0,s=n.length;i<s;i++){var p=n.charCodeAt(i);a[i*2]=p>>>8,a[i*2+1]=p%256}return a},decompressFromUint8Array:function(t){if(t==null)return w.decompress(t);for(var n=new Array(t.length/2),a=0,i=n.length;a<i;a++)n[a]=t[a*2]*256+t[a*2+1];var s=[];return n.forEach(function(p){s.push(_(p))}),w.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":w._compress(t,6,function(n){return b.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),w._decompress(t.length,32,function(n){return k(b,t.charAt(n))}))},compress:function(t){return w._compress(t,16,function(n){return _(n)})},_compress:function(t,n,a){if(t==null)return"";var i,s,p={},h={},m="",A="",f="",u=2,v=3,c=2,l=[],o=0,e=0,d;for(d=0;d<t.length;d+=1)if(m=t.charAt(d),Object.prototype.hasOwnProperty.call(p,m)||(p[m]=v++,h[m]=!0),A=f+m,Object.prototype.hasOwnProperty.call(p,A))f=A;else{if(Object.prototype.hasOwnProperty.call(h,f)){if(f.charCodeAt(0)<256){for(i=0;i<c;i++)o=o<<1,e==n-1?(e=0,l.push(a(o)),o=0):e++;for(s=f.charCodeAt(0),i=0;i<8;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1}else{for(s=1,i=0;i<c;i++)o=o<<1|s,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=0;for(s=f.charCodeAt(0),i=0;i<16;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1}u--,u==0&&(u=Math.pow(2,c),c++),delete h[f]}else for(s=p[f],i=0;i<c;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1;u--,u==0&&(u=Math.pow(2,c),c++),p[A]=v++,f=String(m)}if(f!==""){if(Object.prototype.hasOwnProperty.call(h,f)){if(f.charCodeAt(0)<256){for(i=0;i<c;i++)o=o<<1,e==n-1?(e=0,l.push(a(o)),o=0):e++;for(s=f.charCodeAt(0),i=0;i<8;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1}else{for(s=1,i=0;i<c;i++)o=o<<1|s,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=0;for(s=f.charCodeAt(0),i=0;i<16;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1}u--,u==0&&(u=Math.pow(2,c),c++),delete h[f]}else for(s=p[f],i=0;i<c;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1;u--,u==0&&(u=Math.pow(2,c),c++)}for(s=2,i=0;i<c;i++)o=o<<1|s&1,e==n-1?(e=0,l.push(a(o)),o=0):e++,s=s>>1;for(;;)if(o=o<<1,e==n-1){l.push(a(o));break}else e++;return l.join("")},decompress:function(t){return t==null?"":t==""?null:w._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,a){var i=[],s,p=4,h=4,m=3,A="",f=[],u,v,c,l,o,e,d,r={val:a(0),position:n,index:1};for(u=0;u<3;u+=1)i[u]=u;for(c=0,o=Math.pow(2,2),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;switch(s=c){case 0:for(c=0,o=Math.pow(2,8),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;d=_(c);break;case 1:for(c=0,o=Math.pow(2,16),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;d=_(c);break;case 2:return""}for(i[3]=d,v=d,f.push(d);;){if(r.index>t)return"";for(c=0,o=Math.pow(2,m),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;switch(d=c){case 0:for(c=0,o=Math.pow(2,8),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;i[h++]=_(c),d=h-1,p--;break;case 1:for(c=0,o=Math.pow(2,16),e=1;e!=o;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=a(r.index++)),c|=(l>0?1:0)*e,e<<=1;i[h++]=_(c),d=h-1,p--;break;case 2:return f.join("")}if(p==0&&(p=Math.pow(2,m),m++),i[d])A=i[d];else if(d===h)A=v+v.charAt(0);else return null;f.push(A),i[h++]=v+A.charAt(0),p--,v=A,p==0&&(p=Math.pow(2,m),m++)}}};return w}();typeof define=="function"&&define.amd?define(function(){return z}):typeof T!="undefined"&&T!=null&&(T.exports=z)});y();var G=q(D());Y();y();var C=B("browser-compatibility");function K(){let _=["webcache.googleusercontent.com","translate.googleusercontent.com","translate.google.com"];return!window.location.hostname||_.includes(window.location.hostname)?(C.warning("The application is served over an unsupported hostname and has been made static."),!1):H()?!0:(C.warning("Your browser is missing required features, the application has been made static."),!1)}function H(){try{if("\u212B".normalize("NFKD")!=="A\u030A")return!1}catch(_){return!1}return!(!window.Intl||![].flat)}K()&&R(()=>{J()});async function J(){new URLSearchParams(window.location.search).has("jwt_token")&&window.history.replaceState({},"",window.location.pathname),U({dsn:O.sentry.dsn,release:x,projectId:O.firebase.projectId,tracesSampling:O.sentry.tracesSampling});let S=JSON.parse(window.__GITBOOK_INITIAL_PROPS__);window.location.hostname!=="localhost"&&L(S.hostname),P({customToken:S.customToken,waitUserReady:!1}),window.__GITBOOK_LAZY_MODULES__&&await E(window.__GITBOOK_LAZY_MODULES__);let b=window.__GITBOOK_INITIAL_STATE__,g=window.__GITBOOK_INITIAL_STATE_COMPRESSED__?G.default.decompress(b):b;g?(j(JSON.parse(g)),M.registerComponent("PublicContentApplication",()=>I),M.runApplication("PublicContentApplication",{hydrate:!0,rootTag:document.querySelector(".gitbook-root"),initialProps:S})):console.error("Invalid state received from server, content won't be interactive")}
//# sourceMappingURL=https://app.gitbook.com/public/app/public-LJUHKFTS.min.js.map
