import "../complexSelectionNewUI/ComplexSelectionUI.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { batteryDataDBName } from "../commonItems";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Login/config";
import NavigationBar from "../component/NavigationBar";

const ComplexSelection = () => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = (_event: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const getValues = useLocation();
  let fromPersonaTitle = getValues.state[0];
  let fromPersonaQuote = getValues.state[1];
  console.log(fromPersonaTitle);

  const [dropdownCellManu, setDropdownCellManu] = useState("");
  const [dropdownTypeOfVehicle, setDropdownTypeOfVehicle] = useState("");
  const [dropdownCellChemistry, setDropdownCellChemistry] = useState("");
  const [dropdownTypeOfCell, setDropdownTypeOfCell] = useState("");

  const handleDropdown1Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdownCellManu(event.target.value);
  };

  const handleDropdown2Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdownTypeOfVehicle(event.target.value);
  };

  const handleDropdown3Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdownCellChemistry(event.target.value);
  };

  const handleDropdown4Change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDropdownTypeOfCell(event.target.value);
  };

  const jumpingToNextpage = async () => {
    if (
      dropdownCellManu === "" ||
      dropdownTypeOfVehicle === "" ||
      dropdownCellChemistry === "" ||
      dropdownTypeOfCell === ""
    ) {
      console.log(dropdownCellManu);
      setOpen(true);
    } else {
      const path = [
        fromPersonaTitle,
        fromPersonaQuote,
        dropdownCellManu,
        dropdownTypeOfVehicle,
        dropdownCellChemistry,
        dropdownTypeOfCell,
      ];

      const docRef = doc(db, batteryDataDBName, "1B9EhfuP8Yclv13hv5FB");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let dataSrc = docSnap.data();

        console.log(dataSrc["SelectedPersona"]);

        console.log(path);
        navigate("/PersonaDetailedDesc", {
          state: path,
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  };

  return (
    <div className="complex-selection-container">
      <NavigationBar />
      <br />

      <br />
      <div className="complex-selection-hero">
        <div className="complex-selection-container1">
          <h1 className="complex-selection-text13">
            <span>{fromPersonaTitle}</span>
          </h1>
          <h4 className="complex-selection-text17">{fromPersonaQuote}</h4>
          {/* <span className="complex-selection-text17">Cell Manufacturer</span>

          <select
            className="complex-selection-select"
            value={dropdownCellManu}
            onChange={handleDropdown1Change}
          >
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
          </select> */}

          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">
              Cell Manufacturer
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={dropdownCellManu}
              onChange={handleDropdown1Change}
              label="Cell Manufacturer"
            >
              <MenuItem value={"Altairnano"}>Altairnano</MenuItem>
              <MenuItem value={"American Battery Factory"}>
                American Battery Factory
              </MenuItem>
              <MenuItem value={"Amprius"}>Amprius</MenuItem>
              <MenuItem value={"AMTE Power"}>AMTE Power</MenuItem>
              <MenuItem value={"Aspilsan Energy"}>Aspilsan Energy</MenuItem>
              <MenuItem value={"ATL"}>ATL</MenuItem>
              <MenuItem value={"ATLIS"}>ATLIS</MenuItem>
              <MenuItem value={"BAK Energy"}>BAK Energy</MenuItem>
              <MenuItem value={"BasqueVolt"}>BasqueVolt</MenuItem>
              <MenuItem value={"Beyonder"}>Beyonder</MenuItem>
              <MenuItem value={"Blue Solutions"}>Blue Solutions</MenuItem>
              <MenuItem value={"BST Power"}>BST Power</MenuItem>
              <MenuItem value={"BYD"}>BYD</MenuItem>
            </Select>
          </FormControl>

          {/* <span className="complex-selection-text18">Type of Vehicle</span>
          <select
            className="complex-selection-select1"
            value={dropdownTypeOfVehicle}
            onChange={handleDropdown2Change}
          >
            <option value="">Select Type of Vehicle</option>
            <option value="2Wheelers">2 Wheelers</option>
            <option value="3Wheelers">3 Wheelers</option>
            <option value="PassengerCar">Passenger car</option>
            <option value="Industrial">Industrial</option>
            <option value="Drone">Drone</option>
            <option value="Stationary">Stationary</option>
          </select> */}

          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">
              Type of Vehicle
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={dropdownTypeOfVehicle}
              onChange={handleDropdown2Change}
              label="Type of Vehicle"
            >
              <MenuItem value={"2 Wheelers"}>2 Wheelers</MenuItem>
              <MenuItem value={"3 Wheelers"}>3 Wheelers</MenuItem>
              <MenuItem value={"Passenger Car"}>Passenger car</MenuItem>
              <MenuItem value={"Industrial"}>Industrial</MenuItem>
              <MenuItem value={"Drone"}>Drone</MenuItem>
              <MenuItem value={"Stationary"}>Stationary</MenuItem>
            </Select>
          </FormControl>

          {/* <span className="complex-selection-text19">Cell Chemistry</span>
          <select
            className="complex-selection-select2"
            value={dropdownCellChemistry}
            onChange={handleDropdown3Change}
          >
            <option value="">Select Cell Chemistry</option>
            <option value="LFP">LFP</option>
            <option value="NMC">NMC</option>
            <option value="NCA">NCA</option>
            <option value="4LMFP">4LMFP</option>
            <option value="Na-Ion">Na-Ion</option>
            <option value="SolidState">Solid State</option>
          </select> */}

          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">
              Cell Chemistry
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={dropdownCellChemistry}
              onChange={handleDropdown3Change}
              label="Cell Chemistry"
            >
              <MenuItem value={"LFP"}>LFP</MenuItem>
              <MenuItem value={"NMC"}>NMC</MenuItem>
              <MenuItem value={"NCA"}>NCA</MenuItem>
              <MenuItem value={"4LMFP"}>4LMFP</MenuItem>
              <MenuItem value={"Na-Ion"}>Na-Ion</MenuItem>
              <MenuItem value={"SolidState"}>Solid State</MenuItem>
            </Select>
          </FormControl>

          {/* <span className="complex-selection-text20">Type of Cell</span>
          <select
            className="complex-selection-select3"
            value={dropdownTypeOfCell}
            onChange={handleDropdown4Change}
          >
            <option value="">Select Type of Cell</option>
            <option value="Cylinderical">Cylinderical</option>
            <option value="Prismatic">Prismatic</option>
            <option value="Pouch">Pouch</option>
          </select> */}

          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">
              Type of Cell
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={dropdownTypeOfCell}
              onChange={handleDropdown4Change}
              label="Type of Cell"
            >
              <MenuItem value={"Cylindrical"}>Cylindrical</MenuItem>
              <MenuItem value={"Prismatic"}>Prismatic</MenuItem>
              <MenuItem value={"Pouch"}>Pouch</MenuItem>
            </Select>
          </FormControl>

          <br />

          <Button
            variant="contained"
            className="complex-selection-button3 button"
            onClick={jumpingToNextpage}
          >
            Confirm my selections
          </Button>
        </div>
        <img
          alt="image"
          src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/applogo%2FScreenshot%202024-03-30%20at%205.57.24%20PM.png?alt=media&amp;token=d8dee9f1-080e-4bd8-94c6-74222d189410"
          className="complex-selection-image2"
        />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Some of the Input Selections are missing"
      />
    </div>
  );
};

export default ComplexSelection;
