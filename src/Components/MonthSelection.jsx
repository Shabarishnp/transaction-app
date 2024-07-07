import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MonthSelection = ({ month, onChange }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="month-label">Month</InputLabel>
      <Select
        labelId="month-label"
        value={month}
        onChange={onChange}
        label="Month"
      >
        {months.map((month, index) => (
          <MenuItem key={index} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MonthSelection;
