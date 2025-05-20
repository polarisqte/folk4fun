// 2025 | Piotr N
const slides = document.getElementById("main-carousel-slides");
const tours_btn = document.getElementById("tours-page-btn");
const total = slides.children.length;

let slide_index = 0;

function showSlide(i) {
    slide_index = (i + total) % total;
    slides.style.transform = `translateX(-${slide_index * 100}%)`;
}

setInterval(() => {
    showSlide(slide_index + 1);
}, 7500);

tours_btn.addEventListener("click", function() {
    window.location.href = "tour.html";
});