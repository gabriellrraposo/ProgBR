// localStorage.setItem("nome", "Gabriel")

// let item = localStorage.getItem("nome")

// localStorage.removeItem("nome")


// onload = function() {
//     let nome = localStorage.getItem("nome")
//     let h1 = document.getElementById("nome")
//     h1.innerHTML = nome
// }

// function atualizar(elemento) {
//     let valor = elemento.value

//     let h1 = document.getElementById("nome")
//     h1.innerHTML = valor

//     localStorage.setItem("nome", valor)
// }


// let a = {nome: "Gabriel", nota: 7.4}

// localStorage.setItem("aluno", JSON.stringify(a))

let a = localStorage.getItem("aluno")
console.log(JSON.parse(a))

localStorage.clear() 