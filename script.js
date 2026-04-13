const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    // Calculamos el desplazamiento: si el índice es 1, se mueve -100%
    const width = images[0].clientWidth;
    track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    // Si llegamos al final, volvemos al principio
    if (index >= images.length) {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    // Si retrocedemos desde el inicio, vamos a la última imagen
    if (index < 0) {
        index = images.length - 1;
    }
    updateCarousel();
});

// Ajustar el tamaño si el usuario cambia el tamaño de la ventana
window.addEventListener('resize', updateCarousel);