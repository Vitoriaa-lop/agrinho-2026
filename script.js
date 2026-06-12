window.onload = function() {
    
    // Captura os elementos necessários
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // Executa as ações para cada botão de tema clicado
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            // 1. Oculta a tela de introdução e o painel de botões
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            
            // 2. Faz o botão voltar aparecer na tela
            if (btnVoltar) btnVoltar.classList.add('show');

            // 3. Garante que nenhum card antigo fique aberto
            cardsInformacao.forEach(card => card.classList.remove('active'));

            // 4. Localiza o card correto e exibe na tela
            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
            }
        });
    });

    // Executa a ação de voltar para o menu principal
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            // 1. Esconde as caixas de informações abertas
            cardsInformacao.forEach(card => card.classList.remove('active'));
            
            // 2. Esconde o próprio botão de voltar removendo a classe 'show'
            btnVoltar.classList.remove('show');
            
            // 3. Traz de volta os botões principais e a introdução da página
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};