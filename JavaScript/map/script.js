let novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("Gabriel", 17),
    novoAluno("Marta", 56),
    novoAluno("Maria", 34),
    novoAluno("Fábio", 12)
]

let nomeIdade = function (aluno) {
    return `${aluno.nome} tem ${aluno.idade} anos`
}

console.log(alunos.map(nomeIdade))


/////////////////////////////////////////


let idadeEm2040 = function (aluno) {
    return `${aluno.nome} terá ${aluno.idade + 18} anos em 2040`
}

console.log(alunos.map(idadeEm2040))


//////////////////////////////////////////

let quando18 = aluno => {
    if (aluno.idade > 18) {
        return `${aluno.nome} fez 18 anos há ${aluno.idade - 18} ano(s)`
    } else {
        return `${aluno.nome} fará 18 anos daqui ${18 - aluno.idade} ano(s)`
    }
}

console.log(alunos.map(quando18))