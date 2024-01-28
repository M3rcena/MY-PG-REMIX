import React from 'react';

import { Helmet } from 'react-helmet';
import featureStylesHref from '../assets/features/css/index.css';
import indexStylesHref from "../styles/index.css"
import { Link, useNavigate } from '@remix-run/react';
import animationStyleHref from '../assets/features/wp-content/plugins/elementor/assets/lib/animations/animations.min.css';
// import elementorFrontendHref from '../assets/features/wp-content/plugins/elementor/assets/css/frontend-lite.min.css';
// import eaelGeneralHref from '../assets/features/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css';
// import eael1261Href from '../assets/features/wp-content/uploads/essential-addons-elementor/eael-1261.css';
// import eael1264Href from '../assets/features/wp-content/uploads/essential-addons-elementor/eael-1264.css';
// import easyjobsowlHref from '../assets/features/wp-content/plugins/easyjobs/public/assets/vendor/owl.carousel.min.css';
// import easyjobsHref from '../assets/features/wp-content/plugins/easyjobs/public/assets/dist/css/easyjobs-public.min.css';
// import flexiaHref from '../assets/features/wp-content/themes/flexia/framework/assets/site/css/flexia.min.css';
// import eael1272Href from '../assets/features/wp-content/uploads/essential-addons-elementor/eael-1272.css';
// import elementorIconsHref from '../assets/features/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css';
// import swiperHref from '../assets/features/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.css';
// import elementorPost7Href from '../assets/features/wp-content/plugins/elementor/assets/css/post-7.css';
// import elementorProHref from '../assets/features/wp-content/plugins/elementor-pro/assets/css/frontend.min.css';
// import elementorGlobalHref from '../assets/features/wp-content/plugins/elementor/assets/css/global.css';
// import fluentFormElementorWidgetHref from '../assets/features/wp-content/plugins/fluentform/css/elementor-widget.css';
// import elementorPost1272Href from '../assets/features/wp-content/plugins/elementor/assets/css/post-1272.css';
// import elementorPost1261Href from '../assets/features/wp-content/plugins/elementor/assets/css/post-1261.css';
// import elementorPost1264Href from '../assets/features/wp-content/plugins/elementor/assets/css/post-1264.css';
// import elementorIconsShared0Href from '../assets/features/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css';
// import elementorIconsFaSolidHref from '../assets/features/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css';

export const links = () => {
  return [
    { rel: 'stylesheet', href: featureStylesHref },
    { rel: 'stylesheet', href: indexStylesHref },
    { rel: 'stylesheet', href: animationStyleHref },
    // { rel: 'stylesheet', href: elementorFrontendHref },
    // { rel: 'stylesheet', href: eaelGeneralHref },
    // { rel: 'stylesheet', href: eael1261Href },
    // { rel: 'stylesheet', href: eael1264Href },
    // { rel: 'stylesheet', href: easyjobsowlHref },
    // { rel: 'stylesheet', href: easyjobsHref },
    // { rel: 'stylesheet', href: flexiaHref },
    // { rel: 'stylesheet', href: eael1272Href },
    // { rel: 'stylesheet', href: elementorIconsHref },
    // { rel: 'stylesheet', href: swiperHref },
    // { rel: 'stylesheet', href: elementorPost7Href },
    // { rel: 'stylesheet', href: elementorProHref },
    // { rel: 'stylesheet', href: elementorGlobalHref },
    // { rel: 'stylesheet', href: fluentFormElementorWidgetHref },
    // { rel: 'stylesheet', href: elementorPost1272Href },
    // { rel: 'stylesheet', href: elementorPost1261Href },
    // { rel: 'stylesheet', href: elementorPost1264Href },
    // { rel: 'stylesheet', href: elementorIconsShared0Href },
    // { rel: 'stylesheet', href: elementorIconsFaSolidHref },
  ]
};

export default function Features() {

  const elementorStyles = `
    .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {
      background-color: #69727d;
      color: #fff;
    }

    .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {
      color: #69727d;
      border: 3px solid;
      background-color: transparent;
    }

    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {
      margin-top: 8px;
    }

    .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {
      width: 1em;
      height: 1em;
    }

    .elementor-widget-text-editor .elementor-drop-cap {
      float: left;
      text-align: center;
      line-height: 1;
      font-size: 50px;
    }

    .elementor-widget-text-editor .elementor-drop-cap-letter {
      display: inline-block;
    }
  `;

  let navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <Helmet>
          <title>MyPG | My Playground</title>
          <meta property="og:title" content="EPAL ALIMOU" />
        </Helmet>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">MY PG</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span><Link to="/">Home</Link></span>
                <span className="home-nav2"><Link to="/about">About</Link></span>
                <span className="home-nav3"><Link to="/features">Features</Link></span>
                <span className="home-nav4"><Link to="/parties">Parties</Link></span>
                <span className="home-nav5"><Link to="/discounts">Discounts</Link></span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button"><Link to="/login">Login</Link></button>
                <button className="home-register button"><Link to="/register">Register</Link></button>
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
                  <span className="home-logo1"><Link to="/">MY PG</Link></span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11"><Link to="/">Home</Link></span>
                  <span className="home-nav21"><Link to="/about">About</Link></span>
                  <span className="home-nav31"><Link to="/features">Features</Link></span>
                  <span className="home-nav41"><Link to="/parties">Parties</Link></span>
                  <span className="home-nav51"><Link to="/discount">Discounts</Link></span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button"><Link to="/login">Login</Link></button>
                  <button className="home-register1 button"><Link to="/register">Register</Link></button>
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
        <div className="page-template page-template-elementor_header_footer page page-id-1272 page-child parent-pageid-1076 flexia-2.3.1 elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-1272">
          <div id="page" className="site">
            <div data-elementor-type="wp-page" data-elementor-id="1272" className="elementor elementor-1272"
              data-elementor-post-type="page">
              <section data-particle_enable="false" data-particle-mobile-disabled="false"
                className="elementor-section elementor-top-section elementor-element elementor-element-5b2274e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="5b2274e" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-13de07b"
                    data-id="13de07b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-4c766e5 elementor-widget__width-auto elementor-absolute elementor-invisible elementor-widget elementor-widget-image"
                        data-id="4c766e5" data-element_type="widget"
                        data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_effect&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.3,&quot;sizes&quot;:[]},&quot;_animation&quot;:&quot;zoomIn&quot;,&quot;_position&quot;:&quot;absolute&quot;}"
                        data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img decoding="async" width="100" height="100" src="./assets/img/shape-4.png"
                            className="attachment-full size-full wp-image-1090 wp-stateless-item" alt=""
                            data-image-size="full" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6c5cb98 elementor-widget__width-auto elementor-absolute elementor-invisible elementor-widget elementor-widget-image"
                        data-id="6c5cb98" data-element_type="widget"
                        data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_effect&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_direction&quot;:&quot;negative&quot;,&quot;motion_fx_mouseTrack_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.3,&quot;sizes&quot;:[]},&quot;_animation&quot;:&quot;zoomIn&quot;,&quot;_position&quot;:&quot;absolute&quot;}"
                        data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img decoding="async" width="100" height="100" src="./assets/img/shape-1.png"
                            className="attachment-full size-full wp-image-1093 wp-stateless-item" alt=""
                            data-image-size="full" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-bc0f8ac elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-heading"
                        data-id="bc0f8ac" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">The Only App You’ll Need
                            To Power Up Your Life</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-particle_enable="false" data-particle-mobile-disabled="false"
                className="elementor-section elementor-top-section elementor-element elementor-element-00de996 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="00de996" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ab1ce05"
                    data-id="ab1ce05" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section data-particle_enable="false" data-particle-mobile-disabled="false"
                        className="elementor-section elementor-inner-section elementor-element elementor-element-cd3176a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="cd3176a" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7466577"
                            data-id="7466577" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-3bc7c7b eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="3bc7c7b" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48"
                                          height="48" viewBox="0 0 48 48" fill="none">
                                          <path
                                            d="M18.8571 0H1.71429C0.766753 0 0 0.766753 0 1.71429V18.8571C0 19.8047 0.766753 20.5714 1.71429 20.5714H18.8571C19.8047 20.5714 20.5714 19.8047 20.5714 18.8571V13.7143V1.71429C20.5714 0.766753 19.8047 0 18.8571 0ZM17.1429 17.1429H3.42857V3.42857H17.1429V17.1429Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M18.8571 27.4286H1.71429C0.766753 27.4286 0 28.1953 0 29.1429V46.2857C0 47.2333 0.766753 48 1.71429 48H18.8571C19.8047 48 20.5714 47.2333 20.5714 46.2857V29.1429C20.5714 28.1953 19.8047 27.4286 18.8571 27.4286ZM17.1429 44.5714H3.42857V30.8572H17.1429V44.5714Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M46.2859 27.4286H34.2859H29.143C28.1955 27.4286 27.4287 28.1953 27.4287 29.1429V46.2857C27.4287 47.2333 28.1955 48 29.143 48H46.2859C47.2334 48 48.0001 47.2333 48.0001 46.2857V29.1429C48.0001 28.1953 47.2334 27.4286 46.2859 27.4286ZM44.5716 44.5714H30.8573V30.8572H44.5716V44.5714Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M47.4976 14.9263C48.1672 14.2567 48.1672 13.1718 47.4976 12.5022L35.4976 0.502208C34.828 -0.167403 33.7431 -0.167403 33.0735 0.502208L21.0735 12.5022C20.7387 12.8371 20.5713 13.2756 20.5713 13.7143C20.5713 14.1529 20.7387 14.5915 21.0735 14.9263L33.0735 26.9263C33.4084 27.2612 33.8469 27.4285 34.2856 27.4285C34.7242 27.4285 35.1628 27.2612 35.4976 26.9263L47.4976 14.9263ZM24.7097 13.7143L34.2856 4.13836L43.8615 13.7143L34.2856 23.2902L24.7097 13.7143Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">User Friendly</h4>
                                      <p>AppMart brings you smooth, easy-to-use interfaces that
                                        can be operated with just a few taps.</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5b1de50"
                            data-id="5b1de50" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-2df2a7b eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="2df2a7b" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="53"
                                          height="53" viewBox="0 0 53 53" fill="none">
                                          <path
                                            d="M51.9408 3.88204C51.8281 1.81639 50.1853 0.173767 48.1197 0.0610286C43.9516 -0.166682 35.7955 0.0548332 27.9964 4.08872C24.0206 6.14523 19.8158 9.63188 16.4602 13.6547C16.4188 13.7043 16.3786 13.7541 16.3376 13.8038L8.72219 14.3921C7.46867 14.489 6.35215 15.146 5.65887 16.1946L0.463369 24.0529C-0.0624376 24.8482 -0.146026 25.8434 0.239619 26.7151C0.625366 27.587 1.41799 28.1946 2.36001 28.3405L8.77602 29.3342C8.75337 29.459 8.73062 29.5836 8.7098 29.7083C8.49621 30.986 8.91954 32.2996 9.84236 33.2224L18.7793 42.1595C19.5444 42.9245 20.5783 43.3464 21.6376 43.3464C21.8558 43.3464 22.0752 43.3284 22.2935 43.2919C22.4182 43.2711 22.5429 43.2483 22.6676 43.2257L23.6613 49.6418C23.8073 50.5838 24.4148 51.3766 25.2865 51.7622C25.6492 51.9227 26.033 52.0019 26.4151 52.0019C26.9516 52.0018 27.4844 51.8456 27.9488 51.5385L35.8072 46.3429C36.8558 45.6496 37.5127 44.533 37.6094 43.2796L38.1977 35.6643C38.2474 35.6233 38.2973 35.5831 38.3469 35.5417C42.3698 32.1861 45.8566 27.9813 47.913 24.0054C51.9471 16.206 52.1682 8.04979 51.9408 3.88204V3.88204ZM34.1267 43.8012L26.6098 48.7711L25.6412 42.5182C28.8182 41.5841 31.961 40.088 34.955 38.0838L34.5718 43.0448C34.5479 43.3543 34.3856 43.63 34.1267 43.8012V43.8012ZM20.9339 40.0049L11.9968 31.0679C11.7688 30.8397 11.6633 30.5193 11.715 30.2106C11.9807 28.6218 12.3936 27.1094 12.9047 25.6847L26.3142 39.0942C24.603 39.7071 23.0703 40.0728 21.7911 40.2867C21.4819 40.3381 21.1619 40.233 20.9339 40.0049V40.0049ZM8.95691 17.43L13.9178 17.0468C11.9135 20.0409 10.4174 23.1836 9.48333 26.3606L3.23053 25.3922L8.20055 17.8751C8.37179 17.6161 8.64754 17.4539 8.95691 17.43V17.43ZM36.3954 33.2018C33.9342 35.2547 31.545 36.7396 29.3429 37.8141L14.1871 22.6583C15.5946 19.7836 17.3124 17.3898 18.8 15.6065C21.9053 11.8836 25.7676 8.67198 29.3964 6.79505C36.5542 3.09267 44.0955 2.89329 47.9538 3.10333C48.4645 3.13116 48.8707 3.53732 48.8985 4.0481C49.1088 7.90638 48.909 15.4476 45.2067 22.6055C43.3298 26.2342 40.1182 30.0964 36.3954 33.2018Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M35.6211 23.9942C37.5714 23.994 39.5225 23.2516 41.0073 21.7668C42.4461 20.3281 43.2383 18.4152 43.2383 16.3806C43.2383 14.3461 42.446 12.4332 41.0073 10.9945C38.0373 8.0244 33.2048 8.0246 30.235 10.9945C28.7962 12.4332 28.0039 14.3461 28.0039 16.3806C28.0039 18.4152 28.7963 20.3281 30.235 21.7668C31.7201 23.2519 33.6702 23.9944 35.6211 23.9942ZM32.3893 13.1489C33.2803 12.2579 34.4506 11.8124 35.6209 11.8124C36.7914 11.8124 37.9617 12.2579 38.8527 13.1489C39.7159 14.0121 40.1912 15.1598 40.1912 16.3805C40.1912 17.6012 39.7159 18.749 38.8527 19.6122C37.0708 21.3942 34.1712 21.3941 32.3892 19.6122C31.526 18.749 31.0506 17.6013 31.0506 16.3806C31.0506 15.1599 31.5261 14.0121 32.3893 13.1489Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M1.55371 42.8545C1.94362 42.8545 2.33353 42.7058 2.63092 42.4082L7.6049 37.4342C8.19987 36.8392 8.19987 35.8747 7.6049 35.2797C7.01003 34.6847 6.04536 34.6847 5.45038 35.2797L0.476503 40.2537C-0.11847 40.8486 -0.11847 41.8132 0.476503 42.4082C0.773888 42.7057 1.1638 42.8545 1.55371 42.8545V42.8545Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M12.1636 39.8381C11.5687 39.2431 10.604 39.2431 10.0091 39.8381L0.446229 49.401C-0.148743 49.996 -0.148743 50.9605 0.446229 51.5555C0.743716 51.853 1.13353 52.0017 1.52344 52.0017C1.91335 52.0017 2.30326 51.853 2.60064 51.5554L12.1635 41.9926C12.7585 41.3976 12.7585 40.433 12.1636 39.8381V39.8381Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M14.5677 44.3964L9.59369 49.3704C8.99872 49.9654 8.99872 50.93 9.59369 51.5249C9.89118 51.8224 10.2811 51.9712 10.6709 51.9712C11.0607 51.9712 11.4507 51.8225 11.7481 51.5249L16.7221 46.5509C17.3171 45.956 17.3171 44.9914 16.7221 44.3964C16.1272 43.8015 15.1625 43.8015 14.5677 44.3964Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">Super Fast </h4>
                                      <p>This super fast app will help you work efficiently. All
                                        the features load with zero connection issues.</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a9d4962"
                            data-id="a9d4962" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-73f4e73 eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="73f4e73" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50"
                                          height="50" viewBox="0 0 50 50" fill="none">
                                          <path
                                            d="M48.1056 17.4462C47.5455 16.8176 46.78 16.4087 45.9461 16.2926V16.2909L32.921 14.4916L27.7666 2.17538C27.014 0.372624 24.9425 -0.478657 23.1398 0.27397C22.2804 0.632798 21.5971 1.316 21.2384 2.17538L16.0841 14.4916L3.05897 16.2909C1.11839 16.561 -0.235809 18.3533 0.0343123 20.2939C0.150401 21.1278 0.559274 21.8933 1.18792 22.4534L11.0014 31.2045L8.98502 44.9365C8.76658 46.3309 9.40702 47.7202 10.6092 48.4597C11.7945 49.2177 13.3192 49.1894 14.4754 48.3879L24.5024 41.5691L34.5294 48.3949C36.1474 49.493 38.3492 49.0716 39.4475 47.4537C39.9465 46.7184 40.1509 45.8224 40.0199 44.9435L38.0036 31.2061L47.8171 22.4551C49.2799 21.1516 49.4091 18.909 48.1056 17.4462ZM34.9687 29.2284C34.5297 29.6207 34.3173 30.2073 34.4034 30.7896L36.5036 45.4915L25.4913 38.0041C24.8976 37.6006 24.1177 37.6006 23.5241 38.0041L12.447 45.4459L14.6015 30.7827C14.6851 30.2026 14.4729 29.6192 14.0361 29.2285L3.53481 19.7633L17.5505 17.8293C18.1642 17.7447 18.6873 17.3419 18.9262 16.7704L24.5233 3.50035C24.5297 3.50814 24.5344 3.51706 24.5374 3.5266L30.0768 16.7635C30.3157 17.335 30.8389 17.7377 31.4524 17.8223L45.4857 19.8421L34.9687 29.2284Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">Insightful Analytics</h4>
                                      <p>It also offers you insightful, accurate analytics that
                                        will help you track your daily expenses.</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section data-particle_enable="false" data-particle-mobile-disabled="false"
                        className="elementor-section elementor-inner-section elementor-element elementor-element-a7aa7a1 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="a7aa7a1" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d655d1e"
                            data-id="d655d1e" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-ca92f97 eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="ca92f97" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="39"
                                          height="50" viewBox="0 0 39 50" fill="none">
                                          <path
                                            d="M19.5 0.487915C8.74769 0.487915 0 9.23551 0 19.9879C0 26.689 3.39791 32.6109 8.56094 36.1226V48.5245C8.56094 49.0087 8.80643 49.4598 9.21305 49.7226C9.61948 49.9855 10.1317 50.0241 10.5733 49.8256L19.5 45.8087L28.4267 49.8257C28.6136 49.9097 28.8131 49.9514 29.0121 49.9514C29.2829 49.9514 29.5525 49.8743 29.7869 49.7227C30.1935 49.4598 30.4391 49.0087 30.4391 48.5246V36.1227C35.6021 32.611 39 26.6891 39 19.988C39 9.23551 30.2523 0.487915 19.5 0.487915ZM27.5853 46.3179L20.0854 42.943C19.8993 42.8592 19.6996 42.8172 19.5 42.8172C19.3004 42.8172 19.1007 42.8591 18.9146 42.9429L11.4147 46.3178V37.7356C12.1318 38.0625 12.8678 38.3435 13.6178 38.5805C13.6603 38.594 13.7027 38.6078 13.7454 38.6209C13.8412 38.6504 13.9372 38.6788 14.0333 38.7067C14.1045 38.7276 14.1757 38.7483 14.2471 38.7684C14.3247 38.79 14.4026 38.811 14.4804 38.8316C14.5712 38.8559 14.6622 38.8796 14.7535 38.9026C14.8181 38.9187 14.8827 38.9345 14.9474 38.9499C15.0524 38.9751 15.1577 38.9995 15.2634 39.0229C15.3182 39.0351 15.3731 39.0472 15.428 39.0589C15.5437 39.0836 15.6598 39.107 15.7764 39.1297C15.8239 39.1389 15.8713 39.1482 15.9188 39.1571C16.0423 39.1801 16.1662 39.2017 16.2905 39.2223C16.3331 39.2295 16.3757 39.2368 16.4184 39.2436C16.5466 39.2641 16.6754 39.2829 16.8045 39.3008C16.8445 39.3063 16.8844 39.3123 16.9244 39.3176C17.0551 39.3349 17.1864 39.3504 17.3178 39.3651C17.357 39.3695 17.3961 39.3744 17.4353 39.3786C17.5664 39.3926 17.698 39.4044 17.8298 39.4156C17.8698 39.419 17.9096 39.4232 17.9497 39.4263C18.0797 39.4365 18.2102 39.4447 18.3409 39.4525C18.3828 39.455 18.4246 39.4583 18.4667 39.4605C18.5987 39.4674 18.7313 39.4722 18.864 39.4764C18.904 39.4778 18.9437 39.4799 18.9837 39.481C19.1553 39.4854 19.3275 39.4879 19.5002 39.4879C19.6728 39.4879 19.845 39.4854 20.0166 39.481C20.0566 39.4799 20.0963 39.4778 20.1363 39.4764C20.269 39.4722 20.4016 39.4673 20.5336 39.4605C20.5755 39.4583 20.6174 39.455 20.6594 39.4525C20.7901 39.4447 20.9206 39.4366 21.0506 39.4263C21.0907 39.4232 21.1305 39.419 21.1705 39.4156C21.3023 39.4044 21.4339 39.3925 21.565 39.3786C21.6042 39.3745 21.6433 39.3696 21.6825 39.3651C21.814 39.3503 21.9452 39.3349 22.0759 39.3176C22.116 39.3123 22.1558 39.3064 22.1958 39.3008C22.3248 39.2829 22.4536 39.2641 22.5819 39.2436C22.6246 39.2367 22.6671 39.2294 22.7098 39.2223C22.8341 39.2017 22.958 39.1801 23.0815 39.1571C23.129 39.1482 23.1764 39.139 23.2239 39.1297C23.3404 39.1071 23.4565 39.0835 23.5723 39.0589C23.6273 39.0472 23.6821 39.0351 23.7369 39.0229C23.8425 38.9995 23.9478 38.9751 24.0529 38.9499C24.1175 38.9344 24.1821 38.9186 24.2468 38.9026C24.338 38.8797 24.429 38.856 24.5199 38.8316C24.5977 38.8109 24.6756 38.7901 24.7532 38.7684C24.8246 38.7483 24.8959 38.7276 24.967 38.7067C25.0631 38.6787 25.1592 38.6504 25.2549 38.6209C25.2976 38.6077 25.34 38.5939 25.3825 38.5805C26.1325 38.3435 26.8685 38.0626 27.5856 37.7357V46.3179H27.5853ZM24.9322 35.7233C24.8753 35.7429 24.8184 35.7626 24.7613 35.7816C24.6745 35.8106 24.5874 35.8391 24.5 35.8666C24.3982 35.8986 24.2962 35.9294 24.1939 35.9594C24.1217 35.9806 24.0495 36.0018 23.9769 36.0221C23.8416 36.0599 23.7057 36.096 23.5694 36.1303C23.5186 36.1431 23.4676 36.1553 23.4167 36.1677C23.2833 36.1999 23.1493 36.2307 23.015 36.2596C22.9812 36.267 22.9477 36.2747 22.9138 36.2817C22.7405 36.3179 22.5666 36.3516 22.3921 36.3822C22.3743 36.3853 22.3564 36.388 22.3385 36.3912C22.1813 36.4184 22.0235 36.443 21.8655 36.4655C21.8298 36.4706 21.7942 36.4757 21.7583 36.4806C21.5897 36.5035 21.4209 36.5245 21.2514 36.5423C21.245 36.543 21.2387 36.5439 21.2323 36.5445C21.0549 36.563 20.8769 36.5782 20.6986 36.5908C20.66 36.5936 20.6211 36.5957 20.5824 36.5983C20.4438 36.6072 20.3051 36.6143 20.1661 36.6199C20.1189 36.6218 20.0716 36.6238 20.0244 36.6253C19.8498 36.6306 19.6751 36.6343 19.5 36.6343C19.3249 36.6343 19.1502 36.6307 18.9756 36.6251C18.9283 36.6237 18.881 36.6216 18.8339 36.6197C18.6949 36.6142 18.5562 36.6071 18.4176 36.5981C18.3789 36.5956 18.3401 36.5934 18.3014 36.5906C18.1231 36.5779 17.9452 36.5627 17.7677 36.5444C17.7613 36.5437 17.755 36.5428 17.7486 36.5421C17.5791 36.5244 17.4103 36.5033 17.2417 36.4804C17.206 36.4756 17.1704 36.4705 17.1346 36.4653C16.9765 36.4427 16.8187 36.4182 16.6615 36.391C16.6437 36.388 16.6258 36.3852 16.6079 36.382C16.4334 36.3514 16.2594 36.3176 16.0862 36.2815C16.0524 36.2744 16.0188 36.2666 15.985 36.2595C15.8507 36.2306 15.7167 36.1997 15.5833 36.1675C15.5323 36.1551 15.4813 36.1429 15.4306 36.1301C15.2943 36.0959 15.1584 36.0596 15.0231 36.0219C14.9505 36.0016 14.8783 35.9804 14.8061 35.9592C14.7039 35.9291 14.6018 35.8984 14.4999 35.8665C14.4125 35.8388 14.3255 35.8104 14.2386 35.7814C14.1814 35.7624 14.1245 35.7427 14.0677 35.7231C7.5482 33.4662 2.85362 27.2653 2.85362 19.9879C2.85362 10.8092 10.3211 3.34153 19.5 3.34153C28.6789 3.34153 36.1464 10.8091 36.1464 19.9879C36.1464 27.2653 31.4517 33.4662 24.9322 35.7233Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M27.9647 19.9879L30.6447 14.9508C30.876 14.5163 30.8668 13.9934 30.6207 13.5672C30.3747 13.1411 29.9263 12.8717 29.4345 12.8546L23.7322 12.6571L20.7099 7.81759C20.4491 7.40024 19.9918 7.14655 19.4997 7.14655C19.0075 7.14655 18.5502 7.40024 18.2895 7.81759L15.2673 12.6571L9.56495 12.8546C9.07312 12.8717 8.62476 13.1411 8.3787 13.5672C8.13264 13.9934 8.12346 14.5163 8.35474 14.9508L11.0347 19.9879L8.35474 25.0251C8.12346 25.4595 8.13264 25.9825 8.3787 26.4086C8.62476 26.8347 9.07312 27.1042 9.56495 27.1212L15.2673 27.3187L18.2895 32.1582C18.5501 32.5756 19.0075 32.8293 19.4997 32.8293C19.9918 32.8293 20.4491 32.5756 20.7099 32.1582L23.7321 27.3187L29.4344 27.1212C29.9262 27.1042 30.3746 26.8347 30.6206 26.4086C30.8667 25.9825 30.8759 25.4595 30.6446 25.0251L27.9647 19.9879ZM22.8747 24.493C22.4004 24.5095 21.9652 24.7608 21.7139 25.1633L19.4997 28.7089L17.2855 25.1634C17.0341 24.7608 16.599 24.5097 16.1248 24.4931L11.9472 24.3483L13.9106 20.6581C14.1336 20.2391 14.1336 19.7367 13.9106 19.3177L11.9472 15.6275L16.1248 15.4827C16.599 15.4663 17.0342 15.215 17.2855 14.8124L19.4997 11.267L21.7138 14.8125C21.9652 15.2151 22.4003 15.4663 22.8746 15.4828L27.0521 15.6276L25.0887 19.3178C24.8659 19.7368 24.8659 20.2393 25.0888 20.6582L27.0522 24.3484L22.8747 24.493Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">Highly Rated </h4>
                                      <p>AppMart is loved by hundreds of loyal and happy users who
                                        swear the app made their lives easier.</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d9fcc78"
                            data-id="d9fcc78" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-e9aa7bf eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="e9aa7bf" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="58"
                                          height="50" viewBox="0 0 58 50" fill="none">
                                          <path
                                            d="M29.0004 0.968018C23.4387 0.968018 18.9141 5.4927 18.9141 11.0544C18.9141 16.616 23.4387 21.1407 29.0004 21.1407C34.5621 21.1407 39.0867 16.616 39.0867 11.0544C39.0867 5.49281 34.5621 0.968018 29.0004 0.968018ZM29.0004 17.7423C25.3126 17.7423 22.3125 14.7421 22.3125 11.0544C22.3125 7.36671 25.3126 4.36645 29.0004 4.36645C32.6882 4.36645 35.6883 7.36659 35.6883 11.0544C35.6883 14.7421 32.6882 17.7423 29.0004 17.7423Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M49.5039 26.3909H43.8265C43.0538 26.3909 42.3057 26.4965 41.5937 26.6906C40.1892 23.9297 37.3219 22.0327 34.0178 22.0327H23.9822C20.6781 22.0327 17.8108 23.9297 16.4063 26.6906C15.6943 26.4965 14.9462 26.3909 14.1735 26.3909H8.49609C3.81135 26.3909 0 30.2022 0 34.887V43.9628C0 46.7737 2.28681 49.0605 5.09766 49.0605H52.9023C55.7132 49.0605 58 46.7737 58 43.9628V34.887C58 30.2022 54.1887 26.3909 49.5039 26.3909ZM15.4861 30.529V45.6622H5.09766C4.16071 45.6622 3.39844 44.8999 3.39844 43.9629V34.8871C3.39844 32.0762 5.68525 29.7894 8.49609 29.7894H14.1735C14.6348 29.7894 15.0815 29.8521 15.5067 29.9675C15.4945 30.1534 15.4861 30.3403 15.4861 30.529ZM39.1155 45.6622H18.8846V30.5289C18.8846 27.7181 21.1714 25.4313 23.9822 25.4313H34.0178C36.8286 25.4313 39.1155 27.7181 39.1155 30.5289V45.6622ZM54.6016 43.9629C54.6016 44.8999 53.8393 45.6622 52.9023 45.6622H42.5139V30.5289C42.5139 30.3401 42.5055 30.1532 42.4933 29.9674C42.9185 29.8521 43.3652 29.7893 43.8265 29.7893H49.5039C52.3148 29.7893 54.6016 32.0761 54.6016 34.887V43.9629Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M11.3349 10.3448C7.17193 10.3448 3.78516 13.7316 3.78516 17.8946C3.78504 22.0576 7.17193 25.4443 11.3349 25.4443C15.4978 25.4443 18.8846 22.0576 18.8846 17.8946C18.8846 13.7316 15.4979 10.3448 11.3349 10.3448ZM11.3348 22.0459C9.04571 22.0459 7.18348 20.1837 7.18348 17.8946C7.18348 15.6055 9.04571 13.7433 11.3348 13.7433C13.6239 13.7433 15.4861 15.6055 15.4861 17.8946C15.4861 20.1837 13.6239 22.0459 11.3348 22.0459Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M46.665 10.3448C42.5021 10.3448 39.1152 13.7316 39.1152 17.8946C39.1153 22.0576 42.5021 25.4443 46.665 25.4443C50.8279 25.4443 54.2147 22.0576 54.2147 17.8946C54.2147 13.7316 50.8279 10.3448 46.665 10.3448ZM46.665 22.0459C44.376 22.0459 42.5137 20.1837 42.5137 17.8946C42.5138 15.6055 44.376 13.7433 46.665 13.7433C48.9541 13.7433 50.8163 15.6055 50.8163 17.8946C50.8163 20.1837 48.9541 22.0459 46.665 22.0459Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">User Forum Forum</h4>
                                      <p>It has a massive and friendly user forum - you can
                                        connect to other app users and get any help you need.
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8417dd6"
                            data-id="8417dd6" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-15a1c6f eael-infobox-content-align-left eael-infobox-icon-bg-shape-none eael-infobox-icon-hover-bg-shape-none elementor-widget elementor-widget-eael-info-box"
                                data-id="15a1c6f" data-element_type="widget"
                                data-widget_type="eael-info-box.default">
                                <div className="elementor-widget-container">
                                  <div className="eael-infobox">
                                    <div className="infobox-icon eael-icon-only">


                                      <div className="infobox-icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="51"
                                          height="51" viewBox="0 0 51 51" fill="none">
                                          <path
                                            d="M51 34.5146C51 27.0809 45.9911 20.5861 38.9278 18.6289C38.4838 8.28159 29.9283 0 19.4736 0C8.73566 0 0 8.73566 0 19.4736C0 22.9732 0.931503 26.3805 2.70035 29.3719L0.0715942 38.8753L9.57534 36.2469C12.3251 37.873 15.427 38.7889 18.6285 38.927C20.5853 45.9907 27.0805 51 34.5146 51C37.4819 51 40.3675 50.2097 42.9028 48.7082L50.928 50.928L48.7082 42.9028C50.2097 40.3675 51 37.4819 51 34.5146ZM10.0469 33.0158L4.35752 34.5897L5.93143 28.9003L5.57268 28.3393C3.88204 25.6942 2.98828 22.6284 2.98828 19.4736C2.98828 10.3835 10.3835 2.98828 19.4736 2.98828C28.5638 2.98828 35.959 10.3835 35.959 19.4736C35.959 28.5638 28.5638 35.959 19.4736 35.959C16.3188 35.959 13.2535 35.0652 10.608 33.3746L10.0469 33.0158ZM46.6425 46.6425L42.4208 45.4744L41.8569 45.8413C39.6714 47.2611 37.1321 48.0117 34.5146 48.0117C28.6719 48.0117 23.5378 44.234 21.7187 38.8169C30.6657 37.7854 37.7854 30.6657 38.8173 21.7183C44.234 23.5378 48.0117 28.6719 48.0117 34.5146C48.0117 37.1321 47.2611 39.6714 45.8413 41.8569L45.4744 42.4208L46.6425 46.6425Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M17.9795 26.9941H20.9678V29.9824H17.9795V26.9941Z"
                                            fill="#15063F"></path>
                                          <path
                                            d="M22.4619 14.9414C22.4619 15.79 22.1164 16.5733 21.4892 17.1472L17.9795 20.3596V24.0059H20.9678V21.6755L23.5066 19.3518C24.7416 18.2215 25.4502 16.6141 25.4502 14.9414C25.4502 11.6457 22.7693 8.96484 19.4736 8.96484C16.178 8.96484 13.4971 11.6457 13.4971 14.9414H16.4854C16.4854 13.2936 17.8258 11.9531 19.4736 11.9531C21.1215 11.9531 22.4619 13.2936 22.4619 14.9414Z"
                                            fill="#15063F"></path>
                                        </svg>
                                      </div>


                                    </div>
                                    <div className="infobox-content eael-icon-only">
                                      <h4 className="title">24/7 Support</h4>
                                      <p>Got any queries? Quickly get in touch. Our dedicated
                                        support team is always available at your service.</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <section data-particle_enable="false" data-particle-mobile-disabled="false"
                className="elementor-section elementor-top-section elementor-element elementor-element-07ffedc elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="07ffedc" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6d9b99d"
                    data-id="6d9b99d" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section data-particle_enable="false" data-particle-mobile-disabled="false"
                        className="elementor-section elementor-inner-section elementor-element elementor-element-374590b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="374590b" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c2af553 elementor-invisible"
                            data-id="c2af553" data-element_type="column"
                            data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-b57c268 elementor-widget elementor-widget-image"
                                data-id="b57c268" data-element_type="widget"
                                data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" decoding="async" width="660" height="823"
                                    src="https://static.live.templately.com/demo/2021/08/power_-image.png"
                                    className="attachment-full size-full wp-image-1144 wp-stateless-item"
                                    alt="" sizes="(max-width: 660px) 100vw, 660px"
                                    data-image-size="full" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fb6c791 elementor-invisible"
                            data-id="fb6c791" data-element_type="column"
                            data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-0f47f48 elementor-widget elementor-widget-heading"
                                data-id="0f47f48" data-element_type="widget"
                                data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">Fast &
                                    Effective</h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-65bc572 elementor-widget elementor-widget-heading"
                                data-id="65bc572" data-element_type="widget"
                                data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">Powerful
                                    Digitalization With Every Tap
                                  </h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9fb901e elementor-widget elementor-widget-text-editor"
                                data-id="9fb901e" data-element_type="widget"
                                data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <style>
                                    {elementorStyles}
                                  </style> Get instant helpful resources about anything on the go,
                                  easily implement secure money transfer solutions, boost your daily
                                  efficiency, connect to other app users and create your own AppMart
                                  network, and much more with just a few taps. commodo consequat. Duis
                                  aute irure.
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-4844076 elementor-widget elementor-widget-text-editor"
                                data-id="4844076" data-element_type="widget"
                                data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  Join AppMart &#038; get all needs digitalized in one app. </div>
                              </div>
                              <div className="elementor-element elementor-element-97048e8 elementor-align-left elementor-widget elementor-widget-button"
                                data-id="97048e8" data-element_type="widget"
                                data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm"
                                      href="https://demo.templately.com/appmart/sign-up/">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Get Started</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section data-particle_enable="false" data-particle-mobile-disabled="false"
                        className="elementor-section elementor-inner-section elementor-element elementor-element-aacfe0e elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="aacfe0e" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6902c0a elementor-invisible"
                            data-id="6902c0a" data-element_type="column"
                            data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-9816c0b elementor-widget elementor-widget-heading"
                                data-id="9816c0b" data-element_type="widget"
                                data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">Easy To
                                    Track</h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-62073d2 elementor-widget elementor-widget-heading"
                                data-id="62073d2" data-element_type="widget"
                                data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">AppMart
                                    Analytics For All Expenses</h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-1c6b83c elementor-widget elementor-widget-text-editor"
                                data-id="1c6b83c" data-element_type="widget"
                                data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  Keep a close track of all your regular expenses with insightful
                                  analytics by AppMart.
                                  Get graphical representations of your daily spendings, view trendy
                                  charts for expenses, pending payments and successful transactions
                                  from a single place.
                                  AppMart is here to help with all your financial needs. </div>
                              </div>
                              <div className="elementor-element elementor-element-b2f8019 elementor-widget elementor-widget-text-editor"
                                data-id="b2f8019" data-element_type="widget"
                                data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  AppMart is here to help with all your financial needs. </div>
                              </div>
                              <div className="elementor-element elementor-element-b9b49a2 elementor-align-left elementor-widget elementor-widget-button"
                                data-id="b9b49a2" data-element_type="widget"
                                data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm"
                                      href="https://demo.templately.com/appmart/sign-up/">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Get Started</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f08d0df elementor-invisible"
                            data-id="f08d0df" data-element_type="column"
                            data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-6732105 elementor-widget elementor-widget-image"
                                data-id="6732105" data-element_type="widget"
                                data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <img loading="lazy" decoding="async" width="618" height="819"
                                    src="https://static.live.templately.com/demo/2021/08/app-mart.png"
                                    className="attachment-full size-full wp-image-1145 wp-stateless-item"
                                    alt="" sizes="(max-width: 618px) 100vw, 618px"
                                    data-image-size="full" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container31">
              <span className="home-logo2"><Link to="/">MY PG</Link></span>
              <nav className="home-nav1 home-nav1">
                <span className="home-nav12"><Link to="/">Home</Link></span>
                <span className="home-nav22"><Link to="/about">About</Link></span>
                <span className="home-nav32"><Link to="/features">Features</Link></span>
                <span className="home-nav42"><Link to="/parties">Parties</Link></span>
                <span className="home-nav52"><Link to="/discounts">Discounts</Link></span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="home-text61">
                © 2023 MYPG, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <a href='https://www.instagram.com/play.ground4you?igsh=MzRlODBiNWFlZA==' target='_blank'>
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a href='https://www.facebook.com/profile.php?id=61555636586897' target='_blank'>
                  <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
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
