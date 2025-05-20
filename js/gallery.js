const thumbnails = document.querySelectorAll('.gallery-thumb');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.lightbox-close');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    lightboxImage.src = thumb.src;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});