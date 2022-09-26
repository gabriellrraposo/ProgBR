let newUser = (name, age) => {
    return {name, age}
}

let users = [
    newUser('Gabriel', 17),
    newUser('Mario', 45),
    newUser('Maria', 54),
    newUser('Carina', 27)
]

let lessThan30 = users => users.age < 30
let moreThan30 = users => users.age > 30 


let less = users.filter(lessThan30)
let more = users.filter(moreThan30)

console.log(less)
console.log(more)