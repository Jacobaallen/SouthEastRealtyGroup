import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
  render () {
    return (

      <div className="navbar">
        <div className="links">
          <ul>

            <img src="/assets/image/Southeast-real-estate.png" alt="logo" />;

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
