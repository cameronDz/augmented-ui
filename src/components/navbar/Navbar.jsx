import React, {Component} from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <NavbarBrand />
        <NavbarMenu />
      </nav>
    );
  }
}

export default Navbar;
