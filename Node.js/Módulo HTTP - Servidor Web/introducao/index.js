const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})
    // text/plain (texto puro), text/html (texto html, podendo abrir tags, etc)
    res.end(JSON.stringify({texto: "Hello World"}))
}).listen(3000, err => {
    if (err) throw err

    console.log("Servidor rodando na porta 3000!")
})