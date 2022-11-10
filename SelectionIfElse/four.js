let a = 6
let b = 8
let c = 9;
op1 = Math.floor((a + b) * c);
op2 = Math.floor((a % b) + c);
op3 = Math.floor(c + (a / b));
op4 = Math.floor((a * b) + c);
let x = Math.max(op1,op2,op3,op4);
console.log(x , "is greater");