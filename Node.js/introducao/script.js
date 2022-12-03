let args = process.argv.slice(2)
let soma = (x, y) => { return x + y }
let subtrai = (x, y) => { return x - y }
let multiplica = (x, y) => { return x * y }
let divide = (x, y) => { return x / y }

let a = Number(args[1])
let b = Number(args[2])

let c = args[0] == 'sm' ?soma(a, b) : args[0] == 'mu' ? multiplica(a, b) : args[0] == 'dv' ? divide(a, b) : args[0] == 'sb' ? subtrai(a, b) : "Digite um argumento válido"

console.log(c)
