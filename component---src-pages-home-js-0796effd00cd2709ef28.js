(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{275:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(266),c=n(267),i=n(296);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(c.a,{title:"Home"}),o.a.createElement(i.a,null))}},294:function(e,t,n){"use strict";n.d(t,"j",function(){return h}),n.d(t,"k",function(){return b}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return v}),n.d(t,"a",function(){return O}),n.d(t,"g",function(){return p}),n.d(t,"b",function(){return C}),n.d(t,"h",function(){return k}),n.d(t,"d",function(){return j}),n.d(t,"i",function(){return E}),n.d(t,"c",function(){return z});var a=25,o=!0,r=[],c=0,i=0,l=0,u=0,s=!1,m=!1;function f(){var e;e=o?[c,i,l,u,s,m]:[i,c,u,l,s,m],r.push(e)}function d(){(c>=a||i>=a)&&(c-i>=2&&(s=!0,l+=1),i-c>=2&&(s=!0,u+=1))}function h(){o=!o}function b(){if(r.length>0)if(o){var e=r.pop();c=e[0],i=e[1],l=e[2],u=e[3],s=e[4],m=e[5]}else{var t=r.pop();i=t[0],c=t[1],u=t[2],l=t[3],s=t[4],m=t[5]}}function g(){s||(f(),o?c+=1:i+=1,d())}function v(){s||(f(),o?i+=1:c+=1,d())}function O(){f(),s=!0,c>i?l+=1:u+=1}function p(){f(),s=!1,c=0,i=0}function C(){m||(f(),m=!0)}function k(){o=!0,r=[],c=0,i=0,l=0,u=0,s=!1,m=!1}function j(e){e.length&&(e=JSON.parse(e),o=e.orderAB,c=e.gameA,i=e.gameB,l=e.matchA,u=e.matchB,s=e.gameDone,m=e.matchDone,r=JSON.parse(e.stack))}function E(){var e={};return e.orderAB=o,e.gameA=c,e.gameB=i,e.matchA=l,e.matchB=u,e.gameDone=s,e.matchDone=m,e.stack=JSON.stringify(r),JSON.stringify(e)}function z(){return o?[c,i,l,u,s,m]:[i,c,u,l,s,m]}},296:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(268),c=n(263),i=n(179),l=n(266),u=n(267),s=n(270),m=n(265),f=Object(i.a)(function(e){return{root:{flexGrow:1},button:{width:"80vw",height:"40vh",borderRadius:20,color:function(e){return e.color},backgroundColor:function(e){return e.backgroundColor},"&:hover, &:focus":{color:function(e){return e.color},backgroundColor:function(e){return e.backgroundColor}}},teamLabel:{marginTop:20,fontSize:24},teamScore:{fontSize:100,marginBottom:20,transform:function(e){return e.horizontal?"rotate(-90deg)":""}}}});function d(e){var t=f(e);return o.a.createElement(m.a,{"aria-label":"team button",disabled:e.disabled,className:t.button,variant:"contained",color:"secondary",onClick:function(){e.onButtonClick()}},o.a.createElement(c.a,{container:!0,spacing:2,justify:"space-around",direction:"column"},o.a.createElement(c.a,{item:!0,className:t.teamLabel},e.winner?e.winner:e.label),o.a.createElement(c.a,{item:!0,className:t.teamScore},e.score)))}n(17),n(32),n(8),n(35);var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=a.createContext&&a.createContext(h),g=function(){return(g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n};function O(e){return function(t){return a.createElement(p,g({attr:g({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return a.createElement(t.tag,g({key:n},t.attr),e(t.child))})}(e.child))}}function p(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var r=e.attr,c=e.title,i=v(e,["attr","title"]);return a.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:g({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==b?a.createElement(b.Consumer,null,function(e){return t(e)}):t(h)}var C=function(e){return O({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"}}]})(e)};C.displayName="FaArrowsAltV";var k=function(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)};k.displayName="FaBars";var j=function(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"}}]})(e)};j.displayName="FaQuestion";var E=function(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"}}]})(e)};E.displayName="FaRegChartBar";var z=n(269),S=Object(i.a)(function(e){return{root:{flexGrow:1}}});function w(e){var t=S();return o.a.createElement(c.a,{className:t.root,container:!0,spacing:2,justify:"space-around",alignItems:"center",direction:"row"},o.a.createElement(c.a,{item:!0,xs:3},o.a.createElement(z.a,{horizontal:e.horizontal,color:e.color,backgroundColor:e.backgroundColor,onButtonClick:e.onScoresClick},o.a.createElement(E,{className:t.icon,size:24,"aria-hidden":"true"}))),o.a.createElement(c.a,{item:!0,xs:3},o.a.createElement(z.a,{horizontal:e.horizontal,color:e.color,backgroundColor:e.backgroundColor,onButtonClick:e.onAboutClick},o.a.createElement(j,{className:t.icon,size:24,"aria-hidden":"true"}))),o.a.createElement(c.a,{item:!0,xs:3},o.a.createElement(z.a,{horizontal:e.horizontal,color:e.color,backgroundColor:e.backgroundColor,onButtonClick:e.onSwapTeamsClick},o.a.createElement(C,{className:t.icon,size:24,"aria-hidden":"true"}))),o.a.createElement(c.a,{item:!0,xs:3},o.a.createElement(z.a,{horizontal:e.horizontal,color:e.color,backgroundColor:e.backgroundColor,onButtonClick:e.onSettingsClick},o.a.createElement(k,{className:t.icon,size:24,"aria-hidden":"true"}))))}var y=n(271),N=n(294),B=Object(i.a)(function(e){return{root:{flexGrow:1,height:"95vh",marginTop:"2.5vh"}}});t.a=function(){var e=B(),t=Object(a.useState)("0000"),n=t[0],i=t[1],m=Object(a.useState)(!1),f=m[0],h=m[1],b=Object(a.useState)("white"),g=b[0],v=b[1],O=Object(a.useState)("red"),p=O[0],C=O[1],k=Object(a.useState)("US"),j=k[0],E=k[1],z=Object(a.useState)(0),S=z[0],x=z[1],H=Object(a.useState)(0),A=H[0],D=H[1],J=Object(a.useState)("white"),V=J[0],M=J[1],F=Object(a.useState)("blue"),T=F[0],L=F[1],P=Object(a.useState)("THEM"),G=P[0],R=P[1],I=Object(a.useState)(0),Q=I[0],U=I[1],W=Object(a.useState)(0),q=W[0],K=W[1],X=Object(a.useState)(!1),Y=X[0],Z=X[1],$=Object(a.useState)(!1),_=$[0],ee=$[1],te=function(){var e={};e.phone=n,e.horizontal=f,e.color1=g,e.backgroundColor1=p,e.label1=j,e.match1=S,e.score1=A,e.color2=V,e.backgroundColor2=T,e.label2=G,e.match2=Q,e.score2=q,e.gameDone=Y,e.matchDone=_,e.engine=Object(N.i)(),e=JSON.stringify(e),Object(y.b)("allSettings",e)};Object(a.useEffect)(function(){var e;(e=Object(y.a)("allSettings"))&&((e=JSON.parse(e)).engine&&Object(N.d)(e.engine),i(e.phone),h(e.horizontal),v(e.color1),C(e.backgroundColor1),E(e.label1),x(e.match1),D(e.score1),M(e.color2),L(e.backgroundColor2),R(e.label2),U(e.match2),K(e.score2),Z(e.gameDone),ee(e.matchDone))},[]),Object(a.useEffect)(function(){te()},[A,q,j,G]);var ne=function(){var e,t,n,a,o,r,c=Object(N.c)();e=c[0],t=c[1],n=c[2],a=c[3],o=c[4],r=c[5],D(e),K(t),x(n),U(a),Z(o),ee(r)};return o.a.createElement(l.a,null,o.a.createElement(u.a,{title:"Home"}),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"home-vertical"},o.a.createElement(c.a,{className:e.root,container:!0,spacing:0,justify:"space-around",direction:"column"},o.a.createElement(d,{disabled:Y||_,winner:"",horizontal:f,color:g,backgroundColor:p,label:j,score:A,onButtonClick:function(){Object(N.e)(),ne()}}),o.a.createElement(w,{horizontal:f,color:"black",backgroundColor:"gray",onScoresClick:function(){te(),Object(r.a)("/scores/")},onAboutClick:function(){te(),Object(r.a)("/about/")},onSwapTeamsClick:function(){var e,t,n,a,o;e=g,t=p,n=j,a=S,o=A,v(V),C(T),E(G),x(Q),D(q),M(e),L(t),R(n),U(a),K(o),Object(N.j)(),te()},onSettingsClick:function(){te(),Object(r.a)("/settings/")}}),o.a.createElement(d,{disabled:Y||_,winner:"",horizontal:f,color:V,backgroundColor:T,label:G,score:q,onButtonClick:function(){Object(N.f)(),ne()}}))),o.a.createElement("div",{className:"home-horizontal"},o.a.createElement(s.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-home-js-0796effd00cd2709ef28.js.map