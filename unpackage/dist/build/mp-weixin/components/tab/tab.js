(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{3658:function(n,t,e){"use strict";e.r(t);var u=e("b4ce"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=c.a},b043:function(n,t,e){"use strict";e.r(t);var u=e("f396"),c=e("3658");for(var a in c)"default"!==a&&function(n){e.d(t,n,(function(){return c[n]}))}(a);e("eddc");var r,o=e("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=i.exports},b4ce:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},tabIndex:{type:Number,default:0}},data:function(){return{currentInex:0}},watch:{tabIndex:function(n){this.currentInex=n}},methods:{clickTab:function(n,t){this.currentInex=t,this.$emit("tab",{data:n,index:t})},open:function(){n.navigateTo({url:"/pages/home-label/home-label"})}}};t.default=e}).call(this,e("543d")["default"])},c66b:function(n,t,e){},eddc:function(n,t,e){"use strict";var u=e("c66b"),c=e.n(u);c.a},f396:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"faa7"))}},c=function(){var n=this,t=n.$createElement;n._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b043"))
        })
    },
    [['components/tab/tab-create-component']]
]);
