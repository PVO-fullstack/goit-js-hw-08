import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

let timeForStart = localStorage.getItem('videoplayer-current-time');

console.log(timeForStart);

player.on('play', onPlay);
player.on('timeupdate', throttle(pastVideo, 1000));

function onPlay() {
  timeForStart = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(timeForStart);
};

function pastVideo(currentTime) {
  const viewedTime = currentTime.seconds;
  localStorage.setItem('videoplayer-current-time', viewedTime);
  console.log(viewedTime);
};





