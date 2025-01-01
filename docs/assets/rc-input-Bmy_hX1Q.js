import{c as y}from"./classnames-ixCMRz17.js";import{a as f,r as m}from"./react-jFU0esu9.js";import{d as me,b as S,g as de,e as I,k as he,c as ce,f as Ne}from"./@babel-D91nw8a6.js";import{e as Re,A as be}from"./rc-util-BGVI6VDl.js";function pe(e){return!!(e.addonBefore||e.addonAfter)}function _e(e){return!!(e.prefix||e.suffix||e.allowClear)}function fe(e,a,u){var o=a.cloneNode(!0),l=Object.create(e,{target:{value:o},currentTarget:{value:o}});return o.value=u,typeof a.selectionStart=="number"&&typeof a.selectionEnd=="number"&&(o.selectionStart=a.selectionStart,o.selectionEnd=a.selectionEnd),o.setSelectionRange=function(){a.setSelectionRange.apply(a,arguments)},l}function ve(e,a,u,o){if(u){var l=a;if(a.type==="click"){l=fe(a,e,""),u(l);return}if(e.type!=="file"&&o!==void 0){l=fe(a,e,o),u(l);return}u(l)}}function Fe(e,a){if(e){e.focus(a);var u=a||{},o=u.cursor;if(o){var l=e.value.length;switch(o){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(l,l);break;default:e.setSelectionRange(0,l)}}}}var Ae=f.forwardRef(function(e,a){var u,o,l=e.inputElement,x=e.children,g=e.prefixCls,B=e.prefix,R=e.suffix,j=e.addonBefore,w=e.addonAfter,K=e.className,te=e.style,D=e.disabled,Y=e.readOnly,z=e.focused,$=e.triggerFocus,E=e.allowClear,M=e.value,P=e.handleReset,ae=e.hidden,s=e.classes,t=e.classNames,_=e.dataAttrs,h=e.styles,v=e.components,T=e.onClear,G=x??l,oe=(v==null?void 0:v.affixWrapper)||"span",H=(v==null?void 0:v.groupWrapper)||"span",V=(v==null?void 0:v.wrapper)||"span",C=(v==null?void 0:v.groupAddon)||"span",i=m.useRef(null),re=function(A){var Q;(Q=i.current)!==null&&Q!==void 0&&Q.contains(A.target)&&($==null||$())},L=_e(e),N=m.cloneElement(G,{value:M,className:y(G.props.className,!L&&(t==null?void 0:t.variant))||null}),q=m.useRef(null);if(f.useImperativeHandle(a,function(){return{nativeElement:q.current||i.current}}),L){var O=null;if(E){var Z=!D&&!Y&&M,F="".concat(g,"-clear-icon"),le=me(E)==="object"&&E!==null&&E!==void 0&&E.clearIcon?E.clearIcon:"✖";O=f.createElement("span",{onClick:function(A){P==null||P(A),T==null||T()},onMouseDown:function(A){return A.preventDefault()},className:y(F,S(S({},"".concat(F,"-hidden"),!Z),"".concat(F,"-has-suffix"),!!R)),role:"button",tabIndex:-1},le)}var b="".concat(g,"-affix-wrapper"),J=y(b,S(S(S(S(S({},"".concat(g,"-disabled"),D),"".concat(b,"-disabled"),D),"".concat(b,"-focused"),z),"".concat(b,"-readonly"),Y),"".concat(b,"-input-with-clear-btn"),R&&E&&M),s==null?void 0:s.affixWrapper,t==null?void 0:t.affixWrapper,t==null?void 0:t.variant),ue=(R||E)&&f.createElement("span",{className:y("".concat(g,"-suffix"),t==null?void 0:t.suffix),style:h==null?void 0:h.suffix},O,R);N=f.createElement(oe,de({className:J,style:h==null?void 0:h.affixWrapper,onClick:re},_==null?void 0:_.affixWrapper,{ref:i}),B&&f.createElement("span",{className:y("".concat(g,"-prefix"),t==null?void 0:t.prefix),style:h==null?void 0:h.prefix},B),N,ue)}if(pe(e)){var d="".concat(g,"-group"),p="".concat(d,"-addon"),U="".concat(d,"-wrapper"),ie=y("".concat(g,"-wrapper"),d,s==null?void 0:s.wrapper,t==null?void 0:t.wrapper),ee=y(U,S({},"".concat(U,"-disabled"),D),s==null?void 0:s.group,t==null?void 0:t.groupWrapper);N=f.createElement(H,{className:ee,ref:q},f.createElement(V,{className:ie},j&&f.createElement(C,{className:p},j),N,w&&f.createElement(C,{className:p},w)))}return f.cloneElement(N,{className:y((u=N.props)===null||u===void 0?void 0:u.className,K)||null,style:I(I({},(o=N.props)===null||o===void 0?void 0:o.style),te),hidden:ae})}),ke=["show"];function Ie(e,a){return m.useMemo(function(){var u={};a&&(u.show=me(a)==="object"&&a.formatter?a.formatter:!!a),u=I(I({},u),e);var o=u,l=o.show,x=he(o,ke);return I(I({},x),{},{show:!!l,showFormatter:typeof l=="function"?l:void 0,strategy:x.strategy||function(g){return g.length}})},[e,a])}var Be=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Oe=m.forwardRef(function(e,a){var u=e.autoComplete,o=e.onChange,l=e.onFocus,x=e.onBlur,g=e.onPressEnter,B=e.onKeyDown,R=e.onKeyUp,j=e.prefixCls,w=j===void 0?"rc-input":j,K=e.disabled,te=e.htmlSize,D=e.className,Y=e.maxLength,z=e.suffix,$=e.showCount,E=e.count,M=e.type,P=M===void 0?"text":M,ae=e.classes,s=e.classNames,t=e.styles,_=e.onCompositionStart,h=e.onCompositionEnd,v=he(e,Be),T=m.useState(!1),G=ce(T,2),oe=G[0],H=G[1],V=m.useRef(!1),C=m.useRef(!1),i=m.useRef(null),re=m.useRef(null),L=function(n){i.current&&Fe(i.current,n)},N=Re(e.defaultValue,{value:e.value}),q=ce(N,2),O=q[0],Z=q[1],F=O==null?"":String(O),le=m.useState(null),b=ce(le,2),J=b[0],ue=b[1],d=Ie(E,$),p=d.max||Y,U=d.strategy(F),ie=!!p&&U>p;m.useImperativeHandle(a,function(){var r;return{focus:L,blur:function(){var c;(c=i.current)===null||c===void 0||c.blur()},setSelectionRange:function(c,X,W){var k;(k=i.current)===null||k===void 0||k.setSelectionRange(c,X,W)},select:function(){var c;(c=i.current)===null||c===void 0||c.select()},input:i.current,nativeElement:((r=re.current)===null||r===void 0?void 0:r.nativeElement)||i.current}}),m.useEffect(function(){C.current&&(C.current=!1),H(function(r){return r&&K?!1:r})},[K]);var ee=function(n,c,X){var W=c;if(!V.current&&d.exceedFormatter&&d.max&&d.strategy(c)>d.max){if(W=d.exceedFormatter(c,{max:d.max}),c!==W){var k,se;ue([((k=i.current)===null||k===void 0?void 0:k.selectionStart)||0,((se=i.current)===null||se===void 0?void 0:se.selectionEnd)||0])}}else if(X.source==="compositionEnd")return;Z(W),i.current&&ve(i.current,n,o,W)};m.useEffect(function(){if(J){var r;(r=i.current)===null||r===void 0||r.setSelectionRange.apply(r,Ne(J))}},[J]);var ne=function(n){ee(n,n.target.value,{source:"change"})},A=function(n){V.current=!1,ee(n,n.currentTarget.value,{source:"compositionEnd"}),h==null||h(n)},Q=function(n){g&&n.key==="Enter"&&!C.current&&(C.current=!0,g(n)),B==null||B(n)},ge=function(n){n.key==="Enter"&&(C.current=!1),R==null||R(n)},ye=function(n){H(!0),l==null||l(n)},xe=function(n){C.current&&(C.current=!1),H(!1),x==null||x(n)},Ee=function(n){Z(""),L(),i.current&&ve(i.current,n,o)},Ce=ie&&"".concat(w,"-out-of-range"),Se=function(){var n=be(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return f.createElement("input",de({autoComplete:u},n,{onChange:ne,onFocus:ye,onBlur:xe,onKeyDown:Q,onKeyUp:ge,className:y(w,S({},"".concat(w,"-disabled"),K),s==null?void 0:s.input),style:t==null?void 0:t.input,ref:i,size:te,type:P,onCompositionStart:function(X){V.current=!0,_==null||_(X)},onCompositionEnd:A}))},we=function(){var n=Number(p)>0;if(z||d.show){var c=d.showFormatter?d.showFormatter({value:F,count:U,maxLength:p}):"".concat(U).concat(n?" / ".concat(p):"");return f.createElement(f.Fragment,null,d.show&&f.createElement("span",{className:y("".concat(w,"-show-count-suffix"),S({},"".concat(w,"-show-count-has-suffix"),!!z),s==null?void 0:s.count),style:I({},t==null?void 0:t.count)},c),z)}return null};return f.createElement(Ae,de({},v,{prefixCls:w,className:y(D,Ce),handleReset:Ee,value:F,focused:oe,triggerFocus:L,suffix:we(),disabled:K,classes:ae,classNames:s,styles:t}),Se())});export{Ae as B,Oe as I,ve as r,Fe as t,Ie as u};
