const app = {
  lvl: null,
  timer: null,
};

const butLvl1 = document.querySelector(".lvl-item-1");
const butLvl2 = document.querySelector(".lvl-item-2");
const butLvl3 = document.querySelector(".lvl-item-3");

const btnStart = document.querySelector(".btn");

butLvl1.addEventListener("click", () => {
  app.lvl = "1";
  console.log(app.lvl);
});

butLvl2.addEventListener("click", () => {
  app.lvl = "2";
  console.log(app.lvl);
});

butLvl3.addEventListener("click", () => {
  app.lvl = "3";
  console.log(app.lvl);
});

btnStart.addEventListener("click", () => {
  if (app.lvl === "1") {
    alert("Переход на страницу Lvl 1");
    console.log(app.lvl);
  } else if (app.lvl === "2") {
    alert("Переход на страницу Lvl 2");
  } else if ((app.lvl === "3")) {
    alert("Переход на страницу Lvl 3");
  } else {
    alert("Вы не выбрали уровень сложности");
  }
});
