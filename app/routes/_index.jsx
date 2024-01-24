import React from 'react'

import { Helmet } from 'react-helmet'

import { FeatureCard, links as featureCardLinks } from '../components/feature-card/feature-card.jsx'
import { Question, links as questionLinks } from '../components/question/question.jsx'
import indexStylesHref from "../styles/index.css"
import { Link, useNavigate } from '@remix-run/react'

export const links = () => {
  return [
    ...featureCardLinks(),
    ...questionLinks(),
    { rel: 'stylesheet', href: indexStylesHref },
  ]
};

export default function Home() {
  let navigate = useNavigate()
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
              <span><Link to="/">Αρχική</Link></span>
              <span className="home-nav2"><Link to="/about">Σχετικά</Link></span>
              <span className="home-nav3"><Link to="/features">Features</Link></span>
              <span className="home-nav4"><Link to="/parties">Πάρτυ</Link></span>
              <span className="home-nav5"><Link to="/discounts">Προσφορές</Link></span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button"><Link to="/login">Σύνδεση</Link></button>
              <button className="home-register button"><Link to="/register">Εγγραφή</Link></button>
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
                <span className="home-nav11"><Link to="/">Αρχική</Link></span>
                <span className="home-nav21"><Link to="/about">Σχετικά</Link></span>
                <span className="home-nav31"><Link to="/features">Features</Link></span>
                <span className="home-nav41"><Link to="/parties">Πάρτυ</Link></span>
                <span className="home-nav51"><Link to="/discount">Προσφορές</Link></span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button"><Link to="/login">Σύνδεση</Link></button>
                <button className="home-register1 button"><Link to="/register">Εγγραφή</Link></button>
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
              Discover the Best Parks and Stores
            </h1>
            <span className="home-hero-sub-heading">
              Explore your city with our interactive map
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button" onClick={() => navigate("/map")}>Χάρτης</button>
              <button className="home-hero-button2 button" onClick={() => navigate("/about")}>Μάθε περισσότερα →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Λεπτομεριες</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              MyPG | My Playground
            </h2>
            <span className="home-details-sub-heading">
            Ο ιστότοπός μας παρέχει λεπτομερείς πληροφορίες για πάρκα, καταστήματα και πολλά άλλα. Εγγραφείτε τώρα για να απολαύσετε αποκλειστικές εκπτώσεις και άλλα προνόμια. Με το σύστημα πάρτι μας, μπορείτε εύκολα να οργανώσετε πάρτι σε πάρκα και άλλες τοποθεσίες. Ελάτε μαζί μας σήμερα!
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1603623898160-a611b90151ba?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTQ2MzA2NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>χαρακτηριστικα</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Εξερευνήστε τα συναρπαστικά χαρακτηριστικά
              </h2>
              <span className="home-features-sub-heading">
              Ανακαλύψτε πώς ο επαγγελματικός μας ιστότοπος μπορεί να βελτιώσει τις εμπειρίες σας και να κάνει τον προγραμματισμό πάρτι παιχνιδάκι.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Διαδραστικός Χάρτης"
                SubHeading="Εντοπίστε εύκολα πάρκα, καταστήματα και άλλα σημεία ενδιαφέροντος με τη λειτουργία διαδραστικού χάρτη μας."
              ></FeatureCard>
              <FeatureCard
                Heading="Εκπτώσεις Μελών"
                SubHeading="Απολαύστε αποκλειστικές εκπτώσεις και ειδικές προσφορές από τα συνεργαζόμενα καταστήματα όταν εγγραφείτε ως μέλος."
              ></FeatureCard>
              <FeatureCard
                Heading="Οργάνωση Πάρτυ"
                SubHeading="Σχεδιάστε και οργανώστε άπιαστα πάρτυ σε πάρκα και άλλους χώρους με το βολικό μας σύστημα πάρτυ."
              ></FeatureCard>
              <FeatureCard
                Heading="Lorem ipsum"
                SubHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>Τιμολογηση</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">Επιλέξτε το πλάνο σας</h2>
            <span className="home-pricing-sub-heading">
            Επιλέξτε το τέλειο πλάνο για τις ανάγκες σας
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">Δωρεαν</span>
                <span className="home-free-plan-description">
                Αποκτήστε δωρεάν πρόσβαση στις βασικές λειτουργίες του ιστότοπου
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>€</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features">
                  Προβολή πληροφοριών σχετικά με πάρκα, καταστήματα και άλλες τοποθεσίες
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text14">✔</span>
                  <span className="home-free-plan-features1">
                  Λάβετε εκπτώσεις και ειδικές προσφορές όταν εγγραφείτε
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text15">✔</span>
                  <span className="home-free-plan-features2">
                  Οργανώστε πάρτι σε πάρκα και άλλους χώρους
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text16">✔</span>
                  <span className="home-free-plan-features3">
                  Περιορισμένη πρόσβαση στο κομματικό σύστημα
                  </span>
                </div>
              </div>
              <button className="home-button button" onClick={() => navigate('/login')}>Συνεχίστε Δωρεάν</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text17 heading3">ΒΑΣΙΚΟ</span>
                <span className="home-basic-plan-description">
                Ξεκλειδώστε πρόσθετες δυνατότητες και προνόμια με το βασικό πλάνο
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text18">
                  <span>€</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">7</span>
                <span className="home-text21">/ μήνα</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text22">✔</span>
                  <span className="home-text23">Όλα τα χαρακτηριστικά του ΔΩΡΕΑΝ πλάνου</span>
                </div>
                <div className="home-container19">
                  <span className="home-text25">✔</span>
                  <span className="home-basic-plan-features1">
                    Πρόσβαση σε premium πληροφορίες σχετικά με πάρκα, καταστήματα και τοποθεσίες
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text26">✔</span>
                  <span className="home-basic-plan-features2">
                  Ενισχυμένες εκπτώσεις και αποκλειστικές προσφορές για μέλη
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text27">✔</span>
                  <span className="home-basic-plan-features3">
                  Πλήρης πρόσβαση στο σύστημα πάρτι με προηγμένα εργαλεία πάρτι
                  </span>
                </div>
              </div>
              <button className="home-button1 button" onClick={() => navigate("/account/basic")}>
              Δοκιμάστε το Βασικό πλάνο
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container22">
                <span className="home-text28 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                Αποκτήστε την απόλυτη εμπειρία με το επαγγελματικό σχέδιο
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text31">
                  <span>€</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">20</span>
                <span className="home-text34">/ μήνα</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text35">✔</span>
                  <span className="home-text36">
                  Όλα τα χαρακτηριστικά του πλάνου BASIC
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text38">✔</span>
                  <span className="home-pro-plan-features1">
                  Πρόσβαση κατά προτεραιότητα σε νέες πληροφορίες πάρκων και καταστημάτων
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features2">
                  Εκπτώσεις VIP και αποκλειστικά προνόμια για εγγεγραμμένα μέλη
                  </span>
                </div>
              </div>
              <button className="home-button2 button" onClick={() => navigate("/account/pro")}>Δοκιμάστε το PRO πλάνο</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery"></div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
          Ξεκλειδώστε εκπτώσεις και ευκαιρίες για πάρτυ
          </h1>
          <span className="home-banner-sub-heading">
          Αποκτήστε πρόσβαση σε ειδικές προσφορές και οργανώστε εύκολα πάρτυ σε πάρκα
          </span>
          <button className="home-banner-button button" onClick={() => navigate("/account/offers")}>Μάθε περισσότερα</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="home-text40 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text43 heading2">Συνήθεις ερωτήσεις</h2>
              <span className="home-text44">
                <span>
                Εδώ είναι μερικές από τις πιο συνηθισμένες ερωτήσεις που λαμβάνουμε.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
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
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container30">
              <Question
                Answer="Ο σκοπός αυτού του ιστότοπου είναι να παρέχει πληροφορίες σχετικά με πάρκα, καταστήματα και άλλες τοποθεσίες, καθώς και να προσφέρει εκπτώσεις και προνόμια στα εγγεγραμμένα μέλη."
                Question="Ποιος είναι ο σκοπός αυτής της ιστοσελίδας;"
              ></Question>
              <Question
                Answer="Ο χάρτης θα εμφανίζει πληροφορίες για πάρκα, καταστήματα και άλλα σημεία ενδιαφέροντος. Οι χρήστες μπορούν εύκολα να βρουν λεπτομέρειες όπως τοποθεσία, ώρες λειτουργίας και κριτικές χρηστών."
                Question="Τι είδους πληροφορίες θα είναι διαθέσιμες στον χάρτη;"
              ></Question>
              <Question
                Answer="Για να εγγραφείτε ως μέλος, απλώς κάντε κλικ στο κουμπί «Εγγραφή» στον ιστότοπο και συμπληρώστε τα απαιτούμενα στοιχεία. Μόλις εγγραφείτε, θα έχετε πρόσβαση σε εκπτώσεις και άλλα προνόμια."
                Question="Πώς μπορώ να εγγραφώ ως μέλος;"
              ></Question>
              <Question
                Answer="Τα μέλη θα έχουν πρόσβαση σε αποκλειστικές εκπτώσεις σε καταστήματα και χώρους που συμμετέχουν. Επιπλέον, μπορούν να απολαύσουν ειδικές προσφορές για τη διοργάνωση πάρτυ σε πάρκα και άλλες τοποθεσίες."
                Question="Ποιες εκπτώσεις και προνόμια είναι διαθέσιμα για τα μέλη;"
              ></Question>
              <Question
                Answer="Ο ιστότοπός μας παρέχει ένα σύστημα πάρτι που σας επιτρέπει να οργανώνετε εύκολα πάρτι σε πάρκα και άλλες τοποθεσίες. Απλώς επιλέξτε την επιθυμητή τοποθεσία, επιλέξτε ημερομηνία και ώρα και προσκαλέστε τους φίλους σας. Μπορείτε επίσης να προσαρμόσετε τις λεπτομέρειες του πάρτι, όπως θέματα και δραστηριότητες."
                Question="Πώς μπορώ να οργανώσω ένα πάρτυ σε πάρκο ή άλλη τοποθεσία;"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container31">
            <span className="home-logo2"><Link to="/">MY PG</Link></span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12"><Link to="/">Αρχική</Link></span>
              <span className="home-nav22"><Link to="/about">Σχετικά</Link></span>
              <span className="home-nav32"><Link to="/features">Features</Link></span>
              <span className="home-nav42"><Link to="/parties">Πάρτυ</Link></span>
              <span className="home-nav52"><Link to="/discounts">Προσφορές</Link></span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="home-text61">
              © 2024 MYPG, All Rights Reserved.
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
