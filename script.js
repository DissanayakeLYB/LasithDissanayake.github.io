// JavaScript to handle header animation on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var heroHeight = document.querySelector('.hero').clientHeight;
  if (window.scrollY > heroHeight) {
    header.classList.add('visible');
    header.classList.remove('hidden');
  } else {
    header.classList.add('hidden');
    header.classList.remove('visible');
  }
});
