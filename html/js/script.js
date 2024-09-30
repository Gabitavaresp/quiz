

let azulrusso = 0;
let persa = 0;
let mainecoon = 0;
let siames = 0;



function armazenarResposta(resposta) {
    // Armazena a resposta selecionada
    if (resposta === 'azulrusso') azulrusso++;
    if (resposta === 'persa') persa++;
    if (resposta === 'mainecoon') mainecoon++;
    if (resposta === 'siames') siames++;
}

function calcularResultado() {
    const respostaFinal = document.querySelector('input[name="q7"]:checked');

    // Verifica se a última resposta foi selecionada
    if (respostaFinal) {
        if (azulrusso > persa && azulrusso > mainecoon && azulrusso > siames) {
            window.location.href = "result1.html";
        } else if (persa > azulrusso && persa > mainecoon && persa > siames) {
            window.location.href = "result2.html";
        } else if (siames > azulrusso && siames > persa && siames > mainecoon) {
            window.location.href = "result3.html";
        } else if (mainecoon > azulrusso && mainecoon > persa && mainecoon > siames) {
            window.location.href = "result4.html";
        } 
    } else {
        alert("Por favor, escolha uma resposta antes de enviar.");
    }
}
