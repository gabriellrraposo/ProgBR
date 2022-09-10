let usuarios = ["Gabriel", "Adriano", "José"]

let inserirUsuario = (nome) => {
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            usuarios.push(nome);
            let error = false;
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


async function executar() {
    await inserirUsuario("Igor")
    mostrarUsuarios()
}

executar()

