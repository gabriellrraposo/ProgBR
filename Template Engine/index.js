const express = require('express')
const fs = require('fs')

const app = express()

let user = {
    id: 0,
    name: 'Igor',
    phone: '(222) 222-4325'
}

app.get("/", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server running")
})