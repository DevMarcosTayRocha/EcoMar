document.addEventListener("DOMContentLoaded", () => {
    const numeroElemento = document.getElementById("numero");
    const valorFinal = 1300000;
    const duracao = 2000;
    const incremento = 10000;
    let valorAtual = 0;
    let animacaoIniciada = false;

    const intervalo = duracao / (valorFinal / incremento);

    // Função de animação
    function iniciarAnimacao() {
        const animacao = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valorFinal) {
                clearInterval(animacao);
                valorAtual = valorFinal;
            }

            let valorFormatado = valorAtual;
            if (valorAtual >= 1000000) {
                valorFormatado = (valorAtual / 1000000).toFixed(1) + 'M';
            }

            numeroElemento.textContent = valorFormatado;
        }, intervalo);
    }

    window.revelar = ScrollReveal({ reset: true });

    revelar.reveal('.contador', {
        delay: 500, 
        beforeReveal: () => {
            if (!animacaoIniciada) {
                animacaoIniciada = true;  
                iniciarAnimacao();  
            }
        }
    });
});
