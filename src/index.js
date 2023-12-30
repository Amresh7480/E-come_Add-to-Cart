import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-notifications/lib/notifications.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import MainContaxt from './contaxt/MainContaxt';
import SingelProduct from './pages/SingelProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
let route=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Product',
    element:<Product/>
  },
  {
    path:'/Cart',
    element:<Cart/>
  }, {
    path:'/SingleProduct/:id',
    element:<SingelProduct/>
  }
])
root.render(
  <React.StrictMode>
    <MainContaxt>
      <RouterProvider router={route} />
    </MainContaxt>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
