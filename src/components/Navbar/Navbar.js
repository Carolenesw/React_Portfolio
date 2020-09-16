import React from "react";

function Navbar() {
    // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          ...
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <ul className="navbar-nav"></ul>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="nav collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
}
export default Navbar;