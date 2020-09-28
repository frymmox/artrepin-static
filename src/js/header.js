const headerOpen = document.querySelector('.js-header-open')
const headerClose = document.querySelector('.js-header-close')
const headerList = document.querySelector('.header__collapse')

function showCollapse() {
  headerList.classList.add('header__collapse--open')
  disablePageScroll()
}

headerOpen.addEventListener('click', () => {
  const tl = gsap.timeline({onComplete: showCollapse})
  tl.to('#square-header', {scale: 400, x: -2400, y: -500, duration: 0.6, ease: 'expo.in'})
})

headerClose.addEventListener('click', () => {
  headerList.classList.remove('header__collapse--open')
  gsap.to('#square-header', {scale: 1, x: 0, y: 0, duration: 0.6, ease: 'expo.out'})
  scrollLock.enablePageScroll()
})
