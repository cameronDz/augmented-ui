import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavbarStart extends Component {
  
  handleFitnessClick = () => {
    document.querySelector('.navbar-fitness-menu').classList.toggle('is-active');
  }

  render() {
    return (
      <div className="navbar-start">
        <a className="navbar-item"><Link to="/">Home</Link></a>
        <div className="navbar-item has-dropdown">
          <a role="button" className="navbar-link navbar-burger navbar-fitness-menu" aria-label="menu" aria-expanded="false" data-targets="fitnessNavbar">Fitness</a>
          <div id="fitnessNavbar" className="navbar-dropdown">
            <a className="navbar-item"><Link to="/exercise">Exercises</Link></a>
            <a className="navbar-item"><Link to="/session">Sessions</Link></a>
            <a className="navbar-item"><Link to="/routine">Routines</Link></a>
          </div>
        </div>
        <div className="navbar-item has-dropdown">
          <a className="navbar-link navbar-burger">Nutrition</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to="/diet">Diets</Link></a>
            <a className="navbar-item"><Link to="/meal">Meals</Link></a>
            <a className="navbar-item"><Link to='/food'>Foods</Link></a>
          </div>
        </div>
        <div className="navbar-item has-dropdown">
          <a className="navbar-link navbar-burger">More</a>
          <div className="navbar-dropdown">
            <a className="navbar-item"><Link to='/about'>About</Link></a>
            <a className="navbar-item"><Link to='/contact'>Contact</Link></a>
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
