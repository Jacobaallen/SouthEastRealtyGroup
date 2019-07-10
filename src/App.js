import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Listings from './components/Listings';
import Footer from './components/Footer';


class App extends React.Component{
  render () {
    return (
      <Router>
          <Header/>
           <Route exact path="/" component={Home} />
  				 <Route path="/About" component={About} />
           <Route path="/Contact" component={Contact} />
           <Route path="/Listings"component={Listings} />
          <Footer/>
      </Router>
    )
  }
}

export default App;
