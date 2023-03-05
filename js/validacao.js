function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML+='<div>Valor Inválido</div>'
        return
    }
    if(numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML+=`<div>Fale um número entre ${menorValor} e ${maiorValor}<!div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =`
            <h2>Você Acertou!<h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <img class="trofeu" src="/pngwing.com.png" alt="">
            <h3>PARABENS!!!</h3>
            <button id="jogarNovamente" class="btnJogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == "jogarNovamente"){
        window.location.reload()
    }
})