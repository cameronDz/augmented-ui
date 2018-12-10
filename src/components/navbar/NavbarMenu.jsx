import React, {Component} from 'react';
import NavbarStart from './NavbarStart';
import NavbarEnd from './NavbarEnd';

class NavbarMenu extends Component {

  render() {
    return (
      <div id="basicNavbar" className="navbar-menu">
        <NavbarStart />
        <NavbarEnd />
      </div>
    );
  }
}

export default NavbarMenu;
