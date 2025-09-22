let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let interval = setInterval(nextSlide, 5000); // 5 saniyede bir değişsin

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}
