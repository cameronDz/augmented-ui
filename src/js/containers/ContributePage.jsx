import React, { Component } from 'react';
import Layout from '../components/Layout';

class Contribute extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Contributing</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
            <div className="card-content">
              <div className="content"> 
                <p>To contribute to the application code base, create a Pull Request on the <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend GitHub</a> page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  };
}

class ContributePage extends Component {
  render() {
    return (
      <div>
        <Layout title = "Contribution Information" children = {<Contribute />} />
      </div>);
  };
}

export default ContributePage;
