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
function playRound(playerSelection, computerSelection){
    let choice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    let result = '';
    if(computerChoice === 'ROCK'){
        if(choice === 'ROCK'){
            result = 'Draw!';
        } else if (choice === 'PAPER'){
            result = 'You win! Paper beats rock';
        } else {
            result = 'You lose! Rock beats scissors';
        }
    }
    return result;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerPlay()));
console.log("end");