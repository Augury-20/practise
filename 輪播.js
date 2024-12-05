let currentIndex = 0;

function showSlide(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// 自動播放（選擇性功能）
setInterval(() => {
  nextSlide();
}, 3000);
