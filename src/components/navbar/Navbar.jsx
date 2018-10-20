import React, {Component} from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';
import '../../styles/css/bulma.css';

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
