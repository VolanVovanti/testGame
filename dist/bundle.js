/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Start game.js":
/*!***************************!*\
  !*** ./src/Start game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allCards.js */ "./src/allCards.js");

var app = {
  lvl: null,
  timer: null
};
var body = document.querySelector('body');
'div';
var divMobal = document.createElement('div');
divMobal.id = 'selectLvlModal';
divMobal.className = 'modal';
body.appendChild(divMobal);
var divMobalContainer = document.createElement('div');
divMobalContainer.className = 'modal__container';
divMobal.appendChild(divMobalContainer);
var divMobalHeader = document.createElement('div');
var divMobalContent = document.createElement('div');
var divMobalFooter = document.createElement('div');
divMobalHeader.className = 'modal__header';
divMobalContent.className = 'modal__content';
divMobalFooter.className = 'modal__footer';
divMobalContainer.appendChild(divMobalHeader);
var h2Title = document.createElement('h2');
h2Title.className = 'title';
h2Title.textContent = 'Выбери сложность';
divMobalHeader.appendChild(h2Title);
divMobalContainer.appendChild(divMobalContent);
var divLevelsList = document.createElement('div');
var divLvl1 = document.createElement('div');
var divLvl2 = document.createElement('div');
var divLvl3 = document.createElement('div');
divLevelsList.className = 'levels-list';
divLvl1.className = 'lvl-item-1 lvl-item';
divLvl2.className = 'lvl-item-2 lvl-item';
divLvl3.className = 'lvl-item-3 lvl-item';
divLvl1.textContent = '1';
divLvl2.textContent = '2';
divLvl3.textContent = '3';
divMobalContent.appendChild(divLevelsList);
divLevelsList.appendChild(divLvl1);
divLevelsList.appendChild(divLvl2);
divLevelsList.appendChild(divLvl3);
divMobalContainer.appendChild(divMobalFooter);
var buttonBtnStart = document.createElement('button');
buttonBtnStart.className = 'btn';
buttonBtnStart.textContent = 'Старт';
divMobalFooter.appendChild(buttonBtnStart);

// Логика после нажатия на старт

var butLvl1 = document.querySelector('.lvl-item-1');
var butLvl2 = document.querySelector('.lvl-item-2');
var butLvl3 = document.querySelector('.lvl-item-3');
var btnStart = document.querySelector('.btn');
butLvl1.addEventListener('click', function () {
  app.lvl = '1';
  console.log(app.lvl);
});
butLvl2.addEventListener('click', function () {
  app.lvl = '2';
  console.log(app.lvl);
});
butLvl3.addEventListener('click', function () {
  app.lvl = '3';
  console.log(app.lvl);
});
btnStart.addEventListener('click', function () {
  if (app.lvl === '1') {
    alert('Переход на страницу Lvl 1');
    console.log(app.lvl);
    divMobal.removeChild(divMobalContainer);
    containerLvl1();
  } else if (app.lvl === '2') {
    alert('Переход на страницу Lvl 2');
    divMobal.removeChild(divMobalContainer);
    containerLvl1();
  } else if (app.lvl === '3') {
    alert('Переход на страницу Lvl 3');
    divMobal.removeChild(divMobalContainer);
    containerLvl1();
  } else {
    alert('Вы не выбрали уровень сложности');
  }
});
function containerLvl1() {
  divMobal.style.marginTop = '0px';
  var divHead = document.createElement('div');
  body.appendChild(divHead);
  divHead.className = 'head';
  var divHeadTimer = document.createElement('div');
  divHeadTimer.className = 'head__timer';
  divHead.appendChild(divHeadTimer);
  divHeadTimer.textContent = '00.00';
  var buttonHeadlvl1 = document.createElement('button');
  buttonHeadlvl1.className = 'btn';
  buttonHeadlvl1.textContent = 'Начать заново';
  divHead.appendChild(buttonHeadlvl1);
  var divHeadMinSec = document.createElement('div');
  divHeadMinSec.className = 'min-sec';
  divHeadTimer.appendChild(divHeadMinSec);
  var divHeadTimerMin = document.createElement('div');
  var divHeadTimerSek = document.createElement('div');
  divHeadTimerMin.className = 'head__timer-min';
  divHeadTimerSek.className = 'head__timer-min head__timer-sek';
  divHeadTimerMin.textContent = 'min';
  divHeadTimerSek.textContent = 'sek';
  divHeadMinSec.appendChild(divHeadTimerMin);
  divHeadMinSec.appendChild(divHeadTimerSek);
  var divContentLvl1 = document.createElement('div');
  divContentLvl1.className = 'content';
  body.appendChild(divContentLvl1);
  var divContentImajeLvl1 = document.createElement('div');
  divContentImajeLvl1.className = 'image-out';
  divContentLvl1.appendChild(divContentImajeLvl1);

  // создание и добавление картинок с картами

  var imgFonts = document.createElement('img');
  imgFonts.src = _allCards_js__WEBPACK_IMPORTED_MODULE_0__["default"][arrCard[i] - 1];
  imgFonts.className = 'image-out';
  divContentImajeLvl1.appendChild(imgFonts);
}

/***/ }),

/***/ "./src/allCards.js":
/*!*************************!*\
  !*** ./src/allCards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_pic0_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/pic0.png */ "./static/pic0.png");
/* harmony import */ var _static_pic1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/pic1.png */ "./static/pic1.png");
/* harmony import */ var _static_pic2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/pic2.png */ "./static/pic2.png");
/* harmony import */ var _static_pic3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/pic3.png */ "./static/pic3.png");
/* harmony import */ var _static_pic4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/pic4.png */ "./static/pic4.png");
/* harmony import */ var _static_pic5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/pic5.png */ "./static/pic5.png");
/* harmony import */ var _static_pic6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/pic6.png */ "./static/pic6.png");
/* harmony import */ var _static_pic7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/pic7.png */ "./static/pic7.png");
/* harmony import */ var _static_pic8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/pic8.png */ "./static/pic8.png");
/* harmony import */ var _static_pic9_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/pic9.png */ "./static/pic9.png");
/* harmony import */ var _static_pic10_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/pic10.png */ "./static/pic10.png");
/* harmony import */ var _static_pic11_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/pic11.png */ "./static/pic11.png");
/* harmony import */ var _static_pic12_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/pic12.png */ "./static/pic12.png");
/* harmony import */ var _static_pic13_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/pic13.png */ "./static/pic13.png");
/* harmony import */ var _static_pic14_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/pic14.png */ "./static/pic14.png");
/* harmony import */ var _static_pic15_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/pic15.png */ "./static/pic15.png");
/* harmony import */ var _static_pic16_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/pic16.png */ "./static/pic16.png");
/* harmony import */ var _static_pic17_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/pic17.png */ "./static/pic17.png");
/* harmony import */ var _static_pic18_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/pic18.png */ "./static/pic18.png");
/* harmony import */ var _static_pic19_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/pic19.png */ "./static/pic19.png");
/* harmony import */ var _static_pic20_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/pic20.png */ "./static/pic20.png");
/* harmony import */ var _static_pic21_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/pic21.png */ "./static/pic21.png");
/* harmony import */ var _static_pic22_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/pic22.png */ "./static/pic22.png");
/* harmony import */ var _static_pic23_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/pic23.png */ "./static/pic23.png");
/* harmony import */ var _static_pic24_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/pic24.png */ "./static/pic24.png");
/* harmony import */ var _static_pic25_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/pic25.png */ "./static/pic25.png");
/* harmony import */ var _static_pic26_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/pic26.png */ "./static/pic26.png");
/* harmony import */ var _static_pic27_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../static/pic27.png */ "./static/pic27.png");
/* harmony import */ var _static_pic28_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../static/pic28.png */ "./static/pic28.png");
/* harmony import */ var _static_pic29_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../static/pic29.png */ "./static/pic29.png");
/* harmony import */ var _static_pic30_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../static/pic30.png */ "./static/pic30.png");
/* harmony import */ var _static_pic31_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../static/pic31.png */ "./static/pic31.png");
/* harmony import */ var _static_pic32_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../static/pic32.png */ "./static/pic32.png");
/* harmony import */ var _static_pic33_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../static/pic33.png */ "./static/pic33.png");
/* harmony import */ var _static_pic34_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../static/pic34.png */ "./static/pic34.png");
/* harmony import */ var _static_pic35_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../static/pic35.png */ "./static/pic35.png");
/* harmony import */ var _static_pic36_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../static/pic36.png */ "./static/pic36.png");






































/***/ }),

/***/ "./src/someModule.js":
/*!***************************!*\
  !*** ./src/someModule.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/pic0.png":
/*!*************************!*\
  !*** ./static/pic0.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6182d6403be8c841121.png";

/***/ }),

/***/ "./static/pic1.png":
/*!*************************!*\
  !*** ./static/pic1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cac08ef14cb02e4b101b.png";

/***/ }),

/***/ "./static/pic10.png":
/*!**************************!*\
  !*** ./static/pic10.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab3976ad2824ffcc9437.png";

/***/ }),

/***/ "./static/pic11.png":
/*!**************************!*\
  !*** ./static/pic11.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0e9bba17d5237a0e5abf.png";

/***/ }),

/***/ "./static/pic12.png":
/*!**************************!*\
  !*** ./static/pic12.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "569b982d4acf5ab8594a.png";

/***/ }),

/***/ "./static/pic13.png":
/*!**************************!*\
  !*** ./static/pic13.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d29854ff107a39c9d696.png";

/***/ }),

/***/ "./static/pic14.png":
/*!**************************!*\
  !*** ./static/pic14.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbd14c3fcc02aab4a18d.png";

/***/ }),

/***/ "./static/pic15.png":
/*!**************************!*\
  !*** ./static/pic15.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ca16b3ddbf01cc219b8.png";

/***/ }),

/***/ "./static/pic16.png":
/*!**************************!*\
  !*** ./static/pic16.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "243f8101cb555d2dc755.png";

/***/ }),

/***/ "./static/pic17.png":
/*!**************************!*\
  !*** ./static/pic17.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bafc3f4eea6794924bf2.png";

/***/ }),

/***/ "./static/pic18.png":
/*!**************************!*\
  !*** ./static/pic18.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8cfd397af199032fe8a5.png";

/***/ }),

/***/ "./static/pic19.png":
/*!**************************!*\
  !*** ./static/pic19.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "44e6482a086845769c06.png";

/***/ }),

/***/ "./static/pic2.png":
/*!*************************!*\
  !*** ./static/pic2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02c5ed667c0830fcfdbc.png";

/***/ }),

/***/ "./static/pic20.png":
/*!**************************!*\
  !*** ./static/pic20.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94a3150866449e5c885b.png";

/***/ }),

/***/ "./static/pic21.png":
/*!**************************!*\
  !*** ./static/pic21.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c571faf3fd1c3f750f9.png";

/***/ }),

/***/ "./static/pic22.png":
/*!**************************!*\
  !*** ./static/pic22.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d33df9b19b1b42eda45.png";

/***/ }),

/***/ "./static/pic23.png":
/*!**************************!*\
  !*** ./static/pic23.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "861b6345024962331a41.png";

/***/ }),

/***/ "./static/pic24.png":
/*!**************************!*\
  !*** ./static/pic24.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d7452a1693dbc300f9f.png";

/***/ }),

/***/ "./static/pic25.png":
/*!**************************!*\
  !*** ./static/pic25.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f4407b027471842f1988.png";

/***/ }),

/***/ "./static/pic26.png":
/*!**************************!*\
  !*** ./static/pic26.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6b45eaf5f9f2d2f69c52.png";

/***/ }),

/***/ "./static/pic27.png":
/*!**************************!*\
  !*** ./static/pic27.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5032454e40f8be49b835.png";

/***/ }),

/***/ "./static/pic28.png":
/*!**************************!*\
  !*** ./static/pic28.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ddecf5b025ae3416c0f.png";

/***/ }),

/***/ "./static/pic29.png":
/*!**************************!*\
  !*** ./static/pic29.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "905ce79e642539ebf910.png";

/***/ }),

/***/ "./static/pic3.png":
/*!*************************!*\
  !*** ./static/pic3.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02862d472efef0db67cd.png";

/***/ }),

/***/ "./static/pic30.png":
/*!**************************!*\
  !*** ./static/pic30.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3d8f3e016c49187c83d.png";

/***/ }),

/***/ "./static/pic31.png":
/*!**************************!*\
  !*** ./static/pic31.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c06f1da59204104d431.png";

/***/ }),

/***/ "./static/pic32.png":
/*!**************************!*\
  !*** ./static/pic32.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b87feed02deaa68feab2.png";

/***/ }),

/***/ "./static/pic33.png":
/*!**************************!*\
  !*** ./static/pic33.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1e4229aff5405bf62e62.png";

/***/ }),

/***/ "./static/pic34.png":
/*!**************************!*\
  !*** ./static/pic34.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "99fcdb11eda7964e9847.png";

/***/ }),

/***/ "./static/pic35.png":
/*!**************************!*\
  !*** ./static/pic35.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a299b4e44b325bd01e3e.png";

/***/ }),

/***/ "./static/pic36.png":
/*!**************************!*\
  !*** ./static/pic36.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1be9c9ee63ccebdd3cf.png";

/***/ }),

/***/ "./static/pic4.png":
/*!*************************!*\
  !*** ./static/pic4.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b9e3c24458880c9f9793.png";

/***/ }),

/***/ "./static/pic5.png":
/*!*************************!*\
  !*** ./static/pic5.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b51d3bde96f16f335823.png";

/***/ }),

/***/ "./static/pic6.png":
/*!*************************!*\
  !*** ./static/pic6.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79bf484ffb6e35264e54.png";

/***/ }),

/***/ "./static/pic7.png":
/*!*************************!*\
  !*** ./static/pic7.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7fa7293bead969be2292.png";

/***/ }),

/***/ "./static/pic8.png":
/*!*************************!*\
  !*** ./static/pic8.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "64732cb5373ad70dbcfc.png";

/***/ }),

/***/ "./static/pic9.png":
/*!*************************!*\
  !*** ./static/pic9.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "82152ae24774bd8bdf1e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _someModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./someModule */ "./src/someModule.js");
/* harmony import */ var _someModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_someModule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Start game */ "./src/Start game.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _allCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allCards.js */ "./src/allCards.js");




var instance = new _someModule__WEBPACK_IMPORTED_MODULE_0__.SomeModule();
instance.test();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map