import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// создание нового слушателя
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

// старт видео 
const onPlay = function(data) {
    console.log('Played the video!')};
player.on('play', onPlay);

// получаем название видеоролика
player.getVideoTitle().then(function(title) {
     console.log('title:', title);
});

// отслеживания события
function TimeUpdateNow(evt) {
    localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
    console.log(`Video now:  ${evt.seconds}`); 
}
player.on('timeupdate', throttle(TimeUpdateNow, 2000));

// получить текущее время
const saveCurrentTime = player.setCurrentTime(0)
    .then(function (seconds) {
    console(saveCurrentTime)
})
    .catch(function (error) {
   console.log(`Error!`)
    }
);
