/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Start game.js":
/*!***************************!*\
  !*** ./src/Start game.js ***!
  \***************************/
/***/ (() => {

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
}

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
/* harmony import */ var _Start_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Start_game__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



var instance = new _someModule__WEBPACK_IMPORTED_MODULE_0__.SomeModule();
instance.test();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map