/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
window.onload = () => {

  let logo = document.querySelector('#logo')
  let container = document.querySelector('.container')

  logo.addEventListener('click', evt => {
    evt.preventDefault()
    console.log('detest')
    container.classList.remove('container-contact')
    container.classList.add('container-frontpage')
    console.log('container.classList', container.classList)
  })
}