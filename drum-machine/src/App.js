import './App.css';
import React, { useEffect } from 'react';
import { Q, W, E, A, S, D, Z, X, C } from './audio/audioData';


const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}; 

function App() {
  
  useEffect(() => {
      const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        const audio = document.getElementById(key);
      
        if (audio) {
          audio.load();
          audio.currentTime = 0;
          audio.play().catch((error) => {
            console.error('Playback failed because: ', error);
          });
        } else {
          console.error('No audio element found with id: ', key);
        }
      
     };

     document.addEventListener('keydown', handleKeyPress);
     return () => {
       document.removeEventListener('keydown', handleKeyPress);
     };


  }, []); 

  return (
    <div className="App">
      <h2>Drum Machine</h2>
      <div id="display"></div>

      <button onClick={() => playAudio('Q')} className="drum-pad" id="clip1">
        <Q />
        Q
      </button>
      <button onClick={() => playAudio('W')} className="drum-pad" id="clip2">
        <W />
        W
      </button>
      <button onClick={() => playAudio('E')} className="drum-pad" id="clip3">
        <E />
        E
      </button>
      <button onClick={() => playAudio('A')} className="drum-pad" id="clip4">
        <A />
        A
      </button>
      <button onClick={() => playAudio('S')} className="drum-pad" id="clip5">
        <S />
        S
      </button>
      <button onClick={() => playAudio('D')} className="drum-pad" id="clip6">
        <D />
        D
      </button>
      <button onClick={() => playAudio('Z')} className="drum-pad" id="clip7">
        <Z />
        Z
      </button>
      <button onClick={() => playAudio('X')} className="drum-pad" id="clip8">
        <X />
        X
      </button>
      <button onClick={() => playAudio('C')} className="drum-pad" id="clip9">
        <C/>
        C
      </button>
    </div>
  );
}

export default App;

