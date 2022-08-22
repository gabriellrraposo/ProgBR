let a = {
    nome: "Gabriel",
    idade: 17
}

let b = JSON.stringify(a)

let a2 = '{"nome":"José", "nota":7.6}'

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
console.log(b2)

console.log(b2.nome)