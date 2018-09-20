import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About.js';

class Homepage extends Component {
  render() {
    return (
      <Router>
      <div className="Homepage">
        <h3>Welcome</h3>
        <h1>GREAT NORTHERN <br/> WIRELESS ASSOCIATION </h1>
          <Link to="/About">
        <button className="about-button">ABOUT US</button>
        </Link>
          <Route path="/About" exact component={About} />

      </div>
      </Router>
    );
  }
}

export default Homepage;
