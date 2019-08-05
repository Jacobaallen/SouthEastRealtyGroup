import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay
              height={"400px"}
              width={"800px"}>
                <div className="appetizer">
                    <img src="BrokerPrice.jpeg" alt="BrokerPrice"/>
                    <p>Broker Price Opinion/ Consulting</p>
                </div>
                <div>
                    <img src="/image/Commercial-leasing.png" alt="Leasing"/>
                    <p>Commercial leasing</p>
                </div>
                <div>
                    <img src="sales.jpeg" alt="Sales"/>
                    <p>Sales of commercial Property</p>
                </div>
                <div>
                    <img src="Management.jpeg" alt="Management"/>
                    <p>Property Management</p>
                </div>
                <div>
                    <img src="Tenant.jpeg" alt="Tenant"/>
                    <p>Tenant representation and Site Selection</p>
                </div>
                <div>
                    <img src="/image/Development.png" alt="Development"/>
                    <p>Commercial Development</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
