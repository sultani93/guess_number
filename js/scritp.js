'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = '?'
let score = 20
let highscore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // no input
  if (!guess) {
    displayMessage('No number ⛔')
    // when wins
  } else if (guess === secretNumber) {
    displayMessage('That is correct number ❤')
    document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
  // WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high ↗' : 'Too low ↙')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lost the game 💥')
      document.querySelector('.score').textContent = 0
      displayMessage(20)
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.getElementsByTagName('body')[0].style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score
  displayMessage('Start guessing...')
  document.querySelector('.guess').value = ' '
})
