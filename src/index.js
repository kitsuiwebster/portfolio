import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
      <RouterProvider router={AppRouter}/>
    </ThemeProvider>
  </React.StrictMode>
);
