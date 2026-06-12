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

    // 1. EVENTO: Clicar no Broto de Ouro gigante para entrar no site
    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            // Adiciona a classe hidden para sumir com a splash screen
            telaEntrada.classList.add('hidden');
            
            // Remove a classe hidden para revelar o site principal
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    // 2. EVENTO: Ao clicar em qualquer um dos 4 botões do menu principal
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            // Oculta a introdução e o painel de botões principal
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            
            // Exibe o botão de voltar na tela
            if (btnVoltar) btnVoltar.classList.add('show');

            // Limpa qualquer card aberto anteriormente
            cardsInformacao.forEach(card => card.classList.remove('active'));

            // Exibe o card correspondente ao botão clicado
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
            // Fecha as caixas de informações abertas
            cardsInformacao.forEach(card => card.classList.remove('active'));
            
            // Remove o botão de voltar da tela
            btnVoltar.classList.remove('show');
            
            // Exibe a tela principal com a introdução e os botões de menu novamente
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};