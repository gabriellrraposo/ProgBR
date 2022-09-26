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

let nameAgeStatus = student => {
    if (student.grade < 6) {
        student.status = 'Disapproved'
    } else {
        student.status = 'Approved'
    }

    return `Student: ${student.name} - Grade: ${student.grade} - Status: ${student.status}`
}

console.log(studentsList.map(nameAgeStatus))
console.log(studentsList)