(this["webpackJsonpreact-redux-example"]=this["webpackJsonpreact-redux-example"]||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),u=(a(22),a(5)),o=a(10),m=a(1),i=a(2),s={};function E(){var e=Object(m.c)((function(e){return e}));return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:"https://www.freepngimg.com/thumb/github/1-2-github-free-png-image.png",width:30,height:30,alt:"",loading:"lazy"}))),e.title?r.a.createElement("h1",{className:"text-center"},e.title):r.a.createElement("h1",{className:"text-center"},"Titulo de la Pagina"))}var d={height:"200px"};function f(){var e=Object(m.c)((function(e){return e}));return r.a.createElement("div",{style:d,className:"col-md-5 mx-auto text-white bg-secondary text-center mt-5"},e.left?r.a.createElement("h1",null,e.left):r.a.createElement("h1",null,"left"))}var h={height:"200px"};function p(){var e=Object(m.c)((function(e){return e}));return r.a.createElement("div",{style:h,className:"col-md-5 mx-auto text-white bg-secondary text-center mt-5"},e.right?r.a.createElement("h1",null,e.right):r.a.createElement("h1",null,"right"))}function b(){return r.a.createElement("div",{className:"col-md-8 mx-auto text-primary bg-dark text-center mt-5 d-flex justify-content-between p-4"},r.a.createElement(f,null),r.a.createElement(p,null))}function g(){var e=Object(m.c)((function(e){return e})).users;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"email"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email))})))))}function v(){var e=Object(m.c)((function(e){return e})),t=Object(m.b)();return r.a.createElement("div",{className:"mt-5 pt-5 text-center text-success Test"},"Edita la pagina",r.a.createElement("div",{className:"form col-md-4 mx-auto"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"titulo",className:"form-control",type:"text",onChange:function(e){t(function(e){return{type:"TEXT_TITLE",payload:e.target.value}}(e))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"left",className:"form-control",type:"text",onChange:function(e){t(function(e){return{type:"TEXT_LEFT",payload:e.target.value}}(e))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"right",className:"form-control",type:"text",onChange:function(e){t(function(e){return{type:"TEXT_RIGHT",payload:e.target.value}}(e))}}))),r.a.createElement("button",{onClick:function(){console.log(e)}},"Show State(Console)"),e.users&&r.a.createElement(g,null))}var y=a(12);function T(){var e=Object(y.a)(["\n    background:red;\n    color:white;\n    &:hover{\n        color:red;\n        background:white;\n    }\n\n"]);return T=function(){return e},e}var x=a(13).a.button(T());function j(){var e=Object(m.b)();return r.a.createElement(x,{onClick:function(){return e((function(e){return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"GET_ITEMS",payload:t})})).catch((function(e){return console.log(e)}))}))}},"Click me style")}var N=Object(u.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT_TITLE":return Object(i.a)(Object(i.a)({},e),{},{title:t.payload});case"TEXT_LEFT":return Object(i.a)(Object(i.a)({},e),{},{left:t.payload});case"TEXT_RIGHT":return Object(i.a)(Object(i.a)({},e),{},{right:t.payload});case"GET_ITEMS":return Object(i.a)(Object(i.a)({},e),{},{users:t.payload});default:return e}}),Object(u.a)(o.a));var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{store:N},r.a.createElement(E,null),r.a.createElement(j,null),r.a.createElement(b,null),r.a.createElement(v,null)))};a(30),a(31);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.edf977f5.chunk.js.map