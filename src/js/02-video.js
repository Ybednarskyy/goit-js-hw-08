import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

console.log(player);

player.on('timeupdate', function (data) {
  console.log(data.seconds);
  localstorage.setItem();
});
player.setCurrentTime(300);
