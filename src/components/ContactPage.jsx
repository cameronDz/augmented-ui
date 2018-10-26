import React, { Component } from 'react';
import Layout from './Layout';

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>Application creator and maintainer: Cameron Dziurgot.</p>
	    <p>Email: <a href="mailto:camerondziurgot@gmail.com">camerondziurgot@gmail.com</a></p>
            <p>GitHub: <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend</a></p>
          </div>
        </div>
      </div>
    );
  }

}

class ContactPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Contact Information" children = {<Contact />} />
      </div>
    );
  }
}

export default ContactPage;

