"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[594],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},120:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={},s="Breakpoints",p={unversionedId:"css-library/Layout/breakpoints",id:"css-library/Layout/breakpoints",isDocsHomePage:!1,title:"Breakpoints",description:"Media queries allows the developer to conditionally apply the styles to the element based on the screensize. Breakpoints are the screen widths that determines at what size which styles should be applied.",source:"@site/docs/css-library/Layout/breakpoints.md",sourceDirName:"css-library/Layout",slug:"/css-library/Layout/breakpoints",permalink:"/docs/css-library/Layout/breakpoints",editUrl:"https://github.com/maticnetwork/matic-design-system/edit/master/website/docs/css-library/Layout/breakpoints.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/css-library/getting-started"},next:{title:"Container",permalink:"/docs/css-library/Layout/container"}},c=[{value:"Available breakpoints",id:"available-breakpoints",children:[]},{value:"Media Queries",id:"media-queries",children:[{value:"Min-width",id:"min-width",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Max-width",id:"max-width",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"breakpoints"},"Breakpoints"),(0,i.kt)("p",null,"Media queries allows the developer to conditionally apply the styles to the element based on the screensize. ",(0,i.kt)("strong",{parentName:"p"},"Breakpoints")," are the screen widths that determines at what size which styles should be applied."),(0,i.kt)("h2",{id:"available-breakpoints"},"Available breakpoints"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Breakpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Dimensions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"sm")),(0,i.kt)("td",{parentName:"tr",align:null},"Small"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2265 576px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"md")),(0,i.kt)("td",{parentName:"tr",align:null},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2265 768px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"lg")),(0,i.kt)("td",{parentName:"tr",align:null},"Large"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2265 992px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"xl")),(0,i.kt)("td",{parentName:"tr",align:null},"Extra large"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2265 1200apx")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"$breakpoints: (\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n);\n")),(0,i.kt)("p",null,"These breakpoints can be customized in scss. You'll find them in the ",(0,i.kt)("span",{class:"var"},"_variables.scss")," file. "),(0,i.kt)("h2",{id:"media-queries"},"Media Queries"),(0,i.kt)("p",null,"We have a set of media queries made for the above breakpoints. The syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@include media-breakpoint-{value}({breakpoint}) {\n    ...\n}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("em",{parentName:"p"},"breakpoint")," is one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"sm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"lg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"xl"))),(0,i.kt)("p",null,"and ",(0,i.kt)("em",{parentName:"p"},"value")," is either "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"up")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",{class:"var"},"down"))),(0,i.kt)("h3",{id:"min-width"},"Min-width"),(0,i.kt)("p",null,"PolygonMesh is built mobile first, which means we use ",(0,i.kt)("inlineCode",{parentName:"p"},"min-width")," for the ",(0,i.kt)("a",{parentName:"p",href:"./grid-column"},"grid system")," and other PolygonMesh classes.\nIf you are taking mobile first approach in your project, you can use the"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@include media-breakpoint-up(sm) {...}\n@include media-breakpoint-up(md) {...}\n@include media-breakpoint-up(lg) {...}\n@include media-breakpoint-up(xl) {...}\n\n// This compiles to\n// @media (min-width: 576px) {...}\n// @media (min-width: 768px) {...}\n// @media (min-width: 992px) {...}\n// @media (min-width: 1200px) {...}\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".my-element {\n  background-color: white;\n}\n\n@include media-breakpoint-up(sm) {\n  .my-element {\n    background-color: black;\n  }\n}\n\n// This will change the background color to black on sm and above screen sizes\n")),(0,i.kt)("p",null,"The above mixins compiles to the following CSS code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".my-element {\n  background-color: white;\n}\n\n@media (min-width: 576px) {\n  .my-element {\n    background-color: black;\n  }\n}\n")),(0,i.kt)("h3",{id:"max-width"},"Max-width"),(0,i.kt)("p",null,"If you are taking desktop first approach in your project or want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"max-width")," conditions, you can use the"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@include media-breakpoint-down(sm) {...}\n@include media-breakpoint-down(md) {...}\n@include media-breakpoint-down(lg) {...}\n@include media-breakpoint-down(xl) {...}\n\n// This compiles to\n// @media (max-width: 575.98px) {...}\n// @media (max-width: 767.98px) {...}\n// @media (max-width: 991.98px) {...}\n// @media (max-width: 1199.98px) {...}\n")),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".my-element {\n  background-color: white;\n}\n\n@include media-breakpoint-down(lg) {\n  .my-element {\n    background-color: black;\n  }\n}\n\n// This will change the background color to black on md and below screen sizes\n")),(0,i.kt)("p",null,"The above code compiles to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".my-element {\n  background-color: white;\n}\n\n@media (max-width: 991.98px) {\n  .my-element {\n    background-color: black;\n  }\n}\n")))}u.isMDXComponent=!0}}]);