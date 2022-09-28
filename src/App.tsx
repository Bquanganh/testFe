import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './pages/sign-inPage/LoginPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import PaymentPage from './pages/paymentPage/PaymentPage';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
        </Routes>   
      </div>

    </Router>
  );
}

export default App;
