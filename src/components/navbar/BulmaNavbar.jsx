import React, {Component} from 'react';
import NavbarBurger from './NavbarBurger';
import NavbarItems from './NavbarItems';
import '../../styles/css/bulma.css';

class BulmaNavbar extends Component {

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <NavbarBurger />
        <NavbarItems />
      </nav>
    );
  }
}

export default BulmaNavbar;
