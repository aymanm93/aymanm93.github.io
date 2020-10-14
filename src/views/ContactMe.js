import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "../scss/Contact.scss";

export class ContactMe extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="contact">
          <Navigation />
        </main>
      </React.Fragment>
    );
  }
}

export default ContactMe;
