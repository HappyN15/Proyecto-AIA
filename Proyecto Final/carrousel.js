// Carrusel de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

function changeImage() {
  if (currentIndex >= totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  const newTransform = -currentIndex * 100;
  document.querySelector('.carousel-slide').style.transform = `translateX(${newTransform}%)`;
}

// Cambiar la imagen cada 3 segundos
setInterval(changeImage, 3000);
