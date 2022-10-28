"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[4086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=n,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:6},i="Working with Estuary API Swagger Docs",s={unversionedId:"Tutorial/tutorial-working-with-swagger",id:"Tutorial/tutorial-working-with-swagger",title:"Working with Estuary API Swagger Docs",description:"The ARG team created the Swagger Documentation to enable developers to test out the API functionalities and generate their own client based on their specification.",source:"@site/docs/Tutorial/tutorial-working-with-swagger.md",sourceDirName:"Tutorial",slug:"/Tutorial/tutorial-working-with-swagger",permalink:"/estuary-documentation/docs/Tutorial/tutorial-working-with-swagger",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial/tutorial-working-with-swagger.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Managing files with Rclone",permalink:"/estuary-documentation/docs/Tutorial/tutorial-managing-files-with-rclone"},next:{title:"Estuary API Swagger Documentation",permalink:"/estuary-documentation/docs/Estuary API Docs/swagger-intro"}},l={},u=[{value:"Try them out",id:"try-them-out",level:2},{value:"Developer Notes",id:"developer-notes",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-estuary-api-swagger-docs"},"Working with Estuary API Swagger Docs"),(0,n.kt)("p",null,"The ARG team created the Swagger Documentation to enable developers to test out the API functionalities and generate their own client based on their specification. "),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"https://docs.estuary.tech/swagger-ui-page"},"here")," to get started on Estuary API Swagger"),(0,n.kt)("h2",{id:"try-them-out"},"Try them out"),(0,n.kt)("p",null,"Once you have your swagger ui is all set with the proper authorization token (API key), you can now run a few examples."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To upload data, try it ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/swagger-ui-page#/content/post_content_add"},"here")),(0,n.kt)("li",{parentName:"ul"},"To get list of all content of the user, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/swagger-ui-page#/content/get_content_list"},"here")),(0,n.kt)("li",{parentName:"ul"},"To test the get all pinned data of the current user, try it ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/swagger-ui-page#/content/get_pinning_pins"},"here"))),(0,n.kt)("h2",{id:"developer-notes"},"Developer Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you're a developer looking to just grab the json or yaml files to generate your client code and server stubs, download them ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/application-research/estuary/master/docs/swagger.yaml"},"here (yaml)")," and ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/application-research/estuary/master/docs/swagger.json"},"here (json)")),(0,n.kt)("li",{parentName:"ul"},"You can also import the json file on Postman - an API platform for building and using APIs. To learn more about Postman, click ",(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"here"))))}p.isMDXComponent=!0}}]);