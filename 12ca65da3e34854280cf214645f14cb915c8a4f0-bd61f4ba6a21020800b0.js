"use strict";(self.webpackChunk_3dar=self.webpackChunk_3dar||[]).push([[949],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),l=new RegExp(n.source+s.source,"gu"),c=new RegExp("\\d+"+s.source,"gu"),o=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),o=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?o(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,l=!1;for(let c=0;c<e.length;c++){const o=e[c];n&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),n=!1,l=i,i=!0,c++):i&&l&&a.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),l=i,i=!1,n=!0):(n=r(o)===o&&s(o)!==o,l=i,i=s(o)===o&&r(o)!==o)}return e})(e,n,o)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,c.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return y},S:function(){return W},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return m},h:function(){return c}});var r=a(7294),s=(a(3204),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function m(e,t,a,r,s,n,l,c){const o={};n&&(o.backgroundColor=n,"fixed"===a?(o.width=r,o.height=s,o.backgroundColor=n,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),l&&(o.objectFit=l),c&&(o.objectPosition=c);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const g=["children"],u=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,g);return r.createElement(r.Fragment,null,r.createElement(u,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:c}=e,o=l(e,f);return r.createElement("img",i({},o,{decoding:"async",loading:s,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:n}))},h=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=l(e,b);const c=n.sizes||(null==t?void 0:t.sizes),o=r.createElement(w,i({},n,t,{sizes:c,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:c})})),o):o};var x;w.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},h.displayName="Picture",h.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const v=["fallback"],y=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(h,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};y.displayName="Placeholder",y.propTypes={fallback:s.string,sources:null==(x=h.propTypes)?void 0:x.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(h,i({},e)),r.createElement("noscript",null,r.createElement(h,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=h.propTypes;const _=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],R=["style","className"],k=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:n().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],D=["style","className"],C=new Set;let I,L;const z=function(e){let{as:t="div",image:s,style:n,backgroundColor:d,className:m,class:g,onStartLoad:u,onLoad:p,onError:f}=e,b=l(e,S);const{width:w,height:h,layout:x}=s,v=o(w,h,x),{style:y,className:E}=v,_=l(v,D),R=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);g&&(m=g);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(x,w,h);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=R.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(k);if(L&&C.has(k))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;R.current&&(R.current.innerHTML=a(i({isLoading:!0,isLoaded:C.has(k),image:s},b)),C.has(k)||(t=requestAnimationFrame((()=>{R.current&&(r=l(R.current,k,C,n,u,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{C.has(k)&&L&&(R.current.innerHTML=L(i({isLoading:C.has(k),isLoaded:C.has(k),image:s},b)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},_,{style:i({},y,n,{backgroundColor:d}),className:E+(m?" "+m:""),ref:R,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));j.propTypes=A,j.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function T(e){return function(t){let{src:a,__imageData:s,__error:n}=t,c=l(t,O);return n&&console.warn(n),s?r.createElement(e,i({image:s},c)):(console.warn("Image not loaded",a),null)}}const q=T((function(e){let{as:t="div",className:a,class:s,style:n,image:c,loading:g="lazy",imgClassName:u,imgStyle:f,backgroundColor:b,objectFit:w,objectPosition:h}=e,x=l(e,_);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),f=i({objectFit:w,objectPosition:h,backgroundColor:b},f);const{width:v,height:N,layout:A,images:S,placeholder:D,backgroundColor:C}=c,I=o(v,N,A),{style:L,className:z}=I,j=l(I,R),O={fallback:void 0,sources:[]};return S.fallback&&(O.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?k(S.fallback.srcSet):void 0})),S.sources&&(O.sources=S.sources.map((e=>i({},e,{srcSet:k(e.srcSet)})))),r.createElement(t,i({},j,{style:i({},L,n,{backgroundColor:b}),className:z+(a?" "+a:"")}),r.createElement(p,{layout:A,width:v,height:N},r.createElement(y,i({},m(D,!1,A,v,N,C,w,h))),r.createElement(E,i({"data-gatsby-image-ssr":"",className:u},x,d("eager"===g,!1,O,g,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),M={src:n().string.isRequired,alt:N,width:P,height:P,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=M;const W=T(j);W.displayName="StaticImage",W.propTypes=M},9821:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),s=a(4160);const n={round:"rounded-[12px]",roundless:"rounded-[4px]"},i={fill:{blue_gray_100:"bg-blue_gray-100 text-black-900_01"}},l={xs:"p-1"},c=e=>{var t;let{children:a,className:s="",leftIcon:c,rightIcon:o,shape:d="round",size:m="xs",variant:g="fill",color:u="blue_gray_100",...p}=e;return r.createElement("button",Object.assign({className:s+" "+(d&&n[d]||"")+" "+(m&&l[m]||"")+" "+(g&&(null===(t=i[g])||void 0===t?void 0:t[u])||"")},p),!!c&&c,a,!!o&&o)},o={txtInterBold40:"font-bold font-inter",txtInterRegular10WhiteA700:"font-inter font-normal",txtInterRegular32:"font-inter font-normal",txtInterRegular10:"font-inter font-normal",txtInterRegular11:"font-inter font-normal",txtInterRegular12:"font-inter font-normal",txtInterRegular24:"font-inter font-normal",txtInterRegular8:"font-inter font-normal",txtInterRegular14:"font-inter font-normal",txtInterRegular16:"font-inter font-normal"},d=e=>{let{children:t,className:a="",size:s,as:n,...i}=e;const l=n||"p";return r.createElement(l,Object.assign({className:"text-left "+a+" "+(s&&o[s])},i),t)};var m=a(8032);const g=()=>r.createElement("div",{className:"navigationBox flex justify-between "},r.createElement("div",{className:"flex md:flex-21 flex-col gap-[15px] sm:hidden items-end justify-end md:ml-[0]  ml-[675px] md:mt-0 mt-1.5 w-[40%]"},r.createElement("div",{className:"flex flex-row gap-[25px] justify-between w-full"},r.createElement(c,{className:"cursor-pointer font-bold sm:hidden leading-[normal] min-w-[82px]  text-center text-sm"},r.createElement(s.rU,{to:"/"},"Home")),r.createElement(c,{className:"cursor-pointer font-bold leading-[normal] min-w-[82px] text-center text-sm"},r.createElement(s.rU,{to:"/blog"},"Posts")),r.createElement(c,{className:"cursor-pointer font-bold leading-[normal] min-w-[82px] text-center text-sm"},r.createElement(s.rU,{to:"/about"},"About"))),r.createElement(s.rU,{to:"https://www.instagram.com/anakenr/"},r.createElement(m.S,{className:"h-6 w-6 ",src:"../../images/img_bxlinstagramsvg.svg",alt:"Instagram navigation link",__imageData:a(3012)})))),u=()=>r.createElement("footer",{className:"bg-gray-900 md:px-5 w-full py-10"},r.createElement("div",{className:"grid grid-cols-3 px-2  m-auto w-[60%]"},r.createElement("ul",{className:"flex flex-col gap-3  mb-16 md:w-full"},r.createElement("li",null,r.createElement("a",{href:"#",className:"text-sm text-white-A700"},r.createElement(d,{size:"txtInterRegular14"},r.createElement(s.rU,{to:"/"},"Home")))),r.createElement("li",null,r.createElement("a",{href:"#",className:"text-sm text-white-A700"},r.createElement(d,{size:"txtInterRegular14"},r.createElement(s.rU,{to:"/blog"},"Posts")))),r.createElement("li",null,r.createElement("a",{href:"#",className:"text-sm text-white-A700"},r.createElement(d,{size:"txtInterRegular14"},r.createElement(s.rU,{to:"/about"},"About")))),r.createElement("li",null,r.createElement("a",{href:"#",className:"text-sm text-white-A700"},r.createElement(d,{size:"txtInterRegular14"},r.createElement(s.rU,{to:"/links"},"Links"))))),r.createElement("div",{className:"col-start-3 col-end-4 flex flex-col  gap-[11px] items-end pt-10"},r.createElement("div",{className:"flex flex-row gap-[11px] items-start justify-between "},r.createElement("div",{className:"flex flex-col h-6 items-center justify-start w-6"},r.createElement(s.rU,{to:"https://www.instagram.com/anakenr/"},r.createElement(m.S,{className:"h-6 w-6",src:"../../images/img_bxltwittersvg.svg",alt:"bxltwittersvg",__imageData:a(7915)}))),r.createElement("div",{className:"flex flex-col h-6 items-center justify-start w-6"},r.createElement(s.rU,{to:"https://www.instagram.com/anakenr/"},r.createElement(m.S,{className:"h-6 w-6",src:"../../images/img_bxllinkedinsquaresvg.svg",alt:"bxllinkedinsqua",__imageData:a(1115)}))),r.createElement(s.rU,{to:"https://www.instagram.com/anakenr/"},r.createElement(m.S,{className:"h-6 w-6",src:"../../images/img_bxlinstagramsvg.svg",alt:"bxlinstagramsvg_One",__imageData:a(30)})))),r.createElement(d,{className:"col-start-2 col-end-3 text-[11px] text-white-A700  md:w-full",size:"txtInterRegular11"},"(C) 2024 3DAR blog by Ruslan Ausiannikau. Powered by Gatsby.")));var p=e=>{let{pageTitle:t,children:n}=e;(0,s.K2)("3159585216");return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-blue_gray-800 flex flex-col font-inter gap-10 items-center justify-start mx-auto w-full"},r.createElement("div",{id:"header",className:"h-[423px] mx-auto w-full"},r.createElement(m.S,{className:"h-[423px] m-auto object-cover w-full",src:"../../images/img_rectangle1.png",alt:"rectangleOne",__imageData:a(9428)}),r.createElement("header",{className:"absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[5%] w-full"},r.createElement("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-center w-full"},r.createElement("div",{className:"header-row mb-[22px]"},r.createElement(d,{className:"sm:text-4xl md:text-[38px] text-[40px] text-gray-200",size:"txtInterBold40"},"3DAR"),r.createElement("div",{className:"mobileMenu hidden md:flex-col"},r.createElement("div",null,"9"),r.createElement("div",null,"2"),r.createElement("div",null,"3"))),r.createElement(g,null)))),r.createElement("main",null,r.createElement("h1",{className:"layout-module--heading--f04bf"},t),n),r.createElement(u,null)))}},3785:function(e,t,a){var r=a(7294),s=a(4160);t.Z=e=>{let{title:t}=e;const a=(0,s.K2)("3000541721");return r.createElement(r.Fragment,null,r.createElement("title",null,t," | ",a.site.siteMetadata.title),r.createElement("meta",{name:"description",content:a.site.siteMetadata.description}))}},30:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/e4605/img_bxlinstagramsvg.svg","srcSet":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/99c53/img_bxlinstagramsvg.svg 6w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/3dc2d/img_bxlinstagramsvg.svg 12w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/e4605/img_bxlinstagramsvg.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/eee53/img_bxlinstagramsvg.webp 6w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/30aa9/img_bxlinstagramsvg.webp 12w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/4e704/img_bxlinstagramsvg.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},3012:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/e4605/img_bxlinstagramsvg.svg","srcSet":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/99c53/img_bxlinstagramsvg.svg 6w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/3dc2d/img_bxlinstagramsvg.svg 12w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/e4605/img_bxlinstagramsvg.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/3DAR/static/31ee30166c38dfeb5013545a05f4d101/eee53/img_bxlinstagramsvg.webp 6w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/30aa9/img_bxlinstagramsvg.webp 12w,\\n/3DAR/static/31ee30166c38dfeb5013545a05f4d101/4e704/img_bxlinstagramsvg.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},7915:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/e4605/img_bxltwittersvg.svg","srcSet":"/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/99c53/img_bxltwittersvg.svg 6w,\\n/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/3dc2d/img_bxltwittersvg.svg 12w,\\n/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/e4605/img_bxltwittersvg.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/eee53/img_bxltwittersvg.webp 6w,\\n/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/30aa9/img_bxltwittersvg.webp 12w,\\n/3DAR/static/b9dadde272a6c7e8a5b2215e62d49cd1/4e704/img_bxltwittersvg.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},1115:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/e4605/img_bxllinkedinsquaresvg.svg","srcSet":"/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/99c53/img_bxllinkedinsquaresvg.svg 6w,\\n/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/3dc2d/img_bxllinkedinsquaresvg.svg 12w,\\n/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/e4605/img_bxllinkedinsquaresvg.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/eee53/img_bxllinkedinsquaresvg.webp 6w,\\n/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/30aa9/img_bxllinkedinsquaresvg.webp 12w,\\n/3DAR/static/86e38a9bc18667e927ee99d9c66e018d/4e704/img_bxllinkedinsquaresvg.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},9428:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182838","images":{"fallback":{"src":"/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/ad2e8/img_rectangle1.png","srcSet":"/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/2a3fd/img_rectangle1.png 1080w,\\n/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/85cf3/img_rectangle1.png 2160w,\\n/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/ad2e8/img_rectangle1.png 4320w","sizes":"(min-width: 4320px) 4320px, 100vw"},"sources":[{"srcSet":"/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/30cd4/img_rectangle1.webp 1080w,\\n/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/2169c/img_rectangle1.webp 2160w,\\n/3DAR/static/87d7b5d6acd7edbfc6705975cdcbea0d/fff7b/img_rectangle1.webp 4320w","type":"image/webp","sizes":"(min-width: 4320px) 4320px, 100vw"}]},"width":4320,"height":1269}')}}]);
//# sourceMappingURL=12ca65da3e34854280cf214645f14cb915c8a4f0-bd61f4ba6a21020800b0.js.map