import { NavLink } from "react-router-dom";

const SideBarListItem = ({ text, link }) => {
  return (
    <li>
      <NavLink to={link}>{text}</NavLink>
      {/* <a href={link}>{text}</a> */}
    </li>
  );
};

export default SideBarListItem;
