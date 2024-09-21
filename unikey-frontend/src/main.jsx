import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Login from './Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
         
          <li><Link to="/Login">Login 2</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
    
      </Routes>
    </Router>
  </React.StrictMode>
);
