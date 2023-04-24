// Get the user ID from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid');


// Get the DOM element to display the audio list
const audioListElement = document.getElementById('audio-list');

// Construct the API endpoint URL with constraints and fields parameters
const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uid}"}]`;

// Make a GET request to the API endpoint using fetch()
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Create an HTML list element to display the audio list
    const listElement = document.createElement('ul');

    // Loop through each result in the "results" array and create an HTML list item element for each one
    data.response.results.forEach(result => {
      // Extract the demo-category and s3-url values from the result
      const category = result['demo-category'];
      const url = result['s3-url'];

      // Create an HTML list item element to display the category and URL
      const listItemElement = document.createElement('li');
      listItemElement.innerHTML = `${category}: <a href="${url}" target="_blank">${url}</a>`;

      // Append the list item element to the list element
      listElement.appendChild(listItemElement);
    });

    // Append the list element to the audio list element in the DOM
    audioListElement.appendChild(listElement);
  })
  .catch(error => {
    console.error('Error fetching audio objects:', error);
  });
