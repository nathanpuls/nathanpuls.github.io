window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll-up").style.display = "block";
  } else {
    document.getElementById("scroll-up").style.display = "none";
  }
}

// Add click event listener to scroll-up button
document.getElementById("scroll-up").addEventListener("click", function() {
  // Scroll to top of page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
