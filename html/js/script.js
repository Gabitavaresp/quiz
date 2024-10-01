// Inicializa a pontuação de cada gato como zero
let azulrusso = 0;
let siames = 0;
let mainecoon = 0;
let persa = 0;

// Inicializa a pontuação total
if (localStorage.getItem('totalScore') === null) {
    localStorage.setItem('totalScore', 0);
}

// Função para avançar para a próxima pergunta
function nextPage(currentPage) {
    const form = document.getElementById("quizForm");
    const selectedAnswer = form.querySelector('input[name="answer"]:checked');

    // Verifica se o usuário escolheu uma resposta
    if (selectedAnswer) {
        // Aumenta a pontuação do gato escolhido
        if (selectedAnswer.value === 'azulrusso') {
            azulrusso++;
        } else if (selectedAnswer.value === 'siames') {
            siames++;
        } else if (selectedAnswer.value === 'mainecoon') {
            mainecoon++;
        } else if (selectedAnswer.value === 'persa') {
            persa++;
        }

        // Salva a pontuação total no localStorage
        let totalScore = parseInt(localStorage.getItem('totalScore'));
        totalScore += 1; // Cada resposta vale 1 ponto
        localStorage.setItem('totalScore', totalScore);

        // Vai para a próxima página do quiz
        const nextPageUrl = `page${currentPage + 1}.html`;
        window.location.href = nextPageUrl;
    } else {
        alert("Por favor, selecione uma resposta!"); // Alerta se nenhuma resposta for escolhida
    }
}

// Função para calcular e mostrar o resultado final
function calculateResult() {
    const form = document.getElementById("quizForm");
    const selectedAnswer = form.querySelector('input[name="answer"]:checked');

    // Verifica se o usuário escolheu uma resposta
    if (selectedAnswer) {
        // Vai para a página de resultado
        window.location.href = "result.html";
    } else {
        alert("Por favor, selecione uma resposta!"); // Alerta se nenhuma resposta for escolhida
    }
}

// Função para mostrar o resultado final na página de resultados
function showResult() {
    // Recupera as pontuações dos gatos
    let azulrusso = parseInt(localStorage.getItem('azulrusso')) || 0;
    let siames = parseInt(localStorage.getItem('siames')) || 0;
    let mainecoon = parseInt(localStorage.getItem('mainecoon')) || 0;
    let persa = parseInt(localStorage.getItem('persa')) || 0;

    // Decide qual gato mostrar baseado na pontuação
    if (azulrusso > siames && azulrusso > mainecoon && azulrusso > persa) {
        window.location.href = "result1.html"; // Gato Azul Russo
    } else if (siames > azulrusso && siames > mainecoon && siames > persa) {
        window.location.href = "result2.html"; // Gato Siames
    } else if (mainecoon > azulrusso && mainecoon > siames && mainecoon > persa) {
        window.location.href = "result3.html"; // Gato Maine Coon
    } else {
        window.location.href = "result4.html"; // Gato Persa ou outros
    }
}

// Função para reiniciar o quiz
function resetQuiz() {
    localStorage.setItem('totalScore', 0); // Reseta a pontuação total
    azulrusso = 0; // Reseta a pontuação do Azul Russo
    siames = 0; // Reseta a pontuação do Siames
    mainecoon = 0; // Reseta a pontuação do Maine Coon
    persa = 0; // Reseta a pontuação do Persa
}
