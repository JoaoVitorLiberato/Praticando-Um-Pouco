const cadastroDePessoas = {
    CPF: 71044554458,
    NOME: 'JOÃO VITOR LIBERATO DE OLIVEIRA',
    FILIAÇÃO: 'SAFYRA S. DE OLIVEIRA',
    CEP: 23062230,
    ENDERECO: 'RUA CANDIDO VIEIRA',
    COMPLEMENTO: 'Nº65, CASA 9',
    BAIRRO: 'CAMPO GRANDE',
    ESTADO: 'RIO DE JANEIRO',
}

const cadastrarNovaPessoa = (CPF, NOME, FILIAÇÃO, CEP, ENDERECO, COMPLEMENTO, BAIRRO, ESTADO) => {
    const novaPessoa = {
        CPF,
        NOME,
        FILIAÇÃO,
        CEP,
        ENDERECO,
        COMPLEMENTO,
        BAIRRO,
        ESTADO,
    }
    cadastroDePessoas.push(novaPessoa);
    console.log(`${NOME} Cadastrado com sucesso!`);
}

console.log(cadastroDePessoas);

