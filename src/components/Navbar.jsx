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
        <div className="navbar bg-base-100 shadow-lg p-8">
          <div className="w-full flex flex-col items-center space-y-4">
            <Link 
              to="/" 
              className="text-6xl font-light"
              onClick={closeDrawer}
            >
              essra photo
            </Link>
            <ul className="menu menu-horizontal px-1 text-lg flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 z-50">
              <li>
                <details>
                  <summary>gallery</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <Link to="/personal">personal</Link>
                    </li>
                    <li>
                      <Link to="/wedding">wedding</Link>
                    </li>
                    <li>
                      <Link to="/medical">medical</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/work">work</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu transform transition-transform duration-300 ease-in-out w-80 min-h-full">
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <li>
              <details>
                <summary>gallery</summary>
                <ul>
                  <li>
                    <Link to="/personal" onClick={closeDrawer}>
                      personal
                    </Link>
                  </li>
                  <li>
                    <Link to="/wedding" onClick={closeDrawer}>
                      wedding
                    </Link>
                  </li>
                  <li>
                    <Link to="/medical" onClick={closeDrawer}>
                      medical
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/work" onClick={closeDrawer}>
                work
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeDrawer}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
