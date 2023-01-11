import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { About } from './components/About';
import { Users } from './components/Users';
import {NavBar} from './components/Navbar'
import 'bootswatch/dist/journal/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar/>
    <div className='container p-4'>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/" element={<Users/>}/>
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
