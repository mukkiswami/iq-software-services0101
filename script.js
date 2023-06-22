// Get the necessary elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

// Add a click event listener to the hamburger icon button
menuToggle.addEventListener('click', function() {
  // Toggle the visibility of navigation links
  navLinks.classList.toggle('show');
});
