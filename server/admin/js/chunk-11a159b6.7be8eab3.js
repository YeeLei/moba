(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11a159b6"],{"6d25":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"equip-edit"}},[n("el-card",{staticClass:"box-card"},[n("h1",{staticClass:"title"},[e._v(e._s(e.id?"编辑":"新建")+"装备")]),n("el-input",{attrs:{placeholder:"请输入装备名称"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save(t)}},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,headers:e.uploadHeaders,"on-success":e.uploadSuccess}},[e.model.icon?n("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("div",{staticClass:"save"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},a=[],u=(n("b0c0"),n("96cf"),n("1da1")),i=n("c40e"),o=n("6db7"),c={name:"EquipEdit",mixins:[o["a"]],props:["id"],data:function(){return{model:{name:"",icon:""}}},watch:{$route:function(){this.id?this.getEquipItem():(this.model.name="",this.model.icon="")}},mounted:function(){this.id&&this.getEquipItem()},methods:{save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r,a,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.model,r=n.name,a=n.icon,u=e.id,r){t.next=5;break}return e.$message.error("装备名称不能为空"),t.abrupt("return");case 5:if(a){t.next=8;break}return e.$message.error("请先上传装备图片"),t.abrupt("return");case 8:if(!u){t.next=14;break}return t.next=11,Object(i["j"])({id:u,name:r,icon:a});case 11:o=t.sent,t.next=17;break;case 14:return t.next=16,Object(i["h"])({name:r,icon:a});case 16:o=t.sent;case 17:if(1!=o.status){t.next=20;break}return e.$message.error(o.msg),t.abrupt("return");case 20:e.$message.success(o.msg),e.$router.push("/goods/equipList");case 22:case"end":return t.stop()}}),t)})))()},getEquipItem:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["f"])({id:e.id});case 2:n=t.sent,e.model.name=n.data.name,e.model.icon=n.data.icon;case 5:case"end":return t.stop()}}),t)})))()}}},s=c,d=(n("b6c6"),n("2877")),l=Object(d["a"])(s,r,a,!1,null,"0f7241b1",null);t["default"]=l.exports},"6db7":function(e,t,n){"use strict";t["a"]={computed:{uploadUrl:function(){return Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_BASE_API?Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_BASE_API+"/upload/images":"/admin/upload/images"},uploadHeaders:function(){return{Authorization:localStorage.getItem("token")||""}}},methods:{uploadSuccess:function(e){this.model.icon=e.data.url}}}},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,u=Function.prototype,i=u.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in u)&&a(u,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})},b6c6:function(e,t,n){"use strict";var r=n("fb6b"),a=n.n(r);a.a},c40e:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n("b775");function a(e){return Object(r["a"])({url:"/equip/add",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/equip/delete",method:"delete",params:e})}function i(e){return Object(r["a"])({url:"/equip/update",method:"put",data:e})}function o(e){return Object(r["a"])({url:"/equip/list",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/equip/item",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/store/cate",method:"get",params:e})}function d(e){return Object(r["a"])({url:"/store/add",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/store/delete",method:"delete",params:e})}function m(e){return Object(r["a"])({url:"/store/update",method:"put",data:e})}function p(e){return Object(r["a"])({url:"/store/list",method:"get",params:e})}function f(e){return Object(r["a"])({url:"/store/item",method:"get",params:e})}},fb6b:function(e,t,n){}}]);
//# sourceMappingURL=chunk-11a159b6.7be8eab3.js.map