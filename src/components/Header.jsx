import { NavLink } from "react-router";

import CityPicker from "./CityPicker.jsx";
import Clock from "./Clock.jsx";
import UnitsToggle from "./UnitsToggle.jsx";

function navClass({ isActive }) {
  return isActive ? "nav-link nav-on" : "nav-link";
}

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">Weather Desk</h1>
        <Clock />
      </div>
      <div className="header-bar">
        <nav className="nav">
          <NavLink end to="/" className={navClass}>
            Today
          </NavLink>
          <NavLink to="/week" className={navClass}>
            This week
          </NavLink>
        </nav>
        <div className="header-controls">
          <CityPicker />
          <UnitsToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
