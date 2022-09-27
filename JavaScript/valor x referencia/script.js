//Arrays e objetos tem atribuição por referencia
//Os tipos primitivos possuem atribuição por valor
//Assistir novamente a aula - tem um resuminho no final

let alunos = {nome: 'Gabriel', idade: 18}
let alunosB = alunos //Modifica o objeto inicial também
alunosB.idade = 17

let alunosC = Object.assign({}, alunos) //Não modifica o objeto inicial, cria uma cópia independente
alunosC.idade = 25

let alunosD = {...alunos} //Também cria uma cópia independente do objeto
alunosD.idade = 40

console.log(alunos)
console.log(alunosB)
console.log(alunosC)
console.log(alunosD)

///////////////////////////////////

let pessoas = ['Gabriel', 'Pedro', 'Joana']
// let pessoasB = pessoas
// pessoasB.push('Amarildo')

// console.log(pessoas)
// console.log(pessoasB)

// let pessoasC = pessoas.slice() //quando não são colocados parâmetros, é feita uma cópia do array
// pessoasC.push('Maria')
// console.log(pessoasC)


let pessoasD = [...pessoas] //Cria também uma cópia independente do array
pessoasD.push('Carla')

console.log(pessoas)
console.log(pessoasD)

// ///////////////////////////////////

// let nome = 'Gabriel'
// let novoNome = 'Roberto'

// console.log(nome)
// console.log(novoNome)