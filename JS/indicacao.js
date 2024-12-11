window.addEventListener('scroll', function() {
    const indicacao = document.querySelector('.indicacao');
    if (window.scrollY > 0) { 
        indicacao.classList.add('hidden'); 
    } else {
        indicacao.classList.remove('hidden'); 
    }
});