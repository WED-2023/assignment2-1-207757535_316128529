"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[902],{9902:(e,t,s)=>{s.r(t),s.d(t,{default:()=>R});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"content"},[t("div",{staticClass:"left-side"},[t("div",{staticClass:"container-random"},[t("RecipeCarousel",{attrs:{recipes:e.recipes}}),t("div",{staticClass:"shuffle-container"},[t("b-button",{attrs:{id:"shuffle-button"}})],1)],1)]),t("div",{staticClass:"right-side"},[e.$root.store.username?t("div",{staticClass:"container-user"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{isUserLoggedIn:e.$root.store.username,title:"Last Viewed Recipes",recipes:e.lastViewedRecipes}})],1):t("div",{staticClass:"login-container"},[t("LoginPage")],1)])])])},a=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"carousel-container"},[t("b-carousel",{attrs:{interval:4e3,controls:"",indicators:"","prev-icon":"fas fa-chevron-left","next-icon":"fas fa-chevron-right"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.recipes,(function(i){return t("b-carousel-slide",{key:i.id,scopedSlots:e._u([{key:"img",fn:function(){return[t("img",{staticClass:"recipe-image",attrs:{src:i.image,alt:"Recipe Image"},on:{click:function(t){return e.goToRecipe(i.id)}}}),t("div",{staticClass:"recipe-info"},[t("div",{staticClass:"recipe-footer-content"},[t("div",{staticClass:"recipe-title",attrs:{title:i.title}},[t("b-card-text",[e._v(e._s(i.title))]),t("br")],1),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(i.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(i.aggregateLikes)+" likes")])])]),t("div",{staticClass:"tags-container"},[i.vegetarian?t("img",{staticClass:"tag-icon",attrs:{src:s(7221),alt:"Vegetarian"}}):e._e(),i.vegan?t("img",{staticClass:"tag-icon",attrs:{src:s(3238),alt:"Vegan"}}):e._e(),i.glutenFree?t("img",{staticClass:"tag-icon",attrs:{src:s(2168),alt:"Gluten Free"}}):e._e()])])]},proxy:!0}],null,!0)})})),1)],1)},r=[],c=(s(7658),s(8657)),l=s(5835);const o={components:{BCarousel:c.P,BCarouselSlide:l.O},props:{recipes:{type:Array,required:!0}},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1},goToRecipe:function(e){this.$router.push({name:"recipe",params:{recipeID:e}})}}},d=o;var u=s(1001),p=(0,u.Z)(d,n,r,!1,null,"274fbe2a",null);const g=p.exports;var f=s(3273),v=s(2752),h=s(2910);const C={components:{RecipeCarousel:g,RecipePreviewList:f.Z,LoginPage:v["default"]},data:function(){return{recipes:[],lastViewedRecipes:[]}},mounted:function(){this.fetchRecipes(4),this.$root.store.username&&this.fetchLastViewedRecipes(3)},methods:{fetchRecipes:function(e){var t=(0,h.j)(e);this.recipes=t.data.recipes},fetchLastViewedRecipes:function(e){var t=(0,h.j)(e);this.lastViewedRecipes=t.data.recipes}}},m=C;var _=(0,u.Z)(m,i,a,!1,null,"6acb843c",null);const R=_.exports}}]);
//# sourceMappingURL=902.84912f62.js.map