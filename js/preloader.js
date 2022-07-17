document.querySelector('#muted').onclick = function() {
  if (radio.muted === true) {
    document.querySelector('#muted').innerHTML = '<img src="img/sound-on.png" alt="">'
    radio.muted = false;
  } else {
    document.querySelector('#muted').innerHTML = '<img src="img/sound-off.png" alt="">'
    radio.muted = true;
  }
}
