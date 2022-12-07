const express = require('express')
const app = express()
const bp = require('body-parser')

let consoleBody = (req, res, next) => {
    console.log(req.body)
    next()
    // next("Error de qualquer coisa") //Se não passar nada nos parâmetros apenas passa para a próxima função do middleware, mas se você passar um parâmetro você quer dizer que ocorreu um erro, então se passa uma mensagem e a execução para ali (não executa a próxima função do middleware)
}

let hello = (req, res) => {
    res.send("Hello World")
}

app.use("/", bp.json())
app.use("/", consoleBody) //usado para executar um middleware independente do tipo de requisição

app.get("/", hello)
// app.get("/", consoleMethod, hello)
app.post("/", hello)

app.listen(3000, () => {console.log("Server running")})