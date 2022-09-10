let usuarios = ["Gabriel", "Adriano", "José"]

let inserirUsuario = (nome) => {
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            usuarios.push(nome);
            let error = true;
        }, 1000)

        if (error) {
            resolve()
        } else {
            reject({msg: "Erro qualquer coisa"})
        }
    })
    
    return promise
    
}

let mostrarUsuarios = function() {
    console.log(usuarios)
}

inserirUsuario("Igor")
.then(mostrarUsuarios)
.catch((error) => {
    console.log(error)
})