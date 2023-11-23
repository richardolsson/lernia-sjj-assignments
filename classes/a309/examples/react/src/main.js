import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const container = document.getElementById('container');
const root = createRoot(container);

root.render(
  React.createElement(StrictMode, {}, React.createElement(App))
);