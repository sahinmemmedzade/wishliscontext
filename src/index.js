import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BasketProvider } from './contexts/BasketContex';
import { WishlistProvider } from './contexts/WishlistContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishlistProvider>
  <BasketProvider>
    <App />
  </BasketProvider>
  </WishlistProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

