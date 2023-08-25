import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { router } from './app/router/Route';
import React from 'react';
import './app/layout/styles.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
