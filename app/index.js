/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Swiper from 'swiper'
import Loader from './Loader.class';
import Expander from './Expander.class';

// ================================
// START YOUR APP HERE
// ================================
window.isMobile = () => {
  return window.innerWidth < 769
}
window.onload = () => {

  let loader = new Loader()

  let logo = document.querySelector('#logo')
  let hamburger = document.querySelector('.hamburger')
  let mobileMenu = document.querySelector('.menu')
  let expendItem = document.querySelector('.expander')
  let sidebar = document.querySelector('.sidebar')
  let thumbnails = document.querySelectorAll('.gallerie-thumbnail')
  let thumbnailsBack = document.querySelector('.gallerie-back')
  let sliderElement = document.querySelector('.swiper-container')
  let selectedThumbnail = null;
  let slider = null;

  if (sliderElement) slider = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-cbutton-next',
      prevEl: '.swiper-cbutton-prev',
    },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
  });

  loader.enableLoader().then(() => {
    loader.toggleAppears();
  })
  hamburger.addEventListener('click', evt => {
    if (window.isMobile()) {
      evt.preventDefault()
      hamburger.classList.toggle('active')
      mobileMenu.classList.toggle('active')
    }
  })
  thumbnails.forEach(item => {
    item.addEventListener('click', evt => {
      evt.preventDefault()
      selectedThumbnail = item.children[0];
      new Expander(item.children[0], document.querySelector('.gallerie-container'), () => {
        sidebar.classList.add('view-active')
        if (sliderElement) slider.update()
      }, null)
    })
  })
  if (thumbnailsBack)
  thumbnailsBack.addEventListener('click', evt => {
    evt.preventDefault()
    new Expander(document.querySelector('.gallerie-container'), selectedThumbnail, null, () => {
        sidebar.classList.remove('view-active')
        console.log('test')
      })
  })
}