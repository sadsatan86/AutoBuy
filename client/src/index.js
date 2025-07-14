import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional — you can delete this line if no CSS file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
