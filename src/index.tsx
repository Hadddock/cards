import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App'; // Import Main instead of App

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
