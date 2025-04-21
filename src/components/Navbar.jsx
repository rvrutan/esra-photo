import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100 shadow-lg p-5">
          <div className="w-full flex flex-col items-center space-y1">
            <Link 
              to="/" 
              className="text-6xl font-light"
              onClick={closeDrawer}
              style={{ fontFamily: "Monsieur La Doulaise, cursive"}}
            >
              essra photo
            </Link>
            <ul className="menu menu-horizontal px-1 text-lg hidden md:flex flex-row items-center space-x-20">
              <li>
                <Link to="/personal">Personal</Link>
              </li>
              <li>
                <Link to="/wedding">Wedding</Link>
              </li>
              <li>
                <Link to="/medical">Medical</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 bg-base-200">
          <ul className="menu p-4 w-80">
            <li>
              <details>
                <summary>Gallery</summary>
                <ul>
                  <li>
                    <Link to="/personal" onClick={closeDrawer}>
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link to="/wedding" onClick={closeDrawer}>
                      Wedding
                    </Link>
                  </li>
                  <li>
                    <Link to="/medical" onClick={closeDrawer}>
                      Medical
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/work" onClick={closeDrawer}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeDrawer}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
