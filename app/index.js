/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

class Loader {
  constructor(){
    this.loader = document.querySelector('section.loader')
  }
  enableLoader(){
    this.loader.classList.add('show')
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('test');
        this.loader.classList.remove('show');
        document.body.classList.remove('no-animated')
        resolve();
      }, 2000);
    });
  }
  enableLoaderAfter(){
    this.loader.classList.add('show')
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('test');
        this.loader.classList.remove('show');
        document.body.classList.remove('no-animated')
        resolve();
      }, 2000);
    });
  }
  toggleAppears(timing){
    document.querySelectorAll('.appear,.disappear').forEach(item => {
      item.classList.toggle('appear')
      item.classList.toggle('disappear')
    })
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timing);
    });
  }
}

window.onload = () => {

  let logo = document.querySelector('#logo')
  let loader = new Loader();
  loader.enableLoader().then(() => {
    loader.toggleAppears(0);
  })
  window.addEventListener('click', evt => {
    evt.preventDefault()
    loader.toggleAppears(1000).then(()=> {
      loader.enableLoader().then(() => {
    loader.toggleAppears(0);
      })
    })
  })
}