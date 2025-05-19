const video = document.getElementById('video');
const seekbar = document.getElementById('seekbar');
const playPauseButton = document.getElementById('playPauseBtn');
const container = document.querySelector('.video-container');
let lastScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  // If scrolled down (and past a threshold, e.g., 50px), hide the navbar.
  if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
    navbar.classList.add('hidden');
  } else {
    // Scrolling up, or at the very top—show the navbar.
    navbar.classList.remove('hidden');
  }
  
  lastScrollPos = currentScrollPos;
});


// Update the seekbar maximum value once metadata is loaded
video.addEventListener('loadedmetadata', () => {
  seekbar.max = video.duration;
});

// Update seekbar position as the video plays
video.addEventListener('timeupdate', () => {
  seekbar.value = video.currentTime;
});

// When the user scrubs the seekbar, update the video current time
seekbar.addEventListener('input', () => {
  video.currentTime = seekbar.value;
});


// Play Pause
// Toggle play/pause and update the button icon
playPauseButton.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    // Change icon to pause (using Unicode "||")
    playPauseButton.innerHTML = '<span class="icon">&#10074;&#10074;</span>';
  } else {
    video.pause();
    // Change icon back to play (using Unicode "►")
    playPauseButton.innerHTML = '<span class="icon">&#9658;</span>';
  }
});


video.addEventListener('pause', () => {
  container.classList.add('paused');
});
video.addEventListener('play', () => {
  container.classList.remove('paused');
});