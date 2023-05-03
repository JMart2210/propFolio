import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.success.msg);
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

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
        <Link className="navbar-brand" to="/">
          <img className="nav-logo" src="/imgs/leveredgeLogo.png" alt="Leveredge Logo" />
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/dash">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link" style={{ border: 'none', background: 'transparent' }}>
              Logout
            </button>
          </li>
          <li className="nav-item">
            <button onClick={()=>navigate('/login')} className="nav-link" style={{ border: 'none', background: 'transparent' }}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
