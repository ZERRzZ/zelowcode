import{c as j,b as K,k as D,g as _,e as F,d as G,f as H}from"./@babel-D91nw8a6.js";import{c as R}from"./classnames-ixCMRz17.js";import{K as p,z as J,e as Q,b as U,C as X}from"./rc-util-BGVI6VDl.js";import{a as i}from"./react-jFU0esu9.js";import{C as Y}from"./rc-motion-BS5OivOI.js";var T=i.forwardRef(function(e,n){var a=e.prefixCls,t=e.forceRender,u=e.className,y=e.style,s=e.children,c=e.isActive,P=e.role,d=e.classNames,C=e.styles,r=i.useState(c||t),v=j(r,2),l=v[0],f=v[1];return i.useEffect(function(){(t||c)&&f(!0)},[t,c]),l?i.createElement("div",{ref:n,className:R("".concat(a,"-content"),K(K({},"".concat(a,"-content-active"),c),"".concat(a,"-content-inactive"),!c),u),style:y,role:P},i.createElement("div",{className:R("".concat(a,"-content-box"),d==null?void 0:d.body),style:C==null?void 0:C.body},s)):null});T.displayName="PanelContent";var Z=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],z=i.forwardRef(function(e,n){var a=e.showArrow,t=a===void 0?!0:a,u=e.headerClass,y=e.isActive,s=e.onItemClick,c=e.forceRender,P=e.className,d=e.classNames,C=d===void 0?{}:d,r=e.styles,v=r===void 0?{}:r,l=e.prefixCls,f=e.collapsible,I=e.accordion,h=e.panelKey,m=e.extra,x=e.header,N=e.expandIcon,o=e.openMotion,g=e.destroyInactivePanel,k=e.children,w=D(e,Z),b=f==="disabled",A=m!=null&&typeof m!="boolean",E=K(K(K({onClick:function(){s==null||s(h)},onKeyDown:function(M){(M.key==="Enter"||M.keyCode===p.ENTER||M.which===p.ENTER)&&(s==null||s(h))},role:I?"tab":"button"},"aria-expanded",y),"aria-disabled",b),"tabIndex",b?-1:0),S=typeof N=="function"?N(e):i.createElement("i",{className:"arrow"}),O=S&&i.createElement("div",_({className:"".concat(l,"-expand-icon")},["header","icon"].includes(f)?E:{}),S),L=R("".concat(l,"-item"),K(K({},"".concat(l,"-item-active"),y),"".concat(l,"-item-disabled"),b),P),V=R(u,"".concat(l,"-header"),K({},"".concat(l,"-collapsible-").concat(f),!!f),C.header),W=F({className:V,style:v.header},["header","icon"].includes(f)?{}:E);return i.createElement("div",_({},w,{ref:n,className:L}),i.createElement("div",W,t&&O,i.createElement("span",_({className:"".concat(l,"-header-text")},f==="header"?E:{}),x),A&&i.createElement("div",{className:"".concat(l,"-extra")},m)),i.createElement(Y,_({visible:y,leavedClassName:"".concat(l,"-content-hidden")},o,{forceRender:c,removeOnLeave:g}),function($,M){var q=$.className,B=$.style;return i.createElement(T,{ref:M,prefixCls:l,className:q,classNames:C,style:B,styles:v,isActive:y,forceRender:c,role:I?"tabpanel":void 0},k)}))}),ee=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ae=function(n,a){var t=a.prefixCls,u=a.accordion,y=a.collapsible,s=a.destroyInactivePanel,c=a.onItemClick,P=a.activeKey,d=a.openMotion,C=a.expandIcon;return n.map(function(r,v){var l=r.children,f=r.label,I=r.key,h=r.collapsible,m=r.onItemClick,x=r.destroyInactivePanel,N=D(r,ee),o=String(I??v),g=h??y,k=x??s,w=function(E){g!=="disabled"&&(c(E),m==null||m(E))},b=!1;return u?b=P[0]===o:b=P.indexOf(o)>-1,i.createElement(z,_({},N,{prefixCls:t,key:o,panelKey:o,isActive:b,accordion:u,openMotion:d,expandIcon:C,header:f,collapsible:g,onItemClick:w,destroyInactivePanel:k}),l)})},ne=function(n,a,t){if(!n)return null;var u=t.prefixCls,y=t.accordion,s=t.collapsible,c=t.destroyInactivePanel,P=t.onItemClick,d=t.activeKey,C=t.openMotion,r=t.expandIcon,v=n.key||String(a),l=n.props,f=l.header,I=l.headerClass,h=l.destroyInactivePanel,m=l.collapsible,x=l.onItemClick,N=!1;y?N=d[0]===v:N=d.indexOf(v)>-1;var o=m??s,g=function(b){o!=="disabled"&&(P(b),x==null||x(b))},k={key:v,panelKey:v,header:f,headerClass:I,isActive:N,prefixCls:u,destroyInactivePanel:h??c,openMotion:C,accordion:y,children:n.props.children,onItemClick:g,expandIcon:r,collapsible:o};return typeof n.type=="string"?n:(Object.keys(k).forEach(function(w){typeof k[w]>"u"&&delete k[w]}),i.cloneElement(n,k))};function te(e,n,a){return Array.isArray(e)?ae(e,a):J(n).map(function(t,u){return ne(t,u,a)})}function le(e){var n=e;if(!Array.isArray(n)){var a=G(n);n=a==="number"||a==="string"?[n]:[]}return n.map(function(t){return String(t)})}var ie=i.forwardRef(function(e,n){var a=e.prefixCls,t=a===void 0?"rc-collapse":a,u=e.destroyInactivePanel,y=u===void 0?!1:u,s=e.style,c=e.accordion,P=e.className,d=e.children,C=e.collapsible,r=e.openMotion,v=e.expandIcon,l=e.activeKey,f=e.defaultActiveKey,I=e.onChange,h=e.items,m=R(t,P),x=Q([],{value:l,onChange:function(A){return I==null?void 0:I(A)},defaultValue:f,postState:le}),N=j(x,2),o=N[0],g=N[1],k=function(A){return g(function(){if(c)return o[0]===A?[]:[A];var E=o.indexOf(A),S=E>-1;return S?o.filter(function(O){return O!==A}):[].concat(H(o),[A])})};U(!d,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var w=te(h,d,{prefixCls:t,accordion:c,openMotion:r,expandIcon:v,collapsible:C,destroyInactivePanel:y,onItemClick:k,activeKey:o});return i.createElement("div",_({ref:n,className:m,style:s,role:c?"tablist":void 0},X(e,{aria:!0,data:!0})),w)});const ce=Object.assign(ie,{Panel:z});ce.Panel;export{ce as C};
