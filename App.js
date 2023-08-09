import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/01/74/77/10/360_F_174771091_vawZDnwPc4cBiit579V6FPpWhcrC2hQo.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
      </div>
    </div>
  );
};

const Rescard = () => {
  return (
    <div className="rescard">
      <div>
        <img
          className="Image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qmf1f49v268jnxfhrpe2"
        />
      </div>
      <h2>Charan's</h2>
      <p>4.6</p>
      <p>North Indian,South Indian,Chinese,Grill</p>
      <p>₹600 Off</p>
    </div>
  );
};
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
