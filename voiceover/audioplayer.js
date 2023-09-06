
//let user = 'timmymorgan';
/* var commercialDemo = 'https://sayingthings.s3.us-east-1.amazonaws.com/timmymorgan-audio/b4890ba8-73d8-4972-8dfc-6556d069b2e9_CommercialTimmyMorganVoiceOvermp3';
var animationDemo = 'https://sayingthings.s3.us-east-1.amazonaws.com/timmymorgan-audio/cacaea63-50a7-4a08-bdfc-0ed2d8350f22_AnimationTimmyMorganVoiceOvermp3';
var corporateDemo = 'https://sayingthings.s3.us-east-1.amazonaws.com/timmymorgan-audio/ac284d27-dff5-4447-8208-78b80f3444df_TimMorganELEARNINGDEMOmp3';
var britishDemo = 'https://sayingthings.s3.us-east-1.amazonaws.com/timmymorgan-audio/23802f90-2d3c-4c2d-aec9-37b9b6eab713_TimothyMorganBRITISHCOMMERCIALmp3';



const apiUrl = `https://linksaw.com/api/1.1/obj/timmy-morgan-audio`; */

//const apiUrl = `https://linksaw.com/api/1.1/obj/timmy-morgan-audio?constraints=[{"key":"audio-username","constraint_type":"equals","value":"${user}"}]`;

//myUidElement.innerHTML = myUid;

/* let audioUrls = [];

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
  console.log(fun); */


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
                  //"name": getaudio[0].category,
                    "name": 'Commercial',
                  "duration": "",
                  //"file": commercialDemo
                 // "file": getaudio[0].audioUrl
                  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/cfa8e725-8bb0-4e9b-864c-c67e5be8c28a_CommercialNathanPulsVoiceOvermp3"
              }, {
                  "track": 2,
                 // "name": getaudio[1].category,
                    "name": 'Radio',
                  "duration": "",
                //  "file": whatevernameofDemo
                 // "file": getaudio[1].audioUrl
                  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/68c5aec6-64a0-4ebe-bc12-d0c8789961b4_RadioNathanPulsVoiceOvermp3"
              }, {    
                  "track": 3,
                  //"name": getaudio[2].category,
                  "name": 'Narration',
                  "duration": "",
                  //"file": corporateDemo
                  //"file": getaudio[2].audioUrl
                  "file": "https://sayingthings.s3.amazonaws.com/vo-audio/e64c7cf3-7899-47db-8cc9-60d9179de0dd_NarrationNathanPulsVoiceOvermp3"
              }, {
                  "track": 4,
                  //"name": getaudio[3].category,
                  "name": 'Animation',
                  "duration": "",
                  //"file": britishDemo
                  //"file": getaudio[3].audioUrl
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
/* })
.catch(error => console.error(error)); */






