let aluno1 = {
    nome: 'Osvaldo',
    idade: 15,
    matricula: '122'
}

let aluno2 = {
    nome2: 'Marcos',
    idade2: '17',
    matricula2: '123'
}

let aluno3 = {
    nome2: 'Carla',
    idade2: '25',
    matricula2: '124'
}


let {nome, ...resto} = aluno1 //Aqui, nome vira uma variável e o resto é separado, se transformando numa cópia, mas sem o nome
let {nome2, idade2, matricula2} = aluno2 //Se for feito dessa forma, cada atributo é transformado em uma variável separada


resto.idade = 89

console.log(nome)
console.log(resto)

console.log(nome2)
console.log(idade2)
console.log(matricula2)


//////////////////////////////////


let alunos = [aluno1, aluno2, aluno3]

let [osvaldo, marcos, carla] = alunos //Cria uma variável para cada elemento presente dentro do array
//É necessário que esteja em ordem, pois o array se orienta por índice numérico

let [osvaldo2, ...restoAlunos] = alunos

console.log(osvaldo)
console.log(marcos)
console.log(carla)

console.log(restoAlunos)

let [osvaldo3] = alunos

console.log(osvaldo3) //Pode-se colocar apenas um elemento


