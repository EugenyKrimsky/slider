import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import arrWeather from './state';

ReactDOM.render(
  <React.StrictMode>
    <App arrWeather={arrWeather} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
