const showDropDown= {

    init: function() {

        console.log("Module de récupération des données des listes deroulantes")

        // recuperation des données pour la liste deroulante ages
        fetch ('http://localhost:8000/api/dropdown/ages') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownAges){
                showDropDown.dropDownAges(dataDropDownAges);
            });
            // condition si vide = erreur ?


        // recuperation des données pour la liste deroulante tailles
        fetch ('http://localhost:8000/api/dropdown/tailles') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownTailles){
                showDropDown.dropDownTailles(dataDropDownTailles);
            });
            // condition si vide = erreur ?

        // recuperation des données pour la liste deroulante poids
        fetch ('http://localhost:8000/api/dropdown/poids') 
            .then(function(response){
                return response.json();
            })
            .then(function(dataDropDownPoids){
                showDropDown.dropDownPoids(dataDropDownPoids);
            });
            // condition si vide = erreur ?
        
    },

    // creation et affichage du contenue liste ages
    dropDownAges: function (dataDropDownAges){

        const dropDownAges = document.getElementById('dropDownAges');

        dataDropDownAges.forEach(function (ages) {
            const optionElt = document.createElement('option');
            optionElt.value = ages.id;
            optionElt.textContent = ages.libelle;
            dropDownAges.appendChild(optionElt);
        });
    },

    // creation et affichage du contenue liste tailles
    dropDownTailles: function (dataDropDownTailles){

        const dropDownTailles = document.getElementById('dropDownTailles');

        dataDropDownTailles.forEach(function (tailles) {
            const optionElt = document.createElement('option');
            optionElt.value = tailles.id;
            optionElt.textContent = tailles.libelle;
            dropDownTailles.appendChild(optionElt);
        });
    },

    // creation et affichage du contenue liste ages
    dropDownPoids: function (dataDropDownPoids){

        const dropDownPoids = document.getElementById('dropDownPoids');

        dataDropDownPoids.forEach(function (poids) {
            const optionElt = document.createElement('option');
            optionElt.value = poids.id;
            optionElt.textContent = poids.libelle;
            dropDownPoids.appendChild(optionElt);
        });
    },
}
