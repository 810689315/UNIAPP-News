(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail-comments/detail-comments"],{"3af9":function(t,n,e){"use strict";e.r(n);var o=e("a84e"),r=e("bc56");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("3c8b");var a,c=e("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},"3c8b":function(t,n,e){"use strict";var o=e("48bb"),r=e.n(o);r.a},"48bb":function(t,n,e){},7626:function(t,n,e){"use strict";(function(t){e("c7c5");o(e("66fd"));var n=o(e("3af9"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a84e:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={commentsBox:function(){return Promise.all([e.e("common/vendor"),e.e("components/comments-box/comments-box")]).then(e.bind(null,"3ccd"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"7724"))}},r=function(){var t=this,n=t.$createElement;t._self._c},i=[]},bc56:function(t,n,e){"use strict";e.r(n);var o=e("d128"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},d128:function(t,n,e){"use strict";function o(t){return c(t)||a(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{article_id:"",commentsList:[],page:1,pageSize:5,loading:"loading"}},methods:{getComments:function(){var t=this;this.$api.get_comments({article_id:this.article_id,page:this.page,pageSize:this.pageSize}).then((function(n){var e=n.data;if(0!==e.length){var r=JSON.parse(JSON.stringify(t.commentsList));r.push.apply(r,o(e)),t.commentsList=r}else t.loading="noMore"}))}},onLoad:function(t){this.article_id=t.id,this.getComments(),console.log(t)},onReachBottom:function(){"noMore"!=this.loading&&(this.page++,this.getComments(),console.log("----上拉触底"))}};n.default=s}},[["7626","common/runtime","common/vendor"]]]);