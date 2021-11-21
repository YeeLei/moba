(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e248950"],{"0e58":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"video-edit"}},[r("el-card",{staticClass:"box-card"},[r("h1",{staticClass:"title"},[e._v(e._s(e.id?"编辑":"新建")+"视频")]),r("el-form",{attrs:{"label-position":"right","label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{attrs:{placeholder:"请输入视频标题"},model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.model.category,callback:function(t){e.$set(e.model,"category",t)},expression:"model.category"}},e._l(e.videoCate,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"上传日期"}},[r("el-date-picker",{attrs:{type:"date",format:"yyyy 年 MM 月 dd 日","value-format":"timestamp",placeholder:"选择日期"},model:{value:e.model.date,callback:function(t){e.$set(e.model,"date",t)},expression:"model.date"}})],1),r("el-form-item",{attrs:{label:"播放量"}},[r("el-input",{attrs:{placeholder:"请输入视频播放量"},model:{value:e.model.play,callback:function(t){e.$set(e.model,"play",t)},expression:"model.play"}})],1),r("el-form-item",{attrs:{label:"封面"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,headers:e.uploadHeaders,"on-success":e.uploadVideo}},[e.model.cover?r("img",{staticClass:"banner",attrs:{src:e.model.cover}}):r("i",{staticClass:"el-icon-plus banner-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"视频"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,headers:e.uploadHeaders,"on-success":e.uploadVideo}},[e.model.video?r("video",{staticClass:"banner",attrs:{controls:"",src:e.model.video}}):r("i",{staticClass:"el-icon-plus banner-uploader-icon"})])],1)],1),r("div",{staticClass:"save"},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},n=[],o=(r("c975"),r("96cf"),r("1da1")),i=r("6c6e"),c=r("6db7"),u={name:"VideoEdit",mixins:[c["a"]],props:["id"],data:function(){return{model:{title:"",category:"",play:"",cover:"",video:""},videoCate:[]}},watch:{$route:function(){this.id?this.fetchVideoItem():(this.model.title="",this.model.play="",this.model.category="",this.model.cover="",this.video="")}},mounted:function(){this.id&&this.fetchVideoItem(),this.fetchVideoTwo()},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,c,u,l,d,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.model,a=r.title,n=r.play,o=r.category,c=r.cover,u=r.video,l=r.date,d=e.id,a&&n&&o&&c&&u&&l){t.next=5;break}return e.$message.error("请将信息填写完整"),t.abrupt("return");case 5:if(!d){t.next=11;break}return t.next=8,Object(i["r"])({id:d,title:a,play:n,category:o,cover:c,video:u,date:l});case 8:s=t.sent,t.next=14;break;case 11:return t.next=13,Object(i["o"])({title:a,play:n,category:o,cover:c,video:u,date:l});case 13:s=t.sent;case 14:if(1!=s.status){t.next=17;break}return e.$message.error(s.msg),t.abrupt("return");case 17:e.$message.success(s.msg),e.$router.push("/resource/videoList");case 19:case"end":return t.stop()}}),t)})))()},fetchVideoTwo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["l"])();case 2:r=t.sent,e.videoCate=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchVideoItem:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])({id:e.id});case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},uploadVideo:function(e){e=e.data,-1!=e.mimetype.indexOf("video")?this.model.video=e.url:this.model.cover=e.url}}},l=u,d=(r("e82f"),r("2877")),s=Object(d["a"])(l,a,n,!1,null,"5e29f627",null);t["default"]=s.exports},"6c6e":function(e,t,r){"use strict";r.d(t,"m",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"p",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"n",(function(){return d})),r.d(t,"b",(function(){return s})),r.d(t,"q",(function(){return m})),r.d(t,"g",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"h",(function(){return h})),r.d(t,"s",(function(){return v})),r.d(t,"o",(function(){return b})),r.d(t,"c",(function(){return g})),r.d(t,"r",(function(){return O})),r.d(t,"j",(function(){return j})),r.d(t,"l",(function(){return x})),r.d(t,"k",(function(){return y}));var a=r("b775");function n(e){return Object(a["a"])({url:"/article/add",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/article/delete",method:"delete",params:e})}function i(e){return Object(a["a"])({url:"/article/update",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/article/list",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/article/cate",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/article/item",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/picarticle/add",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/picarticle/delete",method:"delete",params:e})}function m(e){return Object(a["a"])({url:"/picarticle/update",method:"put",data:e})}function f(e){return Object(a["a"])({url:"/picarticle/list",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/picarticle/cate",method:"get",params:e})}function h(e){return Object(a["a"])({url:"/picarticle/item",method:"get",params:e})}function v(e){return Object(a["a"])({url:"/upload/images",method:"post",data:e})}function b(e){return Object(a["a"])({url:"/video/add",method:"post",data:e})}function g(e){return Object(a["a"])({url:"/video/delete",method:"delete",params:e})}function O(e){return Object(a["a"])({url:"/video/update",method:"put",data:e})}function j(e){return Object(a["a"])({url:"/video/list",method:"get",params:e})}function x(e){return Object(a["a"])({url:"/video/cate",method:"get",params:e})}function y(e){return Object(a["a"])({url:"/video/item",method:"get",params:e})}},"6db7":function(e,t,r){"use strict";t["a"]={computed:{uploadUrl:function(){return"http://test.moba.ltd/admin/upload/images"},uploadHeaders:function(){return{Authorization:localStorage.getItem("token")||""}}},methods:{uploadSuccess:function(e){this.model.icon=e.data.url}}}},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var a=r("83ab"),n=r("d039"),o=r("5135"),i=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var r=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,d=o(t,0)?t[0]:u,s=o(t,1)?t[1]:void 0;return c[e]=!!r&&!n((function(){if(l&&!a)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,d,s)}))}},c975:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").indexOf,o=r("a640"),i=r("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),d=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:u||!l||!d},{indexOf:function(e){return u?c.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},e82f:function(e,t,r){"use strict";var a=r("ed26"),n=r.n(a);n.a},ed26:function(e,t,r){}}]);
//# sourceMappingURL=chunk-3e248950.a2d2f626.js.map