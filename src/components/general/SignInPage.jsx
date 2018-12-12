import React, { Component } from 'react';
import Layout from '../Layout';

class SignIn extends Component {

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <p>Use this page to sign into application.</p>
          </div>
        </div>
      </div>
    );
  }

}

class SignInPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Sign In to Augmented" children = {<SignIn />} />
      </div>
    );
  }
}

export default SignInPage;
