const app = {


    baseEndpoint: {
        endpoint: 'http://localhost:8000/api/inscriptions/1',
        // endpoint2: 'http://localhost:8000/api/inscriptions',
        },

// appel des fonction a l'ouverture du document
init: function() {
    showData.init();
   
    
}

}
// a l'ouverture appel de la fonction init
document.addEventListener('DOMContentLoaded', app.init);