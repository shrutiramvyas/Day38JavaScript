let year = 2000;
if((year % 100)!= 0 && year % 4 == 0 || year % 400 == 0){
    console.log("this is leap year");
}
else{
    console.log("non leap year");
}