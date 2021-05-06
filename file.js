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
    
    let result = '';

    if(computerSelection === "Rock" && choice === "SCISSORS"){
        result = 'You lose! Rock beats Scissors';   
    } 
    if(computerSelection === "Rock" && choice === "PAPER"){
        result = 'You win! Paper beats rock';
    }
    if(computerSelection === "Rock" && choice === "Rock"){
        result = 'Draw! You both picked rock';
    }

    if(computerSelection === "Paper" && choice === "ROCK"){
        result = 'You lose! Paper beats rock';
    }
    if(computerSelection === "Paper" && choice === "PAPER"){
        result = 'Draw! You both picked paper';
    }
    if(computerSelection === "Paper" && choice === "SCISSORS"){
        result = 'You win! Scissors beats paper';
    }

    if(computerSelection === "Scissor" && choice === "ROCK"){
        result = 'You win! Rock beats scissors';
    }
    if(computerSelection === "Scissor" && choice === "SCISSORS"){
        result = 'Draw! You both picked scissors';
    }
    if(computerSelection === "Scissor" && choice === "PAPER"){
        result = 'You lose! Scissors beats paper';
    }

    
    return result;
    
}

const playerSelection = "scissors";
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));
