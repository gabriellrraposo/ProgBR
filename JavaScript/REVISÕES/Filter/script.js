let newStudent = (name, age, grade) => {
    return {name, age, grade}
}

let studentsList = [
    newStudent('Amarildo', 34, 7.8),
    newStudent('Mara', 40, 9),
    newStudent('Ana', 14, 7.4),
    newStudent('Jessica', 22, 5),
    newStudent('Mario', 20, 8.1)
]

let gradeGreaterThan75 = array => array.grade > 7.5
let ageGreaterThan25 = array => array.age > 25

let listGrade = studentsList.filter(gradeGreaterThan75)
let listAge = studentsList.filter(ageGreaterThan25)

console.log(listGrade)
console.log(listAge)