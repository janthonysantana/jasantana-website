// Init
function updateScrollFade() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Remove both classes first
  document.body.classList.remove('at-top', 'at-bottom');
  
  // Add classes based on scroll position
  if (scrollTop < 10) {
    document.body.classList.add('at-top');
  }
  if (scrollTop > docHeight - 10) {
    document.body.classList.add('at-bottom');
  }
}

// Update on scroll
window.addEventListener('scroll', updateScrollFade);

// Initial check
updateScrollFade();