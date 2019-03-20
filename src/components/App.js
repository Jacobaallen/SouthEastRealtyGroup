import React form 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

class App extends React.Component{
  render () {
    return (
      <Router>
        <div>
          <Header/>
        </div>
      </Router>
    )
  }
}
