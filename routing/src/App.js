import logo from "./logo.svg";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>

          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
