let fs = require('fs')

// fs.writeFile('text.txt', 'Hello World!', (err) => {
//     if (err) throw err

//     console.log('Arquivo criado com sucesso!')
// })

// fs.appendFile('text.txt', 'Olá Mundo!', (err) => {
//     if (err) throw err

//     console.log('Arquivo atualizado com sucesso!')
// })

fs.unlink('text.txt', (err) => {
    if (err) throw err

    console.log('Arquivo apagado com sucesso!')
})

