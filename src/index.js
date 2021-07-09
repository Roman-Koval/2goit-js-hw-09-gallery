import './sass/main.scss';
import img1 from './images/prev/himilayan-blue-poppy-4202825__340.jpg';
import img11 from './images/original/himilayan-blue-poppy-4202825_1280.jpg';
import img2 from './images/prev/container-4203677__340.jpg';
import img22 from './images/original/container-4203677_1280.jpg';
import img3 from './images/prev/beach-4206785__340.jpg';
import img33 from './images/original/beach-4206785_1280.jpg';
import img4 from './images/prev/flowers-1835619__340.jpg';
import img44 from './images/original/flowers-1835619_1280.jpg';
import img5 from './images/prev/mountains-3674334__340.jpg';
import img55 from './images/original/mountains-3674334_1280.jpg';
import img6 from './images/prev/landscape-4208255__340.jpg';
import img66 from './images/original/landscape-4208255_1280.jpg';
import img7 from './images/prev/the-alps-4209272__340.jpg';
import img77 from './images/original/the-alps-4209272_1280.jpg';
import img8 from './images/prev/landscape-4208571__340.jpg';
import img88 from './images/original/landscape-4208571_1280.jpg';
import img9 from './images/prev/lighthouse-4208843__340.jpg';
import img99 from './images/original/lighthouse-4208843_1280.jpg';
export const galleryItems = [
    {
        preview: img1,
        original: img11,
      description: 'Hokkaido Flower',
    },
    {
        preview: img2,
        original: img22,
      description: 'Container Haulage Freight',
    },
    {
        preview: img3,
        original: img33,
      description: 'Aerial Beach View',
    },
    {
        preview: img4,
        original: img44,
      description: 'Flower Blooms',
    },
    {
        preview: img5,
        original: img55,
      description: 'Alpine Mountains',
    },
    {
        preview: img6,
        original: img66,
      description: 'Mountain Lake Sailing',
    },
    {
        preview: img7,
        original: img77,
      description: 'Alpine Spring Meadows',
    },
    {
        preview: img8,
        original: img88,
      description: 'Nature Landscape',
    },
    {
        preview: img9,
        original: img99,
      description: 'Lighthouse Coast Sea',
    },
  ];

const refs = {
    imgModal: document.querySelector('.lightbox__image'),
    buttonClose: document.querySelector('.lightbox__button'),
    divLightbox: document.querySelector('.js-lightbox'),
    galeryEl: document.querySelector('.js-gallery'),
    divOverlay: document.querySelector('.lightbox__overlay')
  }
  
  
  refs.galeryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
  
  function createGalleryItems() {
      const galleryMarkup = galleryItems.map(({ original, preview, description }) => {
          return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source="${original}" 
                  alt="${description}"/>
              </a>
          </li>`
      }
      ).join('');
      return galleryMarkup;
      
  }
  
  refs.galeryEl.addEventListener('click', onGalleryContainerClick);
  
  function onGalleryContainerClick(e) {
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
      return
    } 
    refs.divLightbox.classList.add('is-open');
    addImageAttribute( e.target.alt, e.target.closest('.gallery__link').href );
    window.addEventListener('keydown', onEskKeyPress);
  }
  
  function addImageAttribute(alt, src) {
    refs.imgModal.src = '';
    if (refs.divLightbox.classList.contains('is-open')) {
      refs.imgModal.src = src;
      refs.imgModal.alt = alt;
    } else {
      refs.imgModal.src = '';
    }
  }
  
  refs.buttonClose.addEventListener('click', onCloseElClick);
  
  function onCloseElClick() {
    window.removeEventListener('keydown', onEskKeyPress);
    if (refs.divLightbox.classList.contains('is-open')){
      refs.divLightbox.classList.remove('is-open')
    }
    
  }
  
  refs.divOverlay.addEventListener('click', onCloseElClick);
  
  function onEskKeyPress(e) {
    if (e.code === 'Escape') { onCloseElClick() 
    }
    
    refs.divOverlay.addEventListener("click", arrowLeft);
    refs.divOverlay.addEventListener("click", arrowRight);
    window.addEventListener("keydown", (e) => {
  
  if (e.key === "ArrowLeft") {
    arrowLeft()
  }
  if (e.key === "ArrowRight") {
    arrowRight()
  }

});

function setNewSrc(step, index) {
    imgModal.dataset.index = `${index + step}`
    imgModal.src = galleryItems[index + step].original
  }
  function arrowLeft() {
    let index = +imgModal.dataset.index
    if (index === 0) {
      setNewSrc(0, galleryItems.length - 1)
      return
    }
    console.log(index);
    setNewSrc(-1, index)
  }


function arrowRight() {
  let index = +imgModal.dataset.index
  if (index === galleryItems.length - 1) {
    setNewSrc(0, 0)
    return
  }
  console.log(index);
  setNewSrc(1, index)
}  
  }
  console.log('good day Алена');