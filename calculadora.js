import adicao from "./operacoes/adicao.js";
import divisao from "./operacoes/divisao.js";
import subtracao from "./operacoes/subtracao.js";
import multiplicacao from "./operacoes/multiplicacao.js";

let resultadoAdicao = adicao(2, 5);
let resultadoSubtracao = subtracao(5, 3);
let resultadoDivisao = divisao(10, 5);
let resultadoMultiplicacao = multiplicacao(3, 3);

console.log(resultadoAdicao);
console.log(resultadoSubtracao);
console.log(resultadoDivisao);
console.log(resultadoMultiplicacao);
