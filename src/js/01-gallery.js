import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//Tworzenie galerii w strukturze HTML
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  const galleryItem = document.createElement(`div`);
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML += `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  gallery.insertAdjacentElement("afterbegin", galleryItem);
});

//Obsługa kliknięcia w obrazek w galerii
const handleImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" || event.keyCode === 27) {
      instance.close();
    }
  });
};


gallery.addEventListener("click", handleImageClick);
