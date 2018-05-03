/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Loader from './Loader.class';
import Expander from './Expander.class';

// ================================
// START YOUR APP HERE
// ================================

window.onload = () => {

  let loader = new Loader()

  let logo = document.querySelector('#logo')
  let expendItem = document.querySelector('.expander')
  let thumbnails = document.querySelectorAll('.gallerie-thumbnail')
  loader.enableLoader().then(() => {
    loader.toggleAppears();
  })
  logo.addEventListener('click', evt => {
    evt.preventDefault()
    loader.toggleAppears(1000).then(()=> {
      loader.enableLoader(2000).then(() => {
        loader.toggleAppears();
      })
    })
  })
  thumbnails.forEach(item => {
    item.addEventListener('click', evt => {
      evt.preventDefault()
      //new Expander(item.children[0], document.querySelector('.gallerie-container'))
      new Expander(document.querySelector('.gallerie-container'), item.children[0])
      /*.then(() => {
        console.log('Finished')
      })*/
    })
  })
}