import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { PropsWithChildren, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<any>): ReactElement | null => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  const basePath = window.location.origin;

  return (
    <Auth0Provider
      domain={"https://auth.sit.nexus.hexagon.com"}
      // clientId={"gxg5kZgcDFydHVhnpjuyoL8cPecvI1b0"}
      clientId={"Zq8A3Sa7J6GrbkJekRjpNHl9cmcw8qTI"}
      redirectUri={basePath}
      onRedirectCallback={onRedirectCallback}
      audience={"https://nexus.hexagon.com/contentcatalogue"}
    >
      {children}
    </Auth0Provider>
  );
};
