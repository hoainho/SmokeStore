import React from 'react';
import {Link} from 'react-router-dom'
export default function navbar() {
  return (
        <div className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/" className="navbar-link">HOME</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/shop" className="navbar-link">SHOP</Link>
                  </li>
                  <li className="navbar-item navbar-item--logo">
                        <span className="navbar-item--logo_mix navbar-item--logo_mix__1">K</span>
                        <span className="navbar-item--logo_mix navbar-item--logo_mix__2">H</span>
                        <span className="navbar-item--logo_mix navbar-item--logo_mix__3">O</span>
                        <span className="navbar-item--logo_mix navbar-item--logo_mix__4">I</span>
                  </li>
                  <li className="navbar-item">
                    <Link to="/collection" className="navbar-link">COLLECTIONS</Link>
                  </li>
                  <li className="navbar-item">
                    <a href="true" className="navbar-link">ABOUT</a>
                  </li>
                </ul>
        </div>
  );
}