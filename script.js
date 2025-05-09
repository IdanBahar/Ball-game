const ball = document.querySelector('.ball');
const MAX_SIZE = 400;
const BASE_SIZE = 100;
const INCREMENT = 50;

function onBallClick() {
  let currentSize = parseInt(getComputedStyle(ball).width);

  const newSize = currentSize + INCREMENT;
  ball.style.width = newSize + 'px';
  ball.style.height = newSize + 'px';
  ball.textContent = newSize;
}

console.log(ball.style.width);
