(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-article-my-article"],{"01a3":function(t,n,e){"use strict";e.r(n);var a=e("5351"),i=e("a17c");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);var u,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"4ed2f782",null,!1,a["a"],u);n["default"]=o.exports},"145a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{lists:[]}},methods:{getMyArticle:function(){var t=this;this.$api.get_my_article().then((function(n){var e=n.data;t.lists=e}))}},onLoad:function(){this.getMyArticle()}};n.default=a},5351:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={uniLoadMore:e("7724").default,listCard:e("ddaf").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[0===t.lists.length?e("uni-load-more",{attrs:{status:"loading"}}):t._e(),t._l(t.lists,(function(t){return e("list-card",{key:t._id,attrs:{item:t}})}))],2)},r=[]},a17c:function(t,n,e){"use strict";e.r(n);var a=e("145a"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a}}]);