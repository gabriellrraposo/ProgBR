const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const app = express()

let users = [
    {
        id: 0,
        name:"Gabriel Lucas", 
        phone: "(12) 954334323"
    },

    {
        id: 1,
        name:"Patrícia", 
        phone: "(12) 924393451"
    },

    {
        id: 2,
        name:"Davi", 
        phone: "(31) 954888327"
    }
]


app.set("views", path.join(__dirname, 'views')) //Setando onde estão os templates
app.set("view engine", "ejs")
        //Setando a engine de template


app.get("/", (req, res) => {
    res.render('user.ejs', { users }) //Renderiza a página que foi especificada (como se fosse o res.send)

})

app.listen(3000, () => {
    console.log("Server running")
})