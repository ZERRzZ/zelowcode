import{k as Z,e as K,f as ye,b as P,c as k,g as L,h as Ln,i as On,a as An,_ as Tn,d as Fn}from"./@babel-D91nw8a6.js";import{c as Ce}from"./classnames-ixCMRz17.js";import{F as _e}from"./rc-overflow-hCo2P9PI.js";import{p as Vn,q as Ht,L as Un,x as Ne,K as ae,e as We,b as Gt,h as zn,A as pt,z as Hn}from"./rc-util-BGVI6VDl.js";import{r as t}from"./react-jFU0esu9.js";import{r as Gn}from"./react-dom-Dl7ImxMp.js";import{T as Wn}from"./@rc-component-CHdcDd_A.js";import{C as jn}from"./rc-motion-BS5OivOI.js";var Wt=t.createContext(null);function jt(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function qt(e){var r=t.useContext(Wt);return jt(r,e)}var qn=["children","locked"],Q=t.createContext(null);function Bn(e,r){var a=K({},e);return Object.keys(r).forEach(function(n){var i=r[n];i!==void 0&&(a[n]=i)}),a}function ke(e){var r=e.children,a=e.locked,n=Z(e,qn),i=t.useContext(Q),o=Vn(function(){return Bn(i,n)},[i,n],function(l,u){return!a&&(l[0]!==u[0]||!Ht(l[1],u[1],!0))});return t.createElement(Q.Provider,{value:o},r)}var Yn=[],Bt=t.createContext(null);function Ye(){return t.useContext(Bt)}var Yt=t.createContext(Yn);function $e(e){var r=t.useContext(Yt);return t.useMemo(function(){return e!==void 0?[].concat(ye(r),[e]):r},[r,e])}var Xt=t.createContext(null),gt=t.createContext({}),ct=ae.LEFT,st=ae.RIGHT,dt=ae.UP,je=ae.DOWN,qe=ae.ENTER,Jt=ae.ESC,Ee=ae.HOME,we=ae.END,Tt=[dt,je,ct,st];function Xn(e,r,a,n){var i,o="prev",l="next",u="children",v="parent";if(e==="inline"&&n===qe)return{inlineTrigger:!0};var c=P(P({},dt,o),je,l),y=P(P(P(P({},ct,a?l:o),st,a?o:l),je,u),qe,u),s=P(P(P(P(P(P({},dt,o),je,l),qe,u),Jt,v),ct,a?u:v),st,a?v:u),p={inline:c,horizontal:y,vertical:s,inlineSub:c,horizontalSub:s,verticalSub:s},I=(i=p["".concat(e).concat(r?"":"Sub")])===null||i===void 0?void 0:i[n];switch(I){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case v:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function Jn(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Zn(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function Ct(e,r){var a=Un(e,!0);return a.filter(function(n){return r.has(n)})}function Ft(e,r,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var i=Ct(e,r),o=i.length,l=i.findIndex(function(u){return a===u});return n<0?l===-1?l=o-1:l-=1:n>0&&(l+=1),l=(l+o)%o,i[l]}var vt=function(r,a){var n=new Set,i=new Map,o=new Map;return r.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(jt(a,l),"']"));u&&(n.add(u),o.set(u,l),i.set(l,u))}),{elements:n,key2element:i,element2key:o}};function Qn(e,r,a,n,i,o,l,u,v,c){var y=t.useRef(),s=t.useRef();s.current=r;var p=function(){Ne.cancel(y.current)};return t.useEffect(function(){return function(){p()}},[]),function(I){var g=I.which;if([].concat(Tt,[qe,Jt,Ee,we]).includes(g)){var M=o(),f=vt(M,n),E=f,w=E.elements,m=E.key2element,C=E.element2key,h=m.get(r),d=Zn(h,w),T=C.get(d),R=Xn(e,l(T,!0).length===1,a,g);if(!R&&g!==Ee&&g!==we)return;(Tt.includes(g)||[Ee,we].includes(g))&&I.preventDefault();var W=function(V){if(V){var Y=V,q=V.querySelector("a");q!=null&&q.getAttribute("href")&&(Y=q);var X=C.get(V);u(X),p(),y.current=Ne(function(){s.current===X&&Y.focus()})}};if([Ee,we].includes(g)||R.sibling||!d){var D;!d||e==="inline"?D=i.current:D=Jn(d);var _,F=Ct(D,w);g===Ee?_=F[0]:g===we?_=F[F.length-1]:_=Ft(D,w,d,R.offset),W(_)}else if(R.inlineTrigger)v(T);else if(R.offset>0)v(T,!0),p(),y.current=Ne(function(){f=vt(M,n);var te=d.getAttribute("aria-controls"),V=document.getElementById(te),Y=Ft(V,f.elements);W(Y)},5);else if(R.offset<0){var O=l(T,!0),ee=O[O.length-2],j=m.get(ee);v(ee,!1),W(j)}}c==null||c(I)}}function er(e){Promise.resolve().then(e)}var ht="__RC_UTIL_PATH_SPLIT__",Vt=function(r){return r.join(ht)},tr=function(r){return r.split(ht)},ft="rc-menu-more";function nr(){var e=t.useState({}),r=k(e,2),a=r[1],n=t.useRef(new Map),i=t.useRef(new Map),o=t.useState([]),l=k(o,2),u=l[0],v=l[1],c=t.useRef(0),y=t.useRef(!1),s=function(){y.current||a({})},p=t.useCallback(function(m,C){var h=Vt(C);i.current.set(h,m),n.current.set(m,h),c.current+=1;var d=c.current;er(function(){d===c.current&&s()})},[]),I=t.useCallback(function(m,C){var h=Vt(C);i.current.delete(h),n.current.delete(m)},[]),g=t.useCallback(function(m){v(m)},[]),M=t.useCallback(function(m,C){var h=n.current.get(m)||"",d=tr(h);return C&&u.includes(d[0])&&d.unshift(ft),d},[u]),f=t.useCallback(function(m,C){return m.filter(function(h){return h!==void 0}).some(function(h){var d=M(h,!0);return d.includes(C)})},[M]),E=function(){var C=ye(n.current.keys());return u.length&&C.push(ft),C},w=t.useCallback(function(m){var C="".concat(n.current.get(m)).concat(ht),h=new Set;return ye(i.current.keys()).forEach(function(d){d.startsWith(C)&&h.add(i.current.get(d))}),h},[]);return t.useEffect(function(){return function(){y.current=!0}},[]),{registerPath:p,unregisterPath:I,refreshOverflowKeys:g,isSubPathKey:f,getKeyPath:M,getKeys:E,getSubPathKeys:w}}function Ke(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var n,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(o))},[]);return e?a:void 0}var rr=Math.random().toFixed(5).toString().slice(2),Ut=0;function ar(e){var r=We(e,{value:e}),a=k(r,2),n=a[0],i=a[1];return t.useEffect(function(){Ut+=1;var o="".concat(rr,"-").concat(Ut);i("rc-menu-uuid-".concat(o))},[]),n}function Zt(e,r,a,n){var i=t.useContext(Q),o=i.activeKey,l=i.onActive,u=i.onInactive,v={active:o===e};return r||(v.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),l(e)},v.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),u(e)}),v}function Qt(e){var r=t.useContext(Q),a=r.mode,n=r.rtl,i=r.inlineIndent;if(a!=="inline")return null;var o=e;return n?{paddingRight:o*i}:{paddingLeft:o*i}}function en(e){var r=e.icon,a=e.props,n=e.children,i;return r===null||r===!1?null:(typeof r=="function"?i=t.createElement(r,K({},a)):typeof r!="boolean"&&(i=r),i||n||null)}var ir=["item"];function Be(e){var r=e.item,a=Z(e,ir);return Object.defineProperty(a,"item",{get:function(){return Gt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var or=["title","attribute","elementRef"],lr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ur=["active"],cr=function(e){Ln(a,e);var r=On(a);function a(){return An(this,a),r.apply(this,arguments)}return Tn(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,v=Z(i,or),c=pt(v,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Gt(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(_e.Item,L({},l,{title:typeof o=="string"?o:void 0},c,{ref:u}))}}]),a}(t.Component),sr=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.eventKey;e.warnKey;var o=e.disabled,l=e.itemIcon,u=e.children,v=e.role,c=e.onMouseEnter,y=e.onMouseLeave,s=e.onClick,p=e.onKeyDown,I=e.onFocus,g=Z(e,lr),M=qt(i),f=t.useContext(Q),E=f.prefixCls,w=f.onItemClick,m=f.disabled,C=f.overflowDisabled,h=f.itemIcon,d=f.selectedKeys,T=f.onActive,R=t.useContext(gt),W=R._internalRenderMenuItem,D="".concat(E,"-item"),_=t.useRef(),F=t.useRef(),O=m||o,ee=zn(r,F),j=$e(i),te=function(A){return{key:i,keyPath:ye(j).reverse(),item:_.current,domEvent:A}},V=l||h,Y=Zt(i,O,c,y),q=Y.active,X=Z(Y,ur),re=d.includes(i),ue=Qt(j.length),ce=function(A){if(!O){var J=te(A);s==null||s(Be(J)),w(J)}},U=function(A){if(p==null||p(A),A.which===ae.ENTER){var J=te(A);s==null||s(Be(J)),w(J)}},z=function(A){T(i),I==null||I(A)},he={};e.role==="option"&&(he["aria-selected"]=re);var se=t.createElement(cr,L({ref:_,elementRef:ee,role:v===null?"none":v||"menuitem",tabIndex:o?null:-1,"data-menu-id":C&&M?null:M},pt(g,["extra"]),X,he,{component:"li","aria-disabled":o,style:K(K({},ue),a),className:Ce(D,P(P(P({},"".concat(D,"-active"),q),"".concat(D,"-selected"),re),"".concat(D,"-disabled"),O),n),onClick:ce,onKeyDown:U,onFocus:z}),u,t.createElement(en,{props:K(K({},e),{},{isSelected:re}),icon:V}));return W&&(se=W(se,e,{selected:re})),se});function dr(e,r){var a=e.eventKey,n=Ye(),i=$e(a);return t.useEffect(function(){if(n)return n.registerPath(a,i),function(){n.unregisterPath(a,i)}},[i]),n?null:t.createElement(sr,L({},e,{ref:r}))}const bt=t.forwardRef(dr);var vr=["className","children"],fr=function(r,a){var n=r.className,i=r.children,o=Z(r,vr),l=t.useContext(Q),u=l.prefixCls,v=l.mode,c=l.rtl;return t.createElement("ul",L({className:Ce(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(v==="inline"?"inline":"vertical"),n),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},yt=t.forwardRef(fr);yt.displayName="SubMenuList";function It(e,r){return Hn(e).map(function(a,n){if(t.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,v=u==null;v&&(u="tmp_key-".concat([].concat(ye(r),[n]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var $={adjustX:1,adjustY:1},mr={topLeft:{points:["bl","tl"],overflow:$},topRight:{points:["br","tr"],overflow:$},bottomLeft:{points:["tl","bl"],overflow:$},bottomRight:{points:["tr","br"],overflow:$},leftTop:{points:["tr","tl"],overflow:$},leftBottom:{points:["br","bl"],overflow:$},rightTop:{points:["tl","tr"],overflow:$},rightBottom:{points:["bl","br"],overflow:$}},pr={topLeft:{points:["bl","tl"],overflow:$},topRight:{points:["br","tr"],overflow:$},bottomLeft:{points:["tl","bl"],overflow:$},bottomRight:{points:["tr","br"],overflow:$},rightTop:{points:["tr","tl"],overflow:$},rightBottom:{points:["br","bl"],overflow:$},leftTop:{points:["tl","tr"],overflow:$},leftBottom:{points:["bl","br"],overflow:$}};function tn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var gr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Cr(e){var r=e.prefixCls,a=e.visible,n=e.children,i=e.popup,o=e.popupStyle,l=e.popupClassName,u=e.popupOffset,v=e.disabled,c=e.mode,y=e.onVisibleChange,s=t.useContext(Q),p=s.getPopupContainer,I=s.rtl,g=s.subMenuOpenDelay,M=s.subMenuCloseDelay,f=s.builtinPlacements,E=s.triggerSubMenuAction,w=s.forceSubMenuRender,m=s.rootClassName,C=s.motion,h=s.defaultMotions,d=t.useState(!1),T=k(d,2),R=T[0],W=T[1],D=I?K(K({},pr),f):K(K({},mr),f),_=gr[c],F=tn(c,C,h),O=t.useRef(F);c!=="inline"&&(O.current=F);var ee=K(K({},O.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),j=t.useRef();return t.useEffect(function(){return j.current=Ne(function(){W(a)}),function(){Ne.cancel(j.current)}},[a]),t.createElement(Wn,{prefixCls:r,popupClassName:Ce("".concat(r,"-popup"),P({},"".concat(r,"-rtl"),I),l,m),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:p,builtinPlacements:D,popupPlacement:_,popupVisible:R,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:v?[]:[E],mouseEnterDelay:g,mouseLeaveDelay:M,onPopupVisibleChange:y,forceRender:w,popupMotion:ee,fresh:!0},n)}function hr(e){var r=e.id,a=e.open,n=e.keyPath,i=e.children,o="inline",l=t.useContext(Q),u=l.prefixCls,v=l.forceSubMenuRender,c=l.motion,y=l.defaultMotions,s=l.mode,p=t.useRef(!1);p.current=s===o;var I=t.useState(!p.current),g=k(I,2),M=g[0],f=g[1],E=p.current?a:!1;t.useEffect(function(){p.current&&f(!1)},[s]);var w=K({},tn(o,c,y));n.length>1&&(w.motionAppear=!1);var m=w.onVisibleChanged;return w.onVisibleChanged=function(C){return!p.current&&!C&&f(!0),m==null?void 0:m(C)},M?null:t.createElement(ke,{mode:o,locked:!p.current},t.createElement(jn,L({visible:E},w,{forceRender:v,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(C){var h=C.className,d=C.style;return t.createElement(yt,{id:r,className:h,style:d},i)}))}var br=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],yr=["active"],Ir=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.title,o=e.eventKey;e.warnKey;var l=e.disabled,u=e.internalPopupClose,v=e.children,c=e.itemIcon,y=e.expandIcon,s=e.popupClassName,p=e.popupOffset,I=e.popupStyle,g=e.onClick,M=e.onMouseEnter,f=e.onMouseLeave,E=e.onTitleClick,w=e.onTitleMouseEnter,m=e.onTitleMouseLeave,C=Z(e,br),h=qt(o),d=t.useContext(Q),T=d.prefixCls,R=d.mode,W=d.openKeys,D=d.disabled,_=d.overflowDisabled,F=d.activeKey,O=d.selectedKeys,ee=d.itemIcon,j=d.expandIcon,te=d.onItemClick,V=d.onOpenChange,Y=d.onActive,q=t.useContext(gt),X=q._internalRenderSubMenuItem,re=t.useContext(Xt),ue=re.isSubPathKey,ce=$e(),U="".concat(T,"-submenu"),z=D||l,he=t.useRef(),se=t.useRef(),de=c??ee,A=y??j,J=W.includes(o),ie=!_&&J,De=ue(O,o),Le=Zt(o,z,w,m),ve=Le.active,Ie=Z(Le,yr),Je=t.useState(!1),Me=k(Je,2),Re=Me[0],Oe=Me[1],Ae=function(B){z||Oe(B)},Ze=function(B){Ae(!0),M==null||M({key:o,domEvent:B})},Te=function(B){Ae(!1),f==null||f({key:o,domEvent:B})},ne=t.useMemo(function(){return ve||(R!=="inline"?Re||ue([F],o):!1)},[R,ve,F,Re,o,ue]),Qe=Qt(ce.length),et=function(B){z||(E==null||E({key:o,domEvent:B}),R==="inline"&&V(o,!J))},Fe=Ke(function(N){g==null||g(Be(N)),te(N)}),Ve=function(B){R!=="inline"&&V(o,B)},tt=function(){Y(o)},oe=h&&"".concat(h,"-popup"),fe=t.createElement("div",L({role:"menuitem",style:Qe,className:"".concat(U,"-title"),tabIndex:z?null:-1,ref:he,title:typeof i=="string"?i:null,"data-menu-id":_&&h?null:h,"aria-expanded":ie,"aria-haspopup":!0,"aria-controls":oe,"aria-disabled":z,onClick:et,onFocus:tt},Ie),i,t.createElement(en,{icon:R!=="horizontal"?A:void 0,props:K(K({},e),{},{isOpen:ie,isSubMenu:!0})},t.createElement("i",{className:"".concat(U,"-arrow")}))),me=t.useRef(R);if(R!=="inline"&&ce.length>1?me.current="vertical":me.current=R,!_){var Se=me.current;fe=t.createElement(Cr,{mode:Se,prefixCls:U,visible:!u&&ie&&R!=="inline",popupClassName:s,popupOffset:p,popupStyle:I,popup:t.createElement(ke,{mode:Se==="horizontal"?"vertical":Se},t.createElement(yt,{id:oe,ref:se},v)),disabled:z,onVisibleChange:Ve},fe)}var be=t.createElement(_e.Item,L({ref:r,role:"none"},C,{component:"li",style:a,className:Ce(U,"".concat(U,"-").concat(R),n,P(P(P(P({},"".concat(U,"-open"),ie),"".concat(U,"-active"),ne),"".concat(U,"-selected"),De),"".concat(U,"-disabled"),z)),onMouseEnter:Ze,onMouseLeave:Te}),fe,!_&&t.createElement(hr,{id:oe,open:ie,keyPath:ce},v));return X&&(be=X(be,e,{selected:De,active:ne,open:ie,disabled:z})),t.createElement(ke,{onItemClick:Fe,mode:R==="horizontal"?"vertical":R,itemIcon:de,expandIcon:A},be)}),Mt=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=$e(a),o=It(n,i),l=Ye();t.useEffect(function(){if(l)return l.registerPath(a,i),function(){l.unregisterPath(a,i)}},[i]);var u;return l?u=o:u=t.createElement(Ir,L({ref:r},e),o),t.createElement(Yt.Provider,{value:i},u)});function nn(e){var r=e.className,a=e.style,n=t.useContext(Q),i=n.prefixCls,o=Ye();return o?null:t.createElement("li",{role:"separator",className:Ce("".concat(i,"-item-divider"),r),style:a})}var Mr=["className","title","eventKey","children"],Rr=t.forwardRef(function(e,r){var a=e.className,n=e.title;e.eventKey;var i=e.children,o=Z(e,Mr),l=t.useContext(Q),u=l.prefixCls,v="".concat(u,"-item-group");return t.createElement("li",L({ref:r,role:"presentation"},o,{onClick:function(y){return y.stopPropagation()},className:Ce(v,a)}),t.createElement("div",{role:"presentation",className:"".concat(v,"-title"),title:typeof n=="string"?n:void 0},n),t.createElement("ul",{role:"group",className:"".concat(v,"-list")},i))}),rn=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=$e(a),o=It(n,i),l=Ye();return l?o:t.createElement(Rr,L({ref:r},pt(e,["warnKey"])),o)}),Sr=["label","children","key","type","extra"];function mt(e,r,a){var n=r.item,i=r.group,o=r.submenu,l=r.divider;return(e||[]).map(function(u,v){if(u&&Fn(u)==="object"){var c=u,y=c.label,s=c.children,p=c.key,I=c.type,g=c.extra,M=Z(c,Sr),f=p??"tmp-".concat(v);return s||I==="group"?I==="group"?t.createElement(i,L({key:f},M,{title:y}),mt(s,r,a)):t.createElement(o,L({key:f},M,{title:y}),mt(s,r,a)):I==="divider"?t.createElement(l,L({key:f},M)):t.createElement(n,L({key:f},M,{extra:g}),y,(!!g||g===0)&&t.createElement("span",{className:"".concat(a,"-item-extra")},g))}return null}).filter(function(u){return u})}function zt(e,r,a,n,i){var o=e,l=K({divider:nn,item:bt,group:rn,submenu:Mt},n);return r&&(o=mt(r,l,i)),It(o,a)}var xr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],ge=[],Pr=t.forwardRef(function(e,r){var a,n=e,i=n.prefixCls,o=i===void 0?"rc-menu":i,l=n.rootClassName,u=n.style,v=n.className,c=n.tabIndex,y=c===void 0?0:c,s=n.items,p=n.children,I=n.direction,g=n.id,M=n.mode,f=M===void 0?"vertical":M,E=n.inlineCollapsed,w=n.disabled,m=n.disabledOverflow,C=n.subMenuOpenDelay,h=C===void 0?.1:C,d=n.subMenuCloseDelay,T=d===void 0?.1:d,R=n.forceSubMenuRender,W=n.defaultOpenKeys,D=n.openKeys,_=n.activeKey,F=n.defaultActiveFirst,O=n.selectable,ee=O===void 0?!0:O,j=n.multiple,te=j===void 0?!1:j,V=n.defaultSelectedKeys,Y=n.selectedKeys,q=n.onSelect,X=n.onDeselect,re=n.inlineIndent,ue=re===void 0?24:re,ce=n.motion,U=n.defaultMotions,z=n.triggerSubMenuAction,he=z===void 0?"hover":z,se=n.builtinPlacements,de=n.itemIcon,A=n.expandIcon,J=n.overflowedIndicator,ie=J===void 0?"...":J,De=n.overflowedIndicatorPopupClassName,Le=n.getPopupContainer,ve=n.onClick,Ie=n.onOpenChange,Je=n.onKeyDown;n.openAnimation,n.openTransitionName;var Me=n._internalRenderMenuItem,Re=n._internalRenderSubMenuItem,Oe=n._internalComponents,Ae=Z(n,xr),Ze=t.useMemo(function(){return[zt(p,s,ge,Oe,o),zt(p,s,ge,{},o)]},[p,s,Oe]),Te=k(Ze,2),ne=Te[0],Qe=Te[1],et=t.useState(!1),Fe=k(et,2),Ve=Fe[0],tt=Fe[1],oe=t.useRef(),fe=ar(g),me=I==="rtl",Se=We(W,{value:D,postState:function(b){return b||ge}}),be=k(Se,2),N=be[0],B=be[1],nt=function(b){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function H(){B(b),Ie==null||Ie(b)}S?Gn.flushSync(H):H()},an=t.useState(N),Rt=k(an,2),on=Rt[0],ln=Rt[1],rt=t.useRef(!1),un=t.useMemo(function(){return(f==="inline"||f==="vertical")&&E?["vertical",E]:[f,!1]},[f,E]),St=k(un,2),Ue=St[0],at=St[1],xt=Ue==="inline",cn=t.useState(Ue),Pt=k(cn,2),le=Pt[0],sn=Pt[1],dn=t.useState(at),Et=k(dn,2),vn=Et[0],fn=Et[1];t.useEffect(function(){sn(Ue),fn(at),rt.current&&(xt?B(on):nt(ge))},[Ue,at]);var mn=t.useState(0),wt=k(mn,2),ze=wt[0],pn=wt[1],it=ze>=ne.length-1||le!=="horizontal"||m;t.useEffect(function(){xt&&ln(N)},[N]),t.useEffect(function(){return rt.current=!0,function(){rt.current=!1}},[]);var pe=nr(),Kt=pe.registerPath,_t=pe.unregisterPath,gn=pe.refreshOverflowKeys,Nt=pe.isSubPathKey,Cn=pe.getKeyPath,kt=pe.getKeys,hn=pe.getSubPathKeys,bn=t.useMemo(function(){return{registerPath:Kt,unregisterPath:_t}},[Kt,_t]),yn=t.useMemo(function(){return{isSubPathKey:Nt}},[Nt]);t.useEffect(function(){gn(it?ge:ne.slice(ze+1).map(function(x){return x.key}))},[ze,it]);var In=We(_||F&&((a=ne[0])===null||a===void 0?void 0:a.key),{value:_}),$t=k(In,2),xe=$t[0],ot=$t[1],Mn=Ke(function(x){ot(x)}),Rn=Ke(function(){ot(void 0)});t.useImperativeHandle(r,function(){return{list:oe.current,focus:function(b){var S,H=kt(),G=vt(H,fe),Ge=G.elements,lt=G.key2element,$n=G.element2key,Ot=Ct(oe.current,Ge),At=xe??(Ot[0]?$n.get(Ot[0]):(S=ne.find(function(Dn){return!Dn.props.disabled}))===null||S===void 0?void 0:S.key),Pe=lt.get(At);if(At&&Pe){var ut;Pe==null||(ut=Pe.focus)===null||ut===void 0||ut.call(Pe,b)}}}});var Sn=We(V||[],{value:Y,postState:function(b){return Array.isArray(b)?b:b==null?ge:[b]}}),Dt=k(Sn,2),He=Dt[0],xn=Dt[1],Pn=function(b){if(ee){var S=b.key,H=He.includes(S),G;te?H?G=He.filter(function(lt){return lt!==S}):G=[].concat(ye(He),[S]):G=[S],xn(G);var Ge=K(K({},b),{},{selectedKeys:G});H?X==null||X(Ge):q==null||q(Ge)}!te&&N.length&&le!=="inline"&&nt(ge)},En=Ke(function(x){ve==null||ve(Be(x)),Pn(x)}),Lt=Ke(function(x,b){var S=N.filter(function(G){return G!==x});if(b)S.push(x);else if(le!=="inline"){var H=hn(x);S=S.filter(function(G){return!H.has(G)})}Ht(N,S,!0)||nt(S,!0)}),wn=function(b,S){var H=S??!N.includes(b);Lt(b,H)},Kn=Qn(le,xe,me,fe,oe,kt,Cn,ot,wn,Je);t.useEffect(function(){tt(!0)},[]);var _n=t.useMemo(function(){return{_internalRenderMenuItem:Me,_internalRenderSubMenuItem:Re}},[Me,Re]),Nn=le!=="horizontal"||m?ne:ne.map(function(x,b){return t.createElement(ke,{key:x.key,overflowDisabled:b>ze},x)}),kn=t.createElement(_e,L({id:g,ref:oe,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:bt,className:Ce(o,"".concat(o,"-root"),"".concat(o,"-").concat(le),v,P(P({},"".concat(o,"-inline-collapsed"),vn),"".concat(o,"-rtl"),me),l),dir:I,style:u,role:"menu",tabIndex:y,data:Nn,renderRawItem:function(b){return b},renderRawRest:function(b){var S=b.length,H=S?ne.slice(-S):null;return t.createElement(Mt,{eventKey:ft,title:ie,disabled:it,internalPopupClose:S===0,popupClassName:De},H)},maxCount:le!=="horizontal"||m?_e.INVALIDATE:_e.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(b){pn(b)},onKeyDown:Kn},Ae));return t.createElement(gt.Provider,{value:_n},t.createElement(Wt.Provider,{value:fe},t.createElement(ke,{prefixCls:o,rootClassName:l,mode:le,openKeys:N,rtl:me,disabled:w,motion:Ve?ce:null,defaultMotions:Ve?U:null,activeKey:xe,onActive:Mn,onInactive:Rn,selectedKeys:He,inlineIndent:ue,subMenuOpenDelay:h,subMenuCloseDelay:T,forceSubMenuRender:R,builtinPlacements:se,triggerSubMenuAction:he,getPopupContainer:Le,itemIcon:de,expandIcon:A,onItemClick:En,onOpenChange:Lt},t.createElement(Xt.Provider,{value:yn},kn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(Bt.Provider,{value:bn},Qe)))))}),Xe=Pr;Xe.Item=bt;Xe.SubMenu=Mt;Xe.ItemGroup=rn;Xe.Divider=nn;export{Xe as E,bt as M};