const images = [
    "img/1.png", "img/2.png", "img/3.png", "img/4.png", 
    "img/5.png", "img/6.png", "img/7.png", "img/8.png", 
    "img/9.png", "img/10.png", "img/11.png", "img/12.png"
];

let currentIndex = 0;
let interval;

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

function updateImage() {
    galleryImage.src = images[currentIndex];
    updateIndicators();
    resetImagePosition(); // Restablecer la posición de la imagen al actualizar
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
    });
}

function showNextImage() {
    slideImage('left');
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(updateImage, 300); // Tiempo de espera para la animación
    resetInterval();
}

function showPrevImage() {
    slideImage('right');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setTimeout(updateImage, 300); // Tiempo de espera para la animación
    resetInterval();
}

function slideImage(direction) {
    if (direction === 'left') {
        galleryImage.classList.add('slide-left');
    } else {
        galleryImage.classList.add('slide-right');
    }
}

function resetImagePosition() {
    galleryImage.classList.remove('slide-left', 'slide-right'); // Resetear la clase de animación
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos
}

// Inicializar el intervalo al cargar la página
interval = setInterval(showNextImage, 3000);

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);