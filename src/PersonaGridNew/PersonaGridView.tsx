import "./PersonaGridView.css";
import PersonaCard from "./personaCard";
import StatisticsCard from "./statisticsCard";
import NavigationBar from "../component/NavigationBar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PersonaGridView = () => {
  const naviagte = useNavigate();

  return (
    <div className="persona-grid-view-container">
      <NavigationBar />
      <br></br>
      <br></br>

      <div className="persona-grid-view-container1">
        <div className="persona-grid-view-testimonial">
          <div className="persona-grid-view-container2">
            <h1 className="persona-grid-view-text">
              <span>Customer Persona</span>
              <br></br>
            </h1>
            <span className="persona-grid-view-text3">
              Discover how our battery digital twin resources can elevate your
              product objectives and helps from Mechanical Engineers designing
              efficient power systems to Electronics Engineers and Programmers
            </span>
            <div className="persona-grid-view-container3">
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F1battery%20CAD.jpg?alt=media&token=f113e79e-c541-4449-b3b9-d29b51916b35"
                rootClassName="rootClassName2"
                name="CAD Modelling"
                quote="Precision engineering of battery pack designs using advanced CAD modeling techniques."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F2BMS.jpg?alt=media&token=e0f579dd-c216-4c86-814f-40cb886c83c1"
                rootClassName="rootClassName8"
                name="Battery Management System"
                quote="Intelligent BMS design tailored to balance battery performance and safety."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F3battery%20failure%20analysis.jpg?alt=media&token=a8c381cd-b80f-4f44-aae7-4233c41a62f8"
                rootClassName="rootClassName1"
                name="Failure Analysis"
                quote="Detailed analysis and diagnosis of battery pack failures to identify root causes and improve reliability."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F4TMS%20Design.jpg?alt=media&token=11f492b6-2712-4a01-9a4d-b40ff395d29c"
                rootClassName="rootClassName3"
                name="Battery Thermal Management"
                quote="Thermal management systems to optimize battery performance and lifespan."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F5range%20prediction.jpg?alt=media&token=04e91288-75e2-4e98-a9fc-69fb5f682ad1"
                rootClassName="rootClassName5"
                name="Range Prediction"
                quote="Predictive modeling to estimate battery pack range under various conditions and usage scenarios."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F6heat%20flow%20prediction.jpg?alt=media&token=e8c4d2ee-c4cb-4c68-88ff-1cbf55a94667"
                rootClassName="rootClassName4"
                name="Heat Flow Prediction"
                quote="Computational Fluid Dynamics (CFD) simulation for accurate prediction of heat flow within battery packs."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F7battery%20pack%20light%20weighting.jpg?alt=media&token=45a7f88b-831a-4264-8eee-fd1cb194a0e9"
                rootClassName="rootClassName7"
                name="Lightweighting"
                quote="Development of lightweight battery pack designs to enhance overall vehicle efficiency."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F8electro%20chemical%20research.jpg?alt=media&token=f25ee0b8-39c9-46c8-8586-92f3a2626c93"
                rootClassName="rootClassName6"
                name="Electrochemical Research"
                quote="Research and analysis of cell electrochemistry to optimize battery performance and stability."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F9Cell%20Selection%20and%20procurement.jpg?alt=media&token=1b759b57-e144-4b3a-b434-bb33f5b58da3"
                rootClassName="rootClassName4"
                name="Cell Selection & Procurement"
                quote="Strategic selection and procurement of battery cells based on performance, cost, and application requirements."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F10quality%20check.jpg?alt=media&token=0e5077e9-e862-42d8-bfe8-4ce0dbf563c6"
                rootClassName="rootClassName7"
                name="Quality Check & Inspection"
                quote="Rigorous quality checks and inspections to ensure the reliability and safety of battery cells."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F11Degradation%20and%20Analysis.jpg?alt=media&token=193a5c59-04e6-4483-864d-501d5c943f58"
                rootClassName="rootClassName6"
                name="Degradation & Ageing Analysis"
                quote="Investigation and analysis of cell degradation and ageing phenomena to enhance battery lifespan and reliability."
              ></PersonaCard>
              <PersonaCard
                pictureSrc="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/PersonaIcons%2F12comparision.jpg?alt=media&token=b30047cb-0edd-43f2-ab8f-7bef253a88d5"
                rootClassName="rootClassName8"
                name="Cell to Cell Techno Comparison"
                quote="Comparative analysis of various battery cell technologies in technical and commercial perspectives to inform decision-making."
              ></PersonaCard>
            </div>
            <div className="persona-grid-view-container4">
              <h1 className="persona-grid-view-text4">
                <span>Projected Statistics</span>
                <br></br>
              </h1>
              <span className="persona-grid-view-text7">
                Discover our extensive expertise across a range of battery
                types, compositions, and applications. We&apos;ve collaborated
                on numerous unique variations to cater to your specific needs.
              </span>
              <div className="persona-grid-view-container5">
                <StatisticsCard
                  rootClassName="statistics-card-root-class-name"
                  count="50"
                  desc="Our collaborations extend to different battery manufacturers, ensuring a diverse range of expertise and resources."
                ></StatisticsCard>
                <StatisticsCard
                  rootClassName="statistics-card-root-class-name3"
                  count="10"
                  desc="Our technologies are deployed across diverse applications, demonstrating versatility and adaptability in meeting unique industry needs."
                ></StatisticsCard>
                <StatisticsCard
                  rootClassName="statistics-card-root-class-name2"
                  count="10"
                  desc="Our solutions encompass different types of cell chemistry, offering flexibility and optimization for various power requirements and environmental conditions."
                ></StatisticsCard>
                <StatisticsCard
                  rootClassName="statistics-card-root-class-name1"
                  count="3"
                  desc="We utilize distinct types of cells, each tailored for specific applications and performance criteria."
                ></StatisticsCard>
              </div>

              <Button
                variant="contained"
                className="personaGrid-button"
                onClick={() => {
                  naviagte("/ProductView");
                }}
              >
                Click here to find out more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaGridView;
