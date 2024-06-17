import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import App from "./App.jsx";
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
    
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
