import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot import edildi
import './index.css';  // Global stiller burada
import App from './App';  // Tüm bileşenleri barındıran ana dosya

// createRoot ile root oluşturuluyor
const root = createRoot(document.getElementById('root')); 

// Uygulama render ediliyor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
