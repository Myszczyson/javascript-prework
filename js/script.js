
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

    let randomNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    /* PLAYER */

    let playerMove = getMoveName(playerInput);
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

let playRock = document.getElementById('playRock');
playRock.addEventListener('click', rockClicked);

let playPaper = document.getElementById('playPaper');
playPaper.addEventListener('click', paperClicked);

let playScissors = document.getElementById('playScissors');
playScissors.addEventListener('click', scissorsClicked);

}