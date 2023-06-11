import { Fragment } from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignUpPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/product-detail', element: <ProductDetailPage /> },
  ])

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
