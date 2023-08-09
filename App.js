import React from "react";
import ReactDOM  from "react-dom/client";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className='logo' src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png"/>
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
  )
};


const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
    </div>
  )
};
const root=ReactDOM.createRoot(document.getElementById('card'));
root.render(<AppLayout/>)