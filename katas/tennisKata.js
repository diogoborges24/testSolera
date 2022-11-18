class TennisKata{
    constructor(){
        this.p1Score = 0
        this.p2Score = 0
    }

    getPlayerChoice(){
        const prompt = require("prompt-sync")({ sigint: true });
        const pChoice = prompt(`Which player do you want to add score to? Choose 1 for Player 1, and Choose 2 for Player 2`)
        
        return pChoice
    }

    addingPoints(){
        var choice = this.getPlayerChoice()
        console.log(choice)
        if(choice == false){
            return "There are only two players, what do you think you're playing, football?"
        }
        if(choice == "1"){
            if(this.p1Score < 30){
                this.p1Score += 15
            }else if(this.p1Score == 40 && this.p2Score == 40){
                this.p1Score = "A"
            }else if(this.p1Score == 40 && this.p2Score < 40){
                this.p1Score = -1
            } else if(this.p1Score == 40 && this.p2Score == "A"){
                this.p2Score = 40
            }else if(this.p1Score == "A" && this.p2Score == 40){
                this.p1Score = -1
            } else {
                this.p1Score += 10
            }
        }
        if(choice == "2"){
            if(this.p2Score < 30){
                this.p2Score += 15
            }else if(this.p2Score == 40 && this.p1Score == 40){
                this.p2Score = "A"
            }else if(this.p2Score == 40 && this.p1Score < 40){
                this.p2Score = -1
            } else if(this.p2Score == 40 && this.p1Score == "A"){
                this.p1Score = 40
            } else if(this.p2Score == "A" && this.p1Score == 40){
                this.p2Score = -1
            } else {
                this.p2Score += 10
            }
        }
        
    }

    runGame(){
        console.log(this.p1Score +":" +this.p2Score)
        while(true){
            this.addingPoints()
            console.log(this.p1Score +":" +this.p2Score)
            if(this.p1Score == -1){
                break
            }
            if(this.p2Score == -1){
                break
            }
        }
        if(this.p1Score < 0){
            console.log("Player 1 wins")
        }
        if(this.p2Score < 0){
            console.log("Player 2 wins")
        }
    }
}

const game = new TennisKata()
game.runGame()