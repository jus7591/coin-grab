const gameContainer = document.querySelector('.container');
const allcoinItems = document.querySelectorAll('.item');
const coin = new Audio('smb2_coin.wav');
let startGame,
  startTime,
  countDown = 20,
  score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count');

gameContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('coin-clicked')) {
    score++;
    scoreCount.innerHTML = score;
    coin.play();
    const pipeElem = e.target.parentElement.previousElementSibling;

    let textEl = document.createElement('span');
    textEl.setAttribute('class', 'nice-text');
    textEl.innerHTML = 'NICE! ';
    pipeElem.appendChild(textEl);

    setTimeout(() => {
      textEl.remove();
    }, 300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // total game time is 20 seconds
  startTime = setInterval(() => {
    timeCount.innerHTML = countDown;
    countDown--;
  }, 1000);

  startGame = setInterval(() => {
    showCoin();
  }, 850);
});

// shows coin
function showCoin() {
  if (countDown <= 0) {
    clearInterval(startGame);
    clearInterval(startTime);
    timeCount.innerHTML = '0';
  }
  let coinToAppear = allcoinItems[getRandomValue()].querySelector('.coin');
  coinToAppear.classList.remove('coin-hide');
  coinToAppear.classList.add('coin-appear');
  hideCoin(coinToAppear);
}

function getRandomValue() {
  let textEl = document.createElement('span');
  textEl.setAttribute('class', 'nice-text');
  let rand = Math.floor(Math.random() * allcoinItems.length);
  console.log(rand);
  if (rand === 8) {
    textEl.innerHTML = 'Keep Clicking! ';
  }
  return rand;
}

// hide coin
function hideCoin(coinItem) {
  setTimeout(() => {
    coinItem.classList.remove('coin-appear');
    coinItem.classList.add('coin-hide');
  }, 1000);
}
