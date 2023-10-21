// export function handleAudio(event) {
//   const key = event.key.toUpperCase();
//   console.log(key)
//   const audio = document.getElementById(key);
  
//   if (audio) {
//     audio.addEventListener('loadeddata', () => {
//       audio.currentTime = 0;
//       audio.setCanPlay(true);
//       audio.play();
//     });
//   }
// }


export const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
};