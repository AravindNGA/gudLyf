import "./PersonaDetailedDisplay.css";
import CriteriaSelectionCard from "./CriteriaSelectionCard";
import { useLocation } from "react-router-dom";
import NavigationBar from "../component/NavigationBar";
import { Tab, Tabs, Typography } from "@mui/material";

import ImagesDisplay from "./BATPackCADModellingBPCM/BPCMImagesDisplay";

import React from "react";
//import SeriesLineChartExample from "./SeriesLineChart";
import BatteryDesign from "./BatteryDesign";
import CADModelsDisplay from "./CADModels";

import EChartsChart from "./charts/echart_scatter_common";
import {
  cellTemperature,
  chargeCapacity,
  chargeEnergy,
  current,
  dischargEnergy,
  dischargeCapacity,
  voltage,
} from "./charts/chart_data";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PersonaDetailedDisplay = () => {
  const getValues = useLocation();
  console.log(getValues);

  let topDisplay = getValues.state[0];
  let topDisplayDesc = getValues.state[1];
  let manufacturer = getValues.state[2];
  let typeOfVehicle = getValues.state[3];
  let cellChemistry = getValues.state[4];
  let typeOfCell = getValues.state[5];

  const [value1, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="value-display-container">
      <NavigationBar />
      <br />
      <br />

      <div className="value-display-container1">
        <div className="value-display-testimonial">
          <div className="value-display-container2">
            <div className="value-display-container3">
              <h1 className="value-display-text">
                <span>{topDisplay}</span>
                <br></br>
              </h1>
              <span className="value-display-text3">{topDisplayDesc}</span>
              <h3 className="value-display-text4">
                <span>My Selections</span>
                <br></br>
              </h3>
              <div className="value-display-container4">
                <CriteriaSelectionCard
                  rootClassName="criteria-selection-card-root-class-name1"
                  heading="Manufacturer"
                  selectedValue={manufacturer}
                ></CriteriaSelectionCard>
                <CriteriaSelectionCard
                  rootClassName="criteria-selection-card-root-class-name"
                  heading="Type of Vehicle"
                  selectedValue={typeOfVehicle}
                ></CriteriaSelectionCard>
                <CriteriaSelectionCard
                  rootClassName="criteria-selection-card-root-class-name3"
                  heading="Cell Chemistry"
                  selectedValue={cellChemistry}
                ></CriteriaSelectionCard>
                <CriteriaSelectionCard
                  rootClassName="criteria-selection-card-root-class-name2"
                  heading="Type of Cell"
                  selectedValue={typeOfCell}
                ></CriteriaSelectionCard>
              </div>
              <br />
              <br />
              <div className="box-to-div-container">
                <div className="box-to-div-container-border">
                  <Tabs
                    value={value1}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Images" {...a11yProps(0)} />
                    <Tab label="Graph Data" {...a11yProps(1)} />
                    <Tab label="2D Design" {...a11yProps(2)} />
                    <Tab label="3D Design" {...a11yProps(3)} />
                  </Tabs>
                </div>
                <CustomTabPanel value={value1} index={0}>
                  <ImagesDisplay />
                </CustomTabPanel>
                <CustomTabPanel value={value1} index={1}>
                  {/* <SeriesLineChartExample /> */}
                  <br />
                  <br />
                  <EChartsChart
                    data={current}
                    title="Current (A)"
                    xAxisName="Cycle Count"
                    yAxisName="Current (A)"
                    colorRows1={-7}
                    colorRows2={-5}
                    colorRows3={-4}
                    colorRows4={-3}
                    colorRows5={-2}
                    colorRows6={0}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={voltage}
                    title="Voltage (V)"
                    xAxisName="Cycle Count"
                    yAxisName="Voltage (V)"
                    colorRows1={0}
                    colorRows2={1}
                    colorRows3={2}
                    colorRows4={3}
                    colorRows5={4}
                    colorRows6={5}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={chargeCapacity}
                    title="Charge Capacity (Ah)"
                    xAxisName="Cycle Count"
                    yAxisName="Charge Capacity (Ah)"
                    colorRows1={0}
                    colorRows2={1}
                    colorRows3={2}
                    colorRows4={3}
                    colorRows5={4}
                    colorRows6={5}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={dischargeCapacity}
                    title="Discharge Capacity (Ah)"
                    xAxisName="Cycle Count"
                    yAxisName="Discharge Capacity (Ah)"
                    colorRows1={0}
                    colorRows2={0.75}
                    colorRows3={1.25}
                    colorRows4={1.75}
                    colorRows5={2.25}
                    colorRows6={3}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={chargeEnergy}
                    title="Charge Energy (Wh)"
                    xAxisName="Cycle Count"
                    yAxisName="Charge Energy (Wh)"
                    colorRows1={0}
                    colorRows2={2}
                    colorRows3={4}
                    colorRows4={6}
                    colorRows5={10}
                    colorRows6={12}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={dischargEnergy}
                    title="Discharge Energy (Wh)"
                    xAxisName="Cycle Count"
                    yAxisName="Discharge Energy (Wh)"
                    colorRows1={0}
                    colorRows2={1.5}
                    colorRows3={2.5}
                    colorRows4={3.5}
                    colorRows5={4.5}
                    colorRows6={5.5}
                  />

                  <br />
                  <br />
                  <EChartsChart
                    data={cellTemperature}
                    title="Cell Temperature (°C)"
                    xAxisName="Cycle Count"
                    yAxisName="Cell Temperature (°C)"
                    colorRows1={0}
                    colorRows2={10}
                    colorRows3={20}
                    colorRows4={30}
                    colorRows5={40}
                    colorRows6={50}
                  />
                </CustomTabPanel>
                <CustomTabPanel value={value1} index={2}>
                  <BatteryDesign />
                </CustomTabPanel>
                <CustomTabPanel value={value1} index={3}>
                  <CADModelsDisplay />
                </CustomTabPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaDetailedDisplay;
