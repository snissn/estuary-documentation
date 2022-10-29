"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[7185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},i="EstuaryClient.DefaultApi",o={unversionedId:"javascript/DefaultApi",id:"javascript/DefaultApi",title:"EstuaryClient.DefaultApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/javascript/DefaultApi.md",sourceDirName:"javascript",slug:"/javascript/DefaultApi",permalink:"/estuary-documentation/clients/javascript/DefaultApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EstuaryClient.DealsApi",permalink:"/estuary-documentation/clients/javascript/DealsApi"},next:{title:"EstuaryClient.MainCreateCollectionBody",permalink:"/estuary-documentation/clients/javascript/MainCreateCollectionBody"}},u={},s=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"estuaryclientdefaultapi"},"EstuaryClient.DefaultApi"),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/DefaultApi#dealTransferStatusPost"},(0,n.kt)("strong",{parentName:"a"},"dealTransferStatusPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /deal/transfer/status"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("a",{name:"dealTransferStatusPost"}),"# **dealTransferStatusPost** > dealTransferStatusPost()",(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.DefaultApi();\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully.');\n  }\n};\napiInstance.dealTransferStatusPost(callback);\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null,"null (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": Not defined")))}c.isMDXComponent=!0}}]);