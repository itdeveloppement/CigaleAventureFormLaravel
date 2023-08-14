const app = {

    baseEndpoint: {
        endpoint: ' ',
        // endpoint2: 'http://localhost:8000/api/inscriptions',
        },

// appel des fonction a l'ouverture du document
init: function() {

    const id = document.location.pathname.split('/').pop(); // Récupère le dernier segment de l'URL
    console.log(id);
     console.log("test entree");
    var currentUrl = window.location.href;
    // console.log(currentUrl);
    showData.init(id);
 
}

}
// a l'ouverture appel de la fonction init
document.addEventListener('DOMContentLoaded', app.init);