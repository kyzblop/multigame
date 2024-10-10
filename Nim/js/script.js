var votreTour = true;
var nbBatons = (Math.random() * 3) + 20;
var contener = document.getElementById("nimBatons")


window.addEventListener("load", () => {
    for(i=0; i<nbBatons; i++){
        contener.innerHTML +=
        "<img src='images/alumette_preview_rev_1.png' alt='img_batonnet'>"
    }

    
})



