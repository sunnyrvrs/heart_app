import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbaritems montserrat">
    <ul className="nav justify-content-start" id="logo__container">
        <h1 className="logo__name nav-item">Heart</h1>
        <span className="logo__description">A place to meet LGBTQ friends</span>
    </ul>

    <ul className="nav justify-content-end nav__container-right">
        <li className="nav-item" id="feed__navitem">
            <a className="nav-link" href="#">Feed</a>
        </li>
        <li className="nav-item" id="messages__navitem">
            <a className="nav-link" href="#">Messages</a>
        </li>
        <li className="nav-item" id="profile__navitem">
            <a className="nav-link" href="#">My Profile</a>
        </li>
        <li className="nav-item" id="signin__navitem">
            <a className="nav-link disabled">Sign In</a>
        </li>
    </ul>
    </div>
    
  );
}

export default Navbar;
