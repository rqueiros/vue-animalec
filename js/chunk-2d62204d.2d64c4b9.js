(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d62204d"],{"14fa":function(t,e,r){"use strict";var s=r("f2e5"),o=r.n(s);o.a},"8a05":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-section"},[r("b-container",[r("HeaderPage",{attrs:{title:"Editar Utilizador"}}),r("b-row",[r("b-col",{attrs:{cols:"2"}}),r("b-col",{attrs:{cols:"8"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtName",placeholder:"escreve nome",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.user.type,expression:"user.type"}],staticClass:"form-control form-control-lg",attrs:{id:"sltType"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("-- SELECIONA TIPO --")]),r("option",{attrs:{value:"admin"}},[t._v("ADMINISTRADOR")]),r("option",{attrs:{value:"user"}},[t._v("UTILIZADOR NORMAL")])])]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.birth_date,expression:"user.birth_date"}],staticClass:"form-control form-control-lg",attrs:{type:"date",onmouseenter:"(this.type='date')",onmouseleave:"(this.type='text')",id:"txtBirthDate",placeholder:"escreve data de nascimento",required:""},domProps:{value:t.user.birth_date},on:{input:function(e){e.target.composing||t.$set(t.user,"birth_date",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.description,expression:"user.description"}],staticClass:"form-control form-control-lg",attrs:{id:"txtDescription",placeholder:"escreve descrição",cols:"30",rows:"10",required:""},domProps:{value:t.user.description},on:{input:function(e){e.target.composing||t.$set(t.user,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.location.city,expression:"user.location.city"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCity",placeholder:"escreve cidade",required:""},domProps:{value:t.user.location.city},on:{input:function(e){e.target.composing||t.$set(t.user.location,"city",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.location.country,expression:"user.location.country"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCountry",placeholder:"escreve país",required:""},domProps:{value:t.user.location.country},on:{input:function(e){e.target.composing||t.$set(t.user.location,"country",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.gamification.points,expression:"user.gamification.points"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtPoints",placeholder:"escreve pontos"},domProps:{value:t.user.gamification.points},on:{input:function(e){e.target.composing||t.$set(t.user.gamification,"points",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.gamification.quiz,expression:"user.gamification.quiz"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtCountry",placeholder:"escreve último nível de quiz completo"},domProps:{value:t.user.gamification.quiz},on:{input:function(e){e.target.composing||t.$set(t.user.gamification,"quiz",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.auth.username,expression:"user.auth.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtEmail",placeholder:"escreve username",required:""},domProps:{value:t.user.auth.username},on:{input:function(e){e.target.composing||t.$set(t.user.auth,"username",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.auth.password,expression:"user.auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtPassword",placeholder:"escreve password",required:""},domProps:{value:t.user.auth.password},on:{input:function(e){e.target.composing||t.$set(t.user.auth,"password",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.auth.password,expression:"user.auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtConfirmPassword",placeholder:"confirma password"},domProps:{value:t.user.auth.password},on:{input:function(e){e.target.composing||t.$set(t.user.auth,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-outline-success btn-lg mr-2",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-edit"}),t._v(" ATUALIZAR")]),r("router-link",{staticClass:"btn btn-outline-danger btn-lg",attrs:{to:{name:"listUsers"},tag:"button"}},[r("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR")])],1)]),r("b-col",{attrs:{cols:"2"}})],1)],1)],1)},o=[],a=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),i=r("e680"),n=r("e9c6"),c=r("a18c"),u=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"EditUser",components:{HeaderPage:n["a"]},data:function(){return{user:{}}},computed:d({},Object(u["b"])("user",["getUsersById","getMessage"])),methods:{update:function(){var t=this;this.$store.dispatch("".concat(i["d"],"/").concat(i["b"]),this.$data.user).then((function(){t.$alert(t.getMessage,"Utilizador atualizado!","success"),c["a"].push({name:"listUsers"})})).catch((function(e){return t.$alert("".concat(e.message),"Erro","error")}))}},created:function(){this.user=this.getUsersById(this.$route.params.userId)}},m=p,v=r("2877"),f=Object(v["a"])(m,s,o,!1,null,null,null);e["default"]=f.exports},e9c6:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{staticClass:"text-center"},[r("b-col",[r("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),r("b-row",{staticClass:"text-center"},[r("b-col",[r("div",{staticClass:"divider-custom"},[r("div",{staticClass:"divider-custom-line"}),r("div",{staticClass:"divider-custom-icon"},[r("i",{staticClass:"fas fa-star"})]),r("div",{staticClass:"divider-custom-line"})])])],1)],1)},o=[],a={name:"HeaderPage",props:["title"]},i=a,n=(r("14fa"),r("2877")),c=Object(n["a"])(i,s,o,!1,null,"4b0c4b4e",null);e["a"]=c.exports},f2e5:function(t,e,r){}}]);
//# sourceMappingURL=chunk-2d62204d.2d64c4b9.js.map