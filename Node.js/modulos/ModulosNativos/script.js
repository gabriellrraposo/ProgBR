let fs = require('fs')

// fs.writeFile('arquivoTeste.txt', 'Hello World!', (err) => {
//     if (err) throw err

//     console.log('Arquivo criado com sucesso!')
// })

// fs.appendFile('arquivoTeste.txt', 'Texto para arquivo teste', (err) => {
//     if (err) throw err

//     console.log('Arquivo atualizado com sucesso!')
// })

// fs.unlink('text.txt', (err) => {
//     if (err) throw err

//     console.log('Arquivo apagado com sucesso!')
// })

// fs.rename('arquivoTeste.txt', 'novoNome.txt', (err) => {
//     if (err) throw err

//     console.log('Arquivo renomeado com sucesso!')
// })

fs.readFile('novoNome.txt', 'UTF8', (err, fd ) => {
    if (err) throw err

    console.log(fd)
})
//É preciso passar o UTF8 para que seja imprimido o texto normalmente, senão imprimiria um Buffer

