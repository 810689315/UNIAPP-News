(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list/list"],{"19fb":function(t,e,n){"use strict";var i=n("b9aa"),o=n.n(i);o.a},"319f":function(t,e,n){"use strict";n.r(e);var i=n("6659"),o=n("7257");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("19fb");var a,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=l.exports},6659:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},7257:function(t,e,n){"use strict";n.r(e);var i=n("aea5"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},aea5:function(t,e,n){"use strict";(function(t){function i(t){return s(t)||a(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){n.e("components/list/list-item").then(function(){return resolve(n("3dcc"))}.bind(null,n)).catch(n.oe)},c={components:{listItem:u},props:{tab:{type:Array,default:function(){return[]}},swiperIndex:{type:Number,default:0}},watch:{tab:function(t){0!==t.length&&(this.load={},this.listCodeIndex={},this.getList(this.swiperIndex))}},data:function(){return{list:[],listCodeIndex:{},load:{},pageSize:10}},created:function(){var e=this;t.$on("update_article",(function(t){console.log(t),"follow"===t&&(e.load={},e.listCodeIndex={},e.getList(e.swiperIndex))}))},methods:{loadMore:function(){"noMore"!==this.load[this.swiperIndex].loading&&(this.load[this.swiperIndex].page++,this.getList(this.swiperIndex))},change:function(t){var e=t.detail.current;this.$emit("change",e),this.listCodeIndex[e]&&0!=this.listCodeIndex[e].length||this.getList(e)},getList:function(t){var e=this;this.load[t]||(this.load[t]={page:1,loading:"loading"}),this.$api.get_list({name:this.tab[t].name,page:this.load[this.swiperIndex].page++,pageSize:this.pageSize}).then((function(n){console.log(n);var o=n.data;if(0===o.length){var r={loading:"noMore"};return r.page=e.load[t].page,e.$set(e.load,t,r),void e.$forceUpdate()}var a=e.listCodeIndex[t]||[];a.push.apply(a,i(o)),e.$set(e.listCodeIndex,t,a)})).catch((function(t){console.log(t)}))}}};e.default=c}).call(this,n("543d")["default"])},b9aa:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list/list-create-component',
    {
        'components/list/list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("319f"))
        })
    },
    [['components/list/list-create-component']]
]);
