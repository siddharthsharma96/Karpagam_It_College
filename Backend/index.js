const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const App = express();
App.use(cors());
App.use(bodyParser.json());
const expenseData = [
  {
    amount: 200,
    type: 2,
    title: "Fees",
    date: "2024-12-07",
    description: "College fee",
  },
];

App.get("/data", (req, res) => {
  res.status(200).json(expenseData);
});

App.post("/data", (req, res) => {
  const { amount, type, title, date, description } = req.body;
  const newExpense = {
    amount,
    type,
    title,
    date,
    description,
  };
  expenseData.push(newExpense);
  res.status(201).json(`data stored ${newExpense}`);
});

const PORT = 8000;
App.listen(PORT, () => {
  console.log(`My server is started on ${PORT}`);
});
