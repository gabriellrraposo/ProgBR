


let soma = (x, y) => { return x + y }
let subtrai = (x, y) => { return x - y }
let multiplica = (x, y) => { return x * y }
let divide = (x, y) => { return x / y }

export { soma, subtrai, multiplica, divide } //Método para ECMAScript, mais moderno (eu acho)

// Outra forma de se fazer

module.exports.soma = (x, y) => { return x + y }
module.exports.mult = (x, y) => { return x * y }