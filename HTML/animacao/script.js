let quadrado = document.getElementsByClassName('quadrado')[0]

let xInicial = 0
let yInicial = 0

let moverJogadorPara = function (x, y) {
    let posX = x + "px"
    let posY = y + "px"
    
    quadrado.style.top = posY
    quadrado.style.left = posX
}

setInterval(function () {
    moverJogadorPara(xInicial++, yInicial++)
}, 25)