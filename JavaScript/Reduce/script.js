let novoAluno = function(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno('Rogério', 34),
    novoAluno('Wallison', 74),
    novoAluno('Alice', 12),
    novoAluno('Marta', 13)
]

// //Simula funcionamento do reduce
// let somaIdades = (alunos) => {
//     alunos.forEach(element => {
//         soma += element.idade
//     });
//     console.log(soma)
// }

// somaIdades(alunos)


let somaIdades = (total, aluno) => total + aluno.idade

console.log(alunos.reduce(somaIdades, 0))