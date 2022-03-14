import{T as kd,p as Ji,F as Dd,K as Se,b as Td,u as wi,f as Ad,R as Nd,o as Oc,S as Fd,g as Md,_ as Pd,B as Iu}from"./index.67d07e0c.js";import{_ as Ue,F as Od,U as Bd,h as an,r as N,u as Xr,p as ln,q as Wt,t as Ve,J as Ld,s as nt,V as Wd,n as Bc,w as gr,L as Vd,E as zd,G as Ud,m as Hd,A as Lc,I as Gd,T as jd,v as qd,x as Kd,S as Xd,e as Xa}from"./vendor.ff031957.js";import{a as Po,j as Tt}from"./index.b177d023.js";function Ru(r,t){var e=r.key,n;return"value"in r&&(n=r.value),e!=null?e:n!==void 0?n:"rc-index-key-".concat(t)}function Wc(r,t){var e=r||{},n=e.label,o=e.value,a=e.options;return{label:n||(t?"children":"label"),value:o||"value",options:a||"options"}}function $d(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.fieldNames,n=t.childrenAsData,o=[],a=Wc(e,!1),i=a.label,s=a.value,u=a.options;function c(l,f){l.forEach(function(h){var d=h[i];if(f||!(u in h)){var p=h[s];o.push({key:Ru(h,o.length),groupOption:f,data:h,label:d,value:p})}else{var v=d;v===void 0&&n&&(v=h.label),o.push({key:Ru(h,o.length),group:!0,data:h,label:v}),c(h[u],!0)}})}return c(r,!1),o}function Ci(r){var t=Ue({},r);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Od(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),t}}),t}function Yd(r,t){if(!t||!t.length)return null;var e=!1;function n(a,i){var s=Bd(i),u=s[0],c=s.slice(1);if(!u)return[a];var l=a.split(u);return e=e||l.length>1,l.reduce(function(f,h){return[].concat(an(f),an(n(h,c)))},[]).filter(function(f){return f})}var o=n(r,t);return e?o:null}var Jd=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Qd=function(t){var e=t===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:e,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:e,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:e,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:e,adjustY:1}}}},Zd=function(t,e){var n=t.prefixCls;t.disabled;var o=t.visible,a=t.children,i=t.popupElement,s=t.containerWidth,u=t.animation,c=t.transitionName,l=t.dropdownStyle,f=t.dropdownClassName,h=t.direction,d=h===void 0?"ltr":h,p=t.placement,v=t.dropdownMatchSelectWidth,m=t.dropdownRender,g=t.dropdownAlign,y=t.getPopupContainer,b=t.empty,x=t.getTriggerDOMNode,w=t.onPopupVisibleChange,C=t.onPopupMouseEnter,R=Xr(t,Jd),_="".concat(n,"-dropdown"),S=i;m&&(S=m(i));var I=N.exports.useMemo(function(){return Qd(v)},[v]),T=u?"".concat(_,"-").concat(u):c,D=N.exports.useRef(null);N.exports.useImperativeHandle(e,function(){return{getPopupElement:function(){return D.current}}});var O=Ue({minWidth:s},l);return typeof v=="number"?O.width=v:v&&(O.width=s),N.exports.createElement(kd,ln({},R,{showAction:w?["click"]:[],hideAction:w?["click"]:[],popupPlacement:p||(d==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:I,prefixCls:_,popupTransitionName:T,popup:N.exports.createElement("div",{ref:D,onMouseEnter:C},S),popupAlign:g,popupVisible:o,getPopupContainer:y,popupClassName:Wt(f,Ve({},"".concat(_,"-empty"),b)),popupStyle:O,getTriggerDOMNode:x,onPopupVisibleChange:w}),a)},Vc=N.exports.forwardRef(Zd);Vc.displayName="SelectTrigger";var ra=function(t){var e=t.className,n=t.customizeIcon,o=t.customizeIconProps,a=t.onMouseDown,i=t.onClick,s=t.children,u;return typeof n=="function"?u=n(o):u=n,N.exports.createElement("span",{className:e,onMouseDown:function(l){l.preventDefault(),a&&a(l)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:i,"aria-hidden":!0},u!==void 0?u:N.exports.createElement("span",{className:Wt(e.split(/\s+/).map(function(c){return"".concat(c,"-icon")}))},s))},ep=function(t,e){var n,o,a=t.prefixCls,i=t.id,s=t.inputElement,u=t.disabled,c=t.tabIndex,l=t.autoFocus,f=t.autoComplete,h=t.editable,d=t.activeDescendantId,p=t.value,v=t.maxLength,m=t.onKeyDown,g=t.onMouseDown,y=t.onChange,b=t.onPaste,x=t.onCompositionStart,w=t.onCompositionEnd,C=t.open,R=t.attrs,_=s||N.exports.createElement("input",null),S=_,I=S.ref,T=S.props,D=T.onKeyDown,O=T.onChange,P=T.onMouseDown,M=T.onCompositionStart,L=T.onCompositionEnd,B=T.style;return _=N.exports.cloneElement(_,Ue(Ue({id:i,ref:Ld(e,I),disabled:u,tabIndex:c,autoComplete:f||"off",type:"search",autoFocus:l,className:Wt("".concat(a,"-selection-search-input"),(n=_)===null||n===void 0||(o=n.props)===null||o===void 0?void 0:o.className),style:Ue(Ue({},B),{},{opacity:h?null:0}),role:"combobox","aria-expanded":C,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":d},R),{},{value:h?p:"",maxLength:v,readOnly:!h,unselectable:h?null:"on",onKeyDown:function(U){m(U),D&&D(U)},onMouseDown:function(U){g(U),P&&P(U)},onChange:function(U){y(U),O&&O(U)},onCompositionStart:function(U){x(U),M&&M(U)},onCompositionEnd:function(U){w(U),L&&L(U)},onPaste:b})),_},Qi=N.exports.forwardRef(ep);Qi.displayName="Input";function zc(r){return Array.isArray(r)?r:r!==void 0?[r]:[]}var tp=typeof window!="undefined"&&window.document&&window.document.documentElement,np=tp;function rp(r,t){np?N.exports.useLayoutEffect(r,t):N.exports.useEffect(r,t)}var ku=function(t){t.preventDefault(),t.stopPropagation()},op=function(t){var e=t.id,n=t.prefixCls,o=t.values,a=t.open,i=t.searchValue,s=t.inputRef,u=t.placeholder,c=t.disabled,l=t.mode,f=t.showSearch,h=t.autoFocus,d=t.autoComplete,p=t.activeDescendantId,v=t.tabIndex,m=t.removeIcon,g=t.maxTagCount,y=t.maxTagTextLength,b=t.maxTagPlaceholder,x=b===void 0?function(ae){return"+ ".concat(ae.length," ...")}:b,w=t.tagRender,C=t.onToggleOpen,R=t.onRemove,_=t.onInputChange,S=t.onInputPaste,I=t.onInputKeyDown,T=t.onInputMouseDown,D=t.onInputCompositionStart,O=t.onInputCompositionEnd,P=N.exports.useRef(null),M=N.exports.useState(0),L=nt(M,2),B=L[0],W=L[1],U=N.exports.useState(!1),G=nt(U,2),K=G[0],X=G[1],j="".concat(n,"-selection"),Y=a||l==="tags"?i:"",ee=l==="tags"||f&&(a||K);rp(function(){W(P.current.scrollWidth)},[Y]);function J(ae,le,ve,xe,Ee){return N.exports.createElement("span",{className:Wt("".concat(j,"-item"),Ve({},"".concat(j,"-item-disabled"),ve)),title:typeof ae=="string"||typeof ae=="number"?ae.toString():void 0},N.exports.createElement("span",{className:"".concat(j,"-item-content")},le),xe&&N.exports.createElement(ra,{className:"".concat(j,"-item-remove"),onMouseDown:ku,onClick:Ee,customizeIcon:m},"\xD7"))}function Z(ae,le,ve,xe,Ee){var Me=function(Pe){ku(Pe),C(!a)};return N.exports.createElement("span",{onMouseDown:Me},w({label:le,value:ae,disabled:ve,closable:xe,onClose:Ee}))}function ue(ae){var le=ae.disabled,ve=ae.label,xe=ae.value,Ee=!c&&!le,Me=ve;if(typeof y=="number"&&(typeof ve=="string"||typeof ve=="number")){var De=String(Me);De.length>y&&(Me="".concat(De.slice(0,y),"..."))}var Pe=function(Xe){Xe&&Xe.stopPropagation(),R(ae)};return typeof w=="function"?Z(xe,Me,le,Ee,Pe):J(ve,Me,le,Ee,Pe)}function ce(ae){var le=typeof x=="function"?x(ae):x;return J(le,le,!1)}var Te=N.exports.createElement("div",{className:"".concat(j,"-search"),style:{width:B},onFocus:function(){X(!0)},onBlur:function(){X(!1)}},N.exports.createElement(Qi,{ref:s,open:a,prefixCls:n,id:e,inputElement:null,disabled:c,autoFocus:h,autoComplete:d,editable:ee,activeDescendantId:p,value:Y,onKeyDown:I,onMouseDown:T,onChange:_,onPaste:S,onCompositionStart:D,onCompositionEnd:O,tabIndex:v,attrs:Ji(t,!0)}),N.exports.createElement("span",{ref:P,className:"".concat(j,"-search-mirror"),"aria-hidden":!0},Y,"\xA0")),fe=N.exports.createElement(Dd,{prefixCls:"".concat(j,"-overflow"),data:o,renderItem:ue,renderRest:ce,suffix:Te,itemKey:"key",maxCount:g});return N.exports.createElement(N.exports.Fragment,null,fe,!o.length&&!Y&&N.exports.createElement("span",{className:"".concat(j,"-placeholder")},u))},ap=function(t){var e=t.inputElement,n=t.prefixCls,o=t.id,a=t.inputRef,i=t.disabled,s=t.autoFocus,u=t.autoComplete,c=t.activeDescendantId,l=t.mode,f=t.open,h=t.values,d=t.placeholder,p=t.tabIndex,v=t.showSearch,m=t.searchValue,g=t.activeValue,y=t.maxLength,b=t.onInputKeyDown,x=t.onInputMouseDown,w=t.onInputChange,C=t.onInputPaste,R=t.onInputCompositionStart,_=t.onInputCompositionEnd,S=N.exports.useState(!1),I=nt(S,2),T=I[0],D=I[1],O=l==="combobox",P=O||v,M=h[0],L=m||"";O&&g&&!T&&(L=g),N.exports.useEffect(function(){O&&D(!1)},[O,g]);var B=l!=="combobox"&&!f&&!v?!1:!!L,W=M&&(typeof M.label=="string"||typeof M.label=="number")?M.label.toString():void 0,U=function(){if(M)return null;var K=B?{visibility:"hidden"}:void 0;return N.exports.createElement("span",{className:"".concat(n,"-selection-placeholder"),style:K},d)};return N.exports.createElement(N.exports.Fragment,null,N.exports.createElement("span",{className:"".concat(n,"-selection-search")},N.exports.createElement(Qi,{ref:a,prefixCls:n,id:o,open:f,inputElement:e,disabled:i,autoFocus:s,autoComplete:u,editable:P,activeDescendantId:c,value:L,onKeyDown:b,onMouseDown:x,onChange:function(K){D(!0),w(K)},onPaste:C,onCompositionStart:R,onCompositionEnd:_,tabIndex:p,attrs:Ji(t,!0),maxLength:O?y:void 0})),!O&&M&&!B&&N.exports.createElement("span",{className:"".concat(n,"-selection-item"),title:W},M.label),U())};function Uc(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,t=N.exports.useRef(null),e=N.exports.useRef(null);N.exports.useEffect(function(){return function(){window.clearTimeout(e.current)}},[]);function n(o){(o||t.current===null)&&(t.current=o),window.clearTimeout(e.current),e.current=window.setTimeout(function(){t.current=null},r)}return[function(){return t.current},n]}function ip(r){return![Se.ESC,Se.SHIFT,Se.BACKSPACE,Se.TAB,Se.WIN_KEY,Se.ALT,Se.META,Se.WIN_KEY_RIGHT,Se.CTRL,Se.SEMICOLON,Se.EQUALS,Se.CAPS_LOCK,Se.CONTEXT_MENU,Se.F1,Se.F2,Se.F3,Se.F4,Se.F5,Se.F6,Se.F7,Se.F8,Se.F9,Se.F10,Se.F11,Se.F12].includes(r)}var sp=function(t,e){var n=N.exports.useRef(null),o=N.exports.useRef(!1),a=t.prefixCls,i=t.open,s=t.mode,u=t.showSearch,c=t.tokenWithEnter,l=t.onSearch,f=t.onSearchSubmit,h=t.onToggleOpen,d=t.onInputKeyDown,p=t.domRef;N.exports.useImperativeHandle(e,function(){return{focus:function(){n.current.focus()},blur:function(){n.current.blur()}}});var v=Uc(0),m=nt(v,2),g=m[0],y=m[1],b=function(L){var B=L.which;(B===Se.UP||B===Se.DOWN)&&L.preventDefault(),d&&d(L),B===Se.ENTER&&s==="tags"&&!o.current&&!i&&(f==null||f(L.target.value)),ip(B)&&h(!0)},x=function(){y(!0)},w=N.exports.useRef(null),C=function(L){l(L,!0,o.current)!==!1&&h(!0)},R=function(){o.current=!0},_=function(L){o.current=!1,s!=="combobox"&&C(L.target.value)},S=function(L){var B=L.target.value;if(c&&w.current&&/[\r\n]/.test(w.current)){var W=w.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");B=B.replace(W,w.current)}w.current=null,C(B)},I=function(L){var B=L.clipboardData,W=B.getData("text");w.current=W},T=function(L){var B=L.target;if(B!==n.current){var W=document.body.style.msTouchAction!==void 0;W?setTimeout(function(){n.current.focus()}):n.current.focus()}},D=function(L){var B=g();L.target!==n.current&&!B&&L.preventDefault(),(s!=="combobox"&&(!u||!B)||!i)&&(i&&l("",!0,!1),h())},O={inputRef:n,onInputKeyDown:b,onInputMouseDown:x,onInputChange:S,onInputPaste:I,onInputCompositionStart:R,onInputCompositionEnd:_},P=s==="multiple"||s==="tags"?N.exports.createElement(op,ln({},t,O)):N.exports.createElement(ap,ln({},t,O));return N.exports.createElement("div",{ref:p,className:"".concat(a,"-selector"),onClick:T,onMouseDown:D},P)},Hc=N.exports.forwardRef(sp);Hc.displayName="Selector";function up(r,t,e){var n=N.exports.useRef(null);n.current={open:t,triggerOpen:e},N.exports.useEffect(function(){function o(a){var i=a.target;i.shadowRoot&&a.composed&&(i=a.composedPath()[0]||i),n.current.open&&r().filter(function(s){return s}).every(function(s){return!s.contains(i)&&s!==i})&&n.current.triggerOpen(!1)}return window.addEventListener("mousedown",o),function(){return window.removeEventListener("mousedown",o)}},[])}function cp(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,t=N.exports.useState(!1),e=nt(t,2),n=e[0],o=e[1],a=N.exports.useRef(null),i=function(){window.clearTimeout(a.current)};N.exports.useEffect(function(){return i},[]);var s=function(c,l){i(),a.current=window.setTimeout(function(){o(c),l&&l()},r)};return[n,s,i]}var Gc=N.exports.createContext(null);function lp(){return N.exports.useContext(Gc)}var fp=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],hp=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Ei(r){return r==="tags"||r==="multiple"}var dp=N.exports.forwardRef(function(r,t){var e,n,o=r.id,a=r.prefixCls,i=r.className,s=r.showSearch,u=r.tagRender,c=r.direction,l=r.omitDomProps,f=r.displayValues,h=r.onDisplayValuesChange,d=r.emptyOptions,p=r.notFoundContent,v=p===void 0?"Not Found":p,m=r.onClear,g=r.mode,y=r.disabled,b=r.loading,x=r.getInputElement,w=r.getRawInputElement,C=r.open,R=r.defaultOpen,_=r.onDropdownVisibleChange,S=r.activeValue,I=r.onActiveValueChange,T=r.activeDescendantId,D=r.searchValue,O=r.onSearch,P=r.onSearchSplit,M=r.tokenSeparators,L=r.allowClear,B=r.showArrow,W=r.inputIcon,U=r.clearIcon,G=r.OptionList,K=r.animation,X=r.transitionName,j=r.dropdownStyle,Y=r.dropdownClassName,ee=r.dropdownMatchSelectWidth,J=r.dropdownRender,Z=r.dropdownAlign,ue=r.placement,ce=r.getPopupContainer,Te=r.showAction,fe=Te===void 0?[]:Te,ae=r.onFocus,le=r.onBlur,ve=r.onKeyUp,xe=r.onKeyDown,Ee=r.onMouseDown,Me=Xr(r,fp),De=Ei(g),Pe=(s!==void 0?s:De)||g==="combobox",Ne=Ue({},Me);hp.forEach(function(_e){delete Ne[_e]}),l==null||l.forEach(function(_e){delete Ne[_e]});var Xe=N.exports.useState(!1),et=nt(Xe,2),Je=et[0],mt=et[1];N.exports.useEffect(function(){mt(Td())},[]);var gt=N.exports.useRef(null),Dt=N.exports.useRef(null),ht=N.exports.useRef(null),Qe=N.exports.useRef(null),Ct=N.exports.useRef(null),en=cp(),Yt=nt(en,3),ge=Yt[0],Fe=Yt[1],Ge=Yt[2];N.exports.useImperativeHandle(t,function(){var _e,we;return{focus:(_e=Qe.current)===null||_e===void 0?void 0:_e.focus,blur:(we=Qe.current)===null||we===void 0?void 0:we.blur,scrollTo:function(Mt){var tt;return(tt=Ct.current)===null||tt===void 0?void 0:tt.scrollTo(Mt)}}});var Ze=N.exports.useMemo(function(){var _e;if(g!=="combobox")return D;var we=(_e=f[0])===null||_e===void 0?void 0:_e.value;return typeof we=="string"||typeof we=="number"?String(we):""},[D,g,f]),Vt=g==="combobox"&&typeof x=="function"&&x()||null,tn=typeof w=="function"&&w(),Nn=Wd(Dt,tn==null||(e=tn.props)===null||e===void 0?void 0:e.ref),kr=wi(void 0,{defaultValue:R,value:C}),cr=nt(kr,2),gn=cr[0],yn=cr[1],st=gn,Mo=!v&&d;(y||Mo&&st&&g==="combobox")&&(st=!1);var Gn=Mo?!1:st,nn=N.exports.useCallback(function(_e){var we=_e!==void 0?_e:!st;st!==we&&!y&&(yn(we),_==null||_(we))},[y,st,yn,_]),be=N.exports.useMemo(function(){return(M||[]).some(function(_e){return[`
`,`\r
`].includes(_e)})},[M]),de=function(we,Et,Mt){var tt=!0,zt=we;I==null||I(null);var on=Mt?null:Yd(we,M);return g!=="combobox"&&on&&(zt="",P==null||P(on),nn(!1),tt=!1),O&&Ze!==zt&&O(zt,{source:Et?"typing":"effect"}),tt},he=function(we){!we||!we.trim()||O(we,{source:"submit"})};N.exports.useEffect(function(){!st&&!De&&g!=="combobox"&&de("",!1,!1)},[st]),N.exports.useEffect(function(){gn&&y&&yn(!1),y&&Fe(!1)},[y]);var ke=Uc(),ze=nt(ke,2),$e=ze[0],jn=ze[1],rn=function(we){var Et=$e(),Mt=we.which;if(Mt===Se.ENTER&&(g!=="combobox"&&we.preventDefault(),st||nn(!0)),jn(!!Ze),Mt===Se.BACKSPACE&&!Et&&De&&!Ze&&f.length){for(var tt=an(f),zt=null,on=tt.length-1;on>=0;on-=1){var Zr=tt[on];if(!Zr.disabled){tt.splice(on,1),zt=Zr;break}}zt&&h(tt,{type:"remove",values:[zt]})}for(var Kn=arguments.length,Dr=new Array(Kn>1?Kn-1:0),Xn=1;Xn<Kn;Xn++)Dr[Xn-1]=arguments[Xn];if(st&&Ct.current){var Su;(Su=Ct.current).onKeyDown.apply(Su,[we].concat(Dr))}xe==null||xe.apply(void 0,[we].concat(Dr))},Ft=function(we){for(var Et=arguments.length,Mt=new Array(Et>1?Et-1:0),tt=1;tt<Et;tt++)Mt[tt-1]=arguments[tt];if(st&&Ct.current){var zt;(zt=Ct.current).onKeyUp.apply(zt,[we].concat(Mt))}ve==null||ve.apply(void 0,[we].concat(Mt))},qn=function(we){var Et=f.filter(function(Mt){return Mt!==we});h(Et,{type:"remove",values:[we]})},Qr=N.exports.useRef(!1),qa=function(){Fe(!0),y||(ae&&!Qr.current&&ae.apply(void 0,arguments),fe.includes("focus")&&nn(!0)),Qr.current=!0},gu=function(){Fe(!1,function(){Qr.current=!1,nn(!1)}),!y&&(Ze&&(g==="tags"?O(Ze,{source:"submit"}):g==="multiple"&&O("",{source:"blur"})),le&&le.apply(void 0,arguments))},xn=[];N.exports.useEffect(function(){return function(){xn.forEach(function(_e){return clearTimeout(_e)}),xn.splice(0,xn.length)}},[]);var lr=function(we){var Et,Mt=we.target,tt=(Et=ht.current)===null||Et===void 0?void 0:Et.getPopupElement();if(tt&&tt.contains(Mt)){var zt=setTimeout(function(){var Dr=xn.indexOf(zt);if(Dr!==-1&&xn.splice(Dr,1),Ge(),!Je&&!tt.contains(document.activeElement)){var Xn;(Xn=Qe.current)===null||Xn===void 0||Xn.focus()}});xn.push(zt)}for(var on=arguments.length,Zr=new Array(on>1?on-1:0),Kn=1;Kn<on;Kn++)Zr[Kn-1]=arguments[Kn];Ee==null||Ee.apply(void 0,[we].concat(Zr))},yd=N.exports.useState(null),yu=nt(yd,2),xu=yu[0],xd=yu[1],bd=N.exports.useState({}),wd=nt(bd,2),Cd=wd[1];function Ed(){Cd({})}Ad(function(){if(Gn){var _e,we=Math.ceil((_e=gt.current)===null||_e===void 0?void 0:_e.offsetWidth);xu!==we&&!Number.isNaN(we)&&xd(we)}},[Gn]);var bu;tn&&(bu=function(we){nn(we)}),up(function(){var _e;return[gt.current,(_e=ht.current)===null||_e===void 0?void 0:_e.getPopupElement()]},Gn,nn);var _d=N.exports.useMemo(function(){return Ue(Ue({},r),{},{notFoundContent:v,open:st,triggerOpen:Gn,id:o,showSearch:Pe,multiple:De,toggleOpen:nn})},[r,v,Gn,st,o,Pe,De,nn]),wu=B!==void 0?B:b||!De&&g!=="combobox",Cu;wu&&(Cu=N.exports.createElement(ra,{className:Wt("".concat(a,"-arrow"),Ve({},"".concat(a,"-arrow-loading"),b)),customizeIcon:W,customizeIconProps:{loading:b,searchValue:Ze,open:st,focused:ge,showSearch:Pe}}));var Eu,Sd=function(){m==null||m(),h([],{type:"clear",values:f}),de("",!1,!1)};!y&&L&&(f.length||Ze)&&(Eu=N.exports.createElement(ra,{className:"".concat(a,"-clear"),onMouseDown:Sd,customizeIcon:U},"\xD7"));var Id=N.exports.createElement(G,{ref:Ct}),Rd=Wt(a,i,(n={},Ve(n,"".concat(a,"-focused"),ge),Ve(n,"".concat(a,"-multiple"),De),Ve(n,"".concat(a,"-single"),!De),Ve(n,"".concat(a,"-allow-clear"),L),Ve(n,"".concat(a,"-show-arrow"),wu),Ve(n,"".concat(a,"-disabled"),y),Ve(n,"".concat(a,"-loading"),b),Ve(n,"".concat(a,"-open"),st),Ve(n,"".concat(a,"-customize-input"),Vt),Ve(n,"".concat(a,"-show-search"),Pe),n)),_u=N.exports.createElement(Vc,{ref:ht,disabled:y,prefixCls:a,visible:Gn,popupElement:Id,containerWidth:xu,animation:K,transitionName:X,dropdownStyle:j,dropdownClassName:Y,direction:c,dropdownMatchSelectWidth:ee,dropdownRender:J,dropdownAlign:Z,placement:ue,getPopupContainer:ce,empty:d,getTriggerDOMNode:function(){return Dt.current},onPopupVisibleChange:bu,onPopupMouseEnter:Ed},tn?N.exports.cloneElement(tn,{ref:Nn}):N.exports.createElement(Hc,ln({},r,{domRef:Dt,prefixCls:a,inputElement:Vt,ref:Qe,id:o,showSearch:Pe,mode:g,activeDescendantId:T,tagRender:u,values:f,open:st,onToggleOpen:nn,activeValue:S,searchValue:Ze,onSearch:de,onSearchSubmit:he,onRemove:qn,tokenWithEnter:be}))),Ka;return tn?Ka=_u:Ka=N.exports.createElement("div",ln({className:Rd},Ne,{ref:gt,onMouseDown:lr,onKeyDown:rn,onKeyUp:Ft,onFocus:qa,onBlur:gu}),ge&&!st&&N.exports.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(f.map(function(_e){var we=_e.label,Et=_e.value;return["number","string"].includes(Bc(we))?we:Et}).join(", "))),_u,Cu,Eu),N.exports.createElement(Gc.Provider,{value:_d},Ka)});function Du(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,n)}return e}function Tu(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Du(Object(e),!0).forEach(function(n){jc(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Du(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function jc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var qc=N.exports.forwardRef(function(r,t){var e=r.height,n=r.offset,o=r.children,a=r.prefixCls,i=r.onInnerResize,s={},u={display:"flex",flexDirection:"column"};return n!==void 0&&(s={height:e,position:"relative",overflow:"hidden"},u=Tu(Tu({},u),{},{transform:"translateY(".concat(n,"px)"),position:"absolute",left:0,right:0,top:0})),N.exports.createElement("div",{style:s},N.exports.createElement(Nd,{onResize:function(l){var f=l.offsetHeight;f&&i&&i()}},N.exports.createElement("div",{style:u,className:Wt(jc({},"".concat(a,"-holder-inner"),a)),ref:t},o)))});qc.displayName="Filler";function Ko(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ko=function(e){return typeof e}:Ko=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ko(r)}function Au(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function pp(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Nu(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vp(r,t,e){return t&&Nu(r.prototype,t),e&&Nu(r,e),r}function mp(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&_i(r,t)}function _i(r,t){return _i=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},_i(r,t)}function gp(r){var t=bp();return function(){var n=oa(r),o;if(t){var a=oa(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return yp(this,o)}}function yp(r,t){if(t&&(Ko(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xp(r)}function xp(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bp(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oa(r){return oa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},oa(r)}var wp=20;function Fu(r){return"touches"in r?r.touches[0].pageY:r.pageY}var Cp=function(r){mp(e,r);var t=gp(e);function e(){var n;pp(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=t.call.apply(t,[this].concat(a)),n.moveRaf=null,n.scrollbarRef=N.exports.createRef(),n.thumbRef=N.exports.createRef(),n.visibleTimeout=null,n.state={dragging:!1,pageY:null,startTop:null,visible:!1},n.delayHidden=function(){clearTimeout(n.visibleTimeout),n.setState({visible:!0}),n.visibleTimeout=setTimeout(function(){n.setState({visible:!1})},2e3)},n.onScrollbarTouchStart=function(s){s.preventDefault()},n.onContainerMouseDown=function(s){s.stopPropagation(),s.preventDefault()},n.patchEvents=function(){window.addEventListener("mousemove",n.onMouseMove),window.addEventListener("mouseup",n.onMouseUp),n.thumbRef.current.addEventListener("touchmove",n.onMouseMove),n.thumbRef.current.addEventListener("touchend",n.onMouseUp)},n.removeEvents=function(){window.removeEventListener("mousemove",n.onMouseMove),window.removeEventListener("mouseup",n.onMouseUp),n.scrollbarRef.current.removeEventListener("touchstart",n.onScrollbarTouchStart),n.thumbRef.current.removeEventListener("touchstart",n.onMouseDown),n.thumbRef.current.removeEventListener("touchmove",n.onMouseMove),n.thumbRef.current.removeEventListener("touchend",n.onMouseUp),gr.cancel(n.moveRaf)},n.onMouseDown=function(s){var u=n.props.onStartMove;n.setState({dragging:!0,pageY:Fu(s),startTop:n.getTop()}),u(),n.patchEvents(),s.stopPropagation(),s.preventDefault()},n.onMouseMove=function(s){var u=n.state,c=u.dragging,l=u.pageY,f=u.startTop,h=n.props.onScroll;if(gr.cancel(n.moveRaf),c){var d=Fu(s)-l,p=f+d,v=n.getEnableScrollRange(),m=n.getEnableHeightRange(),g=m?p/m:0,y=Math.ceil(g*v);n.moveRaf=gr(function(){h(y)})}},n.onMouseUp=function(){var s=n.props.onStopMove;n.setState({dragging:!1}),s(),n.removeEvents()},n.getSpinHeight=function(){var s=n.props,u=s.height,c=s.count,l=u/c*10;return l=Math.max(l,wp),l=Math.min(l,u/2),Math.floor(l)},n.getEnableScrollRange=function(){var s=n.props,u=s.scrollHeight,c=s.height;return u-c||0},n.getEnableHeightRange=function(){var s=n.props.height,u=n.getSpinHeight();return s-u||0},n.getTop=function(){var s=n.props.scrollTop,u=n.getEnableScrollRange(),c=n.getEnableHeightRange();if(s===0||u===0)return 0;var l=s/u;return l*c},n.showScroll=function(){var s=n.props,u=s.height,c=s.scrollHeight;return c>u},n}return vp(e,[{key:"componentDidMount",value:function(){this.scrollbarRef.current.addEventListener("touchstart",this.onScrollbarTouchStart),this.thumbRef.current.addEventListener("touchstart",this.onMouseDown)}},{key:"componentDidUpdate",value:function(o){o.scrollTop!==this.props.scrollTop&&this.delayHidden()}},{key:"componentWillUnmount",value:function(){this.removeEvents(),clearTimeout(this.visibleTimeout)}},{key:"render",value:function(){var o=this.state,a=o.dragging,i=o.visible,s=this.props.prefixCls,u=this.getSpinHeight(),c=this.getTop(),l=this.showScroll(),f=l&&i;return N.exports.createElement("div",{ref:this.scrollbarRef,className:Wt("".concat(s,"-scrollbar"),Au({},"".concat(s,"-scrollbar-show"),l)),style:{width:8,top:0,bottom:0,right:0,position:"absolute",display:f?null:"none"},onMouseDown:this.onContainerMouseDown,onMouseMove:this.delayHidden},N.exports.createElement("div",{ref:this.thumbRef,className:Wt("".concat(s,"-scrollbar-thumb"),Au({},"".concat(s,"-scrollbar-thumb-moving"),a)),style:{width:"100%",height:u,top:c,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"},onMouseDown:this.onMouseDown}))}}]),e}(N.exports.Component);function Ep(r){var t=r.children,e=r.setRef,n=N.exports.useCallback(function(o){e(o)},[]);return N.exports.cloneElement(t,{ref:n})}function _p(r,t,e,n,o,a){var i=a.getKey;return r.slice(t,e+1).map(function(s,u){var c=t+u,l=o(s,c,{}),f=i(s);return N.exports.createElement(Ep,{key:f,setRef:function(d){return n(s,d)}},l)})}function Sp(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Mu(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ip(r,t,e){return t&&Mu(r.prototype,t),e&&Mu(r,e),r}var Rp=function(){function r(){Sp(this,r),this.maps=void 0,this.maps=Object.create(null)}return Ip(r,[{key:"set",value:function(e,n){this.maps[e]=n}},{key:"get",value:function(e){return this.maps[e]}}]),r}();function kp(r,t){return Np(r)||Ap(r,t)||Tp(r,t)||Dp()}function Dp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tp(r,t){if(!!r){if(typeof r=="string")return Pu(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pu(r,t)}}function Pu(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Ap(r,t){var e=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,a=!1,i,s;try{for(e=e.call(r);!(o=(i=e.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(u){a=!0,s=u}finally{try{!o&&e.return!=null&&e.return()}finally{if(a)throw s}}return n}}function Np(r){if(Array.isArray(r))return r}function Fp(r,t,e){var n=N.exports.useState(0),o=kp(n,2),a=o[0],i=o[1],s=N.exports.useRef(new Map),u=N.exports.useRef(new Rp),c=N.exports.useRef(0);function l(){c.current+=1;var h=c.current;Promise.resolve().then(function(){h===c.current&&(s.current.forEach(function(d,p){if(d&&d.offsetParent){var v=Vd(d),m=v.offsetHeight;u.current.get(p)!==m&&u.current.set(p,v.offsetHeight)}}),i(function(d){return d+1}))})}function f(h,d){var p=r(h),v=s.current.get(p);d?(s.current.set(p,d),l()):s.current.delete(p),!v!=!d&&(d?t==null||t(h):e==null||e(h))}return[f,l,u.current,a]}function Xo(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xo=function(e){return typeof e}:Xo=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xo(r)}function Mp(r,t,e,n,o,a,i,s){var u=N.exports.useRef();return function(c){if(c==null){s();return}if(gr.cancel(u.current),typeof c=="number")i(c);else if(c&&Xo(c)==="object"){var l,f=c.align;"index"in c?l=c.index:l=t.findIndex(function(v){return o(v)===c.key});var h=c.offset,d=h===void 0?0:h,p=function v(m,g){if(!(m<0||!r.current)){var y=r.current.clientHeight,b=!1,x=g;if(y){for(var w=g||f,C=0,R=0,_=0,S=Math.min(t.length,l),I=0;I<=S;I+=1){var T=o(t[I]);R=C;var D=e.get(T);_=R+(D===void 0?n:D),C=_,I===l&&D===void 0&&(b=!0)}var O=null;switch(w){case"top":O=R-d;break;case"bottom":O=_-y+d;break;default:{var P=r.current.scrollTop,M=P+y;R<P?x="top":_>M&&(x="bottom")}}O!==null&&O!==r.current.scrollTop&&i(O)}u.current=gr(function(){b&&a(),v(m-1,x)})}};p(3)}}}function Pp(r,t,e){var n=r.length,o=t.length,a,i;if(n===0&&o===0)return null;n<o?(a=r,i=t):(a=t,i=r);var s={__EMPTY_ITEM__:!0};function u(p){return p!==void 0?e(p):s}for(var c=null,l=Math.abs(n-o)!==1,f=0;f<i.length;f+=1){var h=u(a[f]),d=u(i[f]);if(h!==d){c=f,l=l||h!==u(i[f+1]);break}}return c===null?null:{index:c,multiple:l}}function Ou(r,t){return Wp(r)||Lp(r,t)||Bp(r,t)||Op()}function Op(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bp(r,t){if(!!r){if(typeof r=="string")return Bu(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Bu(r,t)}}function Bu(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Lp(r,t){var e=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,a=!1,i,s;try{for(e=e.call(r);!(o=(i=e.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(u){a=!0,s=u}finally{try{!o&&e.return!=null&&e.return()}finally{if(a)throw s}}return n}}function Wp(r){if(Array.isArray(r))return r}function Vp(r,t,e){var n=N.exports.useState(r),o=Ou(n,2),a=o[0],i=o[1],s=N.exports.useState(null),u=Ou(s,2),c=u[0],l=u[1];return N.exports.useEffect(function(){var f=Pp(a||[],r||[],t);(f==null?void 0:f.index)!==void 0&&(e==null||e(f.index),l(r[f.index])),i(r)},[r]),[c]}function $o(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$o=function(e){return typeof e}:$o=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$o(r)}var zp=(typeof navigator=="undefined"?"undefined":$o(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Kc=function(r,t){var e=N.exports.useRef(!1),n=N.exports.useRef(null);function o(){clearTimeout(n.current),e.current=!0,n.current=setTimeout(function(){e.current=!1},50)}var a=N.exports.useRef({top:r,bottom:t});return a.current.top=r,a.current.bottom=t,function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i<0&&a.current.top||i>0&&a.current.bottom;return s&&u?(clearTimeout(n.current),e.current=!1):(!u||e.current)&&o(),!e.current&&u}};function Up(r,t,e,n){var o=N.exports.useRef(0),a=N.exports.useRef(null),i=N.exports.useRef(null),s=N.exports.useRef(!1),u=Kc(t,e);function c(f){if(!!r){gr.cancel(a.current);var h=f.deltaY;o.current+=h,i.current=h,!u(h)&&(zp||f.preventDefault(),a.current=gr(function(){var d=s.current?10:1;n(o.current*d),o.current=0}))}}function l(f){!r||(s.current=f.detail===i.current)}return[c,l]}var Hp=14/15;function Gp(r,t,e){var n=N.exports.useRef(!1),o=N.exports.useRef(0),a=N.exports.useRef(null),i=N.exports.useRef(null),s,u=function(h){if(n.current){var d=Math.ceil(h.touches[0].pageY),p=o.current-d;o.current=d,e(p)&&h.preventDefault(),clearInterval(i.current),i.current=setInterval(function(){p*=Hp,(!e(p,!0)||Math.abs(p)<=.1)&&clearInterval(i.current)},16)}},c=function(){n.current=!1,s()},l=function(h){s(),h.touches.length===1&&!n.current&&(n.current=!0,o.current=Math.ceil(h.touches[0].pageY),a.current=h.target,a.current.addEventListener("touchmove",u),a.current.addEventListener("touchend",c))};s=function(){a.current&&(a.current.removeEventListener("touchmove",u),a.current.removeEventListener("touchend",c))},N.exports.useLayoutEffect(function(){return r&&t.current.addEventListener("touchstart",l),function(){t.current.removeEventListener("touchstart",l),s(),clearInterval(i.current)}},[r])}var jp=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","component","onScroll","onVisibleChange"];function Si(){return Si=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Si.apply(this,arguments)}function Lu(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,n)}return e}function $a(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Lu(Object(e),!0).forEach(function(n){Xc(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Lu(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function Xc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function eo(r,t){return $p(r)||Xp(r,t)||Kp(r,t)||qp()}function qp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kp(r,t){if(!!r){if(typeof r=="string")return Wu(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wu(r,t)}}function Wu(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Xp(r,t){var e=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,a=!1,i,s;try{for(e=e.call(r);!(o=(i=e.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(u){a=!0,s=u}finally{try{!o&&e.return!=null&&e.return()}finally{if(a)throw s}}return n}}function $p(r){if(Array.isArray(r))return r}function Yp(r,t){if(r==null)return{};var e=Jp(r,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(e[n]=r[n]))}return e}function Jp(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}var Qp=[],Zp={overflowY:"auto",overflowAnchor:"none"};function ev(r,t){var e=r.prefixCls,n=e===void 0?"rc-virtual-list":e,o=r.className,a=r.height,i=r.itemHeight,s=r.fullHeight,u=s===void 0?!0:s,c=r.style,l=r.data,f=r.children,h=r.itemKey,d=r.virtual,p=r.component,v=p===void 0?"div":p,m=r.onScroll,g=r.onVisibleChange,y=Yp(r,jp),b=!!(d!==!1&&a&&i),x=b&&l&&i*l.length>a,w=N.exports.useState(0),C=eo(w,2),R=C[0],_=C[1],S=N.exports.useState(!1),I=eo(S,2),T=I[0],D=I[1],O=Wt(n,o),P=l||Qp,M=N.exports.useRef(),L=N.exports.useRef(),B=N.exports.useRef(),W=N.exports.useCallback(function(ge){return typeof h=="function"?h(ge):ge==null?void 0:ge[h]},[h]),U={getKey:W};function G(ge){_(function(Fe){var Ge;typeof ge=="function"?Ge=ge(Fe):Ge=ge;var Ze=Pe(Ge);return M.current.scrollTop=Ze,Ze})}var K=N.exports.useRef({start:0,end:P.length}),X=N.exports.useRef(),j=Vp(P,W),Y=eo(j,1),ee=Y[0];X.current=ee;var J=Fp(W,null,null),Z=eo(J,4),ue=Z[0],ce=Z[1],Te=Z[2],fe=Z[3],ae=N.exports.useMemo(function(){if(!b)return{scrollHeight:void 0,start:0,end:P.length-1,offset:void 0};if(!x){var ge;return{scrollHeight:((ge=L.current)===null||ge===void 0?void 0:ge.offsetHeight)||0,start:0,end:P.length-1,offset:void 0}}for(var Fe=0,Ge,Ze,Vt,tn=P.length,Nn=0;Nn<tn;Nn+=1){var kr=P[Nn],cr=W(kr),gn=Te.get(cr),yn=Fe+(gn===void 0?i:gn);yn>=R&&Ge===void 0&&(Ge=Nn,Ze=Fe),yn>R+a&&Vt===void 0&&(Vt=Nn),Fe=yn}return Ge===void 0&&(Ge=0,Ze=0),Vt===void 0&&(Vt=P.length-1),Vt=Math.min(Vt+1,P.length),{scrollHeight:Fe,start:Ge,end:Vt,offset:Ze}},[x,b,R,P,fe,a]),le=ae.scrollHeight,ve=ae.start,xe=ae.end,Ee=ae.offset;K.current.start=ve,K.current.end=xe;var Me=le-a,De=N.exports.useRef(Me);De.current=Me;function Pe(ge){var Fe=ge;return Number.isNaN(De.current)||(Fe=Math.min(Fe,De.current)),Fe=Math.max(Fe,0),Fe}var Ne=R<=0,Xe=R>=Me,et=Kc(Ne,Xe);function Je(ge){var Fe=ge;G(Fe)}function mt(ge){var Fe=ge.currentTarget.scrollTop;Fe!==R&&G(Fe),m==null||m(ge)}var gt=Up(b,Ne,Xe,function(ge){G(function(Fe){var Ge=Fe+ge;return Ge})}),Dt=eo(gt,2),ht=Dt[0],Qe=Dt[1];Gp(b,M,function(ge,Fe){return et(ge,Fe)?!1:(ht({preventDefault:function(){},deltaY:ge}),!0)}),N.exports.useLayoutEffect(function(){function ge(Fe){b&&Fe.preventDefault()}return M.current.addEventListener("wheel",ht),M.current.addEventListener("DOMMouseScroll",Qe),M.current.addEventListener("MozMousePixelScroll",ge),function(){M.current.removeEventListener("wheel",ht),M.current.removeEventListener("DOMMouseScroll",Qe),M.current.removeEventListener("MozMousePixelScroll",ge)}},[b]);var Ct=Mp(M,P,Te,i,W,ce,G,function(){var ge;(ge=B.current)===null||ge===void 0||ge.delayHidden()});N.exports.useImperativeHandle(t,function(){return{scrollTo:Ct}}),N.exports.useLayoutEffect(function(){if(g){var ge=P.slice(ve,xe+1);g(ge,P)}},[ve,xe,P]);var en=_p(P,ve,xe,ue,f,U),Yt=null;return a&&(Yt=$a(Xc({},u?"height":"maxHeight",a),Zp),b&&(Yt.overflowY="hidden",T&&(Yt.pointerEvents="none"))),N.exports.createElement("div",Si({style:$a($a({},c),{},{position:"relative"}),className:O},y),N.exports.createElement(v,{className:"".concat(n,"-holder"),style:Yt,ref:M,onScroll:mt},N.exports.createElement(qc,{prefixCls:n,height:le,offset:Ee,onInnerResize:ce,ref:L},en)),b&&N.exports.createElement(Cp,{ref:B,prefixCls:n,scrollTop:R,height:a,scrollHeight:le,count:P.length,onScroll:Je,onStartMove:function(){D(!0)},onStopMove:function(){D(!1)}}))}var $c=N.exports.forwardRef(ev);$c.displayName="List";function tv(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Yc=N.exports.createContext(null),nv=["disabled","title","children","style","className"],rv=function(t,e){var n=lp(),o=n.prefixCls,a=n.id,i=n.open,s=n.multiple,u=n.searchValue,c=n.toggleOpen,l=n.notFoundContent,f=n.onPopupScroll,h=N.exports.useContext(Yc),d=h.flattenOptions,p=h.onActiveValue,v=h.defaultActiveFirstOption,m=h.onSelect,g=h.menuItemSelectedIcon,y=h.rawValues,b=h.fieldNames,x=h.virtual,w=h.listHeight,C=h.listItemHeight,R="".concat(o,"-item"),_=zd(function(){return d},[i,d],function(X,j){return j[0]&&X[1]!==j[1]}),S=N.exports.useRef(null),I=function(j){j.preventDefault()},T=function(j){S.current&&S.current.scrollTo({index:j})},D=function(j){for(var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,ee=_.length,J=0;J<ee;J+=1){var Z=(j+J*Y+ee)%ee,ue=_[Z],ce=ue.group,Te=ue.data;if(!ce&&!Te.disabled)return Z}return-1},O=N.exports.useState(function(){return D(0)}),P=nt(O,2),M=P[0],L=P[1],B=function(j){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;L(j);var ee={source:Y?"keyboard":"mouse"},J=_[j];if(!J){p(null,-1,ee);return}p(J.value,j,ee)};N.exports.useEffect(function(){B(v!==!1?D(0):-1)},[_.length,u]),N.exports.useEffect(function(){var X=setTimeout(function(){if(!s&&i&&y.size===1){var Y=Array.from(y)[0],ee=_.findIndex(function(J){var Z=J.data;return Z.value===Y});ee!==-1&&(B(ee),T(ee))}});if(i){var j;(j=S.current)===null||j===void 0||j.scrollTo(void 0)}return function(){return clearTimeout(X)}},[i,u]);var W=function(j){j!==void 0&&m(j,{selected:!y.has(j)}),s||c(!1)};if(N.exports.useImperativeHandle(e,function(){return{onKeyDown:function(j){var Y=j.which,ee=j.ctrlKey;switch(Y){case Se.N:case Se.P:case Se.UP:case Se.DOWN:{var J=0;if(Y===Se.UP?J=-1:Y===Se.DOWN?J=1:tv()&&ee&&(Y===Se.N?J=1:Y===Se.P&&(J=-1)),J!==0){var Z=D(M+J,J);T(Z),B(Z,!0)}break}case Se.ENTER:{var ue=_[M];ue&&!ue.data.disabled?W(ue.value):W(void 0),i&&j.preventDefault();break}case Se.ESC:c(!1),i&&j.stopPropagation()}},onKeyUp:function(){},scrollTo:function(j){T(j)}}}),_.length===0)return N.exports.createElement("div",{role:"listbox",id:"".concat(a,"_list"),className:"".concat(R,"-empty"),onMouseDown:I},l);var U=Object.keys(b).map(function(X){return b[X]}),G=function(j){return j.label},K=function(j){var Y=_[j];if(!Y)return null;var ee=Y.data||{},J=ee.value,Z=Y.group,ue=Ji(ee,!0),ce=G(Y);return Y?N.exports.createElement("div",ln({"aria-label":typeof ce=="string"&&!Z?ce:null},ue,{key:j,role:Z?"presentation":"option",id:"".concat(a,"_list_").concat(j),"aria-selected":y.has(J)}),J):null};return N.exports.createElement(N.exports.Fragment,null,N.exports.createElement("div",{role:"listbox",id:"".concat(a,"_list"),style:{height:0,width:0,overflow:"hidden"}},K(M-1),K(M),K(M+1)),N.exports.createElement($c,{itemKey:"key",ref:S,data:_,height:w,itemHeight:C,fullHeight:!1,onMouseDown:I,onScroll:f,virtual:x},function(X,j){var Y,ee=X.group,J=X.groupOption,Z=X.data,ue=X.label,ce=X.value,Te=Z.key;if(ee)return N.exports.createElement("div",{className:Wt(R,"".concat(R,"-group"))},ue!==void 0?ue:Te);var fe=Z.disabled,ae=Z.title;Z.children;var le=Z.style,ve=Z.className,xe=Xr(Z,nv),Ee=Oc(xe,U),Me=y.has(ce),De="".concat(R,"-option"),Pe=Wt(R,De,ve,(Y={},Ve(Y,"".concat(De,"-grouped"),J),Ve(Y,"".concat(De,"-active"),M===j&&!fe),Ve(Y,"".concat(De,"-disabled"),fe),Ve(Y,"".concat(De,"-selected"),Me),Y)),Ne=G(X),Xe=!g||typeof g=="function"||Me,et=typeof Ne=="number"?Ne:Ne||ce,Je=typeof et=="string"||typeof et=="number"?et.toString():void 0;return ae!==void 0&&(Je=ae),N.exports.createElement("div",ln({},Ee,{"aria-selected":Me,className:Pe,title:Je,onMouseMove:function(){M===j||fe||B(j)},onClick:function(){fe||W(ce)},style:le}),N.exports.createElement("div",{className:"".concat(De,"-content")},et),N.exports.isValidElement(g)||Me,Xe&&N.exports.createElement(ra,{className:"".concat(R,"-option-state"),customizeIcon:g,customizeIconProps:{isSelected:Me}},Me?"\u2713":null))}))},Jc=N.exports.forwardRef(rv);Jc.displayName="OptionList";var Zi=function(){return null};Zi.isSelectOption=!0;var es=function(){return null};es.isSelectOptGroup=!0;var ov=["children","value"],av=["children"];function iv(r){var t=r.key,e=r.props,n=e.children,o=e.value,a=Xr(e,ov);return Ue({key:t,value:o!==void 0?o:t,children:n},a)}function Qc(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Ud(r).map(function(e,n){if(!N.exports.isValidElement(e)||!e.type)return null;var o=e.type.isSelectOptGroup,a=e.key,i=e.props,s=i.children,u=Xr(i,av);return t||!o?iv(e):Ue(Ue({key:"__RC_SELECT_GRP__".concat(a===null?n:a,"__"),label:a},u),{},{options:Qc(s)})}).filter(function(e){return e})}function sv(r,t,e){return N.exports.useMemo(function(){var n=r,o=!r;o&&(n=Qc(t));var a=new Map,i=new Map;function s(u){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=0;l<u.length;l+=1){var f=u[l];!f[e.options]||c?(a.set(f[e.value],f),i.set(f[e.label],f)):s(f[e.options],!0)}}return s(n),{options:n,valueOptions:a,labelOptions:i}},[r,t,e])}var Vu=0,uv=Hd();function cv(){var r;return uv?(r=Vu,Vu+=1):r="TEST_OR_SSR",r}function lv(r){var t=N.exports.useState(),e=nt(t,2),n=e[0],o=e[1];return N.exports.useEffect(function(){o("rc_select_".concat(cv()))},[]),r||n}function zu(r){var t=N.exports.useRef();t.current=r;var e=N.exports.useCallback(function(){return t.current.apply(t,arguments)},[]);return e}function Ya(r,t){return zc(r).join("").toUpperCase().includes(t)}var fv=function(r,t,e,n,o){return N.exports.useMemo(function(){if(!e||n===!1)return r;var a=t.options,i=t.label,s=t.value,u=[],c=typeof n=="function",l=e.toUpperCase(),f=c?n:function(d,p){return o?Ya(p[o],l):p[a]?Ya(p[i!=="children"?i:"label"],l):Ya(p[s],l)},h=c?function(d){return Ci(d)}:function(d){return d};return r.forEach(function(d){if(d[a]){var p=f(e,h(d));if(p)u.push(d);else{var v=d[a].filter(function(m){return f(e,h(m))});v.length&&u.push(Ue(Ue({},d),{},Ve({},a,v)))}return}f(e,h(d))&&u.push(d)}),u},[r,n,o,e,t])},hv=function(r,t){var e=N.exports.useRef({values:new Map,options:new Map}),n=N.exports.useMemo(function(){var a=e.current,i=a.values,s=a.options,u=r.map(function(f){if(f.label===void 0){var h;return Ue(Ue({},f),{},{label:(h=i.get(f.value))===null||h===void 0?void 0:h.label})}return f}),c=new Map,l=new Map;return u.forEach(function(f){c.set(f.value,f),l.set(f.value,t.get(f.value)||s.get(f.value))}),e.current.values=c,e.current.options=l,u},[r,t]),o=N.exports.useCallback(function(a){return t.get(a)||e.current.options.get(a)},[t]);return[n,o]},dv=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],pv=["inputValue"];function vv(r){return!r||Bc(r)!=="object"}var mv=N.exports.forwardRef(function(r,t){var e=r.id,n=r.mode,o=r.prefixCls,a=o===void 0?"rc-select":o,i=r.backfill,s=r.fieldNames,u=r.inputValue,c=r.searchValue,l=r.onSearch,f=r.autoClearSearchValue,h=f===void 0?!0:f,d=r.onSelect,p=r.onDeselect,v=r.dropdownMatchSelectWidth,m=v===void 0?!0:v,g=r.filterOption,y=r.filterSort,b=r.optionFilterProp,x=r.optionLabelProp,w=r.options,C=r.children,R=r.defaultActiveFirstOption,_=r.menuItemSelectedIcon,S=r.virtual,I=r.listHeight,T=I===void 0?200:I,D=r.listItemHeight,O=D===void 0?20:D,P=r.value,M=r.defaultValue,L=r.labelInValue,B=r.onChange,W=Xr(r,dv),U=lv(e),G=Ei(n),K=!!(!w&&C),X=N.exports.useMemo(function(){return g===void 0&&n==="combobox"?!1:g},[g,n]),j=N.exports.useMemo(function(){return Wc(s,K)},[JSON.stringify(s),K]),Y=wi("",{value:c!==void 0?c:u,postState:function(de){return de||""}}),ee=nt(Y,2),J=ee[0],Z=ee[1],ue=sv(w,C,j),ce=ue.valueOptions,Te=ue.labelOptions,fe=ue.options,ae=N.exports.useCallback(function(be){var de=zc(be);return de.map(function(he){var ke,ze,$e,jn;if(vv(he))ke=he;else{var rn;$e=he.key,ze=he.label,ke=(rn=he.value)!==null&&rn!==void 0?rn:$e}var Ft=ce.get(ke);if(Ft){var qn;ze===void 0&&(ze=Ft==null?void 0:Ft[x||j.label]),$e===void 0&&($e=(qn=Ft==null?void 0:Ft.key)!==null&&qn!==void 0?qn:ke),jn=Ft==null?void 0:Ft.disabled}return{label:ze,value:ke,key:$e,disabled:jn}})},[j,x,ce]),le=wi(M,{value:P}),ve=nt(le,2),xe=ve[0],Ee=ve[1],Me=N.exports.useMemo(function(){var be,de=ae(xe);return n==="combobox"&&!((be=de[0])===null||be===void 0?void 0:be.value)?[]:de},[xe,ae,n]),De=hv(Me,ce),Pe=nt(De,2),Ne=Pe[0],Xe=Pe[1],et=N.exports.useMemo(function(){if(!n&&Ne.length===1){var be=Ne[0];if(be.value===null&&(be.label===null||be.label===void 0))return[]}return Ne.map(function(de){var he;return Ue(Ue({},de),{},{label:(he=de.label)!==null&&he!==void 0?he:de.value})})},[n,Ne]),Je=N.exports.useMemo(function(){return new Set(Ne.map(function(be){return be.value}))},[Ne]);N.exports.useEffect(function(){if(n==="combobox"){var be,de=(be=Ne[0])===null||be===void 0?void 0:be.value;de!=null&&Z(String(de))}},[Ne]);var mt=zu(function(be,de){var he,ke=de!=null?de:be;return he={},Ve(he,j.value,be),Ve(he,j.label,ke),he}),gt=N.exports.useMemo(function(){if(n!=="tags")return fe;var be=an(fe),de=function(ke){return ce.has(ke)};return an(Ne).sort(function(he,ke){return he.value<ke.value?-1:1}).forEach(function(he){var ke=he.value;de(ke)||be.push(mt(ke,he.label))}),be},[mt,fe,ce,Ne,n]),Dt=fv(gt,j,J,X,b),ht=N.exports.useMemo(function(){return n!=="tags"||!J||Dt.some(function(be){return be[b||"value"]===J})?Dt:[mt(J)].concat(an(Dt))},[mt,b,n,Dt,J]),Qe=N.exports.useMemo(function(){return y?an(ht).sort(function(be,de){return y(be,de)}):ht},[ht,y]),Ct=N.exports.useMemo(function(){return $d(Qe,{fieldNames:j,childrenAsData:K})},[Qe,j,K]),en=function(de){var he=ae(de);if(Ee(he),B&&(he.length!==Ne.length||he.some(function($e,jn){var rn;return((rn=Ne[jn])===null||rn===void 0?void 0:rn.value)!==($e==null?void 0:$e.value)}))){var ke=L?he:he.map(function($e){return $e.value}),ze=he.map(function($e){return Ci(Xe($e.value))});B(G?ke:ke[0],G?ze:ze[0])}},Yt=N.exports.useState(null),ge=nt(Yt,2),Fe=ge[0],Ge=ge[1],Ze=N.exports.useState(0),Vt=nt(Ze,2),tn=Vt[0],Nn=Vt[1],kr=R!==void 0?R:n!=="combobox",cr=N.exports.useCallback(function(be,de){var he=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ke=he.source,ze=ke===void 0?"keyboard":ke;Nn(de),i&&n==="combobox"&&be!==null&&ze==="keyboard"&&Ge(String(be))},[i,n]),gn=function(de,he){var ke=function(){var xn,lr=Xe(de);return[L?{label:lr==null?void 0:lr[j.label],value:de,key:(xn=lr.key)!==null&&xn!==void 0?xn:de}:de,Ci(lr)]};if(he&&d){var ze=ke(),$e=nt(ze,2),jn=$e[0],rn=$e[1];d(jn,rn)}else if(!he&&p){var Ft=ke(),qn=nt(Ft,2),Qr=qn[0],qa=qn[1];p(Qr,qa)}},yn=zu(function(be,de){var he,ke=G?de.selected:!0;ke?he=G?[].concat(an(Ne),[be]):[be]:he=Ne.filter(function(ze){return ze.value!==be}),en(he),gn(be,ke),n==="combobox"?Ge(""):(!Ei||h)&&(Z(""),Ge(""))}),st=function(de,he){en(de),(he.type==="remove"||he.type==="clear")&&he.values.forEach(function(ke){gn(ke.value,!1)})},Mo=function(de,he){if(Z(de),Ge(null),he.source==="submit"){var ke=(de||"").trim();if(ke){var ze=Array.from(new Set([].concat(an(Je),[ke])));en(ze),gn(ke,!0),Z("")}return}he.source!=="blur"&&(n==="combobox"&&en(de),l==null||l(de))},Gn=function(de){var he=de;n!=="tags"&&(he=de.map(function(ze){var $e=Te.get(ze);return $e==null?void 0:$e.value}).filter(function(ze){return ze!==void 0}));var ke=Array.from(new Set([].concat(an(Je),an(he))));en(ke),ke.forEach(function(ze){gn(ze,!0)})},nn=N.exports.useMemo(function(){var be=S!==!1&&m!==!1;return Ue(Ue({},ue),{},{flattenOptions:Ct,onActiveValue:cr,defaultActiveFirstOption:kr,onSelect:yn,menuItemSelectedIcon:_,rawValues:Je,fieldNames:j,virtual:be,listHeight:T,listItemHeight:O,childrenAsData:K})},[ue,Ct,cr,kr,yn,_,Je,j,S,m,T,O,K]);return N.exports.createElement(Yc.Provider,{value:nn},N.exports.createElement(dp,ln({},W,{id:U,prefixCls:a,ref:t,omitDomProps:pv,mode:n,displayValues:et,onDisplayValuesChange:st,searchValue:J,onSearch:Mo,onSearchSplit:Gn,dropdownMatchSelectWidth:m,OptionList:Jc,emptyOptions:!Ct.length,activeValue:Fe,activeDescendantId:"".concat(U,"_list_").concat(tn)})))}),ts=mv;ts.Option=Zi;ts.OptGroup=es;var gv={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},yv=gv,Zc=function(t,e){return N.exports.createElement(Lc,Ue(Ue({},t),{},{ref:e,icon:yv}))};Zc.displayName="DownOutlined";var xv=N.exports.forwardRef(Zc),bv={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},wv=bv,el=function(t,e){return N.exports.createElement(Lc,Ue(Ue({},t),{},{ref:e,icon:wv}))};el.displayName="CheckOutlined";var Cv=N.exports.forwardRef(el);function Ev(r){var t=r.suffixIcon,e=r.clearIcon,n=r.menuItemSelectedIcon,o=r.removeIcon,a=r.loading,i=r.multiple,s=r.prefixCls,u=e;e||(u=N.exports.createElement(Gd,null));var c=null;if(t!==void 0)c=t;else if(a)c=N.exports.createElement(jd,{spin:!0});else{var l="".concat(s,"-suffix");c=function(p){var v=p.open,m=p.showSearch;return v&&m?N.exports.createElement(Fd,{className:l}):N.exports.createElement(xv,{className:l})}}var f=null;n!==void 0?f=n:i?f=N.exports.createElement(Cv,null):f=null;var h=null;return o!==void 0?h=o:h=N.exports.createElement(qd,null),{clearIcon:u,suffixIcon:c,itemIcon:f,removeIcon:h}}var _v=globalThis&&globalThis.__rest||function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]]);return e},tl="SECRET_COMBOBOX_MODE_DO_NOT_USE",Sv=function(t,e){var n,o=t.prefixCls,a=t.bordered,i=a===void 0?!0:a,s=t.className,u=t.getPopupContainer,c=t.dropdownClassName,l=t.listHeight,f=l===void 0?256:l,h=t.listItemHeight,d=h===void 0?24:h,p=t.size,v=t.notFoundContent,m=_v(t,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","listItemHeight","size","notFoundContent"]),g=N.exports.useContext(Kd),y=g.getPopupContainer,b=g.getPrefixCls,x=g.renderEmpty,w=g.direction,C=g.virtual,R=g.dropdownMatchSelectWidth,_=N.exports.useContext(Xd),S=b("select",o),I=b(),T=N.exports.useMemo(function(){var j=m.mode;if(j!=="combobox")return j===tl?"combobox":j},[m.mode]),D=T==="multiple"||T==="tags",O;v!==void 0?O=v:T==="combobox"?O=null:O=x("Select");var P=Ev(ln(ln({},m),{multiple:D,prefixCls:S})),M=P.suffixIcon,L=P.itemIcon,B=P.removeIcon,W=P.clearIcon,U=Oc(m,["suffixIcon","itemIcon"]),G=Wt(c,Ve({},"".concat(S,"-dropdown-").concat(w),w==="rtl")),K=p||_,X=Wt((n={},Ve(n,"".concat(S,"-lg"),K==="large"),Ve(n,"".concat(S,"-sm"),K==="small"),Ve(n,"".concat(S,"-rtl"),w==="rtl"),Ve(n,"".concat(S,"-borderless"),!i),n),s);return N.exports.createElement(ts,ln({ref:e,virtual:C,dropdownMatchSelectWidth:R},U,{transitionName:Md(I,"slide-up",m.transitionName),listHeight:f,listItemHeight:d,mode:T,prefixCls:S,direction:w,inputIcon:M,menuItemSelectedIcon:L,removeIcon:B,clearIcon:W,notFoundContent:O,className:X,getPopupContainer:u||y,dropdownClassName:G}))},Ia=N.exports.forwardRef(Sv);Ia.SECRET_COMBOBOX_MODE_DO_NOT_USE=tl;Ia.Option=Zi;Ia.OptGroup=es;var bn=Ia;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var nl=function(r,t){return(nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function dn(r,t){function e(){this.constructor=r}nl(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ne(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function re(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Iv=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Rv(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Rv(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function H(){return rl}var rl=null,aa=new Map,Ii=new Map;function ol(r,t){var e=il(r,t);return aa.get(e)}function kv(r){return Ii.get(r)}function Uu(r){for(var t=aa.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function al(r){var t=r.kernelName,e=r.backendName,n=il(t,e);if(aa.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");aa.set(n,r)}function Dv(r){var t=r.kernelName;Ii.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Ii.set(t,r)}function il(r,t){return t+"_"+r}function Hu(r){for(var t=r.length,e=0,n=0;t>0;)n=Math.random()*t|0,e=r[--t],r[t]=r[n],r[n]=e}function ia(r,t,e){return Math.max(r,Math.min(t,e))}function ns(r){return r%2==0?r:r+1}function sl(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function k(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Be(r,t,e){e===void 0&&(e=""),k(ot(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function _r(r){k(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Bn(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||wt(r)&&!e)for(var n=0;n<r.length;++n)Bn(r[n],t,e);else t.push(r);return t}function oe(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function ot(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r){return r%1==0}function ul(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function sa(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function yr(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Ri(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function cl(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function it(r,t){var e=t.length;return k((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),k(r.every(function(n){return Ke(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function Jn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:it(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Gr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function fo(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function ll(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function fl(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function hl(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function wt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function rs(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function dl(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Qn(r){return typeof r=="string"||r instanceof String}function pl(r){return typeof r=="boolean"}function vl(r){return typeof r=="number"}function $r(r){return Array.isArray(r)?$r(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":vl(r)?"float32":Qn(r)?"string":pl(r)?"bool":"float32"}function ua(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ca(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function fn(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function os(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Bn(r)),e&&ll(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function ki(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function as(r,t){for(var e=Yr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Yr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function sn(){return H().platform.now()}function is(r){r.forEach(function(t){k(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function ml(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.encode(r,t)}function ho(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.decode(r,t)}function Di(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function gl(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}Object.freeze({shuffle:Hu,clamp:ia,nearestLargerEven:ns,sum:sl,randUniform:function(r,t){var e=Math.random();return t*e+(1-e)*r},distSquared:function(r,t){for(var e=0,n=0;n<r.length;n++){var o=Number(r[n])-Number(t[n]);e+=o*o}return e},assert:k,assertShapesMatch:Be,assertNonNull:_r,flatten:Bn,sizeFromShape:oe,isScalarShape:function(r){return r.length===0},arraysEqual:ot,isInt:Ke,tanh:ul,sizeToSquarishShape:sa,createShuffledIndices:function(r){for(var t=new Uint32Array(r),e=0;e<r;++e)t[e]=e;return Hu(t),t},rightPad:yr,repeatedTry:Ri,inferFromImplicitShape:cl,parseAxisParam:it,squeezeShape:Jn,getTypedArrayFromDType:Gr,getArrayFromDType:fo,checkConversionForErrors:ll,isValidDtype:fl,hasEncodingLoss:hl,isTypedArray:wt,bytesPerElement:rs,bytesFromStringArray:dl,isString:Qn,isBoolean:pl,isNumber:vl,inferDtype:$r,isFunction:ua,nearestDivisor:ca,computeStrides:fn,toTypedArray:os,toNestedArray:ki,makeOnesTypedArray:as,makeZerosTypedArray:Yr,now:sn,assertNonNegativeIntegerDimensions:is,fetch:function(r,t){return H().platform.fetch(r,t)},encodeString:ml,decodeString:ho,locToIndex:Di,indexToLoc:gl});var Tv=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Av)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Av=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?yr(o+"ms",9):o.error,u=yr(t,25),c=e.rank,l=e.size,f=yr(e.shape.toString(),14),h="";for(var d in a){var p=a[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Gu=20,to=3,Ja=7;function Nv(r,t,e,n){var o=fn(t),a=function(c,l,f,h){var d=oe(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?ro(c):c;if(m>1)for(var y=0;y<d/p;y++)for(var b=y*p,x=0;x<p;x++)v[x]=Math.max(v[x],no(g[b+x],0,f).length);return v}(r,t,e,o),i=t.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],y=f.length;if(y===0)return h==="complex64"?[no(ro(l)[0],0,h)]:h==="bool"?[yl(l[0])]:[l[0].toString()];if(y===1){if(g>Gu){var b=to*m,x=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-to)*m,g*m));return h==="complex64"&&(x=ro(x),w=ro(w)),["["+x.map(function(M,L){return no(M,p[L],h)}).join(", ")+", ..., "+w.map(function(M,L){return no(M,p[g-to+L],h)}).join(", ")+"]"]}return["["+(h==="complex64"?ro(l):Array.from(l)).map(function(M,L){return no(M,p[L],h)}).join(", ")+"]"]}var C=f.slice(1),R=d.slice(1),_=d[0]*m,S=[];if(g>Gu){for(var I=0;I<to;I++){var T=(D=I*_)+_;S.push.apply(S,c(l.slice(D,T),C,h,R,p,!1))}for(S.push("..."),I=g-to;I<g;I++)T=(D=I*_)+_,S.push.apply(S,c(l.slice(D,T),C,h,R,p,I===g-1))}else for(I=0;I<g;I++){var D;T=(D=I*_)+_,S.push.apply(S,c(l.slice(D,T),C,h,R,p,I===g-1))}var O=y===2?",":"";for(S[0]="["+S[0]+O,I=1;I<S.length-1;I++)S[I]=" "+S[I]+O;var P=`,
`;for(I=2;I<y;I++)P+=`
`;return S[S.length-1]=" "+S[S.length-1]+"]"+(v?"":P),S}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function no(r,t,e){return yr(Array.isArray(r)?parseFloat(r[0].toFixed(Ja))+" + "+parseFloat(r[1].toFixed(Ja))+"j":Qn(r)?"'"+r+"'":e==="bool"?yl(r):parseFloat(r.toFixed(Ja)).toString(),t)}function yl(r){return r===0?"false":"true"}function ro(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var po=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=oe(t),n!=null){var a=n.length;k(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||fo(e,this.size),this.strides=fn(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),k(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return En().makeTensor(this.values,this.shape,this.dtype)},r}(),En=null,z=null,xl=null,je=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=oe(t),this.strides=fn(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),k(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),z.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return ne(this,void 0,void 0,function(){var t;return re(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,z.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return z.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return ne(this,void 0,void 0,function(){var t;return re(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,ki(this.shape,t)]}})})},r.prototype.arraySync=function(){return ki(this.shape,this.dataSync())},r.prototype.data=function(){return ne(this,void 0,void 0,function(){var t,e;return re(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=En().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return ho(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=En().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return ho(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return ne(this,void 0,void 0,function(){var t;return re(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,En().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(En().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),z.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),z.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),z.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),z.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),z.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),z.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),z.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Nv(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),z.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),z.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),z.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),z.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),z.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),z.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),z.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),z.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),z.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),z.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),z.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),z.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),xl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),z.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),z.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),z.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),z.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),z.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),z.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),z.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),z.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),z.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),z.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),z.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),z.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),z.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),z.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),z.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),z.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),z.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),z.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),z.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),z.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),z.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),z.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),z.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),z.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),z.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),z.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),z.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),z.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),z.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),z.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),z.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),z.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),z.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),z.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),z.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),z.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),z.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),z.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),z.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),z.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),z.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),z.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),z.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),z.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),z.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),z.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),z.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),z.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),z.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),z.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),z.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),z.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),z.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),z.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),z.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),z.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),z.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),z.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),z.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),z.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),z.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),z.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),z.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),z.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),z.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),z.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),z.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),z.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),z.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),z.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),z.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),z.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),z.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),z.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),z.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),z.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),z.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),z.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),z.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),z.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),z.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),z.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),z.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),z.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),z.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),z.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),z.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),z.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),z.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),z.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),z.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),z.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),z.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),z.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),z.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),z.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),z.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),z.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),z.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),En().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),z.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),z.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),z.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),z.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),z.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),z.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),z.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),z.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),z.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),z.spectral.irfft(this)},r}();Object.defineProperty(je,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var ju,Ti,Ai,Ni,Fi,jr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return dn(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!ot(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");En().disposeTensor(this),this.dataId=e.dataId,En().incRef(this,null)},t.prototype.dispose=function(){En().disposeVariable(this),this.isDisposedInternal=!0},t}(je);Object.defineProperty(jr,Symbol.hasInstance,{value:function(r){return r instanceof je&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(ju||(ju={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Ti||(Ti={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Ai||(Ai={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Ni||(Ni={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Fi||(Fi={}));var Fv={float32:Ni,int32:Ti,bool:Ai,complex64:Fi};function pt(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Fv[r][t]}function Qa(r){return pt(r,"int32")}function He(r,t){if(r.dtype===t.dtype)return[r,t];var e=pt(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function bl(r,t){k(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function ss(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof je)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var Za;Object.freeze({makeTypesMatch:He,assertTypesMatch:bl,isTensorInList:function(r,t){return t.some(function(e){return e.id===r.id})},getTensorsInContainer:ss});var qu=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Mv=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new qu}return r.prototype.ready=function(){return ne(this,void 0,void 0,function(){var t,e,n;return re(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return ne(this,void 0,void 0,function(){var e,n,o;return re(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Tv(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Uu(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;Uu(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(y){f&&(l=y.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=ol(o,this.backendName);return h=g!=null?function(){var y=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b);var x=b.map(function(C){var R=C.dataId,_=C.shape,S=C.dtype;return c.makeTensorFromDataId(R,_,S)}),w=x.filter(function(C,R){return s[R]});return d((i||[]).slice().concat(w)),x}:function(){var y=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,d)});var b=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(y){return e[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(m)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Qn(t[0])&&(a=t.map(function(l){return ml(l)}));var i=o.write(a,e,n),s=new je(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=dl(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new je(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new jr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*rs(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof jr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=kv(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=n[f],d=Yr(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=ss(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),k(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});k(i instanceof je,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,y=0;y<c.length;y++)if(f[m.id]){C.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,h[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var x={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,y=0;y<C.outputs.length;y++)if(b[C.outputs[y].id]){for(var v in p)b[p[v].id]=!0,x[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(h[(C=u[d]).id]&&x[C.id]){var R={};for(var v in C.inputs){var _=C.inputs[v];f[_.id]&&(R[v]=_)}var S=Object.assign({},C);S.inputs=R,S.outputs=C.outputs,w.push(S)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n==null?(u=i.shape,c=as(oe(u),"float32"),F.makeTensor(c,u,"float32")):n,function(h,d,p){for(var v=function(g){var y=d[g],b=[];if(y.outputs.forEach(function(R){var _=h[R.id];_!=null?b.push(_):b.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var x=y.gradient(b),w=function(R){if(!(R in x))throw new Error("Cannot backprop through input "+R+". Available gradients found: "+Object.keys(x)+".");var _=p(function(){return x[R]()});if(_.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+R+" must have 'float32' dtype, but has '"+_.dtype+"'");var S=y.inputs[R];if(!ot(_.shape,S.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+R+"' has shape '"+_.shape+"', which does not match the shape of the input '"+S.shape+"'");if(h[S.id]==null)h[S.id]=_;else{var I=h[S.id];h[S.id]=I.add(_),I.dispose()}};for(var C in y.inputs)w(C)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(h){return a.tidy(h)});var f=e.map(function(h){return l[h.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return k(ua(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];k(o.every(function(s){return s instanceof je}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return k((n=t.apply(void 0,o.concat([u]))).value instanceof je,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),k(ua(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];k(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),k(l.every(function(h){return h instanceof je}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return e=sn(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=sn()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new qu,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),F=function(){var r=function(){if(Za==null){var e=void 0;if(typeof window!="undefined")e=window;else if(typeof global!="undefined")e=global;else if(typeof process!="undefined")e=process;else{if(typeof self=="undefined")throw new Error("Could not find a global object");e=self}Za=e}return Za}();if(r._tfengine==null){var t=new Iv(r);r._tfengine=new Mv(t)}return function(e){rl=e}(r._tfengine.ENV),En=function(){return r._tfengine},r._tfengine}();function wl(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}var Fn=H();Fn.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Fn.registerFlag("IS_BROWSER",function(){return wl()}),Fn.registerFlag("IS_NODE",function(){return typeof process!="undefined"&&process.versions!==void 0&&process.versions.node!==void 0}),Fn.registerFlag("IS_CHROME",function(){return typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Fn.registerFlag("PROD",function(){return!1}),Fn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Fn.getBool("DEBUG")}),Fn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Fn.registerFlag("IS_TEST",function(){return!1});var vo,Ht,Ut,dr={},ei={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Cl(r,t){dr[r]=t}function An(r){r in dr||(dr[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas!="undefined"&&o===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete dr[e]},!1),e===1?n.getContext("webgl",ei)||n.getContext("experimental-webgl",ei):n.getContext("webgl2",ei)}(r));var t=dr[r];return t.isContextLost()?(delete dr[r],An(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),dr[r])}function Ra(r,t){return[t,r]}function uo(r){var t=oe(r);return sa(Math.ceil(t/4))}function So(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function us(r,t){var e,n,o,a,i,s,u,c,l,f=r;return H().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function te(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+_l(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(vo||(vo={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(Ht||(Ht={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Ut||(Ut={}));var Pv=596e-10,Ov=65504;function El(r){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Pv<Math.abs(r)&&Math.abs(r)<Ov)}function _l(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function ao(r,t,e){return Ln(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Sl(r,t,e){var n=Ln(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(te(r,t,function(){return r.shaderSource(n,e)}),te(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Il(r,t,e){var n=Ln(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(te(r,t,function(){return r.shaderSource(n,e)}),te(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Bv.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return yr((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+yr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Yo,Jo,Bv=/ERROR: [0-9]+:([0-9]+):/g;function Rl(r,t){return Ln(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function kl(r,t,e){if(te(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Qo(r,t,e){if(te(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Dl(r,t,e){var n=Ln(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),te(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Tl(r,t,e){var n=Ln(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return te(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),te(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Al(r,t){return Ln(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Nl(r,t){var e=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Fl(r,t){return Ln(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Mi(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),te(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),te(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function Ml(r,t,e,n){Wl(r,n),te(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Pl(r,t,e,n){return Ln(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Ol(r,t,e){return r.getUniformLocation(t,e)}function Bl(r,t,e,n,o,a){te(r,t,function(){return Ml(r,t,n,a)}),te(r,t,function(){return r.uniform1i(o,a)})}function Zo(r,t,e,n){te(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),te(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Pi(r,t,e){te(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),te(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function io(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Ll(r,t))}function Ll(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Ln(r,t,e,n){var o=te(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Wl(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function mo(r,t){return t===void 0&&(t=2),oe(r.slice(0,r.length-t))}function go(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ea(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[mo(r)].concat(go(r))),t}function Vl(r,t){var e;t===void 0&&(t=!1);var n=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?ns(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=Jn(r);r=o.newShape}var a=oe(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=mo(r),s=2,u=2;return r.length&&(s=(e=go(r))[0],u=e[1]),sa(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return sa(a)}function Oo(r){return r%2==0}function so(r,t){if(ot(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Oo(e)&&Oo(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Oo(r[0])&&Oo(t[0])}function zl(r){if(Yo==null){var t=An(r);Yo=t.getParameter(t.MAX_TEXTURE_SIZE)}return Yo}function Ul(r){if(Jo==null){var t=An(r);Jo=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Jo)}function Hl(r){if(r===0)return 0;var t=An(r);return Gt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:Gt(t,"EXT_disjoint_timer_query")?1:0}function Gt(r,t){return r.getExtension(t)!=null}function Oi(r){try{if(An(r)!=null)return!0}catch{return!1}return!1}function Gl(r){if(r===0)return!1;var t=An(r);if(r===1){if(!Gt(t,"OES_texture_float"))return!1}else if(!Gt(t,"EXT_color_buffer_float"))return!1;return Bi(t)}function jl(r){if(r===0)return!1;var t=An(r);if(r!==1){if(Gt(t,"EXT_color_buffer_float"))return Bi(t);if(Gt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=us(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!Gt(t,"OES_texture_float")&&!!Gt(t,"WEBGL_color_buffer_float")&&Bi(t)}function Bi(r){var t=us(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function ql(r){return r===2&&An(r).fenceSync!=null}var Lv=Object.freeze({callAndCheck:te,canBeRepresented:El,getWebGLErrorMessage:_l,getExtensionOrThrow:ao,createVertexShader:Sl,createFragmentShader:Il,createProgram:Rl,linkProgram:kl,validateProgram:Qo,createStaticVertexBuffer:Dl,createStaticIndexBuffer:Tl,getNumChannels:function(){return H().getNumber("WEBGL_VERSION")===2?1:4},createTexture:Al,validateTextureSize:Nl,createFramebuffer:Fl,bindVertexBufferToProgramAttribute:Mi,bindTextureUnit:Ml,unbindTextureUnit:function(r,t,e){Wl(r,e),te(r,t,function(){return r.activeTexture(r.TEXTURE0+e)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:Pl,getProgramUniformLocation:Ol,bindTextureToProgramUniformSampler:Bl,bindCanvasToFramebuffer:function(r,t){te(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,null)}),te(r,t,function(){return r.viewport(0,0,r.canvas.width,r.canvas.height)}),te(r,t,function(){return r.scissor(0,0,r.canvas.width,r.canvas.height)})},bindColorTextureToFramebuffer:Zo,unbindColorTextureFromFramebuffer:Pi,validateFramebuffer:io,getFramebufferErrorMessage:Ll,getBatchDim:mo,getRowsCols:go,getShapeAs3D:ea,getTextureShapeFromLogicalShape:Vl,isReshapeFree:so,getWebGLMaxTextureSize:zl,resetMaxTextureSize:function(){Yo=null},resetMaxTexturesInShader:function(){Jo=null},getMaxTexturesInShader:Ul,getWebGLDisjointQueryTimerVersion:Hl,hasExtension:Gt,isWebGLVersionEnabled:Oi,isCapableOfRenderingToFloatTexture:Gl,isDownloadFloatTextureEnabled:jl,isWebGLFenceEnabled:ql}),pe=H();function Kl(r){H().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Q(r,t){return F.tidy(r,t)}function Lt(r){ss(r).forEach(function(t){return t.dispose()})}function Wv(r){return F.keep(r)}function la(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];H().getBool("IS_TEST")||console.warn.apply(console,r)}function Rn(r,t){var e=r;if(wt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||wt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!wt(a))return void k(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});k(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),k(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Ku(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function E(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof je)return Ku(n,r.dtype,t,e),r;var o=$r(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Ku(n,o,t,e),r==null||!wt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Rn(r,o);wt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?os(r,o,H().getBool("DEBUG")):Bn(r,[],!0);return F.makeTensor(s,i,o)}function fa(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return E(o,t+"["+a+"]",e)},n)}function cs(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Xl(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function xt(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function At(r,t){return Xl(r,t.map(function(e){return 1}),t)}function Pt(r,t,e){k(cs(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function pn(r,t){if(cs(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function ka(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function vn(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function $l(r,t){var e=r[0].length;r.forEach(function(o,a){k(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),k(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)k(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function wr(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function A(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];F.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),F.endScope(s),s}catch(u){throw F.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}pe.registerFlag("HAS_WEBGL",function(){return pe.getNumber("WEBGL_VERSION")>0}),pe.registerFlag("WEBGL_VERSION",function(){return Oi(2)?2:Oi(1)?1:0}),pe.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return pe.get("WEBGL_VERSION")===2}),pe.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),pe.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),pe.registerFlag("WEBGL_PACK",function(){return pe.getBool("HAS_WEBGL")}),pe.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_CLIP",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),pe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_PACK_REDUCE",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_LAZILY_UNPACK",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_CONV_IM2COL",function(){return pe.getBool("WEBGL_PACK")}),pe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return zl(pe.getNumber("WEBGL_VERSION"))}),pe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Ul(pe.getNumber("WEBGL_VERSION"))}),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=pe.getNumber("WEBGL_VERSION");return r===0?0:Hl(r)}),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return pe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),pe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Gl(pe.getNumber("WEBGL_VERSION"))}),pe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!pe.getBool("WEBGL_FORCE_F16_TEXTURES")&&pe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),pe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return jl(pe.getNumber("WEBGL_VERSION"))}),pe.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return ql(pe.getNumber("WEBGL_VERSION"))}),pe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return pe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),xl=Kl;var yt=A({complex_:function(r,t){var e=E(r,"real","complex"),n=E(t,"imag","complex");return Be(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),F.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),Qt=A({real_:function(r){var t=E(r,"input","real");return F.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),_n=A({imag_:function(r){var t=E(r,"input","imag");return F.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function bt(r,t,e){return ar(r,t,Rn(r,e),e)}function ar(r,t,e,n){if(n==null&&(n=$r(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!wt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){is(t);var o=oe(t),a=oe(e);k(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==oe(t.slice(i));k(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return wt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?os(r,n,H().getBool("DEBUG")):Bn(r,[],!0),F.makeTensor(r,t,n)}function $(r,t){if((wt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&wt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ar(r,[],[],t)}function rt(r,t){_r(r);var e=Rn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ar(r,null,e,t)}function tr(r,t,e){if(_r(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Rn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ar(r,t,n,e)}function ls(r,t,e){if(_r(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Rn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ar(r,t,n,e)}function Ot(r,t,e){if(_r(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Rn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ar(r,t,n,e)}function Vv(r,t,e){if(_r(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Rn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ar(r,t,n,e)}function zv(r,t,e){if(_r(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Rn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return ar(r,t=t||n,n,e)}function Uv(r,t,e,n){return t===void 0&&(t=!0),F.makeVariable(r,t,e,n)}function Jr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Jr(r,"float32"),n=We(r,"float32");return yt(e,n)}var o=as(oe(r),t);return F.makeTensor(o,r,t)}function We(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=We(r,"float32"),n=We(r,"float32");return yt(e,n)}var o=Yr(oe(r),t);return F.makeTensor(o,r,t)}function In(r,t,e){return F.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function Hv(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return F.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function ha(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return We([0],n);var o=Yr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return rt(o,n)}var Yl=A({onesLike_:function(r){var t=E(r,"x","onesLike");if(t.dtype==="complex64"){var e=Yl(Qt(t)),n=Ae(_n(t));return yt(e,n)}return F.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return Ae(o)}}})}}),Ae=A({zerosLike_:function(r){var t=E(r,"x","zerosLike");return F.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return Ae(e)}}})}}),ct=A({concat_:function(r,t){t===void 0&&(t=0),k(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=fa(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=it(t,e[0].shape)[0];var n=wr(e.map(function(s){return s.shape}),t);if(oe(n)===0)return bt([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});$l(o,t);var a=e,i={axis:t};return F.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return fs(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),Gv=A({concat1d_:function(r){return ct(r,0)}}),jv=A({concat2d_:function(r,t){return ct(r,t)}}),qv=A({concat3d_:function(r,t){return ct(r,t)}}),Kv=A({concat4d_:function(r,t){return ct(r,t)}}),fs=A({split_:function(r,t,e){e===void 0&&(e=0);var n,o=E(r,"x","split");return e=it(e,o.shape)[0],typeof t=="number"?(k(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(k(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),F.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return ct(a,e)}}})}});function Sr(r,t){return r(t={exports:{}},t.exports),t.exports}var Xv=Sr(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),$v=Sr(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),Yv=Sr(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),Jv=Sr(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),Qv=Sr(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),Zv=Sr(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),pr=Sr(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function h(g,y,b){var x=[],w=v(function _(S,I){var T,D=[],O=typeof S;if(I&&O=="object")for(T in S)try{D.push(_(S[T],I-1))}catch{}return D.length?D:O=="string"?S:S+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,m(t)]:g==null?function(){try{var _;return n&&(_=n.randomBytes)?_=_(a):(_=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(_)),m(_)}catch{var S=o.navigator,I=S&&S.plugins;return[+new Date,o,I,o.screen,m(t)]}}():g,3),x),C=new d(x),R=function(){for(var _=C.g(i),S=u,I=0;_<c;)_=(_+I)*a,S*=a,I=C.g(1);for(;_>=l;)_/=2,S/=2,I>>>=1;return(_+I)/S};return R.int32=function(){return 0|C.g(4)},R.quick=function(){return C.g(4)/4294967296},R.double=R,v(m(C.S),t),(y.pass||b||function(_,S,I,T){return T&&(T.S&&p(T,C),_.state=function(){return p(C,{})}),I?(e[s]=_,S):_})(R,w,"global"in y?y.global:this==e,y.state)}function d(g){var y,b=g.length,x=this,w=0,C=x.i=x.j=0,R=x.S=[];for(b||(g=[b++]);w<a;)R[w]=w++;for(w=0;w<a;w++)R[w]=R[C=f&C+g[w%b]+(y=R[w])],R[C]=y;(x.g=function(_){for(var S,I=0,T=x.i,D=x.j,O=x.S;_--;)S=O[T=f&T+1],I=I*a+O[f&(O[T]=O[D=f&D+S])+(O[D]=S)];return x.i=T,x.j=D,I})(a)}function p(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function v(g,y){for(var b,x=g+"",w=0;w<x.length;)y[f&w]=f&(b^=19*y[f&w])+x.charCodeAt(w++);return m(y)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),t),r.exports){r.exports=h;try{n=require("crypto")}catch{}}})([],Math)});pr.alea=Xv,pr.xor128=$v,pr.xorwow=Yv,pr.xorshift7=Jv,pr.xor4096=Qv,pr.tychei=Zv;var Da=pr.alea,hs=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Da(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),em=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=Da(a.toString()),this.randn=new hs(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),tm=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Da(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function ye(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",is(r),new po(r,t,e)}function nm(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Jl=A({batchToSpaceND_:function(r,t,e){var n=E(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return k(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),k(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),k(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),F.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),rm=A({broadcastTo_:function(r,t){var e=E(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():F.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),om=A({cast_:function(r,t){var e=E(r,"x","cast");if(!fl(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return F.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),am=A({clone_:function(r){var t=E(r,"x","clone",null);return F.runKernelFunc(function(){return F.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),im=A({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=E(r,"x","cumsum"),a=pn([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=vn(1,o.rank)[0],u=F.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),sm=A({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=E(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return k(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),k(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),k(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),F.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),Jt=A({expandDims_:function(r,t){t===void 0&&(t=0);var e=E(r,"x","expandDims",null);k(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(k(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),cn(e,n)}}),Ql=A({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=ye([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Lr(Jt(s,0),[e[0],1,1]);if(e.length===2)return Lr(Jt(Jt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Lr(Jt(Jt(Jt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),um=A({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=E(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=F.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),Li=A({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=E(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),F.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return We(o.shape,"float32")}}}).reshape(a)}}),Ir=A({pad_:function(r,t,e){e===void 0&&(e=0);var n=E(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return F.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),cm=A({pad1d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Ir(r,[t],e)}}),lm=A({pad2d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ir(r,t,e)}}),fm=A({pad3d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ir(r,t,e)}}),hm=A({pad4d_:function(r,t,e){return e===void 0&&(e=0),k(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ir(r,t,e)}}),dm=A({rand_:function(r,t,e){var n=oe(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return F.makeTensor(o,r,e)}}),pm=A({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new hs(t,e,n,!1,o),i=ye(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),vm=A({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new em(t,e,n,o),i=ye(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Zl=A({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=ye(r,n),i=new tm(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),cn=A({reshape_:function(r,t){var e=E(r,"x","reshape",null);t=cl(t,e.size),k(e.size===oe(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return F.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),ef=A({spaceToBatchND_:function(r,t,e){var n=E(r,"x","spaceToBatchND");return k(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),k(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),k(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),F.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),tf=A({squeeze_:function(r,t){var e=E(r,"x","squeeze");return cn(e,Jn(e.shape,t).newShape)}}),Xt=A({stack_:function(r,t){t===void 0&&(t=0);var e=fa(r,"tensors","stack");if(k(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;k(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Be(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){k(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return ct(i,t)}}),Lr=A({tile_:function(r,t){var e=E(r,"x","tile",null);k(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return F.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=Ae(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),mm=A({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new hs(t,e,n,!0,o),i=ye(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),lt=A({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=E(r,"x","unstack");k(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return F.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Xt(o,t)}}},"Unpack",n)}}),gm=function(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return re(this,function(h){switch(h.label){case 0:return e=E(r,"x","setdiff1d"),n=E(t,"y","setdiff1d"),k(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),k(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),k(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,n.data()];case 2:for(a=h.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new po([s],e.dtype),c=new po([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function da(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function pa(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function va(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function nf(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function rf(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function ds(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=fn(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}Object.freeze({prepareAndValidate:ds});var ps=30;function ta(r){return r<=ps?r:ca(r,Math.floor(Math.sqrt(r)))}function of(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function af(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}of(e,t,r)}function yo(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:oe(t.shape)/u,sliceSize:i,strides:fn(e.slice(0,o)).concat([1]),outputSize:oe(e)}}Object.freeze({validateUpdateShape:of,validateInput:af,calculateShapes:yo});function sf(r,t,e){k(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),k(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){k(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Wi(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Ta(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function uf(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=ia(0,a,s-1)}function cf(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?ia(0,a,s):ia(-1,a,s-1)}function vs(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function ms(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}Object.freeze({assertParamsValid:sf,maskToAxes:Wi,computeOutShape:Ta,startForAxis:uf,stopForAxis:cf,isSliceContinous:vs,computeFlatOffset:ms});function ym(r,t){k(ua(r),function(){return"The f passed in variableGrads(f) must be a function"}),k(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof jr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],F.registeredVariables)t.push(F.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;k((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=F.gradients(r,t,null,!0),s=i.value,u=i.grads;k(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),k(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Aa(r){return F.customGrad(r)}var Wn=A({softmax_:function(r,t){t===void 0&&(t=-1);var e=E(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return F.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),xm=A({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=E(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Aa(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),lf=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ff=function(){function r(){}return r.prototype.time=function(t){return V("time")},r.prototype.read=function(t){return V("read")},r.prototype.readSync=function(t){return V("readSync")},r.prototype.numDataIds=function(){return V("numDataIds")},r.prototype.disposeData=function(t){return V("disposeData")},r.prototype.write=function(t,e,n){return V("write")},r.prototype.move=function(t,e,n,o){return V("move")},r.prototype.memory=function(){return V("memory")},r.prototype.floatPrecision=function(){return V("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return V("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,V("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return V("slice")},r.prototype.stridedSlice=function(t,e,n,o){return V("stridedSlice")},r.prototype.unstack=function(t,e){return V("unstack")},r.prototype.reverse=function(t,e){return V("reverse")},r.prototype.concat=function(t,e){return V("concat")},r.prototype.neg=function(t){return V("neg")},r.prototype.add=function(t,e){return V("add")},r.prototype.addN=function(t){return V("addN")},r.prototype.subtract=function(t,e){return V("subtract")},r.prototype.multiply=function(t,e){return V("multiply")},r.prototype.realDivide=function(t,e){return V("realDivide")},r.prototype.floorDiv=function(t,e){return V("floorDiv")},r.prototype.sum=function(t,e){return V("sum")},r.prototype.prod=function(t,e){return V("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return V("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return V("argMin")},r.prototype.argMax=function(t,e){return V("argMax")},r.prototype.equal=function(t,e){return V("equal")},r.prototype.notEqual=function(t,e){return V("notEqual")},r.prototype.less=function(t,e){return V("less")},r.prototype.lessEqual=function(t,e){return V("lessEqual")},r.prototype.greater=function(t,e){return V("greater")},r.prototype.greaterEqual=function(t,e){return V("greaterEqual")},r.prototype.logicalNot=function(t){return V("logicalNot")},r.prototype.logicalAnd=function(t,e){return V("logicalAnd")},r.prototype.logicalOr=function(t,e){return V("logicalOr")},r.prototype.where=function(t){return V("where")},r.prototype.select=function(t,e,n){return V("select")},r.prototype.topk=function(t,e,n){return V("topk")},r.prototype.min=function(t,e){return V("min")},r.prototype.minimum=function(t,e){return V("minimum")},r.prototype.mod=function(t,e){return V("mod")},r.prototype.max=function(t,e){return V("max")},r.prototype.maximum=function(t,e){return V("maximum")},r.prototype.all=function(t,e){return V("all")},r.prototype.any=function(t,e){return V("any")},r.prototype.squaredDifference=function(t,e){return V("squaredDifference")},r.prototype.ceil=function(t){return V("ceil")},r.prototype.floor=function(t){return V("floor")},r.prototype.round=function(t){return V("round")},r.prototype.sign=function(t){return V("sign")},r.prototype.isNaN=function(t){return V("isNaN")},r.prototype.isInf=function(t){return V("isInf")},r.prototype.isFinite=function(t){return V("isFinite")},r.prototype.pow=function(t,e){return V("pow")},r.prototype.exp=function(t){return V("exp")},r.prototype.expm1=function(t){return V("expm1")},r.prototype.softmax=function(t,e){return V("softmax")},r.prototype.log=function(t){return V("log")},r.prototype.log1p=function(t){return V("log1p")},r.prototype.sqrt=function(t){return V("sqrt")},r.prototype.rsqrt=function(t){return V("rsqrt")},r.prototype.square=function(t){return V("square")},r.prototype.reciprocal=function(t){return V("reciprocal")},r.prototype.relu=function(t){return V("relu")},r.prototype.relu6=function(t){return V("relu6")},r.prototype.prelu=function(t,e){return V("prelu")},r.prototype.elu=function(t){return V("elu")},r.prototype.eluDer=function(t,e){return V("eluDer")},r.prototype.selu=function(t){return V("selu")},r.prototype.int=function(t){return V("int")},r.prototype.clip=function(t,e,n){return V("clip")},r.prototype.abs=function(t){return V("abs")},r.prototype.complexAbs=function(t){return V("complexAbs")},r.prototype.sigmoid=function(t){return V("sigmoid")},r.prototype.softplus=function(t){return V("softplus")},r.prototype.sin=function(t){return V("sin")},r.prototype.cos=function(t){return V("cos")},r.prototype.tan=function(t){return V("tan")},r.prototype.asin=function(t){return V("asin")},r.prototype.acos=function(t){return V("acos")},r.prototype.atan=function(t){return V("atan")},r.prototype.atan2=function(t,e){return V("atan2")},r.prototype.sinh=function(t){return V("sinh")},r.prototype.cosh=function(t){return V("cosh")},r.prototype.tanh=function(t){return V("tanh")},r.prototype.asinh=function(t){return V("asinh")},r.prototype.acosh=function(t){return V("acosh")},r.prototype.atanh=function(t){return V("atanh")},r.prototype.erf=function(t){return V("erf")},r.prototype.step=function(t,e){return V("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,V("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return V("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return V("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return V("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,V("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return V("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return V("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return V("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return V("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return V("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return V("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return V("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return V("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return V("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return V("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return V("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return V("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return V("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return V("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return V("reshape")},r.prototype.cast=function(t,e){return V("cast")},r.prototype.tile=function(t,e){return V("tile")},r.prototype.pad=function(t,e,n){return V("pad")},r.prototype.transpose=function(t,e){return V("transpose")},r.prototype.gather=function(t,e,n){return V("gather")},r.prototype.gatherND=function(t,e){return V("gatherND")},r.prototype.scatterND=function(t,e,n){return V("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return V("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return V("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return V("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return V("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return V("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return V("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return V("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return V("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return V("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return V("multinomial")},r.prototype.oneHot=function(t,e,n,o){return V("oneHot")},r.prototype.cumsum=function(t,e,n,o){return V("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return V("nonMaxSuppression")},r.prototype.fft=function(t){return V("fft")},r.prototype.ifft=function(t){return V("ifft")},r.prototype.complex=function(t,e){return V("complex")},r.prototype.real=function(t){return V("real")},r.prototype.imag=function(t){return V("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return V("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return V("depthToSpace")},r.prototype.split=function(t,e,n){return V("split")},r.prototype.sparseToDense=function(t,e,n,o){return V("sparseToDense")},r.prototype.diag=function(t){return V("diag")},r.prototype.fill=function(t,e,n){return V("fill")},r.prototype.onesLike=function(t){return V("onesLike")},r.prototype.zerosLike=function(t){return V("zerosLike")},r.prototype.linspace=function(t,e,n){return V("linspace")},r.prototype.dispose=function(){return V("dispose")},r}();function V(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function On(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function at(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function Re(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function qr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=ma(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return ir(r,s,e,n,o,a,!1,i)}function xo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=Vi(t),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return bo(r,s,e,n,o,!1,u,a)}function ir(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=t[0],v=t[1],m=t[3],g=ma(e),y=g[0],b=g[1],x=ma(n),w=x[0],C=x[1],R=Wr(p,w),_=Wr(v,C),S=function(P,M,L,B,W,U,G,K){var X,j,Y;if(typeof P=="number"){X={top:P,bottom:P,left:P,right:P,type:P===0?"VALID":"NUMBER"};var ee=function(fe,ae,le,ve,xe){ve==null&&(ve=gs(fe,ae,le));var Ee=fe[0],Me=fe[1],De=co((Ee-ae+2*ve)/le+1,xe);k(Ke(De),function(){return"The output # of rows ("+De+") must be an integer. Change the stride and/or zero pad parameters"});var Pe=co((Me-ae+2*ve)/le+1,xe);return k(Ke(Pe),function(){return"The output # of columns ("+Pe+") must be an integer. Change the stride and/or zero pad parameters"}),[De,Pe]}([M,L],U,B,P,K);j=ee[0],Y=ee[1]}else if(P==="same"){j=Math.ceil(M/B),Y=Math.ceil(L/W);var J=Math.max(0,(j-1)*B+U-M),Z=Math.max(0,(Y-1)*W+G-L),ue=Math.floor(J/2),ce=J-ue,Te=Math.floor(Z/2);X={top:ue,bottom:ce,left:Te,right:Z-Te,type:"SAME"}}else{if(P!=="valid")throw Error("Unknown padding parameter: "+P);X={top:0,bottom:0,left:0,right:0,type:"VALID"},j=Math.ceil((M-U+1)/B),Y=Math.ceil((L-G+1)/W)}return{padInfo:X,outHeight:j,outWidth:Y}}(o,l,f,y,b,R,_,a),I=S.padInfo,T=S.outHeight,D=S.outWidth,O=i?m*h:m;return s==="channelsFirst"?d=[c,O,T,D]:s==="channelsLast"&&(d=[c,T,D,O]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:T,outWidth:D,outChannels:O,padInfo:I,strideHeight:y,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:R,effectiveFilterWidth:_,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function bo(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,v=t[0],m=t[1],g=t[2],y=t[4],b=Vi(e),x=b[0],w=b[1],C=b[2],R=Vi(n),_=R[0],S=R[1],I=R[2],T=Wr(v,_),D=Wr(m,S),O=Wr(g,I),P=function(G,K,X,j,Y,ee,J,Z,ue,ce,Te){var fe,ae,le,ve;if(typeof G=="number"){fe={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var xe=function(mt,gt,Dt,ht,Qe,Ct){Qe==null&&(Qe=gs(mt,gt,ht));var en=mt[0],Yt=mt[1],ge=mt[2],Fe=co((en-gt+2*Qe)/ht+1,Ct);k(Ke(Fe),function(){return"The output # of depths ("+Fe+") must be an integer. Change the stride and/or zero pad parameters"});var Ge=co((Yt-gt+2*Qe)/ht+1,Ct);k(Ke(Ge),function(){return"The output # of rows ("+Ge+") must be an integer. Change the stride and/or zero pad parameters"});var Ze=co((ge-gt+2*Qe)/ht+1,Ct);return k(Ke(Ze),function(){return"The output # of columns ("+Ze+") must be an integer. Change the stride and/or zero pad parameters"}),[Fe,Ge,Ze,Dt]}([K,X,j,1],Z,1,Y,G,Te);ae=xe[0],le=xe[1],ve=xe[2]}else if(G==="same"){ae=Math.ceil(K/Y),le=Math.ceil(X/ee),ve=Math.ceil(j/J);var Ee=(ae-1)*Y+Z-K,Me=(le-1)*ee+ue-X,De=(ve-1)*J+ce-j,Pe=Math.floor(Ee/2),Ne=Ee-Pe,Xe=Math.floor(Me/2),et=Me-Xe,Je=Math.floor(De/2);fe={top:Xe,bottom:et,left:Je,right:De-Je,front:Pe,back:Ne,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},ae=Math.ceil((K-Z+1)/Y),le=Math.ceil((X-ue+1)/ee),ve=Math.ceil((j-ce+1)/J)}return{padInfo:fe,outDepth:ae,outHeight:le,outWidth:ve}}(o,l,f,h,x,w,C,T,D,O,s),M=P.padInfo,L=P.outDepth,B=P.outHeight,W=P.outWidth,U=a?y*d:y;return i==="channelsFirst"?p=[c,U,L,B,W]:i==="channelsLast"&&(p=[c,L,B,W,U]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:L,outHeight:B,outWidth:W,outChannels:U,padInfo:M,strideDepth:x,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:T,effectiveFilterHeight:D,effectiveFilterWidth:O,dilationDepth:_,dilationHeight:S,dilationWidth:I,inShape:r,outShape:p,filterShape:t}}function gs(r,t,e,n){n===void 0&&(n=1);var o=Wr(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function ma(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Vi(r){return typeof r=="number"?[r,r,r]:r}function Wr(r,t){return t<=1?r:r+(r-1)*(t-1)}function co(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function Cr(r){var t=ma(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Nt(r,t){return Cr(r)||Cr(t)}function Na(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function ys(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=We(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!hl(r.dtype,t))return F.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=$(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function ga(r,t){return F.makeTensorFromDataId(r.dataId,t,r.dtype)}function xs(r,t,e){var n=(t-r)/(e-1),o=Yr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return rt(o,"float32")}Object.freeze({castTensor:ys,reshapeTensor:ga,linspaceImpl:xs,upcastType:pt,axesAreInnerMostDims:cs,combineLocations:Xl,computeOutAndReduceShapes:xt,expandShapeToKeepDim:At,assertAxesAreInnerMostDims:Pt,getAxesPermutation:pn,getUndoAxesPermutation:ka,getInnerMostAxes:vn,getBroadcastDims:On,getReductionAxes:at,assertAndGetBroadcastShape:Re,assertParamsConsistent:$l,computeOutShape:wr,computePool2DInfo:qr,computePool3DInfo:xo,computeConv2DInfo:ir,computeConv3DInfo:bo,computeDefaultPad:gs,tupleValuesAreOne:Cr,eitherStridesOrDilationsAreOne:Nt,convertConv2DDataFormat:Na,PARALLELIZE_THRESHOLD:ps,computeOptimalWindowSize:ta});function zi(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Xu(r,t){return{real:r[2*t],imag:r[2*t+1]}}function bm(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function wm(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Cm(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(a,i,s||Em)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Em(r,t){return r>t?1:r<t?-1:0}function bs(r,t,e,n,o){return hf(r,t,e,n,o,0).selectedIndices}function ws(r,t,e,n,o,a){var i=hf(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function hf(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(x,w){return{score:x,boxIndex:w,suppressBeginIndex:0}}).filter(function(x){return x.score>o}).sort($u),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=_m(r,p,l[g]);if(y>=n){m=!0;break}if(h.score=h.score*Sm(n,c,y),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&Cm(u,h,$u))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:rt(l,"int32"),selectedScores:rt(f,"float32"),numValidOutputs:$(b,"int32")}}function _m(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(s,f),y=Math.min(u,h),b=Math.max(g-v,0)*Math.max(y-m,0);return b/(d+p-b)}function Sm(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function $u(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function df(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function pf(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=ye(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function vf(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Gr(e,s*n),l=Gr("int32",s*n),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(x,w){return w.value-x.value});var m=f*n,g=c.subarray(m,m+n),y=l.subarray(m,m+n);for(v=0;v<n;v++)g[v]=p[v].value,y[v]=p[v].index}var b=t.slice();return b[b.length-1]=n,[bt(c,b,e),bt(l,b,"int32")]}function Cs(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=ye(r,"int32"),a=ye([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Im=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Rm=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},km=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function mf(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function Bt(r,t){return t===1?[r]:mf(r,t)}function St(){var r,t,e,n,o,a,i,s,u,c;return H().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function vr(r,t,e){e===void 0&&(e="index");var n=fn(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Es(r){var t=fn(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var gf=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Dm(r,t,e,n){var o=[];r.forEach(function(d){var p=oe(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?yf(p):Mr(p);var y=p.shapeInfo.logicalShape,b=v.logicalShape;return y.length<=b.length&&(g+=m?function(x,w){var C,R=x.name,_=R.charAt(0).toUpperCase()+R.slice(1),S="get"+_+"AtOutCoords",I=x.shapeInfo.logicalShape.length,T=w.logicalShape.length,D=On(x.shapeInfo.logicalShape,w.logicalShape),O=Le(T),P=T-I,M=["x","y","z","w","u","v"];C=I===0?"":T<2&&D.length>=1?"coords = 0;":D.map(function(X){return"coords."+M[X+P]+" = 0;"}).join(`
`);var L="";L=T<2&&I>0?"coords":x.shapeInfo.logicalShape.map(function(X,j){return"coords."+M[j+P]}).join(", ");var B="return outputValue;",W=oe(x.shapeInfo.logicalShape)===1,U=oe(w.logicalShape)===1;if(I!==1||W||U){if(W&&!U)B=T===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var G=I-2,K=I-1;D.indexOf(G)>-1&&D.indexOf(K)>-1?B="return vec4(outputValue.x);":D.indexOf(G)>-1?B="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(K)>-1&&(B="return vec4(outputValue.xx, outputValue.zz);")}}else B=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+S+`() {
      `+O+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+_+"("+L+`);
      `+B+`
    }
  `}(p,v):function(x,w){var C=x.name,R=C.charAt(0).toUpperCase()+C.slice(1),_="get"+R+"AtOutCoords",S=w.texShape,I=x.shapeInfo.texShape,T=x.shapeInfo.logicalShape.length,D=w.logicalShape.length;if(!x.shapeInfo.isUniform&&T===D&&x.shapeInfo.flatOffset==null&&ot(I,S))return`
      float `+_+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var O,P=Le(D),M=On(x.shapeInfo.logicalShape,w.logicalShape),L=D-T,B=["x","y","z","w","u","v"];O=T===0?"":D<2&&M.length>=1?"coords = 0;":M.map(function(U){return"coords."+B[U+L]+" = 0;"}).join(`
`);var W="";return W=D<2&&T>0?"coords":x.shapeInfo.logicalShape.map(function(U,G){return"coords."+B[G+L]}).join(", "),`
    float `+_+`() {
      `+P+` coords = getOutputCoords();
      `+O+`
      return get`+R+"("+W+`);
    }
  `}(p,v)),g}(d,t,n)}).join(`
`),c=t.texShape,l=St(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Tm+`
    `+Am+`
    `+Nm+`
  `}(l);return t.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(ot(x,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var R=Math.ceil(x[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],y=Math.ceil(v[2]/2),b=y*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(x,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],R=Math.ceil(x[x.length-1]/2),_=R*Math.ceil(x[x.length-2]/2),S=_,I="",T="b, r, c",D=2;D<x.length-1;D++)S*=x[x.length-D-1],I=`
      int b`+D+" = index / "+S+`;
      index -= b`+D+" * "+S+`;
    `+I,T="b"+D+", "+T;return`
    ivec`+x.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+_+`;
      index -= b * `+_+`;

      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec`+x.length+"("+T+`);
    }
  `}(d,p)}var v,m,g,y,b}(t.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,y){return ot(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=vr(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var b=vr(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,y){var b=vr(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,y){var b=vr(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(h+=Fm),[h,f,i,s,a,u,e].join(`
`)}function Mr(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=fr(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Tr(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=fr(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&ot(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Jn(n),l=c.newShape,f=c.keptDims,h=l;if(h.length<n.length){var d=Pr(e,h);return`
      `+Mr(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Or(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Tr(e)+`
      }
    `;var p=i[0],v=i[1],m=fr(o);return v===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=Jn(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var h=Pr(e,f);return`
        `+Mr(h)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Or(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Tr(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===i&&m==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=fr(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=Jn(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var h=Pr(e,l);return`
      `+Mr(h)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Or(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Tr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=fr(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=Jn(n),f=l.newShape,h=l.keptDims;if(f.length<n.length){var d=Pr(e,f);return`
      `+Mr(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Or(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Tr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=fr(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Jn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Pr(e,s);return`
      `+Mr(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Or(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,h=n[3]*f,d=n[2]*h,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Tr(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],y=m[1];if(y===p&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=fr(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function yf(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=St(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=St();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=St();if(u!=null&&ot(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=Pr(o,l);return`
        `+yf(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Or(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(a[2]/2),v=p*Math.ceil(a[1]/2),m=St();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)v="int b"+g+", "+v,p*=a[i-g-1],m="b"+g+" * "+p+" + "+m;var y=St();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Tm=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Am=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Nm=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Fm=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function fr(r){return"offset"+r}function Tr(r){var t=r.name,e=oe(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Le(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Pr(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Or(r,t){return t.map(function(e){return r[e]}).join(", ")}var Mm=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,k(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Le(c),f=Bt("coords",c);if(a===1){var h=Le(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(_){return"int "+_}),m=Bt("sourceLocR",s-1).concat("inIdx.r"),g=Bt("sourceLocG",s-1).concat("inIdx.g"),y=Bt("sourceLocB",s-1).concat("inIdx.b"),b=Bt("sourceLocA",s-1).concat("inIdx.a"),x=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",R=n?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+R+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+x+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},Pm=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Om=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,v=h-1-r.padInfo.left,m=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Bm=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],Re(r,t),Re(r,e);var i="0.0";n!=null&&(Re(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Re(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Lm=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Re(r,t),Re(r,e);var i="vec4(0.0)";n!=null&&(Re(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Re(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Wm="return areal * breal - aimag * bimag;",Vm="return areal * bimag + aimag * breal;",Yu=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Re(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ti="return a + b;",ni="return a - b;",Ju="return a * b;",xf="return (a < 0.) ? b * a : a;",Ye=function(r,t,e){this.variableNames=["A","B"],this.outputShape=Re(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},bf=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Mn=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Re(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||oe(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Le(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=Bt("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},zm=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Um=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Hm=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Gm=function(r){this.outputShape=[],this.outputShape=wr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},jm=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=wr(r,t);var e=this.outputShape,n=e.length,o=Le(n),a=Bt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(m,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Bo(i,c,d)+`),
            vec2(`+Bo(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+Bo(i,c,v)+`),
          vec2(`+Bo(l,c,v)+"));",this.userCode=`
      float getValue(`+i.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Bo(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var qm=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Km=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Xm=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},$m=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ym=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Jm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Qu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,y="",b="";e&&(y=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+x+`
        `+b+`
        setOutput(result);
      }
    `},Qm=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Zu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,v="",m="";e&&(v=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},ec=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var y=0;y<p;y++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*y)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var b=s%2==0?ns(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var x="",w="";e&&(x=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},Zm=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],y=m[1],b=m[2],x=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=x[0],C=x[1],R=x[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+R+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},eg=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Le(n)+` coords = getOutputCoords();
        int end = `+tc(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+tc(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function tc(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var tg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=vo.DENSE;var t=uo(r),e=St();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vr(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},ng=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=vo.DENSE;var t=uo(r),e=St();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+vr(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},rg=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),og=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},ag=function(r){this.variableNames=["A"],this.outTexUsage=Ht.DOWNLOAD;var t=St();this.outputShape=r,this.userCode=`
      `+gf+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},ig=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ht.DOWNLOAD;var t=St();this.outputShape=r,this.userCode=`
      `+gf+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},sg=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=St(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Es(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},ug=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=St(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Es(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},cg="return real * expR - imag * expI;",lg="return real * expI + imag * expR;",nc=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},fg=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),hg=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Le(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},dg=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Le(t.length),o=Le(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function wf(r,t){var e=St();return Sl(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Cf(r,t){return Dl(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Ef(r,t){return Tl(r,t,new Uint16Array([0,1,2,2,1,3]))}function Io(r,t,e,n,o,a,i){Nl(e,n);var s=Al(r,t),u=r.TEXTURE_2D;return te(r,t,function(){return r.bindTexture(u,s)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),te(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function _f(r,t,e,n,o){var a=Ra(e,n);return Io(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Sf(r,t,e,n,o){var a=Ra(e,n);return Io(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function If(r,t,e,n,o){var a=Ra(e,n);return Io(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Rf(r,t,e,n,o){var a=So(e,n);return Io(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function kf(r,t,e,n,o){var a=So(e,n);return Io(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Df(r,t,e,n){return te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Mi(r,t,e,"clipSpacePos",n,3,20,0)&&Mi(r,t,e,"uv",n,2,20,12)}function Tf(r,t,e,n,o,a,i){var s,u,c;te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Af(r,t,e,n){te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Nf(r,t,e,n,o){var a=r.createBuffer();te(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return te(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),te(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),te(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Ff(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Mf(r,t,e,n,o){var a=Ra(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return te(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Pf(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var h=So(l,f);return h[0]*h[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Of(r,t,e,n){var o=new Float32Array(e*n*4);return te(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var pg=Object.freeze({createVertexShader:wf,createVertexBuffer:Cf,createIndexBuffer:Ef,createFloat32MatrixTexture:_f,createFloat16MatrixTexture:Sf,createUnsignedBytesMatrixTexture:If,createPackedMatrixTexture:Rf,createFloat16PackedMatrixTexture:kf,bindVertexProgramAttributeStreams:Df,uploadDenseMatrixToTexture:Tf,uploadPixelDataToTexture:Af,createBufferFromOutputTexture:Nf,downloadFloat32MatrixFromBuffer:Ff,downloadByteEncodedFloatMatrixFromOutputTexture:Mf,downloadPackedMatrixFromBuffer:Pf,downloadMatrixFromPackedOutputTexture:Of}),Bf=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=H().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Cl(e,t)):this.gl=An(e);var n="WEBGL_color_buffer_float";if(H().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ao(this.gl,this.debug,"OES_texture_float"),Gt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ao(this.gl,this.debug,"OES_texture_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Gt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ao(this.gl,this.debug,"EXT_color_buffer_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Gt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!Gt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Cf(this.gl,this.debug),this.indexBuffer=Ef(this.gl,this.debug),this.framebuffer=Fl(this.gl,this.debug),this.textureConfig=us(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return H().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;te(e,this.debug,function(){return e.finish()}),te(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),te(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),te(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),te(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),te(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),_f(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Sf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),If(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Af(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),Tf(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),kf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Rf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Pi(this.gl,this.debug,this.framebuffer),this.outputTexture=null),te(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Mf(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Pf(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Ff(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Nf(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(H().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Of(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Il(e,this.debug,t),o=wf(e,this.debug),a=Rl(e,this.debug);return te(e,this.debug,function(){return e.attachShader(a,o)}),te(e,this.debug,function(){return e.attachShader(a,n)}),kl(e,this.debug,a),this.debug&&Qo(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Df(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&te(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Qo(this.gl,this.debug,this.program),te(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Pl(this.gl,this.debug,t,e):Ol(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),te(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Bl(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=So(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Qo(this.gl,this.debug,this.program),io(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),te(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),te(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ao(this.gl,this.debug,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return ne(this,void 0,void 0,function(){var e=this;return re(this,function(n){switch(n.label){case 0:return[4,Ri(function(){return e.disposed||e.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Ri(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Zo(this.gl,this.debug,t,this.framebuffer),this.debug&&io(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Zo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&io(this.gl)):Pi(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Zo(o,this.debug,t,this.framebuffer),this.debug&&io(o),this.outputTexture=t,te(o,this.debug,function(){return o.viewport(0,0,e,n)}),te(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),te(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function rc(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!ot(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!ot(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var vg=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*n,v=St(),m=f==="channelsLast",g=m?0:1,y=m?1:2,b="",x=0;x<=1;x++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+x+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},mg=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},gg=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},yg=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},xg=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},bg=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},ri=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},wg=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Cg=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Eg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Bt("rc",t),n=Le(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},_g=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Le(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Sg=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+r[g]+m[1]});for(var n=r.length,o=Le(n),a=t.map(function(m){return m[0]}).join(","),i=t.map(function(m,g){return m[0]+r[g]}).join(","),s=Bt("rc",n),u=Bt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=n===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},oi=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(n/4),m=n%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},ai=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var b=4*Math.floor(n/4),x=n%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(x===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},Ig=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},Rg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+vr(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Es(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},kg=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Dg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Tg=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Ag=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Ng=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Fg=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Le(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Mg=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=Bt("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Le(e);function s(u){var c=r.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},oc=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Le(o.length),u=Le(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Pg=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Og=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Le(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Bg=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Le(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return ii.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+ii[s]+" = start["+s+"] + coords."+ii[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),ii=["x","y","z","w","u","v"],Lg=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Le(this.rank),n=Bt("coords",this.rank),o=Bt("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Wg=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Le(e.length),a=Le(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Vg=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=ac(e,n),i=ic(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===Ut.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===Ut.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===Ut.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===Ut.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===Ut.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=ic(e,ac(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function ac(r,t){if(r===Ht.UPLOAD)return Ut.PACKED_2X2_FLOAT32;if(r===Ht.RENDER||r==null)return function(e){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Ut.PACKED_2X2_FLOAT32:Ut.UNPACKED_FLOAT32:e?Ut.PACKED_2X2_FLOAT16:Ut.UNPACKED_FLOAT16}(t);if(r===Ht.DOWNLOAD||r===Ht.PIXELS)return Ut.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function ic(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var zg=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Le(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Ug=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Le(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Hg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Le(this.rank),a=mf("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},_s=1.7580993408473768,Ss=1.0507009873554805,Ce=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},mn="if (isnan(x)) return x;",Gg="return x;",sc="return abs(x);",Lf=mn+`
  return (x < 0.0) ? 0.0 : x;
`,Wf=mn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Vf="return (x >= 0.0) ? x : (exp(x) - 1.0);",jg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+_s+`;
  float scale = `+Ss+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,uc="return -x;",cc="return ceil(x);",lc="return floor(x);",fc="return exp(x);",hc="return exp(x) - 1.0;",qg=mn+`
  return sin(x);
`,Kg=mn+`
  return cos(x);
`,Xg=mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,$g=mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Yg=mn+`
  return atan(x);
`,Jg=mn+"return log(x + sqrt(x * x + 1.0));",Qg=mn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Zg=mn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Lo="return x;",ey="return x;",zf=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Uf=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Hf=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,oo=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},ty=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=Bt("rc",t),n=Le(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Wo={};function Vo(r,t){if(t===void 0&&(t=!1),r==="linear")return t?ey:Gg;if(r==="relu")return t?zf:Lf;if(r==="elu")return t?Hf:Vf;if(r==="relu6")return t?Uf:Wf;if(r==="prelu")return t?bf:xf;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var ny=600,Gf=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=An(H().getNumber("WEBGL_VERSION"));o.binaryCache=((n=H().getNumber("WEBGL_VERSION"))in Wo||(Wo[n]={}),Wo[n]),o.gpgpu=new Bf(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Vg(o.gpgpu),o.numMBBeforeWarning=H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*ny/1024/1024,o.texData=new lf(o,F),o}return dn(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(H().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:Ht.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(H().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:Ht.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new oo(u,Lo):new Ce(u,Lo);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=sn()),a==="complex64"?p=zi(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=sn()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v,m,g,y,b,x,w,C,R,_;return re(this,function(S){switch(S.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(I){return n.push(I)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new oo(i,Lo):new Ce(i,Lo),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(_=this.gpgpu).createBufferFromTexture.apply(_,[m.texture].concat(uo(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:S.sent(),S.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=S.sent(),b=y[0],x=y[1],g=zi(b,x),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=oe(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),S.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(e,g),R=this.pendingRead.get(e),this.pendingRead.delete(e),R.forEach(function(I){return I(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!El(o))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=oe(a);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(uo(a))).subarray(0,u);return this.disposeData(c.dataId),f}var h=H().getBool("WEBGL_PACK")&&s===!0,d=h?ea(a):a,p=h?new ig(d):new ag(d),v=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return re(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=Bn(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=Bn(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=sl(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:sn(),endMs:null}},t.prototype.endTimer=function(e){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=sn(),e)},t.prototype.getQueryTime=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return H().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=F.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(oe(o)===0)return bt([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=vs(e.shape,n,o);if(a||!i){var s=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Lg(o):new Bg(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=ms(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Ta(n,o,a);if(i.some(function(u){return u===0}))return bt([],i);var s=new Wg(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Mg(e.shape,n):new Fg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return Qt(d)}),a=e.map(function(d){return _n(d)});return yt(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new jm(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=wr(e.map(function(d){return d.shape}),n),f=e.map(function(d){return d.as2D(-1,oe(d.shape.slice(n)))}),h=new Gm(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,uc,e.dtype);var n=new Ce(e.shape,uc);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?n.as3D(c,1,u):n;return this.multiply(l,h).sum(f,!0)}var d=pt(e.dtype,n.dtype),p=new ri(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],h=n.shape[0],d=pt(n.dtype,o.dtype),p=s!=null,v=c!=null,m=u?Vo(u,!0):null,g=new ri(n.shape,[h,l,f],a,i,p,m,v),y=[n,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new Yu(Wm,e.shape,n.shape),s=new Yu(Vm,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ju,e.dtype);var h=new Ye(Ju,e.shape,n.shape);return this.compileAndRun(h,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),H().getBool("WEBGL_PACK_NORMALIZATION")){var f=new Lm(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var h=new Bm(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=H().getBool("WEBGL_PACK_NORMALIZATION")?new yg(e.shape,n,o,a,i):new mg(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new gg(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return ho(i)});return pf(ye(e.shape,e.dtype,o),n)}var a=new zg(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sg(e.shape,n,o):new _g(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hg(e.shape,n):new Ug(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new hg(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){k(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,h){return f*h}),i=da(e.shape,n,a),s=pa(i.length,n.length),u=va(e.shape,n,a),c=nf(o,n.length),l=rf(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){k(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=da(u.shape,n,a,!1),l=pa(c.length,n.length,!1),f=va(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=ta(i),u=new Ig({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=ta(i),u=new km({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=ta(a[a.length-1]),s=new Mm(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){Pt("sum",n,e.rank);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i),u=Qa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i),u=Qa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=pn([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=vn(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,y=0;y<g;y++)y!==p?m.push(d[y]):m.push(v);return m}(s.shape,a,o),c=oe([s.shape[a]]),l=s.as2D(-1,c),f=Qa(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(h=h.transpose(ka(i))),h},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=ps?(p=h,v=!0):p=ca(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=ca(h,p+1);return p}(u,i),l=new Pg({windowSize:c,inSize:u,batchSize:s,numSegments:i},n),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=ha(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(Pt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!H().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=xt(e.shape,a),s=i[0],u=oe(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new eg(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Ye("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Ye("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Ye("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Ye("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Ye("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Ye("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new Ce(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Ye("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Ye("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new Og(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],pt(n.dtype,o.dtype))},t.prototype.where=function(e){la("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Cs(e.shape,n)},t.prototype.topk=function(e,n,o){return vf(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){Pt("min",n,e.rank);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ye(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);Pt("max",n,e.rank);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){Pt("all",n,e.rank);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){Pt("any",n,e.rank);var o=xt(e.shape,n),a=o[0],i=oe(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Ye(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Ye(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,ti);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=pt(e.dtype,n.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,ti,o);var a=new Ye(ti,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new oo(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new Mn(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=a.makeComplexComponentTensorInfo(e,d),m=a.makeComplexComponentTensorInfo(n,p),g=new Ye(o,e.shape,n.shape);return a.compileAndRun(g,[v,m],pt(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>H().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return pt(c,l)}),s=e.map(function(c){return c.shape}),u=H().getBool("WEBGL_PACK")?new Rm(e[0].shape,s):new Im(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,ni);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=pt(e.dtype,n.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,ni,e.dtype);var a=new Ye(ni,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ye(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=pt(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cc,e.dtype);var n=new Ce(e.shape,cc);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,lc,e.dtype);var n=new Ce(e.shape,lc);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new Ce(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new Ce(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new Ce(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new Ce(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new Ce(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fc,e.dtype);var n=new Ce(e.shape,fc);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hc,e.dtype);var n=new Ce(e.shape,hc);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=it([n],e.shape),a=this.max(e,o),i=At(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new Ce(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new Ce(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new Ce(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new Ce(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new Ce(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=H().getBool("WEBGL_PACK")?new oo(e.shape,zf):new Ce(e.shape,Lf),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=H().getBool("WEBGL_PACK")?new oo(e.shape,Uf):new Ce(e.shape,Wf),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(bf,e.shape,n.shape):new Ye(xf,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Hf,e.dtype);var n=new Ce(e.shape,Vf);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Ye("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new Ce(e.shape,jg);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new Ce(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=H().getBool("WEBGL_PACK_CLIP")?new Um(e.shape):new zm(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,sc,e.dtype);var n=new Ce(e.shape,sc);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new Hm(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new Ce(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new Ce(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new Ce(e.shape,qg);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new Ce(e.shape,Kg);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new Ce(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new Ce(e.shape,Xg);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new Ce(e.shape,$g);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new Ce(e.shape,Yg);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new Ce(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new Ce(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new Ce(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new Ce(e.shape,Jg);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new Ce(e.shape,Qg);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new Ce(e.shape,Zg);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new Ce(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new Ce(e.shape,function(a){return a===void 0&&(a=0),mn+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!H().getBool("WEBGL_LAZILY_UNPACK")||!H().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),y=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),x={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,k(so(c.shape,x.shape),function(){return"packed reshape "+c.shape+" to "+x.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),R=this.fusedBatchMatMul({a:x,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),_=this.texData.get(R.dataId);return k(_.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,_.shape=o.outShape,F.makeTensorFromDataId(R.dataId,o.outShape,R.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=e.squeeze([0]),y=n.reshape([1,p,-1]),b=new vg(m,g.shape,o),x=this.compileAndRun(b,[g]).reshape([1,m[0],m[1]]),w=a!=null,C=s!=null,R=i?Vo(i,!0):null,_=new ri(x.shape,[1,v,o.outChannels],!0,!1,w,R,C),S=[x,y];a&&S.push(a),C&&S.push(s);var I=this.compileAndRun(_,S);return d?I.reshape([1,h,f,o.outChannels]):I.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(H().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?Vo(s,!1):null,h=new Qu(a,c,f,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(H().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new Qu(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new Km(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new qm(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?Vo(u,l):null,h=[o,a],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(n=new ec(i,d,f,p),this.compileAndRun(n,h)):(n=new Zu(i,d,f,p),this.compileAndRun(n,h))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return H().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new ec(o),this.compileAndRun(a,[e,n])):(a=new Zu(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new Jm(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new Ym(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new Qm(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new $m(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new Xm(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new oi(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new oi(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new oi(a,"max",!0),s=this.compileAndRun(i,[n]),u=new xg(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new Pm(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return ys(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new ai(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new Om(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new ai(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new ai(a,"max",!0),s=this.compileAndRun(i,[n]),u=new bg(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!so(e.shape,n)&&(o.texture===null||!so(o.shape,n))){var a=this.packedReshape(e,n);return F.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return ga(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Tg(e.shape,n,o,a):new Dg(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new kg(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new Ng(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new Ag(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:Wn(e),s=i.shape[0],u=i.shape[1],c=new wg(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new Cg(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new og(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return la("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),bs(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new Zm(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){k(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),h=new rg(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,n,o){return df(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=yo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return ga(bt([]),o);var p=$(0),v=new oc(s,i,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=yo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new oc(u,s,e.rank,n.rank,c,[l,1],!1);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new nc(cg,e.shape,n),i=new nc(lg,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ds(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),h=e.reshape([e.size/c,c]),d=new dg(a,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||$r(n))==="string"){var a=fo(o,oe(e));return a.fill(n),F.makeTensor(a,e,o,this)}var i=new fg(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return xs(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return F.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new ty(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Eg(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[mo(e.shape)].concat(go(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[mo(n)].concat(go(n)),s=new Rg(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=ea(i);return n=a?new ng(u):new tg(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===vo.DENSE){var l=uo(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),oe(u.shape)===0)return c.values=Gr(u.dtype,0),u;var f=[],h=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var x=s.texData.get(b.dataId);if(x.texture==null){if(!e.packedInputs&&oe(b.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:x.values};e.packedInputs&&(x.isPacked=!0,x.shape=b.shape)}else if(!!x.isPacked!=!!e.packedInputs)b=x.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),x=s.texData.get(b.dataId);else if(x.isPacked&&!so(x.shape,b.shape)){var w=b,C=b.shape;b.shape=x.shape,b=s.packedReshape(b,C),f.push(b),x=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:x,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,x,w){var C="";x.concat(w).forEach(function(S){var I=S.texData!=null&&S.texData.slice!=null&&S.texData.slice.flatOffset>0,T=S.isUniform?"uniform":S.texData.texShape;C+=S.shape+"_"+T+"_"+I});var R=b.userCode,_=b.constructor.name;return _+="_"+C+"_"+R}(e,h,p),m=this.getAndSaveBinary(v,function(){return function(b,x,w,C){var R=x.userCode,_=w.map(function(W,U){var G={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(G.flatOffset=W.texData.slice.flatOffset),{name:x.variableNames[U],shapeInfo:G}}),S=_.map(function(W){return W.shapeInfo}),I={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},T=Dm(_,I,R,x.packedInputs),D=b.createProgram(T),O=null,P=b.getUniformLocation(D,"NAN",!1);H().getNumber("WEBGL_VERSION")===1&&(O=b.getUniformLocation(D,"INFINITY",!1));for(var M={},L=0;L<x.variableNames.length;L++){var B=x.variableNames[L];M[B]=b.getUniformLocation(D,B,!1),M["offset"+B]=b.getUniformLocation(D,"offset"+B,!1)}return{program:x,source:T,webGLProgram:D,uniformLocations:M,inShapeInfos:S,outShapeInfo:I,infLoc:O,nanLoc:P}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(b,x,w,C,R){rc(x.inShapeInfos,w),rc([x.outShapeInfo],[C]);var _=C.texData.texture,S=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(_,S[0],S[1]):b.setOutputMatrixTexture(_,S[0],S[1]),b.setProgram(x.webGLProgram),H().getNumber("WEBGL_VERSION")===1&&x.infLoc!==null&&b.gl.uniform1f(x.infLoc,1/0),x.nanLoc!==null&&b.gl.uniform1f(x.nanLoc,NaN),w.forEach(function(I,T){var D=x.program.variableNames[T],O=x.uniformLocations[D],P=x.uniformLocations["offset"+D];if(O!=null)if(I.isUniform)if(oe(I.shape)<2)b.gl.uniform1f(O,I.uniformValues[0]);else{var M=I.uniformValues;M instanceof Float32Array||(M=new Float32Array(M)),b.gl.uniform1fv(O,M)}else I.texData.slice!=null&&P!=null&&b.gl.uniform1i(P,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,O,T)}),R!=null&&R(b,x.webGLProgram),b.executeProgram()}(this.gpgpu,m,h,p,a),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!H().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return F.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Q(function(){if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=H().getBool("DEBUG");H().set("DEBUG",!1);var o=e.abs($(1e-8)).dataSync()[0];if(H().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=sn());var d=o.texShape;if(d==null&&(d=Vl(a,l),o.texShape=d),s!=null){var p=ea(a),v=void 0,m=d[1],g=d[0],y=s instanceof Uint8Array;l?(m=(n=So(d[0],d[1]))[0],g=n[1],v=new ug(p,[g,m],y)):v=new sg(p,[g,m],y);var b=this.makeTensorInfo([g,m],i);this.texData.get(b.dataId).usage=y?Ht.PIXELS:Ht.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),m,g,s);var x=this.runWebGLProgram(v,[b],i,null,!0),w=this.texData.get(x.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(x.dataId),o.values=null,h&&(this.uploadWaitMs+=sn()-f)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*rs(n)},t}(ff);wl()&&F.registerBackend("webgl",function(){return new Gf},2);var ry=A({square_:function(r){var t=E(r,"x","square"),e=[t];return F.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),wo="SquaredDifference",jf=A({squaredDifference_:function(r,t){var e,n=E(r,"a","squaredDifference"),o=E(t,"b","squaredDifference");e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return F.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=$(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},wo,{},i,[])}}),oy=A({abs_:function(r){var t=E(r,"x","abs");return t.dtype==="complex64"?F.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):F.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),ay=A({acos_:function(r){var t=E(r,"x","acos");return F.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict($(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),iy=A({acosh_:function(r){var t=E(r,"x","acosh");return F.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),sy=A({asin_:function(r){var t=E(r,"x","asin");return F.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict($(1).sub(o.toFloat().square()).sqrt())}}})}}),uy=A({asinh_:function(r){var t=E(r,"x","asinh");return F.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict($(1).add(o.toFloat().square()).sqrt())}}})}}),cy=A({atan_:function(r){var t=E(r,"x","atan");return F.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),ly=A({atanh_:function(r){var t=E(r,"x","atanh");return F.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div($(1).sub(o.toFloat().square()))}}})}}),fy=A({ceil_:function(r){var t=E(r,"x","ceil");return F.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),Is=A({clipByValue_:function(r,t,e){var n=E(r,"x","clipByValue");k(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return F.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Ae(i))}}},"ClipByValue",a,o)}}),hy=A({cos_:function(r){var t=E(r,"x","cos"),e=[t];return F.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),dy=A({cosh_:function(r){var t=E(r,"x","cosh");return F.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),py=A({erf_:function(r){var t=E(r,"x","erf");return k(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),F.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ui=A({exp_:function(r){var t=E(r,"x","exp");return F.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),vy=A({expm1_:function(r){var t=E(r,"x","expm1");return F.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),my=A({floor_:function(r){var t=E(r,"x","floor");return F.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),gy=A({log_:function(r){var t=E(r,"x","log"),e=[t];return F.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),yy=A({log1p_:function(r){var t=E(r,"x","log1p");return F.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),xy=A({logSigmoid_:function(r){var t=E(r,"x","logSigmoid");return F.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),ya=A({neg_:function(r){var t=E(r,"x","neg"),e=[t];return F.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),by=A({reciprocal_:function(r){var t=E(r,"x","reciprocal");return F.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),wy=A({round_:function(r){var t=E(r,"x","round");return F.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),qf=A({rsqrt_:function(r){var t=E(r,"x","rsqrt"),e=[t];return F.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Kf=A({sigmoid_:function(r){var t=E(r,"x","sigmoid");return F.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul($(1).sub(o)))}}},"Sigmoid")}}),Cy=A({sign_:function(r){var t=E(r,"x","sign");return F.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),Ey=A({isNaN_:function(r){var t=E(r,"x","isNaN");return F.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),_y=A({isInf_:function(r){var t=E(r,"x","isInf");return F.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),Sy=A({isFinite_:function(r){var t=E(r,"x","isFinite");return F.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return Ae(e)}}})}}),Iy=A({sin_:function(r){var t=E(r,"x","sin"),e=[t];return F.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),Ry=A({sinh_:function(r){var t=E(r,"x","sinh");return F.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),ky=A({softplus_:function(r){var t=E(r,"x","softplus");return F.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Dy=A({sqrt_:function(r){var t=E(r,"x","sqrt");return F.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Ty=A({step_:function(r,t){t===void 0&&(t=0);var e=E(r,"x","step");return F.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return Ae(n)}}})}}),Ay=A({tan_:function(r){var t=E(r,"x","tan");return F.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Ny=A({tanh_:function(r){var t=E(r,"x","tanh");return F.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return $(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Xf(r,t,e,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),k(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),k(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),k(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&k(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&k(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Ro(u,c,l,s,i,a)}function $f(r,t,e,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),k(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),k(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),k(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&k(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&k(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Ro(u,c,l,s,i,a)}function Yf(r,t,e,n,o,a){var i,s,u=E(r,"x","batchNorm"),c=E(t,"mean","batchNorm"),l=E(e,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),k(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),k(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),k(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&k(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&k(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Ro(u,c,l,s,i,a)}function Ro(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=E(r,"x","batchNorm"),l=E(t,"mean","batchNorm"),f=E(e,"variance","batchNorm");o!=null&&(i=E(o,"scale","batchNorm")),n!=null&&(s=E(n,"offset","batchNorm")),k(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),k(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),k(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return F.runKernelFunc(function(d,p){var v=d.batchNormalization(u,zo(l),zo(f),a,zo(i),zo(s));return p([c,l,f,i]),v},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var v=p,m=v[0],g=v[1],y=v[2],b=v[3],x=b==null?$(1):b,w=at(g.shape,u.shape),C=[];if(g.rank===1){for(var R=0;R<u.shape.length-1;++R)C.push(u.shape[R]);C.push(1)}var _=m.sub(g),S=d.mul(x),I=qf(y.add($(a))),T=I.mul(I).mul(I).mul($(-.5));return{x:function(){return g.rank===1?d.mul(Lr(I.as4D(1,1,1,g.shape[0]),C)).mul(x).reshape(m.shape):d.mul(I).mul(x).reshape(m.shape)},mean:function(){var D=I.mul($(-1)).mul(S);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},variance:function(){var D=T.mul(_).mul(S);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},scale:function(){var D=_.mul(I),O=d.mul(D);return g.rank===1&&(O=O.sum(w)),O.reshape(g.shape)},offset:function(){var D=d;return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},h).reshape(c.shape)}function zo(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Fa(){Kl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Fy=A({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Fa(),Xf(r,t,e,a,o,n)}}),My=A({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Fa(),$f(r,t,e,a,o,n)}}),Py=A({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Fa(),Yf(r,t,e,a,o,n)}}),Oy=A({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Fa(),Ro(r,t,e,a,o,n)}}),Jf=A({batchNorm_:Ro}),By=A({batchNorm2d_:Xf}),Ly=A({batchNorm3d_:$f}),Wy=A({batchNorm4d_:Yf}),Ma=A({logicalAnd_:function(r,t){var e=E(r,"a","logicalAnd","bool"),n=E(t,"b","logicalAnd","bool");return Re(e.shape,n.shape),F.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Vy=A({logicalNot_:function(r){var t=E(r,"x","logicalNot","bool");return F.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Qf=A({logicalOr_:function(r,t){var e=E(r,"a","logicalOr","bool"),n=E(t,"b","logicalOr","bool");return Re(e.shape,n.shape),F.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),zy=A({logicalXor_:function(r,t){var e=E(r,"a","logicalXor","bool"),n=E(t,"b","logicalXor","bool");return Re(e.shape,n.shape),Qf(r,t).logicalAnd(Ma(r,t).logicalNot())}}),Er=A({where_:function(r,t,e){var n=E(t,"a","where"),o=E(e,"b","where"),a=E(r,"condition","where","bool");return Be(n.shape,o.shape,"Error in where: "),a.rank===1?k(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Be(a.shape,o.shape,"Error in where: "),F.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return Ae(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Zf=function(r){return ne(this,void 0,void 0,function(){var t,e,n;return re(this,function(o){switch(o.label){case 0:return[4,(t=E(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Cs(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},Ie=A({add_:function(r,t){var e,n=E(r,"a","add"),o=E(t,"b","add");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=at(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=at(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Uy=A({addN_:function(r){k(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),k(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return E(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!ot(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return F.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),Hy=A({addStrict_:function(r,t){var e=E(r,"a","addStrict"),n=E(t,"b","addStrict");return Be(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Gy=A({atan2_:function(r,t){var e,n=E(r,"a","atan2"),o=E(t,"b","atan2");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ie(u.square(),c.square()),f=i.mul(c.div(l)),h=at(u.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=Ie(u.square(),c.square()),f=ya(i.mul(u.div(l))),h=at(c.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),un=A({div_:function(r,t){var e,n=E(r,"a","div"),o=E(t,"b","div");if(e=He(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return eh(n,o);var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=at(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=at(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),jy=A({divNoNan_:function(r,t){var e,n=E(r,"a","div"),o=E(t,"b","div");n=(e=He(n,o))[0],o=e[1];var a=un(n,o),i=Ae(a),s=o.equal(i);return Er(s,i,a)}}),qy=A({divStrict_:function(r,t){var e=E(r,"a","div"),n=E(t,"b","div");return Be(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),eh=A({floorDiv_:function(r,t){var e,n=E(r,"a","floorDiv"),o=E(t,"b","floorDiv");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=at(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=at(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Rs=A({maximum_:function(r,t){var e,n=E(r,"a","maximum"),o=E(t,"b","maximum");return e=He(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),Re(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Ky=A({maximumStrict_:function(r,t){var e=E(r,"a","maximumStrict"),n=E(t,"b","maximumStrict");return Be(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),th=A({minimum_:function(r,t){var e,n=E(r,"a","minimum"),o=E(t,"b","minimum");return e=He(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),Re(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Xy=A({minimumStrict_:function(r,t){var e=E(r,"a","minimumStrict"),n=E(t,"b","minimumStrict");return Be(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),$y=A({mod_:function(r,t){var e,n=E(r,"a","mod"),o=E(t,"b","mod");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=at(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=at(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Yy=A({modStrict_:function(r,t){var e=E(r,"a","modStrict"),n=E(t,"b","modStrict");return Be(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Rt=A({mul_:function(r,t){var e,n=E(r,"a","mul"),o=E(t,"b","mul");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=at(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=at(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),Jy=A({mulStrict_:function(r,t){var e=E(r,"a","mul"),n=E(t,"b","mul");return Be(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),xa=A({pow_:function(r,t){var e,n=E(r,"base","pow"),o=E(t,"exp","pow");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape),i=[n,o];return F.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub($(1))))),p=at(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Ae(c)),p=s.mul(f.mul(d)),v=at(l.shape,a);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Qy=A({powStrict_:function(r,t){return Be(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Zy=A({squaredDifferenceStrict_:function(r,t){var e=E(r,"a","squaredDifferenceStrict"),n=E(t,"b","squaredDifferenceStrict");return Be(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),ft=A({sub_:function(r,t){var e,n=E(r,"a","sub"),o=E(t,"b","sub");e=He(n,o),n=e[0],o=e[1];var a=Re(n.shape,o.shape);return F.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=at(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=at(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),e0=A({subStrict_:function(r,t){var e=E(r,"a","subStrict"),n=E(t,"b","subStrict");return Be(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),nh=A({equal_:function(r,t){var e,n=E(r,"a","equal"),o=E(t,"b","equal");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),t0=A({equalStrict_:function(r,t){var e=E(r,"a","equalStrict"),n=E(t,"b","equalStrict");return Be(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),n0=A({greater_:function(r,t){var e,n=E(r,"a","greater"),o=E(t,"b","greater");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),rh=A({greaterEqual_:function(r,t){var e,n=E(r,"a","greaterEqual"),o=E(t,"b","greaterEqual");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return Ae(s)},b:function(){return Ae(u)}}},"GreaterEqual")}}),r0=A({greaterEqualStrict_:function(r,t){var e=E(r,"a","greaterEqualStrict"),n=E(t,"b","greaterEqualStrict");return Be(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),o0=A({greaterStrict_:function(r,t){var e=E(r,"a","greaterStrict"),n=E(t,"b","greaterStrict");return Be(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),a0=A({less_:function(r,t){var e,n=E(r,"a","less"),o=E(t,"b","less");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),i0=A({lessEqual_:function(r,t){var e,n=E(r,"a","lessEqual"),o=E(t,"b","lessEqual");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),s0=A({lessEqualStrict_:function(r,t){var e=E(r,"a","lessEqualStrict"),n=E(t,"b","lessEqualStrict");return Be(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),u0=A({lessStrict_:function(r,t){var e=E(r,"a","lessStrict"),n=E(t,"b","lessStrict");return Be(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),c0=A({notEqual_:function(r,t){var e,n=E(r,"a","notEqual"),o=E(t,"b","notEqual");return e=He(n,o),n=e[0],o=e[1],Re(n.shape,o.shape),F.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),l0=A({notEqualStrict_:function(r,t){var e=E(r,"a","notEqualStrict"),n=E(t,"b","notEqualStrict");return Be(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function dc(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function pc(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var ks=A({gather_:function(r,t,e){e===void 0&&(e=0);var n=E(r,"x","gather"),o=E(t,"indices","gather","int32");e=it(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(n,o,e);return F.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=dc(0,h),m=dc(h+1,h+1+p),g=pc([f,[l],d]),y=i.reshape(g),b=u.reshape([l]),x=pc([[h],v,m]),w=y.transpose(x),C=oh(w,b,n.shape[e]),R=ka(x);return C=C.transpose(R)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),oh=A({unsortedSegmentSum_:function(r,t,e){var n=E(r,"x","unsortedSegmentSum"),o=E(t,"segmentIds","unsortedSegmentSum","int32");return k(Ke(e),function(){return"numSegments must be of dtype int"}),F.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Rs(c,Ae(c)),f=ks(u,l),h=rh(c,$(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Jt(h,p+1);h=Ma(h,Jr(f.shape,"bool"));var v=Ae(f);return Er(h,f,v)}(a,s)}}})}}),f0=function(r,t,e){return ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v;return re(this,function(m){switch(m.label){case 0:for(n=E(r,"tensor","boolMask"),o=E(t,"mask","boolMask","bool"),a=e==null?0:e,i=o.rank,s=n.shape,k(i>0,function(){return"mask cannot be scalar"}),Be(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),h=o.reshape([-1]),[4,Zf(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=ks(f,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function ah(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),k(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),k(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),k(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),k(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];k(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),k(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&k(Ke(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Na(a),d=ir(s,e.shape,n,1,o,i,!1,h),p=F.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],y=m[1];return{dy4D:function(){return Zt(v,g,n,o,a,1,i)},filter:function(){return Ds(v,y,g.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function si(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ih(r,t,e,n,o){k(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];k(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),k(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),k(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),k(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),k(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=bo(a,e.shape,n,1,o),f=F.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var h0=A({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=E(r,"x","conv1d"),u=E(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),k(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),k(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&k(Ke(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),k(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),k(Nt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),k(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Zt(h,f,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Zt=A({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=E(r,"x","conv2d"),u=E(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),k(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),k(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&k(Ke(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];k(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),k(Nt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var h=Na(o),d=ir(c.shape,u.shape,e,a,n,i,!1,h),p=[u,c],v=F.runKernelFunc(function(m,g){var y=m.conv2d(c,u,d);return g([u,c]),y},{x:c,filter:u},function(m,g){var y=g,b=y[0],x=y[1];return k(Cr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return sh(x.shape,m,b,e,n,o)},filter:function(){return Ds(x,m,b.shape,e,n,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),d0=A({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=E(r,"x","conv3d"),s=E(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),k(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),k(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),k(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),k(function(h,d){return si(h)||si(d)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),k(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=bo(u.shape,s.shape,e,a,n),f=F.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){k(si(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],v=d[1];return{x:function(){return ih(p.shape,h,v,e,n)},$filter:function(){return function(m,g,y,b,x){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),k(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),k(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),k(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),k(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),k(C.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+y[4]+")."});var R=bo(w.shape,y,b,1,x);return F.runKernelFunc(function(_){return _.conv3dDerFilter(w,C,R)},{x5D:w,dy5D:C})}(p,h,v.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Ds=A({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),k(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),k(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),k(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];k(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),k(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&k(Ke(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Na(a),h=ir(s.shape,e,n,1,o,i,!1,f);return F.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),sh=A({conv2dDerInput_:ah}),Pa=A({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=E(r,"x","depthwiseConv2d"),u=E(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),k(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),k(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),k(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),k(Nt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&k(Ke(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=ir(c.shape,u.shape,e,a,n,i,!0),h=[c,u],d=F.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(p,v){k(Cr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var m=v[0],g=v[1];return{x:function(){return uh(m.shape,p,g,f)},filter:function(){return ch(m,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),uh=A({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=F.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),ch=A({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),F.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Ts=A({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=E(r,"x","separableConv2d"),u=E(t,"depthwiseFilter","separableConv2d"),c=E(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),k(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),k(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),k(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),k(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];k(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=Pa(l,u,n,o,i,a),v=Zt(p,c,1,"valid",i);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),p0=A({conv2dTranspose_:function(r,t,e,n,o,a){return ah(e,E(r,"x","conv2dTranspose"),E(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),v0=A({conv3dTranspose_:function(r,t,e,n,o){return ih(e,E(r,"x","conv3dTranspose"),E(t,"filter","conv3dTranspose"),n,o)}}),Oa=A({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=E(r,"a","matMul"),i=E(t,"b","matMul");o=He(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),h=i.shape.slice(0,-2),d=oe(f),p=oe(h);k(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),k(ot(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),k(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var v=a.shape.slice(0,-2).concat([c,l]),m=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),y={transposeA:e,transposeB:n};return F.runKernelFunc(function(b,x){var w=b.batchMatMul(m,g,e,n);return x([m,g]),w},{a:m,b:g},function(b,x){var w=x,C=w[0],R=w[1];return e||n?!e&&n?{a:function(){return b.matMul(R,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!n?{a:function(){return R.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return R.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(R,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",y).reshape(v)}}),m0=A({dot_:function(r,t){var e=E(r,"t1","dot"),n=E(t,"t2","dot");k(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return k(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),g0=A({outerProduct_:function(r,t){var e=E(r,"v1","outerProduct"),n=E(t,"v2","outerProduct");return k(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),ko=A({reverse_:function(r,t){var e=E(r,"x","reverse");if(e.rank===0)return e.clone();var n=it(t,e.shape);return F.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),y0=A({reverse1d_:function(r){var t=E(r,"x","reverse");return k(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),ko(t,0)}}),x0=A({reverse2d_:function(r,t){var e=E(r,"x","reverse");return k(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),ko(e,t)}}),b0=A({reverse3d_:function(r,t){var e=E(r,"x","reverse");return k(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),ko(e,t)}}),w0=A({reverse4d_:function(r,t){var e=E(r,"x","reverse");return k(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),ko(e,t)}});function lh(r,t,e,n,o,a){var i=E(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),k(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),k(Nt(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&k(Ke(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=qr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&ot(c.inShape,c.outShape))return i.clone();var l=[s],f=F.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,y,b,x,w,C,R){var _=E(m,"dy","maxPoolBackprop"),S=E(g,"input","maxPoolBackprop"),I=E(y,"output","maxPoolBackprop");k(S.rank===_.rank,function(){return"Rank of input ("+S.rank+") does not match rank of dy ("+_.rank+")"}),w==null&&(w=[1,1]),k(Nt(x,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),k(_.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+_.rank+"."}),k(S.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+S.rank+"."}),R!=null&&k(Ke(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var T=qr(S.shape,b,x,w,C,R);return F.runKernelFunc(function(D){return D.maxPoolBackprop(_,S,I,T)},{$dy:_,$input:S})}(h,p,v,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function fh(r,t,e,n,o,a){var i=E(r,"x","avgPool","float32");n==null&&(n=[1,1]),k(Nt(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),k(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&k(Ke(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=qr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&ot(c.inShape,c.outShape))return i.clone();var l=F.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,m,g){var y=E(h,"dy","avgPoolBackprop"),b=E(d,"input","avgPoolBackprop");k(b.rank===y.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+y.rank+")"}),m==null&&(m=[1,1]),k(Nt(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var x=b,w=y,C=!1;b.rank===3&&(C=!0,x=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),k(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),k(x.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+x.rank+"."});var R=qr(x.shape,p,v,m,g),_=F.runKernelFunc(function(S){return S.avgPoolBackprop(w,x,R)},{dy4D:w,input4D:x});return C?_.as3D(_.shape[1],_.shape[2],_.shape[3]):_}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var dt=A({maxPool_:function(r,t,e,n,o){return lh(r,t,e,1,n,o)}}),Do=A({avgPool_:function(r,t,e,n,o){return fh(r,t,e,1,n,o)}}),C0=A({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=E(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),k(Nt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=qr(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(x,w){var C=x.map(function(S,I){return S+(S-1)*(w[I]-1)}).map(function(S){return S-1}),R=C.map(function(S){return Math.floor(S/2)}),_=C.map(function(S,I){return S-R[I]});return C.map(function(S,I){return[R[I],_[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(x,w,C){var R=C.map(function(P){return P[0]}),_=C.map(function(P){return P[1]}),S=x.concat(R,_),I=w.map(function(P,M){return(P-S[M]%P)%P}),T=_.map(function(P,M){return P+I[M]}),D=w.map(function(P,M){return[R[M],T[M]]}),O=w.map(function(P,M){return[0,I[M]]});return[D,O]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?n:"valid",g=h?s:ef(s,f,p),y=(e==="avg"?function(){return fh(g,t,a,1,m)}:function(){return lh(g,t,a,1,m)})(),b=h?y:Jl(y,f,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),E0=A({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=E(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),k(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),k(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),k(Nt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&k(Ke(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=xo(u.shape,t,e,i,n,o,a),f=F.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,y,b,x,w,C,R){var _=E(m,"dy","maxPool3dBackprop"),S=E(g,"input","maxPool3dBackprop"),I=E(y,"output","maxPool3dBackprop"),T=_,D=S,O=I,P=!1;S.rank===4&&(P=!0,T=_.as5D(1,_.shape[0],_.shape[1],_.shape[2],_.shape[3]),D=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),O=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),k(T.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+T.rank+"."}),k(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),k(O.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+O.rank+"."}),w==null&&(w=[1,1,1]),k(Nt(x,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),R!=null&&k(Ke(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var M=xo(D.shape,b,x,w,C,R),L=F.runKernelFunc(function(B){return B.maxPool3dBackprop(T,D,O,M)},{dy5D:T,input5D:D});return P?L.as4D(L.shape[1],L.shape[2],L.shape[3],L.shape[4]):L}(h,p,v,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),_0=A({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=E(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),k(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),k(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),k(Nt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&k(Ke(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=xo(u.shape,t,e,i,n,o,a),f=F.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,m,g,y,b){var x=E(d,"dy","avgPool3dBackprop"),w=E(p,"input","avgPool3dBackprop"),C=x,R=w,_=!1;w.rank===4&&(_=!0,C=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3]),R=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),k(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),k(R.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+R.rank+"."}),g==null&&(g=[1,1,1]),k(Nt(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),b!=null&&k(Ke(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+y+"."});var S=xo(R.shape,v,m,g,y,b),I=F.runKernelFunc(function(T){return T.avgPool3dBackprop(C,R,S)},{dy5D:C,input5D:R});return _?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),kn=A({slice_:function(r,t,e){var n,o,a=E(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){k(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(k(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),sf(a,n,o);var i=a.shape,s={begin:n,size:o};return F.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),S0=A({slice1d_:function(r,t,e){var n=E(r,"x","slice1d");return k(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),kn(n,[t],[e])}}),I0=A({slice2d_:function(r,t,e){var n=E(r,"x","slice2d");return k(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),kn(n,t,e)}}),hh=A({slice3d_:function(r,t,e){var n=E(r,"x","slice3d");return k(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),kn(n,t,e)}}),R0=A({slice4d_:function(r,t,e){var n=E(r,"x","slice4d");return k(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),kn(n,t,e)}});function dh(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(At(t.shape,n))),r.rank<e.rank&&(r=r.reshape(At(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var k0=A({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","all","bool"),o=it(t,n.shape),a=o,i=pn(a,n.rank);i!=null&&(n=n.transpose(i),a=vn(a.length,n.rank));var s=F.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),D0=A({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","any","bool"),o=it(t,n.shape),a=o,i=pn(a,n.rank);i!=null&&(n=n.transpose(i),a=vn(a.length,n.rank));var s=F.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),T0=A({argMax_:function(r,t){t===void 0&&(t=0);var e=E(r,"x","argMax");t==null&&(t=0);var n=it(t,e.shape),o=pn(n,e.rank);o!=null&&(e=e.transpose(o),n=vn(n.length,e.rank));var a={axis:n[0]},i=[e];return F.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return Ae(c)}}},"ArgMax",a,i)}}),A0=A({argMin_:function(r,t){t===void 0&&(t=0);var e=E(r,"x","argMin");t==null&&(t=0);var n=it(t,e.shape),o=pn(n,e.rank);return o!=null&&(e=e.transpose(o),n=vn(n.length,e.rank)),F.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return Ae(s)}}})}}),N0=A({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","logSumExp"),o=it(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),Ba=A({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","max"),o=n,a=it(t,n.shape),i=a,s=pn(i,n.rank);s!=null&&(n=n.transpose(s),i=vn(i.length,n.rank));var u=[n],c=F.runKernelFunc(function(f,h){var d=f.max(n,i);return h([o,d]),d},{x:n},function(f,h){return dh(f,h[1],h[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=At(c.shape,a);c=c.reshape(l)}return c}}),F0=A({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","mean"),o=it(t,n.shape),a=oe(xt(n.shape,o)[1]);return Aa(function(i){var s=$(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Jr(i.shape,"float32")).div(a)}}})(n)}}),M0=A({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","min"),o=n,a=it(t,n.shape),i=a,s=pn(i,n.rank);s!=null&&(n=n.transpose(s),i=vn(i.length,n.rank));var u=[n],c=F.runKernelFunc(function(f,h){var d=f.min(n,i);return h([o,d]),d},{x:n},function(f,h){return dh(f,h[1],h[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=At(c.shape,a);c=c.reshape(l)}return c}}),P0=A({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=it(t,(r=E(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=At(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),ph=A({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=it(t,n.shape);return Aa(function(a){var i=pn(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=vn(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(Jr(a.shape,"float32"))},l={axes:s},f=F.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=At(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(n)}}),O0=A({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=E(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=it(t,n.shape),a=pn(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=vn(i.length,n.rank));var u=F.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=At(u.shape,o);u=u.reshape(c)}return u}}),vh=A({elu_:function(r){var t=E(r,"x","elu");return F.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return F.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),B0=A({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=E(r,"x","leakyRelu");return Rs($(t).mul(e),e)}}),mh=A({prelu_:function(r,t){var e=E(r,"x","prelu"),n=E(t,"alpha","prelu");return F.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Er(u,o,o.mul(s))},alpha:function(){var c=Er(u,Ae(o),o.mul(i)),l=at(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),qe=A({relu_:function(r){var t=E(r,"x","relu");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),gh=A({relu6_:function(r){var t=E(r,"x","relu6");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),L0=A({selu_:function(r){var t=E(r,"x","selu");return F.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater($(0)),i=$(_s),s=$(Ss),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return Er(a,u,c)}}})}}),or=A({transpose_:function(r,t){var e=E(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),k(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){k(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return F.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=ka(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),W0=A({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=E(r,"x","localResponseNormalization");k(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),k(Ke(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=F.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return F.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),yh=A({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow($(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=E(r,"x","norm"),t,e),a=o.shape;if(n){var i=it(e,r.shape);a=At(o.shape,i)}return o.reshape(a)}}),V0=A({basicLSTMCell_:function(r,t,e,n,o,a){var i=E(r,"forgetBias","basicLSTMCell"),s=E(t,"lstmKernel","basicLSTMCell"),u=E(e,"lstmBias","basicLSTMCell"),c=E(n,"data","basicLSTMCell"),l=E(o,"c","basicLSTMCell"),f=E(a,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),y=h.slice([0,2*p],v),b=h.slice([0,3*p],v),x=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=x.tanh().mulStrict(b.sigmoid());return[x,w]}}),z0=A({multiRNNCell_:function(r,t,e,n){for(var o=E(t,"data","multiRNNCell"),a=fa(e,"c","multiRNNCell"),i=fa(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),U0=A({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=E(r,"v","movingAverage"),i=E(t,"x","movingAverage"),s=E(e,"decay","movingAverage");bl(a,i),k(ot(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=$(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){k(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=E(n,"step","movingAverage");l=l.div(u.sub(xa(s,f)))}return a.add(l)}}),H0=A({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=E(r,"x","stridedSlice"),l=Wi(s),f=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=uf(o,t,n,c.shape,h),e[h]=cf(a,e,n,c.shape,h),n[h]=n[h]||1;var d=Wi(u);d.forEach(function(m){e[m]=t[m]+1,n[m]=1});var p=Ta(t,e,n),v=p.filter(function(m,g){return d.indexOf(g)===-1});return n.every(function(m){return m===1})?kn(c,t,p).reshape(v):F.runKernelFunc(function(m){return m.stridedSlice(c,t,e,n)},{$x:c}).reshape(v)}}),G0=A({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=E(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=F.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),j0=A({scatterND_:function(r,t,e){var n=E(r,"indices","scatterND","int32"),o=E(t,"updates","scatterND");return af(o,n,e),F.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),As=A({fft_:function(r){k(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return F.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ba=A({ifft_:function(r){k(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return F.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Ns=A({rfft_:function(r,t){k(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(We(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=yt(e,u).as2D(o,n),l=As(c),f=Math.floor(n/2)+1,h=Qt(l),d=_n(l),p=h.split([f,n-f],h.shape.length-1),v=d.split([f,n-f],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,yt(p[0],v[0]).reshape(m)}}),xh=A({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ba(n);return Qt(o)}var a=[e,2*(t-1)],i=Qt(r).as2D(e,t),s=_n(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul($(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=yt(l,f).as2D(a[0],a[1]),o=ba(n),Qt(o)}}),q0=Object.freeze({fft:As,ifft:ba,rfft:Ns,irfft:xh}),K0=A({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=E(r,"sparseIndices","sparseToDense","int32"),a=E(t,"sparseValues","sparseToDense"),i=E(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),F.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),X0=A({gatherND_:function(r,t){var e=E(t,"indices","gatherND","int32"),n=E(r,"x","gatherND");return F.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),$0=A({diag_:function(r){var t=E(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return F.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),Y0=A({dropout_:function(r,t,e,n){var o=E(r,"x","dropout");if(k(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),k(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof je?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(ot(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=Zl(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function bh(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return rt(o,"float32")}var Fs=A({hannWindow_:function(r){return bh(r,.5,.5)}}),wh=A({hammingWindow_:function(r){return bh(r,.54,.46)}}),Ms=A({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(kn(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=ct([kn(r,a,t-s),In([s],o)]);i.push(u),a+=e}return i.length===0?tr([],[0,t]):ct(i).as2D(i.length,t)}}),Ch=A({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Fs),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Ms(r,t,e),s=Rt(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(Ns(s.slice([c,0],[1,t]),n));return ct(u)}}),J0=Object.freeze({hannWindow:Fs,hammingWindow:wh,frame:Ms,stft:Ch}),It,Q0=function(r,t,e){return e===void 0&&(e=1),ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v,m;return re(this,function(g){switch(g.label){case 0:return n=E(r,"predictions","inTopK"),o=E(t,"targets","inTopK"),k(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),k(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),Be(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],k(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=Gr("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(y,b){return b.value-y.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,bt(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(It||(It={}));var Z0=A({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=It.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","absoluteDifference"),a=E(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=E(e,"weights","absoluteDifference")),Be(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Vn(s,i,n)}}),Vn=A({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=It.SUM_BY_NONZERO_WEIGHTS);var n=E(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=E(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===It.NONE)return a;if(e===It.SUM)return a.sum();if(e===It.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div($(i)):s}if(e===It.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div($(n.size));var u=o.mul(Jr(n.shape)).notEqual($(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),ex=A({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=It.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","cosineDistance"),i=E(t,"predictions","cosineDistance"),s=null;n!=null&&(s=E(n,"weights","cosineDistance")),Be(a.shape,i.shape,"Error in cosineDistance: ");var u=$(1).sub(a.mul(i).sum(e,!0));return Vn(u,s,o)}}),tx=A({hingeLoss_:function(r,t,e,n){n===void 0&&(n=It.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","hingeLoss"),a=E(t,"predictions","hingeLoss"),i=null;e!=null&&(i=E(e,"weights","hingeLoss")),Be(o.shape,a.shape,"Error in hingeLoss: ");var s=$(1);o=$(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Vn(u,i,n)}}),nx=A({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=It.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","huberLoss"),i=E(t,"predictions","huberLoss"),s=null;e!=null&&(s=E(e,"weights","huberLoss")),Be(a.shape,i.shape,"Error in huberLoss: ");var u=$(n),c=i.sub(a).abs(),l=th(c,u),f=c.sub(l),h=$(.5).mul(l.square()).add(u.mul(f));return Vn(h,s,o)}}),rx=A({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=It.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"labels","logLoss"),i=E(t,"predictions","logLoss"),s=null;e!=null&&(s=E(e,"weights","logLoss")),Be(a.shape,i.shape,"Error in logLoss: ");var u=$(1),c=$(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return Vn(l,s,o)}}),ox=A({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=It.SUM_BY_NONZERO_WEIGHTS);var o=E(r,"labels","meanSquaredError"),a=E(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=E(e,"weights","meanSquaredError")),Be(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Vn(s,i,n)}}),ax=A({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=It.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"multiClassLabels","sigmoidCrossEntropy"),i=E(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=E(e,"weights","sigmoidCrossEntropy")),Be(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=$(n),c=$(1),l=$(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=E(h,"labels","sigmoidCrossEntropyWithLogits"),v=E(d,"logits","sigmoidCrossEntropyWithLogits");Be(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),y=v.abs().neg().exp().log1p();return m.sub(g).add(y)}(a,i);return Vn(f,s,o)}}),ix=A({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=It.SUM_BY_NONZERO_WEIGHTS);var a=E(r,"onehotLabels","softmaxCrossEntropy"),i=E(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=E(e,"weights","softmaxCrossEntropy")),Be(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=$(n),c=$(1),l=$(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return Aa(function(v,m,g){var y=m.logSumExp([p],!0),b=m.toFloat().sub(y);return g([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(x,w){var C=w[0],R=w[1],_=At(x.shape,[p]);return[x.reshape(_).mul(C.toFloat().sub(R.exp())),x.reshape(_).mul(R.exp().sub(C.toFloat()))]}}})(h,d)}(a,i);return Vn(f,s,o)}}),sx=Object.freeze({get Reduction(){return It},absoluteDifference:Z0,computeWeightedLoss:Vn,cosineDistance:ex,hingeLoss:tx,huberLoss:nx,logLoss:rx,meanSquaredError:ox,sigmoidCrossEntropy:ax,softmaxCrossEntropy:ix});function vc(r,t){return t===void 0&&(t=!1),F.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Ql(e),a=r.clone(),i=tr([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var h,d=a,p=s,v=o;h=F.tidy(function(){var m=a.slice([f,f],[e-f,1]),g=m.norm(),y=a.slice([f,f],[1,1]),b=tr([[-1]]).where(y.greater(0),tr([[1]])),x=y.sub(b.mul(g)),w=m.div(x);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(x).div(g).neg(),R=a.slice([f,0],[e-f,n]),_=C.mul(s);if(f===0)a=R.sub(_.matMul(s.transpose().matMul(R)));else{var S=R.sub(_.matMul(s.transpose().matMul(R)));a=a.slice([0,0],[f,n]).concat(S,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(_.transpose()));else{var T=I.sub(I.matMul(s).matMul(_.transpose()));o=o.slice([0,0],[e,f]).concat(T,1)}return[s,a,o]}),s=h[0],a=h[1],o=h[2],Lt([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var ux=A({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=E(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=ha(0,i,1,"int32").reshape([-1,1]),c=ha(0,s,1,"int32"),l=ft(u,c),f=Ma(l.lessEqual($(+t,"int32")),l.greaterEqual($(-e,"int32"))),h=We([i,s],n.dtype);return Xt(lt(n.reshape([-1,i,s])).map(function(d){return Er(f,d,h)})).reshape(o)}}),cx=A({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,k(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){k(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=fs(r,r.shape[0],0).map(function(u){return tf(u,[0])});k(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(F.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=ph(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(yh(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?Xt(a,0):a}}),lx=A({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return vc(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=lt(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=vc(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[Xt(o,0).reshape(r.shape),Xt(a,0).reshape(r.shape)]}}),fx=Object.freeze({bandPart:ux,gramSchmidt:cx,qr:lx});function La(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),k(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),k(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),k(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),k(t.rank===1,function(){return"scores must be a 1D tensor"}),k(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),k(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var hx=A({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=E(r,"images","resizeBilinear");k(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),k(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return F.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),dx=A({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=E(r,"images","resizeNearestNeighbor");k(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),k(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),k(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return F.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),px=A({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=E(r,"boxes","nonMaxSuppression"),i=E(t,"scores","nonMaxSuppression"),s=La(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return F.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),vx=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return re(this,function(h){switch(h.label){case 0:return a=E(r,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),s=La(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=bs(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},mx=A({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=E(r,"boxes","nonMaxSuppression"),s=E(t,"scores","nonMaxSuppression"),u=La(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=F.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),gx=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),ne(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return re(this,function(d){switch(d.label){case 0:return i=E(r,"boxes","nonMaxSuppressionAsync"),s=E(t,"scores","nonMaxSuppressionAsync"),u=La(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=ws(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,h]}})})},yx=A({cropAndResize_:function(r,t,e,n,o,a){var i=E(r,"image","cropAndResize"),s=E(t,"boxes","cropAndResize","float32"),u=E(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return k(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),k(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),k(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),k(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),k(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),k(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),F.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Ps=Object.freeze({resizeBilinear:hx,resizeNearestNeighbor:dx,nonMaxSuppression:px,nonMaxSuppressionAsync:vx,nonMaxSuppressionWithScore:mx,nonMaxSuppressionWithScoreAsync:gx,cropAndResize:yx}),Os=function(r,t){return!(r>0)||t==="linear"},Bs=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Ls=function(r,t){var e=t,n=at(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Ws=function(r,t,e){if(t==="linear")return r;if(t==="relu")return qe(r);if(t==="elu")return vh(r);if(t==="relu6")return gh(r);if(t==="prelu")return mh(r,e);throw new Error("Unknown fused activation "+t+".")},xx=A({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(Os(F.state.gradientDepth,l)===!1){var h=Oa(e,n,a,s);return u!=null&&(h=Ie(h,u)),Ws(h,l,f)}var d=E(e,"a","fused matMul"),p=E(n,"b","fused matMul");t=He(d,p),d=t[0],p=t[1];var v=a?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),x=p.shape.slice(0,-2),w=oe(b),C=oe(x);k(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),k(ot(b,x),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+x+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),k(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var R,_,S=d.shape.slice(0,-2).concat([g,y]),I=a?d.as3D(w,v,g):d.as3D(w,g,v),T=s?p.as3D(C,y,m):p.as3D(C,m,y);u!=null&&Re(S,(R=He(R=E(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(_=E(f,"prelu weights","fused matMul"));var D={a:I,b:T};u!=null&&(D.bias=R),f!=null&&(D.preluActivationWeights=_);var O=[I,T];return F.runKernelFunc(function(P,M){var L=P.fusedBatchMatMul({a:I,b:T,transposeA:a,transposeB:s,bias:R,activation:l,preluActivationWeights:_});return M([I,T,L]),L},D,function(P,M){var L=M[0],B=M[1],W=M[2],U=Bs(P,W,l),G={};return u!=null&&(G={bias:function(){return Ls(R,U)}}),Object.assign(a||s?!a&&s?{a:function(){return U.matMul(B,!1,!1)},b:function(){return U.matMul(L,!0,!1)}}:a&&!s?{a:function(){return B.matMul(U,!1,!0)},b:function(){return L.matMul(U,!1,!1)}}:{a:function(){return B.matMul(U,!0,!0)},b:function(){return U.matMul(L,!0,!0)}}:{a:function(){return U.matMul(B,!1,!0)},b:function(){return L.matMul(U,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},O,[!0]).reshape(S)}}),bx=A({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",Os(F.state.gradientDepth,h)===!1){var p=Zt(t,e,n,o,i,u,c);return l!=null&&(p=Ie(p,l)),Ws(p,h,d)}var v=E(t,"x","conv2d"),m=E(e,"filter","conv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),k(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),k(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&k(Ke(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),k(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),k(Nt(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),k(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,x,w=ir(g.shape,m.shape,n,u,o,c);l!=null&&(b=He(b=E(l,"bias","fused conv2d"),v)[0],Re(w.outShape,b.shape)),d!=null&&(x=E(d,"prelu weights","fused conv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var R=[m,g],_=F.runKernelFunc(function(S,I){var T=S.fusedConv2d({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:x});return I([m,g,T]),T},C,function(S,I){var T=I,D=T[0],O=T[1],P=T[2],M=Bs(S,P,h);k(Cr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var L={};return l!=null&&(L={bias:function(){return Ls(b,M)}}),Object.assign({x:function(){return sh(O.shape,M,D,n,o)},filter:function(){return Ds(O,M,D.shape,n,o)}},L)},"FusedConv2D",{convInfo:w,activation:h},R,[!0]);return y?_.as3D(_.shape[1],_.shape[2],_.shape[3]):_}}),wx=A({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(Os(F.state.gradientDepth,h)===!1){var p=Pa(t,e,n,o,i,u,c);return l!=null&&(p=Ie(p,l)),Ws(p,h,d)}var v=E(t,"x","depthwiseConv2d"),m=E(e,"filter","depthwiseConv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),k(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),k(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),k(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),k(Nt(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&k(Ke(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,x,w=ir(g.shape,m.shape,n,u,o,c,!0);l!=null&&(b=He(b=E(l,"bias","fused conv2d"),v)[0],Re(w.outShape,b.shape)),d!=null&&(x=E(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var R=[m,g],_=F.runKernelFunc(function(S,I){var T=S.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:x});return I([m,g,T]),T},C,function(S,I){k(Cr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var T=I[0],D=I[1],O=I[2],P=Bs(S,O,h),M={};return l!=null&&(M={bias:function(){return Ls(b,P)}}),Object.assign({x:function(){return uh(D.shape,P,T,w)},filter:function(){return ch(D,P,T.shape,w)}},M)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},R,[!0]);return y?_.as3D(_.shape[1],_.shape[2],_.shape[3]):_}}),Cx=Object.freeze({matMul:xx,conv2d:bx,depthwiseConv2d:wx}),Ex=Object.freeze({image:Ps,linalg:fx,losses:sx,spectral:q0,fused:Cx,signal:J0,square:ry,squaredDifference:jf,conv1d:h0,conv2d:Zt,conv3d:d0,depthwiseConv2d:Pa,separableConv2d:Ts,conv2dTranspose:p0,conv3dTranspose:v0,op:A,batchNormalization2d:Fy,batchNormalization3d:My,batchNormalization4d:Py,batchNormalization:Oy,batchNorm:Jf,batchNorm2d:By,batchNorm3d:Ly,batchNorm4d:Wy,booleanMaskAsync:f0,complex:yt,real:Qt,imag:_n,concat:ct,concat1d:Gv,concat2d:jv,concat3d:qv,concat4d:Kv,split:fs,matMul:Oa,dot:m0,outerProduct:g0,reverse:ko,reverse1d:y0,reverse2d:x0,reverse3d:b0,reverse4d:w0,maxPool:dt,avgPool:Do,pool:C0,maxPool3d:E0,avgPool3d:_0,slice:kn,slice1d:S0,slice2d:I0,slice3d:hh,slice4d:R0,abs:oy,acos:ay,acosh:iy,asin:sy,asinh:uy,atan:cy,atanh:ly,ceil:fy,clipByValue:Is,cos:hy,cosh:dy,erf:py,exp:Ui,expm1:vy,floor:my,log:gy,log1p:yy,logSigmoid:xy,neg:ya,reciprocal:by,round:wy,rsqrt:qf,sigmoid:Kf,sign:Cy,isNaN:Ey,isInf:_y,isFinite:Sy,sin:Iy,sinh:Ry,softplus:ky,sqrt:Dy,step:Ty,tan:Ay,tanh:Ny,all:k0,any:D0,argMax:T0,argMin:A0,logSumExp:N0,max:Ba,mean:F0,min:M0,moments:P0,sum:ph,prod:O0,equal:nh,equalStrict:t0,greater:n0,greaterEqual:rh,greaterEqualStrict:r0,greaterStrict:o0,less:a0,lessEqual:i0,lessEqualStrict:s0,lessStrict:u0,notEqual:c0,notEqualStrict:l0,add:Ie,addN:Uy,addStrict:Hy,atan2:Gy,div:un,divNoNan:jy,divStrict:qy,floorDiv:eh,maximum:Rs,maximumStrict:Ky,minimum:th,minimumStrict:Xy,mod:$y,modStrict:Yy,mul:Rt,mulStrict:Jy,pow:xa,powStrict:Qy,squaredDifferenceStrict:Zy,sub:ft,subStrict:e0,elu:vh,leakyRelu:B0,prelu:mh,relu:qe,relu6:gh,selu:L0,logicalAnd:Ma,logicalNot:Vy,logicalOr:Qf,logicalXor:zy,where:Er,whereAsync:Zf,buffer:ye,print:nm,batchToSpaceND:Jl,broadcastTo:rm,cast:om,clone:am,cumsum:im,depthToSpace:sm,expandDims:Jt,eye:Ql,multinomial:um,oneHot:Li,pad:Ir,pad1d:cm,pad2d:lm,pad3d:fm,pad4d:hm,rand:dm,randomNormal:pm,randomGamma:vm,randomUniform:Zl,reshape:cn,spaceToBatchND:ef,squeeze:tf,stack:Xt,tile:Lr,truncatedNormal:mm,unstack:lt,setdiff1dAsync:gm,fill:In,linspace:Hv,ones:Jr,range:ha,scalar:$,tensor:bt,tensor1d:rt,tensor2d:tr,tensor3d:ls,tensor4d:Ot,tensor5d:Vv,tensor6d:zv,variable:Uv,zeros:We,onesLike:Yl,zerosLike:Ae,transpose:or,softmax:Wn,logSoftmax:xm,localResponseNormalization:W0,norm:yh,gather:ks,unsortedSegmentSum:oh,basicLSTMCell:V0,multiRNNCell:z0,movingAverage:U0,stridedSlice:H0,topk:G0,scatterND:j0,fft:As,ifft:ba,rfft:Ns,irfft:xh,sparseToDense:K0,gatherND:X0,diag:$0,dropout:Y0,hannWindow:Fs,hammingWindow:wh,frame:Ms,stft:Ch,inTopKAsync:Q0});function q(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&k(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function ui(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var _x=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new lf(e,F),e}return dn(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,H().get("IS_NODE")&&la(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?zi(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return ho(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ye(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return F.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){return n=sn(),e(),[2,{kernelMs:sn()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(q(e,"slice"),vs(e.shape,n,o)){var a=ms(n,e.strides),i=oe(o);return bt(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=ye(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+n[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){q(e,"stridedSlice");var i=Ta(n,o,a);if(i.some(function(d){return d===0}))return bt([],i);for(var s=ye(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*a[h]+n[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=ye([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){q(e,"reverse");for(var o=ye(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(d){return Qt(d)}),i=e.map(function(d){return _n(d)});return yt(this.concat(a,n),this.concat(i,n))}var s=e.map(function(d){var p=oe(d.shape.slice(n));return d.as2D(-1,p)}),u=wr(s.map(function(d){return d.shape}),1),c=ye(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,y=0;y<d.shape[1];++y)c[g+y]=p[v++];f+=d.shape[1]})}var h=wr(e.map(function(d){return d.shape}),n);return bt(c,h,e[0].dtype)},t.prototype.neg=function(e){return q(e,"neg"),this.multiply($(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,pt(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;q(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=ye(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=it([n],e.shape),a=this.max(e,o),i=At(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,pt(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return q([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){q([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],m=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=m[0],y=m[1],b=m[2],x=s*u,w=ye([c,s,u],e.dtype),C=w.values,R=this.blockSize,_=0;_<c;_++)for(var S=0;S<s;S+=R)for(var I=0;I<u;I+=R)for(var T=0;T<i;T+=R)for(var D=Math.min(S+R,s),O=Math.min(I+R,u),P=Math.min(T+R,i),M=S;M<D;M++)for(var L=I;L<O;L++){for(var B=0,W=T;W<P;W++)B+=l[_*d+M*p+W*v]*f[W*g+L*y+_*b];C[_*x+(M*u+L)]+=B}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=ui(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,pt(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return q([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return q([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){q(e,"sum"),Pt("sum",n,e.rank);for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,pt(e.dtype,"int32")),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,n){q(e,"sum");for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,pt(e.dtype,"int32")),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){q(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=$(s,"int32"),c=nh(u,n).asType("float32").mul(e).sum(0);a.push(c)}return Xt(a)},t.prototype.argMin=function(e,n){q(e,"argMin");var o=[n];Pt("argMin",o,e.rank);for(var a=xt(e.shape,o),i=a[0],s=a[1],u=We(i,"int32"),c=oe(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},t.prototype.argMax=function(e,n){q(e,"argMax");var o=[n];Pt("argMax",o,e.rank);for(var a=xt(e.shape,o),i=a[0],s=a[1],u=We(i,"int32"),c=oe(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},t.prototype.cumsum=function(e,n,o,a){if(q(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=pt(e.dtype,"int32"),s=We(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,n){return q([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return q([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return q([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return q([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return q([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return q([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){q(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return q([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return q([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){q([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=We(n.shape,pt(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:oe(n.shape.slice(1)),h=0;h<a.length;h++)for(var d=0;d<f;d++)a[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},t.prototype.where=function(e){q([e],"where");var n=this.readSync(e.dataId);return Cs(e.shape,n)},t.prototype.topk=function(e,n,o){return q(e,"topk"),vf(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){q(e,"min"),Pt("min",n,e.rank);for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,e.dtype),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},t.prototype.minimum=function(e,n){return q([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return q([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){q(e,"max"),Pt("max",n,e.rank);for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,e.dtype),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},t.prototype.maximum=function(e,n){return q([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){q(e,"all"),Pt("all",n,e.rank);for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,e.dtype),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},t.prototype.any=function(e,n){q(e,"any"),Pt("any",n,e.rank);for(var o=xt(e.shape,n),a=o[0],i=o[1],s=We(a,e.dtype),u=oe(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},t.prototype.squaredDifference=function(e,n){return q([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){q(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){q(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){q(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){q(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){q(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){q(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){q(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){q(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){q(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){q(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){q(e,"relu");for(var n=We(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){q(e,"relu");for(var n=We(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return q([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){q(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){q([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){q(e,"selu");for(var n=_s,o=Ss,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){q(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){q(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){q(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){q(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){q(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){q(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){q(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){q(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){q(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){q(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return q([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){q(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){q(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){q(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=ul(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){q(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){q(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){q(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){q(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),q(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=ui(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){q([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=ye(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],y=f?h.strides[1]:h.strides[2],b=f?h.strides[2]:1,x=f?1:h.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),R=h.values,_=0;_<o.batchSize;++_)for(var S=_*d,I=_*g,T=0;T<o.outHeight;++T)for(var D=I+T*y,O=T*o.strideHeight-l,P=0;P<a;P++){var M=O+P*s;if(!(M<0||M>=o.inHeight))for(var L=P*n.strides[0],B=S+M*p,W=0;W<o.outWidth;++W)for(var U=D+W*b,G=W*o.strideWidth-c,K=0;K<i;K++){var X=G+K*u;if(!(X<0||X>=o.inWidth))for(var j=B+X*v,Y=L+K*n.strides[1],ee=0;ee<o.inChannels;++ee){for(var J=w[j+ee*m],Z=0;Z<o.outChannels;++Z)R[U+Z*x]+=J*C[Y+Z];Y+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=ye(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=p.values,y=0;y<o.batchSize;++y)for(var b=y*e.strides[0],x=y*p.strides[0],w=0;w<o.outDepth;++w)for(var C=x+w*p.strides[1],R=w*o.strideDepth-f,_=0;_<a;_++){var S=R+_*u;if(!(S<0||S>=o.inDepth))for(var I=_*n.strides[0],T=b+S*e.strides[1],D=0;D<o.outHeight;++D)for(var O=C+D*p.strides[2],P=D*o.strideHeight-d,M=0;M<i;M++){var L=P+M*c;if(!(L<0||L>=o.inHeight))for(var B=I+M*n.strides[1],W=T+L*e.strides[2],U=0;U<o.outWidth;++U)for(var G=O+U*o.outChannels,K=U*o.strideWidth-h,X=0;X<s;X++){var j=K+X*l;if(!(j<0||j>=o.inWidth))for(var Y=B+X*n.strides[2],ee=W+j*o.inChannels,J=Y,Z=0;Z<o.inChannels;++Z){for(var ue=v[ee+Z],ce=0;ce<o.outChannels;++ce)g[G+ce]+=ue*m[J+ce];J+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){q([e,n],"conv2dDerInput");for(var a=ye(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,y=o.inWidth,b=o.outChannels,x=o.outHeight,w=o.outWidth,C=o.strideHeight,R=o.strideWidth,_=o.dataFormat,S=p-1-o.padInfo.top,I=v-1-o.padInfo.left,T=_==="channelsLast",D=a.strides[0],O=T?a.strides[1]:a.strides[2],P=T?a.strides[2]:1,M=T?1:a.strides[1],L=e.strides[0],B=T?e.strides[1]:e.strides[2],W=T?e.strides[2]:1,U=T?1:e.strides[1],G=0;G<d;++G)for(var K=0;K<m;++K)for(var X=0;X<g;++X)for(var j=X-S,Y=Math.max(0,Math.ceil(j/C)),ee=Math.min(x,(p+j)/C),J=0;J<y;++J){for(var Z=J-I,ue=Math.max(0,Math.ceil(Z/R)),ce=Math.min(w,(v+Z)/R),Te=0,fe=Y;fe<ee;++fe)for(var ae=fe*C-j,le=ue;le<ce;++le)for(var ve=L*G+B*fe+W*le,xe=l*(p-1-ae)+f*(v-1-(le*R-Z))+h*K,Ee=0;Ee<b;++Ee)Te+=s[ve+U*Ee]*u[xe+Ee];i[D*G+O*X+P*J+M*K]=Te}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=ye(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],R=b[3],_=o.batchSize,S=o.filterDepth,I=o.filterHeight,T=o.filterWidth,D=o.inChannels,O=o.inDepth,P=o.inHeight,M=o.inWidth,L=o.outChannels,B=o.outDepth,W=o.outHeight,U=o.outWidth,G=o.strideDepth,K=o.strideHeight,X=o.strideWidth,j=S-1-o.padInfo.front,Y=I-1-o.padInfo.top,ee=T-1-o.padInfo.left,J=0;J<_;++J)for(var Z=0;Z<D;++Z)for(var ue=0;ue<O;++ue)for(var ce=ue-j,Te=Math.max(0,Math.ceil(ce/G)),fe=Math.min(B,(S+ce)/G),ae=0;ae<P;++ae)for(var le=ae-Y,ve=Math.max(0,Math.ceil(le/K)),xe=Math.min(W,(I+le)/K),Ee=0;Ee<M;++Ee){for(var Me=Ee-ee,De=Math.max(0,Math.ceil(Me/X)),Pe=Math.min(U,(T+Me)/X),Ne=0,Xe=Te;Xe<fe;++Xe)for(var et=Xe*G-ce,Je=ve;Je<xe;++Je)for(var mt=Je*K-le,gt=De;gt<Pe;++gt)for(var Dt=p*J+v*Xe+m*Je+g*gt,ht=x*(S-1-et)+w*(I-1-mt)+C*(T-1-(gt*X-Me))+R*Z,Qe=0;Qe<L;++Qe)Ne+=h[Dt+Qe]*y[ht+Qe];i[u*J+c*ue+l*ae+f*Ee+Z]=Ne}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){q([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ye(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/a)),g=Math.min(o.outHeight,(o.inHeight+h-v)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((f-y)/i)),x=Math.min(o.outWidth,(o.inWidth+f-y)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var R=0,_=0;_<o.batchSize;++_)for(var S=m;S<g;++S)for(var I=v+S*a-h,T=b;T<x;++T){var D=y+T*i-f;R+=c?d.get(_,I,D,w)*p.get(_,S,T,C):d.get(_,w,I,D)*p.get(_,C,S,T)}l.set(R,v,y,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=ye(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],R=b[3],_=this.readSync(e.dataId),S=e.strides,I=S[0],T=S[1],D=S[2],O=S[3],P=o.padInfo.front,M=o.padInfo.left,L=o.padInfo.top,B=0;B<u;++B)for(var W=Math.max(0,Math.ceil((P-B)/a)),U=Math.min(o.outDepth,(o.inDepth+P-B)/a),G=B*p,K=0;K<c;++K)for(var X=Math.max(0,Math.ceil((L-K)/i)),j=Math.min(o.outHeight,(o.inHeight+L-K)/i),Y=K*v+G,ee=0;ee<l;++ee)for(var J=Math.max(0,Math.ceil((M-ee)/s)),Z=Math.min(o.outWidth,(o.inWidth+M-ee)/s),ue=ee*m+Y,ce=0;ce<o.inChannels;++ce)for(var Te=ce*g+ue,fe=0;fe<o.outChannels;++fe){for(var ae=0,le=0;le<o.batchSize;++le)for(var ve=le*I,xe=le*x,Ee=W;Ee<U;++Ee)for(var Me=(B+Ee*a-P)*T+ve,De=Ee*w+xe,Pe=X;Pe<j;++Pe)for(var Ne=(K+Pe*i-L)*D+Me,Xe=Pe*C+De,et=J;et<Z;++et){var Je=et*R+Xe;ae+=_[(ee+et*s-M)*O+Ne+ce]*y[Je+fe]}h[Te+fe]=ae}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=ui(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){q([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=ye(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],y=m*h.strides[0],b=0;b<o.outHeight;++b)for(var x=y+b*h.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var R=w+C*s;if(!(R<0||R>=o.inHeight))for(var _=C*n.strides[0],S=g+R*e.strides[1],I=0;I<o.outWidth;++I)for(var T=x+I*h.strides[2],D=I*o.strideWidth-l,O=0;O<i;++O){var P=D+O*u;if(!(P<0||P>=o.inWidth))for(var M=_+O*n.strides[1],L=S+P*o.inChannels,B=T,W=M,U=0;U<o.inChannels;++U){for(var G=d[L+U],K=0;K<f;++K)v[B+K]+=G*p[W+K];B+=f,W+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){q([e,n],"depthwiseConv2DDerInput");for(var a=ye(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(n.dataId),g=n.strides,y=g[0],b=g[1],x=g[2],w=o.batchSize,C=o.filterHeight,R=o.filterWidth,_=o.inChannels,S=o.inHeight,I=o.inWidth,T=o.outChannels,D=o.outHeight,O=o.outWidth,P=o.strideHeight,M=o.strideWidth,L=C-1-o.padInfo.top,B=R-1-o.padInfo.left,W=T/_,U=0;U<w;++U)for(var G=0;G<_;++G)for(var K=0;K<S;++K)for(var X=K-L,j=Math.max(0,Math.ceil(X/P)),Y=Math.min(D,(C+X)/P),ee=0;ee<I;++ee){for(var J=ee-B,Z=Math.max(0,Math.ceil(J/M)),ue=Math.min(O,(R+J)/M),ce=0,Te=j;Te<Y;++Te)for(var fe=Te*P-X,ae=Z;ae<ue;++ae)for(var le=d*U+p*Te+v*ae,ve=y*(C-1-fe)+b*(R-1-(ae*M-J))+x*G,xe=0;xe<W;++xe)ce+=f[le+(G*W+xe)]*m[ve+xe];i[u*U+c*K+l*ee+G]=ce}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){q([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ye(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/a)),g=Math.min(o.outHeight,(o.inHeight+f-v)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((l-y)/i)),x=Math.min(o.outWidth,(o.inWidth+l-y)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/h),R=w%h,_=0,S=0;S<o.batchSize;++S)for(var I=m;I<g;++I)for(var T=v+I*a-f,D=b;D<x;++D){var O=y+D*i-l;_+=d.get(S,T,O,C)*p.get(S,I,D,w)}c.set(_,v,y,C,R)}return c.toTensor()},t.prototype.tile=function(e,n){return q(e,"tile"),pf(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){q(e,"pad");var a=n.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=n.map(function(h){return h[0]}),s=this.bufferSync(e),u=ye(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){q(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=ye(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var h=s.locToIndex(l);s.values[h]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){q([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=ye(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){q([e],"batchToSpaceND");var a=n.reduce(function(f,h){return f*h}),i=da(e.shape,n,a),s=pa(i.length,n.length),u=va(e.shape,n,a),c=nf(o,n.length),l=rf(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){q([e],"spaceToBatchND");var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=da(u.shape,n,a,!1),l=pa(c.length,n.length,!1),f=va(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){q(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=ye(n.outShape,e.dtype),m=v.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],y=n.outShape[2]*n.outShape[3],b=n.outShape[3],x=0;x<n.batchSize;++x)for(var w=x*g,C=x*e.strides[0],R=0;R<n.inChannels;++R)for(var _=0;_<n.outHeight;++_)for(var S=_*a-f,I=Math.max(0,S),T=Math.min(n.inHeight,c+S),D=w+_*y,O=0;O<n.outWidth;++O){for(var P=O*i-h,M=Math.max(0,P),L=Math.min(n.inWidth,l+P),B=d,W=0,U=0,G=I;G<T;G+=s){for(var K=C+G*e.strides[1],X=M;X<L;X+=u){var j=p[K+X*e.strides[2]+R];o==="max"&&j>B?B=j:o==="avg"&&(W+=j,U++)}if(isNaN(B))break}m[D+O*b+R]=o==="avg"?W/U:B}return v.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=ye(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var v=0;v<n.inChannels;++v)for(var m=0;m<n.outHeight;++m){for(var g=m*a-f,y=g;y<0;)y+=s;for(var b=Math.min(n.inHeight,c+g),x=0;x<n.outWidth;++x){for(var w=x*i-h,C=w;C<0;)C+=u;for(var R=Math.min(n.inWidth,l+w),_=Number.NEGATIVE_INFINITY,S=-1,I=y;I<b;I+=s)for(var T=I-g,D=C;D<R;D+=u){var O=D-w,P=d.get(p,I,D,v);P>_&&(_=P,S=T*l+O)}o.set(S,p,m,x,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){q([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,v=ye(n.shape,"float32"),m=this.bufferSync(i),g=this.bufferSync(e),y=0;y<a.batchSize;++y)for(var b=0;b<a.inChannels;++b)for(var x=0;x<a.inHeight;++x)for(var w=0;w<a.inWidth;++w){for(var C=x-p,R=w-d,_=0,S=0;S<f;S+=c){var I=(C+S)/s;if(!(I<0||I>=a.outHeight||Math.floor(I)!==I))for(var T=0;T<h;T+=l){var D=(R+T)/u;if(!(D<0||D>=a.outWidth||Math.floor(D)!==D)){var O=f*h-1-m.get(y,I,D,b)===S*h+T?1:0;O!==0&&(_+=g.get(y,I,D,b)*O)}}}v.set(_,y,x,w,b)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){q([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=ye(n.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),y=0;y<o.batchSize;++y)for(var b=0;b<o.inChannels;++b)for(var x=0;x<o.inHeight;++x)for(var w=0;w<o.inWidth;++w){for(var C=x-p,R=w-d,_=0,S=0;S<f;S+=c){var I=(C+S)/a;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var T=0;T<h;T+=l){var D=(R+T)/i;D<0||D>=o.outWidth||Math.floor(D)!==D||(_+=g.get(y,I,D,b))}}v.set(_*m,y,x,w,b)}return v.toTensor()},t.prototype.pool3d=function(e,n,o){q(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(e.dataId),b=ye(n.outShape,e.dtype),x=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],R=n.outShape[3]*n.outShape[4],_=n.outShape[4],S=0;S<n.batchSize;++S)for(var I=S*w,T=S*e.strides[0],D=0;D<n.inChannels;++D)for(var O=0;O<n.outDepth;++O){for(var P=O*a-p,M=P;M<0;)M+=u;for(var L=Math.min(n.inDepth,f+P),B=I+O*C,W=0;W<n.outHeight;++W){for(var U=W*i-v,G=U;G<0;)G+=c;for(var K=Math.min(n.inHeight,h+U),X=B+W*R,j=0;j<n.outWidth;++j){for(var Y=j*s-m,ee=Y;ee<0;)ee+=l;for(var J=Math.min(n.inWidth,d+Y),Z=X+j*_,ue=g,ce=0,Te=0,fe=M;fe<L;fe+=u){for(var ae=T+fe*e.strides[1],le=G;le<K;le+=c){for(var ve=ae+le*e.strides[2],xe=ee;xe<J;xe+=l){var Ee=y[ve+xe*e.strides[3]+D];if(o==="max"&&Ee>ue?ue=Ee:o==="avg"&&(ce+=Ee,Te++),isNaN(ue))break}if(isNaN(ue))break}if(isNaN(ue))break}x[Z+D]=o==="avg"?ce/Te:ue}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return q(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){q([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,y=m-1-o.padInfo.left,b=v-1-o.padInfo.top,x=ye(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),R=0;R<o.batchSize;++R)for(var _=0;_<o.inChannels;++_)for(var S=0;S<o.inDepth;++S)for(var I=0;I<o.inHeight;++I)for(var T=0;T<o.inWidth;++T){for(var D=S-g,O=I-b,P=T-y,M=0,L=0;L<p;L+=f){var B=(D+L)/a;if(!(B<0||B>=o.outDepth||Math.floor(B)!==B))for(var W=0;W<v;W+=h){var U=(O+W)/i;if(!(U<0||U>=o.outHeight||Math.floor(U)!==U))for(var G=0;G<m;G+=d){var K=(P+G)/s;K<0||K>=o.outWidth||Math.floor(K)!==K||(M+=C.get(R,B,U,K,_))}}}x.set(M*w,R,S,I,T,_)}return x.toTensor()},t.prototype.maxPool3d=function(e,n){return q(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=ye(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=this.bufferSync(e),y=0;y<n.batchSize;++y)for(var b=0;b<n.inChannels;++b)for(var x=0;x<n.outDepth;++x){for(var w=x*a-p,C=w;C<0;)C+=u;for(var R=Math.min(n.inDepth,f+w),_=0;_<n.outHeight;++_){for(var S=_*i-v,I=S;I<0;)I+=c;for(var T=Math.min(n.inHeight,h+S),D=0;D<n.outWidth;++D){for(var O=D*s-m,P=O;P<0;)P+=l;for(var M=Math.min(n.inWidth,d+O),L=Number.NEGATIVE_INFINITY,B=-1,W=C;W<R;W+=u)for(var U=W-w,G=I;G<T;G+=c)for(var K=G-S,X=P;X<M;X+=l){var j=X-O,Y=g.get(y,W,G,X,b);Y>=L&&(L=Y,B=U*h*d+K*h+j)}o.set(B,y,x,_,D,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){q([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,v=a.effectiveFilterWidth,m=d-1-a.padInfo.front,g=v-1-a.padInfo.left,y=p-1-a.padInfo.top,b=ye(n.shape,"float32"),x=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var R=0;R<a.inChannels;++R)for(var _=0;_<a.inDepth;++_)for(var S=0;S<a.inHeight;++S)for(var I=0;I<a.inWidth;++I){for(var T=_-m,D=S-y,O=I-g,P=0,M=0;M<d;M+=l){var L=(T+M)/s;if(!(L<0||L>=a.outDepth||Math.floor(L)!==L))for(var B=0;B<p;B+=f){var W=(D+B)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var U=0;U<v;U+=h){var G=(O+U)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var K=d*p*v-1-x.get(C,L,W,G,R)===M*p*v+B*v+U?1:0;K!==0&&(P+=w.get(C,L,W,G,R)*K)}}}}b.set(P,C,_,S,I,R)}return b.toTensor()},t.prototype.cast=function(e,n){return ys(e,n,this)},t.prototype.reshape=function(e,n){return ga(e,n)},t.prototype.avgPool=function(e,n){return q(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){q(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(oe([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],y=0;y<s;y++)for(var b=0;b<n;b++)for(var x=m*b,w=Math.floor(x),C=x-w,R=Math.min(u-1,Math.ceil(x)),_=y*e.strides[0]+w*e.strides[1],S=y*e.strides[0]+R*e.strides[1],I=0;I<o;I++)for(var T=g*I,D=Math.floor(T),O=T-D,P=Math.min(c-1,Math.ceil(T)),M=_+D*e.strides[2],L=S+D*e.strides[2],B=_+P*e.strides[2],W=S+P*e.strides[2],U=0;U<l;U++){var G=f[M+U],K=f[L+U],X=G+(f[B+U]-G)*O,j=X+(K+(f[W+U]-K)*O-X)*C;h[v++]=j}return bt(h,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){q([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],y=this.readSync(e.dataId),b=0,x=0;x<i;x++)for(var w=x*n.strides[0],C=0;C<f;C++)for(var R=C*m,_=Math.floor(R),S=Math.min(Math.ceil(R),s-1),I=w+_*n.strides[1],T=w+S*n.strides[1],D=R-_,O=1-D,P=0;P<h;P++)for(var M=P*g,L=Math.floor(M),B=Math.min(Math.ceil(M),u-1),W=M-L,U=1-W,G=I+L*n.strides[2],K=I+B*n.strides[2],X=T+L*n.strides[2],j=T+B*n.strides[2],Y=O*U,ee=O*W,J=D*U,Z=D*W,ue=0;ue<c;ue++){var ce=y[b++];d[G+ue]+=ce*Y,d[K+ue]+=ce*ee,d[X+ue]+=ce*J,d[j+ue]+=ce*Z}return Ot(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){q(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,y=0;y<s;y++)for(var b=y*e.strides[0],x=0;x<n;x++)for(var w=v*x,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],R=0;R<o;R++)for(var _=m*R,S=C+Math.min(c-1,a?Math.round(_):Math.floor(_))*e.strides[2],I=0;I<l;I++){var T=f[S+I];h[g++]=T}return bt(h,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){q([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],y=v[1]/m[1],b=1/g,x=1/y,w=2*Math.ceil(b)+2,C=2*Math.ceil(x)+2,R=0;R<i;R++)for(var _=R*n.strides[0],S=0;S<s;S++)for(var I=_+S*n.strides[1],T=Math.floor(S*b),D=Math.floor(T-w/2),O=0;O<u;O++)for(var P=I+O*n.strides[2],M=Math.floor(O*x),L=Math.floor(M-C/2),B=0;B<c;B++){for(var W=0,U=0;U<w;U++){var G=U+D;if(!(G<0||G>=f)){var K=_+G*e.strides[1],X=G*g;if(S===Math.min(s-1,o?Math.round(X):Math.floor(X)))for(var j=0;j<C;j++){var Y=j+L;if(!(Y<0||Y>=h)){var ee=K+Y*e.strides[2],J=Y*y;O===Math.min(u-1,o?Math.round(J):Math.floor(J))&&(W+=p[ee+B])}}}}d[P+B]=W}return Ot(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){q([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,y=0,b=0,x=0,w=0,C=0;C<u.length;++C)d[C]=h[y++]+(u[C]-c[b++])*f[x++]/Math.sqrt(l[w++]+a),y>=p&&(y=0),b>=g&&(b=0),x>=v&&(x=0),w>=m&&(w=0);return Ot(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){q(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,y=m-g+Math.max(0,g-n),b=m-g+Math.min(g+n,u),x=0;y<=b;y++){var w=c[y];x+=w*w}return x}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+a*p,-i);f[d]=v}return Ot(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){q(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-a),y=v-m+Math.min(c,m+a+1),b=0,x=g;x<y;x++)b+=Math.pow(f[x],2);for(b=s*b+i,x=g;x<y;x++){var w=-2*s*u*f[x]*h[v]/b;v===x&&(w+=Math.pow(b,-u)),w*=l[v],d[x]+=w}}return Ot(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){q(e,"multinomial");for(var i=n?e:Wn(e),s=i.shape[0],u=i.shape[1],c=We([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=Da(a.toString()),g=h*o,y=0;y<o;++y){var b=m();l[g+y]=p.length;for(var x=0;x<p.length;x++)if(b<p[x]){l[g+y]=x;break}}}return c},t.prototype.oneHot=function(e,n,o,a){q(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return tr(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return q(e,"nonMaxSuppression"),bs(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=ye(e.shape,"float32"),s=ye(e.shape,"float32"),u=Qt(e).as2D(o,a),c=_n(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),h=c.slice([l,0],[1,a]),d=yt(f,h),p=this.readSync(this.fftImpl(d,n).dataId),v=0;v<a;v++){var m=Xu(p,v);i.values[l*a+v]=m.real,s.values[l*a+v]=m.imag}return yt(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=yt(Qt(i).div($(a)),_n(i).div($(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return yt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var y=Math.ceil(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(a),u=yt(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(a),l=yt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,y){for(var b=new Float32Array(g/2),x=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(y?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),x[w]=Math.sin(C)}return{real:b,imag:x}}(n,o),h=yt(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=Qt(d).concat(Qt(p)),m=_n(d).concat(_n(p));return yt(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=wm(i*c,n,o),f=Xu(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),bm(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){k(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),k(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),h=this.readSync(e.dataId),d=new Float32Array(a*c*l*f),p=0,v=0;v<a;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/n),y=m%n,b=0;b<l;++b)for(var x=Math.floor(b/n),w=(y*n+b%n)*f,C=0;C<f;++C){var R=C+w+u*(x+s*(g+i*v));d[p++]=h[R]}return Ot(d,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=Re(e.shape,n.shape),s=ye(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=On(e.shape,i),f=On(n.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(n),m=function(g){var y=s.indexToLoc(g),b=y.slice(-e.rank);l.forEach(function(R){return b[R]=0});var x=p.locToIndex(b),w=y.slice(-n.rank);f.forEach(function(R){return w[R]=0});var C=v.locToIndex(w);h[g]=a(u[x],c[C])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=Re(e.shape,n.shape),i=ye(a,"float32"),s=ye(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=On(e.shape,a),f=On(n.shape,a),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var y=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=function(w){var C=i.indexToLoc(w),R=C.slice(-e.rank);l.forEach(function(D){return R[D]=0});var _=y.locToIndex(R),S=C.slice(-n.rank);f.forEach(function(D){return S[D]=0});var I=b.locToIndex(S),T=o(u[2*_],u[2*_+1],c[2*I],c[2*I+1]);h[w]=T.real,d[w]=T.imag};for(p=0;p<h.length;p++)x(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return df(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=n.shape[0],p=a[0],v=a[1],m=ye([d,p,v,h],"float32"),g=this.readSync(n.dataId),y=this.readSync(o.dataId),b=this.readSync(e.dataId),x=e.strides,w=m.strides,C=0;C<d;C++){var R=4*C,_=g[R],S=g[R+1],I=g[R+2],T=g[R+3],D=y[C];if(!(D>=c))for(var O=p>1?(I-_)*(l-1)/(p-1):0,P=v>1?(T-S)*(f-1)/(v-1):0,M=0;M<p;M++){var L=p>1?_*(l-1)+M*O:.5*(_+I)*(l-1);if(L<0||L>l-1)for(var B=0;B<v;B++)for(var W=0;W<h;W++){var U=W+B*w[2]+M*w[1]+C*w[0];m.values[U]=s}else if(i==="bilinear"){var G=Math.floor(L),K=Math.ceil(L),X=L-G;for(B=0;B<v;B++)if((fe=v>1?S*(f-1)+B*P:.5*(S+T)*(f-1))<0||fe>f-1)for(W=0;W<h;W++)U=W+B*w[2]+M*w[1]+C*w[0],m.values[U]=s;else{var j=Math.floor(fe),Y=Math.ceil(fe),ee=fe-j;for(W=0;W<h;W++){var J=b[U=W+j*x[2]+G*x[1]+D*x[0]],Z=b[U=W+Y*x[2]+G*x[1]+D*x[0]],ue=b[U=W+j*x[2]+K*x[1]+D*x[0]],ce=J+(Z-J)*ee,Te=ue+(b[U=W+Y*x[2]+K*x[1]+D*x[0]]-ue)*ee;U=W+B*w[2]+M*w[1]+C*w[0],m.values[U]=ce+(Te-ce)*X}}}else for(B=0;B<v;++B){var fe;if((fe=v>1?S*(f-1)+B*P:.5*(S+T)*(f-1))<0||fe>f-1)for(W=0;W<h;W++)U=W+B*w[2]+M*w[1]+C*w[0],m.values[U]=s;else{var ae=Math.round(fe),le=Math.round(L);for(W=0;W<h;W++){var ve=W+ae*x[2]+le*x[1]+D*x[0],xe=W+B*w[2]+M*w[1]+C*w[0];m.values[xe]=b[ve]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=yo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ds(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return bt([],s,e.dtype);for(var f=new po([u,c],e.dtype),h=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<a;g++){var y=h[p*a+g];m+=y*l[g],v.push(y)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[p*c+b]=d[m*c+b]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=yo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=$(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=fo(o=o||$r(n),oe(e));return a.fill(n),F.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=fo(e.dtype,oe(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return xs(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var h=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return bt([],o,n.dtype);var v=new po(h,n.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],y=0,b=0;b<u;b++){var x=d[m*u+b];g.push(x),y+=x*c[b]}if(y<0||y>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?v.values[y*i+w]+=p[m*i+w]:v.values[y*i+w]=n.rank===0?p[0]:p[m*i+w]}return v.toTensor().reshape(o)},t}(ff);F.registerBackend("cpu",function(){return new _x},1);for(var ci=0,mc=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;q(a,"NonMaxSuppressionWithScore");var d=ws(h.data.get(a.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;q(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:wo,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;q([o,a],wo);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(h,d,p,v,m,g){var y=Re(h,d),b=y.length,x=fn(y),w=Gr(m,oe(y)),C=h.length,R=d.length,_=fn(h),S=fn(d),I=On(h,y),T=On(d,y);if(I.length+T.length===0)for(var D=0;D<w.length;++D)w[D]=g(p[D%p.length],v[D%v.length]);else{var O=function(P){var M=gl(P,b,x),L=M.slice(-C);I.forEach(function(G){return L[G]=0});var B=Di(L,C,_),W=M.slice(-R);T.forEach(function(G){return W[G]=0});var U=Di(W,R,S);w[P]=g(p[B],v[U])};for(D=0;D<w.length;++D)O(D)}return[w,y]}(o.shape,a.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];ci<mc.length;ci++)al(mc[ci]);var Ar,Sx=function(r){this.variableNames=["A"];var t=St(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Ix=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=St(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var li=0,gc=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement!="undefined"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,a];(s||i)&&(Ar==null&&(Ar=document.createElement("canvas").getContext("2d")),Ar.canvas.width=c,Ar.canvas.height=l,Ar.drawImage(o,0,0,c,l),o=Ar.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=Ht.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=H().getBool("WEBGL_PACK")?new Ix(h):new Sx(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;la("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=ws(h.readSync(a.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new Ce(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:wo,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn("return (a - b) * (a - b);",o.shape,a.shape):new Ye("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];li<gc.length;li++)al(gc[li]);for(var fi=0,yc=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:wo,gradFunc:function(r,t){var e=t[0],n=t[1],o=$(2);return{a:function(){return Rt(r,Rt(o,ft(e,n)))},b:function(){return Rt(r,Rt(o,ft(n,e)))}}}}];fi<yc.length;fi++)Dv(yc[fi]);var Rx=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();H().get("IS_BROWSER")&&H().setPlatform("browser",new Rx);var hi,kx=function(){return require("node-fetch")},Dx=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return H().global.fetch!=null?H().global.fetch(t,e):(hi==null&&(hi=kx()),hi(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();H().get("IS_NODE")&&H().setPlatform("node",new Dx);var Hi={float32:4,int32:4,uint16:2,uint8:1,bool:1},wa=4;function Eh(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=oe(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Hi[d.dtype],v=r.slice(n,n+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(C){return Math.round(C*d.scale+d.min)})}n+=f*p}else if(c==="string"){var g=oe(s.shape);h=[];for(var y=0;y<g;y++){var b=new Uint32Array(r.slice(n,n+wa))[0];n+=wa;var x=new Uint8Array(r.slice(n,n+b));h.push(x),n+=b}}else{var w=Hi[c];if(v=r.slice(n,n+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}n+=f*w}e[u]=bt(h,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function Tx(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Gi=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function xc(r){return Gi?Buffer.byteLength(r):new Blob([r]).size}function Vs(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function bc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function To(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:xc(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:xc(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var jt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),Vr="://",nr=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){k(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Vr)&&(t=t.slice(0,t.indexOf(Vr))),k(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();k(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function na(r){if(r.indexOf(Vr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+nr.getSchemes().join(","));return{scheme:r.split(Vr)[0],path:r.split(Vr)[1]}}function wc(r,t,e){return e===void 0&&(e=!1),ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return re(this,function(h){switch(h.label){case 0:return k(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),k((n=jt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),k(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],k((a=jt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),k(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=na(r).scheme,u=na(r).path,c=s===na(r).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,nr.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,nr.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var mr="models_store",Zn="model_info_store";function _h(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ji(r){var t=r.result;t.createObjectStore(mr,{keyPath:"modelPath"}),t.createObjectStore(Zn,{keyPath:"modelPath"})}var zr=function(){function r(t){if(this.indexedDB=_h(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return ne(this,void 0,void 0,function(){return re(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return ne(this,void 0,void 0,function(){return re(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return ji(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(mr,"readonly"),c=u.objectStore(mr).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=To(e),h=s.transaction(Zn,"readwrite"),d=h.objectStore(Zn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(mr,"readwrite")).objectStore(mr).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(Zn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(v.error)},g.onerror=function(y){return s.close(),a(v.error)}}},p.onerror=function(v){return s.close(),a(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Cc=function(r){return H().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(zr.URL_SCHEME)?(t=r.slice(zr.URL_SCHEME.length),new zr(t)):null;var t};jt.registerSaveRouter(Cc),jt.registerLoadRouter(Cc);var Ax=function(){function r(){this.indexedDB=_h()}return r.prototype.listModels=function(){return ne(this,void 0,void 0,function(){var t=this;return re(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return ji(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Zn,"readonly"),u=s.objectStore(Zn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return ne(this,void 0,void 0,function(){var e=this;return re(this,function(n){var o;return t=(o=t).startsWith(zr.URL_SCHEME)?o.slice(zr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return ji(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Zn,"readwrite"),f=l.objectStore(Zn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var v=(u=c.transaction(mr,"readwrite")).objectStore(mr).delete(t);v.onsuccess=function(){return a(h.result.modelArtifactsInfo)},v.onerror=function(m){return i(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(H().getBool("IS_BROWSER"))try{nr.registerManager(zr.URL_SCHEME,new Ax)}catch{}var Pn="/",Br="tensorflowjs_models",Sh="info",Nx="model_topology",Fx="weight_specs",Mx="weight_data",Px="model_metadata";function Ih(r){return{info:[Br,r,Sh].join(Pn),topology:[Br,r,Nx].join(Pn),weightSpecs:[Br,r,Fx].join(Pn),weightData:[Br,r,Mx].join(Pn),modelMetadata:[Br,r,Px].join(Pn)}}function Ox(r){var t=r.split(Pn);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Pn)}var Ur=function(){function r(t){if(!H().getBool("IS_BROWSER")||typeof window=="undefined"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Ih(this.modelPath)}return r.prototype.save=function(t){return ne(this,void 0,void 0,function(){var e,n,o;return re(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=To(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Gi)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return ne(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return re(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Gi){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Ec=function(r){return H().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Ur.URL_SCHEME)?(t=r.slice(Ur.URL_SCHEME.length),new Ur(t)):null;var t};jt.registerSaveRouter(Ec),jt.registerLoadRouter(Ec);var Bx=function(){function r(){k(H().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),k(typeof window=="undefined"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return ne(this,void 0,void 0,function(){var t,e,n,o,a,i;return re(this,function(s){for(t={},e=Br+Pn,n=Pn+Sh,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Ox(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){var a;if(t=(a=t).startsWith(Ur.URL_SCHEME)?a.slice(Ur.URL_SCHEME.length):a,e=Ih(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(H().getBool("IS_BROWSER"))try{nr.registerManager(Ur.URL_SCHEME,new Bx)}catch{}var Lx="model",Wx=".json",Vx=".weights.bin";function _c(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var di=function(){function r(t){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Lx),this.modelTopologyFileName=t+Wx,this.weightDataFileName=t+Vx}return r.prototype.save=function(t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s;return re(this,function(u){switch(u.label){case 0:if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,_c(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,_c(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:To(t)}]}})})},r.URL_SCHEME="downloads://",r}(),zx=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return ne(this,void 0,void 0,function(){var t,e,n=this;return re(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=n.checkManifestAndWeightFiles(f,e)}catch(m){return void i(m)}var d=[],p=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var y=new FileReader;y.onload=function(b){var x=b.target.result,w=p.indexOf(g);v[w]=x,v.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:Vs(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return bc(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=bc(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Sc(r,t,e,n){(function(a){k(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){k(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),k(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),k(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e==null?0:e,n=n==null?1:n);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function Rh(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return re(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?H().platform.fetch:t.fetchFunc,n=r.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,Sc(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Sc(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Ic(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),ne(t,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p;return re(this,function(v){switch(v.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var y=0;m.weights.forEach(function(b){var x="quantization"in b?b.quantization.dtype:b.dtype,w=Hi[x]*oe(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(R,_){R===b.name&&(C(),s[_]=!0)}):C(),u.push(b.name),y+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(m,g,y){return g&&m.push(y),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var y=n+(n.endsWith("/")?"":"/")+g;f.push(y)})}),[4,r(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,y=0,b=0;b<g;b++)y+=h[p+b].byteLength;for(var x=new ArrayBuffer(y),w=new Uint8Array(x),C=0,R=0;R<g;R++){var _=new Uint8Array(h[p+R]);w.set(_,C),C+=_.byteLength}i[m].forEach(function(S){var I=Eh(x.slice(S.groupOffset,S.groupOffset+S.sizeBytes),[S.manifestEntry]);for(var T in I)d[T]=I[T]}),p+=g}),[2,d]}})})}}jt.registerSaveRouter(function(r){return H().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(di.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new di(t)}(r.slice(di.URL_SCHEME.length)):null});var kh=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(k(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=H().platform.fetch,k(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&k(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return ne(this,void 0,void 0,function(){var e,n,o,a;return re(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:To(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return ne(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,h;return re(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h;return re(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),y=m>v?p.substring(m):"";return[g+"/",y]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(v){f.push(i+v+a)})}),[4,Rh(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Vs(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function qi(r){return r.match(kh.URL_SCHEME_REGEX)!=null}var Rc=function(r,t){return typeof fetch=="undefined"?null:(Array.isArray(r)?r.every(function(e){return qi(e)}):qi(r))?Ki(r,{onProgress:t}):null};function Ki(r,t){return new kh(r,t)}jt.registerSaveRouter(Rc),jt.registerLoadRouter(Rc);var pi=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return ne(this,void 0,void 0,function(){return re(this,function(t){return[2,this.modelArtifacts]})})},r}(),Ux=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return ne(this,void 0,void 0,function(){return re(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Dh=Object.freeze({browserFiles:function(r){return new zx(r)},browserHTTPRequest:function(r,t){return Ki(r,t)},concatenateArrayBuffers:Vs,decodeWeights:Eh,encodeWeights:function(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return re(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return ne(s,void 0,void 0,function(){var v,m,g,y,b,x,w;return re(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(v=C.sent(),m=v.reduce(function(R,_){return R+_.length},0)+wa*v.length,g=new Uint8Array(m),y=0,b=0;b<v.length;b++)x=v[b],w=new Uint8Array(new Uint32Array([x.length]).buffer),g.set(w,y),y+=wa,g.set(x,y),y+=x.length;return p(g),[2]}})})});n.push(d)}else n.push(f.data());t!=null&&(h.group=t),e.push(h)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:Tx(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new pi(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new pi({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new pi({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return jt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:To,getSaveHandlers:function(r){return jt.getSaveHandlers(r)},http:Ki,isHTTPScheme:qi,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),ne(this,void 0,void 0,function(){return re(this,function(o){return[2,Ic(function(a){return Rh(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return jt.registerLoadRouter(r)},registerSaveRouter:function(r){return jt.registerSaveRouter(r)},weightsLoaderFactory:Ic,withSaveHandler:function(r){return new Ux(r)},copyModel:function(r,t){return ne(this,void 0,void 0,function(){return re(this,function(e){return[2,wc(r,t,!1)]})})},listModels:function(){return ne(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return re(this,function(s){switch(s.label){case 0:r=nr.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,nr.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+Vr+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return ne(this,void 0,void 0,function(){return re(this,function(e){return[2,wc(r,t,!0)]})})},removeModel:function(r){return ne(this,void 0,void 0,function(){var t;return re(this,function(e){return t=na(r),[2,nr.getManager(t.scheme).removeModel(t.path)]})})}}),Nr,Hx=A({confusionMatrix_:function(r,t,e){var n=E(r,"labels","confusionMatrix"),o=E(t,"predictions","confusionMatrix");k(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),k(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),k(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),k(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),k(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=Li(n.asType("int32"),e),i=Li(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});Object.freeze({confusionMatrix:Hx});var Gx=A({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData!="undefined"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement!="undefined"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(ol("FromPixels",F.backendName)!=null)return F.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(Nr==null&&(Nr=document.createElement("canvas").getContext("2d")),Nr.canvas.width=l,Nr.canvas.height=f,Nr.drawImage(r,0,0,l,f),s=Nr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return ls(u,[f,l,t],"int32")}}),zs=Object.freeze({toPixels:function(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h,d,p,v,m,g,y,b,x,w,C,R,_;return re(this,function(S){switch(S.label){case 0:if(e=E(r,"img","toPixels"),r instanceof je||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=S.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=S.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)y=void 0,b=void 0,x=void 0,w=void 0,i===1?(y=s[g]*v,b=s[g]*v,x=s[g]*v,w=255):i===3?(y=s[3*g]*v,b=s[3*g+1]*v,x=s[3*g+2]*v,w=255):i===4&&(y=s[4*g]*v,b=s[4*g+1]*v,x=s[4*g+2]*v,w=s[4*g+3]*v),m[(C=4*g)+0]=Math.round(y),m[C+1]=Math.round(b),m[C+2]=Math.round(x),m[C+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,R=t.getContext("2d"),_=new ImageData(m,a,o),R.putImageData(_,0,0)),e!==r&&e.dispose(),[2,m]}})})},fromPixels:Gx}),Th=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Ah=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function sr(r){k(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),k(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),k(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Ah.register(r)}Object.freeze({Serializable:Th,SerializationMap:Ah,registerClass:sr});var jx=.001,Nh=.1;function vi(){return F.backend.floatPrecision()===32?jx:Nh}function mi(r,t,e){var n=!0;if((wt(r)||wt(t))&&(n=!1),wt(r)&&wt(t)&&(n=!0),n){var o=r.constructor.name,a=t.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(r)&&Array.isArray(t)){var i=Rn(r),s=Rn(t);if(!ot(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=wt(r)?r:Bn(r),c=wt(t)?t:Bn(t);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+`.
Actual:   `+u+`.
Expected: `+c+".");for(var l=0;l<c.length;++l){var f=u[l],h=c[l];if(!e(f,h))throw new Error("Arrays differ: actual["+l+"] = "+f+", expected["+l+"] = "+h+`.
Actual:   `+u+`.
Expected: `+c+".")}}function gi(r,t,e){return!isFinite(r)&&!isFinite(t)||!(isNaN(r)||isNaN(t)||Math.abs(r-t)>e)}Object.freeze({TEST_EPSILON_FLOAT16:Nh,expectArraysClose:function(r,t,e){return e==null&&(e=vi()),mi(r,t,function(n,o){return gi(n,o,e)})},testEpsilon:vi,expectPromiseToFail:function(r,t){r().then(function(){return t.fail()},function(){return t()})},expectArraysEqual:function(r,t){var e=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return Qn(r)||Qn(r[0])||Qn(t)||Qn(t[0])?mi(r,e,function(n,o){return n==o}):mi(r,t,function(n,o){return gi(n,o,0)})},expectNumbersClose:function(r,t,e){if(e==null&&(e=vi()),!gi(r,t,e))throw new Error("Numbers differ: actual === "+r+", expected === "+t)},expectValuesInRange:function(r,t,e){for(var n=0;n<r.length;n++)if(r[n]<t||r[n]>e)throw new Error("Value out of range:"+r[n]+" low: "+t+", high: "+e)},expectArrayBuffersEqual:function(r,t){expect(new Float32Array(r)).toEqual(new Float32Array(t))}});Object.freeze({gpgpu_util:pg,webgl_util:Lv,forceHalfFloat:function(){H().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:Gf,setWebGLContext:Cl,GPGPUContext:Bf});var Rr=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return dn(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Lt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return ym(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&Lt(this.iterations_)},t.prototype.saveIterations=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:$(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Th);Object.defineProperty(Rr,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var qx=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=F.backend.epsilon()),a}return dn(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:Q(function(){return Ae(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:Q(function(){return Ae(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;Q(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),h=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(h);var d=f.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Lt(this.accumulatedGrads.map(function(e){return e.variable})),Lt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(Rr);sr(qx);var Kx=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return dn(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:Q(function(){return In(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;Q(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(F.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Lt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(Rr);sr(Kx);var Xx=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],Q(function(){i.accBeta1=$(n).variable(),i.accBeta2=$(o).variable()}),a==null&&(i.epsilon=F.backend.epsilon()),i}return dn(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);Q(function(){var a=ft(1,n.accBeta1),i=ft(1,n.accBeta2);o.forEach(function(s,u){var c=F.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Q(function(){return Ae(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:Q(function(){return Ae(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedSecondMoment[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2).add(l.square().mul(1-n.beta2)),v=d.div(a),m=p.div(i);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Lt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Lt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){var n,o=this;return re(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),Q(function(){o.accBeta1.assign(xa(o.beta1,o.iterations_+1)),o.accBeta2.assign(xa(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(Rr);sr(Xx);var $x=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],Q(function(){s.iteration=$(0).variable(),s.accBeta1=$(n).variable()}),a==null&&(s.epsilon=F.backend.epsilon()),s}return dn(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);Q(function(){var a=ft(1,n.accBeta1),i=un(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=F.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Ae(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Ae(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedWeightedInfNorm[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=i.div(a).mul(d.div(m.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Lt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Lt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(Rr);sr($x);var Fh=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return dn(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=F.registeredVariables[o];Q(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Wv($(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(Rr);sr(Fh);var Yx=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=$(a.momentum),a}return dn(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:Q(function(){return Ae(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&Q(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Lt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){return re(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(Fh);sr(Yx);var Jx=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return dn(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:Q(function(){return Ae(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:Q(function(){return Ae(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:Q(function(){return Ae(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;Q(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,h=f.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var v=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())),u.assign(v),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Lt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Lt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Lt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(Rr);sr(Jx);je.prototype.squaredDifference=function(r){return jf(this,r)},z=Ex;function hr(r,t,e){if(e===void 0&&(e=!1),r.beginPath(),t.slice(1).forEach(function(a,i){var s=a.x,u=a.y,c=t[i];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var n=t[t.length-1],o=t[0];if(!n||!o)return;r.moveTo(n.x,n.y),r.lineTo(o.x,o.y)}r.stroke()}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xi=function(r,t){return Xi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Xi(r,t)};function me(r,t){Xi(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var _t=function(){return _t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},_t.apply(this,arguments)};function ie(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function se(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function lo(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var xr=function(){function r(t,e){if(!br(t)||!br(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function Wa(r,t){return r instanceof je&&r.shape.length===t}function Qx(r){return Wa(r,2)}function Va(r){return Wa(r,3)}function rr(r){return Wa(r,4)}function Zx(r){return r%1!==0}function kc(r){return r%2===0}function Us(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Dc(r){return r&&r.width&&r.height}function eb(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new xr(Math.round(e*o),Math.round(n*o))}function Hs(r){return r.reduce(function(t,e){return t.add(e)},new Oe(0,0)).div(new Oe(r.length,r.length))}function Co(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function br(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Tc(r){return br(r)&&0<=r&&r<=1}var Oe=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Dn=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(br),a=[n.x,n.y,n.width,n.height].every(br);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(br)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new Oe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new Oe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new Oe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new Oe(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Dc(t)?t.width:t,n=Dc(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+n,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:h,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),za=function(r){me(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(Dn),Mh=function(){function r(t,e,n,o,a){this._imageDims=new xr(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new Dn(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Dn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),$t=function(r){me(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(Mh);function tb(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function nb(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new za(n,o,a,i)}function Eo(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(tb(h,d,n))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)i();return a}function Ao(r,t){return Q(function(){var e=t[0],n=t[1],o=t[2],a=In(lo(r.shape.slice(0,3),[1]),e),i=In(lo(r.shape.slice(0,3),[1]),n),s=In(lo(r.shape.slice(0,3),[1]),o),u=ct([a,i,s],3);return ft(r,u)})}function rb(r,t){return t===void 0&&(t=!1),Q(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,In(p,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return ct(h,s)})}function yi(r){return 1/(1+Math.exp(-r))}var Gs=function(r){me(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(Dn),ob=.5,ab=.43,ib=.45,Kr=function(){function r(t,e,n){n===void 0&&(n=new Oe(0,0));var o=e.width,a=e.height;this._imgDims=new xr(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new Oe(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new Oe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Oe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Oe(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof $t?t.box.floor():new Dn(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/ib),u=Hs(t),c=Math.floor(Math.max(0,u.x-ob*s)),l=Math.floor(Math.max(0,u.y-ab*s));return new Gs(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=nb(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),sb=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Hs([e[3],e[4]])]},t}(Kr),Ph=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Hs)},t}(Kr),Ac=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Us(this.distance)+")":"")},r}(),Nc=function(r){me(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(Dn.assertIsValidBox(e,n),!br(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Dn),Uo=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){me(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Nc.assertIsValidLabeledBox(e,n),!Tc(e.score)||!Tc(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Nc);function Ca(r){return r.detection instanceof $t}function _o(r,t){var e={detection:t};return Object.assign({},r,e)}function Oh(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function Bh(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Lh(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=Bh();return _t({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function Wh(){return typeof window=="object"&&typeof document!="undefined"&&typeof HTMLImageElement!="undefined"&&typeof HTMLCanvasElement!="undefined"&&typeof HTMLVideoElement!="undefined"&&typeof ImageData!="undefined"&&typeof CanvasRenderingContext2D!="undefined"}function Vh(){return typeof global=="object"&&typeof require=="function"&&typeof module!="undefined"&&typeof process!="undefined"&&!!process.version}var ut;function ub(){if(!ut)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return ut}function $i(r){ut=r}function js(){Wh()&&$i(Oh()),Vh()&&$i(Lh())}function cb(r){if(ut||js(),!ut)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?ut.Canvas:t,n=r.Image,o=n===void 0?ut.Image:n;ut.Canvas=e,ut.Image=o,ut.createCanvasElement=r.createCanvasElement||function(){return new e},ut.createImageElement=r.createImageElement||function(){return new o},ut.ImageData=r.ImageData||ut.ImageData,ut.Video=r.Video||ut.Video,ut.fetch=r.fetch||ut.fetch,ut.readFile=r.readFile||ut.readFile}var kt={getEnv:ub,setEnv:$i,initialize:js,createBrowserEnv:Oh,createFileSystem:Bh,createNodejsEnv:Lh,monkeyPatch:cb,isBrowser:Wh,isNodejs:Vh};js();function qs(r){return!kt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Tn(r){var t=kt.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=qs(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var er;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(er||(er={}));var zh=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||er.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),lb=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new zh(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===er.BOTTOM_RIGHT||n===er.TOP_RIGHT,a=n===er.BOTTOM_LEFT||n===er.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,h=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,f-s),0);return{x:h,y:d}}return{x:u,y:c}},r.prototype.draw=function(t){var e=qs(t),n=Tn(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),f=this.measureHeight();n.fillStyle=a;var h=this.getUpperLeft(n,e);n.fillRect(h.x,h.y,l,f),n.fillStyle=i,this.text.forEach(function(d,p){var v=c+h.x,m=c+h.y+(p+1)*s;n.fillText(d,v,m)})},r}(),fb=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:er.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new zh(Object.assign({},i,a))}return r}(),hb=function(){function r(t,e){e===void 0&&(e={}),this.box=new Dn(t),this.options=new fb(e)}return r.prototype.draw=function(t){var e=Tn(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new lb([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function db(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof $t?n.score:Ca(n)?n.detection.score:void 0,a=n instanceof $t?n.box:Ca(n)?n.detection.box:new Dn(n),i=o?""+Us(o):void 0;new hb(a,{label:i}).draw(r)})}function Uh(r){var t=kt.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function pb(r){return new Promise(function(t,e){if(r instanceof kt.getEnv().Canvas||Uh(r))return t();function n(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Ks(r){var t=kt.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new xr(r.naturalWidth,r.naturalHeight):r instanceof n?new xr(r.videoWidth,r.videoHeight):new xr(r.width,r.height)}function Ua(r){var t=r.width,e=r.height,n=kt.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function Xs(r,t){var e=kt.getEnv().ImageData;if(!(r instanceof e)&&!Uh(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||Ks(r),o=n.width,a=n.height,i=Ua({width:o,height:a});return r instanceof e?Tn(i).putImageData(r,0,0):Tn(i).drawImage(r,0,0,o,a),i}function vb(r,t){return ie(this,void 0,void 0,function(){var e,n,o,a,i,s;return se(this,function(u){switch(u.label){case 0:return e=t||kt.getEnv().createCanvasElement(),n=r.shape.slice(rr(r)?1:0),o=n[0],a=n[1],i=n[2],s=Q(function(){return r.as3D(o,a,i).toInt()}),[4,zs.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Fc(r){var t=kt.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function mb(r,t,e){e===void 0&&(e=!1);var n=kt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Ks(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=Ua({width:t,height:t}),f=r instanceof a?r:Xs(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return Tn(l).drawImage(f,d,p,u,c),l}var Ea=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(Va(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(rr(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof kt.getEnv().Canvas?o:Xs(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Co(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return eb({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,Q(function(){var o=Co(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof je){var u=rr(s)?s:s.expandDims();return u=rb(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Ps.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof kt.getEnv().Canvas)return zs.fromPixels(mb(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=Xt(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function vt(r){return ie(this,void 0,void 0,function(){var t,e,n;return se(this,function(o){switch(o.label){case 0:if(r instanceof Ea)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(qs),n.forEach(function(a,i){if(!Fc(a)&&!Va(a)&&!rr(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(rr(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Fc(a)&&pb(a)}))];case 1:return o.sent(),[2,new Ea(n,Array.isArray(r))]}})})}function $s(r,t){return ie(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return se(this,function(c){switch(c.label){case 0:return e=kt.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,vt(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,vb(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=Tn(n),u=t.map(function(l){return l instanceof $t?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=Ua({width:d,height:p});return Tn(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function Ys(r,t){return ie(this,void 0,void 0,function(){return se(this,function(e){if(!Va(r)&&!rr(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(rr(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,Q(function(){var n=r.shape.slice(rr(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof $t?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return hh(r.as3D(o,a,i),[f,l,0],[d,h,i])});return u})]})})}function gb(r,t){return ie(this,void 0,void 0,function(){var e,n;return se(this,function(o){switch(o.label){case 0:return e=kt.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function yb(r){return ie(this,void 0,void 0,function(){return se(this,function(t){switch(t.label){case 0:return[4,gb(r)];case 1:return[2,t.sent().json()]}})})}function Hh(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function xb(r,t){return ie(this,void 0,void 0,function(){var e,n,o,a;return se(this,function(i){switch(i.label){case 0:return e=Hh(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,yb(n)];case 1:return a=i.sent(),[2,Dh.loadWeights(a,o)]}})})}function bb(r,t,e){e===void 0&&(e=!1);var n=e?Ks(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var zn=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof jr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof jr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=bt(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return ie(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return ie(this,void 0,void 0,function(){var e;return se(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,xb(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return ie(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=kt.getEnv().readFile,n=Hh(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=Dh.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,a)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof je))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function qt(r,t,e){return Q(function(){var n=Ts(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=Ie(n,t.bias),n})}function xi(r,t,e){return e===void 0&&(e=!1),Q(function(){var n=qe(e?Ie(Zt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):qt(r,t.conv0,[2,2])),o=qt(n,t.conv1,[1,1]),a=qe(Ie(n,o)),i=qt(a,t.conv2,[1,1]);return qe(Ie(n,Ie(o,i)))})}function Ho(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),Q(function(){var o=qe(e?Ie(Zt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):qt(r,t.conv0,n?[2,2]:[1,1])),a=qt(o,t.conv1,[1,1]),i=qe(Ie(o,a)),s=qt(i,t.conv2,[1,1]),u=qe(Ie(o,Ie(a,s))),c=qt(u,t.conv3,[1,1]);return qe(Ie(o,Ie(a,Ie(s,c))))})}function hn(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),Q(function(){var o=Ie(Zt(r,t.filters,[1,1],e),t.bias);return n?qe(o):o})}function Un(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Ha(r,t){return function(e,n,o,a){var i=Ot(r(e*n*o*o),[o,o,e,n]),s=rt(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function Js(r,t){return function(e,n,o){var a=tr(r(e*n),[e,n]),i=rt(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Gh=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function Qs(r,t){return function(e,n,o){var a=Ot(r(9*e),[3,3,e,1]),i=Ot(r(e*n),[1,1,e,n]),s=rt(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Gh(a,i,s)}}function Zs(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Gh(e,n,o)}}function ur(r,t){return function(e,n,o){var a=r[e];if(!Wa(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function Hn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function jh(r,t){var e=Ha(r,t),n=Qs(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),h=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function wb(r){var t=[],e=Hn(r),n=e.extractWeights,o=e.getRemainingWeights,a=jh(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function qh(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Kh(r,t){var e=ur(r,t),n=qh(e),o=Zs(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Cb(r){var t=[],e=Kh(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Un(r,t),{params:n,paramMappings:t}}var Xh=function(r){me(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return Q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Ao(o,a).div($(255)),s=Ho(i,n.dense0,!0);return s=Ho(s,n.dense1),s=Ho(s,n.dense2),s=Ho(s,n.dense3),s=Do(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Cb(e)},t.prototype.extractParams=function(e){return wb(e)},t}(zn);function Sn(r,t){return Q(function(){return Ie(Oa(r,t.weights),t.bias)})}function Eb(r,t,e){var n=[],o=Hn(r),a=o.extractWeights,i=o.getRemainingWeights,s=Js(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function _b(r){var t=[],e=ur(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return Un(r,t),{params:o,paramMappings:t}}function $h(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Yh=function(r){me(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return Q(function(){var a=e instanceof Ea?n.faceFeatureExtractor.forwardInput(e):e;return Sn(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Eb(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=$h(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),_b(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(zn),Mc=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Sb=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Mc.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Mc.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),Ib=function(r){me(t,r);function t(e){return e===void 0&&(e=new Xh),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return Q(function(){return Wn(n.runNet(e))})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return ie(this,void 0,void 0,function(){var n,o,a,i,s=this;return se(this,function(u){switch(u.label){case 0:return[4,vt(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(lt(o).map(function(c){return ie(s,void 0,void 0,function(){var l;return se(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new Sb(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Yh);function Jh(r,t){var e={expressions:t};return Object.assign({},r,e)}function eu(r){return Ca(r)&&r.landmarks instanceof Kr&&r.unshiftedLandmarks instanceof Kr&&r.alignedRect instanceof $t}function Ga(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new $t(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}var Rb=function(){function r(t){t===void 0&&(t={});var e=t.drawLines,n=e===void 0?!0:e,o=t.drawPoints,a=o===void 0?!0:o,i=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;this.drawLines=n,this.drawPoints=a,this.lineWidth=i||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}(),kb=function(){function r(t,e){e===void 0&&(e={}),this.faceLandmarks=t,this.options=new Rb(e)}return r.prototype.draw=function(t){var e=Tn(t),n=this.options,o=n.drawLines,a=n.drawPoints,i=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;if(o&&this.faceLandmarks instanceof Ph&&(e.strokeStyle=s,e.lineWidth=i,hr(e,this.faceLandmarks.getJawOutline()),hr(e,this.faceLandmarks.getLeftEyeBrow()),hr(e,this.faceLandmarks.getRightEyeBrow()),hr(e,this.faceLandmarks.getNose()),hr(e,this.faceLandmarks.getLeftEye(),!0),hr(e,this.faceLandmarks.getRightEye(),!0),hr(e,this.faceLandmarks.getMouth(),!0)),a){e.strokeStyle=c,e.fillStyle=c;var l=function(f){e.beginPath(),e.arc(f.x,f.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function Db(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof Kr?n:eu(n)?n.landmarks:void 0;if(!o)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new kb(o).draw(r)})}function Tb(r,t){var e=Ha(r,t),n=Qs(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Ab(r,t){var e=[],n=Hn(r),o=n.extractWeights,a=n.getRemainingWeights,i=Tb(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};Co(t,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),y={reduction_block:m,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:y}}}function Nb(r,t){var e=ur(r,t),n=qh(e),o=Zs(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Fb(r,t){var e=[],n=Nb(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Co(t,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Un(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function Qh(r,t,e){return Ie(Zt(r,t.filters,e,"same"),t.bias)}function bi(r,t,e){e===void 0&&(e=!0);var n=e?qe(r):r;return n=qt(n,t.separable_conv0,[1,1]),n=qt(qe(n),t.separable_conv1,[1,1]),n=dt(n,[3,3],[2,2],"same"),n=Ie(n,Qh(r,t.expansion_conv,[2,2])),n}function Mb(r,t){var e=qt(qe(r),t.separable_conv0,[1,1]);return e=qt(qe(e),t.separable_conv1,[1,1]),e=qt(qe(e),t.separable_conv2,[1,1]),e=Ie(e,r),e}var Pb=function(r){me(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return Q(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Ao(a,i).div($(256)),u=qe(Qh(s,o.entry_flow.conv_in,[2,2]));return u=bi(u,o.entry_flow.reduction_block_0,!1),u=bi(u,o.entry_flow.reduction_block_1),Co(n._numMainBlocks,0,1).forEach(function(c){u=Mb(u,o.middle_flow["main_block_"+c])}),u=bi(u,o.exit_flow.reduction_block),u=qe(qt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Fb(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Ab(e,this._numMainBlocks)},t}(zn);function Ob(r){var t=[],e=Hn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Js(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function Bb(r){var t=[],e=ur(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return Un(r,t),{params:o,paramMappings:t}}var _a;(function(r){r.FEMALE="female",r.MALE="male"})(_a||(_a={}));var Lb=function(r){me(t,r);function t(e){e===void 0&&(e=new Pb(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return Q(function(){var a=e instanceof Ea?n.faceFeatureExtractor.forwardInput(e):e,i=Do(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Sn(i,o.fc.age).as1D(),u=Sn(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return Q(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:Wn(i)}})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return ie(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return se(this,function(l){switch(l.label){case 0:return[4,vt(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=lt(o.age),i=lt(o.gender),s=a.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return ie(c,void 0,void 0,function(){var p,v,m,g,y;return se(this,function(b){switch(b.label){case 0:return[4,h.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],m=v>.5,g=m?_a.MALE:_a.FEMALE,y=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Ob(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=$h(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Bb(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(zn),Zh=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return Q(function(){var s=function(h,d){return Xt([In([68],h),In([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=a[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(In([i,136],n)).sub(Xt(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(Xt(Array.from(Array(i),function(h,d){return s(a[d].width,a[d].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return Q(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return ie(this,void 0,void 0,function(){var n,o,a,i=this;return se(this,function(s){switch(s.label){case 0:return[4,vt(e)];case 1:return n=s.sent(),o=Q(function(){return lt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return ie(i,void 0,void 0,function(){var l,f,h,d,p;return se(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return kc(g)}),p=l.filter(function(m,g){return!kc(g)}),[2,new Ph(Array(68).fill(0).map(function(m,g){return new Oe(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Yh),ed=function(r){me(t,r);function t(e){return e===void 0&&(e=new Xh),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Zh);function Wb(r){var t=[],e=Kh(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Un(r,t),{params:n,paramMappings:t}}function Vb(r){var t=[],e=Hn(r),n=e.extractWeights,o=e.getRemainingWeights,a=jh(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var zb=function(r){me(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return Q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Ao(o,a).div($(255)),s=xi(i,n.dense0,!0);return s=xi(s,n.dense1),s=xi(s,n.dense2),s=Do(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Wb(e)},t.prototype.extractParams=function(e){return Vb(e)},t}(zn),Ub=function(r){me(t,r);function t(e){return e===void 0&&(e=new zb),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Zh);(function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(ed);function Hb(r,t){return Ie(Rt(r,t.weights),t.biases)}function tu(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=Zt(r,i,e,o);return u=Ie(u,s),u=Hb(u,t.scale),n?qe(u):u}function Gb(r,t){return tu(r,t,[1,1],!0)}function td(r,t){return tu(r,t,[1,1],!1)}function nd(r,t){return tu(r,t,[2,2],!0,"valid")}function jb(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(Zx(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return Q(function(){return or(Ot(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),h=rt(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=rt(r(s)),l=rt(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=a((f?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function qb(r){var t=Hn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=jb(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),x=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),R=Q(function(){return or(tr(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var _={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:y,conv256_down:b,conv256_1:x,conv256_2:w,conv256_down_out:C,fc:R};return{params:_,paramMappings:o}}function Kb(r,t){var e=ur(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Xb(r){var t=[],e=Kb(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),y=o("conv256_2"),b=o("conv256_down_out"),x=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Qx(x))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+x);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:y,conv256_down_out:b,fc:x};return Un(r,t),{params:w,paramMappings:t}}function wn(r,t){var e=Gb(r,t.conv1);return e=td(e,t.conv2),e=Ie(e,r),e=qe(e),e}function Go(r,t){var e=nd(r,t.conv1);e=td(e,t.conv2);var n=Do(r,2,2,"valid"),o=We(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=lo(e.shape);s[1]=1;var u=We(s);e=ct([e,u],1);var c=lo(e.shape);c[2]=1;var l=We(c);e=ct([e,l],2)}return n=a?ct([n,o],3):n,e=Ie(n,e),e=qe(e),e}var $b=function(r){me(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return Q(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=Ao(o,a).div($(256)),s=nd(i,n.conv32_down);s=dt(s,3,2,"valid"),s=wn(s,n.conv32_1),s=wn(s,n.conv32_2),s=wn(s,n.conv32_3),s=Go(s,n.conv64_down),s=wn(s,n.conv64_1),s=wn(s,n.conv64_2),s=wn(s,n.conv64_3),s=Go(s,n.conv128_down),s=wn(s,n.conv128_1),s=wn(s,n.conv128_2),s=Go(s,n.conv256_down),s=wn(s,n.conv256_1),s=wn(s,n.conv256_2),s=Go(s,n.conv256_down_out);var u=s.mean([1,2]),c=Oa(u,n.fc);return c})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return ie(this,void 0,void 0,function(){var n,o,a,i=this;return se(this,function(s){switch(s.label){case 0:return[4,vt(e)];case 1:return n=s.sent(),o=Q(function(){return lt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Xb(e)},t.prototype.extractParams=function(e){return qb(e)},t}(zn);function rd(r,t){var e={descriptor:t};return Object.assign({},r,e)}function od(r,t){var e={age:t};return Object.assign({},r,e)}function ad(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var id=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Yb(r,t){function e(u,c){var l=Ot(r(9*u),[3,3,u,1]),f=rt(r(u)),h=rt(r(u)),d=rt(r(u)),p=rt(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,f,h){var d=Ot(r(u*c*l*l),[l,l,u,c]),p=rt(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=n(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),h=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),v=a(512,512,"mobilenetv1/conv_7"),m=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),y=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),x=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:y,conv_11:b,conv_12:x,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),x=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),R=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),T=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:m,class_predictor:g},O={box_encoding_predictor:y,class_predictor:b},P={box_encoding_predictor:x,class_predictor:w},M={box_encoding_predictor:C,class_predictor:R},L={box_encoding_predictor:_,class_predictor:S},B={box_encoding_predictor:I,class_predictor:T};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:D,box_predictor_1:O,box_predictor_2:P,box_predictor_3:M,box_predictor_4:L,box_predictor_5:B}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Jb(r){var t=[],e=Hn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Yb(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=ls(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function Qb(r,t){var e=ur(r,t);function n(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),y=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:y},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Zb(r){var t=[],e=Qb(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Va(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return Un(r,t),{params:i,paramMappings:t}}function Cn(r,t,e){return Q(function(){var n=Zt(r,t.filters,e,"same");return n=Ie(n,t.batch_norm_offset),Is(n,0,6)})}var e1=.0010000000474974513;function t1(r,t,e){return Q(function(){var n=Pa(r,t.filters,e,"same");return n=Jf(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,e1),Is(n,0,6)})}function n1(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function r1(r,t){return Q(function(){var e=null,n=Cn(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=n1(s);n=t1(n,a.depthwise_conv,u),n=Cn(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function o1(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=a1(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function a1(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),h=(i-o)*(s-a),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(a,c),m=Math.min(i,l),g=Math.min(s,f),y=Math.max(m-p,0)*Math.max(g-v,0);return y/(h+d-y)}function i1(r){var t=lt(or(r,[1,0])),e=[ft(t[2],t[0]),ft(t[3],t[1])],n=[Ie(t[0],un(e[0],$(2))),Ie(t[1],un(e[1],$(2)))];return{sizes:e,centers:n}}function s1(r,t){var e=i1(r),n=e.sizes,o=e.centers,a=lt(or(t,[1,0])),i=un(Rt(Ui(un(a[2],$(5))),n[0]),$(2)),s=Ie(Rt(un(a[0],$(10)),n[0]),o[0]),u=un(Rt(Ui(un(a[3],$(5))),n[1]),$(2)),c=Ie(Rt(un(a[1],$(10)),n[1]),o[1]);return or(Xt([ft(s,i),ft(c,u),Ie(s,i),Ie(c,u)]),[1,0])}function u1(r,t,e){return Q(function(){var n=r.shape[0],o=s1(cn(Lr(e.extra_dim,[n,1,1]),[-1,4]),cn(r,[-1,4]));o=cn(o,[n,o.shape[0]/n,4]);var a=Kf(kn(t,[0,0,1],[-1,-1,-1])),i=kn(a,[0,0,0],[-1,-1,1]);i=cn(i,[n,i.shape[1]]);var s=lt(o),u=lt(i);return{boxes:s,scores:u}})}function Fr(r,t){return Q(function(){var e=r.shape[0],n=cn(hn(r,t.box_encoding_predictor),[e,-1,1,4]),o=cn(hn(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function c1(r,t,e){return Q(function(){var n=Cn(r,e.conv_0,[1,1]),o=Cn(n,e.conv_1,[2,2]),a=Cn(o,e.conv_2,[1,1]),i=Cn(a,e.conv_3,[2,2]),s=Cn(i,e.conv_4,[1,1]),u=Cn(s,e.conv_5,[2,2]),c=Cn(u,e.conv_6,[1,1]),l=Cn(c,e.conv_7,[2,2]),f=Fr(t,e.box_predictor_0),h=Fr(r,e.box_predictor_1),d=Fr(o,e.box_predictor_2),p=Fr(i,e.box_predictor_3),v=Fr(u,e.box_predictor_4),m=Fr(l,e.box_predictor_5),g=ct([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),y=ct([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:y}})}var No=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),sd=function(r){me(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return Q(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=ft(Rt(o,$(.007843137718737125)),$(1)),i=r1(a,n.mobilenetv1),s=c1(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return u1(u,c,n.output_layer)})},t.prototype.forward=function(e){return ie(this,void 0,void 0,function(){var n;return se(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,vt(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),ie(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,y,b,x,w,C,R,_;return se(this,function(S){switch(S.label){case 0:return o=new No(n),a=o.maxResults,i=o.minConfidence,[4,vt(e)];case 1:for(s=S.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[S.sent()]),g=.5,y=o1(f,p,a,g,i),b=s.getReshapedInputDimensions(0),x=s.inputSize,w=x/b.width,C=x/b.height,R=f.arraySync(),_=y.map(function(I){var T=[Math.max(0,R[I][0]),Math.min(1,R[I][2])].map(function(B){return B*C}),D=T[0],O=T[1],P=[Math.max(0,R[I][1]),Math.min(1,R[I][3])].map(function(B){return B*w}),M=P[0],L=P[1];return new $t(p[I],new Gs(M,D,L-M,O-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,_]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Zb(e)},t.prototype.extractParams=function(e){return Jb(e)},t}(zn);(function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(sd);var l1=.4,f1=[new Oe(.738768,.874946),new Oe(2.42204,2.65704),new Oe(4.30971,7.04493),new Oe(10.246,4.59428),new Oe(12.6868,11.8741)],h1=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],d1=[117.001,114.697,97.404],p1="tiny_yolov2_model",v1="tiny_yolov2_separable_conv_model",jo=function(r){return typeof r=="number"};function m1(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!jo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return jo(t.x)&&jo(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(jo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function nu(r){return Q(function(){var t=Rt(r,$(.10000000149011612));return Ie(qe(ft(r,t)),t)})}function $n(r,t){return Q(function(){var e=Ir(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Zt(e,t.conv.filters,[1,1],"valid"),e=ft(e,t.bn.sub),e=Rt(e,t.bn.truediv),e=Ie(e,t.conv.bias),nu(e)})}function Yn(r,t){return Q(function(){var e=Ir(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Ts(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=Ie(e,t.bias),nu(e)})}function g1(r,t){var e=Ha(r,t);function n(i,s){var u=rt(r(i)),c=rt(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=Qs(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function y1(r,t,e,n){var o=Hn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=g1(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),R=f(p,v,"conv1"),_=f(v,m,"conv2"),S=f(m,g,"conv3"),I=f(g,y,"conv4"),T=f(y,b,"conv5"),D=x?f(b,x,"conv6"):void 0,O=w?f(x,w,"conv7"):void 0,P=c(w||x||b,5*e,1,"conv8");h={conv0:C,conv1:R,conv2:_,conv3:S,conv4:I,conv5:T,conv6:D,conv7:O,conv8:P}}else{var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=l(d,p,"conv0"),R=l(p,v,"conv1"),_=l(v,m,"conv2"),S=l(m,g,"conv3"),I=l(g,y,"conv4"),T=l(y,b,"conv5"),D=l(b,x,"conv6"),O=l(x,w,"conv7"),P=c(w,5*e,1,"conv8");h={conv0:C,conv1:R,conv2:_,conv3:S,conv4:I,conv5:T,conv6:D,conv7:O,conv8:P}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function x1(r,t){var e=ur(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=Zs(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function b1(r,t){var e=[],n=x1(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Un(r,e),{params:s,paramMappings:e}}var Pc;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Pc||(Pc={}));var ru=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),ud=function(r){me(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return m1(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=$n(e,n.conv0);return o=dt(o,[2,2],[2,2],"same"),o=$n(o,n.conv1),o=dt(o,[2,2],[2,2],"same"),o=$n(o,n.conv2),o=dt(o,[2,2],[2,2],"same"),o=$n(o,n.conv3),o=dt(o,[2,2],[2,2],"same"),o=$n(o,n.conv4),o=dt(o,[2,2],[2,2],"same"),o=$n(o,n.conv5),o=dt(o,[2,2],[1,1],"same"),o=$n(o,n.conv6),o=$n(o,n.conv7),hn(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?nu(hn(e,n.conv0,"valid",!1)):Yn(e,n.conv0);return o=dt(o,[2,2],[2,2],"same"),o=Yn(o,n.conv1),o=dt(o,[2,2],[2,2],"same"),o=Yn(o,n.conv2),o=dt(o,[2,2],[2,2],"same"),o=Yn(o,n.conv3),o=dt(o,[2,2],[2,2],"same"),o=Yn(o,n.conv4),o=dt(o,[2,2],[2,2],"same"),o=Yn(o,n.conv5),o=dt(o,[2,2],[1,1],"same"),o=n.conv6?Yn(o,n.conv6):o,o=n.conv7?Yn(o,n.conv7):o,hn(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return Q(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?Ao(i,o.config.meanRgb):i,i=i.div($(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return ie(this,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,vt(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),ie(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,y=this;return se(this,function(b){switch(b.label){case 0:return o=new ru(n),a=o.inputSize,i=o.scoreThreshold,[4,vt(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=Q(function(){return lt(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=b.sent(),u.dispose(),c.dispose(),h=f.map(function(x){return x.box}),d=f.map(function(x){return x.score}),p=f.map(function(x){return x.classScore}),v=f.map(function(x){return y.config.classes[x.label]}),m=Eo(h.map(function(x){return x.rescale(a)}),d,this.config.iouThreshold,!0),g=m.map(function(x){return new Mh(d[x],p[x],v[x],h[x],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return b1(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return y1(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return ie(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,y,b,x,w,C,R,_,S,I,T,D,O,P,M,L,B,W=this;return se(this,function(U){switch(U.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=Q(function(){var G=e.reshape([l,l,f,W.boxEncodingSize]),K=G.slice([0,0,0,0],[l,l,f,4]),X=G.slice([0,0,0,4],[l,l,f,1]),j=W.withClassScores?Wn(G.slice([0,0,0,5],[l,l,f,W.config.classes.length]),3):$(0);return[K,X,j]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=U.sent(),[4,d.array()];case 2:y=U.sent(),b=0,U.label=3;case 3:if(!(b<l))return[3,12];x=0,U.label=4;case 4:if(!(x<l))return[3,11];w=0,U.label=5;case 5:return w<f?(C=yi(g[b][x][w][0]),!o||C>o?(R=(x+yi(y[b][x][w][0]))/l*u,_=(b+yi(y[b][x][w][1]))/l*c,S=Math.exp(y[b][x][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(y[b][x][w][3])*this.config.anchors[w].y/l*c,T=R-S/2,D=_-I/2,O={row:b,col:x,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,O)]:[3,7]):[3,9]):[3,10];case 6:return B=U.sent(),[3,8];case 7:B={classScore:1,label:0},U.label=8;case 8:P=B,M=P.classScore,L=P.label,m.push(_t({box:new za(T,D,T+S,D+I),score:C,classScore:C*M,label:L},O)),U.label=9;case 9:return w++,[3,5];case 10:return x++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,n){return ie(this,void 0,void 0,function(){var o,a,i,s;return se(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(zn),w1=function(r){me(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:l1,classes:["face"]},e?{anchors:h1,meanRgb:d1}:{anchors:f1,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ie(this,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new $t(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?v1:p1},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(ud),C1=function(r){me(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(ru),Fo=function(){function r(){}return r.prototype.then=function(t){return ie(this,void 0,void 0,function(){var e;return se(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return ie(this,void 0,void 0,function(){return se(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function ja(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),ie(this,void 0,void 0,function(){var a,i,s,u,c;return se(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return eu(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof je?[4,Ys(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,$s(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof je&&f.dispose()}),[2,c]}})})}function ou(r,t,e,n,o){return ie(this,void 0,void 0,function(){var a=this;return se(this,function(i){return[2,ja([r],t,function(s){return ie(a,void 0,void 0,function(){return se(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function E1(r){return Q(function(){return Xt(lt(r,3).reverse(),3)})}var qo=2,Sa=12;function _1(r,t){var e=Ha(r,t),n=Js(r,t);function o(c,l){var f=rt(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return _t(_t({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return _t(_t({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),v=n(256,4,"onet/fc2_2"),m=n(256,10,"onet/fc2_3");return _t(_t({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function S1(r){var t=Hn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=_1(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function I1(r,t){var e=ur(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),h=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),v=n(l+"/conv3"),m=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),h=n("pnet/conv4_2");return _t(_t({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=o("rnet/fc1"),h=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return _t(_t({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=n("onet/conv4"),h=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return _t(_t({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function R1(r){var t=[],e=I1(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return Un(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Yi(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function k1(r,t,e){for(var n=e[0],o=e[1],a=Sa/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var au=function(r){me(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(Dn);function cd(r){return Q(function(){return Rt(ft(r,$(127.5)),$(.0078125))})}function Hr(r,t){return Q(function(){return Ie(qe(r),Rt(t,ya(qe(ya(r)))))})}function iu(r,t,e){return e===void 0&&(e=!1),Q(function(){var n=hn(r,t.conv1,"valid");return n=Hr(n,t.prelu1_alpha),n=dt(n,e?[2,2]:[3,3],[2,2],"same"),n=hn(n,t.conv2,"valid"),n=Hr(n,t.prelu2_alpha),n=e?n:dt(n,[3,3],[2,2],"valid"),n=hn(n,t.conv3,"valid"),n=Hr(n,t.prelu3_alpha),n})}function D1(r,t){return Q(function(){var e=iu(r,t,!0),n=hn(e,t.conv4_1,"valid"),o=Jt(Ba(n,3),3),a=Wn(ft(n,o),3),i=hn(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function T1(r,t){return Q(function(){var e=Yi(t,r.shape.slice(1)),n=e.height,o=e.width,a=Ps.resizeBilinear(r,[n,o]),i=cd(a);return or(i,[0,2,1,3])})}function A1(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new Oe(s,i));var u=o.map(function(c){var l=new za(Math.round((c.y*qo+1)/e),Math.round((c.x*qo+1)/e),Math.round((c.y*qo+Sa)/e),Math.round((c.x*qo+Sa)/e)),f=a[c.y][c.x],h=t.arraySync(),d=new au(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function N1(r,t,e,n,o){o.stage1=[];var a=t.map(function(h){return Q(function(){var d={scale:h},p=T1(r,h),v=Date.now(),m=D1(p,n),g=m.prob,y=m.regions;d.pnet=Date.now()-v;var b=lt(lt(g,3)[1])[0],x=lt(y)[0];return{scoresTensor:b,regionsTensor:x,scale:h,statsForScale:d}})}),i=a.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=A1(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var y=Date.now(),b=Eo(g.map(function(x){return x.cell}),g.map(function(x){return x.score}),.5);return m.nms=Date.now()-y,m.numBoxes=b.length,o.stage1.push(m),b.map(function(x){return g[x]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Eo(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new za(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function ld(r,t,e){var n=e.width,o=e.height;return ie(this,void 0,void 0,function(){var a,i,s,u=this;return se(this,function(c){switch(c.label){case 0:return a=Tn(r),[4,Promise.all(t.map(function(l){return ie(u,void 0,void 0,function(){var f,h,d,p,v,m,g,y;return se(this,function(b){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,y=a.getImageData(m,g,v-m,d-g),[2,kt.isNodejs()?Xs(y):createImageBitmap(y)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=Ua({width:n,height:o}),h=Tn(f);h.drawImage(l,0,0,n,o);for(var d=h.getImageData(0,0,n,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=Q(function(){var h=or(Ot(l,[1,n,o,3]),[0,2,1,3]).toFloat();return cd(h)});return f})]}})})}function F1(r,t){return Q(function(){var e=iu(r,t),n=cn(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Sn(n,t.fc1),a=Hr(o,t.prelu4_alpha),i=Sn(a,t.fc2_1),s=Jt(Ba(i,1),1),u=Wn(ft(i,s),1),c=Sn(a,t.fc2_2),l=lt(u,1)[1];return{scores:l,regions:c}})}function M1(r,t,e,n,o){return ie(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,y;return se(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,ld(r,t,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(x){var w=F1(x,n);return x.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?ct(s.map(function(x){return x.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(x,w){return{score:x,idx:w}}).filter(function(x){return x.score>e}).map(function(x){var w=x.idx;return w}),d=h.map(function(x){return t[x]}),p=h.map(function(x){return c[x]}),v=[],m=[],d.length>0&&(a=Date.now(),g=Eo(d,p,.7),o.stage2_nms=Date.now()-a,y=g.map(function(x){var w=s[h[x]].regions.arraySync();return new au(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(x){return p[x]}),v=g.map(function(x,w){return d[x].calibrate(y[w])})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function P1(r,t){return Q(function(){var e=iu(r,t);e=dt(e,[2,2],[2,2],"same"),e=hn(e,t.conv4,"valid"),e=Hr(e,t.prelu4_alpha);var n=cn(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Sn(n,t.fc1),a=Hr(o,t.prelu5_alpha),i=Sn(a,t.fc2_1),s=Jt(Ba(i,1),1),u=Wn(ft(i,s),1),c=Sn(a,t.fc2_2),l=Sn(a,t.fc2_3),f=lt(u,1)[1];return{scores:f,regions:c,points:l}})}function O1(r,t,e,n,o){return ie(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,y,b;return se(this,function(x){switch(x.label){case 0:return a=Date.now(),[4,ld(r,t,{width:48,height:48})];case 1:return i=x.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=P1(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?ct(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=h.map(function(w){var C=s[w].regions.arraySync();return new au(C[0][0],C[0][1],C[0][2],C[0][3])}),p=h.map(function(w,C){return t[w].calibrate(d[C])}),v=h.map(function(w){return c[w]}),m=[],g=[],y=[],p.length>0&&(a=Date.now(),b=Eo(p,v,.7,!1),o.stage3_nms=Date.now()-a,m=b.map(function(w){return p[w]}),g=b.map(function(w){return v[w]}),y=b.map(function(w,C){return Array(5).fill(0).map(function(R,_){var S=s[w].points.arraySync();return new Oe(S[0][_]*(m[C].width+1)+m[C].left,S[0][_+5]*(m[C].height+1)+m[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:y}]}})})}var B1=function(r){me(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return ie(this,void 0,void 0,function(){return se(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return ie(this,void 0,void 0,function(){return se(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),ie(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,y,b,x,w,C,R,_;return se(this,function(S){switch(S.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=Q(function(){return E1(Jt(zs.fromPixels(a)).toFloat())}),c=function(I){return u.dispose(),i.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],d=new id(n),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,y=d.scaleSteps,b=(y||k1(p,v,[f,h])).filter(function(I){var T=Yi(I,[f,h]);return Math.min(T.width,T.height)>Sa}).slice(0,m),i.scales=b,i.pyramid=b.map(function(I){return Yi(I,[f,h])}),x=Date.now(),[4,N1(u,b,g[0],o.pnet,i)];case 1:return w=S.sent(),i.total_stage1=Date.now()-x,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,x=Date.now(),[4,M1(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=S.sent(),i.total_stage2=Date.now()-x,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,x=Date.now(),[4,O1(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return R=S.sent(),i.total_stage3=Date.now()-x,_=R.boxes.map(function(I,T){return Ga(_o({},new $t(R.scores[T],new Gs(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new sb(R.points[T].map(function(D){return D.sub(new Oe(I.left,I.top)).div(new Oe(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:_,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),ie(this,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,vt(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),ie(this,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,vt(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return R1(e)},t.prototype.extractParams=function(e){return S1(e)},t}(zn),L1=.4,W1=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],V1=[117.001,114.697,97.404],z1=function(r){me(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:L1,classes:["face"],anchors:W1,meanRgb:V1,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ie(this,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new $t(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(ud),Kt={ssdMobilenetv1:new sd,tinyFaceDetector:new z1,tinyYolov2:new w1,mtcnn:new B1,faceLandmark68Net:new ed,faceLandmark68TinyNet:new Ub,faceRecognitionNet:new $b,faceExpressionNet:new Ib,ageGenderNet:new Lb},fd=function(r){me(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(Fo),su=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o=this;return se(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ja(e,this.input,function(i){return ie(o,void 0,void 0,function(){return se(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Kt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return Jh(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new fu(this,this.input)},t}(fd),uu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n;return se(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ou(e,this.input,function(a){return Kt.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Jh(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new hu(this,this.input)},t}(fd),cu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new du(this,this.input)},t.prototype.withFaceDescriptors=function(){return new vu(this,this.input)},t}(su),lu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new pu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new mu(this,this.input)},t}(uu),hd=function(r){me(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(Fo),fu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o=this;return se(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ja(e,this.input,function(i){return ie(o,void 0,void 0,function(){return se(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Kt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return od(ad(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new su(this,this.input)},t}(hd),hu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o,a,i;return se(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,ou(e,this.input,function(u){return Kt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,od(ad(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new uu(this,this.input)},t}(hd),du=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new cu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new vu(this,this.input)},t}(fu),pu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new lu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new mu(this,this.input)},t}(hu),dd=function(r){me(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(Fo),vu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n;return se(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,ja(e,this.input,function(a){return Promise.all(a.map(function(i){return Kt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return rd(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new cu(this,this.input)},t.prototype.withAgeAndGender=function(){return new du(this,this.input)},t}(dd),mu=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n;return se(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ou(e,this.input,function(a){return Kt.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,rd(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new lu(this,this.input)},t.prototype.withAgeAndGender=function(){return new pu(this,this.input)},t}(dd),pd=function(r){me(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Kt.faceLandmark68TinyNet:Kt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Fo),U1=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return se(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof je?[4,Ys(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,$s(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof je&&c.dispose()}),[2,e.map(function(c,l){return Ga(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new cu(this,this.input)},t.prototype.withAgeAndGender=function(){return new du(this,this.input)},t.prototype.withFaceDescriptors=function(){return new vu(this,this.input)},t}(pd),H1=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o,a,i;return se(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof je?[4,Ys(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,$s(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof je&&u.dispose()}),[2,Ga(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new lu(this,this.input)},t.prototype.withAgeAndGender=function(){return new pu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new mu(this,this.input)},t}(pd),vd=function(r){me(t,r);function t(e,n){n===void 0&&(n=new No);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(Fo),md=function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n,o,a;return se(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof id?[4,Kt.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof C1?function(s){return Kt.tinyFaceDetector.locateFaces(s,o)}:o instanceof No?function(s){return Kt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof ru?function(s){return Kt.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return ie(e,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return _o({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new U1(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new su(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new fu(this.runAndExtendWithFaceDetections(),this.input)},t}(vd);(function(r){me(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var e,n;return se(this,function(o){switch(o.label){case 0:return[4,new md(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return ie(e,void 0,void 0,function(){var o;return se(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?_o({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new H1(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new uu(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new hu(this.runAndExtendWithFaceDetection(),this.input)},t})(vd);function G1(r,t){return t===void 0&&(t=new No),new md(r,t)}function j1(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Uo)return i;if(i instanceof Float32Array)return new Uo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Uo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return j1(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Ac(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Ac("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Uo.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function gd(r,t){var e=new xr(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return gd(s,{width:n,height:o})});if(eu(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return Ga(_o(r,a),i)}return Ca(r)?_o(r,r.detection.forSize(n,o)):r instanceof Kr||r instanceof $t?r.forSize(n,o):r}var q1=function(t){N.exports.useEffect(function(){t==null||t()},[])},K1=q1;const X1=.5;function $1(){return Kt.ssdMobilenetv1}function Y1(){return!!$1().params}function J1(){return new No({minConfidence:X1})}function tw(){const r=Xa.useRef(),t=Xa.useRef(),[e,n]=N.exports.useState(""),[o,a]=N.exports.useState(""),[i,s]=N.exports.useState("ssd_mobilenetv1"),[u,c]=N.exports.useState("512"),[l,f]=N.exports.useState([]),h=Xa.useRef(),d=g=>{const y=[g].concat(l).slice(0,30),b=y.reduce((x,w)=>x+w)/l.length;n(`${Math.round(b)} ms`),a(`${Us(1e3/b)}`),f(y)},p=async()=>{if(!r.current||!t.current)return;if(!r.current.currentTime||r.current.paused||r.current.ended||!Y1()){setTimeout(()=>p());return}const g=J1(),y=Date.now();let b=G1(r.current,g);b=b.withFaceLandmarks();const x=await b;d(Date.now()-y);const w=bb(t.current,r.current,!0),C=gd(x,w);db(t.current,C),Db(t.current,C),setTimeout(()=>p())},v=()=>{window.navigator.mediaDevices.getUserMedia({video:!0}).then(g=>{r.current&&(h.current=g,r.current.srcObject=g,p())}).catch(g=>console.error(g))},m=()=>{var g;(g=h.current)==null||g.getTracks().forEach(y=>y.stop()),!!r.current&&(r.current.pause(),r.current.srcObject=null)};return K1(()=>{}),Po("div",{children:[Po(Pd,{children:[Tt(Iu,{onClick:v,children:"\u5F00\u542F\u6444\u50CF\u5934"}),Tt(Iu,{onClick:m,children:"\u5173\u95ED\u6444\u50CF\u5934"}),Po(bn,{value:i,onChange:g=>s(g),children:[Tt(bn.Option,{value:"ssd_mobilenetv1",children:"ssd_mobilenetv1"}),Tt(bn.Option,{value:"tiny_face_detector",children:"tiny_face_detector"})]}),Po(bn,{value:u,onChange:g=>c(g),children:[Tt(bn.Option,{value:"160",children:"160 x 160"}),Tt(bn.Option,{value:"224",children:"224 x 224"}),Tt(bn.Option,{value:"320",children:"320 x 320"}),Tt(bn.Option,{value:"416",children:"416 x 416"}),Tt(bn.Option,{value:"512",children:"512 x 512"}),Tt(bn.Option,{value:"608",children:"608 x 608"})]})]}),Tt("div",{children:e}),Tt("div",{children:o}),Tt("video",{ref:g=>{r.current=g},width:"720",height:"560",autoPlay:!0,muted:!0}),Tt("div",{children:Tt("canvas",{ref:g=>{t.current=g}})})]})}export{tw as default};
