import React, { Component } from 'react';
import Layout from './Layout';

class Contribute extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>To contribute to the application code base, create a Pull Request on the <a href="https://www.github.com/cameronDz/augmented-frontend">Augmented Frontend GitHub</a> page.</p>
          </div>
        </div>
      </div>
    );
  }

}

class ContributePage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Contribution Information" children = {<Contribute />} />
      </div>
    );
  }
}

export default ContributePage;
