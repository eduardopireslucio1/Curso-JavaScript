function verificaFuncionariosIdade(funcionario){
    return funcionario.idade > 40;
}

function filtraFuncionariosIdade(funcionarios){
    let funcionariosFiltro = funcionarios.filter(verificaFuncionariosIdade);

    return funcionariosFiltro;
}

function retornaNomesFuncionarios(funcionarios){
    let nomes = funcionarios.map(funcionario => funcionario.nome);

    return nomes;
}

function imprimeNomesFuncionarios(arrayNomes){
    arrayNomes.forEach(nome => {
        console.log(nome);
    });
}

export {filtraFuncionariosIdade, retornaNomesFuncionarios, imprimeNomesFuncionarios};