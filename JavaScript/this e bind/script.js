let speakGeneric = function () {
    console.log(this.sound)
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

cat.speak()
dog.speak()

let bindedFunction = speakGeneric.bind(dog)

bindedFunction()