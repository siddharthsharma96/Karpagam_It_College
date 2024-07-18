import { useState, useEffect } from "react";
import { expenseData } from "../utils/expensedata";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(100);
  const [date, setDate] = useState();
  const [type, setType] = useState("");
  console.log(title, description, amount, date, type);
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const tyoeHandler = (event) => {
    setType(event.target.value);
  };

  const handleClear = () => {
    setAmount(100);
    setDate("");
    setDescription("");
    setType("");
    setTitle("");
  };

  const addExpense = async () => {
    const response = await fetch("http://localhost:8000/data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, type, title, date, description }),
    });
    if (response.ok) {
      console.log("Expenses added in db");
    }
  };
  const handleSubmit = (event) => {
    navigate("/");
    event.preventDefault();
    addExpense();
    expenseData.push({ amount, type, title, date, description });
  };

  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">
        <div className="heading">
          <h3>Expense Log</h3>
        </div>
        <hr />
        <form onSubmit={handleSubmit} onReset={handleClear}>
          <div className="form-wrap">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              type="text"
              placeholder="Enter title"
              name="title"
              className="form-input"
              required
              onChange={titleHandler}
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              name="description"
              className="form-textarea"
              placeholder="Enter Description"
              rows="4"
              onChange={descriptionHandler}
            ></textarea>
          </div>
          <div className="form-wrap">
            <label htmlFor="amount">Amount</label>
            <input
              value={amount}
              type="number"
              placeholder="Enter Amount"
              name="amount"
              className="form-input"
              min="0"
              required
              onChange={amountHandler}
            />
          </div>
          <div className="flexbox">
            <div className="form-wrap flexbox-child__fb50 pr-5">
              <label htmlFor="date">Date</label>
              <input
                value={date}
                type="date"
                className="form-input"
                name="date"
                placeholder="Enter date"
                onChange={dateHandler}
              />
            </div>
            <div className="form-wrap flexbox-child__fb50 pl-5">
              <label htmlFor="type">Select Type</label>

              <select
                className="form-select "
                value={type}
                onChange={tyoeHandler}
                name="type"
                required
              >
                <option value="">Select type</option>
                <option value="1">Credit</option>
                <option value="2">Debit</option>
              </select>
            </div>
          </div>
          <div className="flexbox flexbox-reverse">
            <button className="btn" type="submit">
              <span>add</span>
            </button>
            <button className="btn mr-5" type="reset">
              <span>Clear</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
