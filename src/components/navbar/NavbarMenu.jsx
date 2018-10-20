import React, {Component} from 'react';
import NavbarStart from './NavbarStart';
import NavbarEnd from './NavbarEnd';
import '../../styles/css/bulma.css';

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
