import { expenseData } from "../utils/expensedata";

const HomePage = () => {
  console.log(expenseData);
  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">Home Page</div>
    </div>
  );
};

export default HomePage;
