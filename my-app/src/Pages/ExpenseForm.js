import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">
        <div className="heading">
          <h3>Expense Log</h3>
        </div>
        <hr />
        <form>
          <div className="form-wrap">
            <label htmlFor="title">Title</label>
            <input
              value={""}
              type="text"
              placeholder="Enter title"
              name="title"
              className="form-input"
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="form-textarea"
              placeholder="Enter Description"
              rows="4"
            ></textarea>
          </div>
          <div className="form-wrap">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              name="amount"
              className="form-input"
              min="0"
              required
            />
          </div>
          <div className="flexbox">
            <div className="form-wrap flexbox-child__fb50 pr-5">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-input"
                name="date"
                placeholder="Enter date"
              />
            </div>
            <div className="form-wrap flexbox-child__fb50 pl-5">
              <label htmlFor="type">Select Type</label>
              <select className="form-select" name="type" required>
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
