import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/navbar.css';

class Navbar extends Component {

  componentDidMount() {
    function buttonListener(event) {
      console.log('testtesttrest');
      event.preventDefault();
      this.classList.toggle("active", true);
      let items = this.nextElementSibling;
      if(items.style.display === "none") {
        items.style.display = "block";
      } else {
        items.style.display = "none";
      }
    };

    // get elements to be dropdowns 
    let fitnessButton = document.getElementsByClassName('#fitnessNavbarButton');
    let nutritionButton = document.getElementsByClassName('#nutritionNavbarButton');
    let moreButton = document.getElementsByClassName('#moreNavbarButton');

    // add listeners to dropdowns 
    fitnessButton.addEventListener("click", buttonListener);
    nutritionButton.addEventListener("click", buttonListener);
    moreButton.addEventListener("click", buttonListener);
  };

  /**
   * Click handler for main burger menu.
   */
  handleBurgerClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

  /**
   * Click handler for fitness dropdown.
   */
  handleFitnessClick = () => {
    let fitnessBar = document.getElementsByClassName('#fitnessNavbarItems');
    // TODO add is-active logic
    console.log('handleFitnessClick');
  }

  /**
   * Click handler for nutrition dropdown.
   */
  handleNutritionClick = () => {
    let nutritionBar = document.getElementsByClassName('#nutritionNavbarItems');
    // TODO add is-active logic
    console.log('handleNutritionClick');
  }

  /**
   * Click handler for more dropdown.
   */
  handleMoreClick = () => {
    let moreBar = document.getElementsByClassName('#moreNavbarItems');
    // TODO add is-active logic
    console.log('handleMoreClick');
  }

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo" />
          </div>  
          <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="basicNavbar" onClick={this.handleBurgerClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span> 
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="basicNavbar" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item"><Link to="/">Home</Link></div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div id="fitnessNavbarButton" className="navbar-link" data-targets="fitnessNavbar" onClick={this.handleFitnessClick}>Fitness</div>
              <div id="fitnessNavbarItems" className="navbar-dropdown">
                <div className="navbar-item"><Link to="/exercise">Exercises</Link></div>
                <div className="navbar-item"><Link to="/session">Sessions</Link></div>
                <div className="navbar-item"><Link to="/routine">Routines</Link></div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div id="nutritionNavbarButton" className="navbar-link" data-targets="nutritionNavbar" onClick={this.handleNutritionClick}>Nutrition</div>
              <div id="nutritionNavbarItems" className="navbar-dropdown">
                <div className="navbar-item"><Link to="/diet">Diets</Link></div>
                <div className="navbar-item"><Link to="/meal">Meals</Link></div>
                <div className="navbar-item"><Link to='/food'>Foods</Link></div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div id="moreNavbarButton" className="navbar-link" data-targets="moreNavbar" onClick={this.handleMoreClick}>More</div>
              <div id="moreNavbarItems" className="navbar-dropdown">
                <div className="navbar-item"><Link to='/about'>About</Link></div>
                <div className="navbar-item"><Link to='/contact'>Contact</Link></div>
                <div className="navbar-item"><Link to='/contribute'>Contribute</Link></div>
                <hr className="navbar-divider" />
                <div className="navbar-item"><Link to='/issue'>Report an issue</Link></div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-light"><Link to="/signup"><strong>Sign up</strong></Link></div>
                <div className="button is-light"><Link to="/signin"><strong>Sign In</strong></Link></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
