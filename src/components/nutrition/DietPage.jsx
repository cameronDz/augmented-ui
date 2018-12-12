import React, { Component } from 'react';
import Layout from '../Layout';

class Diet extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>Track diets here.</p>
          </div>
        </div>
      </div>
    );
  }

}

class DietPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Diets" children = {<Diet />} />
      </div>
    );
  }
}

export default DietPage;
