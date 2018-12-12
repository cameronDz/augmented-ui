import React, { Component } from 'react';
import Layout from '../Layout';

class Meal extends Component {

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Meals</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
	    <div className="card-content">
              <div className="content">
                <p>Track Meals here.</p>
              </div>
            </div>
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
