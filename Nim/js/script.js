let nbBatons = Math.floor(Math.random() * 3) + 20;
let contener = document.getElementById("nimBatons")
let nbBatonEnleve = 0;
let nbBatonEnleveAdverse = 0;

let textAdvsersaire = document.getElementById("nimAdvserse")

function jouer(){

    // Verifier la victoire
    if(nbBatons == 1){
        document.getElementById("victoire").style.display = "block"
    }

    // Cacher les elements du joueur
    document.getElementById("enleverBatonnet").hidden = true;
    document.getElementById("aVousJouer").hidden = true;
    document.getElementById("passerMain").hidden = true;


    // L'adversaire reflechit
    document.getElementById("nimAdverse").hidden = false;
    document.getElementById("nimAdverse").innerHTML = `<p id="nimAdverse">L'adversaire reflechit</p>`

    setTimeout(function() {
        document.getElementById("nimAdverse").innerHTML = 
            `<p id="nimAdverse">L'adversaire reflechit .</p>`
    }, 1000)

    setTimeout(function() {
        document.getElementById("nimAdverse").innerHTML = 
            `<p id="nimAdverse">L'adversaire reflechit . .</p>`
    }, 2000)

    setTimeout(function() {
        document.getElementById("nimAdverse").innerHTML = 
            `<p id="nimAdverse">L'adversaire reflechit . . .</p>`
    }, 3000)
    
    // Affichage des elements du joueur et cache des elements de l'adversaire
    setTimeout(function() {
        document.getElementById("enleverBatonnet").hidden = false;
        document.getElementById("aVousJouer").hidden = false;
        document.getElementById("passerMain").hidden = false;

        document.getElementById("nimAdverse").hidden = true;
        document.getElementById("nimAdverse").innerHTML = 
            `<p id="nimAdverse">L'adversaire reflechit</p>`

        // Jeu de l'adversaire, s'il peut gagner il gagne, sinon c'est aléatoire
        if(nbBatons<=4){
            nbBatonEnleveAdverse = nbBatons -1;
        } else {
            nbBatonEnleveAdverse = Math.floor(Math.random() * 3) +1;
        }

        console.log("Adversaire enleve " + nbBatonEnleveAdverse)
        for(j=0; j<nbBatonEnleveAdverse; j++){
        document.getElementById(`bat${nbBatons-1}`).hidden = true;
        nbBatons --;
        console.log(nbBatonEnleveAdverse)

    }
    }, 4000)

    // Reset du nombre de baton enlevé par le joueur
    nbBatonEnleve = 0;
}

// Affichage d'un nombre aléatoire de batonnet au chargement de la page
window.addEventListener("load", () => {
    for(i=0; i<nbBatons; i++){
        contener.innerHTML +=
        `<img src='images/alumette_preview_rev_1.png' alt='img_batonnet' id="bat${i}">`
    }
})

document.getElementById("enleverBatonnet").addEventListener("click", () => {
    
    // Verification de defaite
    if(nbBatons == 1){
        document.getElementById("defaite").style.display = "block"
    }
    
    document.getElementById(`bat${nbBatons-1}`).hidden = true;
    nbBatons --;
    nbBatonEnleve += 1;
    console.log(nbBatonEnleve)

    if(nbBatonEnleve == 3){
        jouer()
    }
})

// Passer la main à l'adversaire
document.getElementById("passerMain").addEventListener("click", () => {
    if(nbBatonEnleve==0){
        document.getElementById("errorAucunBaton").style.display = "block"
    } else {
        jouer()
    }
})

// Quitter les écrans de victoire, defaite et erreur
document.getElementById("victoire").addEventListener("click", () => {
    document.getElementById("victoire").style.display = "none";
    window.location.reload()
})

document.getElementById("defaite").addEventListener("click", () => {
    document.getElementById("defaite").style.display = "none";
    window.location.reload()
})

document.getElementById("errorAucunBaton").addEventListener("click", () => {
    document.getElementById("errorAucunBaton").style.display = "none";
})
