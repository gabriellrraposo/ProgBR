let adicionaNotasNoArray = (array, nota1, nota2, nota3) => {
    // setTimeout(() => {
        array.push(nota1)
        array.push(nota2)
        array.push(nota3)
    // }, 1000);
}

let calculaMediaDoArray = (array) => {
    let soma = 0
    for (let i of array) {
        soma += i
    }
    console.log(soma / 3)
}

let nota1 = document.getElementById('nota1').value
let nota2 = document.getElementById('nota2').value
let nota3 = document.getElementById('nota3').value
let enviar = document.getElementById('enviar')

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

let notas = []

    let tratamentoDeErros = (nota1, nota2, nota3) => {
        let promise = new Promise((resolve, reject) => {
            if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
                reject({msg: "Só é permitida a entrada de valores positivos"})
            } else if (typeof(nota1) != 'number' || typeof(nota2) != 'number' || typeof(nota3) != 'number') {
                reject({msg: "Só é permitida a entrada de valores numéricos."})
            } else {
                resolve()
            }
        })
        return promise
    }


tratamentoDeErros(nota1, nota2, nota3)
.then(adicionaNotasNoArray(notas, nota1, nota2, nota3))
.then(calculaMediaDoArray(notas))
.catch((error) => {
    console.log(error)
})



