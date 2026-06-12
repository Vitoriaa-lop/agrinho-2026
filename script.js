document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos controladores da tela
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // EVENTO: Quando clica em um botão de ação
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // 1. Esconde a Introdução (Hero) e também o painel de botões
            telaInicialHero.classList.add('hidden');
            painelBotoes.classList.add('hidden');

            // 2. Faz surgir o botão mágico de Voltar
            btnVoltar.classList.add('show');

            // 3. Abre as informações e imagens correspondentes daquele botão
            cardsInformacao.forEach(c => c.classList.remove('active'));
            const alvoId = event.currentTarget.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
            }
        });
    });

    // EVENTO: Quando clica no botão "Voltar para o Início"
    btnVoltar.addEventListener('click', () => {
        // 1. Esconde as informações e imagens abertas
        cardsInformacao.forEach(c => c.classList.remove('active'));

        // 2. Faz o botão de voltar SUMIR da tela
        btnVoltar.classList.remove('show');

        // 3. Traz de volta a Introdução e o Painel de botões originais
        telaInicialHero.classList.remove('hidden');
        painelBotoes.classList.remove('hidden');
    });
});