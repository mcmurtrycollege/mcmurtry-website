(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0YTE":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("QKO/"),s=(n("svza"),a.a.createElement);t.a=function(){return s("div",{className:"footer-container"},s(r.Flex,{flexDirection:"row",justifyContent:"center",className:"footer-crest"},s(r.Box,{width:40},s(r.Image,{src:"../../../static/logo.svg",alt:""})),s("p",null,"McMurtry College")),s("p",{className:"footer-item"},"McMurtry College \xb7 MS 761 \xb7 Rice University"),s("p",{className:"footer-item"},"1605 Rice Blvd \xb7 Houston, TX 77005"),s("p",{className:"footer-item"},"Phone: (713) 348-4583 \xb7 Fax: (713) 348-3135"),s("p",{className:"footer-item"},"Email: mcmurtry@rice.edu"),s("p",null),s("p",{className:"footer-item"},"Copyright \xa9 McMurtry College, 2019"))}},"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"6Z33":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/SMR",function(){return n("vu4f")}])},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return a}))},"PNk+":function(e){e.exports=JSON.parse('{"a":[{"name":"About","subheaders":[{"name":"About","to":"/about"},{"name":"O-Week","to":"/oweek"}]},{"name":"Events","subheaders":[{"name":"Calendar","to":"/events/calendar"},{"name":"Arts Calendar","to":"/events/artevents"}]},{"name":"People","subheaders":[{"name":"McTeam","to":"/people/mcteam"},{"name":"McMinistry","to":"/people/mcministry"},{"name":"Court","to":"/people/court"},{"name":"Committees","to":"/people/committees"},{"name":"Associates","to":"/people/associates"},{"name":"Divisional Advisors","to":"/people/divisionaladvisors"},{"name":"Peer Academic Advisors","to":"/people/PAAs"},{"name":"Academic Fellows","to":"/people/academicfellows"},{"name":"RHAs","to":"/people/RHAs"},{"name":"Head Caregivers","to":"/people/headcaregivers"},{"name":"Strive Liaisons","to":"/people/striveliaisons"},{"name":"SMR","to":"/people/SMR"}]},{"name":"Resources","subheaders":[{"name":"Room Reservations","to":"/resources/roomreservations"},{"name":"Financial Inclusivity","to":"/about/financialinclusivity"},{"name":"MIS","to":"/resources/mis"},{"name":"Documents","to":"/resources/documents"},{"name":"Diversity Resources","to":"/resources/diversityResources"},{"name":"Expense Forms","to":"/resources/expenseforms"},{"name":"Work Orders","to":"/resources/workorders"},{"name":"Initiative Requests","to":"/resources/initiativerequests"},{"name":"Feedback Form","to":"/resources/feedbackform"}]}]}')},RUXa:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("QKO/"),s=(n("WPwg"),a.a.createElement);t.a=function(e){return s("div",null,s(r.Box,{width:e.width,ml:"auto",mr:"auto",className:"title-container"},s("h1",{className:"title-theme"},e.title)))}},WPwg:function(e,t,n){},e02a:function(e,t,n){"use strict";var o=n("1OyB"),a=n("vuIU"),r=n("JX7q"),s=n("md7G"),i=n("foSv"),c=n("Ji7U"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=(n("tKOv"),n("QKO/")),p=n("PNk+"),h=l.a.createElement;function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(c.a)(u,e);var t,n=(t=u,function(){var e,n=Object(i.a)(t);if(v()){var o=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(s.a)(this,e)});function u(e){var t;return Object(o.a)(this,u),(t=n.call(this,e)).state={hidden:!0,subheader:null},t.toggleNavbar=t.toggleNavbar.bind(Object(r.a)(t)),t.showSubheader=t.showSubheader.bind(Object(r.a)(t)),t.closeSubheader=t.closeSubheader.bind(Object(r.a)(t)),t}return Object(a.a)(u,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"showSubheader",value:function(e){this.setState({subheader:e})}},{key:"closeSubheader",value:function(){this.setState({subheader:null})}},{key:"render",value:function(){for(var e=this,t=[],n=[],o=this.state.hidden?{left:"100%"}:{left:0},a=function(o){t.push(h("div",{className:"main-header",key:p.a[o].name},h("a",{onClick:function(){return e.showSubheader(o)}},p.a[o].name))),n.push(h("div",{className:e.state.subheader===o?"subheader-display":"subheader-hidden",key:"".concat(p.a[o].name,"-menu")},h("div",{onClick:e.closeSubheader,className:"subheader-back"},h("p",null,"\u2190 Back")),p.a[o].subheaders.map((function(e){var t=e.name,n=e.to;return h(f.a,{href:n,key:t},h("div",{className:"subheader-item"},t))}))))},r=0;r<p.a.length;r++)a(r);return h("div",null,h("div",{className:"fixed-mobile-header"},h("img",{className:"show-navbar",src:"https://icon.now.sh/burger/515768/30",alt:"Menu",onClick:this.toggleNavbar}),h(f.a,{href:"/"},h("div",{className:"header-crest-mobile"},h(d.Box,{width:40},h(d.Image,{src:"../../static/logo.svg",alt:""})),h("p",null,"McMurtry College")))),h("div",{className:"mobile-navbar",style:o},h("div",{className:"main-menu"},h("img",{className:"close-navbar",src:"https://icon.now.sh/x/DCDFE5/25",alt:"X",onClick:this.toggleNavbar}),t),n))}}]),u}(l.a.Component);t.a=b},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},ivdq:function(e,t,n){"use strict";var o=n("1OyB"),a=n("vuIU"),r=n("JX7q"),s=n("md7G"),i=n("foSv"),c=n("Ji7U"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=n("QKO/"),p=n("PNk+"),h=(n("sllQ"),l.a.createElement);function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(c.a)(u,e);var t,n=(t=u,function(){var e,n=Object(i.a)(t);if(v()){var o=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(s.a)(this,e)});function u(e){var t;return Object(o.a)(this,u),(t=n.call(this,e)).state={permanent:!1},t.handleScroll=t.handleScroll.bind(Object(r.a)(t)),t}return Object(a.a)(u,[{key:"handleScroll",value:function(){this.setState({permanent:window.scrollY>0})}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.permanent?{backgroundColor:"#515768"}:{paddingTop:"15px",paddingBottom:"15px",color:"#515768",backgroundColor:"#DCDFE5"};return h("div",{className:"navbar-wrapper",style:e},h(f.a,{href:"/"},h("div",{className:"header-crest"},h(d.Image,{src:"../../static/logo.svg",alt:"",width:40,height:60}),h("p",null,"McMurtry College"))),h("div",{className:"navbar-catagories"},p.a.map((function(e){var t=e.name,n=e.subheaders;return h("div",{className:"navbar-category",key:t},h("button",{className:"navbar-dropdown-opener"},t),h("div",{className:"dropdown-subheaders"},n.map((function(e){var t=e.name,n=e.to;return h(f.a,{href:n,key:t},h("a",null,t))}))))}))))}}]),u}(l.a.Component);t.a=b},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return s}));var r=n("JX7q");function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},sllQ:function(e,t,n){},svza:function(e,t,n){},t0XY:function(e){e.exports=JSON.parse('{"a":"We\'re looking for a new SMR! I\'m _, a senior from Austin, TX, double majoring in History and Psychology with a minor in Politics, Law and Social Thought. I\'m here to be a liaison between McMurtry and Housing and Dining. I can help with lofting/lowering beds, resetting thermostats, resetting lights, and other simple issues. If you have questions, feel free to email me at keo5@rice.edu or text at <>"}')},tKOv:function(e,t,n){},vu4f:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("AM0r"),s=n("ivdq"),i=n("e02a"),c=n("0YTE"),u=n("RUXa"),l=n("QKO/"),m=n("t0XY"),f=(n("29Ku"),a.a.createElement),d=function(){return f("div",{className:"smr-page"},f(u.a,{title:"Student Maintenance Rep",width:350,smallTest:!0}),f(l.Box,{width:[.8,.5],ml:"auto",mr:"auto"},f("p",null,m.a)))},p=(n("NHen"),a.a.createElement);t.default=function(){return p("div",{className:"page"},p(r.a,null),p(s.a,null),p(i.a,null),p(d,null),p(c.a,null))}},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return a}))}},[["6Z33",0,2,1,3,4]]]);