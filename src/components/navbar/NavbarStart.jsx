import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/bulma.css';

class NavbarStart extends Component {

  render() {
    return (
      <div className="navbar-start">
        <a className="navbar-item"><Link to="/">Home</Link></a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Fitness</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to="/exercise">Exercises</Link></a>
            <a className="navbar-item">Sessions</a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Nutrition</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">Diet</a>
            <a className="navbar-item">Meals</a>
            <a className="navbar-item">Food</a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">More</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to='/about'>About</Link></a>
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
