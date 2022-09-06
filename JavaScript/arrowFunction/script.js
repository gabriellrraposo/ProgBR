"use strict"


// let dobro = x => 2 * this.x

// // let dobro = function(x) {
// //     return 2 * x
// // }

// console.log(dobro())

//////////////////////////////////////

// let dobro = x => 2 * this.x

// // let dobro = function(x) {
// //     return 2 * this.x
// // }

// let numero = {
//     x: 10,
//     d: dobro
// }

// console.log(numero.d())

///////////////////////////////////////

// let dobro = x => 2 * this.x

let dobro = function(x) {
    return 2 * this.x
}

let numero = {
    x: 10,
    d: dobro
}

let numero2 = {
    x: 15,
    d: dobro
}

dobro = dobro.bind(numero)

numero.d = dobro
console.log(numero.d())