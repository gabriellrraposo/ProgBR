const express = require('express')
const fs = require('fs')

const app = express()

let user = {
    id: 0,
    name: 'Igor Oliverira',
    phone: '(222) 222-4325'
}

let render = (data, obj) => {
    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key]) //Substitui o '{{{key}}}' do HTML pelo seu valor real
    }

    return data
}

app.get("/", (req, res) => {

    fs.readFile('./templates/user.html', 'UTF8', (err, fd) => { //Lê o arquivo determinado
        if (!err) {
            res.send(render(fd, user)) //Manda uma resposata/dado ao usuário após ele fazer uma requisição. Nesse caso, foi o arquivo html que foi lido acima.
        }
    })
})

app.listen(3000, () => {
    console.log("Server running")
})