"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8661],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),y=r,k=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return n?l.createElement(k,a(a({ref:e},p),{},{components:n})):l.createElement(k,a({ref:e},p))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},885:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const i={},a="Get Content by Cid",o={type:"api",id:"get-content-by-cid",unversionedId:"get-content-by-cid",title:"Get Content by Cid",description:"",slug:"/get-content-by-cid",frontMatter:{},api:{description:"This endpoint returns the content associated with a CID",tags:["public"],parameters:[{description:"Cid",name:"cid",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"get",path:"/public/by-cid/{cid}",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Get Content by Cid",description:{content:"This endpoint returns the content associated with a CID",type:"text/plain"},url:{path:["public","by-cid",":cid"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Cid",type:"text/plain"},type:"any",value:"<string>",key:"cid"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/estuary-documentation/api/get-content-by-cid",previous:{title:"Delete a pinned object",permalink:"/estuary-documentation/api/delete-a-pinned-object"},next:{title:"Get storage failures",permalink:"/estuary-documentation/api/get-storage-failures"}},s=[],c={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-content-by-cid"},"Get Content by Cid"),(0,r.kt)("p",null,"This endpoint returns the content associated with a CID"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Cid")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"400")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"code"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"reason"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"500")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"code"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"reason"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}p.isMDXComponent=!0}}]);