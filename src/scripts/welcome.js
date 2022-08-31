import React from 'react';
import { createRoot } from 'react-dom/client';
import WelcomeApp from '../components/WelcomeApp';
import styles from '../styles/style.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<WelcomeApp />);

console.log('logging from welcome page');