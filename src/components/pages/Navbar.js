import React from 'react';
import { NavLink } from 'react-router-dom';

//   NOTE:
// *) NavLink is used when you want to highlight a link as active and to style <Link/>

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'green' : '' };
            }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'purple' : '' };
            }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'yellow' : '' };
            }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
