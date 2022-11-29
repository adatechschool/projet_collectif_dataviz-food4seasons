
function ouvrirPage(){
    let a = document.getElementById("search").value;

    if(a === "fruits"){
        window.open("https://www.greenpeace.fr/guetteur/calendrier/");
    }
}


fetch("data.json")
.then(reponse => (reponse.json()))
.then(reponse2 => {
/* console.log ("------")
    console.log (reponse2[0]) 
    console.log (reponse2.length)*/
    for (i = 0 ; i < reponse2. length; i++) {

        let resultat = reponse2[i]
         
        console.log ()
        
        
        let nom = resultat.label.fr;
        /*console.log (resultat.label)*/
        let saison = resultat.months;
        let image = resultat.emoji;
        let CO2 = resultat.CO2;
        let type = resultat.type;

        document.getElementById("fruits-et-legumes").innerHTML +=
            "<div class='legumes'>" +
            "<h2 class='nom'>"+nom + "</h2>"+
            "<div class='saison'>"+saison + "</div>" +
            "<div class='type'>"+type + "</div>"
            "</div>"

    }
  
})



