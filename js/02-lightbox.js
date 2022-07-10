import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
).join('');

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});