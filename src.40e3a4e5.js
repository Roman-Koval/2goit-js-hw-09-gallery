parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"cmg4":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825__340.44f55ba0.jpg";
},{}],"TUcJ":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825_1280.4dc6dd74.jpg";
},{}],"yIxN":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677__340.f4a75706.jpg";
},{}],"TKx4":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677_1280.bdbea1be.jpg";
},{}],"Mldp":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785__340.b8b21f37.jpg";
},{}],"N5CD":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785_1280.6d0b33f8.jpg";
},{}],"rRmI":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619__340.a60c124c.jpg";
},{}],"MCr6":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619_1280.4ac2275a.jpg";
},{}],"ZoOi":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334__340.8ee3ce54.jpg";
},{}],"lf5q":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334_1280.d561b38a.jpg";
},{}],"o8bS":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255__340.76a6423c.jpg";
},{}],"jjFQ":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255_1280.a608328b.jpg";
},{}],"iBPf":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272__340.54b191e2.jpg";
},{}],"lyga":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272_1280.452c82c5.jpg";
},{}],"X687":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571__340.5efb1638.jpg";
},{}],"NRvk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571_1280.efee508e.jpg";
},{}],"QpDR":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843__340.d786049c.jpg";
},{}],"xj0r":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843_1280.9c78cd4c.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0,require("./sass/main.scss");var e=y(require("./images/prev/himilayan-blue-poppy-4202825__340.jpg")),i=y(require("./images/original/himilayan-blue-poppy-4202825_1280.jpg")),a=y(require("./images/prev/container-4203677__340.jpg")),r=y(require("./images/original/container-4203677_1280.jpg")),l=y(require("./images/prev/beach-4206785__340.jpg")),t=y(require("./images/original/beach-4206785_1280.jpg")),n=y(require("./images/prev/flowers-1835619__340.jpg")),o=y(require("./images/original/flowers-1835619_1280.jpg")),s=y(require("./images/prev/mountains-3674334__340.jpg")),g=y(require("./images/original/mountains-3674334_1280.jpg")),d=y(require("./images/prev/landscape-4208255__340.jpg")),u=y(require("./images/original/landscape-4208255_1280.jpg")),c=y(require("./images/prev/the-alps-4209272__340.jpg")),p=y(require("./images/original/the-alps-4209272_1280.jpg")),m=y(require("./images/prev/landscape-4208571__340.jpg")),v=y(require("./images/original/landscape-4208571_1280.jpg")),_=y(require("./images/prev/lighthouse-4208843__340.jpg")),f=y(require("./images/original/lighthouse-4208843_1280.jpg"));function y(e){return e&&e.__esModule?e:{default:e}}const h=[{preview:e.default,original:i.default,description:"Hokkaido Flower"},{preview:a.default,original:r.default,description:"Container Haulage Freight"},{preview:l.default,original:t.default,description:"Aerial Beach View"},{preview:n.default,original:o.default,description:"Flower Blooms"},{preview:s.default,original:g.default,description:"Alpine Mountains"},{preview:d.default,original:u.default,description:"Mountain Lake Sailing"},{preview:c.default,original:p.default,description:"Alpine Spring Meadows"},{preview:m.default,original:v.default,description:"Nature Landscape"},{preview:_.default,original:f.default,description:"Lighthouse Coast Sea"}];exports.galleryItems=h;const w={imgModal:document.querySelector(".lightbox__image"),buttonClose:document.querySelector(".lightbox__button"),divLightbox:document.querySelector(".js-lightbox"),galeryEl:document.querySelector(".js-gallery"),divOverlay:document.querySelector(".lightbox__overlay")};function q(){return h.map(({original:e,preview:i,description:a})=>`<li class="gallery__item">\n              <a class="gallery__link" href="${e}">\n                  <img class="gallery__image" src="${i}" data-source="${e}" \n                  alt="${a}"/>\n              </a>\n          </li>`).join("")}function j(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(w.divLightbox.classList.add("is-open"),L(e.target.alt,e.target.closest(".gallery__link").href),window.addEventListener("keydown",k))}function L(e,i){w.imgModal.src="",w.divLightbox.classList.contains("is-open")?(w.imgModal.src=i,w.imgModal.alt=e):w.imgModal.src=""}function b(){window.removeEventListener("keydown",k),w.divLightbox.classList.contains("is-open")&&w.divLightbox.classList.remove("is-open")}function k(e){function i(e,i){imgModal.dataset.index=`${i+e}`,imgModal.src=h[i+e].original}function a(){let e=+imgModal.dataset.index;0!==e?(console.log(e),i(-1,e)):i(0,h.length-1)}function r(){let e=+imgModal.dataset.index;e!==h.length-1?(console.log(e),i(1,e)):i(0,0)}"Escape"===e.code&&b(),w.divOverlay.addEventListener("click",a),w.divOverlay.addEventListener("click",r),window.addEventListener("keydown",e=>{"ArrowLeft"===e.key&&a(),"ArrowRight"===e.key&&r()})}w.galeryEl.insertAdjacentHTML("beforeend",q(h)),w.galeryEl.addEventListener("click",j),w.buttonClose.addEventListener("click",b),w.divOverlay.addEventListener("click",b),console.log("good day Алена");
},{"./sass/main.scss":"clu1","./images/prev/himilayan-blue-poppy-4202825__340.jpg":"cmg4","./images/original/himilayan-blue-poppy-4202825_1280.jpg":"TUcJ","./images/prev/container-4203677__340.jpg":"yIxN","./images/original/container-4203677_1280.jpg":"TKx4","./images/prev/beach-4206785__340.jpg":"Mldp","./images/original/beach-4206785_1280.jpg":"N5CD","./images/prev/flowers-1835619__340.jpg":"rRmI","./images/original/flowers-1835619_1280.jpg":"MCr6","./images/prev/mountains-3674334__340.jpg":"ZoOi","./images/original/mountains-3674334_1280.jpg":"lf5q","./images/prev/landscape-4208255__340.jpg":"o8bS","./images/original/landscape-4208255_1280.jpg":"jjFQ","./images/prev/the-alps-4209272__340.jpg":"iBPf","./images/original/the-alps-4209272_1280.jpg":"lyga","./images/prev/landscape-4208571__340.jpg":"X687","./images/original/landscape-4208571_1280.jpg":"NRvk","./images/prev/lighthouse-4208843__340.jpg":"QpDR","./images/original/lighthouse-4208843_1280.jpg":"xj0r"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.40e3a4e5.js.map