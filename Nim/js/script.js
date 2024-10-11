let nbBatons = Math.floor(Math.random() * 3) + 20;
let contener = document.getElementById("nimBatons")
let nbBatonEnleve = 0;
let nbBatonEnleveAdverse = 0;

let textAdvsersaire = document.getElementById("nimAdvserse")

document.getElementById("nimAdverse").hidden = true;

function jouer(){

    // Verifier la victoire
    if(nbBatons == 1){
        alert("Vous avez gagné !")
        window.location.reload()
    }

    // Cacher les elements du joueur
    document.getElementById("enleverBatonnet").hidden = true;
    document.getElementById("aVousJouer").hidden = true;
    document.getElementById("passerMain").hidden = true;

    // Montrer l'element de l'adversaire
    document.getElementById("nimAdverse").hidden = false;

    // L'adversaire reflechit
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


window.addEventListener("load", () => {
    for(i=0; i<nbBatons; i++){
        contener.innerHTML +=
        `<img src='images/alumette_preview_rev_1.png' alt='img_batonnet' id="bat${i}">`
    }
})

document.getElementById("enleverBatonnet").addEventListener("click", () => {
    
    if(nbBatons == 1){
        alert("Vous avez perdu")
        window.location.reload()
    }
    
    document.getElementById(`bat${nbBatons-1}`).hidden = true;
    nbBatons --;
    nbBatonEnleve += 1;
    console.log(nbBatonEnleve)

    if(nbBatonEnleve == 3){
        jouer()
    }
})

document.getElementById("passerMain").addEventListener("click", () => {
    if(nbBatonEnleve==0){
        alert("Veuillez enlever au moins un batonnet")
    } else {
        jouer()
    }
})
