import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { DocApp } from './components/DocApp';
import './Style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DocApp />
    </BrowserRouter>
  </React.StrictMode>
);