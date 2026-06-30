let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#sub')
const userInput = document.querySelector('#input')
const guessSlot = document.querySelector('.guess')
const remaningGuess = document.querySelector('.result')
const dir = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value)
    // console.log(guess);

    validateGuess(guess)
  })
}


const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number')
    userInput.value = ''
  } else if (guess < 1) {
    alert('Please enter number b/w 1 and 100')
    userInput.value = ''
  } else if (guess > 100) {
    alert('Please enter number b/w 1 and 100')
    userInput.value = ''
  } else {
    prevGuess.push(guess)
    if (numGuess >= 10) {
      displayGuess(guess)
      displayMsg(`Game Over, Random number was ${random}`)
      endGame()
    } else {
      displayGuess(guess)
      chekcGuess(guess)
    }
  }

}

const chekcGuess = (guess) => {
  if (guess === random) {
    displayMsg(`You Guess it right ${guess}`)
    endGame()
  } else if (guess < random) {
    displayMsg(`Number is too Low`)
  } else if (guess > random) {
    displayMsg(`Number is too HIGH`)
  }
}

const displayGuess = (guess) => {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaningGuess.innerHTML = `${11 - numGuess}`
}


const displayMsg = (msg) => {
  dir.innerHTML = `<h2>${msg}</h2>`
}


const endGame = () => {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false

  newGame()
}

const newGame = () => {
  const newGanwBtn = document.querySelector('#newGame')

  newGanwBtn.addEventListener('click', (e) => {

    random = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaningGuess.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}