window.onload = function() {
    
    const telaEntrada = document.getElementById('tela-entrada');
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

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

            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) img.classList.remove('animar-imagem');
            });

            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
                
                const imagemAlvo = cardAlvo.querySelector('.card-image');
                if (imagemAlvo) {
                    void imagemAlvo.offsetWidth; // Força reinício limpo da animação
                    imagemAlvo.classList.add('animar-imagem');
                }
            }
        });
    });

    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) img.classList.remove('animar-imagem');
            });
            
            btnVoltar.classList.remove('show');
            document.body.classList.add('fundo-desfocado');
            
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }
};