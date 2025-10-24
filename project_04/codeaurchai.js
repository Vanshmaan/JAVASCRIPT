const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('loworHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
    submit.addEventListener('click',(e)=>{
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess > 100){
        alert('Please Enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right!`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too Low!!`)
    }
     else if(guess > randomNumber){
        displayMessage(`Number is Too High!!`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){

}

function endGame(){
    
}





