import React, { useState } from "react";
import { parse } from "papaparse";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

// Define an interface for the CSV row object
interface CSVRow {
  [key: string]: string; // Assuming all values in CSV are strings
}

const CSVTable = () => {
  const [data, setData] = useState<CSVRow[]>([]); // Specify the type of the state variable

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining to access the file
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const csvData = reader.result;
        if (typeof csvData === "string") {
          const parsedData = parse(csvData, { header: true });
          setData(parsedData.data as CSVRow[]); // Cast the parsed data to CSVRow[]
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <Table>
        <TableHead>
          <TableRow>
            {data.length > 0 &&
              Object.keys(data[0]).map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CSVTable;
