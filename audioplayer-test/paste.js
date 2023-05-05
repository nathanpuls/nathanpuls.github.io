      // Declare the variable outside the functions to make it available to both
      let audioUrl;
      //let audioUrls = [];
      
      
      
            // Make a GET request to the API endpoint using fetch()
            fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Extract the audio URL from the first result in the "results" array
          audioUrl = data.response.results[0]['s3-url'];
          //audioUrls = data.response.results.map(result => result['s3-url']);
      
      
          // Display the audio URL in the HTML
          const audioUrlDiv = document.getElementById('audioUrl');
          audioUrlDiv.innerHTML = audioUrl;
          //audioUrlDiv.innerHTML = audioUrls[0];