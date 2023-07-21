import React from "react";
import { NavLink } from "react-router-dom";

// activeStyle is used in the NavLink tag to style the currently active route
const activeStyle = { color: "purple", fontWeight: "bold" };

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/shoes" activeStyle={activeStyle}>Shoes</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeStyle={activeStyle}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
