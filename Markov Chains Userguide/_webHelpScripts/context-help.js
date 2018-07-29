function _$(n){if(document.querySelector)return document.querySelector(n);throw"document.querySelector is not supported";}function _$$(n){if(document.querySelectorAll)return document.querySelectorAll(n);throw"document.querySelectorAll is not supported";}function appendEventHandler(n,t,i,r){function wrapHandler(n){i(n||window.event)}var wrapHandler=i;if(typeof n.addEventListener=="function"){if(n.addEventListener(t,wrapHandler,!1),r)return function(){n.removeEventListener(t,wrapHandler,!1)}}else if(n.attachEvent&&(n.attachEvent("on"+t,wrapHandler),r))return function(){n.detachEvent("on"+t,wrapHandler)}}function stopBubbling(n){return n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),n.cancelBubble=!0,n.returnValue=!1,!1}function appendTouchGestureHandler(n,t,i,r){function f(n){xDown=n.touches?n.touches[0].clientX:n.clientX;yDown=n.touches?n.touches[0].clientY:n.clientY;xUp=xDown;yUp=yDown;u=setInterval(o,15,i,r)}function e(n){xUp=n.touches?n.touches[0].clientX:n.clientX;yUp=n.touches?n.touches[0].clientY:n.clientY}function o(n,t){if(xDown&&yDown){t||(t=0);var i=xDown-xUp,r=yDown-yUp;Math.abs(i)>Math.abs(r)?Math.abs(i)>t&&(i>0?n({dir:"left"}):n({dir:"right"}),xDown=null,yDown=null):Math.abs(r)>t&&(r>0,xDown=null,yDown=null)}}function s(){u&&(clearInterval(u),u=null)}var u=null;switch(t){case"swipe":appendEventHandler(n,"touchstart",f);appendEventHandler(n,"touchmove",function(n){e(n)});appendEventHandler(document.documentElement,"touchend",s);break;default:throw"Unknown touch gesture type!";}}function getMouseBtn(n){return n.which==null?n.button<2?"left":n.button==4?"middle":"right":n.which<2?"left":n.which==2?"middle":"right"}function guid(){function n(n){var t=(Math.random().toString(16)+"000000000").substr(2,8);return n?"-"+t.substr(0,4)+"-"+t.substr(4,4):t}return n()+n(!0)+n(!0)+n()}function isIgnoreCaseEqual(n,t){return n==t||n!=null&&t!=null&&n.toLowerCase()==t.toLowerCase()}function escapeMarkup(n){if(n!=null){for(var t=0;t<markupEscapeCharsMapping.length;t++)n=n.replace(new RegExp(RegExp.escape(markupEscapeCharsMapping[t][0]),"g"),markupEscapeCharsMapping[t][1]);return n}return null}function unescapeMarkup(n){if(n!=null){for(var t=markupEscapeCharsMapping.length-1;t>=0;t--)n=n.replace(new RegExp(RegExp.escape(markupEscapeCharsMapping[t][1]),"g"),markupEscapeCharsMapping[t][0]);return n}return null}function getDirectoryName(n,t){return t||(t="\\"),n.substr(0,n.lastIndexOf(t))}function getFileName(n){n=n.replace(new RegExp("/","g"),"\\");var t=n.lastIndexOf("\\");return n.substr(t>-1?t+1:0)}function getFileExtension(n){var t=n.lastIndexOf(".");return n.substr(t>-1?t+1:0)}function endNotWithPathSeparator(n){return n.length>0&&arrayContains(["/","\\"],n[n.length-1])?n.slice(0,-1):n}function getCurUrlParams(){return function(n){var r,t,i;if(n=="")return{};for(r={},t=0;t<n.length;++t)(i=n[t].split("="),i.length==2)&&(r[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")));return r}(window.location.search.substr(1).split("&"))}function toEllipsisString(n,t){return n?n.length<=t?n:n.substring(0,t-3)+"...":""}function createCookie(n,t,i){var r,u;i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toGMTString()):u="";document.cookie=n+"="+t+u+"; path=/"}function readCookie(n){for(var r=n+"=",u=document.cookie.split(";"),t,i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return null}function eraseCookie(n){createCookie(n,"",-1)}function arrayContains(n,t,i){for(var r=0;r<n.length;r++)if(i&&i(n[r],t)||n[r]==t)return!0;return!1}function arrayPushAll(n,t){for(var i=0;i<t.length;i++)n.push(t[i])}function removeDynamicLinks(n,t,i){var u,r;for(i||(i=document),u=i.getElementsByTagName(n?"script":"link"),r=u.length-1;r>=0;r--)u[r].id&&u[r].id.indexOf(t)>-1&&u[r].parentNode.removeChild(u[r])}function addDynamicLinks(n,t,i,r,u){var o,e,f;for(r||(r=document),i||(i=""),o=r.getElementsByTagName("head")[0],e=0;e<n.length;e++)f=null,t?(f=document.createElement("script"),f.setAttribute("type","text/javascript"),f.setAttribute("src",n[e]),f.setAttribute("id",i+"js"+e)):(f=document.createElement("link"),f.setAttribute("rel","stylesheet"),f.setAttribute("type","text/css"),f.setAttribute("href",n[e]),f.setAttribute("id",i+"css"+e)),u&&appendEventHandler(f,"load",u),o.appendChild(f)}function getStyleByName(n,t){var r=[],u=t?t:document,i,f;for(n.indexOf(".")!=0&&(n="."+n),i=0;i<u.styleSheets.length;i++){u.styleSheets[i].cssRules?r=u.styleSheets[i].cssRules:u.styleSheets[i].rules&&(r=u.styleSheets[i].rules);for(f in r)if(r[f].selectorText&&r[f].selectorText.toLowerCase()==n.toLowerCase())return r[f]}return null}function getElementByCustomCriteria(n,t,i){for(var f=document.getElementsByTagName(n.toLowerCase()),e,u,o,r=0;r<i.length;r++)i[r]=new RegExp("^"+RegExp.escape(i[r]).replace(/\\\*/g,".*")+"$","i");for(r=0;r<f.length;r++){for(e=0,u=0;u<t.length;u++)if(o=f[r].getAttribute(t[u]),i[u].test(o))e++;else break;if(e==t.length)return f[r]}return null}function getElementByPartOfId(n,t){for(var r=document.getElementsByTagName(n.toLowerCase()),i=0;i<r.length;i++)if(r[i].id.indexOf(t)>-1)return r[i];return null}function getElementByClassName(n,t){for(var r=document.getElementsByTagName(n.toLowerCase()),i=0;i<r.length;i++)if(r[i].className==t)return r[i];return null}function getElementsByPartOfClassName(n,t,i){var r,o;n=n?n:"*";var e=i?i:document,u=e.getElementsByTagName(n.toLowerCase()),f=[];for(r=0;r<u.length;r++)u[r].className&&typeof u[r].className.indexOf!=typeof getElementsByPartOfClassName&&(o=""),u[r].className&&u[r].className.indexOf&&u[r].className.indexOf(t)>-1&&f.push(u[r]);return f}function getStyleValue(n,t){var i;if(n.currentStyle)i=n.currentStyle[t];else if(window.getComputedStyle)var r=n.ownerDocument,u=r.defaultView||r.parentWindow,i=u.getComputedStyle(n,null).getPropertyValue(t);return i}function getHtmlElement(n){var t=n;return typeof n=="string"&&(t=window[n],null==t&&(t=document.getElementById(n))),n.GetMainElement!=null&&(t=n.GetMainElement()),t}function getIsChildOf(n,t){while(n!=null&&!isIgnoreCaseEqual(n.tagName,"body")){if(n==t)return!0;n=n.parentNode}return!1}function getMatchingParent(n,t){while(n!=null&&!isIgnoreCaseEqual(n.tagName,"body")){if(t(n))return n;n=n.parentNode}return!1}function getClientWidth(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"padding-left")),r=parseInt(getStyleValue(t,"padding-right"));return t.offsetWidth-(isNaN(parseInt(i))?0:i)-(isNaN(parseInt(r))?0:r)-getBordersWidth(n)}function getClientHeight(n){var t,i,r;return n?(t=getHtmlElement(n),t==document.documentElement)?document.documentElement.clientHeight:(i=parseInt(getStyleValue(t,"padding-top")),r=parseInt(getStyleValue(t,"padding-bottom")),t.offsetHeight-(isNaN(parseInt(i))?0:i)-(isNaN(parseInt(r))?0:r)-getBordersHeight(n)):0}function getBordersWidth(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"border-left-width")),r=parseInt(getStyleValue(t,"border-right-width"));return(isNaN(parseInt(i))?0:i)+(isNaN(parseInt(r))?0:r)}function getBordersHeight(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"border-top-width")),r=parseInt(getStyleValue(t,"border-bottom-width"));return(isNaN(parseInt(i))?0:i)+(isNaN(parseInt(r))?0:r)}function getPaddingsHeight(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"padding-top")),r=parseInt(getStyleValue(t,"padding-bottom"));return(isNaN(parseInt(i))?0:i)+(isNaN(parseInt(r))?0:r)}function getMarginsHeight(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"margin-top")),r=parseInt(getStyleValue(t,"margin-bottom"));return(isNaN(parseInt(i))?0:i)+(isNaN(parseInt(r))?0:r)}function getMarginsWidth(n){if(!n)return 0;var t=getHtmlElement(n),i=parseInt(getStyleValue(t,"margin-left")),r=parseInt(getStyleValue(t,"margin-right"));return(isNaN(parseInt(i))?0:i)+(isNaN(parseInt(r))?0:r)}function getAdjustedElementHeight(n,t,i){return getClientHeight(n)-(t?t.offsetHeight:0)-(i&&!isNaN(parseInt(i))?i:0)}function getOffset(n){for(var t=0,i=0;n&&!isNaN(parseInt(n.offsetLeft))&&!isNaN(parseInt(n.offsetTop));)t+=n.offsetLeft-n.scrollLeft,i+=n.offsetTop-n.scrollTop,n=n.offsetParent;return{top:i,left:t}}function getElementAbsPos(n){for(var t=0,i=0;n&&!isNaN(parseInt(n.offsetLeft))&&!isNaN(parseInt(n.offsetTop));)t+=n.offsetLeft-n.scrollLeft,i+=n.offsetTop-n.scrollTop,n=n.offsetParent;return[t,i]}function getIsAbsPos(n){var t=getStyleValue(n,"position");return t&&(t=t.toLowerCase()),t=="relative"||t=="absolute"?t:!1}function getNearestAbsParent(n){return getIsAbsPos(n.parentNode)||n.parentNode.nodeName.toLowerCase()=="body"?n.parentNode:getNearestAbsParent(n.parentNode)}function getElementPos(n,t,i){var e=0,o=0,i=t?document.documentElement:i?i:getNearestAbsParent(n),s,h,c,u,r,f;if(n.ownerDocument!=i.ownerDocument){if(s=n.ownerDocument,h=s.defaultView||s.parentWindow,!h.frameElement)throw"Cannot calculate position: 'e' and 'pivotParent' are from different documents, but e's document is not a document of an iframe. This is not supported.";c=getElementPos(n,!1,s.documentElement);n=h.frameElement;e=c[0];o=c[1]}if(u=n,r=n,u.offsetParent)do e+=u.offsetLeft,o+=u.offsetTop,u=u.offsetParent;while(u&&u!=i);for(f=getIsAbsPos(r);(r=f?r.offsetParent:r.parentNode)&&r!=i;)f&&f!="relative"||(e-=r.scrollLeft,o-=r.scrollTop),f=getIsAbsPos(r);return[e,o]}function textareaAutoSize(n,t){var i=n.value.split(/\r|\n|\r\n|\n\r/);n.rows=t?Math.min(t,i.length):i.length}function getIsElementInViewport(n,t){t||(t=window);var i=n.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=(t.innerHeight||t.document.documentElement.clientHeight)&&i.right<=(t.innerWidth||t.document.documentElement.clientWidth)}function sendRequest(n,t,i,r,u,f){function o(n,t){var i=new XMLHttpRequest;return"withCredentials"in i?i.open(n,t,!0):typeof XDomainRequest!="undefined"?(i=new XDomainRequest,i.open(n,t)):i=null,i}var e=null;if(f){if(e=o(n,t),!e)throw new Error("CORS requests are not supported by your web browser.");}else e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return u&&(e.onreadystatechange=function(){this.readyState==4&&u(this)}),e.open(n,t,r?!0:!1),i&&typeof i=="object"&&(e.setRequestHeader("Content-type","application/json"),i=JSON.stringify(i)),e.send(i),e}function mergeOptions(n,t){function i(n,t,r){var f={},u;for(u in n)n.hasOwnProperty(u)&&(f[u]=t&&("object"==typeof n[u]&&n[u]!=null||"object"==typeof t[u]&&t[u]!=null)?i(n[u],t[u],u=="cssClasses"):r?n[u]+(t&&t.hasOwnProperty(u)&&t[u]?" "+t[u]:""):(t&&t.hasOwnProperty(u)&&t[u]!=null?t:n)[u]);return f}return i(n,t,!1)}function copyToClipboard(n,t){var f="_hiddenCopyText_",i,r,u;i=document.getElementById(f);i||(i=document.createElement("textarea"),i.style.position="absolute",i.style.left="-9999px",i.style.top="0",i.id=f,document.body.appendChild(i));i.textContent=n;r=document.activeElement;i.focus();i.setSelectionRange(0,i.value.length);try{u=document.execCommand("copy")}catch(e){u=!1}return t&&r&&typeof r.focus=="function"&&r.focus(),i.textContent="",u}function PopupWindow(n){function r(n){var t=document.getElementsByTagName("body")[0],i;if(n.wnd.parentNode!=t){if(n.wnd.id)for(i=0;i<t.children.length;i++)if(t.children[i].id==n.wnd.id){t.removeChild(t.children[i]);break}t.appendChild(n.wnd)}}function u(n){function r(n,t,i){return getMatchingParent(i,function(i){return i==n||i==t})}for(var i=n.showAction.split("|"),t=0;t<i.length;t++)switch(i[t]){case"init":n.show();break;case"mouseover":case"click":appendEventHandler(n.target,i[t],function(){n.show.call(n)})}switch(n.hideAction){case"mouseout":function u(t){typeof t!="undefined"&&r(n.wnd,n.target,t.relatedTarget||t.toElement)||n.hide.call(n,null)}appendEventHandler(n.wnd,"mouseout",u);n.target&&appendEventHandler(n.target,n.hideAction,u);break;case"click":appendEventHandler(document.documentElement,"click",function(){if(n.wnd&&!n.isDontHidePopupOnBodyClick){if(typeof event!="undefined"&&r(n.wnd,null,event.target||event.srcElement))return;n.hide.call(n,null)}})}n.btnClose&&appendEventHandler(n.btnClose,"click",function(){n.hide.call(n,n.btnClose)})}function f(n){if(n.contentUrl&&n.iframe)if(appendEventHandler(window,"message",function(t){var i=null;try{i=JSON.parse(t.data)}catch(r){return}n.isAutoAdjustHeightForIframe&&i.clhFrameName&&i.clhFrameName==n.iframe.id&&(n.iframe&&(i.height+=n.wnd.scrollHeight-n.iframe.offsetHeight),n.iframeContentHeight=i.height,n.show())}),appendEventHandler(n.iframe,"load",function(){n.hidePnlLoading()}),n.isDelayLoadIframeContent){var t=document.createElement("div");t.style.position="absolute";t.style.top="0";t.style.left="0";t.style.right="0";t.style.overflow="hidden";t.style.width="100%";t.style.textAlign="center";t.style.zIndex=n.zIndex+1;t.innerHTML=n.iframeLoadingText;n.wnd.appendChild(t);n.pnlLoading=t}else n.iframe.src=n.contentUrl}function e(n){var i,t,r;if(n.wnd.style.display="none",n.isRenderBeak&&!n.beak&&(n.beak=document.createElement("div"),n.beak.style.overflow="hidden",n.beak.style.display="none",i=n.getBeakSize(),n.beak.style.width=i[0]+"px",n.beak.style.height=i[1]+"px",n.wnd.parentNode.insertBefore(n.beak,n.wnd.nextSibling),t=document.createElement("div"),t.style.position="absolute",t.style.borderWidth="1px",t.style.borderStyle="solid",t.style.borderColor="#cdcdcd",t.style.width=-2+n.beakSize*Math.sqrt(2)+"px",t.style.height=-2+n.beakSize*Math.sqrt(2)+"px",t.style.backgroundColor="white",t.style.transformOrigin=t.style.webkitTransformOrigin="top left",t.className=n.beakCssClass?n.beakCssClass:"",n.beak.appendChild(t)),n.isEffectAppear&&(n.wnd.style.opacity="0",n.beak&&(n.beak.style.opacity=n.wnd.style.opacity)),n.isEffectExpand&&(n.wnd.style.transform=n.wnd.style.webkitTransform=n.getTranslateValue(),n.beak&&(n.beak.style.transform=n.beak.style.webkitTransform=n.wnd.style.transform)),n.wnd.style.overflow="hidden",n.wnd.style.boxShadow=n.isAddShadow?"rgba(0,0,0,.7) 0 2px 25px":"",isIgnoreCaseEqual(n.position,"default")||(n.wnd.style.position="absolute",n.beak&&(n.beak.style.position="absolute")),n.wnd.style.zIndex=n.zIndex+(n.isModal?0:-1),n.beak&&(n.beak.style.zIndex=n.wnd.style.zIndex),n.isAllowDragging){r=n.dragTrigger?n.dragTrigger:n.wnd;r.style.cursor="move";function u(){n.isDragging=!1;n.pnlPopupOverlay.parentNode&&n.wnd.removeChild(n.pnlPopupOverlay);n.pnlBodyOverlay.parentNode&&document.documentElement.removeChild(n.pnlBodyOverlay)}function f(t){var i,r,u;n.isDragging&&(i=0,r=0,n.wnd.offsetParent&&(u=getElementPos(n.wnd.offsetParent,!0),i=u[0],r=u[1]),n.wnd.style.left=t.pageX-n.dragPoint[0]-i+"px",n.wnd.style.top=t.pageY-n.dragPoint[1]-r+"px")}function e(t){var r=t.srcElement||t.target,i;if(r&&r==n.btnClose)return!0;n.isDragging=!0;i=getElementPos(n.wnd,!0);n.dragPoint=[t.pageX-i[0],t.pageY-i[1]];n.pnlPopupOverlay=document.createElement("div");n.pnlPopupOverlay.style.position="absolute";n.pnlPopupOverlay.style.top=0;n.pnlPopupOverlay.style.bottom=0;n.pnlPopupOverlay.style.left=0;n.pnlPopupOverlay.style.right=0;n.pnlPopupOverlay.style.cursor="move";n.wnd.appendChild(n.pnlPopupOverlay);appendEventHandler(n.pnlPopupOverlay,"mousemove",f);appendEventHandler(n.pnlPopupOverlay,"mouseup",u);n.pnlBodyOverlay=document.createElement("div");n.pnlBodyOverlay.style.position="absolute";n.pnlBodyOverlay.style.top=0;n.pnlBodyOverlay.style.bottom=0;n.pnlBodyOverlay.style.left=0;n.pnlBodyOverlay.style.right=0;n.pnlBodyOverlay.style.cursor="move";document.documentElement.appendChild(n.pnlBodyOverlay);appendEventHandler(n.pnlBodyOverlay,"mousemove",f);appendEventHandler(n.pnlBodyOverlay,"mouseup",u)}appendEventHandler(r,"mousedown",e)}}function o(n){appendEventHandler(window,"resize",function(){n.adjustSize()})}var i,t;PopupWindow.prototype.getIsHorizontalAlign=function(){switch(this.position.toLowerCase()){case"left":case"right":return!0;default:return!1}};PopupWindow.prototype.getBeakSize=function(){return[this.beak?this.beakSize*(this.getIsHorizontalAlign()?1:2):0,this.beak?this.beakSize*(this.getIsHorizontalAlign()?2:1):0]};PopupWindow.prototype.getTranslateValue=function(){return this.fixedPosition&&typeof this.fixedPosition.top!="undefined"||!this.fixedPosition&&(isIgnoreCaseEqual(this.position,"bottom")||isIgnoreCaseEqual(this.position,"center"))?"translateY(-50px)":this.fixedPosition&&typeof this.fixedPosition.bottom!="undefined"||!this.fixedPosition&&isIgnoreCaseEqual(this.position,"top")?"translateY(50px)":this.fixedPosition&&typeof this.fixedPosition.left!="undefined"||!this.fixedPosition&&isIgnoreCaseEqual(this.position,"right")?"translateX(50px)":this.fixedPosition&&typeof this.fixedPosition.right!="undefined"||!this.fixedPosition&&isIgnoreCaseEqual(this.position,"left")?"translateX(-50px)":"translateY(-50px)"};var s=["mouseover","click","init","none"];if(this.onShowing=n.onShowing,this.onHiding=n.onHiding,this.wnd=n.wnd?n.wnd:document.getElementById(n.wndId),!this.wnd)return window.console&&console.warn("Failed to initialize PopupWindow: window element not found. Expected element ID is: '"+n.wndId+"'"),null;if(this.target=n.target?n.target:null,!this.target&&n.targetId&&(this.target=document.getElementById(n.targetId)),this.targetCoordinatesEvalType=typeof n.targetCoordinatesEvalType!="undefined"?n.targetCoordinatesEvalType:PopupWindow.defaults.targetCoordinatesEvalType,this.position=!n.position||!arrayContains(["left","right","top","bottom","center","default"],n.position.toLowerCase())?"center":n.position.toLowerCase(),n.showAction){for(i=n.showAction.toLowerCase().split("|"),t=0;t<i.length;t++)if(!arrayContains(s,i[t])){this.showAction=PopupWindow.defaults.showAction;break}this.showAction||(this.showAction=n.showAction)}else this.showAction=PopupWindow.defaults.showAction;this.hideAction=!n.hideAction||!arrayContains(["mouseout","click","none"],n.hideAction.toLowerCase().split("|"))?PopupWindow.defaults.hideAction:n.hideAction.toLowerCase();this.isAllowDragging=typeof n.isAllowDragging!="undefined"?n.isAllowDragging&&this.hideAction=="none":PopupWindow.defaults.isAllowDragging;this.dragTrigger=n.dragTrigger;!this.dragTrigger&&n.dragTriggerId&&(this.dragTrigger=document.getElementById(n.dragTriggerId));this.beginWindowMeasurement();this.width=n.width&&!isNaN(n.width)?n.width:this.wnd.offsetWidth>0?getClientWidth(this.wnd):PopupWindow.defaults.width;this.height=n.height&&!isNaN(n.height)?n.height:this.wnd.offsetHeight>0?getClientHeight(this.wnd):PopupWindow.defaults.height;this.endWindowMeasurement();this.relOffset=n.relOffset?n.relOffset:PopupWindow.defaults.relOffset;this.fixedPosition=n.fixedPosition?n.fixedPosition:PopupWindow.defaults.fixedPosition;this.btnClose=n.btnClose;!this.btnClose&&n.btnCloseId&&(this.btnClose=document.getElementById(n.btnCloseId));this.isAddShadow=typeof n.isAddShadow=="undefined"?PopupWindow.defaults.isAddShadow:n.isAddShadow;this.isEffectExpand=typeof n.isEffectExpand=="undefined"?PopupWindow.defaults.isEffectExpand:n.isEffectExpand;this.isEffectAppear=typeof n.isEffectAppear=="undefined"?PopupWindow.defaults.isEffectAppear:n.isEffectAppear;this.effectsTimeout=typeof n.effectsTimeout=="undefined"?PopupWindow.defaults.effectsTimeout:n.effectsTimeout;this.isModal=typeof n.isModal=="undefined"?PopupWindow.defaults.isModal:n.isModal;this.iframe=n.iframe;!this.iframe&&n.iframeId&&(this.iframe=document.getElementById(n.iframeId));this.iframeLoadingText=n.iframeLoadingText?n.iframeLoadingText:PopupWindow.defaults.iframeLoadingText;this.contentUrl=n.contentUrl?n.contentUrl:PopupWindow.defaults.contentUrl;this.isDelayLoadIframeContent=typeof n.isDelayLoadIframeContent!="undefined"?n.isDelayLoadIframeContent:!1;this.isAutoAdjustHeightForIframe=!n.height;this.zIndex=5e4;this.isEnableResponsiveResize=typeof n.isEnableResponsiveResize=="undefined"?PopupWindow.defaults.isEnableResponsiveResize:n.isEnableResponsiveResize;this.responsiveResizeMaxWidth=n.responsiveResizeMaxWidth&&!isNaN(n.responsiveResizeMaxWidth)?n.responsiveResizeMaxWidth:this.width;this.responsiveResizeMaxHeight=n.responsiveResizeMaxHeight&&!isNaN(n.responsiveResizeMaxWidth)?n.responsiveResizeMaxHeight:this.height;this.responsiveResizedEl=n.responsiveResizedElId?document.getElementById(n.responsiveResizedElId):n.responsiveResizedEl;this.responsiveResizedElHeight=n.responsiveResizedElHeight&&!isNaN(n.responsiveResizedElHeight)?n.responsiveResizedElHeight:0;this.isMoveToBodyChildLevel=typeof n.isMoveToBodyChildLevel=="undefined"?PopupWindow.defaults.isMoveToBodyChildLevel:n.isMoveToBodyChildLevel;this.beakSize=n.beakSize?n.beakSize:PopupWindow.defaults.beakSize;this.isRenderBeak=typeof n.isRenderBeak=="undefined"?PopupWindow.defaults.isRenderBeak:n.isRenderBeak;this.isRenderBeak&&!arrayContains(["left","right","top","bottom"],this.position)&&(this.isRenderBeak=!1);e(this);f(this);this.isMoveToBodyChildLevel&&r(this);u(this);this.isEnableResponsiveResize&&o(this)}var xDown=null,yDown=null,xUp=null,yUp=null,isIe=navigator.appVersion.toLowerCase().indexOf("msie")>-1||Object.hasOwnProperty.call(window,"ActiveXObject")&&!window.ActiveXObject,isIos=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,markupEscapeCharsMapping;RegExp.escape=function(n){return n.replace(/[[\]{}()*+?\.,\\^$|#]/g,"\\$&")};String.prototype.charCount=function(n){var t=this.match(new RegExp(RegExp.escape(n),"g"));return t==null?0:t.length};markupEscapeCharsMapping=[["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"]],function(){function n(){}window.CssHandler||(n.prototype.extraClassMask="(\\s+|^){0}(\\s+|$)",n.prototype.addElClass=function(n,t){n.className=this.addClass(n.className,t)},n.prototype.addClass=function(n,t){return n||(n=""),new RegExp(this.extraClassMask.replace("{0}",RegExp.escape(t))).test(n)||(n+=(n?" ":"")+t),n},n.prototype.removeClass=function(n,t){return n||(n=""),n.replace(new RegExp(this.extraClassMask.replace("{0}",RegExp.escape(t)),"g")," ").replace(" {2,}"," ").trim()},n.prototype.removeElClass=function(n,t){n.className=this.removeClass(n.className,t);n.className||n.removeAttribute("class")},window.CssHandler=new n)}();PopupWindow.defaults={wnd:null,target:null,targetId:"",targetCoordinatesEvalType:"",btnClose:null,btnCloseId:"",dragTrigger:null,dragTriggerId:"",isAllowDragging:!1,position:"center",showAction:"init",hideAction:"none",width:200,height:200,relOffset:null,fixedPosition:null,isEffectExpand:!1,isEffectAppear:!1,effectsTimeout:300,isAddShadow:!0,isModal:!1,contentUrl:"",iframe:null,iframeId:"",iframeLoadingText:"Loading...",isDelayLoadIframeContent:!1,isMoveToBodyChildLevel:!1,isRenderBeak:!1,beakCssClass:"",beakSize:10,isEnableResponsiveResize:!1,responsiveResizeMaxWidth:200,responsiveResizeMaxHeight:200,responsiveResizedElId:"",responsiveResizedEl:null,responsiveResizedElHeight:0};PopupWindow.prototype.hidePnlLoading=function(){this.pnlLoading&&(this.pnlLoading.style.display="none",this.pnlLoading.parentNode&&this.pnlLoading.parentNode.removeChild(this.pnlLoading),this.pnlLoading=null)};PopupWindow.prototype.createModalPanel=function(){var n=document.createElement("div"),t;return n.style.backgroundColor="black",n.style.opacity="0.5",n.style.webkitTransition=n.style.transition="opacity "+this.effectsTimeout+"ms",n.style.position="fixed",n.style.top="0",n.style.bottom="0",n.style.left="0",n.style.right="0",n.style.overflow="hidden",n.style.zIndex=this.zIndex-1,document.getElementsByTagName("body")[0].appendChild(n),t=this,appendEventHandler(n,"click",function(){t.hide()}),n};PopupWindow.prototype.adjustPosition=function(){var u,p,l,a,w,b,s,h,c,k;if(this.position.toLowerCase()!="default"){var f=this.getWindowSize(),w=0,b=0;if(this.relOffset&&(f[0]+=this.relOffset.left?this.relOffset.left:0,f[1]+=this.relOffset.top?this.relOffset.top:0),this.target){var n=this.getTargetPos(this.target),r=this.getElementSize(this.target),v=this.getViewPos(),y=this.getViewSize(),o=this.getBeakSize(),i,t,e;switch(this.position.toLowerCase()){case"left":i=1;t=0;e=-1;break;case"right":i=1;t=0;e=1;break;case"top":i=0;t=1;e=-1;break;default:i=0;t=1;e=1}if(u=(r[t]+f[t])/2,p=[-v[i]+n[i]+f[i]>y[i]?-v[i]+n[i]+r[i]/2>y[i]/2&&n[i]+r[i]-f[i]>=0?n[i]+r[i]-f[i]:n[i]:n[i],-v[t]+n[t]+r[t]+f[t]-u+u*e>y[t]?-v[t]+n[t]+r[t]/2>y[t]/2&&n[t]+r[t]-u-u*e>=0?n[t]+r[t]-u-u*e:n[t]+r[t]-u+u*e:n[t]+r[t]-u+u*e>=0?n[t]+r[t]-u+u*e:n[t]+r[t]-u-u*e],l=p[i],a=p[t],this.wnd.style.position="absolute",this.wnd.style.clear="both",w=(l<n[0]?-1:1)*((this.getIsHorizontalAlign()?o[0]:0)+(this.relOffset&&this.relOffset.left?this.relOffset.left:0)),this.wnd.style.left=l+w+"px",b=(a<n[1]?-1:1)*((this.getIsHorizontalAlign()?0:o[1])+(this.relOffset&&this.relOffset.top?this.relOffset.top:0)),this.wnd.style.top=a+b+"px",this.beak){s=null;switch(this.position.toLowerCase()){case"left":s=l<n[0]?"left":"right";break;case"right":s=l>n[0]?"right":"left";break;case"top":s=a<n[1]?"top":"bottom";break;case"bottom":s=a>n[1]?"bottom":"top"}h=0;c=0;switch(s){case"left":this.beak.children[0].style.transform=this.beak.children[0].style.webkitTransform="rotate(45deg)";this.beak.children[0].style.left="0";this.beak.children[0].style.top="0";h=n[0]-o[0];c=n[1]+Math.min(f[1]/2,r[1]/2)-o[1]/2;break;case"right":this.beak.children[0].style.transform=this.beak.children[0].style.webkitTransform="rotate(-45deg)";this.beak.children[0].style.left="0";this.beak.children[0].style.top="50%";h=n[0]+r[0];c=n[1]+Math.min(f[1]/2,r[1]/2)-o[1]/2;break;case"top":this.beak.children[0].style.transform=this.beak.children[0].style.webkitTransform="rotate(-45deg)";this.beak.children[0].style.left="0";this.beak.children[0].style.top="0";h=n[0]+Math.min(f[0]/2,r[0]/2)-o[0]/2;c=n[1]-o[1];break;case"bottom":this.beak.children[0].style.transform=this.beak.children[0].style.webkitTransform="rotate(45deg)";this.beak.children[0].style.left="50%";this.beak.children[0].style.top="0";h=n[0]+Math.min(f[0]/2,r[0]/2)-o[0]/2;c=n[1]+r[1]}this.beak.style.left=h+(this.relOffset&&this.relOffset.left?this.relOffset.left:0)+"px";this.beak.style.top=c+(this.relOffset&&this.relOffset.top?this.relOffset.top:0)+"px"}}else{this.wnd.style.position="fixed";switch(this.position.toLowerCase()){case"left":this.wnd.style.left="0";this.wnd.style.top="0";break;case"right":this.wnd.style.right="0";this.wnd.style.top="0";break;case"top":this.wnd.style.top="0";this.wnd.style.left="0";break;case"bottom":this.wnd.style.bottom="0";this.wnd.style.left="0";break;case"center":this.wnd.style.top=Math.max(0,document.documentElement.clientHeight/2-f[1]/2)+"px";this.wnd.style.left=Math.max(0,document.documentElement.clientWidth/2-f[0]/2)+"px";break;default:this.wnd.style.left="0";this.wnd.style.top="0"}}if(this.fixedPosition){this.wnd.style.position="fixed";this.wnd.style.left="";this.wnd.style.top="";this.wnd.style.right="";this.wnd.style.bottom="";for(k in this.fixedPosition)this.wnd.style[k]=this.fixedPosition[k]}}};PopupWindow.prototype.show=function(){var i,t,n;if(this.isShowing){this.adjustSize();this.adjustPosition();return}if(this.onShowing){i={isCancel:!1};this.onShowing(this,i);if(i.isCancel)return}this.adjustSize();this.adjustPosition();this.isModal&&(this.pnlModal=this.createModalPanel());this.contentUrl&&this.iframe&&this.isDelayLoadIframeContent&&(!this.iframe.src||isIgnoreCaseEqual(this.iframe.src,"about:blank"))&&(this.iframe.src=this.contentUrl);this.wnd.style.display="block";this.beak&&(this.beak.style.display=this.wnd.style.display);this.wnd.style.visibility="visible";t=[];this.isEffectExpand&&(t.push("transform "+this.effectsTimeout+"ms"),t.push("-webkit-transform "+this.effectsTimeout+"ms"));this.isEffectAppear&&t.push("opacity "+this.effectsTimeout+"ms");this.wnd.style.webkitTransition=this.wnd.style.transition=t.join(",");this.beak&&(this.beak.style.transition=this.beak.style.webkitTransition=this.wnd.style.transition);n=this;setTimeout(function(){n.isEffectExpand&&(n.wnd.style.transform=n.wnd.style.webkitTransform="",n.beak&&(n.beak.style.transform=n.beak.style.webkitTransform=n.wnd.style.transform));n.wnd.style.opacity="1";n.beak&&(n.beak.style.opacity=n.wnd.style.opacity)},50);switch(this.hideAction){case"click":this.isDontHidePopupOnBodyClick=!0;setTimeout(function(){n.isDontHidePopupOnBodyClick=!1},0)}this.isShowing=!0};PopupWindow.prototype.hide=function(){var t,n;if(this.isShowing){if(this.onHiding){t={cancel:!1};this.onHiding(this,t);if(t.cancel)return}this.pnlModal&&(n=this,this.pnlModal.style.opacity="0",setTimeout(function(){n.pnlModal&&(document.getElementsByTagName("body")[0].removeChild(n.pnlModal),n.pnlModal=null)},this.effectsTimeout));this.isEffectAppear||this.isEffectExpand?(this.isEffectExpand&&(this.wnd.style.transform=this.wnd.style.webkitTransform=this.getTranslateValue(),this.beak&&(this.beak.style.transform=this.beak.style.webkitTransform=this.wnd.style.transform)),this.isEffectAppear&&(this.wnd.style.opacity="0",this.beak&&(this.beak.style.opacity=this.wnd.style.opacity)),n=this,setTimeout(function(){n.wnd.style.display="none";n.beak&&(n.beak.style.display=n.wnd.style.display)},this.effectsTimeout)):(this.wnd.style.display="none",this.beak&&(this.beak.style.display=this.wnd.style.display));this.isShowing=!1}};PopupWindow.prototype.getWindowSize=function(){this.beginWindowMeasurement();var n=[this.wnd.offsetWidth>0?this.wnd.offsetWidth:this.width,this.wnd.offsetHeight>0?this.wnd.offsetHeight:this.height];return this.endWindowMeasurement(),n};PopupWindow.prototype.setWindowSize=function(n,t){var r=!1,i=this.target?getElementPos(this.target,!1):null,u,f;n&&(u=i?Math.max(document.documentElement.clientWidth-i[0]-this.target.offsetWidth,i[0]):document.documentElement.clientWidth,n=Math.min(n,u),this.width=n,this.wnd.style.width=n+"px",r=!0);t&&(f=i?Math.max(document.documentElement.clientHeight-i[1]-this.target.offsetHeight,i[1]):document.documentElement.clientHeight,t=Math.min(t,f),this.height=t,this.wnd.style.height=t+"px",r=!0);r&&this.adjustPosition()};PopupWindow.bind=function(){var u,o,f,i,s,n,h,e,r,c,t;for(PopupWindow.instances||(PopupWindow.instances=[]),u="data-chpw-",o=document.getElementsByTagName("*"),f=0;f<o.length;f++)if(i=o[f],s=i.getAttribute("class"),s&&s.toLowerCase().indexOf("chpopupwindow")>=0){for(n=null,h=i.getAttribute(u+"params"),h?(n=JSON.parse(h),n.wnd=i):n={wnd:i},e=0;e<i.attributes.length;e++)if(r=i.attributes[e],r.name.toLowerCase().indexOf(u)>=0){c=r.name.toLowerCase().replace(u,"");for(t in PopupWindow.defaults)if(isIgnoreCaseEqual(t,c))if(typeof PopupWindow.defaults[t]=="string"){n[t]=r.value;break}else if(typeof PopupWindow.defaults[t]=="boolean"){n[t]=r.value&&r.value.toLowerCase()=="true";break}else if(typeof PopupWindow.defaults[t]=="number"){n[t]=parseInt(r.value);break}}PopupWindow.instances["wnd"+PopupWindow.length]=new PopupWindow(n)}};PopupWindow.prototype.adjustSize=function(){var r,t,i,n;if(isIgnoreCaseEqual(getStyleValue(this.wnd,"position"),"absolute")||isIgnoreCaseEqual(getStyleValue(this.wnd,"position"),"fixed")){if(!this.isEnableResponsiveResize){this.isAutoAdjustHeightForIframe&&this.iframeContentHeight&&this.setWindowSize(null,this.iframeContentHeight);return}r=this.responsiveResizeMaxWidth/this.responsiveResizeMaxHeight;t=this.responsiveResizedElHeight>0?this.responsiveResizedElHeight:this.responsiveResizedEl?this.wnd.scrollHeight-this.responsiveResizedEl.offsetHeight:0;t<0&&(t=0);i=Math.min(document.documentElement.clientWidth,this.responsiveResizeMaxWidth);n=Math.min(document.documentElement.clientHeight-t,this.responsiveResizeMaxHeight);i=Math.min(i,n*r);n=Math.min(n,i/r);this.setWindowSize(i,n+t);this.responsiveResizedEl&&(this.responsiveResizedEl.style.height=n+"px")}};PopupWindow.prototype.beginWindowMeasurement=function(){this.wnd.offsetParent||(this.oldDisplay=this.wnd.style.display,this.oldVisibility=this.wnd.style.visibility,this.wnd.style.visibility="hidden",this.wnd.style.display="block")};PopupWindow.prototype.endWindowMeasurement=function(){this.oldDisplay&&(this.wnd.style.visibility=this.oldVisibility,this.wnd.style.display=this.oldDisplay,this.oldVisibility=null,this.oldDisplay=null)};PopupWindow.prototype.getTargetPos=function(n){if(this.targetCoordinatesEvalType)return getElementPos(n,this.targetCoordinatesEvalType=="body");this.beginWindowMeasurement();var t=getNearestAbsParent(this.wnd),i=getElementPos(n,!this.target,t);return this.endWindowMeasurement(),i};PopupWindow.prototype.getElementSize=function(n){return[n.offsetWidth,n.offsetHeight]};PopupWindow.prototype.getViewPos=function(){return typeof window.pageYOffset=="number"?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]};PopupWindow.prototype.getViewSize=function(){return typeof window.innerWidth=="number"?[window.innerWidth,window.innerHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:[0,0]};PopupWindow.prototype.setTarget=function(n){this.target=n};PopupWindow.prototype.getTarget=function(){return this.target};PopupWindow.prototype.getEffectsTimeout=function(){return this.effectsTimeout};PopupWindow.prototype.getIsShowing=function(){return this.isShowing}