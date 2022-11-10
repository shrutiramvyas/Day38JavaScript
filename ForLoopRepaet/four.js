const prompt = require("prompt-sync")({sigint: true});
let start = parseInt(prompt("Enter start number "));
let end = parseInt(prompt("Enter end number "));

for( i = start; i <= end; i++ ){
    let k = 0;
    for( j = 2; j < i/2; j++){
        if(i % j == 0){
            k = 1;
            break;
        }
    }
    if(k == 0){
        console.log(i);
    }
}