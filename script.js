/*fetch("https://data.iledefrance.fr/api/records/1.0/search/?dataset=cueillettes-a-la-ferme-en-ile-de-france&q=")
    .then(reponse =>(reponse.json()))
    .then(reponse2 =>
        {
       for (i = 0 ; i < reponse2.records.length; i++){
            document.getElementById("nom").innerHTML += reponse2.records[i].fields.nom + "<BR>" + reponse2.records[i].fields.email + "<BR>"+ reponse2.records[i].fields.tel + "<BR>" //+ /*reponse2.records[i].fields.web + "<br>" + reponse2.records[i].fields.adresse + "<br>" +"<br>"*/
// console.log(reponse2.records[i].fields.nom)
//  }
//})

const affichageNom1 = document.querySelector(".data_1_nom"); /*variables pour appeler la balise ou seront envoyés les données de l'API*/
const affichageAdresse1 = document.querySelector(".data_1_adresse"); //index 1 
const affichageCP1 = document.querySelector(".data_1_cp");
const affichageTel1 = document.querySelector(".data_1_tel");
const affichageWebsite1 = document.querySelector(".data_1_web");

const affichageNom2 = document.querySelector(".data_2_nom");// même chose index 2 
const affichageAdresse2 = document.querySelector(".data_2_adresse");
const affichageCP2 = document.querySelector(".data_2_cp");
const affichageTel2 = document.querySelector(".data_2_tel");
const affichageWebsite2 = document.querySelector(".data_2_web");

const affichageNom3 = document.querySelector(".data_3_nom");// même chose index 3
const affichageAdresse3 = document.querySelector(".data_3_adresse");
const affichageCP3 = document.querySelector(".data_3_cp");
const affichageTel3 = document.querySelector(".data_3_tel");
const affichageWebsite3 = document.querySelector(".data_3_web");


const affichageNom4 = document.querySelector(".data_4_nom");// même chose index 4
const affichageAdresse4 = document.querySelector(".data_4_adresse");
const affichageCP4 = document.querySelector(".data_4_cp");
const affichageTel4 = document.querySelector(".data_4_tel");
const affichageWebsite4 = document.querySelector(".data_4_web");

const affichageNom5 = document.querySelector(".data_5_nom");// même chose index 5 
const affichageAdresse5 = document.querySelector(".data_5_adresse");
const affichageCP5 = document.querySelector(".data_5_cp");
const affichageTel5 = document.querySelector(".data_5_tel");
const affichageWebsite5 = document.querySelector(".data_5_web");

const affichageNom6 = document.querySelector(".data_6_nom");// même chose index 6
const affichageAdresse6 = document.querySelector(".data_6_adresse");
const affichageCP6 = document.querySelector(".data_6_cp");
const affichageTel6 = document.querySelector(".data_6_tel");
const affichageWebsite6 = document.querySelector(".data_6_web");

const affichageNom7 = document.querySelector(".data_7_nom");// même chose index 7 
const affichageAdresse7 = document.querySelector(".data_7_adresse");
const affichageCP7 = document.querySelector(".data_7_cp");
const affichageTel7 = document.querySelector(".data_7_tel");
const affichageWebsite7 = document.querySelector(".data_7_web");

const affichageNom8 = document.querySelector(".data_8_nom");// même chose index 8
const affichageAdresse8 = document.querySelector(".data_8_adresse");
const affichageCP8 = document.querySelector(".data_8_cp");
const affichageTel8 = document.querySelector(".data_8_tel");
const affichageWebsite8 = document.querySelector(".data_8_web");

const affichageNom9 = document.querySelector(".data_9_nom");// même chose index 9 
const affichageAdresse9 = document.querySelector(".data_9_adresse");
const affichageCP9 = document.querySelector(".data_9_cp");
const affichageTel9 = document.querySelector(".data_9_tel");
const affichageWebsite9 = document.querySelector(".data_9_web");

const affichageNom10 = document.querySelector(".data_10_nom");// même chose index 10
const affichageAdresse10 = document.querySelector(".data_10_adresse");
const affichageCP10 = document.querySelector(".data_10_cp");
const affichageTel10 = document.querySelector(".data_10_tel");
const affichageWebsite10 = document.querySelector(".data_10_web");





const promise01 = fetch("https://data.iledefrance.fr/api/records/1.0/search/?dataset=cueillettes-a-la-ferme-en-ile-de-france&q=")

promise01
    .then((reponse) => {
        console.log(reponse);

        const pickersData = reponse.json();

        console.log(pickersData);

        pickersData.then((reponse2) => {
            console.log(reponse2.records[0]);
            const namee1 = reponse2.records[0].fields.nom; // variables qui stockent les éléments que l'on pointe dans le tableau (les objets)
            const adr1 = reponse2.records[0].fields.adresse; // variable API index 1
            const city1 = reponse2.records[0].fields.commune; //variable API index 1
            const postCode1 = reponse2.records[0].fields.cp;//variable API index 1
            const webPage1 = reponse2.records[0].fields.web;//variable API index 1

            affichageNom1.innerHTML = namee1; //lien entre api sotockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse1.innerHTML = adr1; //index 1
            affichageCP1.innerHTML = postCode1;
            affichageWebsite1.innerHTML = webPage1;

            //---------------------------------------------------------------------------------------------------
            const namee2 = reponse2.records[1].fields.nom; //index2
            const adr2 = reponse2.records[1].fields.adresse;
            const city2 = reponse2.records[1].fields.commune;
            const postCode2 = reponse2.records[1].fields.cp;
            const webPage2 = reponse2.records[1].fields.web;

            affichageNom2.innerHTML = namee2; //lien entre api sotockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse2.innerHTML = adr2; //index 1
            affichageCP2.innerHTML = postCode2;
            affichageWebsite2.innerHTML = webPage2;

            //----------------------------------------------------------------------------------------------------------
            const namee3 = reponse2.records[2].fields.nom; //index3
            const adr3 = reponse2.records[2].fields.adresse;
            const city3 = reponse2.records[2].fields.commune;
            const postCode3 = reponse2.records[2].fields.cp;
            const webPage3 = reponse2.records[2].fields.web;

            affichageNom3.innerHTML = namee3; //lien entre api sotockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse3.innerHTML = adr3; //index 1
            affichageCP3.innerHTML = postCode3;
            affichageWebsite3.innerHTML = webPage3;

            //----------------------------------------------------------

            const namee4 = reponse2.records[3].fields.nom; //index4
            const adr4 = reponse2.records[3].fields.adresse;
            const city4 = reponse2.records[3].fields.commune;
            const postCode4 = reponse2.records[3].fields.cp;
            const webPage4 = reponse2.records[3].fields.web;

            affichageNom4.innerHTML = namee4; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse4.innerHTML = adr4; //index 1
            affichageCP4.innerHTML = postCode4;
            affichageWebsite4.innerHTML = webPage4;

            //---------------------------------------------------------------------

            const namee5 = reponse2.records[4].fields.nom; //index5
            const adr5 = reponse2.records[4].fields.adresse;
            const city5 = reponse2.records[4].fields.commune;
            const postCode5 = reponse2.records[4].fields.cp;
            const webPage5 = reponse2.records[4].fields.web;

            affichageNom5.innerHTML = namee5; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse5.innerHTML = adr5; //index 1
            affichageCP5.innerHTML = postCode5;
            affichageWebsite5.innerHTML = webPage5;
            //--------------------------------------------------------------------

            const namee6 = reponse2.records[5].fields.nom; //index6
            const adr6 = reponse2.records[5].fields.adresse;
            const city6 = reponse2.records[5].fields.commune;
            const postCode6 = reponse2.records[5].fields.cp;
            const webPage6 = reponse2.records[5].fields.web;

            affichageNom6.innerHTML = namee6; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse6.innerHTML = adr6; //index 6
            affichageCP6.innerHTML = postCode6;
            affichageWebsite6.innerHTML = webPage6;

            //--------------------------------------------------------------------------

            const namee7 = reponse2.records[6].fields.nom; //index7
            const adr7 = reponse2.records[6].fields.adresse;
            const city7 = reponse2.records[6].fields.commune;
            const postCode7 = reponse2.records[6].fields.cp;
            const webPage7 = reponse2.records[6].fields.web;

            affichageNom7.innerHTML = namee7; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse7.innerHTML = adr7; //index 7
            affichageCP7.innerHTML = postCode7;
            affichageWebsite7.innerHTML = webPage7;

            //--------------------------------------------------------------------------

            const namee8 = reponse2.records[7].fields.nom; //index8
            const adr8 = reponse2.records[7].fields.adresse;
            const city8 = reponse2.records[7].fields.commune;
            const postCode8 = reponse2.records[7].fields.cp;
            const webPage8 = reponse2.records[7].fields.web;

            affichageNom8.innerHTML = namee8; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse8.innerHTML = adr8; //index 8
            affichageCP8.innerHTML = postCode8;
            affichageWebsite8.innerHTML = webPage8;


            //--------------------------------------------------------------------------------

            const namee9 = reponse2.records[8].fields.nom; //index9
            const adr9 = reponse2.records[8].fields.adresse;
            const city9 = reponse2.records[8].fields.commune;
            const postCode9 = reponse2.records[8].fields.cp;
            const webPage9 = reponse2.records[8].fields.web;

            affichageNom9.innerHTML = namee9; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse9.innerHTML = adr9; //index 9
            affichageCP9.innerHTML = postCode9;
            affichageWebsite9.innerHTML = webPage9;

            //----------------------------------------------------------------------------

            const namee10 = reponse2.records[9].fields.nom; //index10
            const adr10 = reponse2.records[9].fields.adresse;
            const city10 = reponse2.records[9].fields.commune;
            const postCode10 = reponse2.records[9].fields.cp;
            const webPage10 = reponse2.records[9].fields.web;

            affichageNom10.innerHTML = namee10; //lien entre api stockées dans des variables et balises sous HTML données index 1 du tableau de l'API
            affichageAdresse10.innerHTML = adr10; //index 10
            affichageCP10.innerHTML = postCode10;
            affichageWebsite10.innerHTML = webPage10;
        });

    })
    .catch((err) => console.log(err))

//$function(){


//}
