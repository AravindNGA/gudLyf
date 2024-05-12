import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

import { Auth0ProviderWithHistory as Auth0Provider } from "./Auth0/Auth0.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// // domain="dev-81fcd14keoj7aet3.us.auth0.com" //my own app from Auth0
//       // clientId="8krMJ5VdVZLsEx6GF6Izv6Sv10oNck5X" //my client ID from Auth0
//       // domain="https://auth.sit.nexus.hexagon.com"
//       // clientId="RgZuB7xhy5hTsteiAkUB5qLOESGKglm5"
//       // audience="api.nexus.hexagon.com/platformsdcservice"
//       domain={"https://auth.sit.nexus.hexagon.com"}
//       clientId={"gxg5kZgcDFydHVhnpjuyoL8cPecvI1b0"}
//       redirectUri="redirect_uri: window.location.origin"
