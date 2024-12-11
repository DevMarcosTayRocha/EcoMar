const menuToggle = document.getElementsByClassName('burger')[0]; // Correção no nome da classe
const menu = document.getElementById('menu');
const checkbox = menuToggle.querySelector('input'); 

document.addEventListener('DOMContentLoaded', function () {
    const burgerInput = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burgerInput.addEventListener('change', function () {
        if (this.checked) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', function() {
    const indicacao = document.querySelector('.indicacao');
    if (window.scrollY > 0) {
        indicacao.classList.add('hidden');
    } else {
        indicacao.classList.remove('hidden');
    }
});
