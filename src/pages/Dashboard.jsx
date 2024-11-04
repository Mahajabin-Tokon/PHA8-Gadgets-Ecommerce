
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-purple-500 flex flex-col justify-center items-center text-white gap-4 text-center pt-10 pb-10">
        <h1 className="text-xl font-bold w-1/2">Dashboard</h1>
        <p className="w-1/2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-4">
          <Link to="/dashboard/cart">
            <button className="btn text-purple-600 rounded-3xl px-6">
              Cart
            </button>
          </Link>
          <Link to="/dashboard/wishlist">
            <button className="btn text-white border-2 border-white bg-purple-600 rounded-3xl ">
              Wishlist
            </button>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
