import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')


function createMarkup(arr) {
    
    return arr.map((image) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join('')
    

}

galleryList.insertAdjacentHTML('beforeend',createMarkup(galleryItems))

galleryList.addEventListener('click',handlerImageClick)

function handlerImageClick(evt) {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }
    const picture = evt.target.dataset.source
    const instance = basicLightbox.create(`<div class = "modal"> <img src = "${picture}"></div>`)
    instance.show()

  
}
