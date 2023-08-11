const showData = {

    init: function() {
        console.log("ok")
        // recuperation des donnéers de la bdd (bulletin et participants)
        fetch(app.baseEndpoint.endpoint)
            .then( function(response) {
                return response.json();
            })
            .then(function(bulletin) {
                console.log(bulletin);
                showData.extractData(bulletin);
                showData.selectDatasParticipant(bulletin);
                
                // return bulletin
            });
            // condition si erreur ?    
    },

    // extraction des données
    extractData: function (bulletin){
        console.log("ok");
   
            // champs non affichés 
           id_participant = bulletin.participant[0].bulletin_id;
           document.getElementById("participant_id1").textContent = id_participant;
           document.getElementById("participant_id2").textContent = id_participant;
       
           id_activite = bulletin.participant[0].activite_id;
           document.getElementById("activite_id1").textContent = id_activite;
           document.getElementById("activite_id2").textContent = id_activite;

            // traitement données du bulletin et affichage
            nomClient = bulletin.NomTiers;
            // ecran 1
            document.getElementById("nom1").textContent = nomClient;
            // ecran 2
            document.getElementById("nom2").textContent = nomClient;

            lieuActivite = bulletin.session.Lieu_Activite;
            document.getElementById("lieu1").textContent = lieuActivite;
            document.getElementById("lieu2").textContent = lieuActivite;

            activite = bulletin.session.intitule_custom;
            document.getElementById("activite1").textContent = activite;
            document.getElementById("activite2").textContent = activite;

            dateActivite = bulletin.session.calendrier.heured;
            document.getElementById("date1").textContent = dateActivite;       
            document.getElementById("date2").textContent = dateActivite;        
        },

        // LISTE DES PARTICIPANTS

    // recupertation des données des champs à afficher
    selectDatasParticipant: function(bulletin) {
        
            for (const participant of bulletin.participant) {
                idBulletin = bulletin.id;
                idParticipant = participant.id;
                prenom = participant.NomPrenom;
                taille = participant.taille.libelle;
                poid = participant.poid.libelle;
                age = participant.age.libelle;
              
                showData.createEltParticipant(idParticipant, idBulletin, prenom, taille, poid, age);
            }
        },

    // creation des elements des participants et remplissage des champs
    createEltParticipant: function(idParticipant, idBulletin, prenom, taille, poid, age) {

        // creation des elements d'affichage des participants
        const divElt01 = document.createElement("div");
        divElt01.classList.add("div5b");

        const divElt1 = document.createElement("div");
        divElt1.classList.add("div5a");
        const divElt2 = document.createElement("div");
        divElt2.classList.add("champ_participant");
        divElt2.textContent = prenom;

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
        divElt11.textContent="Modifier";
        divElt11.id = "ouvrirModal";

        
        // pose ecouteur evenement bouton modale ouverture
        divElt9.addEventListener("click", function() {
            showData.openModal(idParticipant, idBulletin);
            
        })
        
        // hiarchisation des elements du DOM pour la liste des participants
        const formEltPartcipant = document.querySelector("div.affichageParticipant");
     
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
    },  

    // GESTION DE LA MODALE

    // recuperation des donnée du participant en cours ds la modal
    dataParticipantModal: function (idParticipant, idBulletin){
        
    
        // recuperation des données de la base de donnée
        bulletin = idBulletin;
        participant = idParticipant;

        fetch(`http://localhost:8000/api/inscriptions/bulletin/${bulletin}/participant/${participant}`,)       
            .then( function(response) {
                return response.json();
            })
            .then( function(objetParticipant) {
                showData.extractDataParticipantModal(objetParticipant, idParticipant, idBulletin);
            });
    },

    // extration des données
    extractDataParticipantModal: function (participant, idParticipant, idBulletin) {

        prenom = participant.NomPrenom;
        age = participant.age_id;
        taille = participant.taille_id;
        poid = participant.poid_id;

        showData.createEltParticipantModal(prenom, age, taille, poid, idParticipant, idBulletin);

    },

    // creation des elements du dom pour la modale pour un participant
    createEltParticipantModal: function(prenom, age, taille, poid, idParticipant, idBulletin) {

        // creation des elements d'affichage des participants
        const divElt01 = document.createElement("div");
        divElt01.classList.add("div5bModal");
        
        // champ prenom
        const divElt1 = document.createElement("div");
        divElt1.classList.add("div5a");
        
        const divElt2 = document.createElement("div");
        divElt2.classList.add("champ_participant");
              
        const divElt2M = document.createElement("input");
            divElt2M.type = "text";
            divElt2M.id = "prenom";
            divElt2M.name = "prenom";
            divElt2M.placeholder="Prenom";
            divElt2M.value = prenom;

        // champ age
        const divElt3 = document.createElement("div");
        divElt3.classList.add("div5ba");
        
        const divElt4 = document.createElement("div");
        divElt4.classList.add("champ_participant");

        const divElt4s = document.createElement("select");
            divElt4s.type = "text";
            divElt4s.id = "dropDownAges";
            divElt4s.name = "ages";
          
        // champs taille
        const divElt5 = document.createElement("div");
        divElt5.classList.add("div5bb");
        
        const divElt6 = document.createElement("div");
        divElt6.classList.add("champ_participant");

        const divElt6s = document.createElement("select");
            divElt6s.type = "text";
            divElt6s.id = "dropDownTailles";
            divElt6s.name = "tailles";

        // champs poids
        const divElt7 = document.createElement("div");
        divElt7.classList.add("div5bc");
        
        const divElt8 = document.createElement("div");
        divElt8.classList.add("champ_participant");

        const divElt8s = document.createElement("select");
            divElt8s.type = "text";
            divElt8s.id = "dropDownPoids";
            divElt8s.name = "poids";

        // boutons fermer
            
        const divElt12 = document.createElement("div");
        divElt12.classList.add("champ_participant");
        divElt12.classList.add("div5bd");

        const divElt13 = document.createElement("buttom");
        divElt13.classList.add("boutons");
        divElt13.id = "fermerModal";
        divElt13.textContent = "Fermer";

        // boutons valider
        const divElt9 = document.createElement("div");
        divElt9.classList.add("champ_participant");
        divElt9.classList.add("div5bd");
        
        const divElt11 = document.createElement("buttom");
        divElt11.classList.add("boutons");
        divElt11.textContent = "Valider";

        // ecouteur evenement sur btm valider
        divElt9.addEventListener('click', function(){
            showData.valueChampsModal(idParticipant, idBulletin);
         });
        
        // hiarchisation des elements du dom
        const formEltPartcipant = document.querySelector("#affichageParticipant2");
        
        formEltPartcipant.append(divElt01);

         // buton fermer
        divElt01.append(divElt12);
        divElt12.append(divElt13);

        // champ prenom
        divElt01.append(divElt1);
        divElt1.append(divElt2);
        divElt2.append(divElt2M);

        // chazmp ages
        divElt01.append(divElt3);
        divElt3.append(divElt4);
        divElt4.append(divElt4s);
     
        // champ tailles
        divElt01.append(divElt5);
        divElt5.append(divElt6);
        divElt6.append(divElt6s);

      
        // champ poids
        divElt01.append(divElt7);
        divElt7.append(divElt8);
        divElt8.append(divElt8s);

        // elements buttons valider
        divElt01.append(divElt9);
        divElt9.append(divElt11);

        // affichage des données des listes
        showDropDown.init(age, taille, poid);

        // ecouteur element sur btm fermer modal
        const fermerModal = document.getElementById("fermerModal");
        fermerModal.addEventListener("click", function() {
            modal.classList.remove("active");
            showData.deleteEltModal();
        });
        
    },  

    closeModal: function() {
        modalElt = document.getElementById('modal');
        modalEltclassList.remove("active");
    },

    deleteEltModal: function () {
        // supression du dom affichage participant ds la modale
        eltDomDelete = document.querySelector("#affichageParticipant2 .div5bModal");
        eltDomDelete.remove(); 
    },

    openModal: function(idParticipant, idBulletin) {
        const modal = document.getElementById("modal");
        modal.classList.add("active");
        showData.dataParticipantModal(idParticipant, idBulletin);

        // NE FONCTIONNE PAS supression ecouteur sur bouton moidifer
        // suppression des ecouteur tant que la modale est ouverte. 
            // divElt11 = document.querySelector('.div5bd');
            // divElt11.removeEventListener('click', showData.openModal);
      
        },

    // recuperation des valeurs des champs
    valueChampsModal: function(idParticipant, idBulletin) {
    const name = document.getElementById('prenom').value;
    const age = document.getElementById('dropDownAges').value;
    const taille = document.getElementById('dropDownTailles').value;
    const poids = document.getElementById('dropDownPoids').value;

   showData.updateParticipant(idParticipant, idBulletin, name, age, taille, poids);

    },
    // envoi des donnée à la bbd
    updateParticipant: async function (idParticipant, idBulletin, name, age, taille, poids){

        console.log(idBulletin, idParticipant);
            

            // envoi des donnée a la base
            const response = await fetch(`http://localhost:8000/api/inscriptions/bulletin/${idBulletin}/participant/${idParticipant}`, 
            { 
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                {
                    prenom: name,
                    ages: age,
                    tailles: poids,
                    poids: taille,
                })
            }
        );
        const participant = await response.json();
        return participant;
        
        // showData.init();
        // showData.closeModal();
        }


    
}

