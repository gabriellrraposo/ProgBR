// sair = ""
// alunos = []

// while (sair != 999) {
//     aluno = prompt("Digite o nome de um aluno: ")
//     alunos.push(aluno)
//     sair = prompt("Digite qualquer número para continuar. Se desejar sair digite 999")
//     if (sair == 999) {
//         if (alunos.length < 3) {
//             alert("É necessário que você tenha no mínimo 3 alunos")
//             sair = ""
//         } else {
//             break
//         }
//     }
// }

// for (i of alunos) {
//     console.log(i)
// }



// function calculaSoma(n1, n2, n3) {
//     return n1 + n2 + n3
// }

// soma = calculaSoma(2, 0, 1)
// console.log(soma)

// switch(soma) {
//     case 1:
//         console.log("A soma é igual a 1")
//         break
//     case 2:
//         console.log("A soma é igual a 2")
//         break
//     case 3:
//         console.log("A soma é igual a 3")
//         break
//     default:
//         console.log("A soma é diferente de 1, 2 ou 3")
//         break
// }



var nomes = ["Igor", "José", "Maria"]
var notas1 = [7.2, 9.1, 6.0]
var notas2 = [8.0, 8.8, 7.6]

var calculaSituacao = function() {
    for (i in nomes) {
        var media = (notas1[i] + notas2[i]) / 2
        
        if (media < 5) {
            situacao = "Reprovado"
        } else if (media > 5 && media < 7) {
            situacao = "Recuperação"
        } else {
            situacao = "Aprovado"
        }

        console.log(`A média de notas do(a) aluno(a) ${nomes[i]} foi de ${media}\nSituação: ${situacao}`)
        
    }
}

calculaSituacao()
