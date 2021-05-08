function computerPlay(){
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (randomNum <= 3){
        return "Rock";
    } else if (randomNum <=6 ){
        return "Paper";
    } else {
        return "Scissors";
    }
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    let choice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    let result = '';
    if(computerChoice === 'ROCK'){
        if(choice === 'ROCK'){
            result = 'Draw!';
        } else if (choice === 'PAPER'){
            result = 'You win! Paper beats rock';
            playerScore++;
        } else {
            result = 'You lose! Rock beats scissors';
            computerScore++;
        }
    }
    if(computerChoice === 'SCISSORS'){
        if(choice === 'ROCK'){
            result = 'You win! Rock beats scissors';
            playerScore++;
        } else if (choice === 'PAPER'){
            result = 'You lose! scissors beats paper';
            computerScore++;
        } else {
            result = 'Draw!';
        }
    }
    if(computerChoice === 'PAPER'){
        if(choice === 'ROCK'){
            result = 'You lose! Paper beats rock';
            computerScore++;
        } else if (choice === 'PAPER'){
            result = 'Draw!';
        } else {
            result = 'You win! Scissors beats paper';
            playerScore++;
        }
    }
    return result;
}

let playerSelection = 'rock';


/*console.log(playRound(playerSelection, computerPlay()));  */




function game(){
    for (let index = 0; index < 5; index++) {
        playerSelection = window.prompt();
        console.log(playRound(playerSelection, computerPlay()));    
        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
    }
    if (computerScore > playerScore){
        console.log("You lost!\n");
    } else {
        console.log("You win!\n");
    }

}