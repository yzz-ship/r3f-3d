(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2022],{518:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var i=n(5155),o=n(2115),a=n(7558),r=n(4688),s=n(5355),l=n(2660),c=n(4958),u=n(802),f=n(3264);function g(){let e="/r3f-3d",t={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};t.resolution=new f.I9Y(t.width*t.pixelRatio,t.height*t.pixelRatio),(0,o.useRef)();let{scene:n,gl:a}=(0,s.A)(),r=[(0,l.zo)("".concat(e,"/assets/textures/particles/1.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/4.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/3.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/5.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/8.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/9.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/10.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/11.png")),(0,l.zo)("".concat(e,"/assets/textures/particles/13.png"))];(0,o.useEffect)(()=>(window.addEventListener("click",p),window.addEventListener("resize",g),()=>{window.removeEventListener("click",p),window.removeEventListener("resize",g)}),[]),(0,s.C)((e,t)=>{});let g=()=>{t.width=window.innerWidth,t.height=window.innerHeight,t.pixelRatio=Math.min(window.devicePixelRatio,2),t.resolution.set(t.width*t.pixelRatio,t.height*t.pixelRatio)},p=()=>{let e=Math.round(200+1e3*Math.random()),t=new f.Pq0((Math.random()-.6)*1,.4*Math.random(),(Math.random()-.6)*1),n=.1+.05*Math.random(),i=r[Math.floor(Math.random()*r.length)],o=new f.Q1f;o.setHSL(Math.random(),1,.7),v(e,t,n,i,1.6*n,o)},v=(e,i,o,a,r,s)=>{let l=new Float32Array(3*e),c=new Float32Array(e),g=new Float32Array(e);for(let t=0;t<e;t++){let e=3*t,n=new f.YHV(r*(.75+.25*Math.random()),Math.random()*Math.PI,Math.random()*Math.PI*2),i=new f.Pq0;i.setFromSpherical(n),l[e]=i.x,l[e+1]=i.y,l[e+2]=i.z,c[t]=Math.random(),g[t]=1+Math.random()}let p=new f.LoY;p.setAttribute("position",new f.qtW(l,3)),p.setAttribute("aSize",new f.qtW(c,1)),p.setAttribute("aTimeMultiplier",new f.qtW(g,1)),a.flipY=!0;let v=new f.BKk({vertexShader:"uniform float uSize;\nuniform vec2 uResolution;\nuniform float uProgress;\n\nattribute float aSize;\nattribute float aTimeMultiplier;\n\nfloat remap(\n    float value, \n    float originMin, \n    float originMax, \n    float destinationMin, \n    float destinationMax\n){\n    return destinationMin \n        + (value - originMin) * (destinationMax - destinationMin) / (originMax - originMin);\n}\n\nvoid main()\n{\n    float progress = uProgress * aTimeMultiplier;\n    vec3 newPosition = position;\n\n    // Exploding\n    float explodingProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);\n    explodingProgress = clamp(explodingProgress, 0.0, 1.0);\n    explodingProgress = 1.0 - pow(1.0 - explodingProgress, 3.0);\n    // newPosition *= explodingProgress;\n    newPosition = mix(vec3(0.0), newPosition, explodingProgress);\n\n    // Falling\n    float fallingProgress = remap(progress, 0.1, 1.0, 0.0, 1.0);\n    fallingProgress = clamp(fallingProgress, 0.0, 1.0);\n    fallingProgress = 1.0 - pow(1.0 - fallingProgress, 3.0);\n    newPosition.y -= fallingProgress * 0.2;\n\n    // Scaling\n    float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);\n    float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);\n    float sizeProgress = min(sizeOpeningProgress, sizeClosingProgress);\n    sizeProgress = clamp(sizeProgress, 0.0, 1.0);\n\n    // Twinkling\n    float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);\n    twinklingProgress = clamp(twinklingProgress, 0.0, 1.0);\n    float sizeTwinkling = sin(progress * 40.0) * 0.5 + 0.5;\n    sizeTwinkling = 1.0 - sizeTwinkling * twinklingProgress;\n\n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    gl_Position = projectionMatrix * viewPosition;\n    \n    // Final size\n    gl_PointSize = uSize * uResolution.y * aSize * sizeProgress * sizeTwinkling;\n    gl_PointSize *= 1.0 / - viewPosition.z;\n    \n    if(gl_PointSize < 1.0)\n        gl_Position = vec4(9999.9);\n}",fragmentShader:"uniform sampler2D uTexture;\nuniform vec3 uColor;\n\nvoid main()\n{\n    float textureAlpha = texture(uTexture, gl_PointCoord).r;\n\n    // Final color\n    gl_FragColor = vec4(uColor, textureAlpha);\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n}",uniforms:{uSize:new f.nc$(o),uResolution:new f.nc$(t.resolution),uTexture:new f.nc$(a),uColor:new f.nc$(s),uProgress:new f.nc$(0)},transparent:!0,depthWrite:!1,blending:f.EZo}),d=new f.ONl(p,v);d.position.copy(i),n.add(d),u.Ay.to(v.uniforms.uProgress,{value:1,ease:"linear",duration:3,onComplete:()=>{n.remove(d),p.dispose(),v.dispose()}})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.m,{distance:45e4,sunPosition:[0,-1,0],inclination:0,azimuth:180,mieCoefficient:.005,mieDirectionalG:.95,rayleigh:3,turbidity:10})})}function p(){return(0,i.jsxs)(a.Hl,{dpr:[1.5,2],gl:{antialias:!0},camera:{fov:25,near:.1,far:100,position:[1.5,0,.6]},fallback:(0,i.jsx)("div",{children:"Sorry no WebGL supported!"}),children:[(0,i.jsx)(r.N,{enableDamping:!0,dampingFactor:.05}),(0,i.jsx)(o.Suspense,{fallback:null,children:(0,i.jsx)(g,{})})]})}},2660:(e,t,n)=>{"use strict";n.d(t,{zo:()=>s});var i=n(2115),o=n(3264),a=n(5355);let r=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function s(e,t){let n=(0,a.A)(e=>e.gl),s=(0,a.F)(o.Tap,r(e)?Object.values(e):e);return(0,i.useLayoutEffect)(()=>{null==t||t(s)},[t]),(0,i.useEffect)(()=>{if("initTexture"in n){let e=[];Array.isArray(s)?e=s:s instanceof o.gPd?e=[s]:r(s)&&(e=Object.values(s)),e.forEach(e=>{e instanceof o.gPd&&n.initTexture(e)})}},[n,s]),(0,i.useMemo)(()=>{if(!r(e))return s;{let t={},n=0;for(let i in e)t[i]=s[n++];return t}},[e,s])}s.preload=e=>a.F.preload(o.Tap,e),s.clear=e=>a.F.clear(o.Tap,e)},3625:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});let i=parseInt(n(3264).sPf.replace(/\D+/g,""))},4958:(e,t,n)=>{"use strict";n.d(t,{m:()=>g});var i=n(9630),o=n(2115),a=n(3264),r=n(3625),s=Object.defineProperty,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>(l(e,"symbol"!=typeof t?t+"":t,n),n);let u=(()=>{let e={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new a.Pq0},up:{value:new a.Pq0(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${r.r>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},t=new a.BKk({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:a.LlO.clone(e.uniforms),side:a.hsX,depthWrite:!1});class n extends a.eaF{constructor(){super(new a.iNn(1,1,1),t)}}return c(n,"SkyShader",e),c(n,"material",t),n})();function f(e,t,n=new a.Pq0){let i=Math.PI*(e-.5),o=2*Math.PI*(t-.5);return n.x=Math.cos(o),n.y=Math.sin(i),n.z=Math.sin(o),n}let g=o.forwardRef(({inclination:e=.6,azimuth:t=.1,distance:n=1e3,mieCoefficient:r=.005,mieDirectionalG:s=.8,rayleigh:l=.5,turbidity:c=10,sunPosition:g=f(e,t),...p},v)=>{let d=o.useMemo(()=>new a.Pq0().setScalar(n),[n]),[m]=o.useState(()=>new u);return o.createElement("primitive",(0,i.A)({object:m,ref:v,"material-uniforms-mieCoefficient-value":r,"material-uniforms-mieDirectionalG-value":s,"material-uniforms-rayleigh-value":l,"material-uniforms-sunPosition-value":g,"material-uniforms-turbidity-value":c,scale:d},p))})},8421:(e,t,n)=>{Promise.resolve().then(n.bind(n,518))}},e=>{var t=t=>e(e.s=t);e.O(0,[1831,9367,8413,3211,3562,4688,802,8441,1684,7358],()=>t(8421)),_N_E=e.O()}]);