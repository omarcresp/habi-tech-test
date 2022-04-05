import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/root';
import reportWebVitals from './reportWebVitals';

const baseUrl = process.env.PUBLIC_URL ?? '/';

const app = createRoot(document.getElementById('root') as HTMLElement);

app.render(
  <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
