/* PC */
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
    computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
}

if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/


/* PLAYER */
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


/*
if(playerInput == '1'){
    playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
}

if(playerInput == '3'){
    playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove)

/* SCORE */


function displayResult(argComputerMove, argPlayerMove){
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Mamy remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Mamy remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Mamy remis!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
        printMessage('Dawaj dawaj nie udawaj')
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
        printMessage('Dawaj dawaj nie udawaj')
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
        printMessage('Dawaj dawaj nie udawaj')
    }
}

