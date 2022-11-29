/*fetch("https://data.iledefrance.fr/api/records/1.0/search/?dataset=cueillettes-a-la-ferme-en-ile-de-france&q=")
    .then(reponse => (reponse.json()))
    .then(reponse2 => {
        console.log(reponse2.records[0])
        for (i = 0 ; i < reponse2.records.length ; i++) {
        console.log(reponse2.records[i].fields.nom)
        document.getElementById("entreprise-cueillettes").innerHTML += "<h2>"+reponse2.records[i].fields.nom + "<BR>" + "<BR>" + reponse2.records[i].fields.email + "<BR>" + "<BR>" + reponse2.records[i].fields.tel + "<BR>" + "<BR>" 
       }
    })*/
    
   /*fetch("https://data.iledefrance.fr/api/records/1.0/search/?dataset=cueillettes-a-la-ferme-en-ile-de-france&q=")
      .then(reponse => (reponse.json()))
       .then(reponse2 => {
          console.log(reponse2.records[0])
          for (i = 0 ; i < reponse2.records.length ; i++) {
            console.log("-----------------")
            console.log(reponse2.records[0].fields)
       
            let champs = reponse2.records[i].fields

            let nom = champs.nom;
            let adresse = champs.adresse;
            let code_postale = champs.cp;  
            let ville = champs.commune;
            let email = champs.email;
            let tel = champs.tel;
            let site_web = champs.web;
        


            document.getElementById("entreprise-cueillettes").innerHTML +=
            "<div class='entreprise'>" +
            "<h2 class='nom_entreprise'>"+nom + "</h2>" +
            "<div class='adresse-complete'>"+adresse +"," +code_postale +"," +ville + "</div>" +
            "<div class='tel'>tel: 0"+tel + "</div>" +
            "<div class='email'>"+ email + "</div>" +
            "<div class='web'>Site web :<a href="+ site_web +" target='_blank'>" + site_web + "</a></div>" +
            "</div>"
        }
    })
    */

    /*fetch("https://raw.githubusercontent.com/datagir/mesfruitsetlegumesdesaison/master/public/data/products.json")
    .then(reponse => (reponse.json()))
    .then(reponse2 => {
    console.log("---------")
    console.log (reponse2.length)
    console.log (reponse2[0])
    console.log (reponse2[0].months)
    console.log (reponse2[0].label)
    console.log (reponse2[0].months)
    console.log (reponse2[0].emoji)
    console.log (reponse2[0].CO2)
    for (i = 0 ; i < reponse2.length ; i++) {

        let resultat = reponse2[i]

        let nom = resultat.nom;
        let label = resultat.label;
        let months = resultat.months;
        let image = resultat.emoji;
        let CO2 = resultat.CO2;

        document.getElementById("fruits et legumes de saison").innerHTML +=
        "<div class='entreprise'>"
       
    }   
})
/*for (i = 0; i< reponse2[0].label; i++){}*/

function ouvrirPage(){
    let a = document.getElementById("search").value;

    if(a === "fruits"){
        window.open("data.json");
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



