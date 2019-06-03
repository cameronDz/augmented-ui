import React, { Component } from 'react';
import Layout from '../Layout';

class Diet extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Diets</p>
        </header>
        <div className="columns is-mobile">
          <div className="column">
	          <div className="card-content">
              <div className="content"> 
                <p>Track diets here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  };
}

class DietPage extends Component {
  render() {
    return (
      <div>
        <Layout title = "Diets" children = {<Diet />} />
      </div>);
  };
}

export default DietPage;
