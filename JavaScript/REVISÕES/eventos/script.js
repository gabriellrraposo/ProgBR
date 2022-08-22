let btn = document.getElementById("botao1")

let colocaTexto = function(input) {
    let texto = document.getElementById('texto')

    texto.innerText = input.value
}

let digitaTexto = function(input) {
    let texto = document.getElementById('texto2')

    texto.innerText = input.value
}

let mudaFundo = function() {
    btn.style.backgroundColor = "red"
}

let mudaTexto = function() {
    btn.innerText = "Isso é um botão"
}

let deixaMaiuscula = function() {
    btn.style.textTransform = "uppercase"
}

btn.dblclick = deixaMaiuscula
btn.addEventListener("mouseover", mudaFundo)


function f(e) {
    console.log("teste")
    console.log(e)
}

function f1(e) {
    console.log("teste 1")
    console.log(e)
    console.log(e.target)
}

window.onload = function () {
    let h1 = document.getElementById('texto1')

    h1.addEventListener('click', f1)
}