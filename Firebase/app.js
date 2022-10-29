const firebaseConfig = {
    apiKey: "AIzaSyDd6B-b0U1fYc_BKqz62CLPEW-SAYmrklU",
    authDomain: "colegio-3a1db.firebaseapp.com",
    projectId: "colegio-3a1db",
    storageBucket: "colegio-3a1db.appspot.com",
    messagingSenderId: "464168975744",
    appId: "1:464168975744:web:684f3d73ef1518b1ef1565"
    };
    firebase.initializeApp(firebaseConfig)

console.log(firebase)

let db = firebase.firestore()

turmaA = db.collection('turmaA')

// -------- LEITURA DE DADOS DO BD -----------
// //Lendo as informações contidas dentro da coleção turmaA do banco de dados colégio
// turmaA
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//             console.log(aluno.advertencias)
//         })
//     })

// // Consultado informações do aluno com um id específico
// let docRef = turmaA.doc("sekNAVUpDFluzl868wCg")
// docRef
//     .get()
//     .then((doc) => {
//         console.log(doc.data().nome)
//         console.log(doc.data().advertencias)
//     })

// //Consultando informações com filtro, informações que tenham alguma característica desejada
// turmaA.where("nome", "==", "José")
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })


// //Consultando todos os nomes que não sejam José. Utiliza-se os <, >, pois não é permitido utilizar !=
// turmaA.where("nome", "<", "José")
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })
// turmaA.where("nome", ">", "José")
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })


// //Consultado nomes que sejam maiores que Flávio e menores que José
// //para utilizar o where duas vezes é necessário que campo seja o mesmo, no caso, 'nome'
// turmaA.where("nome", ">", "Flávio")
//     .where("nome", "<", "José")
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })


// //Verificando os alunos que tiraram notas acima de 7
// turmaA.where("notas.nota1", ">", 7)
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })


// //Verificando alunos que tiraram notas de recuperação
// turmaA.where("notas.nota1", "<", 7)
//     .where("notas.nota1", ">", 5)
//     .get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data()
//             console.log(aluno.nome)
//         })
//     })

// ------------- ADIÇÃO DE DADOS NO BD -------------

// //Adicionando usuário com id aleatório
// turmaA.add({
//     nome: 'Gabriel',
//     sobrenome: 'Raposo',
//     notas: {
//         nota1: 7.9,
//         nota2: 8.8
//     }
// }).then(doc => {
//     console.log('Usuário inserido com sucesso!', doc)
// }).catch(err => {
//     console.log(err)
// })

//Adicionando usuário com id aleatório
// turmaA.add({
//     nome: 'Júlia',
//     sobrenome: 'Andrade',
//     notas: {
//         nota1: 6.4,
//         nota2: 5.8
//     }
// }).then(doc => {
//     console.log('Usuário inserido com sucesso!', doc)
// }).catch(err => {
//     console.log(err)
// })


//Adicionando um usuário com id definido
//Por meio desse método, utilizando o set, também é possível atualizar o valor de algum campo
//Cuidado: o set sobrescreve os dados existentes pelos digitados -> usar merge
// turmaA.doc("alunoNovo").set(
//     {
//         nome: 'Mariana',
//         sobrenome: 'Carvalho',
//         notas: {
//             nota1: 7.2,
//             nota2: 9.4
//         }
//     } 
// ).then(() => {
//     console.log('Usuário inserido com sucesso!')
// }).catch(err => {
//     console.log(err)
// })

//Atualizando os valorer de um documento e seus campos
// turmaA.doc("loSXnB4Yc4skmiAo5EUX").set(
//     {
//         nome: 'Douglas',
//         sobrenome: 'Gonçalves',
//         notas: {
//             nota1: 9.2,
//             nota2: 8.4
//         }
//     }, {merge: true} //Com o merge, o comando não sobrescreve os valores, ele junta os valores e atualiza normalmente
// ).then(() => {
//     console.log('Usuário inserido com sucesso!')
// }).catch(err => {
//     console.log(err)
// })


//Utilizando o update, que atualiza o valor desejado, mas não sobrescreve dados
turmaA.doc("loSXnB4Yc4skmiAo5EUX").update(
        {
            nome: 'Jeremias',
        }, //Com o merge, o comando não sobrescreve os valores, ele junta os valores e atualiza normalmente
    ).then(() => {
        console.log('Usuário inserido com sucesso!')
    }).catch(err => {
        console.log(err)
    })

//Para atualizar campos que estejam dentro de maps, deve-se utilizar as aspas
    turmaA.doc("loSXnB4Yc4skmiAo5EUX").update(
        {
            "notas.nota1": 4.6,
            "notas.nota2": 5.9
        }, //Com o merge, o comando não sobrescreve os valores, ele junta os valores e atualiza normalmente
    ).then(() => {
        console.log('Usuário inserido com sucesso!')
    }).catch(err => {
        console.log(err)
    })