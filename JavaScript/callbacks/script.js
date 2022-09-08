let usuarios = ["Gabriel", "Adriano", "José"]

let inserirUsuario = (nome, callback) => {
    setTimeout(() => { 
        usuarios.push(nome),
        callback() 
    }, 1000)
    
}

let mostrarUsuarios = function() {
    console.log(usuarios)
}

inserirUsuario("Roberto", mostrarUsuarios)