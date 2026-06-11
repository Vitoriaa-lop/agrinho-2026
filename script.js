// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.content-card');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 1. Remove o estado ativo de todos os botões
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Remove o estado ativo de todos os cartões de conteúdo
            cards.forEach(card => card.classList.remove('active'));

            // 3. Adiciona a classe ativa ao botão que foi clicado
            event.currentTarget.classList.add('active');

            // 4. Identifica o alvo através do atributo 'data-target' e ativa o cartão correspondente
            const targetId = event.currentTarget.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);
            
            if (targetCard) {
                targetCard.classList.add('active');
            }
        });
    });
});