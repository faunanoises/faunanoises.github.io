var sounds = [
    "uh_oh.mp3",
    "MyFootIsFallingAsleep_Whisper.mp3"
];
var sound;
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
function playSound() {
  var x = generateRandomNumber(sounds.length - 1);
  var soundSrc = sounds[x];
  if (sound) {
      sound.pause();
  } else {
      sound = new Audio();
  }
  sound.src = soundSrc;
  sound.play();
}
document.getElementById('soundbutton').addEventListener('click', playSound);
