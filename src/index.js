import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import ProductsContextProvider from './context/products';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ProductsContextProvider>
      <Router>
        <App />
      </Router>
    </ProductsContextProvider>
  </StrictMode>
);
