import './App.css';
//import Q from './audio/audioData';
import { Q, W, E, A, S, D, Z, X, C } from './audio/audioData';

function App() {
  return (
    <div className="App">
hi me
      <div id="display"></div>
      <button className="drum-pad" id="clip1">
        <Q />
        Q
      </button>
      <button className="drum-pad" id="clip2">
        <W />
        W
      </button>
      <button className="drum-pad" id="clip3">
        <E />
        E
      </button>
      <button className="drum-pad" id="clip4">
        <A />
        A
      </button>
      <button className="drum-pad" id="clip5">
        <S />
        S
      </button>
      <button className="drum-pad" id="clip6">
        <D />
        D
      </button>
      <button className="drum-pad" id="clip7">
        <Z />
        Z
      </button>
      <button className="drum-pad" id="clip8">
        <X />
        X
      </button>
      <button className="drum-pad" id="clip9">
        <C/>
        C
      </button>
    </div>
  );
}

export default App;

