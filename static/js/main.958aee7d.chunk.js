(this["webpackJsonpspace-app"]=this["webpackJsonpspace-app"]||[]).push([[0],{26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(18),r=n.n(s),i=(n(26),n(8)),o=n(2),j=n(9),l=n.n(j),p=n(11),u=n(12),h=n(19),b=n.n(h),d=n(20),f=n.n(d),x=n(1);function O(){var e,t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],s=n[1];if(Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jonguolee.github.io/space-facts/Data/space-facts.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!c)return Object(x.jsx)("div",{});return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(b.a,{cursor:{show:!1},children:Object(x.jsx)("h1",{className:"fancy",children:c.facts[(e=c.facts.length,Math.floor(Math.random()*Math.floor(e)))].content})}),Object(x.jsx)(f.a,{children:Object(x.jsx)(i.b,{className:"home-link",to:"/nasaphoto",children:"Explore the Cosmos"})})]})}function m(){return Object(x.jsx)("div",{className:"navbar",children:Object(x.jsx)("ul",{children:Object(x.jsx)(i.b,{className:"link",path:"/space-app",exact:!0,children:"Take Me Home"})})})}var v="nZa3K1qwwzAbqe4bgdh2ASvANFQTcpzRKkBmCyH1";function g(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"nasa-photo",children:["image"===n.media_type?Object(x.jsx)("img",{src:n.url,alt:n.title,className:"photo"}):Object(x.jsx)("iframe",{title:"space-video",src:n.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:n.title}),Object(x.jsx)("p",{className:"date",children:n.date}),Object(x.jsx)("p",{className:"explanation",children:n.explanation})]})]})]}):Object(x.jsx)("div",{})}n(35);function N(){return Object(x.jsx)(i.a,{children:Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(o.a,{component:O,path:"/space-app"}),Object(x.jsx)(o.a,{component:g,path:"/nasaphoto"})]})})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.958aee7d.chunk.js.map