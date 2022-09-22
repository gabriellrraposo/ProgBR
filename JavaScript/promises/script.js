let usuarios = ["Gabriel", "Adriano", "José"]

let inserirUsuario = (nome) => {
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            usuarios.push(nome);
            let error = true;
        }, 1000)

        if (error) {
            reject({msg: "Erro qualquer coisa"})
        } else {
            resolve()
        }
    })
    
    return promise
    
}

let mostrarUsuarios = function() {
    console.log(usuarios)
}

inserirUsuario("Igor")
.then(mostrarUsuarios) //Só é executado quando der o resolve
.catch((error) => {
    console.log(error)
})