"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[2089],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),u=c(n),y=i,k=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?l.createElement(k,r(r({ref:e},p),{},{components:n})):l.createElement(k,r({ref:e},p))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=u;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3060:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const o={},r="Deletes a content from a collection",a={type:"api",id:"deletes-a-content-from-a-collection",unversionedId:"deletes-a-content-from-a-collection",title:"Deletes a content from a collection",description:"",slug:"/deletes-a-content-from-a-collection",frontMatter:{},api:{description:"This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path",tags:["collections"],parameters:[{description:"Collection ID",name:"coluuid",in:"path",required:!0,schema:{type:"string"}},{description:"Content ID",name:"contentid",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{by:{type:"string"},value:{type:"string"}}}}},description:"Variable to use when filtering for files (must be either 'path' or 'content_id')",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"delete",path:"/collections/{coluuid}/contents",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{by:"string",value:"string"},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Deletes a content from a collection",description:{content:"This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path",type:"text/plain"},url:{path:["collections",":coluuid","contents"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Collection ID",type:"text/plain"},type:"any",value:"<string>",key:"coluuid"},{description:{content:"(Required) Content ID",type:"text/plain"},type:"any",value:"<string>",key:"contentid"}]},header:[{key:"Content-Type",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'{\n    "by": "<string>",\n    "value": "<string>"\n}'}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/deletes-a-content-from-a-collection",previous:{title:"Produce a CID of the collection contents",permalink:"/api/produce-a-cid-of-the-collection-contents"},next:{title:"Add new content",permalink:"/api/add-new-content"}},s=[],c={toc:s};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deletes-a-content-from-a-collection"},"Deletes a content from a collection"),(0,i.kt)("p",null,"This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"coluuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Collection ID")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contentid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Content ID")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null,(0,i.kt)("p",null,"Variable to use when filtering for files (must be either 'path' or 'content_id')"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"by"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"value"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"400")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"code"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reason"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"500")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"code"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reason"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}p.isMDXComponent=!0}}]);