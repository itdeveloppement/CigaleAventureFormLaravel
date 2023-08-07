const showData = {

    init: function() {

        console.log("Module de récupération des données")

        // recuperation des donnéers de la bdd (bulletin et participants)
        fetch(app.baseEndpoint.endpoint)
            .then( function(response) {
                return response.json();
            })
            .then( function($bulletin) {
                showData.extractData($bulletin);
            });
            // condition si erreur ?

            
    },

    // extraction des données
    extractData: function ($bulletin){
        
            // traitement données du bulletin et affichage
            $nomClient = $bulletin.NomTiers;
            document.getElementById("nom1").textContent = $nomClient;
            document.getElementById("nom2").textContent = $nomClient;

            $lieuActivite = $bulletin.session.Lieu_Activite;
            document.getElementById("lieu1").textContent = $lieuActivite;
            document.getElementById("lieu2").textContent = $lieuActivite;

            $activite = $bulletin.session.intitule_custom;
            document.getElementById("activite1").textContent = $activite;
            document.getElementById("activite2").textContent = $activite;

            $dateActivite = $bulletin.session.calendrier.heured;
            document.getElementById("date1").textContent = $dateActivite;       
            document.getElementById("date2").textContent = $dateActivite;       

            // traitement donnée des participants et affichage
            for (const participant of $bulletin.participant) {
                prenom = participant.NomPrenom;
                taille = participant.taille.libelle;
                poid = participant.poid.libelle;
                age = participant.age.libelle;

                showData.createEltParticipant(prenom, taille, poid, age);   
            }
        },

    // creatiopn des elements des participants
    createEltParticipant: function(prenom, taille, poid, age) {
        // creation des elements d'affichage des participants
        const divElt01 = document.createElement("div");
        divElt01.classList.add("div5b");

        const divElt1 = document.createElement("div");
        divElt1.classList.add("div5a");
        const divElt2 = document.createElement("div");
        divElt2.classList.add("champ_participant");
        divElt2.textContent=prenom;

        const divElt3 = document.createElement("div");
        divElt3.classList.add("div5ba");
        const divElt4 = document.createElement("div");
        divElt4.id ="age";
        divElt4.classList.add("champ_participant");
        divElt4.textContent=age;

        const divElt5 = document.createElement("div");
        divElt5.classList.add("div5bb");
        const divElt6 = document.createElement("div");
        divElt6.id ="taille";
        divElt6.classList.add("champ_participant");
        divElt6.textContent=taille;

        const divElt7 = document.createElement("div");
        divElt7.classList.add("div5bc");
        const divElt8 = document.createElement("div");
        divElt8.id ="poids";
        divElt8.classList.add("champ_participant");
        divElt8.textContent=poid;

        //element boutons
        const divElt9 = document.createElement("div");
        divElt9.classList.add("champ_participant");
        divElt9.classList.add("div5bd");
        const divElt11 = document.createElement("buttom");
        divElt11.classList.add("boutons");
        divElt11.textContent="Mod";

        const divElt12 = document.createElement("div");
        divElt12.classList.add("champ_participant");
        divElt12.classList.add("div5bd");
        const divElt14 = document.createElement("buttom");
        divElt14.classList.add("boutons");
        divElt14.textContent="Sup";

        // Ajout de l'évènement du clic sur le bouton modifier
        // divElt11.addEventListener('click', updateData.handleUpdateParticipant);

        // Ajout de l'évènement du clic sur le bouton supprimer
        // divElt14.addEventListener('click', deleteData.handleDeleteParticipant);

        // hiarchisation des elements
        const formEltPartcipant = document.querySelector("#affichage");
     
        formEltPartcipant.append(divElt01);
        
        divElt01.append(divElt1);
        divElt1.append(divElt2);

        divElt01.append(divElt3);
        divElt3.append(divElt4);

        divElt01.append(divElt5);
        divElt5.append(divElt6);

        divElt01.append(divElt7);
        divElt7.append(divElt8);

        // elements buttons
        divElt01.append(divElt9);
        divElt9.append(divElt11);

        divElt01.append(divElt12);
        divElt12.append(divElt14);

        // return formEltPartcipant;
    },  
    
}
