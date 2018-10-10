import React, { Component } from "react";


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
          <ul id="burger">
            <a href="/"><li>HOME</li></a>
            <a href="/Events"><li>EVENTS</li></a>
            <a href="/Gallery"><li>GALLERY</li></a>
            <a href="/About"><li>ABOUT US</li></a>
            <a href="/Philanthropy"><li>PHILANTHROPY</li></a>
            <a href="/Connect"><li>CONNECT</li></a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger;