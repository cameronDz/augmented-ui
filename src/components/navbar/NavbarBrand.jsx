import React, {Component} from 'react';
import '../../styles/css/bulma.css';

class NavbarBrand extends Component {

  handleClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  } 

  render() {
    return (
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="basicNavbar" onClick={this.handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span> 
          <span aria-hidden="true"></span>
        </a>
      </div>
    );
  }
}

export default NavbarBrand

