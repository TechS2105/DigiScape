import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../public/styles/main files/index.css';
import { Provider } from 'react-redux';
import contentLibrary from './app/contentLibrary';

createRoot(document.getElementById('root')).render(

  <Provider store={contentLibrary}>

    <App />

  </Provider>

);