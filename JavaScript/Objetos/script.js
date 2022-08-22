// var calcMedia = function() {
//     return (this.notas[0] + this.notas[1] + this.notas[2]) / 3
// }

// var calMedia = function(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3
// }

// var alunos = [
    
//     aluno1 = {
//         nome: "Gabriel",
//         idade: 17,
//         notas: [7, 5.0, 9.8],
        
//         media: calcMedia
// },

//     aluno2 = {
//         nome: "José",
//         idade: 21,
//         notas: [5.0, 8.7, 7.2],

//         media: calcMedia
//     }
// ]

// console.log(aluno1.nome)
// console.log(aluno1.media())

// console.log(aluno2.nome)
// console.log(aluno2.media())




// var criarAluno = function(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function() {
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }

// var alunos = [
//     criarAluno("Gabriel", 7, 8),
//     criarAluno("Marcos", 9, 7)
// ]

// var aluno1 = alunos[0]
// console.log(aluno1["nome"])
// console.log(aluno1.media())

// alunos.forEach(function(elemento) {
//     console.log(elemento)
// })



var aluno = function(nome, n1, n2) {
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno("Igor", 8, 7)
var b = new aluno("Gabriel", 9, 10)

console.log(a.media())
console.log(b.media())