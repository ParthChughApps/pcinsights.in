(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},33:function(e,t,a){e.exports=a.p+"static/media/Pcinsights-logos_transparent.1ea83941.png"},34:function(e,t,a){e.exports=a.p+"static/media/Hero.fbf64183.png"},35:function(e,t,a){e.exports=a.p+"static/media/Whsmith.eb2cf147.png"},36:function(e,t,a){e.exports=a.p+"static/media/Blok.8ff2378b.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/AdCast.1d750551.jpeg"},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(20),l=a.n(r),s=a(5),o=a(7),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,m);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},v=a(11),u=a(3),p=a.n(u),h=a(16),b=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(v.a)(a,2),l=r[0],s=r[1],o=Object(i.useState)([]),c=Object(v.a)(o,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:p.a.func.isRequired};var f=b,E=a(13),g=a(1),N=a.n(g),w=a(10),O=["className","src","width","height","alt"],y=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,O),m=Object(i.useState)(!1),d=Object(v.a)(m,2),u=d[0],p=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:h,className:t,src:a,width:r,height:l,alt:s,onLoad:function(){p(!0)}}))};y.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var j=y,x=["className"],C=function(e){var t=e.className,i=Object(c.a)(e,x),r=N()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(w.a,{to:"/"},n.a.createElement(j,{src:a(33),alt:"Open",width:100,height:100}))))},D=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],k=function(e){var t=e.className,a=(e.navPosition,e.hideNav),r=e.hideSignin,l=e.bottomOuterDivider,s=e.bottomDivider,o=Object(c.a)(e,D),m=Object(i.useState)(!1),d=Object(v.a)(m,2),u=d[0],p=d[1],h=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){return u&&f(),document.addEventListener("keydown",g),document.addEventListener("click",O),function(){document.removeEventListener("keydown",g),document.removeEventListener("click",O),E()}}));var f=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",p(!0)},E=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),p(!1)},g=function(e){u&&27===e.keyCode&&E()},O=function(e){h.current&&u&&!h.current.contains(e.target)&&e.target!==b.current&&E()},y=N()("site-header",l&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},o,{className:y}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:N()("site-header-inner",s&&"has-bottom-divider")},n.a.createElement(C,null),!a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:u?E:f},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:h,className:N()("header-nav",u&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},!r&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(w.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:E},"Sign up")))))))))};k.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var L=k,A=["className"],P=function(e){var t=e.className,a=Object(c.a)(e,A),i=N()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(w.a,{to:"#0"},"Contact")),n.a.createElement("li",null,n.a.createElement(w.a,{to:"#0"},"About us")),n.a.createElement("li",null,n.a.createElement(w.a,{to:"#0"},"FAQ's")),n.a.createElement("li",null,n.a.createElement(w.a,{to:"#0"},"Support"))))},H=["className"],S=function(e){var t=e.className,a=Object(c.a)(e,H),i=N()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/company/pcinsights/about/"},n.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"},n.a.createElement("title",null,"LinkedIn"),n.a.createElement("path",{d:"M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/ParthCh61810784"},n.a.createElement("svg",{width:"30px",height:"30px",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/pcinsights.in/"},n.a.createElement("svg",{viewBox:"0 0 32 32",width:"32px",height:"32px",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("path",{d:"M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"}))))))},B=["className","topOuterDivider","topDivider"],M=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,B),l=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(C,null),n.a.createElement(S,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(P,null),n.a.createElement("div",{className:"footer-copyright"},"Made by ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};M.defaultProps={topOuterDivider:!1,topDivider:!1};var F=M,T=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(L,{hideSignin:!0,navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(F,null))},W=a(4),z={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},I={types:Object(W.a)({},z.types),defaults:Object(W.a)({},z.defaults)},_={types:Object(W.a)(Object(W.a)({},z.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(W.a)(Object(W.a)({},z.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},R={types:Object(W.a)(Object(W.a)({},z.types),{},{pushLeft:p.a.bool}),defaults:Object(W.a)(Object(W.a)({},z.defaults),{},{pushLeft:!1})},G=["className","tag","color","size","loading","wide","wideMobile","disabled"],V=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,G),v=N()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};V.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var q=["className","children","handleClose","show","closeHidden","video","videoTag"],Z=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,q);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=N()("modal",l&&"is-active",o&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},o?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:o})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};Z.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var K=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],J=Object(W.a)({},I.defaults),U=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,K),p=Object(i.useState)(!1),h=Object(v.a)(p,2),b=(h[0],h[1],N()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t)),f=N()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},u,{className:b}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:f},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"PCI ",n.a.createElement("span",{className:"text-color-primary"})),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Get Your Dream website or App"))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement(j,{className:"has-shadow",src:a(34),alt:"Hero"})))))};U.defaultProps=J;var Y=U,Q=["className","data","children","tag"],$=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,Q),s=N()("section-header",t),o=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};$.defaultProps={children:null,tag:"h2"};var X=$,ee=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],te=Object(W.a)({},R.defaults),ae=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,ee),v=N()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",l&&"has-bottom-divider"),p=N()("tiles-wrap center-content",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(X,{data:{title:"Get access to a cutting-edge Tech Stack",paragraph:"Technology is constantly evolving, and staying updated with the latest tech can be challenging. PCI uses the latest tools and technologies to ensure you don\u2019t miss out on any opportunities."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"5+"),n.a.createElement("p",{className:"m-0 text-sm"},"years of industry experience")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"15+"),n.a.createElement("p",{className:"m-0 text-sm"},"projects successfully delivered")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"7+"),n.a.createElement("p",{className:"m-0 text-sm"},"industries served"))))))))};ae.defaultProps=te;var ie=ae,ne=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],re=Object(W.a)({},_.defaults),le=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(c.a)(e,ne),b=N()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=N()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:b}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(X,{data:{title:"Seamless scalability with your own tech team",paragraph:"Whether you\u2019re looking for a full-fledged team to support large-scale projects or developers to help you with a small project, we\u2019ve got you covered."},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"PWA"),n.a.createElement("h3",{className:"mt-0 mb-12"},"WHSmith"),n.a.createElement("p",{className:"m-0"},"We helped WHSmith to lift and shift of their existing website to a better PWA App using Mobify's PWA kit and Salesforce's Commerce API to improve its overall performance and sales.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(35),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Multi-Purpose Apps"),n.a.createElement("h3",{className:"mt-0 mb-12"},"BlokPass and BlokVerify"),n.a.createElement("p",{className:"m-0"},"We helped Blok to create applications for contact less personal information sharing and attestation using Anonymous handshake whi.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(36),alt:"Features split 02",width:528,height:400,style:{objectFit:"contain",maxHeight:"400px"}}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Marketing App"),n.a.createElement("h3",{className:"mt-0 mb-12"},"AdCast"),n.a.createElement("p",{className:"m-0"},"AdCast is a platform, which help the influncers to earn by sharing Ads on social media. We helped AdCast to create a platform to create Ads and publish the Ads.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(j,{src:a(37),alt:"Features split 03",width:528,height:400,style:{objectFit:"contain",maxHeight:"400px"}})))))))};le.defaultProps=re;var se=le,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ce=Object(W.a)({},R.defaults),me=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,oe),v=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),p=N()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(X,{data:{title:"Effortless cooperation, communication and collaboration",paragraph:"We prioritize communication to ensure that we\u2019re on the same page as you. We provide weekly status reports to keep you updated."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I had a chance to work along side Parth during our engineering years. I felt motivated and astounded by his zeal to complete each project with such competence. He is one of the best team player who is enthusiastic, talented passionate and sure about his goals in life..")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Aekansh Gupta"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},"Data Scientist")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Parth is highly dedicated to every project he undertakes. He is a quick learner and a hardworking person. We have worked together in a lot of projects including our B.tech research as well as our company project training. He has developed a good amount of expertise in full stack development..")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Mihir Kavishwar"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},"Senior Associate Software Engineer at MathWorks")))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Parth is an amazing professional, very hardworking and extremely talented who brings all of the skills and expertise in programming and systems security. He is a very productive person and is multi-skilled with vast knowledge. He is also careful, proactive, self motivated and intelligent team player. I highly recommend him and am certain he would be a valuable asset for any company.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Nisha Vachhani"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},"Compliance | Operations"))))))))};me.defaultProps=ce;var de=me,ve=["className","children","labelHidden","id"],ue=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,l=Object(c.a)(e,ve),s=N()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},l,{className:s,htmlFor:r}),a)};ue.defaultProps={children:null,labelHidden:!1,id:null};var pe=ue,he=["children","className","status"],be=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,he),l=N()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:l}),t)};be.defaultProps={children:null,status:!1};var fe=be,Ee=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],ge=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,l=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,E=Object(c.a)(e,Ee),g=N()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),w=N()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),O="textarea"===l?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(pe,{labelHidden:r,id:E.id},i),n.a.createElement("div",{className:g},n.a.createElement(O,Object.assign({},E,{type:"textarea"!==l?l:null,className:w,name:s,disabled:m,value:d,placeholder:h,rows:"textarea"===l?b:null})),a),f&&n.a.createElement(fe,{status:o},f))};ge.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var Ne=ge,we=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Oe=Object(W.a)(Object(W.a)({},I.defaults),{},{split:!1}),ye=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,we),v=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(Ne,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ye.defaultProps=Oe;var je=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,{className:"illustration-section-01"}),n.a.createElement(ie,null),n.a.createElement(se,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(de,{topDivider:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var xe=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(d,{exact:!0,path:"/",component:je,layout:T}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);var Ce=Object(o.a)();l.a.render(n.a.createElement(s.b,{history:Ce},n.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d55c8cc6.chunk.js.map