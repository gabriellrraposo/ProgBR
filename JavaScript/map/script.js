let novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("Gabriel", 17),
    novoAluno("Marta", 56),
    novoAluno("Maria", 34),
    novoAluno("Fábio", 12)
]

let nomeIdade = (aluno) => `${aluno.nome} tem ${aluno.idade} anos`

console.log(alunos.map(nomeIdade))

// /////////////////////////////////////////

// let idadeEm2040 = aluno => `${aluno.nome} terá ${aluno.idade + 18} anos em 2040`

// console.log(alunos.map(idadeEm2040))

// //////////////////////////////////////////

// let quando18 = aluno => {
//     if (aluno.idade > 18) {
//         return `${aluno.nome} fez 18 anos há ${aluno.idade - 18} ano(s)`
//     } else {
//         return `${aluno.nome} fará 18 anos daqui ${18 - aluno.idade} ano(s)`
//     }
// }

// console.log(alunos.map(quando18))



/////////////////////////////////////
//Tentando recriar o comportamento do map, mas sem usar o map

let simulaNomeIdade = array => {
    array.forEach((element, i) => {
        // array.push((`${element.nome} tem ${element.idade} anos.`))
        array[i] = `${element.nome} tem ${element.idade} anos.`

        //Antes estava gerando um array com o dobro de elementos, pois os antigos valores continuavam
        //Então fui substituindo os valores utilizando os índices do array
    });
    console.log(array)
}

simulaNomeIdade(alunos)


