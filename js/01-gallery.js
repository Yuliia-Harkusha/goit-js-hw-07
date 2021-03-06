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

const instance = basicLightbox.create(`
		<img class='gallery__image' src=''>`, {

    onShow: instance => {
        window.addEventListener('keydown', onEscClick);
  },
      
    onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
  },
    });


function selectImg(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
};

function onEscClick(evt) {
    if (evt.code === 'Escape' && instance.visible())
    return instance.close();
};

