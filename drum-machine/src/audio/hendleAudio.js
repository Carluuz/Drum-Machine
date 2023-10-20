export function handleAudio(event) {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}