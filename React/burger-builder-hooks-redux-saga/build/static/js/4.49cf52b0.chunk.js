(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{102:function(e,a,t){"use strict";var n=t(0),u=t.n(n),r=t(103),l=t.n(r);a.a=function(e){var a=null,t=[l.a.InputElement],n=null;switch(!e.valid&&e.validation&&e.touched&&(t.push(l.a.Invalid),n=u.a.createElement("p",{className:l.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":a=u.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":a=u.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":var r=e.elementConfig.options.map((function(e){return u.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));a=u.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},r);break;default:a=u.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return u.a.createElement("div",{className:l.a.Input},u.a.createElement("label",{className:l.a.Label}," ",e.label),a,n)}},103:function(e,a,t){e.exports={Input:"Input_Input__SNRl4",Label:"Input_Label__3w96u",InputElement:"Input_InputElement__pO52w",Invalid:"Input_Invalid__3aeyU",ValidationError:"Input_ValidationError__2fHal"}},104:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e,a){var t=!0;if(!a)return!0;if(a.required&&(t=""!==e.trim()&&t),a.minLength&&(t=e.length>=a.minLength&&t),a.maxLength&&(t=e.length<=a.maxLength&&t),a.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&t}if(a.isNumeric){t=/^\d+$/.test(e)&&t}return t}},108:function(e,a,t){e.exports={Auth:"Auth_Auth__7JmWy"}},109:function(e,a,t){"use strict";t.r(a);var n=t(49),u=t(8),r=t(20),l=t(0),i=t.n(l),c=t(11),o=t(21),s=t(102),d=t(36),m=t(108),h=t.n(m),v=t(45),p=t(104),g=t(7);a.default=Object(c.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.error,isAuthenticated:null!==e.authReducer.token,authRedirectPath:e.authReducer.authRedirectPath,buildingBurger:e.burgerBuilderReducer.building}}),(function(e){return{onAuth:function(a,t,n){return e(g.b(a,t,n))},onSetAuthRedirectPath:function(a){return e(g.v(a))}}}))((function(e){var a=Object(l.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),t=Object(r.a)(a,2),c=t[0],m=t[1],g=Object(l.useState)(!0),f=Object(r.a)(g,2),b=f[0],E=f[1],I=e.buildingBurger,_=e.authRedirectPath,j=e.onSetAuthRedirectPath;Object(l.useEffect)((function(){I||"/"===_||j("/")}),[I,_,j]);var N=[],O=function(e){N.push(i.a.createElement(s.a,Object.assign({key:e},c[e],{changed:function(a){!function(e,a){var t=Object(u.a)({},c,Object(n.a)({},a,Object(u.a)({},c[a],{value:e.target.value,valid:Object(p.a)(e.target.value,c[a].validation),touched:!0})));m(t)}(a,e)}})))};for(var S in c)O(S);e.loading&&(N=i.a.createElement(v.a,null));var y=null;e.error&&(y=i.a.createElement("p",null,e.error.message));var R=null;return e.isAuthenticated&&(R=i.a.createElement(o.a,{to:e.authRedirectPath})),i.a.createElement("div",{className:h.a.Auth},R,y,i.a.createElement("p",null,b?"SIGNUP":"SIGNIN"),i.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.onAuth(c.email.value,c.password.value,b)}},N,i.a.createElement(d.a,{btnType:"Success"},"SUBMIT")),i.a.createElement(d.a,{btnType:"Danger",clicked:function(){E((function(e){return!e}))}},"SWITCH TO ",b?"SIGNIN":"SIGNUP"))}))}}]);
//# sourceMappingURL=4.49cf52b0.chunk.js.map