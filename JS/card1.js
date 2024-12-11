const imageIDs = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < imageIDs.length; i++) {
    const id = imageIDs[i];
    const imagem = document.getElementById(id);
    const originalSrc = imagem.src;

    imagem.addEventListener('mouseover', function() {
        switch (id) {
            case 'first1':
                this.src = 'IMG/card1.mp4'; 
                break;
            case 'second1':
                this.src = 'IMG/card2.mp4';
                break;
            case 'third1':
                this.src = 'IMG/card3.mp4';
                break;
            case 'fourth1':
                this.src = 'IMG/card4.mp4';
                break;
        }
    });

    imagem.addEventListener('mouseout', function() {
        this.src = originalSrc;
    });
}