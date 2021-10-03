import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClickAwayListener } from '@material-ui/core';
import { RequestTokenDialog } from '../../auth';

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  // create function for deactivating all dropdowns
  const deactivateDropdowns = () => {
    const fitnessButton = document.getElementById('fitnessNavbarButton');
    const nutritionButton = document.getElementById('nutritionNavbarButton');
    fitnessButton.nextElementSibling.style.display = 'none';
    nutritionButton.nextElementSibling.style.display = 'none';
  };

  useEffect(() => {
    // create listener for that shows and hides drop downs
    function buttonListener (event) {
      event.preventDefault();
      this.classList.toggle('active', true);
      const items = this.nextElementSibling;
      const isOpeningMenu = items.style.display === 'none';
      if (isOpeningMenu) {
        deactivateDropdowns();
      }
      items.style.display = isOpeningMenu ? 'block' : 'none';
      setIsMenuOpen(isOpeningMenu);
    }

    // add listeners to dropdowns
    const fitnessButton = document.getElementById('fitnessNavbarButton');
    const nutritionButton = document.getElementById('nutritionNavbarButton');
    fitnessButton.addEventListener('click', buttonListener);
    nutritionButton.addEventListener('click', buttonListener);

    // deactivate dropdowns on init
    deactivateDropdowns();
  }, []);

  const toggleHamburger = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    setIsToggleOpen((prev) => { return !prev; });
  };

  // Click handler for main burger menu.
  const handleBurgerClick = () => {
    toggleHamburger();
  };

  const handleAuthClick = () => {
    setIsAuthOpen(true);
  };

  const handleAuthClose = () => {
    setIsAuthOpen(false);
  };

  const handleClickAway = (_event) => {
    if (isToggleOpen) {
      toggleHamburger();
    }
    if (isMenuOpen) {
      deactivateDropdowns();
      setIsMenuOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
        <RequestTokenDialog isOpen={isAuthOpen} onClose={handleAuthClose} />
      </nav>
    </ClickAwayListener>
  );
};

export default Navbar;
