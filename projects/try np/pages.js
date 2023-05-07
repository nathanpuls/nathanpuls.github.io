const pages = [
  
  'nav', 
  
  'about', 
  'more', 
  'footer'

];

pages.forEach(page => {
  fetch(`${page}.html`)
    .then(response => response.text())
    .then(html => {
      document.querySelector(`#${page}`).innerHTML = html;
    });
});





/* let nav = 'nav'; */




/* fetch(`${nav}.html`)
  .then(response => response.text())
  .then(html => {
    document.querySelector(`#${nav}`).innerHTML = html;
  }); */

/*   fetch('about.html')
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
  }); */