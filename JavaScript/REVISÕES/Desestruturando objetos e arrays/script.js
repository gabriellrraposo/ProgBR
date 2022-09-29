"use strict"

let pessoas = [
    {
        nome: 'Marcos',
        idade: 24,
        trabalho: 'Analista'
    },
    
    {
        nome: 'Ana',
        idade: 29,
        trabalho: 'Veterinária'
    },
    
    {
        nome: 'Laura',
        idade: 19,
        trabalho: 'Balconista'
    }
]

// let pessoas = [...pessoa1, ...pessoa2, ...pessoa3] //Utilizando o spread operator para fazer a cópia para um objeto
// console.log(pessoas)


// let {trabalho1, trabalho2, trabalho3} = pessoas

// let trabalhos = [trabalho1, trabalho2, trabalho3]


let pegaTrabalho = (array) => {
    let trabalhos = []
    
    for (let i = 0; i < array.length; i++) {
        trabalhos.push(array[i].trabalho)
    }

    return trabalhos
}

console.log(pegaTrabalho(pessoas))


//Prefiro utilizar um estrutura de repetição, pois não preciso colocar nome1, nome2, trabalho1, trabalho2, etc


//////////////////////////////

let alunos = ['Gabriel', 'Marcos', 'Clara', 'Amarildo', 'Laura', 'Pedro', 'Eduarda']
let funcionarios = ['Lúcia', 'Roberto', 'Cléber', 'Maria Lúcia', 'Vera']

let pessoasEscola = [...alunos, ...funcionarios]
console.log(`A quantidade de pessoas na escola é de: ${pessoasEscola.length} pessoas, incluindo alunos e funcionários`)

let [aluno1, aluno2, aluno3, ...resto] = alunos
let [func1, func2, func3] = funcionarios

console.log(`Os alunos com as melhores notas foram: ${aluno1}, ${aluno2} e ${aluno3}`)
console.log(`Os funcionários do mês foram: ${func1}, ${func2} e ${func3}`)