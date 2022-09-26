let newStudent = function(name, age, grade) {
    return {name, age, grade}
}

let students = [
    newStudent('Rogério', 34, 8.9),
    newStudent('Wallison', 74, 6.8),
    newStudent('Alice', 12, 7.2),
    newStudent('Marta', 13, 8.1)
]


let studentsTotalGrade = students.reduce((acc, currStudent) => acc + currStudent.grade, 0)

let studentsAverageGrade = studentsTotalGrade / students.length

console.log(studentsAverageGrade)