import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <NavLink exact to="/">
        HOME
      </NavLink>
      {` | `}
      <NavLink exact to="/articles">
        ARTICLES
      </NavLink>
      {` | `}
      <NavLink exact to="/users">
        USERS
      </NavLink>
    </div>
  );
};

export default Navbar;
