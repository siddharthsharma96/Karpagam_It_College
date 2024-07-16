const SideBarListItem = (props) => {
  return (
    <li>
      <a href={props.link}>{props.listItemText}</a>
    </li>
  );
};

export default SideBarListItem;
