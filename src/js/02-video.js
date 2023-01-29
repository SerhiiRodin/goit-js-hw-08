import Player from '@vimeo/player';

import _ from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// player.setCurrentTime(
//   localStorage.getItem('videoplayer-current-time')
//     ? localStorage.getItem('videoplayer-current-time')
//     : 0
// );

player.on('timeupdate', _.throttle(onCurrentTime, 1000));

function onCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

// console.log(localStorage.getItem('videoplayer-current-time'));
