import React, { Component } from 'react';
import '../styles/home.css';
import DemoCarousel from './Carousel'


class Home extends Component {
  render () {
    return (
      <div className="master">
        <div className="hero-image">
          </div>
          <div className="whatWeDo" id="whatWeDo">
            <div className = "DemoCarousel">
              <DemoCarousel/>
            </div>
          </div>

          <div className="about" id="about">
            <header className='aboutTitle'>
              <h1>About South East Realty Group Inc.</h1>
            </header>
            <div className='aboutContent'>
              <p className='aboutIntro'> South East Realty Group inc was esablish in 1986. From the Start the lead by current CEO Steve Allen. SERG main foces has be Commertional Real State. Teaming up with larger companys such as Rid-aid, Famaly Dollor and Dollor Genral.
                Building them all across the South East of the Unided States of Amaeric. SERG operates in Floirda, Alabama, Gorga, Lowezean, North Carlono, and South Carolin. The Company Head Quders is locaed in Juno Beach, FL.</p>
            </div>
          </div>

          <div className="teamup" id="Companyweworkwith">
            
          </div>
      <div className="content">
      </div>
      </div>
    )
  }
}
export default Home;
