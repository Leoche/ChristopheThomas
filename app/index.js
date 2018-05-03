/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import Loader from './Loader.class';

// ================================
// START YOUR APP HERE
// ================================

window.onload = () => {

  let logo = document.querySelector('#logo')
  let loader = new Loader();
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
}