let change = function(input) {
    let h1 = document.getElementsByTagName("h1")[0]
    // let input = document.getElementsByTagName("input")[0]
    h1.innerText = input.value
}

let hideH1 = function() {
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display = "none"
}

let mudarTexto = function() {
    this.innerHTML = "Novo texto"
}

let mudarCor = function() {
    this.style.color = "red"
}

let t = document.getElementById("titulo")
t.onclick = mudarTexto
// t.addEventListener("click", mudarTexto)
t.addEventListener("mouseover", mudarCor)

