const apiUrl = 'https://linksaw.com/version-test/api/1.1/obj/np-site';
const baseurl = '/#';

const linkDiv = document.getElementById('pages');
const textDiv = document.getElementById('text');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results;

    // Create an object to store the text for each page
    const textByPage = {};
    results.forEach(result => {
      const page = result['page'];
      const text = result['text'];
      if (page && text) {
        textByPage[page] = text;
      }
    });

    // Reverse the order of the results array
    results.reverse();

    // Create a new div with a link for each page and add it to linkDiv
    results.forEach(result => {
      const page = result['page'];
      if (page) {
        const div = document.createElement('div');
        const link = document.createElement('button');

        link.textContent = `${page}`;
        link.href = `${baseurl}${page}`;
        div.appendChild(link);
        linkDiv.appendChild(div);

        // Add event listener to update displayed text when link is clicked
        link.addEventListener('click', event => {
          event.preventDefault();
          const pageName = event.target.textContent;
          const text = textByPage[pageName];
          if (text) {
            textDiv.textContent = text;
            window.location.hash = pageName;
          } else {
            textDiv.textContent = '';
          }
        });
      }
    });

    // Check for hash on page load and load corresponding text
    const hash = window.location.hash.substring(1);
    const initialText = textByPage[hash];
    if (initialText) {
      textDiv.textContent = initialText;
    } else {
      textDiv.textContent = '';
    }
  })
  .catch(error => console.log(error));

// Set the page title
const pageTitle = document.getElementById('page-title');

function updatePageTitle(pageName) {
  pageTitle.textContent = pageName;
}

//PAGE TITLE
const pageName = window.location.hash.slice(1);
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  if (button.dataset.page === pageName) {
    button.click();
  }
});

updatePageTitle(pageName);

// Add event listeners to buttons to update page title
buttons.forEach(button => {
  button.addEventListener('click', () => {
    updatePageTitle(button.textContent);
  });
});

// Listen for changes to the hash and update the page title
window.addEventListener('hashchange', () => {
  const pageName = window.location.hash.slice(1);
  updatePageTitle(pageName);
});




