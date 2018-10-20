import React, {Component} from 'react';
import '../styles/css/bulma.css';

class Header extends Component {

  render() {
    return (
      <section className="hero">
        <div className="hero-body">       
          <div className="container">
            <h1 className="title">Augmented</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
