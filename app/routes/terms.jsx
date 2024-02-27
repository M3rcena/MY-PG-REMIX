// Import React and Remix Components
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "@remix-run/react";

// Import CSS
import indexStylesHref from "../styles/index.css";
import termsStylesHref from "../styles/terms.css";

// Load the CSS
export const links = () => {
  return [
    { rel: "stylesheet", href: indexStylesHref },
    { rel: "stylesheet", href: termsStylesHref },
  ];
};

// Translation System Handler
export const handle = {
  i18n: "common",
}

export default function Privacy() {
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

        <center>
          <div data-custom-class="body">
            <div align="center" className="div-1">
              <div data-custom-class="title" className="div-3">
                <bdt className="block-component"><span className="div-2"></span></bdt>
                <bdt className="question"><strong>TERMS AND CONDITIONS</strong></bdt>
                <bdt className="statement-end-if-in-editor"></bdt>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="subtitle" className="div-3">
                <strong>Last updated</strong>
                <bdt className="question"><strong>January 01, 2024</strong></bdt>
              </div>
              <div className="div-4"><br /></div>
              <div className="div-5"><br /></div>
              <div className="div-5"><br /></div>
              <div className="div-3"><strong><span data-custom-class="heading_1">AGREEMENT TO OUR LEGAL TERMS</span></strong></div>
            </div>
            <div align="center" className="div-1">
              <div id="agreement" className="div-3"><a name="_6aa3gkhykvst"></a></div>
            </div>
            <div align="center" className="div-8"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  We are
                  <bdt className="block-container question question-in-editor" data-id="9d459c4e-c548-e5cb-7729-a118548965d2" data-type="question">MyPG Inc.</bdt>
                  <bdt className="block-component"></bdt>
                  (
                  <bdt className="block-component"></bdt>
                  "<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  )
                  <span className="div-6">
                    <span className="div-6">
                      <span className="div-6">
                        <bdt className="question">
                          <bdt className="block-component"></bdt>
                        </bdt>
                        <span className="div-6">
                          <bdt className="block-component"></bdt>
                        </span>
                        , a company registered in
                        <bdt className="block-component"></bdt>
                        <bdt className="block-component"></bdt>
                        <span className="div-6">
                          <span className="div-6">
                            <bdt className="question">Greece</bdt>
                            <bdt className="statement-end-if-in-editor">
                              <span className="div-6">
                                <span className="div-6">
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                </span>
                              </span>
                            </bdt>
                          </span>
                        </span>
                        at
                        <bdt className="question">Patmou 1</bdt>
                        <bdt className="block-component"></bdt>
                      </span>
                    </span>
                    ,
                    <bdt className="question">Alimos</bdt>
                  </span>
                </span>
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <span className="div-10">
                      <span data-custom-class="body_text">
                        <span className="div-11">
                          <bdt className="block-component"></bdt>
                          ,
                          <bdt className="question">Attiki</bdt>
                          <bdt className="statement-end-if-in-editor"></bdt>
                          <bdt className="block-component"></bdt>
                          <bdt className="question">17456</bdt>
                          <bdt className="statement-end-if-in-editor"></bdt>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="div-6">
                  <span className="div-6">
                    <bdt className="else-block"></bdt>
                  </span>
                </span>
                <bdt className="statement-end-if-in-editor">.</bdt>
                <bdt className="block-component"></bdt>
              </div>
            </div>
            <div align="center" className="div-8"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  We operate
                  <bdt className="block-component"></bdt>
                  the website
                  <span className="div-7">
                    <bdt className="question"><a href="https://mypg.gr" target="_blank" data-custom-class="link">https://mypg.gr</a></bdt>
                  </span>
                  (the
                  <bdt className="block-component"></bdt>
                  "<strong>Site</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  )
                  <bdt className="block-component"></bdt>
                  ,
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <bdt className="block-component"></bdt>
                  the mobile application
                  <bdt className="question">MyPG | Playground4U</bdt>
                  (the
                  <bdt className="block-component"></bdt>
                  "<strong>App</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  )
                  <bdt className="statement-end-if-in-editor"></bdt>
                  , as well as any other related products and services that refer or link to these legal terms (the
                  <bdt className="block-component"></bdt>
                  "<strong>Legal Terms</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ) (collectively, the
                  <bdt className="block-component"></bdt>
                  "<strong>Services</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ).
                  <bdt className="block-component"></bdt>
                </span>
              </div>
              <div className="div-8"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <bdt className="question">The platform is a useful tool for families who wish to go out to a playground and not to organized playgrounds. It is possible to find and choose the appropriate playground according to personalized needs and preferences, emphasizing the provision of useful information, safety, quality, immediacy and comfort. In addition, specific information is provided for specific needs such as disabled playgrounds or standard and innovative playgrounds. Also, it is possible to order food, snacks, etc. from neighboring businesses and the possibility of organizing events with cooperating businesses, giving the user a discount for using the application. On our platform you will find concentrated, expanded and evaluated information about playgrounds and partner businesses that can serve you, saving the modern family's precious time and significantly reducing expenses.</bdt>
              </div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </div>
              <div className="div-8"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  You can contact us by
                  <bdt className="block-component">
                    email at
                    <bdt className="question">support@mypg.gr</bdt>
                    <bdt className="block-component"></bdt>
                    or by mail to
                    <bdt className="question">Patmou 1</bdt>
                    <bdt className="block-component"></bdt>
                    ,
                    <bdt className="question">Alimos</bdt>
                    <bdt className="block-component"></bdt>
                    ,
                    <bdt className="question">Attiki</bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="block-component"></bdt>
                    <bdt className="question">17456</bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="block-component">
                      <bdt className="block-component">,&nbsp;</bdt>
                      <bdt className="question">Greece</bdt>
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </bdt>
                    .
                  </bdt>
                </span>
              </div>
              <div className="div-8"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (
                  <bdt className="block-component"></bdt>
                  "<strong>you</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ), and
                  <bdt className="question">MyPG Inc.</bdt>
                  , concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  <bdt className="block-component"></bdt>
                  <bdt className="block-component"></bdt>
                </span>
              </div>
              <div className="div-8"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to Legal Terms will become effective
                  <bdt className="question">seven (7)</bdt>
                  days after the notice is given
                  <bdt className="block-component"></bdt>
                  , except if the changes apply to
                  <bdt className="forloop-component"></bdt>
                  <bdt className="block-component"></bdt>
                  <bdt className="question">bug fixes</bdt>
                  <bdt className="block-component"></bdt>
                  <bdt className="forloop-component"></bdt>
                  <bdt className="block-component"></bdt>
                  ,
                  <bdt className="question">security updates</bdt>
                  <bdt className="else-block"></bdt>
                  <bdt className="forloop-component"></bdt>
                  <bdt className="block-component"></bdt>
                  , and
                  <bdt className="question">a court order</bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <bdt className="forloop-component"></bdt>
                  , in which case the changes will be effective immediately
                  <bdt className="statement-end-if-in-editor"></bdt>
                  . By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms. If you disagree with such changes, you may terminate Services as per the section
                  <bdt className="block-component"></bdt>
                  "
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <a data-custom-class="link" href="#terms"><span className="div-9">TERM AND TERMINATION</span></a>
                <span className="div-6">
                  <bdt className="block-component"></bdt>
                  ."
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <bdt className="else-block"></bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </div>
            </div>
            <div align="center" className="div-8"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <bdt data-type="if" id="a2595956-7028-dbe5-123e-d3d3a93ed076">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <span className="div-6">
                        <bdt className="block-component"></bdt>
                        <bdt data-type="if" id="a2595956-7028-dbe5-123e-d3d3a93ed076">
                          <bdt data-type="conditional-block">
                            <bdt data-type="body"><span className="div-12">All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</span></bdt>
                          </bdt>
                        </bdt>
                      </span>
                    </bdt>
                  </bdt>
                  <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                </bdt>
              </div>
              <div className="div-8"><br /></div>
              <div data-custom-class="body_text" className="div-3">We recommend that you print a copy of these Legal Terms for your records.</div>
              <div className="div-3"><br /></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_1" className="div-3"><strong>TABLE OF CONTENTS</strong></div>
              <div className="div-3"><br /></div>
              <div className="div-3"><a href="#services"><span data-custom-class="link"><span className="div-13"><span data-custom-class="body_text">1. OUR SERVICES</span></span></span></a></div>
              <div className="div-3"><a data-custom-class="link" href="#ip"><span className="div-7"><span data-custom-class="body_text">2. INTELLECTUAL PROPERTY RIGHTS</span></span></a></div>
              <div className="div-3"><a data-custom-class="link" href="#userreps"></a><a data-custom-class="link" href="#userreps"><span className="div-13"><span data-custom-class="body_text">3. USER REPRESENTATIONS</span></span></a></div>
              <div className="div-3">
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#userreg"><span className="div-13"><span data-custom-class="body_text">4. USER REGISTRATION</span></span></a>
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#products"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#products">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      <bdt className="block-component"></bdt>
                      5. PRODUCTS
                      <bdt className="statement-end-if-in-editor"></bdt>
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#purchases"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#purchases">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      6. PURCHASES AND PAYMENT
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <bdt className="block-component"><span className="div-10"></span></bdt>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#subscriptions"><span data-custom-class="body_text"><span className="div-13">7. SUBSCRIPTIONS</span></span></a>
                <span className="div-10">
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <br />
                </span>
              </div>
              <div className="div-3">
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#returnno">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      8.
                      <bdt className="block-component"></bdt>
                      RETURN
                      <bdt className="statement-end-if-in-editor"></bdt>
                      POLICY
                    </span>
                  </span>
                </a>
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#software"></a> <a data-custom-class="link" href="#software"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#software">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#prohibited"></a>
              </div>
              <div className="div-3"><a data-custom-class="link" href="#prohibited"><span className="div-13"><span data-custom-class="body_text">9. PROHIBITED ACTIVITIES</span></span></a> <a data-custom-class="link" href="#ugc"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#ugc"><span className="div-13"><span data-custom-class="body_text">10. USER GENERATED CONTRIBUTIONS</span></span></a> <a data-custom-class="link" href="#license"></a></div>
              <div className="div-3">
                <a data-custom-class="link" href="#license">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      11. CONTRIBUTION
                      <bdt className="block-component"></bdt>
                      LICENSE
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#reviews"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#reviews">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      12. GUIDELINES FOR REVIEWS
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#mobile"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#mobile">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      13. MOBILE APPLICATION
                      <bdt className="block-component"></bdt>
                      LICENSE
                      <bdt className="statement-end-if-in-editor"></bdt>
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#socialmedia"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#socialmedia">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#thirdparty"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#thirdparty">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      14. THIRD-PARTY WEBSITES AND CONTENT
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#advertisers"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#advertisers">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      15. ADVERTISERS
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#sitemanage"></a>
              </div>
              <div className="div-3"><a data-custom-class="link" href="#sitemanage"><span className="div-13"><span data-custom-class="body_text">16. SERVICES MANAGEMENT</span></span></a> <a data-custom-class="link" href="#ppyes"></a></div>
              <div className="div-3">
                <a data-custom-class="link" href="#ppyes">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                      17. PRIVACY POLICY
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#ppno"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#ppno">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#dmca"></a>
              </div>
              <div className="div-3">
                <a data-custom-class="link" href="#dmca">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </a>
              </div>
              <div className="div-3">
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#copyrightno"><span className="div-13"><span data-custom-class="body_text">18. COPYRIGHT INFRINGEMENTS</span></span></a>
                <span className="div-10">
                  <span data-custom-class="body_text">
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </span>
                <a data-custom-class="link" href="#terms"></a>
              </div>
              <div className="div-3"><a data-custom-class="link" href="#terms"><span className="div-13"><span data-custom-class="body_text">19. TERM AND TERMINATION</span></span></a> <a data-custom-class="link" href="#modifications"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#modifications"><span className="div-13"><span data-custom-class="body_text">20. MODIFICATIONS AND INTERRUPTIONS</span></span></a> <a data-custom-class="link" href="#law"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#law"><span className="div-13"><span data-custom-class="body_text">21. GOVERNING LAW</span></span></a> <a data-custom-class="link" href="#disputes"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#disputes"><span className="div-13"><span data-custom-class="body_text">22. DISPUTE RESOLUTION</span></span></a> <a data-custom-class="link" href="#corrections"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#corrections"><span className="div-13"><span data-custom-class="body_text">23. CORRECTIONS</span></span></a> <a data-custom-class="link" href="#disclaimer"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#disclaimer"><span className="div-13"><span data-custom-class="body_text">24. DISCLAIMER</span></span></a> <a data-custom-class="link" href="#liability"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#liability"><span className="div-13"><span data-custom-class="body_text">25. LIMITATIONS OF LIABILITY</span></span></a> <a data-custom-class="link" href="#indemnification"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#indemnification"><span className="div-13"><span data-custom-class="body_text">26. INDEMNIFICATION</span></span></a> <a data-custom-class="link" href="#userdata"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#userdata"><span className="div-13"><span data-custom-class="body_text">27. USER DATA</span></span></a> <a data-custom-class="link" href="#electronic"></a></div>
              <div className="div-3"><a data-custom-class="link" href="#electronic"><span className="div-13"><span data-custom-class="body_text">28. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span></span></a> <a data-custom-class="link" href="#california"></a></div>
              <div className="div-3">
                <a data-custom-class="link" href="#california">
                  <span className="div-13">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </a>
                <a data-custom-class="link" href="#misc"></a>
              </div>
              <div className="div-3"><a data-custom-class="link" href="#misc"><span className="div-13"><span data-custom-class="body_text">29. MISCELLANEOUS</span></span></a> <a data-custom-class="link" href="#contact"></a></div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3"><a data-custom-class="link" href="#contact"><span className="div-13"><span data-custom-class="body_text">30. CONTACT US</span></span></a></div>
            </div>
            <div align="center" className="div-1">
              <div data-custom-class="heading_1" className="div-3"><a name="_b6y29mp52qvx"></a></div>
              <div className="div-3"><br /></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_1" id="services" className="div-3"><strong><span className="div-2">1. OUR SERVICES</span></strong></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                  <bdt className="block-component"></bdt>
                </span>
              </div>
              <div className="div-3"><br /></div>
            </div>
            <div align="center" data-custom-class="heading_1" className="div-14"><strong><span id="ip" className="div-2">2. INTELLECTUAL PROPERTY RIGHTS</span></strong></div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="heading_2" className="div-3"><strong>Our intellectual property</strong></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the
                  <bdt className="block-component"></bdt>
                  "Content"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ), as well as the trademarks, service marks, and logos contained therein (the
                  <bdt className="block-component"></bdt>
                  "Marks"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ).
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3"><span className="div-6">Our Content and Marks are protected by copyright and trademark laws (and various
                other intellectual property rights and unfair competition laws) and treaties in the United
                States and around the world.</span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  The Content and Marks are provided in or through the Services
                  <bdt className="block-component"></bdt>
                  "AS IS"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  for your
                  <bdt className="block-component"></bdt>
                  personal, non-commercial use
                  <bdt className="block-component"></bdt>
                  only.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3"><strong>Your use of our Services</strong></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  Subject to your compliance with these Legal Terms, including the
                  <bdt className="block-component"></bdt>
                  "
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <a data-custom-class="link" href="#prohibited"><span className="div-13">PROHIBITED ACTIVITIES</span></a>
                <span className="div-10">
                  <bdt className="block-component"></bdt>
                  "
                  <bdt className="statement-end-if-in-editor"></bdt>
                  section below, we grant you a non-exclusive, non-transferable, revocable
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  to:
                </span>
              </div>
              <ul>
                <li data-custom-class="body_text" className="div-3"><span className="div-10">access the Services; and</span></li>
                <li data-custom-class="body_text" className="div-3"><span className="div-10">download or print a copy of any portion of the Content to which you have properly gained access.</span></li>
              </ul>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  solely for your
                  <bdt className="block-component"></bdt>
                  personal, non-commercial use
                  <bdt className="block-component"></bdt>
                  .
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3"><span className="div-6">Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced,
                aggregated, republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or otherwise exploited
                for any commercial purpose whatsoever, without our express prior written
                permission.</span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to:
                  <bdt className="question">support@mypg.gr</bdt>
                  . If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                </span>
              </div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3"><span className="div-6">We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</span></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3"><span className="div-6">Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</span></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3">
                <span className="div-6">
                  <strong>
                    Your submissions
                    <bdt className="block-component"></bdt>
                    and contributions
                  </strong>
                  <bdt className="statement-end-if-in-editor"><strong></strong></bdt>
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  Please review this section and the
                  <bdt className="block-component"></bdt>
                  "
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <a data-custom-class="link" href="#prohibited"><span className="div-7">PROHIBITED ACTIVITIES</span></a>
                  <bdt className="block-component"></bdt>
                  "
                  <bdt className="statement-end-if-in-editor"></bdt>
                  section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (
                  <bdt className="block-component"></bdt>
                  "Submissions"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                  <bdt className="block-component"></bdt>
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material (
                  <bdt className="block-component"></bdt>
                  "Contributions"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ). Any Submission that is publicly posted shall also be treated as a Contribution.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  You understand that Contributions may be viewable by other users of the Services
                  <bdt className="block-component"></bdt>
                  and possibly through third-party websites
                  <bdt className="statement-end-if-in-editor"></bdt>
                  .
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  <strong>
                    When you post Contributions, you grant us a
                    <bdt className="block-component"></bdt>
                    license
                    <bdt className="statement-end-if-in-editor"></bdt>
                    (including use of your name, trademarks, and logos):&nbsp;
                  </strong>
                  By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, t, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to
                  <bdt className="block-component"></bdt>
                  sublicense the licenses
                  <bdt className="statement-end-if-in-editor"></bdt>
                  granted in this section. Our use and distribution may occur in any media formats and through any media channels.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  This
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  <strong>You are responsible for what you post or upload:</strong> By sending us Submissions
                  <bdt className="block-component"></bdt>
                  and/or posting Contributions
                  <bdt className="statement-end-if-in-editor"></bdt>
                  through any part of the Services
                  <bdt className="block-component"></bdt>
                  or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts,
                  <bdt className="statement-end-if-in-editor"></bdt>
                  you:
                </span>
              </div>
              <ul>
                <li data-custom-class="body_text" className="div-3">
                  <span className="div-10">
                    confirm that you have read and agree with our
                    <bdt className="block-component"></bdt>
                    "
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                  <a data-custom-class="link" href="#prohibited"><span className="div-13">PROHIBITED ACTIVITIES</span></a>
                  <span className="div-10">
                    <bdt className="block-component"></bdt>
                    "
                    <bdt className="statement-end-if-in-editor"></bdt>
                    and will not post, send, publish, upload, or transmit through the Services any Submission
                    <bdt className="block-component"></bdt>
                    nor post any Contribution
                    <bdt className="statement-end-if-in-editor"></bdt>
                    that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                  </span>
                </li>
                <li data-custom-class="body_text" className="div-3">
                  <span className="div-10">
                    to the extent permissible by applicable law, waive any and all moral rights to any such Submission
                    <bdt className="block-component"></bdt>
                    and/or Contribution
                    <bdt className="statement-end-if-in-editor"></bdt>
                    ;
                  </span>
                </li>
                <li data-custom-class="body_text" className="div-3">
                  <span className="div-10">
                    warrant that any such Submission
                    <bdt className="block-component"></bdt>
                    and/or Contributions
                    <bdt className="statement-end-if-in-editor"></bdt>
                    are original to you or that you have the necessary rights and
                    <bdt className="block-component"></bdt>
                    licenses
                    <bdt className="statement-end-if-in-editor"></bdt>
                    to submit such Submissions
                    <bdt className="block-component"></bdt>
                    and/or Contributions
                    <bdt className="statement-end-if-in-editor"></bdt>
                    and that you have full authority to grant us the above-mentioned rights in relation to your Submissions
                    <bdt className="block-component"></bdt>
                    and/or Contributions
                    <bdt className="statement-end-if-in-editor"></bdt>
                    ; and
                  </span>
                </li>
                <li data-custom-class="body_text" className="div-3">
                  <span className="div-10">
                    warrant and represent that your Submissions
                    <bdt className="block-component"></bdt>
                    and/or Contributions
                    <bdt className="statement-end-if-in-editor"></bdt>
                    do not constitute confidential information.
                  </span>
                </li>
              </ul>
              <div data-custom-class="body_text" className="div-3">
                You are solely responsible for your Submissions
                <bdt className="block-component"></bdt>
                and/or Contributions
                <bdt className="statement-end-if-in-editor"></bdt>
                and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <strong>We may remove or edit your Content:</strong> Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.
                <bdt className="statement-end-if-in-editor"></bdt>
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3"><strong>Copyright infringement</strong></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the
                <bdt className="block-component"></bdt>
                "
                <bdt className="statement-end-if-in-editor"></bdt>
                <a data-custom-class="link" href="#dmca">
                  <span className="div-7">
                    <bdt className="block-component"></bdt>
                  </span>
                </a>
                <bdt className="block-component"></bdt>
                <a data-custom-class="link" href="#copyrightno">
                  <span className="div-7">
                    <bdt className="block-component"></bdt>
                    COPYRIGHT INFRINGEMENTS
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </a>
                <bdt className="statement-end-if-in-editor"></bdt>
                <bdt className="block-component"></bdt>
                "
                <bdt className="statement-end-if-in-editor"></bdt>
                section below.
                <bdt className="statement-end-if-in-editor"></bdt>
              </div>
              <div className="div-3"><br /></div>
            </div>
            <div align="center" className="div-1">
              <div data-custom-class="heading_1" id="userreps" className="div-3"><a name="_5hg7kgyv9l8z"></a><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15">3.</span></strong></span>&nbsp;</strong></span></strong>USER REPRESENTATIONS</span></strong></div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">By using the Services, you represent and warrant that:</span>
                <bdt data-type="if" id="d2d82ca8-275f-3f86-8149-8a5ef8054af6">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="user_account_option" data-type="statement"></bdt>
                    <bdt data-type="body"><span className="div-16">(</span><span className="div-12">1</span><span className="div-16">) all registration information you submit
                      will be true, accurate, current, and complete; (</span><span className="div-12">2</span><span className="div-16">) you will maintain the accuracy of such information and promptly update such registration information as necessary;</span>
                    </bdt>
                  </bdt>
                  <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                  &nbsp;
                </bdt>
                <span className="div-16">(</span><span className="div-12">3</span><span className="div-16">) you have the legal capacity and you agree to comply with these Legal Terms;</span>
                <bdt data-type="if" id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="user_u13_option" data-type="statement"></bdt>
                    &nbsp;
                  </bdt>
                  <span className="div-16">(</span><span className="div-12">4</span>
                  <span className="div-16">
                    ) you are not a
                    minor in the jurisdiction in which you reside
                    <bdt data-type="if" id="76948fab-ec9e-266a-bb91-948929c050c9">
                      <bdt data-type="conditional-block">
                        <bdt className="block-component" data-record-question-key="user_o18_option" data-type="statement"></bdt>
                        <bdt data-type="body">, or if a minor, you have
                          received parental permission to use the Services
                        </bdt>
                      </bdt>
                      <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                    </bdt>
                    ; (
                  </span>
                  <span className="div-12">5</span><span className="div-16">) you will not access the Services through automated or non-human means, whether through a bot, script or
                    otherwise; (</span><span className="div-12">6</span>
                  <span className="div-16">
                    ) you will not use the Services for any illegal or
                    <bdt className="block-component"></bdt>
                    unauthorized
                    <bdt className="statement-end-if-in-editor"></bdt>
                    purpose; and (
                  </span>
                  <span className="div-12">7</span><span className="div-16">) your use of the Services will not violate any applicable law or regulation.</span><span className="div-12"></span>
                </bdt>
              </div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div className="div-17">
                <div className="div-20">
                  <div data-custom-class="body_text" className="div-14"><span className="div-18">If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</span></div>
                  <div className="div-19">
                    <bdt className="block-component"></bdt>
                  </div>
                  <div className="div-14"><br /></div>
                </div>
                <div className="div-8">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="heading_1" id="userreg" className="div-14"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15">4.</span></strong></span>&nbsp;</strong></span></strong>USER REGISTRATION</span></strong></div>
                    </bdt>
                  </bdt>
                </div>
                <div className="div-14"><br /></div>
                <div className="div-8">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-14">
                        <span className="div-18">
                          You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                          <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                        </span>
                      </div>
                    </bdt>
                  </bdt>
                </div>
                <div className="div-14">
                  <bdt className="block-component"><span className="div-10"></span></bdt>
                  <span className="div-10">
                    <bdt className="block-component"></bdt>
                  </span>
                </div>
                <div className="div-14"><br /></div>
                <div data-custom-class="heading_1" id="products" className="div-14"><span className="div-2"><strong>5. PRODUCTS</strong></span></div>
                <div className="div-14"><br /></div>
                <div data-custom-class="body_text" className="div-14">
                  <bdt className="block-component"><span className="div-10"></span></bdt>
                  <span className="div-10">
                    We make every effort to display as accurately as possible the
                    <bdt className="block-component"></bdt>
                    colors
                    <bdt className="statement-end-if-in-editor"></bdt>
                    , features, specifications, and details of the products available on the Services. However, we do not guarantee that the
                    <bdt className="block-component"></bdt>
                    colors
                    <bdt className="statement-end-if-in-editor"></bdt>
                    , features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual
                    <bdt className="block-component"></bdt>
                    colors
                    <bdt className="statement-end-if-in-editor"></bdt>
                    and details of the products.
                    <bdt className="statement-end-if-in-editor"></bdt>
                    All products are subject to availability
                    <bdt className="block-component"></bdt>
                    , and we cannot guarantee that items will be in stock
                    <bdt className="statement-end-if-in-editor"></bdt>
                    . We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </div>
                <div className="div-14">
                  <bdt className="block-component"><span className="div-10"></span></bdt>
                </div>
                <div className="div-14"><br /></div>
              </div>
            </div>
            <div align="center" className="div-1">
              <div data-custom-class="heading_1" id="purchases" className="div-3"><a name="_ynub0jdx8pob"></a><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15">6.</span></strong></span></strong></span>&nbsp;</strong>PURCHASES AND PAYMENT</span></strong></div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div className="div-3">
                <bdt className="block-component"><span className="div-10"></span></bdt>
              </div>
              <div data-custom-class="body_text" className="div-3"><span className="div-6">We accept the following forms of payment:</span></div>
              <div className="div-17">
                <div className="div-21"><br /></div>
              </div>
              <div data-custom-class="body_text" className="div-22">
                <span className="div-6">
                  <bdt className="forloop-component"></bdt>
                  - &nbsp;
                  <bdt className="question">Visa</bdt>
                </span>
              </div>
              <div data-custom-class="body_text" className="div-22">
                <span className="div-6">
                  <bdt className="forloop-component"></bdt>
                  - &nbsp;
                  <bdt className="question">Mastercard</bdt>
                </span>
              </div>
              <div data-custom-class="body_text" className="div-22">
                <span className="div-6">
                  <bdt className="forloop-component"></bdt>
                  - &nbsp;
                  <bdt className="question">PayPal</bdt>
                </span>
              </div>
              <div data-custom-class="body_text" className="div-22">
                <span className="div-6">
                  <bdt className="forloop-component"></bdt>
                </span>
              </div>
              <div className="div-8"><span className="div-6"><br /></span></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be&nbsp;</span>
                <span className="div-23">
                  in
                  <bdt className="question">Euros</bdt>
                  .
                </span>
              </div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you
                  <bdt className="block-component"></bdt>
                  authorize
                  <bdt className="statement-end-if-in-editor"></bdt>
                  us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                </span>
              </div>
            </div>
            <div align="center" className="div-3"><br /></div>
            <div align="center" className="div-1">
              <div data-custom-class="body_text" className="div-3">
                <span className="div-6">
                  We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole
                  <bdt className="block-component"></bdt>
                  judgment
                  <bdt className="statement-end-if-in-editor"></bdt>
                  , appear to be placed by dealers, resellers, or distributors.
                </span>
                <span className="div-24">
                  <bdt data-type="conditional-block" className="div-25">
                    <bdt data-record-question-key="return_option" data-type="statement" className="div-10"></bdt>
                  </bdt>
                </span>
              </div>
              <div className="div-3">
                <bdt className="block-component"><span className="div-10"></span></bdt>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_1" id="subscriptions" className="div-3"><strong><span className="div-2">7. SUBSCRIPTIONS</span></strong></div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3"><strong><span className="div-10">Billing and Renewal</span></strong></div>
              <div className="div-3"><span className="div-10"><br /></span></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  <bdt className="block-component"></bdt>
                  Your subscription will continue and automatically renew unless
                  <bdt className="block-component"></bdt>
                  canceled
                  <bdt className="statement-end-if-in-editor"></bdt>
                  . You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order.
                  <bdt className="block-component"></bdt>
                  The length of your billing cycle
                  <bdt className="block-component"></bdt>
                  is monthly
                  <bdt className="block-component"></bdt>
                  .
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <bdt className="else-block"></bdt>
                </span>
              </div>
              <div className="div-3">
                <bdt className="block-component"><span className="div-10"></span></bdt>
                <bdt className="block-component"><span className="div-10"></span></bdt>
              </div>
              <div className="div-3"><span className="div-10"><br /></span></div>
              <div data-custom-class="heading_2" className="div-3"><span className="div-10"><strong>Cancellation</strong></span></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <bdt className="block-component"><span className="div-10"></span></bdt>
                <bdt className="block-component"></bdt>
                You can cancel your subscription at any time by logging into your account.
                <bdt className="block-component"></bdt>
                Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at
                <bdt className="question">support@mypg.gr</bdt>
                .
                <bdt className="statement-end-if-in-editor"></bdt>
                <br />
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3"><strong><span className="div-10">Fee Changes</span></strong></div>
              <div className="div-3"><span className="div-10"><br /></span></div>
              <span className="div-10"><span data-custom-class="body_text">We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.</span></span>
              <div className="div-3">
                <span className="div-10">
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <bdt className="block-component"><span className="div-10"></span></bdt>
                <span className="div-10">
                  <bdt className="block-component"></bdt>
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_1" id="returnno" className="div-3">
                <strong>
                  <span className="div-2">
                    8.
                    <bdt className="block-component"></bdt>
                    RETURN
                    <bdt className="statement-end-if-in-editor"></bdt>
                    POLICY
                  </span>
                </strong>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-10">
                  All sales are final and no refund will be issued.
                  <bdt className="statement-end-if-in-editor"></bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </div>
              <div className="div-3">
                <bdt className="block-component"></bdt>
              </div>
              <div className="div-26">
                <span className="div-24">
                  <bdt data-type="conditional-block" className="div-25">
                    <bdt data-type="body">
                      <div className="div-27"><br /></div>
                    </bdt>
                  </bdt>
                </span>
                <div data-custom-class="heading_1" id="prohibited" className="div-14"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15"><strong><span className="div-15">9.</span></strong></span>&nbsp;</strong></span></strong>PROHIBITED ACTIVITIES</span></strong></div>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <div data-custom-class="body_text" className="div-14">
                  <span className="div-18">
                    You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial
                    <bdt className="block-component"></bdt>
                    endeavors
                    <bdt className="statement-end-if-in-editor"></bdt>
                    except those that are specifically endorsed or approved by us.
                  </span>
                </div>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <div className="div-20">
                  <div className="div-4">
                    <div className="div-20">
                      <div data-custom-class="body_text" className="div-14"><span className="div-18">As a user of the Services, you agree not to:</span></div>
                    </div>
                    <ul>
                      <li data-custom-class="body_text" className="div-14"><span className="div-18"><span className="div-32">Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Use any information obtained from the Services in order to harass, abuse, or harm another person.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Make improper use of our support services or submit false reports of abuse or misconduct.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Use the Services in a manner inconsistent with any applicable laws or regulations.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-10">
                          <span className="div-30">
                            <span className="div-31">
                              <span className="div-30">
                                <span className="div-31">
                                  Engage in
                                  <bdt className="block-component"></bdt>
                                  unauthorized
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  framing of or linking to the Services.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Delete the copyright or other proprietary rights notice from any Content.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Attempt to impersonate another user or person or use the username of another user.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-10">
                          <span className="div-30">
                            <span className="div-31">
                              <span className="div-30">
                                <span className="div-31">
                                  Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (
                                  <bdt className="block-component"></bdt>
                                  "gifs"
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  ), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as
                                  <bdt className="block-component"></bdt>
                                  "spyware" or "passive collection mechanisms" or "pcms"
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  ).
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-10">
                          <span className="div-30">
                            <span className="div-31">
                              <span className="div-30">
                                <span className="div-31">
                                  Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any
                                  <bdt className="block-component"></bdt>
                                  unauthorized
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  script or other software.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14"><span className="div-10"><span className="div-30"><span className="div-31"><span className="div-30"><span className="div-31">Use a buying agent or purchasing agent to make purchases on the Services.</span></span></span></span></span></li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-10">
                          <span className="div-30">
                            <span className="div-31">
                              <span className="div-30">
                                <span className="div-31">
                                  Make any
                                  <bdt className="block-component"></bdt>
                                  unauthorized
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false
                                  <bdt className="block-component"></bdt>
                                  pretenses
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  .
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-10">
                          <span className="div-30">
                            <span className="div-31">
                              <span className="div-30">
                                <span className="div-31">
                                  Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating
                                  <bdt className="block-component"></bdt>
                                  endeavor
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  or commercial enterprise.
                                </span>
                                <span className="div-33">
                                  <bdt className="forloop-component"></bdt>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-18">
                          <bdt className="question">Use the Services to advertise or offer to sell goods and services.</bdt>
                          <bdt className="forloop-component"></bdt>
                        </span>
                      </li>
                      <li data-custom-class="body_text" className="div-14">
                        <span className="div-18">
                          <bdt className="question">Sell or otherwise transfer your profile.</bdt>
                          <bdt className="forloop-component"></bdt>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="div-14"><br /></div>
                </div>
                <div className="div-20">
                  <div className="div-8">
                    <bdt data-type="if" className="div-1">
                      <bdt data-type="conditional-block">
                        <bdt data-type="body">
                          <div data-custom-class="heading_1" id="ugc" className="div-3"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">10.</span></strong></span></strong></span>&nbsp;</strong>USER GENERATED CONTRIBUTIONS</span></strong></div>
                        </bdt>
                      </bdt>
                    </bdt>
                  </div>
                  <div className="div-14"><br /></div>
                  <div className="div-8">
                    <bdt data-type="if" className="div-1">
                      <bdt data-type="conditional-block">
                        <bdt data-type="body">
                          <div data-custom-class="body_text" className="div-3">
                            <span className="div-18">
                              <bdt data-type="if" id="24327c5d-a34f-f7e7-88f1-65a2f788484f" className="div-1">
                                <bdt data-type="conditional-block">
                                  <bdt className="block-component" data-record-question-key="user_post_content_option" data-type="statement"></bdt>
                                </bdt>
                              </bdt>
                              The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively,
                              <bdt className="block-component"></bdt>
                              "Contributions"
                              <bdt className="statement-end-if-in-editor"></bdt>
                              ). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                              <bdt className="else-block">
                                <bdt className="block-component"></bdt>
                              </bdt>
                            </span>
                          </div>
                        </bdt>
                      </bdt>
                    </bdt>
                  </div>
                  <ul className="div-35">
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3">
                      <span className="div-11">
                        <span className="div-34">
                          <span data-custom-class="body_text">
                            You are the creator and owner of or have the necessary
                            <bdt className="block-component"></bdt>
                            licenses
                            <bdt className="statement-end-if-in-editor"></bdt>
                            , rights, consents, releases, and permissions to use and to
                            <bdt className="block-component"></bdt>
                            authorize
                            <bdt className="statement-end-if-in-editor"></bdt>
                            us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
                          </span>
                        </span>
                      </span>
                    </li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions are not false, inaccurate, or misleading.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3">
                      <span className="div-11">
                        <span className="div-34">
                          <span data-custom-class="body_text">
                            Your Contributions are not unsolicited or
                            <bdt className="block-component"></bdt>
                            unauthorized
                            <bdt className="statement-end-if-in-editor"></bdt>
                            advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                          </span>
                        </span>
                      </span>
                    </li>
                    <li data-custom-class="body_text" className="div-3">
                      <span className="div-11">
                        <span className="div-34">
                          <span data-custom-class="body_text">
                            Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
                            <bdt className="block-component"></bdt>
                            libelous
                            <bdt className="statement-end-if-in-editor"></bdt>
                            , slanderous, or otherwise objectionable (as determined by us).
                          </span>
                        </span>
                      </span>
                    </li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not violate any applicable law, regulation, or rule.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not violate the privacy or publicity rights of any third party.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</span></span></span></li>
                    <li data-custom-class="body_text" className="div-3"><span className="div-11"><span className="div-34"><span data-custom-class="body_text">Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</span></span></span></li>
                  </ul>
                </div>
              </div>
              <div className="div-26">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-3"><span className="div-18">Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</span></div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="heading_1" id="license" className="div-3">
                        <strong>
                          <span className="div-29">
                            <strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">11.</span></strong></span></strong></span>&nbsp;</strong>CONTRIBUTION
                            <bdt className="block-component"></bdt>
                            LICENSE
                            <bdt className="statement-end-if-in-editor"></bdt>
                          </span>
                        </strong>
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-8">
                <bdt data-type="if" id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="user_post_content_option" data-type="statement"></bdt>
                  </bdt>
                </bdt>
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-3">
                        <span className="div-18">
                          By posting your Contributions to any part of the Services
                          <bdt data-type="if" id="19652acc-9a2a-5ffe-6189-9474402fa6cc">
                            <bdt data-type="conditional-block">
                              <bdt className="block-component" data-record-question-key="socialnetwork_link_option" data-type="statement"></bdt>
                            </bdt>
                            , you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and
                            <bdt className="block-component"></bdt>
                            license
                            <bdt className="statement-end-if-in-editor"></bdt>
                            to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, t, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and
                            <bdt className="block-component"></bdt>
                            authorize sublicenses
                            <bdt className="statement-end-if-in-editor"></bdt>
                            of the foregoing. The use and distribution may occur in any media formats and through any media channels.
                          </bdt>
                        </span>
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-3">
                        <span className="div-18">
                          This
                          <bdt className="block-component"></bdt>
                          license
                          <bdt className="statement-end-if-in-editor"></bdt>
                          will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
                        </span>
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-3"><span className="div-18">We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</span></div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-28">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div data-custom-class="body_text" className="div-3">
                        <span className="div-18">
                          We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to
                          <bdt className="block-component"></bdt>
                          re-categorize
                          <bdt className="statement-end-if-in-editor"></bdt>
                          any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
                        </span>
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
            </div>
            <div align="center" className="div-1">
              <div className="div-3"><br /></div>
              <div className="div-3">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <span className="div-18">
                        <bdt className="else-block"></bdt>
                      </span>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div data-custom-class="body_text" className="div-3">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="review_option" data-type="statement"></bdt>
                  </bdt>
                </bdt>
              </div>
              <div data-custom-class="heading_1" id="reviews" className="div-3"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">12.</span></strong></span>&nbsp;</strong></span>GUIDELINES FOR REVIEWS</strong></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-18">
                  We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not
                  <bdt className="block-component"></bdt>
                  organize
                  <bdt className="statement-end-if-in-editor"></bdt>
                  a campaign encouraging others to post reviews, whether positive or negative.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-18">
                  <span className="div-18">
                    We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and
                    <bdt className="block-component"></bdt>
                    license
                    <bdt className="statement-end-if-in-editor"></bdt>
                    to reproduce, modify, t, transmit by any means, display, perform, and/or distribute all content relating to review.
                  </span>
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-3">
                <span className="div-18">
                  <span className="div-18">
                    <span className="div-18">
                      <bdt data-type="if" className="div-1">
                        <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                      </bdt>
                    </span>
                  </span>
                </span>
              </div>
              <div className="div-3">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="mobile_app_option" data-type="statement"></bdt>
                  </bdt>
                </bdt>
              </div>
              <div data-custom-class="heading_1" id="mobile" className="div-3">
                <strong>
                  <span className="div-29"><strong><span className="div-15"><strong><span className="div-15">13.</span></strong></span></strong>&nbsp;</span>MOBILE APPLICATION
                  <bdt className="block-component"></bdt>
                  LICENSE
                  <bdt className="statement-end-if-in-editor"></bdt>
                </strong>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3">
                <strong>
                  Use
                  <bdt className="block-component"></bdt>
                  License
                  <bdt className="statement-end-if-in-editor"></bdt>
                </strong>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-18">
                  If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating
                  <bdt className="block-component"></bdt>
                  endeavor
                  <bdt className="statement-end-if-in-editor"></bdt>
                  , commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div data-custom-class="heading_2" className="div-3"><span className="div-18"><strong>Apple and Android Devices</strong></span></div>
              <div className="div-3"><br /></div>
              <div data-custom-class="body_text" className="div-3">
                <span className="div-18">
                  The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an
                  <bdt className="block-component"></bdt>
                  "App Distributor"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ) to access the Services: (1) the
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  granted to you for our App is limited to a non-transferable
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  to use the application on a device that
                  <bdt className="block-component"></bdt>
                  utilizes
                  <bdt className="statement-end-if-in-editor"></bdt>
                  the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a
                  <bdt className="block-component"></bdt>
                  "terrorist supporting"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g.
                  <bdt className="block-component"></bdt>
                  ,
                  <bdt className="statement-end-if-in-editor"></bdt>
                  if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application
                  <bdt className="block-component"></bdt>
                  license
                  <bdt className="statement-end-if-in-editor"></bdt>
                  contained in these Legal Terms against you as a third-party beneficiary thereof.
                </span>
              </div>
              <div className="div-3"><br /></div>
              <div className="div-3">
                <span className="div-18">
                  <span className="div-18">
                    <span className="div-18">
                      <bdt data-type="if" className="div-1">
                        <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                      </bdt>
                    </span>
                  </span>
                </span>
              </div>
              <div className="div-3">
                <bdt data-type="if" className="div-1">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="socialnetwork_link_option" data-type="statement"></bdt>
                  </bdt>
                </bdt>
              </div>
            </div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt data-type="conditional-block">
                  <bdt className="block-component" data-record-question-key="3rd_party_option" data-type="statement"></bdt>
                </bdt>
              </bdt>
            </div>
            <div data-custom-class="heading_1" id="thirdparty" className="div-3"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">14.</span></strong></span></strong>&nbsp;</span>THIRD-PARTY WEBSITES AND CONTENT</strong></div>
            <div className="div-3"><br /></div>
            <div data-custom-class="body_text" className="div-3">
              <span className="div-18">
                The Services may contain (or you may be sent via the
                <bdt className="block-component"></bdt>
                Site or App
                <bdt className="block-component"></bdt>
                ) links to other websites (
                <bdt className="block-component"></bdt>
                "Third-Party Websites"
                <bdt className="statement-end-if-in-editor"></bdt>
                ) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (
                <bdt className="block-component"></bdt>
                "Third-Party Content"
                <bdt className="statement-end-if-in-editor"></bdt>
                ). Such <span className="div-36">Third-Party</span> Websites and <span className="div-36">Third-Party</span> Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any <span className="div-36">Third-Party</span> Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the <span className="div-36">Third-Party</span> Websites or the <span className="div-36">Third-Party</span> Content. Inclusion of, linking to, or permitting the use or installation of any <span className="div-36">Third-Party</span> Websites or any <span className="div-36">Third-Party&nbsp;</span>Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the <span className="div-36">Third-Party</span> Websites or to use or install any <span className="div-36">Third-Party</span> Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through <span className="div-36">Third-Party</span> Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on <span className="div-36">Third-Party</span> Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any <span className="div-36">Third-Party</span> Content or any contact with <span className="div-36">Third-Party</span> Websites.
              </span>
            </div>
            <div className="div-3"><br /></div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
              </bdt>
            </div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt data-type="conditional-block">
                  <bdt className="block-component" data-record-question-key="advertiser_option" data-type="statement"></bdt>
                </bdt>
              </bdt>
            </div>
            <div data-custom-class="heading_1" id="advertisers" className="div-3"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">15.</span></strong></span>&nbsp;</strong></span>ADVERTISERS</strong></div>
            <div className="div-3"><br /></div>
            <div data-custom-class="body_text" className="div-3"><span className="div-18">We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</span></div>
            <div className="div-3"><br /></div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
              </bdt>
            </div>
            <div data-custom-class="heading_1" id="sitemanage" className="div-3"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">16.</span></strong></span></strong></span>&nbsp;</strong>SERVICES MANAGEMENT</span></strong></div>
            <div className="div-3"><br /></div>
            <div data-custom-class="body_text" className="div-3">We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</div>
            <div className="div-3"><br /></div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt data-type="conditional-block">
                  <bdt className="block-component" data-record-question-key="privacy_policy_option" data-type="statement"></bdt>
                </bdt>
              </bdt>
            </div>
            <div data-custom-class="heading_1" id="ppyes" className="div-3"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">17.</span></strong></span></strong>&nbsp;</span>PRIVACY POLICY</strong></div>
            <div className="div-3"><br /></div>
            <div data-custom-class="body_text" className="div-3">
              <span className="div-18">
                We care about data privacy and security. Please review our Privacy Policy:
                <strong>
                  &nbsp;
                  <span className="div-7">
                    <bdt className="block-container question question-in-editor" data-id="d10c7fd7-0685-12ac-c717-cbc45ff916d1" data-type="question"><a href="https://mypg.gr/privacy" target="_blank" data-custom-class="link">https://mypg.gr/privacy</a></bdt>
                  </span>
                </strong>
                . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in
                <bdt className="block-component"></bdt>
                <bdt className="question">Greece</bdt>
                <bdt className="statement-end-if-in-editor"></bdt>
                <bdt className="block-component"></bdt>
                . If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in
                <span className="div-18">
                  <bdt className="block-component"></bdt>
                  <bdt className="question">Greece</bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <bdt className="block-component"></bdt>
                , then through your continued use of the Services, you are transferring your data to
                <span className="div-18">
                  <bdt className="block-component"></bdt>
                  <bdt className="question">Greece</bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <bdt className="block-component"></bdt>
                , and you expressly consent to have your data transferred to and processed in
                <span className="div-18">
                  <bdt className="block-component"></bdt>
                  <bdt className="question">Greece</bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <bdt className="block-component"></bdt>
                .
                <bdt className="block-component"></bdt>
              </span>
            </div>
            <div className="div-3"><br /></div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
              </bdt>
              <bdt data-type="if">
                <bdt data-type="conditional-block">
                  <bdt data-record-question-key="privacy_policy_followup" data-type="statement" className="div-36"></bdt>
                </bdt>
              </bdt>
            </div>
            <div className="div-3">
              <bdt data-type="if" className="div-1">
                <bdt data-type="conditional-block">
                  <bdt className="block-component" data-record-question-key="copyright_agent_option" data-type="statement">
                    <bdt className="block-component"></bdt>
                  </bdt>
                </bdt>
              </bdt>
            </div>
            <div className="div-14">
              <bdt className="block-component"></bdt>
              <bdt className="block-component"></bdt>
            </div>
            <div data-custom-class="heading_1" id="copyrightno" className="div-14"><strong><span className="div-2"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">18.</span></strong></span></strong></span>&nbsp;</strong>COPYRIGHT INFRINGEMENTS</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-18">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a
                <bdt className="block-component"></bdt>
                "Notification"
                <bdt className="statement-end-if-in-editor"></bdt>
                ). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <bdt className="statement-end-if-in-editor"></bdt>
              <bdt className="statement-end-if-in-editor"></bdt>
            </div>
            <div data-custom-class="heading_1" id="terms" className="div-14"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">19.</span></strong></span></strong></span>&nbsp;</strong>TERM AND TERMINATION</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-18">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE
                <bdt data-type="if" id="a6e121c2-36b4-5066-bf9f-a0a33512e768">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="user_account_option" data-type="statement"></bdt>
                    <bdt data-type="body">YOUR ACCOUNT AND&nbsp;</bdt>
                  </bdt>
                  <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                </bdt>
                ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14"><span className="div-18">If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</span></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="modifications" className="div-14"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">20.</span></strong></span></strong></span>&nbsp;</strong>MODIFICATIONS AND INTERRUPTIONS</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-18">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services.
                <bdt className="block-component"></bdt>
                We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14"><span className="div-18">We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</span></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="law" className="div-14"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">21.</span></strong></span></strong></span>&nbsp;</strong>GOVERNING LAW</span></strong></div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <span className="div-18">
                <bdt className="block-component"></bdt>
              </span>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-18">
                These Legal Terms are governed by and interpreted following the laws of
                <bdt className="block-component"></bdt>
                <bdt className="question">Greece</bdt>
                <span className="div-18">
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                , and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence.
                <bdt className="question">MyPG Inc.</bdt>
                and yourself both agree to submit to the non-exclusive jurisdiction of the courts of
                <bdt className="question">Attikh</bdt>
                , which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in
                <bdt className="block-component"></bdt>
                <bdt className="question">Greece</bdt>
                <span className="div-18">
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                , or in the EU country in which you reside.
                <bdt className="else-block"></bdt>
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="disputes" className="div-14"><strong><span className="div-29"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">22.</span></strong></span></strong></span>&nbsp;</strong>DISPUTE RESOLUTION</span></strong></div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <bdt className="block-component"></bdt>
            </div>
            <div className="div-14">
              <bdt className="block-component"></bdt>
            </div>
            <div data-custom-class="heading_2" className="div-14"><strong>Informal Negotiations</strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-10">
                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a
                <bdt className="block-component"></bdt>
                "Dispute" and collectively, the "Disputes"
                <bdt className="statement-end-if-in-editor"></bdt>
                ) brought by either you or us (individually, a
                <bdt className="block-component"></bdt>
                "Party" and collectively, the "Parties"
                <bdt className="statement-end-if-in-editor"></bdt>
                ), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least
                <bdt className="question">thirty (30)</bdt>
                days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <bdt className="statement-end-if-in-editor"></bdt>
            </div>
            <div data-custom-class="heading_2" className="div-14"><strong>Binding Arbitration</strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <bdt className="block-component"><span className="div-10"></span></bdt>
            </div>
            <div data-custom-class="body_text" className="div-14">
              Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be
              <bdt className="block-component"></bdt>
              <bdt className="question">Alimos</bdt>
              ,
              <bdt className="block-component"></bdt>
              <bdt className="question">Greece</bdt>
              <bdt className="else-block"></bdt>
              . The language of the proceedings shall be
              <bdt className="question">Greek</bdt>
              . Applicable rules of substantive law shall be the law of
              <bdt className="block-component"></bdt>
              <bdt className="question">Greece</bdt>
              <bdt className="statement-end-if-in-editor"></bdt>
              .
              <bdt className="else-block"></bdt>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_2" className="div-14"><strong>Restrictions</strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to
              <bdt className="block-component"></bdt>
              utilize
              <bdt className="statement-end-if-in-editor"></bdt>
              class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_2" className="div-14">
              <bdt className="block-component"></bdt>
              <strong>Exceptions to Informal Negotiations and Arbitration</strong>
              <bdt className="statement-end-if-in-editor"></bdt>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <bdt className="block-component"></bdt>
              The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or
              <bdt className="block-component"></bdt>
              unauthorized
              <bdt className="statement-end-if-in-editor"></bdt>
              use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
              <bdt className="statement-end-if-in-editor"></bdt>
            </div>
            <div className="div-14">
              <bdt className="statement-end-if-in-editor">
                <bdt className="statement-end-if-in-editor"></bdt>
              </bdt>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="corrections" className="div-14"><strong><span className="div-2"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">23.</span></strong></span></strong></span>&nbsp;</strong>CORRECTIONS</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="disclaimer" className="div-14"><span className="div-37"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">24.</span></strong></span></strong></span> DISCLAIMER</strong></span></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-6">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
                <bdt className="block-component"></bdt>
                UNAUTHORIZED
                <bdt className="statement-end-if-in-editor"></bdt>
                ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                <bdt className="block-component"></bdt>
                JUDGMENT
                <bdt className="statement-end-if-in-editor"></bdt>
                AND EXERCISE CAUTION WHERE APPROPRIATE.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="liability" className="div-14"><strong><span className="div-15"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">25.</span></strong></span></strong></span>&nbsp;</strong>LIMITATIONS OF LIABILITY</span></strong></div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <span className="div-6">
                <span data-custom-class="body_text">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</span>
                <bdt data-type="if" id="3c3071ce-c603-4812-b8ca-ac40b91b9943">
                  <span data-custom-class="body_text">
                    <bdt data-type="conditional-block">
                      <bdt className="block-component" data-record-question-key="limitations_liability_option" data-type="statement"></bdt>
                    </bdt>
                  </span>
                </bdt>
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="indemnification" className="div-14"><strong><span className="div-15"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">26.</span></strong></span></strong></span>&nbsp;</strong>INDEMNIFICATION</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-6">
                You agree to
                defend, indemnify, and hold us harmless, including our subsidiaries,
                affiliates, and all of our respective officers, agents, partners, and
                employees, from and against any loss, damage, liability, claim, or demand, including
                reasonable attorneys’ fees and expenses, made by any third party due to or
                arising out of:
                <bdt data-type="if" id="475fffa5-05ca-def8-ac88-f426b238903c">
                  <bdt data-type="conditional-block">
                    <bdt className="block-component" data-record-question-key="user_post_content_option" data-type="statement"></bdt>
                    <bdt data-type="body">(1) your Contributions;&nbsp;</bdt>
                  </bdt>
                  <bdt className="statement-end-if-in-editor" data-type="close"></bdt>
                </bdt>
                (<span className="div-36">2</span>) use of the Services; (<span className="div-36">3</span>) breach of these Legal Terms; (<span className="div-36">4</span>) any breach of your representations and warranties set forth in these Legal Terms; (<span className="div-36">5</span>) your violation of the rights of a third party, including but not limited to intellectual property rights; or (<span className="div-36">6</span>) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive
                <bdt className="block-component"></bdt>
                defense
                <bdt className="statement-end-if-in-editor"></bdt>
                and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our
                <bdt className="block-component"></bdt>
                defense
                <bdt className="statement-end-if-in-editor"></bdt>
                of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
              </span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="userdata" className="div-14"><strong><span className="div-15"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">27.</span></strong></span></strong></span>&nbsp;</strong>USER DATA</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14"><span className="div-6">We will maintain
              certain data that you transmit to the Services for the purpose of managing the
              performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups
              of data, you are solely responsible for all data that you transmit or that
              relates to any activity you have undertaken using the Services. You agree
              that we shall have no liability to you for any loss or corruption of any such
              data, and you hereby waive any right of action against us arising from any such
              loss or corruption of such data.</span>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="electronic" className="div-14"><strong><span className="div-15"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">28.</span></strong></span></strong></span>&nbsp;</strong>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14"><span className="div-6">Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</span></div>
            <div className="div-14"><br /></div>
            <div className="div-14">
              <bdt className="block-component"></bdt>
            </div>
            <div data-custom-class="heading_1" id="misc" className="div-14"><strong><span className="div-15"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">29.</span></strong></span>&nbsp;</strong>&nbsp;</span>&nbsp;</strong>MISCELLANEOUS</span>&nbsp;</strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-6">
                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all
                <bdt className="block-component"></bdt>
                defenses
                <bdt className="statement-end-if-in-editor"></bdt>
                you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
              </span>
            </div>
            <div className="div-14">
              <bdt className="block-component"><span className="div-10"></span></bdt>
            </div>
            <div className="div-14"><br /></div>
            <div data-custom-class="heading_1" id="contact" className="div-14"><strong><span className="div-38"><span className="div-2"><strong><span className="div-29"><strong><span className="div-15"><strong><span className="div-15">30.</span></strong></span>&nbsp;</strong></span></strong>CONTACT US</span></span></strong></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14"><span className="div-6">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</span></div>
            <div className="div-14"><br /></div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-10">
                <span className="div-11">
                  <bdt className="question"><strong>MyPG Inc.</strong></bdt>
                  <strong>
                    <bdt className="block-component"></bdt>
                  </strong>
                </span>
              </span>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-10">
                <span className="div-24">
                  <bdt className="question">
                    <strong>
                      <bdt className="question">Patmou 1</bdt>
                    </strong>
                  </bdt>
                  <span className="div-24">
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <span className="div-10">
                <strong>
                  <span className="div-11">
                    <bdt className="question">Alimos</bdt>
                    <bdt className="block-component"></bdt>
                    ,
                    <bdt className="question">Attiki</bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="block-component"></bdt>
                    <bdt className="question">17456</bdt>
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </strong>
                <strong>
                  <span className="div-11">
                    <bdt className="block-component"></bdt>
                  </span>
                  <bdt className="block-component"></bdt>
                </strong>
              </span>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <bdt className="block-component"><strong></strong></bdt>
              <strong>
                <bdt className="question">Greece</bdt>
              </strong>
              <bdt className="statement-end-if-in-editor"></bdt>
              <bdt className="statement-end-if-in-editor"></bdt>
              <bdt className="statement-end-if-in-editor"><strong></strong></bdt>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <strong>
                <span className="div-6">
                  <strong>
                    <bdt className="block-component"></bdt>
                  </strong>
                </span>
              </strong>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <strong>
                <span className="div-6">
                  <strong>
                    <bdt className="block-component"></bdt>
                  </strong>
                </span>
              </strong>
            </div>
            <div data-custom-class="body_text" className="div-14">
              <strong>
                <span className="div-6">
                  <strong>
                    <bdt className="question">support@mypg.gr</bdt>
                  </strong>
                </span>
              </strong>
            </div>
          </div>
        </center>

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
  );
}
