import React from "react";
import { Pagination } from "@mui/material";

const PaginationCtrl = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
      shape="rounded"
      style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}
    />
  );
};

export default PaginationCtrl;
