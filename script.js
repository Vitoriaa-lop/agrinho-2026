window.onload = function() {
    
    // CAPTURA DE TODOS OS ELEMENTOS DO SITE
    const telaEntrada = document.getElementById('tela-entrada');
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // EVENTO: CLIQUE PARA SAIR DA TELA DE ENTRADA (SPLASH SCREEN)
    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            telaEntrada.classList.add('hidden');
            document.body.classList.add('fundo-desfocado');
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    // EVENTO: CLICAR NOS BOTÕES DAS ABAS INFORMATIVAS
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            // Oculta os textos de boas-vindas e o painel de seleção
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            if (btnVoltar) btnVoltar.classList.add('show');

            // Retira o desfoque para focar no cartão selecionado
            document.body.classList.remove('fundo-desfocado');

            // Reseta o estado ativo de todos os cartões e remove animações passadas
            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) img.classList.remove('animar-imagem');
            });

            // Mostra o cartão alvo do clique
            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
                
                // Dispara a animação limpa na imagem interna
                const imagemAlvo = cardAlvo.querySelector('.card-image');
                if (imagemAlvo) {
                    void imagemAlvo.offsetWidth; // Truque para forçar o reinício da animação no CSS
                    imagemAlvo.classList.add('animar-imagem');
                }
            }
        });
    });

    // EVENTO: BOTÃO VOLTAR PARA O MENU INICIAL
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            // Oculta cartões e remove os efeitos das imagens
            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) img.classList.remove('animar-imagem');
            });
            
            // Reorganiza os botões e traz de volta o desfoque estético do fundo
            btnVoltar.classList.remove('show');
            document.body.classList.add('fundo-desfocado');
            
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};