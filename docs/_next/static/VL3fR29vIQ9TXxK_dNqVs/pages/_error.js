(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/a9y":function(e,t,n){"use strict";var a=n("KI45"),l=a(n("0iUn")),r=a(n("sLSF")),i=a(n("MI3g")),o=a(n("a7VT")),d=a(n("Tit0")),u=n("KI45");t.__esModule=!0,t.default=void 0;var s=u(n("q1tI")),c=u(n("PgRs")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return(0,l.default)(this,t),(0,i.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:g.error},s.default.createElement(c.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:g.h1},e):null,s.default.createElement("div",{style:g.desc},s.default.createElement("h2",{style:g.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(s.default.Component);t.default=p,p.displayName="ErrorPage";var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},PgRs:function(e,t,n){e.exports=n("m/Pd")}},[["04ac",1,0]]]);