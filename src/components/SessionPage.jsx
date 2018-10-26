import React, { Component } from 'react';
import Layout from './Layout';

class Session extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p> Track exercise sessions here.</p>
          </div>
        </div>
      </div>
    );
  }

}

class SessionPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Sessions" children = {<Session />} />
      </div>
    );
  }
}

export default SessionPage;
