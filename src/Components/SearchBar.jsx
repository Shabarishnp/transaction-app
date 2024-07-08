import React from "react";
import { TextField } from "@mui/material";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <TextField
        label="Search Transactions"
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
    </div>
  );
};

export default SearchBar;
