import React, { Component } from 'react';
import '../styles/home.css';

class Home extends Component {
  render () {
    return (
      <div className="master">
        <div className="hero-image">
          <div className="hero-text">
            <p>At South East Realty Group we strive for excellence.</p>
            <p>-Steve Allen</p>
          </div>
        </div>
      <div className="title">
        <p> Southeast Realty Group Inc.</p>
      </div>
      <div className="whatWeDo">
        <p>Broker Price Opinion/ Consulting</p>
        <p>Commercial leasing</p>
        <p>Sales of commercial Property</p>
        <p>Property Management</p>
        <p>Tenant representation and Site Selection</p>
        <p>Commercial Development</p>
      </div>
      <div className="content">
      </div>
      </div>
    )
  }
}
export default Home;
