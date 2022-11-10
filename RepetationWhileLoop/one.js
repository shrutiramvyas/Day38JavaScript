const prompt = require("prompt-sync")({sigint: true});
let n = prompt("Enter num ");
let x = 1;
while(x != n){
    let res = x**2;
    if(res == 256){
        break;
    }
    x++;
    console.log(res);
}

