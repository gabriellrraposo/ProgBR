const express = require('express')
const app = express()
const bp = require('body-parser')

app.use("/", bp.urlencoded({ extended: true }))

let alunos = [
        {id: 0, nome: "José"},
        {id: 1, nome: "Maria"},
        {id: 2, nome: "João"},
        {id: 3, nome: "Marcos"}
    ]


//Esse primeiro parâmetro é chamado de rota
app.get("/", (req, res) => {
    res.send("Hello World")
})

//Esse primeiro parâmetro é chamado de rota
app.get("/alunos", (req, res) => {
    

    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body)
    console.log(req.query)
    // let aluno = alunos[req.body.id]
    let aluno = alunos[req.query.id]
    res.json(aluno)
})
// http://192.168.0.247:3000/aluno?id=1 //Passa uma query

// app.get("/aluno/:id", (req, res) => {
//     console.log(req.params.id)
//     let aluno = alunos[req.params.id]
//     res.json(aluno)
// })
//http://192.168.0.247:3000/aluno/1

app.listen(3000, () => {console.log("Server running")})