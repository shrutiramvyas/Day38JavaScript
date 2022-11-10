flip = Math.floor(Math.random()*2);
let head = 0, tail = 0;
while(head != 12 || tail != 12){
    if(flip == 1){
        head++;
        console.log(head ,"head win this time");
    }
    else{
        tail++;
        console.log(tail ,"tail win this time");
    }
    if(head == 11){
        console.log("head wins 11 times");
        break;
    }
    else if(tail == 11){
        console.log("Tail wins 11 times")
        break;
    }
    flip = Math.floor(Math.random()*2);
}


