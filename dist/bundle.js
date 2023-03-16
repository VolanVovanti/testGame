/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Start game.ts":
/*!***************************!*\
  !*** ./src/Start game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var app = {
    lvl: null,
    timer: null,
};
var body = document.querySelector('body');
('div');
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
// Логика при переходе
btnStart.addEventListener('click', function () {
    if (app.lvl === '1') {
        alert('Переход на страницу Lvl 1');
        console.log(app.lvl);
        divMobal.removeChild(divMobalContainer);
        containerLvl1();
    }
    else if (app.lvl === '2') {
        alert('Переход на страницу Lvl 2');
        divMobal.removeChild(divMobalContainer);
        containerLvl2();
    }
    else if (app.lvl === '3') {
        alert('Переход на страницу Lvl 3');
        divMobal.removeChild(divMobalContainer);
        containerLvl3();
    }
    else {
        alert('Вы не выбрали уровень сложности');
    }
});
// Отрисовка первого уровня
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
    allCardsUseForLvl1();
    function allCardsUseForLvl1() {
        //Достал рубашку
        var bacPackCards = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        console.log(bacPackCards);
        delete Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        // Удалил рубажку из массива и перемешал
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () { return Math.random() - 0.5; });
        var trhiCadsLvl1 = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 3);
        var sorted = trhiCadsLvl1;
        var cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted);
        // Режу массив, копирую и отрисовывою
        // Перемешать новый массив
        cardsCopy6InLvl1.sort(function () { return Math.random() - 0.5; });
        var lastCilckKard = '';
        console.log(lastCilckKard);
        var _loop_1 = function (i) {
            var imgFonts = document.createElement('img');
            imgFonts.src = cardsCopy6InLvl1[i].img;
            imgFonts.id = cardsCopy6InLvl1[i].id;
            imgFonts.cardPosition = true;
            imgFonts.className = 'stylesCards';
            console.log(imgFonts);
            divContentImajeLvl1.appendChild(imgFonts);
            setTimeout(function () {
                // Перевернул карты рубашкой вверх
                console.log(imgFonts);
                imgFonts.src = bacPackCards.img;
                imgFonts.cardPosition = false;
                // Клик по карте откроется через 5 секунд
                imgFonts.addEventListener('click', function () {
                    if (imgFonts.cardPosition === false) {
                        imgFonts.src = cardsCopy6InLvl1[i].img;
                        imgFonts.cardPosition = true;
                        if (lastCilckKard === '') {
                            lastCilckKard = imgFonts.id;
                            console.log(lastCilckKard);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard < imgFonts.id ||
                            lastCilckKard > imgFonts.id) {
                            setTimeout(function () {
                                imgFonts.cardPosition = false;
                                imgFonts.src = bacPackCards.img;
                            }, 1000);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard === imgFonts.id) {
                            alert('Вы победили');
                            lastCilckKard = '';
                        }
                    }
                    else if (imgFonts.cardPosition === true) {
                        imgFonts.cardPosition = false;
                        imgFonts.src = bacPackCards.img;
                    }
                });
            }, 3000);
        };
        for (var i = 0; i < cardsCopy6InLvl1.length; i++) {
            _loop_1(i);
        }
    }
}
// Логика игры на 2 уровне =======================================
function containerLvl2() {
    // Отрисовка основного экрана
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
    allCardsUseForLvl1();
    function allCardsUseForLvl1() {
        //Достал рубашку
        var bacPackCards = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        console.log(bacPackCards);
        delete Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        // Удалил рубажку из массива и перемешал
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () { return Math.random() - 0.5; });
        var trhiCadsLvl1 = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 6);
        var sorted = trhiCadsLvl1;
        var cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted);
        // Режу массив, копирую и отрисовывою
        // Перемешать новый массив
        cardsCopy6InLvl1.sort(function () { return Math.random() - 0.5; });
        var lastCilckKard = '';
        console.log(lastCilckKard);
        var _loop_2 = function (i) {
            var imgFonts = document.createElement('img');
            imgFonts.src = cardsCopy6InLvl1[i].img;
            imgFonts.id = cardsCopy6InLvl1[i].id;
            imgFonts.cardPosition = true;
            imgFonts.className = 'stylesCards';
            console.log(imgFonts);
            divContentImajeLvl1.appendChild(imgFonts);
            setTimeout(function () {
                // Перевернул карты рубашкой вверх
                console.log(imgFonts);
                imgFonts.src = bacPackCards.img;
                imgFonts.cardPosition = false;
                // Клик по карте откроется через 5 секунд
                imgFonts.addEventListener('click', function () {
                    if (imgFonts.cardPosition === false) {
                        imgFonts.src = cardsCopy6InLvl1[i].img;
                        imgFonts.cardPosition = true;
                        if (lastCilckKard === '') {
                            lastCilckKard = imgFonts.id;
                            console.log(lastCilckKard);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard < imgFonts.id ||
                            lastCilckKard > imgFonts.id) {
                            setTimeout(function () {
                                imgFonts.cardPosition = false;
                                imgFonts.src = bacPackCards.img;
                            }, 1000);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard === imgFonts.id) {
                            alert('Вы победили');
                            lastCilckKard = '';
                        }
                    }
                    else if (imgFonts.cardPosition === true) {
                        imgFonts.cardPosition = false;
                        imgFonts.src = bacPackCards.img;
                    }
                });
            }, 3000);
        };
        for (var i = 0; i < cardsCopy6InLvl1.length; i++) {
            _loop_2(i);
        }
    }
}
// Логика игры на 3 уровне ====================================
function containerLvl3() {
    // Отрисовка основного экрана
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
    allCardsUseForLvl1();
    function allCardsUseForLvl1() {
        //Достал рубашку
        var bacPackCards = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        console.log(bacPackCards);
        delete Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        // Удалил рубажку из массива и перемешал
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () { return Math.random() - 0.5; });
        var trhiCadsLvl1 = Object(function webpackMissingModule() { var e = new Error("Cannot find module './allCards.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 9);
        var sorted = trhiCadsLvl1;
        var cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted);
        // Режу массив, копирую и отрисовывою
        // Перемешать новый массив
        cardsCopy6InLvl1.sort(function () { return Math.random() - 0.5; });
        var lastCilckKard = '';
        console.log(lastCilckKard);
        var _loop_3 = function (i) {
            var imgFonts = document.createElement('img');
            imgFonts.src = cardsCopy6InLvl1[i].img;
            imgFonts.id = cardsCopy6InLvl1[i].id;
            imgFonts.cardPosition = true;
            imgFonts.className = 'stylesCards';
            console.log(imgFonts);
            divContentImajeLvl1.appendChild(imgFonts);
            setTimeout(function () {
                // Перевернул карты рубашкой вверх
                console.log(imgFonts);
                imgFonts.src = bacPackCards.img;
                imgFonts.cardPosition = false;
                // Клик по карте откроется через 5 секунд
                imgFonts.addEventListener('click', function () {
                    if (imgFonts.cardPosition === false) {
                        imgFonts.src = cardsCopy6InLvl1[i].img;
                        imgFonts.cardPosition = true;
                        if (lastCilckKard === '') {
                            lastCilckKard = imgFonts.id;
                            console.log(lastCilckKard);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard < imgFonts.id ||
                            lastCilckKard > imgFonts.id) {
                            setTimeout(function () {
                                imgFonts.cardPosition = false;
                                imgFonts.src = bacPackCards.img;
                            }, 1000);
                        }
                        else if (
                        // если значение id новой карты больше или меньше
                        lastCilckKard === imgFonts.id) {
                            alert('Вы победили');
                            lastCilckKard = '';
                        }
                    }
                    else if (imgFonts.cardPosition === true) {
                        imgFonts.cardPosition = false;
                        imgFonts.src = bacPackCards.img;
                    }
                });
            }, 3000);
        };
        for (var i = 0; i < cardsCopy6InLvl1.length; i++) {
            _loop_3(i);
        }
    }
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Start game */ "./src/Start game.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map