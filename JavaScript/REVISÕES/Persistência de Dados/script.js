let h1 = document.getElementsByTagName('h1')[0]

let trocaTexto = function () {
    h1.innerText = "Texto trocado"
}

let voltaTexto = function () {
    h1.innerHTML = localStorage.getItem("texto")
}

let modificaTexto = function (element) {
    
    h1.innerText = element.value
    texto = h1.innerText
    localStorage.setItem("texto", texto)
}

h1.addEventListener("click", trocaTexto)
h1.addEventListener("dblclick", voltaTexto)
