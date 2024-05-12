import { experimentalStyled as styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,

  transition: "background-color 0.3s ease", // Animation transition

  // Hover animation
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#35414D" : "#f0f0f0",
    cursor: "pointer",
  },

  // Click animation
  "&:active": {
    backgroundColor: theme.palette.mode === "dark" ? "#28333D" : "#e0e0e0",
  },
}));

const PersonaGrids = () => {
  const personaHeadingsDict = [
    {
      routeName: "Battery Pack CAD Modelling",
      routeId: "BATPackCADModelling",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Management System (BMS) Design",
      routeId: "BMSDesign",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Pack Failure Analysis",
      routeId: "BATPackFailureAnalysis",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Thermal Management System Design",
      routeId: "BATTMSDesign",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Pack Range Prediction",
      routeId: "BATPackRangePrediction",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Pack Heat Flow Prediction & CFD Simulation",
      routeId: "BATHeatFlowPredictionandCFD",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Battery Pack Lightweighting",
      routeId: "BATPackLightWeighting",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },

    {
      routeName: "Cell Electrochemical Research",
      routeId: "CELLEleChemResearch",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Cell Selection & Procurement",
      routeId: "CELLSelectandProcure",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Cell Quality Check & Inspection",
      routeId: "CELLQualityCheck",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Cell Degradation & Ageing Analysis",
      routeId: "CELLAgeandDegradaAnalysis",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Cell to Cell Techno Commercial Comparison",
      routeId: "CELLComp",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
    {
      routeName: "Nexus Learning",
      routeId: "home",
      routeImageSrc:
        "https://i.pinimg.com/originals/5e/21/5d/5e215d6636a0e269c6ce7589bd59f402.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="myDivComponent">
      <br />

      <div>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent={"center"}
        >
          {Array.from(personaHeadingsDict).map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item
                onClick={() => {
                  const path = ["/" + item.routeId, item.routeName];
                  navigate("/commomComplexSelection", { state: path });

                  //navigate("/home");
                }}
              >
                <img src={item.routeImageSrc} height={40} width={40} />
                <p>{item.routeName}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PersonaGrids;
