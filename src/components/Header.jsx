import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="Logo">
          <a href="/"><img src=""Southeast-real-estate-logo.png" title="sereg logo" /></a>
        </div>
        <div className="links">
          <ul>
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
