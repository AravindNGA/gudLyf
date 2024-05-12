// import PersonaGrids from "./global/PersonaGrids";

import { Navigate, useRoutes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import LoginPage from "./Login/loginPage";
import RegistrationChecker from "./RegistrationPage/regisChecker";
import LoadingPage from "./component/loadingAnimation/Loading";
import PersonaGridView from "./PersonaGridNew/PersonaGridView";
import ComplexSelection from "./complexSelectionNewUI/ComplexSelectionUI";

import BatteryPackCADModellingValueDisplay from "./personas/BATPackCADModellingBPCM/BPCMValueDisplay";
import PersonaDetailedDisplay from "./personas/PersonaDetailedDisplay";
import ProductsPage from "./showcase/showcase";

const routes = (isLoggedIn: boolean) => [
  {
    path: "/login",
    element: isLoggedIn ? <Navigate to="/home" /> : <LoginPage />,
  },
  {
    path: "",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: isLoggedIn ? <RegistrationChecker /> : <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
  {
    path: "/personaGrid",
    element: <PersonaGridView />,
  },
  {
    path: "/ComplexSelectionCriteria",
    element: <ComplexSelection />,
  },
  {
    path: "/BATPackCADModelling",
    element: <BatteryPackCADModellingValueDisplay />,
  },
  {
    path: "/PersonaDetailedDesc",
    element: <PersonaDetailedDisplay />,
  },
  {
    path: "/ProductView",
    element: <ProductsPage />,
  },
];

const Router = () => {
  const { isAuthenticated } = useAuth0();
  const elements = useRoutes(routes(isAuthenticated));
  return elements;
};

function App() {
  // return (
  //   <BrowserRouter>
  //     <div>
  //       <Routes>
  //         {/* <Route path="/ResponsiveAppBar" element={<ResponsiveAppBar />} /> */}
  //         <Route path="/personaGrid" element={<PersonaGrids />} />

  //         <Route path="/home" element={<Home />} />

  //         <Route path="/" element={<Login />} />

  //         <Route path="/loginPage" element={<LoginPage />} />
  //         <Route path="/RegistrationPage" element={<Registration />} />
  //         <Route path="/personaGridNew" element={<PersonaGridView />} />

  //         <Route
  //           path="/commomComplexSelection"
  //           element={<ComplexSelection />}
  //         />
  //         <Route
  //           path="/BATPackCADModelling"
  //           element={<BatteryPackCADModellingValueDisplay />}
  //         />

  //         <Route path="*" element={<PageNotFound />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );

  const { isLoading, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://nexus.hexagon.com/contentcatalogue",
        });
        console.log(token);
      } catch (e) {
        console.error(e);
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently]);

  return (
    <>{isLoading ? <LoadingPage initialTimerInterval={50} /> : <Router />}</>
  );
}

export default App;
