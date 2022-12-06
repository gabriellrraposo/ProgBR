const sharp = require('sharp')
const compress_image = require('compress-images')
const fs = require('fs')

let path = process.argv[2]
let width = Number(process.argv[3])

let resize = (inputPath, outputPath, width) => {
    sharp(inputPath).resize({width: width}).toFile(outputPath, (err) => {
        if (err) throw err

        console.log('Imagem redimensionada com sucesso!')
        compress(outputPath, "./compressed/")
    })
    // resize: redimensiona o tamanho da imagem (poderia ser adicionado o height tbm)
    // toFile: define para onde a imagem redimensionada irá
}
let compress = (inputPath, outputPath) => {
    compress_image(
    inputPath, outputPath, { 
    
    compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },

    function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");

    fs.unlink(inputPath, err => {
        if (err) throw err

        console.log("Arquivo comprimido e apagado com sucesso")
    })
}
)
}

resize(path, "./temp/output_resize.jpg", width)