let fs = require('fs')

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, "UTF8", (err, fd) => {
    if (err) throw err

    fs.writeFile(fileName + "_Uppercase", fd.toUpperCase(), (err) => {
        if (err) throw err

        console.log("Arquivo gerado com sucesso!")
    })
})