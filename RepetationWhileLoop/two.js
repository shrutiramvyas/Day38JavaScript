const prompt = require("prompt-sync")({sigint: true});
magicNumber = 66;
let num = parseInt(prompt("Guess the number between 1 to 100 "));
while(num != magicNumber){
    if(num > magicNumber){
        console.log("Number is greater, Please guess again");
    }
    else if(num < magicNumber){
        console.log("Number is smaller, Please guess again ");
    }
    else{
        console.log("Please write number between only 1 to 100");
    }
    num = prompt("Guess the number between 1 to 100 again");
}
console.log("Match wins")