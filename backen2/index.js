const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
// hs
const App = Express();
App.use(Cors());
App.use(BodyParser.json());
const PORT = 1984;

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
  //   const data = req.body;
  //   console.log(data);
  const newExpense = {
    amount,
    type,
    title,
    date,
    description,
  };
  expenseData.push(newExpense);
  res.status(201).json("data saved successfully");
});

App.listen(PORT, () => {
  console.log(`My server is started on ${PORT}`);
});
