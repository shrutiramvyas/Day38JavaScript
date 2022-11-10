const prompt = require("prompt-sync")({sigint: true});
let n = parseInt(prompt("Enter number "));
power = Math.pow(2,n);
console.log(power);
for( i = 0; i <= power; i++){
    res = i*2;
    console.log(res);
}