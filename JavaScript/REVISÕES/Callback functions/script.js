let nota1 = document.getElementById('nota1').value
let nota2 = document.getElementById('nota2').value
let nota3 = document.getElementById('nota3').value
let enviar = document.getElementById('enviar')

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

let notas = []

let adicionaNotasNoArray = (array, nota1, nota2, nota3, callback) => {
    setTimeout(() => {
        array.push(nota1)
        array.push(nota2)
        array.push(nota3)
        callback(array)
    }, 1000);
}

let calculaMediaDoArray = (array) => {
    let soma = 0
    for (let i of array) {
        soma += i
    }
    console.log(soma / 3)
}

adicionaNotasNoArray(notas, nota1, nota2, nota3, calculaMediaDoArray)