(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home-detail/home-detail"],{"6a36":function(t,e,n){"use strict";(function(t){function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){Promise.all([n.e("common/vendor"),n.e("components/gaoyia-parse/parse")]).then(function(){return resolve(n("4326"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{formData:{},noData:'<p style="color:#666;text-align=center">数据正在加载中...</p>',commentsValue:"",commentList:[],replyFormData:{}}},components:{uParse:r},methods:{open:function(){t.navigateTo({url:"../detail-comments/detail-comments?id="+this.formData._id})},likeTop:function(t){this.setUpdataLike(t),console.log("收藏")},follow:function(t){console.log("关注"),this.setUpdataAuthor(t)},openComments:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},submit:function(){console.log("发布"),this.commentsValue?this.setUpdataComment(i({content:this.commentsValue},this.replyFormData)):t.showToast({title:"请输入评论内容",icon:"none"})},setUpdataComment:function(e){var n=this,o=i({article_id:this.formData._id},e);t.showLoading(),this.$api.updata_comment(o).then((function(e){console.log(e),t.hideLoading(),t.showToast({title:"评论发布成功"}),n.getComments(),n.close(),n.replyFormData={},n.commentsValue=""}))},setUpdataAuthor:function(e){var n=this;t.showLoading(),this.$api.updata_author({author_id:e}).then((function(e){t.hideLoading(),n.formData.is_author_like=!n.formData.is_author_like,t.$emit("update_author"),t.showToast({title:n.formData.is_author_like?"关注作者成功":"取消关注作者",icon:"none"}),console.log(e)}))},setUpdataLike:function(e){var n=this;t.showLoading(),this.$api.updata_like({article_id:e}).then((function(e){t.hideLoading(),n.formData.is_like=!n.formData.is_like,t.$emit("update_article","follow"),t.showToast({title:n.formData.is_like?"收藏成功":"取消收藏",icon:"none"})}))},getDetail:function(){var t=this;this.$api.get_detail({article_id:this.formData._id}).then((function(e){console.log(e);var n=e.data;t.formData=n}))},getComments:function(){var t=this;this.$api.get_comments({article_id:this.formData._id}).then((function(e){var n=e.data;t.commentList=n,console.log("res",e)}))},reply:function(t){this.replyFormData={comment_id:t.comments.comment_id,is_reply:t.is_reply},t.comments.reply_id&&(this.replyFormData.reply_id=t.comments.reply_id),this.openComments(),console.log(this.replyFormData)}},onLoad:function(t){this.formData=JSON.parse(t.params),this.getDetail(),this.getComments()}};e.default=c}).call(this,n("543d")["default"])},"75b3":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={commentsBox:function(){return Promise.all([n.e("common/vendor"),n.e("components/comments-box/comments-box")]).then(n.bind(null,"3ccd"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"faa7"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"41aa"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},a56d:function(t,e,n){},bedc:function(t,e,n){"use strict";n.r(e);var o=n("6a36"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c124:function(t,e,n){"use strict";var o=n("a56d"),i=n.n(o);i.a},dc4a:function(t,e,n){"use strict";(function(t){n("c7c5");o(n("66fd"));var e=o(n("f381"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f381:function(t,e,n){"use strict";n.r(e);var o=n("75b3"),i=n("bedc");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c124");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=s.exports}},[["dc4a","common/runtime","common/vendor"]]]);