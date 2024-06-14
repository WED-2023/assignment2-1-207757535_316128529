"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[195],{7752:(e,t,i)=>{i.d(t,{Z:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"carousel-container"},[t("b-carousel",{staticStyle:{border:"100px","background-color":"#fff"},attrs:{interval:4e3,controls:"",indicators:"","prev-icon":"fas fa-chevron-left","next-icon":"fas fa-chevron-right"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.recipes,(function(s){return t("b-carousel-slide",{key:s.id,scopedSlots:e._u([{key:"img",fn:function(){return[t("img",{staticClass:"recipe-image",attrs:{src:s.image,alt:"Recipe Image"},on:{click:function(t){return e.goToRecipe(s.id)}}}),t("div",{staticClass:"recipe-info"},[t("div",{staticClass:"recipe-footer-content"},[t("div",{staticClass:"recipe-title",attrs:{title:s.title}},[t("b-card-text",[e._v(e._s(s.title))]),t("br")],1),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(s.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(s.aggregateLikes)+" likes")])])]),t("div",{staticClass:"tags-container"},[s.vegetarian?t("img",{staticClass:"tag-icon",attrs:{src:i(7221),alt:"Vegetarian"}}):e._e(),s.vegan?t("img",{staticClass:"tag-icon",attrs:{src:i(3238),alt:"Vegan"}}):e._e(),s.glutenFree?t("img",{staticClass:"tag-icon",attrs:{src:i(2168),alt:"Gluten Free"}}):e._e()])])]},proxy:!0}],null,!0)})})),1)],1)},a=[],r=(i(7658),i(8657)),n=i(5835);const c={components:{BCarousel:r.P,BCarouselSlide:n.O},props:{recipes:{type:Array,required:!0}},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1},goToRecipe:function(e){this.$router.push({name:"recipe",params:{recipeID:e}})}}},l=c;var o=i(1001),d=(0,o.Z)(l,s,a,!1,null,"77cbae5e",null);const u=d.exports},6823:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("MY FAVORITE RECIPES")]),t("div",[t("RecipeCarousel",{attrs:{recipes:e.recipes}})],1),t("div",[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{isUserLoggedIn:!1,recipes:e.lastViewedRecipes}})],1)])},a=[],r=i(7752),n=i(5817),c=i(3193);const l={components:{RecipeCarousel:r.Z,RecipePreviewList:n.Z},data:function(){return{recipes:[],lastViewedRecipes:[]}},mounted:function(){this.fetchRecipes(4),this.$root.store.username&&this.fetchLastViewedRecipes(6)},methods:{fetchRecipes:function(e){var t=(0,c.j)(e);this.recipes=t.data.recipes},fetchLastViewedRecipes:function(e){var t=(0,c.j)(e);this.lastViewedRecipes=t.data.recipes}}},o=l;var d=i(1001),u=(0,d.Z)(o,s,a,!1,null,"c98311ce",null);const p=u.exports}}]);
//# sourceMappingURL=195.d8add8d3.js.map