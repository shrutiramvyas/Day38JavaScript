const prompt = require("prompt-sync")({sigint: true});
let n = parseInt(prompt("Enter number "));
flag = 0;
for( i = 2; i < n / 2 ; i++){
    if(n % i == 0){
        flag = 1;
        break;
    }
}
if(flag == 0){
    console.log("Number is prime")
}
else{
    console.log("Number is not prime");
}