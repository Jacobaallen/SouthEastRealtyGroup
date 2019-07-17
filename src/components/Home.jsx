import React, { Component } from 'react';
import '../styles/home.css';
import DemoCarousel from './Carousel'


class Home extends Component {
  render () {
    return (
      <div className="master">
        <div className="hero-image">
            <img src="/assets/image/Hero-image-1.png" alt="hero" width="1500" height="auto"></img>
          </div>
      <div className="title">
        <p> Southeast Realty Group Inc.</p>
      </div>
      <div className = "DemoCarousel">
            <DemoCarousel/>
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
