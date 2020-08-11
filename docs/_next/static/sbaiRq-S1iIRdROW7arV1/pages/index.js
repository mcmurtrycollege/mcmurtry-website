(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0YTE":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("QKO/"),c=(n("svza"),o.a.createElement);t.a=function(){return c("div",{className:"footer-container"},c(r.Flex,{flexDirection:"row",justifyContent:"center",className:"footer-crest"},c(r.Box,{width:40},c(r.Image,{src:"../../../static/logo.svg",alt:""})),c("p",null,"McMurtry College")),c("p",{className:"footer-item"},"McMurtry College \xb7 MS 761 \xb7 Rice University"),c("p",{className:"footer-item"},"1605 Rice Blvd \xb7 Houston, TX 77005"),c("p",{className:"footer-item"},"Phone: (713) 348-4583 \xb7 Fax: (713) 348-3135"),c("p",{className:"footer-item"},"Email: mcmurtry@rice.edu"),c("p",null),c("p",{className:"footer-item"},"Copyright \xa9 McMurtry College, 2019"))}},"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return o}))},"PNk+":function(e){e.exports=JSON.parse('{"a":[{"name":"About","subheaders":[{"name":"About","to":"/about"},{"name":"O-Week","to":"/oweek"}]},{"name":"Events","subheaders":[{"name":"Calendar","to":"/events/calendar"},{"name":"Arts Calendar","to":"/events/artevents"}]},{"name":"People","subheaders":[{"name":"McTeam","to":"/people/mcteam"},{"name":"McMinistry","to":"/people/mcministry"},{"name":"Court","to":"/people/court"},{"name":"Committees","to":"/people/committees"},{"name":"Associates","to":"/people/associates"},{"name":"Divisional Advisors","to":"/people/divisionaladvisors"},{"name":"Peer Academic Advisors","to":"/people/PAAs"},{"name":"Academic Fellows","to":"/people/academicfellows"},{"name":"RHAs","to":"/people/RHAs"},{"name":"Head Caregivers","to":"/people/headcaregivers"},{"name":"Strive Liaisons","to":"/people/striveliaisons"},{"name":"SMR","to":"/people/SMR"}]},{"name":"Resources","subheaders":[{"name":"Room Reservations","to":"/resources/roomreservations"},{"name":"Financial Inclusivity","to":"/about/financialinclusivity"},{"name":"MIS","to":"/resources/mis"},{"name":"Documents","to":"/resources/documents"},{"name":"Diversity Resources","to":"/resources/diversityResources"},{"name":"Expense Forms","to":"/resources/expenseforms"},{"name":"Work Orders","to":"/resources/workorders"},{"name":"Initiative Requests","to":"/resources/initiativerequests"},{"name":"Feedback Form","to":"/resources/feedbackform"}]}]}')},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("AM0r"),c=n("ivdq"),s=n("e02a"),i=n("0YTE"),u=n("QKO/"),l=n("YFqc"),m=n.n(l),f=(n("HAfv"),o.a.createElement),d=[{name:"Calendar",icon:"calendar",to:"/events/calendar"},{name:"O-Week",icon:"people",to:"/oweek"},{name:"Book a Room",icon:"event",to:"/resources/roomreservations/"},{name:"Financial Inclusivity",icon:"hand-heart",to:"/about/financialinclusivity"}],v=function(){return f("div",{className:"intro-page"},f(m.a,{href:"/resources/coronavirus"},f(u.Box,{className:"coronavirus-banner",width:[.9,.5]},f("p",null,"Click here for Resources and Questions regarding the coronavirus response at Rice/McMurtry"))),f(u.Box,{width:[.95,.8],className:"yurt-graphic"},f(u.Image,{src:"../../static/YurtTrees.svg"})),f("h1",{className:"welcome-title"},"Welcome to McMurtry!"),f(u.Flex,{justifyContent:"center",flexWrap:"wrap",flexDirection:"row"},d.map((function(e){var t=e.name,n=e.icon,a=e.to;return f(u.Box,{className:"quick-link-container",width:[130,220],key:"".concat(t)},f(m.a,{href:a},f("div",{className:"quick-link"},f("img",{src:"".concat("../../static/icons/").concat(n,"-large.svg"),alt:"",className:"intro-link-img-large"}),f("img",{src:"".concat("../../static/icons/").concat(n,"-small.svg"),alt:"",className:"intro-link-img-small"}),f("h2",{className:"quick-link-name"},t))))}))))},p=(n("NHen"),o.a.createElement);t.default=function(){return p("div",{className:"page"},p(r.a,null),p(c.a,null),p(s.a,null),p(v,null),p(i.a,null))}},e02a:function(e,t,n){"use strict";var a=n("1OyB"),o=n("vuIU"),r=n("JX7q"),c=n("Ji7U"),s=n("md7G"),i=n("foSv"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=(n("tKOv"),n("QKO/")),v=n("PNk+"),p=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=h(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={hidden:!0,subheader:null},o.toggleNavbar=o.toggleNavbar.bind(Object(r.a)(o)),o.showSubheader=o.showSubheader.bind(Object(r.a)(o)),o.closeSubheader=o.closeSubheader.bind(Object(r.a)(o)),o}return Object(o.a)(n,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"showSubheader",value:function(e){this.setState({subheader:e})}},{key:"closeSubheader",value:function(){this.setState({subheader:null})}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=this.state.hidden?{left:"100%"}:{left:0},o=function(a){t.push(p("div",{className:"main-header",key:v.a[a].name},p("a",{onClick:function(){return e.showSubheader(a)}},v.a[a].name))),n.push(p("div",{className:e.state.subheader===a?"subheader-display":"subheader-hidden",key:"".concat(v.a[a].name,"-menu")},p("div",{onClick:e.closeSubheader,className:"subheader-back"},p("p",null,"\u2190 Back")),v.a[a].subheaders.map((function(e){var t=e.name,n=e.to;return p(f.a,{href:n,key:t},p("div",{className:"subheader-item"},t))}))))},r=0;r<v.a.length;r++)o(r);return p("div",null,p("div",{className:"fixed-mobile-header"},p("img",{className:"show-navbar",src:"../../static/icons/menu.svg",alt:"Menu",onClick:this.toggleNavbar}),p(f.a,{href:"/"},p("div",{className:"header-crest-mobile"},p(d.Box,{width:40},p(d.Image,{src:"../../static/logo.svg",alt:""})),p("p",null,"McMurtry College")))),p("div",{className:"mobile-navbar",style:a},p("div",{className:"main-menu"},p("img",{className:"close-navbar",src:"../../static/icons/x.svg",alt:"X",onClick:this.toggleNavbar}),t),n))}}]),n}(l.a.Component);t.a=b},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},ivdq:function(e,t,n){"use strict";var a=n("1OyB"),o=n("vuIU"),r=n("JX7q"),c=n("Ji7U"),s=n("md7G"),i=n("foSv"),u=n("q1tI"),l=n.n(u),m=n("YFqc"),f=n.n(m),d=n("QKO/"),v=n("PNk+"),p=(n("sllQ"),l.a.createElement);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(c.a)(n,e);var t=h(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={permanent:!1},o.handleScroll=o.handleScroll.bind(Object(r.a)(o)),o}return Object(o.a)(n,[{key:"handleScroll",value:function(){this.setState({permanent:window.scrollY>0})}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.permanent?{backgroundColor:"#515768"}:{paddingTop:"15px",paddingBottom:"15px",color:"#515768",backgroundColor:"#DCDFE5"};return p("div",{className:"navbar-wrapper",style:e},p(f.a,{href:"/"},p("div",{className:"header-crest"},p(d.Image,{src:"../../static/logo.svg",alt:"",width:40,height:60}),p("p",null,"McMurtry College"))),p("div",{className:"navbar-catagories"},v.a.map((function(e){var t=e.name,n=e.subheaders;return p("div",{className:"navbar-category",key:t},p("button",{className:"navbar-dropdown-opener"},t),p("div",{className:"dropdown-subheaders"},n.map((function(e){var t=e.name,n=e.to;return p(f.a,{href:n,key:t},p("a",null,t))}))))}))))}}]),n}(l.a.Component);t.a=b},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}n.d(t,"a",(function(){return c}));var r=n("JX7q");function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(r.a)(e):t}},sllQ:function(e,t,n){},svza:function(e,t,n){},tKOv:function(e,t,n){},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return o}))}},[["vlRD",0,2,1,3,4]]]);