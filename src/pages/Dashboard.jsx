import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-purple-500 flex flex-col justify-center items-center text-white gap-4 text-center pt-10 pb-10">
        <h1 className="text-xl font-bold w-1/2">Dashboard</h1>
        <p className="w-1/2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-4">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `btn rounded-3xl px-6 ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-white border-2 border-white bg-purple-600"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `btn rounded-3xl px-6 ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-white border-2 border-white bg-purple-600"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
