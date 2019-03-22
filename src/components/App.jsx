import React form 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About' ;
import Contact from './Contact' ;
import Listings from './Listings' ;

class App extends React.Component{
  render () {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
  				 <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route path="/listings"component={Listings} />
        </div>
      </Router>
    )
  }
}

export default App;
