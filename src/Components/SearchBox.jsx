import React from "react";
import { TextField } from "@mui/material";

const SearchBox = ({ value, onChange }) => {
  return (
    <TextField
      label="Search Transactions"
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBox;
