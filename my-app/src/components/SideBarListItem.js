const SideBarListItem = ({ text, link }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default SideBarListItem;
