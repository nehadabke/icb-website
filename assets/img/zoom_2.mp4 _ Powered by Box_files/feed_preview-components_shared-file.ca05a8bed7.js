(window.webpackJsonp=window.webpackJsonp||[]).push([["feed~preview-components~shared-file"],{"0pk5DGk/OM":function(e,n,t){"use strict";var o=t("/MKjzBatqn"),a=t("q9wI8Vu9Ou"),r=t("zXsyuZZv6G"),i=t("q1tIBJhxTW"),l=t("JRPeW/Ew/U"),s=(t("JPcvh7FMFD"),t("VzvVVBGVbW")),d=t("ZEDLez+ZlJ"),c=t("DtrrBg37C6"),u=t("BBtKKuFpIS"),f=t("1En/ASmD05"),w=t("0sbS2nMEFU"),m=t("wnhEk9N3Ty");function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=function(e){var n=e.anonymousDownload,t=e.canDownload,o=e.isDejaBlueEnabled,a=e.isDownloadBlockedByShieldAccessPolicy,r=void 0!==a&&a,p=e.isDownloadBlockedByShieldMaliciousContentPolicy,y=void 0!==p&&p,v=e.isPrimaryButton,O=void 0!==v&&v,D=e.itemTypedIDs,j=e.hideIcon,g=void 0!==j&&j,E=e.parentFolderID,S=e.sharedName,k=e.shouldShowAnonymousDownloadModal,B=void 0!==k&&k,M=e.vanityName,I=h(e,["anonymousDownload","canDownload","isDejaBlueEnabled","isDownloadBlockedByShieldAccessPolicy","isDownloadBlockedByShieldMaliciousContentPolicy","isPrimaryButton","itemTypedIDs","hideIcon","parentFolderID","sharedName","shouldShowAnonymousDownloadModal","vanityName"]),P=r||y;if(!t&&!P)return null;var A,x=r?null:function(){var e={sharedName:S,vanityName:M,parentFolderID:E};B?n(w.a,D.toJS(),e):Object(w.a)(D.toJS(),e)},C=O?d.default:s.default,N=!O&&!g,T=14;y?A=i.createElement(l.FormattedMessage,w.c.maliciousContentBlockedErrorMessage):r?A=i.createElement(l.FormattedMessage,w.c.shieldBlockedErrorMessage):o&&(A=i.createElement(l.FormattedMessage,m.a.download),T=20);var z=!P&&!o;return i.createElement(u.default,{isDisabled:z,text:A},i.createElement(C,b({},I,{"data-resin-target":"bulkdownload",isDisabled:P,onClick:x}),N&&i.createElement(c.a,{color:o?f.bdlGray:void 0,height:T,width:T}),!o&&i.createElement(l.FormattedMessage,m.a.download)))},y=Object(o.connect)((function(e){return{isDejaBlueEnabled:Object(a.l)(e,"isDejaBlueEnabled")}}))(Object(r.a)(p)),v=t("A5hl+//H6Z"),O=t("zfug/tAS+n");function D(){return(D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function j(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=function(e){var n=e.anonymousDownload,t=e.canDownload,o=e.itemTypedIDs,a=e.parentFolderID,r=e.sharedName,s=e.shouldShowAnonymousDownloadModal,d=void 0!==s&&s,u=e.vanityName,f=j(e,["anonymousDownload","canDownload","itemTypedIDs","parentFolderID","sharedName","shouldShowAnonymousDownloadModal","vanityName"]);if(!t)return null;return i.createElement(v.MenuItem,D({},f,{onClick:function(){var e={sharedName:r,vanityName:u,parentFolderID:a};O.a.recordAction({component:"menuitem",feature:"download",target:"bulkdownload",action:"click"}),d?n(w.a,o.toJS(),e):Object(w.a)(o.toJS(),e)}}),i.createElement(c.a,null),i.createElement(l.FormattedMessage,m.a.download))},E=Object(r.a)(g),S=t("7p/EjBZ4S1"),k=t("zW0Y7dXPsy"),B=t("4pwO9QOdKN"),M=t("H6oOuIWqmM"),I=t("TkFr/4o+GV"),P=t("fQkCwcQLTh"),A=t("N/Q+gShOyY"),x=t("a5nOL7HUhw"),C=t("+qFEQhy/27"),N=t("kT76pzrGh+"),T=function(e,n){var t=Object(C.a)(e,n),o=t.extension,a=t.lockedByOtherUsers,r=A.a.includes(o),i=Object(P.a)(e,"boxEdit"),l=Object(N.k)(e,n),s=l.disableOpenButton,d=l.showOpenButton,c=i&&(!s&&d),u="Safari"===I.a.browser,f=Object(x.f)(e),w="lite"===Object(x.i)(e);return!a&&r&&c&&!u&&!f&&!w},z=Object(S.b)((function(e){var n="f_".concat(e.preview.fileID);return{shouldShowEditOnDownloadModal:T(e,n)}})),F=t("PuqeRHPhsD"),J=t.n(F),L=t("fKfY4/Y8oj"),W=t("jyz5Lsk3MC");function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function U(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var q=function(e){var n=e.anonymousDownload,t=e.blockedTooltipText,o=e.isDejaBlueEnabled,a=e.isDownloadDisabled,r=e.isPrimaryButton,f=void 0!==r&&r,b=e.isWatermarkedDownloadAvailable,h=e.itemSize,p=e.itemTypedID,y=e.shouldShowAnonymousDownloadModal,v=void 0!==y&&y,O=e.shouldShowEditOnDownloadModal,D=void 0!==O&&O,j=e.showIcon,g=void 0!==j&&j,E=e.showInAppMessage,S=U(e,["anonymousDownload","blockedTooltipText","isDejaBlueEnabled","isDownloadDisabled","isPrimaryButton","isWatermarkedDownloadAvailable","itemSize","itemTypedID","shouldShowAnonymousDownloadModal","shouldShowEditOnDownloadModal","showIcon","showInAppMessage"]),B=a?null:function(){var e=b?w.d:w.b,t=W.a.getContext(),o={sharedName:t.sharedName,vanityName:t.vanityName};D?E(k.f.contextual.modalGrowthEditOnDownload,p)||e(p,o):v?n(e,p,o):e(p,o)},M=t||i.createElement(l.FormattedMessage,R({},m.a.sizeTooltip,{values:{size:Object(L.a)(h)}})),I=f?d.default:s.default,P=J()(S,["sharedLink"]),A=o?20:16;return i.createElement(u.default,{className:"preview-responsive-btn",text:M},i.createElement(I,R({},P,{"data-resin-item_id":p.substr(2),"data-resin-target":b?"download-watermarked":"download",isDisabled:a,onClick:B}),g?i.createElement(c.a,{height:A,width:A}):i.createElement(l.FormattedMessage,m.a.download)))};q.defaultProps={isPrimaryButton:!1,shouldShowAnonymousDownloadModal:!1,shouldShowEditOnDownloadModal:!1,showIcon:!1,isDejaBlueEnabled:!1,showInAppMessage:function(){},itemSize:0};var Z=q,G=t("eJB2aOmUui"),V=Object(G.a)(Z),K=Object(S.a)((function(e){return{isDejaBlueEnabled:Object(B.b)(e,"isDejaBlueEnabled")}}),M.a,r.a,z)(Object(k.h)(V)),X=t("iXR90mOozS");t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return E})),t.d(n,"c",(function(){return K})),t.d(n,"d",(function(){return X.a}))},DtrrBg37C6:function(e,n,t){"use strict";var o=t("q1tIBJhxTW"),a=t("DJuBjJIVWu"),r=t("1En/ASmD05");n.a=function(e){var n=e.className,t=void 0===n?"":n,i=e.color,l=void 0===i?r.bdlGray80:i,s=e.height,d=void 0===s?16:s,c=e.title,u=e.width,f=void 0===u?16:u;return o.createElement(a.default,{className:"icon-download ".concat(t),height:d,title:c,viewBox:"0 0 16 16",width:f},o.createElement("path",{className:"fill-color",fill:l,fillRule:"evenodd",d:"M14 14v1H2v-1h12zM10.996 2v4.997H14L8 13 2 6.997h3.004V2h5.992zm-.998 1H6.002v4.996h-1.59L8 11.586l3.589-3.59H9.998V3z"}))}},QP9VE8RiYj:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r}));var o=t("+qFEQhy/27");t("Wo+1jj1PSt");function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(o.a)(e,n),a=t.canUserEditClassification,r=t.canUserSeeClassification,i=t.classification,l=t.bannerPolicy;return{bannerPolicy:l,canUserEditClassification:a,canUserSeeClassification:r,classification:i}}function r(e,n,t,o){return!!n&&(!(!o&&!e)&&!(o&&!t))}function i(e,n,t){var o=(e||{}).isTrialClassification;return!(!n||t||!(void 0!==o&&o))}},"cFx60CyS+7":function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return b})),t.d(n,"c",(function(){return w}));var o=t("+qFEQhy/27"),a=t("jyz5Lsk3MC"),r=t("q9wI8Vu9Ou"),i=t("B60CBWrONK"),l=t("w/CIkbGFbD"),s=t("Iqkazkw3SQ"),d=(t("SeDGCpoMWo"),t("mjZGevsoyk")),c=t("tKo2w/h5Bc"),u=t("r7S1IfpMpQ");function f(e,n,t,o,a,r,i){try{var l=e[r](i),s=l.value}catch(e){return void t(e)}l.done?n(s):Promise.resolve(s).then(o,a)}function w(e){return function(n,t){var a=t();if(Object(o.a)(a,e).canUserEditClassification){var s=Object(r.a)(a,"classificationV2"),u=Object(i.f)(e)===d.f||s;n(Object(l.f)({activeModal:u?c.h:c.g,modalProps:{itemTypedID:e}}))}}}var m=Object(s.b)(u.b,function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,o,r,i,l,s,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.id,o=n.type,r=n.sharedLink,i="/app-api/end-user-web/".concat(o,"/").concat(t,"/security-controls"),!r){e.next=8;break}return e.next=5,Object(a.c)(i,{sharedLink:r});case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,Object(a.c)(i);case 10:e.t0=e.sent;case 11:return l=e.t0,s=l.ownerEnterpriseId,d=l.enterpriseSecurityControlsResponse,e.abrupt("return",{ownerEnterpriseId:s,enterpriseSecurityControlsResponse:d});case 15:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(o,a){var r=e.apply(n,t);function i(e){f(r,o,a,i,l,"next",e)}function l(e){f(r,o,a,i,l,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}());function b(e){return function(n,t){var a=t(),r=Object(o.a)(a,e),i=r.canUserSeeClassification;!!r.classification&&i&&n(m(r))}}var h=Object(s.b)(u.a,(function(e){var n=e.join(",");return Object(a.c)("/app-api/end-user-web/items/classifications",{items:n})}))},"diL9+cxqv9":function(e,n,t){"use strict";n.a=function(e){var n=e.thumbnailURLs;return!(!n||!n.large)}},eJB2aOmUui:function(e,n,t){"use strict";var o=t("q1tIBJhxTW"),a=t("JRPeW/Ew/U"),r=t("0sbS2nMEFU");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.a=function(e){var n=function(n){var t=n.anonymousDownload,s=n.canDownload,d=n.className,c=n.getResinAttributes,u=n.isDisabled,f=n.isDownloadBlockedByShieldAccessPolicy,w=n.isDownloadBlockedByShieldMaliciousContentPolicy,m=n.isOwnerOrCollaborated,b=n.isWatermarkedDownloadAvailable,h=n.itemTypedID,p=n.sharedLink,y=n.shouldShowAnonymousDownloadModal,v=n.showIcon,O=(n.isDejaBlueEnabled,n.isPrimaryButton),D=n.itemSize,j=n.shouldShowEditOnDownloadModal,g=(n.showInAppMessage,l(n,["anonymousDownload","canDownload","className","getResinAttributes","isDisabled","isDownloadBlockedByShieldAccessPolicy","isDownloadBlockedByShieldMaliciousContentPolicy","isOwnerOrCollaborated","isWatermarkedDownloadAvailable","itemTypedID","sharedLink","shouldShowAnonymousDownloadModal","showIcon","isDejaBlueEnabled","isPrimaryButton","itemSize","shouldShowEditOnDownloadModal","showInAppMessage"])),E=!!f||!!w,S=!!u||E,k=null;return s||E?(w?k=o.createElement(a.FormattedMessage,r.c.maliciousContentBlockedErrorMessage):f&&(k=o.createElement(a.FormattedMessage,r.c.shieldBlockedErrorMessage)),o.createElement(e,i({anonymousDownload:t,blockedTooltipText:k,className:d,getResinAttributes:c,isDownloadBlocked:E,isDownloadDisabled:S,isOwnerOrCollaborated:m,isPrimaryButton:O,isWatermarkedDownloadAvailable:b,itemSize:D,itemTypedID:h,sharedLink:p,shouldShowAnonymousDownloadModal:y,shouldShowEditOnDownloadModal:j,showIcon:v},g))):null};return n.defaultProps={shouldShowAnonymousDownloadModal:!1,showIcon:!1,isPrimaryButton:!1,className:"",shouldShowEditOnDownloadModal:!1},n.displayName="WithCtaState(".concat(e.displayName||e.name||"Component",")"),n}},iXR90mOozS:function(e,n,t){"use strict";var o=t("7p/EjBZ4S1"),a=t("H6oOuIWqmM"),r=t("zXsyuZZv6G"),i=t("q1tIBJhxTW"),l=t("JRPeW/Ew/U"),s=t("PuqeRHPhsD"),d=t.n(s),c=t("A5hl+//H6Z"),u=t("BBtKKuFpIS"),f=t("DtrrBg37C6"),w=t("0sbS2nMEFU"),m=t("zfug/tAS+n"),b=t("jyz5Lsk3MC"),h=t("XJrsqhcipr"),p=t("wnhEk9N3Ty");function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){D(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=function(e){var n=e.anonymousDownload,t=e.blockedTooltipText,o=e.className,a=void 0===o?"":o,r=e.getResinAttributes,s=e.isDownloadBlocked,v=e.isDownloadDisabled,D=e.isOwnerOrCollaborated,g=e.isWatermarkedDownloadAvailable,E=e.itemTypedID,S=e.sharedLink,k=e.shouldShowAnonymousDownloadModal,B=e.showIcon,M=j(e,["anonymousDownload","blockedTooltipText","className","getResinAttributes","isDownloadBlocked","isDownloadDisabled","isOwnerOrCollaborated","isWatermarkedDownloadAvailable","itemTypedID","sharedLink","shouldShowAnonymousDownloadModal","showIcon"]),I=b.a.getContext(),P=I.sharedName,A=I.vanityName,x=Object(h.i)(S),C=x.sharedName,N=x.vanityName,T=v?null:function(){var e,t={sharedName:D?void 0:P||C,vanityName:D?void 0:A||N};g?(e="download-watermarked",k?n(w.d,E,t):Object(w.d)(E,t)):(e="download",k?n(w.a,[E],t):Object(w.a)([E],t));var o=r();m.a.recordAction(O({},o,{target:e,action:"click",data:O({},o.data,{item_id:E.substr(2)})}))};return i.createElement(u.default,{isDisabled:!s,position:"middle-left",text:t},i.createElement(c.MenuItem,y({},d()(M,"itemSize"),{className:"DownloadMenuItem ".concat(a),isDisabled:v,onClick:T}),B&&i.createElement(f.a,null),i.createElement(l.FormattedMessage,p.a.download)))};g.defaultProps={shouldShowAnonymousDownloadModal:!1,showIcon:!1};var E=g,S=t("eJB2aOmUui"),k=Object(S.a)(E),B=Object(o.a)(a.a,r.a)(k);n.a=B},nXpC274P5I:function(e,n,t){"use strict";var o=["doc","docx","gdoc","gsheet","gslide","gslides","odp","ods","odt","pdf","ppt","pptx","rtf","wpd","xls","xlsm","xlsx","key","pages","numbers"];n.a=function(e){return-1!==o.indexOf(e)}},tJofOEzlLj:function(e,n,t){"use strict";n.a=function(e){var n=e.thumbnailURLs;return!(!n||!n.preview)}},wEGpu8Lq6v:function(e,n,t){"use strict";var o=t("JFvMX9tKgs"),a=t("7maozbKlfl"),r=t("nXpC274P5I");t("Vt8uAEo//w");var i=function(e){return null!==e.versionCount&&void 0!==e.versionCount},l=t("mjZGevsoyk");function s(e){return e.typedID===l.d.typedID}var d=t("tJofOEzlLj"),c=t("diL9+cxqv9"),u=function(e){return"folder"!==e.type&&!Object(d.a)(e)&&!Object(c.a)(e)};t.d(n,"a",(function(){return o.a})),t.d(n,"b",(function(){return a.a})),t.d(n,"c",(function(){return r.a})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"f",(function(){return u}))},wnhEk9N3Ty:function(e,n,t){"use strict";var o=t("JRPeW/Ew/U"),a=Object(o.defineMessages)({download:{id:"enduser.download.download",defaultMessage:"Download"},sizeTooltip:{id:"enduser.download.sizeTooltip",defaultMessage:"Size: {size}"}});n.a=a},zXsyuZZv6G:function(e,n,t){"use strict";var o=t("p46wehd9jJ"),a=t.n(o),r=t("q9wI8Vu9Ou"),i=t("7p/EjBZ4S1"),l=t("edfMKrmZUX"),s=t("tKo2w/h5Bc"),d=t("i0SutXvXLo");n.a=Object(i.b)((function(e){var n=Object(r.d)(e).isLoggedIn,t=a.a.get(d.b)===d.c;return{shouldShowAnonymousDownloadModal:!n&&t}}),(function(e){return{anonymousDownload:function(n,t,o){e(Object(l.b)({activeModal:s.d})),setTimeout((function(){n(t,o)}),3e3)}}}))}}]);