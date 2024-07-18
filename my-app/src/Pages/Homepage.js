import ExpenseItem from "../components/ExpenseItem";
import { expenseData } from "../utils/expensedata";

const HomePage = () => {
  console.log(expenseData);
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
            {expenseData.map((element, index) => {
              return <ExpenseItem key={index} detail={element} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
