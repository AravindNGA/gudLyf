import { useState, useEffect } from "react";
import { parse } from "papaparse"; // Importing papaparse for CSV parsing
import axios from "axios";

interface CSVViewerProps {
  csvUrl: string; // Specify that csvUrl prop should be a string
}

const CSVViewer: React.FC<CSVViewerProps> = ({ csvUrl }) => {
  const [csvData, setCsvData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(csvUrl);
        const parsedData = parse(response.data, { header: true }); // Parsing CSV data
        setCsvData(parsedData.data); // Setting parsed CSV data to state
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    fetchData();
  }, [csvUrl]); // Fetch data when csvUrl prop changes

  return (
    <div>
      <h6>CSV Viewer</h6>
      <table>
        <thead>
          <tr>
            {/* Render table headers */}
            {csvData.length > 0 &&
              Object.keys(csvData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex}>{String(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVViewer;
