class Loader {
  constructor(){
    this.loader = document.querySelector('section.loader')
  }
  enableLoader(timing){
    if (typeof timing === 'undefined') timing = 0;
    this.loader.classList.add('show')
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('test');
        this.loader.classList.remove('show');
        document.body.classList.remove('no-animated')
        resolve();
      }, timing);
    });
  }
  toggleAppears(timing){
    if (typeof timing === 'undefined') timing = 0;
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
export default Loader;