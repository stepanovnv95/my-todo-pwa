import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function renderRoot() : void {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderRoot;
