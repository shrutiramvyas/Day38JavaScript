let a = Math.floor(Math.random() *90);
let b = Math.floor(Math.random() *90);
let c = Math.floor(Math.random() *90);
console.log(" a = " , a , "b = ", b, "c = ", c );
if(a > b){
    if(a > c){
        console.log("a is greater");
    }
    else{
        console.log("c is greater");
    }
}
else{
    if(b > c){
        console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }
}