class Expander {
  constructor(elem, elemTo){
    this.elem = elem;
    this.elemTo = elemTo;

    this.expendItem = document.createElement('div')
    this.expendItem.classList.add('expander')
    this.container = document.querySelector('.gallerie-container')
    this.container.appendChild(this.expendItem)

    this.create()
  }
  create(){
    this.disableAnimation();
    this.expendItem.style.width = (this.elem.getBoundingClientRect().width) + 'px'
    this.expendItem.style.height = (this.elem.getBoundingClientRect().height) + 'px'
    this.expendItem.style.top = (this.elem.getBoundingClientRect().top) + 'px'
    this.expendItem.style.left = (this.elem.getBoundingClientRect().left - this.container.getBoundingClientRect().left) + 'px'
    this.expendItem.style.borderRadius = this.elem.style.borderRadius || 0
    console.log('this.elem.style', this.elem.style)

    this.enableAnimation();
    this.expendItem.style.opacity = 1

    setTimeout(() => {
      this.expendItem.style.width = (this.elemTo.getBoundingClientRect().width) + 'px'
      this.expendItem.style.height = (this.elemTo.getBoundingClientRect().height) + 'px'
      this.expendItem.style.top = (this.elemTo.getBoundingClientRect().top) + 'px'
      this.expendItem.style.left = (this.elemTo.getBoundingClientRect().left - this.container.getBoundingClientRect().left) + 'px'
      this.expendItem.style.borderRadius = this.elemTo.style.borderRadius || 0
      this.animate()
    },500)
  }
  animate(){
    setTimeout(() => {
      console.log('Show')

      setTimeout(() => { // XHR HERE
        this.expendItem.style.opacity = 0;
        setTimeout(() => this.expendItem.remove(),500)
      },500)
    },500)
  }
  enableAnimation() {
    this.expendItem.classList.add('animated')
  }
  disableAnimation() {
    this.expendItem.classList.remove('animated')
  }
}
export default Expander;