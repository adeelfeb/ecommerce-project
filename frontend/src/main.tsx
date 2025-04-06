// import 'bootstrap/dist/css/bootstrap.min.css';
// import { StrictMode, Suspense } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; // ✅ use 'react-router-dom'
// import App from './App.tsx';
// import React from 'react';

// // Lazy imports  
// const About = React.lazy(() => import('./pages/ABout.tsx'));
// const Home = React.lazy(() => import('./pages/Home.tsx'));
// const Login = React.lazy(() => import('./pages/Login'));
// const Register = React.lazy(() => import('./pages/Register'));
// const AuthLayout = React.lazy(() => import('./pages/AuthLayout'));
// const Cart = React.lazy(() => import('./pages/Cart.tsx'));
// const ProductPage = React.lazy(() => import('./pages/ProductPage.tsx'));

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route index element={<Home />} /> {/* Default child */}
//             <Route path="about" element={<About />} />
//             <Route path="cart" element={<Cart />} />
//             <Route path="product/:slug" element={<ProductPage />} />
//             <Route element={<AuthLayout />}>
//               <Route path="login" element={<Login />} />
//               <Route path="register" element={<Register />} />
//             </Route>
//           </Route>
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   </StrictMode>
// );




import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

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
          const { default: About } = await import('./pages/ABout');
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
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </StrictMode>
);