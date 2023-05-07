fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#navbar').innerHTML = html;
  });

  fetch('about.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#about').innerHTML = html;
  });

  fetch('more.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#more').innerHTML = html;
  });

  fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#footer').innerHTML = html;
  });