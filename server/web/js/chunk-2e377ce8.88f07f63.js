(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e377ce8"],{"421b":function(e,t,s){},8418:function(e,t,s){"use strict";var n=s("c04e"),a=s("9bf2"),i=s("5c6c");e.exports=function(e,t,s){var c=n(t);c in e?a.f(e,c,i(0,s)):e[c]=s}},"99af":function(e,t,s){"use strict";var n=s("23e7"),a=s("d039"),i=s("e8b5"),c=s("861d"),r=s("7b0b"),o=s("50c4"),u=s("8418"),f=s("65f0"),w=s("1dde"),l=s("b622"),h=s("2d00"),d=l("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!a((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),b=w("concat"),N=function(e){if(!c(e))return!1;var t=e[d];return void 0!==t?!!t:i(e)},m=!g||!b;n({target:"Array",proto:!0,forced:m},{concat:function(e){var t,s,n,a,i,c=r(this),w=f(c,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?c:arguments[t],N(i)){if(a=o(i.length),l+a>v)throw TypeError(p);for(s=0;s<a;s++,l++)s in i&&u(w,l,i[s])}else{if(l>=v)throw TypeError(p);u(w,l++,i)}return w.length=l,w}})},c005:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"news-list"}},[s("div",{staticClass:"nav"},e._l(e.newsCates,(function(t,n){return s("div",{key:n,staticClass:"nav-item",class:{active:e.active==n},on:{click:function(s){return e.toggleNav(n,t.name)}}},[s("span",{staticClass:"nav-link"},[e._v(e._s(t.name))])])})),0),s("div",{staticClass:"news"},e._l(e.newsList,(function(t,n){return s("div",{key:n,staticClass:"news-item"},[s("div",{staticClass:"news-cate",class:e.calcNewsClass(t.categoryName)},[e._v(" "+e._s(t.categoryName)+" ")]),s("router-link",{staticClass:"news-title text-ellipsis",attrs:{tag:"div",to:"/article/detail/"+t._id}},[e._v(" "+e._s(t.title)+" ")]),s("div",{staticClass:"news-date"},[e._v(e._s(e._f("formatDate")(t.date,"YYYY-MM-DD")))])],1)})),0),s("div",{staticClass:"next"},[s("button",{staticClass:"next-btn radius-large",on:{click:e.fetchNext}},[e._v(" "+e._s(e.hasNext?"点击加载更多":"已显示全部内容")+" ")])])])},a=[],i=(s("99af"),s("96cf"),s("1da1")),c=s("365c"),r={name:"NewsList",data:function(){return{active:0,newsCates:[],newsList:[],newsType:"热门",page:1,pageSize:8,hasNext:!0}},mounted:function(){this.fetchNewsListOne(),this.fetchNewsListTwo()},methods:{fetchNewsListOne:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])();case 2:s=t.sent,e.newsCates=s.data;case 4:case"end":return t.stop()}}),t)})))()},fetchNewsListTwo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.newsType,n=e.page,a=e.pageSize,t.next=3,Object(c["k"])({newsType:s,page:n,pageSize:a});case 3:i=t.sent,e.newsList=e.newsList.concat(i.data.newsList),e.newsList.sort((function(e,t){return e.date<t.date})),e.hasNext=i.data.hasNext;case 7:case"end":return t.stop()}}),t)})))()},toggleNav:function(e,t){this.active!=e&&(this.active=e,this.page=1,this.newsType=t,this.newsList=[],this.fetchNewsListTwo())},fetchNext:function(){this.hasNext&&(this.page=this.page+1,this.fetchNewsListTwo())},calcNewsClass:function(e){var t="";switch(e){case"公告":t="news-cate-one";break;case"攻略":t="news-cate-two";break;case"社区":t="news-cate-three";break;case"赛事":t="news-cate-four";break;default:e="news-cate-one"}return t}}},o=r,u=(s("f916"),s("2877")),f=Object(u["a"])(o,n,a,!1,null,"4b801f01",null);t["default"]=f.exports},f916:function(e,t,s){"use strict";var n=s("421b"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-2e377ce8.88f07f63.js.map