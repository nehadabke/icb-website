(window.webpackJsonp=window.webpackJsonp||[]).push([["item-realtime"],{"H4C5s/Lxrp":function(e,t,n){"use strict";n.r(t);var r=n("BfDu2MDO2t"),a=n("e7SQulcBac"),o=n("JPcvh7FMFD"),i=n("3+kv4Avc8F"),c=n("DtTz+aCpQR");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=Object(a.a)(u({},c.a,(function(e,t){var n=t.payload,r=n.events;return u({},n.type,Object(o.List)(r.map((function(e){return new i.a(e)}))))})),{}),s=n("q1tIBJhxTW"),f=n.n(s),p=n("JRPeW/Ew/U"),b=n("VzvVVBGVbW"),d=n("VnRHKiL5Hx"),m=n("KkV1xy8Nlr"),v=Object(p.defineMessages)({refreshButtonText:{id:"enduser.realtime.refreshButtonText",defaultMessage:"Refresh"}});function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=function(e){var t=e.children,n=e.onClose,r=h(e,["children","onClose"]);return f.a.createElement(d.Notification,O({onClose:n},r,{"data-resin-component":"notification"}),f.a.createElement("span",null,t),f.a.createElement(b.default,{"data-resin-target":"refresh",onClick:function(){Object(m.c)()}},f.a.createElement(p.FormattedMessage,v.refreshButtonText)))};n.d(t,"subscribeToItemRealtimeEvents",(function(){return r.a})),n.d(t,"reducer",(function(){return l})),n.d(t,"ItemRealtimeNotification",(function(){return y}))}}]);