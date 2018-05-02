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

  window.addEventListener('click', evt => {
    evt.preventDefault()
    document.querySelectorAll('.appear,.disappear').forEach(item => {
      item.classList.toggle('appear')
      item.classList.toggle('disappear')
    })
  })
}