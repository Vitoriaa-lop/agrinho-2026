document.addEventListener('DOMContentLoaded', () => {
    // Captura todos os botões e todos os blocos de informação
    const botoes = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.content-card');

    botoes.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // 1. Desativa o efeito visual de todos os botões
            botoes.forEach(b => b.classList.remove('active'));
            
            // 2. Esconde todas as informações da tela
            cards.forEach(c => c.classList.remove('active'));

            // 3. Ativa o botão que acabou de ser apertado
            event.currentTarget.classList.add('active');

            // 4. Pega o alvo do botão e mostra a informação correspondente
            const alvoId = event.currentTarget.getAttribute('data-target');
            const cardCorrespondente = document.getElementById(alvoId);
            
            if (cardCorrespondente) {
                cardCorrespondente.classList.add('active');
            }
        });
    });
});