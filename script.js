document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos da página
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const btnVoltar = document.getElementById('btn-voltar');

    // FUNÇÃO: Quando clica em um botão de ação
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // 1. Remove o estado ativo de outros botões e adiciona neste
            botoesAcao.forEach(b => b.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            // 2. Some com a tela de introdução inicial
            telaInicialHero.classList.add('hidden');

            // 3. Mostra o botão de Voltar
            btnVoltar.classList.add('show');

            // 4. Esconde os cards anteriores e abre o card correspondente
            cardsInformacao.forEach(c => c.classList.remove('active'));
            const alvoId = event.currentTarget.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
            }
        });
    });

    // FUNÇÃO: Quando clica no botão "Voltar para o Início"
    btnVoltar.addEventListener('click', () => {
        // 1. Remove o destaque verde dos botões de ação
        botoesAcao.forEach(b => b.classList.remove('active'));

        // 2. Esconde o bloco de informações que estava aberto
        cardsInformacao.forEach(c => c.classList.remove('active'));

        // 3. Faz o botão de voltar SUMIR novamente
        btnVoltar.classList.remove('show');

        // 4. Faz a introdução do início APARECER de volta
        telaInicialHero.classList.remove('hidden');
    });
});