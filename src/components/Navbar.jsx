import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="navbar navbar-default">
    <div className="container">
      <ul className="nav nav-pills">
        <li>
          <Link to="sign-up"><span>Sign up</span></Link>
        </li>
        <li>
          <Link to="sign-in"><span>Sign in</span></Link>
        </li>
        <li>
          <Link to="create-group"><span>Create Group</span></Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
