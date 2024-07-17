import { useState, useEffect } from "react";

const Counter = () => {
  // const [variable,function to set the value in variable]
  const [value, setValue] = useState(0);
  console.log("component redered again");
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  console.log(value);
  //   take two arguments
  // 1. callback function
  // 2. array of dependencies

  useEffect(() => {
    console.log("UseEffect is running");
  }, []);
  useEffect(() => {
    let timer;
    if (value < 0) {
      timer = setTimeout(() => {
        setValue(0);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
    // console.log(timer);
  }, [value]);
  //   test case
  // 1.Without array of dependencies: it will run everytime whenever there is some changes in the component
  // 2.with empty array of dependencies: it will run only once when our component in initializesd for tyhe first time
  // 3.With array of dependencies

  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">
        <div className="heading">
          <h3>Counter Page</h3>
        </div>
        <div>
          <p>{value}</p>
          <div>
            <button onClick={handleIncrement}>Increment</button>
            {/* <button onClick={handleDecrement()}>Decrement</button> */}
            <button onClick={() => handleDecrement()}>Decrement</button>
          </div>
          {value < 0 ? <p>Negative value</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Counter;
