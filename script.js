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

    // 1. EVENTO: Clicar na Splash Screen ativa o fundo desfocado na tela inicial
    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            telaEntrada.classList.add('hidden');
            
            // Adiciona o broto desfocado no fundo do site
            document.body.classList.add('fundo-desfocado');
            
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    // 2. EVENTO: Ao clicar em um botão de conteúdo, remove o desfoque para ver o card no verde
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            if (btnVoltar) btnVoltar.classList.add('show');

            // REMOVE o desfoque para deixar o fundo verde padrão nos cards
            document.body.classList.remove('fundo-desfocado');

            cardsInformacao.forEach(card => card.classList.remove('active'));

            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
            }
        });
    });

    // 3. EVENTO: Ao clicar em "Voltar", reativa o broto desfocado no fundo
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            cardsInformacao.forEach(card => card.classList.remove('active'));
            btnVoltar.classList.remove('show');
            
            // ADICIONA de volta o desfoque porque voltamos para a tela inicial
            document.body.classList.add('fundo-desfocado');
            
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};