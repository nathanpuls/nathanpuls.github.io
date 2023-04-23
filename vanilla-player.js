'use strict';

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
      "file": audioUrl
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
