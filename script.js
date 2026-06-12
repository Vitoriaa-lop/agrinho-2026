window.onload = function() {
    
    const telaEntrada = document.getElementById('tela-entrada');
    const cabecalhoPrincipal = document.getElementById('cabecalho-principal');
    const botoesAcao = document.querySelectorAll('.tab-btn');
    const cardsInformacao = document.querySelectorAll('.content-card');
    const telaInicialHero = document.getElementById('tela-inicial-hero');
    const painelBotoes = document.getElementById('painel-botoes');
    const btnVoltar = document.getElementById('btn-voltar');

    // ENTRAR NO SITE
    if (telaEntrada) {
        telaEntrada.addEventListener('click', function() {
            telaEntrada.classList.add('hidden');
            document.body.classList.add('fordo-desfocado');
            document.body.classList.add('fundo-desfocado');
            if (cabecalhoPrincipal) cabecalhoPrincipal.classList.remove('hidden');
            if (telaInicialHero) telaInicialHero.classList.remove('hidden');
            if (painelBotoes) painelBotoes.classList.remove('hidden');
        });
    }

    // CLICAR NAS ABAS (EFEITO DE FORA PARA DENTRO)
    botoesAcao.forEach(botao => {
        botao.addEventListener('click', function() {
            if (telaInicialHero) telaInicialHero.classList.add('hidden');
            if (painelBotoes) painelBotoes.classList.add('hidden');
            if (btnVoltar) btnVoltar.classList.add('show');

            document.body.classList.remove('fundo-desfocado');

            cardsInformacao.forEach(card => {
                card.classList.remove('active');
                const img = card.querySelector('.card-image');
                if (img) {
                    img.classList.remove('animar-imagem');
                    img.classList.remove('reverter-imagem'); // Garante limpeza total
                }
            });

            const alvoId = this.getAttribute('data-target');
            const cardAlvo = document.getElementById(alvoId);
            if (cardAlvo) {
                cardAlvo.classList.add('active');
                
                const imagemAlvo = cardAlvo.querySelector('.card-image');
                if (imagemAlvo) {
                    void imagemAlvo.offsetWidth; 
                    imagemAlvo.classList.add('animar-imagem');
                }
            }
        });
    });

    // CLICAR EM VOLTAR (EFEITO REVERSO DE DENTRO PARA FORA)
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            // Localiza qual card está aberto no momento
            const cardAtivo = document.querySelector('.content-card.active');
            
            if (cardAtivo) {
                const img = cardAtivo.querySelector('.card-image');
                if (img) {
                    img.classList.remove('animar-imagem');
                    void img.offsetWidth; // Reseta o estado físico do elemento
                    img.classList.add('reverter-imagem'); // Dispara o efeito de explosão/zoom out
                }
            }

            // Aguarda 500ms (tempo da animação rodar) antes de sumir com o card
            setTimeout(function() {
                cardsInformacao.forEach(card => {
                    card.classList.remove('active');
                    const img = card.querySelector('.card-image');
                    if (img) img.classList.remove('reverter-imagem');
                });
                
                btnVoltar.classList.remove('show');
                document.body.classList.add('fundo-desfocado');
                
                if (telaInicialHero) telaInicialHero.classList.remove('hidden');
                if (painelBotoes) painelBotoes.classList.remove('hidden');
            }, 500); // 500 milissegundos de espera perfeita
        });
    }
};