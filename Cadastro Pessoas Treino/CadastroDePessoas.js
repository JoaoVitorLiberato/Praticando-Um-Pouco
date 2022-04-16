const cadastroDePessoas = [{
    CPF: 71044554458,
    NOME: 'JOÃO VITOR LIBERATO DE OLIVEIRA',
    FILIAÇÃO: 'SAFYRA S. DE OLIVEIRA',
    CEP: 23062230,
    ENDERECO: 'RUA CANDIDO VIEIRA',
    COMPLEMENTO: 'Nº65, CASA 9',
    BAIRRO: 'CAMPO GRANDE',
    CIDADE: 'RIO DE JANEIRO',
    ATIVO: false,
},

{

    CPF: 55746932500,
    NOME: 'ALDENIZE SALUSTINO DA SILVA',
    FILIAÇÃO: 'EDVÂNIA SALUSTINO SILVERA',
    CEP: 55656555,
    ENDERECO: 'RUA CORONEL DON AGUIAR',
    COMPLEMENTO: 'Nº 998, APT N125',
    BAIRRO: 'FLAMENGO',
    CIDADE: 'RIO DE JANEIRO',
    ATIVO: true,

}

];

const cadastrarNovaPessoa = (CPF, NOME, FILIAÇÃO, CEP, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, ATIVO) => {
    const novaPessoa = {
        CPF,
        NOME,
        FILIAÇÃO,
        CEP,
        ENDERECO,
        COMPLEMENTO,
        BAIRRO,
        CIDADE,
        ATIVO,
    }
    cadastroDePessoas.push(novaPessoa);
    console.log(`${NOME} Cadastrado com sucesso!`);
}

const todasPessoas = cadastroDePessoas.forEach((todos) => {
    console.log(todos);

})



const nameEndereco = cadastroDePessoas.map((pessoa) => (
    {
        Nome: pessoa.NOME,
        Endereco: pessoa.ENDERECO,
        Complemento: pessoa.COMPLEMENTO,
    }
)
);

console.log(nameEndereco);


const pessoasAtivas = cadastroDePessoas.filter((pessoa) => {
    return pessoa.ATIVO === true;
})

console.log(pessoasAtivas);


const atualizarPessoas = (CPF, cadastroAtualizado) => {
    const indice = cadastroDePessoas.findIndex((pessoa) => pessoa.CPF === CPF);
         if (indice === -1) {
             return console.log('Não possui nenhum cadastro com este CPF.');
        }

        cadastroDePessoas[indice].CPF = cadastroAtualizado.CPF
        cadastroDePessoas[indice].NOME = cadastroAtualizado.NOME
        cadastroDePessoas[indice].FILIAÇÃO = cadastroAtualizado.FILIAÇÃO
        cadastroDePessoas[indice].CEP = cadastroAtualizado.CEP
        cadastroDePessoas[indice].ENDERECO = cadastroAtualizado.ENDERECO
        cadastroDePessoas[indice].COMPLEMENTO = cadastroAtualizado.COMPLEMENTO
        cadastroDePessoas[indice].BAIRRO = cadastroAtualizado.BAIRRO
        cadastroDePessoas[indice].CIDADE = cadastroAtualizado.CIDADE
        cadastroDePessoas[indice].ATIVO = cadastroAtualizado.ATIVO

        console.log(`Cpf: ${cadastroAtualizado.CPF} Atulizado com sucesso!"`);

}

console.log(atualizarPessoas(1,
    {
        CPF: 71951553458,
        NOME: 'jaOOZIN',
        FILIAÇÃO: 'SANTOS DE OLIVEIRA',
        CEP: 5656666,
        ENDERECO: 'RUA CIZAR BEZERRA',
        COMPLEMENTO: 'N20, CS 9',
        BAIRRO: 'IPANEMA',
        CIDADE: 'RIO DE JANEIRO',
        ATIVO: true,
       
    }
)
);