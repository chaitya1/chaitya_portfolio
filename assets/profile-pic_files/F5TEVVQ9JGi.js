;/*FB_PKG_DELIM*/

__d("FDSFacepile.react",["BaseContainerQueryElement.react","CometProfilePhoto.react","TetraText.react","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=4,k=6,l=-4,m={item:{position:"x1n2onr6",$$css:!0},items:{display:"x78zum5",flexDirection:"x1q0g3np",marginTop:"xhsvlbd",marginBottom:"x16pr9af",overflowX:"x6ikm8r",paddingTop:"x889kno",paddingBottom:"x1a8lsjc",position:"x1n2onr6",$$css:!0},itemWithActivity:{marginStart:"x1mnrxsn",marginLeft:null,marginRight:null,$$css:!0},itemWithSpacing:{marginStart:"xsgj6o6",marginLeft:null,marginRight:null,$$css:!0},overlappingItem:{marginStart:"x139jcc6",marginLeft:null,marginRight:null,$$css:!0},root:{display:"x78zum5",flexDirection:"xdt5ytf",position:"x1n2onr6",$$css:!0},rootInline:{alignItems:"x6s0dn4",flexDirection:"x1q0g3np",$$css:!0},text:{paddingTop:"xz9dl7a",$$css:!0},textInline:{paddingStart:"x1e558r4",paddingLeft:null,paddingRight:null,paddingTop:"xexx8yu",$$css:!0},wrapper:{paddingEnd:"xn6708d",paddingLeft:null,paddingRight:null,paddingStart:"x1swvt13",paddingTop:"xyamay9",$$css:!0}};function a(a){var b=a.count,e=a.isOverlapping,f=e===void 0?!1:e;e=a.isTextInline;e=e===void 0?!1:e;var g=a.items,h=a.size,n=a.testid;n=a.text;a=a.withWrapper;b=(b=b)!=null?b:g.length;var o=g.some(function(a){return((a=a.addOn)==null?void 0:a.type)==="activityBadge"}),p=f?l:o?k:j;b=Math.min(b,g.length,e?3:Infinity);g=i.jsxs(d("react-strict-dom").html.div,{"data-testid":void 0,style:[m.root,e&&m.rootInline],children:[i.jsx(d("react-strict-dom").html.div,{children:i.jsx(d("react-strict-dom").html.div,{role:"list",style:m.items,children:g.slice(0,b).map(function(a,b){var e=a.addOn,g=a.alt,j=a.containerComponent;j=j===void 0?i.Fragment:j;a=a.source;return i.jsxs(i.Fragment,{children:[i.jsx(c("BaseContainerQueryElement.react"),{breakpoint:(b+1)*(h+p)-p,inverseToContainer:!0,maxWidth:"100%",minWidth:0}),i.jsx(d("react-strict-dom").html.div,{role:"listitem",style:[m.item,b>0&&m.itemWithSpacing,b>0&&o&&m.itemWithActivity,b>0&&f&&m.overlappingItem],children:i.jsx(j,{children:i.jsx(c("CometProfilePhoto.react"),{addOn:e,alt:g,isOverlapped:f&&b>0,overlayDisabled:!0,shape:"circle",size:h,source:a})})})]},b)})})}),n!=null?i.jsx(d("react-strict-dom").html.div,{style:[m.text,e&&m.textInline],children:i.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:n})}):null]});return a?i.jsx(d("react-strict-dom").html.div,{style:m.wrapper,children:g}):g}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ServiceWorkerCacheManagement",["regeneratorRuntime"],(function(a,b,c,d,e,f){function a(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:if(!("caches"in self)){a.next=3;break}a.next=3;return b("regeneratorRuntime").awrap(caches["delete"]("sr-cache-1"));case 3:case"end":return a.stop()}},null,this)}f.manageCache=a}),66);