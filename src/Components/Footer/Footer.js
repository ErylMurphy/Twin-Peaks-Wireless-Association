import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../Pages/About.js';
import Connect from '../Pages/Connect.js';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer-nav">
          <a><img className="fbicon" alt="hello" src="FBGrey.png" /></a>
          <a><img className="linkedinicon" alt="hello" src="LinkedInGrey.png" /></a>
        <p className="copyright"> &copy; 2018 GNWA </p>
        </div>
    );
  }
}
