(window.webpackJsonp=window.webpackJsonp||[]).push([["details-sidebar"],{"0JggexkqG5":function(e,t,n){"use strict";var a=n("q1tIBJhxTW"),i=n("TSYQbtd+U2"),r=n.n(i),o=n("PuqeRHPhsD"),s=n.n(o),c=n("cuY2MZmbr9"),l=n.n(c),u=n("zapBslzZE5"),f=n("/jk7UxFXE3"),h=n("WrJ7TOT7fq"),p=n("VzvVVBGVbW"),d=n("1En/ASmD05");n("bZ3NBzZPSu");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(e){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,i=g(t).call(this,e),n=!i||"object"!==m(i)&&"function"!==typeof i?S(a):i,E(S(n),"toggleVisibility",(function(){var e=n.props,t=e.onOpen,a=e.onClose;n.setState((function(e){return{isOpen:!e.isOpen}}),(function(){var e=n.state.isOpen;e&&t?t(S(n)):!e&&a&&a(S(n))}))})),n.state={isOpen:e.isOpen},n}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.animationDuration,i=t.buttonProps,o=void 0===i?{}:i,c=t.children,m=t.className,y=t.isBordered,g=t.hasStickyHeader,S=t.headerActionItems,v=t.title,E=r()("collapsible-card",{"is-open":e},{"is-bordered":y},m),O=o[u.a],C=s()(o,[u.a]),w=g?"collapsible-card-header has-sticky-header":"collapsible-card-header";return O&&(C[u.a]="".concat(O).concat(e?"collapse":"expand")),a.createElement("div",{className:E},a.createElement("div",{className:w},a.createElement(h.default,b({},C,{className:"collapsible-card-title",onClick:this.toggleVisibility,type:p.ButtonType.BUTTON}),v,a.createElement(f.a,{className:"collapsible-card-header-caret",color:d.bdlGray50,width:8})),!!S&&a.createElement("span",{className:"bdl-Collapsible-actionItems"},S)),a.createElement(l.a,{duration:n,height:e?"auto":0},a.createElement("div",{className:"collapsible-card-content"},c)))}}])&&y(n.prototype,i),o&&y(n,o),t}(a.PureComponent);E(O,"defaultProps",{buttonProps:{},className:"",isOpen:!0,animationDuration:100}),t.a=O},"0JkpXo7tBn":function(e,t,n){},Fvo7RmkmaO:function(e,t,n){},bZ3NBzZPSu:function(e,t,n){},cuY2MZmbr9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=l(n("q1tIBJhxTW")),s=l(n("17x9q+7QrQ")),c=l(n("TSYQbtd+U2"));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var i={},r=Object.keys(e),o=0;o<r.length;o++){var s=r[o];-1===n.indexOf(s)&&(i[s]=e[s])}return i}function d(e){return!isNaN(parseFloat(e))&&isFinite(e)}function m(e){return"string"===typeof e&&e.search("%")===e.length-1&&d(e.substr(0,e.length-1))}function b(e,t){e&&"function"===typeof e&&e(t)}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a="auto",r="visible";d(e.height)?(a=e.height<0||"0"===e.height?0:e.height,r="hidden"):m(e.height)&&(a="0%"===e.height?0:e.height,r="hidden"),n.animationStateClasses=i({},f,e.animationStateClasses);var o=n.getStaticStateClasses(a);return n.state={animationStateClasses:o,height:a,overflow:r,shouldUseTransitions:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,a=this,i=this.props,r=i.delay,o=i.duration,s=i.height,l=i.onAnimationEnd,f=i.onAnimationStart;if(this.contentElement&&s!==e.height){var h;this.showContent(t.height),this.contentElement.style.overflow="hidden";var p=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var y=o+r,g=null,S={height:null,overflow:"hidden"},v="auto"===t.height;d(s)?(g=s<0||"0"===s?0:s,S.height=g):m(s)?(g="0%"===s?0:s,S.height=g):(g=p,S.height="auto",S.overflow=null),v&&(S.height=g,g=p);var E=(0,c.default)((u(h={},this.animationStateClasses.animating,!0),u(h,this.animationStateClasses.animatingUp,"auto"===e.height||s<e.height),u(h,this.animationStateClasses.animatingDown,"auto"===s||s>e.height),u(h,this.animationStateClasses.animatingToHeightZero,0===S.height),u(h,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),u(h,this.animationStateClasses.animatingToHeightSpecific,S.height>0),h)),O=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:E,height:g,overflow:"hidden",shouldUseTransitions:!v}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),v?(S.shouldUseTransitions=!0,n=function(){a.setState(S),b(f,{newHeight:S.height})},requestAnimationFrame((function(){requestAnimationFrame((function(){n()}))})),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:O,shouldUseTransitions:!1}),a.hideContent(S.height),b(l,{newHeight:S.height})}),y)):(b(f,{newHeight:g}),this.timeoutID=setTimeout((function(){S.animationStateClasses=O,S.shouldUseTransitions=!1,a.setState(S),"auto"!==s&&a.hideContent(g),b(l,{newHeight:g})}),y))}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,c.default)((u(t={},this.animationStateClasses.static,!0),u(t,this.animationStateClasses.staticHeightZero,0===e),u(t,this.animationStateClasses.staticHeightSpecific,e>0),u(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,r=n.applyInlineTransitions,s=n.children,l=n.className,f=n.contentClassName,d=n.duration,m=n.easing,b=n.delay,y=n.style,g=this.state,S=g.height,v=g.overflow,E=g.animationStateClasses,O=g.shouldUseTransitions,C=i({},y,{height:S,overflow:v||y.overflow});O&&r&&(C.transition="height "+d+"ms "+m+" "+b+"ms",y.transition&&(C.transition=y.transition+", "+C.transition),C.WebkitTransition=C.transition);var w={};a&&(w.transition="opacity "+d+"ms "+m+" "+b+"ms",w.WebkitTransition=w.transition,0===S&&(w.opacity=0));var T=(0,c.default)((u(e={},E,!0),u(e,l,l),e));return o.default.createElement("div",i({},p.apply(void 0,[this.props].concat(h)),{"aria-hidden":0===S,className:T,style:C}),o.default.createElement("div",{className:f,style:w,ref:function(e){return t.contentElement=e}},s))}}]),t}(o.default.Component);y.propTypes={animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,duration:s.default.number,delay:s.default.number,easing:s.default.string,height:function(e,t,n){var i=e[t];return"number"===typeof i&&i>=0||m(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"===typeof i?"undefined":a(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=y},ekzzTbwQO2:function(e,t,n){},f62ty4C36W:function(e,t,n){"use strict";n.r(t);var a=n("q1tIBJhxTW"),i=n.n(a),r=n("56YHLNIoDA"),o=n.n(r),s=n("mwIZSSbMl2"),c=n.n(s),l=n("vN+2IcUykn"),u=n.n(l),f=n("JRPeW/Ew/U"),h=(n("Jdck50bD+l"),n("rXqiGNCH6O")),p=n("lFKM+2DmnX"),d=n.n(p),m=n("ogviCGOHHi"),b=n("f3/mmMjmqL"),y=n("a2jX1cNsCJ"),g=n("4+rfDOrIJ4"),S=n("vLJKbbBHNf");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=Object(S.a)(Object(f.injectIntl)((function(e){var t=e.onAccessStatsClick,n=e.accessStats,a=void 0===n?{comment_count:void 0,download_count:void 0,edit_count:void 0,has_count_overflowed:!1,preview_count:void 0}:n,r=e.file,o=e.error,s=e.intl,c=a.preview_count,l=a.comment_count,u=a.download_count,p=a.edit_count;if(!d()(c)&&!d()(l)&&!d()(u)&&!d()(p)&&!o)return null;var S=o?s.formatMessage(o):void 0;return i.a.createElement(g.a,{interactionTarget:b.d.ACCESS_STATS,title:i.a.createElement(f.FormattedMessage,h.a.sidebarAccessStats)},i.a.createElement(m.a,{errorMessage:S,commentCount:l,commentStatButtonProps:v({},b.c,b.b.ACCESS_STATS.COMMENTS),downloadCount:u,downloadStatButtonProps:v({},b.c,b.b.ACCESS_STATS.DOWNLOADS),previewCount:c,previewStatButtonProps:v({},b.c,b.b.ACCESS_STATS.PREVIEWS),viewStatButtonProps:v({},b.c,b.b.ACCESS_STATS.VIEWS),editCount:p,editStatButtonProps:v({},b.c,b.b.ACCESS_STATS.EDITS),openAccessStatsModal:t,isBoxNote:Object(y.isBoxNote)(r),viewMoreButtonProps:v({},b.c,b.b.ACCESS_STATS.VIEW_DETAILS)}))}))),O=n("F3aPid5ScL"),C=n("0JggexkqG5"),w=n("8Wpvjplx0g");n("u3Xld+dZ1W");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var A=function(e){var t,n,a,r=e.classification,o=e.file,s=e.onEdit,l=!!s&&c()(o,w.FIELD_PERMISSIONS_CAN_UPLOAD,!1),u=!!c()(r,"name");return u||l?i.a.createElement(C.a,{buttonProps:(t={},n=b.c,a=b.d.CLASSIFICATION,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t),className:"bcs-SidebarClassification",headerActionItems:l?i.a.createElement(O.b,{className:"bcs-SidebarClassification-edit",isEditing:u,onEdit:s}):null,title:i.a.createElement(f.FormattedMessage,O.f.classification)},i.a.createElement(O.g,T({},r,{messageStyle:"inline"}))):null},P=n("r3MCc/Cplg"),j=n("QHBGqjKTxU"),_=n("H8TAbOdf0m"),I=n("YYjnoyiSEZ");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=Object(f.injectIntl)(Object(S.a)((function(e){var t=e.file,n=e.onDescriptionChange,a=e.hasRetentionPolicy,r=e.retentionPolicy,o=e.onRetentionPolicyExtendClick,s=e.isLoading,l=e.intl;return i.a.createElement(_.default,{isLoading:s},i.a.createElement(j.a,{createdAt:t.content_created_at,description:t.description,descriptionTextareaProps:N({},b.c,b.b.DESCRIPTION),modifiedAt:t.content_modified_at,onDescriptionChange:c()(t,"permissions.can_rename")?n:void 0,owner:c()(t,"owned_by.name"),retentionPolicyProps:a?D({},r,{openModal:o}):{},size:Object(I.a)(t.size,l.locale),uploader:c()(t,"created_by.id")===w.PLACEHOLDER_USER.id?c()(t,"uploader_display_name"):c()(t,"created_by.name")}))}))),H=n("buqJXWxjQ4"),M=n("qY1ySM1Ue1"),R=n("0Y2o0irnbo"),B=(n("Fvo7RmkmaO"),{weekday:"short",month:"short",year:"numeric",day:"numeric"}),L=Object(f.injectIntl)((function(e){var t=e.date,n=e.dateFormat,a=void 0===n?B:n,r=e.omitCommas,o=void 0!==r&&r,s=e.intl,c=e.relative,l=void 0===c||c,u=e.capitalize,p=void 0!==u&&u,d=new Date(t),m=Object(R.i)(d),b=Object(R.k)(d);if(l&&(m||b)){var y=i.a.createElement(f.FormattedMessage,h.a.today);return b&&(y=i.a.createElement(f.FormattedMessage,h.a.yesterday)),p?i.a.createElement("span",{className:"be-date-capitalize"},y):y}var g=s.formatDate(d,a);return g=o?g.replace(/,/g,""):g})),x={month:"short",day:"numeric",year:"numeric"},U=function(e){var t=e.file,n=c()(t,"expires_at"),i=c()(t,"shared_link.unshared_at");return n||i?a.createElement(a.Fragment,null,!!n&&a.createElement(M.a,{expiration:a.createElement(L,{date:Object(R.a)(new Date(n),6e4),dateFormat:x,relative:!1}),itemType:"file"}),!!i&&a.createElement(H.a,{expiration:a.createElement(L,{date:Object(R.a)(new Date(i),6e4),dateFormat:x,relative:!1})})):null},W=n("TkMTkwwfcS"),J=(n("ekzzTbwQO2"),function(e){var t=e.onVersionHistoryClick,n=e.file,a=n.version_number,r=parseInt(a,10);return Object(y.isBoxNote)(n)||!r||r<=1?null:i.a.createElement(W.a,{className:"bcs-SidebarVersions","data-resin-target":b.b.VERSION_HISTORY,onClick:t,versionCount:r})}),q=n("s5MdjDBXUb"),z=n("fn3w3TIrL6"),V=n("bDvpQsLJpF"),Z=n("7EA+m7Wkjh"),Y=n("9v9/QOdyjq"),G=n("+BZej3U4u/"),Q=n("UNciB34TMA");n("0JkpXo7tBn");function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"DetailsSidebarComponent",(function(){return re}));var ie="".concat(w.ORIGIN_DETAILS_SIDEBAR,"_").concat(q.a);Object(V.b)(ie);var re=function(e){function t(e){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,i=ee(t).call(this,e),n=!i||"object"!==X(i)&&"function"!==typeof i?te(a):i,ae(te(n),"descriptionChangeSuccessCallback",(function(e){n.setState({file:e,fileError:void 0})})),ae(te(n),"fetchFileSuccessCallback",(function(e){n.setState({file:e,fileError:void 0})})),ae(te(n),"fetchFileErrorCallback",(function(e,t){n.setState({file:void 0}),n.props.onError(e,t,{e:e})})),ae(te(n),"descriptionChangeErrorCallback",(function(e){n.setState({file:e,fileError:{inlineError:{title:h.a.fileDescriptionInlineErrorTitleMessage,content:h.a.defaultInlineErrorContentMessage}}})})),ae(te(n),"onDescriptionChange",(function(e){var t=n.props.api,a=n.state.file;if(!a)throw Object(z.a)();e!==a.description&&t.getFileAPI().setFileDescription(a,e,n.descriptionChangeSuccessCallback,n.descriptionChangeErrorCallback)})),ae(te(n),"fetchAccessStatsErrorCallback",(function(e,t){if(n.props.hasAccessStats){var a,i=c()(e,"status")===w.HTTP_STATUS_CODE_FORBIDDEN;a=i?{error:h.a.fileAccessStatsPermissionsError}:{maskError:{errorHeader:h.a.fileAccessStatsErrorHeaderMessage,errorSubHeader:h.a.defaultErrorMaskSubHeaderMessage}},n.setState({isLoadingAccessStats:!1,accessStats:void 0,accessStatsError:a}),n.props.onError(e,t,ae({e:e},w.IS_ERROR_DISPLAYED,!i))}})),ae(te(n),"fetchAccessStatsSuccessCallback",(function(e){n.props.hasAccessStats&&n.setState({accessStats:e,accessStatsError:void 0,isLoadingAccessStats:!1})})),n.state={isLoadingAccessStats:!1},n.props.logger.onReadyMetric({endMarkName:ie}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.fetchFile(),this.props.hasAccessStats&&this.fetchAccessStats()}},{key:"componentDidUpdate",value:function(e){var t=e.hasAccessStats,n=this.props.hasAccessStats;t!==n&&(n?this.fetchAccessStats():this.setState({isLoadingAccessStats:!1,accessStats:void 0,accessStatsError:void 0}))}},{key:"fetchFile",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.fetchFileSuccessCallback,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fetchFileErrorCallback,n=this.props,a=n.api,i=n.fileId;a.getFileAPI().getFile(i,e,t,{fields:Z.g})}},{key:"fetchAccessStats",value:function(){var e=this.props,t=e.api,n=e.fileId;this.state.isLoadingAccessStats||(this.setState({isLoadingAccessStats:!0}),t.getFileAccessStatsAPI(!1).getFileAccessStats(n,this.fetchAccessStatsSuccessCallback,this.fetchAccessStatsErrorCallback))}},{key:"refresh",value:function(){this.fetchAccessStats()}},{key:"render",value:function(){var e=this.props,t=e.classification,n=e.elementId,a=e.hasProperties,r=e.hasNotices,o=e.hasAccessStats,s=e.hasClassification,c=e.hasRetentionPolicy,l=e.hasVersions,u=e.onAccessStatsClick,p=e.onVersionHistoryClick,d=e.onClassificationClick,m=e.onRetentionPolicyExtendClick,y=e.retentionPolicy,S=this.state,v=S.accessStats,O=S.accessStatsError,C=S.file,T=S.fileError,j=S.isLoadingAccessStats;return i.a.createElement(P.a,{className:"bcs-details",elementId:n,sidebarView:w.SIDEBAR_VIEW_DETAILS,title:i.a.createElement(f.FormattedMessage,h.a.sidebarDetailsTitle)},C&&r&&i.a.createElement("div",{className:"bcs-DetailsSidebar-notices"},i.a.createElement(U,{file:C})),C&&s&&i.a.createElement(A,{classification:t,file:C,onEdit:d}),C&&o&&i.a.createElement(E,K({accessStats:v,file:C,onAccessStatsClick:u},O)),C&&a&&i.a.createElement(g.a,{interactionTarget:b.d.FILE_PROPERTIES,title:i.a.createElement(f.FormattedMessage,h.a.sidebarProperties)},l&&i.a.createElement(J,{file:C,onVersionHistoryClick:p}),i.a.createElement(F,K({file:C,onDescriptionChange:this.onDescriptionChange},T,{hasRetentionPolicy:c,isLoading:j,onRetentionPolicyExtendClick:m,retentionPolicy:y}))))}}])&&$(n.prototype,a),r&&$(n,r),t}(i.a.PureComponent);ae(re,"defaultProps",{hasNotices:!1,hasProperties:!1,hasAccessStats:!1,hasClassification:!1,hasRetentionPolicy:!1,hasVersions:!1,onError:u.a});t.default=o()([Object(Q.a)(w.ORIGIN_DETAILS_SIDEBAR),Object(G.a)(w.ORIGIN_DETAILS_SIDEBAR),Y.b])(re)},"u3Xld+dZ1W":function(e,t,n){},vLJKbbBHNf:function(e,t,n){"use strict";var a=n("q1tIBJhxTW"),i=n("JRPeW/Ew/U"),r=n("cFyx4PIvz6"),o=n("q1aIMTy7yT"),s=n("4+rfDOrIJ4");function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.a=function(e){return function(t){var n=t.maskError,l=t.inlineError,u=(t.errorCode,c(t,["maskError","inlineError","errorCode"]));return n?a.createElement(s.a,null,a.createElement(r.a,{errorHeader:a.createElement(i.FormattedMessage,n.errorHeader),errorSubHeader:n.errorSubHeader?a.createElement(i.FormattedMessage,n.errorSubHeader):void 0})):l?a.createElement(a.Fragment,null,a.createElement(o.a,{title:a.createElement(i.FormattedMessage,l.title)},a.createElement(i.FormattedMessage,l.content)),a.createElement(e,u)):a.createElement(e,u)}}},zapBslzZE5:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="data-resin-target"}}]);