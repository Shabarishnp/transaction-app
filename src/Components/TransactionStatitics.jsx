import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const TransactionStatistics = ({ transactions }) => {
  const totalAmount = transactions.reduce(
    (sum, transaction) => sum + transaction.price,
    0
  );
  const totalSoldItems = transactions.filter(
    (transaction) => transaction.sold
  ).length;
  const totalNotSoldItems = transactions.filter(
    (transaction) => !transaction.sold
  ).length;

  return (
    <Box display="flex" justifyContent="space-around" mb={3}>
      <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6">Total Amount of Sales</Typography>
        <Typography variant="subtitle1">Rs{totalAmount.toFixed(2)}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6">Total Sold Items</Typography>
        <Typography variant="subtitle1">{totalSoldItems}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6">Total Not Sold Items</Typography>
        <Typography variant="subtitle1">{totalNotSoldItems}</Typography>
      </Paper>
    </Box>
  );
};

export default TransactionStatistics;
