function verificarSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elChute.innerHTML += `<div>Valor inválido</div>`
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elChute.innerHTML += ` <div>Valor inválido. O número secreto precisa estar entre: ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}