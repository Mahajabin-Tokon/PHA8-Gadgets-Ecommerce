import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Cards from "./components/Cards.jsx";
import CardDetails from "./pages/CardDetails.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Error from "./pages/Error.jsx";
import Statistics from "./pages/Statistics.jsx";
import Upcoming from "./components/Upcoming.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElemenft: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/cards/:type",
            element: <Cards></Cards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
        loader: () => fetch("../upcoming.json"),
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
        loader: () => fetch("../products.json"),
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
