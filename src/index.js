import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/styles.scss';
// eslint-disable-next-line
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>,
);
