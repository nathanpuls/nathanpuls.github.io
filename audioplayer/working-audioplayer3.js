let categories = [];
let tracks = [];


// 2.0
//Bubble Fetch
      // Get the user ID from the URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const uid = urlParams.get('uid');

// Get the DOM element to display the value
const uidElement = document.getElementById('uid');

// Set the value to the innerHTML of the DOM element
uidElement.innerHTML = uid;

      // Construct the API endpoint URL
      const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uid}"}]`;

      //https://linksaw.com/version-test/api/1.1/obj/vob-audio/1643919725090x169839524417895170
    
      // Declare the variable outside the functions to make it available to both
let audioUrl = [];
//let audioUrls = [];

      // Make a GET request to the API endpoint using fetch()
      fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
    // Loop through each result in the "results" array and create an HTML list item element for each one
    data.response.results.forEach(result => {
        // Extract the demo-category and s3-url values from the result
        category = result['demo-category'];
        audioUrl = result['s3-url'];
    // Display the audio URL in the HTML
    const audioUrlDiv = document.getElementById('audioUrl');
    audioUrlDiv.innerHTML = audioUrl;
    //audioUrlDiv.innerHTML = audioUrls[0];

    // Add a new track object to the tracks array for this category
    tracks.push({
        "category": category,
        "audioUrl": audioUrl
      });
    
      // Loop through the tracks array and create an HTML list item element for each category and its audio URL
    tracks.forEach(track => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${track.category}: <a href="${track.audioUrl}">${track.audioUrl}</a>`;
      audioList.appendChild(listItem);
    });

});

    jQuery(function ($) {
        'use strict'
        var supportsAudio = !!document.createElement('audio').canPlayType;
        if (supportsAudio) {
            // initialize plyr
            var player = new Plyr('#audio1', {
                controls: [
                    'restart',
                    'play',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    'download'
                ]
            });
            // initialize playlist and controls
            var index = 0,
                playing = false,
                mediaPath = '',
                extension = '',
                tracks = [{
                    "track": 1,
                    "name": `${track.category}`,
                    //"name": category,
                    //"name": "Commercial",
                    "duration": "",
                    "file": `${audioUrl}`
                  //  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/cfa8e725-8bb0-4e9b-864c-c67e5be8c28a_CommercialNathanPulsVoiceOvermp3"
                }, {
                    "track": 2,
                    "name": `${track.category}`,
                    //"name": "Radio",
                    "duration": "",
                    "file": `${audioUrl}`
                    //"file": "https://sayingthings.s3.amazonaws.com/vo-audio/68c5aec6-64a0-4ebe-bc12-d0c8789961b4_RadioNathanPulsVoiceOvermp3"
                },