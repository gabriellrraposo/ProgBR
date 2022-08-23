let video = document.getElementById("video1")
video.onclick = video.pause

let retroceder = function () {
    video.currentTime -= 15
}

let avancar = function () {
    video.currentTime += 15
}

let diminuirVel = function () {
    video.playbackRate -= 0.15
}

let aumentarVel = function () {
    video.playbackRate += 0.15
}

let pause = function () {
    video.pause()
}

let stop = function () {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 1
}

let play = function () {
    video.play()
}