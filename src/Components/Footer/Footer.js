import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../Pages/About.js';
import Connect from '../Pages/Connect.js';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <a href="/About">ABOUT</a>
          <a href="/Connect">CONNECT</a>
          <a><img className="fbicon" alt="hello" src="fbicon.png" /></a>
          <a><img className="linkedinicon" alt="hello" src="linkedinicon.png" /></a>
        </div>
        <img className="footer-logo" src="logo.png" />
        <p className="copyright"> &copy; 2018 GNWA </p>
      </div>
    );
  }
}
