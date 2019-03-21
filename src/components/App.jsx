import React form 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

class App extends React.Component{
  render () {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
  				 <Route path="/about" component={About} />
           <Route path="/listings"component={Listings} />
           <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
