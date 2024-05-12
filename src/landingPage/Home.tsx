import { Helmet } from "react-helmet";

import Card from "../landingPage/components/card";
import "../landingPage/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home-container">
      <Helmet>
        <title>GUD LYF</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-logo">
              <img alt="image" src="/group%202.svg" className="home-image" />
              <span className="brandName">
                <span className="home-text01">GUD </span>
                <span> LYF</span>
              </span>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-links">
                <span className="home-text03 navbarLink">About Us</span>
                <span className="home-text04 navbarLink">Blog</span>
                <button className="button button-primary">Get started</button>
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
                  <div className="home-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="home-image1"
                    />
                    <span className="brandName">
                      <span className="home-text06">GUD </span>
                      <span> LYF</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-text08 navbarLink">About Us</span>
                  <span className="home-text12 navbarLink">Blog</span>
                </nav>
                <div className="home-buttons">
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle beforeHeading">Gud LyF</span>
            <h1 className="home-title">
              <span className="home-text13">
                Unlock the
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span className="home-text15">
                future of battery
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text16">research</span>
              <span className="home-text17"> </span>
              <br className="home-text18"></br>
            </h1>
            <span className="home-description">
              At GufLyf we strive to provide you with in-depth analysis,
              insightful articles, and cutting-edge research findings in the
              field of battery testing. Our platform is designed to cater to
              professionals and enthusiasts alike, offering valuable insights
              into battery performance, durability, and safety.
            </span>
            <div className="home-container1">
              <button
                className="button button-gradient"
                onClick={() => {
                  navigate("/loginPage");
                }}
              >
                Get started
              </button>
            </div>
          </div>
          <div className="home-image2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1592318348310-f31b61a931c8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGJhdHRlcnl8ZW58MHx8fHwxNzExNjM4MDE4fDA&amp;ixlib=rb-4.0.3&amp;w=600"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image3"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554175940-c7d7ede2ecb9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxiYXR0ZXJ5fGVufDB8fHx8MTcxMTYzODAxOHww&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text19 beforeHeading">how it works</span>
            <h1 className="home-text20">
              <span>
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text22">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>than ever.</span>
            </h1>
            <span className="home-text24">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container2">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGRhdGElMjB8ZW58MHx8fHwxNzExNjU1NDA4fDA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <span className="home-text25 beforeHeading">get started</span>
            <h1 className="home-text26">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text27">1</span>
              </div>
              <div className="home-container3">
                <span className="home-title1">Download UpStart App</span>
                <span className="home-text28">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text29">2</span>
              </div>
              <div className="home-container4">
                <span className="home-title2">Create your free account</span>
                <span className="home-text30">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text31">3</span>
              </div>
              <div className="home-container5">
                <span className="home-title3">
                  Link your existing credit cards
                </span>
                <span className="home-text32">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width4 max-width">
          <span className="home-text33 beforeHeading">get started</span>
          <h1 className="home-text34">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name"></Card>
            <Card text="Personal" rootClassName="card-root-class-name2"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container6">
          <img
            alt="image"
            src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2FGud%20lyf%20Logo.png?alt=media&token=51541a4c-2dfe-47c1-b84a-a27395595c8b"
            className="home-image6"
          />
          <nav className="home-nav1">
            <span className="home-text37">About Us</span>
            <span className="home-text38">Blog</span>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container7">
          <span className="home-text39">
            © 2024 GudLyf, All Rights Reserved.
          </span>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
