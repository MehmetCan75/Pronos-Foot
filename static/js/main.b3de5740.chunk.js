(this["webpackJsonppronos-foot"]=this["webpackJsonppronos-foot"]||[]).push([[0],{106:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(33),i=s.n(n),l=(s(48),s(49),s(6)),r=(s(18),s.p+"static/media/lorient.848cb48d.svg"),j=s.p+"static/media/lille.fcfea09a.svg",m=(s.p,s.p,s.p+"static/media/strasbourg.9ef2fb02.svg"),o=(s.p,s.p,s.p,s.p,s.p+"static/media/clermont.6267fd3f.svg"),d=s.p+"static/media/troyes.918f0c52.svg",b=(s.p,s.p,s.p,s.p+"static/media/montpellier.34a9b394.png"),u=(s.p,s.p,s.p,s.p,s(34)),h=s(0),O=function(){return Object(h.jsx)("p",{className:"showLoad",children:Object(h.jsx)(u.BlockLoading,{})})},x=s(23),p=s(37),N=s(38),f=s(41),v=s(40),g=s(15),G=s.n(g),y=G.a.create({baseURL:"https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/"});s(106);function S(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{className:"playerName",children:["Nom : ",e.name]}),Object(h.jsxs)("ul",{className:"displayResult",children:[Object(h.jsxs)("li",{children:["Clermont Foot - Strasbourg : ",e.afirstGame]}),Object(h.jsxs)("li",{children:["Lille - Lorient : ",e.bsecondGame]}),Object(h.jsxs)("li",{children:["Montpellier - Troyes : ",e.cthirdGame]})]})]})}var C=function(e){Object(f.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(p.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={results:[]},e}return Object(N.a)(s,[{key:"componentDidMount",value:function(){var e=this;y.get("/result.json").then((function(t){console.log(t.data);var s=[];for(var a in t.data)s.push(Object(x.a)(Object(x.a)({},t.data[a]),{},{id:a}));e.setState({results:s})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"showMerci",children:[Object(h.jsx)("h2",{children:"R\xe9sultats des joueurs pr\xe9c\xe9dents"}),this.state.results.map((function(e){return Object(h.jsx)(S,{name:e.name,afirstGame:e.afirstGame,bsecondGame:e.bsecondGame,cthirdGame:e.cthirdGame,dfourthGame:e.dfourthGame,efifthGame:e.efifthGame,fsixthGame:e.fsixthGame,gseventhGame:e.gseventhGame,heigthGame:e.heigthGame,ininethGame:e.ininethGame,jtenthGame:e.jtenthGame},e.id)}))]})}}]),s}(a.Component);function w(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)({}),i=Object(l.a)(n,2),u=i[0],x=i[1],p=Object(a.useState)({}),N=Object(l.a)(p,2),f=N[0],v=N[1],g=Object(a.useState)({}),y=Object(l.a)(g,2),S=(y[0],y[1],Object(a.useState)({})),w=Object(l.a)(S,2),L=(w[0],w[1],Object(a.useState)({})),M=Object(l.a)(L,2),k=(M[0],M[1],Object(a.useState)({})),F=Object(l.a)(k,2),q=(F[0],F[1],Object(a.useState)({})),A=Object(l.a)(q,2),E=(A[0],A[1],Object(a.useState)({})),P=Object(l.a)(E,2),T=(P[0],P[1],Object(a.useState)({})),R=Object(l.a)(T,2),z=(R[0],R[1],Object(a.useState)("")),B=Object(l.a)(z,2),D=B[0],I=B[1],J=Object(a.useState)(""),W=Object(l.a)(J,2),H=W[0],U=W[1];return Object(h.jsxs)("div",{className:"pronos",children:[Object(h.jsx)("div",{className:"title-fr"}),H?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(O,{})}),Object(h.jsx)("h2",{className:"showMerci",children:"Merci"}),Object(h.jsx)(C,{})]}):Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),G.a.post("https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/result.json",{afirstGame:s,bsecondGame:u,cthirdGame:f,name:D}).then((function(e){console.log(e),U({thanks:"Merci"})})).catch((function(e){console.log(e)}))},className:"form",children:[Object(h.jsxs)("div",{className:"games",children:[Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:o,alt:"Clermont Foot",className:"teams-pic"}),"Clermont Foot"]}),Object(h.jsx)("input",{id:"firstGame",value:"Clermont Foot",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)},required:!0}),Object(h.jsxs)("div",{className:"nul",children:["Nul",Object(h.jsx)("input",{id:"nul",value:"nul",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsx)("input",{id:"firstGame",value:"Strasbourg",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)}}),Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:m,alt:"Strasbourg",className:"teams-pic"}),"Strasbourg"]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"games",children:[Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:j,alt:"Lille",className:"teams-pic"}),"Lille"]}),Object(h.jsx)("input",{id:"secondGame",value:"Lille",name:"secondGame",type:"radio",onChange:function(e){return x(e.target.value)},required:!0}),Object(h.jsxs)("div",{className:"nul",children:["Nul",Object(h.jsx)("input",{id:"nul",value:"nul",name:"secondGame",type:"radio",onChange:function(e){return x(e.target.value)}})]}),Object(h.jsx)("input",{id:"secondGame",value:"Lorient",name:"secondGame",type:"radio",onChange:function(e){return x(e.target.value)}}),Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:r,alt:"Lorient",className:"teams-pic"}),"Lorient"]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"games",children:[Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:b,alt:"Montpellier",className:"teams-pic"}),"Montpellier"]}),Object(h.jsx)("input",{id:"cthirdGame",value:"Montpellier",name:"cthirdGame",type:"radio",onChange:function(e){return v(e.target.value)},required:!0}),Object(h.jsxs)("div",{className:"nul",children:["Nul",Object(h.jsx)("input",{id:"nul",value:"nul",name:"cthirdGame",type:"radio",onChange:function(e){return v(e.target.value)}})]}),Object(h.jsx)("input",{id:"cthirdGame",value:"Troyes",name:"cthirdGame",type:"radio",onChange:function(e){return v(e.target.value)}}),Object(h.jsxs)("div",{className:"teamsName",children:[Object(h.jsx)("img",{src:d,alt:"Troyes",className:"teams-pic"}),"Troyes"]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Votre nom :",Object(h.jsx)("input",{id:"name",value:D,name:"platform",type:"text",onChange:function(e){return I(e.target.value)},required:!0}),Object(h.jsx)("button",{children:"Envoyer"})]}),Object(h.jsx)("div",{className:"title-fr"})]})}s(107);var L=s(14),M=s.p+"static/media/football.e76db989.svg";s(108);function k(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(window.innerWidth),i=Object(l.a)(n,2),r=i[0],j=i[1];Object(a.useEffect)((function(){var e=function(){j(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=function(){c(!s)};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"titre",children:"Pronos Foot"}),Object(h.jsx)("img",{src:M,alt:"foot-img",className:"foot-img"})]}),Object(h.jsxs)("nav",{children:[(s||r>500)&&Object(h.jsxs)("ul",{className:"liste",children:[Object(h.jsx)(L.b,{to:"/Pronos-Foot",onClick:m,children:Object(h.jsx)("li",{className:"items",children:"Accueil"})}),Object(h.jsx)(L.b,{to:"/classement",onClick:m,children:Object(h.jsx)("li",{className:"items",children:"Classement"})})]}),Object(h.jsx)("button",{onClick:function(){c(!s)},className:"btn",children:"Menu"})]})]})}s(111);function F(){return Object(h.jsxs)("div",{className:"classement",children:[Object(h.jsx)("h2",{className:"title-ranking",children:"Classement"}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Nom"}),Object(h.jsx)("li",{className:"nm",children:"Matchs pronostiqu\xe9s"}),Object(h.jsx)("li",{className:"nm",children:"Points"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Mehmet"}),Object(h.jsx)("li",{className:"nm",children:"185"}),Object(h.jsx)("li",{className:"nm",children:"95"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Fateh"}),Object(h.jsx)("li",{className:"nm",children:"185"}),Object(h.jsx)("li",{className:"nm",children:"88"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Isma\xebl"}),Object(h.jsx)("li",{className:"nm",children:"175"}),Object(h.jsx)("li",{className:"nm",children:"84"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"St\xe9phane"}),Object(h.jsx)("li",{className:"nm",children:"165"}),Object(h.jsx)("li",{className:"nm",children:"78"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Nicolas"}),Object(h.jsx)("li",{className:"nm",children:"185"}),Object(h.jsx)("li",{className:"nm",children:"77"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Anthony"}),Object(h.jsx)("li",{className:"nm",children:"165"}),Object(h.jsx)("li",{className:"nm",children:"68"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Youssef"}),Object(h.jsx)("li",{className:"nm",children:"119"}),Object(h.jsx)("li",{className:"nm",children:"56"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Abder"}),Object(h.jsx)("li",{className:"nm",children:"138"}),Object(h.jsx)("li",{className:"nm",children:"56"})]}),Object(h.jsxs)("ul",{className:"name-games-points",children:[Object(h.jsx)("li",{className:"nm",children:"Hamed"}),Object(h.jsx)("li",{className:"nm",children:"16"}),Object(h.jsx)("li",{className:"nm",children:"8"})]})]})}var q=s(4);var A=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(L.a,{children:[Object(h.jsx)(k,{}),Object(h.jsxs)(q.c,{children:[Object(h.jsx)(q.a,{path:"/Pronos-Foot",exact:!0,component:w}),Object(h.jsx)(q.a,{path:"/classement",exact:!0,component:F})]})]})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},18:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){}},[[112,1,2]]]);
//# sourceMappingURL=main.b3de5740.chunk.js.map