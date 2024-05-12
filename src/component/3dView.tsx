import React, { useState } from "react";

const STEPViewer = () => {
  const [geometry, setGeometry] = useState(null);
  console.log(geometry);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = () => {
        const stepData = reader.result;
        // Parse the STEP data and extract geometry
        const parsedGeometry = parseSTEP(stepData);
        setGeometry(parsedGeometry);
      };

      reader.readAsText(file);
    }
  };

  const parseSTEP = (_stepData: string | ArrayBuffer | null) => {
    // Parse STEP data and extract geometry
    // This is where you'll need to write or use a parser library
    // Return the parsed geometry
    return null;
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <div
        id="three-container"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
};

export default STEPViewer;
