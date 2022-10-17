function verificarSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(chute)) {
        console.log("Valor inválido")
    }

    if(numeroMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor inválido. O número secreto precisa estar entre: ${menorValor} e ${maiorValor}`) 
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}