//WORKS API

const apiUrl = `https://linksaw.com/api/1.1/obj/linksaw-link`;

/* const resultsDiv = document.getElementById('results');
 */const linkDiv = document.getElementById("link");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const name = result['name'];
      const url = result['url'];

      return { name, url };
    });

    // Update linkDiv with the first result
    var copythis = results[0].url;
    linkDiv.innerHTML = copythis;

    

    /* const myString = copythis;
    const myDiv = document.getElementById("textA");
  myDiv.textContent = myString; */

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

  //MUSTACHE
/*   const template = `{{content}}`;

  const data = {

    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
  
  const renderedTemplate = Mustache.render(template, data);

  // Find the container element in the HTML page
/* const container = document.getElementById("container");
 */
// Set the innerHTML property of the container element to the rendered template
/* container.innerHTML = renderedTemplate; */ 

//MUSTACHE 2

/* var person = {
  firstName: "Christophe",
  lastName: "Coenraets",
  blogURL: "http://coenraets.org"
};
var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
var html = Mustache.to_html(template, person);
$('#sampleArea').html(html); */
