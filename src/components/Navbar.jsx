import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="drawer">
      <input 
        id="my-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={isDrawerOpen}
        onChange={(e) => setIsDrawerOpen(e.target.checked)}
      />
      <div className="drawer-content">
        <div className="navbar bg-base-100 shadow-lg p-4">
          <div className="flex-1">
            <a className="btn btn-ghost text-4xl"><Link to="/">essra photo</Link></a>
          </div>
          <div className="flex-none hidden md:block">
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
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li><Link to="/work" onClick={() => setIsDrawerOpen(false)}>work</Link></li>
          <li><Link to="/contact" onClick={() => setIsDrawerOpen(false)}>contact</Link></li>
          <li>
            <details>
              <summary>Gallery</summary>
              <ul>
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
}

export default Navbar;
