import React, {Component} from 'react';
import NavbarEnd from './NavbarEnd';
import '../../styles/css/bulma.css';

class NavbarItems extends Component {

  render() {
    return (
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Documentation</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
          <NavbarEnd />
        </div>
      </div>
    );
  }
}

export default NavbarItems;
