(window.webpackJsonp=window.webpackJsonp||[]).push([["aa72"],{"8ZBC":function(e,t){!function(e){"use strict";var t=1,n=2,s=4,a=8,r=16,o=32,i=64,l=128,u=256,c=512,d=1024,m=l|i|r|a|s|n,h=1e3,f=60,w=60,g=24,y=g*w*f*h,p=7,k=12,v=10,E=10,N=10,M=Math.ceil,b=Math.floor;function T(e,t){var n=e.getTime();return e.setMonth(e.getMonth()+t),Math.round((e.getTime()-n)/y)}function D(e){var t=e.getTime(),n=new Date(t);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-t)/y)}function j(e,t){if(t=t instanceof Date||null!==t&&isFinite(t)?new Date(+t):new Date,!e)return t;var n=+e.value||0;return n?(t.setTime(t.getTime()+n),t):((n=+e.milliseconds||0)&&t.setMilliseconds(t.getMilliseconds()+n),(n=+e.seconds||0)&&t.setSeconds(t.getSeconds()+n),(n=+e.minutes||0)&&t.setMinutes(t.getMinutes()+n),(n=+e.hours||0)&&t.setHours(t.getHours()+n),(n=+e.weeks||0)&&(n*=p),(n+=+e.days||0)&&t.setDate(t.getDate()+n),(n=+e.months||0)&&t.setMonth(t.getMonth()+n),(n=+e.millennia||0)&&(n*=N),(n+=+e.centuries||0)&&(n*=E),(n+=+e.decades||0)&&(n*=v),(n+=+e.years||0)&&t.setFullYear(t.getFullYear()+n),t)}var I,S,x,F,C,O,B,A;function L(e,t){return B(e)+(1===e?I[t]:S[t])}function Y(){}function H(e,t,n,s,a,r){return e[n]>=0&&(t+=e[n],delete e[n]),(t/=a)+1<=1?0:e[s]>=0?(e[s]=+(e[s]+t).toFixed(r),function(e,t){switch(t){case"seconds":if(e.seconds!==f||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==w||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==g||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==p||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==D(e.refMonth)/p||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==k||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==v||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==E||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==N||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}(e,s),0):t}function W(e,t){var n,s,a,r=H(e,0,"milliseconds","seconds",h,t);if(r&&((r=H(e,r,"seconds","minutes",f,t))&&(r=H(e,r,"minutes","hours",w,t))&&(r=H(e,r,"hours","days",g,t))&&(r=H(e,r,"days","weeks",p,t))&&(r=H(e,r,"weeks","months",D(e.refMonth)/p,t))&&(r=H(e,r,"months","years",(n=e.refMonth,s=n.getTime(),(a=new Date(s)).setFullYear(n.getFullYear()+1),Math.round((a.getTime()-s)/y)/D(e.refMonth)),t))&&(r=H(e,r,"years","decades",v,t))&&(r=H(e,r,"decades","centuries",E,t))&&(r=H(e,r,"centuries","millennia",N,t))))throw new Error("Fractional unit overflow")}function U(e,m,y,D,j,I){var S=new Date;if(e.start=m=m||S,e.end=y=y||S,e.units=D,e.value=y.getTime()-m.getTime(),e.value<0){var x=y;y=m,m=x}e.refMonth=new Date(m.getFullYear(),m.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=y.getFullYear()-m.getFullYear(),e.months=y.getMonth()-m.getMonth(),e.weeks=0,e.days=y.getDate()-m.getDate(),e.hours=y.getHours()-m.getHours(),e.minutes=y.getMinutes()-m.getMinutes(),e.seconds=y.getSeconds()-m.getSeconds(),e.milliseconds=y.getMilliseconds()-m.getMilliseconds(),function(e){var t;for(e.milliseconds<0?(t=M(-e.milliseconds/h),e.seconds-=t,e.milliseconds+=t*h):e.milliseconds>=h&&(e.seconds+=b(e.milliseconds/h),e.milliseconds%=h),e.seconds<0?(t=M(-e.seconds/f),e.minutes-=t,e.seconds+=t*f):e.seconds>=f&&(e.minutes+=b(e.seconds/f),e.seconds%=f),e.minutes<0?(t=M(-e.minutes/w),e.hours-=t,e.minutes+=t*w):e.minutes>=w&&(e.hours+=b(e.minutes/w),e.minutes%=w),e.hours<0?(t=M(-e.hours/g),e.days-=t,e.hours+=t*g):e.hours>=g&&(e.days+=b(e.hours/g),e.hours%=g);e.days<0;)e.months--,e.days+=T(e.refMonth,1);e.days>=p&&(e.weeks+=b(e.days/p),e.days%=p),e.months<0?(t=M(-e.months/k),e.years-=t,e.months+=t*k):e.months>=k&&(e.years+=b(e.months/k),e.months%=k),e.years>=v&&(e.decades+=b(e.years/v),e.years%=v,e.decades>=E&&(e.centuries+=b(e.decades/E),e.decades%=E,e.centuries>=N&&(e.millennia+=b(e.centuries/N),e.centuries%=N)))}(e),function(e,m,y,M){var D=0;!(m&d)||D>=y?(e.centuries+=e.millennia*N,delete e.millennia):e.millennia&&D++,!(m&c)||D>=y?(e.decades+=e.centuries*E,delete e.centuries):e.centuries&&D++,!(m&u)||D>=y?(e.years+=e.decades*v,delete e.decades):e.decades&&D++,!(m&l)||D>=y?(e.months+=e.years*k,delete e.years):e.years&&D++,!(m&i)||D>=y?(e.months&&(e.days+=T(e.refMonth,e.months)),delete e.months,e.days>=p&&(e.weeks+=b(e.days/p),e.days%=p)):e.months&&D++,!(m&o)||D>=y?(e.days+=e.weeks*p,delete e.weeks):e.weeks&&D++,!(m&r)||D>=y?(e.hours+=e.days*g,delete e.days):e.days&&D++,!(m&a)||D>=y?(e.minutes+=e.hours*w,delete e.hours):e.hours&&D++,!(m&s)||D>=y?(e.seconds+=e.minutes*f,delete e.minutes):e.minutes&&D++,!(m&n)||D>=y?(e.milliseconds+=e.seconds*h,delete e.seconds):e.seconds&&D++,m&t&&!(D>=y)||W(e,M)}(e,D,j,I)}finally{delete e.refMonth}return e}function R(e,o,i,l,u){var c;i=+i||m,l=l>0?l:NaN,u=u>0?u<20?Math.round(u):20:0;var d=null;"function"==typeof e?(c=e,e=null):e instanceof Date||(null!==e&&isFinite(e)?e=new Date(+e):("object"==typeof d&&(d=e),e=null));var y=null;if("function"==typeof o?(c=o,o=null):o instanceof Date||(null!==o&&isFinite(o)?o=new Date(+o):("object"==typeof o&&(y=o),o=null)),d&&(e=j(d,o)),y&&(o=j(y,e)),!e&&!o)return new Y;if(!c)return U(new Y,e,o,i,l,u);var k,v=function(e){return e&t?h/30:e&n?h:e&s?h*f:e&a?h*f*w:e&r?h*f*w*g:h*f*w*g*p}(i),E=function(){c(U(new Y,e,o,i,l,u),k)};return E(),k=setInterval(E,v)}Y.prototype.toString=function(e){var t=A(this),n=t.length;if(!n)return e?""+e:C;if(1===n)return t[0];var s=x+t.pop();return t.join(F)+s},Y.prototype.toHTML=function(e,t){e=e||"span";var n=A(this),s=n.length;if(!s)return(t=t||C)?"<"+e+">"+t+"</"+e+">":t;for(var a=0;a<s;a++)n[a]="<"+e+">"+n[a]+"</"+e+">";if(1===s)return n[0];var r=x+n.pop();return n.join(F)+r},Y.prototype.addTo=function(e){return j(this,e)},A=function(e){var t=[],n=e.millennia;return n&&t.push(O(n,10)),(n=e.centuries)&&t.push(O(n,9)),(n=e.decades)&&t.push(O(n,8)),(n=e.years)&&t.push(O(n,7)),(n=e.months)&&t.push(O(n,6)),(n=e.weeks)&&t.push(O(n,5)),(n=e.days)&&t.push(O(n,4)),(n=e.hours)&&t.push(O(n,3)),(n=e.minutes)&&t.push(O(n,2)),(n=e.seconds)&&t.push(O(n,1)),(n=e.milliseconds)&&t.push(O(n,0)),t},R.MILLISECONDS=t,R.SECONDS=n,R.MINUTES=s,R.HOURS=a,R.DAYS=r,R.WEEKS=o,R.MONTHS=i,R.YEARS=l,R.DECADES=u,R.CENTURIES=c,R.MILLENNIA=d,R.DEFAULTS=m,R.ALL=d|c|u|l|i|o|r|a|s|n|t;var _=R.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var t=e.singular||[];t.split&&(t=t.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var s=0;s<=10;s++)I[s]=t[s]||I[s],S[s]=n[s]||S[s]}"string"==typeof e.last&&(x=e.last),"string"==typeof e.delim&&(F=e.delim),"string"==typeof e.empty&&(C=e.empty),"function"==typeof e.formatNumber&&(B=e.formatNumber),"function"==typeof e.formatter&&(O=e.formatter)}},P=R.resetFormat=function(){I=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),S=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),x=" and ",F=", ",C="",B=function(e){return e},O=L};R.setLabels=function(e,t,n,s,a,r,o){_({singular:e,plural:t,last:n,delim:s,empty:a,formatNumber:r,formatter:o})},R.resetLabels=P,P(),e&&e.exports?e.exports=R:"function"==typeof window.define&&void 0!==window.define.amd&&window.define("countdown",[],function(){return R})}(e)},DfTf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oweek",function(){var e=n("NjP4");return{page:e.default||e}}])},N9px:function(e,t,n){"use strict";var s=n("0iUn"),a=n("sLSF"),r=n("MI3g"),o=n("a7VT"),i=n("AT/M"),l=n("Tit0"),u=n("q1tI"),c=n.n(u),d=n("YFqc"),m=n.n(d),h=n("QKO/"),f=(n("cGbl"),n("RQmk")),w=function(e){function t(e){var n;return Object(s.default)(this,t),(n=Object(r.default)(this,Object(o.default)(t).call(this,e))).state={hidden:!0},n.toggleNavbar=n.toggleNavbar.bind(Object(i.default)(n)),n}return Object(l.default)(t,e),Object(a.default)(t,[{key:"toggleNavbar",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"oweek-navbar-open",onClick:this.toggleNavbar},c.a.createElement("img",{src:"https://icon.now.sh/burger/3A3F4F/30",alt:"Menu"})),c.a.createElement("div",{className:this.state.hidden?"oweek-navbar-hidden":"oweek-navbar-visible"},c.a.createElement("div",{className:"oweek-navbar-close",onClick:this.toggleNavbar},c.a.createElement("img",{src:"https://icon.now.sh/x/DCDFE5/20",alt:"X"})),c.a.createElement(m.a,{href:"/oweek"},c.a.createElement("a",null,c.a.createElement(h.Box,{width:[.2,.3],ml:"auto",mr:"auto"},c.a.createElement(h.Image,{src:"../../../static/logo.svg",alt:""})))),f.a.map(function(e){var t=e.name,n=e.link;return c.a.createElement(m.a,{href:n,key:t},c.a.createElement("div",{className:"oweek-navbar-link"},c.a.createElement("p",null,t)))})))}}]),t}(c.a.Component);t.a=w},NjP4:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),a=n.n(s),r=n("AM0r"),o=n("N9px"),i=n("0iUn"),l=n("sLSF"),u=n("MI3g"),c=n("a7VT"),d=n("AT/M"),m=n("Tit0"),h=n("QKO/"),f=(n("72SP"),n("8ZBC")),w=function(e){function t(e){var n;return Object(i.default)(this,t),(n=Object(u.default)(this,Object(c.default)(t).call(this,e))).state={time:f(new Date(2019,7,18)).toString(),myInterval:null},n.updateTime=n.updateTime.bind(Object(d.default)(n)),n}return Object(m.default)(t,e),Object(l.default)(t,[{key:"updateTime",value:function(){this.setState({time:f(new Date(2019,7,18)).toString()})}},{key:"componentDidMount",value:function(){this.state.myInterval=window.setInterval(this.updateTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.myInterval)}},{key:"render",value:function(){return a.a.createElement("div",{className:"oweek-countdown"},a.a.createElement("h3",null,this.state.time),a.a.createElement("h2",null,"until O-Week!"))}}]),t}(a.a.Component),g=function(){return a.a.createElement("div",{className:"oweek-homepage"},a.a.createElement(h.Flex,{flexDirection:"row",justifyContent:"center",flexWrap:"wrap"},a.a.createElement(h.Box,{width:[1,1/3]},a.a.createElement(h.Image,{src:"../../../static/oweek/mcscottishyurt.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3]},a.a.createElement(h.Image,{src:"../../../static/oweek/cardmovin.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},a.a.createElement("h1",{className:"oweek-welcome"},"Welcome to McMurtry!")),a.a.createElement(h.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},a.a.createElement("h1",{className:"oweek-welcome"},"Advance to Go-Week")),a.a.createElement(h.Box,{width:[1,1/3],style:{margin:0,padding:0}},a.a.createElement(h.Image,{src:"../../../static/oweek/jumpingCoords.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3]},a.a.createElement(h.Image,{src:"../../../static/oweek/colorceleb.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3],style:{margin:0,padding:0}},a.a.createElement(h.Image,{src:"../../../static/oweek/mcteam.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3]},a.a.createElement(h.Image,{src:"../../../static/oweek/building.jpg",alt:""})),a.a.createElement(h.Box,{width:[1,1/3],style:{backgroundColor:"#87799C",marginBottom:"4px"}},a.a.createElement(w,null))))};n("NHen"),t.default=function(){return a.a.createElement("div",null,a.a.createElement(r.a,null),a.a.createElement(o.a,null),a.a.createElement(g,null))}},RQmk:function(e){e.exports={a:[{name:"About the Theme",link:"/oweek/theme"},{name:"Meet the Coords",link:"/oweek/coords"},{name:"O-Week Groups",link:"/oweek/oweekgroups"},{name:"Move-In Info",link:"/oweek/movein"},{name:"Tour of McMurtry",link:"/oweek/mcmtour"},{name:"Your Room",link:"/oweek/yourroom"},{name:"O-Week Book",link:"/oweek/oweekbook"},{name:"Contact Info",link:"/oweek/oweekcontact"}]}}},[["DfTf","5d41","9da1","ad9d"]]]);