

//WORKS API

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
    var copythis = results[0].url;
    linkDiv.innerHTML = copythis;
    const myString = copythis;
    const myDiv = document.getElementById("textA");
  myDiv.textContent = myString;

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


//CLIPBOARD

document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  
    var text = document.getElementById('textA');
    text.select();
    document.execCommand('copy');
  
  })
  
  //np
  
  /* const myString = copythis; */
        
        /* `<!DOCTYPE html>
          <html>
            <head>
              <title>My Page</title>
            </head>
            <body>
              <h1>Hello World!</h1>
            </body>
          </html>`; */
          
          
  /* const myDiv = document.getElementById("textA");
  myDiv.textContent = myString; */

/*   //DOESNT WORK API


      // Get the user ID from the URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const uidValue = urlParams.get('uid');


// Get the DOM element to display the value
const uidElement = document.getElementById('uid');

// Set the value to the innerHTML of the DOM element
uidElement.innerHTML = uidValue;

      // Construct the API endpoint URL
      const apiUrl = `https://linksaw.com/api/1.1/obj/linksaw-link`;

      //https://linksaw.com/version-test/api/1.1/obj/vob-audio/1643919725090x169839524417895170
    

      // Make a GET request to the API endpoint using fetch()
      fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the audio URL from the first result in the "results" array
    const audioUrl = data.response.results[0];

    // Display the audio URL in the HTML
    const audioUrlDiv = document.getElementById('audioUrl');
    audioUrlDiv.innerHTML = audioUrl;
  })
  .catch(error => console.error(error)); */

  


   
