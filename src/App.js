import React, { useState, useEffect } from "react";
import { Container, Paper } from "@mui/material";
import transactionsData from "./data/transactionData"; // Create a separate file for transaction data
import SearchBox from "./Components/SearchBox";
import MonthSelector from "./Components/MonthSelector";
import TransactionTable from "./Components/TransactionTable";
import PaginationControl from "./Components/PagenationControl";
import TransactionStatistics from "./Components/TransactionStatitics";
import TransactionBarChart from "./Components/TransactionBarChart";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [page, setPage] = useState(1);
  const transactionsPerPage = 5;

  useEffect(() => {
    // Handle filtering and pagination logic here
  }, [searchTerm, selectedMonth, page]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to the first page on new search
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setPage(1); // Reset to the first page on new month selection
  };

  const filteredTransactions = transactionsData.filter(
    (transaction) =>
      transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      new Date(transaction.date).getMonth() === months.indexOf(selectedMonth)
  );

  const displayedTransactions = filteredTransactions.slice(
    (page - 1) * transactionsPerPage,
    page * transactionsPerPage
  );

  return (
    <Container>
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <MonthSelector
        value={selectedMonth}
        onChange={handleMonthChange}
        months={months}
      />
      <Paper>
        <TransactionTable transactions={displayedTransactions} />
      </Paper>
      <PaginationControl
        count={Math.ceil(filteredTransactions.length / transactionsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
      <TransactionStatistics transactions={filteredTransactions} />
      <TransactionBarChart transactions={filteredTransactions} />
    </Container>
  );
};

export default App;
