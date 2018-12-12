import React, { Component } from 'react';
import Layout from '../Layout';

class SignUp extends Component {

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <p>Use this page to sign up for application.</p>
          </div>
        </div>
      </div>
    );
  }

}

class SignUpPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Sign Up for Augmented" children = {<SignUp />} />
      </div>
    );
  }
}

export default SignUpPage;
