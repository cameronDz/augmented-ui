import React, { Component } from 'react';
import Layout from '../Layout';

class SignUp extends Component {

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Sign Up</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
	    <div className="card-content">
              <div className="content">
                <p>Use this page to sign up for application.</p>
              </div>
            </div>
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
