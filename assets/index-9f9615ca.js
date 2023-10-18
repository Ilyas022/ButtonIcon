(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();function Ot(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var It={exports:{}},L0={},Wt={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R4=Symbol.for("react.element"),tU=Symbol.for("react.portal"),oU=Symbol.for("react.fragment"),fU=Symbol.for("react.strict_mode"),uU=Symbol.for("react.profiler"),mU=Symbol.for("react.provider"),vU=Symbol.for("react.context"),pU=Symbol.for("react.forward_ref"),hU=Symbol.for("react.suspense"),HU=Symbol.for("react.memo"),dU=Symbol.for("react.lazy"),ns=Symbol.iterator;function zU(c){return c===null||typeof c!="object"?null:(c=ns&&c[ns]||c["@@iterator"],typeof c=="function"?c:null)}var Gt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qt=Object.assign,jt={};function T3(c,a,e){this.props=c,this.context=a,this.refs=jt,this.updater=e||Gt}T3.prototype.isReactComponent={};T3.prototype.setState=function(c,a){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,a,"setState")};T3.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function $t(){}$t.prototype=T3.prototype;function g7(c,a,e){this.props=c,this.context=a,this.refs=jt,this.updater=e||Gt}var L7=g7.prototype=new $t;L7.constructor=g7;qt(L7,T3.prototype);L7.isPureReactComponent=!0;var is=Array.isArray,Qt=Object.prototype.hasOwnProperty,S7={current:null},Xt={key:!0,ref:!0,__self:!0,__source:!0};function Yt(c,a,e){var r,n={},i=null,l=null;if(a!=null)for(r in a.ref!==void 0&&(l=a.ref),a.key!==void 0&&(i=""+a.key),a)Qt.call(a,r)&&!Xt.hasOwnProperty(r)&&(n[r]=a[r]);var s=arguments.length-2;if(s===1)n.children=e;else if(1<s){for(var t=Array(s),o=0;o<s;o++)t[o]=arguments[o+2];n.children=t}if(c&&c.defaultProps)for(r in s=c.defaultProps,s)n[r]===void 0&&(n[r]=s[r]);return{$$typeof:R4,type:c,key:i,ref:l,props:n,_owner:S7.current}}function VU(c,a){return{$$typeof:R4,type:c.type,key:a,ref:c.ref,props:c.props,_owner:c._owner}}function x7(c){return typeof c=="object"&&c!==null&&c.$$typeof===R4}function MU(c){var a={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(e){return a[e]})}var ls=/\/+/g;function E8(c,a){return typeof c=="object"&&c!==null&&c.key!=null?MU(""+c.key):a.toString(36)}function F6(c,a,e,r,n){var i=typeof c;(i==="undefined"||i==="boolean")&&(c=null);var l=!1;if(c===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(c.$$typeof){case R4:case tU:l=!0}}if(l)return l=c,n=n(l),c=r===""?"."+E8(l,0):r,is(n)?(e="",c!=null&&(e=c.replace(ls,"$&/")+"/"),F6(n,a,e,"",function(o){return o})):n!=null&&(x7(n)&&(n=VU(n,e+(!n.key||l&&l.key===n.key?"":(""+n.key).replace(ls,"$&/")+"/")+c)),a.push(n)),1;if(l=0,r=r===""?".":r+":",is(c))for(var s=0;s<c.length;s++){i=c[s];var t=r+E8(i,s);l+=F6(i,a,e,t,n)}else if(t=zU(c),typeof t=="function")for(c=t.call(c),s=0;!(i=c.next()).done;)i=i.value,t=r+E8(i,s++),l+=F6(i,a,e,t,n);else if(i==="object")throw a=String(c),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return l}function o6(c,a,e){if(c==null)return c;var r=[],n=0;return F6(c,r,"","",function(i){return a.call(e,i,n++)}),r}function CU(c){if(c._status===-1){var a=c._result;a=a(),a.then(function(e){(c._status===0||c._status===-1)&&(c._status=1,c._result=e)},function(e){(c._status===0||c._status===-1)&&(c._status=2,c._result=e)}),c._status===-1&&(c._status=0,c._result=a)}if(c._status===1)return c._result.default;throw c._result}var v2={current:null},R6={transition:null},gU={ReactCurrentDispatcher:v2,ReactCurrentBatchConfig:R6,ReactCurrentOwner:S7};B.Children={map:o6,forEach:function(c,a,e){o6(c,function(){a.apply(this,arguments)},e)},count:function(c){var a=0;return o6(c,function(){a++}),a},toArray:function(c){return o6(c,function(a){return a})||[]},only:function(c){if(!x7(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};B.Component=T3;B.Fragment=oU;B.Profiler=uU;B.PureComponent=g7;B.StrictMode=fU;B.Suspense=hU;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gU;B.cloneElement=function(c,a,e){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var r=qt({},c.props),n=c.key,i=c.ref,l=c._owner;if(a!=null){if(a.ref!==void 0&&(i=a.ref,l=S7.current),a.key!==void 0&&(n=""+a.key),c.type&&c.type.defaultProps)var s=c.type.defaultProps;for(t in a)Qt.call(a,t)&&!Xt.hasOwnProperty(t)&&(r[t]=a[t]===void 0&&s!==void 0?s[t]:a[t])}var t=arguments.length-2;if(t===1)r.children=e;else if(1<t){s=Array(t);for(var o=0;o<t;o++)s[o]=arguments[o+2];r.children=s}return{$$typeof:R4,type:c.type,key:n,ref:i,props:r,_owner:l}};B.createContext=function(c){return c={$$typeof:vU,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:mU,_context:c},c.Consumer=c};B.createElement=Yt;B.createFactory=function(c){var a=Yt.bind(null,c);return a.type=c,a};B.createRef=function(){return{current:null}};B.forwardRef=function(c){return{$$typeof:pU,render:c}};B.isValidElement=x7;B.lazy=function(c){return{$$typeof:dU,_payload:{_status:-1,_result:c},_init:CU}};B.memo=function(c,a){return{$$typeof:HU,type:c,compare:a===void 0?null:a}};B.startTransition=function(c){var a=R6.transition;R6.transition={};try{c()}finally{R6.transition=a}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(c,a){return v2.current.useCallback(c,a)};B.useContext=function(c){return v2.current.useContext(c)};B.useDebugValue=function(){};B.useDeferredValue=function(c){return v2.current.useDeferredValue(c)};B.useEffect=function(c,a){return v2.current.useEffect(c,a)};B.useId=function(){return v2.current.useId()};B.useImperativeHandle=function(c,a,e){return v2.current.useImperativeHandle(c,a,e)};B.useInsertionEffect=function(c,a){return v2.current.useInsertionEffect(c,a)};B.useLayoutEffect=function(c,a){return v2.current.useLayoutEffect(c,a)};B.useMemo=function(c,a){return v2.current.useMemo(c,a)};B.useReducer=function(c,a,e){return v2.current.useReducer(c,a,e)};B.useRef=function(c){return v2.current.useRef(c)};B.useState=function(c){return v2.current.useState(c)};B.useSyncExternalStore=function(c,a,e){return v2.current.useSyncExternalStore(c,a,e)};B.useTransition=function(){return v2.current.useTransition()};B.version="18.2.0";Wt.exports=B;var d3=Wt.exports;const y7=Ot(d3);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LU=d3,SU=Symbol.for("react.element"),xU=Symbol.for("react.fragment"),yU=Object.prototype.hasOwnProperty,wU=LU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kU={key:!0,ref:!0,__self:!0,__source:!0};function Kt(c,a,e){var r,n={},i=null,l=null;e!==void 0&&(i=""+e),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(l=a.ref);for(r in a)yU.call(a,r)&&!kU.hasOwnProperty(r)&&(n[r]=a[r]);if(c&&c.defaultProps)for(r in a=c.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:SU,type:c,key:i,ref:l,props:n,_owner:wU.current}}L0.Fragment=xU;L0.jsx=Kt;L0.jsxs=Kt;It.exports=L0;var W2=It.exports,h5={},Jt={exports:{}},S2={},Zt={exports:{}},co={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(c){function a(y,A){var b=y.length;y.push(A);c:for(;0<b;){var X=b-1>>>1,a2=y[X];if(0<n(a2,A))y[X]=A,y[b]=a2,b=X;else break c}}function e(y){return y.length===0?null:y[0]}function r(y){if(y.length===0)return null;var A=y[0],b=y.pop();if(b!==A){y[0]=b;c:for(var X=0,a2=y.length,s6=a2>>>1;X<s6;){var B1=2*(X+1)-1,D8=y[B1],F1=B1+1,t6=y[F1];if(0>n(D8,b))F1<a2&&0>n(t6,D8)?(y[X]=t6,y[F1]=b,X=F1):(y[X]=D8,y[B1]=b,X=B1);else if(F1<a2&&0>n(t6,b))y[X]=t6,y[F1]=b,X=F1;else break c}}return A}function n(y,A){var b=y.sortIndex-A.sortIndex;return b!==0?b:y.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;c.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();c.unstable_now=function(){return l.now()-s}}var t=[],o=[],u=1,p=null,h=3,H=!1,V=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(y){for(var A=e(o);A!==null;){if(A.callback===null)r(o);else if(A.startTime<=y)r(o),A.sortIndex=A.expirationTime,a(t,A);else break;A=e(o)}}function d(y){if(M=!1,v(y),!V)if(e(t)!==null)V=!0,F8(C);else{var A=e(o);A!==null&&R8(d,A.startTime-y)}}function C(y,A){V=!1,M&&(M=!1,m(k),k=-1),H=!0;var b=h;try{for(v(A),p=e(t);p!==null&&(!(p.expirationTime>A)||y&&!T2());){var X=p.callback;if(typeof X=="function"){p.callback=null,h=p.priorityLevel;var a2=X(p.expirationTime<=A);A=c.unstable_now(),typeof a2=="function"?p.callback=a2:p===e(t)&&r(t),v(A)}else r(t);p=e(t)}if(p!==null)var s6=!0;else{var B1=e(o);B1!==null&&R8(d,B1.startTime-A),s6=!1}return s6}finally{p=null,h=b,H=!1}}var S=!1,x=null,k=-1,R=5,P=-1;function T2(){return!(c.unstable_now()-P<R)}function I3(){if(x!==null){var y=c.unstable_now();P=y;var A=!0;try{A=x(!0,y)}finally{A?W3():(S=!1,x=null)}}else S=!1}var W3;if(typeof f=="function")W3=function(){f(I3)};else if(typeof MessageChannel<"u"){var rs=new MessageChannel,sU=rs.port2;rs.port1.onmessage=I3,W3=function(){sU.postMessage(null)}}else W3=function(){N(I3,0)};function F8(y){x=y,S||(S=!0,W3())}function R8(y,A){k=N(function(){y(c.unstable_now())},A)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(y){y.callback=null},c.unstable_continueExecution=function(){V||H||(V=!0,F8(C))},c.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<y?Math.floor(1e3/y):5},c.unstable_getCurrentPriorityLevel=function(){return h},c.unstable_getFirstCallbackNode=function(){return e(t)},c.unstable_next=function(y){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var b=h;h=A;try{return y()}finally{h=b}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(y,A){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var b=h;h=y;try{return A()}finally{h=b}},c.unstable_scheduleCallback=function(y,A,b){var X=c.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?X+b:X):b=X,y){case 1:var a2=-1;break;case 2:a2=250;break;case 5:a2=1073741823;break;case 4:a2=1e4;break;default:a2=5e3}return a2=b+a2,y={id:u++,callback:A,priorityLevel:y,startTime:b,expirationTime:a2,sortIndex:-1},b>X?(y.sortIndex=b,a(o,y),e(t)===null&&y===e(o)&&(M?(m(k),k=-1):M=!0,R8(d,b-X))):(y.sortIndex=a2,a(t,y),V||H||(V=!0,F8(C))),y},c.unstable_shouldYield=T2,c.unstable_wrapCallback=function(y){var A=h;return function(){var b=h;h=A;try{return y.apply(this,arguments)}finally{h=b}}}})(co);Zt.exports=co;var NU=Zt.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=d3,L2=NU;function z(c){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+c,e=1;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+c+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eo=new Set,p4={};function J1(c,a){x3(c,a),x3(c+"Capture",a)}function x3(c,a){for(p4[c]=a,c=0;c<a.length;c++)eo.add(a[c])}var c1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H5=Object.prototype.hasOwnProperty,AU=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ss={},ts={};function bU(c){return H5.call(ts,c)?!0:H5.call(ss,c)?!1:AU.test(c)?ts[c]=!0:(ss[c]=!0,!1)}function PU(c,a,e,r){if(e!==null&&e.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return r?!1:e!==null?!e.acceptsBooleans:(c=c.toLowerCase().slice(0,5),c!=="data-"&&c!=="aria-");default:return!1}}function TU(c,a,e,r){if(a===null||typeof a>"u"||PU(c,a,e,r))return!0;if(r)return!1;if(e!==null)switch(e.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function p2(c,a,e,r,n,i,l){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=e,this.propertyName=c,this.type=a,this.sanitizeURL=i,this.removeEmptyString=l}var l2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(c){l2[c]=new p2(c,0,!1,c,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(c){var a=c[0];l2[a]=new p2(a,1,!1,c[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(c){l2[c]=new p2(c,2,!1,c.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(c){l2[c]=new p2(c,2,!1,c,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(c){l2[c]=new p2(c,3,!1,c.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(c){l2[c]=new p2(c,3,!0,c,null,!1,!1)});["capture","download"].forEach(function(c){l2[c]=new p2(c,4,!1,c,null,!1,!1)});["cols","rows","size","span"].forEach(function(c){l2[c]=new p2(c,6,!1,c,null,!1,!1)});["rowSpan","start"].forEach(function(c){l2[c]=new p2(c,5,!1,c.toLowerCase(),null,!1,!1)});var w7=/[\-:]([a-z])/g;function k7(c){return c[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(c){var a=c.replace(w7,k7);l2[a]=new p2(a,1,!1,c,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(c){var a=c.replace(w7,k7);l2[a]=new p2(a,1,!1,c,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(c){var a=c.replace(w7,k7);l2[a]=new p2(a,1,!1,c,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(c){l2[c]=new p2(c,1,!1,c.toLowerCase(),null,!1,!1)});l2.xlinkHref=new p2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(c){l2[c]=new p2(c,1,!1,c.toLowerCase(),null,!0,!0)});function N7(c,a,e,r){var n=l2.hasOwnProperty(a)?l2[a]:null;(n!==null?n.type!==0:r||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(TU(a,e,n,r)&&(e=null),r||n===null?bU(a)&&(e===null?c.removeAttribute(a):c.setAttribute(a,""+e)):n.mustUseProperty?c[n.propertyName]=e===null?n.type===3?!1:"":e:(a=n.attributeName,r=n.attributeNamespace,e===null?c.removeAttribute(a):(n=n.type,e=n===3||n===4&&e===!0?"":""+e,r?c.setAttributeNS(r,a,e):c.setAttribute(a,e))))}var s1=ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,f6=Symbol.for("react.element"),e3=Symbol.for("react.portal"),r3=Symbol.for("react.fragment"),A7=Symbol.for("react.strict_mode"),d5=Symbol.for("react.profiler"),ro=Symbol.for("react.provider"),no=Symbol.for("react.context"),b7=Symbol.for("react.forward_ref"),z5=Symbol.for("react.suspense"),V5=Symbol.for("react.suspense_list"),P7=Symbol.for("react.memo"),u1=Symbol.for("react.lazy"),io=Symbol.for("react.offscreen"),os=Symbol.iterator;function G3(c){return c===null||typeof c!="object"?null:(c=os&&c[os]||c["@@iterator"],typeof c=="function"?c:null)}var j=Object.assign,U8;function J3(c){if(U8===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);U8=a&&a[1]||""}return`
`+U8+c}var _8=!1;function O8(c,a){if(!c||_8)return"";_8=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(o){var r=o}Reflect.construct(c,[],a)}else{try{a.call()}catch(o){r=o}c.call(a.prototype)}else{try{throw Error()}catch(o){r=o}c()}}catch(o){if(o&&r&&typeof o.stack=="string"){for(var n=o.stack.split(`
`),i=r.stack.split(`
`),l=n.length-1,s=i.length-1;1<=l&&0<=s&&n[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(n[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||n[l]!==i[s]){var t=`
`+n[l].replace(" at new "," at ");return c.displayName&&t.includes("<anonymous>")&&(t=t.replace("<anonymous>",c.displayName)),t}while(1<=l&&0<=s);break}}}finally{_8=!1,Error.prepareStackTrace=e}return(c=c?c.displayName||c.name:"")?J3(c):""}function BU(c){switch(c.tag){case 5:return J3(c.type);case 16:return J3("Lazy");case 13:return J3("Suspense");case 19:return J3("SuspenseList");case 0:case 2:case 15:return c=O8(c.type,!1),c;case 11:return c=O8(c.type.render,!1),c;case 1:return c=O8(c.type,!0),c;default:return""}}function M5(c){if(c==null)return null;if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case r3:return"Fragment";case e3:return"Portal";case d5:return"Profiler";case A7:return"StrictMode";case z5:return"Suspense";case V5:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case no:return(c.displayName||"Context")+".Consumer";case ro:return(c._context.displayName||"Context")+".Provider";case b7:var a=c.render;return c=c.displayName,c||(c=a.displayName||a.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case P7:return a=c.displayName||null,a!==null?a:M5(c.type)||"Memo";case u1:a=c._payload,c=c._init;try{return M5(c(a))}catch{}}return null}function FU(c){var a=c.type;switch(c.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return c=a.render,c=c.displayName||c.name||"",a.displayName||(c!==""?"ForwardRef("+c+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return M5(a);case 8:return a===A7?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function y1(c){switch(typeof c){case"boolean":case"number":case"string":case"undefined":return c;case"object":return c;default:return""}}function lo(c){var a=c.type;return(c=c.nodeName)&&c.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function RU(c){var a=lo(c)?"checked":"value",e=Object.getOwnPropertyDescriptor(c.constructor.prototype,a),r=""+c[a];if(!c.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(c,a,{configurable:!0,get:function(){return n.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(c,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){c._valueTracker=null,delete c[a]}}}}function u6(c){c._valueTracker||(c._valueTracker=RU(c))}function so(c){if(!c)return!1;var a=c._valueTracker;if(!a)return!0;var e=a.getValue(),r="";return c&&(r=lo(c)?c.checked?"true":"false":c.value),c=r,c!==e?(a.setValue(c),!0):!1}function X6(c){if(c=c||(typeof document<"u"?document:void 0),typeof c>"u")return null;try{return c.activeElement||c.body}catch{return c.body}}function C5(c,a){var e=a.checked;return j({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??c._wrapperState.initialChecked})}function fs(c,a){var e=a.defaultValue==null?"":a.defaultValue,r=a.checked!=null?a.checked:a.defaultChecked;e=y1(a.value!=null?a.value:e),c._wrapperState={initialChecked:r,initialValue:e,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function to(c,a){a=a.checked,a!=null&&N7(c,"checked",a,!1)}function g5(c,a){to(c,a);var e=y1(a.value),r=a.type;if(e!=null)r==="number"?(e===0&&c.value===""||c.value!=e)&&(c.value=""+e):c.value!==""+e&&(c.value=""+e);else if(r==="submit"||r==="reset"){c.removeAttribute("value");return}a.hasOwnProperty("value")?L5(c,a.type,e):a.hasOwnProperty("defaultValue")&&L5(c,a.type,y1(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(c.defaultChecked=!!a.defaultChecked)}function us(c,a,e){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var r=a.type;if(!(r!=="submit"&&r!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+c._wrapperState.initialValue,e||a===c.value||(c.value=a),c.defaultValue=a}e=c.name,e!==""&&(c.name=""),c.defaultChecked=!!c._wrapperState.initialChecked,e!==""&&(c.name=e)}function L5(c,a,e){(a!=="number"||X6(c.ownerDocument)!==c)&&(e==null?c.defaultValue=""+c._wrapperState.initialValue:c.defaultValue!==""+e&&(c.defaultValue=""+e))}var Z3=Array.isArray;function z3(c,a,e,r){if(c=c.options,a){a={};for(var n=0;n<e.length;n++)a["$"+e[n]]=!0;for(e=0;e<c.length;e++)n=a.hasOwnProperty("$"+c[e].value),c[e].selected!==n&&(c[e].selected=n),n&&r&&(c[e].defaultSelected=!0)}else{for(e=""+y1(e),a=null,n=0;n<c.length;n++){if(c[n].value===e){c[n].selected=!0,r&&(c[n].defaultSelected=!0);return}a!==null||c[n].disabled||(a=c[n])}a!==null&&(a.selected=!0)}}function S5(c,a){if(a.dangerouslySetInnerHTML!=null)throw Error(z(91));return j({},a,{value:void 0,defaultValue:void 0,children:""+c._wrapperState.initialValue})}function ms(c,a){var e=a.value;if(e==null){if(e=a.children,a=a.defaultValue,e!=null){if(a!=null)throw Error(z(92));if(Z3(e)){if(1<e.length)throw Error(z(93));e=e[0]}a=e}a==null&&(a=""),e=a}c._wrapperState={initialValue:y1(e)}}function oo(c,a){var e=y1(a.value),r=y1(a.defaultValue);e!=null&&(e=""+e,e!==c.value&&(c.value=e),a.defaultValue==null&&c.defaultValue!==e&&(c.defaultValue=e)),r!=null&&(c.defaultValue=""+r)}function vs(c){var a=c.textContent;a===c._wrapperState.initialValue&&a!==""&&a!==null&&(c.value=a)}function fo(c){switch(c){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function x5(c,a){return c==null||c==="http://www.w3.org/1999/xhtml"?fo(a):c==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":c}var m6,uo=function(c){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,e,r,n){MSApp.execUnsafeLocalFunction(function(){return c(a,e,r,n)})}:c}(function(c,a){if(c.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in c)c.innerHTML=a;else{for(m6=m6||document.createElement("div"),m6.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=m6.firstChild;c.firstChild;)c.removeChild(c.firstChild);for(;a.firstChild;)c.appendChild(a.firstChild)}});function h4(c,a){if(a){var e=c.firstChild;if(e&&e===c.lastChild&&e.nodeType===3){e.nodeValue=a;return}}c.textContent=a}var r4={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DU=["Webkit","ms","Moz","O"];Object.keys(r4).forEach(function(c){DU.forEach(function(a){a=a+c.charAt(0).toUpperCase()+c.substring(1),r4[a]=r4[c]})});function mo(c,a,e){return a==null||typeof a=="boolean"||a===""?"":e||typeof a!="number"||a===0||r4.hasOwnProperty(c)&&r4[c]?(""+a).trim():a+"px"}function vo(c,a){c=c.style;for(var e in a)if(a.hasOwnProperty(e)){var r=e.indexOf("--")===0,n=mo(e,a[e],r);e==="float"&&(e="cssFloat"),r?c.setProperty(e,n):c[e]=n}}var EU=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function y5(c,a){if(a){if(EU[c]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(z(137,c));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(z(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(z(61))}if(a.style!=null&&typeof a.style!="object")throw Error(z(62))}}function w5(c,a){if(c.indexOf("-")===-1)return typeof a.is=="string";switch(c){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k5=null;function T7(c){return c=c.target||c.srcElement||window,c.correspondingUseElement&&(c=c.correspondingUseElement),c.nodeType===3?c.parentNode:c}var N5=null,V3=null,M3=null;function ps(c){if(c=U4(c)){if(typeof N5!="function")throw Error(z(280));var a=c.stateNode;a&&(a=k0(a),N5(c.stateNode,c.type,a))}}function po(c){V3?M3?M3.push(c):M3=[c]:V3=c}function ho(){if(V3){var c=V3,a=M3;if(M3=V3=null,ps(c),a)for(c=0;c<a.length;c++)ps(a[c])}}function Ho(c,a){return c(a)}function zo(){}var I8=!1;function Vo(c,a,e){if(I8)return c(a,e);I8=!0;try{return Ho(c,a,e)}finally{I8=!1,(V3!==null||M3!==null)&&(zo(),ho())}}function H4(c,a){var e=c.stateNode;if(e===null)return null;var r=k0(e);if(r===null)return null;e=r[a];c:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(c=c.type,r=!(c==="button"||c==="input"||c==="select"||c==="textarea")),c=!r;break c;default:c=!1}if(c)return null;if(e&&typeof e!="function")throw Error(z(231,a,typeof e));return e}var A5=!1;if(c1)try{var q3={};Object.defineProperty(q3,"passive",{get:function(){A5=!0}}),window.addEventListener("test",q3,q3),window.removeEventListener("test",q3,q3)}catch{A5=!1}function UU(c,a,e,r,n,i,l,s,t){var o=Array.prototype.slice.call(arguments,3);try{a.apply(e,o)}catch(u){this.onError(u)}}var n4=!1,Y6=null,K6=!1,b5=null,_U={onError:function(c){n4=!0,Y6=c}};function OU(c,a,e,r,n,i,l,s,t){n4=!1,Y6=null,UU.apply(_U,arguments)}function IU(c,a,e,r,n,i,l,s,t){if(OU.apply(this,arguments),n4){if(n4){var o=Y6;n4=!1,Y6=null}else throw Error(z(198));K6||(K6=!0,b5=o)}}function Z1(c){var a=c,e=c;if(c.alternate)for(;a.return;)a=a.return;else{c=a;do a=c,a.flags&4098&&(e=a.return),c=a.return;while(c)}return a.tag===3?e:null}function Mo(c){if(c.tag===13){var a=c.memoizedState;if(a===null&&(c=c.alternate,c!==null&&(a=c.memoizedState)),a!==null)return a.dehydrated}return null}function hs(c){if(Z1(c)!==c)throw Error(z(188))}function WU(c){var a=c.alternate;if(!a){if(a=Z1(c),a===null)throw Error(z(188));return a!==c?null:c}for(var e=c,r=a;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(r=n.return,r!==null){e=r;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return hs(n),c;if(i===r)return hs(n),a;i=i.sibling}throw Error(z(188))}if(e.return!==r.return)e=n,r=i;else{for(var l=!1,s=n.child;s;){if(s===e){l=!0,e=n,r=i;break}if(s===r){l=!0,r=n,e=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===e){l=!0,e=i,r=n;break}if(s===r){l=!0,r=i,e=n;break}s=s.sibling}if(!l)throw Error(z(189))}}if(e.alternate!==r)throw Error(z(190))}if(e.tag!==3)throw Error(z(188));return e.stateNode.current===e?c:a}function Co(c){return c=WU(c),c!==null?go(c):null}function go(c){if(c.tag===5||c.tag===6)return c;for(c=c.child;c!==null;){var a=go(c);if(a!==null)return a;c=c.sibling}return null}var Lo=L2.unstable_scheduleCallback,Hs=L2.unstable_cancelCallback,GU=L2.unstable_shouldYield,qU=L2.unstable_requestPaint,Y=L2.unstable_now,jU=L2.unstable_getCurrentPriorityLevel,B7=L2.unstable_ImmediatePriority,So=L2.unstable_UserBlockingPriority,J6=L2.unstable_NormalPriority,$U=L2.unstable_LowPriority,xo=L2.unstable_IdlePriority,S0=null,$2=null;function QU(c){if($2&&typeof $2.onCommitFiberRoot=="function")try{$2.onCommitFiberRoot(S0,c,void 0,(c.current.flags&128)===128)}catch{}}var U2=Math.clz32?Math.clz32:KU,XU=Math.log,YU=Math.LN2;function KU(c){return c>>>=0,c===0?32:31-(XU(c)/YU|0)|0}var v6=64,p6=4194304;function c4(c){switch(c&-c){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return c&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return c}}function Z6(c,a){var e=c.pendingLanes;if(e===0)return 0;var r=0,n=c.suspendedLanes,i=c.pingedLanes,l=e&268435455;if(l!==0){var s=l&~n;s!==0?r=c4(s):(i&=l,i!==0&&(r=c4(i)))}else l=e&~n,l!==0?r=c4(l):i!==0&&(r=c4(i));if(r===0)return 0;if(a!==0&&a!==r&&!(a&n)&&(n=r&-r,i=a&-a,n>=i||n===16&&(i&4194240)!==0))return a;if(r&4&&(r|=e&16),a=c.entangledLanes,a!==0)for(c=c.entanglements,a&=r;0<a;)e=31-U2(a),n=1<<e,r|=c[e],a&=~n;return r}function JU(c,a){switch(c){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZU(c,a){for(var e=c.suspendedLanes,r=c.pingedLanes,n=c.expirationTimes,i=c.pendingLanes;0<i;){var l=31-U2(i),s=1<<l,t=n[l];t===-1?(!(s&e)||s&r)&&(n[l]=JU(s,a)):t<=a&&(c.expiredLanes|=s),i&=~s}}function P5(c){return c=c.pendingLanes&-1073741825,c!==0?c:c&1073741824?1073741824:0}function yo(){var c=v6;return v6<<=1,!(v6&4194240)&&(v6=64),c}function W8(c){for(var a=[],e=0;31>e;e++)a.push(c);return a}function D4(c,a,e){c.pendingLanes|=a,a!==536870912&&(c.suspendedLanes=0,c.pingedLanes=0),c=c.eventTimes,a=31-U2(a),c[a]=e}function c_(c,a){var e=c.pendingLanes&~a;c.pendingLanes=a,c.suspendedLanes=0,c.pingedLanes=0,c.expiredLanes&=a,c.mutableReadLanes&=a,c.entangledLanes&=a,a=c.entanglements;var r=c.eventTimes;for(c=c.expirationTimes;0<e;){var n=31-U2(e),i=1<<n;a[n]=0,r[n]=-1,c[n]=-1,e&=~i}}function F7(c,a){var e=c.entangledLanes|=a;for(c=c.entanglements;e;){var r=31-U2(e),n=1<<r;n&a|c[r]&a&&(c[r]|=a),e&=~n}}var D=0;function wo(c){return c&=-c,1<c?4<c?c&268435455?16:536870912:4:1}var ko,R7,No,Ao,bo,T5=!1,h6=[],z1=null,V1=null,M1=null,d4=new Map,z4=new Map,v1=[],a_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(c,a){switch(c){case"focusin":case"focusout":z1=null;break;case"dragenter":case"dragleave":V1=null;break;case"mouseover":case"mouseout":M1=null;break;case"pointerover":case"pointerout":d4.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":z4.delete(a.pointerId)}}function j3(c,a,e,r,n,i){return c===null||c.nativeEvent!==i?(c={blockedOn:a,domEventName:e,eventSystemFlags:r,nativeEvent:i,targetContainers:[n]},a!==null&&(a=U4(a),a!==null&&R7(a)),c):(c.eventSystemFlags|=r,a=c.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),c)}function e_(c,a,e,r,n){switch(a){case"focusin":return z1=j3(z1,c,a,e,r,n),!0;case"dragenter":return V1=j3(V1,c,a,e,r,n),!0;case"mouseover":return M1=j3(M1,c,a,e,r,n),!0;case"pointerover":var i=n.pointerId;return d4.set(i,j3(d4.get(i)||null,c,a,e,r,n)),!0;case"gotpointercapture":return i=n.pointerId,z4.set(i,j3(z4.get(i)||null,c,a,e,r,n)),!0}return!1}function Po(c){var a=E1(c.target);if(a!==null){var e=Z1(a);if(e!==null){if(a=e.tag,a===13){if(a=Mo(e),a!==null){c.blockedOn=a,bo(c.priority,function(){No(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){c.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}c.blockedOn=null}function D6(c){if(c.blockedOn!==null)return!1;for(var a=c.targetContainers;0<a.length;){var e=B5(c.domEventName,c.eventSystemFlags,a[0],c.nativeEvent);if(e===null){e=c.nativeEvent;var r=new e.constructor(e.type,e);k5=r,e.target.dispatchEvent(r),k5=null}else return a=U4(e),a!==null&&R7(a),c.blockedOn=e,!1;a.shift()}return!0}function zs(c,a,e){D6(c)&&e.delete(a)}function r_(){T5=!1,z1!==null&&D6(z1)&&(z1=null),V1!==null&&D6(V1)&&(V1=null),M1!==null&&D6(M1)&&(M1=null),d4.forEach(zs),z4.forEach(zs)}function $3(c,a){c.blockedOn===a&&(c.blockedOn=null,T5||(T5=!0,L2.unstable_scheduleCallback(L2.unstable_NormalPriority,r_)))}function V4(c){function a(n){return $3(n,c)}if(0<h6.length){$3(h6[0],c);for(var e=1;e<h6.length;e++){var r=h6[e];r.blockedOn===c&&(r.blockedOn=null)}}for(z1!==null&&$3(z1,c),V1!==null&&$3(V1,c),M1!==null&&$3(M1,c),d4.forEach(a),z4.forEach(a),e=0;e<v1.length;e++)r=v1[e],r.blockedOn===c&&(r.blockedOn=null);for(;0<v1.length&&(e=v1[0],e.blockedOn===null);)Po(e),e.blockedOn===null&&v1.shift()}var C3=s1.ReactCurrentBatchConfig,c0=!0;function n_(c,a,e,r){var n=D,i=C3.transition;C3.transition=null;try{D=1,D7(c,a,e,r)}finally{D=n,C3.transition=i}}function i_(c,a,e,r){var n=D,i=C3.transition;C3.transition=null;try{D=4,D7(c,a,e,r)}finally{D=n,C3.transition=i}}function D7(c,a,e,r){if(c0){var n=B5(c,a,e,r);if(n===null)Z8(c,a,r,a0,e),ds(c,r);else if(e_(n,c,a,e,r))r.stopPropagation();else if(ds(c,r),a&4&&-1<a_.indexOf(c)){for(;n!==null;){var i=U4(n);if(i!==null&&ko(i),i=B5(c,a,e,r),i===null&&Z8(c,a,r,a0,e),i===n)break;n=i}n!==null&&r.stopPropagation()}else Z8(c,a,r,null,e)}}var a0=null;function B5(c,a,e,r){if(a0=null,c=T7(r),c=E1(c),c!==null)if(a=Z1(c),a===null)c=null;else if(e=a.tag,e===13){if(c=Mo(a),c!==null)return c;c=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;c=null}else a!==c&&(c=null);return a0=c,null}function To(c){switch(c){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jU()){case B7:return 1;case So:return 4;case J6:case $U:return 16;case xo:return 536870912;default:return 16}default:return 16}}var h1=null,E7=null,E6=null;function Bo(){if(E6)return E6;var c,a=E7,e=a.length,r,n="value"in h1?h1.value:h1.textContent,i=n.length;for(c=0;c<e&&a[c]===n[c];c++);var l=e-c;for(r=1;r<=l&&a[e-r]===n[i-r];r++);return E6=n.slice(c,1<r?1-r:void 0)}function U6(c){var a=c.keyCode;return"charCode"in c?(c=c.charCode,c===0&&a===13&&(c=13)):c=a,c===10&&(c=13),32<=c||c===13?c:0}function H6(){return!0}function Vs(){return!1}function x2(c){function a(e,r,n,i,l){this._reactName=e,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in c)c.hasOwnProperty(s)&&(e=c[s],this[s]=e?e(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?H6:Vs,this.isPropagationStopped=Vs,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=H6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=H6)},persist:function(){},isPersistent:H6}),a}var B3={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},U7=x2(B3),E4=j({},B3,{view:0,detail:0}),l_=x2(E4),G8,q8,Q3,x0=j({},E4,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_7,button:0,buttons:0,relatedTarget:function(c){return c.relatedTarget===void 0?c.fromElement===c.srcElement?c.toElement:c.fromElement:c.relatedTarget},movementX:function(c){return"movementX"in c?c.movementX:(c!==Q3&&(Q3&&c.type==="mousemove"?(G8=c.screenX-Q3.screenX,q8=c.screenY-Q3.screenY):q8=G8=0,Q3=c),G8)},movementY:function(c){return"movementY"in c?c.movementY:q8}}),Ms=x2(x0),s_=j({},x0,{dataTransfer:0}),t_=x2(s_),o_=j({},E4,{relatedTarget:0}),j8=x2(o_),f_=j({},B3,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=x2(f_),m_=j({},B3,{clipboardData:function(c){return"clipboardData"in c?c.clipboardData:window.clipboardData}}),v_=x2(m_),p_=j({},B3,{data:0}),Cs=x2(p_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(c){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(c):(c=d_[c])?!!a[c]:!1}function _7(){return z_}var V_=j({},E4,{key:function(c){if(c.key){var a=h_[c.key]||c.key;if(a!=="Unidentified")return a}return c.type==="keypress"?(c=U6(c),c===13?"Enter":String.fromCharCode(c)):c.type==="keydown"||c.type==="keyup"?H_[c.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_7,charCode:function(c){return c.type==="keypress"?U6(c):0},keyCode:function(c){return c.type==="keydown"||c.type==="keyup"?c.keyCode:0},which:function(c){return c.type==="keypress"?U6(c):c.type==="keydown"||c.type==="keyup"?c.keyCode:0}}),M_=x2(V_),C_=j({},x0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=x2(C_),g_=j({},E4,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_7}),L_=x2(g_),S_=j({},B3,{propertyName:0,elapsedTime:0,pseudoElement:0}),x_=x2(S_),y_=j({},x0,{deltaX:function(c){return"deltaX"in c?c.deltaX:"wheelDeltaX"in c?-c.wheelDeltaX:0},deltaY:function(c){return"deltaY"in c?c.deltaY:"wheelDeltaY"in c?-c.wheelDeltaY:"wheelDelta"in c?-c.wheelDelta:0},deltaZ:0,deltaMode:0}),w_=x2(y_),k_=[9,13,27,32],O7=c1&&"CompositionEvent"in window,i4=null;c1&&"documentMode"in document&&(i4=document.documentMode);var N_=c1&&"TextEvent"in window&&!i4,Fo=c1&&(!O7||i4&&8<i4&&11>=i4),Ls=String.fromCharCode(32),Ss=!1;function Ro(c,a){switch(c){case"keyup":return k_.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Do(c){return c=c.detail,typeof c=="object"&&"data"in c?c.data:null}var n3=!1;function A_(c,a){switch(c){case"compositionend":return Do(a);case"keypress":return a.which!==32?null:(Ss=!0,Ls);case"textInput":return c=a.data,c===Ls&&Ss?null:c;default:return null}}function b_(c,a){if(n3)return c==="compositionend"||!O7&&Ro(c,a)?(c=Bo(),E6=E7=h1=null,n3=!1,c):null;switch(c){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fo&&a.locale!=="ko"?null:a.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(c){var a=c&&c.nodeName&&c.nodeName.toLowerCase();return a==="input"?!!P_[c.type]:a==="textarea"}function Eo(c,a,e,r){po(r),a=e0(a,"onChange"),0<a.length&&(e=new U7("onChange","change",null,e,r),c.push({event:e,listeners:a}))}var l4=null,M4=null;function T_(c){Xo(c,0)}function y0(c){var a=s3(c);if(so(a))return c}function B_(c,a){if(c==="change")return a}var Uo=!1;if(c1){var $8;if(c1){var Q8="oninput"in document;if(!Q8){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),Q8=typeof ys.oninput=="function"}$8=Q8}else $8=!1;Uo=$8&&(!document.documentMode||9<document.documentMode)}function ws(){l4&&(l4.detachEvent("onpropertychange",_o),M4=l4=null)}function _o(c){if(c.propertyName==="value"&&y0(M4)){var a=[];Eo(a,M4,c,T7(c)),Vo(T_,a)}}function F_(c,a,e){c==="focusin"?(ws(),l4=a,M4=e,l4.attachEvent("onpropertychange",_o)):c==="focusout"&&ws()}function R_(c){if(c==="selectionchange"||c==="keyup"||c==="keydown")return y0(M4)}function D_(c,a){if(c==="click")return y0(a)}function E_(c,a){if(c==="input"||c==="change")return y0(a)}function U_(c,a){return c===a&&(c!==0||1/c===1/a)||c!==c&&a!==a}var O2=typeof Object.is=="function"?Object.is:U_;function C4(c,a){if(O2(c,a))return!0;if(typeof c!="object"||c===null||typeof a!="object"||a===null)return!1;var e=Object.keys(c),r=Object.keys(a);if(e.length!==r.length)return!1;for(r=0;r<e.length;r++){var n=e[r];if(!H5.call(a,n)||!O2(c[n],a[n]))return!1}return!0}function ks(c){for(;c&&c.firstChild;)c=c.firstChild;return c}function Ns(c,a){var e=ks(c);c=0;for(var r;e;){if(e.nodeType===3){if(r=c+e.textContent.length,c<=a&&r>=a)return{node:e,offset:a-c};c=r}c:{for(;e;){if(e.nextSibling){e=e.nextSibling;break c}e=e.parentNode}e=void 0}e=ks(e)}}function Oo(c,a){return c&&a?c===a?!0:c&&c.nodeType===3?!1:a&&a.nodeType===3?Oo(c,a.parentNode):"contains"in c?c.contains(a):c.compareDocumentPosition?!!(c.compareDocumentPosition(a)&16):!1:!1}function Io(){for(var c=window,a=X6();a instanceof c.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)c=a.contentWindow;else break;a=X6(c.document)}return a}function I7(c){var a=c&&c.nodeName&&c.nodeName.toLowerCase();return a&&(a==="input"&&(c.type==="text"||c.type==="search"||c.type==="tel"||c.type==="url"||c.type==="password")||a==="textarea"||c.contentEditable==="true")}function __(c){var a=Io(),e=c.focusedElem,r=c.selectionRange;if(a!==e&&e&&e.ownerDocument&&Oo(e.ownerDocument.documentElement,e)){if(r!==null&&I7(e)){if(a=r.start,c=r.end,c===void 0&&(c=a),"selectionStart"in e)e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length);else if(c=(a=e.ownerDocument||document)&&a.defaultView||window,c.getSelection){c=c.getSelection();var n=e.textContent.length,i=Math.min(r.start,n);r=r.end===void 0?i:Math.min(r.end,n),!c.extend&&i>r&&(n=r,r=i,i=n),n=Ns(e,i);var l=Ns(e,r);n&&l&&(c.rangeCount!==1||c.anchorNode!==n.node||c.anchorOffset!==n.offset||c.focusNode!==l.node||c.focusOffset!==l.offset)&&(a=a.createRange(),a.setStart(n.node,n.offset),c.removeAllRanges(),i>r?(c.addRange(a),c.extend(l.node,l.offset)):(a.setEnd(l.node,l.offset),c.addRange(a)))}}for(a=[],c=e;c=c.parentNode;)c.nodeType===1&&a.push({element:c,left:c.scrollLeft,top:c.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<a.length;e++)c=a[e],c.element.scrollLeft=c.left,c.element.scrollTop=c.top}}var O_=c1&&"documentMode"in document&&11>=document.documentMode,i3=null,F5=null,s4=null,R5=!1;function As(c,a,e){var r=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;R5||i3==null||i3!==X6(r)||(r=i3,"selectionStart"in r&&I7(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),s4&&C4(s4,r)||(s4=r,r=e0(F5,"onSelect"),0<r.length&&(a=new U7("onSelect","select",null,a,e),c.push({event:a,listeners:r}),a.target=i3)))}function d6(c,a){var e={};return e[c.toLowerCase()]=a.toLowerCase(),e["Webkit"+c]="webkit"+a,e["Moz"+c]="moz"+a,e}var l3={animationend:d6("Animation","AnimationEnd"),animationiteration:d6("Animation","AnimationIteration"),animationstart:d6("Animation","AnimationStart"),transitionend:d6("Transition","TransitionEnd")},X8={},Wo={};c1&&(Wo=document.createElement("div").style,"AnimationEvent"in window||(delete l3.animationend.animation,delete l3.animationiteration.animation,delete l3.animationstart.animation),"TransitionEvent"in window||delete l3.transitionend.transition);function w0(c){if(X8[c])return X8[c];if(!l3[c])return c;var a=l3[c],e;for(e in a)if(a.hasOwnProperty(e)&&e in Wo)return X8[c]=a[e];return c}var Go=w0("animationend"),qo=w0("animationiteration"),jo=w0("animationstart"),$o=w0("transitionend"),Qo=new Map,bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function b1(c,a){Qo.set(c,a),J1(a,[c])}for(var Y8=0;Y8<bs.length;Y8++){var K8=bs[Y8],I_=K8.toLowerCase(),W_=K8[0].toUpperCase()+K8.slice(1);b1(I_,"on"+W_)}b1(Go,"onAnimationEnd");b1(qo,"onAnimationIteration");b1(jo,"onAnimationStart");b1("dblclick","onDoubleClick");b1("focusin","onFocus");b1("focusout","onBlur");b1($o,"onTransitionEnd");x3("onMouseEnter",["mouseout","mouseover"]);x3("onMouseLeave",["mouseout","mouseover"]);x3("onPointerEnter",["pointerout","pointerover"]);x3("onPointerLeave",["pointerout","pointerover"]);J1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));J1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));J1("onBeforeInput",["compositionend","keypress","textInput","paste"]);J1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));J1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));J1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var a4="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G_=new Set("cancel close invalid load scroll toggle".split(" ").concat(a4));function Ps(c,a,e){var r=c.type||"unknown-event";c.currentTarget=e,IU(r,a,void 0,c),c.currentTarget=null}function Xo(c,a){a=(a&4)!==0;for(var e=0;e<c.length;e++){var r=c[e],n=r.event;r=r.listeners;c:{var i=void 0;if(a)for(var l=r.length-1;0<=l;l--){var s=r[l],t=s.instance,o=s.currentTarget;if(s=s.listener,t!==i&&n.isPropagationStopped())break c;Ps(n,s,o),i=t}else for(l=0;l<r.length;l++){if(s=r[l],t=s.instance,o=s.currentTarget,s=s.listener,t!==i&&n.isPropagationStopped())break c;Ps(n,s,o),i=t}}}if(K6)throw c=b5,K6=!1,b5=null,c}function U(c,a){var e=a[O5];e===void 0&&(e=a[O5]=new Set);var r=c+"__bubble";e.has(r)||(Yo(a,c,2,!1),e.add(r))}function J8(c,a,e){var r=0;a&&(r|=4),Yo(e,c,r,a)}var z6="_reactListening"+Math.random().toString(36).slice(2);function g4(c){if(!c[z6]){c[z6]=!0,eo.forEach(function(e){e!=="selectionchange"&&(G_.has(e)||J8(e,!1,c),J8(e,!0,c))});var a=c.nodeType===9?c:c.ownerDocument;a===null||a[z6]||(a[z6]=!0,J8("selectionchange",!1,a))}}function Yo(c,a,e,r){switch(To(a)){case 1:var n=n_;break;case 4:n=i_;break;default:n=D7}e=n.bind(null,a,e,c),n=void 0,!A5||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),r?n!==void 0?c.addEventListener(a,e,{capture:!0,passive:n}):c.addEventListener(a,e,!0):n!==void 0?c.addEventListener(a,e,{passive:n}):c.addEventListener(a,e,!1)}function Z8(c,a,e,r,n){var i=r;if(!(a&1)&&!(a&2)&&r!==null)c:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(l===4)for(l=r.return;l!==null;){var t=l.tag;if((t===3||t===4)&&(t=l.stateNode.containerInfo,t===n||t.nodeType===8&&t.parentNode===n))return;l=l.return}for(;s!==null;){if(l=E1(s),l===null)return;if(t=l.tag,t===5||t===6){r=i=l;continue c}s=s.parentNode}}r=r.return}Vo(function(){var o=i,u=T7(e),p=[];c:{var h=Qo.get(c);if(h!==void 0){var H=U7,V=c;switch(c){case"keypress":if(U6(e)===0)break c;case"keydown":case"keyup":H=M_;break;case"focusin":V="focus",H=j8;break;case"focusout":V="blur",H=j8;break;case"beforeblur":case"afterblur":H=j8;break;case"click":if(e.button===2)break c;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=L_;break;case Go:case qo:case jo:H=u_;break;case $o:H=x_;break;case"scroll":H=l_;break;case"wheel":H=w_;break;case"copy":case"cut":case"paste":H=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=gs}var M=(a&4)!==0,N=!M&&c==="scroll",m=M?h!==null?h+"Capture":null:h;M=[];for(var f=o,v;f!==null;){v=f;var d=v.stateNode;if(v.tag===5&&d!==null&&(v=d,m!==null&&(d=H4(f,m),d!=null&&M.push(L4(f,d,v)))),N)break;f=f.return}0<M.length&&(h=new H(h,V,null,e,u),p.push({event:h,listeners:M}))}}if(!(a&7)){c:{if(h=c==="mouseover"||c==="pointerover",H=c==="mouseout"||c==="pointerout",h&&e!==k5&&(V=e.relatedTarget||e.fromElement)&&(E1(V)||V[a1]))break c;if((H||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,H?(V=e.relatedTarget||e.toElement,H=o,V=V?E1(V):null,V!==null&&(N=Z1(V),V!==N||V.tag!==5&&V.tag!==6)&&(V=null)):(H=null,V=o),H!==V)){if(M=Ms,d="onMouseLeave",m="onMouseEnter",f="mouse",(c==="pointerout"||c==="pointerover")&&(M=gs,d="onPointerLeave",m="onPointerEnter",f="pointer"),N=H==null?h:s3(H),v=V==null?h:s3(V),h=new M(d,f+"leave",H,e,u),h.target=N,h.relatedTarget=v,d=null,E1(u)===o&&(M=new M(m,f+"enter",V,e,u),M.target=v,M.relatedTarget=N,d=M),N=d,H&&V)a:{for(M=H,m=V,f=0,v=M;v;v=c3(v))f++;for(v=0,d=m;d;d=c3(d))v++;for(;0<f-v;)M=c3(M),f--;for(;0<v-f;)m=c3(m),v--;for(;f--;){if(M===m||m!==null&&M===m.alternate)break a;M=c3(M),m=c3(m)}M=null}else M=null;H!==null&&Ts(p,h,H,M,!1),V!==null&&N!==null&&Ts(p,N,V,M,!0)}}c:{if(h=o?s3(o):window,H=h.nodeName&&h.nodeName.toLowerCase(),H==="select"||H==="input"&&h.type==="file")var C=B_;else if(xs(h))if(Uo)C=E_;else{C=R_;var S=F_}else(H=h.nodeName)&&H.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=D_);if(C&&(C=C(c,o))){Eo(p,C,e,u);break c}S&&S(c,h,o),c==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&L5(h,"number",h.value)}switch(S=o?s3(o):window,c){case"focusin":(xs(S)||S.contentEditable==="true")&&(i3=S,F5=o,s4=null);break;case"focusout":s4=F5=i3=null;break;case"mousedown":R5=!0;break;case"contextmenu":case"mouseup":case"dragend":R5=!1,As(p,e,u);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":As(p,e,u)}var x;if(O7)c:{switch(c){case"compositionstart":var k="onCompositionStart";break c;case"compositionend":k="onCompositionEnd";break c;case"compositionupdate":k="onCompositionUpdate";break c}k=void 0}else n3?Ro(c,e)&&(k="onCompositionEnd"):c==="keydown"&&e.keyCode===229&&(k="onCompositionStart");k&&(Fo&&e.locale!=="ko"&&(n3||k!=="onCompositionStart"?k==="onCompositionEnd"&&n3&&(x=Bo()):(h1=u,E7="value"in h1?h1.value:h1.textContent,n3=!0)),S=e0(o,k),0<S.length&&(k=new Cs(k,c,null,e,u),p.push({event:k,listeners:S}),x?k.data=x:(x=Do(e),x!==null&&(k.data=x)))),(x=N_?A_(c,e):b_(c,e))&&(o=e0(o,"onBeforeInput"),0<o.length&&(u=new Cs("onBeforeInput","beforeinput",null,e,u),p.push({event:u,listeners:o}),u.data=x))}Xo(p,a)})}function L4(c,a,e){return{instance:c,listener:a,currentTarget:e}}function e0(c,a){for(var e=a+"Capture",r=[];c!==null;){var n=c,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=H4(c,e),i!=null&&r.unshift(L4(c,i,n)),i=H4(c,a),i!=null&&r.push(L4(c,i,n))),c=c.return}return r}function c3(c){if(c===null)return null;do c=c.return;while(c&&c.tag!==5);return c||null}function Ts(c,a,e,r,n){for(var i=a._reactName,l=[];e!==null&&e!==r;){var s=e,t=s.alternate,o=s.stateNode;if(t!==null&&t===r)break;s.tag===5&&o!==null&&(s=o,n?(t=H4(e,i),t!=null&&l.unshift(L4(e,t,s))):n||(t=H4(e,i),t!=null&&l.push(L4(e,t,s)))),e=e.return}l.length!==0&&c.push({event:a,listeners:l})}var q_=/\r\n?/g,j_=/\u0000|\uFFFD/g;function Bs(c){return(typeof c=="string"?c:""+c).replace(q_,`
`).replace(j_,"")}function V6(c,a,e){if(a=Bs(a),Bs(c)!==a&&e)throw Error(z(425))}function r0(){}var D5=null,E5=null;function U5(c,a){return c==="textarea"||c==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var _5=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(c){return Fs.resolve(null).then(c).catch(X_)}:_5;function X_(c){setTimeout(function(){throw c})}function c5(c,a){var e=a,r=0;do{var n=e.nextSibling;if(c.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(r===0){c.removeChild(n),V4(a);return}r--}else e!=="$"&&e!=="$?"&&e!=="$!"||r++;e=n}while(e);V4(a)}function C1(c){for(;c!=null;c=c.nextSibling){var a=c.nodeType;if(a===1||a===3)break;if(a===8){if(a=c.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return c}function Rs(c){c=c.previousSibling;for(var a=0;c;){if(c.nodeType===8){var e=c.data;if(e==="$"||e==="$!"||e==="$?"){if(a===0)return c;a--}else e==="/$"&&a++}c=c.previousSibling}return null}var F3=Math.random().toString(36).slice(2),q2="__reactFiber$"+F3,S4="__reactProps$"+F3,a1="__reactContainer$"+F3,O5="__reactEvents$"+F3,Y_="__reactListeners$"+F3,K_="__reactHandles$"+F3;function E1(c){var a=c[q2];if(a)return a;for(var e=c.parentNode;e;){if(a=e[a1]||e[q2]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(c=Rs(c);c!==null;){if(e=c[q2])return e;c=Rs(c)}return a}c=e,e=c.parentNode}return null}function U4(c){return c=c[q2]||c[a1],!c||c.tag!==5&&c.tag!==6&&c.tag!==13&&c.tag!==3?null:c}function s3(c){if(c.tag===5||c.tag===6)return c.stateNode;throw Error(z(33))}function k0(c){return c[S4]||null}var I5=[],t3=-1;function P1(c){return{current:c}}function O(c){0>t3||(c.current=I5[t3],I5[t3]=null,t3--)}function E(c,a){t3++,I5[t3]=c.current,c.current=a}var w1={},f2=P1(w1),d2=P1(!1),q1=w1;function y3(c,a){var e=c.type.contextTypes;if(!e)return w1;var r=c.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===a)return r.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in e)n[i]=a[i];return r&&(c=c.stateNode,c.__reactInternalMemoizedUnmaskedChildContext=a,c.__reactInternalMemoizedMaskedChildContext=n),n}function z2(c){return c=c.childContextTypes,c!=null}function n0(){O(d2),O(f2)}function Ds(c,a,e){if(f2.current!==w1)throw Error(z(168));E(f2,a),E(d2,e)}function Ko(c,a,e){var r=c.stateNode;if(a=a.childContextTypes,typeof r.getChildContext!="function")return e;r=r.getChildContext();for(var n in r)if(!(n in a))throw Error(z(108,FU(c)||"Unknown",n));return j({},e,r)}function i0(c){return c=(c=c.stateNode)&&c.__reactInternalMemoizedMergedChildContext||w1,q1=f2.current,E(f2,c),E(d2,d2.current),!0}function Es(c,a,e){var r=c.stateNode;if(!r)throw Error(z(169));e?(c=Ko(c,a,q1),r.__reactInternalMemoizedMergedChildContext=c,O(d2),O(f2),E(f2,c)):O(d2),E(d2,e)}var Y2=null,N0=!1,a5=!1;function Jo(c){Y2===null?Y2=[c]:Y2.push(c)}function J_(c){N0=!0,Jo(c)}function T1(){if(!a5&&Y2!==null){a5=!0;var c=0,a=D;try{var e=Y2;for(D=1;c<e.length;c++){var r=e[c];do r=r(!0);while(r!==null)}Y2=null,N0=!1}catch(n){throw Y2!==null&&(Y2=Y2.slice(c+1)),Lo(B7,T1),n}finally{D=a,a5=!1}}return null}var o3=[],f3=0,l0=null,s0=0,w2=[],k2=0,j1=null,K2=1,J2="";function R1(c,a){o3[f3++]=s0,o3[f3++]=l0,l0=c,s0=a}function Zo(c,a,e){w2[k2++]=K2,w2[k2++]=J2,w2[k2++]=j1,j1=c;var r=K2;c=J2;var n=32-U2(r)-1;r&=~(1<<n),e+=1;var i=32-U2(a)+n;if(30<i){var l=n-n%5;i=(r&(1<<l)-1).toString(32),r>>=l,n-=l,K2=1<<32-U2(a)+n|e<<n|r,J2=i+c}else K2=1<<i|e<<n|r,J2=c}function W7(c){c.return!==null&&(R1(c,1),Zo(c,1,0))}function G7(c){for(;c===l0;)l0=o3[--f3],o3[f3]=null,s0=o3[--f3],o3[f3]=null;for(;c===j1;)j1=w2[--k2],w2[k2]=null,J2=w2[--k2],w2[k2]=null,K2=w2[--k2],w2[k2]=null}var g2=null,C2=null,W=!1,D2=null;function cf(c,a){var e=N2(5,null,null,0);e.elementType="DELETED",e.stateNode=a,e.return=c,a=c.deletions,a===null?(c.deletions=[e],c.flags|=16):a.push(e)}function Us(c,a){switch(c.tag){case 5:var e=c.type;return a=a.nodeType!==1||e.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(c.stateNode=a,g2=c,C2=C1(a.firstChild),!0):!1;case 6:return a=c.pendingProps===""||a.nodeType!==3?null:a,a!==null?(c.stateNode=a,g2=c,C2=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(e=j1!==null?{id:K2,overflow:J2}:null,c.memoizedState={dehydrated:a,treeContext:e,retryLane:1073741824},e=N2(18,null,null,0),e.stateNode=a,e.return=c,c.child=e,g2=c,C2=null,!0):!1;default:return!1}}function W5(c){return(c.mode&1)!==0&&(c.flags&128)===0}function G5(c){if(W){var a=C2;if(a){var e=a;if(!Us(c,a)){if(W5(c))throw Error(z(418));a=C1(e.nextSibling);var r=g2;a&&Us(c,a)?cf(r,e):(c.flags=c.flags&-4097|2,W=!1,g2=c)}}else{if(W5(c))throw Error(z(418));c.flags=c.flags&-4097|2,W=!1,g2=c}}}function _s(c){for(c=c.return;c!==null&&c.tag!==5&&c.tag!==3&&c.tag!==13;)c=c.return;g2=c}function M6(c){if(c!==g2)return!1;if(!W)return _s(c),W=!0,!1;var a;if((a=c.tag!==3)&&!(a=c.tag!==5)&&(a=c.type,a=a!=="head"&&a!=="body"&&!U5(c.type,c.memoizedProps)),a&&(a=C2)){if(W5(c))throw af(),Error(z(418));for(;a;)cf(c,a),a=C1(a.nextSibling)}if(_s(c),c.tag===13){if(c=c.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(z(317));c:{for(c=c.nextSibling,a=0;c;){if(c.nodeType===8){var e=c.data;if(e==="/$"){if(a===0){C2=C1(c.nextSibling);break c}a--}else e!=="$"&&e!=="$!"&&e!=="$?"||a++}c=c.nextSibling}C2=null}}else C2=g2?C1(c.stateNode.nextSibling):null;return!0}function af(){for(var c=C2;c;)c=C1(c.nextSibling)}function w3(){C2=g2=null,W=!1}function q7(c){D2===null?D2=[c]:D2.push(c)}var Z_=s1.ReactCurrentBatchConfig;function F2(c,a){if(c&&c.defaultProps){a=j({},a),c=c.defaultProps;for(var e in c)a[e]===void 0&&(a[e]=c[e]);return a}return a}var t0=P1(null),o0=null,u3=null,j7=null;function $7(){j7=u3=o0=null}function Q7(c){var a=t0.current;O(t0),c._currentValue=a}function q5(c,a,e){for(;c!==null;){var r=c.alternate;if((c.childLanes&a)!==a?(c.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),c===e)break;c=c.return}}function g3(c,a){o0=c,j7=u3=null,c=c.dependencies,c!==null&&c.firstContext!==null&&(c.lanes&a&&(H2=!0),c.firstContext=null)}function b2(c){var a=c._currentValue;if(j7!==c)if(c={context:c,memoizedValue:a,next:null},u3===null){if(o0===null)throw Error(z(308));u3=c,o0.dependencies={lanes:0,firstContext:c}}else u3=u3.next=c;return a}var U1=null;function X7(c){U1===null?U1=[c]:U1.push(c)}function ef(c,a,e,r){var n=a.interleaved;return n===null?(e.next=e,X7(a)):(e.next=n.next,n.next=e),a.interleaved=e,e1(c,r)}function e1(c,a){c.lanes|=a;var e=c.alternate;for(e!==null&&(e.lanes|=a),e=c,c=c.return;c!==null;)c.childLanes|=a,e=c.alternate,e!==null&&(e.childLanes|=a),e=c,c=c.return;return e.tag===3?e.stateNode:null}var m1=!1;function Y7(c){c.updateQueue={baseState:c.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rf(c,a){c=c.updateQueue,a.updateQueue===c&&(a.updateQueue={baseState:c.baseState,firstBaseUpdate:c.firstBaseUpdate,lastBaseUpdate:c.lastBaseUpdate,shared:c.shared,effects:c.effects})}function Z2(c,a){return{eventTime:c,lane:a,tag:0,payload:null,callback:null,next:null}}function g1(c,a,e){var r=c.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var n=r.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),r.pending=a,e1(c,e)}return n=r.interleaved,n===null?(a.next=a,X7(r)):(a.next=n.next,n.next=a),r.interleaved=a,e1(c,e)}function _6(c,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194240)!==0)){var r=a.lanes;r&=c.pendingLanes,e|=r,a.lanes=e,F7(c,e)}}function Os(c,a){var e=c.updateQueue,r=c.alternate;if(r!==null&&(r=r.updateQueue,e===r)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var l={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};i===null?n=i=l:i=i.next=l,e=e.next}while(e!==null);i===null?n=i=a:i=i.next=a}else n=i=a;e={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:r.shared,effects:r.effects},c.updateQueue=e;return}c=e.lastBaseUpdate,c===null?e.firstBaseUpdate=a:c.next=a,e.lastBaseUpdate=a}function f0(c,a,e,r){var n=c.updateQueue;m1=!1;var i=n.firstBaseUpdate,l=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var t=s,o=t.next;t.next=null,l===null?i=o:l.next=o,l=t;var u=c.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==l&&(s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=t))}if(i!==null){var p=n.baseState;l=0,u=o=t=null,s=i;do{var h=s.lane,H=s.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:H,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});c:{var V=c,M=s;switch(h=a,H=e,M.tag){case 1:if(V=M.payload,typeof V=="function"){p=V.call(H,p,h);break c}p=V;break c;case 3:V.flags=V.flags&-65537|128;case 0:if(V=M.payload,h=typeof V=="function"?V.call(H,p,h):V,h==null)break c;p=j({},p,h);break c;case 2:m1=!0}}s.callback!==null&&s.lane!==0&&(c.flags|=64,h=n.effects,h===null?n.effects=[s]:h.push(s))}else H={eventTime:H,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(o=u=H,t=p):u=u.next=H,l|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(1);if(u===null&&(t=p),n.baseState=t,n.firstBaseUpdate=o,n.lastBaseUpdate=u,a=n.shared.interleaved,a!==null){n=a;do l|=n.lane,n=n.next;while(n!==a)}else i===null&&(n.shared.lanes=0);Q1|=l,c.lanes=l,c.memoizedState=p}}function Is(c,a,e){if(c=a.effects,a.effects=null,c!==null)for(a=0;a<c.length;a++){var r=c[a],n=r.callback;if(n!==null){if(r.callback=null,r=e,typeof n!="function")throw Error(z(191,n));n.call(r)}}}var nf=new ao.Component().refs;function j5(c,a,e,r){a=c.memoizedState,e=e(r,a),e=e==null?a:j({},a,e),c.memoizedState=e,c.lanes===0&&(c.updateQueue.baseState=e)}var A0={isMounted:function(c){return(c=c._reactInternals)?Z1(c)===c:!1},enqueueSetState:function(c,a,e){c=c._reactInternals;var r=m2(),n=S1(c),i=Z2(r,n);i.payload=a,e!=null&&(i.callback=e),a=g1(c,i,n),a!==null&&(_2(a,c,n,r),_6(a,c,n))},enqueueReplaceState:function(c,a,e){c=c._reactInternals;var r=m2(),n=S1(c),i=Z2(r,n);i.tag=1,i.payload=a,e!=null&&(i.callback=e),a=g1(c,i,n),a!==null&&(_2(a,c,n,r),_6(a,c,n))},enqueueForceUpdate:function(c,a){c=c._reactInternals;var e=m2(),r=S1(c),n=Z2(e,r);n.tag=2,a!=null&&(n.callback=a),a=g1(c,n,r),a!==null&&(_2(a,c,r,e),_6(a,c,r))}};function Ws(c,a,e,r,n,i,l){return c=c.stateNode,typeof c.shouldComponentUpdate=="function"?c.shouldComponentUpdate(r,i,l):a.prototype&&a.prototype.isPureReactComponent?!C4(e,r)||!C4(n,i):!0}function lf(c,a,e){var r=!1,n=w1,i=a.contextType;return typeof i=="object"&&i!==null?i=b2(i):(n=z2(a)?q1:f2.current,r=a.contextTypes,i=(r=r!=null)?y3(c,n):w1),a=new a(e,i),c.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=A0,c.stateNode=a,a._reactInternals=c,r&&(c=c.stateNode,c.__reactInternalMemoizedUnmaskedChildContext=n,c.__reactInternalMemoizedMaskedChildContext=i),a}function Gs(c,a,e,r){c=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,r),a.state!==c&&A0.enqueueReplaceState(a,a.state,null)}function $5(c,a,e,r){var n=c.stateNode;n.props=e,n.state=c.memoizedState,n.refs=nf,Y7(c);var i=a.contextType;typeof i=="object"&&i!==null?n.context=b2(i):(i=z2(a)?q1:f2.current,n.context=y3(c,i)),n.state=c.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(j5(c,a,i,e),n.state=c.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(a=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),a!==n.state&&A0.enqueueReplaceState(n,n.state,null),f0(c,e,n,r),n.state=c.memoizedState),typeof n.componentDidMount=="function"&&(c.flags|=4194308)}function X3(c,a,e){if(c=e.ref,c!==null&&typeof c!="function"&&typeof c!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(z(309));var r=e.stateNode}if(!r)throw Error(z(147,c));var n=r,i=""+c;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===i?a.ref:(a=function(l){var s=n.refs;s===nf&&(s=n.refs={}),l===null?delete s[i]:s[i]=l},a._stringRef=i,a)}if(typeof c!="string")throw Error(z(284));if(!e._owner)throw Error(z(290,c))}return c}function C6(c,a){throw c=Object.prototype.toString.call(a),Error(z(31,c==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":c))}function qs(c){var a=c._init;return a(c._payload)}function sf(c){function a(m,f){if(c){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function e(m,f){if(!c)return null;for(;f!==null;)a(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function n(m,f){return m=x1(m,f),m.index=0,m.sibling=null,m}function i(m,f,v){return m.index=v,c?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return c&&m.alternate===null&&(m.flags|=2),m}function s(m,f,v,d){return f===null||f.tag!==6?(f=t5(v,m.mode,d),f.return=m,f):(f=n(f,v),f.return=m,f)}function t(m,f,v,d){var C=v.type;return C===r3?u(m,f,v.props.children,d,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===u1&&qs(C)===f.type)?(d=n(f,v.props),d.ref=X3(m,f,v),d.return=m,d):(d=j6(v.type,v.key,v.props,null,m.mode,d),d.ref=X3(m,f,v),d.return=m,d)}function o(m,f,v,d){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=o5(v,m.mode,d),f.return=m,f):(f=n(f,v.children||[]),f.return=m,f)}function u(m,f,v,d,C){return f===null||f.tag!==7?(f=G1(v,m.mode,d,C),f.return=m,f):(f=n(f,v),f.return=m,f)}function p(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=t5(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case f6:return v=j6(f.type,f.key,f.props,null,m.mode,v),v.ref=X3(m,null,f),v.return=m,v;case e3:return f=o5(f,m.mode,v),f.return=m,f;case u1:var d=f._init;return p(m,d(f._payload),v)}if(Z3(f)||G3(f))return f=G1(f,m.mode,v,null),f.return=m,f;C6(m,f)}return null}function h(m,f,v,d){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(m,f,""+v,d);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case f6:return v.key===C?t(m,f,v,d):null;case e3:return v.key===C?o(m,f,v,d):null;case u1:return C=v._init,h(m,f,C(v._payload),d)}if(Z3(v)||G3(v))return C!==null?null:u(m,f,v,d,null);C6(m,v)}return null}function H(m,f,v,d,C){if(typeof d=="string"&&d!==""||typeof d=="number")return m=m.get(v)||null,s(f,m,""+d,C);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case f6:return m=m.get(d.key===null?v:d.key)||null,t(f,m,d,C);case e3:return m=m.get(d.key===null?v:d.key)||null,o(f,m,d,C);case u1:var S=d._init;return H(m,f,v,S(d._payload),C)}if(Z3(d)||G3(d))return m=m.get(v)||null,u(f,m,d,C,null);C6(f,d)}return null}function V(m,f,v,d){for(var C=null,S=null,x=f,k=f=0,R=null;x!==null&&k<v.length;k++){x.index>k?(R=x,x=null):R=x.sibling;var P=h(m,x,v[k],d);if(P===null){x===null&&(x=R);break}c&&x&&P.alternate===null&&a(m,x),f=i(P,f,k),S===null?C=P:S.sibling=P,S=P,x=R}if(k===v.length)return e(m,x),W&&R1(m,k),C;if(x===null){for(;k<v.length;k++)x=p(m,v[k],d),x!==null&&(f=i(x,f,k),S===null?C=x:S.sibling=x,S=x);return W&&R1(m,k),C}for(x=r(m,x);k<v.length;k++)R=H(x,m,k,v[k],d),R!==null&&(c&&R.alternate!==null&&x.delete(R.key===null?k:R.key),f=i(R,f,k),S===null?C=R:S.sibling=R,S=R);return c&&x.forEach(function(T2){return a(m,T2)}),W&&R1(m,k),C}function M(m,f,v,d){var C=G3(v);if(typeof C!="function")throw Error(z(150));if(v=C.call(v),v==null)throw Error(z(151));for(var S=C=null,x=f,k=f=0,R=null,P=v.next();x!==null&&!P.done;k++,P=v.next()){x.index>k?(R=x,x=null):R=x.sibling;var T2=h(m,x,P.value,d);if(T2===null){x===null&&(x=R);break}c&&x&&T2.alternate===null&&a(m,x),f=i(T2,f,k),S===null?C=T2:S.sibling=T2,S=T2,x=R}if(P.done)return e(m,x),W&&R1(m,k),C;if(x===null){for(;!P.done;k++,P=v.next())P=p(m,P.value,d),P!==null&&(f=i(P,f,k),S===null?C=P:S.sibling=P,S=P);return W&&R1(m,k),C}for(x=r(m,x);!P.done;k++,P=v.next())P=H(x,m,k,P.value,d),P!==null&&(c&&P.alternate!==null&&x.delete(P.key===null?k:P.key),f=i(P,f,k),S===null?C=P:S.sibling=P,S=P);return c&&x.forEach(function(I3){return a(m,I3)}),W&&R1(m,k),C}function N(m,f,v,d){if(typeof v=="object"&&v!==null&&v.type===r3&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case f6:c:{for(var C=v.key,S=f;S!==null;){if(S.key===C){if(C=v.type,C===r3){if(S.tag===7){e(m,S.sibling),f=n(S,v.props.children),f.return=m,m=f;break c}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===u1&&qs(C)===S.type){e(m,S.sibling),f=n(S,v.props),f.ref=X3(m,S,v),f.return=m,m=f;break c}e(m,S);break}else a(m,S);S=S.sibling}v.type===r3?(f=G1(v.props.children,m.mode,d,v.key),f.return=m,m=f):(d=j6(v.type,v.key,v.props,null,m.mode,d),d.ref=X3(m,f,v),d.return=m,m=d)}return l(m);case e3:c:{for(S=v.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){e(m,f.sibling),f=n(f,v.children||[]),f.return=m,m=f;break c}else{e(m,f);break}else a(m,f);f=f.sibling}f=o5(v,m.mode,d),f.return=m,m=f}return l(m);case u1:return S=v._init,N(m,f,S(v._payload),d)}if(Z3(v))return V(m,f,v,d);if(G3(v))return M(m,f,v,d);C6(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(e(m,f.sibling),f=n(f,v),f.return=m,m=f):(e(m,f),f=t5(v,m.mode,d),f.return=m,m=f),l(m)):e(m,f)}return N}var k3=sf(!0),tf=sf(!1),_4={},Q2=P1(_4),x4=P1(_4),y4=P1(_4);function _1(c){if(c===_4)throw Error(z(174));return c}function K7(c,a){switch(E(y4,a),E(x4,c),E(Q2,_4),c=a.nodeType,c){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:x5(null,"");break;default:c=c===8?a.parentNode:a,a=c.namespaceURI||null,c=c.tagName,a=x5(a,c)}O(Q2),E(Q2,a)}function N3(){O(Q2),O(x4),O(y4)}function of(c){_1(y4.current);var a=_1(Q2.current),e=x5(a,c.type);a!==e&&(E(x4,c),E(Q2,e))}function J7(c){x4.current===c&&(O(Q2),O(x4))}var G=P1(0);function u0(c){for(var a=c;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break;for(;a.sibling===null;){if(a.return===null||a.return===c)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var e5=[];function Z7(){for(var c=0;c<e5.length;c++)e5[c]._workInProgressVersionPrimary=null;e5.length=0}var O6=s1.ReactCurrentDispatcher,r5=s1.ReactCurrentBatchConfig,$1=0,q=null,J=null,e2=null,m0=!1,t4=!1,w4=0,cO=0;function s2(){throw Error(z(321))}function cc(c,a){if(a===null)return!1;for(var e=0;e<a.length&&e<c.length;e++)if(!O2(c[e],a[e]))return!1;return!0}function ac(c,a,e,r,n,i){if($1=i,q=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O6.current=c===null||c.memoizedState===null?nO:iO,c=e(r,n),t4){i=0;do{if(t4=!1,w4=0,25<=i)throw Error(z(301));i+=1,e2=J=null,a.updateQueue=null,O6.current=lO,c=e(r,n)}while(t4)}if(O6.current=v0,a=J!==null&&J.next!==null,$1=0,e2=J=q=null,m0=!1,a)throw Error(z(300));return c}function ec(){var c=w4!==0;return w4=0,c}function G2(){var c={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return e2===null?q.memoizedState=e2=c:e2=e2.next=c,e2}function P2(){if(J===null){var c=q.alternate;c=c!==null?c.memoizedState:null}else c=J.next;var a=e2===null?q.memoizedState:e2.next;if(a!==null)e2=a,J=c;else{if(c===null)throw Error(z(310));J=c,c={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},e2===null?q.memoizedState=e2=c:e2=e2.next=c}return e2}function k4(c,a){return typeof a=="function"?a(c):a}function n5(c){var a=P2(),e=a.queue;if(e===null)throw Error(z(311));e.lastRenderedReducer=c;var r=J,n=r.baseQueue,i=e.pending;if(i!==null){if(n!==null){var l=n.next;n.next=i.next,i.next=l}r.baseQueue=n=i,e.pending=null}if(n!==null){i=n.next,r=r.baseState;var s=l=null,t=null,o=i;do{var u=o.lane;if(($1&u)===u)t!==null&&(t=t.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),r=o.hasEagerState?o.eagerState:c(r,o.action);else{var p={lane:u,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};t===null?(s=t=p,l=r):t=t.next=p,q.lanes|=u,Q1|=u}o=o.next}while(o!==null&&o!==i);t===null?l=r:t.next=s,O2(r,a.memoizedState)||(H2=!0),a.memoizedState=r,a.baseState=l,a.baseQueue=t,e.lastRenderedState=r}if(c=e.interleaved,c!==null){n=c;do i=n.lane,q.lanes|=i,Q1|=i,n=n.next;while(n!==c)}else n===null&&(e.lanes=0);return[a.memoizedState,e.dispatch]}function i5(c){var a=P2(),e=a.queue;if(e===null)throw Error(z(311));e.lastRenderedReducer=c;var r=e.dispatch,n=e.pending,i=a.memoizedState;if(n!==null){e.pending=null;var l=n=n.next;do i=c(i,l.action),l=l.next;while(l!==n);O2(i,a.memoizedState)||(H2=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),e.lastRenderedState=i}return[i,r]}function ff(){}function uf(c,a){var e=q,r=P2(),n=a(),i=!O2(r.memoizedState,n);if(i&&(r.memoizedState=n,H2=!0),r=r.queue,rc(pf.bind(null,e,r,c),[c]),r.getSnapshot!==a||i||e2!==null&&e2.memoizedState.tag&1){if(e.flags|=2048,N4(9,vf.bind(null,e,r,n,a),void 0,null),r2===null)throw Error(z(349));$1&30||mf(e,a,n)}return n}function mf(c,a,e){c.flags|=16384,c={getSnapshot:a,value:e},a=q.updateQueue,a===null?(a={lastEffect:null,stores:null},q.updateQueue=a,a.stores=[c]):(e=a.stores,e===null?a.stores=[c]:e.push(c))}function vf(c,a,e,r){a.value=e,a.getSnapshot=r,hf(a)&&Hf(c)}function pf(c,a,e){return e(function(){hf(a)&&Hf(c)})}function hf(c){var a=c.getSnapshot;c=c.value;try{var e=a();return!O2(c,e)}catch{return!0}}function Hf(c){var a=e1(c,1);a!==null&&_2(a,c,1,-1)}function js(c){var a=G2();return typeof c=="function"&&(c=c()),a.memoizedState=a.baseState=c,c={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:k4,lastRenderedState:c},a.queue=c,c=c.dispatch=rO.bind(null,q,c),[a.memoizedState,c]}function N4(c,a,e,r){return c={tag:c,create:a,destroy:e,deps:r,next:null},a=q.updateQueue,a===null?(a={lastEffect:null,stores:null},q.updateQueue=a,a.lastEffect=c.next=c):(e=a.lastEffect,e===null?a.lastEffect=c.next=c:(r=e.next,e.next=c,c.next=r,a.lastEffect=c)),c}function df(){return P2().memoizedState}function I6(c,a,e,r){var n=G2();q.flags|=c,n.memoizedState=N4(1|a,e,void 0,r===void 0?null:r)}function b0(c,a,e,r){var n=P2();r=r===void 0?null:r;var i=void 0;if(J!==null){var l=J.memoizedState;if(i=l.destroy,r!==null&&cc(r,l.deps)){n.memoizedState=N4(a,e,i,r);return}}q.flags|=c,n.memoizedState=N4(1|a,e,i,r)}function $s(c,a){return I6(8390656,8,c,a)}function rc(c,a){return b0(2048,8,c,a)}function zf(c,a){return b0(4,2,c,a)}function Vf(c,a){return b0(4,4,c,a)}function Mf(c,a){if(typeof a=="function")return c=c(),a(c),function(){a(null)};if(a!=null)return c=c(),a.current=c,function(){a.current=null}}function Cf(c,a,e){return e=e!=null?e.concat([c]):null,b0(4,4,Mf.bind(null,a,c),e)}function nc(){}function gf(c,a){var e=P2();a=a===void 0?null:a;var r=e.memoizedState;return r!==null&&a!==null&&cc(a,r[1])?r[0]:(e.memoizedState=[c,a],c)}function Lf(c,a){var e=P2();a=a===void 0?null:a;var r=e.memoizedState;return r!==null&&a!==null&&cc(a,r[1])?r[0]:(c=c(),e.memoizedState=[c,a],c)}function Sf(c,a,e){return $1&21?(O2(e,a)||(e=yo(),q.lanes|=e,Q1|=e,c.baseState=!0),a):(c.baseState&&(c.baseState=!1,H2=!0),c.memoizedState=e)}function aO(c,a){var e=D;D=e!==0&&4>e?e:4,c(!0);var r=r5.transition;r5.transition={};try{c(!1),a()}finally{D=e,r5.transition=r}}function xf(){return P2().memoizedState}function eO(c,a,e){var r=S1(c);if(e={lane:r,action:e,hasEagerState:!1,eagerState:null,next:null},yf(c))wf(a,e);else if(e=ef(c,a,e,r),e!==null){var n=m2();_2(e,c,r,n),kf(e,a,r)}}function rO(c,a,e){var r=S1(c),n={lane:r,action:e,hasEagerState:!1,eagerState:null,next:null};if(yf(c))wf(a,n);else{var i=c.alternate;if(c.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,s=i(l,e);if(n.hasEagerState=!0,n.eagerState=s,O2(s,l)){var t=a.interleaved;t===null?(n.next=n,X7(a)):(n.next=t.next,t.next=n),a.interleaved=n;return}}catch{}finally{}e=ef(c,a,n,r),e!==null&&(n=m2(),_2(e,c,r,n),kf(e,a,r))}}function yf(c){var a=c.alternate;return c===q||a!==null&&a===q}function wf(c,a){t4=m0=!0;var e=c.pending;e===null?a.next=a:(a.next=e.next,e.next=a),c.pending=a}function kf(c,a,e){if(e&4194240){var r=a.lanes;r&=c.pendingLanes,e|=r,a.lanes=e,F7(c,e)}}var v0={readContext:b2,useCallback:s2,useContext:s2,useEffect:s2,useImperativeHandle:s2,useInsertionEffect:s2,useLayoutEffect:s2,useMemo:s2,useReducer:s2,useRef:s2,useState:s2,useDebugValue:s2,useDeferredValue:s2,useTransition:s2,useMutableSource:s2,useSyncExternalStore:s2,useId:s2,unstable_isNewReconciler:!1},nO={readContext:b2,useCallback:function(c,a){return G2().memoizedState=[c,a===void 0?null:a],c},useContext:b2,useEffect:$s,useImperativeHandle:function(c,a,e){return e=e!=null?e.concat([c]):null,I6(4194308,4,Mf.bind(null,a,c),e)},useLayoutEffect:function(c,a){return I6(4194308,4,c,a)},useInsertionEffect:function(c,a){return I6(4,2,c,a)},useMemo:function(c,a){var e=G2();return a=a===void 0?null:a,c=c(),e.memoizedState=[c,a],c},useReducer:function(c,a,e){var r=G2();return a=e!==void 0?e(a):a,r.memoizedState=r.baseState=a,c={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:c,lastRenderedState:a},r.queue=c,c=c.dispatch=eO.bind(null,q,c),[r.memoizedState,c]},useRef:function(c){var a=G2();return c={current:c},a.memoizedState=c},useState:js,useDebugValue:nc,useDeferredValue:function(c){return G2().memoizedState=c},useTransition:function(){var c=js(!1),a=c[0];return c=aO.bind(null,c[1]),G2().memoizedState=c,[a,c]},useMutableSource:function(){},useSyncExternalStore:function(c,a,e){var r=q,n=G2();if(W){if(e===void 0)throw Error(z(407));e=e()}else{if(e=a(),r2===null)throw Error(z(349));$1&30||mf(r,a,e)}n.memoizedState=e;var i={value:e,getSnapshot:a};return n.queue=i,$s(pf.bind(null,r,i,c),[c]),r.flags|=2048,N4(9,vf.bind(null,r,i,e,a),void 0,null),e},useId:function(){var c=G2(),a=r2.identifierPrefix;if(W){var e=J2,r=K2;e=(r&~(1<<32-U2(r)-1)).toString(32)+e,a=":"+a+"R"+e,e=w4++,0<e&&(a+="H"+e.toString(32)),a+=":"}else e=cO++,a=":"+a+"r"+e.toString(32)+":";return c.memoizedState=a},unstable_isNewReconciler:!1},iO={readContext:b2,useCallback:gf,useContext:b2,useEffect:rc,useImperativeHandle:Cf,useInsertionEffect:zf,useLayoutEffect:Vf,useMemo:Lf,useReducer:n5,useRef:df,useState:function(){return n5(k4)},useDebugValue:nc,useDeferredValue:function(c){var a=P2();return Sf(a,J.memoizedState,c)},useTransition:function(){var c=n5(k4)[0],a=P2().memoizedState;return[c,a]},useMutableSource:ff,useSyncExternalStore:uf,useId:xf,unstable_isNewReconciler:!1},lO={readContext:b2,useCallback:gf,useContext:b2,useEffect:rc,useImperativeHandle:Cf,useInsertionEffect:zf,useLayoutEffect:Vf,useMemo:Lf,useReducer:i5,useRef:df,useState:function(){return i5(k4)},useDebugValue:nc,useDeferredValue:function(c){var a=P2();return J===null?a.memoizedState=c:Sf(a,J.memoizedState,c)},useTransition:function(){var c=i5(k4)[0],a=P2().memoizedState;return[c,a]},useMutableSource:ff,useSyncExternalStore:uf,useId:xf,unstable_isNewReconciler:!1};function A3(c,a){try{var e="",r=a;do e+=BU(r),r=r.return;while(r);var n=e}catch(i){n=`
Error generating stack: `+i.message+`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ht=function(){},ql={},NE={},AE=null,bE={mark:Ht,measure:Ht};try{typeof window<"u"&&(ql=window),typeof document<"u"&&(NE=document),typeof MutationObserver<"u"&&(AE=MutationObserver),typeof performance<"u"&&(bE=performance)}catch{}var YO=ql.navigator||{},dt=YO.userAgent,zt=dt===void 0?"":dt,k1=ql,I=NE,Vt=AE,y6=bE;k1.document;var t1=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",PE=~zt.indexOf("MSIE")||~zt.indexOf("Trident/"),w6,k6,N6,A6,b6,n1="___FONT_AWESOME___",o7=16,TE="fa",BE="svg-inline--fa",Y1="data-fa-i2svg",f7="data-fa-pseudo-element",KO="data-fa-pseudo-element-pending",jl="data-prefix",$l="data-icon",Mt="fontawesome-i2svg",JO="async",ZO=["HTML","HEAD","STYLE","SCRIPT"],FE=function(){try{return!0}catch{return!1}}(),_="classic",Q="sharp",Ql=[_,Q];function n6(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[_]}})}var b4=n6((w6={},c2(w6,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),c2(w6,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),w6)),P4=n6((k6={},c2(k6,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),c2(k6,Q,{solid:"fass",regular:"fasr",light:"fasl"}),k6)),T4=n6((N6={},c2(N6,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),c2(N6,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),N6)),cI=n6((A6={},c2(A6,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),c2(A6,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),A6)),aI=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,RE="fa-layers-text",eI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rI=n6((b6={},c2(b6,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),c2(b6,Q,{900:"fass",400:"fasr",300:"fasl"}),b6)),DE=[1,2,3,4,5,6,7,8,9,10],nI=DE.concat([11,12,13,14,15,16,17,18,19,20]),iI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],O1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B4=new Set;Object.keys(P4[_]).map(B4.add.bind(B4));Object.keys(P4[Q]).map(B4.add.bind(B4));var lI=[].concat(Ql,r6(B4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",O1.GROUP,O1.SWAP_OPACITY,O1.PRIMARY,O1.SECONDARY]).concat(DE.map(function(c){return"".concat(c,"x")})).concat(nI.map(function(c){return"w-".concat(c)})),m4=k1.FontAwesomeConfig||{};function sI(c){var a=I.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function tI(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(I&&typeof I.querySelector=="function"){var oI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oI.forEach(function(c){var a=Gl(c,2),e=a[0],r=a[1],n=tI(sI(e));n!=null&&(m4[r]=n)})}var EE={styleDefault:"solid",familyDefault:"classic",cssPrefix:TE,replacementClass:BE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m4.familyPrefix&&(m4.cssPrefix=m4.familyPrefix);var P3=g(g({},EE),m4);P3.autoReplaceSvg||(P3.observeMutations=!1);var w={};Object.keys(EE).forEach(function(c){Object.defineProperty(w,c,{enumerable:!0,set:function(e){P3[c]=e,v4.forEach(function(r){return r(w)})},get:function(){return P3[c]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(a){P3.cssPrefix=a,v4.forEach(function(e){return e(w)})},get:function(){return P3.cssPrefix}});k1.FontAwesomeConfig=w;var v4=[];function fI(c){return v4.push(c),function(){v4.splice(v4.indexOf(c),1)}}var f1=o7,j2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uI(c){if(!(!c||!t1)){var a=I.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=I.head.childNodes,r=null,n=e.length-1;n>-1;n--){var i=e[n],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=i)}return I.head.insertBefore(a,r),c}}var mI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F4(){for(var c=12,a="";c-- >0;)a+=mI[Math.random()*62|0];return a}function O3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function Xl(c){return c.classList?O3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function UE(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vI(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(UE(c[e]),'" ')},"").trim()}function b8(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Yl(c){return c.size!==j2.size||c.x!==j2.x||c.y!==j2.y||c.rotate!==j2.rotate||c.flipX||c.flipY}function pI(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,n={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(i," ").concat(l," ").concat(s)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:t,path:o}}function hI(c){var a=c.transform,e=c.width,r=e===void 0?o7:e,n=c.height,i=n===void 0?o7:n,l=c.startCentered,s=l===void 0?!1:l,t="";return s&&PE?t+="translate(".concat(a.x/f1-r/2,"em, ").concat(a.y/f1-i/2,"em) "):s?t+="translate(calc(-50% + ".concat(a.x/f1,"em), calc(-50% + ").concat(a.y/f1,"em)) "):t+="translate(".concat(a.x/f1,"em, ").concat(a.y/f1,"em) "),t+="scale(".concat(a.size/f1*(a.flipX?-1:1),", ").concat(a.size/f1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var HI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _E(){var c=TE,a=BE,e=w.cssPrefix,r=w.replacementClass,n=HI;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(i,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(s,".".concat(r))}return n}var Ct=!1;function f5(){w.autoAddCss&&!Ct&&(uI(_E()),Ct=!0)}var dI={mixout:function(){return{dom:{css:_E,insertCss:f5}}},hooks:function(){return{beforeDOMElementCreation:function(){f5()},beforeI2svg:function(){f5()}}}},i1=k1||{};i1[n1]||(i1[n1]={});i1[n1].styles||(i1[n1].styles={});i1[n1].hooks||(i1[n1].hooks={});i1[n1].shims||(i1[n1].shims=[]);var E2=i1[n1],OE=[],zI=function c(){I.removeEventListener("DOMContentLoaded",c),M0=1,OE.map(function(a){return a()})},M0=!1;t1&&(M0=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),M0||I.addEventListener("DOMContentLoaded",zI));function VI(c){t1&&(M0?setTimeout(c,0):OE.push(c))}function i6(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,n=c.children,i=n===void 0?[]:n;return typeof c=="string"?UE(c):"<".concat(a," ").concat(vI(r),">").concat(i.map(i6).join(""),"</").concat(a,">")}function gt(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var MI=function(a,e){return function(r,n,i,l){return a.call(e,r,n,i,l)}},u5=function(a,e,r,n){var i=Object.keys(a),l=i.length,s=n!==void 0?MI(e,n):e,t,o,u;for(r===void 0?(t=1,u=a[i[0]]):(t=0,u=r);t<l;t++)o=i[t],u=s(u,a[o],o,a);return u};function CI(c){for(var a=[],e=0,r=c.length;e<r;){var n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((n&1023)<<10)+(i&1023)+65536):(a.push(n),e--)}else a.push(n)}return a}function u7(c){var a=CI(c);return a.length===1?a[0].toString(16):null}function gI(c,a){var e=c.length,r=c.charCodeAt(a),n;return r>=55296&&r<=56319&&e>a+1&&(n=c.charCodeAt(a+1),n>=56320&&n<=57343)?(r-55296)*1024+n-56320+65536:r}function Lt(c){return Object.keys(c).reduce(function(a,e){var r=c[e],n=!!r.icon;return n?a[r.iconName]=r.icon:a[e]=r,a},{})}function m7(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,n=r===void 0?!1:r,i=Lt(a);typeof E2.hooks.addPack=="function"&&!n?E2.hooks.addPack(c,Lt(a)):E2.styles[c]=g(g({},E2.styles[c]||{}),i),c==="fas"&&m7("fa",a)}var P6,T6,B6,p3=E2.styles,LI=E2.shims,SI=(P6={},c2(P6,_,Object.values(T4[_])),c2(P6,Q,Object.values(T4[Q])),P6),Kl=null,IE={},WE={},GE={},qE={},jE={},xI=(T6={},c2(T6,_,Object.keys(b4[_])),c2(T6,Q,Object.keys(b4[Q])),T6);function yI(c){return~lI.indexOf(c)}function wI(c,a){var e=a.split("-"),r=e[0],n=e.slice(1).join("-");return r===c&&n!==""&&!yI(n)?n:null}var $E=function(){var a=function(i){return u5(p3,function(l,s,t){return l[t]=u5(s,i,{}),l},{})};IE=a(function(n,i,l){if(i[3]&&(n[i[3]]=l),i[2]){var s=i[2].filter(function(t){return typeof t=="number"});s.forEach(function(t){n[t.toString(16)]=l})}return n}),WE=a(function(n,i,l){if(n[l]=l,i[2]){var s=i[2].filter(function(t){return typeof t=="string"});s.forEach(function(t){n[t]=l})}return n}),jE=a(function(n,i,l){var s=i[2];return n[l]=l,s.forEach(function(t){n[t]=l}),n});var e="far"in p3||w.autoFetchSvg,r=u5(LI,function(n,i){var l=i[0],s=i[1],t=i[2];return s==="far"&&!e&&(s="fas"),typeof l=="string"&&(n.names[l]={prefix:s,iconName:t}),typeof l=="number"&&(n.unicodes[l.toString(16)]={prefix:s,iconName:t}),n},{names:{},unicodes:{}});GE=r.names,qE=r.unicodes,Kl=P8(w.styleDefault,{family:w.familyDefault})};fI(function(c){Kl=P8(c.styleDefault,{family:w.familyDefault})});$E();function Jl(c,a){return(IE[c]||{})[a]}function kI(c,a){return(WE[c]||{})[a]}function I1(c,a){return(jE[c]||{})[a]}function QE(c){return GE[c]||{prefix:null,iconName:null}}function NI(c){var a=qE[c],e=Jl("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function N1(){return Kl}var Zl=function(){return{prefix:null,iconName:null,rest:[]}};function P8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?_:e,n=b4[r][c],i=P4[r][c]||P4[r][n],l=c in E2.styles?c:null;return i||l||null}var St=(B6={},c2(B6,_,Object.keys(T4[_])),c2(B6,Q,Object.keys(T4[Q])),B6);function T8(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,n=r===void 0?!1:r,i=(a={},c2(a,_,"".concat(w.cssPrefix,"-").concat(_)),c2(a,Q,"".concat(w.cssPrefix,"-").concat(Q)),a),l=null,s=_;(c.includes(i[_])||c.some(function(o){return St[_].includes(o)}))&&(s=_),(c.includes(i[Q])||c.some(function(o){return St[Q].includes(o)}))&&(s=Q);var t=c.reduce(function(o,u){var p=wI(w.cssPrefix,u);if(p3[u]?(u=SI[s].includes(u)?cI[s][u]:u,l=u,o.prefix=u):xI[s].indexOf(u)>-1?(l=u,o.prefix=P8(u,{family:s})):p?o.iconName=p:u!==w.replacementClass&&u!==i[_]&&u!==i[Q]&&o.rest.push(u),!n&&o.prefix&&o.iconName){var h=l==="fa"?QE(o.iconName):{},H=I1(o.prefix,o.iconName);h.prefix&&(l=null),o.iconName=h.iconName||H||o.iconName,o.prefix=h.prefix||o.prefix,o.prefix==="far"&&!p3.far&&p3.fas&&!w.autoFetchSvg&&(o.prefix="fas")}return o},Zl());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&s===Q&&(p3.fass||w.autoFetchSvg)&&(t.prefix="fass",t.iconName=I1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||l==="fa")&&(t.prefix=N1()||"fas"),t}var AI=function(){function c(){IO(this,c),this.definitions={}}return WO(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var l=n.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(s){e.definitions[s]=g(g({},e.definitions[s]||{}),l[s]),m7(s,l[s]);var t=T4[_][s];t&&m7(t,l[s]),$E()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var l=n[i],s=l.prefix,t=l.iconName,o=l.icon,u=o[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(p){typeof p=="string"&&(e[s][p]=o)}),e[s][t]=o}),e}}]),c}(),xt=[],h3={},S3={},bI=Object.keys(S3);function PI(c,a){var e=a.mixoutsTo;return xt=c,h3={},Object.keys(S3).forEach(function(r){bI.indexOf(r)===-1&&delete S3[r]}),xt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(l){typeof n[l]=="function"&&(e[l]=n[l]),V0(n[l])==="object"&&Object.keys(n[l]).forEach(function(s){e[l]||(e[l]={}),e[l][s]=n[l][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(l){h3[l]||(h3[l]=[]),h3[l].push(i[l])})}r.provides&&r.provides(S3)}),e}function v7(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];var i=h3[c]||[];return i.forEach(function(l){a=l.apply(null,[a].concat(r))}),a}function K1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var n=h3[c]||[];n.forEach(function(i){i.apply(null,e)})}function l1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return S3[c]?S3[c].apply(null,a):void 0}function p7(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||N1();if(a)return a=I1(e,a)||a,gt(XE.definitions,e,a)||gt(E2.styles,e,a)}var XE=new AI,TI=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,K1("noAuto")},BI={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t1?(K1("beforeI2svg",a),l1("pseudoElements2svg",a),l1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,VI(function(){RI({autoReplaceSvgRoot:e}),K1("watch",a)})}},FI={icon:function(a){if(a===null)return null;if(V0(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=P8(a[0]);return{prefix:r,iconName:I1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(w.cssPrefix,"-"))>-1||a.match(aI))){var n=T8(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||N1(),iconName:I1(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var i=N1();return{prefix:i,iconName:I1(i,a)||a}}}},y2={noAuto:TI,config:w,dom:BI,parse:FI,library:XE,findIconDefinition:p7,toHtml:i6},RI=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?I:e;(Object.keys(E2.styles).length>0||w.autoFetchSvg)&&t1&&w.autoReplaceSvg&&y2.dom.i2svg({node:r})};function B8(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return i6(r)})}}),Object.defineProperty(c,"node",{get:function(){if(t1){var r=I.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function DI(c){var a=c.children,e=c.main,r=c.mask,n=c.attributes,i=c.styles,l=c.transform;if(Yl(l)&&e.found&&!r.found){var s=e.width,t=e.height,o={x:s/t/2,y:.5};n.style=b8(g(g({},i),{},{"transform-origin":"".concat(o.x+l.x/16,"em ").concat(o.y+l.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function EI(c){var a=c.prefix,e=c.iconName,r=c.children,n=c.attributes,i=c.symbol,l=i===!0?"".concat(a,"-").concat(w.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},n),{},{id:l}),children:r}]}]}function cs(c){var a=c.icons,e=a.main,r=a.mask,n=c.prefix,i=c.iconName,l=c.transform,s=c.symbol,t=c.title,o=c.maskId,u=c.titleId,p=c.extra,h=c.watchable,H=h===void 0?!1:h,V=r.found?r:e,M=V.width,N=V.height,m=n==="fak",f=[w.replacementClass,i?"".concat(w.cssPrefix,"-").concat(i):""].filter(function(R){return p.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(p.classes).join(" "),v={children:[],attributes:g(g({},p.attributes),{},{"data-prefix":n,"data-icon":i,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(N)})},d=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(M/N*16*.0625,"em")}:{};H&&(v.attributes[Y1]=""),t&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||F4())},children:[t]}),delete v.attributes.title);var C=g(g({},v),{},{prefix:n,iconName:i,main:e,mask:r,maskId:o,transform:l,symbol:s,styles:g(g({},d),p.styles)}),S=r.found&&e.found?l1("generateAbstractMask",C)||{children:[],attributes:{}}:l1("generateAbstractIcon",C)||{children:[],attributes:{}},x=S.children,k=S.attributes;return C.children=x,C.attributes=k,s?EI(C):DI(C)}function yt(c){var a=c.content,e=c.width,r=c.height,n=c.transform,i=c.title,l=c.extra,s=c.watchable,t=s===void 0?!1:s,o=g(g(g({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});t&&(o[Y1]="");var u=g({},l.styles);Yl(n)&&(u.transform=hI({transform:n,startCentered:!0,width:e,height:r}),u["-webkit-transform"]=u.transform);var p=b8(u);p.length>0&&(o.style=p);var h=[];return h.push({tag:"span",attributes:o,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function UI(c){var a=c.content,e=c.title,r=c.extra,n=g(g(g({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=b8(r.styles);i.length>0&&(n.style=i);var l=[];return l.push({tag:"span",attributes:n,children:[a]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var m5=E2.styles;function h7(c){var a=c[0],e=c[1],r=c.slice(4),n=Gl(r,1),i=n[0],l=null;return Array.isArray(i)?l={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(O1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(O1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(O1.PRIMARY),fill:"currentColor",d:i[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:l}}var _I={found:!1,width:512,height:512};function OI(c,a){!FE&&!w.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function H7(c,a){var e=a;return a==="fa"&&w.styleDefault!==null&&(a=N1()),new Promise(function(r,n){if(l1("missingIconAbstract"),e==="fa"){var i=QE(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&m5[a]&&m5[a][c]){var l=m5[a][c];return r(h7(l))}OI(c,a),r(g(g({},_I),{},{icon:w.showMissingIcons&&c?l1("missingIconAbstract")||{}:{}}))})}var wt=function(){},d7=w.measurePerformance&&y6&&y6.mark&&y6.measure?y6:{mark:wt,measure:wt},e4='FA "6.4.2"',II=function(a){return d7.mark("".concat(e4," ").concat(a," begins")),function(){return YE(a)}},YE=function(a){d7.mark("".concat(e4," ").concat(a," ends")),d7.measure("".concat(e4," ").concat(a),"".concat(e4," ").concat(a," begins"),"".concat(e4," ").concat(a," ends"))},as={begin:II,end:YE},$6=function(){};function kt(c){var a=c.getAttribute?c.getAttribute(Y1):null;return typeof a=="string"}function WI(c){var a=c.getAttribute?c.getAttribute(jl):null,e=c.getAttribute?c.getAttribute($l):null;return a&&e}function GI(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(w.replacementClass)}function qI(){if(w.autoReplaceSvg===!0)return Q6.replace;var c=Q6[w.autoReplaceSvg];return c||Q6.replace}function jI(c){return I.createElementNS("http://www.w3.org/2000/svg",c)}function $I(c){return I.createElement(c)}function KE(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?jI:$I:e;if(typeof c=="string")return I.createTextNode(c);var n=r(c.tag);Object.keys(c.attributes||[]).forEach(function(l){n.setAttribute(l,c.attributes[l])});var i=c.children||[];return i.forEach(function(l){n.appendChild(KE(l,{ceFn:r}))}),n}function QI(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Q6={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(n){e.parentNode.insertBefore(KE(n),e)}),e.getAttribute(Y1)===null&&w.keepOriginalSource){var r=I.createComment(QI(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~Xl(e).indexOf(w.replacementClass))return Q6.replace(a);var n=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,t){return t===w.replacementClass||t.match(n)?s.toSvg.push(t):s.toNode.push(t),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var l=r.map(function(s){return i6(s)}).join(`
`);e.setAttribute(Y1,""),e.innerHTML=l}};function Nt(c){c()}function JE(c,a){var e=typeof a=="function"?a:$6;if(c.length===0)e();else{var r=Nt;w.mutateApproach===JO&&(r=k1.requestAnimationFrame||Nt),r(function(){var n=qI(),i=as.begin("mutate");c.map(n),i(),e()})}}var es=!1;function ZE(){es=!0}function z7(){es=!1}var C0=null;function At(c){if(Vt&&w.observeMutations){var a=c.treeCallback,e=a===void 0?$6:a,r=c.nodeCallback,n=r===void 0?$6:r,i=c.pseudoElementsCallback,l=i===void 0?$6:i,s=c.observeMutationsRoot,t=s===void 0?I:s;C0=new Vt(function(o){if(!es){var u=N1();O3(o).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!kt(p.addedNodes[0])&&(w.searchPseudoElements&&l(p.target),e(p.target)),p.type==="attributes"&&p.target.parentNode&&w.searchPseudoElements&&l(p.target.parentNode),p.type==="attributes"&&kt(p.target)&&~iI.indexOf(p.attributeName))if(p.attributeName==="class"&&WI(p.target)){var h=T8(Xl(p.target)),H=h.prefix,V=h.iconName;p.target.setAttribute(jl,H||u),V&&p.target.setAttribute($l,V)}else GI(p.target)&&n(p.target)})}}),t1&&C0.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function XI(){C0&&C0.disconnect()}function YI(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,n){var i=n.split(":"),l=i[0],s=i.slice(1);return l&&s.length>0&&(r[l]=s.join(":").trim()),r},{})),e}function KI(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",n=T8(Xl(c));return n.prefix||(n.prefix=N1()),a&&e&&(n.prefix=a,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=kI(n.prefix,c.innerText)||Jl(n.prefix,u7(c.innerText))),!n.iconName&&w.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function JI(c){var a=O3(c.attributes).reduce(function(n,i){return n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return w.autoA11y&&(e?a["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||F4()):(a["aria-hidden"]="true",a.focusable="false")),a}function ZI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=KI(c),r=e.iconName,n=e.prefix,i=e.rest,l=JI(c),s=v7("parseNodeAttributes",{},c),t=a.styleParser?YI(c):[];return g({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:j2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t,attributes:l}},s)}var cW=E2.styles;function cU(c){var a=w.autoReplaceSvg==="nest"?bt(c,{styleParser:!1}):bt(c);return~a.extra.classes.indexOf(RE)?l1("generateLayersText",c,a):l1("generateSvgReplacementMutation",c,a)}var A1=new Set;Ql.map(function(c){A1.add("fa-".concat(c))});Object.keys(b4[_]).map(A1.add.bind(A1));Object.keys(b4[Q]).map(A1.add.bind(A1));A1=r6(A1);function Pt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!t1)return Promise.resolve();var e=I.documentElement.classList,r=function(p){return e.add("".concat(Mt,"-").concat(p))},n=function(p){return e.remove("".concat(Mt,"-").concat(p))},i=w.autoFetchSvg?A1:Ql.map(function(u){return"fa-".concat(u)}).concat(Object.keys(cW));i.includes("fa")||i.push("fa");var l=[".".concat(RE,":not([").concat(Y1,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Y1,"])")})).join(", ");if(l.length===0)return Promise.resolve();var s=[];try{s=O3(c.querySelectorAll(l))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var t=as.begin("onTree"),o=s.reduce(function(u,p){try{var h=cU(p);h&&u.push(h)}catch(H){FE||H.name==="MissingIcon"&&console.error(H)}return u},[]);return new Promise(function(u,p){Promise.all(o).then(function(h){JE(h,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),t(),u()})}).catch(function(h){t(),p(h)})})}function aW(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cU(c).then(function(e){e&&JE([e],a)})}function eW(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:p7(a||{}),n=e.mask;return n&&(n=(n||{}).icon?n:p7(n||{})),c(r,g(g({},e),{},{mask:n}))}}var rW=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?j2:r,i=e.symbol,l=i===void 0?!1:i,s=e.mask,t=s===void 0?null:s,o=e.maskId,u=o===void 0?null:o,p=e.title,h=p===void 0?null:p,H=e.titleId,V=H===void 0?null:H,M=e.classes,N=M===void 0?[]:M,m=e.attributes,f=m===void 0?{}:m,v=e.styles,d=v===void 0?{}:v;if(a){var C=a.prefix,S=a.iconName,x=a.icon;return B8(g({type:"icon"},a),function(){return K1("beforeDOMElementCreation",{iconDefinition:a,params:e}),w.autoA11y&&(h?f["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(V||F4()):(f["aria-hidden"]="true",f.focusable="false")),cs({icons:{main:h7(x),mask:t?h7(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:S,transform:g(g({},j2),n),symbol:l,title:h,maskId:u,titleId:V,extra:{attributes:f,styles:d,classes:N}})})}},nW={mixout:function(){return{icon:eW(rW)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Pt,e.nodeCallback=aW,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,n=r===void 0?I:r,i=e.callback,l=i===void 0?function(){}:i;return Pt(n,l)},a.generateSvgReplacementMutation=function(e,r){var n=r.iconName,i=r.title,l=r.titleId,s=r.prefix,t=r.transform,o=r.symbol,u=r.mask,p=r.maskId,h=r.extra;return new Promise(function(H,V){Promise.all([H7(n,s),u.iconName?H7(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var N=Gl(M,2),m=N[0],f=N[1];H([e,cs({icons:{main:m,mask:f},prefix:s,iconName:n,transform:t,symbol:o,maskId:p,title:i,titleId:l,extra:h,watchable:!0})])}).catch(V)})},a.generateAbstractIcon=function(e){var r=e.children,n=e.attributes,i=e.main,l=e.transform,s=e.styles,t=b8(s);t.length>0&&(n.style=t);var o;return Yl(l)&&(o=l1("generateAbstractTransformGrouping",{main:i,transform:l,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:n}}}},iW={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return B8({type:"layer"},function(){K1("beforeDOMElementCreation",{assembler:e,params:r});var l=[];return e(function(s){Array.isArray(s)?s.map(function(t){l=l.concat(t.abstract)}):l=l.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(r6(i)).join(" ")},children:l}]})}}}},lW={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.title,i=n===void 0?null:n,l=r.classes,s=l===void 0?[]:l,t=r.attributes,o=t===void 0?{}:t,u=r.styles,p=u===void 0?{}:u;return B8({type:"counter",content:e},function(){return K1("beforeDOMElementCreation",{content:e,params:r}),UI({content:e.toString(),title:i,extra:{attributes:o,styles:p,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(r6(s))}})})}}}},sW={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?j2:n,l=r.title,s=l===void 0?null:l,t=r.classes,o=t===void 0?[]:t,u=r.attributes,p=u===void 0?{}:u,h=r.styles,H=h===void 0?{}:h;return B8({type:"text",content:e},function(){return K1("beforeDOMElementCreation",{content:e,params:r}),yt({content:e,transform:g(g({},j2),i),title:s,extra:{attributes:p,styles:H,classes:["".concat(w.cssPrefix,"-layers-text")].concat(r6(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var n=r.title,i=r.transform,l=r.extra,s=null,t=null;if(PE){var o=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/o,t=u.height/o}return w.autoA11y&&!n&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,yt({content:e.innerHTML,width:s,height:t,transform:i,title:n,extra:l,watchable:!0})])}}},tW=new RegExp('"',"ug"),Tt=[1105920,1112319];function oW(c){var a=c.replace(tW,""),e=gI(a,0),r=e>=Tt[0]&&e<=Tt[1],n=a.length===2?a[0]===a[1]:!1;return{value:u7(n?a[0]:a),isSecondary:r||n}}function Bt(c,a){var e="".concat(KO).concat(a.replace(":","-"));return new Promise(function(r,n){if(c.getAttribute(e)!==null)return r();var i=O3(c.children),l=i.filter(function(x){return x.getAttribute(f7)===a})[0],s=k1.getComputedStyle(c,a),t=s.getPropertyValue("font-family").match(eI),o=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(l&&!t)return c.removeChild(l),r();if(t&&u!=="none"&&u!==""){var p=s.getPropertyValue("content"),h=~["Sharp"].indexOf(t[2])?Q:_,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?P4[h][t[2].toLowerCase()]:rI[h][o],V=oW(p),M=V.value,N=V.isSecondary,m=t[0].startsWith("FontAwesome"),f=Jl(H,M),v=f;if(m){var d=NI(M);d.iconName&&d.prefix&&(f=d.iconName,H=d.prefix)}if(f&&!N&&(!l||l.getAttribute(jl)!==H||l.getAttribute($l)!==v)){c.setAttribute(e,v),l&&c.removeChild(l);var C=ZI(),S=C.extra;S.attributes[f7]=a,H7(f,H).then(function(x){var k=cs(g(g({},C),{},{icons:{main:x,mask:Zl()},prefix:H,iconName:v,extra:S,watchable:!0})),R=I.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(R,c.firstChild):c.appendChild(R),R.outerHTML=k.map(function(P){return i6(P)}).join(`
`),c.removeAttribute(e),r()}).catch(n)}else r()}else r()})}function fW(c){return Promise.all([Bt(c,"::before"),Bt(c,"::after")])}function uW(c){return c.parentNode!==document.head&&!~ZO.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(f7)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function Ft(c){if(t1)return new Promise(function(a,e){var r=O3(c.querySelectorAll("*")).filter(uW).map(fW),n=as.begin("searchPseudoElements");ZE(),Promise.all(r).then(function(){n(),z7(),a()}).catch(function(){n(),z7(),e()})})}var mW={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ft,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,n=r===void 0?I:r;w.searchPseudoElements&&Ft(n)}}},Rt=!1,vW={mixout:function(){return{dom:{unwatch:function(){ZE(),Rt=!0}}}},hooks:function(){return{bootstrap:function(){At(v7("mutationObserverCallbacks",{}))},noAuto:function(){XI()},watch:function(e){var r=e.observeMutationsRoot;Rt?z7():At(v7("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Dt=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),l=i[0],s=i.slice(1).join("-");if(l&&s==="h")return r.flipX=!0,r;if(l&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(l){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},e)},pW={mixout:function(){return{parse:{transform:function(e){return Dt(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-transform");return n&&(e.transform=Dt(n)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,n=e.transform,i=e.containerWidth,l=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},t="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),p={transform:"".concat(t," ").concat(o," ").concat(u)},h={transform:"translate(".concat(l/2*-1," -256)")},H={outer:s,inner:p,path:h};return{tag:"g",attributes:g({},H.outer),children:[{tag:"g",attributes:g({},H.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:g(g({},r.icon.attributes),H.path)}]}]}}}},v5={x:0,y:0,width:"100%",height:"100%"};function Et(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function hW(c){return c.tag==="g"?c.children:[c]}var HW={hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-mask"),i=n?T8(n.split(" ").map(function(l){return l.trim()})):Zl();return i.prefix||(i.prefix=N1()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,n=e.attributes,i=e.main,l=e.mask,s=e.maskId,t=e.transform,o=i.width,u=i.icon,p=l.width,h=l.icon,H=pI({transform:t,containerWidth:p,iconWidth:o}),V={tag:"rect",attributes:g(g({},v5),{},{fill:"white"})},M=u.children?{children:u.children.map(Et)}:{},N={tag:"g",attributes:g({},H.inner),children:[Et(g({tag:u.tag,attributes:g(g({},u.attributes),H.path)},M))]},m={tag:"g",attributes:g({},H.outer),children:[N]},f="mask-".concat(s||F4()),v="clip-".concat(s||F4()),d={tag:"mask",attributes:g(g({},v5),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[V,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:hW(h)},d]};return r.push(C,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(f,")")},v5)}),{children:r,attributes:n}}}},dW={provides:function(a){var e=!1;k1.matchMedia&&(e=k1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:g(g({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=g(g({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:g(g({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},l),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:g(g({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:g(g({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:g(g({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zW={hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return e.symbol=i,e}}}},VW=[dI,nW,iW,lW,sW,mW,vW,pW,HW,dW,zW];PI(VW,{mixoutsTo:y2});y2.noAuto;y2.config;y2.library;y2.dom;var V7=y2.parse;y2.findIconDefinition;y2.toHtml;var MW=y2.icon;y2.layer;y2.text;y2.counter;var aU={exports:{}},CW="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gW=CW,LW=gW;function eU(){}function rU(){}rU.resetWarningCache=eU;var SW=function(){function c(r,n,i,l,s,t){if(t!==LW){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}c.isRequired=c;function a(){return c}var e={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:rU,resetWarningCache:eU};return e.PropTypes=e,e};aU.exports=SW();var xW=aU.exports;const T=Ot(xW);function Ut(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,r)}return e}function d1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Ut(Object(e),!0).forEach(function(r){H3(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Ut(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function g0(c){"@babel/helpers - typeof";return g0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g0(c)}function H3(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function yW(c,a){if(c==null)return{};var e={},r=Object.keys(c),n,i;for(i=0;i<r.length;i++)n=r[i],!(a.indexOf(n)>=0)&&(e[n]=c[n]);return e}function wW(c,a){if(c==null)return{};var e=yW(c,a),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(n=0;n<i.length;n++)r=i[n],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}function M7(c){return kW(c)||NW(c)||AW(c)||bW()}function kW(c){if(Array.isArray(c))return C7(c)}function NW(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function AW(c,a){if(c){if(typeof c=="string")return C7(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C7(c,a)}}function C7(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function bW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PW(c){var a,e=c.beat,r=c.fade,n=c.beatFade,i=c.bounce,l=c.shake,s=c.flash,t=c.spin,o=c.spinPulse,u=c.spinReverse,p=c.pulse,h=c.fixedWidth,H=c.inverse,V=c.border,M=c.listItem,N=c.flip,m=c.size,f=c.rotation,v=c.pull,d=(a={"fa-beat":e,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":l,"fa-flash":s,"fa-spin":t,"fa-spin-reverse":u,"fa-spin-pulse":o,"fa-pulse":p,"fa-fw":h,"fa-inverse":H,"fa-border":V,"fa-li":M,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},H3(a,"fa-".concat(m),typeof m<"u"&&m!==null),H3(a,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),H3(a,"fa-pull-".concat(v),typeof v<"u"&&v!==null),H3(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(d).map(function(C){return d[C]?C:null}).filter(function(C){return C})}function TW(c){return c=c-0,c===c}function nU(c){return TW(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}var BW=["style"];function FW(c){return c.charAt(0).toUpperCase()+c.slice(1)}function RW(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),n=nU(e.slice(0,r)),i=e.slice(r+1).trim();return n.startsWith("webkit")?a[FW(n)]=i:a[n]=i,a},{})}function iU(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(t){return iU(c,t)}),n=Object.keys(a.attributes||{}).reduce(function(t,o){var u=a.attributes[o];switch(o){case"class":t.attrs.className=u,delete a.attributes.class;break;case"style":t.attrs.style=RW(u);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?t.attrs[o.toLowerCase()]=u:t.attrs[nU(o)]=u}return t},{attrs:{}}),i=e.style,l=i===void 0?{}:i,s=wW(e,BW);return n.attrs.style=d1(d1({},n.attrs.style),l),c.apply(void 0,[a.tag,d1(d1({},n.attrs),s)].concat(M7(r)))}var lU=!1;try{lU=!0}catch{}function DW(){if(!lU&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function _t(c){if(c&&g0(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(V7.icon)return V7.icon(c);if(c===null)return null;if(c&&g0(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}function p5(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?H3({},c,a):{}}var l6=y7.forwardRef(function(c,a){var e=c.icon,r=c.mask,n=c.symbol,i=c.className,l=c.title,s=c.titleId,t=c.maskId,o=_t(e),u=p5("classes",[].concat(M7(PW(c)),M7(i.split(" ")))),p=p5("transform",typeof c.transform=="string"?V7.transform(c.transform):c.transform),h=p5("mask",_t(r)),H=MW(o,d1(d1(d1(d1({},u),p),h),{},{symbol:n,title:l,titleId:s,maskId:t}));if(!H)return DW("Could not find icon",o),null;var V=H.abstract,M={ref:a};return Object.keys(c).forEach(function(N){l6.defaultProps.hasOwnProperty(N)||(M[N]=c[N])}),EW(V[0],M)});l6.displayName="FontAwesomeIcon";l6.propTypes={beat:T.bool,border:T.bool,beatFade:T.bool,bounce:T.bool,className:T.string,fade:T.bool,flash:T.bool,mask:T.oneOfType([T.object,T.array,T.string]),maskId:T.string,fixedWidth:T.bool,inverse:T.bool,flip:T.oneOf([!0,!1,"horizontal","vertical","both"]),icon:T.oneOfType([T.object,T.array,T.string]),listItem:T.bool,pull:T.oneOf(["right","left"]),pulse:T.bool,rotation:T.oneOf([0,90,180,270]),shake:T.bool,size:T.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:T.bool,spinPulse:T.bool,spinReverse:T.bool,symbol:T.oneOfType([T.bool,T.string]),title:T.string,titleId:T.string,transform:T.oneOfType([T.string,T.object]),swapOpacity:T.bool};l6.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var EW=iU.bind(null,y7.createElement);const UW=()=>{const[c,a]=d3.useState(!1),[e,r]=d3.useState("faHandPeace");return d3.useEffect(()=>{let n;if(c){const i=vt[Math.floor(Math.random()*vt.length)];n=setTimeout(()=>{r(i),a(!1)},3e3)}return()=>clearTimeout(n)},[c]),W2.jsxs(W2.Fragment,{children:[W2.jsx("header",{className:a3.header,children:W2.jsx("div",{className:a3.header__container,children:W2.jsx("p",{className:a3.header__title,children:"Hello, DocuSketch! Thanks for opportunity ;)"})})}),W2.jsxs("main",{className:a3.wrapper,children:[W2.jsx(l6,{className:a3.icon,icon:OO[e]}),W2.jsxs("button",{disabled:c,className:a3.button,onClick:()=>a(n=>!n),children:["Click to change icon ",c]})]})]})};h5.createRoot(document.getElementById("root")).render(W2.jsx(y7.StrictMode,{children:W2.jsx(UW,{})}));