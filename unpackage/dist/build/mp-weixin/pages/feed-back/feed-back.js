(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feed-back/feed-back"],{6030:function(e,n,t){"use strict";t.r(n);var a=t("7d48"),u=t("7a42");for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t("fe32");var c,o=t("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=r.exports},"7a42":function(e,n,t){"use strict";t.r(n);var a=t("ba6f"),u=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=u.a},"7d48":function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"faa7"))}},u=function(){var e=this,n=e.$createElement;e._self._c},i=[]},b8f3:function(e,n,t){},ba6f:function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,n,t,a,u,i,c){try{var o=e[i](c),r=o.value}catch(s){return void t(s)}o.done?n(r):Promise.resolve(r).then(a,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(a,u){var i=e.apply(n,t);function o(e){c(i,a,u,o,r,"next",e)}function r(e){c(i,a,u,o,r,"throw",e)}o(void 0)}))}}var r={data:function(){return{imgList:[],imgName:[],content:""}},methods:{submit:function(){var n=this;return o(u.default.mark((function t(){var a,i,c,o;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=[],e.showLoading(),i=0;case 3:if(!(i<n.imgList.length)){t.next=13;break}return c=n.imgList[i].url,o=n.imgName[i].name,t.next=8,n.uploadFiles(c,o);case 8:c=t.sent,a.push(c);case 10:i++,t.next=3;break;case 13:n.updateFeedback({content:n.content,feedbackImages:a});case 14:case"end":return t.stop()}}),t)})))()},uploadFiles:function(e,n){return o(u.default.mark((function t(){var i;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.uploadFile({filePath:e,cloudPath:n});case 2:return i=t.sent,console.log(i),t.abrupt("return",i.fileID);case 5:case"end":return t.stop()}}),t)})))()},del:function(e){this.imgList.splice(e,1)},addImg:function(){var n=this,t=5-n.imgList.length;e.chooseImage({count:t,success:function(e){console.log(e);var a=e.tempFiles,u=e.tempFilePaths;a.forEach((function(e){n.imgName.push({name:e.name})})),u.forEach((function(e,a){a<t&&n.imgList.push({url:e})}))}})},updateFeedback:function(n){var t=n.content,a=n.feedbackImages;this.$api.updata_feedback({content:t,feedbackImages:a}).then((function(n){e.hideLoading(),e.showToast({title:"反馈提交成功",icon:"none"}),setTimeout((function(){e.switchTab({url:"/pages/tabbar/my/my"})}),2e3)})).catch((function(){e.hideLoading(),e.showToast({title:"反馈提交失败",icon:"none"})}))}}};n.default=r}).call(this,t("543d")["default"],t("a9ff")["default"])},eda2:function(e,n,t){"use strict";(function(e){t("c7c5");a(t("66fd"));var n=a(t("6030"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},fe32:function(e,n,t){"use strict";var a=t("b8f3"),u=t.n(a);u.a}},[["eda2","common/runtime","common/vendor"]]]);