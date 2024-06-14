(()=>{"use strict";var e={5817:(e,t,a)=>{a.d(t,{Z:()=>v});var s=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(a){return t("b-col",{key:a.id,staticClass:"mb-5 mx-auto",attrs:{cols:"12",md:"6",lg:"5",xl:"4"}},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:a,showLikeButton:e.isUserLoggedIn}})],1)})),1)],1)},i=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-container"},[t("link",{attrs:{rel:"stylesheet",href:"http://static.sasongsmat.nu/fonts/vegetarian.css"}}),t("div",{staticClass:"recipe-card-wrapper"},[t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"image-container"},[e.image_load?t("b-card",{staticClass:"recipe-image",staticStyle:{height:"100%"},attrs:{"img-src":e.recipe.image,"img-alt":"Image",tag:"article"}}):e._e()],1)]),t("div",{staticClass:"recipe-details"},[t("div",{staticClass:"recipe-footer-content"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[t("b-card-text",[e._v(e._s(e.recipe.title))])],1),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])]),t("div",{staticClass:"tags-container"},[e.recipe.vegetarian?t("img",{staticClass:"tag-icon",attrs:{src:a(7221),alt:"Vegetarian"}}):e._e(),e.recipe.vegan?t("img",{staticClass:"tag-icon",attrs:{src:a(3238),alt:"Vegan"}}):e._e(),e.recipe.glutenFree?t("img",{staticClass:"tag-icon",attrs:{src:a(2168),alt:"Gluten Free"}}):e._e()]),t("br"),t("br"),e.showLikeButton?t("div",{staticClass:"like-container"},[t("b-button",{attrs:{id:"like-button"},on:{click:e.addToFavorites}},[t("img",{attrs:{src:e.likeButtonImage,alt:"Like Button"}})])],1):e._e()])],1)])},r=[],o=a(6835),c=a(8534),l=a(3099);const u={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(){e.image_load=!0}))},data:function(){return{image_load:!1,likeButtonImage:a(6159)}},props:{recipe:{type:Object,required:!0},showLikeButton:{type:Boolean,default:!0}},methods:{addToFavorites:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var s;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{s=(0,l.p)(e.recipe.id),200===s.status&&s.response.data.success?(e.$root.toast("Recipe added!","This recipe was added to your favorites","success"),e.likeButtonImage=a(4018)):e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}catch(i){e.$root.toast("Failed to add","There was an error adding this recipe to your favorites","danger")}case 1:case"end":return t.stop()}}),t)})))()}}},m=u;var d=a(1001),p=(0,d.Z)(m,n,r,!1,null,"ec95d766",null);const g=p.exports,h={name:"RecipePreviewList",components:{RecipePreview:g},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0},isUserLoggedIn:{type:Boolean,default:!1}}},f=h;var b=(0,d.Z)(f,s,i,!1,null,"6b313186",null);const v=b.exports},2752:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block","background-color":"#177d5b"},attrs:{type:"submit",variant:"primary"}},[e._v(" Login ")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e(),e.form.submitSuccess?t("b-alert",{staticClass:"mt-2",attrs:{variant:"success",dismissible:"",show:""}},[e._v(" Login succeeded! ")]):e._e()],1)},i=[],n=a(6835),r=a(8534),o=(a(7658),a(379)),c=a(9239);const l={name:"Login",data:function(){return{success:!0,form:{username:"",password:"",submitError:void 0,submitSuccess:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],a=t.$dirty,s=t.$error;return a?!s:null},Login:function(){var e=this;return(0,r.Z)((0,n.Z)().mark((function t(){var a;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.sD)(e.form.username,e.form.password,e.success);case 3:a=t.sent,200===a.status&&a.response.data.success?(e.form.submitSuccess=!0,e.$root.store.login(e.form.username),e.$router.push("/")):e.form.submitError=a.response.data.message,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.form.submitError=t.t0.response.data.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onLogin:function(){this.form.submitError=void 0,this.form.submitSuccess=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=l;var m=a(1001),d=(0,m.Z)(u,s,i,!1,null,"7472d11f",null);const p=d.exports},9414:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var s=a(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",[t("b-navbar",{staticClass:"bg-green",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",{attrs:{href:"#",id:"brand"}},[e._v("DawaraRecipes")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"mx-auto"},[t("b-nav-item",{staticClass:"main-page",attrs:{to:{name:"main"}}},[e._v("Main Page")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),t("b-nav-form",[t("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t("b-nav-item",{attrs:{to:{name:"search"},size:"sm"}},[e._v("Search")])],1)],1),t("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?t("span",{staticClass:"nav-connected"},[t("span",{staticClass:"greeting"},[e._v("Hello "+e._s(e.$root.store.username)+":")]),t("b-nav-item-dropdown",{attrs:{text:"My Zone",right:""}},[t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyFavoriteRecipes"}}},[e._v("My Favorite Recipes")]),t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyRecipes"}}},[e._v("My Recipes")]),t("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"MyFamilyRecipes"}}},[e._v("My Family Recipes")])],1),t("b-nav-item",{on:{click:e.showNewRecipeModal}},[e._v("Add a new Recipe")]),t("b-nav-item",{on:{click:e.Logout}},[e._v("Logout")])],1):t("span",{staticClass:"nav-not-connected"},[t("h6",{staticStyle:{color:"#fff"}},[e._v("Hello Guest:")]),t("b-nav-item",{staticStyle:{"padding-right":"4%"},attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-nav-item",{staticStyle:{"padding-right":"4%"},attrs:{to:{name:"login"}}},[e._v("Login")])],1)])],1)],1)],1),t("b-modal",{attrs:{id:"new-recipe-modal",title:"Create a New Recipe","hide-footer":""}},[t("div",{staticClass:"modal-body",staticStyle:{"max-height":"70vh","overflow-y":"auto"}},[t("new-recipe")],1)]),t("router-view")],1)},n=[],r=(a(7658),a(8309),function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-form-container"},[e.show?t("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Title:","label-for":"input-title"}},[t("b-form-input",{attrs:{id:"input-title",type:"text",placeholder:"Enter recipe title",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("b-form-group",{staticClass:"select-image-container",attrs:{label:"Recipe image:"}},[t("div",{staticClass:"form-group"},[t("b-form-file",{attrs:{label:"Image:",state:Boolean(e.file1),placeholder:"Choose an image or drop it here...","drop-placeholder":"Drop file here...",required:""},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}}),t("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.file1?e.file1.name:""))])],1)]),t("b-form-group",{staticClass:"summary-container",attrs:{label:"Summary:","label-for":"input-summary"}},[t("b-form-textarea",{attrs:{id:"input-summary",placeholder:"Enter description...",rows:"3","max-rows":"6",required:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),t("b-form-group",{staticClass:"time-container",attrs:{label:"Time to make:"}},[t("b-form-timepicker",{attrs:{"show-seconds":"",required:"",hour12:!1},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),t("b-form-group",{staticClass:"serving-container",attrs:{label:"Serving:"}},[t("b-form-spinbutton",{attrs:{id:"serving-sb",min:"1",max:"100"},model:{value:e.servingAmount,callback:function(t){e.servingAmount=t},expression:"servingAmount"}})],1),t("b-form-group",{staticClass:"checkboxes-container",attrs:{label:"Dietary Options:"}},[t("b-form-checkbox-group",{attrs:{id:"checkboxes"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[t("b-form-checkbox",{attrs:{value:"isVegetarian"}},[e._v("Vegetarian")]),t("b-form-checkbox",{attrs:{value:"isVegan"}},[e._v("Vegan")]),t("b-form-checkbox",{attrs:{value:"isGlutenFree"}},[e._v("Gluten Free")])],1)],1),t("b-form-group",{staticClass:"instruction-container",attrs:{label:"Instructions:"}},[t("label",[e._v("Add an instruction:")]),1===e.numOfInstructions?[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfInstructions,". Enter instruction..."),required:""},model:{value:e.instruction,callback:function(t){e.instruction=t},expression:"instruction"}})]:[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfInstructions,"."),required:""},model:{value:e.instruction,callback:function(t){e.instruction=t},expression:"instruction"}})],t("b-icon",{attrs:{variant:"success",icon:"plus"},on:{click:e.AddInstruction}}),t("b-icon",{attrs:{variant:"danger",icon:"dash"},on:{click:e.RemoveInstruction}})],2),t("b-form-group",{staticClass:"ingredients-container",attrs:{label:"Ingredients:"}},[t("label",[e._v("Add an ingredient:")]),1===e.numOfIngredients?[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfIngredients,". Please enter here your ingredients name..."),required:""},model:{value:e.ingredientName,callback:function(t){e.ingredientName=t},expression:"ingredientName"}})]:[t("b-form-input",{attrs:{placeholder:"".concat(e.numOfIngredients,"."),required:""},model:{value:e.ingredientName,callback:function(t){e.ingredientName=t},expression:"ingredientName"}})],t("div",{staticClass:"ingredients-details-container"},[t("b-row",{staticClass:"mt-3"},[t("b-form-group",{staticClass:"amount",attrs:{label:"Amount:"}},[t("b-form-spinbutton",{attrs:{id:"amount-sb",min:"1",max:"100"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),t("b-form-group",{staticClass:"units",attrs:{label:"Units:"}},[t("b-form-select",{attrs:{required:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[t("b-form-select-option",{attrs:{value:null}},[e._v("Please select a unit measure")]),t("b-form-select-option",{attrs:{value:"Gram"}},[e._v("Gram")]),t("b-form-select-option",{attrs:{value:"Kilogram"}},[e._v("Kilogram")]),t("b-form-select-option",{attrs:{value:"Milliliter"}},[e._v("Milliliter")]),t("b-form-select-option",{attrs:{value:"Liter"}},[e._v("Liter")]),t("b-form-select-option",{attrs:{value:"Curt"}},[e._v("Curt")]),t("b-form-select-option",{attrs:{value:"Teaspoon"}},[e._v("Teaspoon")]),t("b-form-select-option",{attrs:{value:"Spoon"}},[e._v("Spoon")]),t("b-form-select-option",{attrs:{value:"Cup"}},[e._v("Cup")])],1)],1),t("div",{staticClass:"ingredients-buttons-container"},[t("b-icon",{style:{fontSize:"24px"},attrs:{variant:"success",icon:"plus",disabled:e.isIngredientButtonDisabled},on:{click:e.AddIngredient}}),t("b-icon",{style:{fontSize:"24px"},attrs:{variant:"danger",icon:"dash"},on:{click:e.RemoveIngredient}})],1)],1)],1)],2),t("div",{staticClass:"buttons-container"},[t("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Create")]),t("b-button",{attrs:{type:"reset",variant:"warning"},on:{click:e.onReset}},[e._v("Reset")])],1)],1):e._e()],1)}),o=[],c=a(3099);const l={name:"NewRecipe",data:function(){return{show:!0,file1:null,file2:null,form:{name:"",checked:[]},servingAmount:0,instructions:[],instruction:"",numOfInstructions:1,ingredients:[],ingredientName:"",numOfIngredients:1,amount:0,time:"00:00:00",text:"",selected:null,showToast:!1}},computed:{isIngredientButtonDisabled:function(){return!this.ingredientName||!this.amount||!this.selected}},methods:{AddInstruction:function(){this.instruction&&(this.instructions.push(this.instruction),this.numOfInstructions+=1,this.instruction="",this.$root.toast("Instruction added!","This instruction was added to your current recipe","success"))},RemoveInstruction:function(){this.numOfInstructions>0?(this.instructions.pop(),this.numOfInstructions-=1):this.$root.toast("Problem encountered during instruction removal ","You don't have any instruction for this recipe","danger")},AddIngredient:function(){this.isIngredientButtonDisabled?this.showToast=!0:this.ingredientName&&this.amount&&this.selected&&(this.ingredients.push({name:this.ingredientName,amount:this.amount,unit:this.selected}),this.numOfIngredients+=1,this.ingredientName="",this.amount=0,this.selected=null,this.$root.toast("Ingredient added!","This ingredient was added to your current recipe","success"))},RemoveIngredient:function(){this.numOfIngredients>0?(this.ingredients.pop(),this.numOfIngredients-=1):this.$root.toast("Problem encountered during ingridient removal ","You don't have any ingridient for this recipe","danger")},onSubmit:function(e){e.preventDefault();var t={name:this.form.name,image:this.file1,summary:this.text,time:this.time,servings:this.servingAmount,dietaryOptions:this.form.checked,instructions:this.instructions,ingredients:this.ingredients},a=(0,c.t)(t);200===a.status&&a.response.data.success?(alert(a.response.data.message),this.show=!1):alert("Failed to add the recipe. Please try again.")},onReset:function(e){null!=e&&e.preventDefault(),this.form={name:"",checked:[]},this.file1=null,this.file2=null,this.instructions=[],this.numOfInstructions=1,this.ingredients=[],this.servingAmount=0,this.numOfIngredients=1,this.ingredientName="",this.amount=0,this.time="00:00:00",this.text="",this.selected=null}}},u=l;var m=a(1001),d=(0,m.Z)(u,r,o,!1,null,"e234e4f4",null);const p=d.exports,g={components:{NewRecipe:p},name:"App",comments:{NewRecipe:p},methods:{showNewRecipeModal:function(){this.$bvModal.show("new-recipe-modal")},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},h=g;var f=(0,m.Z)(h,i,n,!1,null,null,null);const b=f.exports;var v=a(1939),w=a.n(v),y=a(9669),k=a.n(y),C=a(8135),_=a(3017),S=(a(7024),a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"content"},[t("div",{staticClass:"left-side"},[t("div",{staticClass:"container-random"},[t("RecipePreviewList",{key:e.componentKey,staticClass:"RandomRecipes center",staticStyle:{"text-align":"center","font-family":"Comfortaa","margin-top":"3%"},attrs:{isUserLoggedIn:e.$root.store.username,recipes:e.randomRecipes,title:"Explore these recipes"}})],1),t("div",{staticClass:"shuffle-container"},[t("b-button",{attrs:{id:"shuffle-button"}})],1)]),t("div",{staticClass:"right-side"},[e.$root.store.username?t("div",{staticClass:"container-user"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{isUserLoggedIn:e.$root.store.username,recipes:e.lastViewedRecipes,title:"Last Viewed Recipes"}})],1):t("div",{staticClass:"login-container"},[t("LoginPage")],1)])])])}),x=[],I=a(5817),L=a(2752),R=a(3193);const P={data:function(){return{componentKey:0,randomRecipes:[],lastViewedRecipes:[]}},components:{RecipePreviewList:I.Z,LoginPage:L["default"]},mounted:function(){this.fetchRandomRecipes(3),this.$root.store.username&&this.fetchLastViewedRecipes(3)},methods:{fetchRandomRecipes:function(e){var t=(0,R.j)(e);this.randomRecipes=t.data.recipes},fetchLastViewedRecipes:function(e){var t=(0,R.j)(e);this.lastViewedRecipes=t.data.recipes}}},O=P;var T=(0,m.Z)(O,S,x,!1,null,"8bd3da58",null);const $=T.exports;var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},A=[],F={},j=(0,m.Z)(F,N,A,!1,null,null,null);const D=j.exports;var B=[{path:"/",name:"main",component:$},{path:"/register",name:"register",component:function(){return a.e(763).then(a.bind(a,5763))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(a.bind(a,2752))}},{path:"/search",name:"search",component:function(){return a.e(154).then(a.bind(a,8154))}},{path:"/recipe/:recipeID",name:"recipe",component:function(){return a.e(713).then(a.bind(a,713))}},{path:"/about",name:"about",component:function(){return a.e(389).then(a.bind(a,5389))}},{path:"/MyRecipes",name:"MyRecipes",component:function(){return a.e(854).then(a.bind(a,2854))}},{path:"/MyFavoriteRecipes",name:"MyFavoriteRecipes",component:function(){return a.e(195).then(a.bind(a,6823))}},{path:"/MyFamilyRecipes",name:"MyFamilyRecipes",component:function(){return a.e(355).then(a.bind(a,8355))}},{path:"*",name:"notFound",component:D}];const M=B;var E=a(8345),q=a(8620),G=a(508),Z=a(7563),U=a(7419),V=a(1869),z=a(295),H=a(3090),K=a(794),Y=a(4063),J=a(8793),Q=a(7772);s["default"].use(C.XG7),s["default"].use(_.A7),s["default"].use(E.ZP);var W=new E.ZP({routes:M});[G.E,Z.w6,U.g,V.SY,z.xL,H.u3,K.v5,Y.F,J.m$,Q.A6].forEach((function(e){return s["default"].use(e)})),s["default"].use(q.ZP),k().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),k().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),s["default"].use(w(),k()),s["default"].config.productionTip=!1;var X={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(X),new s["default"]({router:W,data:function(){return{store:X}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:s,autoHideDelay:3e3})}},render:function(e){return e(b)}}).$mount("#app")},9239:(e,t,a)=>{a.d(t,{Ge:()=>i,sD:()=>s});a(1539),a(2564);function s(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise((function(e,t){setTimeout((function(){a?e({status:200,response:{data:{message:"Login succeeded",success:!0}}}):t({status:409,response:{data:{message:"Username or password are incorrect",success:!1}}})}),500)}))}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}},3193:(e,t,a)=>{a.d(t,{i:()=>r,j:()=>n});a(7658);var s=a(199),i=a(5352);function n(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],a=0;a<e;a++)t.push(i);return{data:{recipes:t}}}function r(e){return{data:{recipe:s}}}},3099:(e,t,a)=>{a.d(t,{p:()=>s,t:()=>i});a(199),a(5352);function s(e){return{status:200,response:{data:{message:"The Recipe successfully saved as favorite",success:!0}}}}function i(e){return{status:200,response:{data:{message:"The Recipe successfully added to My Recipes",success:!0}}}}},2168:(e,t,a)=>{e.exports=a.p+"img/gluten.a532ca2f.png"},6159:(e,t,a)=>{e.exports=a.p+"img/like.7c52a3a3.png"},3238:(e,t,a)=>{e.exports=a.p+"img/vegan.695aa32a.png"},7221:(e,t,a)=>{e.exports=a.p+"img/vegetarian.577b3def.png"},4018:(e,t,a)=>{e.exports=a.p+"img/vi.30a78b8a.png"},199:e=>{e.exports=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[{"step":1,"instruction":"Bring a large pot of salted water to a boil."},{"step":2,"instruction":"Add the pasta and cook according to package instructions until al dente."},{"step":3,"instruction":"While the pasta is cooking, heat olive oil in a large skillet over medium heat."},{"step":4,"instruction":"Add minced garlic and sauté for 1-2 minutes until fragrant."},{"step":5,"instruction":"Add cherry tomatoes to the skillet and cook until they start to soften, about 3-4 minutes."},{"step":6,"instruction":"Drain the cooked pasta, reserving 1 cup of pasta water."},{"step":7,"instruction":"Add the cooked pasta to the skillet with the tomatoes and garlic."},{"step":8,"instruction":"Toss the pasta with the tomato mixture, adding pasta water as needed to create a light sauce."},{"step":9,"instruction":"Season with salt, pepper, and red pepper flakes to taste."},{"step":10,"instruction":"Remove from heat and stir in fresh basil leaves and grated Parmesan cheese."},{"step":11,"instruction":"Serve immediately, garnished with additional Parmesan cheese and basil if desired."}],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}')},5352:e=>{e.exports=JSON.parse('{"id":716429,"image":"https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9-1024x1536.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}')}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,s,i,n)=>{if(!s){var r=1/0;for(u=0;u<e.length;u++){for(var[s,i,n]=e[u],o=!0,c=0;c<s.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](s[c])))?s.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,i,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{154:"871074ce",195:"d8add8d3",355:"a7eabf8b",389:"e53e22b5",713:"f9ce6fbe",763:"4b3a13c4",854:"4cddb0c8"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{154:"8c774a1a",195:"7f17be10",355:"bf17a1b2",389:"6cef05ce",713:"417f52e8",763:"b66611c7",854:"587575e1"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(s,i,n,r)=>{if(e[s])e[s].push(i);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var m=l[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==t+n){o=m;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+n),o.src=s),e[s]=[i];var d=(t,a)=>{o.onerror=o.onload=null,clearTimeout(p);var i=e[s];if(delete e[s],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(a))),t)return t(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,s,i)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=a=>{if(n.onerror=n.onload=null,"load"===a.type)s();else{var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=o,n.parentNode&&n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=r,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var r=document.getElementsByTagName("style");for(s=0;s<r.length;s++){i=r[s],n=i.getAttribute("data-href");if(n===e||n===t)return i}},s=s=>new Promise(((i,n)=>{var r=a.miniCssF(s),o=a.p+r;if(t(r,o))return i();e(s,o,null,i,n)})),i={143:0};a.f.miniCss=(e,t)=>{var a={154:1,195:1,355:1,389:1,713:1,763:1,854:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=s(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,s)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var n=new Promise(((a,s)=>i=e[t]=[a,s]));s.push(i[2]=n);var r=a.p+a.u(t),o=new Error,c=s=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,i[1](o)}};a.l(r,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,s)=>{var i,n,[r,o,c]=s,l=0;if(r.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var u=c(a)}for(t&&t(s);l<r.length;l++)n=r[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[998],(()=>a(9414)));s=a.O(s)})();
//# sourceMappingURL=app.0bb2a405.js.map