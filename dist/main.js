!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e){this.name=e}savingData(){db.collection("projects").add({name:this.name})}}class c{constructor(e,t,n,o,c){this.title=e,this.description=t,this.date=n,this.project=o,this.priority=c}savingTodo(){db.collection(`projects/${this.project}/toDos`).add({title:this.title,description:this.description,date:this.date,priority:this.priority})}}class r{static homePage(){function e(e,t){for(const n in t)e.setAttribute(n,t[n])}const t=document.createElement("div");e(t,{class:"remove_cont"});const n=document.createElement("section");e(n,{class:"main_body"});const o=document.createElement("div");e(o,{class:"container-fluid"});const c=document.createElement("div");e(c,{class:"row"});const r=document.createElement("div");e(r,{class:"col-md-6"});const a=document.createElement("div");e(a,{class:"bac_image"}),r.append(a),c.append(r);const d=document.createElement("div");e(d,{class:"col-md-6"});const i=document.createElement("div");e(i,{class:"title_desc"});const s=document.createElement("h1");s.innerText="create a To Do List and keep truck of your daily tasks",i.append(s);const m=document.createElement("p");m.innerText="be on time with your tasks and complete them. Set daily goals and achieve them",i.append(m);const l=document.createElement("button");e(l,{class:"create_btn"}),l.innerText="The best task management tool",i.append(l),d.append(i),c.append(d),o.append(c),n.append(o),t.append(n);const p=document.getElementById("content");return p.append(t),p}static CreateProjectForm(){function e(e,t){for(const n in t)e.setAttribute(n,t[n])}const t=document.createElement("div");e(t,{class:"remove_cont"});const n=document.createElement("div");e(n,{class:"container project_todo"});const o=document.createElement("img");e(o,{src:"/assets/145.png",alt:"images"}),n.append(o);const c=document.createElement("form");e(c,{id:"form-projects"});const r=document.createElement("div");e(r,{class:"row"});const a=document.createElement("div");e(a,{class:"col-25"});const d=document.createElement("label");e(d,{for:"project_title"}),d.innerText="Project name",a.append(d);const i=document.createElement("div");e(i,{class:"col-75"});const s=document.createElement("input");e(s,{type:"text",id:"project_title",name:"project_title",placeholder:"Project Name",id:"project_name",required:""}),i.append(s),r.append(a),r.append(i);const m=document.createElement("div");e(m,{class:"row"});const l=document.createElement("input");e(l,{id:"sub_btn",type:"submit"}),l.innerText="submit",c.append(r),c.append(m),c.append(l),n.append(c),t.append(n);const p=document.getElementById("content");return p.append(t),p}static savingProject(){const e=document.getElementById("form-projects"),t=document.getElementById("project_name");e.addEventListener("submit",()=>{new o(t.value).savingData(),document.querySelector(".remove_cont").remove(),this.DisplayProjects()})}static DisplayProjects(){function e(e,t){for(const n in t)e.setAttribute(n,t[n])}const t=document.getElementById("content"),n=document.createElement("div");e(n,{class:"remove_cont"});const o=document.createElement("div");e(o,{class:"list-container container"});const c=document.createElement("ul");db.collection("projects").get().then(t=>{t.docs.forEach(t=>{const n=document.createElement("li"),o=document.createElement("button");e(o,{"data-index":""+t.id}),o.innerText=t.data().name,n.append(o),c.append(n)})}),o.append(c),n.append(o),t.append(n)}static CreateTodoForm(){function e(e,t){for(const n in t)e.setAttribute(n,t[n])}const t=document.createElement("form");e(t,{id:"todo-form"});const n=document.createElement("label");e(n,{for:"title"}),n.innerText="title:(this field cant be empty)";const o=document.createElement("input");e(o,{type:"text",name:"title",id:"title_todo",required:""}),t.append(n),t.append(o);const c=document.createElement("label");e(c,{for:"description"}),c.innerText="description:";const r=document.createElement("textarea");e(r,{required:"",rows:"4",cols:"50",naame:"comment",form:"usrform",id:"text_area"}),t.append(c),t.append(r);const a=document.createElement("label");e(a,{for:"date"}),a.innerText="date:(this field cant be empty)";const d=document.createElement("input");e(d,{type:"date",name:"date",id:"date",required:""}),t.append(a),t.append(d);const i=document.createElement("label");e(i,{for:"projects"}),i.innerText="projects:(this field cant be empty)";const s=document.createElement("select");e(s,{name:"projects",id:"project",required:""}),db.collection("projects").get().then(t=>{t.docs.forEach(t=>{const n=document.createElement("option");e(n,{value:t.id}),n.innerText=t.data().name,s.append(n)})}),t.append(i),t.append(s);const m=document.createElement("label");e(m,{for:"priority"}),m.innerText="priority:(this field cant be empty)";const l=document.createElement("select");e(l,{name:"priority",id:"priority",required:""});const p=["low","medium","high"];for(let t=0;t<p.length;t++){const n=document.createElement("option");e(n,{value:p[t]}),n.innerText=p[t],l.append(n)}t.append(m),t.append(l);const u=document.createElement("input");e(u,{type:"submit",id:"submit_todo"}),u.innerText="submit to do list";const E=document.createElement("div");e(E,{class:"remove_cont container",id:"container-to-do"}),t.append(u),E.append(t);document.getElementById("content").append(E)}static savingTodo(){const e=document.getElementById("todo-form"),t=document.getElementById("title_todo"),n=document.getElementById("text_area"),o=document.getElementById("date"),r=document.getElementById("project"),a=document.getElementById("priority");e.addEventListener("submit",e=>{e.preventDefault();new c(t.value,n.value,o.value,r.value,a.value).savingTodo(),document.querySelector(".remove_cont").remove(),this.displayToDo()})}static displayToDo(){function e(e,t){for(const n in t)e.setAttribute(n,t[n])}const t=document.getElementById("content"),n=document.createElement("div");e(n,{class:"remove_cont"});const o=document.createElement("div");e(o,{class:"list-container container"});const c=document.createElement("ul");db.collection("projects").get().then(r=>{r.docs.forEach(t=>{db.collection(`projects/${t.id}/toDos`).get().then(t=>{t.docs.forEach(t=>{const n=document.createElement("li"),o=document.createElement("h3");e(o,{class:"header_list"}),o.innerText=t.data().title;const r=document.createElement("p");e(r,{class:"desc"}),r.innerText=t.data().description;const a=document.createElement("p");e(a,{class:"date"}),a.innerText="date: "+t.data().date;const d=document.createElement("p");e(d,{class:"priority"}),d.innerText="priority: "+t.data().priority,n.append(o),n.append(r),n.append(a),n.append(d),c.append(n)})})}),o.append(c),n.append(o),t.append(n)})}}r.homePage();const a=[document.getElementById("home"),document.getElementById("projects"),document.getElementById("create_projects"),document.getElementById("create_to_do"),document.getElementById("to_do_list")];a[0].addEventListener("click",()=>{document.querySelector(".remove_cont").remove(),r.homePage()}),a[1].addEventListener("click",()=>{document.querySelector(".remove_cont").remove(),r.DisplayProjects()}),a[2].addEventListener("click",()=>{document.querySelector(".remove_cont").remove(),r.CreateProjectForm(),r.savingProject()}),a[3].addEventListener("click",()=>{document.querySelector(".remove_cont").remove(),r.CreateTodoForm(),r.savingTodo()}),a[4].addEventListener("click",()=>{document.querySelector(".remove_cont").remove(),r.displayToDo()})}]);