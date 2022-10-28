import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from './context/CartContext';
import './styles/index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
        <App />
  </CartProvider>

  
);


