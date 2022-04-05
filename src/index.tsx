import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/root/App';
import reportWebVitals from './reportWebVitals';

const baseUrl = process.env.PUBLIC_URL ?? '/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
