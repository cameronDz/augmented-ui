import React, { Component } from 'react';
import Layout from './Layout';

class Issue extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>There are two ways to report an issue.</p>
            <p>One is through GitHub, by posting a new issue on the <a href="https://www.github.com/cameronDz/augmented-frontend/issues">issues page</a> of the Augmented-Frontend repository.</p>
            <p>The other way is through emailing <a href="mailto:camerondziurgot@gmail.com">Cameron Dziurgot</a> directly with the issue.</p>
          </div>
        </div>
      </div>
    );
  }

}

class IssuePage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Report an Issue" children = {<Issue />} />
      </div>
    );
  }
}

export default IssuePage;

