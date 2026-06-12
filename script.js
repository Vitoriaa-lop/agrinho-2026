window.onload = function() {
    
    const telaEntrada = document.getElementById('tela-entrada');
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // Mantém o controle dos cronômetros ativos para evitar bugs se clicar rápido
    let timersAnimacao = [];

    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            telaEntrada.classList.add('hidden');
            document.body.classList.add('fundo-desfocado');
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            if (btnVoltar) btnVoltar.classList.add('show');

            document.body.classList.remove('fundo-desfocado');

            // Limpa qualquer temporizador pendente
            timersAnimacao.forEach(t => clearTimeout(t));
            timersAnimacao = [];

            // Reseta o estado de todos os cards e imagens
            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) {
                    img.classList.remove('animar-imagem', 'imagem-fixada');
                }
            });

            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
                
                const imagemAlvo = cardAlvo.querySelector('.card-image');
                if (imagemAlvo) {
                    void imagemAlvo.offsetWidth; // Força reinício limpo do CSS
                    imagemAlvo.classList.add('animar-imagem');

                    // EXATAMENTE após 3 segundos (tempo do CSS), fixa a imagem no lugar naturalmente
                    const timer = setTimeout(() => {
                        imagemAlvo.classList.remove('animar-imagem');
                        imagemAlvo.classList.add('imagem-fixada');
                    }, 3000);
                    timersAnimacao.push(timer);
                }
            }
        });
    });

    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            timersAnimacao.forEach(t => clearTimeout(t));
            
            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) img.classList.remove('animar-imagem', 'imagem-fixada');
            });
            
            btnVoltar.classList.remove('show');
            document.body.classList.add('fundo-desfocado');
            
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};