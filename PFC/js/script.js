let votreMain;
let mainAdverse;
let resultat;

let ptJoueur = 0;
let ptOrdi = 0;

let nbPJoueur = 0;
let nbFJoueur = 0;
let nbCJoueur = 0;

let probaJoueurP = 0;
let probaJoueurF = 0;
let probaJoueurC = 0;

let probaOrdiP = 0;
let probaOrdiF = 0;
let probaOrdiC = 0;

let nbMain = 0;

function choixAdverse(){
    let n = Math.floor(Math.random() * 3)
    
    if(nbMain == 0){
        if(n == 0){
            mainAdverse = "pierre"
            document.getElementById("img_point_intero").setAttribute("src", "images/pierre.jpg") 
        } else if(n == 1){
            mainAdverse = "feuille"
            document.getElementById("img_point_intero").setAttribute("src", "images/feuille.jpg") 
        } else if(n == 2) {
            mainAdverse = "ciseaux"
            document.getElementById("img_point_intero").setAttribute("src", "images/ciseaux.jpg") 
        }

    } else {
        // Calcul de la probabilité du joueur à faire P, F ou C selon ses mains précédentes
        probaJoueurP = nbPJoueur / nbMain;
        probaJoueurF = nbFJoueur / nbMain;
        probaJoueurC = nbCJoueur / nbMain;

        // La proba que le joueur fasse une mains est celle que l'ordi fasse celle qui le bat
        probaOrdiP = probaJoueurC;
        probaOrdiF = probaJoueurP;
        probaOrdiC = probaJoueurF;

        n = Math.random();

        if(n < probaOrdiP){
            mainAdverse = "pierre"
            document.getElementById("img_point_intero").setAttribute("src", "images/pierre.jpg") 
        } else if(n < probaOrdiP + probaOrdiF){
            mainAdverse = "feuille"
            document.getElementById("img_point_intero").setAttribute("src", "images/feuille.jpg") 
        } else {
            mainAdverse = "ciseaux"
            document.getElementById("img_point_intero").setAttribute("src", "images/ciseaux.jpg") 
        }
    }
}

// Quand on joue pierre
document.getElementById("pierre").addEventListener("click", () => {
    votreMain = "pierre"
    choixAdverse()
    nbPJoueur += 1;
    nbMain += 1;

    switch(mainAdverse){
        case 'pierre':
            resultat = "Egalité"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_croix.png")
            document.getElementById("messageRobot").innerHTML =  "Pareil !"
        break;

        case 'feuille':
            resultat = "Vous avez perdu !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_moqueur.png")
            document.getElementById("messageRobot").innerHTML =  "Loser !"
            ptOrdi += 1;
        break;

        case 'ciseaux':
            resultat = "Vous avez gagné !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_enerve.png")
            document.getElementById("messageRobot").innerHTML =  "Je vais t'avoir !"
            ptJoueur += 1;
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
    document.getElementById("scoreJoueur").innerHTML = ptJoueur
    document.getElementById("scoreOrdi").innerHTML = ptOrdi
})

// Quand on joue feuille
document.getElementById("feuille").addEventListener("click", () => {
    votreMain = "feuille"
    choixAdverse()
    nbFJoueur += 1;
    nbMain += 1;

    switch(mainAdverse){
        case 'pierre':
            resultat = "Vous avez gagné !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_enerve.png")
            document.getElementById("messageRobot").innerHTML =  "Je vais t'avoir !"
            ptJoueur += 1;
        break;

        case 'feuille':
            resultat = "Egalité"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_croix.png")
            document.getElementById("messageRobot").innerHTML =  "Pareil !"
        break;

        case 'ciseaux':
            resultat = "Vous avez perdu !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_moqueur.png")
            document.getElementById("messageRobot").innerHTML =  "Loser !"
            ptOrdi += 1;
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
    document.getElementById("scoreJoueur").innerHTML = ptJoueur
    document.getElementById("scoreOrdi").innerHTML = ptOrdi
})

// Quand on joue ciesaux
document.getElementById("ciseaux").addEventListener("click", () => {
    votreMain = "ciseaux"
    choixAdverse()
    nbCJoueur += 1;
    nbMain += 1;

    switch(mainAdverse){
        case 'pierre':
            resultat = "Vous avez perdu !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_moqueur.png")
            document.getElementById("messageRobot").innerHTML =  "Loser !"
            ptOrdi += 1;
        break;

        case 'feuille':
            resultat = "Vous avez gagné !"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_enerve.png")
            document.getElementById("messageRobot").innerHTML =  "Je vais t'avoir !"
            ptJoueur += 1;
        break;

        case 'ciseaux':
            resultat = "Egalité"
            document.getElementById("imgRobot").setAttribute("src", "/multigame/Main/images/robot/robot_croix.png")
            document.getElementById("messageRobot").innerHTML =  "Pareil !"
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
    document.getElementById("scoreJoueur").innerHTML = ptJoueur
    document.getElementById("scoreOrdi").innerHTML = ptOrdi
})
