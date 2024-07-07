import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TransactionStatistics = ({ statistics }) => {
  return (
    <Card style={{ marginTop: "16px" }}>
      <CardContent>
        <Typography variant="h6">Transaction Statistics</Typography>
        <Typography>Total Sales: ${statistics.totalSaleAmount}</Typography>
        <Typography>Total Sold Items: {statistics.totalSoldItems}</Typography>
        <Typography>
          Total Unsold Items: {statistics.totalNotSoldItems}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TransactionStatistics;
