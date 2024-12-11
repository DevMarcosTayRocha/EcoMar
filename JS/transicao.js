document.addEventListener('DOMContentLoaded', function () {
    const burgerInput = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const card = document.querySelectorAll('.card');
    const waves = document.querySelectorAll('.wave');

    burgerInput.addEventListener('change', function () {
        if (this.checked) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    });

    function getAnimationDuration(index) {
        if (window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 768px)').matches) {
            return 0.5 + index * 0.1;
        } else {
            return 1 + index * 0.2;
        }
    }

    function animateWaves(target) {
        waves.forEach((wave, index) => {
            const transitionDuration = getAnimationDuration(index);
            wave.style.bottom = "40vh";
            wave.style.transition = `bottom ${transitionDuration}s ease`;
        });

        const delay = window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 768px)').matches 
            ? 50 
            : 500;
        setTimeout(() => {
            window.location.href = target;
        }, delay);
    }

    card.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();
            animateWaves(card.querySelector('a').href);
        });
    });

    const menuItems = menu.querySelectorAll('li');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            animateWaves(item.querySelector('a').href);
        });
    });
});
