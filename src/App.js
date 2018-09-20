import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Homepage from './Components/Pages/Homepage.js';
import Philanthropy from './Components/Pages/Philanthropy.js';
import Join from './Components/Pages/Join.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Gallery from './Components/Pages/Gallery.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header />
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/Philanthropy">Philanthropy</Link>
            <Link to="/Join">Join Us</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/Gallery">Gallery</Link>
        </nav>
          <Route path="/" exact component={Homepage} />
          <Route path="/Philanthropy" exact component={Philanthropy} />
          <Route path="/Join" exact component={Join} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Gallery" exact component={Gallery} />
       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
