import React, { Component } from 'react';
import Layout from './Layout';

class About extends Component {

  render() {
    return (
      <div>
        <div className="columns is-mobile">
          <div className="column">
            <p>Augmented is an application for tracking fitness, nutrition, and general health. Application is ment to take in data directly from the user, as well as consume data from third party applications like FitBits or Apple Watches.</p>
          </div>
        </div>
      </div>
    );
  }

}

class AboutPage extends Component {

  render() {
    return (
      <div>
        <Layout title = "Augmented About" children = {<About />} />
      </div>
    );
  }
}

export default AboutPage;
