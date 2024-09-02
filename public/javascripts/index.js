let luckyNumber = 7;

let restCount = 5;

const luckyNumDom = document.querySelector(".index-lucky-number");

const drawNumDom = document.querySelector(".index-drawn-number");

const restCountDom = document.querySelector(".index-rest-times");

const drawButton = document.querySelector(".index-draw");

const updateLuckyNumberButton = document.querySelector(
  ".index-update-lucky-number"
);

const restRestCountButton = document.querySelector(
  ".index-reset-rest-count"
);

function listenDom() {
  drawButton.addEventListener("click", drawPrize);

  updateLuckyNumberButton.addEventListener("click", updateLuckyNumber);

  restRestCountButton.addEventListener("click", restRestCount)
}

function updateLuckyNumber() {
    luckyNumber = Math.floor(Math.random() * 10);
    luckyNumDom.textContent = luckyNumber;
}

function restRestCount() {
    restCount = 5;
    restCountDom.textContent = restCount;
}

function drawPrize() {
  if (restCount <= 0) {
    return;
  }

  const drawNum = Math.floor(Math.random() * 10);

  if (drawNumDom) {
    drawNumDom.textContent = drawNum;
  }

  if (restCountDom) {
    restCountDom.textContent = --restCount;
  }

  if (drawNum === luckyNumber) {
    setTimeout(() => {
      alert("恭喜中奖！");
    })
  }
}

listenDom();

alert(window?.getMsgFromHap())
