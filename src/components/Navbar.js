import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = {
    background: 'red'
  };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {` | `}
      <NavLink exact to="/articles" activeStyle={activeStyle}>
        Articles
      </NavLink>
      {` | `}
      <NavLink exact to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
    </div>
  );
}

export default Navbar;