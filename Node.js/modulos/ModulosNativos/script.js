let fs = require('fs')

fs.appendFile('text.txt', 'Olá Mundo!', (err) => {
    if (err) throw err

    console.log('Arquivo atualizado com sucesso!')
})

