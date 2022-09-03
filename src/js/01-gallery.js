// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li style="list-style: none"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryEl);

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: '250',
});
