(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3a8234c"],{"081e":function(t,e,n){},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),c=n("9112");for(var u in a){var o=r[u],s=o&&o.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(l){s.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),c=a("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"9f8c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"store-list"}},[n("el-card",{staticClass:"box-card data-list-card"},[n("div",{staticClass:"left"},[n("i",{staticClass:"el-icon-document"}),n("span",{staticClass:"title"},[t._v("数据列表")])]),n("div",{staticClass:"right"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.push("/goods/equipAdd")}}},[t._v("添加")])],1)]),n("div",{staticClass:"search"},[n("el-input",{attrs:{placeholder:"搜索装备"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.equipList,border:""}},[n("el-table-column",{attrs:{prop:"number",label:"编号",width:"150"}}),n("el-table-column",{attrs:{prop:"name",label:"装备名称",width:"150"}}),n("el-table-column",{attrs:{label:"图标",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-avatar",{attrs:{shape:"square",size:40,src:t.row.icon}})]}}])}),n("el-table-column",{attrs:{prop:"categoryName",label:"所属分类",width:"150"}}),n("el-table-column",{attrs:{prop:"attr",label:"属性描述",width:"520"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.$router.push("/goods/equipUpdate/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.deleteEquip(e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"page"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.equipTotal,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.pageChange}})],1)],1)},a=[],i=(n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),c=n("c40e"),u={name:"EquipList",data:function(){return{equipList:[],equipTotal:20,pageSize:5,page:1,name:""}},watch:{name:function(){this.page=1,this.fetchEquip()}},mounted:function(){this.fetchEquip()},methods:{fetchEquip:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.page,r=t.pageSize,a=t.name,e.next=3,Object(c["f"])({page:n,pageSize:r,name:a});case 3:i=e.sent,t.handleStore(i.data);case 5:case"end":return e.stop()}}),e)})))()},deleteEquip:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$confirm('确认要删除装备"'.concat(t.name,'"?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.page,a=e.equipList,n.next=3,Object(c["a"])({id:t._id});case 3:n.sent,e.$message.success("删除成功"),1!=r&&1==a.length&&(e.page=r-1),e.fetchEquip();case 7:case"end":return n.stop()}}),n)}))));case 1:case"end":return n.stop()}}),n)})))()},pageChange:function(t){this.page=t,this.fetchEquip()},handleStore:function(t){var e=this;t.equipList.forEach((function(t,n){1==e.page?t.number=n+1:t.number=(e.page-1)*e.pageSize+(n+1),t.categoryInfo.forEach((function(e){t.categoryName=e.name}));var r="";t.attr.forEach((function(e,n){n==t.attr.length-1?r+=e:r+=e+" / "})),t.attr=r})),this.equipTotal=t.equipTotal,this.equipList=t.equipList}}},o=u,s=(n("c02b"),n("2877")),l=Object(s["a"])(o,r,a,!1,null,"7bc74ae4",null);e["default"]=l.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("5135"),c=Object.defineProperty,u={},o=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:o,f=i(e,1)?e[1]:void 0;return u[t]=!!n&&!a((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:o}):t[1]=1,n.call(t,l,f)}))}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,o="name";r&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),c=n("50c4"),u=n("65f0"),o=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,h,m,b){for(var g,v,S=i(d),L=a(S),w=r(h,m,3),q=c(L.length),y=0,E=b||u,O=e?E(d,q):n?E(d,0):void 0;q>y;y++)if((p||y in L)&&(g=L[y],v=w(g,y,S),t))if(e)O[y]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:o.call(O,g)}else if(l)return!1;return f?-1:s||l?l:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c02b:function(t,e,n){"use strict";var r=n("081e"),a=n.n(r);a.a},c40e:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"i",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"d",(function(){return m}));var r=n("b775");function a(t){return Object(r["a"])({url:"/equip/cate",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/equip/add",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/equip/delete",method:"delete",params:t})}function u(t){return Object(r["a"])({url:"/equip/update",method:"put",data:t})}function o(t){return Object(r["a"])({url:"/equip/list",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/equip/item",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/store/cate",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/store/add",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/store/delete",method:"delete",params:t})}function d(t){return Object(r["a"])({url:"/store/update",method:"put",data:t})}function h(t){return Object(r["a"])({url:"/store/list",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/store/item",method:"get",params:t})}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-c3a8234c.4a17b898.js.map