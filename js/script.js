/* Functions */
function getMoveName(argMoveId) {
    if(argMoveId == 1) return 'kamień';
    if(argMoveId == 2) return 'papier';
    if(argMoveId == 3) return 'nożyce';
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(computerMove, playerMove) {
    if((computerMove == 'kamień' && playerMove == 'papier') ||
       (computerMove == 'papier' && playerMove == 'nożyce') ||
       (computerMove == 'nożyce' && playerMove == 'kamień')) {
        printMessage('Ty wygrywasz!');
    } else if(playerMove === computerMove) {
       printMessage('Mamy remis!');
    } else {
       printMessage('Ja wygrywam!');
    }
  }
/* PC */

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

/* PLATER */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

/* SCORE */

displayResult (computerMove, playerMove)

/* BUTTONS */

function buttonClicked(){
    printMessage('Guzik został kliknięty');
  }
  
  let testButton = document.getElementById('test-button');
  
  testButton.addEventListener('click', buttonClicked);
  