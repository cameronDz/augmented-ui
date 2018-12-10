import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  /**
   * Click handler for main burger menu.
   */
  handleBurgerClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  /**
   * Click handler for fitness dropdown.
   */
  handleFitnessClick = () => {
    // TODO add is-active logic
    console.log('handleFitnessClick');
  }

  /**
   * Click handler for nutrition dropdown.
   */
  handleNutritionClick = () => {
    // TODO add is-active logic
    console.log('handleNutritionClick');
  }

  /**
   * Click handler for more dropdown.
   */
  handleMoreClick = () => {
    // TODO add is-active logic
    console.log('handleMoreClick');
  }

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo" />
          </a>  
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="basicNavbar" onClick={this.handleBurgerClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span> 
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="basicNavbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item"><Link to="/">Home</Link></a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" data-targets="fitnessNavbar" onclick={this.handleFitnessClick}>Fitness</a>
              <div id="fitnessNavbar" className="navbar-dropdown">
                <a className="navbar-item"><Link to="/exercise">Exercises</Link></a>
                <a className="navbar-item"><Link to="/session">Sessions</Link></a>
                <a className="navbar-item"><Link to="/routine">Routines</Link></a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" data-targets="nutritionNavbar" onclick={this.handleNutritionClick}>Nutrition</a>
              <div id="nutritionNavbar" className="navbar-dropdown">
                <a className="navbar-item"><Link to="/diet">Diets</Link></a>
                <a className="navbar-item"><Link to="/meal">Meals</Link></a>
                <a className="navbar-item"><Link to='/food'>Foods</Link></a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" data-targets="moreNavbar" onclick={this.handleMoreClick}>More</a>
              <div id="moreNavbar" className="navbar-dropdown">
                <a className="navbar-item"><Link to='/about'>About</Link></a>
                <a className="navbar-item"><Link to='/contact'>Contact</Link></a>
                <a className="navbar-item"><Link to='/contribute'>Contribute</Link></a>
                <hr className="navbar-divider" />
                <a className="navbar-item"><Link to='/issue'>Report an issue</Link></a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light"><Link to="/signup"><strong>Sign up</strong></Link></a>
                <a className="button is-light"><Link to="/signin"><strong>Sign In</strong></Link></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
