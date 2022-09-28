import React from 'react'
import './loginPage.scss'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

export default function LoginPage() {
  return (
    
        <div className="login">
            <Link to="/">
                <img className="login-logo" src="https://extenship.com/img/logo/Amazon_logo.svg" alt="" />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password"   />

                    <button type="submit" className="login-signInBtt">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON-CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button  className="login-registerButton">Create your Amazon Account</button>
            </div>
        </div>
  )
}
