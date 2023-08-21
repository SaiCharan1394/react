import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName]=useState("Login")
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;