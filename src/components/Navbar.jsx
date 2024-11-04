import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto bg-purple-500 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${isActive ? "font-bold underline" : "hover"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                ` ${isActive ? "font-bold underline" : "hover"}`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                ` ${isActive ? "font-bold underline" : "hover"}`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold text-white">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-lg text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "font-bold underline" : "hover"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              ` ${isActive ? "font-bold underline" : "hover"}`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              ` ${isActive ? "font-bold underline" : "hover"}`
            }
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <div className="bg-white rounded-full p-1 text-center">
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
        <div className="bg-white rounded-full p-1 text-center">
          <CiHeart className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
