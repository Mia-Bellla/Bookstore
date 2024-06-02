import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Contact';
import './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
   {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
