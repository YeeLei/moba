(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2af3ea2f"],{"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),c=r("9112");for(var u in a){var o=n[u],s=o&&o.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(d){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=r("ae40"),c=a("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"22b0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ads-list"}},[r("el-card",{staticClass:"box-card data-list-card"},[r("div",{staticClass:"left"},[r("i",{staticClass:"el-icon-document"}),r("span",{staticClass:"title"},[t._v("数据列表")])]),r("div",{staticClass:"right"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.push("/system/adsAdd")}}},[t._v("添加")])],1)]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.adsList,border:""}},[r("el-table-column",{attrs:{prop:"number",label:"编号",width:"150"}}),r("el-table-column",{attrs:{prop:"name",label:"广告位名称",width:"550"}}),r("el-table-column",{attrs:{prop:"adNum",label:"广告数量",width:"350"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return t.$router.push("/system/adsUpdate/"+e.row._id)}}},[t._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return t.deleteAds(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],i=(r("4160"),r("b0c0"),r("159b"),r("96cf"),r("1da1")),c=r("8593"),u={name:"AdsList",data:function(){return{adsList:[]}},mounted:function(){this.fetchAds()},methods:{fetchAds:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:r=e.sent,t.handleAds(r.data);case 4:case"end":return e.stop()}}),e)})))()},deleteAds:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$confirm('确认要删除广告位"'.concat(t.name,'"?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["a"])({id:t._id});case 2:r.sent,e.$message.success("删除成功"),e.fetchAds();case 5:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},handleAds:function(t){t.forEach((function(t,e){t.number=e+1,t.adNum=t.items.length})),this.adsList=t}}},o=u,s=r("2877"),d=Object(s["a"])(o,n,a,!1,null,"212d1a68",null);e["default"]=d.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},8593:function(t,e,r){"use strict";r.d(e,"i",(function(){return a})),r.d(e,"k",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return o})),r.d(e,"e",(function(){return s})),r.d(e,"h",(function(){return d})),r.d(e,"j",(function(){return l})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return m}));var n=r("b775");function a(t){return Object(n["a"])({url:"/categories/add",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/categories/update",method:"put",data:t})}function c(t){return Object(n["a"])({url:"/categories/delete",method:"delete",params:t})}function u(t){return Object(n["a"])({url:"/categories/levelOne",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/categories/levelTwo",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/categories/item",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/ads/add",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/ads/update",method:"put",data:t})}function f(t){return Object(n["a"])({url:"/ads/delete",method:"delete",params:t})}function h(t){return Object(n["a"])({url:"/ads/list",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/ads/item",method:"get",params:t})}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),a=r("d039"),i=r("5135"),c=Object.defineProperty,u={},o=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,d=i(e,0)?e[0]:o,l=i(e,1)?e[1]:void 0;return u[t]=!!r&&!a((function(){if(s&&!n)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:o}):t[1]=1,r.call(t,d,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,o="name";n&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),c=r("50c4"),u=r("65f0"),o=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,d=4==t,l=6==t,f=5==t||l;return function(h,m,p,b){for(var v,g,L=i(h),S=a(L),w=n(m,p,3),y=c(S.length),O=0,A=b||u,j=e?A(h,y):r?A(h,0):void 0;y>O;O++)if((f||O in S)&&(v=S[O],g=w(v,O,L),t))if(e)j[O]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return O;case 2:o.call(j,v)}else if(d)return!1;return l?-1:s||d?d:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2af3ea2f.a149e7d9.js.map