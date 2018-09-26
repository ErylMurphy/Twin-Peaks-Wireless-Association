import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../Pages/About.js';
import Connect from '../Pages/Connect.js';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="/About">ABOUT</a>
        <a href="/Connect">CONNECT</a>
        <img className="footer-logo" src="logo.png" />
      </div>
    );
  }
}
