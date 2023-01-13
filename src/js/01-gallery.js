// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onGalleryItemClick);

  const galleryListItem = galleryItems.map(({ original, preview, description }) => {
    return `
   <a class="gallery__item" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
 ` ;
  }
  ).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryListItem);

 const gallery = new SimpleLightbox('.gallery a', {captionsData: "alt"});

function onGalleryItemClick(event) {
  event.preventDefault();  
  const isGalleryImage = event.target.classList.contains('gallery__image')
  if (!isGalleryImage) {
    return;
  } 

  gallery.on('close.simplelightbox', function () {
    gallery.close();
});

  }