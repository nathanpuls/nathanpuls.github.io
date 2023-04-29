// Get all navbar links
const navLinks = document.querySelectorAll('.navbar-nav > li > a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Get navbar collapse div
    const navbarCollapse = document.querySelector('.navbar-collapse');
    // Check if navbar collapse div is shown
    const isShown = navbarCollapse.classList.contains('show');
    // If it's shown, toggle the collapse class to hide the menu
    if (isShown) {
      navbarCollapse.classList.toggle('show');
    }
  });
});
