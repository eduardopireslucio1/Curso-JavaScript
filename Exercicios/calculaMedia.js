import notasAluno from "./dadosAluno.js";

function somaNotas(total, notasAluno){
    const valorTotal = total + notasAluno.nota;

    return valorTotal;
}

function calculaMedia(){
    let total = notasAluno.reduce(somaNotas, 0);
    let media = total / notasAluno.length;

    return media;
}

export default calculaMedia;

