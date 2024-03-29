'use strict';

//Generates a random number between 1 and 20

let randomNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = randomNumber;
//Setting the high score
let highScore = 0;
//Setting the score
let score = 20;

// Displaying Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

//Runs when the user clicks the CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Checks if the score is not equal to 1
  if (score != 1) {
    //When there is no number
    if (!guess) {
      displayMessage('No number! ');

      //When it is correct number
    } else if (guess === randomNumber) {
      displayMessage('You Win :)');
      //SHOWS THE SECRET NUMBER
      document.querySelector('.number').textContent = randomNumber;
      //Css style manipulation

      //BACKGROUND COLOR
      document.querySelector('body').style.backgroundColor = '#60b347';

      //WIDTH OF NUMBER ELEMENT
      document.querySelector('.number').style.width = '30rem';
      //IMPLEMENTING HIGH SCORE

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      //When the guess is too high or too low or zero
    } else if (guess !== randomNumber) {
      if (score > 1) {
        displayMessage(guess > randomNumber ? 'Too High!' : 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        displayMessage() = 'You Lost';
      }
    }

  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You Lost');
  }
});

//RESET FUNCTIONALITY

document.querySelector('.again').addEventListener('click', function () {
  //BACKGROUND COLOR
  document.querySelector('body').style.backgroundColor = '#222';
  //CHANGING WIDTH OF BUTTON
  document.querySelector('.number').style.width = '15rem';
  //RESETTING SCORE
  score = 20;
  document.querySelector('.score').textContent = score;
  //RESETTING INPUT FIELD
  document.querySelector('.guess').value = '';
  //RESETTING STARTING MESSAGE
  displayMessage('Start guessing...');
  //INITIALIZING RANDOM NUMBER
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
