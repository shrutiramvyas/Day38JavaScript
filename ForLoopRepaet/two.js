const prompt = require("prompt-sync")({sigint: true});
let n = parseInt(prompt("Enter number "));
let harmonic = 0;
for(i = 1; i < n; i++){
    harmonic += 1/i ;
}
console.log(harmonic);
