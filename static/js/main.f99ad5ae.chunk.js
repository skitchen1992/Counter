(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],[,,function(e,a,t){e.exports={wrap:"Value_wrap__3cddL",red:"Value_red__3Hj9R",black:"Value_black__38Wu1",default:"Value_default__3t6TO",num:"Value_num__3ChJE"}},function(e,a,t){e.exports={wrap:"SetValue_wrap__3f-un",value:"SetValue_value__3h8vL",default:"SetValue_default__EyLgV",error:"SetValue_error__3SPxP",title:"SetValue_title__1bZxK"}},,function(e,a,t){e.exports={wrap:"Changes_wrap__3FnhT"}},function(e,a,t){e.exports={wrapper:"App_wrapper__2Rh_f",wrap:"App_wrap__29kNz"}},,,function(e,a,t){e.exports={default:"Button_default__3Zlg-"}},,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(8),r=t.n(c),u=(t(15),t(4)),s=t(6),l=t.n(s),i=t(2),o=t.n(i),d=t(0),b=function(e){return Object(d.jsx)("div",{className:o.a.wrap,children:Object(d.jsx)("div",{className:e.displayValue===+e.maxValue?"".concat(o.a.red," ").concat(o.a.num," ").concat(o.a.default):"number"===typeof e.displayValue?"".concat(o.a.num," ").concat(o.a.default):"incorrect value"===e.displayValue?"".concat(o.a.red," ").concat(o.a.default," "):"".concat(o.a.default),children:e.displayValue})})},j=t(5),x=t.n(j),p=t(10),f=t(9),O=t.n(f),V=function(e){var a=Object.assign({},e),t="".concat(O.a.default);return Object(d.jsx)("button",Object(p.a)({className:t},a))},m=function(e){return Object(d.jsxs)("div",{className:x.a.wrap,children:[Object(d.jsx)(V,{disabled:e.isIncButtonDisabled,onClick:e.inc,children:"inc"}),Object(d.jsx)(V,{onClick:e.reset,disabled:e.isResetButtonDisabled,children:"reset"})]})},v=function(e){var a=e.displayValue,t=e.maxValue,n=e.inc,c=e.reset,r=e.isIncButtonDisabled,u=e.isResetButtonDisabled;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{displayValue:a,maxValue:t}),Object(d.jsx)(m,{inc:n,displayValue:a,maxValue:t,reset:c,isIncButtonDisabled:r,isResetButtonDisabled:u})]})},_=t(3),h=t.n(_),S=function(e){var a="".concat(h.a.default," ").concat(e.isMaxInputError?h.a.error:""),t="".concat(h.a.default," ").concat(e.isStartInputError?h.a.error:""," ");return Object(d.jsxs)("div",{className:h.a.wrap,children:[Object(d.jsxs)("div",{className:h.a.value,children:[Object(d.jsx)("div",{className:h.a.title,children:"max value:"}),Object(d.jsx)("input",{className:a,type:"number",value:e.maxValue,onChange:function(a){e.changeMaxValue(+a.currentTarget.value)}})]}),Object(d.jsxs)("div",{className:h.a.value,children:[Object(d.jsx)("div",{className:h.a.title,children:"start value:"}),Object(d.jsx)("input",{className:t,type:"number",value:e.startValue,onChange:function(a){return e.changeStartValue(+a.currentTarget.value)}})]})]})},g=function(e){return Object(d.jsx)("div",{className:x.a.wrap,children:Object(d.jsx)(V,{disabled:e.isSetButtonDisabled,onClick:e.setNewValue,children:"set"})})},B=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{startValue:e.startValue,maxValue:e.maxValue,changeMaxValue:e.changeMaxValue,changeStartValue:e.changeStartValue,isMaxInputError:e.isMaxInputError,isStartInputError:e.isStartInputError}),Object(d.jsx)(g,{startValue:e.startValue,maxValue:e.maxValue,setNewValue:e.setNewValue,isSetButtonDisabled:e.isSetButtonDisabled})]})};var w=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),i=s[0],o=s[1],b=Object(n.useState)(""),j=Object(u.a)(b,2),x=j[0],p=j[1],f=Object(n.useState)(!0),O=Object(u.a)(f,2),V=O[0],m=O[1],_=Object(n.useState)(!0),h=Object(u.a)(_,2),S=h[0],g=h[1],w=Object(n.useState)(!0),N=Object(u.a)(w,2),D=N[0],I=N[1],y=Object(n.useState)(!0),E=Object(u.a)(y,2),C=E[0],M=E[1],k=Object(n.useState)(!0),F=Object(u.a)(k,2),R=F[0],T=F[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("counter");if(e){var a=JSON.parse(e);c(a.maxValue),o(a.startValue),p(a.value),m(a.valueDisabledBtnSet),g(a.valueDisabledBtnInc),I(a.valueDisabledBtnReset),M(a.errorMaxBtn),T(a.errorStartBtn)}}),[]),Object(n.useEffect)((function(){var e={maxValue:t,startValue:i,value:x,valueDisabledBtnSet:V,valueDisabledBtnInc:S,valueDisabledBtnReset:D,errorMaxBtn:C,errorStartBtn:R};localStorage.setItem("counter",JSON.stringify(e))}),[t,i,x,V,S,D,C,R]),Object(n.useEffect)((function(){t===i&&(T(!0),M(!0)),t>i&&(M(!1),T(!1)),t<i&&(M(!0),T(!0)),i<0&&T(!0),x===t&&g(!0)}),[i,t,x]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:l.a.wrapper,children:[Object(d.jsx)("div",{className:l.a.wrap,children:Object(d.jsx)(B,{startValue:i,maxValue:t,changeMaxValue:function(e){c(e),g(!0),I(!0),e===i||e<i||i<0?(m(!0),p("incorrect value")):(m(!1),p("enter values and press 'set'"))},changeStartValue:function(e){o(e),g(!0),I(!0),(t===e||t<e||e<0)&&(m(!0),p("incorrect value"))},setNewValue:function(){m(!0),p(i),g(!1),I(!1)},isMaxInputError:C,isStartInputError:R,isSetButtonDisabled:V})}),Object(d.jsx)("div",{className:l.a.wrap,children:Object(d.jsx)(v,{inc:function(){p(+x+1)},reset:function(){p(i),g(!1)},displayValue:x,maxValue:t,isIncButtonDisabled:S,isResetButtonDisabled:D})})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,u=a.getTTFB;t(e),n(e),c(e),r(e),u(e)}))};r.a.render(Object(d.jsx)(w,{}),document.getElementById("root")),N()}],[[17,1,2]]]);
//# sourceMappingURL=main.f99ad5ae.chunk.js.map