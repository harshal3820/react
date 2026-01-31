import { LOGO_URL } from "../utils/constants"

export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};