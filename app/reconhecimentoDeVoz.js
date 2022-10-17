const elChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result',(event)=>{
    onSpeak(event)
})


function onSpeak(valor){
    let chute = valor.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificarSeOChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute){
    elChute.innerHTML = 
    `
    <div>Você disse:</div>
    <span class="box">${chute}</span> 
    `
}

