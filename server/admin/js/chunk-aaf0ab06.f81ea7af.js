(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aaf0ab06"],{"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"50ce":function(t,e,n){"use strict";var r=n("532e"),a=n.n(r);a.a},"532e":function(t,e,n){},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6db7":function(t,e,n){"use strict";e["a"]={computed:{uploadUrl:function(){return"http://test.moba.ltd/admin/upload/images"},uploadHeaders:function(){return{Authorization:localStorage.getItem("token")||""}}},methods:{uploadSuccess:function(t){this.model.icon=t.data.url}}}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,i(0,n)):t[o]=n}},8593:function(t,e,n){"use strict";n.d(e,"i",(function(){return a})),n.d(e,"k",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"h",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return p}));var r=n("b775");function a(t){return Object(r["a"])({url:"/categories/add",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/categories/update",method:"put",data:t})}function o(t){return Object(r["a"])({url:"/categories/delete",method:"delete",params:t})}function s(t){return Object(r["a"])({url:"/categories/levelOne",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/categories/levelTwo",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/categories/item",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/ads/add",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/ads/update",method:"put",data:t})}function m(t){return Object(r["a"])({url:"/ads/delete",method:"delete",params:t})}function f(t){return Object(r["a"])({url:"/ads/list",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/ads/item",method:"get",params:t})}},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),u=n("65f0"),c=n("8418"),d=n("1dde"),l=n("ae40"),m=d("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var n,r,d,l,m,f,v=s(this),x=o(v.length),y=a(t,x),k=arguments.length;if(0===k?n=r=0:1===k?(n=0,r=x-y):(n=k-2,r=h(p(i(e),0),x-y)),x+n-r>b)throw TypeError(g);for(d=u(v,r),l=0;l<r;l++)m=y+l,m in v&&c(d,l,v[m]);if(d.length=r,n<r){for(l=y;l<x-r;l++)m=l+r,f=l+n,m in v?v[f]=v[m]:delete v[f];for(l=x;l>x-r+n;l--)delete v[l-1]}else if(n>r)for(l=x-r;l>y;l--)m=l+r-1,f=l+n-1,m in v?v[f]=v[m]:delete v[f];for(l=0;l<n;l++)v[l+y]=arguments[l+2];return v.length=x-r+n,d}})},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("5135"),o=Object.defineProperty,s={},u=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,d=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(c&&!r)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,d,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&a(i,u,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},c924:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ads-edit"}},[n("el-form",{attrs:{"label-position":"right","label-width":"80px"}},[n("el-card",{staticClass:"box-card"},[n("h1",{staticClass:"title"},[t._v(t._s(t.id?"编辑":"新建")+"广告位")]),n("el-input",{attrs:{placeholder:"请输入广告位名称"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save(e)}},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}}),n("el-button",{staticStyle:{"margin-left":"119px"},attrs:{type:"primary",size:"small"},on:{click:t.addAd}},[n("i",{staticClass:"el-icon-plus",staticStyle:{"margin-right":"5px"}}),t._v("添加广告项 ")]),n("el-row",t._l(t.model.items,(function(e,r){return n("el-col",{key:r,staticStyle:{"margin-top":"30px"},attrs:{md:24}},[n("el-form-item",{attrs:{label:"链接(url)"}},[n("el-input",{attrs:{placeholder:"请输入图片跳转链接"},model:{value:e.url,callback:function(n){t.$set(e,"url",n)},expression:"item.url"}})],1),n("el-form-item",{attrs:{label:"广告图"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,headers:t.uploadHeaders,"on-success":t.uploadAds}},[e.image?n("img",{staticClass:"banner",attrs:{src:e.image},on:{click:function(e){t.uploadAdsIndex=r}}}):n("i",{staticClass:"el-icon-plus banner-uploader-icon",on:{click:function(e){t.uploadAdsIndex=r}}})])],1),n("el-form-item",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.delAd(r)}}},[t._v("删除")])],1)],1)})),1)],1)],1),n("div",{staticClass:"save"},[n("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)},a=[],i=(n("a434"),n("b0c0"),n("96cf"),n("1da1")),o=n("8593"),s=n("6db7"),u={name:"AdsEdit",mixins:[s["a"]],props:["id"],data:function(){return{model:{name:"",items:[]},uploadAdsIndex:0}},watch:{$route:function(){this.id?this.fetchAdsItem():(this.model.name="",this.model.items=[])}},mounted:function(){this.id&&this.fetchAdsItem()},methods:{save:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.model,r=n.name,a=n.items,i=t.id,r){e.next=5;break}return t.$message.error("广告位名称不能为空"),e.abrupt("return");case 5:if(!i){e.next=11;break}return e.next=8,Object(o["j"])({id:i,name:r,items:a});case 8:s=e.sent,e.next=14;break;case 11:return e.next=13,Object(o["h"])({name:r,items:a});case 13:s=e.sent;case 14:if(1!=s.status){e.next=17;break}return t.$message.error(s.msg),e.abrupt("return");case 17:t.$message.success(s.msg),t.$router.push("/system/adsList");case 19:case"end":return e.stop()}}),e)})))()},fetchAdsItem:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])({id:t.id});case 2:n=e.sent,t.model.name=n.data.name,t.model.items=n.data.items;case 5:case"end":return e.stop()}}),e)})))()},addAd:function(){this.model.items.push({image:"",url:""})},delAd:function(t){var e=this;this.$confirm("确认要删除该广告项?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.model.items.splice(t,1),e.$message.success("删除成功")}))},uploadAds:function(t){this.model.items[this.uploadAdsIndex].image=t.data.url}}},c=u,d=(n("50ce"),n("2877")),l=Object(d["a"])(c,r,a,!1,null,"6d998d90",null);e["default"]=l.exports},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-aaf0ab06.f81ea7af.js.map