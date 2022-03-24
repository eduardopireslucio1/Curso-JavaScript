const dataAtual = new Date();
const dataProximoAno = new Date('2023-01-01T00:00');

const timestampAtual = dataAtual.getTime();
const timestampProximoAno = dataProximoAno.getTime();

const calculoTimestamp = timestampProximoAno - timestampAtual ;

const segundos = calculoTimestamp / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

const dias = horas / 24;

console.log("Faltam "+ dias.toFixed() +" dias para 2023");

const n2 = true + "0";
const n3 = 0 / 0;
console.log(n2+ n3)