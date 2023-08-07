
<?php include "template/header.php"; ?>

<body>


    <div class="container">


        <div class="image_montagne" >
            
            <img class="image_logo" src="assets/images/CigAve_bandeau.png" alt="image de montagnes et vallées">
            <a class="text_faq" href="">F.A.Q</a>

        </div>

        <div class="text_presentation">
             
                <span class="text_presentation1">Merci de <span class="text_presentation_vert">remplir pour chaque participant</span> le prénom, l'age, la taille, le poids,  puis cliquer sur envoyer.</span>
            
        </div>
            
        <div class="text_titre_ecran1">Votre activité</div>

            <!-- donnée provenant de la BDD / affichage sur ecran 1 inf a 700px-->

                <div class="box_activite_ecran1" >
                    <div id="nom1" class="intitule1"></div>
                    <div id="date1" class="intitule1"></div>
                    <div id="activite1" class="intitule1"></div>
                    <div id="lieu1" class="intitule1"></div>
                </div>

            <!-- donnée provenant BDD / affichage sur ecran 2 sup à 700px-->

                <div class="box_activite_ecran2" >
                    <div id="nom2"class="intitule2 nom1"></div>
                    <div id="date2" class="intitule2"></div>
                    <div id="activite2" class="intitule2"></div>
                    <div id="lieu2" class="intitule2"></div>
                </div>

                
                <!-- FORMULAIRE D AJOUT -->

        <form action="page.html" method="post">

            <!-- modification BDD / affichage sur tous les ecrans-->
        
            <!-- variable -->
                    
                <div class="text_titre_ecran1 text_titre_ecran1">Ajouter un participant2</div>
                                
                <div class="div5b">

                    <div class="div5a">
                        <!-- <div class="intitule4">Prénom</div> -->
                        <div class="champ_participant"><input type="text" id="prenom" name="prenom" placeholder="Prenom"></div>
                    </div>

                    <div class="div5ba">
                        <!-- <div class="intitule4">Age</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownAges" name="ages">
                                <option value="- choisir -">- Ages -</option>
                            </select>  
                        </div>
                    </div>

                    <div class="div5bb">
                        <!-- <div class="intitule4">Taille</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownTailles" name="tailles">
                                <option value="- choisir -"> - Tailles - </option>
                        </select>
                        </div>
                    </div>

                    <div class="div5bc">
                        <!-- <div class="intitule4">Poids</div> -->
                        <div class="champ_participant"><select type="text" id="dropDownPoids" name="Poids">
                        option value="- choisir -">- choisir -</option>
                                <option value="- choisir -">- Poids -</option>
                        </select>
                        </div>
                    </div> 

                    <!-- bouton de supression ou modification d'un participant -->

                    <div id="btmAdd" class="div5bd">    
                        <div class="champ_participant">
                            <buttom  class="boutons">Ajouter</buttom>
                        </div>
                    </div> 
                </div>
        </form>

          
            <!-- FORMULAIRE D'AFFICHAGE -->
        
     <form action="page.html" method="post">

        <div class="text_titre_ecran2">liste des participants2</div>
        <!--  modification BDD / affichage sur tous les ecrans   -->
        <div class="text_titre_ecran">Participant1</div>
                
        <div id="affichage">
        <!--
                <div  class="div5b">
                     <div class="div5a">
                        <div class="champ_participant"></div>
                    </div>
                    <div class="div5ba">
                        <div id="age" class="champ_participant"></div>
                    </div>
                    <div class="div5bb">
                        <div id="taille" class="champ_participant"></div>
                    </div>
                    <div class="div5bc">
                        <div id="poids" class="champ_participant"></div>
                    </div> 
                   bouton de supression ou modification d'un participant   
                    <div id="boutonMod" class="div5bd champ_participant">                    
                         <buttom class="boutons">Mod</buttom>   
                    </div>  
                    <div id="boutonSup"class="div5bd champ_participant">
                            <buttom class="boutons">Sup</buttom>    
                    </div> 
                </div>    
                -->
        </div>
    </form>

        <div>
                <buttom class="bouton_envoyer">Envoyer</buttom>
                <?php include "template/footer.php"; ?>
        </div>
</body>

        
        <script src="../assets/js/showData.js"></script>
        <script src="../assets/js/createParticipant.js"></script>
        <script src="../assets/js/showDropDown.js"></script>
        <script src="../assets/js/app.js"></script>
</html>