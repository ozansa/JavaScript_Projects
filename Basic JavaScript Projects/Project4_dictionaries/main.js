function myDictionary(){
   //object animal
    let Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    //Delete operator
    delete Animal.Breed;
document.getElementById("dictionary").innerHTML=Animal.Breed;
}
