
{
/* Functions */ 
const playGame = function (playerInput) {
    clearMessages ()
    const getMoveName = function (argMoveId) {
        if(argMoveId == 1) return 'kamień';
        if(argMoveId == 2) return 'papier';
        if(argMoveId == 3) return 'nożyce';
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    
    const displayResult = function(computerMove, playerMove) {
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

    /* MOVES */

    const randomNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    /* SCORE */

    displayResult (computerMove, playerMove)
}
    /* BUTTONS */
    const rockClicked = function () {
        playGame(1);
    }
    const paperClicked = function () {
        playGame(2);
    }
    const scissorsClicked = function () {
        playGame(3);
    }

    const playRock = document.getElementById('playRock');
    playRock.addEventListener('click', rockClicked);
    playPaper = document.getElementById('playPaper');
    playPaper.addEventListener('click', paperClicked);
    playScissors = document.getElementById('playScissors');
    playScissors.addEventListener('click', scissorsClicked);

}