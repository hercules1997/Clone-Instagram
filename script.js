let imagem = document.getElementById("insta2")

function insta2() {
    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    } 
    else {
        imagem.style.opacity = 0
    } 

}

setInterval(function () {
    insta2()
}, 2000);