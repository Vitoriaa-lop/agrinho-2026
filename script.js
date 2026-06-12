window.onload = function() {
    
    // Captura os elementos da Splash Screen e do Cabeçalho
    const telaEntrada = document.getElementById('tela-entrada');
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    
    // Captura os elementos das telas principais do site
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // 1. EVENTO: Clicar no Broto de Ouro em tela cheia para entrar no site
    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            // Esconde a tela de entrada de vez
            telaEntrada.classList.add('hidden');
            
            // Revela o site principal
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    // 2. EVENTO: Ao clicar em qualquer um dos 4 botões do menu principal
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            if (btnVoltar) btnVoltar.classList.add('show');

            cardsInformacao.forEach(card => card.classList.remove('active'));

            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
            }
        });
    });

    // 3. EVENTO: Ao clicar no botão "Voltar para o Início"
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            cardsInformacao.forEach(card => card.classList.remove('active'));
            btnVoltar.classList.remove('show');
            
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};