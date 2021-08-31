"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[442],{3905:function(r,s,a){a.d(s,{Zo:function(){return d},kt:function(){return b}});var e=a(7294);function n(r,s,a){return s in r?Object.defineProperty(r,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[s]=a,r}function t(r,s){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),a.push.apply(a,e)}return a}function i(r){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?t(Object(a),!0).forEach((function(s){n(r,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(a,s))}))}return r}function c(r,s){if(null==r)return{};var a,e,n=function(r,s){if(null==r)return{};var a,e,n={},t=Object.keys(r);for(e=0;e<t.length;e++)a=t[e],s.indexOf(a)>=0||(n[a]=r[a]);return n}(r,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);for(e=0;e<t.length;e++)a=t[e],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}var o=e.createContext({}),l=function(r){var s=e.useContext(o),a=s;return r&&(a="function"==typeof r?r(s):i(i({},s),r)),a},d=function(r){var s=l(r.components);return e.createElement(o.Provider,{value:s},r.children)},p={inlineCode:"code",wrapper:function(r){var s=r.children;return e.createElement(e.Fragment,{},s)}},g=e.forwardRef((function(r,s){var a=r.components,n=r.mdxType,t=r.originalType,o=r.parentName,d=c(r,["components","mdxType","originalType","parentName"]),g=l(a),b=n,m=g["".concat(o,".").concat(b)]||g[b]||p[b]||t;return a?e.createElement(m,i(i({ref:s},d),{},{components:a})):e.createElement(m,i({ref:s},d))}));function b(r,s){var a=arguments,n=s&&s.mdxType;if("string"==typeof r||n){var t=a.length,i=new Array(t);i[0]=g;var c={};for(var o in s)hasOwnProperty.call(s,o)&&(c[o]=s[o]);c.originalType=r,c.mdxType="string"==typeof r?r:n,i[1]=c;for(var l=2;l<t;l++)i[l]=a[l];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7393:function(r,s,a){a.r(s),a.d(s,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var e=a(2122),n=a(9756),t=(a(7294),a(3905)),i=["components"],c={},o="Background",l={unversionedId:"css-library/util/background",id:"css-library/util/background",isDocsHomePage:!1,title:"Background",description:"Background color classes can be used to set background color for an element.",source:"@site/docs/css-library/util/background.md",sourceDirName:"css-library/util",slug:"/css-library/util/background",permalink:"/docs/css-library/util/background",editUrl:"https://github.com/maticnetwork/matic-design-system/edit/master/website/docs/css-library/util/background.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Form Control",permalink:"/docs/css-library/form/form-control"},next:{title:"Corners",permalink:"/docs/css-library/util/corners"}},d=[{value:"Base variants",id:"base-variants",children:[]},{value:"Color variants",id:"color-variants",children:[]},{value:"SCSS",id:"scss",children:[]},{value:"All colors",id:"all-colors",children:[]}],p={toc:d};function g(r){var s=r.components,a=(0,n.Z)(r,i);return(0,t.kt)("wrapper",(0,e.Z)({},p,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"background"},"Background"),(0,t.kt)("p",null,"Background color classes can be used to set background color for an element."),(0,t.kt)("p",null,"The syntax for the class is as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-md"},".bg-{$color}-{$base}\n")),(0,t.kt)("p",null,"where ",(0,t.kt)("strong",{parentName:"p"},"$color")," is one of the following: ",(0,t.kt)("span",{class:"var"},"gray"),", ",(0,t.kt)("span",{class:"var"},"primary"),", ",(0,t.kt)("span",{class:"var"},"secondary"),", ",(0,t.kt)("span",{class:"var"},"success"),", ",(0,t.kt)("span",{class:"var"},"warning")," and ",(0,t.kt)("span",{class:"var"},"error")),(0,t.kt)("p",null,"and ",(0,t.kt)("strong",{parentName:"p"},"$base")," is one of the following: ",(0,t.kt)("span",{class:"var"},"900"),", ",(0,t.kt)("span",{class:"var"},"800"),", ",(0,t.kt)("span",{class:"var"},"700"),", ",(0,t.kt)("span",{class:"var"},"600"),", ",(0,t.kt)("span",{class:"var"},"500"),", ",(0,t.kt)("span",{class:"var"},"400"),", ",(0,t.kt)("span",{class:"var"},"300"),", ",(0,t.kt)("span",{class:"var"},"200"),", ",(0,t.kt)("span",{class:"var"},"100")),(0,t.kt)("h2",{id:"base-variants"},"Base variants"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<div class="bg-primary-900 rounded-sm p-4">.bg-primary-900</div>\n<div class="bg-primary-800 rounded-sm p-4">.bg-primary-800</div>\n<div class="bg-primary-700 rounded-sm p-4">.bg-primary-700</div>\n<div class="bg-primary-600 rounded-sm p-4">.bg-primary-600</div>\n<div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>\n<div class="bg-primary-400 rounded-sm p-4">.bg-primary-400</div>\n<div class="bg-primary-300 rounded-sm p-4">.bg-primary-300</div>\n<div class="bg-primary-200 rounded-sm p-4">.bg-primary-200</div>\n<div class="bg-primary-100 rounded-sm p-4">.bg-primary-100</div>\n')),(0,t.kt)("div",{class:"demo-element-container"},(0,t.kt)("div",{class:"bg-primary-900 rounded-sm p-4"},".bg-primary-900"),(0,t.kt)("div",{class:"bg-primary-800 rounded-sm p-4"},".bg-primary-800"),(0,t.kt)("div",{class:"bg-primary-700 rounded-sm p-4"},".bg-primary-700"),(0,t.kt)("div",{class:"bg-primary-600 rounded-sm p-4"},".bg-primary-600"),(0,t.kt)("div",{class:"bg-primary-500 rounded-sm p-4"},".bg-primary-500"),(0,t.kt)("div",{class:"bg-primary-400 rounded-sm p-4"},".bg-primary-400"),(0,t.kt)("div",{class:"bg-primary-300 rounded-sm p-4"},".bg-primary-300"),(0,t.kt)("div",{class:"bg-primary-200 rounded-sm p-4"},".bg-primary-200"),(0,t.kt)("div",{class:"bg-primary-100 rounded-sm p-4"},".bg-primary-100")),(0,t.kt)("br",null),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"You may have noticed some extra classes like ",(0,t.kt)("inlineCode",{parentName:"p"},".rounded-sm")," and ",(0,t.kt)("inlineCode",{parentName:"p"},".p-4")," in the above code. We will learn about those classes in the following sections."))),(0,t.kt)("h2",{id:"color-variants"},"Color variants"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>\n<div class="bg-secondary-500 rounded-sm p-4">.bg-secondary-500</div>\n<div class="bg-success-500 rounded-sm p-4">.bg-success-500</div>\n<div class="bg-warning-500 rounded-sm p-4">.bg-warning-500</div>\n<div class="bg-error-500 rounded-sm p-4">.bg-error-500</div>\n<div class="bg-gray-500 rounded-sm p-4">.bg-gray-500</div>\n')),(0,t.kt)("div",{class:"demo-element-container"},(0,t.kt)("div",{class:"bg-primary-500 rounded-sm p-4"},".bg-primary-500"),(0,t.kt)("div",{class:"bg-secondary-500 rounded-sm p-4"},".bg-secondary-500"),(0,t.kt)("div",{class:"bg-success-500 rounded-sm p-4"},".bg-success-500"),(0,t.kt)("div",{class:"bg-warning-500 rounded-sm p-4"},".bg-warning-500"),(0,t.kt)("div",{class:"bg-error-500 rounded-sm p-4"},".bg-error-500"),(0,t.kt)("div",{class:"bg-gray-500 rounded-sm p-4"},".bg-gray-500")),(0,t.kt)("h2",{id:"scss"},"SCSS"),(0,t.kt)("p",null,"If you are using the scss source files, you can use the mixins to get the colours. "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},'.para{\n    @mixin set-bg("primary", "500");\n    // other css rules\n}\n')),(0,t.kt)("p",null,"The above code will output the following css:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css"},".para{\n    background-color: var(--primary-500); /*#8247e5*/\n    /* other css rules */\n}\n")),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"The ",(0,t.kt)("inlineCode",{parentName:"p"},"set-bg")," mixin will return background-color property with a CSS3 var as its value. These varialbes can be overriden or changed by the users. More about this in the ",(0,t.kt)("a",{parentName:"p",href:"../customize/theme"},"customize")," section."))),(0,t.kt)("h2",{id:"all-colors"},"All colors"),(0,t.kt)("div",{class:"pm-row plain"},(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-primary-900 p-4"},".bg-primary-900"),(0,t.kt)("div",{class:"bg-primary-800 p-4"},".bg-primary-800"),(0,t.kt)("div",{class:"bg-primary-700 p-4"},".bg-primary-700"),(0,t.kt)("div",{class:"bg-primary-600 p-4"},".bg-primary-600"),(0,t.kt)("div",{class:"bg-primary-500 p-4"},".bg-primary-500"),(0,t.kt)("div",{class:"bg-primary-400 p-4"},".bg-primary-400"),(0,t.kt)("div",{class:"bg-primary-300 p-4"},".bg-primary-300"),(0,t.kt)("div",{class:"bg-primary-200 p-4"},".bg-primary-200"),(0,t.kt)("div",{class:"bg-primary-100 p-4"},".bg-primary-100")),(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-secondary-900 p-4"},".bg-secondary-900"),(0,t.kt)("div",{class:"bg-secondary-800 p-4"},".bg-secondary-800"),(0,t.kt)("div",{class:"bg-secondary-700 p-4"},".bg-secondary-700"),(0,t.kt)("div",{class:"bg-secondary-600 p-4"},".bg-secondary-600"),(0,t.kt)("div",{class:"bg-secondary-500 p-4"},".bg-secondary-500"),(0,t.kt)("div",{class:"bg-secondary-400 p-4"},".bg-secondary-400"),(0,t.kt)("div",{class:"bg-secondary-300 p-4"},".bg-secondary-300"),(0,t.kt)("div",{class:"bg-secondary-200 p-4"},".bg-secondary-200"),(0,t.kt)("div",{class:"bg-secondary-100 p-4"},".bg-secondary-100")),(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-success-900 p-4"},".bg-success-900"),(0,t.kt)("div",{class:"bg-success-800 p-4"},".bg-success-800"),(0,t.kt)("div",{class:"bg-success-700 p-4"},".bg-success-700"),(0,t.kt)("div",{class:"bg-success-600 p-4"},".bg-success-600"),(0,t.kt)("div",{class:"bg-success-500 p-4"},".bg-success-500"),(0,t.kt)("div",{class:"bg-success-400 p-4"},".bg-success-400"),(0,t.kt)("div",{class:"bg-success-300 p-4"},".bg-success-300"),(0,t.kt)("div",{class:"bg-success-200 p-4"},".bg-success-200"),(0,t.kt)("div",{class:"bg-success-100 p-4"},".bg-success-100")),(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-warning-900 p-4"},".bg-warning-900"),(0,t.kt)("div",{class:"bg-warning-800 p-4"},".bg-warning-800"),(0,t.kt)("div",{class:"bg-warning-700 p-4"},".bg-warning-700"),(0,t.kt)("div",{class:"bg-warning-600 p-4"},".bg-warning-600"),(0,t.kt)("div",{class:"bg-warning-500 p-4"},".bg-warning-500"),(0,t.kt)("div",{class:"bg-warning-400 p-4"},".bg-warning-400"),(0,t.kt)("div",{class:"bg-warning-300 p-4"},".bg-warning-300"),(0,t.kt)("div",{class:"bg-warning-200 p-4"},".bg-warning-200"),(0,t.kt)("div",{class:"bg-warning-100 p-4"},".bg-warning-100")),(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-error-900 p-4"},".bg-error-900"),(0,t.kt)("div",{class:"bg-error-800 p-4"},".bg-error-800"),(0,t.kt)("div",{class:"bg-error-700 p-4"},".bg-error-700"),(0,t.kt)("div",{class:"bg-error-600 p-4"},".bg-error-600"),(0,t.kt)("div",{class:"bg-error-500 p-4"},".bg-error-500"),(0,t.kt)("div",{class:"bg-error-400 p-4"},".bg-error-400"),(0,t.kt)("div",{class:"bg-error-300 p-4"},".bg-error-300"),(0,t.kt)("div",{class:"bg-error-200 p-4"},".bg-error-200"),(0,t.kt)("div",{class:"bg-error-100 p-4"},".bg-error-100")),(0,t.kt)("div",{class:"pm-col-6 pm-col-sm-4"},(0,t.kt)("div",{class:"bg-gray-900 p-4"},".bg-gray-900"),(0,t.kt)("div",{class:"bg-gray-800 p-4"},".bg-gray-800"),(0,t.kt)("div",{class:"bg-gray-700 p-4"},".bg-gray-700"),(0,t.kt)("div",{class:"bg-gray-600 p-4"},".bg-gray-600"),(0,t.kt)("div",{class:"bg-gray-500 p-4"},".bg-gray-500"),(0,t.kt)("div",{class:"bg-gray-400 p-4"},".bg-gray-400"),(0,t.kt)("div",{class:"bg-gray-300 p-4"},".bg-gray-300"),(0,t.kt)("div",{class:"bg-gray-200 p-4"},".bg-gray-200"),(0,t.kt)("div",{class:"bg-gray-100 p-4"},".bg-gray-100"))))}g.isMDXComponent=!0}}]);