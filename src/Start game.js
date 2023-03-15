import allCardsFrontI1 from './allCards.js'

const app = {
    lvl: null,
    timer: null,
}

const body = document.querySelector('body')
;('div')

const divMobal = document.createElement('div')
divMobal.id = 'selectLvlModal'
divMobal.className = 'modal'

body.appendChild(divMobal)

const divMobalContainer = document.createElement('div')
divMobalContainer.className = 'modal__container'

divMobal.appendChild(divMobalContainer)

const divMobalHeader = document.createElement('div')
const divMobalContent = document.createElement('div')
const divMobalFooter = document.createElement('div')

divMobalHeader.className = 'modal__header'
divMobalContent.className = 'modal__content'
divMobalFooter.className = 'modal__footer'

divMobalContainer.appendChild(divMobalHeader)
const h2Title = document.createElement('h2')
h2Title.className = 'title'
h2Title.textContent = 'Выбери сложность'
divMobalHeader.appendChild(h2Title)

divMobalContainer.appendChild(divMobalContent)
const divLevelsList = document.createElement('div')
const divLvl1 = document.createElement('div')
const divLvl2 = document.createElement('div')
const divLvl3 = document.createElement('div')
divLevelsList.className = 'levels-list'
divLvl1.className = 'lvl-item-1 lvl-item'
divLvl2.className = 'lvl-item-2 lvl-item'
divLvl3.className = 'lvl-item-3 lvl-item'
divLvl1.textContent = '1'
divLvl2.textContent = '2'
divLvl3.textContent = '3'
divMobalContent.appendChild(divLevelsList)
divLevelsList.appendChild(divLvl1)
divLevelsList.appendChild(divLvl2)
divLevelsList.appendChild(divLvl3)

divMobalContainer.appendChild(divMobalFooter)
const buttonBtnStart = document.createElement('button')
buttonBtnStart.className = 'btn'
buttonBtnStart.textContent = 'Старт'
divMobalFooter.appendChild(buttonBtnStart)

// Логика после нажатия на старт

const butLvl1 = document.querySelector('.lvl-item-1')
const butLvl2 = document.querySelector('.lvl-item-2')
const butLvl3 = document.querySelector('.lvl-item-3')

const btnStart = document.querySelector('.btn')

butLvl1.addEventListener('click', () => {
    app.lvl = '1'
    console.log(app.lvl)
})

butLvl2.addEventListener('click', () => {
    app.lvl = '2'
    console.log(app.lvl)
})

butLvl3.addEventListener('click', () => {
    app.lvl = '3'
    console.log(app.lvl)
})

// Логика при переходе
btnStart.addEventListener('click', () => {
    if (app.lvl === '1') {
        alert('Переход на страницу Lvl 1')
        console.log(app.lvl)
        divMobal.removeChild(divMobalContainer)
        containerLvl1()
    } else if (app.lvl === '2') {
        alert('Переход на страницу Lvl 2')
        divMobal.removeChild(divMobalContainer)
        containerLvl2()
    } else if (app.lvl === '3') {
        alert('Переход на страницу Lvl 3')
        divMobal.removeChild(divMobalContainer)
        containerLvl3()
    } else {
        alert('Вы не выбрали уровень сложности')
    }
})

// Функция переворота карточки
function cardCheckedFunction() {
    // если карточка уже не перевёрнута и мы не нажимаем на ту же самую карточку второй раз подряд
    // // переворачиваем её
    // // если мы перевернули первую карточку
    // if (!_.guess) {
    //   // то пока просто запоминаем её
    //   _.guess = $(this).attr("data-id");
    //   // если мы перевернули вторую и она совпадает с первой
    // } else if (
    //   _.guess == $(this).attr("data-id") &&
    //   !$(this).hasClass("picked")
    // ) {
    //   // оставляем обе на поле перевёрнутыми и показываем анимацию совпадения
    //   $(".picked").addClass("matched");
    //   // обнуляем первую карточку
    //   _.guess = null;
    //   // если вторая не совпадает с первой
    // } else {
    //   // обнуляем первую карточку
    //   _.guess = null;
    //   // не ждём переворота второй карточки
    //   _.paused = true;
    //   // ждём полсекунды и переворачиваем всё обратно
    //   setTimeout(function () {
    //     $(".picked").removeClass("picked");
    //     Memory.paused = false;
    //   }, 600);
    // }
    // // если мы перевернули все карточки
    // if ($(".matched").length == $(".card").length) {
    //   // показываем победное сообщение
    //   _.win();
    // }
}

// Отрисовка первого уровня
function containerLvl1() {
    divMobal.style.marginTop = '0px'

    const divHead = document.createElement('div')
    body.appendChild(divHead)
    divHead.className = 'head'

    const divHeadTimer = document.createElement('div')
    divHeadTimer.className = 'head__timer'
    divHead.appendChild(divHeadTimer)
    divHeadTimer.textContent = '00.00'

    const buttonHeadlvl1 = document.createElement('button')
    buttonHeadlvl1.className = 'btn'
    buttonHeadlvl1.textContent = 'Начать заново'
    divHead.appendChild(buttonHeadlvl1)

    const divHeadMinSec = document.createElement('div')
    divHeadMinSec.className = 'min-sec'
    divHeadTimer.appendChild(divHeadMinSec)

    const divHeadTimerMin = document.createElement('div')
    const divHeadTimerSek = document.createElement('div')
    divHeadTimerMin.className = 'head__timer-min'
    divHeadTimerSek.className = 'head__timer-min head__timer-sek'
    divHeadTimerMin.textContent = 'min'
    divHeadTimerSek.textContent = 'sek'
    divHeadMinSec.appendChild(divHeadTimerMin)
    divHeadMinSec.appendChild(divHeadTimerSek)

    const divContentLvl1 = document.createElement('div')
    divContentLvl1.className = 'content'
    body.appendChild(divContentLvl1)

    const divContentImajeLvl1 = document.createElement('div')
    divContentImajeLvl1.className = 'image-out'
    divContentLvl1.appendChild(divContentImajeLvl1)

    // создание и добавление картинок с картами
    allCardsUseForLvl1()
    function allCardsUseForLvl1() {
        //Достал рубашку
        const bacPackCards = allCardsFrontI1[0]
        console.log(bacPackCards)
        delete allCardsFrontI1[0]
        // Удалил рубажку из массива и перемешал
        allCardsFrontI1.sort(() => Math.random() - 0.5)
        let trhiCadsLvl1 = allCardsFrontI1.slice(0, 3)
        let sorted = trhiCadsLvl1
        let cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted)
        // Режу массив, копирую и отрисовывою

        for (let i = 0; i < cardsCopy6InLvl1.length; i++) {
            const imgFonts = document.createElement('img')
            imgFonts.src = cardsCopy6InLvl1[i].img
            imgFonts.id = cardsCopy6InLvl1[i].id
            imgFonts.cardPosition = true
            console.log(imgFonts)
            divContentImajeLvl1.appendChild(imgFonts)
            setTimeout(() => {
                // Перевернул карты рубашкой вверх
                console.log(imgFonts)
                imgFonts.src = bacPackCards.img
                imgFonts.cardPosition = false
            }, 5000)
            imgFonts.addEventListener('click', () => {
                if (imgFonts.cardPosition === false) {
                    imgFonts.src = cardsCopy6InLvl1[i].img
                    imgFonts.cardPosition = true
                } else if (imgFonts.cardPosition === true) {
                    imgFonts.cardPosition = false
                    imgFonts.src = bacPackCards.img
                } else if (imgFonts.id[i] === imgFonts.id[i]) {
                    alert('Вы победили')
                }
            })
        }
    }
}

// Логика игры на 2 уровне =======================================
function containerLvl2() {
    // Отрисовка основного экрана
    divMobal.style.marginTop = '0px'

    const divHead = document.createElement('div')
    body.appendChild(divHead)
    divHead.className = 'head'

    const divHeadTimer = document.createElement('div')
    divHeadTimer.className = 'head__timer'
    divHead.appendChild(divHeadTimer)
    divHeadTimer.textContent = '00.00'

    const buttonHeadlvl1 = document.createElement('button')
    buttonHeadlvl1.className = 'btn'
    buttonHeadlvl1.textContent = 'Начать заново'
    divHead.appendChild(buttonHeadlvl1)

    const divHeadMinSec = document.createElement('div')
    divHeadMinSec.className = 'min-sec'
    divHeadTimer.appendChild(divHeadMinSec)

    const divHeadTimerMin = document.createElement('div')
    const divHeadTimerSek = document.createElement('div')
    divHeadTimerMin.className = 'head__timer-min'
    divHeadTimerSek.className = 'head__timer-min head__timer-sek'
    divHeadTimerMin.textContent = 'min'
    divHeadTimerSek.textContent = 'sek'
    divHeadMinSec.appendChild(divHeadTimerMin)
    divHeadMinSec.appendChild(divHeadTimerSek)

    const divContentLvl1 = document.createElement('div')
    divContentLvl1.className = 'content'
    body.appendChild(divContentLvl1)

    const divContentImajeLvl1 = document.createElement('div')
    divContentImajeLvl1.className = 'image-out'
    divContentLvl1.appendChild(divContentImajeLvl1)

    // создание и добавление картинок с картами
    allCardsUseForLvl1()
    function allCardsUseForLvl1() {
        //Достал рубашку
        const bacPackCards = allCardsFrontI1[0]
        console.log(bacPackCards)
        delete allCardsFrontI1[0]
        // Удалил рубажку из массива и перемешал
        allCardsFrontI1.sort(() => Math.random() - 0.5)
        let trhiCadsLvl1 = allCardsFrontI1.slice(0, 6)
        let sorted = trhiCadsLvl1
        let cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted)

        // Режу массив, копирую и отрисовывою
        for (let i = 0; i < cardsCopy6InLvl1.length; i++) {
            const imgFonts = document.createElement('img')
            imgFonts.src = cardsCopy6InLvl1[i].img
            console.log(imgFonts)
            divContentImajeLvl1.appendChild(imgFonts)
            // Перевернул карты
            setTimeout(() => {
                // Перевернул карты
                console.log(imgFonts)
                imgFonts.src = bacPackCards.img
            }, 5000)
            imgFonts.addEventListener('click', () => {
                imgFonts.src = cardsCopy6InLvl1[i].img
            })
        }
    }
}

// Логика игры на 3 уровне ====================================
function containerLvl3() {
    // Отрисовка основного экрана
    divMobal.style.marginTop = '0px'

    const divHead = document.createElement('div')
    body.appendChild(divHead)
    divHead.className = 'head'

    const divHeadTimer = document.createElement('div')
    divHeadTimer.className = 'head__timer'
    divHead.appendChild(divHeadTimer)
    divHeadTimer.textContent = '00.00'

    const buttonHeadlvl1 = document.createElement('button')
    buttonHeadlvl1.className = 'btn'
    buttonHeadlvl1.textContent = 'Начать заново'
    divHead.appendChild(buttonHeadlvl1)

    const divHeadMinSec = document.createElement('div')
    divHeadMinSec.className = 'min-sec'
    divHeadTimer.appendChild(divHeadMinSec)

    const divHeadTimerMin = document.createElement('div')
    const divHeadTimerSek = document.createElement('div')
    divHeadTimerMin.className = 'head__timer-min'
    divHeadTimerSek.className = 'head__timer-min head__timer-sek'
    divHeadTimerMin.textContent = 'min'
    divHeadTimerSek.textContent = 'sek'
    divHeadMinSec.appendChild(divHeadTimerMin)
    divHeadMinSec.appendChild(divHeadTimerSek)

    const divContentLvl1 = document.createElement('div')
    divContentLvl1.className = 'content'
    body.appendChild(divContentLvl1)

    const divContentImajeLvl1 = document.createElement('div')
    divContentImajeLvl1.className = 'image-out'
    divContentLvl1.appendChild(divContentImajeLvl1)

    // создание и добавление картинок с картами
    allCardsUseForLvl1()
    function allCardsUseForLvl1() {
        //Достал рубашку
        const bacPackCards = allCardsFrontI1[0]
        console.log(bacPackCards)
        delete allCardsFrontI1[0]
        // Удалил рубажку из массива и перемешал
        allCardsFrontI1.sort(() => Math.random() - 0.5)
        let trhiCadsLvl1 = allCardsFrontI1.slice(0, 9)
        let sorted = trhiCadsLvl1
        let cardsCopy6InLvl1 = [].concat(trhiCadsLvl1, sorted)
        // Режу массив, копирую и отрисовывою
        for (let i = 0; i < cardsCopy6InLvl1.length; i++) {
            const imgFonts = document.createElement('img')
            imgFonts.src = cardsCopy6InLvl1[i].img
            console.log(imgFonts)
            divContentImajeLvl1.appendChild(imgFonts)
            // Перевернул карты
            setTimeout(() => {
                // Перевернул карты
                console.log(imgFonts)
                imgFonts.src = bacPackCards.img
            }, 5000)
            imgFonts.addEventListener('click', () => {
                imgFonts.src = cardsCopy6InLvl1[i].img
            })
        }
    }
}
