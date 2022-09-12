let newUser = (name, age) => {
    return {name, age}
}

let users = [
    newUser('Gabriel', 17),
    newUser('Mario', 45),
    newUser('Maria', 54),
    newUser('Carina', 27)
]

let menosQue30 = users => users.idade < 30
let maisQue30 = users => users.idade > 30 


let menos = users.filter(menosQue30)
let mais = users.filter(maisQue30)

console.log(menos)
console.log(mais)