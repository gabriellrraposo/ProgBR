const sharp = require('sharp')

const sharpenImage = () => {
    sharp('./images/skyline-image.jpg')
    .sharpen({sigma: 13})
    .toFile(__dirname + '/processed_images/sharpen_skyline-image.jpg')
}

sharpenImage()