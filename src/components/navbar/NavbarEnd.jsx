import React, { Component } from 'react';
import '../../styles/css/bulma.css';

class NavbarEnd extends Component {

  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    );
  }  
}

export default NavbarEnd;
