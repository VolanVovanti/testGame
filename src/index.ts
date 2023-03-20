import './style.scss'
import allCardsFrontI1 from './allCards.js'

type apps = { lvl: number; timer: number }

const app: apps = {
    lvl: 0,
    timer: 0,
}

const divMobal = document.createElement('div')

const body: HTMLElement | any = document.querySelector('body')
if (body) {
    body.appendChild(divMobal)
}

//  настрою таймер
let interval: any
let sec: number = 0
let min: number = 0

const divHeadTimers = document.createElement('div')
const divHeadTimerMin = document.createElement('div')
const divHeadTimerSec = document.createElement('div')

function timerAnyLvl() {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)

    function startTimer() {
        sec++
        if (sec <= 9) {
            divHeadTimerSec.innerText = '0' + sec
        }
        if (sec > 9) {
            divHeadTimerSec.innerText = '' + sec
        }
        if (sec >= 60) {
            min++
            divHeadTimerMin.innerText = '0.' + min
            sec = 0
            divHeadTimerSec.innerText = '0' + sec
        }
    }
}
// таймер настроен

// Отрисовка экрана до раскладки карт

const divContentImajeLvl1 = document.createElement('div')
function startGameFrontEcran() {
    divMobal.style.marginTop = '0px'

    const divHead = document.createElement('div')
    body.appendChild(divHead)
    divHead.className = 'head'

    divHead.appendChild(divHeadTimers)
    divHeadTimers.className = 'divHeadTimers'

    divHeadTimerMin.className = 'head__timer'
    divHeadTimers.appendChild(divHeadTimerMin)
    divHeadTimerMin.textContent = '00.'

    divHeadTimerSec.className = 'head__timer'
    divHeadTimers.appendChild(divHeadTimerSec)
    divHeadTimerSec.textContent = '00'

    // настройка таймера
    timerAnyLvl()
    //  Конец настройки таймера

    const buttonHeadlvl1 = document.createElement('button')
    buttonHeadlvl1.className = 'btn'
    buttonHeadlvl1.textContent = 'Начать заново'
    divHead.appendChild(buttonHeadlvl1)
    buttonHeadlvl1.addEventListener('click', () => {
        setTimeout(function () {
            location.reload()
        }, 200)
    })

    const divContentLvl1 = document.createElement('div')
    divContentLvl1.className = 'content'
    body.appendChild(divContentLvl1)

    divContentImajeLvl1.className = 'image-out'
    divContentLvl1.appendChild(divContentImajeLvl1)
}

// к блоку победа
function winSmaile() {
    const imgYouWinGame = document.createElement('img')
    imgYouWinGame.src = '../static/Win.png'
    divMobalHeader.appendChild(imgYouWinGame)
    const h2TitleWin = document.createElement('h2')
    h2TitleWin.className = 'title'
    h2TitleWin.textContent = 'Вы выйграли!'
    divMobalHeader.appendChild(h2TitleWin)
}
// к блоку поражение
function louseSmile() {
    const imgYouWinGame = document.createElement('img')
    imgYouWinGame.src = '../static/Louse.png'
    divMobalHeader.appendChild(imgYouWinGame)
    const h2TitleLouse = document.createElement('h2')
    h2TitleLouse.className = 'title'
    h2TitleLouse.textContent = 'Вы проиграли!'
    divMobalHeader.appendChild(h2TitleLouse)
}

function logicBlokWinLouse() {
    const divFullwidchBlue = document.createElement('div')
    divFullwidchBlue.className = 'divFullwidchBlue'
    body.prepend(divFullwidchBlue)
    const divMobal = document.createElement('div')
    divMobal.className = 'modal'
    divFullwidchBlue.appendChild(divMobal)

    const divMobalContainer = document.createElement('div')
    divMobalContainer.className = 'modal__container'
    divMobal.appendChild(divMobalContainer)

    const divMobalContent = document.createElement('div')
    const divMobalFooter = document.createElement('div')

    divMobalHeader.className = 'modal__header'
    divMobalContent.className = 'modal__content'
    divMobalFooter.className = 'modal__footer'

    divMobalContainer.appendChild(divMobalHeader)

    divMobalContainer.appendChild(divMobalContent)
    const divLevelsList = document.createElement('div')
    const divLvl1 = document.createElement('div')
    const divLvl2 = document.createElement('div')
    const divLvl3 = document.createElement('div')
    divLevelsList.className = 'levels-list-Win '

    divLvl1.textContent = 'Затраченное время'
    divLvl1.className = 'text-Content-Class-Name-Win'
    divLvl2.className = 'text-content-black'
    divLvl3.className = 'text-content-black'
    divLvl2.textContent = divHeadTimerMin.textContent
    divLvl3.textContent = divHeadTimerSec.textContent

    divMobalContent.appendChild(divLvl1)
    divMobalContent.appendChild(divLevelsList)
    divLevelsList.appendChild(divLvl2)
    divLevelsList.appendChild(divLvl3)

    divMobalContainer.appendChild(divMobalFooter)
    const buttonBtnStart = document.createElement('button')
    buttonBtnStart.className = 'btnWin'
    buttonBtnStart.textContent = 'Играть снова'
    divMobalFooter.appendChild(buttonBtnStart)
    // //////////////////////////////////////

    divMobalFooter.addEventListener('click', () => {
        setTimeout(function () {
            location.reload()
        }, 200)
    })
}
// блок добавлен

const divMobalHeader = document.createElement('div')
// добавлю победный блок
function addBlueMonitorDivWin() {
    //  голубой блок вы выйграли \ проиграли
    winSmaile()
    logicBlokWinLouse()
}
// блок добавлен

// добавлю блок поражения
function addBlueMonitorDivLouse() {
    //  голубой блок вы выйграли \ проиграли
    louseSmile()
    logicBlokWinLouse()
}

startGame()

function startGame() {
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

    const butLvl1: HTMLElement | any = document.querySelector('.lvl-item-1')
    const butLvl2: HTMLElement | any = document.querySelector('.lvl-item-2')
    const butLvl3: HTMLElement | any = document.querySelector('.lvl-item-3')

    const btnStart: HTMLElement | any = document.querySelector('.btn')

    butLvl1.addEventListener('click', () => {
        app.lvl = 1
    })
    butLvl2.addEventListener('click', () => {
        app.lvl = 2
    })
    butLvl3.addEventListener('click', () => {
        app.lvl = 3
    })

    // Логика при переходе
    btnStart.addEventListener('click', () => {
        if (app.lvl === 1) {
            app.lvl = 3
            divMobal.removeChild(divMobalContainer)
            containerLvl1()
        } else if (app.lvl === 2) {
            app.lvl = 6
            divMobal.removeChild(divMobalContainer)
            containerLvl1()
        } else if (app.lvl === 3) {
            app.lvl = 9
            divMobal.removeChild(divMobalContainer)
            containerLvl1()
        } else {
            alert('Вы не выбрали уровень сложности')
        }
    })
}

// Отрисовка первого уровня

function containerLvl1() {
    startGameFrontEcran() // Отрисовка экрана до раскладки карт
    //Достал рубашку
    const bacPackCards = allCardsFrontI1[0]
    console.log(bacPackCards)
    delete allCardsFrontI1[0]
    // Удалил рубажку из массива и перемешал
    allCardsFrontI1.sort(() => Math.random() - 0.5)
    let trhiCadsLvl1: HTMLElement | any = allCardsFrontI1.slice(0, app.lvl)
    let sorted = trhiCadsLvl1
    let cardsCopy6InLvl1: HTMLElement | any = [].concat(trhiCadsLvl1, sorted)
    // Режу массив, копирую и отрисовывою
    // Перемешать новый массив
    cardsCopy6InLvl1.sort(() => Math.random() - 0.5)
    let lastCilckKard = ''
    const arrayCardsWins: HTMLElement | any = []
    for (let i = 0; i < cardsCopy6InLvl1.length; i++) {
        const imgFonts: HTMLElement | any = document.createElement('img')
        imgFonts.src = cardsCopy6InLvl1[i].img
        imgFonts.id = cardsCopy6InLvl1[i].id
        imgFonts.cardPosition = false
        imgFonts.className = 'stylesCards'
        console.log(imgFonts)
        divContentImajeLvl1.appendChild(imgFonts)

        setTimeout(() => {
            // Перевернул карты рубашкой вверх
            if (imgFonts.cardPosition === true) {
            }
            imgFonts.src = bacPackCards.img
            imgFonts.cardPosition = false
        }, 5000)

        // Клик по карте откроется через 5 секунд
        imgFonts.addEventListener('click', () => {
            if (imgFonts.cardPosition === false) {
                imgFonts.src = cardsCopy6InLvl1[i].img
                imgFonts.cardPosition = true

                if (lastCilckKard === '') {
                    lastCilckKard = imgFonts.id
                    imgFonts.cardPosition = true
                } else if (
                    // если значение id новой карты больше или меньше
                    lastCilckKard < imgFonts.id ||
                    lastCilckKard > imgFonts.id
                ) {
                    setTimeout(() => {
                        clearInterval(interval)
                        addBlueMonitorDivLouse()
                    }, 500)
                    // setTimeout(() => {
                    //     imgFonts.cardPosition = false
                    //     imgFonts.src = bacPackCards.img
                    // }, 1000)
                } else if (
                    // если значение id новой карты больше или меньше
                    lastCilckKard === imgFonts.id
                ) {
                    lastCilckKard = ''
                    imgFonts.cardPosition = true
                    const cardsQwins = arrayCardsWins.push('1')
                    if (cardsQwins === app.lvl) {
                        setTimeout(() => {
                            clearInterval(interval)
                            addBlueMonitorDivWin()
                        }, 500)
                    }
                }
            }
        })
    }
}
