let fs = require('fs')

fs.writeFile('text.txt', 'Hello World', (err) => {
    if (err) throw err

    console.log('Arquivo criado com sucesso!')
})