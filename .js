const banner = document.querySelector('.banner');

function handleScroll() {
  banner.classList.add('fade-out');
  window.removeEventListener('scroll', handleScroll);
}

window.addEventListener('scroll', handleScroll);