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
      <NavLink to="/articles" activeStyle={activeStyle}>
        Articles
      </NavLink>
      {` | `}
      <NavLink to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
    </div>
  );
}

export default Navbar;