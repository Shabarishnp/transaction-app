import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TransactionTable = ({ transactions }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "2px solid black" }}>ID</TableCell>
            <TableCell sx={{ border: "2px solid black" }}>Title</TableCell>
            <TableCell sx={{ border: "2px solid black" }}>
              Description
            </TableCell>
            <TableCell sx={{ border: "2px solid black" }}>Price</TableCell>
            <TableCell sx={{ border: "2px solid black" }}>Category</TableCell>
            <TableCell sx={{ border: "2px solid black" }}>Sold</TableCell>
            <TableCell sx={{ border: "2px solid black" }}>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.id}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.title}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.description}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.price}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.category}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                {transaction.sold ? "Yes" : "No"}
              </TableCell>
              <TableCell sx={{ border: "2px solid black" }}>
                <img
                  src={transaction.image}
                  alt={transaction.title}
                  width="50"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
