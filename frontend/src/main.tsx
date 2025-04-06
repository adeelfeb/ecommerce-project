import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import {  Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import { Product } from './types/Product';
axios.defaults.baseURL= process.env.NODE_ENV === "development" ? "http://localhost:5000" : '/'



type State = {
  products: Product[],
  loading: boolean,
  error: string
}

type Action = | {type: 'FETCH_REQUEST'} | {type: "FETCH_SUCCESS", payload: Product[]} | {type: "FETCH_FAIL"; payload: string}

const initialState: State = {
  products: [],
  loading: true,
  error: ''
}

const reducer = (state: State, action: Action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return { ...state, loading: true}
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false}
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload}
    default: 
      return state
  }
}


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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);