let createStudent = (name, age, grade) => {
    return {name, age, grade}
}

let students = [
    createStudent('Marcos', 18, 7.4),
    createStudent('Maria', 17, 8.3),
    createStudent('Pedro', 17, 9.3),
    createStudent('Maria Eduarda', 16, 9.1),
    createStudent('Marta', 17, 8.5),
    createStudent('Carlos', 18, 6.4),
    createStudent('Gabriela', 16, 7.8)
]

let checkGreaterThan8 = object => object.grade >= 8

let greater8 = students.filter(checkGreaterThan8)
console.log(greater8)

// let compareGrades = (object) => {
//     let greater = -1
//     if (object.grade > greater) {
//         greater = object
//     }
//     return greater
// }

let checkingGreaterGrade = array => {
    let i = 0
    let greaterGrade = -1
    let theBest
    
    for (i; i < array.length; i++) {
        if (array[i].grade > greaterGrade) {
            greaterGrade = array[i].grade
            theBest = array[i]
        }
    }
    return theBest
}

console.log(`O(a) The Best of the Class foi: ${checkingGreaterGrade(greater8).name}`)


////////////////////////////////////


let createEmployee = (name, age, monthRating) => {
    return {name, age, monthRating}
}


let employees = [
    createEmployee('Vera Lúcia', 56, 61),
    createEmployee('Cléber', 45, 75),
    createEmployee('Óliver', 31, 93),
    createEmployee('Clara', 36, 96),
    createEmployee('Soraia', 41, 78)
]

let checkGreaterThan80 = object => object.monthRating >= 80

let greater80 = employees.filter(checkGreaterThan80)
console.log(greater80)

let checkingGreaterRating = array => {
    let i = 0
    let greaterRating = -1
    let employeeOfTheMonth

    for (i; i < array.length; i++) {
        
        if (array[i].monthRating > greaterRating) {
            greaterRating = array[i].monthRating
            employeeOfTheMonth = array[i]
        }
        
    }
    return employeeOfTheMonth
}

console.log(`O(a) funcionário(a) do mês foi: ${checkingGreaterRating(greater80).name}`)