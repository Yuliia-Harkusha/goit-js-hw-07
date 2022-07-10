import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

gallery.insertAdjacentHTML("beforeend", galleryList);

gallery.addEventListener('click', selectImg);


function selectImg(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`);
    instance.show();

    window.addEventListener('keydown', onEscClick);

    function onEscClick(evt) {
        if (evt.code === 'Escape' && basicLightbox.visible())
         return instance.close();
    }
}; 
