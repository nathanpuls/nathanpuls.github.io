
let categories = [];
let tracks = [];
let audioUrl = '';


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
    
   

      // Make a GET request to the API endpoint using fetch()
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
    // Loop through each result in the "results" array and create an HTML list item element for each one
    data.response.results.forEach(result => {
        // Extract the demo-category and s3-url values from the result
        const category = result['demo-category'];
        audioUrl = result['s3-url'];
   

    // Add a new track object to the tracks array for this category
    tracks.push({
        "category": category,
        "audioUrl": audioUrl
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
                extension = ''
                const plyrTracks = [];

                tracks.forEach(track => {
                    const plyrTrack = {
                      "track": index + 1,
                      "name": track.category,
                      "duration": "",
                      "file": track.audioUrl
                    };
                    plyrTracks.push(plyrTrack);
                    index++;
                  });
              
                  player.source = {
                    "type": "audio",
                    "title": "Voice Over Audio Tracks",
                    "sources": plyrTracks
                  };

                buildPlaylist = $.each(tracks, function(key, value) {
                    var trackNumber = value.track,
                        trackName = value.name,
                        trackDuration = value.duration;
                    if (trackNumber.toString().length === 1) {
                        trackNumber = '0' + trackNumber;
                    }
                    $('#plList').append('<li> \
                        <div class="plItem"> \
                            <span class="plNum"></span> \
                            <span class="plTitle">' + trackName + '</span> \
                            <span class="plLength">' + trackDuration + '</span> \
                        </div> \
                    </li>');
                }),
                trackCount = tracks.length,
                npAction = $('#npAction'),
                npTitle = $('#npTitle'),
                audio = $('#audio1').on('play', function () {
                    playing = true;
                    npAction.text('Now Playing...');
                }).on('pause', function () {
                    playing = false;
                    npAction.text('Paused...');
                }).on('ended', function () {
                    npAction.text('Paused...');
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }).get(0),
                btnPrev = $('#btnPrev').on('click', function () {
                    if ((index - 1) > -1) {
                        index--;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                btnNext = $('#btnNext').on('click', function () {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                li = $('#plList li').on('click', function () {
                    var id = parseInt($(this).index());
                    //if (id !== index) {
                    if (1==1) {  
                        playTrack(id);
                    }
                }),
                loadTrack = function (id) {
                    $('.plSel').removeClass('plSel');
                    $('#plList li:eq(' + id + ')').addClass('plSel');
                    npTitle.text(tracks[id].name);
                    index = id;
                    audio.src = tracks[id].file;
                    updateDownload(id, audio.src);
                },
                updateDownload = function (id, source) {
                    player.on('loadedmetadata', function () {
                        $('a[data-plyr="download"]').attr('href', source);
                    });
                },
                playTrack = function (id) {
                    loadTrack(id);
                    audio.play();
                };
            extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
            loadTrack(index);
        } else {
            // no audio support
            $('.column').addClass('hidden');
            var noSupport = $('#audio1').text();
            $('.container').append('<p class="no-support">' + noSupport + '</p>');
        }
    });
  })
  .catch(error => console.error(error));







