import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const timeForStart = localStorage.getItem('videoplayer-current-time');

player.on('play', onPlay);
player.on('pause', onPause);

function onPause() {
player.off('play');
console.log('зняли слухача play');
};

function onPlay () {
  player.setCurrentTime(timeForStart);  
  console.log('play');
};

player.on('timeupdate', throttle(pastVideo, 1000));

function pastVideo(currentTime) {
  const viewedTime = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', viewedTime);
    console.log(viewedTime);
  };





