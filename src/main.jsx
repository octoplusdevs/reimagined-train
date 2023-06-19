import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from "./routes";
import { BrowserRouter, Link } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <ul>
          <li><Link to={'/register'}>Register</Link></li>
          <li><Link to={'/password/reset'}>Forgot Password</Link></li>
          <li><Link to={'/password/reset/:token'}>Reset Password</Link></li>
        </ul>
        <Routes />
      </BrowserRouter>
  </React.StrictMode>,
)
