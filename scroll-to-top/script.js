// pixel amount needed to show the scroll button
const scrollNeedToShow = 300;
const scroll = document.querySelector('.scroll');

document.addEventListener('scroll', () => {
  if (getScrolledDocumentHeight() > scrollNeedToShow) {
    scroll.classList.add('_active');
  } else {
    scroll.classList.remove('_active');
  }
});

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// the scrolled page pixels
function getScrolledDocumentHeight() {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop);
}