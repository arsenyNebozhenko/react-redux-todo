(this["webpackJsonpreact-redux-todo"]=this["webpackJsonpreact-redux-todo"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),c=(a(20),a(21),a(3));a(27),a(28);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createElement("path",{d:"m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0"}),m=function(e){var t=e.svgRef,a=e.title,n=u(e,["svgRef","title"]);return o.a.createElement("svg",i({viewBox:"0 0 512 512",ref:t},n),a?o.a.createElement("title",null,a):null,d)},s=o.a.forwardRef((function(e,t){return o.a.createElement(m,i({svgRef:t},e))})),p=(a.p,function(e){var t=e.toggleExtendForm;return o.a.createElement("button",{className:"todo-add-toggle-extend-button",type:"button",onClick:t},o.a.createElement(s,null))}),f=(a(29),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),E=function(e){var t=(e=new Date(""+e)).getDate(),a=f[e.getMonth()],n=e.getHours(),o=e.getMinutes();return"".concat(t," ").concat(a," ").concat(n,":").concat(o)},v=function(e){return e&&""+e!=="Invalid Date"},_=function(e){var t,a=e.name,n=e.value,r=e.updateFormValue,l=function(e){var t=e.target,a=t.name,n=t.value;r(a,n)};switch(a){case"importance":return o.a.createElement("select",{className:"todo-add-input todo-add-input--select",name:a,onChange:l},o.a.createElement("option",{value:"important"},"important"),o.a.createElement("option",{value:"regular"},"regular"),o.a.createElement("option",{value:"not important"},"not important"));default:return o.a.createElement("input",{className:"todo-add-input"+("dateExpires"===a?" todo-add-input--time":""),required:"title"===a,type:"dateExpires"===a?"datetime-local":"text",placeholder:(t=a,t.split(" ").map((function(e){return e.split("").map((function(e,t){return 0===t?e.toUpperCase():e})).join("")})).join(" ")),name:a,value:n,onChange:l})}},g=function(e){return function(t){t({type:"DISPLAY_ITEMS_BY_IMPORTANCE",payload:{value:e}})}},y=function(e){return function(t){t({type:"UPDATE_FILTER_FORM_VALUE",payload:{value:e}})}},b={updateFormValue:function(e,t){return function(a){a({type:"UPDATE_FORM_VALUE",payload:{name:e,value:t}})}},updateFilterFormValue:y,displayItemsByImportance:g,toggleExtendForm:function(){return function(e){e({type:"TOGGLE_EXTEND_FORM"})}},addItem:function(e){return function(t){t({type:"ADD_ITEM",payload:{todo:e}})}}},I=Object(c.b)((function(e){var t=e.todoAddForm;return{title:t.title,description:t.description,importance:t.importance,dateExpires:t.dateExpires,isExtended:t.isExtended}}),b)((function(e){var t=e.title,a=e.description,n=e.importance,r=e.dateExpires,l=e.updateFormValue,c=e.updateFilterFormValue,i=e.displayItemsByImportance,u=e.isExtended,d=e.toggleExtendForm,m=e.addItem;return o.a.createElement("form",{className:"todo-add-form",autoComplete:"off",onSubmit:function(e){e.preventDefault(),m({id:Math.random(),title:t,description:a,importance:n,dateAdded:new Date,dateExpires:new Date(Date.parse(r)),status:"active",isHidden:!1}),l("title",""),l("description",""),l("dateExpires",""),c("all"),i("all")}},o.a.createElement(p,{isExtended:u,toggleExtendForm:d}),o.a.createElement(_,{name:"title",value:t,updateFormValue:l}),u&&o.a.createElement(_,{name:"description",value:a,updateFormValue:l}),u&&o.a.createElement(_,{name:"importance",updateFormValue:l}),u&&o.a.createElement(_,{name:"dateExpires",value:r,updateFormValue:l}),o.a.createElement("button",{className:"todo-add-form__button"},"+"))})),O=(a(30),a(31),function(e){var t=e.todo,a=t.id,n=t.title,r=t.description,l=t.dateAdded,c=t.dateExpires,i=t.dateCompleted,u=t.status,d=t.isHidden,m=e.deleteItem,s=e.setItemProp,p=d?" todo-item--hidden":"completed"===u?" todo-item--completed":"failed"===u?" todo-item--failed":"";return o.a.createElement("li",{className:"todo-item"+p},o.a.createElement("button",{className:"todo-item__button todo-item__button--toggle",onClick:function(){s(a,"dateCompleted","completed"===u?null:new Date),s(a,"status","active"===u?"completed":"completed"===u?"active":"completed")}},"\u2714"),o.a.createElement("div",{className:"todo-item__text"},o.a.createElement("input",{className:"todo-item__title",autoComplete:"off",type:"text",name:"title",value:n,onChange:function(e){var t=e.target,n=t.name,o=t.value;return s(a,n,o)}}),r&&o.a.createElement("input",{className:"todo-item__description",autoComplete:"off",type:"text",name:"description",value:r,onChange:function(e){var t=e.target,n=t.name,o=t.value;return s(a,n,o)}})),o.a.createElement("ul",{className:"todo-item__dates"},o.a.createElement("li",{className:"todo-item__date"},"Added: ",E(l)),v(c)&&o.a.createElement("li",{className:"todo-item__date"},"Expires: ",E(c)),i&&o.a.createElement("li",{className:"todo-item__date"},"Completed: ",E(i))),o.a.createElement("button",{className:"todo-item__button todo-item__button--delete",onClick:function(){return m(a)}},"\xd7"))}),F={deleteItem:function(e){return function(t){t({type:"DELETE_ITEM",payload:{id:e}})}},detectItemsFailure:function(){return function(e){e({type:"DETECT_ITEMS_FAILURE"})}},setItemProp:function(e,t,a){return function(n){n({type:"SET_ITEM_PROP",payload:{id:e,key:t,value:a}})}}},h=Object(c.b)((function(e){return{todos:e.todos}}),F)((function(e){var t=e.todos,a=e.deleteItem,r=e.detectItemsFailure,l=e.setItemProp;Object(n.useEffect)((function(){r();var e=setInterval((function(){r()}),1500);return function(){return clearInterval(e)}}),[r]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(t))}),[t]);var c=t.map((function(e,t){return o.a.createElement(O,{key:t,todo:e,deleteItem:a,detectItemsFailure:r,setItemProp:l})}));return o.a.createElement("ul",{className:"todo-list"},c)})),x=(a(32),{displayItemsByImportance:g,updateFilterFormValue:y}),T=Object(c.b)((function(e){return{value:e.todoFilterForm.value}}),x)((function(e){var t=e.value,a=e.updateFilterFormValue,r=e.displayItemsByImportance;Object(n.useEffect)((function(){r(t)}),[r,t]);return o.a.createElement("form",{className:"todo-filter-form"},o.a.createElement("h4",{className:"todo-filter-form__title"},"Show"),o.a.createElement("select",{className:"todo-filter-form__select",value:t,onChange:function(e){var t=e.target.value;a(t),r(t)}},o.a.createElement("option",{value:"all"},"all"),o.a.createElement("option",{value:"important"},"important"),o.a.createElement("option",{value:"regular"},"regular"),o.a.createElement("option",{value:"not important"},"not important")))})),j=function(){return o.a.createElement("div",{className:"todo"},o.a.createElement(I,null),o.a.createElement(h,null),o.a.createElement(T,null))},N=(a(33),function(){return o.a.createElement("div",{className:"app"},o.a.createElement(j,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(13),A=a(4),w=a(6),M=a(1),C=a(14),P=JSON.parse(localStorage.getItem("todos"))||[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload?t.payload:t,o=n.todo,r=n.id,l=n.key,c=n.value;switch(a){case"ADD_ITEM":return[].concat(Object(C.a)(e),[o]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==r}));case"DISPLAY_ITEMS_BY_IMPORTANCE":return"all"===c?e.map((function(e){return Object(M.a)({},e,{isHidden:!1})})):e.map((function(e){return e.importance===c?Object(M.a)({},e,{isHidden:!1}):Object(M.a)({},e,{isHidden:!0})}));case"DETECT_ITEMS_FAILURE":return e.map((function(e){return"active"===e.status&&v(e.dateExpires)&&new Date(e.dateExpires).getTime()<=new Date(e.dateAdded).getTime()?Object(M.a)({},e,{status:"failed"}):e}));case"SET_ITEM_PROP":return e.map((function(e){return e.id===r?Object(M.a)({},e,Object(w.a)({},l,c)):e}));default:return e}},S={title:"",description:"",importance:"important",dateAdded:"",dateExpires:"",isExtended:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload?t.payload:t,o=n.name,r=n.value;switch(a){case"UPDATE_FORM_VALUE":return Object(M.a)({},e,Object(w.a)({},o,r));case"TOGGLE_EXTEND_FORM":return Object(M.a)({},e,{isExtended:!e.isExtended});default:return e}},L={value:"all"},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload?t.payload:t,o=n.value;switch(a){case"UPDATE_FILTER_FORM_VALUE":return Object(M.a)({},e,{value:o});default:return e}},U=Object(A.c)({todos:R,todoAddForm:V,todoFilterForm:k}),B=[D.a],J=Object(A.e)(U,{},Object(A.d)(A.a.apply(void 0,B)));l.a.render(o.a.createElement(c.a,{store:J},o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.cf84cf14.chunk.js.map