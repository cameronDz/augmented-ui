import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  componentDidMount() {
    function buttonListener(event) {
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
    let fitnessButton = document.getElementById('fitnessNavbarButton');
    let nutritionButton = document.getElementById('nutritionNavbarButton');
    let moreButton = document.getElementById('moreNavbarButton');

    // add listeners to dropdowns 
    fitnessButton.addEventListener("click", buttonListener);
    nutritionButton.addEventListener("click", buttonListener);
    moreButton.addEventListener("click", buttonListener);

    // deactivate dropdowns on init
    fitnessButton.nextElementSibling.style.display = "none";
    nutritionButton.nextElementSibling.style.display = "none";
    moreButton.nextElementSibling.style.display = "none";
  };

  /**
   * Click handler for main burger menu.
   */
  handleBurgerClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

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
              <div id="fitnessNavbarButton" className="navbar-link" data-targets="fitnessNavbar">Fitness</div>
              <div id="fitnessNavbarItems" className="navbar-dropdown">
                <div className="navbar-item"><Link to="/exercise">Exercises</Link></div>
                <div className="navbar-item"><Link to="/session">Sessions</Link></div>
                <div className="navbar-item"><Link to="/routine">Routines</Link></div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div id="nutritionNavbarButton" className="navbar-link" data-targets="nutritionNavbar">Nutrition</div>
              <div id="nutritionNavbarItems" className="navbar-dropdown">
                <div className="navbar-item"><Link to="/diet">Diets</Link></div>
                <div className="navbar-item"><Link to="/meal">Meals</Link></div>
                <div className="navbar-item"><Link to='/food'>Foods</Link></div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div id="moreNavbarButton" className="navbar-link" data-targets="moreNavbar">More</div>
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
