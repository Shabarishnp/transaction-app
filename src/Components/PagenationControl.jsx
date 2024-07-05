import React from "react";
import { Pagination } from "@mui/material";

const PaginationControl = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
      style={{ marginTop: "20px" }}
    />
  );
};

export default PaginationControl;
