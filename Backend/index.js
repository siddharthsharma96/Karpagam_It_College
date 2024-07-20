const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://karpagam:karpagam1234@cluster0.ebltab1.mongodb.net/"
);
const db = mongoose.connection;
db.on("error", () => {
  console.log("error connecting database");
});
db.once("open", () => {
  console.log("Connection to db is succesful");
});

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  type: Number,
  title: String,
  date: String,
  description: String,
});
const exp = mongoose.model("Data", ExpenseSchema);

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

App.get("/data", async (req, res) => {
  const data = await exp.find();
  console.log(data);
  res.status(200).json(data);
});

App.post("/data", async (req, res) => {
  const { amount, type, title, date, description } = req.body;
  const newExp = new exp({ amount, type, title, date, description });
  await newExp.save();

  //   const newExpense = {
  //     amount,
  //     type,
  //     title,
  //     date,
  //     description,
  //   };
  //   expenseData.push(newExpense);
  res.status(201).json(`data stored `);
});

const PORT = 8000;
App.listen(PORT, () => {
  console.log(`My server is started on ${PORT}`);
});
