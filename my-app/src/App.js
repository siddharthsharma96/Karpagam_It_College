import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flexbox">
      <Sidebar />
      <div className="layout-container">
        <div className="layout-container__wrapper">Home Page</div>
      </div>
    </div>
  );
}

export default App;
