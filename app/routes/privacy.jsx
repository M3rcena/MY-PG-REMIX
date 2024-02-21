import React from "react";

import { Helmet } from "react-helmet";

import indexStylesHref from "../styles/index.css";
import privacyStylesHref from "../styles/privacy.css";

import { Link, useNavigate } from "@remix-run/react";

import { useTranslation } from "react-i18next";

export const links = () => {
  return [
    { rel: "stylesheet", href: indexStylesHref },
    { rel: "stylesheet", href: privacyStylesHref },
  ];
};

export const handle = {
  i18n: "common",
}

export default function Privacy() {
  let navigate = useNavigate();

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
        <center><div data-custom-class="body">
          <div>
            <strong>
              <span className="title-span">
                <span data-custom-class="title">
                  <bdt className="block-component"></bdt>
                  <bdt className="question">PRIVACY POLICY</bdt>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </span>
            </strong>
          </div>
          <div><br /></div>
          <div>
            <span className="span-2">
              <strong>
                <span className="span-3">
                  <span data-custom-class="subtitle">
                    Last updated
                    <bdt className="question">January 01, 2024</bdt>
                  </span>
                </span>
              </strong>
            </span>
          </div>
          <div><br /></div>
          <div><br /></div>
          <div><br /></div>
          <div className="div-1">
            <span className="span-2">
              <span className="span-4">
                <span data-custom-class="body_text">
                  This privacy notice for
                  <bdt className="question">
                    MyPG Inc.
                    <bdt className="block-component"></bdt>
                  </bdt>
                  (
                  <bdt className="block-component"></bdt>
                  "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
                <span data-custom-class="body_text">
                  ), describes how and why we might collect, store, use, and/or share (
                  <bdt className="block-component"></bdt>
                  "<strong>process</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ) your information when you use our services (
                  <bdt className="block-component"></bdt>
                  "<strong>Services</strong>"
                  <bdt className="statement-end-if-in-editor"></bdt>
                  ), such as when you:
                </span>
              </span>
            </span>
            <span className="span-3">
              <span className="span-2">
                <span data-custom-class="body_text">
                  <span className="span-5">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    Visit our website
                    <bdt className="block-component"></bdt>
                    at
                    <span className="span-6">
                      <bdt className="question"><a href="https://mypg.gr/" target="_blank" data-custom-class="link">https://mypg.gr/</a></bdt>
                    </span>
                    <span className="span-3">
                      <span className="span-5">
                        <span data-custom-class="body_text">
                          <span className="span-3">
                            <span className="span-5">
                              <bdt className="statement-end-if-in-editor">, or any website of ours that links to this privacy notice</bdt>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <bdt className="block-component">
              <span className="span-3">
                <span className="span-3">
                  <span className="span-2">
                    <span data-custom-class="body_text">
                      <span className="span-5">
                        <span data-custom-class="body_text">
                          <bdt className="block-component"></bdt>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </bdt>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    Download and use
                    <bdt className="block-component"></bdt>
                    our mobile application
                    <bdt className="block-component"></bdt>
                    (
                    <bdt className="question">
                      My PG | Playground4U)
                      <span className="span-4">
                        <span className="span-4">
                          <span data-custom-class="body_text">
                            <span className="span-3">
                              <span className="span-5">
                                <span data-custom-class="body_text">
                                  <span className="span-3">
                                    <span className="span-5">
                                      <bdt className="statement-end-if-in-editor">,</bdt>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </bdt>
                  </span>
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span className="span-5">
                        <span data-custom-class="body_text">
                          <span className="span-3">
                            <span className="span-5">
                              <bdt className="statement-end-if-in-editor">
                                <bdt className="block-component"> or any other application of ours that links to this privacy notice</bdt>
                              </bdt>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-3">
              <span className="span-2">
                <span data-custom-class="body_text">
                  <span className="span-5">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    Engage with us in other related ways, including any sales, marketing, or events
                    <span className="span-3">
                      <span className="span-5">
                        <span data-custom-class="body_text">
                          <span className="span-3">
                            <span className="span-5">
                              <bdt className="statement-end-if-in-editor"></bdt>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-3">
              <span className="span-2">
                <span data-custom-class="body_text">
                  <strong>Questions or concerns?&nbsp;</strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.
                  <bdt className="block-component"></bdt>
                  If you still have any questions or concerns, please contact us at
                  <bdt className="question">privacy@mypg.gr</bdt>
                  .
                </span>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><strong><span className="span-3"><span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></span></strong></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><span data-custom-class="body_text"><strong><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our&nbsp;</em></strong></span></span><a data-custom-class="link" href="#toc"><span className="span-7"><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a><span className="span-3"><span data-custom-class="body_text"><strong><em>&nbsp;below to find the section you are looking for.</em></strong></span></span></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#personalinfo"><span className="span-7"><span data-custom-class="body_text">personal information you disclose to us</span></span></a><span data-custom-class="body_text">.</span></div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>Do we process any sensitive personal information?</strong>
                <bdt className="block-component"></bdt>
                We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about&nbsp;
              </span>
            </span>
            <a data-custom-class="link" href="#sensitiveinfo"><span className="span-7"><span data-custom-class="body_text">sensitive information we process</span></span></a><span data-custom-class="body_text">.</span>
            <span className="span-3">
              <span data-custom-class="body_text">
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>Do we receive any information from third parties?</strong>
                <bdt className="block-component"></bdt>
                We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about&nbsp;
              </span>
            </span>
            <a data-custom-class="link" href="#othersources"><span className="span-7"><span data-custom-class="body_text">information collected from other sources</span></span></a><span data-custom-class="body_text">.</span>
            <span className="span-3">
              <span data-custom-class="body_text">
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#infouse"><span className="span-7"><span data-custom-class="body_text">how we process your information</span></span></a><span data-custom-class="body_text">.</span></div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>
                  In what situations and with which
                  <bdt className="block-component"></bdt>
                  types of
                  <bdt className="statement-end-if-in-editor"></bdt>
                  parties do we share personal information?
                </strong>
                We may share information in specific situations and with specific
                <bdt className="block-component"></bdt>
                categories of
                <bdt className="statement-end-if-in-editor"></bdt>
                third parties. Learn more about&nbsp;
              </span>
            </span>
            <a data-custom-class="link" href="#whoshare"><span className="span-7"><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a>
            <span className="span-3">
              <span data-custom-class="body_text">
                .
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>How do we keep your information safe?</strong> We have
                <bdt className="block-component"></bdt>
                organizational
                <bdt className="statement-end-if-in-editor"></bdt>
                and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
                <bdt className="block-component"></bdt>
                unauthorized
                <bdt className="statement-end-if-in-editor"></bdt>
                third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about&nbsp;
              </span>
            </span>
            <a data-custom-class="link" href="#infosafe"><span className="span-7"><span data-custom-class="body_text">how we keep your information safe</span></span></a><span data-custom-class="body_text">.</span>
            <span className="span-3">
              <span data-custom-class="body_text">
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#privacyrights"><span className="span-7"><span data-custom-class="body_text">your privacy rights</span></span></a><span data-custom-class="body_text">.</span></div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
                <bdt className="block-component">submitting a&nbsp;</bdt>
              </span>
            </span>
            <a data-custom-class="link" href="https://app.termly.io/notify/ff078788-d149-44a3-8051-8169eb7d7605" rel="noopener noreferrer" target="_blank"><span className="span-7"><span data-custom-class="body_text">data subject access request</span></span></a>
            <span className="span-3">
              <span data-custom-class="body_text">
                <bdt className="block-component"></bdt>
                , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect?&nbsp;</span></span><a data-custom-class="link" href="#toc"><span className="span-7"><span data-custom-class="body_text">Review the privacy notice in full</span></span></a><span className="span-3"><span data-custom-class="body_text">.</span></span></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><br /></div>
          <div id="toc" className="div-1"><span className="span-3"><span className="span-2"><span className="span-8"><strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></span></span></span></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><span className="span-3"><a data-custom-class="link" href="#infocollect"><span className="span-6">1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#infouse">
                <span className="span-6">
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                  <bdt className="block-component"></bdt>
                </span>
              </a>
            </span>
          </div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#legalbases">
                <span className="span-6">
                  3. <span className="span-3"><span className="span-6">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></span>
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </a>
            </span>
          </div>
          <div className="div-1">
            <span className="span-3">
              <span className="span-6"><a data-custom-class="link" href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span>
              <span data-custom-class="body_text">
                <bdt className="block-component"></bdt>
                <span className="span-2">
                  <span className="span-5">
                    <span data-custom-class="body_text">
                      <span className="span-5">
                        <bdt className="block-component"></bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#cookies"><span className="span-6">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a>
              <span className="span-2">
                <span className="span-5">
                  <span data-custom-class="body_text">
                    <span className="span-5">
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                  <span data-custom-class="body_text">
                    <span className="span-5">
                      <span className="span-5">
                        <span className="span-5">
                          <bdt className="block-component"></bdt>
                        </span>
                      </span>
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#inforetain"><span className="span-6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a>
              <span className="span-2">
                <span className="span-5">
                  <span data-custom-class="body_text">
                    <span className="span-5">
                      <span className="span-5">
                        <bdt className="block-component"></bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#infosafe"><span className="span-6">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a>
              <span className="span-2">
                <span className="span-5">
                  <span data-custom-class="body_text">
                    <span className="span-5">
                      <bdt className="statement-end-if-in-editor"></bdt>
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1"><span className="span-3"><span className="span-6"><a data-custom-class="link" href="#privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
          <div className="div-1">
            <span className="span-3">
              <a data-custom-class="link" href="#DNT">
                <span className="span-6">
                  9. CONTROLS FOR DO-NOT-TRACK FEATURES
                  <bdt className="block-component"></bdt>
                </span>
                <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
              </a>
            </span>
          </div>
          <div className="div-1">
            <a data-custom-class="link" href="#otherlaws"><span className="span-7">10. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></a>
            <span className="span-3">
              <bdt className="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
            </span>
          </div>
          <div className="div-1">
            <bdt className="block-component"><span className="span-3"></span></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
            <bdt className="block-component"></bdt>
          </div>
          <div className="div-1"><span className="span-3"><a data-custom-class="link" href="#policyupdates"><span className="span-6">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
          <div className="div-1"><a data-custom-class="link" href="#contact"><span className="span-7">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
          <div className="div-1"><a data-custom-class="link" href="#request"><span className="span-6">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
          <div className="div-1"><br /></div>
          <div className="div-1"><br /></div>
          <div id="infocollect" className="div-1"><span className="span-8"><span className="span-9"><span className="span-9"><span className="span-9"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></span></span></span></span></div>
          <div className="div-1"><br /></div>
          <div id="personalinfo" className="div-1"><span data-custom-class="heading_2" className="span-8"><span className="span-3"><strong>Personal information you disclose to us</strong></span></span></div>
          <div>
            <div><br /></div>
            <div className="div-1"><span className="span-2"><span className="span-4"><span data-custom-class="body_text"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span></div>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  We collect personal information that you voluntarily provide to us when you
                  <span className="span-3">
                    <bdt className="block-component"></bdt>
                  </span>
                  register on the Services,&nbsp;
                </span>
                <span className="span-3">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                  <span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">names</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">email addresses</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">usernames</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">passwords</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">contact preferences</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">billing addresses</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">debit/credit card numbers</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">mailing addresses</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">phone numbers</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">age</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-3">
                      <span data-custom-class="body_text">
                        <bdt className="question">gender</bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="forloop-component"></bdt>
                    </span>
                    <span data-custom-class="body_text">
                      <bdt className="statement-end-if-in-editor"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div id="sensitiveinfo" className="div-1">
            <span className="span-3">
              <span data-custom-class="body_text">
                <strong>Sensitive Information.</strong>
                <bdt className="block-component"></bdt>
                When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
                <bdt className="forloop-component"></bdt>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-3">
                <span data-custom-class="body_text">
                  <bdt className="question">biometric data</bdt>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <span className="span-3">
              <span data-custom-class="body_text">
                <bdt className="forloop-component"></bdt>
              </span>
              <span data-custom-class="body_text">
                <bdt className="statement-end-if-in-editor"></bdt>
              </span>
            </span>
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by
                  <bdt className="forloop-component"></bdt>
                  <span className="span-4">
                    <span className="span-4">
                      <span data-custom-class="body_text">
                        <span className="span-3">
                          <span data-custom-class="body_text">
                            <bdt className="block-component"></bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <bdt className="question">WePay</bdt>
                  <span className="span-4">
                    <span className="span-4">
                      <span data-custom-class="body_text">
                        <span className="span-4">
                          <span className="span-4">
                            <span data-custom-class="body_text">
                              <span className="span-3">
                                <span data-custom-class="body_text">
                                  <bdt className="block-component"></bdt>
                                </span>
                              </span>
                            </span>
                            <span data-custom-class="body_text">
                              <span className="span-3">
                                <span className="span-5">
                                  <span data-custom-class="body_text">
                                    <span className="span-3">
                                      <span className="span-5">
                                        <span data-custom-class="body_text">
                                          <span className="span-5">
                                            <span className="span-3">
                                              <span data-custom-class="body_text">
                                                <bdt className="forloop-component"></bdt>
                                                <span className="span-4">
                                                  <span className="span-4">
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component"></bdt>
                                                          and
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <bdt className="question">PayPal</bdt>
                                                              </span>
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <span data-custom-class="body_text">
                                                                      <span className="span-3">
                                                                        <span className="span-5">
                                                                          <span data-custom-class="body_text">
                                                                            <span className="span-5">
                                                                              <span className="span-3">
                                                                                <span data-custom-class="body_text">
                                                                                  <bdt className="forloop-component"></bdt>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          . You may find their privacy notice link(s) here:
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <bdt className="forloop-component"></bdt>
                                                                <span className="span-4">
                                                                  <span className="span-4">
                                                                    <span data-custom-class="body_text">
                                                                      <span className="span-3">
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="block-component"></bdt>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          <span className="span-6">
                                                            <bdt className="question"><a href="https://go.wepay.com/privacy-policy/" target="_blank" data-custom-class="link">https://go.wepay.com/privacy-policy/</a></bdt>
                                                          </span>
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <span className="span-4">
                                                                  <span className="span-4">
                                                                    <span data-custom-class="body_text">
                                                                      <span className="span-4">
                                                                        <span className="span-4">
                                                                          <span data-custom-class="body_text">
                                                                            <span className="span-3">
                                                                              <span data-custom-class="body_text">
                                                                                <bdt className="block-component"></bdt>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                                <bdt className="forloop-component"></bdt>
                                                                <span className="span-4">
                                                                  <span className="span-4">
                                                                    <span data-custom-class="body_text">
                                                                      <span className="span-3">
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="block-component"></bdt>
                                                                          and
                                                                          <span className="span-7">
                                                                            <span className="span-7">
                                                                              <span data-custom-class="body_text">
                                                                                <bdt className="question"><a href="https://www.paypal.com/us/legalhub/privacy-full#personalData" target="_blank" data-custom-class="link">https://www.paypal.com/us/legalhub/privacy-full#personalData</a></bdt>
                                                                              </span>
                                                                              <span data-custom-class="body_text">
                                                                                <span className="span-4">
                                                                                  <span className="span-4">
                                                                                    <span data-custom-class="body_text">
                                                                                      <span className="span-3">
                                                                                        <span data-custom-class="body_text">
                                                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                          <bdt className="forloop-component"></bdt>
                                                                          <span className="span-3">
                                                                            <span data-custom-class="body_text">
                                                                              .
                                                                              <bdt className="block-component"></bdt>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="div-1"><br /></div>
          <div className="div-1">
            <span className="span-4">
              <span className="span-4">
                <span data-custom-class="body_text">
                  <span className="span-3">
                    <span data-custom-class="body_text">
                      <bdt className="statement-end-if-in-editor">
                        <bdt className="block-component"></bdt>
                      </bdt>
                    </span>
                  </span>
                </span>
              </span>
              <bdt className="block-component">
                <bdt className="block-component"></bdt>
              </bdt>
            </span>
          </div>
          <div className="div-1">
            <span data-custom-class="body_text">
              <span className="span-3">
                <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                <bdt className="block-component"></bdt>
              </span>
            </span>
          </div>
          <ul>
            <li className="div-1">
              <span data-custom-class="body_text">
                <span className="span-3">
                  <em>Geolocation Information.</em> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
          </div>
          <ul>
            <li className="div-1">
              <span className="span-3">
                <span data-custom-class="body_text">
                  <em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device's
                  <bdt className="forloop-component"></bdt>
                  <bdt className="question">calendar</bdt>
                  ,
                  <bdt className="forloop-component"></bdt>
                  <bdt className="question">reminders</bdt>
                  ,
                  <bdt className="forloop-component"></bdt>
                  and other features. If you wish to change our access or permissions, you may do so in your device's settings.
                  <bdt className="statement-end-if-in-editor"></bdt>
                </span>
              </span>
            </li>
          </ul>
          <div className="div-1">
            <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
            <div className="div-1">
              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
            </div>
            <ul>
              <li className="div-1">
                <span className="span-3">
                  <span data-custom-class="body_text">
                    <em>Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                    <bdt className="statement-end-if-in-editor"></bdt>
                  </span>
                </span>
              </li>
            </ul>
            <div className="div-1"><span className="span-3"><span data-custom-class="body_text">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</span></span></div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
            </div>
            <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span></div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <div className="div-1"><span data-custom-class="heading_2" className="span-8"><span className="span-3"><strong>Information automatically collected</strong></span></span></div>
            <div>
              <div><br /></div>
              <div className="div-1"><span className="span-2"><span className="span-4"><span data-custom-class="body_text"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></span></span></span></span></span></div>
            </div>
            <div className="div-1"><br /></div>
            <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</span></span></span></div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    Like many businesses, we also collect information through cookies and similar technologies.
                    <bdt className="block-component"></bdt>
                    You can find out more about this in our Cookie Notice:
                    <bdt className="statement-end-if-in-editor"></bdt>
                    <bdt className="block-component"></bdt>
                    <span className="span-6">
                      <bdt className="question"><a href="https://mypg.gr/cookies" target="_blank" data-custom-class="link">https://mypg.gr/cookies</a></bdt>
                    </span>
                    .
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <bdt className="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                  </span>
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    The information we collect includes:
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <ul>
              <li className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services<span className="span-3">&nbsp;</span>(such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called
                      <bdt className="block-component"></bdt>
                      "crash dumps"
                      <bdt className="statement-end-if-in-editor"></bdt>
                      ), and hardware settings).
                      <span className="span-3">
                        <span className="span-5">
                          <span data-custom-class="body_text">
                            <span className="span-3">
                              <span className="span-5">
                                <bdt className="statement-end-if-in-editor"></bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div className="div-1">
              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
            </div>
            <ul>
              <li className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                      <span className="span-3">
                        <span className="span-5">
                          <span data-custom-class="body_text">
                            <span className="span-3">
                              <span className="span-5">
                                <bdt className="statement-end-if-in-editor"></bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div className="div-1">
              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
            </div>
            <ul>
              <li className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                      <span className="span-3">
                        <span className="span-5">
                          <span data-custom-class="body_text">
                            <span className="span-3">
                              <span className="span-5">
                                <bdt className="statement-end-if-in-editor"></bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div>
              <bdt className="block-component"><span className="span-3"></span></bdt>
              <bdt className="statement-end-if-in-editor"></bdt>
              <span data-custom-class="body_text">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-4">
                      <span data-custom-class="body_text">
                        <bdt className="statement-end-if-in-editor">
                          <bdt className="block-component"></bdt>
                        </bdt>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div id="othersources" className="div-1"><span data-custom-class="heading_2" className="span-8"><span className="span-3"><strong>Information collected from other sources</strong></span></span></div>
            <div>
              <div><br /></div>
              <div className="div-1">
                <span className="span-2">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <span className="span-4">
                        <span className="span-4">
                          <span data-custom-class="body_text">
                            <strong><em>In Short:&nbsp;</em></strong>
                            <em>
                              We may collect limited data from public databases, marketing partners,
                              <span className="span-5">
                                <span className="span-3">
                                  <em>
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component"></bdt>
                                    </span>
                                  </em>
                                </span>
                              </span>
                              and other outside sources.
                            </em>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers,
                    <span className="span-5">
                      <span className="span-3">
                        <span data-custom-class="body_text">
                          <bdt className="block-component"></bdt>
                        </span>
                      </span>
                      &nbsp;
                    </span>
                    and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user
                    <bdt className="block-component"></bdt>
                    behavior
                    <bdt className="statement-end-if-in-editor"></bdt>
                    data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
                    <span className="span-5">
                      <span className="span-3">
                        <span data-custom-class="body_text">
                          <span className="span-5">
                            <span className="span-3">
                              <span data-custom-class="body_text">
                                <bdt className="block-component"></bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <span className="span-5">
                      <span className="span-3">
                        <span data-custom-class="body_text">
                          <span className="span-5">
                            <span className="span-5">
                              <bdt className="block-component">
                                <span className="span-4">
                                  <span data-custom-class="body_text">
                                    <span className="span-4">
                                      <span data-custom-class="body_text">
                                        <bdt className="statement-end-if-in-editor">
                                          <bdt className="statement-end-if-in-editor"></bdt>
                                        </bdt>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </bdt>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="span-3">
                <span data-custom-class="body_text">
                  <bdt className="block-component"></bdt>
                </span>
              </span>
            </div>
            <div id="infouse" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
            <div>
              <div className="div-1"><br /></div>
              <div className="div-1"><span className="span-2"><span className="span-4"><span data-custom-class="body_text"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></span></span></span></span></div>
            </div>
            <div className="div-1"><br /></div>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
            </div>
            <ul>
              <li className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <strong>To facilitate account creation and authentication and otherwise manage user accounts.&nbsp;</strong>We may process your information so you can create and log in to your account, as well as keep your account in working order.
                      <span className="span-4">
                        <span className="span-4">
                          <span data-custom-class="body_text">
                            <span className="span-3">
                              <span className="span-5">
                                <span data-custom-class="body_text">
                                  <span className="span-3">
                                    <span className="span-5">
                                      <span data-custom-class="body_text">
                                        <bdt className="statement-end-if-in-editor"></bdt>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div className="div-1">
              <span className="span-4">
                <span className="span-4">
                  <span data-custom-class="body_text">
                    <bdt className="block-component"></bdt>
                  </span>
                </span>
              </span>
              <div className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li className="div-1">
                  <span className="span-4">
                    <span className="span-4">
                      <span data-custom-class="body_text">
                        <strong>To deliver and facilitate delivery of services to the user.&nbsp;</strong>We may process your information to provide you with the requested service.
                        <span className="span-3">
                          <span className="span-5">
                            <span data-custom-class="body_text">
                              <span className="span-4">
                                <span className="span-4">
                                  <span data-custom-class="body_text">
                                    <span className="span-4">
                                      <span className="span-4">
                                        <span data-custom-class="body_text">
                                          <span className="span-4">
                                            <span className="span-4">
                                              <span data-custom-class="body_text">
                                                <span className="span-3">
                                                  <span className="span-5">
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <span className="span-5">
                                                          <span data-custom-class="body_text">
                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div className="div-1">
                <span className="span-4">
                  <span className="span-4">
                    <span data-custom-class="body_text">
                      <bdt className="block-component"></bdt>
                    </span>
                  </span>
                </span>
                <div className="div-1">
                  <span className="span-4">
                    <span className="span-4">
                      <span data-custom-class="body_text">
                        <bdt className="block-component"></bdt>
                      </span>
                    </span>
                  </span>
                </div>
                <ul>
                  <li className="div-1">
                    <span className="span-4">
                      <span className="span-4">
                        <span data-custom-class="body_text">
                          <strong>To respond to user inquiries/offer support to users.&nbsp;</strong>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                          <bdt className="statement-end-if-in-editor"></bdt>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="div-1">
                  <bdt className="block-component"><span className="span-3"></span></bdt>
                  <div className="div-1">
                    <bdt className="block-component"><span className="span-3"></span></bdt>
                  </div>
                  <ul>
                    <li className="div-1">
                      <span className="span-4">
                        <span className="span-4">
                          <span data-custom-class="body_text">
                            <strong>To send administrative information to you.&nbsp;</strong>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                            <span className="span-4">
                              <span className="span-4">
                                <span data-custom-class="body_text">
                                  <span className="span-4">
                                    <span className="span-4">
                                      <span data-custom-class="body_text">
                                        <bdt className="statement-end-if-in-editor"></bdt>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                  <div className="div-1">
                    <bdt className="block-component"><span className="span-3"></span></bdt>
                    <div className="div-1">
                      <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                    </div>
                    <ul>
                      <li className="div-1">
                        <span data-custom-class="body_text">
                          <span className="span-3">
                            <strong>
                              To
                              <bdt className="block-component"></bdt>
                              fulfill
                              <bdt className="statement-end-if-in-editor"></bdt>
                              and manage your orders.
                            </strong>
                            We may process your information to
                            <bdt className="block-component"></bdt>
                            fulfill
                            <bdt className="statement-end-if-in-editor"></bdt>
                            and manage your orders, payments, returns, and exchanges made through the Services.
                          </span>
                        </span>
                        <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                      </li>
                    </ul>
                    <p className="span-10">
                      <bdt className="block-component"><span className="span-3"></span></bdt>
                    </p>
                    <p className="span-10">
                      <bdt className="block-component"><span className="span-3"></span></bdt>
                    </p>
                    <ul>
                      <li className="div-1">
                        <span className="span-3">
                          <span className="span-5">
                            <span className="span-5">
                              <span data-custom-class="body_text">
                                <strong>To enable user-to-user communications.&nbsp;</strong>We may process your information if you choose to use any of our offerings that allow for communication with another user.
                                <span className="span-5">
                                  <span className="span-5">
                                    <span data-custom-class="body_text">
                                      <span className="span-5">
                                        <span data-custom-class="body_text">
                                          <span className="span-5">
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor"></bdt>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                    <p className="span-10">
                      <bdt className="block-component"></bdt>
                    </p>
                    <p className="span-10">
                      <bdt className="block-component"></bdt>
                    </p>
                    <ul>
                      <li className="div-1">
                        <span className="span-3">
                          <span className="span-5">
                            <span className="span-5">
                              <span data-custom-class="body_text">
                                <strong>To request feedback.&nbsp;</strong>We may process your information when necessary to request feedback and to contact you about your use of our Services.
                                <span className="span-5">
                                  <span className="span-5">
                                    <span data-custom-class="body_text">
                                      <span className="span-5">
                                        <span data-custom-class="body_text">
                                          <span className="span-5">
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor"></bdt>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                    <div className="div-1">
                      <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                      <div className="div-1">
                        <bdt className="block-component"><span className="span-3"></span></bdt>
                        <div className="div-1">
                          <bdt className="block-component"><span className="span-3"></span></bdt>
                          <div className="div-1">
                            <span className="span-3">
                              <bdt className="block-component"><span data-custom-class="body_text"></span></bdt>
                            </span>
                          </div>
                          <ul>
                            <li className="div-1">
                              <span className="span-3">
                                <span data-custom-class="body_text">
                                  <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display
                                  <bdt className="block-component"></bdt>
                                  personalized
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                  content and advertising tailored to your interests, location, and more.
                                  <bdt className="block-component"></bdt>
                                  For more information see our Cookie Notice:
                                  <bdt className="block-component"></bdt>
                                  <span className="span-6">
                                    <bdt className="question"><a href="https://mypg.gr/cookies" target="_blank" data-custom-class="link">https://mypg.gr/cookies</a></bdt>
                                  </span>
                                  <bdt className="block-component"></bdt>
                                  .
                                  <bdt className="statement-end-if-in-editor"></bdt>
                                </span>
                              </span>
                            </li>
                          </ul>
                          <div className="div-1">
                            <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                            <div className="div-1">
                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                              <div className="div-1">
                                <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                              </div>
                              <ul>
                                <li className="div-1">
                                  <span data-custom-class="body_text"><span className="span-3"><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</span></span>
                                  <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                </li>
                              </ul>
                              <div className="div-1">
                                <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                <div className="div-1">
                                  <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                  <div className="div-1">
                                    <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                    <div className="div-1">
                                      <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                      <div className="div-1">
                                        <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                        <div className="div-1">
                                          <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                          <div className="div-1">
                                            <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                            <div className="div-1">
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                            </div>
                                            <ul>
                                              <li className="div-1">
                                                <span data-custom-class="body_text"><span className="span-3"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</span></span>
                                                <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                              </li>
                                            </ul>
                                            <div className="div-1">
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                            </div>
                                            <div className="div-1"><br /></div>
                                            <div id="legalbases" className="div-1"><strong><span className="span-3"><span data-custom-class="heading_1">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</span></span></strong></div>
                                            <div className="div-1"><br /></div>
                                            <div className="div-1">
                                              <em>
                                                <span className="span-3">
                                                  <span data-custom-class="body_text">
                                                    <strong>In Short:&nbsp;</strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e.
                                                    <bdt className="block-component"></bdt>
                                                    ,
                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                    legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or
                                                    <bdt className="block-component"></bdt>
                                                    fulfill
                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                    our contractual obligations, to protect your rights, or to
                                                    <bdt className="block-component"></bdt>
                                                    fulfill
                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                    our legitimate business interests.
                                                  </span>
                                                </span>
                                              </em>
                                              <span className="span-3">
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component"></bdt>
                                                </span>
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component"></bdt>
                                                </span>
                                              </span>
                                            </div>
                                            <div className="div-1"><br /></div>
                                            <div className="div-1"><span className="span-3"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
                                            <ul>
                                              <li className="div-1">
                                                <span className="span-3">
                                                  <span data-custom-class="body_text">
                                                    <strong>Consent.&nbsp;</strong>We may process your information if you have given us permission (i.e.
                                                    <bdt className="block-component"></bdt>
                                                    ,
                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                    consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about&nbsp;
                                                  </span>
                                                </span>
                                                <a data-custom-class="link" href="#withdrawconsent"><span className="span-7"><span data-custom-class="body_text">withdrawing your consent</span></span></a><span data-custom-class="body_text">.</span>
                                              </li>
                                            </ul>
                                            <div className="div-1">
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                            </div>
                                            <ul>
                                              <li className="div-1">
                                                <span data-custom-class="body_text">
                                                  <span className="span-3">
                                                    <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to
                                                    <bdt className="block-component"></bdt>
                                                    fulfill
                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                    our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                                                  </span>
                                                </span>
                                                <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                              </li>
                                            </ul>
                                            <div className="div-1">
                                              <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                            </div>
                                            <ul>
                                              <li className="div-1"><span data-custom-class="body_text"><span className="span-3"><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:</span></span></li>
                                            </ul>
                                            <div className="div-1">
                                              <span data-custom-class="body_text">
                                                <span className="span-3">
                                                  <bdt className="block-component"></bdt>
                                                </span>
                                              </span>
                                              <div className="div-1">
                                                <span data-custom-class="body_text">
                                                  <span className="span-3">
                                                    <bdt className="block-component"></bdt>
                                                  </span>
                                                </span>
                                              </div>
                                              <ul className="ul-1">
                                                <li className="div-1">
                                                  <span data-custom-class="body_text">
                                                    <span className="span-3">
                                                      Develop and display
                                                      <bdt className="block-component"></bdt>
                                                      personalized
                                                      <bdt className="statement-end-if-in-editor"></bdt>
                                                      and relevant advertising content for our users
                                                      <bdt className="statement-end-if-in-editor"></bdt>
                                                    </span>
                                                  </span>
                                                </li>
                                              </ul>
                                              <div className="div-1">
                                                <span data-custom-class="body_text">
                                                  <span className="span-3">
                                                    <bdt className="block-component"></bdt>
                                                  </span>
                                                </span>
                                                <div className="div-1">
                                                  <span data-custom-class="body_text">
                                                    <span className="span-3">
                                                      <bdt className="block-component"></bdt>
                                                    </span>
                                                  </span>
                                                  <div className="div-1">
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <bdt className="block-component"></bdt>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul className="ul-1">
                                                    <li className="div-1">
                                                      <span data-custom-class="body_text">
                                                        <span className="span-3">
                                                          Diagnose problems and/or prevent fraudulent activities
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <bdt className="block-component"></bdt>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul className="ul-1">
                                                    <li className="div-1">
                                                      <span data-custom-class="body_text">
                                                        <span className="span-3">
                                                          Understand how our users use our products and services so we can improve user experience
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <bdt className="block-component"></bdt>
                                                      </span>
                                                    </span>
                                                    <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                    <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1">
                                                      <span data-custom-class="body_text">
                                                        <span className="span-3">
                                                          <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                          <br />
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1">
                                                      <span data-custom-class="body_text"><span className="span-3"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></span>
                                                      <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                    </li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                    <span data-custom-class="body_text">
                                                      <span className="span-3">
                                                        <bdt className="block-component">
                                                          <bdt className="block-component"></bdt>
                                                        </bdt>
                                                      </span>
                                                    </span>
                                                    <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                  </div>
                                                  <div className="div-1"><br /></div>
                                                  <div id="whoshare" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong></span></span></span></span></span></div>
                                                  <div className="div-1"><br /></div>
                                                  <div className="div-1">
                                                    <span className="span-4">
                                                      <span className="span-4">
                                                        <span data-custom-class="body_text">
                                                          <strong><em>In Short:</em></strong>
                                                          <em>
                                                            &nbsp;We may share information in specific situations described in this section and/or with the following
                                                            <bdt className="block-component"></bdt>
                                                            categories of
                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                            third parties.
                                                          </em>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="div-1">
                                                    <span className="span-4">
                                                      <span className="span-4">
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component"></bdt>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="div-1"><br /></div>
                                                  <div className="div-1">
                                                    <span className="span-3">
                                                      <span data-custom-class="body_text">
                                                        <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (
                                                        <bdt className="block-component"></bdt>
                                                        "<strong>third parties</strong>"
                                                        <bdt className="statement-end-if-in-editor"></bdt>
                                                        ) who perform services for us or on our behalf and require access to such information to do that work.
                                                        <bdt className="block-component"></bdt>
                                                        We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any
                                                        <bdt className="block-component"></bdt>
                                                        organization
                                                        <bdt className="statement-end-if-in-editor"></bdt>
                                                        apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                                                        <bdt className="statement-end-if-in-editor"></bdt>
                                                        The
                                                        <bdt className="block-component"></bdt>
                                                        categories of
                                                        <bdt className="statement-end-if-in-editor"></bdt>
                                                        third parties we may share personal information with are as follows:
                                                      </span>
                                                    </span>
                                                    <span className="span-4">
                                                      <span className="span-4">
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component"></bdt>
                                                          <bdt className="forloop-component"></bdt>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1">
                                                      <span className="span-4">
                                                        <span className="span-4">
                                                          <span data-custom-class="body_text">
                                                            <bdt className="question">Data Analytics Services</bdt>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div>
                                                    <span className="span-4">
                                                      <span className="span-4">
                                                        <span data-custom-class="body_text">
                                                          <span className="span-3">
                                                            <span className="span-5">
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <bdt className="block-component">
                                                                      <span className="span-4">
                                                                        <span className="span-4">
                                                                          <span data-custom-class="body_text">
                                                                            <bdt className="forloop-component"></bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1">
                                                      <span className="span-4">
                                                        <span className="span-4">
                                                          <span data-custom-class="body_text">
                                                            <bdt className="question">Ad Networks</bdt>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div>
                                                    <span className="span-4">
                                                      <span className="span-4">
                                                        <span data-custom-class="body_text">
                                                          <span className="span-3">
                                                            <span className="span-5">
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <bdt className="block-component">
                                                                      <span className="span-4">
                                                                        <span className="span-4">
                                                                          <span data-custom-class="body_text">
                                                                            <bdt className="forloop-component">
                                                                              <span className="span-4">
                                                                                <span className="span-4">
                                                                                  <span data-custom-class="body_text">
                                                                                    <span className="span-3">
                                                                                      <span className="span-5">
                                                                                        <span data-custom-class="body_text">
                                                                                          <span className="span-3">
                                                                                            <span className="span-5">
                                                                                              <span className="span-3">
                                                                                                <span className="span-5">
                                                                                                  <span className="span-3">
                                                                                                    <span className="span-5">
                                                                                                      <bdt className="statement-end-if-in-editor"></bdt>
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                              </span>
                                                                                            </span>
                                                                                          </span>
                                                                                        </span>
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component"></bdt>
                                                        </span>
                                                      </span>
                                                    </span>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <bdt className="block-component"></bdt>
                                                    <span data-custom-class="body_text"></span><span data-custom-class="body_text"></span><span data-custom-class="body_text"></span><span data-custom-class="body_text"></span>
                                                  </div>
                                                  <div className="div-1"><br /></div>
                                                  <div className="div-1">
                                                    <span className="span-3">
                                                      <span data-custom-class="body_text">
                                                        We
                                                        <bdt className="block-component"></bdt>
                                                        also
                                                        <bdt className="statement-end-if-in-editor"></bdt>
                                                        may need to share your personal information in the following situations:
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1"><span className="span-3"><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <bdt className="block-component"><span className="span-3"></span></bdt>
                                                  </div>
                                                  <ul>
                                                    <li className="div-1">
                                                      <span className="span-3">
                                                        <strong><span data-custom-class="body_text">When we use Google Analytics.</span></strong>
                                                        <span data-custom-class="body_text">
                                                          &nbsp;We may share your information with Google Analytics to track and analyze the use of the Services.
                                                          <bdt className="block-component"></bdt>
                                                          The Google Analytics Advertising Features that we may use include:
                                                          <bdt className="forloop-component"></bdt>
                                                          <bdt className="block-component"></bdt>
                                                          <bdt className="question">Remarketing with Google Analytics</bdt>
                                                          <bdt className="block-component"></bdt>
                                                          <bdt className="forloop-component"></bdt>
                                                          <bdt className="block-component"></bdt>
                                                          ,
                                                          <bdt className="question">Google Display Network Impressions Reporting</bdt>
                                                          <bdt className="else-block"></bdt>
                                                          <bdt className="forloop-component"></bdt>
                                                          <bdt className="block-component"></bdt>
                                                          and
                                                          <bdt className="question">Google Analytics Demographics and Interests Reporting</bdt>
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                          <bdt className="forloop-component"></bdt>
                                                          .
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                          To opt out of being tracked by Google Analytics across the Services, visit <span className="span-6"><a data-custom-class="link" href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">https://tools.google.com/dlpage/gaoptout</a></span>.
                                                          <bdt className="block-component"></bdt>
                                                          You can opt out of Google Analytics Advertising Features through <span className="span-6"><a data-custom-class="link" href="https://adssettings.google.com/" rel="noopener noreferrer" target="_blank">Ads Settings</a></span> and Ad Settings for mobile apps. Other opt out means include <span className="span-6"><a data-custom-class="link" href="http://optout.networkadvertising.org/" rel="noopener noreferrer" target="_blank">http://optout.networkadvertising.org/</a></span> and <span className="span-6"><a data-custom-class="link" href="http://www.networkadvertising.org/mobile-choice" rel="noopener noreferrer" target="_blank">http://www.networkadvertising.org/mobile-choice</a></span>.
                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                          For more information on the privacy practices of Google, please visit the <span className="span-6"><a data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy &amp; Terms page</a></span>.
                                                        </span>
                                                      </span>
                                                      <bdt className="statement-end-if-in-editor"><span className="span-3"></span></bdt>
                                                    </li>
                                                  </ul>
                                                  <div className="div-1">
                                                    <span className="span-3">
                                                      <span data-custom-class="body_text">
                                                        <bdt className="block-component"></bdt>
                                                      </span>
                                                    </span>
                                                    <div className="div-1">
                                                      <span className="span-3">
                                                        <bdt className="block-component"><span data-custom-class="body_text"></span></bdt>
                                                      </span>
                                                      <div className="div-1">
                                                        <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                      </div>
                                                      <ul>
                                                        <li className="div-1">
                                                          <span data-custom-class="body_text"><span className="span-3"><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</span></span>
                                                          <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                        </li>
                                                      </ul>
                                                      <div className="div-1">
                                                        <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                        <div className="div-1">
                                                          <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                          <span data-custom-class="body_text">
                                                            <span className="span-3">
                                                              <bdt className="block-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span data-custom-class="body_text">
                                                              <span className="span-3">
                                                                <strong>Offer Wall.&nbsp;</strong>Our application(s) may display a third-party hosted
                                                                <bdt className="block-component"></bdt>
                                                                "offer wall."
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                              </span>
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                          <span className="span-4">
                                                            <span className="span-3">
                                                              <span className="span-5">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <bdt className="block-component"><span data-custom-class="heading_1"></span></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="cookies" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice
                                                                <span className="span-4">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </span>
                                                                :
                                                                <span className="span-7">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="question"><a href="https://mypg.gr/cookies" target="_blank" data-custom-class="link">https://mypg.gr/cookies</a></bdt>
                                                                  </span>
                                                                </span>
                                                                <span className="span-4">
                                                                  <bdt className="block-component"></bdt>
                                                                  .
                                                                </span>
                                                                <span className="span-4">
                                                                  <span className="span-3">
                                                                    <span className="span-5">
                                                                      <span className="span-3">
                                                                        <span className="span-5">
                                                                          <span data-custom-class="body_text">
                                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                            <span data-custom-class="body_text">
                                                              <span className="span-4">
                                                                <span className="span-4">
                                                                  <span className="span-4">
                                                                    <span className="span-3">
                                                                      <span className="span-5">
                                                                        <span className="span-3">
                                                                          <span className="span-5">
                                                                            <span data-custom-class="body_text">
                                                                              <bdt className="block-component"></bdt>
                                                                            </span>
                                                                            <bdt className="block-component">
                                                                              <span data-custom-class="body_text">
                                                                                <bdt className="block-component"></bdt>
                                                                              </span>
                                                                            </bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="inforetain" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <strong><em>In Short:&nbsp;</em></strong>
                                                                <em>
                                                                  We keep your information for as long as necessary to
                                                                  <bdt className="block-component"></bdt>
                                                                  fulfill
                                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                                  the purposes outlined in this privacy notice unless otherwise required by law.
                                                                </em>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                                                                <bdt className="block-component"></bdt>
                                                                No purpose in this notice will require us keeping your personal information for longer than
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <span data-custom-class="body_text">
                                                                      <bdt className="block-component"></bdt>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                                <bdt className="block-component"></bdt>
                                                                the period of time in which users have an account with us
                                                                <bdt className="block-component"></bdt>
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <span data-custom-class="body_text">
                                                                      <bdt className="else-block"></bdt>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                                .
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                When we have no ongoing legitimate business need to process your personal information, we will either delete or
                                                                <bdt className="block-component"></bdt>
                                                                anonymize
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                                                <span className="span-5">
                                                                  <bdt className="block-component"></bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="infosafe" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <strong><em>In Short:&nbsp;</em></strong>
                                                                <em>
                                                                  We aim to protect your personal information through a system of
                                                                  <bdt className="block-component"></bdt>
                                                                  organizational
                                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                                  and technical security measures.
                                                                </em>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                We have implemented appropriate and reasonable technical and
                                                                <bdt className="block-component"></bdt>
                                                                organizational
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
                                                                <bdt className="block-component"></bdt>
                                                                unauthorized
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                                                <span className="span-5">
                                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                                </span>
                                                                <span className="span-4">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="privacyrights" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">8. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <strong><em>In Short:</em></strong>
                                                                <em>
                                                                  &nbsp;
                                                                  <span className="span-5">
                                                                    <span className="span-3">
                                                                      <span data-custom-class="body_text">
                                                                        <em>
                                                                          <bdt className="block-component"></bdt>
                                                                        </em>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  In some regions, such as
                                                                  <bdt className="block-component"></bdt>
                                                                  the European Economic Area (EEA), United Kingdom (UK), and Switzerland
                                                                  <bdt className="block-component"></bdt>
                                                                  , you have rights that allow you greater access to and control over your personal information.
                                                                  <span className="span-5">
                                                                    <span className="span-3">
                                                                      <span data-custom-class="body_text">
                                                                        <em>
                                                                          <bdt className="statement-end-if-in-editor"></bdt>
                                                                        </em>
                                                                      </span>
                                                                    </span>
                                                                    &nbsp;
                                                                  </span>
                                                                  You may review, change, or terminate your account at any time.
                                                                </em>
                                                                <span className="span-5">
                                                                  <span className="span-3">
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                In some regions (like
                                                                <bdt className="block-component"></bdt>
                                                                the EEA, UK, and Switzerland
                                                                <bdt className="block-component"></bdt>
                                                                ), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section
                                                                <bdt className="block-component"></bdt>
                                                                "
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          <a data-custom-class="link" href="#contact"><span className="span-7"><span className="span-7"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <bdt className="block-component"></bdt>
                                                                "
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                below.
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                We will consider and act upon any request in accordance with applicable data protection laws.
                                                                <bdt className="block-component"></bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-4">&nbsp;</span></div>
                                                        <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <span className="span-3"><span className="span-6"><span data-custom-class="body_text"><span className="span-6"><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span className="span-3">Member State data protection authority</span></a></span></span></span></span></span> or&nbsp;</span></span></span><a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank"><span className="span-7"><span className="span-7"><span data-custom-class="body_text">UK data protection authority</span></span></span></a><span className="span-4"><span className="span-4"><span data-custom-class="body_text">.</span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text">If you are located in Switzerland, you may contact the <span className="span-3"><span className="span-6"><span data-custom-class="body_text"><span className="span-6"><span data-custom-class="body_text"><span className="span-7"><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a></span></span></span></span></span></span>.</span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="withdrawconsent" className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information,
                                                                <bdt className="block-component"></bdt>
                                                                <bdt className="else-block"></bdt>
                                                                you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section
                                                                <bdt className="block-component"></bdt>
                                                                "
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          <a data-custom-class="link" href="#contact"><span className="span-7"><span className="span-7"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a>
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <bdt className="block-component"></bdt>
                                                                "
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                below
                                                                <bdt className="block-component"></bdt>
                                                                or updating your preferences
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                .
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
                                                              <bdt className="block-component"></bdt>
                                                              <bdt className="else-block"></bdt>
                                                              will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                                                              <bdt className="block-component"></bdt>
                                                            </span>
                                                          </span>
                                                          <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1"><span className="span-3"><span data-custom-class="heading_2"><strong>Account Information</strong></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span data-custom-class="body_text">
                                                            <span className="span-3">
                                                              If you would at any time like to review or change the information in your account or terminate your account, you can:
                                                              <bdt className="forloop-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span data-custom-class="body_text">
                                                              <span className="span-3">
                                                                <bdt className="question">Contact us using the contact information provided.</bdt>
                                                              </span>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span data-custom-class="body_text">
                                                            <span className="span-3">
                                                              <bdt className="forloop-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span data-custom-class="body_text">
                                                              <span className="span-3">
                                                                <bdt className="question">Log in to your account settings and update your user account.</bdt>
                                                              </span>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span data-custom-class="body_text">
                                                            <span className="span-3">
                                                              <bdt className="forloop-component"></bdt>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1">
                                                          <span className="span-3"><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></span>
                                                          <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <span className="span-3">
                                                                      <span className="span-5">
                                                                        <span data-custom-class="body_text">
                                                                          <span className="span-3">
                                                                            <span className="span-5">
                                                                              <bdt className="block-component"></bdt>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                                                                <bdt className="block-component">
                                                                  <span className="span-3">
                                                                    <span className="span-5">
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component"></bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  For further information, please see our Cookie Notice:
                                                                  <span className="span-3">
                                                                    <span className="span-5">
                                                                      <span data-custom-class="body_text">
                                                                        <span className="span-6">
                                                                          <bdt className="question"><a href="https://mypg.gr/cookies" target="_blank" data-custom-class="link">https://mypg.gr/cookies</a></bdt>
                                                                        </span>
                                                                        .
                                                                        <bdt className="block-component"></bdt>
                                                                        <span className="span-3">
                                                                          <span className="span-5">
                                                                            <span className="span-3">
                                                                              <span className="span-5">
                                                                                <span className="span-3">
                                                                                  <span className="span-5">
                                                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          <bdt className="block-component"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span data-custom-class="body_text">
                                                            <span className="span-3">
                                                              If you have questions or comments about your privacy rights, you may email us at
                                                              <bdt className="question">privacy@mypg.gr</bdt>
                                                              .
                                                            </span>
                                                          </span>
                                                          <bdt className="statement-end-if-in-editor"><span className="span-3"><span data-custom-class="body_text"></span></span></bdt>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="DNT" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (
                                                                <bdt className="block-component"></bdt>
                                                                "DNT"
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                ) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for
                                                                <bdt className="block-component"></bdt>
                                                                recognizing
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                and implementing DNT signals has been
                                                                <bdt className="block-component"></bdt>
                                                                finalized
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                . As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                                                                <bdt className="block-component"></bdt>
                                                              </span>
                                                            </span>
                                                          </span>
                                                          <bdt className="block-component"><span className="span-3"></span></bdt>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1"><span id="otherlaws" className="span-3"><strong><span data-custom-class="heading_1">10. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <em><strong><span data-custom-class="body_text">In Short:</span></strong><span data-custom-class="body_text">&nbsp;You may have additional rights based on the country you reside in.</span></em>
                                                            <bdt className="block-component"></bdt>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <bdt className="block-component"><span data-custom-class="heading_2"></span></bdt>
                                                            <span data-custom-class="heading_2">
                                                              <strong>Australia</strong>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              <strong>and</strong>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              <strong>New Zealand</strong>
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor"><span data-custom-class="heading_2"></span></bdt>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              We collect and process your personal information under the obligations and conditions set by
                                                              <bdt className="block-component"></bdt>
                                                              Australia's Privacy Act 1988
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              and
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              New Zealand's Privacy Act 2020
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              (Privacy Act).
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              This privacy notice satisfies the notice requirements defined in
                                                              <bdt className="block-component"></bdt>
                                                              both Privacy Acts
                                                              <bdt className="block-component"></bdt>
                                                              , in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1"><span className="span-3"><span data-custom-class="body_text">If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</span></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <bdt className="block-component"></bdt>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span className="span-3">
                                                              <span data-custom-class="body_text">offer you the products or services that you want</span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <bdt className="block-component"></bdt>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span className="span-3">
                                                              <span data-custom-class="body_text">respond to or help with your requests</span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <bdt className="block-component"></bdt>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span className="span-3">
                                                              <span data-custom-class="body_text">manage your account with us</span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <bdt className="block-component"></bdt>
                                                          </span>
                                                        </div>
                                                        <ul>
                                                          <li className="div-1">
                                                            <span className="span-3">
                                                              <span data-custom-class="body_text">confirm your identity and protect your account</span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </li>
                                                        </ul>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section
                                                              <bdt className="block-component"></bdt>
                                                              "
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <a data-custom-class="link" href="#request"><span className="span-6"><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></span></a>
                                                              <bdt className="block-component"></bdt>
                                                              "
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            I
                                                            <span data-custom-class="body_text">
                                                              f you believe we are unlawfully processing your personal information, you have the right to submit a complaint about
                                                              <bdt className="block-component"></bdt>
                                                              a breach of the Australian Privacy Principles to the <a data-custom-class="link" href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us" rel="noopener noreferrer" target="_blank"><span className="span-6"><span data-custom-class="link">Office of the Australian Information Commissioner</span></span></a>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              and
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <bdt className="block-component"></bdt>
                                                              a breach of New Zealand's Privacy Principles to the <a data-custom-class="link" href="https://www.privacy.org.nz/your-rights/making-a-complaint/" rel="noopener noreferrer" target="_blank"><span className="span-6"><span data-custom-class="link">Office of New Zealand Privacy Commissioner</span></span></a>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              .
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                          </span>
                                                          <bdt className="block-component"><span className="span-3"></span></bdt>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1"><span className="span-3"><strong><span data-custom-class="heading_2">Republic of South Africa</span></strong></span></div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section
                                                              <bdt className="block-component"></bdt>
                                                              "
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                          </span>
                                                          <span data-custom-class="link"><a href="#request"><span className="span-7"><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></span></a></span>
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              <bdt className="block-component"></bdt>
                                                              "
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1"><span className="span-3"><span data-custom-class="body_text">If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:</span></span></div>
                                                        <div className="div-1"><span className="span-3"><br /></span></div>
                                                        <div className="div-1"><a data-custom-class="link" href="https://inforegulator.org.za/" rel="noopener noreferrer" target="_blank"><span className="span-7"><span data-custom-class="body_text"><span data-custom-class="link">The Information Regulator (South Africa)</span></span></span></a></div>
                                                        <div className="div-1"><span data-custom-class="body_text"><span className="span-3">General enquiries:&nbsp;</span><a data-custom-class="link" href="mailto:enquiries@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span className="span-7"><span data-custom-class="link">enquiries@inforegulator.org.za</span></span></a></span></div>
                                                        <div className="div-1">
                                                          <span data-custom-class="body_text"><span className="span-3">Complaints (complete POPIA/PAIA form 5):&nbsp;</span><a data-custom-class="link" href="mailto:PAIAComplaints@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span className="span-7"><span data-custom-class="link">PAIAComplaints@inforegulator.org.za</span></span></a><span className="span-3">&nbsp;&amp;&nbsp;</span></span><a data-custom-class="link" href="mailto:POPIAComplaints@inforegulator.org.za" rel="noopener noreferrer" target="_blank"><span className="span-7"><span data-custom-class="body_text"><span data-custom-class="link">POPIAComplaints@inforegulator.org.za</span></span></span></a>
                                                          <span className="span-3">
                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                          </span>
                                                          <bdt className="block-component"><span className="span-3"></span></bdt>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="policyupdates" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1"><span className="span-4"><span className="span-4"><span data-custom-class="body_text"><em><strong>In Short:&nbsp;</strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                We may update this privacy notice from time to time. The updated version will be indicated by an updated
                                                                <bdt className="block-component"></bdt>
                                                                "Revised"
                                                                <bdt className="statement-end-if-in-editor"></bdt>
                                                                date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="contact" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                If you have questions or comments about this notice, you may
                                                                <span className="span-4">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component">
                                                                      <bdt className="block-component"></bdt>
                                                                    </bdt>
                                                                    email us at
                                                                    <bdt className="question">privacy@mypg.gr or&nbsp;</bdt>
                                                                    <bdt className="statement-end-if-in-editor">
                                                                      <bdt className="block-component"></bdt>
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                                <span className="span-4"><span className="span-4"><span data-custom-class="body_text">contact us by post at:</span></span></span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <span className="span-3">
                                                                  <span className="span-5">
                                                                    <span className="span-5">
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="question">MyPG Inc.</bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <span data-custom-class="body_text">
                                                                <span className="span-5">
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              <bdt className="question">Patmou 1</bdt>
                                                              <span className="span-5">
                                                                <span className="span-3">
                                                                  <bdt className="block-component"></bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              <bdt className="question">ALimos</bdt>
                                                              <span className="span-5">
                                                                <span className="span-3">
                                                                  <bdt className="block-component"></bdt>
                                                                  ,
                                                                  <bdt className="question">Athens</bdt>
                                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                                  <bdt className="block-component"></bdt>
                                                                  <bdt className="question">17456</bdt>
                                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                                  <bdt className="block-component"></bdt>
                                                                  <bdt className="block-component"></bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1">
                                                          <span className="span-3">
                                                            <span data-custom-class="body_text">
                                                              <span className="span-3">
                                                                <span data-custom-class="body_text">
                                                                  <span className="span-5">
                                                                    <bdt className="block-component"></bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <bdt className="question">Greece</bdt>
                                                              <span className="span-3">
                                                                <span data-custom-class="body_text">
                                                                  <span className="span-5">
                                                                    <bdt className="statement-end-if-in-editor">
                                                                      <span className="span-3">
                                                                        <span data-custom-class="body_text">
                                                                          <span className="span-5">
                                                                            <bdt className="statement-end-if-in-editor">
                                                                              <span className="span-3">
                                                                                <span data-custom-class="body_text">
                                                                                  <span className="span-5">
                                                                                    <bdt className="statement-end-if-in-editor"></bdt>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </bdt>
                                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                      <span data-custom-class="body_text">
                                                                        <span className="span-5">
                                                                          <span className="span-3">
                                                                            <bdt className="statement-end-if-in-editor"></bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                            <span data-custom-class="body_text">
                                                              <span className="span-3">
                                                                <span data-custom-class="body_text">
                                                                  <span className="span-5">
                                                                    <bdt className="statement-end-if-in-editor">
                                                                      <span className="span-5">
                                                                        <span className="span-3">
                                                                          <span data-custom-class="body_text">
                                                                            <bdt className="block-component">
                                                                              <bdt className="block-component"></bdt>
                                                                            </bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <bdt className="block-component"><span className="span-3"></span></bdt>
                                                              <span className="span-3">
                                                                <span data-custom-class="body_text">
                                                                  <span className="span-4">
                                                                    <span className="span-3">
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="statement-end-if-in-editor">
                                                                          <bdt className="block-component"></bdt>
                                                                        </bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </div>
                                                        <div className="div-1"><br /></div>
                                                        <div id="request" className="div-1"><span className="span-2"><span className="span-4"><span className="span-4"><span className="span-4"><span id="control" className="span-8"><strong><span data-custom-class="heading_1">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong></span></span></span></span></span></div>
                                                        <div className="div-1"><br /></div>
                                                        <div className="div-1">
                                                          <span className="span-4">
                                                            <span className="span-4">
                                                              <span data-custom-class="body_text">
                                                                <bdt className="block-component"></bdt>
                                                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it.
                                                                <bdt className="else-block">
                                                                  <bdt className="block-component"></bdt>
                                                                  To request to review, update, or delete your personal information, please
                                                                  <bdt className="block-component"></bdt>
                                                                  fill out and submit a&nbsp;
                                                                </bdt>
                                                              </span>
                                                              <span className="span-6"><span data-custom-class="body_text"><span className="span-7"><a data-custom-class="link" href="https://app.termly.io/notify/ff078788-d149-44a3-8051-8169eb7d7605" rel="noopener noreferrer" target="_blank">data subject access request</a></span></span></span>
                                                              <bdt className="block-component"><span data-custom-class="body_text"></span></bdt>
                                                            </span>
                                                          </span>
                                                          <span data-custom-class="body_text">.</span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
