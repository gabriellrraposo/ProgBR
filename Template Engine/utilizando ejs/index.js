const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const app = express()

let user = {
    name:"Gabriel Lucas", 
    phone: "(12) 954334323"
}

app.set("views", path.join(__dirname, 'views')) //Setando onde estão os templates
app.set("view engine", "ejs")
        //Setando a engine de template


app.get("/", (req, res) => {
    res.render('user.ejs', user) //Renderiza a página que foi especificada (como se fosse o res.send)

})

app.listen(3000, () => {
    console.log("Server running")
})