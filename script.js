
// 1. Mudança de Aparência do Menu ao Rolar (Scroll Inteligente)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.backgroundColor = '#05120B'; // Tom de verde quase preto, mais denso
        header.style.padding = '15px 10%';       // Reduz a altura para ficar discreto
    } else {
        header.style.backgroundColor = '#0B2518'; // Retorna ao verde floresta original
        header.style.padding = '25px 10%';
    }
});

// 2. Animação de Entrada dos Elementos (Efeito de Revelação Elegante)
const blocosParaAnimar = document.querySelectorAll('.manifesto-section, .timeline-item, .stat-card');

// Inicializa escondendo os blocos alvo
blocosParaAnimar.forEach(bloco => bloco.classList.add('escondido'));

const dispararAnimacaoScroll = () => {
    blocosParaAnimar.forEach(bloco => {
        const topoElemento = bloco.getBoundingClientRect().top;
        const gatilhoAtivacao = window.innerHeight * 0.85; // Dispara quando o elemento ocupa 85% da tela

        if (topoElemento < gatilhoAtivacao) {
            bloco.classList.add('visivel');
        }
    });
};

// Vincula a função aos eventos de movimentação e carregamento
window.addEventListener('scroll', dispararAnimacaoScroll);
window.addEventListener('DOMContentLoaded', dispararAnimacaoScroll);
