//Mudar um atributo utilizando o nome do elemento.nomedoatributo

let imagem = document.getElementById('thumbs')

imagem.addEventListener("click", function() {

//Mudar um atributo utilizando nomeDoElemento.nomeDoAtributo
//     if (imagem.src == "https://images.emojiterra.com/google/android-10/512px/1f44e.png") {
//         imagem.src = "https://images.emojiterra.com/google/android-10/512px/1f44d.png"
//     } else {
//         imagem.src = "https://images.emojiterra.com/google/android-10/512px/1f44e.png"
//     }


//Mudar um atributo utilizando o nomeDoElemento.getAttribute() e nomeDoElemento.setAttribute()
    if (imagem.getAttribute("src") == "https://images.emojiterra.com/google/android-10/512px/1f44e.png") {
        imagem.setAttribute("src", "https://images.emojiterra.com/google/android-10/512px/1f44d.png")
    } else {
        imagem.setAttribute("src", "https://images.emojiterra.com/google/android-10/512px/1f44e.png")
    }
})


//Utilizando um atributo inventado
let lista = document.getElementById("lista")

// let num = lista.getAttribute("num")

// for (i = 1; i <= num; i++) {
//     lista.innerHTML += `<li>${i}</li>`
// }


//Utilizando atributo inventado, mas com boas práticas
//Dessa forma, o dataset é capaz de fazer a função de set e get
let lista2 = document.getElementById("lista2")

let num2 = lista2.dataset.num
lista2.dataset.num = 10
let num3 = lista2.dataset.num

for (i = 1; i <= num2; i++) {
    lista2.innerHTML += `<li>${i}</li>`
}

for (i = 1; i <= num3; i++) {
    lista.innerHTML += `<li>${i}</li>`
}