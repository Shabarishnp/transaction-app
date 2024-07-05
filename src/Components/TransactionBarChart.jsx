import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Paper } from "@mui/material";

const TransactionBarChart = ({ transactions }) => {
  const priceRanges = ["0-50", "51-100", "101-150", "151-200", "201+"];
  const rangeCounts = [0, 0, 0, 0, 0];

  transactions.forEach((transaction) => {
    const price = transaction.price;
    if (price <= 50) rangeCounts[0]++;
    else if (price <= 100) rangeCounts[1]++;
    else if (price <= 150) rangeCounts[2]++;
    else if (price <= 200) rangeCounts[3]++;
    else rangeCounts[4]++;
  });

  const data = {
    labels: priceRanges,
    datasets: [
      {
        label: "Number of Items",
        data: rangeCounts,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Paper elevation={3} style={{ padding: "16px", width: "100%" }}>
        <Bar
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </Paper>
    </Box>
  );
};

export default TransactionBarChart;
