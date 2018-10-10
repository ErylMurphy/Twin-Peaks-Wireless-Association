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
              <a href="/"><li>HOME</li></a>
              <a href="/Events"><li>EVENTS</li></a>
              <a href="/Gallery"><li>GALLERY</li></a>
              <a href="/About">ABOUT <li>US</li></a>
              <a href="/Philanthropy"><li>PHILANTHROPY</li></a>
              <a href="/Connect"><li>CONNECT</li></a>
            </ul>
          </Router>
        </div>
      </div>
    )

  }
}

export default Burger;