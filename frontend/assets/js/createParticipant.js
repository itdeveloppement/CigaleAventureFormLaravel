const createParticipant = {

init: function() {

    // ecouteur evenmenet sur buuton ajouter    
    const btmAdd = document.getElementById('btmAdd');
    btmAdd.addEventListener('click', createParticipant.createPart);
},

createPart: function(event) {
    // empeche la page de se recharger
    event.preventDefault();
    console.log(event.target);

    // recup des inputs
    const name = document.getElementById('prenom').value;
    const age = document.getElementById('dropDownAges').value;
    const taille = document.getElementById('dropDownTailles').value;
    const poids = document.getElementById('dropDownPoids').value;

    // appel de la methode d'insertion des donnes ds la bdd
    createParticipant.creatBddData(name, age, taille, poids);
},

creatBddData: async function(name, age, taille, poids) {

    // envoi des informations à la bdd
    const response = await fetch(app.baseEndpoint.endpoint2, 
        { 
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prenom: name,
                ages: age,
                poids: poids,
                tailles: taille,
            })
        }
    );
    const participant = await response.json();
    console.log(participant);



    prenom = participant.NomPrenom;
    taille = participant.taille_id;
    poids = participant.poid_id;
    age = participant.age_id;

    showData.init();
    // return participant;
    },

}

// dinamyser les menu deroulantsok 
// ecouteur evenement sur le bouron ajouter


// recuperation des données dans l'input nom
    // getelementbyid(...).value

// recup les donnée dans liste deroulante age -> celui qui est  selectionné
    // getelementbyid(...).selected
    // idem pour les autre listes

// envoie des données à la bdd
    //fetch et recup retour validation insertion

// a faire
    // recueperer les données id bulletin, id activite et nom du client et les transmettre au moment de l'ajout ds la base
    // transofrmer tms en update at
    // foir pour la question des accend dans la bse qui ne sont pas reconnue

// affichage des données dans la liste des participants

// effacer les donnée des champs ajouts

