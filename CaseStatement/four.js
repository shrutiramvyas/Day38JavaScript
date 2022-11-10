const prompt = require("prompt-sync")({sigint: true});
let ch = parseInt(prompt("Choose 1 to convert Feet to Inch \n 2 for Feet to Meter \n 3 for Inch to Feet \4 Meter to Feet : "))
let num = parseInt(prompt("Enter a number "));
switch(ch){
    case 1:
        let res = num * 12;
        console.log("Feet to Inch: ", res);
        break;
    case 2:
        res = num / 3.281;
        console.log("Feet to meter ", res);
        break;
    case 3:
        res = num / 12;
        console.log("inch to feet ", res);
        break;
    case 4:
        res = num * 3.281;
        console.log("Meter to feet ", res);
        break;
    default:
        console.log("wrong choice");
}