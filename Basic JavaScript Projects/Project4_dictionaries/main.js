function myDictionary(){
    let Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
    delete Animal.Breed;
document.getElementById("dictionary").innerHTML=Animal.Breed;
}
