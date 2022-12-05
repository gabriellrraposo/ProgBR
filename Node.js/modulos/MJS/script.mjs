import { soma, multiplica, divide, subtrai } from './functions.mjs' //Método para ECMAScript, arquivo precisa estar em .mjs


let args = process.argv.slice(2)

let a = Number(args[1])
let b = Number(args[2])

let c = args[0] == 'sm' ? soma(a, b) : args[0] == 'mu' ? multiplica(a, b) : args[0] == 'dv' ? divide(a, b) : args[0] == 'sb' ? subtrai(a, b) : "Digite um argumento válido"

console.log(c)
