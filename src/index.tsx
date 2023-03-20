import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.sass';
import App from './scenes/Landing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
