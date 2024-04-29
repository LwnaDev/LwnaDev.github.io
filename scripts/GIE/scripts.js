let index = 0;

function rotateImages() {
  const carousel = document.getElementById('carousel');
  index = (index + 1) % carousel.children.length; 
  const offset = index * carousel.clientWidth;
  for (const img of carousel.children) {
    img.style.transform = `translateX(-${offset}px)`;
  }
}

setInterval(rotateImages, 9000);