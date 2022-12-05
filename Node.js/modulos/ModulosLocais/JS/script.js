let calc = require('./functions')

// let mult = require('./functions').multiplica //Para pegar apenas uma função
// console.log(mult(2, 3))

let args = process.argv.slice(2)

let a = Number(args[1])
let b = Number(args[2])

// //Tem que colocar o objeto calc antes das funções e o arquivo precisa ser Common JS
let c = args[0] == 'sm' ? calc.soma(a, b) : args[0] == 'mu' ? calc.multiplica(a, b) : args[0] == 'dv' ? calc.divide(a, b) : args[0] == 'sb' ? calc.subtrai(a, b) : "Digite um argumento válido"

console.log(c)