// Import React and Remix Packages
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "@remix-run/react";

// import Components
import {
  FeatureCard,
  links as featureCardLinks,
} from "../components/feature-card/feature-card.jsx";
import {
  Question,
  links as questionLinks,
} from "../components/question/question.jsx";

// Import CSS
import indexStylesHref from "../styles/index.css?url";

// Import Translation Packages
import { useTranslation } from "react-i18next";

// Load images
import Alimos from "../assets/img/companies/Alimos.png";
import Ilioupoli from "../assets/img/companies/Ilioupoli.png";
import Elliniko from "../assets/img/companies/elliniko.png";

// Load CSS and JS
export const links = () => {
  return [
    ...featureCardLinks(),
    ...questionLinks(),
    { rel: "stylesheet", href: indexStylesHref },
  ];
};

// Translation System Handler
export let handle = {
  i18n: "common"
};

// Home Page
export default function Home() {
  let navigate = useNavigate();

  // Get the translation function
  let { t } = useTranslation("common");

  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>{t("info.name")}</title>
          <meta property="og:title" content="EPAL ALIMOU" />
        </Helmet>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">{t("info.logo")}</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span>
                  <Link to="/">{t("info.nav.home")}</Link>
                </span>
                <span className="home-nav2">
                  <Link to="/about">{t("info.nav.about")}</Link>
                </span>
                <span className="home-nav3">
                  <Link to="/features">Features</Link>
                </span>
                <span className="home-nav4">
                  <Link to="/parties">
                    {t("info.nav.parties")}
                  </Link>
                </span>
                <span className="home-nav5">
                  <Link to="/discounts">
                    {t("info.nav.discount")}
                  </Link>
                </span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">
                  <Link to="/login">{t("info.nav.login")}</Link>
                </button>
                <button className="home-register button">
                  <Link to="/register">
                    {t("info.nav.register")}
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
                    <Link to="/">{t("info.logo")}</Link>
                  </span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">
                    <Link to="/">{t("info.nav.home")}</Link>
                  </span>
                  <span className="home-nav21">
                    <Link to="/about">{t("info.nav.about")}</Link>
                  </span>
                  <span className="home-nav31">
                    <Link to="/features">Features</Link>
                  </span>
                  <span className="home-nav41">
                    <Link to="/parties">
                      {t("info.nav.parties")}
                    </Link>
                  </span>
                  <span className="home-nav51">
                    <Link to="/discount">
                      {t("info.nav.discount")}
                    </Link>
                  </span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button">
                    <Link to="/login">{t("info.nav.login")}</Link>
                  </button>
                  <button className="home-register1 button">
                    <Link to="/register">
                      {t("info.nav.register")}
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
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">
                {t("index.title")}
              </h1>
              <span className="home-hero-sub-heading">
                {t("index.subtitle")}
              </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">
                  <Link to="/map">{t("index.map")}</Link>
                </button>
                <button className="home-hero-button2 button">
                  <Link to="/about">{t("index.more")}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container02">
              <span className="home-text sectionTitle">
                <span>{t("index.details")}</span>
                <br></br>
              </span>
              <h2 className="home-details-heading heading2">
                {t("info.name")}
              </h2>
              <span className="home-details-sub-heading">
                {t("index.description")}
              </span>
            </div>
            <Link to={"/map"}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1603623898160-a611b90151ba?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTQ2MzA2NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              className="home-details-image"
            />
            </Link>
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container03">
                <span className="home-text03 sectionTitle">
                  <span>{t("index.features.title")}</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  {t("index.features.subtitle")}
                </h2>
                <span className="home-features-sub-heading">
                  {t("index.features.description")}
                </span>
              </div>
              <div className="home-container04">
                <FeatureCard
                  Heading={t("index.features.1.title")}
                  SubHeading={t("index.features.1.description")}
                  Color="feature-card-feature-card"
                  Icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path fill="#34c4f2" d="M 17.5,3.5 C 17.6574,6.31757 18.9908,8.31757 21.5,9.5C 20.5546,14.4053 20.2213,19.4053 20.5,24.5C 18.4907,26.0652 16.1573,27.0652 13.5,27.5C 12.3933,25.0311 10.3933,24.0311 7.5,24.5C 7.5,22.8333 7.5,21.1667 7.5,19.5C 8.71957,17.7179 9.38623,15.7179 9.5,13.5C 11.604,13.7989 13.604,13.4656 15.5,12.5C 13.9292,9.90656 11.5959,8.90656 8.5,9.5C 9.10978,8.60895 9.44312,7.60895 9.5,6.5C 12.0067,5.10841 14.6733,4.10841 17.5,3.5 Z" /></g><g><path fill="#27ace9" d="M -0.5,4.5 C 2.93889,4.78777 6.27222,5.45444 9.5,6.5C 9.44312,7.60895 9.10978,8.60895 8.5,9.5C 7.87605,9.91695 7.54272,10.5836 7.5,11.5C 7.74716,12.7133 8.41383,13.38 9.5,13.5C 9.38623,15.7179 8.71957,17.7179 7.5,19.5C 4.09525,18.8087 1.42858,17.1421 -0.5,14.5C -0.5,11.1667 -0.5,7.83333 -0.5,4.5 Z" /></g><g><path fill="#a3d75d" d="M 31.5,4.5 C 31.5,9.5 31.5,14.5 31.5,19.5C 26.9957,18.6732 24.4957,16.0065 24,11.5C 23.2917,10.6195 22.4584,9.9528 21.5,9.5C 18.9908,8.31757 17.6574,6.31757 17.5,3.5C 22.2357,2.3167 26.9023,2.65004 31.5,4.5 Z" /></g><g><path fill="#a2de75" d="M 8.5,9.5 C 11.5959,8.90656 13.9292,9.90656 15.5,12.5C 13.604,13.4656 11.604,13.7989 9.5,13.5C 8.41383,13.38 7.74716,12.7133 7.5,11.5C 7.54272,10.5836 7.87605,9.91695 8.5,9.5 Z" /></g><g><path fill="#08adee" d="M 21.5,9.5 C 22.4584,9.9528 23.2917,10.6195 24,11.5C 24.4957,16.0065 26.9957,18.6732 31.5,19.5C 31.5,20.8333 31.5,22.1667 31.5,23.5C 28.1456,21.8868 25.1456,22.2202 22.5,24.5C 21.8333,24.5 21.1667,24.5 20.5,24.5C 20.2213,19.4053 20.5546,14.4053 21.5,9.5 Z" /></g><g><path fill="#97d564" d="M -0.5,14.5 C 1.42858,17.1421 4.09525,18.8087 7.5,19.5C 7.5,21.1667 7.5,22.8333 7.5,24.5C 10.3933,24.0311 12.3933,25.0311 13.5,27.5C 8.76432,28.6833 4.09765,28.35 -0.5,26.5C -0.5,22.5 -0.5,18.5 -0.5,14.5 Z" /></g><g><path fill="#9fe180" d="M 13.5,16.5 C 16.1247,17.4657 16.1247,18.4657 13.5,19.5C 12.4376,18.5754 12.4376,17.5754 13.5,16.5 Z" /></g><g><path fill="#8bd072" d="M 31.5,23.5 C 31.5,24.5 31.5,25.5 31.5,26.5C 28.2727,26.3239 25.2727,25.6572 22.5,24.5C 25.1456,22.2202 28.1456,21.8868 31.5,23.5 Z" /></g></svg>}
                ></FeatureCard>
                <FeatureCard
                  Heading={t("index.features.2.title")}
                  SubHeading={t("index.features.2.description")}
                  Color="feature-card-feature-card2"
                  Icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path fill="#656e67" d="M 20.5,-0.5 C 21.8333,-0.5 23.1667,-0.5 24.5,-0.5C 26.1675,1.47865 26.8342,3.81198 26.5,6.5C 24.5,6.5 23.5,5.5 23.5,3.5C 22.8333,2.16667 22.1667,2.16667 21.5,3.5C 19.5905,4.97457 18.4238,6.97457 18,9.5C 17.5045,7.5273 17.3379,5.5273 17.5,3.5C 18.147,1.85946 19.147,0.526127 20.5,-0.5 Z"/></g><g><path fill="#9bc86b" d="M 17.5,3.5 C 17.3379,5.5273 17.5045,7.5273 18,9.5C 18.4238,6.97457 19.5905,4.97457 21.5,3.5C 21.8333,3.5 22.1667,3.5 22.5,3.5C 23.9665,7.07363 24.7998,10.7403 25,14.5C 21.489,20.1946 17.989,25.8613 14.5,31.5C 13.8333,31.5 13.1667,31.5 12.5,31.5C 9.40223,29.1084 6.06889,26.9417 2.5,25C 1.91858,24.1074 1.58524,23.1074 1.5,22C 3.92147,16.3246 6.75481,10.8246 10,5.5C 12.3015,4.13279 14.8015,3.46612 17.5,3.5 Z"/></g><g><path fill="#70ace1" d="M 22.5,3.5 C 22.8333,3.5 23.1667,3.5 23.5,3.5C 23.5,5.5 24.5,6.5 26.5,6.5C 27.4584,6.9528 28.2917,7.61947 29,8.5C 29.7981,16.246 29.6314,23.9127 28.5,31.5C 23.8333,31.5 19.1667,31.5 14.5,31.5C 17.989,25.8613 21.489,20.1946 25,14.5C 24.7998,10.7403 23.9665,7.07363 22.5,3.5 Z"/></g><g><path fill="#bddcce" d="M 12.5,12.5 C 13.7759,13.3864 13.7759,14.3864 12.5,15.5C 11.4376,14.5754 11.4376,13.5754 12.5,12.5 Z"/></g><g><path fill="#c7e1ed" d="M 14.5,15.5 C 15.552,15.3505 16.552,15.5172 17.5,16C 15.1891,18.1637 12.5225,19.1637 9.5,19C 11.2331,17.8111 12.8998,16.6444 14.5,15.5 Z"/></g></svg>}
                ></FeatureCard>
                <FeatureCard
                  Heading={t("index.features.3.title")}
                  SubHeading={t("index.features.3.description")}
                  Color="feature-card-feature-card3"
                  Icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path fill="#3a96d6" d="M 15.5,-0.5 C 16.5,-0.5 17.5,-0.5 18.5,-0.5C 18.573,1.02694 17.9063,2.02694 16.5,2.5C 16.1667,2.5 15.8333,2.5 15.5,2.5C 15.5,1.5 15.5,0.5 15.5,-0.5 Z"/></g><g><path fill="#f0c419" d="M 22.5,2.5 C 22.5,3.16667 22.5,3.83333 22.5,4.5C 22.2914,5.92167 21.7914,7.25501 21,8.5C 20.0228,9.77359 19.1894,9.77359 18.5,8.5C 18.5,8.16667 18.5,7.83333 18.5,7.5C 19.3909,6.73867 20.0576,5.73867 20.5,4.5C 19.3554,3.10903 19.3554,1.7757 20.5,0.5C 21.1818,1.24269 21.8485,1.90935 22.5,2.5 Z"/></g><g><path fill="#9558a6" d="M 22.5,4.5 C 22.5,3.83333 22.5,3.16667 22.5,2.5C 24.5428,-0.19369 26.2095,0.139643 27.5,3.5C 26.218,5.70428 24.5514,6.03762 22.5,4.5 Z"/></g><g><path fill="#ff5764" d="M 26.5,11.5 C 23.8338,11.9342 22.6671,10.9342 23,8.5C 26.5966,6.93388 27.7632,7.93388 26.5,11.5 Z"/></g><g><path fill="#9a5b9e" d="M 15.5,2.5 C 15.8333,2.5 16.1667,2.5 16.5,2.5C 17.9418,3.81953 18.6085,5.4862 18.5,7.5C 18.5,7.83333 18.5,8.16667 18.5,8.5C 17.1667,9.16667 16.1667,10.1667 15.5,11.5C 14.399,12.7997 13.0657,13.2997 11.5,13C 12.8228,12.1841 13.4894,11.0174 13.5,9.5C 15.2132,8.36465 15.8799,6.69798 15.5,4.5C 13.6693,5.05216 12.0026,5.05216 10.5,4.5C 11.6685,2.78256 13.3352,2.11589 15.5,2.5 Z"/></g><g><path fill="#edba22" d="M 6.5,8.5 C 9.80184,15.1352 14.8018,20.1352 21.5,23.5C 20.4863,24.6737 19.153,25.3404 17.5,25.5C 16.0351,24.2632 14.3684,23.2632 12.5,22.5C 10.8333,20.5 9.16667,18.5 7.5,16.5C 6.97439,14.7697 5.97439,13.4363 4.5,12.5C 5.16667,11.1667 5.83333,9.83333 6.5,8.5 Z"/></g><g><path fill="#d35827" d="M 6.5,8.5 C 6.7352,7.90326 7.2352,7.56993 8,7.5C 9.80029,8.31952 11.6336,8.98619 13.5,9.5C 13.4894,11.0174 12.8228,12.1841 11.5,13C 13.0657,13.2997 14.399,12.7997 15.5,11.5C 16.5,12.8333 17.5,14.1667 18.5,15.5C 18.5,16.8333 19.1667,17.5 20.5,17.5C 22.4748,19.3619 22.8081,21.3619 21.5,23.5C 14.8018,20.1352 9.80184,15.1352 6.5,8.5 Z"/></g><g><path fill="#3b94d3" d="M 31.5,11.5 C 31.5,12.1667 31.5,12.8333 31.5,13.5C 30.7777,14.5511 29.7777,15.2178 28.5,15.5C 28.5,15.1667 28.5,14.8333 28.5,14.5C 28.5,13.8333 28.1667,13.5 27.5,13.5C 26.8333,13.5 26.5,13.1667 26.5,12.5C 26.5,12.1667 26.5,11.8333 26.5,11.5C 27.7348,11.2786 28.7348,10.6119 29.5,9.5C 30.1818,10.2427 30.8485,10.9094 31.5,11.5 Z"/></g><g><path fill="#fe5463" d="M 26.5,12.5 C 26.5,13.1667 26.8333,13.5 27.5,13.5C 28.1667,13.5 28.5,13.8333 28.5,14.5C 28.5,14.8333 28.5,15.1667 28.5,15.5C 28.5,16.5 28.5,17.5 28.5,18.5C 25.8688,19.8689 25.2022,19.2022 26.5,16.5C 24.1474,13.8274 22.1474,14.1608 20.5,17.5C 19.1667,17.5 18.5,16.8333 18.5,15.5C 20.5452,13.0156 23.2118,12.0156 26.5,12.5 Z"/></g><g><path fill="#fc6b57" d="M 4.5,12.5 C 5.97439,13.4363 6.97439,14.7697 7.5,16.5C 6.32627,17.5137 5.6596,18.847 5.5,20.5C 3.89578,19.713 3.22911,18.3797 3.5,16.5C 3.43255,15.0413 3.76589,13.7079 4.5,12.5 Z"/></g><g><path fill="#efc020" d="M 3.5,16.5 C 3.22911,18.3797 3.89578,19.713 5.5,20.5C 7.23931,23.2427 9.57265,25.2427 12.5,26.5C 12.5,26.8333 12.5,27.1667 12.5,27.5C 10.4907,29.0652 8.15734,30.0652 5.5,30.5C 3.83333,28.5 2.16667,26.5 0.5,24.5C 0.732915,21.4582 1.73292,18.7916 3.5,16.5 Z"/></g><g><path fill="#945aa5" d="M 28.5,18.5 C 29.5,18.5 30.5,18.5 31.5,18.5C 31.5,19.5 31.5,20.5 31.5,21.5C 30.5,21.5 29.5,21.5 28.5,21.5C 28.5,20.5 28.5,19.5 28.5,18.5 Z"/></g><g><path fill="#aa6fa9" d="M 7.5,16.5 C 9.16667,18.5 10.8333,20.5 12.5,22.5C 12.5,23.8333 12.5,25.1667 12.5,26.5C 9.57265,25.2427 7.23931,23.2427 5.5,20.5C 5.6596,18.847 6.32627,17.5137 7.5,16.5 Z"/></g><g><path fill="#fb645c" d="M 12.5,22.5 C 14.3684,23.2632 16.0351,24.2632 17.5,25.5C 16.2196,26.9313 14.5529,27.5979 12.5,27.5C 12.5,27.1667 12.5,26.8333 12.5,26.5C 12.5,25.1667 12.5,23.8333 12.5,22.5 Z"/></g><g><path fill="#ba8370" d="M 4.5,24.5 C 6.33702,24.6395 6.67036,25.3061 5.5,26.5C 4.70245,26.0431 4.36912,25.3764 4.5,24.5 Z"/></g><g><path fill="#fd6855" d="M -0.5,24.5 C -0.166667,24.5 0.166667,24.5 0.5,24.5C 2.16667,26.5 3.83333,28.5 5.5,30.5C 4.83333,30.5 4.5,30.8333 4.5,31.5C 2.83333,31.5 1.16667,31.5 -0.5,31.5C -0.5,29.1667 -0.5,26.8333 -0.5,24.5 Z"/></g></svg>}
                ></FeatureCard>
                <FeatureCard
                  Heading="Συνδρομές"
                  SubHeading="Οι χρήστες μπορούν να απολαύσουν τις συνδρομές μας με 6.99 ευρώ και 19.99 ευρώ οι οποίες έχουν ποικίλια πλεονεκτήματα"
                  Color="feature-card-feature-card4"
                  Icon={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64px" height="64px" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g><path fill="#161005" d="M 18.5,-0.5 C 22.1667,-0.5 25.8333,-0.5 29.5,-0.5C 29.8333,0.5 30.5,1.16667 31.5,1.5C 31.5,5.16667 31.5,8.83333 31.5,12.5C 29.8595,13.147 28.5261,14.147 27.5,15.5C 27.5271,13.8007 28.1938,12.4674 29.5,11.5C 32.4842,3.81382 29.8175,0.147154 21.5,0.5C 19.8247,0.868398 18.8247,1.8684 18.5,3.5C 18.1667,3.5 17.8333,3.5 17.5,3.5C 17.5,2.83333 17.1667,2.5 16.5,2.5C 17.1667,1.5 17.8333,0.5 18.5,-0.5 Z"/></g>
                  <g><path fill="#e7a024" d="M 29.5,11.5 C 27.6987,9.41274 27.3654,7.07941 28.5,4.5C 28.1667,3.5 27.5,2.83333 26.5,2.5C 26.2178,5.05673 26.0511,7.7234 26,10.5C 25.6174,9.94404 25.1174,9.61071 24.5,9.5C 23.5,7.83333 22.1667,6.5 20.5,5.5C 20.1667,4.5 19.5,3.83333 18.5,3.5C 18.8247,1.8684 19.8247,0.868398 21.5,0.5C 29.8175,0.147154 32.4842,3.81382 29.5,11.5 Z"/></g>
                  <g><path fill="#030607" d="M -0.5,-0.5 C 4.83333,-0.5 10.1667,-0.5 15.5,-0.5C 15.2627,0.791047 15.596,1.79105 16.5,2.5C 17.1667,2.5 17.5,2.83333 17.5,3.5C 15.9174,5.50776 14.9174,7.8411 14.5,10.5C 14.6646,7.48162 14.498,4.48162 14,1.5C 9.66667,0.166667 5.33333,0.166667 1,1.5C 0.195489,4.69646 0.362156,7.69646 1.5,10.5C 2.56764,11.4345 3.90097,11.7678 5.5,11.5C 5.5,11.8333 5.5,12.1667 5.5,12.5C 3.5,12.5 1.5,12.5 -0.5,12.5C -0.5,8.16667 -0.5,3.83333 -0.5,-0.5 Z"/></g>
                  <g><path fill="#57b8c5" d="M 14.5,10.5 C 14.1667,10.5 13.8333,10.5 13.5,10.5C 9.97921,9.83374 6.31255,9.16708 2.5,8.5C 2.80762,7.69194 3.30762,7.02527 4,6.5C 5.11314,7.71109 6.2798,7.71109 7.5,6.5C 8.47758,6.97665 9.31091,7.64332 10,8.5C 11.8399,6.54641 12.6732,4.54641 12.5,2.5C 11.1713,5.6945 9.50459,6.02783 7.5,3.5C 6.83333,4.16667 6.16667,4.83333 5.5,5.5C 4.57451,4.35945 3.74117,4.35945 3,5.5C 2.66667,4.5 2.33333,3.5 2,2.5C 1.50258,5.14603 1.33591,7.8127 1.5,10.5C 0.362156,7.69646 0.195489,4.69646 1,1.5C 5.33333,0.166667 9.66667,0.166667 14,1.5C 14.498,4.48162 14.6646,7.48162 14.5,10.5 Z"/></g>
                  <g><path fill="#413116" d="M 18.5,3.5 C 19.5,3.83333 20.1667,4.5 20.5,5.5C 18.9826,5.51056 17.8159,6.17723 17,7.5C 16.7003,5.93434 17.2003,4.60101 18.5,3.5 Z"/></g>
                  <g><path fill="#2c3031" d="M 13.5,10.5 C 9.5,10.5 5.5,10.5 1.5,10.5C 1.33591,7.8127 1.50258,5.14603 2,2.5C 2.33333,3.5 2.66667,4.5 3,5.5C 3.74117,4.35945 4.57451,4.35945 5.5,5.5C 6.16667,4.83333 6.83333,4.16667 7.5,3.5C 9.50459,6.02783 11.1713,5.6945 12.5,2.5C 12.6732,4.54641 11.8399,6.54641 10,8.5C 9.31091,7.64332 8.47758,6.97665 7.5,6.5C 6.2798,7.71109 5.11314,7.71109 4,6.5C 3.30762,7.02527 2.80762,7.69194 2.5,8.5C 6.31255,9.16708 9.97921,9.83374 13.5,10.5 Z"/></g>
                  <g><path fill="#d7a859" d="M 17.5,3.5 C 17.8333,3.5 18.1667,3.5 18.5,3.5C 17.2003,4.60101 16.7003,5.93434 17,7.5C 17.8159,6.17723 18.9826,5.51056 20.5,5.5C 22.1667,6.5 23.5,7.83333 24.5,9.5C 25.4054,10.9643 25.4054,12.2976 24.5,13.5C 21.3033,11.5306 17.97,11.1972 14.5,12.5C 14.1667,12.5 13.8333,12.5 13.5,12.5C 13.5,12.1667 13.5,11.8333 13.5,11.5C 13.5,11.1667 13.5,10.8333 13.5,10.5C 13.8333,10.5 14.1667,10.5 14.5,10.5C 14.9174,7.8411 15.9174,5.50776 17.5,3.5 Z"/></g>
                  <g><path fill="#469ba6" d="M 1.5,10.5 C 5.5,10.5 9.5,10.5 13.5,10.5C 13.5,10.8333 13.5,11.1667 13.5,11.5C 10.6613,11.9688 7.99462,11.9688 5.5,11.5C 3.90097,11.7678 2.56764,11.4345 1.5,10.5 Z"/></g>
                  <g><path fill="#4f3a1b" d="M 29.5,11.5 C 28.1938,12.4674 27.5271,13.8007 27.5,15.5C 26.8333,15.5 26.5,15.8333 26.5,16.5C 26.1667,16.5 25.8333,16.5 25.5,16.5C 24.596,15.791 24.2627,14.791 24.5,13.5C 25.4054,12.2976 25.4054,10.9643 24.5,9.5C 25.1174,9.61071 25.6174,9.94404 26,10.5C 26.0511,7.7234 26.2178,5.05673 26.5,2.5C 27.5,2.83333 28.1667,3.5 28.5,4.5C 27.3654,7.07941 27.6987,9.41274 29.5,11.5 Z"/></g>
                  <g><path fill="#e9a226" d="M 13.5,12.5 C 13.8333,12.5 14.1667,12.5 14.5,12.5C 12.7484,14.2459 11.4151,16.2459 10.5,18.5C 8.87623,18.6399 7.70956,17.9733 7,16.5C 5.83333,17.6667 4.66667,18.8333 3.5,20C 5.17574,21.1769 6.50907,22.6769 7.5,24.5C 9.26521,25.0258 10.9319,25.3592 12.5,25.5C 12.5,26.1667 12.8333,26.5 13.5,26.5C 13.8333,27.1667 14.1667,27.8333 14.5,28.5C 12.7741,28.8146 11.1075,28.9813 9.5,29C 6.65026,26.3176 3.9836,23.4843 1.5,20.5C 3.5,18.1667 5.5,15.8333 7.5,13.5C 8.08605,13.7093 8.58605,14.0426 9,14.5C 10.049,12.8934 11.549,12.2267 13.5,12.5 Z"/></g>
                  <g><path fill="#23425c" d="M 24.5,13.5 C 24.2627,14.791 24.596,15.791 25.5,16.5C 26.7704,25.8867 22.7704,29.2201 13.5,26.5C 12.8333,26.5 12.5,26.1667 12.5,25.5C 11.1346,23.4091 10.4679,21.0758 10.5,18.5C 11.4151,16.2459 12.7484,14.2459 14.5,12.5C 17.97,11.1972 21.3033,11.5306 24.5,13.5 Z"/></g>
                  <g><path fill="#5fbbc8" d="M 18.5,16.5 C 16.8958,17.287 16.2291,18.6203 16.5,20.5C 19.7181,20.6509 20.0515,21.4842 17.5,23C 18,23.5 18.5,24 19,24.5C 20.2692,23.0953 20.7692,21.4286 20.5,19.5C 16.551,19.3068 16.551,18.8068 20.5,18C 19.944,17.6174 19.6107,17.1174 19.5,16.5C 19.8966,15.475 20.5632,15.3083 21.5,16C 25.4596,23.1979 23.4596,26.0312 15.5,24.5C 12.8997,21.7063 12.8997,18.873 15.5,16C 16.7494,15.2599 17.7494,15.4265 18.5,16.5 Z"/></g>
                  <g><path fill="#2d1c1b" d="M 18.5,16.5 C 18.8333,16.5 19.1667,16.5 19.5,16.5C 19.6107,17.1174 19.944,17.6174 20.5,18C 16.551,18.8068 16.551,19.3068 20.5,19.5C 20.7692,21.4286 20.2692,23.0953 19,24.5C 18.5,24 18,23.5 17.5,23C 20.0515,21.4842 19.7181,20.6509 16.5,20.5C 16.2291,18.6203 16.8958,17.287 18.5,16.5 Z"/></g>
                  <g><path fill="#191307" d="M 5.5,11.5 C 7.99462,11.9688 10.6613,11.9688 13.5,11.5C 13.5,11.8333 13.5,12.1667 13.5,12.5C 11.549,12.2267 10.049,12.8934 9,14.5C 8.58605,14.0426 8.08605,13.7093 7.5,13.5C 5.5,15.8333 3.5,18.1667 1.5,20.5C 3.9836,23.4843 6.65026,26.3176 9.5,29C 11.1075,28.9813 12.7741,28.8146 14.5,28.5C 13.8333,29.5 13.1667,30.5 12.5,31.5C 11.5,31.5 10.5,31.5 9.5,31.5C 6.5,27.8333 3.16667,24.5 -0.5,21.5C -0.5,20.5 -0.5,19.5 -0.5,18.5C 1.83333,16.8333 3.83333,14.8333 5.5,12.5C 5.5,12.1667 5.5,11.8333 5.5,11.5 Z"/></g>
                  <g><path fill="#171c21" d="M 31.5,12.5 C 31.5,14.5 31.5,16.5 31.5,18.5C 30.3121,19.6843 29.1455,19.6843 28,18.5C 27.8333,19.6667 27.6667,20.8333 27.5,22C 28.749,25.0845 29.749,28.2512 30.5,31.5C 29.1667,31.5 27.8333,31.5 26.5,31.5C 25.8091,29.9778 24.6424,28.9778 23,28.5C 20.1574,29.7631 17.3241,29.7631 14.5,28.5C 14.1667,27.8333 13.8333,27.1667 13.5,26.5C 22.7704,29.2201 26.7704,25.8867 25.5,16.5C 25.8333,16.5 26.1667,16.5 26.5,16.5C 27.1667,16.5 27.5,16.1667 27.5,15.5C 28.5261,14.147 29.8595,13.147 31.5,12.5 Z"/></g>
                  <g><path fill="#945f11" d="M 10.5,18.5 C 10.4679,21.0758 11.1346,23.4091 12.5,25.5C 10.9319,25.3592 9.26521,25.0258 7.5,24.5C 6.50907,22.6769 5.17574,21.1769 3.5,20C 4.66667,18.8333 5.83333,17.6667 7,16.5C 7.70956,17.9733 8.87623,18.6399 10.5,18.5 Z"/></g>
                  </svg>}
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-pricing1">
            <div className="home-container05">
              <span className="home-text06 sectionTitle">
                <span>{t("index.pricing.title")}</span>
                <br></br>
              </span>
              <h2 className="home-pricing-heading heading2">
                {t("index.pricing.description")}
              </h2>
              <span className="home-pricing-sub-heading">
                {t("index.pricing.subdescription")}
              </span>
            </div>
            <div className="home-container06">
              <div className="home-pricing-card">
                <div className="home-container07">
                  <span className="home-text09 heading3">
                    {t("index.pricing.free.title")}
                  </span>
                  <span className="home-free-plan-description">
                    {t("index.pricing.free.description")}
                  </span>
                </div>
                <div className="home-container08">
                  <span className="home-text10">
                    <span>€</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">
                    {t("numbers.0")}
                  </span>
                </div>
                <div className="home-container09">
                  <div className="home-container10">
                    <span className="home-text13">✔</span>
                    <span className="home-free-plan-features">
                      {t("index.pricing.free.1")}
                    </span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text14">✔</span>
                    <span className="home-free-plan-features1">
                      {t("index.pricing.free.2")}
                    </span>
                  </div>
                  <div className="home-container12">
                    <span className="home-text15">✔</span>
                    <span className="home-free-plan-features2">
                      {t("index.pricing.free.3")}
                    </span>
                  </div>
                  <div className="home-container13">
                    <span className="home-text16">✔</span>
                    <span className="home-free-plan-features3">
                      {t("index.pricing.free.4")}
                    </span>
                  </div>
                </div>
                <button
                  className="home-button button"
                  onClick={() => navigate("/login")}
                >
                  {t("index.pricing.free.button")}
                </button>
              </div>
              <div className="home-pricing-card1">
                <div className="home-container14">
                  <span className="home-text17 heading3">
                    {t("index.pricing.basic.title")}
                  </span>
                  <span className="home-basic-plan-description">
                    {t("index.pricing.basic.description")}
                  </span>
                </div>
                <div className="home-container15">
                  <span className="home-text18">
                    <span>€</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">
                    6,99
                  </span>
                  <span className="home-text21">
                    / {t("words.month")}
                  </span>
                </div>
                <div className="home-container16">
                  <div className="home-container17">
                    <span className="home-text22">✔</span>
                    <span className="home-text23">
                      {t("index.pricing.basic.1")}
                    </span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text25">✔</span>
                    <span className="home-basic-plan-features1">
                      {t("index.pricing.basic.2")}
                    </span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text26">✔</span>
                    <span className="home-basic-plan-features2">
                      {t("index.pricing.basic.3")}
                    </span>
                  </div>
                  <div className="home-container21">
                    <span className="home-text27">✔</span>
                    <span className="home-basic-plan-features3">
                      {t("index.pricing.basic.4")}
                    </span>
                  </div>
                </div>
                <button
                  className="home-button1 button"
                  onClick={() => navigate("/account/basic")}
                >
                  {t("index.pricing.basic.button")}
                </button>
              </div>
              <div className="home-pricing-card2">
                <div className="home-container22">
                  <span className="home-text28 heading3">
                    <span>{t("index.pricing.pro.title")}</span>
                    <br></br>
                  </span>
                  <span className="home-pro-plan-description">
                    {t("index.pricing.pro.description")}
                  </span>
                </div>
                <div className="home-container23">
                  <span className="home-text31">
                    <span>€</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">
                    19,99
                  </span>
                  <span className="home-text34">
                    / {t("words.month")}
                  </span>
                </div>
                <div className="home-container24">
                  <div className="home-container25">
                    <span className="home-text35">✔</span>
                    <span className="home-text36">
                      {t("index.pricing.pro.1")}
                    </span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text38">✔</span>
                    <span className="home-pro-plan-features1">
                      {t("index.pricing.pro.2")}
                    </span>
                  </div>
                  <div className="home-container28">
                    <span className="home-text39">✔</span>
                    <span className="home-pro-plan-features2">
                      {t("index.pricing.pro.3")}
                    </span>
                  </div>
                </div>
                <button
                  className="home-button2 button"
                  onClick={() => navigate("/account/pro")}
                >
                  {t("index.pricing.pro.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Alimos} alt="image" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Ilioupoli} alt="" />
            </div>
            <div className="slide">
              <img className="slider-img" src={Elliniko} alt="" />
            </div>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq-container">
            <div className="home-faq1">
              <div className="home-container29">
                <span className="home-text40 sectionTitle">
                  <span>{t("index.faq.category")}</span>
                  <br></br>
                </span>
                <h2 className="home-text43 heading2">
                  {t("index.faq.title")}
                </h2>
                <span className="home-text44">
                  <span>{t("index.faq.description")}</span>
                  <br></br>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container30">
                <Question
                  Answer={t("index.faq.q1.answer")}
                  Question={t("index.faq.q1.question")}
                ></Question>
                <Question
                  Answer={t("index.faq.q2.answer")}
                  Question={t("index.faq.q2.question")}
                ></Question>
                <Question
                  Answer={t("index.faq.q3.answer")}
                  Question={t("index.faq.q3.question")}
                ></Question>
                <Question
                  Answer={t("index.faq.q4.answer")}
                  Question={t("index.faq.q4.question")}
                ></Question>
                <Question
                  Answer={t("index.faq.q5.answer")}
                  Question={t("index.faq.q5.question")}
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container31">
              <span className="home-logo2">
                <Link to="/">{t("info.logo")}</Link>
              </span>
              <nav className="home-nav1 home-nav1">
                <span className="home-nav12">
                  <Link to="/privacy">
                    {t("info.nav.privacy")}
                  </Link>
                </span>
                <span className="home-nav22">
                  <Link to="/terms">{t("info.nav.terms")}</Link>
                </span>
                <span className="home-nav32">
                  <Link to="/cookies">
                    {t("info.nav.cookies")}
                  </Link>
                </span>
                <span className="home-nav42">
                  <Link to="/contact">
                    {t("info.nav.contact")}
                  </Link>
                </span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="home-text61">
                {t("info.copyright")}
              </span>
              <div className="home-icon-group1">
                <a href="https://x.com/Playground4Youu?s=09">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g><path fill="#15aaf2" d="M 10.5,-0.5 C 13.8333,-0.5 17.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.1667 31.5,11.8333 31.5,12.5C 29.5,10.8333 27.5,9.16667 25.5,7.5C 22.9926,7.80464 20.3259,7.9713 17.5,8C 15.9632,9.10963 15.2965,10.6096 15.5,12.5C 12.1485,11.9916 9.14847,10.6582 6.5,8.5C 5.24604,10.2592 5.57938,11.7592 7.5,13C 6.83333,13.3333 6.16667,13.6667 5.5,14C 7.23352,16.2658 8.90019,18.4325 10.5,20.5C 8.92226,21.2978 7.2556,21.7978 5.5,22C 6.05596,22.3826 6.38929,22.8826 6.5,23.5C 8.16667,25.8333 10.1667,27.8333 12.5,29.5C 12.8333,30.1667 13.1667,30.8333 13.5,31.5C 12.5,31.5 11.5,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5C -0.5,17.1667 -0.5,13.8333 -0.5,10.5C 1.83333,5.5 5.5,1.83333 10.5,-0.5 Z"/></g><g><path fill="#f6fafc" d="M 25.5,7.5 C 24.3964,10.0307 23.5631,13.0307 23,16.5C 19.2383,22.5964 13.7383,24.9297 6.5,23.5C 6.38929,22.8826 6.05596,22.3826 5.5,22C 7.2556,21.7978 8.92226,21.2978 10.5,20.5C 8.90019,18.4325 7.23352,16.2658 5.5,14C 6.16667,13.6667 6.83333,13.3333 7.5,13C 5.57938,11.7592 5.24604,10.2592 6.5,8.5C 9.14847,10.6582 12.1485,11.9916 15.5,12.5C 15.2965,10.6096 15.9632,9.10963 17.5,8C 20.3259,7.9713 22.9926,7.80464 25.5,7.5 Z"/></g><g><path fill="#0699db" d="M 31.5,13.5 C 31.5,15.8333 31.5,18.1667 31.5,20.5C 29.1667,25.5 25.5,29.1667 20.5,31.5C 18.1667,31.5 15.8333,31.5 13.5,31.5C 13.1667,30.8333 12.8333,30.1667 12.5,29.5C 13.552,29.6495 14.552,29.4828 15.5,29C 20.6754,23.6578 26.0087,18.4911 31.5,13.5 Z"/></g><g><path fill="#1489c1" d="M 25.5,7.5 C 27.5,9.16667 29.5,10.8333 31.5,12.5C 31.5,12.8333 31.5,13.1667 31.5,13.5C 26.0087,18.4911 20.6754,23.6578 15.5,29C 14.552,29.4828 13.552,29.6495 12.5,29.5C 10.1667,27.8333 8.16667,25.8333 6.5,23.5C 13.7383,24.9297 19.2383,22.5964 23,16.5C 23.5631,13.0307 24.3964,10.0307 25.5,7.5 Z"/></g>
                </svg>
                </a>
                <a href="https://www.instagram.com/play.ground4you?igsh=MzRlODBiNWFlZA==" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g><path fill="#7637aa" d="M 13.5,-0.5 C 15.8333,-0.5 18.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.8333 31.5,13.1667 31.5,14.5C 29.5,12.8333 27.5,11.1667 25.5,9.5C 24.7638,7.77055 23.4305,6.77055 21.5,6.5C 20.791,5.59603 19.791,5.26269 18.5,5.5C 16.8333,3.5 15.1667,1.5 13.5,-0.5 Z"/></g><g><path fill="#a53392" d="M 10.5,-0.5 C 11.5,-0.5 12.5,-0.5 13.5,-0.5C 15.1667,1.5 16.8333,3.5 18.5,5.5C 16.1667,5.5 13.8333,5.5 11.5,5.5C 10.5,4.16667 9.5,2.83333 8.5,1.5C 9.16667,0.833333 9.83333,0.166667 10.5,-0.5 Z"/></g><g><path fill="#d3496d" d="M 8.5,1.5 C 9.5,2.83333 10.5,4.16667 11.5,5.5C 6.6305,7.04935 4.6305,10.3827 5.5,15.5C 3.75405,13.7484 1.75405,12.4151 -0.5,11.5C -0.5,11.1667 -0.5,10.8333 -0.5,10.5C 1.39306,6.36956 4.39306,3.36956 8.5,1.5 Z"/></g><g><path fill="#eddbde" d="M 11.5,5.5 C 13.8333,5.5 16.1667,5.5 18.5,5.5C 19.791,5.26269 20.791,5.59603 21.5,6.5C 21.5,7.16667 21.1667,7.5 20.5,7.5C 16.6286,7.18503 12.9619,7.51836 9.5,8.5C 8.88258,8.61071 8.38258,8.94404 8,9.5C 4.49984,21.8336 8.99984,26.5002 21.5,23.5C 21.5,23.8333 21.5,24.1667 21.5,24.5C 20.0813,25.4511 18.4147,25.7845 16.5,25.5C 14.1667,25.5 11.8333,25.5 9.5,25.5C 7.46888,24.4613 6.13554,22.7946 5.5,20.5C 5.5,18.8333 5.5,17.1667 5.5,15.5C 4.6305,10.3827 6.6305,7.04935 11.5,5.5 Z"/></g><g><path fill="#efe3ec" d="M 21.5,6.5 C 23.4305,6.77055 24.7638,7.77055 25.5,9.5C 25.5,11.8333 25.5,14.1667 25.5,16.5C 25.5,18.1667 25.5,19.8333 25.5,21.5C 24.1667,22.5 22.8333,23.5 21.5,24.5C 21.5,24.1667 21.5,23.8333 21.5,23.5C 21.5,23.1667 21.5,22.8333 21.5,22.5C 22.1667,22.5 22.5,22.1667 22.5,21.5C 23.6453,17.6888 23.8119,13.6888 23,9.5C 22.0053,8.93406 21.172,8.26739 20.5,7.5C 21.1667,7.5 21.5,7.16667 21.5,6.5 Z"/></g><g><path fill="#f2e6ea" d="M 15.5,10.5 C 17.674,10.7497 19.3406,11.7497 20.5,13.5C 20.8333,18.5 18.5,20.8333 13.5,20.5C 10.6484,18.4275 9.98178,15.7608 11.5,12.5C 12.5769,11.2949 13.9102,10.6282 15.5,10.5 Z"/></g><g><path fill="#e7794b" d="M -0.5,11.5 C 1.75405,12.4151 3.75405,13.7484 5.5,15.5C 5.5,17.1667 5.5,18.8333 5.5,20.5C 3.5,18.8333 1.5,17.1667 -0.5,15.5C -0.5,14.1667 -0.5,12.8333 -0.5,11.5 Z"/></g><g><path fill="#d55c70" d="M 9.5,8.5 C 12.0821,8.02539 14.0821,8.69206 15.5,10.5C 13.9102,10.6282 12.5769,11.2949 11.5,12.5C 9.98178,15.7608 10.6484,18.4275 13.5,20.5C 13.6107,21.1174 13.944,21.6174 14.5,22C 16.8098,22.4966 19.1432,22.6633 21.5,22.5C 21.5,22.8333 21.5,23.1667 21.5,23.5C 8.99984,26.5002 4.49984,21.8336 8,9.5C 8.38258,8.94404 8.88258,8.61071 9.5,8.5 Z"/></g><g><path fill="#782f87" d="M 25.5,9.5 C 27.5,11.1667 29.5,12.8333 31.5,14.5C 31.5,16.5 31.5,18.5 31.5,20.5C 31.1667,20.5 30.8333,20.5 30.5,20.5C 28.8207,19.0837 27.1541,17.7503 25.5,16.5C 25.5,14.1667 25.5,11.8333 25.5,9.5 Z"/></g><g><path fill="#8d3851" d="M 13.5,12.5 C 18.1585,12.0146 19.4919,13.848 17.5,18C 12.7282,18.8104 11.3948,16.9771 13.5,12.5 Z"/></g><g><path fill="#a94e89" d="M 9.5,8.5 C 12.9619,7.51836 16.6286,7.18503 20.5,7.5C 21.172,8.26739 22.0053,8.93406 23,9.5C 23.8119,13.6888 23.6453,17.6888 22.5,21.5C 22.7062,18.5049 22.0395,15.8383 20.5,13.5C 19.3406,11.7497 17.674,10.7497 15.5,10.5C 14.0821,8.69206 12.0821,8.02539 9.5,8.5 Z"/></g><g><path fill="#daab3e" d="M -0.5,20.5 C -0.5,20.1667 -0.5,19.8333 -0.5,19.5C 4.5,22.5 8.5,26.5 11.5,31.5C 11.1667,31.5 10.8333,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5 Z"/></g><g><path fill="#a43e5b" d="M 20.5,13.5 C 22.0395,15.8383 22.7062,18.5049 22.5,21.5C 22.5,22.1667 22.1667,22.5 21.5,22.5C 19.1432,22.6633 16.8098,22.4966 14.5,22C 13.944,21.6174 13.6107,21.1174 13.5,20.5C 18.5,20.8333 20.8333,18.5 20.5,13.5 Z"/></g><g><path fill="#e29643" d="M -0.5,15.5 C 1.5,17.1667 3.5,18.8333 5.5,20.5C 6.13554,22.7946 7.46888,24.4613 9.5,25.5C 11.1667,27.5 12.8333,29.5 14.5,31.5C 13.5,31.5 12.5,31.5 11.5,31.5C 8.5,26.5 4.5,22.5 -0.5,19.5C -0.5,18.1667 -0.5,16.8333 -0.5,15.5 Z"/></g><g><path fill="#b13077" d="M 25.5,16.5 C 27.1541,17.7503 28.8207,19.0837 30.5,20.5C 30.3404,22.153 29.6737,23.4863 28.5,24.5C 26.8102,24.1436 25.8102,23.1436 25.5,21.5C 25.5,19.8333 25.5,18.1667 25.5,16.5 Z"/></g><g><path fill="#c94664" d="M 25.5,21.5 C 25.8102,23.1436 26.8102,24.1436 28.5,24.5C 26.7122,27.6149 24.0455,29.6149 20.5,30.5C 19.1667,28.8333 17.8333,27.1667 16.5,25.5C 18.4147,25.7845 20.0813,25.4511 21.5,24.5C 22.8333,23.5 24.1667,22.5 25.5,21.5 Z"/></g><g><path fill="#c36843" d="M 9.5,25.5 C 11.8333,25.5 14.1667,25.5 16.5,25.5C 17.8333,27.1667 19.1667,28.8333 20.5,30.5C 20.5,30.8333 20.5,31.1667 20.5,31.5C 18.5,31.5 16.5,31.5 14.5,31.5C 12.8333,29.5 11.1667,27.5 9.5,25.5 Z"/></g>
                </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555636586897" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g><path fill="#1976f0" d="M 10.5,-0.5 C 13.8333,-0.5 17.1667,-0.5 20.5,-0.5C 25.5,1.83333 29.1667,5.5 31.5,10.5C 31.5,11.8333 31.5,13.1667 31.5,14.5C 27.8971,12.2369 24.5638,9.57025 21.5,6.5C 21.2089,5.35089 20.3756,4.68423 19,4.5C 17.9302,4.52804 17.0968,4.86137 16.5,5.5C 15.5041,5.41423 14.6708,5.74756 14,6.5C 13.5045,8.4727 13.3379,10.4727 13.5,12.5C 12.1667,12.5 10.8333,12.5 9.5,12.5C 9.23219,14.099 9.56552,15.4324 10.5,16.5C 11.9807,19.728 12.9807,23.0614 13.5,26.5C 13.8333,26.5 14.1667,26.5 14.5,26.5C 15.925,27.922 16.925,29.5887 17.5,31.5C 15.1667,31.5 12.8333,31.5 10.5,31.5C 5.5,29.1667 1.83333,25.5 -0.5,20.5C -0.5,17.1667 -0.5,13.8333 -0.5,10.5C 1.83333,5.5 5.5,1.83333 10.5,-0.5 Z" /></g><g><path fill="#8cacd8" d="M 16.5,5.5 C 17.0968,4.86137 17.9302,4.52804 19,4.5C 20.3756,4.68423 21.2089,5.35089 21.5,6.5C 21.6716,7.49162 21.3382,8.15829 20.5,8.5C 20.5,7.5 20.5,6.5 20.5,5.5C 19.1667,5.5 17.8333,5.5 16.5,5.5 Z" /> </g> <g> <path fill="#ecf1f7" d="M 16.5,5.5 C 17.8333,5.5 19.1667,5.5 20.5,5.5C 20.5,6.5 20.5,7.5 20.5,8.5C 19.5,8.5 18.5,8.5 17.5,8.5C 17.5,9.83333 17.5,11.1667 17.5,12.5C 18.5,12.5 19.5,12.5 20.5,12.5C 20.5,13.8333 20.5,15.1667 20.5,16.5C 19.5,16.5 18.5,16.5 17.5,16.5C 17.5,19.8333 17.5,23.1667 17.5,26.5C 16.5,26.5 15.5,26.5 14.5,26.5C 14.1667,26.5 13.8333,26.5 13.5,26.5C 13.5,23.1667 13.5,19.8333 13.5,16.5C 12.5,16.5 11.5,16.5 10.5,16.5C 9.56552,15.4324 9.23219,14.099 9.5,12.5C 10.8333,12.5 12.1667,12.5 13.5,12.5C 13.3379,10.4727 13.5045,8.4727 14,6.5C 14.6708,5.74756 15.5041,5.41423 16.5,5.5 Z" /> </g> <g> <path fill="#1a57a6" d="M 21.5,6.5 C 24.5638,9.57025 27.8971,12.2369 31.5,14.5C 31.5,16.5 31.5,18.5 31.5,20.5C 29.1667,25.5 25.5,29.1667 20.5,31.5C 19.5,31.5 18.5,31.5 17.5,31.5C 16.925,29.5887 15.925,27.922 14.5,26.5C 15.5,26.5 16.5,26.5 17.5,26.5C 17.5,23.1667 17.5,19.8333 17.5,16.5C 18.5,16.5 19.5,16.5 20.5,16.5C 20.5,15.1667 20.5,13.8333 20.5,12.5C 19.5,12.5 18.5,12.5 17.5,12.5C 17.5,11.1667 17.5,9.83333 17.5,8.5C 18.5,8.5 19.5,8.5 20.5,8.5C 21.3382,8.15829 21.6716,7.49162 21.5,6.5 Z" /></g><g><path fill="#4d85d0" d="M 10.5,16.5 C 11.5,16.5 12.5,16.5 13.5,16.5C 13.5,19.8333 13.5,23.1667 13.5,26.5C 12.9807,23.0614 11.9807,19.728 10.5,16.5 Z"/></g>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
