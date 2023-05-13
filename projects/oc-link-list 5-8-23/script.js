const apiUrl = `https://linksaw.com/api/1.1/obj/linksaw-link`;
const baseurl = 'https://';
const endurl = '.saw.is';

const linkDiv = document.getElementById("links");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const name = result['name'];
      return { name };
    });

    // Create a new div with a link for each name and add it to linkDiv
    results.forEach(result => {
      const div = document.createElement('div');
const link = document.createElement('a');

      link.textContent = `${result.name}`;
      link.href = `${baseurl}${result.name}${endurl}`;
      div.appendChild(link);
      linkDiv.appendChild(div);
    });
    
  })
  .catch(error => console.log(error));
