
import { galleryItems } from './gallery-items';


// Add imports above this line
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line


const gallery = document.querySelector('.gallery');
const customMarkup = buildMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', customMarkup);

let instance = null;

function buildMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </li>`;
  }).join('');
}

function markupClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const originalImageSrc = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${originalImageSrc}">`);
    instance.show();
    gallery.addEventListener('keydown', handleKeyPress);
  }
}

function handleKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
    gallery.removeEventListener('keydown', handleKeyPress);
  }
}

gallery.addEventListener('click', markupClick);
console.log(galleryItems);

console.log(galleryItems);
