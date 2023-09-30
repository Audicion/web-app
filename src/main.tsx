import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.scss';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root node is not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
