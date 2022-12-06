const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname
    let fileName = "." + path

    fs.readFile(fileName, (err, fd) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
            res.end("<h1>Página não encontrada</h1>")
        } else {
            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
            res.write(fd)
            res.end()
        }
    })
}).listen(3000, err => {
    if (err) throw err

    console.log('Servidor rodando na porta 3000!')
})