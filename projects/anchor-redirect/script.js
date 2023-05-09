const apiUrl = 'https://linksaw.com/api/1.1/obj/linksaw-link?constraints=[{"key":"userid","constraint_type":"equals","value":"1616949060505x340236627561480100"},{"key":"tag","constraint_type":"equals","value":"fast"}]';



const baseurl = 'https://';
const endurl = '.saw.is';
const linkDiv = document.getElementById('links');

const hash = window.location.hash.substring(1); // extract the anchor part of the URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const name = result['name'];
      const url = result['url'];
      return { name, url };
      
    });

    // Find the associated URL and redirect to it
    const associatedResult = results.find(result => result.name === hash);
    if (associatedResult) {
      window.location.href = associatedResult.url;
      return;
    }

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
