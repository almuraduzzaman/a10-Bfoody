import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthProviders';
import ChefRecipes from './components/ChefRecipes';
import toast, { Toaster } from 'react-hot-toast';
import ErrorPage from './shared/ErrorPage';
import LoadingSpinner from './shared/LoadingSpinner';
import Blog from './components/Blog';
import PrivateRoutes from './components/routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/chef_recipes/:id',
        element: <PrivateRoutes><ChefRecipes /></PrivateRoutes>,
        loader: () => fetch('https://a10-bfoody-server-murad.vercel.app/chefInfo')
      },
      {
        path: '/loader',
        element: <LoadingSpinner />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProviders>
  </React.StrictMode>,
)
