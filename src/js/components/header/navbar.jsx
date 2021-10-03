import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { RequestTokenDialog } from '../../auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // get elements to be dropdowns
    const fitnessButton = document.getElementById('fitnessNavbarButton');
    const nutritionButton = document.getElementById('nutritionNavbarButton');

    // create function for deactivating all dropdowns
    const deactivateDropdowns = () => {
      fitnessButton.nextElementSibling.style.display = 'none';
      nutritionButton.nextElementSibling.style.display = 'none';
    };

    // create listener for that shows and hides drop downs
    function buttonListener (event) {
      event.preventDefault();
      this.classList.toggle('active', true);
      const items = this.nextElementSibling;
      if (items.style.display === 'none') {
        deactivateDropdowns();
        items.style.display = 'block';
      } else {
        items.style.display = 'none';
      }
    };

    // add listeners to dropdowns
    fitnessButton.addEventListener('click', buttonListener);
    nutritionButton.addEventListener('click', buttonListener);

    // deactivate dropdowns on init
    deactivateDropdowns();
  }, []);

  // Click handler for main burger menu.
  const handleBurgerClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

  const handleAuthClick = () => {
    setIsOpen(true);
  };

  const handleAuthClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img alt="augmented-logo" height="28px" src="images/aug-logo.png"/>
          </div>
          <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="basicNavbar" onClick={handleBurgerClick}>
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
                {/* <div className="navbar-item"><Link to="/diet">Diets</Link></div>
                <div className="navbar-item"><Link to="/meal">Meals</Link></div>
                <div className="navbar-item"><Link to='/food'>Foods</Link></div> */}
                <div className="navbar-item"><Link to='/nutrient'>Caffeine</Link></div>
              </div>
            </div>
            <div className="navbar-item"><Link to="/help">Help</Link></div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* <div className="button is-light"><Link to="/signup"><strong>Sign up</strong></Link></div>
                <div className="button is-light"><Link to="/signin"><strong>Sign In</strong></Link></div> */}
                <div className="button is-light" onClick={handleAuthClick}><strong>Sign In</strong></div>
              </div>
            </div>
          </div>
        </div>
        <RequestTokenDialog isOpen={isOpen} onClose={handleAuthClose} />
      </nav>
    </Fragment>
  );
};

export default Navbar;
