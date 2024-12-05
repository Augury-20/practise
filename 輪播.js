let currentIndex = 0;
let isAnimating = false; // 新增變數來判斷是否正在動畫中

function showSlide(index) {
  if (isAnimating) return; // 如果正在動畫中，直接返回
  isAnimating = true; // 標記為動畫中

  const carouselImages = document.querySelector('.carousel-images');
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  // 計算新的索引
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // 移動圖片
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;

  // 在動畫完成後重置標記
  setTimeout(() => {
    isAnimating = false; // 動畫完成後允許下一次切換
  }, 500); // 這裡的 500ms 應與 CSS 中的 `transition` 時間一致
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// 自動播放功能
setInterval(() => {
  if (!isAnimating) { // 自動播放時也需要檢查動畫狀態
    nextSlide();
  }
}, 3000);


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