import React from "react";
import { TextField, MenuItem } from "@mui/material";

const MonthSelector = ({ value, onChange, months }) => {
  return (
    <TextField
      select
      label="Select Month"
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    >
      {months.map((month) => (
        <MenuItem key={month} value={month}>
          {month}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default MonthSelector;
