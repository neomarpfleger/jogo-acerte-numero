const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto);

const elementoMenorValor = document.querySelector("#menorValor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector("#maiorValor");
elementoMaiorValor.innerHTML = maiorValor;
