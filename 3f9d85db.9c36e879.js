(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1069:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,g=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(g,l(l({ref:t},o),{},{components:r})):a.a.createElement(g,l({ref:t},o))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},347:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(1069)),c={id:"classic-interfaces-relay-mutation-request",title:"RelayMutationRequest",original_id:"classic-interfaces-relay-mutation-request"},l={unversionedId:"classic-interfaces-relay-mutation-request",id:"version-classic/classic-interfaces-relay-mutation-request",isDocsHomePage:!1,title:"RelayMutationRequest",description:"RelayMutationRequest encapsulates a mutation that Relay needs to send to the server. They are made available to network layers via the sendMutation method.",source:"@site/versioned_docs/version-classic/Classic-Interfaces-MutationRequest.md",slug:"/classic-interfaces-relay-mutation-request",permalink:"/relay/docs/classic/classic-interfaces-relay-mutation-request",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Interfaces-MutationRequest.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614287474,sidebar:"version-classic/docs",previous:{title:"Relay.Store",permalink:"/relay/docs/classic/classic-api-reference-relay-store"},next:{title:"RelayNetworkLayer",permalink:"/relay/docs/classic/classic-interfaces-relay-network-layer"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"getQueryString",id:"getquerystring",children:[]},{value:"getVariables",id:"getvariables",children:[]},{value:"getFiles",id:"getfiles",children:[]},{value:"getID",id:"getid",children:[]},{value:"getDebugName",id:"getdebugname",children:[]}]}],o={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RelayMutationRequest")," encapsulates a mutation that Relay needs to send to the server. They are made available to network layers via the ",Object(i.b)("inlineCode",{parentName:"p"},"sendMutation")," method."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#getquerystring"},Object(i.b)("pre",null,"getQueryString()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getvariables"},Object(i.b)("pre",null,"getVariables()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getfiles"},Object(i.b)("pre",null,"getFiles()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getid"},Object(i.b)("pre",null,"getID()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getdebugname"},Object(i.b)("pre",null,"getDebugName()")))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getquerystring"},"getQueryString"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetQueryString(): string\n\n")),Object(i.b)("p",null,"Gets a string representation of the GraphQL mutation."),Object(i.b)("h3",{id:"getvariables"},"getVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetVariables(): {[name: string]: mixed}\n\n")),Object(i.b)("p",null,"Gets the variables used by the mutation. These variables should be serialized and send in the GraphQL request."),Object(i.b)("h3",{id:"getfiles"},"getFiles"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetFiles(): ?{[key: string]: File}\n\n")),Object(i.b)("p",null,"Gets an optional map from name to File objects."),Object(i.b)("h3",{id:"getid"},"getID"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetID(): string\n\n")),Object(i.b)("p",null,"Gets a unique identifier for this mutation. These identifiers are useful for assigning response payloads to their corresponding mutations when sent in a single GraphQL request."),Object(i.b)("h3",{id:"getdebugname"},"getDebugName"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetDebugName(): string\n\n")),Object(i.b)("p",null,"Gets a string name used to refer to this request for printing debug output."))}u.isMDXComponent=!0}}]);