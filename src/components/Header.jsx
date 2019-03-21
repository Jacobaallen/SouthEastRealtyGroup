import React, { Component } from 'react';

class Header extends Component {
  render () {
    render (
      <div className="navbar">
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
