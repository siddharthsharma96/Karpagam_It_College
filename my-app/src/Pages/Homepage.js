import ExpenseItem from "../components/ExpenseItem";
import { useState, useEffect } from "react";
// import { expenseData } from "../utils/expensedata";

const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/data");
    if (response.status === 200) {
      const data = await response.json();
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">
        <div className="flexbox-row flexbox-justify-between flexbox-align-baseline">
          <h3>Expenses</h3>
          <span className="pill info">INR 770</span>
        </div>
        <hr />

        <div className="layout-container__expenses">
          <ul>
            {data.map((element, index) => {
              return <ExpenseItem key={index} detail={element} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
