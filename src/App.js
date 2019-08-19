import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Carousel2 from './components/Carousel2';


class App extends React.Component{
  render () {
    return (
      <Router>
          <Header/>
           <Route exact path="/" component={Home} />
           <Route path="/Contact" component={Contact} />
          <Footer/>
      </Router>
    )
  }
}

export default App;
