const pages = [
  
  'nav', 
  'time',
  'api',
  'about', 
  'more', 
  'footer'

];

pages.forEach(page => {
  fetch(`${page}/${page}.html`)
    .then(response => response.text())
    .then(html => {
      document.querySelector(`#${page}`).innerHTML = html;
    });
});


const contentDiv = document.getElementById('data2');

  fetch('api/api.html')
    .then(response => response.text())
    .then(data => {
      // Insert the HTML data into the "content" div
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
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