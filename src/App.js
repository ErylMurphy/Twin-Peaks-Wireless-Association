import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Homepage from './Components/Pages/Homepage.js';
import Events from './Components/Pages/Events.js';
import Philanthropy from './Components/Pages/Philanthropy.js';
import Member from './Components/Pages/Member.js';
import About from './Components/Pages/About.js';
import Connect from './Components/Pages/Connect.js';
import Gallery from './Components/Pages/Gallery.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       {/* <Header /> */}
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/Events">Events</Link> 
            <Link to="/Gallery">Gallery</Link>
            <a href="/">
                <img className="logo" src="logo.png"/>
            </a>
            <Link to="/About">About</Link>
            <Link to="/Philanthropy">Philanthropy</Link>
            <Link to="/Member">Member</Link>
            <Link to="/Connect">Connect</Link>
        </nav>
          <Route path="/" exact component={Homepage} />
          <Route path="/Events" exact component={Events} />
          <Route path="/Gallery" exact component={Gallery} />
          <Route path="/About" exact component={About} />
          <Route path="/Philanthropy" exact component={Philanthropy} />
          <Route path="/Member" exact component={Member} />
          <Route path="/Connect" exact component={Connect} />
       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
