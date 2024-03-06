document.write(typeof "ozan");
document.write("50"+2);
//Nan
function notANumber(){

    document.getElementById("Test").innerHTML= 0/0;
};
//nan 2
function notANumber2(){
    document.getElementById("Test2").innerHTML=isNaN("this is a string");
};
// nan 3
function notANumber3(){
    document.getElementById("Test3").innerHTML=isNaN(5)
}
// infinite number
function infinity(){
    document.getElementById("Test4").innerHTML=2E310;
}
//infinite number negatif
function infinity2(){
    document.getElementById("Test5").innerHTML=-3E310;
}

document.write(10>2);
document.write(10<2);
document.write(12==12);
document.write(12==11);
document.write((5>8)&&(5>9));
document.write((5<8)&&(5<9));
//not operator
function notTrue(){
    document.getElementById("Test6").innerHTML=!(5>6);
}
//not operator 
function false1(){
    document.getElementById("Test7").innerHTML=!(5<6);
}

console.log(2+2);