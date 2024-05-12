import "../RegistrationPage/Registration.css";
import { useNavigate } from "react-router-dom";
import { SetStateAction, useState } from "react";
import React from "react";
import { Snackbar, TextField } from "@mui/material";

import { db, dbName } from "../Login/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";

const Registration = () => {
  const { logout, user } = useAuth0();

  let navigate = useNavigate();
  // const getValues = useLocation();
  // let userEmailID = getValues.state[0];
  // let userDefaultID = getValues.state[1];

  let userEmailID = user?.email;
  let userDefaultID = "getValues.state[1]";

  console.log(userEmailID);

  const [userFirstName, setuserFirstName] = useState("");
  const [userLastName, setuserLastName] = useState("");
  const [userCompanyName, setuserCompanyName] = useState("");
  const [userPhoneNumber, setuserPhoneNumber] = useState("");
  const [userPhoneNumberCode, setuserPhoneNumberCode] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClose = (_event: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleuserFirstNameStateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setuserFirstName(e.target.value);
  };
  const handleuserLastNameStateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setuserLastName(e.target.value);
  };
  const handleuserCompanyNameStateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setuserCompanyName(e.target.value);
  };
  const handleuserPhoneNumberStateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setuserPhoneNumber(e.target.value);
  };
  const handleuserPhoneNumberStateCodeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setuserPhoneNumberCode(e.target.value);
  };

  const saveInput = async () => {
    if (
      userFirstName === "" ||
      userLastName === "" ||
      userCompanyName === "" ||
      userPhoneNumberCode === "" ||
      userPhoneNumber === ""
    ) {
      setOpen(true);
    } else {
      let uploadData = [
        userFirstName,
        userLastName,
        userCompanyName,
        userPhoneNumberCode,
        userPhoneNumber,
        "+" + userPhoneNumberCode + userPhoneNumber,
        userEmailID,
        userDefaultID,
      ];

      try {
        const docLoction = doc(db, dbName, userDefaultID);
        await setDoc(docLoction, {
          "User FirstName": userFirstName,
          "User LastName": userLastName,
          "User CompanyName": userCompanyName,
          "User email": userEmailID,
          "User Default ID": userDefaultID,
          "User Phone Number": "+" + userPhoneNumberCode + userPhoneNumber,
          registered: true,
          timeStamp: serverTimestamp(),
        }).then(() => {
          console.log("Document written successfully");
          navigate("/personaGridNew");
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }

      console.log(uploadData);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-navbar navbar-container">
        <div className="max-width">
          <header
            data-thq="thq-navbar"
            className="registration-navbar-interactive"
          >
            <div className="registration-logo">
              <img
                alt="image"
                src="/group%202.svg"
                className="registration-image"
              />
              <span className="registration-text">
                <span className="registration-text01">GUD</span>
                <span className="brandName">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="registration-text03">LYF</span>
              </span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              className="registration-desktop-menu"
            >
              <div className="registration-links">
                <span className="registration-text04">Home</span>
                <button
                  className="button button-primary"
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                >
                  My Profile
                </button>
              </div>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="registration-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="registration-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="registration-mobile-menu"
            >
              <div className="registration-nav">
                <div className="registration-top">
                  <div className="registration-logo1">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="registration-image1"
                    />
                    <span className="brandName">
                      <span className="registration-text06">GUD</span>
                      <span> LYF</span>
                    </span>
                  </div>
                  <div
                    data-thq="thq-close-menu"
                    className="registration-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="registration-icon02"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="registration-links1">
                  <span className="registration-text08 navbarLink">About</span>

                  <span className="registration-text12 navbarLink">Blog</span>
                </nav>
                <div className="registration-buttons">
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="registration-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="registration-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="registration-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="registration-hero">
        <div className="registration-container1">
          <h1 className="registration-text13">Welcome...</h1>
          <h2 className="registration-text14"> a few more details please</h2>
          <span className="registration-text15">
            Your First name and Last name
          </span>
          <br></br>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            type="text"
            placeholder="Your First Name..."
            className="registration-textinput input"
            onChange={handleuserFirstNameStateChange}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            type="text"
            placeholder="Your Last Name..."
            className="registration-textinput1 input"
            onChange={handleuserLastNameStateChange}
          />
          <span className="registration-text16">
            Your Company/ Organisation&apos;s name
          </span>
          <br></br>
          <TextField
            id="outlined-basic"
            label="Company's Name"
            variant="outlined"
            type="text"
            placeholder="Company's Name..."
            className="registration-textinput2 input"
            onChange={handleuserCompanyNameStateChange}
          />
          <span className="registration-text17">Your Phone number</span>
          <div className="registration-container2">
            <span className="registration-text18">+</span>
            <TextField
              id="outlined-basic"
              label="Code"
              variant="outlined"
              type="number"
              name="phoneNumber"
              placeholder="Code..."
              //className="registration-textinput3 input"
              onChange={handleuserPhoneNumberStateCodeChange}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="number"
              name="phoneNumber"
              placeholder="Your Phone Number..."
              className="registration-textinput4 input"
              onChange={handleuserPhoneNumberStateChange}
            />
          </div>
          <div className="registration-btn-group">
            <button className="registration-button3 button" onClick={saveInput}>
              Register
            </button>
          </div>
          <form className="registration-form"></form>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1554175940-c7d7ede2ecb9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxiYXR0ZXJ5fGVufDB8fHx8MTcxMTc3NTgxNnww&amp;ixlib=rb-4.0.3&amp;w=1000"
          className="registration-image2"
        />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="All inputs are required, Please enter all the Inputs"
      />
    </div>
  );
};

export default Registration;
