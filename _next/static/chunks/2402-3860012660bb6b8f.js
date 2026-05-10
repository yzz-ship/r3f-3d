"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2402],{371:(e,a,r)=>{r.d(a,{Y:()=>s});var i=r(3264);class s extends i.BRH{constructor(e){super(e),this.type=i.ix0}parse(e){let a,r,s,t=function(e,a){switch(e){case 1:throw Error("THREE.RGBELoader: Read Error: "+(a||""));case 2:throw Error("THREE.RGBELoader: Write Error: "+(a||""));case 3:throw Error("THREE.RGBELoader: Bad File Format: "+(a||""));default:throw Error("THREE.RGBELoader: Memory Error: "+(a||""))}},n=function(e,a,r){a=a||1024;let i=e.pos,s=-1,t=0,n="",o=String.fromCharCode.apply(null,new Uint16Array(e.subarray(i,i+128)));for(;0>(s=o.indexOf("\n"))&&t<a&&i<e.byteLength;)n+=o,t+=o.length,i+=128,o+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(i,i+128)));return -1<s&&(!1!==r&&(e.pos+=t+s+1),n+o.slice(0,s))},o=new Uint8Array(e);o.pos=0;let c=function(e){let a,r,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,c=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,l={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};for(!(e.pos>=e.byteLength)&&(a=n(e))||t(1,"no header found"),(r=a.match(/^#\?(\S+)/))||t(3,"bad initial token"),l.valid|=1,l.programtype=r[1],l.string+=a+"\n";!1!==(a=n(e));){if(l.string+=a+"\n","#"===a.charAt(0)){l.comments+=a+"\n";continue}if((r=a.match(i))&&(l.gamma=parseFloat(r[1])),(r=a.match(s))&&(l.exposure=parseFloat(r[1])),(r=a.match(o))&&(l.valid|=2,l.format=r[1]),(r=a.match(c))&&(l.valid|=4,l.height=parseInt(r[1],10),l.width=parseInt(r[2],10)),2&l.valid&&4&l.valid)break}return 2&l.valid||t(3,"missing format specifier"),4&l.valid||t(3,"missing image size specifier"),l}(o),l=c.width,d=c.height,m=function(e,a,r){if(a<8||a>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);a!==(e[2]<<8|e[3])&&t(3,"wrong scanline width");let i=new Uint8Array(4*a*r);i.length||t(4,"unable to allocate buffer space");let s=0,n=0,o=4*a,c=new Uint8Array(4),l=new Uint8Array(o),d=r;for(;d>0&&n<e.byteLength;){n+4>e.byteLength&&t(1),c[0]=e[n++],c[1]=e[n++],c[2]=e[n++],c[3]=e[n++],(2!=c[0]||2!=c[1]||(c[2]<<8|c[3])!=a)&&t(3,"bad rgbe scanline format");let r=0,m;for(;r<o&&n<e.byteLength;){let a=(m=e[n++])>128;if(a&&(m-=128),(0===m||r+m>o)&&t(3,"bad scanline data"),a){let a=e[n++];for(let e=0;e<m;e++)l[r++]=a}else l.set(e.subarray(n,n+m),r),r+=m,n+=m}for(let e=0;e<a;e++){let r=0;i[s]=l[e+r],r+=a,i[s+1]=l[e+r],r+=a,i[s+2]=l[e+r],r+=a,i[s+3]=l[e+r],s+=4}d--}return i}(o.subarray(o.pos),l,d);switch(this.type){case i.RQf:let f=new Float32Array(4*(s=m.length/4));for(let e=0;e<s;e++)!function(e,a,r,i){let s=Math.pow(2,e[a+3]-128)/255;r[i+0]=e[a+0]*s,r[i+1]=e[a+1]*s,r[i+2]=e[a+2]*s,r[i+3]=1}(m,4*e,f,4*e);a=f,r=i.RQf;break;case i.ix0:let h=new Uint16Array(4*(s=m.length/4));for(let e=0;e<s;e++)!function(e,a,r,s){let t=Math.pow(2,e[a+3]-128)/255;r[s+0]=i.GxU.toHalfFloat(Math.min(e[a+0]*t,65504)),r[s+1]=i.GxU.toHalfFloat(Math.min(e[a+1]*t,65504)),r[s+2]=i.GxU.toHalfFloat(Math.min(e[a+2]*t,65504)),r[s+3]=i.GxU.toHalfFloat(1)}(m,4*e,h,4*e);a=h,r=i.ix0;break;default:throw Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:d,data:a,header:c.string,gamma:c.gamma,exposure:c.exposure,type:r}}setDataType(e){return this.type=e,this}load(e,a,r,s){return super.load(e,function(e,r){switch(e.type){case i.RQf:case i.ix0:"colorSpace"in e?e.colorSpace="srgb-linear":e.encoding=3e3,e.minFilter=i.k6q,e.magFilter=i.k6q,e.generateMipmaps=!1,e.flipY=!0}a&&a(e,r)},r,s)}}},1664:(e,a,r)=>{r.d(a,{A:()=>u});var i=r(7431),s=r(3264);let t=`
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_FragNormal
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`,n=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,o=`
    varying mat4 csm_internal_vModelViewMatrix;
`,c=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,l=`
    varying mat4 csm_internal_vModelViewMatrix;
`,d=`
    
`,m={diffuse:"csm_DiffuseColor",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",fragNormal:"csm_FragNormal",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",transmission:"csm_Transmission",thickness:"csm_Thickness",iridescence:"csm_Iridescence",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",unlitFac:"csm_UnlitFac",position:"csm_Position",positionRaw:"csm_PositionRaw",normal:"csm_Normal"},f={[`${m.position}`]:"*",[`${m.positionRaw}`]:"*",[`${m.normal}`]:"*",[`${m.depthAlpha}`]:"*",[`${m.pointSize}`]:["PointsMaterial"],[`${m.diffuse}`]:"*",[`${m.fragColor}`]:"*",[`${m.fragNormal}`]:"*",[`${m.unlitFac}`]:"*",[`${m.emissive}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${m.roughness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${m.metalness}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${m.iridescence}`]:["MeshStandardMaterial","MeshPhysicalMaterial"],[`${m.ao}`]:["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"],[`${m.clearcoat}`]:["MeshPhysicalMaterial"],[`${m.clearcoatRoughness}`]:["MeshPhysicalMaterial"],[`${m.clearcoatNormal}`]:["MeshPhysicalMaterial"],[`${m.transmission}`]:["MeshPhysicalMaterial"],[`${m.thickness}`]:["MeshPhysicalMaterial"]},h={"*":{"#include <lights_physical_fragment>":i.ShaderChunk.lights_physical_fragment,"#include <transmission_fragment>":i.ShaderChunk.transmission_fragment},[`${m.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${m.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${m.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${m.position};
  `},[`${m.positionRaw}`]:{"#include <project_vertex>":`
    #include <project_vertex>
    gl_Position = ${m.positionRaw};
  `},[`${m.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${m.pointSize};
    `},[`${m.diffuse}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${m.diffuse};
  `},[`${m.fragColor}`]:{"#include <opaque_fragment>":`
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${m.fragColor}, ${m.unlitFac});
  `},[`${m.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${m.emissive};
    `},[`${m.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${m.roughness};
    `},[`${m.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${m.metalness};
    `},[`${m.ao}`]:{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${m.ao};
    `},[`${m.fragNormal}`]:{"#include <normal_fragment_maps>":`
      #include <normal_fragment_maps>
      normal = ${m.fragNormal};
    `},[`${m.depthAlpha}`]:{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${m.depthAlpha} );
    `,"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      if(${m.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,"gl_FragColor = packDepthToRGBA( dist );":`
      if(${m.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `},[`${m.clearcoat}`]:{"material.clearcoat = clearcoat;":`material.clearcoat = ${m.clearcoat};`},[`${m.clearcoatRoughness}`]:{"material.clearcoatRoughness = clearcoatRoughness;":`material.clearcoatRoughness = ${m.clearcoatRoughness};`},[`${m.clearcoatNormal}`]:{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `},[`${m.transmission}`]:{"material.transmission = transmission;":`
      material.transmission = ${m.transmission};
    `},[`${m.thickness}`]:{"material.thickness = thickness;":`
      material.thickness = ${m.thickness};
    `},[`${m.iridescence}`]:{"material.iridescence = iridescence;":`
      material.iridescence = ${m.iridescence};
    `}},_={clearcoat:[m.clearcoat,m.clearcoatNormal,m.clearcoatRoughness],transmission:[m.transmission],iridescence:[m.iridescence]};function S(e){return e.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,"")}class u extends s.imn{constructor({baseMaterial:e,vertexShader:a,fragmentShader:r,uniforms:i,patchMap:s,cacheKey:t,...n}){let o;if(!e)throw Error("CustomShaderMaterial: baseMaterial is required.");if(!function(e){try{new e}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}(e)?Object.assign(o=e,n):o=new e(0===Object.keys(n).length?void 0:n),["ShaderMaterial","RawShaderMaterial"].includes(o.type))throw Error(`CustomShaderMaterial does not support ${o.type} as a base material.`);super(),this.uniforms={},this.vertexShader="",this.fragmentShader="";let c=o;c.name=`CustomShaderMaterial<${o.name||o.type}>`,c.update=this.update,c.__csm={prevOnBeforeCompile:o.onBeforeCompile,baseMaterial:o,vertexShader:a,fragmentShader:r,uniforms:i,patchMap:s,cacheKey:t};let l={...c.uniforms||{},...i||{}};c.uniforms=this.uniforms=l,c.vertexShader=this.vertexShader=a||"",c.fragmentShader=this.fragmentShader=r||"",c.update({fragmentShader:c.fragmentShader,vertexShader:c.vertexShader,uniforms:c.uniforms,patchMap:s,cacheKey:t}),Object.assign(this,c);let d=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(c));for(let e in d){let a=d[e];(a.get||a.set)&&Object.defineProperty(this,e,a)}return Object.defineProperty(this,"type",{get:()=>o.type,set(e){o.type=e}}),this}update({fragmentShader:e,vertexShader:a,uniforms:r,cacheKey:i,patchMap:s}){let u=S(a||""),M=S(e||""),g=this;r&&(g.uniforms=r),a&&(g.vertexShader=a),e&&(g.fragmentShader=e),Object.entries(_).forEach(([e,a])=>{for(let r in a){let i=a[r];(M&&M.includes(i)||u&&u.includes(i))&&(g[e]||(g[e]=1))}});let p=g.__csm.prevOnBeforeCompile,A=(e,a,r)=>{let i,s="";if(a){let e=a.search(/void\s+main\s*\(\s*\)\s*{/);if(-1!==e){s=a.slice(0,e);let r=0,t=-1;for(let i=e;i<a.length;i++)if("{"===a[i]&&r++,"}"===a[i]&&0==--r){t=i;break}if(-1!==t){let r=a.slice(e,t+1);i=r.slice(r.indexOf("{")+1,-1)}}else s=a}if(r&&a&&a.includes(m.fragColor)&&i&&(i=`csm_UnlitFac = 1.0;
`+i),e.includes("//~CSM_DEFAULTS")){let a=(e=e.replace("void main() {",`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${s}
          
          void main() {
          `)).lastIndexOf("//~CSM_MAIN_END");if(-1!==a){let r=`
            ${i?`${i}`:""}
            //~CSM_MAIN_END
          `;e=e.slice(0,a)+r+e.slice(a)}}else e=e.replace(/void\s*main\s*\(\s*\)\s*{/gm,`
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${r?l:o}
          ${t}
  
          ${s}
          
          void main() {
            {
              ${n}
            }
            ${r?d:c}

            ${i?`${i}`:""}
            //~CSM_MAIN_END
          `);return e};g.onBeforeCompile=(e,a)=>{null==p||p(e,a);let i=g.type,t=i?`#define IS_${i.toUpperCase()};
`:`#define IS_UNKNOWN;
`;e.vertexShader=t+`#define IS_VERTEX
`+e.vertexShader,e.fragmentShader=t+`#define IS_FRAGMENT
`+e.fragmentShader;let n=a=>{for(let r in a){let s="*"===r||u&&u.includes(r);if("*"===r||M&&M.includes(r)||s){let s=f[r];if(s&&"*"!==s&&(Array.isArray(s)?!s.includes(i):s!==i))return void console.error(`CustomShaderMaterial: ${r} is not available in ${i}. Shader cannot compile.`);let t=a[r];for(let a in t){let r=t[a];if("object"==typeof r){let i=r.type,s=r.value;"fs"===i?e.fragmentShader=e.fragmentShader.replace(a,s):"vs"===i&&(e.vertexShader=e.vertexShader.replace(a,s))}else r&&(e.vertexShader=e.vertexShader.replace(a,r),e.fragmentShader=e.fragmentShader.replace(a,r))}}}};n(h),n(s||{}),e.vertexShader=A(e.vertexShader,u,!1),e.fragmentShader=A(e.fragmentShader,M,!0),r&&(e.uniforms={...e.uniforms,...g.uniforms}),g.uniforms=e.uniforms};let E=g.customProgramCacheKey;g.customProgramCacheKey=()=>((null==i?void 0:i())||function(e){let a=0;for(let r=0;r<e.length;r++)a=e.charCodeAt(r)+(a<<6)+(a<<16)-a;return String(a>>>0)}((u||"")+(M||"")))+(null==E?void 0:E.call(g)),g.needsUpdate=!0}clone(){return new this.constructor({baseMaterial:this.__csm.baseMaterial.clone(),vertexShader:this.__csm.vertexShader,fragmentShader:this.__csm.fragmentShader,uniforms:this.__csm.uniforms,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey})}}}}]);