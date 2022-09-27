let notas1 = [2, 4, 2, 4]
let notas2 = [2, 4, 2, 4]
let notas3 = [2, 4, 2, 4]


let todasNotas = [...notas1, ...notas2, ...notas3]
console.log(todasNotas)

let soma = 0
todasNotas.forEach(element => {
    soma += element
});

let media = (soma, array) => soma / array.length

console.log(`A média de notas das provas realizadas foi ${media(soma, todasNotas)}`)


/////////////////////////////////////////


let usuario = {
    nome: 'Gabriel Raposo',
    idade: '17',
}

let contato = {
    email: 'gabriel@gmail.com',
    telefone: '(31) 9 8540-3169'
}


let fichaUsuario = {...usuario, ...contato}

console.log(usuario)
console.log(contato)

console.log(fichaUsuario)