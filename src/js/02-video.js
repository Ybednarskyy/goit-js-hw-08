import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(timeupdateHandler, 1000));

function timeupdateHandler(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (!localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(currentTime);
}
