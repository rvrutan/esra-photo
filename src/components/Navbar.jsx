import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="drawer">
      <input 
        id="my-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
      />
      <div className="drawer-content">
        <div className="navbar bg-base-100 shadow-lg p-8">
          <div className="flex-1">
            <a className="btn btn-ghost text-6xl"><Link to="/">essra photo</Link></a>
          </div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li><Link to="/work">work</Link></li>
              <li><Link to="/contact">contact</Link></li>
              <li>
                <details>
                  <summary>gallery</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li><Link to="/personal">personal</Link></li>
                    <li><Link to="/wedding">wedding</Link></li>
                    <li><Link to="/medical">medical</Link></li>
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
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu transform transition-transform duration-300 ease-in-out  w-80 min-h-full">
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <li><Link to="/work" onClick={closeDrawer}>work</Link></li>
            <li><Link to="/contact" onClick={closeDrawer}>contact</Link></li>
            <li>
              <details>
                <summary>gallery</summary>
                <ul>
                  <li><Link to="/personal" onClick={closeDrawer}>personal</Link></li>
                  <li><Link to="/wedding" onClick={closeDrawer}>wedding</Link></li>
                  <li><Link to="/medical" onClick={closeDrawer}>medical</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
