import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menu bg-base-200">
        <li>
          <Link to="/cards">All Product</Link>
        </li>
        <li>
          <Link to="/cards" className="active">
            Laptop
          </Link>
        </li>
        <li>
          <Link to="/cards">Phone</Link>
        </li>
        <li>
          <Link to="/cards">Smartwatch</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
