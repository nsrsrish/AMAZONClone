import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';

function App() {

  

  return (
    <Router>
    <div className="app">
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={
            <div>
              <Header />
              <Home />
            </div>
          } />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
