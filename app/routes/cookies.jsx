import React from 'react'

import { Helmet } from 'react-helmet'

import indexStylesHref from "../styles/index.css"
import { Link, useNavigate } from '@remix-run/react'

import { translate } from '~/structures/i18n.mjs'

export const links = () => {
  return [
    { rel: 'stylesheet', href: indexStylesHref },
  ]
};

export default function Cookies() {
  let navigate = useNavigate()
  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>{translate("gr", "info.name")}</title>
          <meta property="og:title" content="EPAL ALIMOU" />
        </Helmet>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">{translate("gr", "info.logo")}</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span>
                  <Link to="/">{translate("gr", "info.nav.home")}</Link>
                </span>
                <span className="home-nav2">
                  <Link to="/about">{translate("gr", "info.nav.about")}</Link>
                </span>
                <span className="home-nav3">
                  <Link to="/features">Features</Link>
                </span>
                <span className="home-nav4">
                  <Link to="/parties">
                    {translate("gr", "info.nav.parties")}
                  </Link>
                </span>
                <span className="home-nav5">
                  <Link to="/discounts">
                    {translate("gr", "info.nav.discount")}
                  </Link>
                </span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">
                  <Link to="/login">{translate("gr", "info.nav.login")}</Link>
                </button>
                <button className="home-register button">
                  <Link to="/register">
                    {translate("gr", "info.nav.register")}
                  </Link>
                </button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">
                    <Link to="/">{translate("gr", "info.logo")}</Link>
                  </span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">
                    <Link to="/">{translate("gr", "info.nav.home")}</Link>
                  </span>
                  <span className="home-nav21">
                    <Link to="/about">{translate("gr", "info.nav.about")}</Link>
                  </span>
                  <span className="home-nav31">
                    <Link to="/features">Features</Link>
                  </span>
                  <span className="home-nav41">
                    <Link to="/parties">
                      {translate("gr", "info.nav.parties")}
                    </Link>
                  </span>
                  <span className="home-nav51">
                    <Link to="/discount">
                      {translate("gr", "info.nav.discount")}
                    </Link>
                  </span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button">
                    <Link to="/login">{translate("gr", "info.nav.login")}</Link>
                  </button>
                  <button className="home-register1 button">
                    <Link to="/register">
                      {translate("gr", "info.nav.register")}
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <center>
        <h1>Cookie Policy for MyPG</h1>
        <p>This is the Cookie Policy for MyPG, accessible from https://mypg.gr/</p>
        <p><strong>What Are Cookies</strong></p>
        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
        <p><strong>How We Use Cookies</strong></p>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
        <p><strong>Disabling Cookies</strong></p>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator</a>.</p>
        <p><strong>The Cookies We Set</strong></p>
        <ul>
          <li>
            <p>Account related cookies</p>
            <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
          </li>
          <li>
            <p>Login related cookies</p>
            <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
          </li>
          <li>
            <p>Email newsletters related cookies</p>
            <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
          </li>
          <li>
            <p>Orders processing related cookies</p>
            <p>This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</p>
          </li>
          <li>
            <p>Forms related cookies</p>
            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
          </li>
          <li>
            <p>Site preferences cookies</p>
            <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
          </li>
        </ul>
        <p><strong>Third Party Cookies</strong></p>
        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
        <ul>
          <li>
            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
            <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
          </li>
          <li>
            <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
          </li>
        </ul>
        <p><strong>More Information</strong></p>
        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <p>For more general information on cookies, please read <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">the Cookies Policy article</a>.</p>
        <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
        <ul>
          <li>Email: mypg@epalalimou.me</li>
        </ul>
        </center>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container31">
              <span className="home-logo2">
                <Link to="/">{translate("gr", "info.logo")}</Link>
              </span>
              <nav className="home-nav1 home-nav1">
                <span className="home-nav12">
                  <Link to="/privacy">
                    {translate("gr", "info.nav.privacy")}
                  </Link>
                </span>
                <span className="home-nav22">
                  <Link to="/terms">{translate("gr", "info.nav.terms")}</Link>
                </span>
                <span className="home-nav32">
                  <Link to="/cookies">
                    {translate("gr", "info.nav.cookies")}
                  </Link>
                </span>
                <span className="home-nav42">
                  <Link to="/contact">
                    {translate("gr", "info.nav.contact")}
                  </Link>
                </span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="home-text61">
                {translate("gr", "info.copyright")}
              </span>
              <div className="home-icon-group1">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g><path fill="#15aaf2" d="M 10.5,-0.5 C 13.8333,-0.5 17.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.1667 31.5,11.8333 31.5,12.5C 29.5,10.8333 27.5,9.16667 25.5,7.5C 22.9926,7.80464 20.3259,7.9713 17.5,8C 15.9632,9.10963 15.2965,10.6096 15.5,12.5C 12.1485,11.9916 9.14847,10.6582 6.5,8.5C 5.24604,10.2592 5.57938,11.7592 7.5,13C 6.83333,13.3333 6.16667,13.6667 5.5,14C 7.23352,16.2658 8.90019,18.4325 10.5,20.5C 8.92226,21.2978 7.2556,21.7978 5.5,22C 6.05596,22.3826 6.38929,22.8826 6.5,23.5C 8.16667,25.8333 10.1667,27.8333 12.5,29.5C 12.8333,30.1667 13.1667,30.8333 13.5,31.5C 12.5,31.5 11.5,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5C -0.5,17.1667 -0.5,13.8333 -0.5,10.5C 1.83333,5.5 5.5,1.83333 10.5,-0.5 Z" /></g><g><path fill="#f6fafc" d="M 25.5,7.5 C 24.3964,10.0307 23.5631,13.0307 23,16.5C 19.2383,22.5964 13.7383,24.9297 6.5,23.5C 6.38929,22.8826 6.05596,22.3826 5.5,22C 7.2556,21.7978 8.92226,21.2978 10.5,20.5C 8.90019,18.4325 7.23352,16.2658 5.5,14C 6.16667,13.6667 6.83333,13.3333 7.5,13C 5.57938,11.7592 5.24604,10.2592 6.5,8.5C 9.14847,10.6582 12.1485,11.9916 15.5,12.5C 15.2965,10.6096 15.9632,9.10963 17.5,8C 20.3259,7.9713 22.9926,7.80464 25.5,7.5 Z" /></g><g><path fill="#0699db" d="M 31.5,13.5 C 31.5,15.8333 31.5,18.1667 31.5,20.5C 29.1667,25.5 25.5,29.1667 20.5,31.5C 18.1667,31.5 15.8333,31.5 13.5,31.5C 13.1667,30.8333 12.8333,30.1667 12.5,29.5C 13.552,29.6495 14.552,29.4828 15.5,29C 20.6754,23.6578 26.0087,18.4911 31.5,13.5 Z" /></g><g><path fill="#1489c1" d="M 25.5,7.5 C 27.5,9.16667 29.5,10.8333 31.5,12.5C 31.5,12.8333 31.5,13.1667 31.5,13.5C 26.0087,18.4911 20.6754,23.6578 15.5,29C 14.552,29.4828 13.552,29.6495 12.5,29.5C 10.1667,27.8333 8.16667,25.8333 6.5,23.5C 13.7383,24.9297 19.2383,22.5964 23,16.5C 23.5631,13.0307 24.3964,10.0307 25.5,7.5 Z" /></g>
                </svg>
                <a href="https://www.instagram.com/play.ground4you?igsh=MzRlODBiNWFlZA==" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g><path fill="#7637aa" d="M 13.5,-0.5 C 15.8333,-0.5 18.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.8333 31.5,13.1667 31.5,14.5C 29.5,12.8333 27.5,11.1667 25.5,9.5C 24.7638,7.77055 23.4305,6.77055 21.5,6.5C 20.791,5.59603 19.791,5.26269 18.5,5.5C 16.8333,3.5 15.1667,1.5 13.5,-0.5 Z" /></g><g><path fill="#a53392" d="M 10.5,-0.5 C 11.5,-0.5 12.5,-0.5 13.5,-0.5C 15.1667,1.5 16.8333,3.5 18.5,5.5C 16.1667,5.5 13.8333,5.5 11.5,5.5C 10.5,4.16667 9.5,2.83333 8.5,1.5C 9.16667,0.833333 9.83333,0.166667 10.5,-0.5 Z" /></g><g><path fill="#d3496d" d="M 8.5,1.5 C 9.5,2.83333 10.5,4.16667 11.5,5.5C 6.6305,7.04935 4.6305,10.3827 5.5,15.5C 3.75405,13.7484 1.75405,12.4151 -0.5,11.5C -0.5,11.1667 -0.5,10.8333 -0.5,10.5C 1.39306,6.36956 4.39306,3.36956 8.5,1.5 Z" /></g><g><path fill="#eddbde" d="M 11.5,5.5 C 13.8333,5.5 16.1667,5.5 18.5,5.5C 19.791,5.26269 20.791,5.59603 21.5,6.5C 21.5,7.16667 21.1667,7.5 20.5,7.5C 16.6286,7.18503 12.9619,7.51836 9.5,8.5C 8.88258,8.61071 8.38258,8.94404 8,9.5C 4.49984,21.8336 8.99984,26.5002 21.5,23.5C 21.5,23.8333 21.5,24.1667 21.5,24.5C 20.0813,25.4511 18.4147,25.7845 16.5,25.5C 14.1667,25.5 11.8333,25.5 9.5,25.5C 7.46888,24.4613 6.13554,22.7946 5.5,20.5C 5.5,18.8333 5.5,17.1667 5.5,15.5C 4.6305,10.3827 6.6305,7.04935 11.5,5.5 Z" /></g><g><path fill="#efe3ec" d="M 21.5,6.5 C 23.4305,6.77055 24.7638,7.77055 25.5,9.5C 25.5,11.8333 25.5,14.1667 25.5,16.5C 25.5,18.1667 25.5,19.8333 25.5,21.5C 24.1667,22.5 22.8333,23.5 21.5,24.5C 21.5,24.1667 21.5,23.8333 21.5,23.5C 21.5,23.1667 21.5,22.8333 21.5,22.5C 22.1667,22.5 22.5,22.1667 22.5,21.5C 23.6453,17.6888 23.8119,13.6888 23,9.5C 22.0053,8.93406 21.172,8.26739 20.5,7.5C 21.1667,7.5 21.5,7.16667 21.5,6.5 Z" /></g><g><path fill="#f2e6ea" d="M 15.5,10.5 C 17.674,10.7497 19.3406,11.7497 20.5,13.5C 20.8333,18.5 18.5,20.8333 13.5,20.5C 10.6484,18.4275 9.98178,15.7608 11.5,12.5C 12.5769,11.2949 13.9102,10.6282 15.5,10.5 Z" /></g><g><path fill="#e7794b" d="M -0.5,11.5 C 1.75405,12.4151 3.75405,13.7484 5.5,15.5C 5.5,17.1667 5.5,18.8333 5.5,20.5C 3.5,18.8333 1.5,17.1667 -0.5,15.5C -0.5,14.1667 -0.5,12.8333 -0.5,11.5 Z" /></g><g><path fill="#d55c70" d="M 9.5,8.5 C 12.0821,8.02539 14.0821,8.69206 15.5,10.5C 13.9102,10.6282 12.5769,11.2949 11.5,12.5C 9.98178,15.7608 10.6484,18.4275 13.5,20.5C 13.6107,21.1174 13.944,21.6174 14.5,22C 16.8098,22.4966 19.1432,22.6633 21.5,22.5C 21.5,22.8333 21.5,23.1667 21.5,23.5C 8.99984,26.5002 4.49984,21.8336 8,9.5C 8.38258,8.94404 8.88258,8.61071 9.5,8.5 Z" /></g><g><path fill="#782f87" d="M 25.5,9.5 C 27.5,11.1667 29.5,12.8333 31.5,14.5C 31.5,16.5 31.5,18.5 31.5,20.5C 31.1667,20.5 30.8333,20.5 30.5,20.5C 28.8207,19.0837 27.1541,17.7503 25.5,16.5C 25.5,14.1667 25.5,11.8333 25.5,9.5 Z" /></g><g><path fill="#8d3851" d="M 13.5,12.5 C 18.1585,12.0146 19.4919,13.848 17.5,18C 12.7282,18.8104 11.3948,16.9771 13.5,12.5 Z" /></g><g><path fill="#a94e89" d="M 9.5,8.5 C 12.9619,7.51836 16.6286,7.18503 20.5,7.5C 21.172,8.26739 22.0053,8.93406 23,9.5C 23.8119,13.6888 23.6453,17.6888 22.5,21.5C 22.7062,18.5049 22.0395,15.8383 20.5,13.5C 19.3406,11.7497 17.674,10.7497 15.5,10.5C 14.0821,8.69206 12.0821,8.02539 9.5,8.5 Z" /></g><g><path fill="#daab3e" d="M -0.5,20.5 C -0.5,20.1667 -0.5,19.8333 -0.5,19.5C 4.5,22.5 8.5,26.5 11.5,31.5C 11.1667,31.5 10.8333,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5 Z" /></g><g><path fill="#a43e5b" d="M 20.5,13.5 C 22.0395,15.8383 22.7062,18.5049 22.5,21.5C 22.5,22.1667 22.1667,22.5 21.5,22.5C 19.1432,22.6633 16.8098,22.4966 14.5,22C 13.944,21.6174 13.6107,21.1174 13.5,20.5C 18.5,20.8333 20.8333,18.5 20.5,13.5 Z" /></g><g><path fill="#e29643" d="M -0.5,15.5 C 1.5,17.1667 3.5,18.8333 5.5,20.5C 6.13554,22.7946 7.46888,24.4613 9.5,25.5C 11.1667,27.5 12.8333,29.5 14.5,31.5C 13.5,31.5 12.5,31.5 11.5,31.5C 8.5,26.5 4.5,22.5 -0.5,19.5C -0.5,18.1667 -0.5,16.8333 -0.5,15.5 Z" /></g><g><path fill="#b13077" d="M 25.5,16.5 C 27.1541,17.7503 28.8207,19.0837 30.5,20.5C 30.3404,22.153 29.6737,23.4863 28.5,24.5C 26.8102,24.1436 25.8102,23.1436 25.5,21.5C 25.5,19.8333 25.5,18.1667 25.5,16.5 Z" /></g><g><path fill="#c94664" d="M 25.5,21.5 C 25.8102,23.1436 26.8102,24.1436 28.5,24.5C 26.7122,27.6149 24.0455,29.6149 20.5,30.5C 19.1667,28.8333 17.8333,27.1667 16.5,25.5C 18.4147,25.7845 20.0813,25.4511 21.5,24.5C 22.8333,23.5 24.1667,22.5 25.5,21.5 Z" /></g><g><path fill="#c36843" d="M 9.5,25.5 C 11.8333,25.5 14.1667,25.5 16.5,25.5C 17.8333,27.1667 19.1667,28.8333 20.5,30.5C 20.5,30.8333 20.5,31.1667 20.5,31.5C 18.5,31.5 16.5,31.5 14.5,31.5C 12.8333,29.5 11.1667,27.5 9.5,25.5 Z" /></g>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555636586897" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g><path fill="#1976f0" d="M 10.5,-0.5 C 13.8333,-0.5 17.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.8333 31.5,13.1667 31.5,14.5C 27.8971,12.2369 24.5638,9.57025 21.5,6.5C 21.2089,5.35089 20.3756,4.68423 19,4.5C 17.9302,4.52804 17.0968,4.86137 16.5,5.5C 15.5041,5.41423 14.6708,5.74756 14,6.5C 13.5045,8.4727 13.3379,10.4727 13.5,12.5C 12.1667,12.5 10.8333,12.5 9.5,12.5C 9.23219,14.099 9.56552,15.4324 10.5,16.5C 11.9807,19.728 12.9807,23.0614 13.5,26.5C 13.8333,26.5 14.1667,26.5 14.5,26.5C 15.925,27.922 16.925,29.5887 17.5,31.5C 15.1667,31.5 12.8333,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5C -0.5,17.1667 -0.5,13.8333 -0.5,10.5C 1.83333,5.5 5.5,1.83333 10.5,-0.5 Z" /></g><g><path fill="#8cacd8" d="M 16.5,5.5 C 17.0968,4.86137 17.9302,4.52804 19,4.5C 20.3756,4.68423 21.2089,5.35089 21.5,6.5C 21.6716,7.49162 21.3382,8.15829 20.5,8.5C 20.5,7.5 20.5,6.5 20.5,5.5C 19.1667,5.5 17.8333,5.5 16.5,5.5 Z" /> </g> <g> <path fill="#ecf1f7" d="M 16.5,5.5 C 17.8333,5.5 19.1667,5.5 20.5,5.5C 20.5,6.5 20.5,7.5 20.5,8.5C 19.5,8.5 18.5,8.5 17.5,8.5C 17.5,9.83333 17.5,11.1667 17.5,12.5C 18.5,12.5 19.5,12.5 20.5,12.5C 20.5,13.8333 20.5,15.1667 20.5,16.5C 19.5,16.5 18.5,16.5 17.5,16.5C 17.5,19.8333 17.5,23.1667 17.5,26.5C 16.5,26.5 15.5,26.5 14.5,26.5C 14.1667,26.5 13.8333,26.5 13.5,26.5C 13.5,23.1667 13.5,19.8333 13.5,16.5C 12.5,16.5 11.5,16.5 10.5,16.5C 9.56552,15.4324 9.23219,14.099 9.5,12.5C 10.8333,12.5 12.1667,12.5 13.5,12.5C 13.3379,10.4727 13.5045,8.4727 14,6.5C 14.6708,5.74756 15.5041,5.41423 16.5,5.5 Z" /> </g> <g> <path fill="#1a57a6" d="M 21.5,6.5 C 24.5638,9.57025 27.8971,12.2369 31.5,14.5C 31.5,16.5 31.5,18.5 31.5,20.5C 29.1667,25.5 25.5,29.1667 20.5,31.5C 19.5,31.5 18.5,31.5 17.5,31.5C 16.925,29.5887 15.925,27.922 14.5,26.5C 15.5,26.5 16.5,26.5 17.5,26.5C 17.5,23.1667 17.5,19.8333 17.5,16.5C 18.5,16.5 19.5,16.5 20.5,16.5C 20.5,15.1667 20.5,13.8333 20.5,12.5C 19.5,12.5 18.5,12.5 17.5,12.5C 17.5,11.1667 17.5,9.83333 17.5,8.5C 18.5,8.5 19.5,8.5 20.5,8.5C 21.3382,8.15829 21.6716,7.49162 21.5,6.5 Z" /></g><g><path fill="#4d85d0" d="M 10.5,16.5 C 11.5,16.5 12.5,16.5 13.5,16.5C 13.5,19.8333 13.5,23.1667 13.5,26.5C 12.9807,23.0614 11.9807,19.728 10.5,16.5 Z" /></g>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}