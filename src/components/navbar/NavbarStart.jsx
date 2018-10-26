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
            <a className="navbar-item"><Link to="/session">Sessions</Link></a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Nutrition</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to="/diet">Diet</Link></a>
            <a className="navbar-item"><Link to="/meals">Meals</Link></a>
            <a className="navbar-item"><Link to='/foods'>Food</Link></a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">More</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to='/about'>About</Link></a>
            <a className="navbar-item"><Link to='/contacts'>Contact</Link></a>
            <a className="navbar-item"><Link to='/contribute'>Contribute</Link></a>
            <hr className="navbar-divider" />
            <a className="navbar-item"><Link to='/issue'>Report an issue</Link></a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarStart;
