(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Keepr")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.$auth.isAuthenticated,expression:"$auth.isAuthenticated"}],staticClass:"nav-link",attrs:{to:{name:"vault"}}},[t._v("Vault")])],1)]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("\n        Login\n      ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d");c.a.create({baseURL:"http://localhost:3000"});var p={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=p,v=a("2877"),m=Object(v["a"])(d,o,i,!1,null,null,null),h=m.exports,b={name:"App",async beforeCreate(){await Object(u["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:h}},f=b,_=(a("5c0b"),Object(v["a"])(f,r,n,!1,null,null,null)),g=_.exports,w=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("Welcome, Check out the dashboard and add some cool stuff to your vaults!")])])}],C={name:"home",computed:{user(){return this.$store.state.user}}},V=C,$=Object(v["a"])(V,y,K,!1,null,null,null),k=$.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container-fluid"},[a("h1",[t._v("WELCOME TO THE KEEPR")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.createKeep()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Name,expression:"newKeep.Name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter name...."},domProps:{value:t.newKeep.Name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"img"}},[t._v("img URL")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Img,expression:"newKeep.Img"}],staticClass:"form-control",attrs:{type:"text",name:"img",placeholder:"Enter imgUrl...."},domProps:{value:t.newKeep.Img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Img",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Description,expression:"newKeep.Description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Enter description...."},domProps:{value:t.newKeep.Description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Description",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[t._v("SUBMIT")])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},t._l(t.keeps,(function(e){return a("div",{key:e.id,staticClass:"col-md-3 border rounded m-3"},[a("h1",[t._v(t._s(e.Name))]),t._v(" "),a("h1",[t._v(t._s(e.Description))]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{src:e.Img,alt:""}}),t._v(" "),a("div",{staticClass:"row m-2"},[a("button",{staticClass:"btn btn-danger m-2",on:{click:function(a){t.deleteKeep(e._id)}}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"dropdown m-2"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Add To Vault")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.Vaults,(function(s){return a("button",{key:s.id,staticClass:"dropdown-item btn btn-primary btn-sm",on:{click:function(a){a.preventDefault(),t.addToVault(s._id,e._id)}}},[t.$auth.user.email==s.creatorEmail?a("div",[t._v(t._s(s.Name))]):t._e()])})))])])])})))])},E=[],N={data(){return{newKeep:{}}},mounted(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults"),this.$store.dispatch("setBearer",this.$auth.bearer),console.log(this.$auth.user.sub)},computed:{keeps(){return this.$store.state.publicKeeps},Vaults(){return this.$store.state.vaults}},methods:{deleteKeep(t){this.$store.dispatch("deleteKeep",t)},createKeep(){this.$store.dispatch("createKeep",this.newKeep)},addToVault(t,e,a){let s={keepId:e,vaultId:t,userId:this.$auth.user.email};console.log(s),this.$store.dispatch("addToVault",s)}},component:{}},D=N,O=Object(v["a"])(D,x,E,!1,null,null,null),T=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault container-fluid"},[a("h1",[t._v("WELCOME TO THE VAULT")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.createVault()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.Name,expression:"newVault.Name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter vault name...."},domProps:{value:t.newVault.Name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"Name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Description"}},[t._v("Description")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.Description,expression:"newVault.Description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Enter Description...."},domProps:{value:t.newVault.Description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"Description",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[t._v("SUBMIT")])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},t._l(t.Vaults,(function(e){return a("div",{key:e.id,staticClass:"m-2"},[t.$auth.user.email==e.creatorEmail?a("div",[a("div",{staticClass:"col-12 border rounded m-3"},[a("h1",[t._v("vault:")]),t._v(" "),a("h1",[t._v(t._s(e.Name))]),t._v(" "),a("h1",[t._v(t._s(e.Description))]),t._v(" "),a("hr"),t._v(" "),t._l(t.Keeps,(function(s){return a("div",{key:s.id},t._l(t.VaultKeeps,(function(r){return a("div",{key:r.id},[s._id==r.keepId&&r.vaultId==e._id&&r.creatorEmail==e.creatorEmail?a("div",[a("p",[t._v("Name: "+t._s(s.Name))]),t._v(" "),a("p",[t._v("Description: "+t._s(s.Description))]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{src:s.Img,alt:""}}),t._v(" "),a("button",{staticClass:"btn btn-warning btn-block",on:{click:function(e){t.deleteVaultKeep(r._id)}}},[t._v("Delete Keep From Vault")]),t._v(" "),a("hr")]):t._e()])})))})),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.deleteVault(e._id)}}},[t._v("Delete Vault")])],2)]):t._e()])})))])},I=[],P={data(){return{newVault:{}}},mounted(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults"),this.$store.dispatch("getVaultKeeps"),this.$store.dispatch("setBearer",this.$auth.bearer)},computed:{Keeps(){return this.$store.state.publicKeeps},Vaults(){return this.$store.state.vaults},VaultKeeps(){return this.$store.state.vaultKeeps}},methods:{createVault(){this.$store.dispatch("createVault",this.newVault)},deleteVault(t){this.$store.dispatch("deleteVault",t)},deleteVaultKeep(t){this.$store.dispatch("deleteVaultKeep",t)}},component:{}},B=P,M=Object(v["a"])(B,j,I,!1,null,null,null),U=M.exports;s["a"].use(w["a"]);var S=new w["a"]({routes:[{path:"/",name:"home",component:k},{path:"/dashboard",name:"dashboard",component:T},{path:"/vault",name:"vault",component:U,beforeEnter:u["b"]},{path:"*",redirect:"/",component:k}]}),A=a("2f62");s["a"].use(A["a"]);let L=location.host.includes("localhost")?"http://localhost:3000/":"/",R=c.a.create({baseURL:L+"api",timeout:3e3,withCredentials:!0});var W=new A["a"].Store({state:{publicKeeps:[],vaults:[],vaultKeeps:[]},mutations:{setKeeps(t,e){t.publicKeeps=e},setVaults(t,e){t.vaults=e},setVaultKeeps(t,e){t.vaultKeeps=e}},actions:{setBearer({},t){R.defaults.headers.authorization=t},resetBearer(){R.defaults.headers.authorization=""},async getKeeps({commit:t,dispatch:e}){try{let e=await R.get("keeps");t("setKeeps",e.data)}catch(a){console.error(a)}},async getVaults({commit:t,dispatch:e}){try{let e=await R.get("vaults");t("setVaults",e.data)}catch(a){console.error(a)}},async getVaultKeeps({commit:t,dispatch:e}){try{let e=await R.get("vaultkeeps");t("setVaultKeeps",e.data)}catch(a){console.error(a)}},async createKeep({commit:t,dispatch:e},a){await R.post("keeps",a);e("getKeeps")},async createVault({commit:t,dispatch:e},a){await R.post("vaults",a);e("getVaults")},async addToVault({commit:t,dispatch:e},a){await R.post("vaultkeeps",a);e("getVaults"),e("getKeeps")},async deleteKeep({commit:t,dispatch:e},a){try{await R.delete("keeps/"+a),e("getKeeps")}catch(s){console.error(s)}},async deleteVaultKeep({commit:t,dispatch:e},a){try{await R.delete("vaultkeeps/"+a),e("getVaultKeeps")}catch(s){console.error(s)}},async deleteVault({commit:t,dispatch:e},a){try{await R.delete("vaults/"+a),e("getVaults")}catch(s){console.error(s)}}}});const z="dev-4agk-0aw.auth0.com",H="keeper.com",J="CPCduiwuIKz1iuCAxYZ3OU76HO06nTd8";s["a"].use(u["a"],{domain:z,clientId:J,audience:H,onRedirectCallback:t=>{S.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:S,store:W,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(t,e,a){}});