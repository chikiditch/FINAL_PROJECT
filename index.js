const video = document.getElementById('video');
const seekbar = document.getElementById('seekbar');
const playPauseButton = document.getElementById('playPauseBtn');
const container = document.querySelector('.video-container');
const loc1Icon = document.getElementById('loc1-icon');
const loc2Icon = document.getElementById('loc2-icon');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const loc = [
  {
    name: "CRIB",
    details:"Our songs are crafted in the heart of our crib, where raw energy meets creativity. You can grab yourself some merches for swag drip.",
    picture:"images/MERCH.png",
    link:"https://www.google.com/maps/place/Bahay+ni+Haring+Mico+Malakas/@14.6161918,120.9833572,17.5z/data=!4m6!3m5!1s0x3397b53208fc9ff3:0x43e4f529ea82eaa8!8m2!3d14.6161942!4d120.9849957!16s%2Fg%2F11y1t92yn_?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "SM City Manila",
    details:"Visit our booth at SM Manila! Purchase your tickets for the latest events hosted by Sigbin Productions featuring RAWDAWGS.",
    picture:"images/SMCITYMANILA.jpg",
    link:"https://www.google.com/maps/place/SM+City+Manila/@14.590256,120.9811942,17z/data=!3m1!4b1!4m6!3m5!1s0x3397cb209479aa11:0x872db4487b1bb367!8m2!3d14.5902508!4d120.9837691!16s%2Fg%2F11g0j06dbq?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
  }


];


let currentIndex = 0;

function updateLoc(){
  const locs = loc[currentIndex];
  document.getElementById("loc-image").src = locs.picture;
  document.getElementById("loc-image").alt = `${locs.name} picture`;
  document.getElementById("location-name").textContent = locs.name;
  document.getElementById("location-deets").textContent = locs.details;
  document.getElementById("location-link").href = locs.link;


  loc1Icon.classList.toggle('active', currentIndex === 0);
  loc2Icon.classList.toggle('active', currentIndex === 1);
}

function nextLoc(e) {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % loc.length;
  updateLoc(); 
}



window.onload = () =>{
  loc1Icon.classList.add('active');

  updateLoc();
}



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






