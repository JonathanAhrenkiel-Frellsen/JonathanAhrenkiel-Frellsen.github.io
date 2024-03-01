import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './pages/gitprofile.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GitProfile config={CONFIG} />,
  },
  // {
  //   path: '*',
  //   // element: <Page404 />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
