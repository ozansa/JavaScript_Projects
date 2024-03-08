
//While loop
function count_To_Ten(){
    let Digit="";
    let x=1;
    while(x<11){
        Digit += "<br>" + x;
        x++;
    }
document.getElementById("Counting_to_Ten").innerHTML=Digit;
}

//For loop
let Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
let Content="";
let Y;
function for_Loop(){
for(Y=0; Y<Instruments.length; Y++){
    Content += Instruments[Y] +"<br>";
}
document.getElementById("List_of_Instruments").innerHTML=Content;
}

//Array function
function cat_pics(){
    var Cat_Picture=[];
    Cat_Picture[0]=" sleeping";
    Cat_Picture[1]=" playing";
    Cat_Picture[2]=" eating";
    Cat_Picture[3]=" purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is" +
    Cat_Picture[2] + ".";
}