const SideBarList = () => {
  const listItemData = [
    {
      listItemText: "Home",
      link: "#",
    },
    {
      listItemText: "About us",
      link: "#",
    },
  ];
  return (
    <div className="sidebar-container__list">
      <ul>
        {listItemData.map((item, index) => {
          return (
            <li>
              <a href={item.link}>{item.listItemText}</a>
            </li>
          );
        })}
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarList;
