import '@csstools/nolmalize.css'; /* bring in normalize.css styles */
import 'index.css'; /* reset default styles, added basic styles*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
