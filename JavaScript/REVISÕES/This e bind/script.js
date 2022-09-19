let answerName = prompt('Enter the name of an animal')
let answerSound = prompt('Enter the sound this animal emits')

let animals = [
    newAnimal = {
        name: answerName,
        sound: answerSound
    },
    
    dog = {
        sound: 'Au Au'
    },

    cat = {
        sound: 'Miau Miau'
    }
]

console.log(animals)

let soundGeneric = function () {
    return this.sound
}



console.log(soundGeneric.bind(answerName)())