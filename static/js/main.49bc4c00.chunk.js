(this["webpackJsonpquart-soft"]=this["webpackJsonpquart-soft"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(16),s=n.n(c),a=(n(21),n(22),n(3)),l=n(4),u=n(0),d=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)({}),s=Object(a.a)(c,2),d=s[0],j=s[1],o=Object(i.useState)([]),f=Object(a.a)(o,2),h=f[0],m=f[1],p=Object(i.useState)([]),b=Object(a.a)(p,2),O=b[0],x=b[1],v=Object(i.useState)([]),g=Object(a.a)(v,2),w=g[0],L=g[1],N=Object(i.useState)([]),y=Object(a.a)(N,2),C=y[0],S=y[1],E=Object(i.useState)([]),k=Object(a.a)(E,2),F=k[0],D=k[1],I=Object(i.useState)(""),P=Object(a.a)(I,2),J=P[0],M=P[1];Object(i.useEffect)((function(){l.get("https://swapi.dev/api/films").then((function(e){console.log(e.data.results),r(e.data.results)}))}),[]),Object(i.useEffect)((function(){j(JSON.parse(window.localStorage.getItem("activeFilm")))}),[]),Object(i.useEffect)((function(){window.localStorage.setItem("activeFilm",JSON.stringify(d))}),[d]),Object(i.useEffect)((function(){M(window.localStorage.getItem("value"))}),[]),Object(i.useEffect)((function(){window.localStorage.setItem("value",J)}),[J]),Object(i.useEffect)((function(){l.get("https://swapi.dev/api/people").then((function(e){m(e.data.results)}))}),[]),Object(i.useEffect)((function(){l.get("https://swapi.dev/api/planets").then((function(e){x(e.data.results)}))}),[]),Object(i.useEffect)((function(){l.get("https://swapi.dev/api/species").then((function(e){L(e.data.results)}))}),[]),Object(i.useEffect)((function(){l.get("https://swapi.dev/api/starships").then((function(e){S(e.data.results)}))}),[]),Object(i.useEffect)((function(){l.get("https://swapi.dev/api/vehicles").then((function(e){console.log(e.data.results),D(e.data.results)}))}),[]);var T=new Date(d.created),_=new Date(d.edited),q=n.filter((function(e){return e.title.toLowerCase().includes(J.toLowerCase())})),A=h.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())})),B=O.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())})),H=w.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())})),V=C.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())})),Y=F.filter((function(e){return e.name.toLowerCase().includes(J.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{style:{backgroundColor:"gray",minHeight:"100vh",maxHeight:"100%",width:"20vw"},children:n.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{style:{cursor:"pointer",fontWeight:"600",marginTop:"3px",marginLeft:"5px"},onClick:function(){return j(e)},children:e.title})},e.episode_id)}))}),Object(u.jsxs)("div",{style:{width:"80vw"},children:[Object(u.jsx)("input",{type:"text",placeholder:"Search",style:{margin:"15px 0 15px 15px"},onChange:function(e){return M(e.target.value)}}),Object(u.jsxs)("div",{style:{margin:"15px 0 15px 15px"},children:[""!==J?q.map((function(e){return Object(u.jsx)("div",{children:e.title})})):"",""!==J?A.map((function(e){return Object(u.jsx)("div",{children:e.name})})):"",""!==J?B.map((function(e){return Object(u.jsx)("div",{children:e.name})})):"",""!==J?H.map((function(e){return Object(u.jsx)("div",{children:e.name})})):"",""!==J?V.map((function(e){return Object(u.jsx)("div",{children:e.name})})):"",""!==J?Y.map((function(e){return Object(u.jsx)("div",{children:e.name})})):""]}),Object(u.jsx)("div",{children:0!=Object.keys(d).length?Object(u.jsxs)("div",{style:{paddingLeft:"10px"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Film:"})," ",d.title]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Opening:"}),d.opening_crawl]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Director:"})," ",d.director]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Producers:"})," ",d.producer]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:" Characters:"}),d.characters.map((function(e){return h.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:h.find((function(t){return t.url==e})).name},h.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Created:"}),T.getFullYear(),"-",T.getMonth()+1,"-",T.getDate()]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Edited:"}),_.getFullYear(),"-",_.getMonth()+1,"-",_.getDate()]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Release date:"}),d.release_date]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Planets:"}),d.planets.map((function(e){return O.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:O.find((function(t){return t.url==e})).name},O.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Species:"}),d.species.map((function(e){return w.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:w.find((function(t){return t.url==e})).name},w.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Starships:"}),d.starships.map((function(e){return C.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:C.find((function(t){return t.url==e})).name},C.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"title",children:"Vehicles:"}),d.vehicles.map((function(e){return F.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:F.find((function(t){return t.url==e})).name},F.find((function(t){return t.url==e})).name):""}))]})]}):""}),Object(u.jsx)("div",{children:0!=Object.keys(d).length?Object(u.jsxs)("div",{style:{display:"flex",marginLeft:"10px"},children:[Object(u.jsxs)("div",{className:"link-wrap",children:[Object(u.jsx)("span",{className:"title",children:" Characters:"}),d.characters.map((function(e){return h.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:Object(u.jsx)("a",{href:h.find((function(t){return t.url==e})).url,children:h.find((function(t){return t.url==e})).name})},h.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{className:"link-wrap",children:[Object(u.jsx)("span",{className:"title",children:"Planets:"}),d.planets.map((function(e){return O.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:Object(u.jsx)("a",{href:O.find((function(t){return t.url==e})).url,children:O.find((function(t){return t.url==e})).name})},O.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{className:"link-wrap",children:[Object(u.jsx)("span",{className:"title",children:"Species:"}),d.species.map((function(e){return w.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:Object(u.jsx)("a",{href:w.find((function(t){return t.url==e})).url,children:w.find((function(t){return t.url==e})).name})},w.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{className:"link-wrap",children:[Object(u.jsx)("span",{className:"title",children:"Starships:"}),d.starships.map((function(e){return C.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:Object(u.jsx)("a",{href:C.find((function(t){return t.url==e})).url,children:C.find((function(t){return t.url==e})).name})},C.find((function(t){return t.url==e})).name):""}))]}),Object(u.jsxs)("div",{className:"link-wrap",children:[Object(u.jsx)("span",{className:"title",children:"Vehicles:"}),d.vehicles.map((function(e){return F.some((function(t){return t.url==e}))?Object(u.jsx)("div",{style:{marginLeft:"6vw"},children:Object(u.jsx)("a",{href:F.find((function(t){return t.url==e})).url,children:F.find((function(t){return t.url==e})).name})},F.find((function(t){return t.url==e})).name):""}))]})]}):""})]})]})};var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d,{})})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),o()}},[[42,1,2]]]);
//# sourceMappingURL=main.49bc4c00.chunk.js.map