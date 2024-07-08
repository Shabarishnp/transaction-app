import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Number of Items",
        data: data.counts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Transaction Price Range Distribution",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Price Range",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Items",
        },
      },
    },
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <CardContent>
        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default BarChart;