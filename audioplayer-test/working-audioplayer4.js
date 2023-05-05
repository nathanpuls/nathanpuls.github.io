


// 2.0
//Bubble Fetch
      // Get the user ID from the URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      let uid = urlParams.get('uid');
      let myUid = '';

// Get the DOM element to display the value
const uidElement = document.getElementById('uid');

const myUidElement = document.getElementById('myUid');

// Set the value to the innerHTML of the DOM element
uidElement.innerHTML = uid;


   // Construct the API endpoint URL
//const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"1643919725090x169839524417895170"}]`;
const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"${uid}"}]`;

myUid = apiUrl;
myUidElement.innerHTML = myUid;

let audioUrls = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const getaudio = data.response.results.map(result => {
      const category = result['demo-category'];
      const audioUrl = result['s3-url'];
      return { category, audioUrl };
    });
    audioUrls = getaudio.map(result => result.audioUrl); // create an array of audio URLs
    const url1 = getaudio[0].audioUrl; // get the audio URL of the first audio element
    console.log(url1);
    const fun = getaudio[0].category;
    console.log(fun);
  

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
                    "name": getaudio[0].category,
                    "duration": "",
                    "file": getaudio[0].audioUrl
                  //  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/cfa8e725-8bb0-4e9b-864c-c67e5be8c28a_CommercialNathanPulsVoiceOvermp3"
                }, {
                    "track": 2,
                    "name": getaudio[1].category,
                    "duration": "",
                    "file": getaudio[1].audioUrl
                    //"file": "https://sayingthings.s3.amazonaws.com/vo-audio/68c5aec6-64a0-4ebe-bc12-d0c8789961b4_RadioNathanPulsVoiceOvermp3"
                }, {    
                    "track": 3,
                    "name": getaudio[2].category,
                    "duration": "",
                    "file": getaudio[2].audioUrl
                    //"file": "https://sayingthings.s3.amazonaws.com/vo-audio/e64c7cf3-7899-47db-8cc9-60d9179de0dd_NarrationNathanPulsVoiceOvermp3"
                }, {
                    "track": 4,
                    "name": "",
                    "duration": "",
                    //"file": "https://sayingthings.s3.amazonaws.com/vo-audio/d0b3077f-16aa-4b60-9c94-c73c2fcf88e2_AnimationNathanPulsVoiceOvermp3"
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
  })
  .catch(error => console.error(error));







