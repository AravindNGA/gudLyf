import { List, ListItem, ListItemText, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BatteryComplexSelectionCriteria = () => {
  const getValues = useLocation();
  let fromRouteid = getValues.state[0];
  let fromRouteName = getValues.state[1];
  //console.log(fromRouteid);

  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");
  const [dropdown4Value, setDropdown4Value] = useState("");

  const handleDropdown1Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdown2Value(event.target.value);
  };

  const handleDropdown3Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdown3Value(event.target.value);
  };

  const handleDropdown4Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdown4Value(event.target.value);
  };

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = (_event: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const jumpingToNextpage = () => {
    if (
      dropdown1Value === "" ||
      dropdown2Value === "" ||
      dropdown3Value === "" ||
      dropdown4Value === ""
    ) {
      console.log(dropdown1Value);
      setOpen(true);
    } else {
      const path = [
        fromRouteid,
        fromRouteName,
        dropdown1Value,
        dropdown2Value,
        dropdown3Value,
        dropdown4Value,
      ];
      console.log(path);
      navigate(fromRouteid, {
        state: path,
      });
    }
  };

  return (
    <>
      <h2>{getValues.state[1]}</h2>
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Cell Manufacturer" />
            <select value={dropdown1Value} onChange={handleDropdown1Change}>
              <option value="">Select Cell Manufacturer</option>
              <option value="24m">24m</option>
              <option value="A123Systems">A123 Systems</option>
              <option value="AutomotiveCellsCompany">
                Automotive Cells Company (ACC)
              </option>
              <option value="Altairnano">Altairnano</option>
              <option value="AmericanBatteryFactory">
                American Battery Factory
              </option>
              <option value="Amprius">Amprius</option>
              <option value="AMTEPower">AMTE Power</option>
              <option value="AspilsanEnergy">Aspilsan Energy</option>
              <option value="ATL">ATL</option>
              <option value="ATLIS">ATLIS</option>
              <option value="BAKEnergy">BAK Energy</option>
              <option value="BasqueVolt">BasqueVolt</option>
              <option value="Beyonder">Beyonder</option>
              <option value="BlueSolutions">Blue Solutions</option>
              <option value="BSTPower">BST Power</option>
              <option value="BYD">BYD</option>
            </select>
          </ListItem>

          <ListItem>
            <ListItemText primary="Type of Vehicle" />
            <select value={dropdown2Value} onChange={handleDropdown2Change}>
              <option value="">Select Type of Vehicle</option>
              <option value="2Wheelers">2 Wheelers</option>
              <option value="3Wheelers">3 Wheelers</option>
              <option value="PassengerCar">Passenger car</option>
              <option value="Industrial">Industrial</option>
              <option value="Drone">Drone</option>
              <option value="Stationary">Stationary</option>
            </select>
          </ListItem>

          <ListItem>
            <ListItemText primary="Cell Chemistry" />
            <select value={dropdown3Value} onChange={handleDropdown3Change}>
              <option value="">Select Cell Chemistry</option>
              <option value="LFP">LFP</option>
              <option value="NMC">NMC</option>
              <option value="NCA">NCA</option>
              <option value="4LMFP">4LMFP</option>
              <option value="Na-Ion">Na-Ion</option>
              <option value="SolidState">Solid State</option>
            </select>
          </ListItem>

          <ListItem>
            <ListItemText primary="Type of Cell" />
            <select value={dropdown4Value} onChange={handleDropdown4Change}>
              <option value="">Select Type of Cell</option>
              <option value="Cylinderical">Cylinderical</option>
              <option value="Prismatic">Prismatic</option>
              <option value="Pouch">Pouch</option>
            </select>
          </ListItem>
        </List>

        <button onClick={jumpingToNextpage}>Navigate</button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Input Selections missing"
        />
      </div>
    </>
  );
};

export default BatteryComplexSelectionCriteria;
