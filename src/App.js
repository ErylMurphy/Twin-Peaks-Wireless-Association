import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header.js';
import Burger from './Components/Burger/Burger.js';
import Homepage from './Components/Pages/Homepage.js';
import Events from './Components/Pages/Events.js';
import Philanthropy from './Components/Pages/Philanthropy.js';
import About from './Components/Pages/About.js';
import Connect from './Components/Pages/Connect.js';
import Gallery from './Components/Pages/Gallery.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <section className="one">
              <nav>
                <div className="nav-left">
                <Burger />
                  <Link to="/">Home</Link>
                  <Link to="/Events">Events</Link>
                  <Link to="/Gallery">Gallery</Link>
                </div>
                <a href="/">
                  <img className="logo" src="navlogo.png" />
                </a>
                <div className="nav-right">
                  <Link to="/About">About</Link>
                  <Link to="/Philanthropy">Philanthropy</Link>
                  <Link to="/Connect">Connect</Link>
                </div>
              </nav>
              <div className="main">
                <Route path="/" exact component={Homepage} />
                <Route path="/Events" exact component={Events} />
                <Route path="/Gallery" exact component={Gallery} />
                <Route path="/About" exact component={About} />
                <Route path="/Philanthropy" exact component={Philanthropy} />
                <Route path="/Connect" exact component={Connect} />
              </div>
            </section>
            <section className="two">
              <Footer />
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
