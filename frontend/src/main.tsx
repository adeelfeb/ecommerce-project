import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import {  Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './context/ProductContext';

// Define routes with lazy-loaded components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        async lazy() {
          const { default: Home } = await import('./pages/Home');
          return { Component: Home };
        },
      },
      {
        path: 'about',
        async lazy() {
          const { default: About } = await import('./pages/About');
          return { Component: About };
        },
      },
      {
        path: 'cart',
        async lazy() {
          const { default: Cart } = await import('./pages/Cart');
          return { Component: Cart };
        },
      },
      {
        path: 'product/:slug',
        async lazy() {
          const { default: ProductPage } = await import('./pages/ProductPage');
          return { Component: ProductPage };
        },
      },
      {
        // Auth Layout (wraps login/register)
        async lazy() {
          const { default: AuthLayout } = await import('./pages/AuthLayout');
          return { Component: AuthLayout };
        },
        children: [
          {
            path: 'login',
            async lazy() {
              const { default: Login } = await import('./pages/Login');
              return { Component: Login };
            },
          },
          {
            path: 'register',
            async lazy() {
              const { default: Register } = await import('./pages/Register');
              return { Component: Register };
            },
          },
        ],
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider> {/* Wrap everything with ProductProvider */}
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ProductProvider>
  </StrictMode>
);