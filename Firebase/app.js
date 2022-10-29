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


//Verificando os alunos que tiraram notas acima de 7
turmaA.where("notas.nota1", ">", 7)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            let aluno = doc.data()
            console.log(aluno.nome)
        })
    })


//Verificando alunos que tiraram notas de recuperação
turmaA.where("notas.nota1", "<", 7)
    .where("notas.nota1", ">", 5)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            let aluno = doc.data()
            console.log(aluno.nome)
        })
    })