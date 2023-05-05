const apiUrl = `https://linksaw.com/api/1.1/obj/linksaw-link`;

const resultsDiv = document.getElementById('results');
const linkDiv = document.getElementById("link");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const name = result['name'];
      const url = result['url'];

      return { name, url };
    });

    // Update linkDiv with the first result
    linkDiv.innerHTML = results[0].url;

/*     results.forEach(result => {
      const resultDiv = document.createElement('div');
      const nameHeading = document.createElement('h2');
      const urlParagraph = document.createElement('p');
      nameHeading.textContent = result.name;
      urlParagraph.textContent = result.url;
      resultDiv.appendChild(nameHeading);
      resultDiv.appendChild(urlParagraph);
      resultsDiv.appendChild(resultDiv); 
    }); */
  })
  .catch(error => console.log(error)); 
