document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".C"); // Botão que irá disparar a rolagem
    const introducao = document.querySelector(".introducao"); // Seção de introdução

    // Função para rolar suavemente até a introdução
    button.addEventListener("click", () => {
        // Posição do topo da seção 'introducao'
        const targetPosition = introducao.offsetTop;
        const startPosition = window.scrollY; // Posição atual do scroll
        const distance = targetPosition - startPosition;
        const duration = 800; // Duração da animação em ms
        let startTime = null;

        // Função de animação
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Função de easing (suavização) da rolagem
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        // Inicia a animação
        requestAnimationFrame(animation);
    });
});
