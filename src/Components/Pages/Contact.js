import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
        <h3>
          We would love to hear from you. For your convenience, please get in touch with us by using the contact form below:  </h3>
        <form className="contact-form">
            <label>Name</label>
          <div className="name-form">
            <input type="text" placeholder="First" required></input>
            <input type="text" placeholder="Last" required></input>
          </div>
          <label>Email</label>
          <input type="text" placeholder="Email" required></input>
          <label>Message</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
