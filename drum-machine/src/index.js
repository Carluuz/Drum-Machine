import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const drumMachine = ReactDOM.createRoot(document.getElementById('drum-machine'));
drumMachine.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
