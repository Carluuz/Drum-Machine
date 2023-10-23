import './App.css';
import React, { useEffect, useState  } from 'react';
import { Q, W, E, A, S, D, Z, X, C } from './audio/audioData';
import 'bootstrap/dist/css/bootstrap.min.css';


const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}; 

function App() {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
      const handleKeyPress = async (event) => {
        const key = event.key.toUpperCase();
        const audio = document.getElementById(key);
        if (audio) {
          setDisplayText(`${key}`);
           audio.play()
        }
        // if (audio) {
        //   audio.currentTime = 0;
        //   setTimeout(function () {      
        //     audio.play();
        //   }, 150);
        // }
              
     };

     document.addEventListener('keydown', handleKeyPress);
     return () => {
       document.removeEventListener('keydown', handleKeyPress);
     };


  }, []); 

  return (
    <div className="App">
      <h2>Drum Machine</h2>

      <button onClick={() => { playAudio('Q'); setDisplayText('Q');}} className="drum-pad" id="clip1">
        <Q />
        Q
      </button>
      <button onClick={() => {playAudio('W'); setDisplayText('W');}} className="drum-pad" id="clip2">
        <W />
        W
      </button>
      <button onClick={() => {playAudio('E'); setDisplayText('E');}} className="drum-pad" id="clip3">
        <E />
        E
      </button>
      <button onClick={() => {playAudio('A'); setDisplayText('A');}} className="drum-pad" id="clip4">
        <A />
        A
      </button>
      <button onClick={() => {playAudio('S'); setDisplayText('S');}} className="drum-pad" id="clip5">
        <S />
        S
      </button>
      <button onClick={() => {playAudio('D'); setDisplayText('D');}} className="drum-pad" id="clip6">
        <D />
        D
      </button>
      <button onClick={() => {playAudio('Z'); setDisplayText('Z');}} className="drum-pad" id="clip7">
        <Z />
        Z
      </button>
      <button onClick={() => {playAudio('X'); setDisplayText('X');}} className="drum-pad" id="clip8">
        <X />
        X
      </button>
      <button onClick={() => {playAudio('C'); setDisplayText('C');}} className="drum-pad" id="clip9">
        <C/>
        C
      </button>

      <div id="display">{displayText}</div>

    </div>
  );
}

export default App;

