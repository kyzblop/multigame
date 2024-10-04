var votreMain;
var mainAdverse;
var resultat;

function choixAdverse(){
    let n = Math.round(Math.random() * 2)

    if(n == 0){
        mainAdverse = "pierre"
        document.getElementById("img_point_intero").setAttribute("src", "PFC/images/pierre.jpg") 
    } else if(n == 1){
        mainAdverse = "feuille"
        document.getElementById("img_point_intero").setAttribute("src", "PFC/images/feuille.jpg") 
    } else if(n == 2){
        mainAdverse = "ciseaux"
        document.getElementById("img_point_intero").setAttribute("src", "PFC/images/ciseaux.jpg") 
    }

}

// Quand on joue pierre
document.getElementById("pierre").addEventListener("click", () => {
    votreMain = "pierre"
    choixAdverse()

    switch(mainAdverse){
        case 'pierre':
            resultat = "Egalité"
        break;

        case 'feuille':
            resultat = "Vous avez perdu !"
        break;

        case 'ciseaux':
            resultat = "Vous avez gagné !"
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
})

// Quand on joue feuille
document.getElementById("feuille").addEventListener("click", () => {
    votreMain = "feuille"
    choixAdverse()

    switch(mainAdverse){
        case 'pierre':
            resultat = "Vous avez gagné !"
        break;

        case 'feuille':
            resultat = "Egalité"
        break;

        case 'ciseaux':
            resultat = "Vous avez perdu !"
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
})

// Quand on joue ciesaux
document.getElementById("ciseaux").addEventListener("click", () => {
    votreMain = "ciseaux"
    choixAdverse()

    switch(mainAdverse){
        case 'pierre':
            resultat = "Vous avez perdu !"
        break;

        case 'feuille':
            resultat = "Vous avez gagné !"
        break;

        case 'ciseaux':
            resultat = "Egalité"
        break;
    }

    document.getElementById("resultat").innerHTML = resultat
})
