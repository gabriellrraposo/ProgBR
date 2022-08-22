// var date = new Date(year, month, day, hours, minutes, seconds, milliseconds)

var date = new Date("sep 06 2019");

console.log(date)
console.log(date.getMonth() + 1) //mês do ano de 0 a 11
console.log(date.getDate()) //dia do mês
console.log(date.getDay() + 1) //dia da semana de 0 a 6
console.log(date.getHours() + 1) //número da hora 


var diasSem = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
console.log(diasSem[date.getDay()])