let username = document.getElementById('txtUsername').value
let btnAdd = document.getElementById('btnAdd')
let btnDel = document.getElementById('btnDel')

let usersList = ['Gabriel Gomes', 'Armando de Souza', 'Marina Motta', 'Olegário Marques', 'Maria Eduarda Santos']
let finalUsersList = [...usersList]
let addedUsersList = []
let deletedUsersList = []


console.log(usersList)


let addUser = () => {
    let indexUser = usersList.indexOf(`${username}`)

    if (indexUser == -1) {
        finalUsersList.push(username)
    } else {
        console.log(`The user ${username} is already in the users list.`)
    }
    
    addedUsersList.push(username)
    username = ''
}

let delUser = () => {
    let indexUser = usersList.indexOf(`${username}`)

    if (indexUser == -1) {
        console.log(`The user ${username} wasn't found in the users list.`)
    } else {
        finalUsersList.splice(indexUser, 1)
    }

    deletedUsersList.push(username)
    username = ''
}

