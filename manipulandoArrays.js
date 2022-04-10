
const nomes = ['julia', 'iza', 'joao', 'denize', 'claudio'];
//pegar o primeiro indice do array
const primeiro = () => {
    for (let i = 0; i < nomes.length; i++) {
        return nomes[i];
    }
    return nomes[i];
}

console.log(primeiro());

//pegar ultimo 
const ultimo = () => {
    for (let j = nomes.length -1; j < nomes.length; j++) {
        return nomes[j];
    }
    return nomes[j];
}
console.log(ultimo())
