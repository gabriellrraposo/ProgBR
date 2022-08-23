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



