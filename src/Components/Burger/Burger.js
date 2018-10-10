import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from '../Pages/Homepage.js';
import Events from '../Pages/Events.js';
import Philanthropy from '../Pages/Philanthropy.js';
import About from '../Pages/About.js';
import Connect from '../Pages/Connect.js';
import Gallery from '../Pages/Gallery.js';

class Burger extends Component {
  refreshPage() {
    window.location.reload();
  }
  render() {
    return (
      <div className="burger">
        <div id="burgerToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <Router>
            <ul id="burger">
              <a href="/">HOME</a>
              <a href="/Events">EVENTS</a>
              <a href="/Gallery">GALLERY</a>
              <a href="/About">ABOUT US</a>
              <a href="/Philanthropy">PHILANTHROPY</a>
              <a href="/Connect">CONNECT</a>
            </ul>
          </Router>
        </div>
      </div>
    )

  }
}

export default Burger;