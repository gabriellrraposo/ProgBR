let btnAdd = document.getElementById('btnAdd')
let btnDel = document.getElementById('btnDel')

let usersList = ['Gabriel Gomes', 'Armando de Souza', 'Marina Motta', 'Olegário Marques', 'Maria Eduarda Santos']
let finalUsersList = [...usersList]
let addedUsersList = []
let deletedUsersList = []

let addUser = () => {
    let username = document.getElementById('txtUsername')
    username = username.value
    
    let indexUser = finalUsersList.indexOf(`${username}`)

    if (indexUser == -1) {
        finalUsersList.push(username)
        addedUsersList.push(username)
        console.log('User successfully added!')
    } else {
        console.log(`The user ${username} is already in the users list.`)
    }

    
}

let delUser = () => {
    let username = document.getElementById('txtUsername')
    username = username.value
    
    let indexUser = finalUsersList.indexOf(`${username}`)

    if (indexUser == -1) {
        console.log(`The user ${username} wasn't found in the users list.`)
    } else {
        finalUsersList.splice(indexUser, 1)
        deletedUsersList.push(username)
        console.log('User successfully deleted!')
    }

    
}

let finish = () => {
    console.log(`Initial List: ${usersList}`)
    console.log(`Final List: ${finalUsersList}`)
    console.log(`Added Users: ${addedUsersList}`)
    console.log(`Deleted Users: ${deletedUsersList}`)
}