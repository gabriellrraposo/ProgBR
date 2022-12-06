const sharp = require('sharp')
const fs = require('fs')

const length = fs.readdirSync('./processed_images').length
const sharpenImage = () => {
    
    sharp('./images/skyline-image.jpg')
    .sharpen(
        {
            sigma: 1,
            m1: 1,
            m2: 0,
            x1: 2,
            y2: 10,
            y3: 20
        }
        )
    .toFile(__dirname + `/processed_images/sharpen_skyline-image` + `(${length + 1}).jpg`, err => {
        if (err) throw err

        console.log("Imagem tornou-se mais nítida com sucesso!")
    })
}

sharpenImage()