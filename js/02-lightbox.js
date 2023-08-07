import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({description,original,preview}) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" data-source = "${original}" />
   </a>
</li>`).join('')
}

gallery.insertAdjacentHTML('beforeend',createMarkup(galleryItems))

gallery.addEventListener('click', handlerClick)

function handlerClick(evt) {
    evt.preventDefault()
    if (!evt.target.nodeName === "IMG" ) {
        return
    }

    let gallery = new SimpleLightbox('.gallery a',{captionsData:"alt",captionsDelay:250});

}