const sharp = require('sharp')

let path = process.argv[2]
let width = Number(process.argv[3])

let resize = (path, width) => {
    sharp(path).resize({width: width}).toFile("./temp/output_resize.jpg", (err) => {
        if (err) throw err

        console.log('Imagem redimensionada com sucesso!')
    })
    // resize: redimensiona o tamanho da imagem (poderia ser adicionado o height tbm)
    // toFile: define para onde a imagem redimensionada irá
}

resize(path, width)