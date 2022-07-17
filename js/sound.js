var radio = new Audio();

document.querySelector('#muted').onclick = function() {
  if (radio.muted === true) {
    document.querySelector('#muted').innerHTML = '<img src="img/sound-on.png" alt="">'
    radio.muted = false;
  } else {
    document.querySelector('#muted').innerHTML = '<img src="img/sound-off.png" alt="">'
    radio.muted = true;
  }
}

function toggleSound() {
  var elements = document.getElementsByTagName('audio');
  for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "13") {
  	
    document.getElementById('audio-6').play()
  } 
} 

var myAudio = document.getElementById("myAudio");
var myAudio_2 = document.getElementById("audio-7");
var isPlaying = false;

function togglePlay() {
	isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
	isPlaying = true;
};
myAudio.onpause = function() {
	isPlaying = false;
};	

function togglePlay_1() {
	myAudio_2.play();

	myAudio.onplaying = function() {
	isPlaying = true;
	};
};

function toggleStop() {
	myAudio_2.pause();

	myAudio.onpause = function() {
	    isPlaying = false;
	};	
};

function toggleStop_1() {
	myAudio.pause();

	myAudio.onpause = function() {
	    isPlaying = false;
	};	
};

