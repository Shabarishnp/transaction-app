import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./TransactionStatistics.css";

const TransactionStatistics = ({ statistics }) => {
  return (
    <Card className="transaction-statistics-card" style={{ marginTop: "16px" }}>
      <CardContent className="transaction-statistics-content">
        <Typography variant="h6" className="transaction-statistics-typography">
          Transaction Statistics
        </Typography>
        <Typography className="transaction-statistics-typography">
          Total Sales: Rs {statistics.totalSaleAmount}
        </Typography>
        <Typography className="transaction-statistics-typography">
          Total Sold Items: {statistics.totalSoldItems}
        </Typography>
        <Typography className="transaction-statistics-typography">
          Total Unsold Items: {statistics.totalNotSoldItems}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TransactionStatistics;
