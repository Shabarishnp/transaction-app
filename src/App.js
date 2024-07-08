import React, { useState, useEffect } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import SearchBar from "./Components/SearchBar.jsx";
import MonthSelection from "./Components/MonthSelection.jsx";
import TransactionTable from "./Components/TransactionTable.jsx";
import PaginationControl from "./Components/PagenationCtrl.jsx";
import TransactionStatistics from "./Components/TransactionStatistics.jsx";
import BarChart from "./Components/BarChart.jsx";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState({ labels: [], counts: [] });
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/transactions?search=${searchTerm}&page=${page}&perPage=5`
      );
      const data = await response.json();
      setTransactions(data.transactions);
      setTotalPages(Math.ceil(data.total / 5));
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await fetch(
        `/api/transactions/statistics?month=${selectedMonth}`
      );
      const data = await response.json();
      setStatistics(data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const fetchBarChartData = async () => {
    try {
      const response = await fetch(
        `/api/transactions/bar-chart?month=${selectedMonth}`
      );
      const data = await response.json();
      setBarChartData({
        labels: data.map((item) => item.range),
        counts: data.map((item) => item.count),
      });
    } catch (error) {
      console.error("Error fetching bar chart data:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
    fetchBarChartData();
  }, [selectedMonth, searchTerm, page]);

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className="dashboard-title"
      >
        Transaction Dashboard
      </Typography>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MonthSelection
        month={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TransactionTable transactions={transactions} />
          <PaginationControl
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </>
      )}
      <TransactionStatistics statistics={statistics} />
      <BarChart data={barChartData} />
    </Container>
  );
};

export default App;
