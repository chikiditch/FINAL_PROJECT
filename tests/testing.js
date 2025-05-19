const video = document.getElementById('myVideo');
const button = document.getElementById('playPauseBtn');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    video.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});
