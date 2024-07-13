import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/product/productpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
