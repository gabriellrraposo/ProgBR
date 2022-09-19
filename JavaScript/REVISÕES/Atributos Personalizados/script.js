let input = document.getElementById('input')

input.setAttribute('class', 'input-texto')
console.log(input.getAttribute('class'))

input.setAttribute('num', '25')
console.log(parseInt(input.getAttribute('num')))


input.dataset.placeholder = "idade"
console.log(input.dataset.cor)

console.log(input.dataset.placeholder)


console.log(input)