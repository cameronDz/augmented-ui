import React, { Component } from 'react';
import Layout from '../Layout';

class SignIn extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Sign In</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
	          <div className="card-content">
              <div className="content">
                <p>Use this page to sign into application.</p>
              </div>
	          </div>
          </div>
        </div>
      </div>);
  };
}

class SignInPage extends Component {
  render() {
    return (
      <div>
        <Layout title = "Sign In to Augmented" children = {<SignIn />} />
      </div>);
  };
}

export default SignInPage;
