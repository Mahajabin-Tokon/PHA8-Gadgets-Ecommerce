import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menu bg-base-200">
        <li>
          <Link to={`/cards/${"all"}`}>All Product</Link>
        </li>
        <li>
          <Link to={`/cards/${"laptop"}`} className="active">
            Laptop
          </Link>
        </li>
        <li>
          <Link to={`/cards/${"phone"}`}>Phone</Link>
        </li>
        <li>
          <Link to={`/cards/${"smartwatch"}`}>Smartwatch</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
