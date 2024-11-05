import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
const Layout = () => {
  return (
    <>
      <Toaster></Toaster>
      <div className="bg-gray-100">
        {/* Navbar */}

        <Navbar></Navbar>
        {/* Outlet */}
        <div className="min-h-[calc(100vh-405px)]">
          <Outlet></Outlet>
        </div>

        {/* Footer */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
