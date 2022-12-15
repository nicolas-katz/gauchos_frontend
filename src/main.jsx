import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ProductsContextProvider } from './context/ProductsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>
);