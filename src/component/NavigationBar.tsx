import { AppBar, IconButton } from "@mui/material";
import {
  NavBar,
  AccountDropdown,
  IBasicUser,
  StatusAvatar,
  LegalMenu,
} from "@nexusui/components";
import { Settings } from "@mui/icons-material";
import "./NavigationBar.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavigationBar() {
  const { user, logout } = useAuth0();

  const userInfo: IBasicUser = {
    id: "1",
    firstName: "" + user?.given_name,
    lastName: "" + user?.family_name,
    avatar: "",
    email: "" + user?.email,
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  // const version = "v5.2.0.170";

  const legalItems = [
    {
      "data-testid": "NexusAccountDropdown-termsOfUse",
      name: "Website Terms of Use",
      url: "https://hexagon.com/legal/terms-of-use",
    },
    {
      "data-testid": "NexusAccountDropdown-cloudServicesAgreement",
      name: "Cloud Services Agreement",
      url: "https://legaldocs.hexagon.com/manufacturing-intelligence/MI%20Current/HMI%20Cloud%20Services%20Agreement.pdf",
    },
    {
      "data-testid": "NexusAccountDropdown-privacyNotice",
      name: "Privacy Notice",
      url: "https://hexagon.com/legal/mi-privacy-notice",
    },
  ];

  return (
    <>
      <AppBar color={"inherit"}>
        <NavBar
          navIcon={
            <>
              {/* <IconButton color={"inherit"} edge={"start"}>
                <Menu />
              </IconButton> */}
              <img
                alt="logo"
                src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2FGud%20lyf%20Logo.png?alt=media&amp;token=51541a4c-2dfe-47c1-b84a-a27395595c8b"
                className="login-image"
              />
            </>
          }
        >
          <div>
            <IconButton onClick={handleClick} aria-haspopup="true">
              <StatusAvatar {...userInfo} />
            </IconButton>
            <AccountDropdown
              userInfo={userInfo}
              version={""}
              open={open}
              items={[
                {
                  "data-testid": "NexusAccountDropdown-appSettings",
                  name: "App Settings",
                  icon: <Settings color={"primary"} />,
                  onClick: () => {},
                },
                <LegalMenu items={legalItems} onMenuItemClick={() => {}} />,
              ]}
              anchorEl={anchorEl}
              onClose={handleClose}
              onMenuItemClick={handleClose}
              onSignOut={onSignOut}
            />
          </div>
        </NavBar>
      </AppBar>
    </>
  );
}
