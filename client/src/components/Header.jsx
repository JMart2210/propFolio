import React from 'react';
import '../style.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <a className="navbar-brand" href="/">
          <img className="nav-logo" src="/imgs/leveredgeLogo.png" alt="Leveredge Logo" />
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/dash">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/logout" className="nav-link">
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a href="/logout" className="nav-link">
              Account
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
