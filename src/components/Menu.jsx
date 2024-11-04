import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menu bg-base-200">
        <li>
          <Link to={`/cards/${"All"}`}>All Product</Link>
        </li>
        <li>
          <Link to={`/cards/${"Laptop"}`} className="active">
            Laptop
          </Link>
        </li>
        <li>
          <Link to={`/cards/${"Phone"}`}>Phone</Link>
        </li>
        <li>
          <Link to={`/cards/${"Smartwatch"}`}>Smartwatch</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
