import React, { Component } from 'react';
import Layout from '../Layout';

class Meal extends Component {

  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column">
            <p>Track Meals here.</p>
          </div>
        </div>
      </div>
    );
  }

}

class MealPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Meals" children = {<Meal />} />
      </div>
    );
  }
}

export default MealPage;
