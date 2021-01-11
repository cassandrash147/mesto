(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var c=e.name,u=e.link,l=e.likes,s=e.owner,f=e._id,p=o.handleCardClick,h=i.handleDeleteClick,d=a.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=c,this._image=u,this._likes=l,this._cardOwnerId=s._id,this._cardId=f,this._userId=n,this._cardSelector=r,this._handleCardClick=p,this._handleDeleteClick=h,this._handleLikeClick=d}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListenerDeleteButton",value:function(){var e=this,t=this._element.querySelector(".element__delete");t.classList.remove("element__delete-nodisplay"),t.addEventListener("click",(function(){e._handleDeleteClick()}))}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__heart").addEventListener("click",(function(t){return e._handleLikeClick(t)})),this._element.querySelector(".element__photo").addEventListener("click",(function(t){var n={},r=t.target.closest(".element").querySelector(".element__title").textContent;n.src=t.target.src,n.title=r,n.alt=r,e._handleCardClick(n)}))}},{key:"generateCard",value:function(){var e=this;this._element=this._getTemplate();var t=this._element.querySelector(".element__photo"),n=this._element.querySelector(".element__title"),r=this._element.querySelector(".element__heart-counter");return t.src=this._image,n.textContent=this._title,this._userId===this._cardOwnerId&&this._setEventListenerDeleteButton(),r.textContent=this._likes.length>0?this._likes.length:0,this._liked=!!this._likes&&this._likes.some((function(t){return t._id===e._userId})),this._liked&&this._element.querySelector(".element__heart").classList.toggle("element__heart_active"),this._setEventListeners(),this._element}},{key:"like",value:function(e){this._element.querySelector(".element__heart").classList.toggle("element__heart_active"),this._element.querySelector(".element__heart-counter").innerText=e.likes.length}},{key:"openPopup",value:function(e){e.open(this._cardId,this._element)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.url,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._token=r}var t,r;return t=e,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка связи с с свервером: ".concat(e.status,", ").concat(e.statusText))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),link:"".concat(t),likes:0})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"getUser",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){return n._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._getResponseData(e)}))}},{key:"like",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"disLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}}])&&n(t.prototype,r),e}(),o={formsSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_state_invalid",inputErrorClass:"popup__input_state_invalid"},i=(document.querySelector(".popup_type_photo"),document.querySelector(".popup_img")),a=document.querySelector(".popup_img-title"),c=document.querySelector(".elements"),u=document.querySelector(".lead__avatar-cover"),l=document.querySelector(".lead__add"),s=document.querySelector(".lead__edit"),f=(document.querySelector(".lead__name"),document.querySelector(".lead__proffesion"),document.querySelector(".lead__avatar")),p=document.querySelector(".popup__input_type_name"),h=document.querySelector(".popup__input_type_profession"),d="Создать",_="Сохранение...";function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formSelector=n,this._form=document.querySelector(this._formSelector),this._inactiveButtonClass=this._config.inactiveButtonClass,this._buttonElement=this._form.querySelector("".concat(this._config.submitButtonSelector))}var t,n;return t=e,(n=[{key:"_hideError",value:function(e,t,n){e.querySelector("#".concat(t.id,"-error")).textContent="",t.classList.remove("".concat(n))}},{key:"_showError",value:function(e,t,n){e.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add("".concat(n))}},{key:"_checkInputValidity",value:function(e,t,n){t.checkValidity()?this._hideError(e,t,n):this._showError(e,t,n)}},{key:"disableButton",value:function(){this._buttonElement.classList.add("".concat(this._inactiveButtonClass)),this._buttonElement.disabled=!0}},{key:"enableButton",value:function(){this._buttonElement.classList.remove("".concat(this._inactiveButtonClass)),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(e){e.checkValidity()?this.enableButton():this.disableButton()}},{key:"_setAddEventListener",value:function(e,t,n,r){var o=this;Array.from(e.querySelectorAll("".concat(t))).forEach((function(t){t.addEventListener("input",(function(t){o._toggleButtonState(e),o._checkInputValidity(e,t.target,r)}))})),this._toggleButtonState(e)}},{key:"enableValidation",value:function(){var e=this;Array.from(document.querySelectorAll("".concat(this._config.formsSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),e._setAddEventListener(t,e._config.inputSelector,e._config.submitButtonSelector,e._config.inactiveButtonClass,e._config.inputErrorClass)}))}},{key:"removeTextErrors",value:function(){var e=this;Array.from(this._form.querySelectorAll("".concat(this._config.inputSelector))).forEach((function(t){t.value="",e._hideError(e._form,t,e._config.inputErrorClass)}))}},{key:"waitApiStart",value:function(e){this.disableButton(),this._buttonElement.value=e}},{key:"waitApiFinish",value:function(e){this.enableButton(),this._buttonElement.value=e}}])&&y(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n.renderer(e,t)}))}},{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.closePopup()}))}}])&&k(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e))._handleEscClose=t._handleEscClose.bind(P(t)),t}return t=u,(n=[{key:"open",value:function(e,t){var n=t.querySelector(".element__photo"),r=t.querySelector(".element__title").textContent;a.textContent=r,i.src=n.src,i.alt=r,w(L(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),u}(g);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).handleFormSubmit=r,n._handleEscClose=n._handleEscClose.bind(D(n)),n._form=n._popup.querySelector(".popup__container"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e=Array.from(this._popup.querySelectorAll(".popup__input")),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var e=this;R(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){return e.handleFormSubmit(e.getInputValues())}))}}])&&A(t.prototype,n),a}(g);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?J(e):t}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._handleEscClose=t._handleEscClose.bind(J(t)),t._form=t._popup.querySelector(".popup__container"),t}return t=a,(n=[{key:"open",value:function(e){N(H(a.prototype),"open",this).call(this),this._cardId=e}},{key:"getCardId",value:function(){return this._cardId}},{key:"setEventListeners",value:function(){var e=this;N(H(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._handleSubmitCallback(t)}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}}])&&V(t.prototype,n),a}(g);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t){var n=t.profileNameElement,r=t.profileProffesionElement,o=t.profileAvatarElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileProffesionElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._profileNameElement.textContent,e.proffesion=this._profileProffesionElement.textContent,e.avatar=this._profileAvatarElement.style.backgroundImage,e}},{key:"setUserInfo",value:function(e){this._profileNameElement.textContent=e.name,this._profileProffesionElement.textContent=e.about,this._profileAvatarElement.style.backgroundImage="url(".concat(e.avatar,")")}}])&&$(t.prototype,n),e}();function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new r({url:"https://mesto.nomoreparties.co/v1/cohort-18",token:"44d78f56-6aed-4bb6-b8b5-fbdc00d6229d"}),W=new M(".popup_type_agreement");W.setEventListeners();var X=new j(".popup_type_photo");X.setEventListeners();var Y=new B(".popup_type_profile",{handleFormSubmit:function(e){ne.waitApiStart(_),Q.editProfile(e.name,e.proffesion).then((function(e){re.setUserInfo(e),Y.closePopup()})).catch((function(e){console.error(e)})).finally((function(){ne.waitApiFinish(d)}))}});Y.setEventListeners();var Z=new B(".popup_type_avatar",{handleFormSubmit:function(e){ee.waitApiStart(_),Q.editAvatar(e.avatar).then((function(e){Z.closePopup(),f.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.error(e)})).finally((function(){ee.waitApiFinish(d)}))}});Z.setEventListeners();var ee=new v(o,".popup_type_avatar"),te=new v(o,".popup_type_place"),ne=new v(o,".popup_type_profile");te.enableValidation(),ne.enableValidation(),ee.enableValidation();var re=new G({profileNameElement:".lead__name",profileProffesionElement:".lead__proffesion",profileAvatarElement:".lead__avatar"});Promise.all([Q.getUser(),Q.getInitialCards()]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];re.setUserInfo(i),ie.renderItems(a,i._id),i._id,(t=new B(".popup_type_place",{handleFormSubmit:function(e,n){te.waitApiStart(_),Q.addCard(e.name,e.link).then((function(r){e.owner={_id:n},e._id=r._id,e.likes=[],console.log(e);var o=oe(e,n);ie.addItemPrepend(o.generateCard()),t.closePopup()})).catch((function(e){console.error(e)})).finally((function(){te.waitApiFinish("Отправить")}))}})).setEventListeners(),l.addEventListener("click",(function(){te.removeTextErrors(),te.disableButton(),t.open()}))})).catch((function(e){console.error(e)}));var oe=function(e,n){var r=new t(e,n,".element-template",{handleCardClick:function(e){r.openPopup(X)}},{handleDeleteClick:function(e){W.setSubmitAction((function(){e=W.getCardId(),Q.deleteCard(e).then((function(e){r.deleteCard(),W.closePopup()})).catch((function(e){return console.error(e)}))})),r.openPopup(W)}},{handleLikeClick:function(t){t.target.classList.contains("element__heart_active")?Q.disLike(e._id).then((function(e){return r.like(e)})).catch((function(e){console.error(e)})):Q.like(e._id).then((function(e){return r.like(e)})).catch((function(e){console.error(e)}))}});return r},ie=new b({renderer:function(e,t){var n=oe(e,t);ie.addItemAppend(n.generateCard())}},c);u.addEventListener("click",(function(){Z.open(),ee.removeTextErrors(),ee.disableButton()})),s.addEventListener("click",(function(){ne.removeTextErrors(),ne.disableButton();var e=re.getUserInfo();p.value=e.name,h.value=e.proffesion,Y.open()}))})();