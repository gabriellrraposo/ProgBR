
// let criaEventListenerBotao = function() {
//     botao = document.getElementsByTagName("button")[0]
//     botao.addEventListener("click", criaH3)
    
//     let criaH3 = function() {
//         let main = document.getElementsByTagName("main")[0]
//         main.innerHTML = main.innerHTML + `<h3></h3>`
//         main.style.fontSize = "1.4rem"
//     }
    
//     botao.removeEventListener("click", criaH3)
// }

// let sorteiaNumero = function() {
//     let numeroSorteado = Math.round(Math.random() * 100)
//     let main = document.getElementsByTagName("main")[0]

//     main.children[1].innerHTML = numeroSorteado
//     console.log(numeroSorteado)
//     return numeroSorteado
// }

let sorteiaNumero = function() {
    pessoas = ["Igor", "José", "Tainá", "Gabriella", "Astolfo", "Rodrigo", "Marta", "Alex"]
    
    let numeroDePessoas = pessoas.length
    let numeroSorteado = Math.floor(Math.random() * numeroDePessoas)
    console.log(numeroSorteado)

    let resultado = document.getElementById("numeroSorteado")
    resultado.innerText = `${numeroSorteado} - ${pessoas[numeroSorteado]}`
}

