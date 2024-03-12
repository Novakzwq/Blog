import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Social } from './pages/Social.jsx';
import Projects from './pages/Projects.jsx';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: 'home', element: <Home />},
      {path: 'social', element: <Social />, index: true},
      {path: 'projects', element: <Projects />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
