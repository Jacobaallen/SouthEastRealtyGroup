import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/header.css"

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <a className="navbar-brand" href="#home">
          <img src="/image/logo4.png" height="30" alt="SERSG logo"/>
        </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home
                      <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whatWeDo">What We Do</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
    )
  }
}


export default Header;
