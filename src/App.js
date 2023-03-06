import React from 'react';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home'
import Detail from "./Component/Detail"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
