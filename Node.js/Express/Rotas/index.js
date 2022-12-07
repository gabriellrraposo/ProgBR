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

// app.get("/aluno", (req, res) => {
//     console.log(req.body)
//     let aluno = alunos[req.body.id]
//     res.json(aluno)
// })

app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})

app.listen(3000, () => {console.log("Server running")})