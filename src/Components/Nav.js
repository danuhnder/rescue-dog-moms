import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">
        Rescue Dog Moms
      </Link>
        <ul className="nav-links">
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
