import React from 'react';
import { NavLink } from 'react-router-dom';

//   NOTE:
// *) NavLink is used when you want to highlight a link as active and to style <Link/>

const Navbar = () => {
  return (
    <>
      {/* <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul> */}
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
