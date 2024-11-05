import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { getCartItems } from "../utils";
import { useContext, useEffect, useState } from "react";
import { CartCounterContext, WishlistCounterContext } from "../pages/Layout";

const Navbar = () => {
  // const [cartNum, setCartNum] = useState(getCartItems().length);
  const {cartNum, setCartNum} = useContext(CartCounterContext);
  const { listNum, setListNum } = useContext(WishlistCounterContext);
  

  const location = useLocation();

  useEffect(() => {
    setCartNum(getCartItems().length)
  }, [cartNum]);

  return (
    <div
      className={`navbar w-11/12 mx-auto bg-purple-500 px-2 ${
        location.pathname !== "/" ? "bg-white" : ""
      }`}
    >
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
            className={
              "menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow "
            }
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
        <Link
          to="/"
          className={`text-2xl font-bold ${
            location.pathname !== "/" ? "text-black" : "text-white "
          }`}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 gap-6 text-lg ${
            location.pathname !== "/" ? "text-black" : "text-white "
          }`}
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
      <div className="navbar-end space-x-4">
        <div className="">
          <div className="w-4 h-4 rounded-full bg-red-500 text-center text-xs relative left-5 top-2">
            {cartNum}
          </div>
          <div
            className={`bg-white rounded-full p-1 text-center ${
              location.pathname !== "/" ? "border-2 border-slate-300" : ""
            }`}
          >
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
        </div>

        <div className="">
          <div className="w-4 h-4 rounded-full bg-red-500 text-center text-xs relative left-5 top-2">
            {listNum}
          </div>
          <div
            className={`bg-white rounded-full p-1 text-center ${
              location.pathname !== "/" ? "border-2 border-slate-300" : ""
            }`}
          >
            <CiHeart className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
