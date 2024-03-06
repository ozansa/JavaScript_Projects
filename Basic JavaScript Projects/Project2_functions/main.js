function My_First_Function() {
    var str="This is the button text!";
    document.getElementById("Button_Text").innerHTML=str; //button text
}

function myFunction(){
    var sentence="I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}

function myFunction(p1,p2){
    return p1 * p2;


let result=myFunction(4,3);
document.getElementById("demo").innerHTML=result;
}