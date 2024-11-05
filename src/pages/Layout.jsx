import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
import { getCartItems, getWishListItems } from "../utils";

export const CartCounterContext = createContext();
export const WishlistCounterContext = createContext();
const Layout = () => {
  const [cartNum, setCartNum] = useState(getCartItems().length);
  const [listNum, setListNum] = useState(getWishListItems().length);

  return (
    <>
      <Toaster></Toaster>
      <div className="bg-gray-100">
        {/* Navbar */}
        <WishlistCounterContext.Provider value={{listNum, setListNum}}>
          <CartCounterContext.Provider value={{ cartNum, setCartNum }}>
            <Navbar></Navbar>
            {/* Outlet */}
            <div className="min-h-[calc(100vh-405px)]">
              <Outlet></Outlet>
            </div>
          </CartCounterContext.Provider>
        </WishlistCounterContext.Provider>

        {/* Footer */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
