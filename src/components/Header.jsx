import { NavLink } from "react-router";

import CityPicker from "./CityPicker.jsx";
import Clock from "./Clock.jsx";
import UnitsToggle from "./UnitsToggle.jsx";
import { useContext } from "react";
import { CityContext } from "../context/CityContext.jsx";
import { UnitsContext } from "../context/UnitsContext.jsx";

function navClass({ isActive }) {
  return isActive ? "nav-link nav-on" : "nav-link";
}

function Header() {
  const { units } = useContext( UnitsContext );
  const { city } = useContext( CityContext );

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-meta">
          <h1 className="header-title">Weather Desk</h1>
          <p>{city.name} · °{units}</p>
        </div>
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
