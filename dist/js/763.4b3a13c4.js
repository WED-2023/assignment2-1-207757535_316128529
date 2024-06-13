(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[763],{5763:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>w});var n=function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("br"),e("br"),e("br"),e("br"),e("h1",{staticClass:"title"},[a._v("Register")]),e("b-form",{on:{submit:function(e){return e.preventDefault(),a.onRegister.apply(null,arguments)},reset:function(e){return e.preventDefault(),a.onReset.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[e("b-form-input",{attrs:{id:"username",type:"text",state:a.validateState("username")},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a._e():e("b-form-invalid-feedback",[a._v(" Username length should be between 3-8 characters long ")]):e("b-form-invalid-feedback",[a._v(" Username is required ")]),a.$v.form.username.alpha?a._e():e("b-form-invalid-feedback",[a._v(" Username alpha ")])],1),e("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[e("b-form-select",{attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),e("b-form-invalid-feedback",[a._v(" Country is required ")])],1),e("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",state:a.validateState("password")},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.$error?e("b-form-text",{attrs:{"text-variant":"info"}},[a._v(" Your password should be "),e("strong",[a._v("strong")]),a._v(". "),e("br"),a._v(" For that, your password should be also: ")]):a._e():e("b-form-invalid-feedback",[a._v(" Password is required ")]),a.$v.form.password.required&&!a.$v.form.password.length?e("b-form-invalid-feedback",[a._v(" Have length between 5-10 characters long ")]):a._e()],1),e("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[e("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:a.validateState("confirmedPassword")},model:{value:a.$v.form.confirmedPassword.$model,callback:function(e){a.$set(a.$v.form.confirmedPassword,"$model",e)},expression:"$v.form.confirmedPassword.$model"}}),a.$v.form.confirmedPassword.required?a.$v.form.confirmedPassword.sameAsPassword?a._e():e("b-form-invalid-feedback",[a._v(" The confirmed password is not equal to the original password ")]):e("b-form-invalid-feedback",[a._v(" Password confirmation is required ")])],1),e("div",{staticClass:"button-container"},[e("b-button",{attrs:{type:"reset",variant:"danger"}},[a._v("Reset")]),e("b-button",{staticClass:"ml-5 w-75",attrs:{type:"submit",variant:"primary"}},[a._v("Register")])],1),e("div",{staticClass:"mt-2"},[a._v(" You have an account already? "),e("router-link",{attrs:{to:"login"}},[a._v(" Log in here")])],1)],1),a.form.submitError?e("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[a._v(" Register failed: "+a._s(a.form.submitError)+" ")]):a._e()],1)},t=[],o=r(6835),i=r(8534);r(9753);function s(a,e){(null==e||e>a.length)&&(e=a.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=a[r];return n}function l(a){if(Array.isArray(a))return s(a)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function u(a){if("undefined"!==typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}r(7042),r(8309),r(4916),r(7601);function d(a,e){if(a){if("string"===typeof a)return s(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);return"Object"===r&&a.constructor&&(r=a.constructor.name),"Map"===r||"Set"===r?Array.from(a):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(a,e):void 0}}r(1703),r(6647);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(a){return l(a)||u(a)||d(a)||c()}r(7658);const f=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var p=r(379),v=r(9239);const b={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:p.C1,length:function(a){return(0,p.Ei)(3)(a)&&(0,p.BS)(8)(a)},alpha:p.Fq},country:{required:p.C1},password:{required:p.C1,length:function(a){return(0,p.Ei)(5)(a)&&(0,p.BS)(10)(a)}},confirmedPassword:{required:p.C1,sameAsPassword:(0,p.sH)("password")}}},mounted:function(){var a;(a=this.countries).push.apply(a,m(f))},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,n=e.$error;return r?!n:null},Register:function(){var a=this;return(0,i.Z)((0,o.Z)().mark((function e(){var r;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r={username:a.form.username,password:a.form.password},(0,v.Ge)(r),a.$router.push("/login")}catch(n){console.log(n.response),a.form.submitError=n.response.data.message}case 1:case"end":return e.stop()}}),e)})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var a=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){a.$v.$reset()}))}}},g=b;var h=r(1001),y=(0,h.Z)(g,n,t,!1,null,"3697c750",null);const w=y.exports},8457:(a,e,r)=>{"use strict";var n=r(9974),t=r(6916),o=r(7908),i=r(3411),s=r(7659),l=r(4411),u=r(6244),d=r(6135),c=r(4121),m=r(1246),f=Array;a.exports=function(a){var e=o(a),r=l(this),p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v;b&&(v=n(v,p>2?arguments[2]:void 0));var g,h,y,w,S,x,I=m(e),$=0;if(!I||this===f&&s(I))for(g=u(e),h=r?new this(g):f(g);g>$;$++)x=b?v(e[$],$):e[$],d(h,$,x);else for(w=c(e,I),S=w.next,h=r?new this:[];!(y=t(S,w)).done;$++)x=b?i(w,v,[y.value,$],!0):y.value,d(h,$,x);return h.length=$,h}},3411:(a,e,r)=>{var n=r(9670),t=r(9212);a.exports=function(a,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){t(a,"throw",i)}}},2261:(a,e,r)=>{"use strict";var n=r(6916),t=r(1702),o=r(1340),i=r(7066),s=r(2999),l=r(2309),u=r(30),d=r(9909).get,c=r(9441),m=r(7168),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,b=t("".charAt),g=t("".indexOf),h=t("".replace),y=t("".slice),w=function(){var a=/a/,e=/b*/g;return n(p,a,"a"),n(p,e,"a"),0!==a.lastIndex||0!==e.lastIndex}(),S=s.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],I=w||x||S||c||m;I&&(v=function(a){var e,r,t,s,l,c,m,I=this,$=d(I),C=o(a),R=$.raw;if(R)return R.lastIndex=I.lastIndex,e=n(v,R,C),I.lastIndex=R.lastIndex,e;var A=$.groups,P=S&&I.sticky,k=n(i,I),M=I.source,_=0,B=C;if(P&&(k=h(k,"y",""),-1===g(k,"g")&&(k+="g"),B=y(C,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==b(C,I.lastIndex-1))&&(M="(?: "+M+")",B=" "+B,_++),r=new RegExp("^(?:"+M+")",k)),x&&(r=new RegExp("^"+M+"$(?!\\s)",k)),w&&(t=I.lastIndex),s=n(p,P?r:I,B),P?s?(s.input=y(s.input,_),s[0]=y(s[0],_),s.index=I.lastIndex,I.lastIndex+=s[0].length):I.lastIndex=0:w&&s&&(I.lastIndex=I.global?s.index+s[0].length:t),x&&s&&s.length>1&&n(f,s[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&A)for(s.groups=c=u(null),l=0;l<A.length;l++)m=A[l],c[m[0]]=s[m[1]];return s}),a.exports=v},7066:(a,e,r)=>{"use strict";var n=r(9670);a.exports=function(){var a=n(this),e="";return a.hasIndices&&(e+="d"),a.global&&(e+="g"),a.ignoreCase&&(e+="i"),a.multiline&&(e+="m"),a.dotAll&&(e+="s"),a.unicode&&(e+="u"),a.unicodeSets&&(e+="v"),a.sticky&&(e+="y"),e}},2999:(a,e,r)=>{var n=r(7293),t=r(7854),o=t.RegExp,i=n((function(){var a=o("a","y");return a.lastIndex=2,null!=a.exec("abcd")})),s=i||n((function(){return!o("a","y").sticky})),l=i||n((function(){var a=o("^r","gy");return a.lastIndex=2,null!=a.exec("str")}));a.exports={BROKEN_CARET:l,MISSED_STICKY:s,UNSUPPORTED_Y:i}},9441:(a,e,r)=>{var n=r(7293),t=r(7854),o=t.RegExp;a.exports=n((function(){var a=o(".","s");return!(a.dotAll&&a.exec("\n")&&"s"===a.flags)}))},7168:(a,e,r)=>{var n=r(7293),t=r(7854),o=t.RegExp;a.exports=n((function(){var a=o("(?<a>b)","g");return"b"!==a.exec("b").groups.a||"bc"!=="b".replace(a,"$<a>c")}))},1038:(a,e,r)=>{var n=r(2109),t=r(8457),o=r(7072),i=!o((function(a){Array.from(a)}));n({target:"Array",stat:!0,forced:i},{from:t})},9753:(a,e,r)=>{var n=r(2109),t=r(3157);n({target:"Array",stat:!0},{isArray:t})},4916:(a,e,r)=>{"use strict";var n=r(2109),t=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==t},{exec:t})},7601:(a,e,r)=>{"use strict";r(4916);var n=r(2109),t=r(6916),o=r(614),i=r(9670),s=r(1340),l=function(){var a=!1,e=/[ac]/;return e.exec=function(){return a=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&a}(),u=/./.test;n({target:"RegExp",proto:!0,forced:!l},{test:function(a){var e=i(this),r=s(a),n=e.exec;if(!o(n))return t(u,e,r);var l=t(n,e,r);return null!==l&&(i(l),!0)}})}}]);
//# sourceMappingURL=763.4b3a13c4.js.map