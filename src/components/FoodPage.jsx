import React, { Component } from 'react';
import Layout from './Layout';

class Food extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>Look up foor information here.</p>
          </div>
        </div>
      </div>
    );
  }

}

class FoodPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Food" children = {<Food />} />
      </div>
    );
  }
}

export default FoodPage;
