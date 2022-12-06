const sharp = require('sharp')
const fs = require('fs')

const length = fs.readdirSync('./processed_images').length
const sharpenImage = () => {
    
    sharp('./images/output_resize.jpg')
    .sharpen(
        {
            sigma: 1,
            m1: 1,
            m2: 2,
            x1: 50,
            y2: 1,
            y3: 40
        }
        )
    .toFile(__dirname + `/processed_images/sharpen_skyline-image` + `(${length + 1}).jpg`, err => {
        if (err) throw err

        console.log("Imagem tornou-se mais nítida com sucesso!")
    })
}

sharpenImage()