let video=document.getElementById("video");
let playButton = document.getElementById("play")
let forwardButton = document.getElementById("forward")
let rewindButton = document.getElementById("rewind")
let unmuteButton = document.getElementById("unmute")
let muteButton = document.getElementById("mute")
let fullButton = document.getElementById("full")
let progress=document.getElementById("progress");
let ran=document.getElementById("ran");


playButton.addEventListener('click', () => {
  if (video.paused || video.ended) { 
    video.play();
    document.getElementById('playPause').src = './icons/pause.svg'
    timer = setInterval("pro()", 100);
  }else {
    video.pause();
    document.getElementById('playPause').src = './icons/play.svg'
    clearInterval(timer);
  }
  
})

forwardButton.addEventListener('click', () => {
  video.currentTime += 10;
  pro()
})

rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
  pro()
})

unmuteButton.addEventListener('click', mute)

fullButton.addEventListener('click', () => {
  video.webkitRequestFullScreen();
})

function pro() {
  progress.max=video.duration;
  progress.value=video.currentTime;
}

var vol;
function mute() {
    if(video.muted==false){
        vol=ran.value;
        ran.value=0;
        video.muted=true;
        document.getElementById('unmute&mute').src = './icons/unmute.svg'  
    }
    else{
        video.muted=false;
        ran.value=vol;
        document.getElementById('unmute&mute').src = './icons/mute.svg'   
    }
}

function setVolume() {
    video.volume=ran.value/100;
    if(ran.value == 0) {
      document.getElementById('unmute&mute').src = './icons/unmute.svg' 
    }else {
      document.getElementById('unmute&mute').src = './icons/mute.svg'    
    }
}
/* I add the functions to play/pause, fast forward, rewind, mute/unmute and change the volume and update the progress bar accordingly. 
The full screen feature allows viewers to immerse themselves in the video content and watch it at the largest possible size.
Fast forward and fast rewind allow users to skip forward or backward to specific parts of the video, so they can skip the parts they are not interested in or rewatch the parts they are interested in.
Volume control allows users to adjust the sound of the video to suit their needs without having to exit the page to adjust the volume externally.
The mute function is useful for similar reasons as above. The mute function can be used when the viewer wants to watch the video without disturbing others.*/