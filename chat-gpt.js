// Initialize an empty array to hold the tracks
let tracks = [];

// Loop through each result in the API response and add a new track object for each category
data.response.results.forEach(result => {
  // Extract the demo-category and s3-url values from the result
  const category = result['demo-category'];
  const audioUrl = result['s3-url'];

  // Add a new track object to the tracks array for this category
  tracks.push({
    "track": tracks.length + 1,
    "name": category,
    "duration": "",
    "file": audioUrl
  });
});

// Use the tracks array to initialize the Plyr player and playlist
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
  ],
  // Set the playlist to the tracks array
  playlist: tracks
});
