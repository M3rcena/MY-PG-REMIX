import React from "react";
import { PrismaClient } from '@prisma/client'


import authStylesHref from '../styles/auth.css'
import { redirect } from 'react-router-dom'

import image from '../assets/img/Auth/signin-image.jpg';

export const links = () => {
  return [
    { rel: 'stylesheet', href: authStylesHref }
  ]
}

export default function Login() {
  return (
    <>
      <div>
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src={image} alt="login image" /></figure>
                <a href="#" className="signup-image-link">Create an account</a>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                  </div>
                  <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}