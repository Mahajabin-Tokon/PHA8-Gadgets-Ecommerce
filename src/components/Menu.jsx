import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    
    <div className="flex flex-col justify-center gap-2 p-2 bg-white m-2 rounded-xl">
      <NavLink
        to={`/cards/${"All"}`}
        className={({ isActive }) =>
          `bg-gray-200 rounded-2xl p-2 ${
            isActive ? "bg-purple-400 text-white" : "bg-gray-200"
          }`
        }
        
      >
        All Products
      </NavLink>
      <NavLink
        to={`/cards/${"Laptop"}`}
        className={({ isActive }) =>
          `bg-gray-200 rounded-2xl p-2 ${
            isActive ? "bg-purple-400 text-white" : "bg-gray-200"
          }`
        }
      >
        Laptop
      </NavLink>
      <NavLink
        to={`/cards/${"Phone"}`}
        className={({ isActive }) =>
          `bg-gray-200 rounded-2xl p-2 ${
            isActive ? "bg-purple-400 text-white" : "bg-gray-200"
          }`
        }
      >
        Phone
      </NavLink>
      <NavLink
        to={`/cards/${"Smartwatch"}`}
        className={({ isActive }) =>
          `bg-gray-200 rounded-2xl p-2 ${
            isActive ? "bg-purple-400 text-white" : "bg-gray-200"
          }`
        }
      >
        Smartwatch
      </NavLink>
    </div>
  );
};

export default Menu;
