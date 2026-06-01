"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1079],{82834:(e,t,r)=>{r.d(t,{mK:()=>et,s0:()=>G});var n,a,o,i,l,s,u,f=r(95155),c=r(12115),d=r(43264),p=r(44077),m=r(41004);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function g(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0],a=t[1],o=t[2],i=t[3],l=t[4],s=t[5],u=t[6],f=t[7],c=t[8];return n*l*c+a*s*u+o*i*f-o*l*u-a*i*c-n*s*f}function _(e,t){for(var r=[],n=e.toArray(),a=t.toArray(),o=0;o<n.length;o++)r[o]=n[o]+a[o];return new d.dwI().fromArray(r)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return o}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t,r){return(M=b()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&y(a,r.prototype),a}).apply(null,arguments)}function j(e){var t=P(e[0],2),r=t[0],n=t[1],a=P(e[1],2),o=a[0],i=a[1],l=P(e[2],2);return g(r,n,1,o,i,1,l[0],l[1],1)}var S=new d.I9Y,O=new d.I9Y;function A(e){return e*e*e*(e*(6*e-15)+10)}function C(e,t,r){return e*(1-r)+t*r}function R(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var I=function e(t,r,n){var a=this;R(this,e),h(this,"dot2",function(e,t){return a.x*e+a.y*t}),h(this,"dot3",function(e,t,r){return a.x*e+a.y*t+a.z*r}),this.x=t,this.y=r,this.z=n},E=[new I(1,1,0),new I(-1,1,0),new I(1,-1,0),new I(-1,-1,0),new I(1,0,1),new I(-1,0,1),new I(1,0,-1),new I(-1,0,-1),new I(0,1,1),new I(0,-1,1),new I(0,1,-1),new I(0,-1,-1)],T=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],z=Array(512),B=Array(512),k=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,r=0;r<256;r++)t=1&r?T[r]^255&e:T[r]^e>>8&255,z[r]=z[r+256]=t,B[r]=B[r+256]=E[t%12]};k(0);var F=.5*(Math.sqrt(3)-1),L=(3-Math.sqrt(3))/6,q=1/3,D=1/6;function N(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var r=0;r<t.length;r++)e=(e+(r+1)*(t.charCodeAt(r)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var r=this;R(this,e),h(this,"seed",0),h(this,"init",function(e){r.seed=e,r.value=N(e)}),h(this,"value",N(this.seed)),this.init(t)}(Math.random());var U=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)};function H(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.25,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.01,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:U,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:.001,s="velocity_"+t;if(void 0===e.__damp&&(e.__damp={}),void 0===e.__damp[s]&&(e.__damp[s]=0),Math.abs(e[t]-r)<=l)return e[t]=r,!1;var u=2/(n=Math.max(1e-4,n)),f=i(u*a),c=e[t]-r,d=r,p=o*n;c=Math.min(Math.max(c,-p),p),r=e[t]-c;var m=(e.__damp[s]+u*c)*a;e.__damp[s]=(e.__damp[s]-u*m)*f;var h=r+(c+m)*f;return d-e[t]>0==h>d&&(h=d,e.__damp[s]=(h-d)/a),e[t]=h,!0}var W=new d.Pq0;var Y=new d.PTz,Q=new d.IUQ,X=new d.IUQ,$=new d.IUQ;function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}d.LoY;r(94687);let K=(0,c.createContext)(null),V=e=>(2&e.getAttributes())==2,G=(0,c.memo)((0,c.forwardRef)(({children:e,camera:t,scene:r,resolutionScale:n,enabled:a=!0,renderPriority:o=1,autoClear:i=!0,depthBuffer:l,enableNormalPass:s,stencilBuffer:u,multisampling:h=8,frameBufferType:v=d.ix0},y)=>{let{gl:b,scene:g,camera:_,size:w}=(0,p.C)(),x=r||g,P=t||_,[M,j,S]=(0,c.useMemo)(()=>{let e=new m.s0(b,{depthBuffer:l,stencilBuffer:u,multisampling:h,frameBufferType:v});e.addPass(new m.AH(x,P));let t=null,r=null;return s&&((r=new m.Xe(x,P)).enabled=!1,e.addPass(r),void 0!==n&&((t=new m.SP({normalBuffer:r.texture,resolutionScale:n})).enabled=!1,e.addPass(t))),[e,r,t]},[P,b,l,u,h,v,x,s,n]);(0,c.useEffect)(()=>M?.setSize(w.width,w.height),[M,w]),(0,p.D)((e,t)=>{if(a){let e=b.autoClear;b.autoClear=i,u&&!i&&b.clearStencil(),M.render(t),b.autoClear=e}},a?o:0);let O=(0,c.useRef)(null);(0,c.useLayoutEffect)(()=>{let e=[],t=O.current.__r3f;if(t&&M){let r=t.children;for(let t=0;t<r.length;t++){let n=r[t].object;if(n instanceof m.Mj){let a=[n];if(!V(n)){let e=null;for(;(e=r[t+1]?.object)instanceof m.Mj&&!V(e);)a.push(e),t++}let o=new m.Vu(P,...a);e.push(o)}else n instanceof m.oF&&e.push(n)}for(let t of e)M?.addPass(t);j&&(j.enabled=!0),S&&(S.enabled=!0)}return()=>{for(let t of e)M?.removePass(t);j&&(j.enabled=!1),S&&(S.enabled=!1)}},[M,e,P,j,S]),(0,c.useEffect)(()=>{let e=b.toneMapping;return b.toneMapping=d.y_p,()=>{b.toneMapping=e}},[b]);let A=(0,c.useMemo)(()=>({composer:M,normalPass:j,downSamplingPass:S,resolutionScale:n,camera:P,scene:x}),[M,j,S,n,P,x]);return(0,c.useImperativeHandle)(y,()=>M,[M]),(0,f.jsx)(K.Provider,{value:A,children:(0,f.jsx)("group",{ref:O,children:e})})})),Z=0,ee=new WeakMap;m.Mj;let et=((e,t)=>function({blendFunction:r=t?.blendFunction,opacity:n=t?.opacity,...a}){let o=ee.get(e);if(!o){let t=`@react-three/postprocessing/${e.name}-${Z++}`;(0,p.e)({[t]:e}),ee.set(e,o=t)}let i=(0,p.C)(e=>e.camera),l=c.useMemo(()=>[...t?.args??[],...a.args??[{...t,...a}]],[JSON.stringify(a)]);return(0,f.jsx)(o,{camera:i,"blendMode-blendFunction":r,"blendMode-opacity-value":n,...a,args:l})})(m.bv,{blendFunction:0});m.i,m.hH;var er=(e=>(e[e.Linear=0]="Linear",e[e.Radial=1]="Radial",e[e.MirroredLinear=2]="MirroredLinear",e))(er||{});m.Mj,m.To;let en={fragmentShader:`

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `};m.Mj;m.Mj;m.Mj},88358:(e,t,r)=>{r.d(t,{F:()=>s,o:()=>a});var n=r(43264);class a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new n.qUd(-1,1,1,-1,0,1);class i extends n.LoY{constructor(){super(),this.setAttribute("position",new n.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.qtW([0,2,0,0,2,0],2))}}let l=new i;class s{constructor(e){this._mesh=new n.eaF(l,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}}}]);