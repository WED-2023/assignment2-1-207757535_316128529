(()=>{"use strict";var e={4752:(e,t,s)=>{s.d(t,{Z:()=>I});var a=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(s){return t("b-col",{key:s.id,staticClass:"mb-5 mx-auto",attrs:{cols:"12",md:"6",lg:"5",xl:"4"}},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:s,showLikeButton:e.isUserLoggedIn}})],1)})),1)],1)},i=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-container"},[t("link",{attrs:{rel:"stylesheet",href:"http://static.sasongsmat.nu/fonts/vegetarian.css"}}),t("div",{staticClass:"recipe-card-wrapper"},[t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"image-container"},[e.image_load?t("b-card",{staticClass:"recipe-image",staticStyle:{height:"100%"},attrs:{"img-src":e.recipe.image,"img-alt":"Image",tag:"article"}}):e._e()],1)]),t("div",{staticClass:"recipe-details"},[t("div",{staticClass:"recipe-footer-content"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[t("b-card-text",[e._v(e._s(e.recipe.title))])],1),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])]),t("div",{staticClass:"tags-container"},[e.recipe.vegetarian?t("img",{staticClass:"tag-icon",attrs:{src:s(7221),alt:"Vegetarian"}}):e._e(),e.recipe.vegan?t("img",{staticClass:"tag-icon",attrs:{src:s(3238),alt:"Vegan"}}):e._e(),e.recipe.glutenFree?t("img",{staticClass:"tag-icon",attrs:{src:s(2168),alt:"Gluten Free"}}):e._e()]),t("br"),t("br"),e.showLikeButton?t("div",[t("like")],1):e._e()])],1)])},n=[],o=s(6835),c=s(8534),l=s(3099),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-container"},[t("div",{staticClass:"like-container"},[t("b-button",{attrs:{id:"like-button"},on:{click:e.addToFavorites}},[t("img",{attrs:{src:e.likeButtonImage,alt:"Like Button"}})])],1)])},m=[];const d={data:function(){return{likeButtonImage:s(6159)}},methods:{addToFavorites:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=(0,l.p)(e.recipeId),200===a.status&&a.response.data.success?(e.$root.toast("Recipe added!","This recipe was added to your favorites","success"),e.likeButtonImage=s(4018)):e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}catch(i){e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}case 1:case"end":return t.stop()}}),t)})))()}}},p=d;var g=s(1001),f=(0,g.Z)(p,u,m,!1,null,"0305de26",null);f.exports;const h={components:{Like},mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0},showLikeButton:{type:Boolean,default:!0}},methods:{addToFavorites:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=(0,l.p)(e.recipe.id),200===a.status&&a.response.data.success?(e.$root.toast("Recipe added!","This recipe was added to your favorites","success"),e.likeButtonImage=s(4018)):e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}catch(i){e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}case 1:case"end":return t.stop()}}),t)})))()}}},v=h;var b=(0,g.Z)(v,r,n,!1,null,"e29a90f6",null);const w=b.exports,y={name:"RecipePreviewList",components:{RecipePreview:w},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},isUserLoggedIn:{type:Boolean,default:!1}}},k=y;var C=(0,g.Z)(k,a,i,!1,null,"6b313186",null);const I=C.exports},2752:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block","background-color":"#177d5b"},attrs:{type:"submit",variant:"primary"}},[e._v(" Login ")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e(),e.form.submitSuccess?t("b-alert",{staticClass:"mt-2",attrs:{variant:"success",dismissible:"",show:""}},[e._v(" Login succeeded! ")]):e._e()],1)},i=[],r=s(6835),n=s(8534),o=(s(7658),s(379)),c=s(9239);const l={name:"Login",data:function(){return{success:!0,form:{username:"",password:"",submitError:void 0,submitSuccess:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],s=t.$dirty,a=t.$error;return s?!a:null},Login:function(){var e=this;return(0,n.Z)((0,r.Z)().mark((function t(){var s;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.sD)(e.form.username,e.form.password,e.success);case 3:s=t.sent,200===s.status&&s.response.data.success?(e.form.submitSuccess=!0,e.$root.store.login(e.form.username),e.$router.push("/")):e.form.submitError=s.response.data.message,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.form.submitError=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onLogin:function(){this.form.submitError=void 0,this.form.submitSuccess=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=l;var m=s(1001),d=(0,m.Z)(u,a,i,!1,null,"7472d11f",null);const p=d.exports},5390:(e,t,s)=>{s(6992),s(8674),s(9601),s(7727),s(9554),s(1539),s(4747);var a=s(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",[t("b-navbar",{staticClass:"bg-green",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",{attrs:{href:"#",id:"brand"}},[t("img",{attrs:{src:"data:image/png;base64,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"}}),e._v("BD-Recipes")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"mx-auto"},[t("b-nav-item",{staticClass:"main-page",attrs:{to:{name:"main"}}},[e._v("Main Page")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),t("b-nav-form",[t("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t("b-nav-item",{attrs:{to:{name:"search"},size:"sm"}},[e._v("Search")])],1)],1),t("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?t("span",{staticClass:"nav-connected"},[t("span",{staticClass:"greeting"},[e._v("Hello "+e._s(e.$root.store.username)+" :")]),t("b-nav-item-dropdown",{attrs:{text:"My Zone",right:""}},[t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyFavoriteRecipes"}}},[e._v("My Favorite Recipes")]),t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyRecipes"}}},[e._v("My Recipes")]),t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyFamilyRecipes"}}},[e._v("My Family Recipes")])],1),t("b-nav-item",{on:{click:e.showNewRecipeModal}},[e._v("Add a new Recipe")]),t("b-nav-item",{on:{click:e.Logout}},[e._v("Logout")])],1):t("span",{staticClass:"nav-not-connected"},[t("h6",{staticStyle:{color:"#fff"}},[e._v("Hello Guest:")]),t("b-nav-item",{staticStyle:{"padding-right":"4%"},attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-nav-item",{staticStyle:{"padding-right":"4%"},attrs:{to:{name:"login"}}},[e._v("Login")])],1)])],1)],1)],1),t("b-modal",{attrs:{id:"new-recipe-modal",title:"Create a New Recipe","hide-footer":""}},[t("div",{staticClass:"modal-body",staticStyle:{"max-height":"70vh","overflow-y":"auto"}},[t("new-recipe")],1)]),t("router-view")],1)},r=[],n=(s(7658),s(8309),function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-form-container"},[e.show?t("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Title:","label-for":"input-title"}},[t("b-form-input",{attrs:{id:"input-title",type:"text",placeholder:"Enter recipe title",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("b-form-group",{staticClass:"select-image-container",attrs:{label:"Recipe image:"}},[t("div",{staticClass:"form-group"},[t("b-form-file",{attrs:{label:"Image:",state:Boolean(e.file1),placeholder:"Choose an image or drop it here...","drop-placeholder":"Drop file here...",required:""},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}}),t("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.file1?e.file1.name:""))])],1)]),t("b-form-group",{staticClass:"summary-container",attrs:{label:"Summary:","label-for":"input-summary"}},[t("b-form-textarea",{attrs:{id:"input-summary",placeholder:"Enter description...",rows:"3","max-rows":"6",required:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),t("b-form-group",{staticClass:"time-container",attrs:{label:"Time to make:"}},[t("b-form-timepicker",{attrs:{"show-seconds":"",required:"",hour12:!1},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),t("b-form-group",{staticClass:"serving-container",attrs:{label:"Serving:"}},[t("b-form-spinbutton",{attrs:{id:"serving-sb",min:"1",max:"100"},model:{value:e.servingAmount,callback:function(t){e.servingAmount=t},expression:"servingAmount"}})],1),t("b-form-group",{staticClass:"checkboxes-container",attrs:{label:"Dietary Options:"}},[t("b-form-checkbox-group",{attrs:{id:"checkboxes"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[t("b-form-checkbox",{attrs:{value:"isVegetarian"}},[e._v("Vegetarian")]),t("b-form-checkbox",{attrs:{value:"isVegan"}},[e._v("Vegan")]),t("b-form-checkbox",{attrs:{value:"isGlutenFree"}},[e._v("Gluten Free")])],1)],1),t("b-form-group",{staticClass:"instruction-container",attrs:{label:"Instructions:"}},[t("label",[e._v("Add an instruction:")]),1===e.numOfInstructions?[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfInstructions,". Enter instruction..."),required:""},model:{value:e.instruction,callback:function(t){e.instruction=t},expression:"instruction"}})]:[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfInstructions,"."),required:""},model:{value:e.instruction,callback:function(t){e.instruction=t},expression:"instruction"}})],t("b-icon",{attrs:{variant:"success",icon:"plus"},on:{click:e.AddInstruction}}),t("b-icon",{attrs:{variant:"danger",icon:"dash"},on:{click:e.RemoveInstruction}})],2),t("b-form-group",{staticClass:"ingredients-container",attrs:{label:"Ingredients:"}},[t("label",[e._v("Add an ingredient:")]),1===e.numOfIngredients?[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfIngredients,". Please enter here your ingredients name..."),required:""},model:{value:e.ingredientName,callback:function(t){e.ingredientName=t},expression:"ingredientName"}})]:[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfIngredients,"."),required:""},model:{value:e.ingredientName,callback:function(t){e.ingredientName=t},expression:"ingredientName"}})],t("div",{staticClass:"ingredients-details-container"},[t("b-row",{staticClass:"mt-3"},[t("b-form-group",{staticClass:"amount",attrs:{label:"Amount:"}},[t("b-form-spinbutton",{attrs:{id:"amount-sb",min:"1",max:"100"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),t("b-form-group",{staticClass:"units",attrs:{label:"Units:"}},[t("b-form-select",{attrs:{required:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[t("b-form-select-option",{attrs:{value:null}},[e._v("Please select a unit measure")]),t("b-form-select-option",{attrs:{value:"Gram"}},[e._v("Gram")]),t("b-form-select-option",{attrs:{value:"Kilogram"}},[e._v("Kilogram")]),t("b-form-select-option",{attrs:{value:"Milliliter"}},[e._v("Milliliter")]),t("b-form-select-option",{attrs:{value:"Liter"}},[e._v("Liter")]),t("b-form-select-option",{attrs:{value:"Curt"}},[e._v("Curt")]),t("b-form-select-option",{attrs:{value:"Teaspoon"}},[e._v("Teaspoon")]),t("b-form-select-option",{attrs:{value:"Spoon"}},[e._v("Spoon")]),t("b-form-select-option",{attrs:{value:"Cup"}},[e._v("Cup")])],1)],1),t("div",{staticClass:"ingredients-buttons-container"},[t("b-icon",{style:{fontSize:"24px"},attrs:{variant:"success",icon:"plus",disabled:e.isIngredientButtonDisabled},on:{click:e.AddIngredient}}),t("b-icon",{style:{fontSize:"24px"},attrs:{variant:"danger",icon:"dash"},on:{click:e.RemoveIngredient}})],1)],1)],1)],2),t("div",{staticClass:"buttons-container"},[t("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Create")]),t("b-button",{attrs:{type:"reset",variant:"warning"},on:{click:e.onReset}},[e._v("Reset")])],1)],1):e._e()],1)}),o=[],c=s(3099);const l={name:"NewRecipe",data:function(){return{show:!0,file1:null,file2:null,form:{name:"",checked:[]},servingAmount:0,instructions:[],instruction:"",numOfInstructions:1,ingredients:[],ingredientName:"",numOfIngredients:1,amount:0,time:"00:00:00",text:"",selected:null,showToast:!1}},computed:{isIngredientButtonDisabled:function(){return!this.ingredientName||!this.amount||!this.selected}},methods:{AddInstruction:function(){this.instruction&&(this.instructions.push(this.instruction),this.numOfInstructions+=1,this.instruction="",this.$root.toast("Instruction added!","This instruction was added to your current recipe","success"))},RemoveInstruction:function(){this.numOfInstructions>0?(this.instructions.pop(),this.numOfInstructions-=1):this.$root.toast("Problem encountered during instruction removal ","You don't have any instruction for this recipe","danger")},AddIngredient:function(){this.isIngredientButtonDisabled?this.showToast=!0:this.ingredientName&&this.amount&&this.selected&&(this.ingredients.push({name:this.ingredientName,amount:this.amount,unit:this.selected}),this.numOfIngredients+=1,this.ingredientName="",this.amount=0,this.selected=null,this.$root.toast("Ingredient added!","This ingredient was added to your current recipe","success"))},RemoveIngredient:function(){this.numOfIngredients>0?(this.ingredients.pop(),this.numOfIngredients-=1):this.$root.toast("Problem encountered during ingridient removal ","You don't have any ingridient for this recipe","danger")},onSubmit:function(e){e.preventDefault();var t={name:this.form.name,image:this.file1,summary:this.text,time:this.time,servings:this.servingAmount,dietaryOptions:this.form.checked,instructions:this.instructions,ingredients:this.ingredients},s=(0,c.t)(t);200===s.status&&s.response.data.success?(alert(s.response.data.message),this.show=!1):alert("Failed to add the recipe. Please try again.")},onReset:function(e){null!=e&&e.preventDefault(),this.form={name:"",checked:[]},this.file1=null,this.file2=null,this.instructions=[],this.numOfInstructions=1,this.ingredients=[],this.servingAmount=0,this.numOfIngredients=1,this.ingredientName="",this.amount=0,this.time="00:00:00",this.text="",this.selected=null}}},u=l;var m=s(1001),d=(0,m.Z)(u,n,o,!1,null,"e234e4f4",null);const p=d.exports,g={components:{NewRecipe:p},name:"App",comments:{NewRecipe:p},methods:{showNewRecipeModal:function(){this.$bvModal.show("new-recipe-modal")},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},f=g;var h=(0,m.Z)(f,i,r,!1,null,null,null);const v=h.exports;var b=s(1939),w=s.n(b),y=s(9669),k=s.n(y),C=s(8135),I=s(3017),x=(s(7024),s(8783),s(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"content"},[t("div",{staticClass:"left-side"},[t("div",{staticClass:"container-random"},[t("RecipePreviewList",{key:e.componentKey,staticClass:"RandomRecipes center",staticStyle:{"text-align":"center","font-family":"Comfortaa","margin-top":"3%"},attrs:{isUserLoggedIn:e.$root.store.username,recipes:e.randomRecipes,title:"Explore these recipes"}})],1),t("div",{staticClass:"shuffle-container"},[t("b-button",{attrs:{id:"shuffle-button"}})],1)]),t("div",{staticClass:"right-side"},[e.$root.store.username?t("div",{staticClass:"container-user"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{isUserLoggedIn:e.$root.store.username,recipes:e.lastViewedRecipes,title:"Last Viewed Recipes"}})],1):t("div",{staticClass:"login-container"},[t("LoginPage")],1)])])])}),A=[],L=s(4752),S=s(2752),R=s(2910);const O={data:function(){return{componentKey:0,randomRecipes:[],lastViewedRecipes:[]}},components:{RecipePreviewList:L.Z,LoginPage:S["default"]},mounted:function(){this.fetchRandomRecipes(3),this.$root.store.username&&this.fetchLastViewedRecipes(3)},methods:{fetchRandomRecipes:function(e){var t=(0,R.j)(e);this.randomRecipes=t.data.recipes},fetchLastViewedRecipes:function(e){var t=(0,R.j)(e);this.lastViewedRecipes=t.data.recipes}}},P=O;var B=(0,m.Z)(P,x,A,!1,null,"4fbc3b76",null);const T=B.exports;var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},D=[],_={},F=(0,m.Z)(_,N,D,!1,null,null,null);const M=F.exports;var G=[{path:"/",name:"main",component:T},{path:"/register",name:"register",component:function(){return s.e(763).then(s.bind(s,5763))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(s.bind(s,2752))}},{path:"/search",name:"search",component:function(){return s.e(331).then(s.bind(s,3331))}},{path:"/recipe/:recipeID",name:"recipe",component:function(){return s.e(713).then(s.bind(s,713))}},{path:"/about",name:"about",component:function(){return s.e(389).then(s.bind(s,5389))}},{path:"/MyRecipes",name:"MyRecipes",component:function(){return s.e(854).then(s.bind(s,2854))}},{path:"/MyFavoriteRecipes",name:"MyFavoriteRecipes",component:function(){return s.e(241).then(s.bind(s,6241))}},{path:"/MyFamilyRecipes",name:"MyFamilyRecipes",component:function(){return s.e(722).then(s.bind(s,9722))}},{path:"*",name:"notFound",component:M}];const Z=G;var j=s(8345),E=s(8620),z=s(508),q=s(7563),U=s(7419),V=s(1869),H=s(295),X=s(3090),Y=s(794),J=s(4063),Q=s(8793),$=s(7772);a["default"].use(C.XG7),a["default"].use(I.A7),a["default"].use(j.ZP);var W=new j.ZP({routes:Z});[z.E,q.w6,U.g,V.SY,H.xL,X.u3,Y.v5,J.F,Q.m$,$.A6].forEach((function(e){return a["default"].use(e)})),a["default"].use(E.ZP),k().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),k().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].use(w(),k()),a["default"].config.productionTip=!1;var K={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(K),new a["default"]({router:W,data:function(){return{store:K}},methods:{toast:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:s,solid:!0,appendToast:a,autoHideDelay:3e3})}},render:function(e){return e(v)}}).$mount("#app")},9239:(e,t,s)=>{s.d(t,{Ge:()=>i,sD:()=>a});s(1539),s(2564);function a(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise((function(e,t){setTimeout((function(){s?e({status:200,response:{data:{message:"Login succeeded",success:!0}}}):t({status:409,response:{data:{message:"Username or password are incorrect",success:!1}}})}),500)}))}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}},2910:(e,t,s)=>{s.d(t,{i:()=>n,j:()=>r});s(7658);var a=s(199),i=s(5352);s.p;function r(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],s=0;s<e;s++)t.push(i);return{data:{recipes:t}}}function n(e){return{data:{recipe:a}}}},3099:(e,t,s)=>{s.d(t,{p:()=>a,t:()=>i});s(199),s(5352);function a(e){return{status:200,response:{data:{message:"The Recipe successfully saved as favorite",success:!0}}}}function i(e){return{status:200,response:{data:{message:"The Recipe successfully added to My Recipes",success:!0}}}}},2168:(e,t,s)=>{e.exports=s.p+"img/gluten.a532ca2f.png"},6159:(e,t,s)=>{e.exports=s.p+"img/like.7c52a3a3.png"},3238:(e,t,s)=>{e.exports=s.p+"img/vegan.695aa32a.png"},7221:(e,t,s)=>{e.exports=s.p+"img/vegetarian.577b3def.png"},4018:(e,t,s)=>{e.exports=s.p+"img/vi.30a78b8a.png"},199:e=>{e.exports=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[{"step":1,"instruction":"Bring a large pot of salted water to a boil."},{"step":2,"instruction":"Add the pasta and cook according to package instructions until al dente."},{"step":3,"instruction":"While the pasta is cooking, heat olive oil in a large skillet over medium heat."},{"step":4,"instruction":"Add minced garlic and sauté for 1-2 minutes until fragrant."},{"step":5,"instruction":"Add cherry tomatoes to the skillet and cook until they start to soften, about 3-4 minutes."},{"step":6,"instruction":"Drain the cooked pasta, reserving 1 cup of pasta water."},{"step":7,"instruction":"Add the cooked pasta to the skillet with the tomatoes and garlic."},{"step":8,"instruction":"Toss the pasta with the tomato mixture, adding pasta water as needed to create a light sauce."},{"step":9,"instruction":"Season with salt, pepper, and red pepper flakes to taste."},{"step":10,"instruction":"Remove from heat and stir in fresh basil leaves and grated Parmesan cheese."},{"step":11,"instruction":"Serve immediately, garnished with additional Parmesan cheese and basil if desired."}],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}')},5352:e=>{e.exports=JSON.parse('{"id":716429,"image":"https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9-1024x1536.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}')}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,(()=>{var e=[];s.O=(t,a,i,r)=>{if(!a){var n=1/0;for(u=0;u<e.length;u++){for(var[a,i,r]=e[u],o=!0,c=0;c<a.length;c++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](a[c])))?a.splice(c--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]}})(),(()=>{s.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return s.d(t,{a:t}),t}})(),(()=>{s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,a)=>(s.f[a](e,t),t)),[]))})(),(()=>{s.u=e=>"js/"+e+"."+{241:"42e4e14d",331:"48543bbb",389:"e53e22b5",713:"ad0e2cc7",722:"83481e19",763:"c06580b9",854:"b4b57660"}[e]+".js"})(),(()=>{s.miniCssF=e=>"css/"+e+"."+{241:"796c86dd",331:"1698666b",389:"6cef05ce",713:"417f52e8",763:"b66611c7",854:"1c53ea94"}[e]+".css"})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";s.l=(a,i,r,n)=>{if(e[a])e[a].push(i);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var m=l[u];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+r){o=m;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+r),o.src=a),e[a]=[i];var d=(t,s)=>{o.onerror=o.onload=null,clearTimeout(p);var i=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(s))),t)return t(s)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{s.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,s,a,i)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=s=>{if(r.onerror=r.onload=null,"load"===s.type)a();else{var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=o,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=n,r.href=t,s?s.parentNode.insertBefore(r,s.nextSibling):document.head.appendChild(r),r},t=(e,t)=>{for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){i=n[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=a=>new Promise(((i,r)=>{var n=s.miniCssF(a),o=s.p+n;if(t(n,o))return i();e(a,o,null,i,r)})),i={143:0};s.f.miniCss=(e,t)=>{var s={241:1,331:1,389:1,713:1,763:1,854:1};i[e]?t.push(i[e]):0!==i[e]&&s[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};s.f.j=(t,a)=>{var i=s.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise(((s,a)=>i=e[t]=[s,a]));a.push(i[2]=r);var n=s.p+s.u(t),o=new Error,c=a=>{if(s.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,i[1](o)}};s.l(n,c,"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[n,o,c]=a,l=0;if(n.some((t=>0!==e[t]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var u=c(s)}for(t&&t(a);l<n.length;l++)r=n[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},a=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=s.O(void 0,[998],(()=>s(5390)));a=s.O(a)})();
//# sourceMappingURL=app.dc6fe61b.js.map