import { Helmet } from "react-helmet";

import "../Login/loginPage.css";
import { useNavigate } from "react-router-dom";

import { db, dbName } from "./config";
//import { authGGl, provider } from "./config";
//import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginPage = () => {
  let navigate = useNavigate();
  const [value, setEmailValue] = useState("");
  console.log(value);

  const { loginWithPopup, isAuthenticated, user } = useAuth0();

  // nexus login
  const handleClickAuth0 = () => {
    loginWithPopup().then(async () => {
      if (isAuthenticated) {
        const myString = user?.sub;
        const auth_email = user?.email;
        let value = "" + myString?.split("|")[1];

        setEmailValue(auth_email!);
        let email = [auth_email, value];
        console.log(email);

        const docRef = doc(db, dbName, value);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          navigate("/personaGridNew");
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!", email);
          navigate("/RegistrationPage", { state: email });
        }

        console.log(value);
      }
    });
  };

  // Google login
  // const handleClick = () => {
  //   signInWithPopup(authGGl, provider)
  //     .then(async (data) => {
  //       if (data.user.email != null) {
  //         setEmailValue(data.user.email);
  //         let email = [data.user.email, data.user.uid];
  //         const docRef = doc(db, dbName, data.user.uid);
  //         const docSnap = await getDoc(docRef);

  //         if (docSnap.exists()) {
  //           console.log("Document data:", docSnap.data());
  //           navigate("/personaGridNew");
  //         } else {
  //           // docSnap.data() will be undefined in this case
  //           console.log("No such document!");
  //           navigate("/RegistrationPage", { state: email });
  //         }

  //         console.log(value);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="login-page-container">
      <Helmet>
        <title>GudLyf</title>
        <meta property="og:title" content="loginPage - Up Start Finance" />
      </Helmet>
      <div className="login-container1">
        <header data-thq="thq-navbar" className="login-navbar-interactive">
          <img
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2FGud%20lyf%20Logo.png?alt=media&amp;token=51541a4c-2dfe-47c1-b84a-a27395595c8b"
            className="login-image"
          />
          <div data-thq="thq-navbar-nav" className="login-desktop-menu"></div>
          <div data-thq="thq-burger-menu" className="login-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="login-mobile-menu"></div>
        </header>
        <div className="login-hero">
          <h1 className="login-text">Create a new Gudlyf (Digicell) Account</h1>
          <span className="login-text1">
            <span>
              Discover a hub of knowledge and innovation in battery technology.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>
              Login to dive deeper into battery research and applications.
            </span>
          </span>
          <div className="login-container2"></div>
          <br />
          <Button
            variant="contained"
            className="login-button2 button"
            onClick={handleClickAuth0}
            style={{ textTransform: "none" }}
          >
            Continue with Google
          </Button>
          <br />
          {/* <Button
            variant="contained"
            className="login-button2 button"
            onClick={handleClick}
            style={{ textTransform: "none" }}
          >
            Continue with Google
          </Button> */}

          <Button
            variant="contained"
            className="login-button2 button"
            style={{ textTransform: "none" }}
          >
            Continue with Microsoft
          </Button>
          <br />
        </div>
        <footer className="login-footer">
          <span className="login-text4">
            © 2024 GudLyf, All Rights Reserved.
          </span>
          <div className="login-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="login-icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="login-icon2">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="login-icon4">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;

{
  /* <div className="login-page-navbar navbar-container">
        <div className="max-width">
          <header
            data-thq="thq-navbar"
            className="login-page-navbar-interactive"
          >
            <div className="login-page-logo">
              <img
                alt="image"
                src="/group%202.svg"
                className="login-page-image"
              />
              <span className="login-page-text">
                <span className="login-page-text01">GUD </span>
                <span className="brandName">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="login-page-text03">LYF</span>
              </span>
            </div>
            <div data-thq="thq-navbar-nav" className="login-page-desktop-menu">
              <div className="login-page-links">
                <span className="login-page-text04">Home</span>
                <button className="button button-primary">My Profile</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="login-page-burger-menu">
              <svg viewBox="0 0 1024 1024" className="login-page-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="login-page-mobile-menu">
              <div className="login-page-nav">
                <div className="login-page-top">
                  <div className="login-page-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="login-page-image1"
                    />
                    <span className="brandName">
                      <span className="login-page-text06">GUD </span>
                      <span>LYF</span>
                    </span>
                  </div>
                  <div
                    data-thq="thq-close-menu"
                    className="login-page-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="login-page-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="login-page-links1">
                  <span className="login-page-text08 navbarLink">About</span>
                  <span className="login-page-text12 navbarLink">Blog</span>
                </nav>
                <div className="login-page-buttons">
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="login-page-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="login-page-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="login-page-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="login-page-hero">
        <div className="login-page-container1">
          <h1 className="login-page-text13">
            <span>
              Let's get
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>started</span>
          </h1>
          <h2 className="login-page-text17">Battery Research made simple.</h2>
          <span className="login-page-text18">Your Email</span>
          <input
            type="email"
            placeholder="Email here..."
            className="login-page-textinput input"
          />
          <span className="login-page-text19">Your Password</span>
          <input
            type="password"
            placeholder="Password here..."
            className="login-page-textinput1 input"
          />
          <div className="login-page-btn-group">
            <button className="login-page-button3 button">Log In</button>
          </div>
          <button
            type="button"
            className="login-page-button4 button"
            onClick={handleClick}
          >
            <img
              alt="image"
              src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2Fgoogle.png?alt=media&amp;token=ff9bce1f-e7af-44bb-b160-b438cf05cb66"
              className="login-page-image2"
            />
            <span className="login-page-text20">Log in with Google</span>
          </button>

          <button
            type="button"
            className="login-page-button4 button"
            onClick={handleClickAuth0}
          >
            <img
              alt="image"
              src="https://cdn.auth0.com/manhattan/versions/1.4924.0/assets/badge.png"
              className="login-page-image2"
            />
            <span className="login-page-text20">Log in with Auth0</span>
          </button>

          <button type="button" className="login-page-button5 button">
            <img
              alt="image"
              src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2Fmicrosoft.png?alt=media&amp;token=017c4772-9e93-49bd-b312-8aa27ed62d32"
              className="login-page-image3"
            />
            <span className="login-page-text21">Log in with Microsoft</span>
          </button>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1619641805634-b867f535071c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJhdHRlcnl8ZW58MHx8fHwxNzExNjM4MDE4fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
          className="login-page-image4"
        />
      </div> */
}
