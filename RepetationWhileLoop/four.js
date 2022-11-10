let player = 100;
guess = Math.floor(Math.random()*2);
while( player != 0 || player != 200){
    if(guess == 1){
        player++;
    }
    else{
        player--;
    }
    if(player == 0){
        console.log("Gambler lost all money");
        break;
    }
    else if(player == 200){
        console.log("Gambler win");
        break;
    }
    guess = Math.floor(Math.random()*2);
}