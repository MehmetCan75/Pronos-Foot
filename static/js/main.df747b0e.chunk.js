(this["webpackJsonppronos-foot"]=this["webpackJsonppronos-foot"]||[]).push([[0],{106:function(e,s,t){},107:function(e,s,t){},108:function(e,s,t){},111:function(e,s,t){},112:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),n=t(33),i=t.n(n),l=(t(48),t(49),t(6)),j=(t(18),t.p,t.p,t.p,t.p,t.p,t.p+"static/media/angers.6d452cc2.svg"),r=(t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p+"static/media/saint-etienne.b3ff1ee1.svg"),m=(t.p,t.p,t(34)),o=t(1),b=function(){return Object(o.jsx)("p",{className:"showLoad",children:Object(o.jsx)(m.BlockLoading,{})})},d=t(23),h=t(37),O=t(38),u=t(41),x=t(40),p=t(15),f=t.n(p),N=f.a.create({baseURL:"https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/"});t(106);function v(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{className:"playerName",children:["Nom : ",e.name]}),Object(o.jsx)("ul",{className:"displayResult",children:Object(o.jsxs)("li",{children:["Angers - Saint-Etienne : ",e.afirstGame]})})]})}var g=function(e){Object(u.a)(t,e);var s=Object(x.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=s.call.apply(s,[this].concat(c))).state={results:[]},e}return Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.get("/result.json").then((function(s){console.log(s.data);var t=[];for(var a in s.data)t.push(Object(d.a)(Object(d.a)({},s.data[a]),{},{id:a}));e.setState({results:t})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"showMerci",children:[Object(o.jsx)("h2",{children:"R\xe9sultats des joueurs pr\xe9c\xe9dents"}),this.state.results.map((function(e){return Object(o.jsx)(v,{name:e.name,afirstGame:e.afirstGame,bsecondGame:e.bsecondGame,cthirdGame:e.cthirdGame,dfourthGame:e.dfourthGame,efifthGame:e.efifthGame,fsixthGame:e.fsixthGame,gseventhGame:e.gseventhGame,heigthGame:e.heigthGame,ininethGame:e.ininethGame,jtenthGame:e.jtenthGame},e.id)}))]})}}]),t}(a.Component);function G(){var e=Object(a.useState)({}),s=Object(l.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)({}),i=Object(l.a)(n,2),m=(i[0],i[1],Object(a.useState)({})),d=Object(l.a)(m,2),h=(d[0],d[1],Object(a.useState)({})),O=Object(l.a)(h,2),u=(O[0],O[1],Object(a.useState)({})),x=Object(l.a)(u,2),p=(x[0],x[1],Object(a.useState)({})),N=Object(l.a)(p,2),v=(N[0],N[1],Object(a.useState)({})),G=Object(l.a)(v,2),S=(G[0],G[1],Object(a.useState)({})),w=Object(l.a)(S,2),y=(w[0],w[1],Object(a.useState)({})),k=Object(l.a)(y,2),C=(k[0],k[1],Object(a.useState)({})),A=Object(l.a)(C,2),E=(A[0],A[1],Object(a.useState)("")),M=Object(l.a)(E,2),L=M[0],F=M[1],P=Object(a.useState)(""),q=Object(l.a)(P,2),R=q[0],z=q[1];return Object(o.jsxs)("div",{className:"pronos",children:[Object(o.jsx)("div",{className:"title-fr"}),R?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(b,{})}),Object(o.jsx)("h2",{className:"showMerci",children:"Merci"}),Object(o.jsx)(g,{})]}):Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.a.post("https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/result.json",{afirstGame:t,name:L}).then((function(e){console.log(e),z({thanks:"Merci"})})).catch((function(e){console.log(e)}))},className:"form",children:[Object(o.jsxs)("div",{className:"games",children:[Object(o.jsxs)("div",{className:"teamsName",children:[Object(o.jsx)("img",{src:j,alt:"Angers",className:"teams-pic"}),"Angers"]}),Object(o.jsx)("input",{id:"firstGame",value:"Angers",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)},required:!0}),Object(o.jsxs)("div",{className:"nul",children:["Nul",Object(o.jsx)("input",{id:"nul",value:"nul",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)}})]}),Object(o.jsx)("input",{id:"firstGame",value:"Saint-Etienne",name:"firstGame",type:"radio",onChange:function(e){return c(e.target.value)}}),Object(o.jsxs)("div",{className:"teamsName",children:[Object(o.jsx)("img",{src:r,alt:"Saint-Etienne",className:"teams-pic"}),"Saint-Etienne"]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Votre nom :",Object(o.jsx)("input",{id:"name",value:L,name:"platform",type:"text",onChange:function(e){return F(e.target.value)},required:!0}),Object(o.jsx)("button",{children:"Envoyer"})]}),Object(o.jsx)("div",{className:"title-fr"})]})}t(107);var S=t(14),w=t.p+"static/media/football.e76db989.svg";t(108);function y(){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)(window.innerWidth),i=Object(l.a)(n,2),j=i[0],r=i[1];Object(a.useEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=function(){c(!t)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"titre",children:"Pronos Foot"}),Object(o.jsx)("img",{src:w,alt:"foot-img",className:"foot-img"})]}),Object(o.jsxs)("nav",{children:[(t||j>500)&&Object(o.jsxs)("ul",{className:"liste",children:[Object(o.jsx)(S.b,{to:"/Pronos-Foot",onClick:m,children:Object(o.jsx)("li",{className:"items",children:"Accueil"})}),Object(o.jsx)(S.b,{to:"/classement",onClick:m,children:Object(o.jsx)("li",{className:"items",children:"Classement"})})]}),Object(o.jsx)("button",{onClick:function(){c(!t)},className:"btn",children:"Menu"})]})]})}t(111);function k(){return Object(o.jsxs)("div",{className:"classement",children:[Object(o.jsx)("h2",{className:"title-ranking",children:"Classement"}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Nom"}),Object(o.jsx)("li",{className:"nm",children:"Matchs pronostiqu\xe9s"}),Object(o.jsx)("li",{className:"nm",children:"Points"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Mehmet"}),Object(o.jsx)("li",{className:"nm",children:"198"}),Object(o.jsx)("li",{className:"nm",children:"102"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Fateh"}),Object(o.jsx)("li",{className:"nm",children:"198"}),Object(o.jsx)("li",{className:"nm",children:"94"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Isma\xebl"}),Object(o.jsx)("li",{className:"nm",children:"188"}),Object(o.jsx)("li",{className:"nm",children:"92"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"St\xe9phane"}),Object(o.jsx)("li",{className:"nm",children:"178"}),Object(o.jsx)("li",{className:"nm",children:"83"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Nicolas"}),Object(o.jsx)("li",{className:"nm",children:"188"}),Object(o.jsx)("li",{className:"nm",children:"79"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Anthony"}),Object(o.jsx)("li",{className:"nm",children:"178"}),Object(o.jsx)("li",{className:"nm",children:"72"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Abder"}),Object(o.jsx)("li",{className:"nm",children:"148"}),Object(o.jsx)("li",{className:"nm",children:"62"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Youssef"}),Object(o.jsx)("li",{className:"nm",children:"119"}),Object(o.jsx)("li",{className:"nm",children:"56"})]}),Object(o.jsxs)("ul",{className:"name-games-points",children:[Object(o.jsx)("li",{className:"nm",children:"Hamed"}),Object(o.jsx)("li",{className:"nm",children:"19"}),Object(o.jsx)("li",{className:"nm",children:"9"})]})]})}var C=t(4);var A=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(S.a,{children:[Object(o.jsx)(y,{}),Object(o.jsxs)(C.c,{children:[Object(o.jsx)(C.a,{path:"/Pronos-Foot",exact:!0,component:G}),Object(o.jsx)(C.a,{path:"/classement",exact:!0,component:k})]})]})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))},18:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.df747b0e.chunk.js.map