(window.webpackJsonp=window.webpackJsonp||[]).push([["d7c0"],{"4LNS":function(e){e.exports={a:[{title:"Opening Ceremonies",description:"The opening ceremonies will begin on Friday, and will be held in the McMurtry Quad.",date:"Friday 5pm",image:"../../../static/mcm_commons.jpg",caption:"McMurtry Quad and Commons"},{title:"Welcome Dinner",description:"The welcome dinner will begin immediately following the opening ceremonies. It will be held in the mcmurtry commons, and will be catered by west servery",date:"Saturday 7pm",image:"../../../static/reserve.jpg",caption:"McMurtry Commons"}]}},TQpc:function(e,t,n){var a,r;"undefined"!=typeof self&&self,e.exports=(a=n("17x9"),r=n("q1tI"),function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1),o=n.n(i);function c(e){if(!e)return 0;var t=window,n=document,a=n.documentElement,r=n.getElementsByTagName("body")[0];return t.innerHeight||a.clientHeight||r.clientHeight}function s(e,t){return e?t?t.clientHeight:c(e):0}function l(e){var t=[],n=o.a.Children.toArray(e.children);return n.forEach(function(e,a){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(a,1)))}),{bgChildren:t,children:n}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,p(t).apply(this,arguments))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i.PureComponent),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount,a=e.className;return o.a.createElement("div",{ref:function(e){return n(e)},className:a||"react-parallax-content",style:{position:"relative"}},t)}}])&&m(n.prototype,a),t}();d.propTypes={children:r.a.node,className:r.a.string,onMount:r.a.func},d.propTypes={};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},I=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,w(t).call(this,e))).onWindowResize=function(){n.parentHeight=s(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();10<=e-n.timestamp&&function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length?arguments[2]:void 0;if(!n)return!1;var a=e.getBoundingClientRect().top-t,r=e.getBoundingClientRect().bottom+t;return a<=c(n)&&0<=r}(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=function(e,t){if(!t)return 0;var n,a=e.getBoundingClientRect(),r=a.top,i=a.height,o=s(t),c=o<i?i:o;return(Math.round(c<r?c:r)-(n=-i))/(c-n)||0}(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&0<n.splitChildren.bgChildren.length&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:S,bgStyle:h({},S,e.bgStyle),percentage:0},n.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),n.node=null,n.content=null,n.splitChildren=l(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=s(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,i.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,a=t.bgImageSrcSet,r=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,a,r):this.updatePosition()}},{key:"componentWillReceiveProps",value:function(e){var t=e.parent,n=e.bgImage,a=e.bgImageSrcSet,r=e.bgImageSizes,i=this.state.bgImage;this.splitChildren=l(e),t&&this.parent!==t&&(this.parent=t,this.removeListeners(),this.addListeners()),this.parentHeight=s(this.canUseDOM,this.parent),i!==n&&this.loadImage(n,a,r)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.props.bgImage,a=this.state.bgImage;return e.bgImage===n||t.bgImage!==a}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,a=t.strength;if(!0!==n){var r=this.state.bgStyle,i="translate3d(-50%, ".concat((a<0?a:0)-a*e,"px, 0)");this.setState({bgStyle:h({},r,{WebkitTransform:i,transform:i}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=this.props,a=n.disabled,r=n.strength,i=n.blur,o=t?"auto":"".concat(this.getImageHeight(),"px"),c=t?"".concat(this.contentWidth,"px"):"auto";if(!0!==a){var s=this.state.imgStyle,l="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)"),u="none";if(i){var m=this.dynamicBlur?i.min+(1-e)*i.max:i;u="blur(".concat(m,"px)")}this.setState({imgStyle:h({},s,{height:o,width:c,WebkitTransform:l,transform:l,WebkitFilter:u,filter:u}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var a=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){a.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return a.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"log",value:function(){var e=this.props.log;if(e){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];console.log(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,r=t.bgClassName,i=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,u=this.state,m=u.bgImage,p=u.bgImageSrcSet,g=u.bgImageSizes,d=u.percentage,b=u.imgStyle,y=u.bgStyle;return o.a.createElement("div",{className:"react-parallax ".concat(n),style:h({position:"relative",overflow:"hidden"},a),ref:function(t){e.node=t}},m?o.a.createElement("img",{className:r,src:m,srcSet:p,sizes:g,ref:function(t){e.img=t},alt:c,style:h({},b,l)}):null,s?s(Math.min(-(d-1),1)):null,0<this.splitChildren.bgChildren.length?o.a.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:y},this.splitChildren.bgChildren):null,o.a.createElement(f,{onMount:this.onContentMount,className:i},this.splitChildren.children))}}])&&v(n.prototype,a),t}();I.propTypes={bgClassName:r.a.string,bgImage:r.a.string,bgImageAlt:r.a.string,bgImageSizes:r.a.string,bgImageSrcSet:r.a.string,bgImageStyle:r.a.shape({}),bgStyle:r.a.shape({}),blur:r.a.oneOfType([r.a.number,r.a.object]),className:r.a.string,contentClassName:r.a.string,disabled:r.a.bool,log:r.a.bool,parent:r.a.any,renderLayer:r.a.func,strength:r.a.number,style:r.a.shape({})},I.defaultProps={bgClassName:"react-parallax-bgimage",bgImage:void 0,bgImageAlt:"",bgImageSizes:void 0,bgImageSrcSet:void 0,bgImageStyle:void 0,bgStyle:void 0,blur:void 0,className:"",contentClassName:"",disabled:!1,log:!1,parent:void 0,renderLayer:void 0,strength:100,style:void 0};var O=I;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,k(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.a.Component),n=t,r=[{key:"isParallaxBackground",value:function(){return!0}}],(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"react-parallax-background ".concat(this.props.className)},this.props.children)}}])&&x(n.prototype,a),r&&x(n,r),t}();C.propTypes={children:r.a.node,className:r.a.string},C.defaultProps={className:""};var _=C;n.d(t,"Parallax",function(){return O}),n.d(t,"Background",function(){return _})}]))},qHBd:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("ZHh6"),o=n("TQpc"),c=n("YFqc"),s=n.n(c),l=n("QKO/"),u=(n("BEZE"),n("4LNS")),m=function(e){return r.a.createElement("div",{className:"image"},r.a.createElement(l.Box,{className:"image-box".concat(e.index),width:350},r.a.createElement("p",{className:"image-caption"},e.caption)),r.a.createElement("style",null,"\n            .image-box".concat(e.index," {\n                position: relative;\n                color: #DCDFE5;\n                overflow: hidden;\n                height: 100%;\n            }\n            \n            .image-box").concat(e.index,':after {\n                position: absolute;\n                content: "";\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #2B2F3A;\n                opacity: 0;\n                z-index: -1;\n                transition: 0.3s ease-in-out;\n            }\n            \n            .image-box').concat(e.index,":hover:after {\n                opacity: 0.8;\n            }\n            \n            .image-box").concat(e.index,":hover:before {\n                transform: scale(1.3);\n            }\n            \n            .image-box").concat(e.index,":hover .image-caption {\n                opacity: 1;\n            }\n\n            .image-box").concat(e.index,':before {\n                content: "";\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                top: 0; \n                left: 0;\n                z-index: -1;\n                background-image: url(').concat(e.image,");\n                background-position: center;\n                transition: 0.3s ease-in-out;\n                background-size: cover;\n            }\n            \n            .image-caption {\n                text-align: center;\n                padding-top: 70px;\n                width: 70%;\n                margin-left: auto;\n                margin-right: auto;\n                opacity: 0;\n                transition: 0.3s ease-in-out;\n                font-size: 1.3em;\n            }\n        ")))},p=(n("osmD"),function(){for(var e=[],t=0;t<u.a.length;t++)t%2==0?e.push(r.a.createElement("div",{className:"event-wrapper",key:u.a[t].title},r.a.createElement("div",{className:"event-left"},r.a.createElement("p",{className:"event-date"},u.a[t].date),r.a.createElement("div",{className:"event-info"},r.a.createElement("p",{className:"event-title"},u.a[t].title),r.a.createElement("p",{className:"event-description"},u.a[t].description))),r.a.createElement(m,{caption:u.a[t].caption,index:t,image:u.a[t].image}))):e.push(r.a.createElement("div",{key:u.a[t].title},r.a.createElement("div",{className:"desktop-right"},r.a.createElement("div",{className:"event-wrapper"},r.a.createElement(m,{caption:u.a[t].caption,index:t,image:u.a[t].image}),r.a.createElement("div",{className:"event-right"},r.a.createElement("p",{className:"event-date"},u.a[t].date),r.a.createElement("div",{className:"event-info"},r.a.createElement("p",{className:"event-title"},u.a[t].title),r.a.createElement("p",{className:"event-description"},u.a[t].description))))),r.a.createElement("div",{className:"mobile-right"},r.a.createElement("div",{className:"event-wrapper"},r.a.createElement("div",{className:"event-right"},r.a.createElement("p",{className:"event-date"},u.a[t].date),r.a.createElement("div",{className:"event-info"},r.a.createElement("p",{className:"event-title"},u.a[t].title),r.a.createElement("p",{className:"event-description"},u.a[t].description))),r.a.createElement(m,{caption:u.a[t].caption,index:t,image:u.a[t].image})))));return r.a.createElement("div",null,r.a.createElement("h1",{className:"mcm10-schedule"},"Schedule"),r.a.createElement("div",{className:"events-list"},e))}),g=function(){return r.a.createElement("div",null,r.a.createElement(o.Parallax,{bgImage:"../../../static/mcm10bg.svg",bgImageAlt:"",strength:800},r.a.createElement("div",{className:"parallax-wrapper1"},r.a.createElement("div",{className:"mcm10-title-container"},r.a.createElement("div",{className:"mcm10-title"},r.a.createElement(l.Image,{src:"../../../static/mcm10.svg",alt:"MCM10"}))),r.a.createElement("div",{className:"mcm10-btn"},r.a.createElement("p",null,"Get Tickets")),r.a.createElement(s.a,{href:"/mcm10/sponsor"},r.a.createElement("div",{className:"mcm10-btn"},r.a.createElement("p",null,"Become a Sponsor"))))),r.a.createElement(p,null),r.a.createElement(s.a,{href:"/mcm10/faqs"},r.a.createElement("div",{className:"faqs-btn"},r.a.createElement("p",null,"FAQs ",r.a.createElement("img",{src:"https://icon.now.sh/arrow/DCDFE5/25"})))))};n("L5GA"),t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement(g,null))}},sHTW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mcm10",function(){var e=n("qHBd");return{page:e.default||e}}])}},[["sHTW","5d41","9da1","ad9d"]]]);