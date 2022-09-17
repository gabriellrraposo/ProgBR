let nome


if (!nome) {
    throw 'O nome não pode ser vazio.'
}

try {
    if (!nome) {
        throw 'O nome não pode ser vazio.'
    }
    
    console.log(nome)
} catch (err) {
    console.log('Ocorreu um erro.', err)
}