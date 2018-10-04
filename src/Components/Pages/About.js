import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        {/* <h2 className="mission-statement-title">Mission Statement</h2> */}
        <h3 className="mission-statement-text">
          The Great Northern Wireless Association is a non-profit professional association dedicated to being the voice of the wireless industry in the Northern America. Our members represent wireless carriers, tower companies, network developers, and vendors supporting the industry. Our Mission is to promote the creative talent and energy of our membership through education and relationship building within the wireless industry and with our North American communities.  </h3>
        <h2 className="board-title">Board of Trustees</h2>
        <ul className="board-members">
        <div className="president">
          <li>Jeff Peters</li>
            <li className="trustee-title">President</li>
          </div>
          <div className="treasurer">
          <li>Tom Murphy</li>
            <li className="trustee-title">Treasurer</li>
          </div>
          <div className="director">
          <li>Tyler Peters</li>
          <li className="trustee-title">Director</li>
          </div>
        </ul>
      </div>
    );
  }
}


