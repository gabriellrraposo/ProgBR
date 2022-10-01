let resposta = prompt('Digite seu nome:')

let idade = parseInt(prompt("Digite sua idade:"))
try {
    if (idade < -1) {
        throw "A idade não pode ser negativa"
    }
}
catch(err) {
    console.log('Houve um erro! ' + err)
}
