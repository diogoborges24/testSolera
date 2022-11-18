function fizzBuzz(number){
    const prompt = require("prompt-sync")({ sigint: true });
    var isCustomizable = prompt("If you want to custmize the game enter 1...")
    
    
    if(isCustomizable == 1){
        var divisible1 = prompt("divisibly by:")
        var word1 = prompt("Type a word:")
        var anotherRule = prompt("If you want another rule type 1...")
        if(anotherRule == 1){
            var divisible2 = prompt("divisibly by:")
            var word2 = prompt("Type a word:")
            if(number % divisible1 == 0 && number % divisible2 == 0){
                return word1 + " " + word2
            }
        }
        if(number % divisible1 == 0){
            return word1
        }
    }
    if(number % 3 == 0 && number % 5 == 0  && number % 7 == 0 ){
        return "Fizz Buzz Pop"
    }
    if(number % 3 == 0 && number % 5 == 0 ){
        return "Fizz Buzz"
    }
    if(number % 3 == 0 && number % 7 == 0 ){
        return "Fizz Pop"
    }
    if(number % 5 == 0 && number % 7 == 0 ){
        return "Buzz Pop"
    }
    if(number % 3 == 0){
        return "Fizz"
    }
    if(number % 5 == 0){
        return "Buzz"
    }
    if(number % 7 == 0){
        return "pop"
    }
    return number;
}

console.log(fizzBuzz(15))