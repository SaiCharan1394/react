import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
/*
*header
  -logo
  -nav-items
*body
  -search
  -cardscontainer
    -img
    -title
    -services
    -rating
    -price
    -deliverytime
*footer
  -copyright
  -social links
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("card"));
root.render(<RouterProvider router={appRouter} />);
