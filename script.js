function ouvrirPage(){
    let a = document.getElementById("search").value;
    if(a === "fruits"){
        window.open("https://www.greenpeace.fr/guetteur/calendrier/"); //data.json
    }
}       


// fetch("https://data.iledefrance.fr/api/records/1.0/search/?dataset=cueillettes-a-la-ferme-en-ile-de-france&q=")
//     .then(reponse => (reponse.json()))
//     .then(reponse2 => {
//         console.log(reponse2.records[0])
//         for (i = 0 ; i < reponse2.records.length ; i++) {
//         console.log(reponse2.records[i].fields.nom)
//             document.getElementById("nom").innerHTML += reponse2.records[i].fields.nom + "<BR>" + "<BR>" + reponse2.records[i].fields.email + "<BR>" + "<BR>" + reponse2.records[i].fields.tel + "<BR>" + "<BR>"
//         }
//     })