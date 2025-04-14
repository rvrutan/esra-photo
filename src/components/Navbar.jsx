import React from "react";
import { Link } from "react-router-dom";

function Navbar()  {
  return (
    <div className="navbar bg-base-100 shadow-lg p-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl"><Link to="/">essra photo</Link></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/work">work</Link></li>
          <li><Link to="/contact">contact</Link></li>

          <li>
            <details>
              <summary>Gallery</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>personal</a></li>
                <li><a>wedding</a></li>
                <li><a>medical</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
