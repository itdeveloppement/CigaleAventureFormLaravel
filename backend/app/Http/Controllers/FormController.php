<?php 

namespace App\Http\Controllers;
use App\Models\Bulletin;
use App\Models\Participant;
use Illuminate\Http\Request;

class FormController extends Controller
{

/**
     * methode pour recuperer une tache avec la session et le calendrier
     *
     * @return $bulletin | erreur404 si $bulletin est null
     * @param $id
     */
     public function bull($id)
     {
         $bulletin = Bulletin::find($id)->load(
            'session.calendrier', 
            'participant.taille', 
            'participant.poid',
            'participant.age'
        );    
 
         if($bulletin === null) {
             return response(null, 404);
         }
         return $bulletin;  
     }

     /**
      * methode pour ajouter un participant
      */
     public function addParticipant(Request $request)
     {
         // recup des données de l'url
         $bulletin_id = $request->input('bulletin_id');
         $activite_id = $request->input('activite_id');
         $name = $request->input('prenom');
         $age = $request->input('ages');
         $taille = $request->input('poids');
         $poids = $request->input('tailles');
 
         // instentiation du model
         $participant = new Participant();
 
         // mise a jour des propiétés
         $participant->bulletin_id = $bulletin_id;
         $participant->activite_id = $activite_id;
         $participant->NomPrenom = $name;
         $participant->age_id = $age;
         $participant->poid_id = $taille;
         $participant->taille_id = $poids;
         
         // verification. Si les données sont sauvegarder retour code 201 sinon 500
         if($participant->save()) {
             return response()->json($participant, 201);
         } else {
             return response()->json($participant, 500);
         }
     }
}





