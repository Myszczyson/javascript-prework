/* Functions */
function playGame (playerInput){
    clearMessages ()
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

    /* PLAYER */
    
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    /* SCORE */

    displayResult (computerMove, playerMove)


}

/* BUTTONS */
function rockClicked(){
    playGame(1);
}
function paperClicked(){
    playGame(2);
}
function scissorsClicked(){
    playGame(3);
}

let playRock = document.getElementById('playRock');
playRock.addEventListener('click', rockClicked);

let playPaper = document.getElementById('playPaper');
playPaper.addEventListener('click', paperClicked);

let playScissors = document.getElementById('playScissors');
playScissors.addEventListener('click', scissorsClicked);