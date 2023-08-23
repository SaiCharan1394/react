import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("card"));
root.render(<AppLayout />);

