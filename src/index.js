import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import i18n from './i18n'; 
import { I18nextProvider } from 'react-i18next'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={AppRouter}/>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
