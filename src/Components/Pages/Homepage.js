import React, { Component } from 'react';

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h3>Welcome</h3>
        <h1>GREAT NORTHERN <br /> WIRELESS ASSOCIATION </h1>
        <a className="about-button" href="/About">ABOUT US</a>
      </div>
    );
  }
}

