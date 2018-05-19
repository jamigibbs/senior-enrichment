import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="row" id="main-header">

      <div className="column logo">
        <Link to="/">Interplanetary Academy of JavaScript</Link>
      </div>

      <div className="column">
        <ul className="nav">
          <li>
            <Link to="/campuses">Campuses</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header;
