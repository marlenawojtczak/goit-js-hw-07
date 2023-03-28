import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//Tworzenie galerii w strukturze HTML
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  const galleryItem = document.createElement(`li`);
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML += `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  gallery.insertAdjacentElement("afterbegin", galleryItem);
});

//Skorzystanie z biblioteki SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
