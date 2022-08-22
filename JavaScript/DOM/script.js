//Adicionando um elemento com JS

// console.log(document.body.innerHTML)
// document.body.innerHTML = "<h1>Esse é um texto inserido com JS</h1>" + document.body.innerHTML
// console.log(document.body.innerHTML)


let p1 = document.getElementById("p1")
console.log(p1)
let paragrafos = document.getElementsByClassName("paragrafo")
console.log(paragrafos)

for (let p of paragrafos) {
    console.log(p)
}

document.body.innerHTML = "<h1>Isso é outro h1 criado em JS</h1>" + document.body.innerHTML

let todosH1 = document.getElementsByTagName("h1")
console.log(todosH1)