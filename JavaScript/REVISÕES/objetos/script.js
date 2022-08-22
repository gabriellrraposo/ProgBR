let calculaImc = function() {
    return this.peso / (this.altura * this.altura)
}

let criarPessoas = function(nome, idade, sexo, altura, peso) {
    return {
        nome: nome,
        idade: idade,
        sexo: sexo,
        altura: altura,
        peso: peso,
        imc: calculaImc
    }
}

let pessoas = [
    
    pessoa1 = {
        nome: "Gabriel",
        idade: 17,
        sexo: "masc",
        altura: 1.68,
        peso: 55.3,
        imc: calculaImc
    },

    pessoa2 = {
        nome: "Roberta",
        idade: 29,
        sexo: "fem",
        altura: 1.59,
        peso: 58,
        imc: calculaImc
    },

    // CRIANDO PESSOAS
    criarPessoas("Angelo", 20, "masc", 1.88, 90),
    criarPessoas("Maria", 25, "fem", 1.78, 64)

]

console.log(pessoas)

console.log(`${pessoas[0].nome} possui um imc de ${(pessoas[0].imc()).toFixed(2)}`)
console.log(`${pessoas[1].nome} possui um imc de ${(pessoas[1].imc()).toFixed(2)}`)
console.log(`${pessoas[2].nome} possui um imc de ${(pessoas[2].imc()).toFixed(2)}`)
console.log(`${pessoas[3].nome} possui um imc de ${(pessoas[3].imc()).toFixed(2)}`)

pessoas.forEach(function(elementos){
    console.log(elementos)
})



