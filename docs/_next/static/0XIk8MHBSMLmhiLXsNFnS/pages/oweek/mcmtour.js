(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0iUn":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"a",(function(){return o}))},"AT/M":function(e,n,t){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,"a",(function(){return o}))},MI3g:function(e,n,t){"use strict";var o=t("XVgq"),r=t.n(o),a=t("Z7t5"),i=t.n(a);function u(e){return(u="function"===typeof i.a&&"symbol"===typeof r.a?function(e){return typeof e}:function(e){return e&&"function"===typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"===typeof i.a&&"symbol"===u(r.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":u(e)})(e)}var l=t("AT/M");function s(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?Object(l.a)(e):n}t.d(n,"a",(function(){return s}))},N9px:function(e,n,t){"use strict";var o=t("0iUn"),r=t("sLSF"),a=t("MI3g"),i=t("a7VT"),u=t("AT/M"),c=t("Tit0"),l=t("q1tI"),s=t.n(l),f=t("YFqc"),m=t.n(f),p=t("QKO/"),w=(t("cGbl"),t("RQmk")),d=s.a.createElement,k=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(a.a)(this,Object(i.a)(n).call(this,e))).state={hidden:!0},t.toggleNavbar=t.toggleNavbar.bind(Object(u.a)(t)),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"render",value:function(){return d("div",null,d("div",{className:"oweek-navbar-open",onClick:this.toggleNavbar},d("img",{src:"https://icon.now.sh/burger/3A3F4F/30",alt:"Menu"})),d("div",{className:this.state.hidden?"oweek-navbar-hidden":"oweek-navbar-visible"},d("div",{className:"oweek-navbar-close",onClick:this.toggleNavbar},d("img",{src:"https://icon.now.sh/x/DCDFE5/20",alt:"X"})),d(m.a,{href:"/oweek"},d("a",null,d(p.Box,{width:[.2,.3],ml:"auto",mr:"auto"},d(p.Image,{src:"../../../static/logo.svg",alt:""})))),w.a.map((function(e){var n=e.name,t=e.link;return d(m.a,{href:t,key:n},d("div",{className:"oweek-navbar-link"},d("p",null,n)))}))))}}]),n}(s.a.Component);n.a=k},RQmk:function(e){e.exports=JSON.parse('{"a":[{"name":"About the Theme","link":"/oweek/theme"},{"name":"Meet the Coords","link":"/oweek/coords"},{"name":"O-Week Groups","link":"/oweek/oweekgroups"},{"name":"Move-In Info","link":"/oweek/movein"},{"name":"Tour of McMurtry","link":"/oweek/mcmtour"},{"name":"Your Room","link":"/oweek/yourroom"},{"name":"O-Week Book","link":"/oweek/oweekbook"},{"name":"Contact Info","link":"/oweek/oweekcontact"}]}')},Tit0:function(e,n,t){"use strict";var o=t("SqZg"),r=t.n(o),a=t("TRZx"),i=t.n(a);function u(e,n){return(u=i.a||function(e,n){return e.__proto__=n,e})(e,n)}function c(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}t.d(n,"a",(function(){return c}))},a7VT:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var o=t("Bhuq"),r=t.n(o),a=t("TRZx"),i=t.n(a);function u(e){return(u=i.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},"c/DE":function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),a=t("AM0r"),i=t("N9px"),u=(t("72SP"),r.a.createElement),c=function(){return u("div",{className:"oweek-page"},u("h1",{className:"oweek-title"},"Tour of McMurtry"),u("div",null,u("h2",{className:"oweek-subtitle"},"McMurtry Double and Facilities Tour")),u("div",{className:"oweek-video-desktop"},u("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/C9R-O-7O7mY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),u("div",{className:"oweek-video-mobile"},u("iframe",{width:"320",height:"200",src:"https://www.youtube.com/embed/C9R-O-7O7mY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),u("p",{style:{textAlign:"center",marginTop:"50px"}},"If you were assigned a single please email mcmutryoweek@gmail.com for your room video"))},l=(t("NHen"),r.a.createElement);n.default=function(){return l("div",null,l(a.a,null),l(i.a,null),l(c,null))}},lyWE:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oweek/mcmtour",function(){return t("c/DE")}])},sLSF:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("hfKm"),r=t.n(o);function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r()(e,o.key,o)}}function i(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}}},[["lyWE",1,2,0,3,4]]]);