import myAllCards from './allCards.js'

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

btnStart.addEventListener('click', () => {
    if (app.lvl === '1') {
        alert('Переход на страницу Lvl 1')
        console.log(app.lvl)
        divMobal.removeChild(divMobalContainer)
        containerLvl1()
    } else if (app.lvl === '2') {
        alert('Переход на страницу Lvl 2')
        divMobal.removeChild(divMobalContainer)
        containerLvl1()
    } else if (app.lvl === '3') {
        alert('Переход на страницу Lvl 3')
        divMobal.removeChild(divMobalContainer)
        containerLvl1()
    } else {
        alert('Вы не выбрали уровень сложности')
    }
})

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

    const imgFonts = document.createElement('img')
    imgFonts.src = myAllCards[arrCard[i] - 1];
    imgFonts.className = 'image-out'
    divContentImajeLvl1.appendChild(imgFonts);
}
