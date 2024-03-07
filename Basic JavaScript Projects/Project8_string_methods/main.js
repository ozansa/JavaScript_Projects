//full sentece method
function full_Sentence(){
    let part1="I have ";
    let part2="made this ";
    let part3="into a complete ";
    let part4="sentence. ";
    let whole_sentence=part1.concat(part2,part3,part4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
    
}
//slice method
function slice_Method(){
    let Sentence="All work and no play makes Jonny a dull boy."
    let Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}
//make upper case method
function up(){
    let sentence="This all be uppercase";
    let upper=sentence.toUpperCase();
    document.getElementById("upper").innerHTML=upper;
}
//search method
function searchFunction(){
    let today="Today is monday";
    let position=today.search(/monday/);
    document.getElementById("search").innerHTML=position;

}
//string method
function string_Method(){
    let x=182;
    document.getElementById("Numbers_to_String").innerHTML=x.toString();
}
//precision method
function precision_Method(){
    let x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML=x.toPrecision(10);
}
//fixed method
function fixed(){
    let num=5.46;
    let n=num.toFixed(2);
document.getElementById("fix").innerHTML=n;
}
//value method
function valueO(){
    let x="Hello World!"
    let z=x.valueOf();
    document.getElementById("value").innerHTML=x;
}