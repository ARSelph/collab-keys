import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles/style.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);
//ReactDOM.render(<App />, document.getElementById('root'));