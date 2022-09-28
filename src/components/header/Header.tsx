import React from 'react'
import './header.scss'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import HomePage from '../../pages/homePage/HomePage';
import LoginPage from '../../pages/sign-inPage/LoginPage';
import { useAppSelector } from '../../redux/store/store';

export default function Header() {
    const quantity = useAppSelector(state=>state.products.quantity)
  return (
    <div className="header">
        <Link  to='/'>
            <img
                className="header-logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo" />
        </Link>
        <div className="header-address">
            <div className="header-address_logo">
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="header-address_desc">
                <div className="address-desc_name">
                    <h6>Deliver to Bazos</h6>
                </div>
                <div className="address-desc_location">
                    <h3>Istanbul 3400</h3>
                </div>
            </div>
        </div>
        <div className="header-search">
            <input type="text" maxLength={10} className="header-search_input" />
            <div className="header-search_icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="header-nav">
            <Link to="/login">
                <div className="header-nav_option">
                    <span className="nav-option_top">
                        Hello Guest
                    </span>
                    <span className="nav-option_bot">
                        Sign In
                    </span>
                </div>
            </Link>
            <Link to="">
                <div className="header-nav_option">
                    <span className="nav-option_top">
                        Return
                    </span>
                    <span className="nav-option_bot">
                        & Orders
                    </span>
                </div>
            </Link>
            <Link to="">
                <div className="header-nav_option">
                    <span className="nav-option_top">
                        Your
                    </span>
                    <span className="nav-option_bot">
                        Prime
                    </span>
                </div>
            </Link>
            <Link to="/checkout">
                <div className="header-nav_optionBasket">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span className="nav-option_bot">
                        {quantity}
                    </span>
                </div>
            </Link>
        </div>
        
    </div>
  )
}
