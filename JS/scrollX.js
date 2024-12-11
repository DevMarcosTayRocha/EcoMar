const carroselContainer = document.querySelector('.carrosel'); 
const cardsContainer = document.querySelector('.cards');

carroselContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY * 3; 
    cardsContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
