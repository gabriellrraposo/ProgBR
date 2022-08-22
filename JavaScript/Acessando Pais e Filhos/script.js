window.onload = function() {
    let d1 = document.getElementById("d1")
    let h1 = d1.children[0]
    console.log(h1)
    console.log(h1.parentElement)
    console.log(document.body.children[2])


    //////
    
    let mostrarPai = function(e) {
        elementoPai = e.target.parentElement
        elementoPai.style.border = "solid 1px black"
        console.log(elementoPai)
        return elementoPai
    }

    let titulos = document.getElementsByTagName("h1")

    for(let h of titulos) {
        console.log(h)
        h.addEventListener("click", mostrarPai) 
    }
}

