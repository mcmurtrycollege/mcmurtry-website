(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"8ZBC":function(e,t){!function(e){"use strict";var t=1,n=2,o=4,s=8,r=16,i=32,a=64,u=128,c=256,l=512,d=1024,f=u|a|r|s|o|n,m=1e3,h=60,y=60,p=24,w=p*y*h*m,g=7,v=12,k=10,b=10,N=10,M=Math.ceil,S=Math.floor;function O(e,t){var n=e.getTime();return e.setMonth(e.getMonth()+t),Math.round((e.getTime()-n)/w)}function j(e){var t=e.getTime(),n=new Date(t);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-t)/w)}function D(e,t){if(t=t instanceof Date||null!==t&&isFinite(t)?new Date(+t):new Date,!e)return t;var n=+e.value||0;return n?(t.setTime(t.getTime()+n),t):((n=+e.milliseconds||0)&&t.setMilliseconds(t.getMilliseconds()+n),(n=+e.seconds||0)&&t.setSeconds(t.getSeconds()+n),(n=+e.minutes||0)&&t.setMinutes(t.getMinutes()+n),(n=+e.hours||0)&&t.setHours(t.getHours()+n),(n=+e.weeks||0)&&(n*=g),(n+=+e.days||0)&&t.setDate(t.getDate()+n),(n=+e.months||0)&&t.setMonth(t.getMonth()+n),(n=+e.millennia||0)&&(n*=N),(n+=+e.centuries||0)&&(n*=b),(n+=+e.decades||0)&&(n*=k),(n+=+e.years||0)&&t.setFullYear(t.getFullYear()+n),t)}var T,x,I,C,E,B,F,R;function _(e,t){return F(e)+(1===e?T[t]:x[t])}function P(){}function U(e,t,n,o,s,r){return e[n]>=0&&(t+=e[n],delete e[n]),(t/=s)+1<=1?0:e[o]>=0?(e[o]=+(e[o]+t).toFixed(r),function(e,t){switch(t){case"seconds":if(e.seconds!==h||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==y||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==p||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==g||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==j(e.refMonth)/g||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==v||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==k||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==b||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==N||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}(e,o),0):t}function Y(e,t){var n=U(e,0,"milliseconds","seconds",m,t);if(n&&(n=U(e,n,"seconds","minutes",h,t))&&(n=U(e,n,"minutes","hours",y,t))&&(n=U(e,n,"hours","days",p,t))&&(n=U(e,n,"days","weeks",g,t))&&(n=U(e,n,"weeks","months",j(e.refMonth)/g,t))&&(n=U(e,n,"months","years",function(e){var t=e.getTime(),n=new Date(t);return n.setFullYear(e.getFullYear()+1),Math.round((n.getTime()-t)/w)}(e.refMonth)/j(e.refMonth),t))&&(n=U(e,n,"years","decades",k,t))&&(n=U(e,n,"decades","centuries",b,t))&&(n=U(e,n,"centuries","millennia",N,t)))throw new Error("Fractional unit overflow")}function J(e,f,w,j,D,T){var x=new Date;if(e.start=f=f||x,e.end=w=w||x,e.units=j,e.value=w.getTime()-f.getTime(),e.value<0){var I=w;w=f,f=I}e.refMonth=new Date(f.getFullYear(),f.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=w.getFullYear()-f.getFullYear(),e.months=w.getMonth()-f.getMonth(),e.weeks=0,e.days=w.getDate()-f.getDate(),e.hours=w.getHours()-f.getHours(),e.minutes=w.getMinutes()-f.getMinutes(),e.seconds=w.getSeconds()-f.getSeconds(),e.milliseconds=w.getMilliseconds()-f.getMilliseconds(),function(e){var t;for(e.milliseconds<0?(t=M(-e.milliseconds/m),e.seconds-=t,e.milliseconds+=t*m):e.milliseconds>=m&&(e.seconds+=S(e.milliseconds/m),e.milliseconds%=m),e.seconds<0?(t=M(-e.seconds/h),e.minutes-=t,e.seconds+=t*h):e.seconds>=h&&(e.minutes+=S(e.seconds/h),e.seconds%=h),e.minutes<0?(t=M(-e.minutes/y),e.hours-=t,e.minutes+=t*y):e.minutes>=y&&(e.hours+=S(e.minutes/y),e.minutes%=y),e.hours<0?(t=M(-e.hours/p),e.days-=t,e.hours+=t*p):e.hours>=p&&(e.days+=S(e.hours/p),e.hours%=p);e.days<0;)e.months--,e.days+=O(e.refMonth,1);e.days>=g&&(e.weeks+=S(e.days/g),e.days%=g),e.months<0?(t=M(-e.months/v),e.years-=t,e.months+=t*v):e.months>=v&&(e.years+=S(e.months/v),e.months%=v),e.years>=k&&(e.decades+=S(e.years/k),e.years%=k,e.decades>=b&&(e.centuries+=S(e.decades/b),e.decades%=b,e.centuries>=N&&(e.millennia+=S(e.centuries/N),e.centuries%=N)))}(e),function(e,f,w,M){var j=0;!(f&d)||j>=w?(e.centuries+=e.millennia*N,delete e.millennia):e.millennia&&j++,!(f&l)||j>=w?(e.decades+=e.centuries*b,delete e.centuries):e.centuries&&j++,!(f&c)||j>=w?(e.years+=e.decades*k,delete e.decades):e.decades&&j++,!(f&u)||j>=w?(e.months+=e.years*v,delete e.years):e.years&&j++,!(f&a)||j>=w?(e.months&&(e.days+=O(e.refMonth,e.months)),delete e.months,e.days>=g&&(e.weeks+=S(e.days/g),e.days%=g)):e.months&&j++,!(f&i)||j>=w?(e.days+=e.weeks*g,delete e.weeks):e.weeks&&j++,!(f&r)||j>=w?(e.hours+=e.days*p,delete e.days):e.days&&j++,!(f&s)||j>=w?(e.minutes+=e.hours*y,delete e.hours):e.hours&&j++,!(f&o)||j>=w?(e.seconds+=e.minutes*h,delete e.minutes):e.minutes&&j++,!(f&n)||j>=w?(e.milliseconds+=e.seconds*m,delete e.seconds):e.seconds&&j++,f&t&&!(j>=w)||Y(e,M)}(e,j,D,T)}finally{delete e.refMonth}return e}function L(e,i,a,u,c){var l;a=+a||f,u=u>0?u:NaN,c=c>0?c<20?Math.round(c):20:0;var d=null;"function"===typeof e?(l=e,e=null):e instanceof Date||(null!==e&&isFinite(e)?e=new Date(+e):("object"===typeof d&&(d=e),e=null));var w=null;if("function"===typeof i?(l=i,i=null):i instanceof Date||(null!==i&&isFinite(i)?i=new Date(+i):("object"===typeof i&&(w=i),i=null)),d&&(e=D(d,i)),w&&(i=D(w,e)),!e&&!i)return new P;if(!l)return J(new P,e,i,a,u,c);var v,k=function(e){return e&t?m/30:e&n?m:e&o?m*h:e&s?m*h*y:e&r?m*h*y*p:m*h*y*p*g}(a),b=function(){l(J(new P,e,i,a,u,c),v)};return b(),v=setInterval(b,k)}P.prototype.toString=function(e){var t=R(this),n=t.length;if(!n)return e?""+e:E;if(1===n)return t[0];var o=I+t.pop();return t.join(C)+o},P.prototype.toHTML=function(e,t){e=e||"span";var n=R(this),o=n.length;if(!o)return(t=t||E)?"<"+e+">"+t+"</"+e+">":t;for(var s=0;s<o;s++)n[s]="<"+e+">"+n[s]+"</"+e+">";if(1===o)return n[0];var r=I+n.pop();return n.join(C)+r},P.prototype.addTo=function(e){return D(this,e)},R=function(e){var t=[],n=e.millennia;return n&&t.push(B(n,10)),(n=e.centuries)&&t.push(B(n,9)),(n=e.decades)&&t.push(B(n,8)),(n=e.years)&&t.push(B(n,7)),(n=e.months)&&t.push(B(n,6)),(n=e.weeks)&&t.push(B(n,5)),(n=e.days)&&t.push(B(n,4)),(n=e.hours)&&t.push(B(n,3)),(n=e.minutes)&&t.push(B(n,2)),(n=e.seconds)&&t.push(B(n,1)),(n=e.milliseconds)&&t.push(B(n,0)),t},L.MILLISECONDS=t,L.SECONDS=n,L.MINUTES=o,L.HOURS=s,L.DAYS=r,L.WEEKS=i,L.MONTHS=a,L.YEARS=u,L.DECADES=c,L.CENTURIES=l,L.MILLENNIA=d,L.DEFAULTS=f,L.ALL=d|l|c|u|a|i|r|s|o|n|t;var A=L.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var t=e.singular||[];t.split&&(t=t.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var o=0;o<=10;o++)T[o]=t[o]||T[o],x[o]=n[o]||x[o]}"string"===typeof e.last&&(I=e.last),"string"===typeof e.delim&&(C=e.delim),"string"===typeof e.empty&&(E=e.empty),"function"===typeof e.formatNumber&&(F=e.formatNumber),"function"===typeof e.formatter&&(B=e.formatter)}},H=L.resetFormat=function(){T=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),x=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),I=" and ",C=", ",E="",F=function(e){return e},B=_};L.setLabels=function(e,t,n,o,s,r,i){A({singular:e,plural:t,last:n,delim:o,empty:s,formatNumber:r,formatter:i})},L.resetLabels=H,H(),e&&e.exports?e.exports=L:"function"===typeof window.define&&"undefined"!==typeof window.define.amd&&window.define("countdown",[],(function(){return L}))}(e)},DfTf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oweek",function(){return n("NjP4")}])},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return s}))},N9px:function(e,t,n){"use strict";var o=n("1OyB"),s=n("vuIU"),r=n("JX7q"),i=n("Ji7U"),a=n("md7G"),u=n("foSv"),c=n("q1tI"),l=n.n(c),d=n("YFqc"),f=n.n(d),m=n("QKO/"),h=(n("cGbl"),n("RQmk")),y=l.a.createElement;function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(u.a)(e);if(t){var s=Object(u.a)(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return Object(a.a)(this,n)}}var w=function(e){Object(i.a)(n,e);var t=p(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={hidden:!0},s.toggleNavbar=s.toggleNavbar.bind(Object(r.a)(s)),s}return Object(s.a)(n,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"render",value:function(){return y("div",null,y("div",{className:"oweek-navbar-open",onClick:this.toggleNavbar},y("img",{src:"../../../static/icons/menu.svg",alt:"Menu"})),y("div",{className:this.state.hidden?"oweek-navbar-hidden":"oweek-navbar-visible"},y("div",{className:"oweek-navbar-close",onClick:this.toggleNavbar},y("img",{src:"../../../static/icons/x.svg",alt:"X"})),y(f.a,{href:"/oweek"},y("a",null,y(m.Box,{width:[.2,.3],ml:"auto",mr:"auto"},y(m.Image,{src:"../../../static/logo.svg",alt:""})))),h.a.map((function(e){var t=e.name,n=e.link;return y(f.a,{href:n,key:t},y("div",{className:"oweek-navbar-link"},y("p",null,t)))}))))}}]),n}(l.a.Component);t.a=w},NjP4:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),s=n.n(o),r=n("AM0r"),i=n("N9px"),a=n("1OyB"),u=n("vuIU"),c=n("JX7q"),l=n("Ji7U"),d=n("md7G"),f=n("foSv"),m=n("QKO/"),h=(n("72SP"),s.a.createElement);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var s=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var p=n("8ZBC"),w=function(e){Object(l.a)(n,e);var t=y(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={time:p(new Date(2020,7,16)).toString(),myInterval:null},o.updateTime=o.updateTime.bind(Object(c.a)(o)),o}return Object(u.a)(n,[{key:"updateTime",value:function(){this.setState({time:p(new Date(2020,7,16)).toString()})}},{key:"componentDidMount",value:function(){this.state.myInterval=window.setInterval(this.updateTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.myInterval)}},{key:"render",value:function(){return h("div",{className:"oweek-countdown"},h("h3",null,this.state.time),h("h2",null,"until O-Week!"))}}]),n}(s.a.Component),g=function(){return h("div",{className:"oweek-homepage"},h(m.Flex,{flexDirection:"row",justifyContent:"center",flexWrap:"wrap"},h(m.Box,{width:[1,1/3]},h(m.Image,{src:"../../../static/oweek/mcscottishyurt.jpg",alt:""})),h(m.Box,{width:[1,1/3]},h(m.Image,{src:"../../../static/oweek/cardmovin.jpg",alt:""})),h(m.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},h("h1",{className:"oweek-welcome"},"Welcome to McMurtry!")),h(m.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},h("h1",{className:"oweek-welcome"},"Game ShO-Week")),h(m.Box,{width:[1,1/3],style:{margin:0,padding:0}},h(m.Image,{src:"../../../static/oweek/2020Coords.jpg",alt:""})),h(m.Box,{width:[1,1/3]},h(m.Image,{src:"../../../static/oweek/colorceleb.jpg",alt:""})),h(m.Box,{width:[1,1/3],style:{margin:0,padding:0}},h(m.Image,{src:"../../../static/oweek/mcteam.jpg",alt:""})),h(m.Box,{width:[1,1/3]},h(m.Image,{src:"../../../static/oweek/building.jpg",alt:""})),h(m.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},h(w,null))))},v=(n("NHen"),s.a.createElement);t.default=function(){return v("div",null,v(r.a,null),v(i.a,null),v(g,null))}},RQmk:function(e){e.exports=JSON.parse('{"a":[{"name":"About the Theme","link":"/oweek/theme"},{"name":"Meet the Coords","link":"/oweek/coords"},{"name":"O-Week Groups","link":"/oweek/oweekgroups"},{"name":"Tour of McMurtry","link":"/oweek/mcmtour"},{"name":"Your Room","link":"/oweek/yourroom"},{"name":"O-Week Book","link":"/oweek/oweekbook"},{"name":"Contact Info","link":"/oweek/oweekcontact"}]}')},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return i}));var r=n("JX7q");function i(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?Object(r.a)(e):t}},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return s}))}},[["DfTf",0,2,1,3,4]]]);