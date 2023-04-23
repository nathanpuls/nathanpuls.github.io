
      // Get the user ID from the URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const uidValue = urlParams.get('uid');


// Get the DOM element to display the value
const uidElement = document.getElementById('uid');

// Set the value to the innerHTML of the DOM element
uidElement.innerHTML = uidValue;

      // Construct the API endpoint URL
      const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uidValue}"}]`;

      //https://linksaw.com/version-test/api/1.1/obj/vob-audio/1643919725090x169839524417895170
    

      // Make a GET request to the API endpoint using fetch()
      fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the audio URL from the first result in the "results" array
    const audioUrl = data.response.results[0]['s3-url'];

    // Display the audio URL in the HTML
    const audioUrlDiv = document.getElementById('audioUrl');
    audioUrlDiv.innerHTML = audioUrl;
  })
  .catch(error => console.error(error));

   
