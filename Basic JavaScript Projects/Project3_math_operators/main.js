//subtraction
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5-2=" + Subtraction;
}
//addition
function addition_Function() {
    let addition = 2 + 2;
    document.getElementById("add").innerHTML = "2+2=" + addition;
}
//multiply
function multiplication() {
    let mult = 2 * 3;
    document.getElementById("mult").innerHTML = "2*3=" + mult;
}
//division
function division(){
    let divi=6/2;
    document.getElementById("div").innerHTML="6/6=" + divi;
}

//multiple operation
function multiple(){
    let multiple=2+2+(2*3)-(6/2);
    document.getElementById("multip").innerHTML="2+2+(2*3)-(6/2)=" +multiple;
}