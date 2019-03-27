import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="links">
          <ul>
            <img className="img-responsive" src{"../../public/assets/image/img/Southeast-real-estate-logo.png" alt="logo"}/>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Header;
