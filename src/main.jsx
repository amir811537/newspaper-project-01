import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import routes from './Route/Route.jsx';
import Authproviders from './Providers/Authproviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Authproviders>
<RouterProvider router={routes}></RouterProvider>
</Authproviders>
  </React.StrictMode>,
)
