let yourName = document.querySelector('#name').value
let email = document.querySelector('#email').value
let age = document.querySelector('#age').value
let submit = document.getElementById('btnSubmit')


let users = []


let createUser = function() {
    users.push(yourName, email, age)
    console.log(users)
}

submit.addEventListener('click', createUser)




