const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
const elMenorValor = document.getElementById('menor-valor')
const elMaiorValor = document.getElementById('maior-valor')

elMenorValor.innerText = menorValor
elMaiorValor.innerText = maiorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto:", numeroSecreto)

