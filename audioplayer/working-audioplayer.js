// 2.0



//Bubble Fetch


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
                    "name": "Commercial",
                    "duration": "",
                    "file": `${audioUrl}`
                  //  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/cfa8e725-8bb0-4e9b-864c-c67e5be8c28a_CommercialNathanPulsVoiceOvermp3"
                }, {
                    "track": 2,
                    "name": "Radio",
                    "duration": "",
                    "file": "https://sayingthings.s3.amazonaws.com/vo-audio/68c5aec6-64a0-4ebe-bc12-d0c8789961b4_RadioNathanPulsVoiceOvermp3"
                }, {    
                    "track": 3,
                    "name": "Narration",
                    "duration": "",
                    "file": "https://sayingthings.s3.amazonaws.com/vo-audio/e64c7cf3-7899-47db-8cc9-60d9179de0dd_NarrationNathanPulsVoiceOvermp3"
                }, {
                    "track": 4,
                    "name": "Animation",
                    "duration": "",
                    "file": "https://sayingthings.s3.amazonaws.com/vo-audio/d0b3077f-16aa-4b60-9c94-c73c2fcf88e2_AnimationNathanPulsVoiceOvermp3"
                }],
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
    
    
    
      // VIDEO: Get the link element and the pop-up element
     
      // Get the button element, the modal element, and the close button element
      var button = document.getElementById("freeletics");
      var modal = document.getElementById("myModal");
      var close = document.getElementsByClassName("close")[0];
      
      // When the button is clicked, show the modal
      button.addEventListener("click", function() {
        modal.style.display = "block";
      });
      
      // When the close button is clicked, hide the modal
      close.addEventListener("click", function() {
        modal.style.display = "none";
      });
      
      // When the user clicks outside the modal, hide it
      window.addEventListener("click", function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
  })
  .catch(error => console.error(error));



//2





/*
  // Get the modal element
var modal = document.getElementById("myModal");

// Get the close button
var closeBtn = modal.querySelector(".close");

// Get the iframe element
var iframe = modal.querySelector("#video-iframe");

// Listen for click events on the close button
closeBtn.addEventListener("click", function() {
  // Set the src attribute of the iframe to an empty string
  iframe.src = "";
  // Hide the modal
  modal.style.display = "none";
});

// Show the modal when the Freeletics button is clicked
document.getElementById("freeletics").addEventListener("click", function() {
  modal.style.display = "block";
  iframe.src = "https://www.youtube.com/embed/lskrj62JbNI";
});

*/

// Get the modal element
var modal = document.getElementById("myModal");

// Get the video element
var video = document.getElementById("video");

// Get the audio element
var audio = document.getElementById("audio1");

// When the user clicks anywhere outside the modal, close it and stop the video
document.addEventListener('click', function(event) {
  if (event.target == modal || event.target == video || event.target == audio) {
    if (event.target == modal || event.target == video) {
      modal.style.display = "none";
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else if (event.target == audio) {
      audio.pause();
    }
  }
});



   






