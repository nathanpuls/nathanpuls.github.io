const navLinks = document.querySelectorAll(".navbar-nav > li > a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const isShown = navbarCollapse.classList.contains("show");
    if (isShown) {
      navbarCollapse.classList.toggle("show");
    }
  });
});
