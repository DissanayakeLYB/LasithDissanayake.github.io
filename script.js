// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    const offset = targetSection.offsetTop;

    anime({
      targets: window,
      scrollTop: offset,
      duration: 800,
      easing: 'easeInOutExpo'
    });
  });
});

// Basic form validation (optional)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.querySelector('.contact form input[name="name"]');
  const emailInput = document.querySelector('.contact form input[name="email"]');
  const messageInput = document.querySelector('.contact form textarea[name="message"]');

  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
  }

  // Validate email (basic check)
  if (!emailInput.value.trim().match(/^[\w-\.]+@[\w-\.]+\.[a-z]{2,4}$/i)) {
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
  }

  if (isValid) {
    // Handle form submission (you can implement your own functionality here, e.g., sending an email)
    alert('Thank you for your message!');
    contactForm.reset();
  }
});
