import React, { Component } from 'react';
import Layout from '../Layout';

class Food extends Component {

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Foods</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
	    <div className="card-content">
              <div className="content">
                <p>Look up foor information here.</p>
              </div>
            </div>
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
