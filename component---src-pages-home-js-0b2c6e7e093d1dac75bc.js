(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(255),c=n(256),i=n(273);e.default=function(){return a.a.createElement(r.a,null,a.a.createElement(c.a,{title:"Home"}),a.a.createElement(i.a,null))}},255:function(t,e,n){"use strict";var o=n(0),a=n.n(o);n(266);e.a=function(t){var e=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a.a.createElement("main",null,e)))}},256:function(t,e,n){"use strict";var o=n(258),a=n(0),r=n.n(a),c=n(267),i=n.n(c);function l(t){var e=t.description,n=t.lang,a=t.meta,c=t.title,l=o.data.site,u=e||l.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},257:function(t,e,n){var o;t.exports=(o=n(261))&&o.default||o},258:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Simple Score - Volleyball (PWA)","description":"A PWA application that allows easy score keeping of a volleyball match and send results as text messages.","author":"Al Piepho"}}}}')},260:function(t,e,n){"use strict";var o=n(0),a=n.n(o),r=n(89);n.d(e,"a",function(){return r.navigate});n(257),n(15).default.enqueue,a.a.createContext({})},261:function(t,e,n){"use strict";n.r(e);n(39);var o=n(0),a=n.n(o),r=n(113);e.default=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json)):null}},262:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var o=n(0),a=n.n(o),r=n(323),c=n(319),i=Object(c.a)(function(t){return{button:{width:"100%",height:"8vh",borderRadius:20,color:function(t){return t.color},backgroundColor:function(t){return t.backgroundColor},"&:hover, &:focus":{color:function(t){return t.color},backgroundColor:function(t){return t.backgroundColor}},transform:function(t){return t.horizontal?"rotate(-90deg)":""}}}});function l(t){var e=i(t);return a.a.createElement(r.a,{"aria-label":"control button",className:e.button,variant:"contained",color:"primary",onClick:function(){t.onButtonClick()}},t.children)}},264:function(t,e,n){"use strict";var o=n(0),a=n.n(o),r=n(320),c=n(321),i=n(319),l=Object(i.a)(function(t){return{root:{flexGrow:1,marginTop:80},title:{width:"80vw"},button:{width:"80vw"},textfield:{width:400},buttonRow:{width:"80vw",marginTop:10}}});e.a=function(){var t=l();return a.a.createElement(r.a,{className:t.root,container:!0,spacing:0,justify:"space-around",direction:"column"},a.a.createElement(c.a,{className:t.paragraph,variant:"body1",gutterBottom:!0},"Automatic formating for horizontal or landscape mode is not available. A workaround is to lock the screen rotation on your phone and use the settings for horizontal mode. Then all the text will be rotated 90 degrees."))}},265:function(t,e,n){"use strict";function o(t){var e={};if(window.localStorage)try{e=window.localStorage.getItem("simple-score-volleyball")}catch(n){}return e}function a(t,e){window.localStorage&&window.localStorage.setItem("simple-score-volleyball",e)}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},269:function(t,e,n){"use strict";n.d(e,"j",function(){return b}),n.d(e,"k",function(){return g}),n.d(e,"e",function(){return h}),n.d(e,"f",function(){return p}),n.d(e,"a",function(){return v}),n.d(e,"g",function(){return k}),n.d(e,"b",function(){return w}),n.d(e,"h",function(){return C}),n.d(e,"d",function(){return E}),n.d(e,"i",function(){return j}),n.d(e,"c",function(){return O});var o=25,a=!0,r=[],c=0,i=0,l=0,u=0,s=!1,m=!1;function d(){var t;t=a?[c,i,l,u,s,m]:[i,c,u,l,s,m],r.push(t)}function f(){(c>=o||i>=o)&&(c-i>=2&&(s=!0,l+=1),i-c>=2&&(s=!0,u+=1))}function b(){a=!a}function g(){if(r.length>0)if(a){var t=r.pop();c=t[0],i=t[1],l=t[2],u=t[3],s=t[4],m=t[5]}else{var e=r.pop();i=e[0],c=e[1],u=e[2],l=e[3],s=e[4],m=e[5]}}function h(){s||(d(),a?c+=1:i+=1,f())}function p(){s||(d(),a?i+=1:c+=1,f())}function v(){d(),s=!0,c>i?l+=1:u+=1}function k(){d(),s=!1,c=0,i=0}function w(){m||(d(),m=!0)}function C(){a=!0,r=[],c=0,i=0,l=0,u=0,s=!1,m=!1}function E(t){t.length&&(t=JSON.parse(t),a=t.orderAB,c=t.gameA,i=t.gameB,l=t.matchA,u=t.matchB,s=t.gameDone,m=t.matchDone,r=JSON.parse(t.stack))}function j(){var t={};return t.orderAB=a,t.gameA=c,t.gameB=i,t.matchA=l,t.matchB=u,t.gameDone=s,t.matchDone=m,t.stack=JSON.stringify(r),JSON.stringify(t)}function O(){return a?[c,i,l,u,s,m]:[i,c,u,l,s,m]}},273:function(t,e,n){"use strict";var o=n(0),a=n.n(o),r=n(260),c=n(320),i=n(319),l=n(255),u=n(256),s=n(264),m=n(323),d=Object(i.a)(function(t){return{root:{flexGrow:1},button:{width:"80vw",height:"40vh",borderRadius:20,color:function(t){return t.color},backgroundColor:function(t){return t.backgroundColor},"&:hover, &:focus":{color:function(t){return t.color},backgroundColor:function(t){return t.backgroundColor}}},teamLabel:{marginTop:20,fontSize:24},teamScore:{fontSize:100,marginBottom:20,transform:function(t){return t.horizontal?"rotate(-90deg)":""}}}});function f(t){var e=d(t);return a.a.createElement(m.a,{"aria-label":"team button",disabled:t.disabled,className:e.button,variant:"contained",color:"secondary",onClick:function(){t.onButtonClick()}},a.a.createElement(c.a,{container:!0,spacing:2,justify:"space-around",direction:"column"},a.a.createElement(c.a,{item:!0,className:e.teamLabel},t.winner?t.winner:t.label),a.a.createElement(c.a,{item:!0,className:e.teamScore},t.score)))}var b=n(282),g=n(262),h=Object(i.a)(function(t){return{root:{flexGrow:1}}});function p(t){var e=h();return a.a.createElement(c.a,{className:e.root,container:!0,spacing:2,justify:"space-around",alignItems:"center",direction:"row"},a.a.createElement(c.a,{item:!0,xs:3},a.a.createElement(g.a,{horizontal:t.horizontal,color:t.color,backgroundColor:t.backgroundColor,onButtonClick:t.onScoresClick},a.a.createElement(b.d,{className:e.icon,size:24,"aria-hidden":"true"}))),a.a.createElement(c.a,{item:!0,xs:3},a.a.createElement(g.a,{horizontal:t.horizontal,color:t.color,backgroundColor:t.backgroundColor,onButtonClick:t.onAboutClick},a.a.createElement(b.c,{className:e.icon,size:24,"aria-hidden":"true"}))),a.a.createElement(c.a,{item:!0,xs:3},a.a.createElement(g.a,{horizontal:t.horizontal,color:t.color,backgroundColor:t.backgroundColor,onButtonClick:t.onSwapTeamsClick},a.a.createElement(b.a,{className:e.icon,size:24,"aria-hidden":"true"}))),a.a.createElement(c.a,{item:!0,xs:3},a.a.createElement(g.a,{horizontal:t.horizontal,color:t.color,backgroundColor:t.backgroundColor,onButtonClick:t.onSettingsClick},a.a.createElement(b.b,{className:e.icon,size:24,"aria-hidden":"true"}))))}var v=n(265),k=n(269),w=Object(i.a)(function(t){return{root:{flexGrow:1,height:"95vh",marginTop:"2.5vh"}}});e.a=function(){var t=w(),e=Object(o.useState)(!1),n=e[0],i=e[1],m=Object(o.useState)("white"),d=m[0],b=m[1],g=Object(o.useState)("red"),h=g[0],C=g[1],E=Object(o.useState)("US"),j=E[0],O=E[1],S=Object(o.useState)(0),y=S[0],z=S[1],N=Object(o.useState)(0),x=N[0],B=N[1],A=Object(o.useState)("white"),T=A[0],J=A[1],D=Object(o.useState)("blue"),M=D[0],R=D[1],G=Object(o.useState)("THEM"),P=G[0],H=G[1],I=Object(o.useState)(0),W=I[0],F=I[1],L=Object(o.useState)(0),q=L[0],U=L[1],V=Object(o.useState)(!1),K=V[0],Q=V[1],X=Object(o.useState)(!1),Y=X[0],Z=X[1],$=function(){var t={};t.horizontal=n,t.color1=d,t.backgroundColor1=h,t.label1=j,t.match1=y,t.score1=x,t.color2=T,t.backgroundColor2=M,t.label2=P,t.match2=W,t.score2=q,t.gameDone=K,t.matchDone=Y,t.engine=Object(k.i)(),t=JSON.stringify(t),Object(v.b)("allSettings",t)};Object(o.useEffect)(function(){var t;(t=Object(v.a)("allSettings"))&&((t=JSON.parse(t)).engine&&Object(k.d)(t.engine),i(t.horizontal),b(t.color1),C(t.backgroundColor1),O(t.label1),z(t.match1),B(t.score1),J(t.color2),R(t.backgroundColor2),H(t.label2),F(t.match2),U(t.score2),Q(t.gameDone),Z(t.matchDone))},[]),Object(o.useEffect)(function(){$()},[x,q,j,P]);var _=function(){var t,e,n,o,a,r,c=Object(k.c)();t=c[0],e=c[1],n=c[2],o=c[3],a=c[4],r=c[5],B(t),U(e),z(n),F(o),Q(a),Z(r)};return a.a.createElement(l.a,null,a.a.createElement(u.a,{title:"Home"}),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"home-vertical"},a.a.createElement(c.a,{className:t.root,container:!0,spacing:0,justify:"space-around",direction:"column"},a.a.createElement(f,{disabled:K||Y,winner:"",horizontal:n,color:d,backgroundColor:h,label:j,score:x,onButtonClick:function(){Object(k.e)(),_()}}),a.a.createElement(p,{horizontal:n,color:"black",backgroundColor:"gray",onScoresClick:function(){$(),Object(r.a)("/scores/")},onAboutClick:function(){$(),Object(r.a)("/about/")},onSwapTeamsClick:function(){var t,e,n,o,a;t=d,e=h,n=j,o=y,a=x,b(T),C(M),O(P),z(W),B(q),J(t),R(e),H(n),F(o),U(a),Object(k.j)(),$()},onSettingsClick:function(){$(),Object(r.a)("/settings/")}}),a.a.createElement(f,{disabled:K||Y,winner:"",horizontal:n,color:T,backgroundColor:M,label:P,score:q,onButtonClick:function(){Object(k.f)(),_()}}))),a.a.createElement("div",{className:"home-horizontal"},a.a.createElement(s.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-home-js-0b2c6e7e093d1dac75bc.js.map