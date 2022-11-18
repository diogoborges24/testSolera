function rockPaperScissors(){
    const prompt = require("prompt-sync")({ sigint: true });
    const p1Choice = prompt("Player 1 choice, type 0 for Rock, 1 for Paper, 2 for Scissors")
    if(p1Choice < 0 || p1Choice > 2){
        return "Wrong value"
    }
    const p2Choice = prompt("Player 2 choice, type 0 for Rock, 1 for Paper, 2 for Scissors")
    if(p1Choice < 0 || p1Choice > 2){
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