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

            // Oculta todos os cards antes de abrir o novo
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
                    // --- TRUQUE DO MESTRE: Descobre onde está o centro exato da tela atual ---
                    const coordenadasRetangulo = imagemAlvo.getBoundingClientRect();
                    const centroXMatematico = (window.innerWidth / 2) - (coordenadasRetangulo.left + coordenadasRetangulo.width / 2);
                    const centroYMatematico = (window.innerHeight / 2) - (coordenadasRetangulo.top + coordenadasRetangulo.height / 2);

                    // Passa as coordenadas calculadas diretamente para as variáveis do CSS
                    imagemAlvo.style.setProperty('--x-centro', `${centroXMatematico}px`);
                    imagemAlvo.style.setProperty('--y-centro', `${centroYMatematico}px`);

                    // Dispara a animação lisa
                    void imagemAlvo.offsetWidth; 
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