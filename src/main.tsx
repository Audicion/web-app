import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.scss';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root node is not found');
}

const reactRoot = ReactDOM.createRoot(root);
const isDev = import.meta.env.DEV;

if (isDev) {
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  reactRoot.render(<App />);
}
