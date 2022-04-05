import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './modules/root';

const app = createRoot(document.getElementById('root') as HTMLElement);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
