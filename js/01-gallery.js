import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImagesCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onClickGalleryImageOpen);

// Создаем галерею

function createImagesCardsMarkup(galleryItems) {  
    return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join('');
           }
 
function onClickGalleryImageOpen(evt) {
  const { target } = evt;
  const isTargetImage = target.classList.contains("gallery__image");

  if (isTargetImage) {
    evt.preventDefault();
    let isModalOpen = false;
    const instance = basicLightbox.create(
      `
         <img src="${evt.target.dataset.source}" width="800" height="600">
      `,
      { onClose: () => document.removeEventListener("keyup", closeModal) }
    );
    isModalOpen = instance.show();
    
    if (isModalOpen) {
      document.addEventListener("keyup", closeModal);
    }
    // Закрытие модалки по Esc
function closeModal(evt) {
      if (evt.key === "Escape") {
        instance.close();
      }
    }
  }
}        
 

