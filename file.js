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
function singleRound(){
    
}