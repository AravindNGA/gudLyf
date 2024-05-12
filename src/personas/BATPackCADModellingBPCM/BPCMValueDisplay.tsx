import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import ImagesDisplay from "./BPCMImagesDisplay";

import STEPViewer from "../../component/3dView";
import { useLocation } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Login/config";
// import { batteryDataDBName } from "../../commonItems";
import CSVViewer from "./csvViewer";

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

export default function BatteryPackCADModellingValueDisplay() {
  const [value1, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getValues = useLocation();
  console.log(getValues);

  let topDisplay = "Home/" + getValues.state[1] + "/My Selections";
  let manufacturer = "Cell Manufacturer : " + getValues.state[2];
  let typeOfVehicle = "Type of Vehicle : " + getValues.state[3];
  let cellChemistry = "Cell Chemistry : " + getValues.state[4];
  let typeOfCell = "Type of Cell : " + getValues.state[5];

  // const getData = async () => {
  //   const docRef = doc(db, batteryDataDBName, "1B9EhfuP8Yclv13hv5FB");

  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     let dataSrc = docSnap.data();

  //     console.log(dataSrc["imgSrc"]);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  return (
    <>
      <div>
        <br />
        <h3>{topDisplay}</h3>
        <br />
        <h6>{manufacturer}</h6>
        <h6>{typeOfVehicle}</h6>
        <h6>{cellChemistry}</h6>
        <h6>{typeOfCell}</h6>
      </div>
      <br />
      <div>
        <div>
          <Tabs
            value={value1}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Images" {...a11yProps(0)} />
            <Tab label="CAD File" {...a11yProps(1)} />\
            <Tab label="Excel Data" {...a11yProps(2)} />
          </Tabs>
        </div>
        <CustomTabPanel value={value1} index={0}>
          <ImagesDisplay />
        </CustomTabPanel>
        <CustomTabPanel value={value1} index={1}>
          <STEPViewer />
        </CustomTabPanel>
        <CustomTabPanel value={value1} index={2}>
          <CSVViewer
            csvUrl={
              "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/files%2Fmetadata.csv?alt=media&token=b3bc8fd1-25d4-433e-a618-bf9a2117a3f8"
            }
          />
        </CustomTabPanel>
      </div>
    </>
  );
}
