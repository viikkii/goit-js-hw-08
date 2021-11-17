import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// создание нового слушателя
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

// старт видео 
const onPlay = function(data) {console.log('Play the video!')};
player.on('play', onPlay);

// отслеживания события
player.on('timeupdate', throttle(timeUpdateNow, 2000));
function timeUpdateNow(evt) {
    localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
    console.log(`Video now:  ${evt.seconds}`); 
}


const saveCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (saveCurrentTime) {
    player.setCurrentTime(saveCurrentTime)
    console.log(saveCurrentTime);
    localStorage.removeItem(LOCALSTORAGE_KEY);
}
