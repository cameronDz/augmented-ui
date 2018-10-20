import React, {Component} from 'react';
import '../../styles/css/bulma.css';

class NavbarStart extends Component {

  render() {
    return (
      <div className="navbar-start">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Exercises</a>
        <a className="navbar-item">Sessions</a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">More</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>
            <a className="navbar-item">Contribute</a>
            <hr className="navbar-divider" />
            <a className="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarStart;
