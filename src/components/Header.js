import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

export const Header = () => {
    const [btnName,setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="app-logo">
        <img
          className="logo"
          src= {LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>cart</li>
          <li>about</li>
          <li>address</li>
          <li>contact</li>
          <button className="login-btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};