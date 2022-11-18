function getPlayerChoice(name){
    const prompt = require("prompt-sync")({ sigint: true });
    const pChoice = prompt(`${name} choice, type 0 for Rock, 1 for Paper, 2 for Scissors`)
    return pChoice
}

function rockPaperScissors(){
    
    const p1Choice = getPlayerChoice("Player 1")
    if(p1Choice < 0 || p1Choice > 2){
        return "Wrong value"
    }
    const p2Choice = getPlayerChoice("Player 2")
    if(p2Choice < 0 || p2Choice > 2){
        return "Wrong value"
    }
    

    const ROCK = 0
    const PAPER = 1
    const SCISSORS = 2

    if((p1Choice == ROCK && p2Choice == SCISSORS) || 
    (p1Choice == SCISSORS && p2Choice == PAPER || 
        (p1Choice == PAPER && p2Choice == ROCK))){
        return "Player 1 wins"
    }
    if((p1Choice == SCISSORS && p2Choice == ROCK) || 
        (p1Choice == PAPER && p2Choice == SCISSORS ||
        (p1Choice == ROCK && p2Choice == PAPER))){
        return "Player 2 wins"
    }
    return "Draw"

    
}

console.log(rockPaperScissors())