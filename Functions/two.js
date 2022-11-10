const prompt = require("prompt-sync")({sigint: true});
let one = parseInt(prompt("Enter first number "));
let two = parseInt(prompt("Enter second number "));
palidrome(one,two);

function palidrome(one, two){
    num = n;
    let res =1;
    while(num > 0 ){
        m = num % 10;
        num = num / 10;
        res = res * (10 + m);
    }
    if(res == n){
        console.log("The given number is palindrome");
    }
    else{
        console.log("The given number is not palindrome");
    }
}